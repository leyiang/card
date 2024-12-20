export function shuffle(array: any[]) {                // <-- ADDED ARGUMENT
    let seed = Number( localStorage.getItem("seed") ) ?? 132;
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(seedRandom(seed) * m--);        // <-- MODIFIED LINE

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        ++seed                                     // <-- ADDED LINE
    }
}

function seedRandom(seed: number) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// export function shuffle(array: any[]) {
//     let currentIndex = array.length;

//     // While there remain elements to shuffle...
//     while (currentIndex != 0) {

//         // Pick a remaining element...
//         let randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // And swap it with the current element.
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }
// }

export function getRandomItem(arr: any[]) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

export function cardAns(question = "", ans = "") {
    return [
        `${question}=?`,
        `${question}=${ans}`,
    ]
}

export function cardAsk(question = "", correct = false, ans = "") {
    return [
        `请判断真假: \\ ${question}`,
        `
            ${correct ? "正确的!" : "错误!"}  \\
            ${correct ? question : ans}
        `,
    ]
}

export function withGap(contentList = [] as string[], gap = "\\:\\:") {
    return contentList.join(gap);
}

export function withLineBreak(contentList = [] as string[], lineBreakCount = 1) {
    const lineBreaks = Array(lineBreakCount).fill("\\\\").join("");
    return contentList.join(lineBreaks);
}


export function intQues(expr = "", ans = "") {
    return [
        `\int ${expr} dx=?`,
        `\int ${expr} dx=${ans}+C`,
    ];
}