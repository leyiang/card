import { ICardStack } from "../../types/card-type";

export default {
    id: "math_trick",
    label: "做题技巧",

    cards: [
        [
            `已知连续函数f(x)满足: \\
            f(x)=\int_0^{3x} f\left (\frac{t}{3} \right )dt+e^{2x} \\\\
            问:f(x)*(是否可导)?
            `,
            `
            已知f(x)是*(连续函数) \\
            其变上限积分一定可导
             \\\\
            f(x)=\int_0^{3x} f\left (\frac{t}{3} \right )dt+e^{2x} \\\\
            等式右边*(可导+可导), f(x)一定可导
            `,
        ],
        [
            `设y=y(x)是二阶常系数微分方程 \\
            y''+py'+qy=e^{3x} \\
            满足初始条件y(0)=y'(0)=0的特解 \\\\
            可以得到y(x)的什么信息?
            `,
            `设y=y(x)是二阶常系数微分方程 \\
            *(所以y是二阶可导)  \\\\

            y''+py'+qy=e^{3x} \\
            二阶可导, *(所以y, y'都连续) \\
            y',y,e^{3x}都连续, 所以y''也连续
            `,
        ],
    ]
} as ICardStack;
