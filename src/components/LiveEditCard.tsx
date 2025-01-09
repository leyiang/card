import { useEffect, useState } from "react";
import { Card as CardDisplay } from "./Card";
import { useEventListener } from "ahooks";
import { Card, iCard } from "../models/Card";
import { Content, ContentType } from "../models/Content";
import { api } from "../axios-instrance";

interface LiveEditCardProps {
	onSave(card: iCard): void;
	defaultCard?: iCard;
}

// Add type for WebSocket messages
interface WSMessage {
	type: 'file_change';
	content: string;
}

export function LiveEditCard({ onSave, defaultCard }: LiveEditCardProps) {
	const [showEditor, setShowEditor] = useState(false);
	const [card, setCard] = useState<Card>(Card.GetNewCard());
	const [content, setContent] = useState<Content>(Content.GetNewContent(""));
	const [pointer, setPointer] = useState(0);
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
		const currentContent = card.getContent(pointer);
		if (currentContent) {
			setContent(currentContent);
		}
	}, [pointer, card]);

	// Update textarea value when content changes
	useEffect(() => {
		if (content) {
			setTextareaValue(getCombinedContent(content));
			sendContentUpdate(content);
		}
	}, [content]);

	const [textareaValue, setTextareaValue] = useState("");

	function updateContentFromText(newValue: string) {
		setTextareaValue(newValue);

		const lines = newValue.split('\n');
		const firstLine = lines[0];
		
		// Check if first line is a type declaration
		const isTypeLine = /^\/\/ type=\w+$/.test(firstLine);
		
		// Get content based on whether first line is type declaration
		const newContent = isTypeLine 
			? lines.slice(1).join('\n')
			: newValue;

		// Update content
		const updatedContent = Content.GetNewContent(newContent);
		Object.assign(updatedContent, content);
		updatedContent.content = newContent;

		// If type line exists and is valid, update the type
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

		// Update on server
		return api.patch(`/content/${content.id}`, {
			content: newContent,
			content_type: updatedContent.content_type
		});
	}

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		const newValue = e.target.value;
		updateContentFromText(newValue).catch(error => {
			console.error('Failed to update content:', error);
		});
	}

	// Update select handler to also update textarea
	function handleTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
		const type = e.target.value as ContentType;
		const contentId = content.id;

		const newContent = Content.GetNewContent(content.content);
		Object.assign(newContent, content);
		newContent.content_type = type;
		setContent(newContent);

		const newCard = Card.GetNewCard();
		Object.assign(newCard, card);
		newCard.updateContentById(content.id, newContent);
		setCard(newCard);

		try {
			api.patch(`/content/${contentId}`, {
				content_type: type
			});
		} catch (error) {
			console.error('Failed to update content type:', error);
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

	useEventListener("keydown", e => {
		if (e.altKey) {
			if (e.key === "s") {
				onSave(Card.toJSON(card));
			}

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
		<div className="container px-4">
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
						onChange={handleChange}
						onKeyDown={handleKeydown}
					/>
				</div>

				<div className={`flex-1 ${showEditor ? 'hidden md:block' : ''}`}>
					<CardDisplay content={content} />
				</div>
			</div>
		</div>
	);
}