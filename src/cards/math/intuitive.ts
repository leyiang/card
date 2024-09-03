import { ICardStack } from "../../types/card-type";

export default {
    id: "math_intuitive",
    label: "直观理解",

    cards: [
        [`切线存在=导数存在吗?`, `只要切线不是垂直于x轴的线 \\ 这句话就成立 \\ (反例): y=\sqrt[3]{x} \textrm{ at } (0, 0)`],
        [`为什么说导数是切线的斜率?`, `对于割线来说，其斜率为 \\ \frac{f(x+$D x)-f(x)}{$Dx} \\ 当$Dx\to0时(割线的两点重合) \\ 该式就是切线的斜率,也正是导数的定义`],
        [
            "text:极限的定义?(直观的理解)",
            `对于函数f(x)上的一点a来说 \\ x从a的左边逼近(逼近但不相等) \\ f(x)的值也随之逼近一个定值L的话 \\ 就称f(x)在a点的左极限是L \\ 记作: \lim_{x\to a^-} f(x)=L`,
            `同理，如果x从a的右边逼近(逼近但不相等) \\ f(x)的值也随之逼近一个定值L的话 \\ 就称f(x)在a点的右极限是L \\ 记作: \lim_{x\to a^+} f(x)=L`,
        ],
        [
            `拉格朗日中值定理($t(Mean Value Theorme)) \\ 从几何上描述该定理`,
            `image:mvt_intro.png(端点ab割线的斜率=ab之间一点c的切线的斜率)`,
            // https://learning.edx.org/course/course-v1:MITx+18.01.2x+3T2019/block-v1:MITx+18.01.2x+3T2019+type@sequential+block@antider_1-sequential/block-v1:MITx+18.01.2x+3T2019+type@vertical+block@antider_1-tab3
        ],

        [`可导判断(几何)`, `对于x=a来说 \\ 从左侧趋近的斜率=右侧趋近的斜率 \\\\ 可以想像下|x|的图形 \\ 其在x=0处左右两边的斜率: \\ -1和1(导数不存在)`],

        [
            `中值定理(直观理解) \\ f(x)在(a,b)上连续`,
            `因为在[a,b]上连续 \\
            f(x)的图像从a点画到b点 \\
            那么对于f(a)与f(b)之间的任意w \\
            f(x)的图像一定经过w \\
            也就是f(x)=w一定有解(至少有一个)`,
            "image:test.svg",
        ],
        [`什么是连续性(直观理解)`, `对于一点来说: \\
        这点的函数值于其极限值是相同的 \\
        对于区间来说:\\
        从区间左边画到右边, 笔不用抬起来`],
        [
            `为什么可导必连续?`,
            `image:derivative_continous.png(f'(c)=lims(c)\frac{f(x)-f(c)}{x-c}, 对不连续的点: \\ x\to c\:时, f'(c)\to\infty(DNE) \\ 红线的斜率就是上述极限的值,在逐渐接近垂直线)`,
            // https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new/ab-2-4/v/differentiability
            `切线,是对函数某一点的线性近似 \\ 将函数图像上某点无限放大 \\ 图像看起来就像是直线 \\ 这条线就是在这点的切线`
        ],

        [
            `为什么在x与a很近的情况下 \\ 线性近似求f(x)的值效果很好?`,
            `线线近似通过导数(切线斜率)近似求f(x) \\ 而切线就是在放大足够的情况下 \\ f的图形看起来就像一条直线 \\ 这条直线就是切线`
        ],
        [
            `什么是线性近似? \\ ($t(Linear Approximation))`,
            `一条船, x(t)描述其在时间t时x的位置 \\ 已知x(20)=150, 在t=20时, 其速度为+0.4 \\\\ 粗略预测小船在t=30时的位置`,
            `假设小船在t\in[20,30]时速度不变=.4 \\ 那么x(30)=150+(30-20)*.4=154 \\ 这就是线性近似 \\ 假设函数在某点附近的变化是线性的 \\ 通过导数(切线斜率) \\ 近似推测未知点的信息`,
            `image:linear_approx.png(t=20处的导数0.4(切线斜率) \\ 可以看到x(30)其实就是求斜线上x=30的值)`,
            `f(x)\approx f(a)+f'(a)(x-a)`
        ],
        [
            `介绍牛顿迭代法`,
            `image:newton_method.png(牛顿迭代法使用线性近似求解f(x)的根 \\ 首先猜一个可能的根x_0 \\ 其切线与x轴的交点x_1为下一个猜测)`,
            `x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}`,
        ],
    ]
} as ICardStack;