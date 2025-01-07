import { createFileRoute } from '@tanstack/react-router'
import { LiveEditCard } from '../../components/LiveEditCard';
import { useEffect, useState } from 'react';
import { api } from '../../axios-instrance';
import { iCard } from '../../models/Card';

export const Route = createFileRoute('/edit/$id')({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams()
	const [card, setCard] = useState<iCard | null>(null);

	function handleSave(card: iCard) {
		return api.patch(`/card/${id}`, {
			contents: card.contents
		})
			.then(response => {
				console.log('Card updated successfully:', response.data);
				return response.data;
			})
			.catch(error => {
				console.error('Error updating card:', error);
				throw error;
			});
	}

	useEffect(() => {
		api.get("/card/" + id).then(r => {
			setCard(r.data.data);
		});
	}, [id]);

	return (
		<div>
			<h1 className='text-4xl font-bold'>修改卡片</h1>
			
			<LiveEditCard
				defaultCard={card}
				onSave={handleSave}
			/>
		</div>
	)
}