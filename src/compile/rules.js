import { injectLimit } from "./limit";

export const funcRules = {
    mat2: {
        reg: /mat2\(([^,]+),([^,]+),([^,]+),([^,)]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\\\ %3 & %4 \\end{bmatrix}`,
    },

    mat2x3: {
        reg: /mat2x3\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\\\ %3 & %4 \\\\ %5 & %6 \\end{bmatrix}`,
    },

    mat3: {
        reg: /mat3\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,)]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 & %3 \\\\ %4 & %5 & %6 \\\\ %7 & %8 & %9 \\end{bmatrix}`,
    },

    vec: {
        reg: /vec\(([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 \\\\ %2 \\end{bmatrix}`,
    },
    
    vecRow: {
        reg: /vecRow\(([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\end{bmatrix}`,
    },

    ddxn: { reg: /\$ddxn\(([^(),]+)(?:,([^()]+)\))?/g, to: `\\frac{d^{%1}%2}{dx^{%1}}` },
    ddx: { reg: /\$ddx/g, to: `\\frac{d}{dx} ` },

    theta: { reg: /\$th/g, to: `\\theta` },
    delta: { reg: /\$d/g, to: `\\delta` },
    Delta: { reg: /\$D/g, to: `\\Delta ` },
    epsilon: { reg: /\$e/g, to: `\\epsilon` },

    text: { reg: /\$t\(([^()]+)\)/g, to: `\\textrm{%1}` },
}

injectLimit( funcRules );