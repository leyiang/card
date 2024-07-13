import { ICardStack } from "../../types/card-type";

export default {
    id: "linear_algebra",
    label: "线代",

    cards: [
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
            `$t(Permutation Matrix) \\ P^{-1}=?`,
            `P^{-1}=P^T`
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
            `x,y都为向量 \\ \\ x^Ty=? \\ xy^T=?`,
            `x^Ty=点乘(是个数) \\ xy^T=$t(outer product)(是个矩阵)`
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