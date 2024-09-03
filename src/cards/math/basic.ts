import { ICardStack } from "../../types/card-type";
import { getRandomItem } from "../../utils/array";

export default {
    id: "math_basic",
    label: "数学基础",

    cards: [
        getRandomItem([
            [
                `a^2-b^2与ab的大小关系?`,
                `a^2-b^2与ab*(没有常用不等式关系) \\
                结论是关于a^2+b^2和ab的! \\
                a^2+b^2\ge 2|ab| \\\\
                证明: \\
                对于2ab: $mr-4 (a-b)^2\ge 0, 展开即可 \\
                对于-2ab: $mr-4 (a+b)^2\ge 0, 展开即可 \\
                `,
            ],
            [
                `a^2+b^2与ab的大小关系?`,
                `a^2+b^2\ge 2|ab| \\\\
                证明: \\
                对于2ab: $mr-4 (a-b)^2\ge 0, 展开即可 \\
                对于-2ab: $mr-4 (a+b)^2\ge 0, 展开即可 \\
                `,
            ],
        ]),
        [
            `如何把椭圆方程转为极坐标方程?`,
            `\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1 \\\\
            
            x=h+a\cos $th \\
            y=k+b\sin $th
            `,
        ],
        [
            `椭圆的公式`,
            `\frac{x^2}{a^2}+\frac{y^2}{b^2}=1`,
            `x,y的范围?`,
            `|x|<a, |y|<b`,

            `椭圆的面积?`,

            `
                椭圆公式: \frac{x^2}{a^2}+\frac{y^2}{b^2}=1 \\
                S=\pi ab \\
            `,

            `根据椭圆方程作图: \\
            \frac{1}{2}x^{2}+2y^{2}=2
            `,
            `image:draw_ellipse.png(
                首先写成标准式: $mr-2 \frac{x^2}{2^2}+\frac{y^{2}}{1^2}=1 \\
                |x|\leq 2且|y|\leq 1
            )`,
        ],
        getRandomItem([
            [
                `辅助角公式: \\
                    a\sin x +b\cos x=?
                `,
                `a\sin x +b\cos x=\sqrt{a^2+b^2}\sin(x+$phi)`,
            ],

            [
                `辅助角公式: \\
                    \sqrt{a^2+b^2}\sin(x+$phi)=?
                `,
                `\sqrt{a^2+b^2}\sin(x+$phi)=a\sin x +b\cos x`,
            ],
        ]),

        [
            `*(乘积和)的平方和*(平方和)的乘积的大小关系?`,
            `(ax+by)^2\leq (a^2+b^2)(x^2+y^2) \\
            (柯西不等式)
            `,
        ],
        [
            `ab， a+b, a^2+b^2的大小关系 \\\\
            (均值不等式)`,
            `\sqrt[n]{ab}\leq \frac{a+b}{n} \leq \sqrt{ \frac{a^2+b^2}{n} } \\\\
            \sqrt{ab}\leq \frac{a+b}{2}  $mr-4 (其中需要保证 a>0, $mr-2 b>0) \\
            (只有这个需要确保a,b大于0, 其它组合都不需要) \\\\
            其中n=变量个数, 这里只有ab, $mr-2 n=2
            `,
        ],
        [
            `极坐标中什么是r,什么是$th`,
            `image:polar.png(
                r代表极点到点的距离 \\
                $th 代表极轴转到点的角度 \\
                r\ge0, $mr-4 0\le $th\le 2\pi
            )`,
        ],
        [
            `球方程的公式`,
            `(x-x_0)^2+(y-y_0)^2+(z-z_0)^2=r^2`,
            `球心、半径是?`,
            `
                (x-x_0)^2+(y-y_0)^2+(z-z_0)^2=r^2 \\\\
                球心: (x_0,y_0,z_0) $mr-8 半径: r
            `,

            ...getRandomItem([
                [
                    `V=\frac{4}{3}\pi r^3 $mr-2 是球体积公式吗?`,
                    `是的, 球体积公式: \\
                    V=\frac{4}{3}\pi r^3
                    `,
                ],

                [
                    `V=\frac{3}{4}\pi r^3 $mr-2 是球体积公式吗?`,
                    `错了! $mr-2 球体积公式是这个: \\
                    V=\frac{4}{3}\pi r^3 \\
                    *(3分之4才对)
                    `,
                ],
            ])
        ],
        [
            `韦达定理是?`,
            ...getRandomItem([
                [
                    `这个韦达定理吗? \\
                    x_1+x_2=-\frac{b}{a} \\
                    x_1x_2=\frac{c}{a}
                    `,
                    `正确! \\
                    x_1+x_2=-\frac{b}{a} \\
                    x_1x_2=\frac{c}{a}
                    `,
                ],

                [
                    `这个韦达定理吗? \\
                    x_1+x_2=-\frac{c}{a} \\
                    x_1x_2=\frac{b}{a}
                    `,
                    `错了! 这个才是韦达定理: \\
                    x_1+x_2=-\frac{b}{a} \\
                    x_1x_2=\frac{c}{a}
                    `,
                ],
            ])
        ],
        [
            `e^x与1+x的不等式关系`,
            `image:e_1_plus_x.png(
                e^x \geq 1+x \\
                (仅在x=0处, e^x=1+x)
            )`
        ],

        [
            `斜渐近线的推论 \\ (如何快速判断斜渐近线?)`,
            ` \\
            若f(x)可以写成ax+b+$a(x) \\
            其中x\to\infty, $a(x)\to 0 \\\\
            则y=ax+b为f(x)的斜渐近线 \\\\
            (斜渐进线定义: $mr-2 x\to\infty, 对应点与L的距离\to0)
            `
        ],

        [
            `函数有哪几种渐近线?`,

            `水平渐进线(与x轴平行) \\
            垂直渐进线(与x轴垂直) \\
            斜渐进线(不平行也不垂直) \\
            `,
            `渐近线的本质含义`,
            `若点M沿y=f(x)*(无限远离原点)时 \\
            它与某条直线L之间的距离*(趋近于0) \\
            称直线L为y=f(x)的一条渐近线`,
        ],
        [
            `斜渐进线的定义?`,
            `lims(\infty)\frac{f(x)}{x}=a, 且lims(\infty)(f(x)-ax)=b \\
            (或x\to-\infty, 或x\to+\infty) \\\\
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
            x趋向无穷时,极限值存在(*(趋向常数)) \\
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
            "曲率K=?",
            `曲率K=\frac{\left|y''\right|}{\left(1+\left(y'\right)^2\right)^{\frac{3}{2}}} \\\\
            (由公式可得曲率>=0)
            `,
            "曲率半径R=?",
            "曲率半径R=\\frac{1}{K}"],

        [
            `如何证明f(x)在区间上有界? \\ (通过连续性说明)`,
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
            `已知数列x_n收敛(极限存在),可以得到?`,
            `x_n是有界的`
        ],

        [
            `若f(x)在*(以a为中心)的某个*(去心邻域有界) \\ lims(a)f(x)是否存在?`,
            `不一定存在,例如: f(x)=\sin(\frac{1}{x}) \\
            |f(x)|<=1,但在x=0附近,f(x)疯狂振荡 \\\\
            局部有界,但*(极限不存在)`
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
            `根据拉格朗日中值定理, 可以得到哪个不等式?`,
            `m\leq \frac{f(b)-f(a)}{b-a}\leq M \\\\
            m(b-a)\leq f(b)-f(a)\leq M(b-a)
            `
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
            `凹凸性转换的分界点 \\ 若x=a是f(x)的一个拐点: f''(a) = 0 \\\\
            (点a处有点像直线,没有弯曲)`,
            `image:inflection_points.png(点-2,1,3处都是拐点)`
        ],

        [`\textrm{幂函数的导数(Power Rule)} \\\\ $ddx x^n=?`, `$ddx x^n=nx^{n-1}`],

        [
            `a^3-b^3=?`,
            `(a-b)(a^2+ab+b^2)`,

            `a^n-b^n=?`,
            `(a-b)(a^{n-1}+a^{n-2}b+...+ab^{n-2}+b^{n-1})`
        ],

        [
            `假设f与g都是连续函数 \\
        f+g, f-g, f*g, \frac{f}{g} 是连续的吗？`, `+, -, *都为连续函数 \\
        \frac{f}{g} 在其定义区间上连续(g\neq0)`,
            `连续函数的复合,仍为连续函数`,

        ],
    ]
} as ICardStack;