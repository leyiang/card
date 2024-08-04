import { ICardStack } from "../../types/card-type";

export default {
    id: "math_derivative",
    label: "导数",

    cards: [
        // [
        //    ``,
        //     ``
        // ],

        [
           `image:bianhua.png(P的横坐标对时间的变化率为常数v_0, 写出*(导数表达式) \\
           写出l对时间的变化率的*(导数表达式) \\
           写出l与P横坐标的表达式 \\
           指出两导数表达式的关系
           )`,
            `P的横坐标对时间的变化率为常数v_0: \frac{dx}{dt}=v_0 \\
            l对时间的变化率: \frac{dl}{dt}=\frac{dl}{dx}\frac{dx}{dt} \\
            P在y=x^3上运动, l为P与原点的距离 \\
            两点距离公式:\sqrt{(x_1-x_2)^2+(y_1-y_2)^2} \\
            l=\sqrt{(x-0)^2+(y-0)^2}=\sqrt{x^2+x^6}
            `
            // https://youtu.be/sE2c4RD2ghM?list=PLH_SiDrNHIUSMXnfNVzGydNZi1hVduhUb&t=5462
        ],

        [
           `极坐标公式求导? \\
           \rho=e^$th, \frac{dy}{dx}=?
           `,
            `极坐标与直角坐标的关系: \\
            \begin{cases} x=\rho\cos $th \\
            y=\rho\sin $th \end{cases} \\
            接着用参数方程求导方法即可 \\
            \frac{dy}{dx}=\frac{dy}{d$th}\frac{d$th}{dx}=\frac{y'}{x'} \\
            最后把$th的值(题目提供)代入,即可求出导数值
            `
            //https://youtu.be/sE2c4RD2ghM?list=PLH_SiDrNHIUSMXnfNVzGydNZi1hVduhUb&t=4981
        ],

        [
           `设f(x)在点x=a处可导 \\ |f(x)|在点x=a处可导吗? \\\\ f(a)\neq0`,
            `image:x_0_de_1.png(若f(a)\neq 0,其图像翻转后,可以明显看出|f(a)|可导 \\
            不论f(a)>0或<0, |f(x)|都在x=a处可导
            )`,
           `设f(x)在点x=a处可导 \\ |f(x)|在点x=a处可导吗? \\\\ f(a)=0, 且f'(a)=0`,
            `image:x_0_de_2.png(若f(a)=0,且f'(a)=0 \\ 其图像翻转后,|f(a)|=0, 且(|f(x)|)'|_{x=a}=0 \\
            可得出|f(x)|在x=a处可导
            )`,
           `设f(x)在点x=a处可导 \\ |f(x)|在点x=a处可导吗? \\\\ f(a)=0, 且f'(a)\neq0`,
            `image:x_0_de_3.png(若f(a)=0,且f'(a)\neq0 \\ 其图像翻转后,|f(a)|显然不可导)`,
        ],

        [`C^k_n=C(n,k)= {n \choose k}?`, `\frac{n!}{(n-k)!k!}`],

        [
            `(uv)^{(n)}=?`,
            `(uv)^{(n)}=\sum_{k=0}^\pi C_n^ku^{(k)}v^{(n-k)}`,
        ],

        [
            `(\cos x)^{(n)}=?`,
            `(\cos x)^{(n)}=\cos(x+n\cdot pinv(2))`,
        ],

        [
            `(\sin x)^{(n)}=?`,
            `(\sin x)^{(n)}=\sin(x+n\cdot pinv(2))`,
        ],
    ]
} as ICardStack;