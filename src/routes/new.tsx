import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEventListener } from 'ahooks';
import { api } from '../axios-instrance';
import { LiveEditCard } from '../components/LiveEditCard';
import { Card, iCard } from '../models/Card';

export const Route = createFileRoute('/new')({
	component: RouteComponent,
})

function RouteComponent() {
	const navigate = useNavigate();

	function handleSave( card: Card ) {
		return api.post("/card", {
			content: card.rawContent
		}).then(res => {
			const id = res.data.data.id;

			navigate({
				to: "/edit/$id",
				params: {
					id: id.toString()
				}
			});
		});
	}

	return (
		<div>
			<h1 className='text-4xl font-bold'>创建卡片</h1>
			<LiveEditCard
				onSave={ handleSave }
				editMode="create"
			/>
		</div>
	)
}
