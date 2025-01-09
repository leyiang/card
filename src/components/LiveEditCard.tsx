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

export function LiveEditCard({ onSave, defaultCard }: LiveEditCardProps) {
	const [card, setCard] = useState<Card>(Card.GetNewCard());
	const [content, setContent] = useState<Content>(Content.GetNewContent(""));
	const [pointer, setPointer] = useState(0);

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
		}
	}, [content]);

	const [textareaValue, setTextareaValue] = useState("");

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		const newValue = e.target.value;
		setTextareaValue(newValue);

		const lines = newValue.split('\n');
		const firstLine = lines[0];
		
		// Check if first line is a type declaration
		const isTypeLine = /^\/\/ type=\w+$/.test(firstLine);
		
		// Get content based on whether first line is type declaration
		const newContent = isTypeLine 
			? lines.slice(1).join('\n')
			: newValue;

		// Check if real content changed
		if (newContent !== content.content) {
			// Update content regardless of type validity
			const updatedContent = Content.GetNewContent(newContent);
			Object.assign(updatedContent, content);
			updatedContent.content = newContent;
			setContent(updatedContent);

			const newCard = Card.GetNewCard();
			Object.assign(newCard, card);
			newCard.updateContentById(content.id, updatedContent);
			setCard(newCard);

			// Update content on server
			try {
				api.patch(`/content/${content.id}`, {
					content: newContent
				});
			} catch (error) {
				console.error('Failed to update content:', error);
			}
		}

		// Only check type if first line is a type declaration
		if (isTypeLine) {
			const currentTypeLine = getTypeDeclarationLine(content.content_type);
			if (firstLine !== currentTypeLine) {
				const newType = extractType(firstLine);
				if (newType && newType !== content.content_type) {
					// Only update type if it's valid and different
					const updatedContent = Content.GetNewContent(content.content);
					Object.assign(updatedContent, content);
					updatedContent.content_type = newType;
					setContent(updatedContent);

					const newCard = Card.GetNewCard();
					Object.assign(newCard, card);
					newCard.updateContentById(content.id, updatedContent);
					setCard(newCard);

					// Update type on server
					try {
						api.patch(`/content/${content.id}`, {
							content_type: newType
						});
					} catch (error) {
						console.error('Failed to update content type:', error);
					}
				}
			}
		}
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

		// Update textarea with new type line
		setTextareaValue(getCombinedContent(newContent));

		try {
			api.patch(`/content/${contentId}`, {
				content_type: type
			});
		} catch (error) {
			console.error('Failed to update content type:', error);
		}
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
		}
	});

	return (
		<div>
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
			</div>
			<div className="flex">
				<textarea
					name="" id=""
					className="border-4 rounded-md w-64 block mr-4"
					style={{
						width: "600px",
						height: "500px"
					}}
					value={textareaValue}
					onChange={handleChange}
					onKeyDown={handleKeydown}
				/>

				<CardDisplay content={content} />
			</div>
		</div>
	);
}