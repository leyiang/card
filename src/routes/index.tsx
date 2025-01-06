import { createFileRoute } from '@tanstack/react-router'
import { ImportCards } from '../components/ImportCards'
import { CardGroup } from '../components/CardGroup'

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	return (
		<div className="page main-page">
			<ImportCards />
			<CardGroup />
		</div>
	)
}
