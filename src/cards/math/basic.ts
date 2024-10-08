import { ICardStack } from "../../types/card-type";

export default {
    id: "math_basic",
    label: "数学基础",

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
        // [
        //    ``,
        //     ``
        // ],

        [
           `e^x与1+x的不等式关系`,
            `e^x \geq 1+x`
        ],

        [
           `计算lims(+\infty)\ln(1+e^x)-x的极限`,
            `法1: 提个x出来 \\
            lims(+\infty)\ln(1+e^x)-x=lims(+\infty)\ln(e^x(inv(e^x)+1))-x \\
            =lims(+\infty)\ln e^x+\ln(e^{-x}+1)-x \\
            =lims(+\infty)x+\ln(e^{-x}+1)-x=lims(+\infty)\ln(1+e^{-x}) \\
            =lims(+\infty)\ln(1)=0 \\
            `,
            `法2: 把x写成ln的形式 \\
            lims(+\infty)\ln(1+e^x)-x=lims(+\infty)\ln(1+e^x)-\ln(e^x) \\
            lims(+\infty)\ln(\frac{1+e^x}{e^x})=\ln1=0 \\
            `
        ],

        [
           `斜渐近线的推论 \\ (如何快速判断斜渐近线?)`,
            `斜渐进线:x\to\infty, 对应点与L的距离\to0 \\
            则, 若f(x)可以写成ax+b+$a(x) \\
            其中x\to\infty, $a(x)\to 0 \\
            则y=ax+b为f(x)的斜渐近线
            `
        ],

        [
           `函数的渐近线 \\
           函数有哪几种渐近线?
           `,
            `水平渐进线(与x轴平行) \\
            垂直渐进线(与x轴垂直) \\
            斜渐进线(不平行也不垂直) \\
            `,
            `渐近线的本质含义`,
            `若点M沿y=f(x)无限远离原点时 \\
            它与某条直线L之间的距离趋近于0 \\
            称直线L为y=f(x)的一条渐近线`,
        ],
        [
            `斜渐进线的定义?`,
            `lims(\infty)\frac{f(x)}{x}=a, 且lims(\infty)(f(x)-ax)=b \\
            (或x\to-\infty, 或x\to+\infty) \\
            则y=ax+b是f(x)的斜渐进线
            `
        ],
        [
            `垂直渐进线的定义?`,
            `lims(x_0)f(x)=\infty, 或lims(x_0^-)=\infty,或lims(x_0^+)=\infty \\
            x趋向*(定值)时, 极限值=\infty \\
            x=x_0是f(x)的垂直渐进线 \\\\
            如 x=0 是y=inv(x)垂直渐进线
            `
        ],

        [
            `水平渐进线的定义?`,
            `lims(\infty)=A \\
            x趋向无穷时,极限值存在 \\
            y=A是f(x)的水平渐进线 \\\\
            如: y=pinv(2), y=-pinv(2) \\
            是y=\arctan(x)的两条水平渐进线
            `
        ],

        [
           `给出x, \tan, \arctan的不等式关系`,
            `(0<x<pinv(2)) \\
            \arctan < x < \tan x
            `
        ],

        [
           `给出x, \sin, \arcsin的不等式关系`,
            `(0<x<1) \\
            \arcsin x > x > \sin x
            `
        ],

        [
           `如何化简: inv(|t|)inv(\sqrt{1+\frac{1}{t^2}})`,
            `能这样化简吗? \\
            当x>0时: inv(|t|)inv(\sqrt{1+\frac{1}{t^2}})=inv(t\sqrt{1+\frac{1}{t^2}}) \\
            =inv(\sqrt{t^2}\sqrt{1+\frac{1}{t^2}}) *(这是有问题的!) \\
            \sqrt{t^2}=|t|\neq t, 在t>0时没什么问题,*(但t<0时符号就错了)
            `,
            `正确做法(或者说不容易出错的做法): 把inv(t)提出来 \\
            inv(|t|)inv(\sqrt{1+\frac{1}{t^2}})=inv(|t|)\frac{1}{\sqrt{\frac{1}{t^2}(inv(\frac{1}{t^2})+1)}} \\
            =inv(|t|)\frac{1}{\sqrt{\frac{1}{t^2}}\sqrt{t^2+1}}=inv(|t|)\frac{1}{inv(|t|)\sqrt{t^2+1}}=\frac{1}{\sqrt{t^2+1}}
            `,
        ],

        [
            "曲率K=?",
            `曲率K=\frac{\left|y''\right|}{\left(1+\left(y'\right)^2\right)^{\frac{3}{2}}} \\
            由公式可得曲率>=0
            `,
            "曲率半径R=?",
            "曲率半径R=\\frac{1}{K}"],

        [
            `如何证明f(x)在区间上有界?`,
            `1.如果f(x)在[a,b]上连续, 则f(x)在[a,b]上有界 \\\\
            2. 若f(x)在(a,b)上连续,且lims(a^+)f(x)与lims(b^-)都存在 \\
            则f(x)在(a,b)上连续 \\
            3. f'(x)在(a,b)上有界,\Rightarrow f(x)在(a,b)上有界 \\
            `
            // https://www.bilibili.com/video/BV14T4y1n7Ec?p=146
            // https://youtu.be/tdvLePPSXAI?list=PLH_SiDrNHIUSMXnfNVzGydNZi1hVduhUb&t=4357
        ],
        [
           `如何求解简单的一元3次方程?`,
            `1. 用0、\pm1、\pm2观察根 \\
            2.提取一个因式 \\
            3. (x-t)(ax^2+bx+c), 求a,b,c \\
            观察原式中x^3的系数可得a \\
            类似地，求出b,c

            `
        ],

        [
           `1+2+3+\dotsb+n=?`,
            `inv(2)n(n+1)`
        ],

        [
           `1^2+2^2+3^2+\dotsb+n^2=?`,
            `inv(6)n(n+1)(2n+1)`
        ],

 
        [
            `选择题的排除法 \\ (怎么用、什么时候用)`,
            `当题目出现一般函数时 \\ (只提f(x),不给对应法则) \\
            代一个*(具体函数)进去,使其符合条件
            `,
            `image:example_1.png(这时令f(x)=-(x-a)^2,使条件成立 \\ 接着就可以用该函数排除选项 \\ 这个方法只能排除,*(不能确认)选项是对的)`,
            `image:paichu_2.png(其中a和b是一般常数 \\
            在原式中取a=0,算得极限值为e^{-b} \\
            将a=0*(代入每个答案)中排除错误答案 \\
            (a)e^{-b}不可能恒等于1,排除, (b)同理 \\
            (c)将a=0代入e^{a-b},得e^{-b},和算得极限相同 \\ *(不用排除,也不能确认是正确答案) \\
            (d)代入a=0得e^b, e^{-b}不可能恒等于e^b,排除 \\
            排除了(a,b,d), 答案为(c)
            )`,
            `为什么可以用排除法?`,
            `题目提到一般函数,表示的是所有符合条件的函数 \\
            我们找一个符合条件的函数, 等于找了一个反例 \\
            所以它只能排除,不能确认选项是对的
            `
        ],

        [
            `已知数列x_n收敛(极限存在),可以得到?`,
            `x_n是有界的`
        ],

        [
            `若f(x)在*(以a为中心)的某个*(去心邻域有界) \\ lims(a)f(x)是否存在?`,
            `不一定存在,例如: f(x)=\sin(\frac{1}{x}) \\ |f(x)|<=1,但在x=0附近,f(x)疯狂振荡 \\ 局部有界,但极限不存在`
        ],

        [
            `局部有界性是什么?`,
            `若lims(a)f(x)存在,则f(x)在Un(a,$d)有界 \\ 某个去心邻域有界`
        ],

        [
            `介绍算极限的几个方法`,
            `1.指数上有变量的`,
            `
            取对数: 把指数化成乘法 \\
            lims(a)(..)^x=e^{lims(a)x\ln(..)} \\
            若a=\infty, 可以试着代倒数inv(t)=x \\ x\to\infty,inv(t)\to 0 \\ 
            可以试着凑成导数的定义
            `,
            `分类讨论 \\ (适用于绝对值、(-1)^n等) \\
            夹逼定理\\ (改动极限的某部分,把原极限夹在其中) \\
            凑极限\\(凑出熟悉的、已知的极限) \\
            极限:有界*无穷小=0
            `,
        ],

        [
            `已知极限的定义中:0<|x-a|<$d \\ 这里的 > 0是什么意思`,
            `|x-a|绝对值表示x与a的*(距离) \\
            这个值要大于零代表x\neq a \\
            所以在f(a)处*(不一定要有定义) \\
            但在\mathring{U}(a,$d)内,f(x)要有定义 \\
            否则极限就*(不存在)
            `
        ],

        [
            `已知x_{k}\to a (x_k是x_n的部分列) \\
           可以推出x_n \to a吗`,
            `x_k\to a不能推出x_n\to a \\
           (部分列的极限推不出x_n的极限) \\
           必须是*(所有)部分列的极限都*(存在)且*(相等) \\
           才能推出x_n的极限
           `,
        ],

        [
            `已知x_n\to a \\ x_{2k}\to? \:\:\: x_{2k+1}\to? `,
            `x_{2k} 是x_n的偶数部分列 \\
            x_{2k+1}是x_n的奇数部分列 \\
            已知x_n(整体)\to a \\
            可得x_{2k}与x_{2k+1}都\to a \\
            (整体可以推部分)
            `
        ],

        [
            `数列的极限与前有限项无关 \\ 这是什么意思?`,
            `已知x_n\to a,那么 x_{n+1}\to? \\
            其是x_{n+1}就是x_n数列去掉第1项 \\
            数列的极限与前*(有限项)无关,所以: \\
            x_{n+1}\to a
            `,
        ],

        [
            `已知单调有界必有极限 \\ 要是前100项并不单调,还能用这个定理吗?`,
            `数列的极限与前*(有限项)无关 \\ 所以就算第1万项开始单调,也能用这个定理`
        ],

        [

            `f(x)=f(a)+f'(c)(x-a) \\其中 c\in(a,x), 解释这个公式`,
            `f(x)=f(a)+f'(c)(x-a) \\其中 c\in(a,x) \\ 这个看起来像是线性近似 \\ 但这其实是拉格朗日中值定理 \\
            f'(c)=\frac{f(x)-f(a)}{x-a} \\ f'(c)(x-a)=f(x)-f(a) \\
            f(x)=f(a)+f'(c)(x-a)
            `
            // https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/3fd61ef9eab29205d39ec29fce90c3c4_MIT18_01SCF10_Ses35a.pdf
        ],
        [
            `根据拉格朗日中值定理, 可以得到哪个不等式?`,
            `m\leq \frac{f(b)-f(a)}{b-a}\leq M \\\\
            m(b-a)\leq f(b)-f(a)\leq M(b-a)
            `
        ],

        [
            `介绍牛顿迭代法`,
            `image:newton_method.png(牛顿迭代法使用线性近似求解f(x)的根 \\ 首先猜一个可能的根x_0 \\ 其切线与x轴的交点x_1为下一个猜测)`,
            `x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}`,
        ],


        [
            `Q(a+bx+cx^2+dx^3+...)=? \\ $t(Quadratic Approximation)`,
            `a+bx+cx^2 \\ 舍弃高于2次的项`,
            // https://www.youtube.com/watch?v=vcwW2qWrlfY
        ],

        [
            `Q(fg)=? \\ $t(Quadratic Approximation)`,
            `Q(fg)=Q(Q(f)Q(g))`,
            // https://www.youtube.com/watch?v=vcwW2qWrlfY
        ],

        [
            `什么是Q(x)? \\ $t(Quadratic Approximation)`,
            `二阶近似 \\ f(x)\approx Q(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2}(x-a)^2`,
            `f(x)\approx Q(x)=f(a)+f'(a)(x-a)+\frac{f''(a)}{2}(x-a)^2 \\ 前两项系数都为1, 为什么第3项系数是inv(2)`,
            `二阶近似要求: \\
            f(a)=Q(a) \\ 
            f'(a)=Q'(a) \\ 
            f''(a)=Q''(a) \\ 
            加上系数inv(2)以抵消求导过程中的*2`
        ],
        // {
        //     extra_info: "",
        //     //https://learning.edx.org/course/course-v1:MITx+18.01.1x+2T2018/block-v1:MITx+18.01.1x+2T2018+type@sequential+block@diff_8-sequential/block-v1:MITx+18.01.1x+2T2018+type@vertical+block@diff_8-tab13
        //     cards: [],
        // }
        [
            `g=f^{-1}, 已知f' \\ g'(x)=?`,
            `g(x)=y, 根据反函数定义: f(y)=x \\ g'(x)=\frac{1}{f'(y)}=\frac{1}{f'(g(x))}`,
            `反函数定义得: f(g(x))=x \\ 同时求导 $ddx f(g(x))=$ddx x \\ f'(g(x))g'(x)=1 \\ g'(x)=\frac{1}{f'(g(x))}`,
            `image:inverse_derivative.png(反函数的斜率=原函数斜率的倒数)`,
        ],


        [`隐函数求导 \\ x^2+y^2=25 \\ y'=? `, `$ddx(x^2+y^2)=$ddx(25) \\ 2x+2yy'=0 \\ 注意y是一个函数，根据链式求导y^2=2yy' \\ 25是个常数, 导数为0 \\ y'=-\frac{x}{y}`],

        [`h(x)=f(g(x)) \\ h'(x)=?`, `h'(x)=f'(g(x))g'(x)`],
        [`(\frac{u}{v})'=?`, `(\frac{u}{v})'=\frac{u'v-uv'}{v^2}`],

        [`(uv)'=?`, `(uv)'=u'v+uv'`, `(uvw)'=?`, `(uvw)'=u'vw+(vw)'u \\ =u'vw+uv'w+uvw'`],

        [`二阶导数的几何意义?`, `二阶导几何意义:case2c(f图像凹向上, f''>0, f图像凹向下, f''<0)`, `image:concave.png(加重部分是凹向上)`],
        [`高阶导数的写法($t(notation))?`, `二阶导: f''(x) \\\\ n阶导: f^{(n)}(x) $t(   或   ) $ddxn(n,f)`],
        [
            `什么是拐点($t(inflection points))?`,
            `凹凸性转换的分界点 \\ 若x=a是f(x)的一个拐点: f''(a) = 0 \\ 点a处有点像直线,没有弯曲`,
            `image:inflection_points.png(点-2,1,3处都是拐点)`
        ],

        [`\textrm{幂函数的导数(Power Rule)} \\\\ $ddx x^n=?`, `$ddx x^n=nx^{n-1}`],


        [`切线存在=导数存在吗?`, `只要切线不是垂直于x轴的线 \\ 这句话就成立 \\ (反例): y=\sqrt[3]{x} \textrm{ at } (0, 0)`],
        [`为什么说导数是切线的斜率?`, `对于割线来说，其斜率为 \\ \frac{f(x+$D x)-f(x)}{$Dx} \\ 当$Dx\to0时(割线的两点重合) \\ 该式就是切线的斜率,也正是导数的定义`],

        // ##form1#=#

        [
            `a^3-b^3=?`,
            `(a-b)(a^2+ab+b^2)`,

            `a^n-b^n=?`,
            `(a-b)(a^{n-1}+a^{n-2}b+...+ab^{n-2}+b^{n-1})`
        ],

        // up is linear
        [
            `假设f与g都是连续函数 \\
        f+g, f-g, f*g, \frac{f}{g} 是连续的吗？`, `+, -, *都为连续函数 \\
        \frac{f}{g} 在其定义区间上连续(g\neq0)`,
            `连续函数的复合,仍为连续函数`,

        ],

        // [`\\lim_{h \\to 0}{(1+xh)^{\\frac{1}{h}}}`, "e^x"],
        // ["\\lim_{n \\to \\infty}{(1+\\frac{1}{n})^{n}}", "e"],
        // ["\\lim_{h \\to 0}{(1+h)^{\\frac{1}{h}}}", "e"],
        // [`\frac{10}{4x} \approx 2^{12}`, "123"],
        // ["image:linear_a2_2.png", "Ans"],
    ]
} as ICardStack;