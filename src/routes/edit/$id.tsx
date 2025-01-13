import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { LiveEditCard } from '../../components/LiveEditCard';
import { useEffect, useState } from 'react';
import { api } from '../../axios-instrance';
import { Card, iCard} from '../../models/Card';

export const Route = createFileRoute('/edit/$id')({
	component: EditRoute,
	validateSearch: (search: Record<string, unknown>) => {
		return {
			index: search.index ? parseInt(search.index as string) : 0
		};
	}
});

function EditRoute() {
	const { id } = Route.useParams();
	const search = useSearch({ from: '/edit/$id' });
	const [card, setCard] = useState<Card | null>(null);

	useEffect(() => {
		api.get(`/card/${id}`).then(res => {
			const loadedCard = Card.Load(res.data.data);
			setCard(loadedCard);
		});
	}, [id]);

	if (!card) return null;

	function handleSave(card: iCard) {
		return api.patch(`/card/${id}`, {
			contents: card.contents
		});
	}

	return (
		<LiveEditCard 
			defaultCard={card} 
			defaultContentIndex={search.index}
			onSave={handleSave}
			editMode="edit"
		/>
	);
}