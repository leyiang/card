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

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		const { value } = e.target;

		const newCard = Card.GetNewCard();
		Object.assign(newCard, card);
		newCard.updateContent(pointer, value);
		
		content.content = value;
		setContent(content);
		setCard(newCard);
	}

	useEffect(() => {
		const content = card.getContent(pointer);
		if( content ) {
			setContent(content);
		}
	}, [pointer, card]);

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
					value={content.content}
					onChange={handleChange}
					onKeyDown={handleKeydown}
				/>

				<CardDisplay content={content} />
			</div>
		</div>
	);
}