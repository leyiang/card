import { ICardStack } from "../../types/card-type";

export default {
   id: "math_integral",
   label: "积分",

   cards: [
      // [
      //    ``,
      //    ``
      // ],

      [
         `判断 \int_a^b \frac{1}{(x-a)^p}dx 的敛散性`,
         `\int_a^b \frac{1}{(x-a)^p}dx=case2c(p<1,收敛,p\geq1,发散)`,

         `判断 \int_a^b \frac{1}{(b-x)^p}dx 的敛散性`,
         `\int_a^b \frac{1}{(b-x)^p}dx=case2c(p<1,收敛,p\geq1,发散)`
      ],

      [
         `有瑕点的比较判别法`,
         `image:compare_method.png`
      ],

      [
         `f(x)在(a,b]上连续 \\
         点a为f(x)的瑕点(无界点) \\\\
         \int_a^bf(x)dx=?
            `,
         `
         \int_a^bf(x)dx=lims(a^+,t)\int_t^b f(x)dx \\
         若极限存在, 则反常积分\int_a^bf(x)dx *(收敛), 反之则发散
         `,

         `f(x)在[a,b)上连续 \\
         点b为f(x)的瑕点(无界点) \\\\
         \int_a^bf(x)dx=?
            `,
            `
         \int_a^bf(x)dx=lims(b^-,t)\int_a^t f(x)dx \\
         若极限存在, 则反常积分\int_a^bf(x)dx *(收敛), 反之则发散
         `,

         `f(x)在[a,b]上除点c外连续 \\
         点c为f(x)的瑕点(无界点) \:\: a<c<b \\\\
         \int_a^bf(x)dx=?
            `,
            `
         \int_a^bf(x)dx=\int_a^c f(x)dx+\int_c^bf(x)dx \\\\
         拆出来的两个都收敛,则整体收敛
         `,
      ],

      [
         `\int_a^{+\infty} \frac{1}{x^p}dx \:\:\: (a>0) \\\\
         *(判断敛散性)
         `,
         `\int_a^{+\infty} \frac{1}{x^p}dx=case2c(p>1, 收敛, p\leq 1, 发散) \:\:\: (a>0)`
      ],

      [
         `反常积分敛散性判断 \\ (比较判别法的*(极限形式))`,
         `设f(x),g(x)在[a,+\infty)上*(非负连续), 且lims(+\infty)\frac{f(x)}{g(x)}=\lambda \\
            若\lambda \neq 0, \int_a^{+\infty}f(x)dx与\int_a^{+\infty}g(x)dx同敛散 \\\\
            若\lambda = 0, \int_a^{+\infty}g(x)dx收敛\Rightarrow \int_a^{+\infty}f(x)dx收敛 \\
            \lambda=0 *(说明g比f大), x\to+\infty时 \\\\
            若\lambda = +\infty, \int_a^{+\infty}g(x)dx发散\Rightarrow \int_a^{+\infty}f(x)dx 发散 \\
            `
      ],

      [
         `反常积分敛散性判断 \\ (比较判别法)`,
         `设f(x),g(x)在[a,+\infty]上连续 \\ 且(0\leq f(x)\leq g(x)) \\\\
         \int_a^{+\infty}g(x)dx 收敛 \Rightarrow \int_a^{+\infty}f(x)dx收敛 \\
         *(大的收敛,小的也收敛) \\\\

         \int_a^{+\infty}f(x)dx 发散 \Rightarrow \int_a^{+\infty}g(x)dx 发散 \\
         *(小的发散,大的也发散)
         `
      ],

      [
         `\int_a^{+\infty}f(x)dx的定义`,
         `\int_a^{+\infty}f(x)dx=lims(+\infty,t)\int_a^t f(x)dx \\ \\
         若极限存在,称该反常积分*(收敛) \\ (积分的值就是极限的值) \\\\
         若极限不存在, 称该反常积分*(发散)
         `,
         `\int_{-\infty}^b f(x)dx的定义`,
         `\int_{-\infty}^b f(x)dx=lims(-\infty,t)\int_t^b f(x)dx`,

         `\int_{-\infty}^{+\infty} f(x)dx的定义`,
         `\int_{-\infty}^{+\infty} f(x)dx=\int_{-\infty}^0 f(x)dx+\int_0^{+\infty} f(x)dx \\\\
         拆成两个积分后,*(都收敛)才是收敛
         `,
      ],

      [
         `牛顿莱布尼茨公式的*(使用条件)`,
         `1. 若f(x)在[a,b]上*(连续),F(x)是f(x)的一个原函数 \\
         则I=\int_a^b f(x)dx=F(x)\Big|_a^b=F(b)-F(a) \\\\

         2.若f(x)在[a,b]上*(可积)(有界,有限个间断点)  \\
         I=F(b)-F(a) \\ \\

         3.若f(x)在[a,b]上可积, 但f(x)在a或b*(没定义) \\
         只要保证lims(b^-)F(x)或lims(a^+)F(x)存在 \\ \\
         I=lims(b^-)F(x)-lims(a^+)F(x)
         `
      ],

      [
         `1+\cos x \\
         (想办法三角代换)`,
         `1+\cos x=2\cos^2 \frac{x}{2} \\\\
         1+\cos x=1+\cos (2 \cdot \frac{x}{2}) \\
         =1+2\cos^2(\frac{x}{2})-1=2\cos^2 \frac{x}{2} 
         `
      ],

      [
         `\int_0^{pinv(2)}f(\sin x)dx=? \\
         (改变上下限)
         `,
         `image:integral_sin.png(
            \int_0^{pinv(2)}f(\sin x)dx=\int_{pinv(2)}^\pi f(\sin x)dx \\
            \int_0^\pi f(\sin x)dx=2\int_0^{pinv(2)} f(\sin x)dx 
         )`
      ],


      [
         `\int_0^{pinv(2)}f(\sin x)dx=\int_0^{pinv(2)}f(\cos x)dx \\\\
         为什么在0到pinv(2)上的关于\sin x的积分=关于\cos x的积分?
         `,
         `*(区间再现) \\
         \int_0^{pinv(2)}f(\sin x)dx ceq(t=\frac{\pi}{2}-x) \int_{pinv(2)}^0f(\sin (pinv(2)-t))\cdot -dt  \\
         =\int_0^{pinv(2)} f(\cos t)) dt 
         `
      ],

      [
         `\int_0^a\sqrt{2ax-x^2}dx=?`,
         `\int_0^a\sqrt{2ax-x^2}dx=\frac{\pi a^2}{4} \\ \\
         被积函数 \Rightarrow y^2+x^2-2ax=0 \\
         圆心为(a,0), 半径a 的圆的方程 \\ \\
         被积函数有根号,所以只要y>0的一半  \\ 
         被积区间为0到a, 所以*(上半圆的y一半)
         `,
         `\int_0^{2a}\sqrt{2ax-x^2}dx=?`,
         `\int_0^{2a}\sqrt{2ax-x^2}dx=\frac{\pi a^2}{2} `,
      ],
      [
         `\int_0^a\sqrt{a^2-x^2}dx=?`,
         `\int_0^a\sqrt{a^2-x^2}dx=\frac{\pi a^2}{4} \\ \\
         被积函数 \Rightarrow y^2+x^2=a^2 \\
         (圆心为(0,0), 半径为a 的圆的方程) \\
         被积函数有根号,所以只要y>0的一半  \\ 
         被积区间为0到a, 所以*(上半圆的y一半) \\
         也就是: \frac{\pi a^2}{4}
         `
      ],

      [
         `已知在[a,b]上f(x)\leq g(x) \\ 在什么情况下\int_a^b f(x)dx<\int_a^b g(x)dx?`,
         `当f(x)\not\equiv g(x), 且b>a时(上限大于下限) \\
         \int_a^b f(x)dx<\int_a^b g(x)dx \\
         函数\leq 中的等号可以去掉
         `
      ],

      [
         `如何判断形如\frac{f(x)}{x} 和 \frac{f(x)-f(a)}{x-a}的正负?`,
         `image:sign_graph.png(
            *(割线法) \\
            1. 判断区间内割线的趋势 (递增还是递减) \\
            2. 找到相应的最值a \\
            3. 可以判断出 \frac{f(x)}{x}>a或<a
         )`,
         `例: 判断\: \int_0^{pinv(2)}\frac{\sin x}{x}dx>1是否成立`,
         `image:sec_line_1.png(
            可以看到\frac{\sin x}{x}(也就是切线斜率)是递减的 \\
            (下页继续)
         )`,
         `
            最小的斜率在x=pinv(2)处, 斜率(也就是函数值)=\frac{\sin pinv(2)}{pinv(2)}=\frac{2}{\pi} \\
            所以\frac{\sin x}{x}>\frac{2}{\pi} \:\:\: (0<x<pinv(2)) \\
            所以 \int_0^{pinv(2)}\frac{\sin x}{x}dx>\int_0^{pinv(2)}\frac{2}{\pi}dx=1
         `,
      ],

      [
         `区间再现公式?`,
         `\int_a^b f(a+b-x)dx=\int_a^b f(x)dx \\\\
         证明: 令u=a+b-x, \:\:\: x=a+b-u \\
         \int_a^b f(x)dx=\int_{a+b-a}^{a+b-b} f(a+b-u)\cdot -du \\
         =-\int_b^a f(a+b-u)du=\int_a^b f(a+b-u)du
         `
      ],

      [
         `有关n次\sin, \cos的定积分公式`,
         `image:def_equation.png`,
         `证明: \int_0^\pi xf(\sin x)dx=pinv(2)\int_0^\pi f(\sin x)dx \\\\
         \int_0^\pi xf(\sin x)dxceq(区间再现)\int_0^\pi (\pi-x)f(\sin (\pi-x))dx \\
         (原式)=\pi\int_0^\pi f(\sin x)dx-\int_0^\pi xf(\sin x)dx \\
         2\int_0^\pi xf(\sin x)dx=\pi\int_0^\pi f(\sin x)dx \\
         \int_0^\pi xf(\sin x)dx=pinv(2)\int_0^\pi f(\sin x)dx \\
         `
      ],

      [
         `利用奇偶性求定积分: \int_{-a}^{a}f(x)dx=?`,
         `如果f(x)是奇函数的话，积分值等于0 \\
          如果f(x)是偶函数，积分等于2\int_0^{a}f(x)dx \\\\
          想象一下函数的图像, 奇函数就抵消了 \\
          偶函数就是翻倍
          `,
      ],

      [
         `利用周期性求定积分`,
         `image:def_zhouqi.png(F(x)=\int_a^b f(x)dx, 若F(x+T)=F(x) \\
         变上限积分以T为周期, 则 \\

         \int_a^{a+T} f(x)dx=\int_0^T f(x)dx
         )`
      ],


      [
         `定积分*(分部积分法)`,
         `\int_a^b udv=uv\Big|_a^b-\int_a^b vdu`
      ],

      [
         `定积分换元法`,
         `若f(x)在I上连续, 且对于 x=g(t), 若满足: \\
         g(t)在[$a,$b](或[$b,$a])上有*(连续导数), 且R_g \subseteq I \\\\

         则\int_a^b f(x)dx=\int_$a^$b f(g(t))g'(t)dt \\

         其中g($a)=a, \:\: g($b)=b \\ \\
         *(上下限不要忘了换!)
         `
      ],

      [
         `若f(x)有奇偶性, 则\int_0^x f(t)dt的奇偶性为?`,
         `
         *(奇偶性互换) \\
         f(x)是奇函数(偶函数), 则\int_0^x f(t)dt是偶函数(奇函数) \\\\
         令F(x)=\int_0^x f(t)dt,\:\:\: F(-x)=\int_0^{-x} f(t)dt \\
         ceq(令t=-u)\int_0^{x} f(-u)\cdot-du \:\: *(这里使用了换元), t=-u \\
         也就是t=\phi(u)=-u, 新的上限$b满足\phi($b)=-x \\
         -$b=-x \Rightarrow $b=x \\
         也就是: F(-x)=\int_0^{x} f(-u)\cdot-du=\int_0^{x} f(u)du=F(x)
         `,
         `已知, f(x) 与 \int_0^x f(t)dt 的奇偶性相反 \\\\
         这里为什么用的是 0到x? \\ a到x不可以吗?`,

         `\int_a^x f(t)dt=\int_a^0 f(t)dt+\int_0^x f(t)dt \\\\
         其中a到0的定积分*(就是个数)(只用讨论\neq0的情况) \\
         所以,如果f(x)*(是奇函数), 其变上限积分就是偶函数 \\
         那么 \int_a^x f(t)dt这是偶函数, (偶+偶)=偶  \\
         但如果f(x)是偶函数,变上限积分就是奇函数,*(这时就不成立了) \\
         (偶+奇)= 非奇非偶
         `,
      ],

      [
         `\int_{a}^{b}f(x)dx, 上下限a, b能颠倒吗?`,
         `\int_{a}^{b}f(x)dx=(-1)\int_{b}^{a}f(x)dx \\\\
         *(可以,颠倒上下限要加负号)
         `
      ],

      [
         `\int_{a}^{c}f(x)dx + \int_{c}^{b}f(x)dx = ? \\\\
         相同函数的积分,定积分可以合并吗
         `,
         `\int_{a}^{c}f(x)dx + \int_{c}^{b}f(x)dx = \int_{a}^{b}f(x)dx \\\\
         定积分上下限连着,可以合并
         `
      ],

      ["\\int_{a}^{a}f(x)dx=?", "0"],
      [
         `\int_{a}^{b}f(x)+g(x) \:\: dx=? \\
         定积分能拆开吗?
         `,
         `\int_{a}^{b}f(x)dx + \int_{a}^{b}g(x)dx \\\\
         *(定积分可以拆项做) \\
         (上下限相同)
         `
      ],

      [
         `变上限积分的导数: (\int_a^x f(t)dt)'=?
         `,
         `设f(x)在[a,b]上连续, 则 \int_a^x f(t)dt在[a,b]上可导 \\ (\int_a^x f(t)dt)'=f(x) \\\\
         变上限积分就是f(x)的一个原函数`,
         `(\int_{\phi(x)}^{g(x)}f(t)dt)'=?`,
         `(\int_{\phi(x)}^{g(x)}f(t)dt)'=f(g(x))g'(x)-f(\phi(x))\phi'(x)`,
      ],

      [
         `积分中值定理`,
         `若f(x)在[a,b]上连续, 则 \\
         \int_a^b f(x)dx=f($xi)(b-a) \\
         a < $xi < b
         `,

         `若f(x), g(x)在[a,b]上连续 \\
         g(x)不变号 (在[a,b]上恒大于零或恒小于零) \\
         \int_a^b f(x)g(x)dx=f($xi)\int_a^b g(x)dx \\
         a\leq $xi \leq b`,
      ],

      [
         `定积分的不等式`,
         `若f(x)\leq g(x), 其中(a\leq b) \\
         则\int_a^b f(x)dx \leq \int_a^b g(x)dx `,
         `image:def_integral_compare.png(
            (估值性) 若f(x)在[a,b]上连续,则 \\
            m(b-a)\leq\int_a^b f(x)dx \leq M(b-a)
         )`,
         `\left | \int_a^b f(x)dx \right |\leq \int_a^b \left | f(x) \right | dx `,
      ],

      [
         `定积分的几何意义`,
         `image:def_integral.svg(
             当f(x)>0时,积分结果是正的 \\
             当f(x)<0时,积分结果是负的, \\
             正的减负的
         )`
      ],

      [
         `可积的必要条件?`,
         `函数在[a,b]上必须有界`
      ],

      [
         `定积分存在的充分条件`,
         `1. f(x)在[a,b]上连续 \\\\
           2. f(x)在[a,b]上有界,且只有*(有限)个间断点 \\
           第一、二类间断点都可以 \\ (在[a,b]上有界,不可能出现无穷间断点) \\\\
           3. f(x)在[a,b]上仅有有限个第一类间断点
              `
      ],

      [
         `可积的定义`,
         `\int_a^b f(x)dx=lims(0,\lambda) \sum_{i=1}^n f($xi_i)\Delta x_i \\ \\
              不论小区间怎么分, 不论$xi_i怎么取 \\
              极限值都一样,就称f(x)在[a,b]上可积 \\
              极限存在=可积
              `
      ],

      [
         `定积分的定义?`,
         `\int_a^b f(x)dx=lims(0,\lambda) \sum_{i=1}^n f($xi_i)\Delta x_i \\\\

              其中\lambda 代表把a,b分段长度的最大值\to0 \\
              $xi_i代表每段的函数值选点,可以任意选 \\
              \Delta x_i=x_i-x_{i-1} 代表第i个分段长度 \\
              *(注意:)\lambda\to0\neq n\to0
          `
         // https://youtu.be/AIei7kqhsfU?list=PLH_SiDrNHIUSMXnfNVzGydNZi1hVduhUb&t=3672
      ],

      [
         `求解*(简单无理函数)积分的一般方法是? \\\\
         简单无理函数: R(x, \sqrt[n]{\frac{ax+b}{cx+d}}) \\
         可以开n次根号,但其中x需要是一次的
         `,
         `R(x, \sqrt[n]{\frac{ax+b}{cx+d}}) \\\\
          一般方法: 令t=\sqrt[n]{\frac{ax+b}{cx+d}} \\
          式子就化为关于t的*(有理函数)积分`
      ],

      [
         `不定三角有理式规律`,
         `image:math_2023-08-18-03-10-43.png(
            1. -\sin x替换\sin x,整体差个负号,*(凑cos x) \\
            2. -\cos x替换\cos x,整体差个负号,*(凑sin x) \\
            2. \sin x和\cos x都换成负的,整体符号不变,*(凑tan x) \\
         )`
      ],
      [
         `求解*(三角有理式)积分的一般方法: \\
          \int R(\sin x, \cos x) dx`,

         `令t=\tan \frac{x}{2}, 做代换, 其中dx=\frac{2}{1+t^2}dt \\\\
         \sin x = \frac{2t}{1+t^2},  \:\:\: \cos x=\frac{1-t^2}{1+t^2} \\\\
         这样就把三角有理式 \\ 换成了关于t的有理函数(一定可积)
         `,
         `\sin x=\frac{2\sin \frac{x}{2}\cos \frac{x}{2}}{\sin ^2\frac{x}{2}+\cos ^2\frac{x}{2}} \\\\
         ceq(上下同除\cos^2\frac{x}{2}) \ \sin x=\frac{2\tan \frac{x}{2}}{1+\tan ^2\frac{x}{2}}=\frac{2t}{1+t^2}`,

         `\cos x= \cos (2\cdot \frac{x}{2})=\frac{1-\tan^2(\frac{x}{2})}{1+\tan^2(\frac{x}{2})} \\\\
         =\frac{1-t^2}{1+t^2}
         `,

         `t=\tan \frac{x}{2}, \:\:\: x=2\arctan t \\
         dx=d(2\arctan t)=\frac{2}{1+t^2}dt
         `,
      ],
      [
         `常见的可积函数`,
         `有理函数R(x) \\ 有理函數是通過*(多項式)的加減乘除得到的函數 \\
          (1) 部分分式法 \\
          (2) 加项减项凑微分
          `
      ],

      [
         `有哪些积不出函数?`,
         `e^{x^2}, \frac{\sin x}{x}, \frac{\cos x}{x} 是积不出的`
      ],

      [
         `\sqrt{x^2-a^2}, 求积分三角换元`,
         `对\sqrt{x^2-a^2}换元 \\
         x=a\sec($th), \:\: $th=\sec^{-1} (\frac{x}{a}) \\
         其中$th \in [0,pinv(2)) \cup (pinv(2), \pi], *(在第一、二象限) \\ 
         \sqrt{x^2-a^2}=\sqrt{a^2\tan^2$th}=|a\tan$th| \\
         \tan$th在第一象限正, *(在第二象限是负的) \\
         *(谨慎判断正负!)`,
         `image:integral_trig_3.png`,
      ],

      [
         `\sqrt{a^2+x^2}, 求积分三角换元`,
         `x=a\tan($th), \:\: $th=\arctan \frac{x}{a} \\
         其中$th\in(-pinv(2), pinv(2)), *(在第一、四象限) \\
         \sqrt{a^2+x^2}=\sqrt{a^2\sec^2($th)}=a\sec$th \\
         \sec在一、四象限都是正的,不用考虑绝对值
         `
      ],

      [
         `\sqrt{a^2-x^2}, 求积分三角换元`,
         `x=a\sin($th), \:\: $th=\arcsin \frac{x}{a} \\
         其中$th\in[-pinv(2), pinv(2)], *(在第一、四象限) \\

         \sqrt{a^2-x^2}=\sqrt{a^2\cos^2($th)}=a\cos$th \\
         \cos在一、四象限都是正的,不用考虑绝对值
         `
      ],

      [
         `\int \sec $th d$th=?`,
         `\int \sec $th d$th=\ln|\sec $th + \tan $th|+C \\\\
            =\int \frac{\sec $th(\sec $th+\tan $th)}{(\sec $th+\tan $th)} d $th \\
            =\int \frac{\sec^2 $th +\sec$th \tan $th}{\sec $th+\tan $th} d $th \\
            =\int \frac{d(\sec $th+\tan $th)}{\sec $th+\tan $th}=\ln|\sec $th + \tan $th| +C
           `,
      ],

      [
         `\int \frac{dx}{\sqrt{x^2+a^2}}=?`,
         `\int \frac{dx}{\sqrt{x^2+a^2}}=\ln(x+\sqrt{x^2+a^2})+C`,
         `证明:
            \int \frac{dx}{\sqrt{x^2+a^2}} ceq(x=a\tan$th) \int \frac{dx}{\sqrt{a^2\tan^2$th+a^2}}  \\
            =\int \frac{dx}{\sqrt{a^2(\tan^2$th+1)}}=\int \frac{dx}{|a|\sqrt{\sec^2$th}} \\
            ceq(dx=a\sec^2$th d $th) \int \frac{a\sec^2$th d $th}{|a\sec$th|}
            ($th=\tan^{-1}\frac{x}{a}) \:\: $th\in(-pinv(2), pinv(2)) \\
            $th在第一、四象限,所以a(底边)>0, \sec $th>0 \\
            =\int \sec$th d$th=\ln |\sec $th+\tan$th|+C \\
            (下页继续, 把$th换回x)
           `,
         `
            \sec $th=\frac{\sqrt{x^2+a^2}}{a}, \tan $th=\frac{x}{a} \\
           =\ln |\frac{\sqrt{x^2+a^2}}{a}+\frac{x}{a}|+C=\ln |inv(a)(\sqrt{x^2+a^2}+x)|+C \\
            =\ln |inv(a)(\sqrt{x^2+a^2}+x)|+C=-\ln a + \ln |\sqrt{x^2+a^2}+x|+C \\
            ceq(\ln a合并到C)\ln |\sqrt{x^2+a^2}+x|+C,其中x<=\sqrt{x^2},可以去掉绝对值`,
      ],

      [
         `\int \frac{dx}{x^2-a^2}=?`,
         `\int \frac{dx}{x^2-a^2}=inv(2a)\ln\left|\frac{x-a}{x+a}\right |+C \\\\
            \int \frac{dx}{x^2-a^2}=\int \frac{dx}{(x-a)(x+a)} \\
            ceq(分项) inv(2a) \int \frac{(x+a)-(x-a)}{(x-a)(x+a)}dx \\
            =inv(2a) \left (\int inv(x-a)dx-\int inv(x+a)dx \right ) \\
            =inv(2a) \left (\ln|x-a|-\ln|x+a| \right )+C \\
            =inv(2a) \ln \left | \frac{x-a}{x+a} \right |+C
           `,
      ],
      //   ["\\int \\csc(x)dx=?", "\\int \\csc xdx=-\\ln \\left|\\csc x+\\cot x\\right|+C"],
      //   ["\\int \\sec(x)dx=?", "\\int \\sec xdx=\\ln \\left|\\sec x+\\tan x\\right|+C"],
      //   ["\\int \\frac{dx}{\\sqrt{x^2-a^2}}=?", "\\int \\frac{dx}{\\sqrt{x^2-a^2}}=\\ln \\left|x+\\sqrt{x^2-a^2}\\right|+C"],
      //   ["\\int \\frac{dx}{\\sqrt{x^2+a^2}}=?", "\\int \\frac{dx}{\\sqrt{x^2+a^2}}=\\ln \\left|x+\\sqrt{x^2+a^2}\\right|+C"],
      //   ["\\int \\frac{1}{x^2-a^2}dx=?", "\\int \\frac{1}{x^2-a^2}dx=\\frac{1}{2a}\\ln \\left|\\frac{x-a}{x+a}\\right|+C"],
      //   ["\\int \\frac{1}{\\sqrt{a^2-x^2}}dx=?", "\\int \\frac{1}{\\sqrt{a^2-x^2}}dx=\\arcsin \\left(\\frac{x}{a}\\right)+C"],

      [
         `image:int_que.png`,
         `image:int_ans.png`,
      ],

      [
         `\int kf(x)dx=?`,
         `\int kf(x)dx=k\int f(x)dx`,
      ],

      [
         `\int[f(x)\pm g(x)]dx=?`,
         `\int[f(x)\pm g(x)]dx=\int f(x)dx \pm \int g(x)dx \\
           加减可以分项来做
           `,
      ],

      [
         `\int df(x)=?`,
         `\int df(x)=\int f'(x)dx=f(x)+C`,
      ],

      [
         `\int f'(x)dx=?`,
         `\int f'(x)dx=f(x)+C`,
      ],

      [
         `d\int f(x)dx=? \\
           积分的微分是?`,
         `d\int f(x)dx=f(x)dx`,
      ],

      [
         `(\int f(x)dx)'=?`,
         `(\int f(x)dx)'=f(x)`,
      ],

      [
         `f(x)的*(间断点)和*(原函数)存在性关系`,
         `若f(x)在区间I上有*(第一类间断点) \\
            则f(x)在I上*(一定没有原函数) \\\\
            (有第二类间断点*(可能)有原函数)
            `
      ],

      [
         `什么样的函数有原函数?(积分)`,
         `若f(x)在区间I上连续 \\
            则f(x)在区间I上一定存在原函数`
      ],
   ]
} as ICardStack;
