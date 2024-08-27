import { ICardStack } from "../../types/card-type";

export default {
    id: "math_limit",
    label: "极限",

    cards: [
        // [
        //     ``,
        //     ``,
        // ],

        [
            `若f(x)=\phi(x)|x-a| \\
            在什么情况下f(a)可导?
            `,
            `f(x)=\phi(x)|x-a| \\ 若\phi(a)处连续,且\phi(a)=0 \\
            则f(x)在x=a处可导,这是个*(充要条件), 证明: \\\\

            lims(0)\frac{f(a+x)-f(a)}{x}=lims(0)\frac{\phi(a+x)|a+x-a|}{x}\\
            =lims(0)\frac{|x|}{x}\phi(a+x), 其中lims(0)\frac{|x|}{x}是有界量(\pm1) \\
            只有在lims(0)\phi(a+x)=0,也就是\phi(a)=0时f'(a)才存在 

            `,
        ],

        [
            `参数方程求导 \\
            f=y(x)是由 \begin{cases} x=$a(t) \\ y=$b(t) \end{cases}确定的函数 \\
            $ddx f=?`,
            `f(x)=y(x)由\begin{cases} x=$a(t) \\ y=$b(t) \end{cases} 确定 \\ 
            $ddx y=\frac{dy}{dt}\frac{dt}{dx} \\
            其中y=$b(t)是关于t的函数,但这里需要对x求导 \\
            所以把t用x表示,也就是x(t)的反函数: t=t(x) \\
            $ddx y=$b'(t)t'(x), t'(x)=\frac{1}{$a'(t)}  \\
            问题在于x=$a(t)中,t不一定能解出来,所以用*(反函数导数表示) \\
            *(公式) \Rightarrow $ddx y=\frac{$b'(t)}{$a'(t)}
            `,

            `假设$a(x)和$b(x)二阶可导 \\
            且\frac{dy}{dx}=g(t), \frac{d^2y}{dx^2}=g'(t)吗?`,

            `\frac{d^2y}{dx^2}\neq g'(t) \\
            g'(t)是对t,求导,这里是需要对x求导,*(t是个函数) \\
            \frac{d^2y}{dx^2}=g'(t) t'(x)=g'(t)\frac{1}{$a'(t)} 
            `,
        ],

        [
            `f(x)是奇函数, f'(x)的奇偶性为?`,
            `f(x)是奇函数, f'(x)是偶函数 \\\\
            f(-x)=-f(x) ceq(两边求导) $ddx f(-x)=$ddx -f(x) \\
            f'(-x)\cdot (-1)=-f'(x) \\
            \Rightarrow f'(-x)=f'(x)
            `,

            `f(x)是偶函数,f'(x)的奇偶性为?`,
            `f(x)是偶函数,f'(x)是奇函数`,

            `f(x)是周期函数,f'(x)是周期函数吗?`,
            `f(x)是周期函数,f'(x)*(是周期函数)`,
        ],

        [
            `可微与可导的关系?`,
            `*(仅在一元函数中:) \\ y=f(x)在x_0处可微的充要条件是: \\
            f(x)在点x_0处可导,且有: \\
            dy=f'(x_0)$Dx=f'(x_0)dx
            `,
        ],

        [
            `什么是微分?`,
            `若$Dy=f(x_0+$Dx)-f(x_0),可以表示为: \\
            $Dy=A$Dx+o($Dx) \:\:\: ($Dx\to0) \\
            (一个线性函数+无穷小)  \\ ($Dx的同阶无穷小(主部)+高阶无穷小) \\ \\
            则称f(x)在x_0可微, 称A$Dx为微分 \\
            记作: dy=A$Dx\approx $Dy
            `,
            `image:weifen_1.png(
                微分的真正含义: *(用直线近似曲线) \\
                dy是切线上的改变量 \\ $Dy是曲线上的改变量
            )`,
        ],

        [
            `由已知极限推未知极限的做法? \\
            已知 \lim g(f(x))=0, 求\lim m(f(x))=?
            `,
            `1.用已知极限凑未知极限 \\
            想办法让未知极限出现在g(f(x))中 \\
            如要从 g(f(x))=lims(0)\frac{\sin(6x)-(\sin x)f(x)}{x^3} 凑出 lims(0)\frac{6-f(x)}{x^2} \\
            可以看到f(x)处系数不同,在g(f(x))上加个6\sin x减个6\sin x \\
            g(f(x))=lims(0)\frac{\sin(6x)-6\sin x+6\sin x-(\sin x)f(x)}{x^3} \\
            就可以把\sin(x)提出来, 变成6-f(x)了
            `,
            `2. 想办法从未知极限往已知极限凑`,
            `3. 特殊函数 \\ $t(https://www.bilibili.com/video/BV14T4y1n7Ec?p=156)`,
            `4. 等价摘帽 \\
            \lim g(f(x))=A, g(f(x))=A+无穷小 \\
            通过代数把f(x)解出来,再算m(f(x))即可
            `,
            // https://www.bilibili.com/video/BV14T4y1n7Ec?p=156
        ],

        [
            `这题为什么不能用等价代换? \\ lims(0)\frac{5x^2-2x+1-e^{x^2-2x}}{x^2}=?`,
            `lims(0)\frac{5x^2-2x+1-e^{x^2-2x}}{x^2}=? \\ 用等价代换: 1-e^{x^2-2x} \sim -(x^2-2x) \\ \\
            算得极限为4,这个答案是错的
            `,
            `其实等价代换就是把泰勒公式展开的总结 \\
            1-e^{x^2-2x} \sim -(x^2-2x) \\
            但如果用泰勒公式会发现e^x=1+x+\frac{x^2}{2}+o(x^2) \\
            我们展开到上下同幂(2次),但在\frac{x^2}{2}的时候 \\ 
            inv(2)(x^2-2x)^2里面还有个inv(2)4x^2, 等价代换漏了这个!
            `,
            `在使用等价代换时,若其中有多个x \\
            并且次数还不同(类似x^2-2x) \\
            *(一定要小心,或者直接用泰勒展开做)
            `,
        ],

        [
            `在用拉格朗日计算极限的过程中得到: \\
            lims(0)\frac{\sin($xi)}{x}, $xi介于\sin x与x之间 \\
            该怎么算这个极限?
            `,
            `lims(0)\frac{\sin($xi)}{x}=lims(0)\frac{$xi}{x} (等价代换) \\
             lims(0)\frac{$xi}{x}介于lims(0)\frac{x}{x}和lims(0)\frac{\sin x}{x} \\
             所以lims(0)\frac{$xi}{x}=1 (夹逼定理)
            `,
        ],

        [
            `极限的加减问题 \\
            存在+不存在 = f(x)+g(x) \\
            其中lims(a)f(x)的极限存在 \\
            其中lims(a)g(x)的极限不存在
            `,
            `存在\pm 存在=?`,
            `存在\pm 存在=*(存在)`,

            `不存在\pm 存在=?`,
            `不存在\pm 存在=*(不存在)`,

            `不存在\pm 不存在=?`,
            `不存在\pm 不存在=*(不一定) \\
            lims(0)(inv(x)+(-inv(x)))=0
            `,

            `存在*存在=?`,
            `存在*存在=*(存在)`,

            `存在*不存在=?`,
            `若存在且\neq0 \\ 存在*不存在=*(不存在) \\ \\
            若存在且=0 \\ 存在*不存在=*(不一定) \\
            lims(0)(x*inv(x))=1`,

            `不存在*不存在=?`,
            `不存在*不存在=*(不一定)`,
        ],

        [
            `lims(a)f[g(x)], 极限号可以拿进去吗?`,
            `1. lims(a)g(x)=A,极限存在 \\
            2. f(x)在点A处连续 \\
            则 lims(a)f[g(x)]=f[lims(a)g(x)]
            `,
        ],

        [`simInfQ(\sqrt[3]{x+1}-1)`, `\sqrt[3]{x+1}-1 \sim inv(3)x`],
        [
            `simInfQ(1-\cos^kx)`,
            `1-\cos^kx \sim inv(2,k)x^2`,
            `证明: lims(0)\frac{1-\cos^kx }{inv(2,k)x^2}\stackrel{\text{(L'H)}}{=}
            lims(0)\frac{k\cos^{k-1}x\sin x }{kx} \\\\
            = lims(0)\frac{\cos^{k-1}x\sin x }{x}
            \stackrel{\text{等价代换}}{=}lims(0)\cos^{k-1}x=1`,
        ],

        [
            `用单调有界求极限的步骤?`,
            `1.证明极限存在 \\ 2.设lims(\infty,n)x_n=a \\ 3.把a解出来`,
            // https://youtu.be/eoTyzzfndxI?list=PLH_SiDrNHIUSMXnfNVzGydNZi1hVduhUb&t=4822
        ],

        [
            `夹逼常用不等式`,
            `看到极限中有a+b的,用: \\
            2ab\leq a^2+b^2 \\
            把a+b换成(\sqrt{a}^2+\sqrt{b}^2)
            `,
        ],

        [
            `抽象函数(只给f(x)没给具体定义) \\ 使用洛必达法则求极限的准则 \\ 若f(x)为n阶可导,可洛到几阶?`,
            `只可洛到f(x)的n-1阶导 \\ f(x)n阶可导不代表n阶导函数连续`,
            `设f(x)二阶可导, f(0)=0,f'(0)=1,f''(0)=2 \\ 
            求极限 lims(0)\frac{f(x)-x}{x^2}, *(经典错误:) \\
            
            lims(0)\frac{f(x)-x}{x^2}=lims(0)\frac{f'(x)-1}{2x}=lims(0)\frac{f''(x)}{2}=\frac{f''(0)}{2} \\
            二阶可导\color{red}不代表二阶导函数连续
            `,
            `image:math_p_1.png(正确做法,只洛到n-1阶,然后用导数定义)`,
        ],

        [
            `$ddx \ln(x+\sqrt{1+x^2})=?`,
            `$ddx \ln(x+\sqrt{1+x^2})=\frac{1}{\sqrt{1+x^2}}`,
        ],

        [
            `\infty-\infty 的形式用洛必达?`,
            `通分`,
        ],
        [
            `1^{\infty}, \infty^0, 0^0形式用洛必达?`,
            `化成e^{g(x)\ln f(x)}的形式 \\ 然后再化成inv(0,0), inv(\infty, \infty)`,
        ],

        [
            `0 \cdot \infty 形式用洛必达?`,
            `把0或\infty放到分母上, 化成inv(0,0), inv(\infty, \infty) \\
            0 \cdot \infty=inv(\frac{1}{0}, \infty)=inv(\frac{1}{\infty},0)
            `,
        ],

        [
            `使用洛必达的条件`,
            `1. lims(x_0) f(x)=lims(x_0) g(x)=0*(或)\infty, 也就是inv(0,0)或inv(\infty,\infty) \\
            2.f(x)与g(x)在x_0的某去心邻域内可导,且g'(x)\neq0 \\
            3. lims(x_0)\frac{f'(x)}{g'(x)}存在(或=\infty) \\
            则 lims(x_0)\frac{f(x)}{g(x)}=lims(x_0)\frac{f'(x)}{g'(x)}
            `,
        ],

        [
            `inv(1-x) 在0点的泰勒展开`,
            `inv(1-x)=1+x+x^2+\dotsb+x^n+o(x^n)`,
        ],

        [
            `\sin x 在0点的泰勒展开`,
            `\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!} -\frac{x^7}{7!} \\
            +\dotsb+(-1)^{n-1}\frac{x^{2n-1}}{(2n-1)!}+o(x^{2n-1})`,
        ],
        [
            `(1+x)^a 在0点的泰勒展开`,
            `(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2 \\
            +\dotsb+\frac{a(a-1)\dotsm(a-n+1)}{n!}x^n+o(x^n)`,
        ],
        [
            `\ln(1+x) 在0点的泰勒展开`,
            `\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4} \\
            +\dotsb+(-1)^{n-1}\frac{x^n}{n}+o(x^n)`,
        ],
        [
            `\cos x 在0点的泰勒展开`,
            `\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\dotsb+(-1)^n\frac{x^{2n}}{(2n)!}o(x^{2n})`,
        ],
        [
            `e^x 在0点的泰勒展开`,
            `e^x=1+x+\frac{x^2}{2!}+\dotsb+\frac{x^n}{n!}+o(x^n)`,
        ],
        [
            `若\lim \frac{f(x)}{g(x)}=L\neq0(常数) \\\\ 且 f(x)\to0, g(x)趋向什么?`,
            `极限商存在且不为0,且分子\to0 \\ 则分母也\to0`,
        ],

        [
            `若\lim \frac{f(x)}{g(x)}=L(常数) \\\\ 且 g(x)\to0, f(x)趋向什么?`,
            `极限商存在,且分母\to0 \\ 则分子也\to0`,
        ],

        [
            `极限的非零因子可先求出来`,
            `\lim f(x)=A\neq0 \\
            \Rightarrow \lim f(x)g(x)=A\lim g(x) \\

            若g(x)不存在,则整个极限也*(不存在)
           `,
        ],

        [
            `极限的有理运算法则 \\ \lim f(x)=L \\ \lim g(x)=M \\ *(两个极限都要存在)`,
            `\lim f(x) \pm \lim g(x)=L \pm M \\
            \lim f(x)*\lim g(x)=L*M \\
            \frac{\lim f(x)}{\lim g(x)}=\frac{L}{M} (M \neq 0)`,
            `若f(x)的极限存在,g(x)的极限不存在 \\
            存在 \pm 不存在 = *(不存在)
            `,
        ],

        [
            `(1+$a(x))^{$b(x)}-1 \sim \: ?`,
            `若$a(x)\to 0, 且$a(x)$b(x)\to0 \\
            (1+$a(x))^{$b(x)}-1 \sim \color{blue} $a(x)$b(x)
            `
        ],

        [
            `g(x)\to1 \\ \ln g(x) \sim \: ?`,
            `g(x)\to1 \\ \ln g(x) \sim \: g(x)-1`,
            `\ln g(x)=\ln[1+(g(x)-1)] \\
           已知: \ln(1+x) \sim x \\
           \ln g(x) \sim \: g(x)-1
           `,
        ],

        [`simInfQ(a^x-1)`, `a^x-1 \sim x\ln(a)`],
        [`simInfQ((1+x)^$a-1)`, `(1+x)^$a-1\sim $a x`],
        [`simInfQ(\tan(x)-\sin(x))`, `\tan(x)-\sin(x) \sim inv(2)x^3`],
        [`simInfQ(\arcsin(x)-x)`, `\arcsin(x)-x \sim inv(6)x^3`],
        [`simInfQ(\tan(x)-x)`, `\tan(x)-x \sim inv(3)x^3`],
        [`simInfQ(\ln(x+\sqrt{1+x^2}))`, `\ln(x+\sqrt{1+x^2}) \sim x`],
        [`simInfQ(\arctan(x))`, `\arctan(x) \sim x`],
        [`simInfQ(x-\ln(1+x))`, `x-\ln(1+x) \sim inv(2)x^2`],
        [`simInfQ(e^x-1)`, `e^x-1 \sim x`],
        [`simInfQ(\tan(x))`, `\tan(x) \sim x`],
        [`simInfQ(x-\arctan(x))`, `x-\arctan(x) \sim inv(3)x^3`],
        [`simInfQ(x-\sin(x))`, `x-\sin(x) \sim inv(6)x^3`],
        [`simInfQ(1-\cos(x))`, `1-\cos(x) \sim inv(2)x^2`],
        [`simInfQ(\ln(1+x))`, `\ln(1+x) \sim x`],
        [`simInfQ(\log_a(1+x))`, `\log_a(1+x) \sim \frac{x}{\ln(a)}`],
        [`simInfQ(\sin(x))`, `\sin(x) \sim x`],
        [`simInfQ(\arcsin(x))`, `\arcsin(x) \sim x`],

        [
            `等价无穷小代换原则?`,
            `乘除可以换 \\
            若a \sim a_1, b \sim b_1, 则: \\
            \lim inv($b,$a)=\lim inv($b,$a_1)=\lim inv($b_1,$a)=\lim inv($b_1,$a_1)
            `,
            `加减在什么情况下可以换?`,
            `若a \sim a_1, b \sim b_1 \\
            且: \lim inv($b_1,$a_1)\neq1 \\
            $a-$b \sim $a_1-$b_1 \\ 
            等价代换的*(比值不为1),减法可以换
            `,
            `若a \sim a_1, b \sim b_1 \\
            且: \lim inv($b_1,$a_1)\neq-1 \\
            $a+$b \sim $a_1+$b_1 \\ 
            等价代换的*(比值不为-1),加法可以换
            `,
        ],

        [
            `无穷小和*(有界变量)的积=?`,
            `无穷小`
        ],

        [
            `有限个无穷小的积=?`,
            `无穷小`
        ],

        [
            `有限个无穷小相加=?`,
            `无穷小`
        ],

        [
            `a(x)\to0, b(x)\to0 \\ \lim\frac{a(x)}{[b(x)]^k}=C\neq0 \\ \\ 
           a(x)与b(x)的关系为?`,
            `a(x)是b(x)的k阶无穷小`
        ],

        [
            `x\to x_0(或x\to\infty)时 \\ 
            a(x)\to0, b(x)\to0 \\\\

            \lim\frac{a(x)}{b(x)}=L \\
            L=\infty,C,1,0时分别代表什么`,
            `\lim\frac{a(x)}{b(x)}=L \\ 
            \begin{cases}
            a(x)是b(x)的*(低阶)无穷小 & L=\infty \\
            a(x)是b(x)的*(同阶)无穷小  & L=C\neq 0 \\
            a(x)和b(x)是*(等价)无穷小 & L=1 \\
            a(x)和b(x)是*(高阶)无穷小 & L=0
            \end{cases}`,
        ],

        [
            `若a(x)是b(x)的高阶无穷小,记作?`,
            `a(x)=o(b(x))`,
        ],

        [
            `若a(x)是b(x)的等价无穷小,记作?`,
            `a(x)\sim b(x)`,
        ],

        [
            `\lim[1+$a(x)]^{$b(x)}=?`,
            `对于\lim[1+$a(x)]^{$b(x)} \\ 若是\lim $a(x)=0 \\ \lim $b(x)=\infty \\
            且\lim $a(x)$b(x)=A
            `,
            `那么\lim[1+$a(x)]^{$b(x)}=e^A`,
        ],

        [
            `lims(\infty, n)x^n=?`,
            `lims(\infty, n)x^n=case8(0,|x|<1,\infty,|x|>1,1,x=1, 不存在,x=-1)`,
        ],
        [
            `lims(\infty)\sqrt[n]{n}=? \\ lims(\infty)\sqrt[n]{a}=?`,
            `lims(\infty)\sqrt[n]{n}=1 \\ lims(\infty)\sqrt[n]{a}=1 \\ (取对数法)`,
        ],

        [
            `lims(0)\frac{a^x-1}{x}=?`,
            `lims(0)\frac{a^x-1}{x}=\ln a \\ (凑导数法求极限)`,
        ],

        [
            `lims(\infty)(1+inv(x))^x=?`,
            `lims(\infty)(1+inv(x))^x=e \\ 1^\infty 形式`,
        ],

        [
            `lims(0)(1+x)^{inv(x)}=?`,
            `lims(0)(1+x)^{inv(x)}=e \\ 1^\infty 形式`,
        ],

        [
            `lims(0)\frac{\sin x}{x}=?`,
            `lims(0)\frac{\sin x}{x}=1`,
        ],
    ]
} as ICardStack;