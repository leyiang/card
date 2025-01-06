import { createFileRoute } from '@tanstack/react-router'
import { Card } from '../components/Card'
import { useEffect, useState } from 'react'
import { useEventListener } from 'ahooks';

export const Route = createFileRoute('/new')({
	component: RouteComponent,
})

function RouteComponent() {
	const [card, setCard] = useState<string[]>([ "" ]);
	const [face, setFace] = useState("");
	const [pointer, setPointer] = useState(0);

	function handleKeydown(e: React.KeyboardEvent) {
		if( e.key === "Enter" && e.altKey ) {
			addCard();
		}
	}

	function addCard() {
		card.push("");
		setPointer( pointer + 1);
	}

	function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		const { value } = e.target;

		card[ pointer ] = value;

		setFace( value );
		setCard( card );
	}

	useEffect(() => {
		setFace( card[pointer] );
	}, [ pointer ] );


	useEventListener("keydown", e => {
		if( e.key === "h" && e.altKey ) {
			if( pointer <= 0 ) return;

			setPointer( pointer - 1 );
		}

		if( e.key === "l" && e.altKey ) {
			if( pointer >= card.length - 1 ) return;
			setPointer( pointer + 1 );
		}
	});

	return (
		<div>
			<h1 className='text-4xl font-bold'>创建卡片</h1>
			<span>({ pointer+1 } / {card.length})</span>
			<div className="flex">
				<textarea
					name="" id=""
					className="border-4 rounded-md w-64 block mr-4"
					style={{
						width: "600px",
						height: "500px"
					}}
					value={ face }
					onChange={ handleChange }
					onKeyDown={ handleKeydown }
				/>

				<Card card={ [ face ] } />
			</div>
		</div>
	)
}
