export function shuffle(array: any[]) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

export function getRandomItem(arr: any[]) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

export function cardAns(question="", ans="") {
    return [
        `${ question }=?`,
        `${ question }=${ ans }`,
    ]
}

export function cardAsk(question="", correct=false, ans="") {
    return [
        `请判断真假: \\ ${ question }`,
        `
            ${ correct ? "正确的!" : "错误!" }  \\
            ${ correct ? question : ans }
        `,
    ]
}

export function withGap(contentList=[] as string[], gap="\\:\\:") {
    return contentList.join( gap );
}

export function withLineBreak(contentList=[] as string[], lineBreakCount=1) {
    const lineBreaks = Array( lineBreakCount ).fill("\\\\").join("");
    return contentList.join( lineBreaks );
}