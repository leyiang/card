import { ICardStack } from "../../types/card-type";

export default {
    id: "multi_var",
    label: "多元微积分",

    cards: [
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