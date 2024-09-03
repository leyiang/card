import { ICardStack } from "../../types/card-type";

export default {
    id: "multi_var",
    label: "多元微积分",

    cards: [
        [
            `dint(D)d$sig = ?  \\
            对1的二重积分=?
            `,
            `dint(D)d$sig = A $mr-4 (D的面积)`,
        ],
        [
            `积分的可加性: \\
            若dint(D)f(x,y)d$sig=dint(D_1)f(x,y)+dint(D_2)f(x,y) \\\\
            D_1, D_2与D需要*(满足什么关系)?
            `,
            `
            若dint(D)f(x,y)d$sig=dint(D_1)f(x,y)+dint(D_2)f(x,y) \\\\
            则D_1\cup D_2=D \\
            且D_1\cap D_2=\varnothing \\\\
            并起来=D, 两者没重叠
            `,
        ],
        [
            `二重积分的线性组合(分项): \\
            dint(D)[k_1f(x,y)\pm k_2g(x,y)]d$sig=?
            `,
            `
                dint(D)[k_1f(x,y)\pm k_2g(x,y)]d$sig \\
                =k_1dint(D)f(x,y)d$sig \pm k_2dint(D)g(x,y)d$sig \\\\
                二重积分的线性组合可以*(拆开来做)
            `,
        ],
        [
            `用定义判定多元可微性`,
            `1. f_x'(x_0,y_0)和f_y'(x_0,y_0)是否存在 \\\\
            根据可微性的必要条件可知, 可微=*(一定可偏导) \\
            所以若是*(任一不存在),则该点不可微
            `,
            `2. 判断极限 \\
            \lim_{($D x, $D y)\to (0,0)} \frac{$D z-dz}{\rho}是否为0 \\\\
            其中 $D z=f(x_0+$D x, y_0+$D y)-f(x_0,y_0) \\
            dz=ppd(z)$D x+ppd(z,y)$D y \\
            \rho=\sqrt{($D x)^2+($D y)^2} \\ (x_0, y_0)与(x_0+$D x, y_0+$D x)的*(距离) \\
            这个极限就是在判断, $D z和dz是否就*(差了个高阶无穷小)
            `,

            `3. 判断极限是否为0 \\
            \lim_{($D x, $D y)\to (x_0,y_0)} \frac{f(x,y)-f(x_0,y_0)-A(x-x_0)-B(y-y_0)}{\sqrt{(x-x_0)^2+(y-y_0)^2}} \\\\
            `,
        ],
        [
            `二元函数极值充值条件`,
            `image:two_var_pan.png(
                其中$D=det2(A,B,B,C) \\
                需要f(x,y)在(x_0,y_0)的某邻域内连续 \\
                且有一阶及二阶连续的偏导数
            )`,
            `image:two_var_pan.png(
                若$D=AC-B^2 >0 $mr-2 (其中B^2 \ge 0) \\
                AC>B^2 $mr-2 \Rightarrow $mr-2 AC>0 \\\\
                则AC*(同号), 极值判别用A或C都可以
            )`,
            `image:kaixin.png(
                开心少年团: $D 是正的 \\
                AC(眼睛)是*(正的), 开心\cup=>极小值 \\
                AC(眼睛)是*(负的), 伤心\cap=>极大值 \\
            )`
        ],
        [
            `二元函数极值必要条件`,
            `若z=f(x,y)在(x_0,y_0)处 \\
            1. 一阶偏导存在 \\
            2. 取到极值 \\
            则f_x'(x_0,y_0)=f_y'(x_0,y_0)=0
            `,
            `image:cone.png(
                该必要条件对多元函数*(适用) \\
                偏导不存在, 也可能有极值(圆锥点)
            )`,
        ],
        [
            `极值定义、最值定义`,
            `若在(x_0,y_0)的某个邻域, 使得*(邻域)内任意一点(x,y) \\
            f(x,y)\le f(x_0, y_0) (极大值) \\
            f(x,y)\ge f(x_0, y_0) (极小值) \\\\
            若存在(x_0, y_0), 使得*(定义域)内任意一点(x,y) \\
            f(x,y)\le f(x_0, y_0) (最大值) \\
            f(x,y)\ge f(x_0, y_0) (最小值) \\\\

            `,
        ],
        [
            `若f(x,y)在(0,0)处连续, \\
            且limdo(0,0)\frac{f(x,y)}{x^2+y^2}存在 \\\\
            我们可以得到什么?
            `,
            
            `
                若f(x,y)在(0,0)处连续, \\
                且limdo(0,0)\frac{f(x,y)}{x^2+y^2}存在 \\
                分母=0, 分子也*(一定等于0) \\\\
                limdo(0,0)f(x,y)=0, 且f(x,y)在(0,0)连续 \\
                f(0,0)=0, 原式就可以写成: \\
                limdo(0,0)\frac{f(x,y)-f(0,0)+0x+0y}{\sqrt{x^2+y^2}}inv(\sqrt{x^2+y^2}) \\
                这个极限存在,左边*(一定为零),也就是可微的判定 \\ \\
                所以f(x,y)可微,可偏导,xy偏导分别为0,0
            `,
        ],
        [
            `limdo(0,0) \frac{f(x,y)-f(0,0)}{x^2+y^2}=2 \\\\
            通过上述极限表达式 \\ 判断(0,0)处f有没有偏导、是否可微
            `,
            `limdo(0,0) \frac{f(x,y)-f(0,0)}{x^2+y^2}=2  \\\\
            要求偏导,很重要的一个方法就是在*(全微分中找) \\
            limdo(0,0) \frac{$D z-dz}{\rho}=0 (可微性判定) \\
            发现题目中分子就是$D z \\\\
            limdo(0,0) \frac{f(x,y)-f(0,0)+0dx+0dy}{\sqrt{x^2+y^2}}inv(\sqrt{x^2+y^2})=2 \\

            其中inv(\sqrt{x^2+y^2})是无穷,极限存在, 左边一定为0 \\
            所以f(x,y)可微, 偏导为0, 0
            `,
        ],
        [
            `假设需要通过表达式凑偏导定义: \\\\
            limdo(0,0)f(x,y)=a 能把y直接写成0吗?`,
            `
            limdo(0,0)f(x,y)=a \\
            *(可以), 二元极限是a， 沿着任何路径取极限都是a \\ \\

            令y=0, 代表从y=0这条线趋近,极限值*(当然不变) \\
            limdo(0,0)f(x,y)=a=lims(0)f(x,0) \\\\
            个人理解: (x,y)\to(0,0), 只要xy不同时取到0即可 \\
            (因为在一元说的趋近, 是趋近但不等于)
            `,
        ],
        [
            `lims(0)f_x'(x,0)=f_x'(0,0)是什么意思?`,
            `lims(0)f_x'(x,0)=f_x'(0,0)\\\\
            f是个二元函数,但在给定的式子中,y=0 \\
            所以f(x,0)是曲面f与y=0的*(交线) \\
            所以式子就是说: *(交线的导数)在x=0*(这一点)是*(连续的) \\
            `,
        ],
        [
            `多元函数分段函数求导?`,
            `*(正常点用公式,分段点用定义) \\\\
            例: f(x,y)=case2c(xy,xy\neq0,1,xy=0) \\ 
            将函数定义展开:\\
            f(x,y)=
            \begin{cases}
                xy & x\neq0,y\neq0 \\
                1 & x=0,y=0 \\
                1 & x\neq0,y=0 \\
                1 & x=0,y\neq0 \\
            \end{cases} \\\\

            其中xy用定义做,对x偏导是y \\
            其余用定义做(下一页)
            `,

            `
            f(x,y)=
            \begin{cases}
                xy & x\neq0,y\neq0 \\
                1 & x=0,y=0 \\
                1 & x\neq0,y=0 \\
                1 & x=0,y\neq0 \\
            \end{cases} \\\\
            在x=0, y=0处, 这*(是个点), 用这个求导定义: \\
            lims(x_0)\frac{f(x,y)-f(x_0,y)}{x-x_0} =lims(0)\frac{f(x,0)-f(0,0)}{x-0} \\
            其中f(x,0)=1, x趋近0但不是0 \\
            =lims(0)\frac{1-1}{x}=0 \\
            (下一页)
            `,

            `
            f(x,y)=
            \begin{cases}
                xy & x\neq0,y\neq0 \\
                1 & x=0,y=0 \\
                1 & x\neq0,y=0 \\
                1 & x=0,y\neq0 \\
            \end{cases} \\\\
            在x=0, y\neq0处, 这是一条分界线, 用这个定义: \\
            lims(0)\frac{f(x_0+x,y_0)-f(x_0,y_0)}{x} $mr-2 (其中x实则是$D x) \\
            =lims(0)\frac{f(x,y_0)-f(0,y_0)}{x} $mr-2 (其中 f(x,y_0)=xy_0) \\
            =lims(0)\frac{xy_0-1}{x} =lims(0)\frac{-1}{x} $mr-2 *(极限不存在)
            `,

            `
            所以,最终算出来的x偏导是: \\\\
            f_x'(x,y)=
            \begin{cases}
                y & x\neq0,y\neq0 \\
                0 & x=0,y=0 \\
                0 & x\neq0,y=0 \\
                \nexists & x=0,y\neq0 \\
            \end{cases} \\\\
            `
        ],
        [
            `隐函数存在定理要求F_y'\neq 0 \\
            要如果F_y'=0呢? \:\:\:\: 隐函数还存在吗?`,
            `F_y'=0时, 隐函数也有可能存在 \\\\
            如F(x,y)=x^3-xy=0 \\
            其在(0,0)点确定的隐函数是y=x^2(存在的) \\\\
            但F_y'=-x \big|_{(0,0)}=0
            `,
        ],
        [
            `什么是*(隐函数存在定理)?`,
            `
            如果F(x,y)满足如下条件: \\
                1. F(x,y)在(x_0,y_0)的某个邻域内有*(连续偏导数) \\
                2. F(x_0, y_0)=0 \\
                3. F_y(x_0, y_0)\neq 0 \\\\

            F(x,y)=0在(x_0,y_0)点的某个邻域内 \\
            恒能确定一个*(连续且有连续导数)的函数y=f(x) \\
            f(x_0)=y_0, 且\frac{dy}{dx}=-\frac{F_x}{F_y}
            `,
            `image:yin_1.png(
                F(x,y)=0 代表F(x,y)与z=0的交线 \\
                (图中红色圆线)
            )`,
            `image:yin_2.png(
                F(x_0, y_0)=0代表(x_0,y_0)也在红色交线上 \\
                (图中红色线是F(x,y)=0确定的隐函数) \\
                f(x_0)=y_0 (x_0,y_0在曲线上)
            )`,
            `image:yin_3.png(
                F_y(x_0,y_0)=0时 \\
                F_y既在z=0上, 又在F在(x_0,y_0)的全微分上 \\
                所以当F_y(x_0,y_0)=0时 \\
                F_y(x_0,y_0)就=全微分和z=0的交线
            )`,

            `image:yin_4.png(
                图中切线就是F_y(俯视图) \\
                当F_y=0时,其平行于y轴, 不是个函数 \\
                微分不是函数, 被微分所近似的图像也不是函数 \\
                所以, *(定义规定)F_y\neq 0
            )`,
        ],
        [
            `可微能推出连续吗(多元)`,
            `若f(x,y)在(x_0,y_0)处可微 \\
            f(x,y)在(x_0,y_0)处连续 \\\\
            可微\Rightarrow 连续`,
            `image:kewei_lianxu.png(
                f(x,y)在(x_0,y_0)可微代表: \\
                在(x_0,y_0)处可以用平面近似曲面 \\
                近似平面一定是连续的,曲面也是连续的 \\
                所以可微 \Rightarrow 连续
            )`,
        ],
        [
            `对于由F(x,y,z)=0确定的隐函数z=f(x,y) \\
            ppd(z)=? \:\:\: ppd(z,y)=?
            `,
            `对于由F(x,y,z)=0确定的隐函数z=f(x,y) \\\\

            ppd(z)=-\frac{F_x'(x,y,z)}{F_z'(x,y,z)} \:\:\:\:\:\:
            ppd(z,y)=-\frac{F_y'(x,y,z)}{F_z'(x,y,z)} \\ \\

            其中F_z'(x,y,z) \neq 0
            `,
        ],
        [
            `对于F(x,y)=0确定的隐函数y=f(x) \\
            (没有y的直接定义,通过F找y的导数) \\\\
            \frac{dy}{dx}=?`,
            `
                对于F(x,y)=0确定的隐函数y=f(x) \\\\
                \frac{dy}{dx}=-\frac{F_x'(x,y)}{F_y'(x,y)} , 其中F_y'(x,y)\neq 0
            `,
            `已知F(x,y)=0, 两边求导 \\
            \frac{dF(x,y)}{dx}=ppd(F,x)\frac{dx}{dx}+ppd(F,y)\frac{dy}{dx}=0 \\\\
            称项后可以把y'解出来 
            `,
        ],
        [
            `若z=f(u,v), u=$phi(x,y), v=g(x,y) \\
            若f,$phi,g分别有连续偏导数,z在(x,y)处的全微分: \\\\
            dz=?
            `,
            `若z=f(u,v), u=$phi(x,y), v=g(x,y) \\
            若f,$phi,g分别有连续偏导数,z在(x,y)处的全微分: \\\\
            dz=ppd(z,u)du+ppd(z,v)dv
            `,
        ],
        [
            `若z=f(u,v), u=$phi(t), v=g(t) \\\\
             \frac{dz}{dt}=? \\ (对应的复合是一元的,所以不是偏导)
            `,
            `image:multi_der_1.png(
                若z=f(u,v), u=$phi(t), v=g(t) \\
                \frac{dz}{dt}=ppd(z,u)\frac{du}{dt}+ppd(z,v)\frac{dv}{dt}
            )`,
        ],
        [
            `若z=f(u,v), u=$phi(x,y), v=g(x,y) \\\\
            ppd(z)=?
            `,
            `image:multi_der.png(
                若z=f(u,v), u=$phi(x,y), v=g(x,y) \\\\
                ppd(z)=ppd(z,u)ppd(u)+ppd(z,v)ppd(v) \\\\
                ppd(z,y)=ppd(z,u)ppd(u,y)+ppd(z,v)ppd(v,y)
            )`,
        ],
        [
            `若d[f(x,y)]=0, 可以得到什么?`,
            `若d[f(x,y)]=0 \\
            *(或者) ppd(z)=ppd(z,y)=0 \\\\
            
            f(x,y)=C`,
        ],
        [
            `偏导数存在与可微性的关系? \\
            可微的充分条件?
            `,
            `若z=f(x,y)在点(x,y)处的偏导数*(存在且连续) \\
            则该函数在点(x,y)处可微
            `,
        ],
        [
            `如何求多元函数极限`,
            `1. 定义法 \\
            f_x^{''}(x_0,y_0)=lims(0, $D x)\frac{f(x_0+$D x,y_0)-f(x_0,y_0)}{$D x}`,
        ],
        [
            `多元函数中可微与偏导的关系`,
            `若在z=f(x,y)在点(x_0,y_0)处可微 \\
            则z=f(x,y)在点(x_0, y_0)处ppd(z), ppd(z,y)*(必定存在) \\\\
            且dz=ppd(z)dx+ppd(z,y)dy
            `,
        ],
        [
            `全微分的定义, z=f(x,y), dz=?`,
            `若$D z=f(x_0+$D x, y_0+$D y)-f(x_0,y_0) \\
            其可以写成: A$D x+B$D y+o(\rho) \\\\

            则称函数z=f(x,y)在点(x_0,y_0)处可微  \\
            dz=A$D x+B$D y \\\\

            \rho=\sqrt{($D x)^2+($D y)^2} \\ (x_0, y_0)与(x_0+$D x, y_0+$D x)的*(距离) \\
            `,

            `image:quan_weifen.png(
                全微分: *(用平面近似)曲面
            )`,
            `image:quan_weifen_2.png(
                $D z是曲面的表达式 \\
                dz=Adx+Bdy是平面的表达式
            )`,
        ],
        [
            `z=f(x,y)的二阶混合偏导什么时候相等?`,
            `若z=f(x,y)的两个二阶混合偏导ppd(^2z,x$par y)和ppd(^2z,y$par x) \\
            在区域D内连续,则在该区域上: \\
            ppd(^2z,x$par y) = ppd(^2z,y$par x) 
            `,
        ],

        [
            `关于x的二阶偏导:`,
            `
                关于x的二阶偏导: \\ 
                $ppx(ppd(z))=ppd(^2z,x^2)=f_{xx}^{''}
            `,
            `关于y的二阶偏导:`,
            `
                关于y的二阶偏导: \\ 
                $ppy(ppd(z,y))=ppd(^2z,y^2)=f_{yy}^{''}
            `,
            `先x后y的二阶混合偏导`,
            `
                先x后y的二阶混合偏导: \\ 
                $ppy(ppd(z))=ppd(^2z,x $par y)=f_{xy}^{''}
            `,
            `先y后x的二阶混合偏导:`,
            `
                先y后x的二阶混合偏导: \\ 
                $ppx(ppd(z,y))=ppd(^2z,y$par x)=f_{yx}^{''}
            `,
        ],
        [
            `偏导数的定义`,
            `对x求偏导:将y视为常数 \\ f_x(x_0, y_0)=lims(0, \Delta x) \frac{f(x_0+\Delta x,y_0)-f(x_0, y_0)}{\Delta x}`,
            `image:partial_deriva.png(
                偏导数是过(x_0,y_0)点, 平行于x(y)轴 \\
                切线的斜率
            )`,
            `image:partial_deriva_2.png(
                联立方程 \begin{cases}
                    z=f(x,y) \\
                    y=y_0
                \end{cases} 得到y_0平面上的曲线
            )`,
        ],
        [
            `多元函数的连续性(定义)`,
            `limdo(x_0)f(x,y)=f(x_0,y_0)`,
        ],
        [
            `证明 limds(0,0)\frac{xy}{x^2+y^2}不存在`,
            `证明重极限不存在的基本思路: \\
            证明重极限沿*(不同的方式)趋向(x_0,y_0)极限值不同 \\\\
            令x,y沿着y=kx趋向(0,0) \\
            limdsp(y=kx,x\to0) \frac{xy}{x^2+y^2} ceq(把y代入) lims(0)\frac{kx^2}{x^2+k^2x^2} \\
            极限值为: \frac{k}{1+k^2}, 对于不同的k, 极限值不同 \\\\
            所以重极限一定不存在
            `,
        ],
        [
            `多元函数的极限`,
            `\lim_{(x,y)\to (x_0,y_0)}f(x,y)=A \\\\
            (x,y)以*(任意方式)趋向(x_0,y_0)`,
        ],
    ]
} as ICardStack;