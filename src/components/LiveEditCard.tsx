import { useEffect, useState, useCallback } from "react";
import { useEventListener } from "ahooks";
import { Card } from "../models/Card";
import { Content, ContentType } from "../models/Content";
import { RenderContent } from "./RenderContent";
import { Spinner } from "./Spinner";
import debounce from 'lodash/debounce';

/**
 * TODO: 添加 onSave
 * onSave 因为 创建、编辑 都用了这个组件
 * 它们的保存是不同的
 */
interface LiveEditCardProps {
	defaultCard?: Card;
	defaultContentIndex?: number;
	onSave: (card: Card) => Promise<any>;
	editMode?: 'create' | 'edit';
}

// Add type for WebSocket messages
interface WSMessage {
	type: 'file_change';
	content: string;
}

function StatusIndicator({ status }: { status: 'idle' | 'saving' | 'saved' | 'error' }) {
	if (status === 'idle') return null;

	const statusConfig = {
		saving: {
			icon: <Spinner className="w-4 h-4" />,
			text: 'Saving',
			color: 'text-blue-600'
		},
		saved: {
			icon: (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
				</svg>
			),
			text: 'Saved!',
			color: 'text-green-600'
		},
		error: {
			icon: (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			),
			text: 'Failed to save',
			color: 'text-red-600'
		}
	};

	const config = statusConfig[status];
	if (!config) return null;

	return (
		<div className={`flex items-center gap-2 ${config.color}`}>
			{config.icon}
			<span>{config.text}</span>
		</div>
	);
}

export function LiveEditCard({ 
	defaultCard,
	defaultContentIndex = 0,
	onSave,
	editMode = 'edit'
}: LiveEditCardProps) {
	const [showEditor, setShowEditor] = useState(false);
	const [card, setCard] = useState<Card>(Card.GetNewCard());
	const [content, setContent] = useState<Content>(Content.GetNewContent(""));
	const [pointer, setPointer] = useState(defaultContentIndex);
	const [showWsStatus, setShowWsStatus] = useState(false);
	const [wsStatus, setWsStatus] = useState<'disconnected' | 'connected' | 'error'>('disconnected');
	const [ws, setWs] = useState<WebSocket | null>(null);

	useEffect(() => {
		if (!defaultCard) return;

		setCard(
			Card.Load(defaultCard)
		);
	}, [defaultCard]);

	function addCard() {
		const newCard = Card.GetNewCard();
		Object.assign(newCard, card);
		newCard.addContent();
		setCard(newCard);
		setPointer(newCard.length - 1);
	}

	function handleKeydown(e: React.KeyboardEvent) {
		if (e.key === "Enter" && e.altKey) {
			addCard();
		}
	}

	// Helper function to generate type declaration line
	function getTypeDeclarationLine(type: ContentType): string {
		return `// type=${type}`;
	}

	// Helper to combine type line and content
	function getCombinedContent(content: Content): string {
		return `${getTypeDeclarationLine(content.content_type)}\n${content.content}`;
	}
	// Helper to extract and validate type from type line
	function extractType(typeLine: string): ContentType | null {
		const match = typeLine.match(/^\/\/ type=(\w+)$/);
		if (!match) return null;

		const type = match[1].toLowerCase();
		if (Object.values(ContentType).includes(type as ContentType)) {
			return type as ContentType;
		}
		return null;
	}

	useEffect(() => {
		setPointer(defaultContentIndex);
	}, [defaultContentIndex]);

	useEffect(() => {
		const currentContent = card.getContent(pointer);
		if (currentContent) {
			setContent(currentContent);
		}
	}, [pointer, card]);

	useEffect(() => {
		console.log("GGG", editMode);
		
		if( editMode == "edit" ) {
			const location = window.location;
			const search = new URLSearchParams( location.search );
			search.set("index", pointer.toString());

			var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + search.toString();
			window.history.pushState({path:newurl},'',newurl);
		}
	}, [ pointer ]);

	// Update textarea value when content changes
	useEffect(() => {
		if (content) {
			setTextareaValue(getCombinedContent(content));
			sendContentUpdate(content);
		}
	}, [content]);

	const [textareaValue, setTextareaValue] = useState("");

	// Create debounced save function
	const debouncedSave = useCallback(
		debounce(async (cardToSave: Card) => {
			try {
				await onSave?.(cardToSave);
			} catch (error) {
				console.error('Failed to save content:', error);
				throw error;
			}
		}, 500),  // 1 second delay
		[onSave]
	);

	// Cleanup debounce on unmount
	useEffect(() => {
		return () => {
			debouncedSave.cancel();
		};
	}, [debouncedSave]);

	function updateContentFromText(newValue: string) {
		setTextareaValue(newValue);

		const lines = newValue.split('\n');
		const firstLine = lines[0];
		
		const isTypeLine = /^\/\/ type=\w+$/.test(firstLine);
		
		const newContent = isTypeLine 
			? lines.slice(1).join('\n')
			: newValue;

		const updatedContent = Content.GetNewContent(newContent);
		Object.assign(updatedContent, content);
		updatedContent.content = newContent;

		if (isTypeLine) {
			const newType = extractType(firstLine);
			if (newType) {
				updatedContent.content_type = newType;
			}
		}

		setContent(updatedContent);

		const newCard = Card.GetNewCard();
		Object.assign(newCard, card);
		newCard.updateContentById(content.id, updatedContent);
		setCard(newCard);

		// Only auto-save in edit mode with debounce
		if (editMode === 'edit') {
			debouncedSave(newCard);
		}
	}

	// function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
	// 	const newValue = e.target.value;
	// 	(newValue)	}

	// Update select handler to also update textarea
	function handleTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
		const type = e.target.value as ContentType;
		
		const newContent = Content.GetNewContent(content.content);
		Object.assign(newContent, content);
		newContent.content_type = type;
		setContent(newContent);

		const newCard = Card.GetNewCard();
		Object.assign(newCard, card);
		newCard.updateContentById(content.id, newContent);
		setCard(newCard);

		// Only auto-save in edit mode
		if (editMode === 'edit') {
			handleSave();
		}
	}

	function encodeContentForUrl(content: Content): string {
		// Combine type line and content
		const fullContent = getCombinedContent(content);
		
		// First URL encode to handle UTF-8 characters
		const urlEncoded = encodeURIComponent(fullContent);
		
		// Convert to base64 and make it URL safe
		const base64 = btoa(urlEncoded);
		
		return base64;
	}

	// Add function to send content updates via WebSocket
	function sendContentUpdate(content: Content) {
		if (ws && ws.readyState === WebSocket.OPEN) {
			const fullContent = getCombinedContent(content);
			ws.send(JSON.stringify({
				type: 'content_update',
				content: fullContent
			}));
		}
	}

	// Modify WebSocket connection handler to store the connection
	async function tryConnectWebSocket() {
		const ws = new WebSocket('ws://localhost:1234');
		setWs(ws);
		setShowWsStatus(true); // Show status when attempting connection

		ws.onopen = () => {
			console.log('Connected to WebSocket server');
			setWsStatus('connected');
		};

		ws.onclose = () => {
			console.log('Disconnected from WebSocket server');
			setWsStatus('disconnected');
			setShowWsStatus(false); // Hide status when server closes connection
		};

		ws.onerror = (error) => {
			console.error('WebSocket error:', error);
			setWsStatus('error');
		};

		ws.onmessage = (event) => {
			console.log('Received message:', event.data);
			
			try {
				const message: WSMessage = JSON.parse(event.data);
				
				if (message.type === 'file_change') {
					updateContentFromText(message.content).catch(error => {
						console.error('Failed to update content from WebSocket:', error);
					});
				}
			} catch (error) {
				console.error('Error processing WebSocket message:', error);
			}
		};

		return ws;
	}

	// Update handleSave for manual saves (like keyboard shortcuts)
	async function handleSave() {
		debouncedSave.cancel();  // Cancel any pending debounced saves
		try {
			await onSave?.(card);
		} catch (error) {
			console.error('Failed to save content:', error);
			throw error;
		}
	}

	useEventListener("keydown", e => {
		if( e.key === "s" ) {
			if( e.altKey || e.ctrlKey ) { 
				e.preventDefault();
				e.stopPropagation();

				const content = card.getContent(pointer);

				if( content ) {
					handleSave(content.toJSON());
				}

				return false;
			}
		}

		if (e.altKey) {
			if (e.key === "h") {
				if (pointer <= 0) return;
				setPointer(pointer - 1);
			}

			if (e.key === "l") {
				if (pointer >= card.length - 1) return;
				setPointer(pointer + 1);
			}

			if (e.key === "e") {
				e.preventDefault();

				const encodedContent = encodeContentForUrl(content);
				window.location.href = `myapp://nvim/${encodedContent}`;
				
				// Wait 300ms before attempting WebSocket connection
				setTimeout(() => {
					tryConnectWebSocket();
				}, 300);
			}
		}
	});

	return (
		<div className="container px-4 relative">
			<div className="flex items-center gap-4 mb-4">
				<span>({pointer + 1} / {card.length})</span>
				<select
					value={content.content_type || ContentType.Text}
					onChange={handleTypeChange}
					className="border rounded px-2 py-1"
				>
					{Object.values(ContentType).map(type => (
						<option key={type} value={type}>
							{type.charAt(0).toUpperCase() + type.slice(1)}
						</option>
					))}
				</select>
				<button 
					className="md:hidden ml-auto px-3 py-1 bg-blue-500 text-white rounded"
					onClick={() => setShowEditor(prev => !prev)}
				>
					{showEditor ? 'Show Preview' : 'Show Editor'}
				</button>
				{showWsStatus && (
					<div className="ml-auto flex items-center gap-2">
						<span className={`px-2 py-1 rounded text-sm ${
							wsStatus === 'connected' ? 'bg-green-100 text-green-800' :
							wsStatus === 'error' ? 'bg-red-100 text-red-800' :
							'bg-gray-100 text-gray-800'
						}`}>
							{wsStatus === 'connected' ? 'Connected' : 'Disconnected'}
						</span>
					</div>
				)}
			</div>
			<div className="flex flex-col md:flex-row gap-4">
				<div className={`flex-1 ${!showEditor ? 'hidden md:block' : ''}`}>
					<textarea
						name="" id=""
						className="border-4 rounded-md"
						style={{
							width: "500px",
							height: "500px"
						}}
						value={textareaValue}
						onChange={(e) => updateContentFromText(e.target.value)}
						onKeyDown={handleKeydown}
						data-cy="live-edit-textarea"
					/>
				</div>

				<div className={`flex-1 ${showEditor ? 'hidden md:block' : ''}`}>
					<RenderContent content={content} />
				</div>
			</div>
		</div>
	);
}