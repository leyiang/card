import { ICardStack } from "../../types/card-type";

export default {
    id: "linear_algebra",
    label: "线代",

    cards: [
        // [
        //     ``,
        //     ``
        // ],

        [
            `\det A^T=?`,
            `\det A^T=\det A \\
            转置矩阵的行列式=矩阵的行列式 \\
            所以所有关于*(行的性质,也适用于列) \\\\

            对于大部分的A:\: \det A=\det LU \\
            \det A^T=\det U^TL^T \\
            证明\det LU=\det U^TL^T \\
            L和U是三角矩阵,其转置也是三角的 \\
            \det L=\det L^T=(L对角线相乘) \\
            \det U=\det U^T=(U对角线相乘) \\
            所以\det A^T=\det A 

            `,
        ],

        [
            `\det A^2=? \\ \det 2A=?`,
            `\det A^2=\det A \det A=(\det A)^2 \\
            \det 2A=2^n \det A_{n\times n} \\ \\
            2A标量乘矩阵,其中每个元素都乘了2 \\
            也就是每一行(一共n行)都可以提出2来
            `,
        ],

        [
            `\det(A^{-1})=?`,
            `\det(A^{-1})=inv(\det A) \\\\
            已知: AA^{-1}=I \\
            \det (AA^{-1})=\det(I) \\
            \det(A)\det(A^{-1})=1 \\
            \Rightarrow \det(A^{-1})=\frac{1}{\det(A)}
            `,
        ],

        [
            `\det(AB)=?`,
            `\det(AB)=\det(A)\det(B)`,
        ],

        [
            `\det A \neq 0是A可逆的什么条件?`,
            `充要条件 \\
            \det A \neq 0 \Rightarrow A可逆 \\
            A可逆 \Rightarrow \det A\neq 0
            `
        ],

        [
            `只有A奇异时, \det A=0 \\
            这是为什么,怎么证明?`,
            `A奇异,则在消元的时候会出现*(全零行) \\
            矩阵中一整行(或列)都为0,则行列式=0 
            `
        ],

        [
            `det2(a,b,0,d)=?`,
            `det2(a,b,0,d)=ad \\
            三角矩阵、对角矩阵行列式=对角线相乘 \\\\

            把主元上方变成0, 即可得到对角矩阵 \\
            对行做变换, 行列式相等 \\ 
            det2(a,b,0,d)=det2(a,0,0,d)=ad det2(1,0,0,1)=ad
            `,
        ],

        [
            `det2(a,b,0,0)=?`,
            `det2(a,b,0,0)=0 \\
            矩阵中一整行(或列)都为0,则行列式=0 \\\\
            det2(a,b,c+0,d+0)=det2(a,b,c,d)+det2(a,b,0,0)=det2(a,b,c,d) \\
            \Rightarrow det2(a,b,0,0)=0
            `,
        ],

        [
            `det2(a, b, c-la, d-lb)=?`,
            `det2(a, b, c-la, d-lb)=det2(a, b, c, d) \\
            对矩阵做行(或列)变换,行列式值不变 \\
            \det(A)=\det(U)
             \\\\
            det2(a, b, c-la, d-lb)=det2(a, b, c, d)+det2(a, b, -la, -lb) \\
            =det2(a, b, c, d)+(-l)det2(a, b, a, b)=det2(a, b, c, d)
            `,
        ],

        [
            `det2(a,b,a,b)=?`,
            `det2(a,b,a,b)=0 \\
            矩阵有两行(或列)相同的,行列式=0 \\\\
            证明: 交换两行(或列), 矩阵没变, 行列式也没变 \\
            但交换两行,*(行列式要变号), -\det=\det, \det=0
            `,
        ],
        [
            `det2(a+a_1,b+b_1,c,d)=?`,
            `det2(a+a_1,b+b_1,c,d)=det2(a,b,c,d)+det2(a_1,b_1,c,d)`,
            `det2(ta,tb,c,d)=t det2(a,b,c,d) \\
            行(或列)上可以把因子提出来
            `,
        ],

        [
            `det2(ta,tb,c,d)=?`,
            `det2(ta,tb,c,d)=t det2(a,b,c,d) \\
            行(或列)上可以把因子提出来
            `,
        ],

        [
            `\det(P)=+1或-1 \\
            为什么置换矩阵的行列式=1或-1
            `,
            `
            1. \det I=1 \\
            2. 有限次的行交换可以让P变成I \\
             3. 一次行交换,\det 符号变号(+变-, -变+) \\\\

            证明: 有限次的行交换可以让P变成I \\
            P^{-1}=P^T (P是标准正交的) \\
            P^{-1}P=I, 其中P^{-1}也是置换矩阵
            `,
        ],

        [
            `\det(I)=?`,
            `\det(I)=1 \\ 单位矩阵的*(行列式)=1`,
        ],

        [
            `乘上正交矩阵为什么长度不变? \\
            为什么: ||Qx||^2=||x||^2
            `,
            `||Qx||^2=(Qx)^T(Qx)=x^TQ^TQx \\
            Q是个正交矩阵 \Rightarrow Q^TQ=I \\
            \Rightarrow x^TIx=x^Tx=||x||^2
            `
        ],


        [
            `置换矩阵的逆: P^{-1}=? \\
            $t(Permutation Matrix)`,
            `P^{-1}=P^T \\
            1. 置换矩阵中的列为*(标准正交基) \\
            2. 且P是方阵(m=n) \\
            所以它是*(正交矩阵),

            P^TP=I \\ \Rightarrow P^{-1}=P^T
           `,
           `image:orthonormal.png`,
        ],

        [
            `什么是*(最小二乘解) \\
            ($t(least squares solution))
            `,
            `Ax=b不一定有解 \\
            e=b-Ax(b在A上投影的误差)不一定=0 \\
            当e取最小值(误差最小),\hat{x}就是最小二乘解
            `
        ],

        [
            `r(A)=r(A^TA)吗?`,
            `r(A)=r(A^TA), 证明: \\\\
            假设$a是N(A)的一个解,则A$a=0 \\
            等式两边同乘A^T \Rightarrow A^TA$a=0, $a也在N(A^TA)中 \\
            假设$b是N(A^TA)的一个解,A^TA$b=0 \\
            $b^TA^TA$b=$b^T 0 \Rightarrow $b^TA^TA$b=0 \\
            \Rightarrow (A$b)^TA$b=0,可得A$b(=向量)与自身点乘=0 \\
            则A$b=0, $b*(也在)N(A)中 \Rightarrow N(A)=N(A^TA) \\
            所以N(A)的*(一组基向量的个数)=N(A^TA)的一组基向量个数 \\
            A=(m\times n), A^TA=(n\times m)(m\times n)=(n\times n) \\
            n-r(A)=n-r(A^TA) \\
            r(A)=r(A^TA) \\
           `
        ],

        [
            `投影矩阵的性质: P^T=?`,
            `P^T=P \\ 
            证明: P^T=(A(A^TA)^{-1}A^T)^T \\ =(A^T)^T((A^TA)^T)^{-1}A^T=P`
        ],

        [
            `投影矩阵的性质: P^2=?`,
            `P^2=P \\ 
            直观理解: 对于b的第一次投影=p, 它在a上 \\ 对p的投影=p, 所以连续投影两次,结果相同P^2=P \\\\
            证明: P=A(A^TA)^{-1}A^T \\ P^2=A(A^TA)^{-1} \color{blue}A^TA(A^TA)^{-1} \color{black} A^T \\
            高亮部分=I, 化简后得P^2=P
            `
        ],

        [
            `我们知道A^TA是个方阵、对称矩阵 \\
            那么A^TA在什么情况下可逆?`,
            `若A列满秩=*(列向量线性无关), 则A^TA可逆, 原因: \\\\
            N(A)=N(A^TA) 两都零矩阵相同 \\
            若A满秩,则N(A)中只有零,N(A^TA)中也只有零 \\
            所以A^TA可逆
            `
        ],

        [
            `在N维空间中, b在子空间上的投影p的公式为?`,
            `p=A\hat{x}=A(A^TA)^{-1}A^Tb  \\\\
            *(注:) 能把(A^TA)^{-1}拆开吗? \\
            p=AA^{-1}(A^T)^{-1}A^Tb=b? \\
            
            *(这显然出了问题), b在a上的投影p不可能总等于b \\
            问题在于, A^{-1}不一定存在,所以不能把(A^TA)^{-1}拆开 \\
            若是A可逆,则对于所有的b,都存在于C(A)中 \\
            则b在A上的投影就是b
            `,
            `N维空间中,投影矩阵的公式?`,
            `P=A(A^TA)^{-1}A^T`,
        ],
        [
            `在N维空间中, \hat{x}的公式为?`,
            `A^TA\hat{x}=A^Tb,推导: \\\\
            e=(b-A\hat{x})是正交于C(A)的 \\
            即: e在N(A^T)中\Rightarrow A^Te=0 \\
            \Rightarrow A^T(b-A\hat{x})=0 *(展开即可)
            `
        ],

        [
            `一维空间中,投影矩阵的公式是? \\
            ($t(Projection Matrix))
            `,
            `P=\frac{aa^T}{a^Ta}, 推导: \\\\
            b在a上的投影p=a\hat{x}=a\frac{a^Tb}{a^Ta} \\
            则P=\frac{aa^T}{a^Ta}, 因为Pb=p
            `
        ],

        [
            `对于一维空间中的投影,\hat{x}的公式是?`,
            `\hat{x}=\frac{a^Tb}{a^Ta}, 推导:\\\\
            e与a垂直,所以a\cdot e=0 \\
            a\cdot(b-\hat{x}a)=0 \\
            把\hat{x}解出即可得到上述公式
            `
        ],

        [
            `将向量b投影到(以向量a为方向)的一条直线上时: \\
            什么是e, 什么是p， 什么是\hat{x}
            `,
            `image:projection_1.png( \\
            e是b与直线的垂线,也称作b在直线上投影的*(误差) \\
            e=b-p, 其中p是b在直线上的投影 \\
            (p在直线上,所以一定是a的倍数) \\
            p=\hat{x}a (\hat{x}是个标量,表示最佳预测)
            )`
        ],

        [
            `什么是子空间V的正交补?`,
            `*(V的正交补)中包含所有和V正交的向量 \\ \\
            V的正交补记作: V^\perp, 读作: $t(V perp)`,

            `所以C(A^T)=N(A)^\perp \\
            C(A)=N(A^T)^\perp
            `,
        ],

        [
            `A的大小为(m\times n),四个基本空间在R^?`,
            `C(A)在R^m \\ N(A)在R^n \\ C(A^T)=R^n \\ N(A^T)=R^m
            `
        ],

        [
            `四个基本空间的正交关系`,
            `C(A^T) \perp N(A) \\ \\

            C(A) \perp N(A^T)
            `
        ],

        [
            `为什么说: \\
            *(零空间)和*(行空间)是正交的?
            `,
            `零空间的定义: Ax=0的所有解 \\
            行空间的定义: 所以行的线性组合 \\
            A中任意一个*(行向量乘上)零空间的任意一个解(*(列向量))=0 \\ 
            这也就是向量正交的定义: v^Tw=0
            `
        ],

        [
            `说两个空间V和W是正交的, \\
            它的含义是什么?
            `,
            `对于V中的任意向量v \\
            和W中的所有任意向量w \\
            *(都是正交的), 则称V和W是正交子空间 \\\\
            \forall v\in V, w\in W \\
            v^Tw=0
            `
        ],

        [
            `||v+w||^2=? \\ 用v,w表示(没有长度公式)`,
            `||v+w||^2=(v+w)^T(v+w) \\
            长度公式的平方就是点乘
            `
        ],

        [
            `向量v=(a,b) \\ 
            ||v||是什么,其公式为?`,
            `||v||是向量v的长度 \\
            ||v||=\sqrt{a^2+b^2}
            `
        ],

        [
            `两个向量v,w是正交($t(Orthogonal))的 \\
            是什么意思, 我们能得到什么?
            `,
            `v\cdot w=v^Tw=0`
        ],

        [
            `r(A_{m\times n})=u \\ r(AB)=t \\
            u 与 t的大小关系是?
            `,
            `r(AB)\leq r(A) \\
            相乘后的矩阵,秩不超过原矩阵 \\
            取B=I, 秩相同 \\
            取B=0, 秩为0, 小于原矩阵的秩
            `
        ],

        [
            `说AB=0, 为什么r(A)+r(B)\neq n \\
            AB都为n\times n矩阵
            `,
            `
            A_{n\times n}B_{n\times n}=A(b_1,\dotsb,b_n) \\ 
            其中自由列的个数为n-r(A) \\
            为什么AB的自由列是这样? \\
            *(暂时还不理解，后续补上)
            `
            // https://www.bilibili.com/video/BV11M4m1r7ay?p=22
        ],

        [
            `为什么C(A)\neq C(R)? \\
            矩阵A的列空间\neq 行阶梯最简形式`,
            `消元(行)操作,不会改变行空间 \\ 但列空间变了`
        ],

        [
            `N(A^T)的维数是?`,
            `\dim N(A^T)=m-r \\
            m-r代表A^T中自由列的个数 \\
            也就是N(A^T)的一组基的个数
            `
        ],

        [
            `C(A^T)的维数是?`,
            `\dim C(A^T)=r \\
            C(A^T)*(的维数是矩阵的秩) \\
            矩阵有r行线性无关的行向量 \\
            它们是C(A^T)的一组基向量
            `,
        ],

        [
            `C(A)的维数是?`,
            `\dim C(A)=r \\
            C(A)*(的维数是矩阵的秩) \\
            矩阵有r列线性无关的列向量 \\
            它们是C(A)的一组基向量
            `,
        ],

        [
            `C(A^T)在几维空间($R^?)里?`,
            `C(A^T)在$R^n空间中`,
        ],

        [
            `N(A)在几维空间($R^?)里?`,
            `N(A_{m\times n})中的是Ax=0的解 \\ 
            A是m \times n的, x的行数就是n行 \\
            所以N(A)在$R^n空间里
            `,
        ],

        [
            `C(A)在几维空间($R^?)里?`,
            `C(A_{m\times n})在$R^m空间中 \\
            因为A的每个列向量有m行 \\
            C(A)是列向量的线性组合 \\ 
            也就是m行, 也就在$R^m中
            `,
        ],

        [
            `什么是A的左零空间? \\ 
            $t(left null space)
            `,
            `N(A^T)`,
        ],

        [
            `什么是A的行空间?`,
            `C(A^T) \\ A的所有行向量的线性组合`,
        ],
        [
            `N(A)的维数是?`,
            `N(A)=A的零空间 \\ 其维数=自由列的个数=n-r \\
            N(A)就是Ax=0的解的集合 \\ 几个自由列就代表有几个特解 \\ 特解就是零空间的基`
        ],

        [
            `矩阵的秩和列空间维数的关系?`,
            `$t(rank)(A)=C(A)的维数`
        ],

        [
            `什么是空间的维数($t(dimension))`,
            `空间的维数:*(空间的基的个数) \\ 一个空间有无数组的基 \\ 但每一组基的个数是相同的`
        ],


        [
            `什么是向量空间的基?`,
            `向量空间的基代表一组向量 \\
            1.这些向量线性无关 \\
            2.这些向量张成($t(span))整个向量空间
            `
        ],

        [
            `什么是v_1,\dotsb,v_n的张成($t(span))?`,
            `v_1,\dotsb,v_n的*(所有线性组合) \\
            C(A)=列空间=A的列向量的张成
            `
        ],

        [
            `已知A的列向量线性无关,n=?`,
            `n=r, 列满秩`
        ],

        [
            `为什么来自$R^2的任意三个向量,是线性相关的? \\ $t(Linear Dependence)`,
            `1. 假设其中两个向量是线性不相关的 \\
            (否则就不用证明了，直接是相关的) \\
            根据定义,两个向量的线性组合覆盖了整个$R^2 \\
            而第3个向量也是来自$R^2 \\
            即c_1v_1+c_2v_2=v_3 \\
            所以三个来自$R^2的向量,一定是线性相关的
            `,
            `2. 假设这三个向量是A的列向量 \\ 
            A的形状是宽且矮的,2*3 \\
            所以A一定有*(自由列) \\ 
            Ax=0一定有非零特解解 \\ 
            所以这三个向量一定是线性相关的
            `
        ],

        [
            `对于向量v_1,\dotsb,v_n来说 \\ 什么是线性无关? \\ $t(Linear Independence)`,
            `对于v_1,\dotsb,v_n的线性组合 \\ 只有*(全零系数)的线性组合才为0 \\
            即称v_1,\dotsb,v_n为线性无关的`,
            `换句话说,假设v_1,\dotsb,v_n是A的列向量 \\
            如果Ax=0只有x=0这一个解的话 \\
            A的列向量是线性无关的
            `
        ],

        [
            `若r<m,且r<n \\ 矩阵A的形状是? \\ Ax=b有几个解?`,
            `r<m, 且r<n \\ 判断不出形状,其为*(降秩矩阵) \\ Ax=b有\color{blue} 0或\infty个解`,
        ],

        [
            `若r=n<m, 矩阵A的形状是? \\ Ax=b有几个解?`,
            `r=n<m \\ 矩阵高且窄,列满秩 \\ Ax=b有*(0或1个解)`,
        ],

        [
            `若r=m<n,矩阵A的形状是? \\ Ax=b有几个解?`,
            `r=m<n \\ 矩阵矮且宽,行满秩 \\ Ax=b有\color{blue} \infty 个解`,
        ],
        [
            `若r=m=n,矩阵A的形状是? \\ Ax=b有几个解?`,
            `r=m=n \\ 说明矩阵A是方阵,并且其是满秩的 \\ Ax=b有且仅有*(1个解)`,
        ],

        [
            `什么是行满秩? \\ $t(row full rank)`,
            `r=m \\ 矩阵秩=行数`,
            `什么是列满秩? \\ $t(column full rank)`,
            `r=n \\ 矩阵秩=列数`,
            `什么是全满秩? \\ $t(full rank)`,
            `r=n=m \\ 矩阵秩=列数`,
        ],

        [
            `如何对Ax=b求解?`,
            `image:solve_linear_system_2.png(1. 对矩阵A消元)`,
            `image:solve_linear_system_3.png(
                2. 自由变量取0,求特解x_p
            )`,
            `image:solve_linear_system_4.png(
                3. 写出通解 x=x_p+x_n \\
                其中x_n是Ax=0的通解
            )`,
            `Ax_p=b, Ax_n=0 \\
            A(x_p+x_n)=b+0=b \\
            所以Ax=b的通解要加上x_n
            `,
        ],

        [
            `如何对Ax=0求解?`,
            `image:free_col.png(1. 对矩阵A消元)`,
            `image:free_col.png(
                2. 找到主元列、自由列 \\
                矩阵A有4列,代表有四个未知数 \\
                其中x_1,x_2对应主元列,它们为主元变量 \\
                x_3,x_4对应自由列,它们为自由变量
            )`,
            `image:solve_linear_system_1.png(
                3. 计算出主元变量,定出特解 \\
                x_1,x_2为主元变量,x_3,x_4为自由变量 \\
                自由变量取*(任意常数),代入公式算出主元变量 \\
                在自由变量中*(选一个取1),其余取0(便于计算) \\
                这里有两个特解(因为有两个自由变量) \\
                x_3,x_4分别取1,其余取0
            )`,
            `4. 写出通解: \\
            x=c_1 s_1 + c_2s_2 \\
            其中c_1, c_2是任意常数 \\
            s_1, s_2是两个特解
            `,
        ],

        [
            `什么是自由列? \\ ($t(free column))`,
            `在求解Ax=b的过程中,要对A消元 \\
            消元后有的列可能没有主元 \\
            有主元的列叫:$t(pivot column) \\
            没有主元的列叫:$t(free column)
            `,
            `image:free_col.png(
                矩阵A的大小为m*n \\
                r<=m 且 r<=n \\
                r代表矩阵的秩(主元的个数) \\
                自由列的个数:n-r
            )`,
        ],

        [
            `什么是C(A), $t(Column Space)?`,
            `A来自Ax=b \\
            C(A)是A的列空间 \\
            意思是:*(A的所有列向量的线性组合) \\
            要让Ax=b有解,b必须属于C(A)
            `
        ],
        
        [
            `$t(rref)(A)是什么? \\ $t(reduced row echelon form)`,
            `$t(rref)(A)代表A的简化行阶梯形式 \\
            1. 消元 \\ 2. 让主元上方变成0 \\ 3.让主元变成1
            `,
            `image:math_rref.png`
        ],

        [
            `N(A)=N(U)=N(R) \\ 这是什么意思?`,
            `N(A)=N(U)=N(R) \\ A来自Ax=0 \\ U是其消元后的结果 \\ R是简化行阶梯形式 \\
            这代表A、U、R的零空间是相同的 \\
            即:*(消元不会改变零空间)
            `
        ],

        [
            `N(A) 是什么? \\ $t(null space)`,
            `N(A)叫作零空间 \\ 它是Ax=0的解的集合`
        ],

        [
            `什么是LDL^T?`,
            `当A是对称矩阵时(这里用S表示) \\
            S=LDU=LDL^T
            `
        ],

        [
            `A=LU是什么?`,
            `A=LU \\ A是Ax=b中的矩阵A \\
            U是消元完毕后的上三角矩阵 \\
            对A的消元操作为E \\
            EA=U \\ E^{-1}EA=E^{-1}U \\
            A=E^{-1}U \Rightarrow A=LU \\
            L=E^{-1}, *(L是消元操作的逆操作)
            `,

            `A=LDU是什么?`,
            `A=LDU \\ D是对角矩阵($t(Diagonal)) \\ 它把U中的主元($t(pivots))剥离出来 \\ 让U的对角上都是1`,
        ],

        [
            `什么是矩阵的秩? \\ $t(rank of matrix)`,
            `在矩阵消元后,有的行没有主元($t(pivot)) \\ 主元($t(pivot))的个数=矩阵的秩`
        ],

        [`对于矩阵A,B: \\ AB=BA吗?`, `对于大部分矩阵来说 \\ AB\neq BA`],
        [`对于矩阵A,B: \\ A(B+C)=?`, `A(B+C)=AB+AC \\ 矩阵可以乘进括号, 注意方向!`],
        [`对于矩阵A,B: \\ (A+B)C=?`, `(A+B)C=AC+BC  \\ 矩阵可以乘进括号, 注意方向!`],
        [`对于矩阵A,B: \\ A(BC)=(AB)C吗?`, `A(BC)=(AB)C \\ 我们可以决定先乘AB还是先乘BC`],
        
        [
            `对于矩阵A,B: \\ (A-B)^2=? \\ (B-A)^2=?`,
            `(A-B)^2=(B-A)^2= \\ A^2-AB-BA+B^2 \\ 注意: AB\neq BA(大部分情况) \\ 所以矩阵平分差公式和代数不同`
        ],

        [
            `如何求方块矩阵的逆? \\
           mat2(A,0,C,D)^{-1}=? \\
           (其中A,C,D都是矩阵)`,
            `mat2(A,0,C,D)mat2(E,F,G,H)=mat2(I,0,0,I) \\\\ 乘起来解方程即可`
        ],

        [
            `A^TA变成了什么矩阵,有什么性质?`,
            `A^TA变成了方阵 \\ (p$x m)(m$x p)=(p$x p) \\ A^TA是个对称矩阵 \\
            (A^TA)^T=A^T(A^T)^T=A^TA \\
            AA^T也是对称矩阵,但AA^T\neq A^TA(大概率) \\
            (m$x p)(p$x m)=(m$x m)
            `
        ],

        [
            `什么是对称矩阵?`,
            `对称矩阵: \\ S^T=S \Leftrightarrow s_{ji}=s_{ij}`,
            `对称矩阵的逆是对称的吗?`,
            `(S^{-1})^T=(S^T)^{-1}=S^{-1} \\ \Updownarrow \\ (S^{-1})^T=S^{-1} \\ 对称矩阵的逆,还是对称的`,
        ],

        [
            `x,y都为n行的列向量 \\ \\ x^Ty=? \\ xy^T=?`,
            `x^T=(1\times n) \\ 转置后变成一行n列的行向量 \\ \\
            x^Ty=点乘 (1\times n)(n\times 1)=(1\times 1)\\
            xy^T=(n\times 1)(1\times n)=(n\times n)`
        ],

        [
            `A矩阵可逆,其转置A^T可逆吗?`,
            `若A可逆,A^T也可逆`
        ],

        [
            `矩阵转置 \\ (A+B)^T=?`,
            `(A+B)^T=A^T+B^T`,
            `(AB)^T=? \\ (ABC)^T=?`,
            `(AB)^T=B^TA^T \\ (ABC)^T=C^TB^TA^T`,
            `(A^{-1})^T=?`,
            `(A^{-1})^T=(A^T)^{-1}`,
        ],

        [
            `(A^T)_{ij}=? \\ 使用矩阵A表示`,
            `(A^T)_{ij}=A_{ji}`,
        ],

        [
            `转置矩阵 \\ A=mat3(a,b,c,d,e,f,g,h,i), A^T=?`,
            `行变成列: \\ A=mat3(a,b,c,d,e,f,g,h,i), A^T=mat3(a,d,g,b,e,h,c,f,i)`,
        ],

        [
            `$t(Gauss-Jordan)消元法从[A|I]开始 \\ 对A消元的同时变化也生效在I上 \\ 最后我们得到了[I|A^{-1}] \\ 请解释它的原因`,
            `消元操作可以看做多个消元矩阵对乘上AI \\ 我们把所有消元矩阵合在一起看: E \\ [EA | EI]=[I|EI] \\ EA=I, E=A^{-1} \\ EI=A^{-1}`
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

        [`矩阵性质：\\ A^{-1}=? \\ A^0=?`, `A^{-1}=\textrm{inverse matrix of} A \\ A^0=I \textrm{(Identity Matrix)}`],

        [
            `A=(m\times n), B=(q\times p) \\
            矩阵相乘的要求是什么? \\
            相乘的结果的大小为?
            `,
            `A=(m\times n), B=(q\times p) \\ A的行数=B的列数, 也就是n=q \\ AB=(m\times p)`
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

        [`矩阵符号中: a_{ij}指的是?`, `a_{ij}=A(i,j) \\ 第i行第j列的元素`],

        [`(点乘规则) \:\: A \cdot B=? \\ A=vec(A_1,A_2), B=vecRow(B_1,B_2)`, `=A_1 B_1 + A_2 B_2 \\ (矩阵点乘出来是个数)`],

    ]
} as ICardStack;