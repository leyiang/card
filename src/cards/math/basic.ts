import { ICardStack } from "../../types/card-type";

export default {
    id: "math-basic",
    label: "数学基础",

    cards: [
        [`\lim_{n \to \infty}{(1+\frac{x}{n})^n} \\ a \to b`, `e^x`],
        // [`\\lim_{h \\to 0}{(1+xh)^{\\frac{1}{h}}}`, "e^x"],
        // ["\\lim_{n \\to \\infty}{(1+\\frac{1}{n})^{n}}", "e"],
        // ["\\lim_{h \\to 0}{(1+h)^{\\frac{1}{h}}}", "e"],
        [`\frac{10}{4x} \approx 2^{12}`, "123"],
        ["image:linear_a2_2.png", "Ans"],
    ]
} as ICardStack;