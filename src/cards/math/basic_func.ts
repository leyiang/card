import { ICardStack } from "../../types/card-type";

export default {
    id: "math_basic_func",
    label: "基本初等函数",

    cards: [
        // [``, ``],
        // [``, ``],
        // [``, ``],
        // [``, ``],
        // [``, ``],
        // [
        //    ``,
        //     ``
        // ],


        [
            `\sin x, \tan x, \arcsin x, \arctan x \\ \ln \frac{1-x}{1+x}, \ln(x+\sqrt{1+x^2}) \\ f(x)-f(-x), \frac{e^x-1}{e^x+1} \\ x^2, |x|, \cos x, f(x)+f(-x) \\ 奇偶性判断`,
            `上三行是奇函数、最后一行是偶函数`
        ],

        [
            `对数函数性质 \\ (单调性、定义域、值域)`,
            `\log_a{x} \\
            底数a>0且a\neq1 \\
            a\in(0,1)为减函数 \\
            a>1时为增函数 \\
            定义域(0, +\infty), 值域R`,
            "对数函数图像",
            "image:math_log_graph.png",
            `$ddx \log_a{x}=?`,
            `\frac{1}{x\ln(a)}`
        ],

        [
            `指数函数性质 \\ (单调性、定义域、值域)`,
            `a^x \\
            底数a>0且a\neq1 \\
            a\in(0,1)为减函数 \\
            a>1时为增函数 \\
            定义域\mathbb{R}, 值域(0, +\infty)`,
            "指数函数图像", "image:math_exp_graph.png",
            `$ddx a^x=?`, `$ddx a^x=a^x\ln a`
        ],
 
            //  \\ (单调性、定义域、值域、周期、奇偶性),
        [
            `\sin x单调性`,
            `无单调性`,
            `\sin x周期`,
            `周期为2\pi`,
            `\sin x 奇偶性`,
            `奇函数 \\ \sin(-x)=-\sin(x)`,
            `\sin x \\ 定义域、值域`,
            `定义域:$R \\ 值域[-1, 1]`,
            `\sin 是哪两条边的比值?`,
            `\frac{y}{r}=\frac{对边}{斜边}`,
            `\sin图像`, `image:math_sin_graph.png`,
            `$ddx \sin(x)=?`, `$ddx \sin(x)=\cos(x)`
        ],

        [
            `\cos x单调性`,
            `无单调性`,
            `\cos x周期`,
            `周期为2\pi`,
            `\cos x 奇偶性`,
            `偶函数 \\ \cos(-x)=\cos(x)`,
            `\cos x \\ 定义域、值域`,
            `定义域:$R \\ 值域[-1, 1]`,
            `\cos 是哪两条边的比值?`,
            `\frac{x}{r}=\frac{邻边}{斜边}`,
            `\cos图像`, `image:math_cos_graph.png`,
            `$ddx \cos(x)=?`, `$ddx \cos(x)=-\sin(x)`
        ],
        
        [
            `\tan x单调性`,
            `(2k\pi-\frac{\pi}{2}, 2k\pi+\frac{\pi}{2})上单调增`,
            `\tan x周期`,
            `周期为\pi`,
            `\tan x 奇偶性`,
            `奇函数 \\ \tan(-x)=-\tan(x)`,
            `\tan x \\ 定义域、值域`,
            `定义域:x\neq k\pi+\frac{\pi}{2} \\ 值域: $R`,
            `\tan 是哪两条边的比值? \\ 用\sin和\cos表示`,
            `\frac{y}{x}=\frac{对边}{邻边}=\frac{\sin x}{\cos x}`,
            `\tan图像`, `image:math_tan_graph.png`,
            `$ddx \tan(x)=?`, `$ddx \tan(x)=\sec^2(x)`
        ],

        [
            `\cot x周期`,
            `周期为\pi`,
            `\cot x 奇偶性`,
            `奇函数 \\ \cot(-x)=-\cot(x)`,
            `\cot x \\ 定义域、值域`,
            `定义域:x\neq k\pi \\ 值域: $R`,
            `\cot 是哪两条边的比值? \\ 用\sin和\cos表示`,
            `\frac{x}{y}=\frac{邻边}{对边}=\frac{\cos x}{\sin x}`,
            `\cot图像`, `image:math_cot_graph.png`,
            `$ddx \cot(x)=?`, `$ddx \cot(x)=-\csc^2(x)`
        ],

        [
            `\sec x周期`,
            `周期为2\pi`,
            `\sec x 奇偶性`,
            `偶函数 \\ \sec(-x)=\sec(x)`,
            `\sec x \\ 定义域、值域`,
            `定义域:x\neq k\pi+\frac{\pi}{2} \\ 值域: (-\infty,-1] \cup [1,+\infty)`,
            `\sec 是哪两条边的比值? \\ 用\sin和\cos表示`,
            `\frac{r}{x}=\frac{斜边}{邻边}=\frac{1}{\cos x}`,
            `\sec图像`, `image:math_sec_graph.svg`,
            `$ddx \sec(x)=?`, `$ddx \sec(x)=\sec x\tan x`
        ],

        [
            `\csc x周期`,
            `周期为2\pi`,
            `\csc x 奇偶性`,
            `奇函数 \\ \csc(-x)=-\csc(x)`,
            `\csc x \\ 定义域、值域`,
            `定义域:x\neq k\pi \\ 值域: (-\infty,-1] \cup [1,+\infty)`,
            `\csc 是哪两条边的比值? \\ 用\sin和\cos表示`,
            `\frac{r}{y}=\frac{斜边}{对边}=\frac{1}{\sin x}`,
            `\csc图像`, `image:math_csc_graph.png`,
            `$ddx \csc(x)=?`, `$ddx \csc(x)=-\csc x\cot x`
        ],

        [
            `\csc^{-1} x 奇偶性`,
            `奇函数 \\ \csc^{-1}(-x)=-\csc^{-1}(x)`,
            `\csc^{-1} x \\ 定义域、值域`,
            `定义域:(-\infty, -1] \cup [1, \infty) \\ 值域: [-\frac{\pi}{2},\frac{\pi}{2}] \setminus \{0\}`,
            `\csc^{-1}图像`, `image:math_arccsc_graph.png`,
            `$ddx \csc^{-1}(x)=?`, `$ddx \csc^{-1}(x)=-\frac{1}{|x|\sqrt{x^2-1}}`,
            `\lim_{x \to +\infty}\csc^{-1}(x)=?`, `image:math_arccsc_graph.png(\lim_{x \to +\infty}\csc^{-1}(x)=0)`,
            `\lim_{x \to -\infty}\csc^{-1}(x)=?`, `image:math_arccsc_graph.png(\lim_{x \to -\infty}\csc^{-1}(x)=0)`,
        ],

        [
            `\cos^{-1} x 奇偶性`,
            `非奇非偶`,
            `\cos^{-1} x \\ 定义域、值域`,
            `定义域:[-1,1] \\ 值域: [0,\pi]`,
            `\cos^{-1}图像`, `image:math_arccos_graph.png`,
            `$ddx \cos^{-1}(x)=?`, `-\frac{1}{\sqrt{1-x^2}}`,
        ],

        [
            `\cot^{-1} x 奇偶性`,
            `非奇非偶`,
            `\cot^{-1} x \\ 定义域、值域`,
            `定义域:$R \\ 值域: (0,\pi)`,
            `\cot^{-1}图像`, `image:math_arccot_graph.png`,
            `$ddx \cot^{-1}(x)=?`, `-\frac{1}{1+x^2}`,
            `\lim_{x \to +\infty}\cot^{-1}(x)=?`, `image:math_arccot_graph.png(\lim_{x \to +\infty}\cot^{-1}(x)=0)`,
            `\lim_{x \to -\infty}\cot^{-1}(x)=?`, `image:math_arccot_graph.png(\lim_{x \to -\infty}\cot^{-1}(x)=\pi)`,
        ],

        [
            `\tan^{-1} x 奇偶性`,
            `奇函数 \\ \tan^{-1}(-x)=-\tan^{-1}(x)`,
            `\tan^{-1} x \\ 定义域、值域`,
            `定义域:$R \\ 值域: (-pinv(2),pinv(2))`,
            `\tan^{-1}图像`, `image:math_arctan_graph.png`,
            `$ddx \tan^{-1}(x)=?`, `inv(1+x^2)`,
            `\lim_{x \to +\infty}\tan^{-1}(x)=?`, `image:math_arctan_graph.png(\lim_{x \to +\infty}\tan^{-1}(x)=pinv(2))`,
            `\lim_{x \to -\infty}\tan^{-1}(x)=?`, `image:math_arctan_graph.png(\lim_{x \to -\infty}\tan^{-1}(x)=-pinv(2))`,
        ],

        [
            `\sec^{-1} x 奇偶性`,
            `非奇非偶`,
            `\sec^{-1} x \\ 定义域、值域`,
            `定义域:(-\infty, -1] \cup [1, \infty) \\ 值域: [0,\pi] \setminus \{pinv(2)\}`,
            `\sec^{-1}图像`, `image:math_arcsec_graph.png`,
            `$ddx \sec^{-1}(x)=?`, `\frac{1}{|x|\sqrt{x^2-1}}`,
            `\lim_{x \to +\infty}\sec^{-1}(x)=?`, `image:math_arcsec_graph.png(\lim_{x \to +\infty}\sec^{-1}(x)=pinv(2))`,
            `\lim_{x \to -\infty}\sec^{-1}(x)=?`, `image:math_arcsec_graph.png(\lim_{x \to -\infty}\sec^{-1}(x)=pinv(2))`,
        ],
         
        [
            `\sin^{-1} x 奇偶性`,
            `奇函数 \\ \sin^{-1}(-x)=-\sin^{-1}(x)`,
            `\sin^{-1} x \\ 定义域、值域`,
            `定义域:[-1, 1] \\ 值域: [-pinv(2), pinv(2)]`,
            `\sin^{-1}图像`, `image:math_arcsin_graph.png`,
            `$ddx \sin^{-1}(x)=?`, `\frac{1}{\sqrt{1-x^2}}`,
        ],

        [
            `\sin^{-1}(x) + \cos^{-1}(x)=?`,
            `image:math_arcsin_plus_arccos.png(\sin^{-1}(x) + \cos^{-1}(x)=pinv(2))`
        ],

        // ["$ddx  \\ln|x|","\\frac{1}{x}"],
        // ["$ddx  \\ln{(x)}", "\\frac{1}{x}"],
        // ["$ddx  \\log_{b}{(x)}", "\\frac{1}{x\\ln{(b)}}"],
        // ["$ddx  (b^x)", "b^x\\ln{(b)}"],
        // ["$ddx  (e^x)", "e^x"],
        // ["\\frac{dy}{dx}=ky意味着什么?", "y=Ae^{kx}, A为常数"],

        [`$ddx \sinh(x)=?`, `\cosh(x)`],
        [`$ddx \cosh(x)=?`, `\sinh(x)`],
        [`\cosh^2(x)-\sinh^2(x)=?`, `1`],
        [`\sinh(x)=?`, `\frac{e^x-e^{-x}}{2}`],
        [`\cosh(x)=?`, `\frac{e^x+e^{-x}}{2}`],


        // sin pi/2, pi, 3pi/2 2pi
        // cos pi/2, pi, 3pi/2 2pi
    ]
} as ICardStack;