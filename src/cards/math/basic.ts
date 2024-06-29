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
        // [ //     ``,
        //     ``
        // ],

        [
            `介绍牛顿迭代法`,
            `image:newton_method.png(牛顿迭代法使用线性近似求解f(x)的根 \\ 首先猜一个可能的根x_0 \\ 其切线与x轴的交点x_1为下一个猜测)`,
            `x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}`,
        ],

        [
            `$t(Gauss-Jordan)消元法从[A|I]开始 \\ 对A消元的同时变化也生效在I上 \\ 最后我们得到了[I|A^{-1}] \\ 请解释它的原因`,
            `消元操作可以看做多个消元矩阵对乘上AI \\ 我们把所有消元矩阵合在一起看: E \\ [EA | EI]=[I|EI] \\ EA=I, E=A^{-1} \\ EI=A^{-1}`
        ],

        [
            `矩阵相乘的几个方法`,
            `image:mat_mult_1.png[点乘法]`,
            `*A乘上B的每一列* \\
            AB = A[b_1...b_p] =[Ab_1...Ab_p] \\
            b_1代表矩阵B的第一列 \\
            Ab_1=mat2(a,b,c,d)vec(e,f) \\
            Ab_1代表AB结果中的第一列`,

            `*A的每一行乘上B* \\
            [$t(row i of )A]mat2(a,b,c,d)=[$t(row i of )AB] \\
            A的第一行乘B=AB的第一行`,
            `image:mat_mult_4.png[行乘列再相加]`
        ],

        [`(AB)_{ij}=? \\ 矩阵相乘结果的第ij个元素`, `($t(row i of ) A) \cdot ($t(col j of ) B)`],
        [
            `什么是对角占优矩阵? \\ $t(Diagonally Dominant Matrices)`,
            `主对角线上的元素 > 同行其它元素之和 \\
            |a_{ii}| > \sum_{j\neq i}|a_{ij}|
            `,
            `
            mat3(3,1,1,1,3,1,1,1,3) \\ 这就是一个对角占优矩阵 \\ 每个主对角线元素(3) \\ 都大于同行元素的和(1+1)
            `
        ],

        [
            `
            (AB)^{-1}=? \\ 
            (ABC)^{-1}=? \\
            矩阵的逆
            `,
            `
            (AB)^{-1}=B^{-1}A^{-1} \\ 
            (ABC)^{-1}=C^{-1}B^{-1}A^{-1} \\
            `
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

        // {
        //     extra_info: "",
        //     //https://learning.edx.org/course/course-v1:MITx+18.01.1x+2T2018/block-v1:MITx+18.01.1x+2T2018+type@sequential+block@diff_8-sequential/block-v1:MITx+18.01.1x+2T2018+type@vertical+block@diff_8-tab13
        //     cards: [],
        // }

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
            `a^x=(e^{\ln a})^x=e^{x\ln a} \\ $ddx a^x=$ddx e^{x\ln a} \\ 对右侧使用链式法则($t(Chain Rule)) \\ $ddx e^{x\ln a}=\ln(a)e^{x\ln a}=\ln(a)a^x`
        ],

        [`text:DNS recursive 和 iterative query \n 分别解释它们是什么`,
            `text:递归式(recursive): 把DNS请求交到下一个DNS服务器，让它来帮自己查询`,
            `text:迭代式(iterative):自己向各个服务器查询信息,比如先查负责(.com)的DNS服务器的地址,得到后再向(.com)的DNS发请求,所有的请求都自己来`,
            `image:network_dns_query_type.png[左下角host向local发送的就是recursive \n local dns 发送的就是iterative]`
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

        [
            `g=f^{-1}, 已知f' \\ g'(x)=?`,
            `g'(x)=\frac{1}{f'(y)}=\frac{1}{f'(g(x))}`,
            `image:inverse_derivative.png(反函数的斜率=原函数斜率的倒数)`,
            `反函数定义得: f(g(x))=x \\ 同时求导 $ddx f(g(x))=$ddx x \\ f'(g(x))g'(x)=1 \\ g'(x)=\frac{1}{f'(g(x))}`
        ],

        [
            `不用计算器 \\ \sin(\arctan(\frac{3}{4}))=?`,
            `image:sin_arctan.png(\arctan要求的是(\frac{对边}{邻边}=\frac{3}{4}的角$th))`,
            `image:sin_arctan.png(\sin要求的是角$th对应的\frac{对边}{斜边}, 也就是\frac{3}{5})`,
        ],

        [`隐函数求导 \\ x^2+y^2=25 \\ y'=? `, `$ddx(x^2+y^2)=$ddx(25) \\ 2x+2yy'=0 \\ 注意y是一个函数，根据链式求导y^2=2yy' \\ 25是个常数, 导数为0 \\ y'=-\frac{x}{y}`],
        [`对于矩阵A,B: \\ (A-B)^2=? \\ (B-A)^2=?`, `(A-B)^2=(B-A)^2= \\ A^2-AB-BA+B^2 \\ 注意: AB\neq BA(大部分情况) \\ 所以矩阵平分差公式和代数不同`],
        [`对于矩阵A,B: \\ AB=BA吗? \\ A(B+C)=? \\ (A+B)C=? \\ A(BC)=(AB)C吗?`, `对于大部分矩阵来说,AB\neq BA \\ A(B+C)=AB+AC \\ (A+B)C=AC+BC \\ 矩阵可以乘进括号，注意方向! \\ A(BC)=(AB)C \\ 我们可以决定先乘AB还是先乘BC`],

        [`h(x)=f(g(x)) \\ h'(x)=?`, `h'(x)=f'(g(x))g'(x)`],
        [`(\frac{u}{v})'=?`, `(\frac{u}{v})'=\frac{u'v-uv'}{v^2}`],

        [`(uv)'=?`, `(uv)'=u'v+uv'`, `(uvw)'=?`, `(uvw)'=u'vw+(vw)'u \\ =u'vw+uv'w+uvw'`],

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
            `为什么可导必连续?`,
            `image:derivative_continous.png(f'(c)=lims(c)\frac{f(x)-f(c)}{x-c}, 对不连续的点: \\ x\to c\:时, f'(c)\to\infty(DNE))`,
            `切线，是对函数某一点的线性近似`
        ],
        [`可导判断(数学定义)`, `lims(a^-)\frac{f(x)-f(a)}{x-a}=lims(a^+)\frac{f(x)-f(a)}{x-a} \\\\ 左导数的定义=右导数的定义`],
        [`可导判断(几何)`, `对于x=a来说 \\ 从左侧趋近的斜率=右侧趋近的斜率 \\\\ 可以想像下|x|的图形 \\ 其在x=0处左右两边的斜率: \\ -1和1(导数不存在)`],
        [`二阶导数的几何意义?`, `二阶导几何意义:case2c(f图像凹向上, f''>0, f图像凹向下, f''<0)`, `image:concave.png(加重部分是凹向上)`],
        [ `高阶导数的写法($t(notation))?`, `二阶导: f''(x) \\\\ n阶导: f^{(n)}(x) $t(   或   ) $ddxn(n,f)`],
        [
            `什么是拐点($t(inflection points))?`,
            `凹凸性转换的分界点 \\ 若x=a是f(x)的一个拐点: f''(a) = 0 \\ 点a处有点像直线,没有弯曲`,
            `image:inflection_points.png(点-2,1,3处都是拐点)`
        ],

        [`矩阵性质：\\ A^{-1}=? \\ A^0=?`, `A^{-1}=\textrm{inverse matrix of} A \\ A^0=I \textrm{(Identity Matrix)}`],

        [`矩阵相乘: \\ A=(m\times n)的矩阵 \\ B=(n\times p)的矩阵 \\ AB的行列为?`, `AB=(m\times p)`],
        [`矩阵相乘的要求: \\ AB(行列要求)`, `A的行数=B的列数`],

        [
            `矩阵乘法(按列): \\ mat2(a,b,c,d) mat2(e,f,g,h)=?`,
            `vec(a,c) vecRow(e,f) + vec(b,d) vecRow(g,h) \\
            mat2(ea,fa,ec,fc) + mat2(gb,hb,gd,hd)
            `
        ],

        [`矩阵乘法(按行): \\ mat2(a,b,c,d) mat2(e,f,g,h)=?`,
            `\textrm{(dot product)} \\
            \begin{bmatrix}
                vecRow(a,b) \cdot vec(e,g) &  vecRow(a,b) \cdot vec(f,h) \\
                vecRow(c,d) \cdot vec(e,g) &  vecRow(c,d) \cdot vec(f,h) \\
            \end{bmatrix}`
        ],

        [
            `a^3-b^3=?`,
            `(a-b)(a^2+ab+b^2)`,

            `a^n-b^n=?`,
            `(a-b)(a^{n-1}+a^{n-2}b+...+ab^{n-2}+b^{n-1})`
        ],

        [`\textrm{幂函数的导数(Power Rule)} \\\\ $ddx x^n=?`, `$ddx x^n=nx^{n-1}`],

        [
            `image:non_derivative.png(点-1处，为什么导数不存在?)`,
            `image:non_derivative.png(在x=-1的左边,斜率是正的)`,
            `image:non_derivative.png(在x=-1的右边,斜率是负的)`,
            `image:non_derivative.png(想像一下导函数的图像)`,
            `image:non_derivative_2.png(导函数x=-1处的极限都不存在)`,
        ],

        [`切线存在=导数存在吗?`, `只要切线不是垂直于x轴的线 \\ 这句话就成立 \\ (反例): y=\sqrt[3]{x} \textrm{ at } (0, 0)`],
        [`为什么说导数是切线的斜率?`, `对于割线来说，其斜率为 \\ \frac{f(x+$D x)-f(x)}{$Dx} \\ 当$Dx\to0时(割线的两点重合) \\ 该式就是切线的斜率,也正是导数的定义`],
        
            // ##form1#=#
        [`矩阵符号中: a_{ij}指的是?`, `a_{ij}=A(i,j) \\ 第i行第j列的元素`],
        [
            `导数的定义 \\ f'(x)=?`,
            `
                f'(a)=\lim\limits_{x\to a}\frac{f(x)-f(a)}{x-a} \\
                f'(a)=\lim\limits_{h\to 0}\frac{f(a+h)-f(a)}{h}
            `
        ],
        [
            `列出商的极限的情况 \\ lim(a,L), lim(a,M,g) \\\\ lims(a)\frac{f(x)}{g(x)}=?`,
            `lims(a)\frac{f(x)}{g(x)}=case2c(
                0, M\neq0,
                DNE, M=0 \textrm{ and } L\neq0,
                \textrm{看情况}, M=0 \textrm{ and } L=0
            )`,
            `如果M\neq0, =\frac{L}{M} \\ 如果M=0, lims(a)\frac{f(x)}{g(x)} DNE`
        ],

        [`(点乘规则) \:\: A \cdot B=? \\ A=vec(A_1,A_2), B=vecRow(B_1,B_2)`, `=A_1 B_1 + A_2 B_2 \\ (矩阵点乘出来是个数)`],

        
        // up is linear
        [`中值定理(严格定义)`, `如果f(x)在[a,b]上连续 \\ 对于f(a)与f(b)之间的任意一点M \\ 都至少有一个c\in(a,b) \\ 使得f(c)=M`],
        [`什么叫在[a,b]上连续？`, `1. 在(a, b)上每点都连续 \\ 2. 在a点上右连续 \\ 3. 在b点上左连续`],
        [`中值定理(直观理解) \\ f(x)在(a,b)上连续`,
            `因为在[a,b]上连续 \\ f(x)的图像从a点画到b点 \\ 那么对于f(a)与f(b)之间的任意w \\ f(x)的图像一定经过w \\ 也就是f(x)=M一定有解`,
            "image:test.svg",
        ],
        [`假设f与g都是连续函数 \\ f+g, f-g, f*g, \frac{f}{g} 是连续的吗？`, `+, -, *都为连续函数 \\ \frac{f}{g} 在其定义区间上连续(g\neq0)`],
        [`什么是连续函数`, `text:函数定义域内每个点都连续\n称该函数为连续的`],
        [`列出间断点的情况`, `text:第一类间断点: \n 可去间断点：该点极限存在，但极限值与函数值不同 \n 跳跃间断点：左右极限都存在，但两边不相等`,
            "text:第二类间断点: \n 不属于第一类的都归到第二类(如无穷、振荡间断点)"
        ],
        [`说点a在f(x)上是连续的 \\ 我们能得到什么?`, `a点极限值存在 \\ a点函数值存在 \\ 且极限值=函数值`],
        [`左、右连续性的定义`, `左连续：lim(a^-,L)=f(a) \\ 右连续：lim(a^+,L)=f(a)`],
        [`什么是连续性(直观理解)`, `对于一点来说: \\ 这点的函数值于其极限值是相同的。\\ 对于区间来说：\\ 从区间左边画到右边，笔不用抬起来`],

        [`极限的严格定义`, `\lim_{x\to a}f(x)=L的严格定义: \\ (\forall \epsilon>0) (\exists \delta>0) \\ (\forall x) (0<|x-a|<\delta) \Longrightarrow |f(x)-L|<\epsilon`],
        [
            `列举极限的运算法则 \\ \lim_{x\to a}f(x)=L \\ \lim_{x\to a}g(x)=M`,
            `\lim_{x\to a}f(x)+\lim_{x\to a}g(x)=L+M \\
            \lim_{x\to a}f(x)-\lim_{x\to a}g(x)=L-M \\
            \lim_{x\to a}f(x)*\lim_{x\to a}g(x)=L*M \\
            \frac{lims(a)f(x)}{lims(a)g(x)}=\frac{L}{M} (M \neq 0)`
        ],
        [
            `text:请列举(左|右)极限不存在的情况`,
            `1. (左|右)极限会碰到无穷 \\ 如f(x)=\frac{1}{x} \\ 在x=0处的左、右极限就是无定义 \\ 记作 DNE`,
            `2. 函数在某点处可能疯狂振荡 \\ 此时也不存在左、右极限值 \\ 如f(x)=\sin(\frac{1}{x})`,
        ],
        [`极限存在的条件?`, `左、右极限存在且相等 \\ \lim_{x\to a^-}f(x)=L=\lim_{x\to a^+}f(x)`],
        [
            "text:极限的定义?(直观的理解)",
            `对于函数f(x)上的一点a来说 \\ x从a的左边逼近(逼近但不相等) \\ f(x)的值也随之逼近一个定值L的话 \\ 就称f(x)在a点的左极限是L \\ 记作: \lim_{x\to a^-} f(x)=L`,
            `同理，如果x从a的右边逼近(逼近但不相等) \\ f(x)的值也随之逼近一个定值L的话 \\ 就称f(x)在a点的右极限是L \\ 记作: \lim_{x\to a^+} f(x)=L`,
        ],

        // [`\\lim_{h \\to 0}{(1+xh)^{\\frac{1}{h}}}`, "e^x"],
        // ["\\lim_{n \\to \\infty}{(1+\\frac{1}{n})^{n}}", "e"],
        // ["\\lim_{h \\to 0}{(1+h)^{\\frac{1}{h}}}", "e"],
        // [`\frac{10}{4x} \approx 2^{12}`, "123"],
        // ["image:linear_a2_2.png", "Ans"],
    ]
} as ICardStack;