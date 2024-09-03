import { ICardStack } from "../../types/card-type";

export default {
    id: "math_trick",
    label: "做题技巧",

    cards: [
        [
            `若f(x,y)=y^2-4x^2+(1+$a)(x^4+x^2y^2+y^4) \\
            若(x,y)\to 0,$a\to0 \\\\
            已知f(0,0)=0 \\ 如何判断f(0,0)是否是极值?
            `,
            `*(判断极值可以只看一部分) \\
            f(x,y)=y^2-4x^2+(1+$a)(x^4+x^2y^2+y^4) \\\\

            (f与y=0)的切线: \\
            f(x,0)=-4x^2+x^4+o(x^4) \\
            x是在0的附近,所以f(x,0)<0的 \\\\

            (f与x=0)的切线: \\
            f(0,y)=y^2+y^4+o(y^4) \\
            f(0,y) > 0 \\ \\
            所以,在(0,0)附近,有的地方>0, 有的地方<0 \\
            (0,0)不是极值
            `,
        ],
        [
            `
            怎么解这个方程组? \\
            \begin{cases}
            y+8\lambda x=0 \\
            x+2\lambda y=0 \\
            4x^2+y^2-1=0 \\
            \end{cases}`,

            `
            \begin{cases}
            y+8\lambda x=0 $mr-4 (同乘y)\\
            x+2\lambda y=0 $mr-4 (同乘4x)\\
            4x^2+y^2-1=0 \\
            \end{cases} =

            \begin{cases}
            y^2+8\lambda xy=0 \\
            4x^2+8\lambda xy=0 \\
            4x^2+y^2-1=0 \\
            \end{cases} \\
            这样就可以把\lambda 消掉,就好做了 \\
            注意要判断y和4x*(都不为0) \\ \\
            若x=0, 为了满足(1) \Rightarrow y=0 \\
            但x=0且y=0与(3)冲突, $mr-2 所以x\neq 0 \\\\
            若y=0, 为了满足(2)\Rightarrow x=0 \\
            与上同，得出y\neq 0
            `,

            `
            怎么解这个方程组? \\
            \begin{cases}
            yz+\lambda=0 \\
            xz+\lambda=0 \\
            xy+\lambda=0 \\
            \end{cases} \\
            `,

            `
            \begin{cases}
            yz+\lambda=0 $mr-2 (乘上x)\\
            xz+\lambda=0 $mr-2 (乘上y)\\
            xy+\lambda=0 $mr-2 (乘上z)\\
            \end{cases}
            =\begin{cases}
            xyz+\lambda x=0 \\
            xyz+\lambda y=0 \\
            xyz+\lambda z=0 \\
            \end{cases} \\\\
            解得: x=y=z
            `,
        ],
        [
            `说A和对角矩阵相似 \\
            为什么等于在说: A可相似对角化?
            `,
            `令D=对角矩阵, 则A=PDP^{-1} \\
            这就是相似对角化的定义
            `,
        ],
        [
            `z=\int_0^1|xy-t|f(t)dt \\
            0\le x\le1, $mr-2 0\le y\le1 \\\\
            想办法把绝对值对掉
            `,
            `
            z=\int_0^1|xy-t|f(t)dt \\
            0\le x\le1, $mr-2 0\le y\le1 \\
            积分中有绝对值的,令*(绝对值里面=0) \\
            再利用积分可拆性,在该点拆开,去掉绝对值 \\\\

            xy-t=0, $mr-2 t=xy $mr-2 (在这点拆开) \\
            z=\int_0^{xy}(xy-t)f(t)dt+\int_{xy}^1(t-xy)f(t)dt 
            `,
        ],
        [
            `复合函数求偏导*(如何代值)? \\
            $phi(x)=f(x,2f(x,2x))
            `,
            `image:fuhe_piandao.png(
                $phi(x)=f(x,2f(x,2x)) \\
                *(重点:) $mr-2 $phi'(x)*(的一部分)=f_1'(x, 2f(x,2x)) \\
                其中f对x求导要走两个路径(现在先走上面那条) \\
                f_1'(x, 2f(x,2x)) 对f第一个位置求偏导 \\
                *(偏导的里的值)和$phi一样,都是x,2f(x,2x)
            )`,
            `image:fuhe_piandao.png(
                $phi(x)=f(x,2f(x,2x)) \\
                (走下面的路径) *(重点:) $mr-2 $phi'(x)*(的一部分): \\
                f_2'(x, 2f(x,2x))[2f(x,2x)]' \\
                f_2'(x, 2f(x,2x)) 对f第二个位置求偏导 \\
                偏导的里的值和$phi一样,都是x,2f(x,2x) \\
                [f(x,2x)]'=f_1'(x,2x)+2f_2'(x,2x) \\
                *(这里偏导里的值是)(x,2x) $mr-2 *(重要！)
            )`,
        ],
        [
            `已知ppd(f)>1, ppd(f,y)<-1,f(0,0)=0 \\
            证明f(1,-1)>2(用拉格朗日证明)`,
            `
            已知ppd(f)>1, ppd(f,y)<-1,f(0,0)=0 \\
            证明f(1,-1)>2(用拉格朗日证明) \\\\
            令g(x)=f(x,y_0), u(y)=f(x_0,y) \\
            f(1,-1)=f(1,-1)-f(0,0) \\
            =f(1,-1)-f(0,-1)+f(0,-1)-f(0,0) \\
            =g(1)-g(0)+u(-1)-u(0) \\
            (其中y_0=-1, x_0=0) \\\\
            ceq(拉格朗日)g'($xi)(1-0)+u'(\eta)(-1-0)\\
            =g'($xi)-u'(\eta) $mr-2 其中g'=f_x'(x,y_0), u'=f_y'(x_0,y) \\
            f(1,-1) >1-(-1)=2
            `,
        ],
        [
            `
                判断\frac{x^2y+y^4}{x^2+y^2}的值, 当(x,y)\to(0,0)时 \\
            `,
            `
               0 \le \left| \frac{x^2y+y^4}{x^2+y^2} \right| \le
                \left| \frac{x^2y}{x^2+y^2} \right|
               + \left| \frac{y^4}{x^2+y^2} \right| \\
               (|a+b|\leq |a|+|b|) \\\\
               其中\left| \frac{x^2y}{x^2+y^2} \right|=\frac{x^2}{x^2+y^2}|y| \leq |y| \\
               其中\left| \frac{y^4}{x^2+y^2} \right|=\frac{y^2}{x^2+y^2} y^2 \leq y^2 \\\\

               所以不等式右边 \leq |y|+y^2=0 \\

               所以极限值=0

            `,
        ],
        [
            `通过极限表达式求偏导?`,
            `
                全微分定义: $D z=f(x+x_0,y+y_0)-f(x,y) \\
                把$D z写成Ax+By+o(\rho), 就可找到偏导的值 \\
                A就是x偏导, B就是y偏导, \rho=\sqrt{$D x^2+$D y^2}
                \\\\
                如: limdo(0,0)\frac{f(x,y)+3x-4y}{x^2+y^2}=2, 求x,y偏导的值 \\ 
                limdo(0,0)\frac{f(x,y)+3x-4y}{\sqrt{x^2+y^2}}=limdo(0,0)\frac{f(x,y)+3x-4y}{x^2+y^2}\sqrt{x^2+y^2}=0 \\
                极限乘上\rho,发现f(x,y)+3x-4y=o(\rho), $mr-2 可以看出f(0,0)=0 \\
                $D z=-3x+4y+o(\rho)=f(0+x,0+y)-f(0,0) \\\\
                所以-3是z在(0,0)对x的偏导, 4是对y的偏导
           `,
        ],
        [
            `求某点偏导怎么代入数值?`,
            `假设对x求偏导, y就是个常数,可以把y先代入 \\\\
            如: f(x,y)=\frac{x^2+y^2}{e^{xy}+xy\sqrt{x^2+y^2}} \\
            要求f_x|_{(1,0)}, 先把y=0代入 \\
            得到: \frac{x^2}{e^{0}+0}=x^2, 求导代入x=1即可`,

           `注: 在求混合偏导的时候要注意! \\
           若要求ppd(^2z,x\partial y) \Big |_{(1,\pi)}, 此时就*(不能代入)
           `,
        ],
        [
            `*(初步判断)多元函数极限*(是否存在)`,
            `1. 通过幂次判断: \\
            如果分子幂次*(小于等于)\leq 分母幂次, 极限大概率不存在 \\\\
            如: limdo(0,0)\frac{xy}{x^2+y^2} (上下同为2次) \\
            沿着kx趋近: $mr-2 limdsp(x\to0,y=kx)\frac{xy}{x^2+y^2}=\frac{kx^2}{x^2+k^2x^2}
            =\frac{k}{1+k^2} \\
            对于不同的斜率k,极限值不同 \\
            也就是:不同的趋近方式,极限值不同 \\\\

            若分子幂次*(高于)分母幂次,极限有可能存在
            `,
        ],
        [
            `多元函数极限`,
            `1. 连续性(函数在p点有定义),直接代入 \\ \\
            2.变量代换, 把多元换成一元 \\
            如: \:\: limdo(0,0)\frac{\arcsin xy}{e^{xy}-1} \\
            变量形式都一样,令u=xy,即可化成一元
            `,
            `3. 绝对值+夹逼 \\
            如: limdo(0,0) \frac{xy^2}{x^2+y^2} \\
            0\leq \left| \frac{xy^2}{x^2+y^2} \right| \leq \left| \frac{xy^2}{2xy} \right|=0 \\
            两边都趋向0, 中间也一定趋向0 \\
            所以极限值就是0 \\\\

            问: 上面用夹逼算的*(不是绝对值吗)? \\
            答: 有这个结论: 若\lim |f(x)|\to 0 $mr-2 \lim f(x)\to0 \\
            绝对值*(趋向零), 去掉绝对值也*(趋向零)
            `,
        ],
        [
            `u=u(\sqrt{x^2+y^2}) \\ \\
            ppd(^2u,x^2)=?
            `,
            `image:problem_1.png(
                u=u(\sqrt{x^2+y^2}), 其中r=\sqrt{x^2+y^2} \\
                ppd(u)=(先对r求导, u对r是一元) (r再对x求偏导) \\
                =\frac{du}{dr}ppd(r)=\frac{du}{dr}\frac{2x}{2\sqrt{x^2+y^2}}=\frac{du}{dr}\frac{x}{r}
            )`,

            `
                u=u(\sqrt{x^2+y^2}), 其中r=\sqrt{x^2+y^2} \\
                ppd(u)=\frac{du}{dr}\frac{x}{r}, \:\:\:\: ppd(^2u,x^2)=(乘积求导) \\
                先看: \frac{du}{dr},其结构与u相同 \\
                ppd(\frac{du}{dr})=\frac{d(\frac{du}{dr})}{dr}ppd(r)=\frac{d^2u}{dr^2}ppd(r) \\\\
                ppd(\frac{x}{r})=\frac{r-x ppd(r)}{r^2}=\frac{r-\frac{x^2}{r}}{r^2}
                ceq(上下同乘r) \frac{r^2-x^2}{r^3}=\frac{y^2}{r^3} \\\\
                ppd(^2u,x^2)=\frac{\partial}{\partial x}(ppd(u))=
                \frac{\partial}{\partial x}(\frac{du}{dr}\frac{x}{r}) \\
                ceq(乘积求导) \frac{d^2u}{dr^2}ppd(r)\frac{x}{r}+\frac{du}{dr}\frac{y^2}{r^3} =\frac{d^2u}{dr^2}\frac{x^2}{r^2}+\frac{du}{dr}\frac{y^2}{r^3} 
            `,
        ],
        [
            `若A是三阶矩阵, 其特征值为1,3,-2 \\
            对应的特征向量: $a_1,$a_2,$a_3 \\
            令P=[$a_1,2$a_3,-$a_2] \\\\
            求P^{-1}AP=?`,
            `若A是三阶矩阵, 其特征值为1,3,-2 \\
            P^{-1}AP是对角化的形式 \\
            P=[$a_1,2$a_3,-$a_2] 它是线性无关的,可以对角化 \\
            所以P^{-1}AP是\Lambda的形式(特征值在对角上) \\\\
            2$a_3对应的特征值是: \\
            A(2$a_3)=2A$a_3=2\cdot(-2)$a_3=-4$a_3 \\
            把向量写成2$a_3的形式: \\
            A(2$a_3)=-2(2$a_3) \\
            所以2$a_3*(对应的特征值)是: -2
            `,
        ],
        [
            `已知y=e^{-x}, y=2xe^{-x},y=3e^x \\
            是3阶微分方程的3个特解 \\\\
            求出特征根`,

            `y=e^{-x}, y=2xe^{-x},y=3e^x  \\
            观察y=e^{-x}可知-1是一个特征根 \\\\
            观察y=2xe^{-x}可知-1是二重根 \\
            二重根: (C_1+C_2x)e^{kx}形式 \\\\
            观察y=3e^x 可知1是一个特征根 \\
            所以特征根是: -1,-1,1 \\
            特征方程: (r+1)^2(r-1)=0
            `,
        ],
        [
            `二阶*(常系数)微分方程 \\ 微分算子法 \\
            什么是D, inv(D)
            `,
            `D代表求导, inv(D)代表积分 \\\\
            如Dx=1, Dx^2=2x \\ (D+1)x=Dx+x \\\\
            inv(D)x=inv(2)x^2
            `,

            `第一类: y''+ay'+by=e^{kx} \\
            如何用微分算子法求特解?`,
            `第一类: y''+ay'+by=e^{kx}  \\
            y^*=\frac{1}{f(D)}e^{kx}, 其中f是特征方程 \\\\
            例: 对y''+3y'-2y=e^{2x}来说 \\
            f(D)=D^2+3D-2 \\\\
            把k代入到D,若分母\neq 0, 特解就求出来了 \\
            若分母=0, y^*=\frac{1}{f(D)}e^{kx}=x \frac{1}{f'(D)}e^{kx} \\
            提个x出来, 对f(D)求导 \\\\

            若分母还=0, 则继续提x,对f(D)求导
            `,

            `第二类: y''+ay'+by=\sin ax或\cos ax \\
                y^*=\frac{1}{f(D)}f(x) \\
                把a代入D^2,*(注意!),只能代D^2 \\
                把D^2换成-a^2 \\
                这里其实是把D换成了ai(D^2=(ai)^2=-a^2) \\ \\

                如果分母变成常数, 特解y^*就找到了 \\
                若分母还有D, 平凡差等价代换: \\
                例: inv(D+1)=\frac{D-1}{D^2-1} \\
                这样就可以把*(分母消掉), 分子就是求导(简单)
            `,
            `第三类: f(x)=e^{kx}$phi(x) \\
            y^*=\frac{1}{f(D)}e^{kx}$phi(x) \\
            把e^{kx}*(提出去),D变成D+k \\
            y^*=\frac{1}{f(D)}e^{kx}$phi(x)=e^{kx}\frac{1}{f(D+k)}$phi(x) \\\\
            然后正常算就好了
            `
        ],
        [
            `y''+p(x)y'+q(x)y=0 \\
            对于*(二阶齐次微分方程)的两个解: y_1和y_2 \\\\
            两个解满足什么关系?
            `,
            `y_1'y_2-y_1y_2'=Ae^{-\int p(x)dx } \\
            其中A为某个常数, 非任意常数
            `,

            `证明, 已知: \\
                y_1''+p(x)y_1'+q(x)y_1=0 \\
                y_2''+p(x)y_2'+q(x)y_2=0 \\\\

                两个等式分别乘上y_2和y_1, 相减后把q(x)消掉: \\
                (y''_1y_2-y_1y''_2)+p(x)(y_1'y_2-y_1y_2')=0 \\ \\
                其中可以凑出y_1'y_2-y_1y_2'的导数: \\
                (y_1'y_2-y_1y_2')'+p(x)(y_1'y_2-y_1y_2')=0 \\
                这样就化成了*(一阶微分方程),用公式即可得到: \\\\
                y_1'y_2-y_1y_2'=Ae^{-\int p(x)dx }
            `,
        ],
        [
            `已知y^*=e^{-2x}+(x^2+2)e^x是 \\
            二阶常系数*(非齐次)微分方程的一个解 \\\\
            找出*(齐次特征根)`,
            `y^*=e^{-2x}+(x^2+2)e^x \\\\
            我们知道*(非齐次通解)的形式是y=Cy_1+Cy_2+y^* \\
            但是,题中的y^*和通解里的y^* *(不一样!!!) \\
            题中的y^*是非齐次通解*(定常数)得到的特解 \\
            所以下面把y^*写成y \\\\

            y=e^{-2x}+x^2e^x+2e^x  \\
            其中 x^2e^x一定是*(非齐次通解)里的y^* (因为前面的x^2) \\
            所以*(齐次特征根)分别是-2和1
            `,
        ],
        [
            `判断\int_0^\pi \frac{\sin^22t}{1+\cos^2t}dt的正负`,
            `\int_0^\pi \frac{\sin^22t}{1+\cos^2t}dt \\\\
            令f(x)=\frac{\sin^22t}{1+\cos^2t} \:\:\:\: 在0到\pi上: f(x)\ge 0 \\\\
            且f(x)不恒为0, 所以其积分一定大于零
            `,
        ],
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

        [
            `什么是等价向量组?`,
            `(I): $a_1, $a_2,\dotsb $a_n \\
            (II): $b_1, $b_2,\dotsb $b_m \\ 
            若(I)中的所有向量都可由(II)线性表示 \\
            称(I)可以由(II)线性表示 \\\\
            若(I)和(II)可以互相线性表示 \\
            称(I)与(II)等价
            `,
        ],
        [
            `image:linear_refactor_1.png(如何巧算?)`,
            `image:linear_refactor_1.png(
                看到题中给出关系式的,要想能不能做变换 \\
                AB+2A=A(B+2E) \\
                可以看出B+2E是满秩的,只要判断A的秩就可以了 \\
                A的秩就是答案
            )`,
        ],
        [
            `image:vander.png(范德蒙德行列式=?)`,
            `image:vander_ans.png(
                假设第二行是|A \:\: B \:\: C| \\
                范德蒙德行列式=(C-B)(C-A)(B-A)
            )`,
            // https://www.youtube.com/watch?v=0T4mV5rQPxs
        ],
        [
            `向量组a_1,a_2,\dotsb,a_q可由向量组$b_1,$b_2,\dotsb,$b_p线性表示 \\\\
            这句话是什么意思?
            `,
            `向量组a_1,a_2,\dotsb,a_q 中的*(每一个向量) \\
            都可由向量组$b_1,$b_2,\dotsb,$b_p线性表示 `,
        ],
        [
            `a_1,a_2,a_3线性无关, $b_1可由a_{1..3}线性表示 \\
            $b_2不能由a_{1..3}线性表示 \\\\

            a_1,a_2,a_3,$b_1+$b_2是线性相关的吗
            `,
            `a_1,a_2,a_3,$b_1+$b_2 \\
            因为$b_1可以由a_{1..3}线性表示 \\
            令矩阵A=[a_1,a_2,a_3,$b_1+$b_2] \\
            对矩阵A做列变换,把$b_1消掉 \\
            得到A=[a_1,a_2,a_3,$b_2], r(A)=4 \\\\
            *(线性无关)`,
        ],
        [
            `已知a_1, a_2线性无关, a_1,a_2,a_3相性相关 \\\\
            为什么a_3一定能被a_1, a_2线性表示?
            `,
            `
            证明一： \\\\
            想象a_1, a_2的图像 \\
            a_1,a_2线性无关, 两者的线性组合构成一个*(平面) \\
            a_1,a_2,a_3线性相关, 秩为2 \\ 三者线性组合*(也是一个平面) \\
            a_3一定在a_1, a_2的平面上
            `,

            `证明二: \\\\
            a_1,a_2线性无关 \\ c_1a_1+c_2a_2=0 \:\:\:\: (其中c_1,c_2必为0) \\ \\
            a_1,a_2,a_3线性相关 \\ c_1a_1+c_2a_2+c_3a_3=0 \\ 
            其中c_3\neq0, 否则c_1,c_2也是0, *(就和线性相关矛盾) \\
            -c_3a_3=c_1a_1+c_2a_2 \\ \\
            a_3=-\frac{c_1}{c_3}a_1-\frac{c_2}{c_3}a_2
            `,
        ],
        [
            `image:same_sum.png`,
            `image:det_1.png(
                主对角相同、其余元素相同 \\
                D_n=[a+(n-1)b](a-b)^{n-1}
            )`,
            `image:det_1.png(
                把所有列加到第一列上 \\
                把第一列上的a+(n-1)b提出来 \\ 
                第一列就都是1, 让每一行减去第一行 \\
                对角线上就剩下(a-b), 一个有n-1个 \\
                D_n=[a+(n-1)b](a-b)^{n-1}
            )`,
        ],

        [
            `image:zhua.png`,
            `image:zhua.png(
                爪型矩阵求行列式 \\
                消元成上三角矩阵
            )`,
        ],
    ]
} as ICardStack;
