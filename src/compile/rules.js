import { injectLimit } from "./limit";

export const funcRules = {
    mat2: {
        reg: /mat2\(([^,]+),([^,]+),([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\\\ %3 & %4 \\end{bmatrix}`,
    },

    mat2x3: {
        reg: /mat2x3\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\\\ %3 & %4 \\\\ %5 & %6 \\end{bmatrix}`,
    },
    vec: {
        reg: /vec\(([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 \\\\ %2 \\end{bmatrix}`,
    },
    
    vecRow: {
        reg: /vecRow\(([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\end{bmatrix}`,
    },

    ddx: { reg: /\$ddx/g, to: `\\frac{d}{dx} ` },
    delta: { reg: /\$d/g, to: `\\delta` },
    Delta: { reg: /\$D/g, to: `\\Delta ` },
    epsilon: { reg: /\$e/g, to: `\\epsilon` },
}

injectLimit( funcRules );