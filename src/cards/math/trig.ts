import { ICardStack } from "../../types/card-type";
import { cardAns, cardAsk, getRandomItem } from "../../utils/array";

export default {
    id: "math_trig",
    label: "三角函数",

    cards: [
        getRandomItem([
            cardAns(`\tan \pi`, "0"),
            cardAns(`\arctan 0`, "0"),
        ]),

        getRandomItem([
            [`\sin \pi=?`,`\sin \pi=0`],
            cardAns(`\arcsin (0)`, `k\pi \\\\ (0, \pi, 2\pi)`)
        ]),

        getRandomItem([
            [`\cos \pi=?`,`\cos \pi=-1`],
            cardAns(`\arccos (-1)`, `\pi`)
        ]),

        [
            `
                \arctan(x)+$t(arccot)(x)=? \\\\
                \arcsin(x)+\arccos(x)=? \\\\
                $t(arcsec)(x)+$t(arccsc)(x)=?
            `,
            `
                \arctan(x)+$t(arccot)(x)=pinv(2) \\\\
                \arcsin(x)+\arccos(x)=pinv(2) \\\\
                $t(arcsec)(x)+$t(arccsc)(x)=pinv(2)
            `,
        ],

        ["\\sin(A)\\cos(B)", "\\frac{1}{2}(\\sin(A-B)+\\sin(A+B))"],
        ["\\sin(A)\\sin(B)", "\\frac{1}{2}(\\cos(A-B)-\\cos(A+B))"],
        ["\\cos(A)\\cos(B)", "\\frac{1}{2}(\\cos(A-B)+\\cos(A+B))"],

        getRandomItem([
            // [
            //     "\\cos(2x)=?",
            //     `\cos^2(x)-\sin^2(x) \\\\
            //     1-2\sin^2(x) \\\\
            //     2\cos^2(x)-1 \\\\
            //     \frac{1-\tan^2(x)}{1+\tan^2(x)}`
            // ],

            [
                ...cardAsk(`\cos(2x)=\cos^2(x)-\sin^2(x)`, true),
                ...cardAsk(`\cos(2x)=1-2\sin^2(x)`, true),

                ...cardAsk(`\cos(2x)=2\cos^2(x)-1`, true),
                ...cardAsk(
                    `\cos(2x)=\frac{1+\tan^2(x)}{1-\tan^2(x)}`,
                    false,
                    `\cos(2x)=\frac{1-\tan^2(x)}{1+\tan^2(x)}`,
                ),
            ]
        ]),

            ["\\sin(2x)=?", "2\\sin(x)\\cos(x)"],
            ["\\sin^2(x)=?", "\\frac{1}{2}(1-\\cos(2x))"],

        ["\\cos^2(x)=?", "\\frac{1}{2}(1+\\cos(2x))"],
        ["描述三角函数的奇偶性", "\\cos和\\sec为偶函数,其余为奇"],

        getRandomItem([
            ["\\sin(\\frac{π}{6})", "\\frac {1}{2}"],
            cardAns(`\arcsin inv(2)`, `pinv(6)`)
        ]),
        ["\\sin(0)", "0"],
        ["\\sin(\\frac{π}{4})", "\\frac{\\sqrt{2}}{2}"],
        ["\\sin(\\frac{π}{3})", "\\frac{\\sqrt{3}}{2}"],
        ["\\sin(\\frac{π}{2})", "1"],
        ["\\cos(0)", "1"],
        ["\\cos(\\frac{π}{6})", "\\frac{\\sqrt{3}}{2}"],
        ["\\cos(\\frac{π}{4})", "\\frac{\\sqrt{2}}{2}"],
        ["\\cos(\\frac{π}{3})", "\\frac{1}{2}"],
        ["\\cos(\\frac{π}{2})", "0"],
        ["\\tan(0)", "0"],
        ["\\tan(\\frac{π}{6})", "\\frac{\\sqrt{3}}{3}"],
        ["\\tan(\\frac{π}{4})", "1"],
        ["\\tan(\\frac{π}{3})", "\\sqrt{3}"],
        ["\\tan(\\frac{π}{2})", "DNE"],

        ["\\sin(A+B)", "\\sin{A}\\cos{B} + \\sin{B}\\cos{A}"],
        ["\\cos(A+B)", "\\cos{A}\\cos{B} - \\sin{A}\\sin{B}"],
        ["\\cos^2(x)+\\sin^2(x)", "1"],
        ["1+\\tan^2(x)", "\\sec^2(x)"],

        getRandomItem([
            ["\\cot^2(x)+1", "\\csc^2(x)"],
            cardAsk(`\cot^2(x)+1=\csc^2(x)`, true),
            cardAsk(`\cot^2(x)+1=-\csc^2(x)`, false, `\cot^2(x)+1=+\csc^2(x)`)
        ]),

    ]
} as ICardStack;