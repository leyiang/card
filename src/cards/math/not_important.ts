import { ICardStack } from "../../types/card-type";

export default {
    id: "math_not_important",
    label: "知悉即可",

    cards: [
        [
            `lims(\infty,n)(1+inv(n))^n=? (推导过程)`,
            `
                原极限中有变化的指数,尝试用\ln解决 \\
                lims(\infty,n)n\ln(1+inv(n)) \\
                令t=inv(n),n\to\infty,t\to 0 \\
                lims(0,t)inv(t)\ln(1+t), 配成\ln(x)的导数形式 \\
                =lims(0,t)\frac{\ln(1+t)+\ln(1)}{t}=inv(dt,d) \ln t|_{t=1} \\
                lims(\infty,n)n\ln(1+inv(n))=inv(t)|_{t=1}=1 \\
                lims(\infty,n)(1+inv(n))^n=e^{lims(\infty,n)n\ln(1+inv(n))}=e
            `
        ],
        [
            `$ddx x^x=? (推导过程)`,
            `u=x^x, \:\: (\ln u)'=\frac{u'}{u} \\
            \ln u=\ln x^x=x\ln x \\
            (\ln u)'=\ln x+1=\frac{u'}{u} \\
            u'=(x^x)'=u(\ln x+1)=x^x(\ln x+1) \\
            (x^x)'=x^x(\ln x+1)`
        ],

        [
            `如何推导出 $ddx \ln x?`,
            `u=\ln x \\ e^u=x \\ $ddx e^u=$ddx x \\ \frac{d}{du}e^u $ddx u=1 \\ $ddx \ln x=\frac{1}{e^u}=\frac{1}{x}`
        ],

        [
            `$ddx a^x=?`, `$ddx a^x=\ln(a)a^x \\ 如何推导出$ddx a^x?`,
            `a^x=e^{\ln a^x}=e^{x\ln a} \\
            $ddx a^x=$ddx e^{x\ln a} \\
            对右侧使用链式法则($t(Chain Rule)) \\
            $ddx e^{x\ln a}=\ln(a)e^{x\ln a}=\ln(a)a^x`
        ],
        [
            `列出商的极限的情况 \\ lim(a,L), lim(a,M,g) \\\\ lims(a)\frac{f(x)}{g(x)}=?`,
            `lim(a,L), lim(a,M,g) \\
            lims(a)\frac{f(x)}{g(x)}=case2c(
                0, L=0 $t( and ) M\neq0,
                DNE, M=0 \textrm{ and } L\neq0,
                \textrm{看情况}, M=0 \textrm{ and } L=0
            )`,
        ],
[
            `image:non_derivative.png(点-1处，为什么导数不存在?)`,
            `image:non_derivative.png(在x=-1的左边,斜率是正的)`,
            `image:non_derivative.png(在x=-1的右边,斜率是负的)`,
            `image:non_derivative.png(想像一下导函数的图像)`,
            `image:non_derivative_2.png(导函数x=-1处的极限都不存在)`,
        ],
        [
            `不用计算器 \\ \sin(\arctan(\frac{3}{4}))=?`,
            `image:sin_arctan.png(\arctan要求的是(\frac{对边}{邻边}=\frac{3}{4}的角$th))`,
            `image:sin_arctan.png(\sin要求的是角$th对应的\frac{对边}{斜边}, 也就是\frac{3}{5})`,
        ],
        [
            `如何通过反函数导数公式: \\ g'(x)=\frac{1}{f'(g(x))}, 推导出\arcsin'(x)`,
            `\arcsin'(x)=\frac{1}{\sin'(\arcsin(x))} \\
                =\frac{1}{\cos(\arcsin(x))} \\
                \sin 函数输入一个角度$th, 得到一个比值 \\
                \sin($th)=x (比值) \\
                其反函数\arcsin输入一个比值, 得到一个角度$th \\
                \arcsin(x)=$th
            `,
            `image:arcsin_derivative_process.png(\sin($th)=x, 构造出一个三角形 \\ \cos($th)=\sqrt{1-x^2})`,
            `\arcsin'(x)=\frac{1}{\sqrt{1-x^2}} \\ x\in (-1, 1) \\ \arcsin的定义域为 [-1, 1] \\ 为什么端点上没有导数?`,
            `image:arcsin_no_deriva.png(端点处切线为垂直于x轴)`
        ],
    ]
} as ICardStack;