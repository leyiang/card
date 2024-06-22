interface IRenderText {
    text: string;
}

export function RenderText({ text }: IRenderText ) {
    // Manually break by line-break
    // change \n with <br />
    const chunks = text.split("\\n");

    return (
        <article>
            {
                chunks.map((line, i) => (
                    <p key={"render-line-" + i}>{line}</p>
                ))
            }
        </article>
    )
}