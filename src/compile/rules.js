import { injectLimit } from "./limit";

export const funcRules = {
    mat2: {
        reg: /mat2\(([^,]+),([^,]+),([^,]+),([^,)]+)\)/g,
        // to: `\\begin{bmatrix} %1  &  %2 \\\\ %3 & %4 \\end{bmatrix}`,
        to: `\\begin{bmatrix} %1 & %2 \\\\ %3 & %4 \\end{bmatrix}`,
    },

    mat2p: {
        reg: /mat2p\(([^,]+),([^,]+),([^,]+),([^,)]+)\)/g,
        // to: `\\begin{bmatrix} %1  &  %2 \\\\ %3 & %4 \\end{bmatrix}`,
        to: `\\begin{pmatrix} %1 & %2 \\\\ %3 & %4 \\end{pmatrix}`,
    },

    mat2x3: {
        reg: /mat2x3\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\\\ %3 & %4 \\\\ %5 & %6 \\end{bmatrix}`,
    },

    mat3: {
        reg: /mat3\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,)]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 & %3 \\\\ %4 & %5 & %6 \\\\ %7 & %8 & %9 \\end{bmatrix}`,
    },

    vecp: {
        reg: /vecp\(([^,]+),([^,]+)\)/g,
        to: `\\begin{pmatrix} %1 \\\\ %2 \\end{pmatrix}`,
    },

    vec: {
        reg: /vec\(([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 \\\\ %2 \\end{bmatrix}`,
    },
    
    vecRow: {
        reg: /vecRow\(([^,]+),([^,]+)\)/g,
        to: `\\begin{bmatrix} %1 & %2 \\end{bmatrix}`,
    },

    det2: {
        reg: /det2\(([^()]+),([^()]+),([^()]+),([^()]+)\)/g,
        to: `\\begin{vmatrix} %1 & %2 \\\\ %3 & %4 \\end{vmatrix}`,
    },


    ddxn: { reg: /\$ddxn\(([^(),]+)(?:,([^()]+)\))?/g, to: `\\frac{d^{%1}%2}{dx^{%1}}` },
    ddx: { reg: /\$ddx/g, to: `\\frac{d}{dx} ` },
    ppx: { reg: /\$ppx/g, to: `\\frac{\\partial}{\\partial x} ` },
    ppy: { reg: /\$ppy/g, to: `\\frac{\\partial}{\\partial y} ` },

    theta: { reg: /\$th/g, to: `\\theta` },
    delta: { reg: /\$d/g, to: `\\delta` },
    alpha: { reg: /\$a/g, to: `\\alpha` },
    beta: { reg: /\$b/g, to: `\\beta` },
    Delta: { reg: /\$D/g, to: `\\Delta ` },
    epsilon: { reg: /\$e/g, to: `\\epsilon` },
    xi: { reg: /\$xi/g, to: `\\xi` },
    partial: { reg: /\$par/g, to: `\\partial` },
    sig: { reg: /\$sig/g, to: `\\sigma` },
    phi: { reg: /\$phi/g, to: `\\varphi` },
    times: { reg: /\$x/g, to: `\\times` },

    text: { reg: /\$t\(([^()]+)\)/g, to: `\\textrm{%1}` },
    r_set: { reg: /\$R/g, to: `\\mathbb{R}` },
    bold: { reg: /\*\(([^()]+)\)/g, to: `\\textbf{%1}` },

    // COmment equal
    // ceq: { reg: /ceq\(([^()]+)\)/g, to: `\\stackrel{\\text{%1}}{=}` },
    ceq: { reg: /ceq\(([^()]+)\)/g, to: `\\stackrel{%1}{=}` },

    neighbour: { reg: /Un\(([^,]+),([^,]+)\)/g, to: `\\mathring{U}(%1, %2)` },

    sim_infinite_small: {
        reg: /simInfQ\(([^`]+)\)/g,
        to: `等价无穷小(x\\to0时) \\\\ %1 \\sim \\: ?`,
    }
}

injectLimit( funcRules );