import { ICardStack } from "../../types/card-type";

export default {
   id: "math_integral",
   label: "积分",

   cards: [
      // [
      //    ``,
      //     ``
      // ],

      //   ["t=\\tan \\frac{x}{2} \\\\ dx=? \\sin x=? \\cos x=?", "x = 2\\arctan t \\\\ dx=\\frac{2}{1+t^2}dt, \\sin x = \\frac{2t}{1+t^2} \\\\ \\cos x=\\cos x=\\frac{1-t^2}{1+t^2}", "\\sin x=\\frac{2\\sin \\frac{x}{2}\\cos \\frac{x}{2}}{\\sin ^2\\frac{x}{2}+\\cos ^2\\frac{x}{2}} \\\\ 上下同除\\cos\\frac{x}{2} \\\\ \\sin x=\\frac{2\\tan \\frac{x}{2}}{1+\\tan ^2\\frac{x}{2}}=\\frac{2t}{1+t^2}"],

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
         `1. 万能代换:\tan \frac{x}{2}=t`
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