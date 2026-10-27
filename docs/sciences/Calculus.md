# 微积分

!!! abstract "参考教材"

    本文整理自苏德矿、吴明华、童雯雯主编的《微积分》（第3版）上、下册。

## 第一章 函数与极限

### §1 函数

#### §1.1 函数的概念

**常量与变量：** 在所研究的过程中保持不变的量称为常量，可以取不同数值的量称为变量。

**函数：** 设 $D,B$ 为非空实数集，若对应法则 $f$ 使每个 $x\in D$ 都有唯一的 $y\in B$ 与之对应，则称 $f:D\to B$ 为定义在 $D$ 上的函数，记为 $y=f(x)$。$x$ 为自变量，$y$ 为因变量；$D$ 为定义域，值域为

$$
R(f)=\{f(x):x\in D\}.
$$

函数由定义域和对应法则确定，函数图形为点集 $\{(x,f(x)):x\in D\}$。函数的表示方法有表格法、图像法和公式法。分段函数是在定义域的不同部分用不同数学表达式表示的函数。

**邻域与去心邻域：** 对 $\delta>0$，

$$
U(x_0,\delta)=(x_0-\delta,x_0+\delta),\qquad
\mathring U(x_0,\delta)=\{x:0<|x-x_0|<\delta\}.
$$

相应的左、右去心邻域分别为 $(x_0-\delta,x_0)$、$(x_0,x_0+\delta)$。

**复合函数：** 由 $y=f(u)$、$u=\varphi(x)$ 组成的函数为 $y=f(\varphi(x))$，其中 $u$ 是中间变量，定义域为

$$
\{x:x\in D(\varphi),\ \varphi(x)\in D(f)\}.
$$

**反函数：** 若对每个 $y\in R(f)$，都存在唯一的 $x\in D$ 满足 $y=f(x)$，则由这一对应关系得到的函数称为 $f$ 的反函数，记为 $f^{-1}:R(f)\to D$。按以 $x$ 为自变量的记法，反函数为 $y=f^{-1}(x)$。

**基本初等函数：** 常值函数、幂函数、指数函数、对数函数、三角函数和反三角函数统称为基本初等函数。

| 类型 | 数学表示与定义域 |
| --- | --- |
| 常值函数 | $y=C$，$C$ 为常数，$x\in\mathbb R$ |
| 幂函数 | $y=x^a$，$a$ 为常数，定义域由 $a$ 决定，包含 $(0,+\infty)$ |
| 指数函数 | $y=a^x$，$a>0$、$a\ne1$，$x\in\mathbb R$ |
| 对数函数 | $y=\log_a x$，$a>0$、$a\ne1$，$x>0$ |
| 三角函数 | $\sin x,\cos x$；$\tan x$（$x\ne k\pi+\pi/2$）；$\cot x$（$x\ne k\pi$），$k\in\mathbb Z$ |
| 反三角函数 | $\arcsin x,\arccos x$（$-1\le x\le1$）；$\arctan x,\operatorname{arccot}x$（$x\in\mathbb R$） |

由基本初等函数经过有限次四则运算和复合运算得到的函数称为初等函数；不是初等函数的函数称为非初等函数。

#### §1.2 具有某些特性的函数

**奇函数与偶函数：** 定义域 $D$ 关于原点对称时，对所有 $x\in D$，若 $f(-x)=-f(x)$，称 $f$ 为奇函数；若 $f(-x)=f(x)$，称 $f$ 为偶函数。

**周期函数：** 若存在非零常数 $T$，使每个 $x\in D$ 都满足 $x+T\in D$ 且 $f(x+T)=f(x)$，则称 $f$ 为周期函数，$T$ 为其周期。若正周期中存在最小值，称为基本周期。

**单调函数：** 对定义域中的任意 $x_1<x_2$，

| 关系 | 名称 |
| --- | --- |
| $f(x_1)\le f(x_2)$ | 递增函数 |
| $f(x_1)\ge f(x_2)$ | 递减函数 |
| $f(x_1)<f(x_2)$ | 严格递增函数 |
| $f(x_1)>f(x_2)$ | 严格递减函数 |

严格单调函数存在反函数，且反函数具有相同的严格单调性。

**有界集、确界原理 \***

对非空数集 $A\subset\mathbb R$，若存在 $M$（或 $N$），使所有 $x\in A$ 满足 $x\le M$（或 $x\ge N$），则称 $A$ 有上界（或下界）。既有上界又有下界的数集称为有界集。

$\alpha=\sup A$ 表示 $A$ 的上确界，即

$$
\forall x\in A,\ x\le\alpha;\qquad
\forall\varepsilon>0,\ \exists x_0\in A,\ x_0>\alpha-\varepsilon.
$$

$\beta=\inf A$ 表示 $A$ 的下确界，即

$$
\forall x\in A,\ x\ge\beta;\qquad
\forall\varepsilon>0,\ \exists x_0\in A,\ x_0<\beta+\varepsilon.
$$

非空有上界（下界）的实数集存在上确界（下确界）。

**有界函数、无界函数**

设函数 $f$ 的定义域为 $D$。若存在常数 $M$（或 $N$），使所有 $x\in D$ 满足 $f(x)\le M$（或 $f(x)\ge N$），则称 $f$ 在 $D$ 上有上界（或下界）。

若存在 $M>0$，使所有 $x\in D$ 满足 $|f(x)|\le M$，则称 $f$ 在 $D$ 上有界；若对任意 $M>0$，总存在 $x_0\in D$，使 $|f(x_0)|>M$，则称 $f$ 在 $D$ 上无界。

!!! warning "提示"

    -   **奇偶性先看定义域**：只有定义域关于原点对称，才谈得上奇偶性；否则函数既不是奇函数也不是偶函数。若奇函数在 $x=0$ 有定义，则必有 $f(0)=0$。

        ??? example "奇偶性判断"
            <!-- 待补充 -->

    -   **周期不唯一，基本周期未必存在**：任一周期 $T$ 的整数倍仍是周期，"最小正周期"存在时才叫基本周期；验证 $f(x+T)=f(x)$ 时还要确认 $x+T$ 仍在定义域内。

        ??? example "周期性与基本周期"
            <!-- 待补充 -->

    -   **单调性离不开区间**：同一函数在不同区间上可能有不同的单调性；严格单调是存在反函数的充分条件，反函数保持相同的严格单调性。

        ??? example "单调性与反函数"
            <!-- 待补充 -->

    -   **有界与确界的区别**：有界要求同时有上界和下界，即存在 $M>0$ 使 $|f(x)|\le M$；$\sup A$、$\inf A$ 是"最小上界/最大下界"，不一定属于 $A$。无界定义中"对任意 $M>0$，存在 $x_0$"的量词顺序不能颠倒。

        ??? example "有界性与确界"
            <!-- 待补充 -->

    -   **复合函数的定义域**：不能只取内函数的定义域，而要同时满足 $x\in D(\varphi)$ 与 $\varphi(x)\in D(f)$；复合后的值域通常只是 $R(f)$ 的子集。

        ??? example "复合函数的定义域"
            <!-- 待补充 -->

### §2 数列极限

#### §2.1 数列极限的概念

**数列：** 定义域为正整数集 $\mathbb N_+$ 的函数所对应的函数值依次排列为 $a_1,a_2,\ldots,a_n,\ldots$，记为 $\{a_n\}$，$a_n$ 称为通项。

**有界数列：** 若存在 $M>0$，使所有 $n\in\mathbb N_+$ 满足 $|a_n|\le M$，则称 $\{a_n\}$ 为有界数列。

**数列极限：** 若常数 $a$ 满足

$$
\forall\varepsilon>0,\ \exists N\in\mathbb N_+,\ \forall n>N,\quad |a_n-a|<\varepsilon,
$$

则称 $\{a_n\}$ 收敛于 $a$，记为 $\lim_{n\to\infty}a_n=a$ 或 $a_n\to a$；不收敛的数列称为发散数列。

**说明：** 一般说，$N$ 是随着 $\varepsilon$ 的变小而变大的。$\varepsilon$ 给定以后，确定的 $N$ 不是唯一的，因为对已给的 $\varepsilon$，若 $N=100$ 满足要求，则 $N=101,102,\ldots$ 自然也满足要求。在定义中，只要求存在一个正整数 $N$，而不在乎它的值有多大，只要求对一切 $n>N$ 时，都有 $|a_n-a|<\varepsilon$。至于 $n\le N$ 时，$|a_n-a|$ 是大于或等于 $\varepsilon$ 是无关紧要的，而且 $n>N$ 也可改成 $n\ge N$。

#### §2.2 收敛数列的性质

设 $a_n\to a$、$b_n\to b$。

| 性质 | 数学关系 |
| --- | --- |
| 唯一性 | 收敛数列的极限唯一 |
| 有界性 | 存在 $M>0$，使所有 $n$ 满足 $\lvert a_n\rvert\le M$ |
| 保号性 | 若 $a>0$（$a<0$），则充分大的 $n$ 满足 $a_n>0$（$a_n<0$） |
| 不等式性质 | 若充分大的 $n$ 满足 $a_n\le b_n$，则 $a\le b$ |
| 四则运算 | $\lim(a_n\pm b_n)=a\pm b$，$\lim(a_nb_n)=ab$，$\lim(ca_n)=ca$，$c$ 为常数 |
| 商的极限 | $\displaystyle\lim\frac{a_n}{b_n}=\frac ab$，其中 $b\ne0$ |

??? info "唯一性的证明"

    反证法。假设极限值不唯一，即有 $\lim_{n\to\infty}a_n=a$，$\lim_{n\to\infty}a_n=b$，$a\ne b$。

    取 $\varepsilon=\dfrac{|a-b|}{3}>0$，由 $\lim_{n\to\infty}a_n=a$ 知，存在正整数 $N_1$，当 $n>N_1$ 时，有

    $$
    |a_n-a|<\varepsilon.
    $$

    同理，由 $\lim_{n\to\infty}a_n=b$ 知，存在正整数 $N_2$，当 $n>N_2$ 时，有

    $$
    |a_n-b|<\varepsilon.
    $$

    取 $N=\max\{N_1,N_2\}$，当 $n>N$ 时，都有 $|a_n-a|<\varepsilon$，$|a_n-b|<\varepsilon$。则

    $$
    |a-b|=|a-a_n+a_n-b|\le|a_n-a|+|a_n-b|
    <\varepsilon+\varepsilon=2\varepsilon=\frac23|a-b|,
    $$

    由 $|a-b|>0$，推出 $1<\dfrac23$。矛盾。

#### §2.3 数列极限存在的准则

**夹逼定理：** 若充分大的 $n$ 满足 $a_n\le c_n\le b_n$，且 $a_n\to a$、$b_n\to a$，则 $c_n\to a$。

??? info "夹逼定理的证明"

    由 $\lim_{n\to\infty}a_n=a$ 知，任给 $\varepsilon>0$，存在正整数 $N_1$，当 $n>N_1$ 时，有

    $$
    |a_n-a|<\varepsilon,\quad\text{即 }a-\varepsilon<a_n<a+\varepsilon.
    $$

    由 $\lim_{n\to\infty}b_n=a$，对上述的 $\varepsilon>0$，存在正整数 $N_2$，当 $n>N_2$ 时，有

    $$
    |b_n-a|<\varepsilon,\quad\text{即 }a-\varepsilon<b_n<a+\varepsilon.
    $$

    又由题意知，当 $n>N_0$ 时，有 $a_n\le c_n\le b_n$。取 $N=\max\{N_0,N_1,N_2\}$，当 $n>N$ 时，有

    $$
    a-\varepsilon<a_n,\qquad a_n\le c_n\le b_n,\qquad b_n<a+\varepsilon.
    $$

    于是，有

    $$
    a-\varepsilon<c_n<a+\varepsilon,\quad\text{即 }|c_n-a|<\varepsilon,
    $$

    所以数列 $\{c_n\}$ 收敛，且 $\lim_{n\to\infty}c_n=a$。

**单调有界定理：** 单调递增且有上界的数列、单调递减且有下界的数列均收敛。

???+ example "例15"

    求极限 $\displaystyle\lim_{n\to\infty}\frac12\times\frac34\times\frac56\times\cdots\times\frac{2n-1}{2n}$。

    ??? success "解析"

        由于

        $$
        \frac12\times\frac34\times\cdots\times\frac{2n-1}{2n}
        <\frac23\times\frac45\times\cdots\times\frac{2n}{2n+1},
        $$

        所以

        $$
        \left(\frac12\times\frac34\times\cdots\times\frac{2n-1}{2n}\right)^2
        <\frac12\times\frac23\times\frac34\times\frac45\times\cdots
        \times\frac{2n-1}{2n}\times\frac{2n}{2n+1}
        =\frac1{2n+1},
        $$

        即

        $$
        0<\frac12\times\frac34\times\cdots\times\frac{2n-1}{2n}
        <\frac1{\sqrt{2n+1}}<\frac1{\sqrt n}.
        $$

        且 $\lim\limits_{n\to\infty}0=0$，$\lim\limits_{n\to\infty}\dfrac1{\sqrt n}=0$，由夹逼定理知

        $$
        \lim_{n\to\infty}\frac12\times\frac34\times\cdots\times\frac{2n-1}{2n}=0.
        $$

**子列：** 按严格递增的正整数下标 $n_1<n_2<\cdots<n_k<\cdots$ 从 $\{a_n\}$ 中抽出的数列 $\{a_{n_k}\}$ 称为其子列。若 $a_n\to a$，则每个子列均满足 $a_{n_k}\to a$。

#### §2.4 数列极限存在的准则（续） \*

**魏尔斯特拉斯定理：** 有界实数列存在收敛子列。

**柯西收敛准则：** $\{a_n\}$ 收敛的充要条件为

$$
\forall\varepsilon>0,\ \exists N\in\mathbb N_+,\ \forall m,n>N,\quad |a_m-a_n|<\varepsilon.
$$

等价形式为：任给 $\varepsilon>0$，存在 $N$，使 $n>N$ 时对所有正整数 $p$ 都有 $|a_{n+p}-a_n|<\varepsilon$。

!!! warning "提示"

    -   **柯西准则的量词**：要求存在 $N$，使 **一切** $m,n>N$ 都有 $|a_m-a_n|<\varepsilon$，不能只对某个固定的 $m$ 或 $n$ 验证；等价形式 $|a_{n+p}-a_n|<\varepsilon$ 也必须对一切正整数 $p$ 成立。

        ??? example "柯西准则的验证"
            <!-- 待补充 -->

    -   **有界不是收敛的充分条件**：收敛必有界，但有界数列未必收敛，如 $(-1)^n$；魏尔斯特拉斯定理只保证存在收敛子列，不能据此断言原数列收敛。

        ??? example "有界与收敛"
            <!-- 待补充 -->

    -   **子列的下标必须严格递增**：子列保持原数列的先后次序。若原数列收敛，则所有子列收敛于同一极限；若两个子列极限不同，原数列必发散。

        ??? example "子列与极限"
            <!-- 待补充 -->

    -   **单调有界定理的方向**：递增需有上界、递减需有下界；仅有单调性（如 $a_n=n$）或仅有有界性（如 $(-1)^n$）都不足以保证收敛。

        ??? example "单调有界定理"
            <!-- 待补充 -->

### §3 函数极限

#### §3.1 函数极限的概念

设 $f$ 在 $x_0$ 的某个去心邻域内有定义。若常数 $A$ 满足

$$
\forall\varepsilon>0,\ \exists\delta>0,\quad
0<|x-x_0|<\delta\ \Longrightarrow\ |f(x)-A|<\varepsilon,
$$

则称 $A$ 为 $f(x)$ 当 $x\to x_0$ 时的极限，记为 $\lim_{x\to x_0}f(x)=A$。

左极限 $\lim_{x\to x_0^-}f(x)$、右极限 $\lim_{x\to x_0^+}f(x)$ 分别将条件换为 $x_0-\delta<x<x_0$、$x_0<x<x_0+\delta$。

$$
\lim_{x\to x_0}f(x)=A
\quad\Longleftrightarrow\quad
\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=A.
$$

若 $f$ 在相应无穷区间上有定义，则

$$
\lim_{x\to+\infty}f(x)=A
\quad\Longleftrightarrow\quad
\forall\varepsilon>0,\ \exists X>0,\ x>X\Rightarrow|f(x)-A|<\varepsilon.
$$

$x\to-\infty$、$x\to\infty$ 的定义分别将 $x>X$ 换为 $x<-X$、$|x|>X$，并有

$$
\lim_{x\to\infty}f(x)=A
\quad\Longleftrightarrow\quad
\lim_{x\to+\infty}f(x)=\lim_{x\to-\infty}f(x)=A.
$$

#### §3.2 函数极限的性质

设 $\lim_{x\to x_0}f(x)=A$、$\lim_{x\to x_0}g(x)=B$。有限极限具有唯一性；$f$ 在 $x_0$ 的某个去心邻域内有界。

$$
\lim_{x\to x_0}(f\pm g)=A\pm B,\qquad
\lim_{x\to x_0}fg=AB,\qquad
\lim_{x\to x_0}cf=cA,
$$

$$
\lim_{x\to x_0}\frac fg=\frac AB\qquad(B\ne0).
$$

其中 $c$ 为常数。若 $A>0$（$A<0$），则 $f(x)$ 在某个去心邻域内为正（负）；若该邻域内 $f(x)\le g(x)$，则 $A\le B$。

若 $\varphi(x)\to u_0$、$f(u)\to A$（$u\to u_0$），且 $x_0$ 的某个去心邻域内 $\varphi(x)\ne u_0$，则

$$
\lim_{x\to x_0}f(\varphi(x))=A.
$$

#### §3.3 函数极限存在的准则

**夹逼定理：** 若 $x_0$ 的某个去心邻域内 $f(x)\le h(x)\le g(x)$，且 $\lim_{x\to x_0}f(x)=\lim_{x\to x_0}g(x)=A$，则 $\lim_{x\to x_0}h(x)=A$。

**归结原则（海涅定理）：** $\lim_{x\to x_0}f(x)=A$ 的充要条件是：对于定义域内每个满足 $x_n\to x_0$ 且 $x_n\ne x_0$ 的数列，都有 $f(x_n)\to A$。

#### §3.4 函数极限存在的准则（续） \*

**单调有界准则：** 单调有界函数在区间端点存在相应的单侧极限。

**柯西收敛准则：** 设 $f$ 在 $x_0$ 的某个去心邻域内有定义，其有限极限存在的充要条件为

$$
\forall\varepsilon>0,\ \exists\delta>0,\quad
\begin{cases}
0<|x'-x_0|<\delta,\\
0<|x''-x_0|<\delta
\end{cases}
\Longrightarrow |f(x')-f(x'')|<\varepsilon.
$$

#### §3.5 无穷小量、无穷大量、阶的比较

**无穷小量：** 在指定变化过程中以 $0$ 为极限的变量。$f(x)\to A$ 等价于 $f(x)=A+\alpha(x)$，其中 $\alpha(x)\to0$。

有限个无穷小量的和、积仍为无穷小量；无穷小量与有界量的积仍为无穷小量。

**无穷大量：** 设 $f$ 在 $x_0$ 的某个去心邻域内有定义，若

$$
\forall M>0,\ \exists\delta>0,\quad
0<|x-x_0|<\delta\Rightarrow |f(x)|>M,
$$

则称 $f$ 为 $x\to x_0$ 时的无穷大量，记为 $f(x)\to\infty$。将 $|f(x)|>M$ 分别换为 $f(x)>M$、$f(x)<-M$，得到正、负无穷大量的定义。

$$
f(x)\to\infty\ \Longrightarrow\ \frac1{f(x)}\to0;
\qquad
f(x)\to0,\ f(x)\ne0\ \Longrightarrow\ \frac1{f(x)}\to\infty.
$$

第二式要求 $f(x)$ 在某个去心邻域内非零。

设 $\alpha,\beta$ 为同一变化过程中的无穷小量，且 $\beta$ 在所讨论的去心邻域内非零。

| 极限关系 | 概念与记号 |
| --- | --- |
| $\alpha/\beta\to0$ | $\alpha$ 是比 $\beta$ 高阶的无穷小量，记为 $\alpha=o(\beta)$ |
| $\alpha/\beta\to c\ne0$ | $\alpha,\beta$ 为同阶无穷小量 |
| $\alpha/\beta\to1$ | $\alpha,\beta$ 为等价无穷小量，记为 $\alpha\sim\beta$ |

若 $k>0$、$c\ne0$，且 $f(x)/(x-x_0)^k\to c$（$x\to x_0^+$），则称 $f(x)$ 为关于 $x-x_0$ 的 $k$ 阶无穷小量。无穷大量的同阶、等价关系也分别由商趋于非零常数、趋于 $1$ 定义；若两个无穷大量之商趋于 $0$，分子称为比分母低阶的无穷大量。

#### §3.6 两个重要极限

$$
\lim_{x\to0}\frac{\sin x}{x}=1,\qquad
\lim_{x\to\infty}\left(1+\frac1x\right)^x=e.
$$

等价形式为

$$
\lim_{x\to0}(1+x)^{1/x}=e,\qquad
\lim_{n\to\infty}\left(1+\frac1n\right)^n=e.
$$

当 $x\to0$ 时，

$$
\sin x\sim x,\qquad \tan x\sim x,\qquad 1-\cos x\sim\frac{x^2}{2}.
$$

对所有 $x\in\mathbb R$，$|\sin x|\le|x|$。

若同一变化过程中 $f\sim f_1$、$g\sim g_1$、$h\sim h_1$，且右侧极限存在或为无穷大，则

$$
\lim\frac{fg}{h}=\lim\frac{f_1g_1}{h_1}.
$$

???+ example "例17"

    求 $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$。

    ??? success "解析"

        $$
        \lim_{x\to0}\frac{1-\cos x}{x^2}
        =\lim_{x\to0}\frac{2\left(\sin\dfrac x2\right)^2}{x^2}
        =\lim_{x\to0}\frac12\left(\frac{\sin\dfrac x2}{\dfrac x2}\right)^2
        =\frac12.
        $$

#### §3.7 极限在经济中的应用

**复利：** 将利息并入本金参与后续计息。初始本金为 $P$、年利率为 $r$、每年计息 $n$ 次时，$t$ 年后的余额为

$$
A_t=P\left(1+\frac rn\right)^{nt}.
$$

年有效收益率为 $\left(1+r/n\right)^n-1$；连续复利的余额为

$$
B=Pe^{rt}.
$$

**现值与将来值：** 在年利率 $r$ 下，现值 $P$ 与 $t$ 年后将来值 $S$ 的关系为 $S=P(1+r)^t$；连续复利时为 $S=Pe^{rt}$。

!!! warning "提示"

    -   **名义利率与有效年利率**：$r$ 是名义年利率、$n$ 是每年计息次数，$t$ 年后的复利为 $P(1+r/n)^{nt}$；有效年收益率为 $(1+r/n)^n-1$，比较不同计息频率的产品应使用有效收益率，不能直接比较 $r$。

        ??? example "复利与有效年收益率"
            <!-- 待补充 -->

    -   **连续复利是极限情形**：$Pe^{rt}$ 是 $n\to\infty$ 时的极限，$e^{rt}-1$ 才是连续复利下的有效收益率；不要把 $r$ 直接当作实际年增长率。

        ??? example "连续复利"
            <!-- 待补充 -->

    -   **现值与将来值方向**：$S=P(1+r)^t$ 是由现值求将来值，$P=S(1+r)^{-t}$ 才是折现；连续复利下对应 $S=Pe^{rt}$、$P=Se^{-rt}$。

        ??? example "现值与将来值"
            <!-- 待补充 -->

    -   **时间单位要统一**：年利率必须配年数；若题目给的是月利率、季利率或按季计息，要先换算到同一时间单位，否则指数 $nt$ 会出错。

        ??? example "计息周期换算"
            <!-- 待补充 -->

### §4 函数的连续性

#### §4.1 函数连续的概念

设 $f$ 在 $x_0$ 的某邻域内有定义。**在 $x_0$ 连续**是指

$$
\lim_{x\to x_0}f(x)=f(x_0).
$$

等价地，对任意 $\varepsilon>0$，存在 $\delta>0$，使 $|x-x_0|<\delta$ 时 $|f(x)-f(x_0)|<\varepsilon$。

记自变量增量为 $\Delta x=x-x_0$，函数增量为 $\Delta y=f(x_0+\Delta x)-f(x_0)$，则连续也可表示为 $\lim_{\Delta x\to0}\Delta y=0$。

**左、右连续：** 分别满足 $\lim_{x\to x_0^-}f(x)=f(x_0)$、$\lim_{x\to x_0^+}f(x)=f(x_0)$。在内点连续等价于既左连续又右连续。闭区间 $[a,b]$ 上连续是指在 $(a,b)$ 内连续，并在 $a$ 右连续、在 $b$ 左连续。

记 $C[a,b]$ 为在 $[a,b]$ 上连续的函数全体。

**间断点：** 函数不连续的点。

| 类型 | 定义 |
| --- | --- |
| 可去间断点 | $\lim_{x\to x_0}f(x)=A$，但 $f(x_0)$ 无定义或 $f(x_0)\ne A$ |
| 跳跃间断点 | 左、右极限均存在，但不相等；二者差的绝对值称为跳跃度 |
| 第一类间断点 | 可去间断点和跳跃间断点 |
| 第二类间断点 | 左、右极限至少一个不存在有限值 |

在闭区间上只有有限个第一类间断点的函数称为在该区间上按段连续。

#### §4.2 连续函数的局部性质

$f,g$ 在 $x_0$ 连续时，$f\pm g$、$fg$、$cf$ 也在 $x_0$ 连续，其中 $c$ 为常数；$g(x_0)\ne0$ 时，$f/g$ 也连续。

若 $f$ 在 $x_0$ 连续，则其在某邻域内有界；若 $f(x_0)>0$（$<0$），则在某邻域内 $f(x)>0$（$<0$）。

若 $\varphi(x)\to u_0$，且 $f$ 在 $u_0$ 连续，则

$$
\lim_{x\to x_0}f(\varphi(x))=f(u_0)
=f\left(\lim_{x\to x_0}\varphi(x)\right).
$$

#### §4.3 闭区间上连续函数的性质

**最大值与最小值：** 对定义在 $D$ 上的函数，若存在 $x_0\in D$，使所有 $x\in D$ 满足 $f(x)\le f(x_0)$（$f(x)\ge f(x_0)$），则 $f(x_0)$ 称为 $f$ 在 $D$ 上的最大值（最小值）。

若 $f\in C[a,b]$，则存在 $x_1,x_2\in[a,b]$，使

$$
f(x_1)=M,\qquad f(x_2)=m,\qquad
m\le f(x)\le M\quad(x\in[a,b]).
$$

**零点定理：** 若 $f\in C[a,b]$ 且 $f(a)f(b)<0$，则存在 $\xi\in(a,b)$，使 $f(\xi)=0$。

**介值定理：** 若 $f\in C[a,b]$，$f(a)\ne f(b)$，$c$ 严格介于 $f(a),f(b)$ 之间，则存在 $\xi\in(a,b)$ 使 $f(\xi)=c$。因此 $f([a,b])=[m,M]$。

#### §4.4 初等函数在其定义域上的连续性

在闭区间上连续且严格单调的函数，其反函数在相应值域上连续且具有相同的严格单调性。

基本初等函数在各自定义域上连续；初等函数在其有定义的区间上连续。

#### §4.5 闭区间上连续函数性质的证明 \*

??? info "最大值最小值定理的证明：证法一"

    先证 $f(x)$ 在闭区间 $[a,b]$ 上有界，即存在 $M>0$，对一切 $x\in[a,b]$，都有 $|f(x)|\le M$。若不然，则 $f(x)$ 在 $[a,b]$ 上无界，即任给正整数 $N$，总存在 $x\in[a,b]$，使 $|f(x)|>N$。于是对每一个正整数 $n$，都存在 $x_n\in[a,b]$，使 $|f(x_n)|>n$。

    由于 $\{x_n\}$ 有界，所以由魏尔斯特拉斯定理知，$\{x_n\}$ 必有收敛的子列 $\{x_{n_k}\}$，使

    $$
    \lim_{k\to\infty}x_{n_k}=x_0.
    $$

    由于 $a\le x_{n_k}\le b$，所以 $a\le x_0\le b$。又 $f(x)$ 在点 $x_0$ 连续，由归结原则知 $\lim_{k\to\infty}f(x_{n_k})=f(x_0)$，即

    $$
    \lim_{k\to\infty}|f(x_{n_k})|=|f(x_0)|.
    $$

    由于 $|f(x_{n_k})|>n_k>k$，所以 $\lim_{k\to\infty}|f(x_{n_k})|=+\infty$，与 $\lim_{k\to\infty}|f(x_{n_k})|=|f(x_0)|$ 相矛盾。因此，假设不成立，故 $f(x)$ 在 $[a,b]$ 上有界。

    由于 $f([a,b])$ 为有界集，所以由确界定理知一定有上、下确界。设

    $$
    M=\sup_{x\in[a,b]}\{f(x)\},\qquad
    m=\inf_{x\in[a,b]}\{f(x)\},
    $$

    先证必存在一点 $x_1\in[a,b]$，使 $f(x_1)=M$。若不然，对一切 $x\in[a,b]$，都有 $f(x)<M$，作函数

    $$
    h(x)=\frac1{M-f(x)},\qquad x\in[a,b].
    $$

    由 $M-f(x)\ne0$ 且连续知，$h(x)$ 在 $[a,b]$ 上连续。由上面的证明知，$h(x)$ 在 $[a,b]$ 上有界，当然有上界，即存在 $N>0$，对一切 $x\in[a,b]$，有

    $$
    h(x)=\frac1{M-f(x)}<N,
    $$

    即 $M-f(x)>\dfrac1N$，有 $f(x)<M-\dfrac1N$，与 $M$ 是 $f(x)$ 的上确界相矛盾。故必存在 $x_1\in[a,b]$，使 $f(x_1)=M$。同理可证存在 $x_2\in[a,b]$，使 $f(x_2)=m$。

#### §4.6 一致连续 \*

**一致连续：** 若定义在区间 $E$ 上的函数 $f$ 满足

$$
\forall\varepsilon>0,\ \exists\delta>0,\ \forall x',x''\in E,\quad
|x'-x''|<\delta\Rightarrow|f(x')-f(x'')|<\varepsilon,
$$

则称 $f$ 在 $E$ 上一致连续。

闭区间上的连续函数必一致连续。

设 $a,b$ 有限。函数 $f$ 在 $(a,b)$ 上一致连续，当且仅当 $f$ 在 $(a,b)$ 上连续，且有限极限 $\lim_{x\to a^+}f(x)$、$\lim_{x\to b^-}f(x)$ 均存在。

!!! warning "提示"

    -   **$\delta$ 是否依赖于点**：连续是逐点定义，$\delta$ 可以随 $x_0$ 变化；一致连续要求存在只依赖于 $\varepsilon$ 的 $\delta$，对区间内所有 $x',x''$ 同时有效。

        ??? example "一致连续与连续的区别"
            <!-- 待补充 -->

    -   **闭区间条件不能丢**：$[a,b]$ 上连续的函数必一致连续；开区间或无穷区间上连续不一定一致连续，如 $1/x$ 在 $(0,1)$、$x^2$ 在 $\mathbb R$ 上。

        ??? example "闭区间上的一致连续性"
            <!-- 待补充 -->

    -   **端点判别法**：对有限区间 $(a,b)$，$f$ 在 $(a,b)$ 上一致连续当且仅当 $f$ 连续且 $\lim_{x\to a^+}f(x)$、$\lim_{x\to b^-}f(x)$ 都存在且有限；端点极限为无穷或振荡时不一致连续（如 $\sin(1/x)$）。

        ??? example "开区间上的一致连续性"
            <!-- 待补充 -->

    -   **与其他概念的关系**：一致连续必连续，且把柯西列映为柯西列；满足 Lipschitz 条件可推出一致连续，反之不成立（如 $\sqrt x$ 在 $[0,1]$ 上）。

        ??? example "Lipschitz 条件与一致连续"
            <!-- 待补充 -->

    -   **有界性的适用范围**：在有限区间上一致连续可推出有界；在无穷区间上不一定，如 $f(x)=x$ 在 $\mathbb R$ 上一致连续但无界。

        ??? example "一致连续与有界性"
            <!-- 待补充 -->

## 第二章 导数与微分

### §1 导数

#### §1.1 导数的概念

**导数：** 设 $f$ 在 $x_0$ 的某邻域内有定义，若下列有限极限存在，则称 $f$ 在 $x_0$ 可导，极限值称为在该点的导数：

$$
f'(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}
=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}.
$$

导数也记为 $y'|_{x=x_0}$、$\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=x_0}$。

**左导数与右导数：** 分别为

$$
f'_-(x_0)=\lim_{h\to0^-}\frac{f(x_0+h)-f(x_0)}h,\qquad
f'_+(x_0)=\lim_{h\to0^+}\frac{f(x_0+h)-f(x_0)}h.
$$

内点处可导的充要条件是左右导数均存在且相等。可导函数在该点连续。

**切线与法线：** 割线经过的另一点沿曲线趋于 $P_0(x_0,y_0)$ 时，若割线的极限位置存在且唯一，则该直线称为曲线在 $P_0$ 处的切线；过切点且垂直于切线的直线称为法线。$f'(x_0)$ 是切线斜率，且

$$
\text{切线：}\quad y-y_0=f'(x_0)(x-x_0),
$$

$$
\text{法线：}\quad y-y_0=-\frac1{f'(x_0)}(x-x_0)\quad(f'(x_0)\ne0).
$$

当 $f'(x_0)=0$ 时，切线为 $y=y_0$，法线为 $x=x_0$。

**说明：** 应当注意，记号 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=x_0}$ 作为一个符号，表示 $f(x)$ 在点 $x_0$ 的导数，看起来却像分数的样子。在后面的几节中，这个“分数”的分子和分母将获得独立的意义，而且它们的比值恰好与导数相等，但现在仍要把 $\dfrac{\mathrm dy}{\mathrm dx}$ 看成一个整体，作为导数的符号。

??? info "可导必连续的证明"

    由于 $f(x)$ 在点 $x_0$ 可导，所以有

    $$
    \lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}=f'(x_0),
    $$

    于是

    $$
    \lim_{\Delta x\to0}\Delta y
    =\lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}\cdot\Delta x
    =f'(x_0)\cdot0=0.
    $$

    因此，$f(x)$ 在点 $x_0$ 连续。

???+ example "例2"

    设 $f(x)=\begin{cases}x^2\sin\dfrac1x,&x\ne0,\\0,&x=0,\end{cases}$，研究 $f(x)$ 在 $x=0$ 处的可导性。

    ??? success "解析"

        按定义，

        $$
        \lim_{x\to0}\frac{f(x)-f(0)}{x-0}
        =\lim_{x\to0}\frac{x^2\sin\dfrac1x}{x}
        =\lim_{x\to0}x\sin\frac1x=0,
        $$

        因此，$f'(0)=0$。

#### §1.2 导数的基本公式与运算法则

**导函数：** 函数 $f$ 在区间内各点的导数构成的函数，记为 $f'(x)$。求导函数的运算称为求导或微分法。

| 函数 | 导数 | 条件 |
| --- | --- | --- |
| $C$ | $0$ | $C$ 为常数 |
| $x^\alpha$ | $\alpha x^{\alpha-1}$ | 在其可导区间内 |
| $\sin x$ | $\cos x$ | $x\in\mathbb R$ |
| $\cos x$ | $-\sin x$ | $x\in\mathbb R$ |
| $\tan x$ | $\sec^2x$ | $\cos x\ne0$ |
| $\cot x$ | $-\csc^2x$ | $\sin x\ne0$ |
| $\sec x$ | $\sec x\tan x$ | $\cos x\ne0$ |
| $\csc x$ | $-\csc x\cot x$ | $\sin x\ne0$ |
| $\arcsin x$ | $\displaystyle\frac1{\sqrt{1-x^2}}$ | $-1<x<1$ |
| $\arccos x$ | $\displaystyle-\frac1{\sqrt{1-x^2}}$ | $-1<x<1$ |
| $\arctan x$ | $\displaystyle\frac1{1+x^2}$ | $x\in\mathbb R$ |
| $\operatorname{arccot}x$ | $\displaystyle-\frac1{1+x^2}$ | $x\in\mathbb R$ |
| $a^x$ | $a^x\ln a$ | $a>0$、$a\ne1$ |
| $e^x$ | $e^x$ | $x\in\mathbb R$ |
| $\log_a x$ | $\displaystyle\frac1{x\ln a}$ | $a>0$、$a\ne1$，$x>0$ |
| $\ln x$ | $1/x$ | $x>0$ |
| $\ln\lvert x\rvert$ | $1/x$ | $x\ne0$ |

若 $u,v$ 可导，$c$ 为常数，则

$$
(u\pm v)'=u'\pm v',\qquad (cu)'=cu',\qquad (uv)'=u'v+uv',
$$

$$
\left(\frac uv\right)'=\frac{u'v-uv'}{v^2},\qquad
\left(\frac1v\right)'=-\frac{v'}{v^2}\qquad(v\ne0).
$$

**反函数求导：** 若 $y=f(x)$ 的反函数 $x=\varphi(y)$ 可导且 $\varphi'(y)\ne0$，则

$$
\frac{\mathrm dy}{\mathrm dx}=\frac1{\dfrac{\mathrm dx}{\mathrm dy}}.
$$

**复合函数求导（链式法则）：** $y=f(u)$、$u=\varphi(x)$ 均可导时，

$$
\frac{\mathrm dy}{\mathrm dx}=\frac{\mathrm dy}{\mathrm du}\frac{\mathrm du}{\mathrm dx}
=f'(\varphi(x))\varphi'(x).
$$

**双曲函数：**

$$
\sinh x=\frac{e^x-e^{-x}}2,\qquad
\cosh x=\frac{e^x+e^{-x}}2,
$$

$$
\tanh x=\frac{e^x-e^{-x}}{e^x+e^{-x}},\qquad
\coth x=\frac{e^x+e^{-x}}{e^x-e^{-x}}\quad(x\ne0),
$$

$$
(\sinh x)'=\cosh x,\qquad
(\cosh x)'=\sinh x,\qquad
(\tanh x)'=\frac1{\cosh^2x}.
$$

#### §1.3 隐函数的导数

**隐函数：** 若二元方程 $F(x,y)=0$ 在集合 $D$ 上对每个 $x$ 都确定唯一的 $y$，则由该方程确定的函数 $y=f(x)$ 称为隐函数，满足 $F(x,f(x))=0$。

隐函数可导时，满足

$$
\frac{\mathrm d}{\mathrm dx}F(x,y(x))=0.
$$

对可导且非零的 $y$，有 $(\ln|y|)'=y'/y$。幂指函数 $y=u(x)^{v(x)}$ 在 $u(x)>0$ 时满足

$$
y'=u^v\left(v'\ln u+v\frac{u'}u\right).
$$

???+ example "例13"

    设函数 $y=y(x)$ 由方程 $y-xe^y=1$ 确定，求 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=0}$，并求曲线上其横坐标 $x=0$ 处点的切线和法线方程。

    ??? success "解析"

        方程两边同时对 $x$ 求导，有

        $$
        y'-e^y-xe^y\cdot y'=0.
        $$

        当 $x=0$ 时，有 $y-0=1$，得 $y=1$。将 $x=0$，$y=1$ 代入上式，得

        $$
        y'(0)-e=0,
        $$

        即 $y'(0)=\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=0}=e$。

        因此，切线方程为

        $$
        y-1=ex,\quad\text{即 }y=ex+1;
        $$

        法线方程为

        $$
        y-1=-\frac1e x,\quad\text{即 }y=-\frac1e x+1.
        $$

**注：** 若求 $\left.\dfrac{\mathrm dy}{\mathrm dx}\right|_{x=x_0}$，不必求出 $\dfrac{\mathrm dy}{\mathrm dx}$，只需把 $x_0,y_0$ 代入式 $y'-e^y-xe^y\cdot y'=0$，解出 $\left.y'\right|_{x=x_0,y=y_0}$ 即可。

#### §1.4 高阶导数

**高阶导数：** $f$ 的 $n-1$ 阶导数的导数称为 $n$ 阶导数，记为

$$
f^{(n)}(x)=\bigl[f^{(n-1)}(x)\bigr]'=\frac{\mathrm d^ny}{\mathrm dx^n}.
$$

对正整数 $n$，在相应可导区间内，

$$
(x^\alpha)^{(n)}=\alpha(\alpha-1)\cdots(\alpha-n+1)x^{\alpha-n},
$$

$$
(\ln x)^{(n)}=\frac{(-1)^{n-1}(n-1)!}{x^n}\quad(x>0),
$$

$$
(\sin x)^{(n)}=\sin\left(x+\frac{n\pi}2\right),\qquad
(\cos x)^{(n)}=\cos\left(x+\frac{n\pi}2\right),
$$

$$
(a^x)^{(n)}=a^x(\ln a)^n\quad(a>0,\ a\ne1),\qquad
(e^x)^{(n)}=e^x.
$$

若 $u,v$ 存在 $n$ 阶导数，$c$ 为常数，则

$$
(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)},\qquad
(cu)^{(n)}=cu^{(n)}.
$$

**莱布尼茨公式：**

$$
(uv)^{(n)}=\sum_{k=0}^n\binom nk u^{(n-k)}v^{(k)},\qquad
u^{(0)}=u,\quad v^{(0)}=v.
$$

#### §1.5 导数在实际中的应用

导数表示因变量相对于自变量的瞬时变化率。以 $t$ 为时间，位移 $s(t)$、电量 $Q(t)$、人口 $N(t)$ 对应的瞬时速度、电流强度、人口增长率分别为

$$
v(t)=s'(t),\qquad I(t)=Q'(t),\qquad k(t)=N'(t).
$$

!!! warning "提示"

    -   **平均变化率与瞬时变化率**：$\dfrac{\Delta s}{\Delta t}$ 是平均速度，$s'(t)$ 才是瞬时速度；题目问"某时刻"的变化率时必须求导，不能直接用差商。

        ??? example "平均速度与瞬时速度"
            <!-- 待补充 -->

    -   **导数的实际含义与符号**：速度、电流等量的正负表示方向，速率是速度的绝对值；$N'(t)$ 是增长速率，而相对增长率是 $N'(t)/N(t)$，两者单位不同。

        ??? example "变化率的实际意义"
            <!-- 待补充 -->

    -   **单位随导数一起变化**：导数的单位是"因变量单位/自变量单位"，如 $s$ 以米、$t$ 以秒计时，$s'(t)$ 的单位是米/秒；代入数值前要统一单位。

        ??? example "导数的单位"
            <!-- 待补充 -->

    -   **端点只能谈单侧导数**：导数定义要求该点的双侧邻域内有定义；实际问题中的时间区间端点处，只能用左导数或右导数描述瞬时变化率。

        ??? example "端点处的变化率"
            <!-- 待补充 -->

### §2 微分

#### §2.1 微分的概念

**可微与微分：** 若函数增量能表示为

$$
\Delta y=f(x+\Delta x)-f(x)=A\Delta x+o(\Delta x)\qquad(\Delta x\to0),
$$

其中 $A$ 与 $\Delta x$ 无关，则称 $f$ 在 $x$ 处可微，线性主部 $A\Delta x$ 称为微分，记为 $\mathrm dy$。

一元函数可微与可导等价，且

$$
A=f'(x),\qquad \mathrm dx=\Delta x,\qquad
\mathrm dy=f'(x)\,\mathrm dx,\qquad
\Delta y=\mathrm dy+o(\Delta x).
$$

当 $f'(x)\ne0$ 时，$\Delta y\sim\mathrm dy$（$\Delta x\to0$）。微分的几何意义是切线上对应于横坐标增量 $\Delta x$ 的纵坐标增量。

??? info "可微与可导关系的证明"

    充分性。由 $f(x)$ 在点 $x$ 处可导的定义知

    $$
    \lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}=f'(x).
    $$

    于是 $\dfrac{\Delta y}{\Delta x}=f'(x)+\alpha$，其中 $\lim_{\Delta x\to0}\alpha=0$。从而有

    $$
    \Delta y=f'(x)\Delta x+\alpha\Delta x,
    $$

    而 $\lim_{\Delta x\to0}\dfrac{\alpha\Delta x}{\Delta x}=0$，即 $\alpha\Delta x=o(\Delta x)$（$\Delta x\to0$）。所以

    $$
    \Delta y=f'(x)\Delta x+o(\Delta x)\qquad(\Delta x\to0).
    $$

    因此 $y=f(x)$ 在点 $x$ 处可微且 $f'(x)=A$。

    必要性。由于 $y=f(x)$ 在点 $x$ 处可微，由定义知

    $$
    \Delta y=A\Delta x+o(\Delta x)\qquad(\Delta x\to0),
    $$

    其中 $A$ 与 $\Delta x$ 无关。由于

    $$
    \lim_{\Delta x\to0}\frac{\Delta y}{\Delta x}
    =\lim_{\Delta x\to0}\left[A+\frac{o(\Delta x)}{\Delta x}\right]
    =A=f'(x),
    $$

    所以 $y=f(x)$ 在点 $x$ 处可导。

#### §2.2 微分的基本性质

$u,v$ 可微，$c$ 为常数时，

$$
\mathrm d(u\pm v)=\mathrm du\pm\mathrm dv,\qquad
\mathrm d(cu)=c\,\mathrm du,\qquad
\mathrm d(uv)=v\,\mathrm du+u\,\mathrm dv,
$$

$$
\mathrm d\left(\frac uv\right)=\frac{v\,\mathrm du-u\,\mathrm dv}{v^2},\qquad
\mathrm d\left(\frac1v\right)=-\frac{\mathrm dv}{v^2}\quad(v\ne0).
$$

**一阶微分形式不变性：** 对可微复合函数 $y=f(u)$、$u=\varphi(x)$，仍有

$$
\mathrm dy=f'(u)\,\mathrm du.
$$

**参数式函数：** 曲线上点的坐标由 $x=\varphi(t)$、$y=\psi(t)$ 表示时，$t$ 称为参数。若二者可导且 $\varphi'(t)\ne0$，则

$$
\frac{\mathrm dy}{\mathrm dx}=\frac{\psi'(t)}{\varphi'(t)}.
$$

二阶可导时，

$$
\frac{\mathrm d^2y}{\mathrm dx^2}
=\frac1{\varphi'(t)}\frac{\mathrm d}{\mathrm dt}
\left(\frac{\psi'(t)}{\varphi'(t)}\right)
=\frac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{[\varphi'(t)]^3}.
$$

**极坐标：** 以定点 $O$ 为极点、射线为极轴，点 $P$ 到极点的距离 $r$ 为极径，极轴到 $OP$ 的有向角 $\theta$ 为极角。以极点为直角坐标原点、极轴为 $x$ 轴正向时，

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad
r^2=x^2+y^2,\qquad \tan\theta=\frac yx\quad(x\ne0).
$$

曲线 $r=r(\theta)$ 的切线斜率为

$$
\frac{\mathrm dy}{\mathrm dx}
=\frac{r'(\theta)\sin\theta+r(\theta)\cos\theta}
{r'(\theta)\cos\theta-r(\theta)\sin\theta},
$$

其中分母非零。

#### §2.3 近似计算与误差估计

$f$ 在 $x_0$ 可微时，当 $|\Delta x|$ 很小时，

$$
\Delta y\approx f'(x_0)\Delta x,\qquad
f(x_0+\Delta x)\approx f(x_0)+f'(x_0)\Delta x.
$$

当 $|x|$ 很小时，

$$
\sin x\approx x,\quad \tan x\approx x,\quad
\ln(1+x)\approx x,\quad e^x\approx1+x,\quad
(1+x)^\alpha\approx1+\alpha x.
$$

**误差：** 设 $x_0$ 为准确值，$x^*$ 为近似值，$\Delta x=x^*-x_0$ 为绝对误差；若 $|\Delta x|\le\delta_x$，则 $\delta_x$ 为绝对误差限。相对误差为 $\Delta x/x_0$，相对误差限为 $\delta_x/|x_0|$（$x_0\ne0$）。

对 $y=f(x)$，微分给出的误差估计为

$$
|\Delta y|\approx |f'(x_0)\Delta x|,\qquad
\delta_y\approx|f'(x_0)|\delta_x,
$$

$$
\frac{\delta_y}{|y|}\approx
\left|\frac{f'(x_0)}{f(x_0)}\right|\delta_x\qquad(f(x_0)\ne0).
$$

#### §2.4 高阶微分 \*

以 $x$ 为自变量、$\mathrm dx=\Delta x$ 视为与 $x$ 无关的量时，$n$ 阶微分定义为 $\mathrm d^ny=\mathrm d(\mathrm d^{n-1}y)$，且

$$
\mathrm d^ny=f^{(n)}(x)(\mathrm dx)^n.
$$

若 $y=f(u)$、$u=\varphi(x)$ 二阶可微，则

$$
\mathrm d^2y=f''(u)(\mathrm du)^2+f'(u)\,\mathrm d^2u.
$$

!!! warning "提示"

    -   **二阶微分的形式依赖于自变量**：只有当 $x$ 是自变量、$\mathrm dx$ 与 $x$ 无关时，才有 $\mathrm d^2y=f''(x)(\mathrm dx)^2$；对复合函数 $y=f(u)$、$u=\varphi(x)$，必须加上 $f'(u)\,\mathrm d^2u$，即二阶微分不具有形式不变性。

        ??? example "二阶微分与复合函数"
            <!-- 待补充 -->

    -   **记号不要混淆**：$\mathrm d^2y$ 是二阶微分，$(\mathrm dy)^2$ 是一阶微分的平方；$\dfrac{\mathrm d^2y}{\mathrm dx^2}$ 是二阶导数，不能拆成两个微分之商。

        ??? example "高阶微分记号"
            <!-- 待补充 -->

    -   **高阶可导的层级**：$n$ 阶导数存在只能推出低阶导数存在，反之不成立；二阶可导也不保证二阶导数连续。

        ??? example "高阶导数的存在性"
            <!-- 待补充 -->

    -   **参数方程的二阶导数**：$\dfrac{\mathrm d^2y}{\mathrm dx^2}=\dfrac{\psi''\varphi'-\psi'\varphi''}{(\varphi')^3}$，分母是 $(\varphi')^3$；不能分别求 $\dfrac{\mathrm d^2y}{\mathrm dt^2}$、$\dfrac{\mathrm d^2x}{\mathrm dt^2}$ 后直接相除。

        ??? example "参数方程求二阶导数"
            <!-- 待补充 -->

## 第三章 微分中值定理及导数的应用

### §1 微分中值定理

#### §1.1 费马定理、最大（小）值

**极大值与极小值：** 设函数 $f$ 在 $x_0$ 的某邻域内有定义。若对该邻域内所有 $x$，都有 $f(x)\le f(x_0)$（$f(x)\ge f(x_0)$），则称 $f(x_0)$ 为 $f$ 的一个极大值（极小值），$x_0$ 为极大值点（极小值点）。极大值与极小值统称极值。

**费马定理：** 若 $f$ 在 $x_0$ 处取得极值，且 $f'(x_0)$ 存在，则

$$
f'(x_0)=0.
$$

使 $f'(x_0)=0$ 的点 $x_0$ 称为函数 $f$ 的驻点。

#### §1.2 罗尔定理

设 $f\in C[a,b]$，在 $(a,b)$ 内可导，且 $f(a)=f(b)$，则存在 $\xi\in(a,b)$，使

$$
f'(\xi)=0.
$$

??? info "罗尔定理的证明"

    由于 $f(x)$ 在闭区间 $[a,b]$ 上连续，所以 $f(x)$ 在 $[a,b]$ 上一定可以取到最小值与最大值，分别设为 $m$ 与 $M$。

    （1）当 $m=M$ 时，则 $f(x)$ 在 $[a,b]$ 上是常值函数，即

    $$
    f(x)=m,\qquad x\in[a,b].
    $$

    因此，$\xi$ 可取 $(a,b)$ 内任意一点，有 $f'(\xi)=0$。

    （2）当 $m<M$ 时，由于 $f(a)=f(b)$，所以最大值、最小值至少有一个在内部取到（若不然，最大值、最小值都在端点取到，推出 $m=M$，矛盾），不妨设最大值 $M$ 在内部取到，设 $\xi\in(a,b)$，$f(\xi)=M$，则 $f(\xi)$ 为极大值。由 $f(x)$ 在 $(a,b)$ 内可导，知 $f'(\xi)$ 存在。由费马定理知，$f'(\xi)=0$。

???+ example "例2"

    设 $f(x)=a_1\cos x+a_2\cos2x+\cdots+a_n\cos nx$，其中 $a_1,a_2,\ldots,a_n$ 为任意常数，证明至少存在一点 $\xi\in(0,\pi)$，使 $f(\xi)=0$。

    ??? success "解析"

        分析　此题不符合根的存在定理条件。尝试用罗尔定理，要找到一个函数 $F(x)$（我们称 $F(x)$ 是 $f(x)$ 的一个原函数），使 $F'(x)=f(x)$，对 $F(x)$ 在 $[0,\pi]$ 上应用罗尔定理。

        证　设

        $$
        F(x)=a_1\sin x+\frac{a_2\sin2x}{2}+\cdots+\frac{a_n\sin nx}{n},
        $$

        知 $F(x)\in C[0,\pi]$，由 $F'(x)=f(x)$ 知 $F(x)\in D(0,\pi)$。又 $F(0)=F(\pi)=0$，由罗尔定理知，至少存在一点 $\xi\in(0,\pi)$，使 $F'(\xi)=0$。由于 $F'(x)=f(x)$，从而推出 $f(\xi)=0$。

#### §1.3 拉格朗日定理、函数的单调区间

设 $f\in C[a,b]$，在 $(a,b)$ 内可导，则存在 $\xi\in(a,b)$，使

$$
f(b)-f(a)=f'(\xi)(b-a).
$$

等价地，在满足上述条件的区间内，

$$
f(x_0+h)-f(x_0)=f'(x_0+\theta h)h,\qquad 0<\theta<1.
$$

若 $f$ 在区间 $I$ 上连续、在其内部可导，且 $f'(x)=0$，则 $f$ 在 $I$ 上为常数。

??? info "拉格朗日定理的证明：证法一"

    设

    $$
    F(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a)-f(a),
    $$

    由于 $F(x)\in C[a,b]$，$F(x)\in D(a,b)$，且 $F(a)=F(b)=0$。所以由罗尔定理知至少存在一点 $\xi\in(a,b)$，使 $F'(\xi)=0$。又

    $$
    F'(x)=f'(x)-\frac{f(b)-f(a)}{b-a},
    $$

    所以

    $$
    f'(\xi)-\frac{f(b)-f(a)}{b-a}=0,
    $$

    于是

    $$
    \frac{f(b)-f(a)}{b-a}=f'(\xi).
    $$

#### §1.4 柯西定理

设 $f,g\in C[a,b]$，在 $(a,b)$ 内可导，且对所有 $x\in(a,b)$ 有 $g'(x)\ne0$，则存在 $\xi\in(a,b)$，使

$$
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}.
$$

#### §1.5 函数的单调区间与极值

设 $f$ 在区间 $I$ 上连续、在其内部可导，则

| 导数的符号 | 函数在 $I$ 上的性质 |
| --- | --- |
| $f'(x)\ge0$ | 递增 |
| $f'(x)\le0$ | 递减 |
| $f'(x)>0$ | 严格递增 |
| $f'(x)<0$ | 严格递减 |
| $f'(x)=0$ | 为常数 |

若 $f'(x)\ge0$（$f'(x)\le0$），且导数在任意非退化子区间上不恒为零，则 $f$ 严格递增（严格递减）。函数具有单调性的区间称为其单调区间。

设 $f$ 在 $x_0$ 处连续，在 $x_0$ 的某去心邻域内可导，则

| $f'$ 在 $x_0$ 两侧的符号 | $f(x_0)$ 的性质 |
| --- | --- |
| 左正右负 | 极大值 |
| 左负右正 | 极小值 |
| 两侧同为正或同为负 | 不是极值 |

若 $f'(x_0)=0$，且 $f''(x_0)$ 存在，则

$$
f''(x_0)>0\Rightarrow f(x_0)\text{ 为极小值},\qquad
f''(x_0)<0\Rightarrow f(x_0)\text{ 为极大值}.
$$

!!! warning "提示"

    -   **极值是局部概念**：极值只与某邻域内的函数值比较，极大值不一定大于极小值；最值才是整个区间上的整体比较，端点处也可能取得最值。

        ??? example "极值与最值"
            <!-- 待补充 -->

    -   **驻点与极值点不能互推**：$f'(x_0)=0$ 只说明 $x_0$ 是驻点，不一定是极值点（如 $x^3$ 在 $0$ 处）；极值点也可能不可导（如 $|x|$ 在 $0$ 处），求极值时要同时检查驻点和不可导点。

        ??? example "驻点与极值点"
            <!-- 待补充 -->

    -   **二阶导数判别法的适用条件**：$f'(x_0)=0$ 且 $f''(x_0)>0$ 才是极小值，$f''(x_0)<0$ 才是极大值；$f''(x_0)=0$ 时判别法失效，需改用一阶导数符号或更高阶导数。

        ??? example "二阶导数判别法"
            <!-- 待补充 -->

    -   **单调区间不能跨分界点合并**：先确定定义域，再用 $f'(x)=0$ 和 $f'(x)$ 不存在的点划分区间；$f'\ge0$ 且仅在孤立点为零时仍为严格递增。

        ??? example "求单调区间"
            <!-- 待补充 -->

### §2 未定式的极限

#### §2.1 $\frac{0}{0}$ 型未定式的极限

当 $x\to x_0$ 时，若 $f(x)\to0$、$g(x)\to0$，则商 $f(x)/g(x)$ 称为 $0/0$ 型未定式。

**洛必达法则：** 设 $f,g$ 在 $x_0$ 的某去心邻域内可导，$g'(x)\ne0$，且

$$
\lim_{x\to x_0}f(x)=\lim_{x\to x_0}g(x)=0,\qquad
\lim_{x\to x_0}\frac{f'(x)}{g'(x)}=A,
$$

其中 $A$ 为有限数或无穷大，则

$$
\lim_{x\to x_0}\frac{f(x)}{g(x)}=A.
$$

相同结论适用于单侧极限及 $x\to\pm\infty$ 的相应情形。

??? info "洛必达法则 I 的证明"

    构造函数

    $$
    F(x)=\begin{cases}f(x),&x\ne x_0,\\0,&x=x_0,\end{cases}
    \qquad
    G(x)=\begin{cases}g(x),&x\ne x_0,\\0,&x=x_0,\end{cases}
    $$

    设 $x\in\mathring U(x_0)$，由于 $F(x),G(x)$ 在 $[x_0,x]$（或 $[x,x_0]$）上满足柯西定理的条件，故有

    $$
    \frac{F(x)-F(x_0)}{G(x)-G(x_0)}=\frac{F'(\xi)}{G'(\xi)},
    $$

    即 $\dfrac{f(x)}{g(x)}=\dfrac{f'(\xi)}{g'(\xi)}$，其中 $\xi$ 介于 $x_0$ 与 $x$ 之间。且当 $x\to x_0$ 时，有 $\xi\to x_0$，所以

    $$
    \lim_{x\to x_0}\frac{f(x)}{g(x)}
    =\lim_{x\to x_0}\frac{f'(\xi)}{g'(\xi)}
    =\lim_{\xi\to x_0}\frac{f'(\xi)}{g'(\xi)}
    =\lim_{x\to x_0}\frac{f'(x)}{g'(x)}=A\text{（或 }\infty\text{）}.
    $$

???+ example "例1"

    求 $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$。

    ??? success "解析"

        $$
        \lim_{x\to0}\frac{x-\sin x}{x^3}
        \overset{0/0\text{ 型}}=\lim_{x\to0}\frac{1-\cos x}{3x^2}
        \overset{0/0\text{ 型}}=\lim_{x\to0}\frac{\sin x}{6x}=\frac16.
        $$

**注：** 在用洛必达法则求极限之前，应尽可能把函数化简，或把较复杂的因式用简单等价因式来替换，以达到简化计算的目的。

#### §2.2 $\frac{\infty}{\infty}$ 型未定式的极限

当 $x\to x_0$ 时，若 $|f(x)|\to\infty$、$|g(x)|\to\infty$，则商 $f(x)/g(x)$ 称为 $\infty/\infty$ 型未定式。

设 $f,g$ 在 $x_0$ 的某去心邻域内可导，$g'(x)\ne0$，并满足上述无穷大量条件。若

$$
\lim_{x\to x_0}\frac{f'(x)}{g'(x)}=A,
$$

其中 $A$ 为有限数或无穷大，则

$$
\lim_{x\to x_0}\frac{f(x)}{g(x)}=A.
$$

相同结论适用于单侧极限及 $x\to\pm\infty$ 的相应情形。

#### §2.3 其他类型未定式的极限

其他未定式包括 $0\cdot\infty$、$\infty-\infty$、$1^\infty$、$0^0$、$\infty^0$ 型。

在各式有定义时，

$$
f(x)g(x)=\frac{f(x)}{1/g(x)}=\frac{g(x)}{1/f(x)}.
$$

对 $f(x)>0$，

$$
y=f(x)^{g(x)},\qquad \ln y=g(x)\ln f(x),\qquad
f(x)^{g(x)}=\exp\bigl(g(x)\ln f(x)\bigr).
$$

!!! warning "提示"

    -   **先化形再洛必达**：洛必达法则只直接适用于 $0/0$ 与 $\infty/\infty$；$0\cdot\infty$、$\infty-\infty$、$1^\infty$、$0^0$、$\infty^0$ 必须先通分、取对数或有理化，化成基本型后再用。

        ??? example "其他未定式化形"
            <!-- 待补充 -->

    -   **$1^\infty$ 型不能把底数当作 $1$**：应计算 $\lim g(x)\ln f(x)$，再用 $\exp$ 回代；也可利用 $(1+u)^{1/u}\to e$，但必须保证 $u\to0$。

        ??? example "幂指型未定式"
            <!-- 待补充 -->

    -   **洛必达法则的条件与逆用**：使用前要验证分子分母都趋于 $0$ 或 $\infty$、在去心邻域内可导、$g'(x)\ne0$，且 $\lim f'/g'$ 存在或为无穷大；$\lim f/g$ 存在并不能反推 $\lim f'/g'$ 存在。

        ??? example "洛必达法则的条件"
            <!-- 待补充 -->

    -   **取对数后的定义域**：$0^0$、$\infty^0$ 型必须保证底数 $f(x)>0$ 才能取 $\ln f(x)$；回代时 $y=e^{L}$，不要漏掉指数运算。

        ??? example "取对数法"
            <!-- 待补充 -->

### §3 泰勒定理及应用

#### §3.1 泰勒定理

设 $f$ 在包含 $x_0,x$ 的区间内具有 $n$ 阶连续导数，在区间内部具有 $n+1$ 阶导数，则

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+R_n(x),
$$

其中 $f^{(0)}=f$，$n$ 为非负整数。多项式

$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
$$

称为 $f$ 在 $x_0$ 处的 $n$ 阶泰勒多项式，$R_n(x)=f(x)-P_n(x)$ 为余项。**拉格朗日余项**为

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}
=\frac{f^{(n+1)}(x_0+\theta(x-x_0))}{(n+1)!}(x-x_0)^{n+1},
\quad 0<\theta<1,
$$

其中 $\xi$ 位于 $x_0$ 与 $x$ 之间。当 $x_0=0$ 时，泰勒公式称为麦克劳林公式。

若 $x_0$ 与 $x$ 之间 $|f^{(n+1)}(t)|\le M$，则

$$
|R_n(x)|\le\frac{M}{(n+1)!}|x-x_0|^{n+1}.
$$

??? info "泰勒定理的证明：证法一"

    设函数 $f(x)$ 在区间 $I$ 上 $n$ 阶连续可导，在 $I$ 内部存在 $n+1$ 阶导数，$x_0\in I$。

    $\forall x\in I$，$x\ne x_0$，不妨设 $x_0<x$。由 $[x_0,x]\subset I$，知 $f(x)$ 在 $[x_0,x]$ 上 $n$ 阶连续可导，在 $(x_0,x)$ 内存在 $n+1$ 阶导数，现记

    $$
    R_n(x)=f(x)-P_n(x)
    =f(x)-\left[f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\cdots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\right],
    $$

    $$
    Q_n(x)=(x-x_0)^{n+1}.
    $$

    $$
    R_n'(x)=f'(x)-\left[f'(x_0)+f''(x_0)(x-x_0)+\cdots+\frac{f^{(n)}(x_0)}{(n-1)!}(x-x_0)^{n-1}\right],
    $$

    $$
    R_n''(x)=f''(x)-\left[f''(x_0)+f'''(x_0)(x-x_0)+\cdots+\frac{f^{(n)}(x_0)}{(n-2)!}(x-x_0)^{n-2}\right],
    $$

    $$
    \cdots,\qquad
    R_n^{(n)}(x)=f^{(n)}(x)-f^{(n)}(x_0),\qquad
    R_n^{(n+1)}(x)=f^{(n+1)}(x),
    $$

    $$
    Q_n'(x)=(n+1)(x-x_0)^n,\qquad
    Q_n''(x)=(n+1)n(x-x_0)^{n-1},
    $$

    $$
    \cdots,\qquad
    Q_n^{(n)}(x)=(n+1)n\cdots3\cdot2(x-x_0),\qquad
    Q_n^{(n+1)}(x)=(n+1)!.
    $$

    因此

    $$
    R_n(x_0)=R_n'(x_0)=R_n''(x_0)=\cdots=R_n^{(n)}(x_0)=0,
    $$

    且

    $$
    Q_n(x_0)=Q_n'(x_0)=\cdots=Q_n^{(n)}(x_0)=0.
    $$

    所以在区间 $[x_0,x]$ 上连续运用柯西定理 $n+1$ 次，就有

    $$
    \begin{aligned}
    \frac{R_n(x)}{Q_n(x)}
    &=\frac{R_n(x)-R_n(x_0)}{Q_n(x)-Q_n(x_0)}
    =\frac{R_n'(\xi_1)}{Q_n'(\xi_1)}
    =\frac{R_n'(\xi_1)-R_n'(x_0)}{Q_n'(\xi_1)-Q_n'(x_0)}\\
    &=\frac{R_n''(\xi_2)}{Q_n''(\xi_2)}
    =\frac{R_n''(\xi_2)-R_n''(x_0)}{Q_n''(\xi_2)-Q_n''(x_0)}
    =\frac{R_n'''(\xi_3)}{Q_n'''(\xi_3)}=\cdots\\
    &=\frac{R_n^{(n)}(\xi_n)}{Q_n^{(n)}(\xi_n)}
    =\frac{R_n^{(n)}(\xi_n)-R_n^{(n)}(x_0)}{Q_n^{(n)}(\xi_n)-Q_n^{(n)}(x_0)}
    =\frac{R_n^{(n+1)}(\xi)}{Q_n^{(n+1)}(\xi)},
    \end{aligned}
    $$

    其中 $x_0<\xi<\xi_n<\xi_{n-1}<\cdots<\xi_3<\xi_2<\xi_1<x$。

    而 $R_n^{(n+1)}(\xi)=f^{(n+1)}(\xi)$，$Q_n^{(n+1)}(\xi)=(n+1)!$，于是

    $$
    \frac{R_n(x)}{Q_n(x)}=\frac{f^{(n+1)}(\xi)}{(n+1)!},\qquad x_0<\xi<x,
    $$

    或

    $$
    R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1},
    $$

    即

    $$
    f(x)=P_n(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1},\qquad x_0<\xi<x.
    $$

#### §3.2 几个常用函数的麦克劳林公式

以下各式中的 $0<\theta<1$；$n,m$ 为非负整数。

$$
e^x=\sum_{k=0}^{n}\frac{x^k}{k!}
+\frac{e^{\theta x}}{(n+1)!}x^{n+1}.
$$

$$
\sin x=\sum_{k=0}^{m}\frac{(-1)^k x^{2k+1}}{(2k+1)!}
+\frac{\sin(\theta x+(m+1)\pi)}{(2m+2)!}x^{2m+2}.
$$

$$
\cos x=\sum_{k=0}^{m}\frac{(-1)^k x^{2k}}{(2k)!}
+\frac{\cos(\theta x+(m+1)\pi)}{(2m+2)!}x^{2m+2}.
$$

对 $x>-1$、$n\ge1$，

$$
\ln(1+x)=\sum_{k=1}^{n}\frac{(-1)^{k-1}}{k}x^k
+\frac{(-1)^n}{(n+1)(1+\theta x)^{n+1}}x^{n+1}.
$$

对 $x>-1$、$\alpha\in\mathbb R$，

$$
(1+x)^\alpha=\sum_{k=0}^{n}\binom{\alpha}{k}x^k
+\frac{\alpha(\alpha-1)\cdots(\alpha-n)}{(n+1)!}
(1+\theta x)^{\alpha-n-1}x^{n+1},
$$

其中

$$
\binom{\alpha}{0}=1,\qquad
\binom{\alpha}{k}=\frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}\quad(k\ge1).
$$

#### §3.3 带有佩亚诺余项的泰勒公式

设 $f$ 在 $x_0$ 处具有 $n$ 阶导数，则当 $x\to x_0$ 时，

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
+o\bigl((x-x_0)^n\bigr).
$$

余项 $o((x-x_0)^n)$ 称为佩亚诺余项。以下各式均在 $x\to0$ 时成立：

$$
e^x=\sum_{k=0}^{n}\frac{x^k}{k!}+o(x^n),
$$

$$
\sin x=\sum_{k=0}^{m}\frac{(-1)^kx^{2k+1}}{(2k+1)!}+o(x^{2m+1}),
$$

$$
\cos x=\sum_{k=0}^{m}\frac{(-1)^kx^{2k}}{(2k)!}+o(x^{2m}),
$$

$$
\ln(1+x)=\sum_{k=1}^{n}\frac{(-1)^{k-1}}{k}x^k+o(x^n),\qquad n\ge1,
$$

$$
(1+x)^\alpha=\sum_{k=0}^{n}\binom{\alpha}{k}x^k+o(x^n).
$$

???+ example "例2"

    求 $\displaystyle\lim_{x\to0}\frac{e^x\sin x-x(1+x)}{x^3}$。

    ??? success "解析"

        $$
        \begin{aligned}
        \lim_{x\to0}\frac{e^x\sin x-x(1+x)}{x^3}
        &=\lim_{x\to0}\frac{\left(1+x+\dfrac{x^2}{2!}+o(x^2)\right)
        \left(x-\dfrac{x^3}{3!}+o(x^3)\right)-x(1+x)}{x^3}\\
        &=\lim_{x\to0}\frac{\dfrac13x^3+o(x^3)}{x^3}=\frac13.
        \end{aligned}
        $$

#### §3.4 泰勒公式的应用

以泰勒多项式作近似值时，

$$
f(x)\approx P_n(x),\qquad
|f(x)-P_n(x)|=|R_n(x)|
\le\frac{M}{(n+1)!}|x-x_0|^{n+1},
$$

其中 $M$ 是 $x_0$ 与 $x$ 之间 $|f^{(n+1)}|$ 的上界。

!!! warning "提示"

    -   **余项中的 $\xi$ 不是常数**：拉格朗日余项里的 $\xi$ 依赖于 $x$（也与 $n$ 有关），只能估计 $|f^{(n+1)}(\xi)|\le M$，不能把 $\xi$ 当作固定的展开点代入。

        ??? example "拉格朗日余项估计"
            <!-- 待补充 -->

    -   **两种余项用途不同**：佩亚诺余项只描述 $x\to x_0$ 时的阶，不能给出具体误差界；要估计近似误差或证明不等式，应使用拉格朗日余项。

        ??? example "佩亚诺余项与拉格朗日余项"
            <!-- 待补充 -->

    -   **展开阶数要足够高**：同阶无穷小相减时，低阶项会抵消，必须展开到首个不抵消的阶；如计算 $\sin x-x$ 需展开到 $x^3$ 项。

        ??? example "展开阶数的选择"
            <!-- 待补充 -->

    -   **近似只在展开点附近可靠**：在 $x_0$ 处展开、却在远离 $x_0$ 的 $x$ 处使用，误差会迅速增大；用误差界 $\dfrac{M}{(n+1)!}|x-x_0|^{n+1}$ 检验适用范围。

        ??? example "泰勒近似的适用范围"
            <!-- 待补充 -->

### §4 数学建模（一）

**数学模型：** 为了某种目的，对现实中的特定对象作必要的简化和假设，用数学工具得到的数学结构，用于解释对象的状态、预测未来或确定决策与控制。

!!! warning "提示"

    -   **假设决定结论的适用范围**：数学模型建立在简化假设之上，结论只在假设成立的范围内有效；使用模型前要先说明假设，不能把模型结论无条件外推。

        ??? example "模型假设与适用范围"
            <!-- 待补充 -->

    -   **变量、参数与常量要分清**：建模时要明确自变量、因变量、待定参数和常数，并统一单位；把参数当作变量或单位不一致都会导致错误结论。

        ??? example "变量与参数"
            <!-- 待补充 -->

    -   **拟合不等于因果**：由数据拟合出的函数只表示相关性，不能仅凭拟合优度断言因果关系；外推预测更要谨慎。

        ??? example "拟合与预测"
            <!-- 待补充 -->

    -   **建模流程要闭合**：实际问题 → 假设与简化 → 数学结构 → 求解 → 检验与修正，检验环节不能省略；若结果与实际不符，应回到假设或模型修改。

        ??? example "数学建模流程"
            <!-- 待补充 -->

### §5 函数图形的凹凸性与拐点

**凹与凸：** 设 $f$ 在区间 $I$ 内可导。若曲线 $y=f(x)$ 在 $I$ 内各点的切线之上，则称曲线在 $I$ 上是凹的；若在各点的切线之下，则称曲线在 $I$ 上是凸的。对应关系为

$$
\begin{aligned}
\text{凹：}&\quad f(x)>f(t)+f'(t)(x-t),\\
\text{凸：}&\quad f(x)<f(t)+f'(t)(x-t),
\end{aligned}
\qquad x,t\in I,\quad x\ne t.
$$

对 $x_1,x_2\in I$、$x_1\ne x_2$，凹函数满足

$$
f\left(\frac{x_1+x_2}{2}\right)
<\frac{f(x_1)+f(x_2)}{2};
$$

凸函数满足反向不等式。

若 $f$ 在 $I$ 内二阶可导，则

$$
f''(x)>0\Rightarrow\text{曲线为凹},\qquad
f''(x)<0\Rightarrow\text{曲线为凸}.
$$

**拐点：** 连续曲线上凹凸性发生改变的点。

若 $f$ 在 $x_0$ 的某邻域内二阶可导，$(x_0,f(x_0))$ 是拐点，则 $f''(x_0)=0$。若 $f''$ 在 $x_0$ 两侧异号，则 $(x_0,f(x_0))$ 为拐点；若两侧同号，则不是拐点。

!!! warning "提示"

    -   **凹凸的方向约定**：本教材把曲线位于切线上方称为"凹"（$f''>0$），位于切线下方称为"凸"（$f''<0$）；不同教材或英文术语的凹凸方向可能相反，判断时以定义为准。

        ??? example "凹凸性的判断"
            <!-- 待补充 -->

    -   **拐点是曲线上的点**：拐点应写成 $(x_0,f(x_0))$，不是 $x_0$；拐点处函数必须连续，且 $f''(x_0)=0$ 或 $f''(x_0)$ 不存在。

        ??? example "拐点的表示"
            <!-- 待补充 -->

    -   **$f''(x_0)=0$ 不一定是拐点**：还必须要求 $f''$ 在 $x_0$ 两侧异号；如 $f(x)=x^4$ 在 $0$ 处 $f''(0)=0$，但两侧同号，不是拐点。

        ??? example "拐点的判定"
            <!-- 待补充 -->

    -   **凹凸区间由 $f''$ 的符号划分**：分界点是 $f''=0$ 或 $f''$ 不存在的点；凹凸性与单调性是两个独立概念，不能由 $f'$ 的符号直接判断凹凸。

        ??? example "求凹凸区间"
            <!-- 待补充 -->

### §6 函数图形的描绘

#### §6.1 曲线的渐近线

**渐近线：** 当曲线上的点沿曲线趋于无穷远时，该点到某一直线的距离趋于零，则该直线称为曲线的渐近线。

对 $y=f(x)$，若在 $x\to+\infty$ 或 $x\to-\infty$ 的相应方向有

$$
\lim\bigl(f(x)-ax-b\bigr)=0,
$$

则 $y=ax+b$ 为该方向的渐近线。其中

$$
a=\lim\frac{f(x)}x,\qquad b=\lim\bigl(f(x)-ax\bigr)
$$

均为有限数；$a=0$ 时，$y=b$ 为水平渐近线。

若 $x\to x_0$ 的至少一个单侧极限满足 $|f(x)|\to\infty$，则直线 $x=x_0$ 为铅直渐近线。

#### §6.2 函数图形的描绘

!!! warning "提示"

    -   **先确定定义域与对称性**：作图前先求定义域、奇偶性、周期性，可减少计算并避免画出定义域外的部分；间断点、零点也要先标出。

        ??? example "作图前的准备"
            <!-- 待补充 -->

    -   **渐近线要分方向讨论**：斜渐近线要求 $a=\lim f(x)/x$、$b=\lim(f(x)-ax)$ 均为有限数；$x\to+\infty$ 与 $x\to-\infty$ 可能对应不同渐近线，铅直渐近线则考察单侧无穷极限。

        ??? example "求渐近线"
            <!-- 待补充 -->

    -   **分区间列表不能漏点**：用 $f'=0$、$f''=0$、$f'$ 或 $f''$ 不存在的点以及间断点划分区间，逐段判断单调性、极值、凹凸性和拐点。

        ??? example "列表描绘函数图形"
            <!-- 待补充 -->

    -   **图形要与分析结果一致**：渐近线只是趋势，不能代替曲线与坐标轴的交点、极值点和拐点；作图后要用单调性、凹凸性检查图形是否合理。

        ??? example "图形与性质的一致性"
            <!-- 待补充 -->

### §7 导数在经济中的应用 \*

#### §7.1 经济中常用的一些函数

设 $q$ 为产品数量，$p$ 为价格。

**成本函数：** 总成本 $C(q)$ 由固定成本 $C_1$ 和可变成本 $C_2(q)$ 组成；平均成本为 $\overline C(q)$：

$$
C(q)=C_1+C_2(q),\qquad \overline C(q)=\frac{C(q)}q\quad(q>0).
$$

**收益函数与利润函数：** 总收益为 $R(q)$，平均收益为单价 $p(q)$；利润为 $L(q)$：

$$
R(q)=qp(q),\qquad \frac{R(q)}q=p(q),\qquad
L(q)=R(q)-C(q).
$$

**需求函数与供给函数：** 在其他因素不变的条件下，需求量 $q=f(p)$ 随价格增加而减少；供给量 $q=\varphi(p)$ 随价格增加而增加。均衡价格 $p^*$ 与均衡数量 $q^*$ 满足

$$
f(p^*)=\varphi(p^*)=q^*.
$$

#### §7.2 边际分析

**边际函数：** 经济函数 $y=f(x)$ 的导数 $f'(x)$ 称为其边际函数，表示 $x$ 变化时 $y$ 的瞬时变化率。

$$
\text{边际成本}=C'(q),\qquad
\text{边际收益}=R'(q),\qquad
\text{边际利润}=L'(q)=R'(q)-C'(q).
$$

在可导的内点 $q_0$ 取得利润极值的必要条件为

$$
L'(q_0)=0,\qquad R'(q_0)=C'(q_0).
$$

#### §7.3 弹性分析

**弹性：** 设 $y=f(x)$，$x\ne0$、$f(x)\ne0$。平均弹性为相对增量之比；弹性为其极限：

$$
\overline E=\frac{\Delta y/y}{\Delta x/x},\qquad
E_xf(x)=\lim_{\Delta x\to0}\frac{\Delta y/y}{\Delta x/x}
=\frac{x f'(x)}{f(x)}.
$$

**需求弹性：** 对需求函数 $q=f(p)$，

$$
\eta(p)=-\frac{pf'(p)}{f(p)},\qquad
\overline\eta=-\frac{\Delta q}{\Delta p}\frac{p_0}{q_0}.
$$

**供给弹性：** 对供给函数 $q=\varphi(p)$，

$$
\varepsilon(p)=\frac{p\varphi'(p)}{\varphi(p)},\qquad
\overline\varepsilon=\frac{\Delta q}{\Delta p}\frac{p_0}{q_0}.
$$

其中 $p_0,q_0$ 为初始价格与数量，$\Delta p,\Delta q$ 为相应增量，公式中的分母均须非零。

!!! warning "提示"

    -   **弹性不是导数**：弹性是相对变化率之比 $E_xf=\dfrac{x f'(x)}{f(x)}$，无量纲；边际 $f'(x)$ 是绝对变化率，两者不能混用。

        ??? example "弹性与边际"
            <!-- 待补充 -->

    -   **需求弹性与供给弹性的符号**：需求函数单调递减，教材用 $\eta=-p f'(p)/f(p)$ 使其为正；供给弹性 $\varepsilon=p\varphi'(p)/\varphi(p)$ 不加负号，套公式时不要漏掉或误加负号。

        ??? example "需求弹性与供给弹性"
            <!-- 待补充 -->

    -   **点弹性与平均弹性**：题目给出函数时用点弹性 $E_xf$；只给出离散数据或增量时，用平均弹性 $\dfrac{\Delta y/y}{\Delta x/x}$，两者不能互相替代。

        ??? example "点弹性与弧弹性"
            <!-- 待补充 -->

    -   **弹性与收益的关系要看符号**：需求弹性 $|\eta|>1$ 时降价可使收益增加，$|\eta|<1$ 时涨价可使收益增加；这里的收益是 $R=pq$，不是 $q$。

        ??? example "弹性与收益"
            <!-- 待补充 -->

### §8 曲率

#### §8.1 曲率

设曲线上弧段的长度为 $\tau$，弧段两端切线的夹角为 $\theta$（取非负值）。$\theta/\tau$ 为该弧段的平均曲率；当另一端点趋于点 $M$ 时，若极限存在，则点 $M$ 处的曲率为

$$
k=\lim_{\tau\to0}\frac{\theta}{\tau}.
$$

半径为 $R$ 的圆的曲率为 $k=1/R$；直线的曲率为零。

对二阶可导的曲线 $x=x(t),y=y(t)$，当 $x'(t),y'(t)$ 不同时为零时，

$$
k=\frac{|x'y''-x''y'|}{\bigl((x')^2+(y')^2\bigr)^{3/2}}.
$$

对曲线 $y=f(x)$，

$$
k=\frac{|f''(x)|}{\bigl(1+(f'(x))^2\bigr)^{3/2}}.
$$

#### §8.2 曲率圆

**曲率圆：** 在曲线上曲率 $k\ne0$ 的点 $M$，沿法线向曲线凹侧取距离 $R=1/k$ 的点为圆心，以 $R$ 为半径的圆称为曲线在 $M$ 处的曲率圆。其圆心称为曲率中心，$R$ 称为曲率半径。

对 $y=f(x)$，$y''\ne0$ 时，曲率半径与曲率中心 $(\xi,\eta)$ 为

$$
R=\frac{(1+(y')^2)^{3/2}}{|y''|},\qquad
\xi=x-\frac{y'(1+(y')^2)}{y''},\qquad
\eta=y+\frac{1+(y')^2}{y''}.
$$

曲线 $C$ 的曲率中心的轨迹 $G$ 称为 $C$ 的渐屈线，$C$ 称为 $G$ 的渐伸线。

!!! warning "提示"

    -   **曲率圆存在的条件**：只有曲率 $k\ne0$（即 $y''\ne0$）的点才有曲率圆；直线 $k=0$，没有曲率圆。

        ??? example "曲率圆的存在性"
            <!-- 待补充 -->

    -   **曲率中心在凹侧**：曲率中心沿法线指向曲线凹的一侧，$(\xi,\eta)$ 的公式中符号由 $y''$ 决定；不能把圆心画在凸侧。

        ??? example "曲率中心的位置"
            <!-- 待补充 -->

    -   **公式不要漏绝对值与幂次**：$R=\dfrac{(1+(y')^2)^{3/2}}{|y''|}$，分母取绝对值，分子是 $3/2$ 次方；$\xi,\eta$ 的分母是 $y''$，不带绝对值。

        ??? example "曲率半径与曲率中心"
            <!-- 待补充 -->

    -   **曲率圆只保证二阶接触**：曲率圆与曲线在该点有相同切线和相同曲率，但不保证更高阶导数相同；渐屈线是曲率中心的轨迹，原曲线是渐屈线的渐伸线。

        ??? example "曲率圆与渐屈线"
            <!-- 待补充 -->

### §9 方程的近似根 \*

#### §9.1 图解法

方程 $f(x)=0$ 的实根对应于曲线 $y=f(x)$ 与 $x$ 轴交点的横坐标；方程 $f_1(x)=f_2(x)$ 的实根对应于曲线 $y=f_1(x)$ 与 $y=f_2(x)$ 交点的横坐标。

#### §9.2 数值法

**根的隔离区间：** 若方程 $f(x)=0$ 在 $(a,b)$ 内恰有一个根，且 $f(a)f(b)\ne0$，则称 $(a,b)$ 为根的隔离区间。若 $f\in C[a,b]$，$f(a)f(b)<0$，且在 $(a,b)$ 内 $f'$ 恒正或恒负，则 $(a,b)$ 为根的隔离区间。

**二分法：** 设 $f\in C[a,b]$，$f(a)f(b)<0$。连续二分并选取端点函数值异号的子区间 $[a_n,b_n]$，有

$$
b_n-a_n=\frac{b-a}{2^n},\qquad
x_n=\frac{a_n+b_n}{2},\qquad
|x_n-c|<\frac{b-a}{2^n},
$$

其中 $c$ 为所求根。

**牛顿法（切线法）：** 迭代公式为

$$
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\qquad(f'(x_n)\ne0).
$$

若 $f$ 在 $[a,b]$ 上二阶连续可导，$f(a)f(b)<0$，且 $f',f''$ 在 $[a,b]$ 上均不为零，初值 $x_0\in[a,b]$ 满足 $f(x_0)f''(x_0)>0$，则牛顿迭代单调收敛于区间内的唯一根 $c$。

在上述条件下，记

$$
m=\min_{x\in[a,b]}|f'(x)|>0,\qquad
M=\max_{x\in[a,b]}|f''(x)|,
$$

则

$$
|x_{n+1}-c|\le\frac{M}{2m}|x_n-c|^2,\qquad
|x_n-c|\le\frac{|f(x_n)|}{m}.
$$

!!! warning "提示"

    -   **二分法的前提**：$f\in C[a,b]$ 且 $f(a)f(b)<0$ 才能保证区间内有根；若区间内有多个根，需先做根的隔离，二分法只收敛到其中一个根。

        ??? example "二分法的前提"
            <!-- 待补充 -->

    -   **误差界与停机准则**：$n$ 次二分后 $|x_n-c|<\dfrac{b-a}{2^n}$ 是误差上界；停机应按所需精度选 $n$，不能只看 $|f(x_n)|$ 很小就停止。

        ??? example "二分法的误差估计"
            <!-- 待补充 -->

    -   **牛顿法的条件**：迭代要求 $f'(x_n)\ne0$；保证单调收敛还需 $f',f''$ 不变号且初值满足 $f(x_0)f''(x_0)>0$，否则可能发散、循环或跳出区间。

        ??? example "牛顿法的收敛条件"
            <!-- 待补充 -->

    -   **收敛速度是局部的**：牛顿法在单根附近二阶收敛；重根时通常退化为线性收敛，需要改造迭代公式或先做根的隔离。

        ??? example "牛顿法的收敛速度"
            <!-- 待补充 -->

## 第四章 不定积分

### §1 不定积分的概念

#### §1.1 原函数与不定积分

设 $f$ 在区间 $I$ 上有定义。若可导函数 $F$ 对每个 $x\in I$ 都满足

$$
F'(x)=f(x),\qquad\text{或}\qquad\mathrm dF(x)=f(x)\,\mathrm dx,
$$

则称 $F$ 为 $f$ 在 $I$ 上的一个原函数。

$f$ 在同一区间上的全部原函数为 $F(x)+C$，称为 $f$ 的不定积分，记为

$$
\int f(x)\,\mathrm dx=F(x)+C.
$$

$f$ 为被积函数，$x$ 为积分变量，$f(x)\,\mathrm dx$ 为被积表达式，$C$ 为任意常数，称为积分常数。求原函数的运算称为积分法。

不定积分的图形是一族积分曲线；在横坐标相同的各点处，它们具有相同的切线斜率。

??? info "原函数全体的证明"

    设 $A=\{F(x)+C:C\in\mathbb R\text{ 是常数}\}$，$B$ 是 $f(x)$ 在区间 $I$ 上所有原函数组成的集合，我们只要证明 $A=B$ 即可。

    前面已经证明了 $A\subset B$。现证明 $B\subset A$，任给 $G(x)\in B$，有

    $$
    G'(x)=f(x),\qquad x\in I.
    $$

    又 $F'(x)=f(x)$，$x\in I$。由于

    $$
    [G(x)-F(x)]'=G'(x)-F'(x)=f(x)-f(x)=0,\qquad x\in I,
    $$

    因此，$G(x)-F(x)=C$，$C\in\mathbb R$ 是某一个常数，即

    $$
    G(x)=F(x)+C,\qquad x\in I,
    $$

    所以 $G(x)\in A$，于是 $B\subset A$。因此 $A=B$。

#### §1.2 基本积分

下表各式在被积函数有定义的相应区间内成立，$C$ 为任意常数。

| 不定积分 | 公式 | 条件 |
| --- | --- | --- |
| $\int1\,\mathrm dx$ | $x+C$ | |
| $\int x^\alpha\,\mathrm dx$ | $\displaystyle\frac{x^{\alpha+1}}{\alpha+1}+C$ | $\alpha\ne-1$ |
| $\int\frac{\mathrm dx}{x}$ | $\ln\lvert x\rvert+C$ | $x\ne0$ |
| $\int a^x\,\mathrm dx$ | $\displaystyle\frac{a^x}{\ln a}+C$ | $a>0,\ a\ne1$ |
| $\int e^x\,\mathrm dx$ | $e^x+C$ | |
| $\int\frac{\mathrm dx}{1+x^2}$ | $\arctan x+C$ 或 $-\operatorname{arccot}x+C$ | |
| $\int\frac{\mathrm dx}{\sqrt{1-x^2}}$ | $\arcsin x+C$ 或 $-\arccos x+C$ | $-1<x<1$ |
| $\int\sin x\,\mathrm dx$ | $-\cos x+C$ | |
| $\int\cos x\,\mathrm dx$ | $\sin x+C$ | |
| $\int\sec^2x\,\mathrm dx$ | $\tan x+C$ | $\cos x\ne0$ |
| $\int\csc^2x\,\mathrm dx$ | $-\cot x+C$ | $\sin x\ne0$ |
| $\int\sec x\tan x\,\mathrm dx$ | $\sec x+C$ | $\cos x\ne0$ |
| $\int\csc x\cot x\,\mathrm dx$ | $-\csc x+C$ | $\sin x\ne0$ |
| $\int\sinh x\,\mathrm dx$ | $\cosh x+C$ | |
| $\int\cosh x\,\mathrm dx$ | $\sinh x+C$ | |

#### §1.3 不定积分的性质

$$
\frac{\mathrm d}{\mathrm dx}\int f(x)\,\mathrm dx=f(x),\qquad
\mathrm d\int f(x)\,\mathrm dx=f(x)\,\mathrm dx,
$$

$$
\int f'(x)\,\mathrm dx=f(x)+C,\qquad
\int\mathrm df(x)=f(x)+C.
$$

若 $f,g$ 的原函数均存在，则

$$
\int[f(x)\pm g(x)]\,\mathrm dx
=\int f(x)\,\mathrm dx\pm\int g(x)\,\mathrm dx,
$$

$$
\int\alpha f(x)\,\mathrm dx=\alpha\int f(x)\,\mathrm dx,
\qquad \alpha\ne0\text{ 为常数}.
$$

!!! warning "提示"

    -   **结果必须带任意常数**：不定积分表示全部原函数 $F(x)+C$，只写一个原函数会漏解；求导与积分互为逆运算，但相差一个常数。

        ??? example "积分常数"
            <!-- 待补充 -->

    -   **线性性质只对加减和常数倍成立**：$\int(f\pm g)=\int f\pm\int g$、$\int\alpha f=\alpha\int f$，但一般 $\int fg\ne\int f\cdot\int g$，$\int\dfrac fg\ne\dfrac{\int f}{\int g}$。

        ??? example "积分的线性性质"
            <!-- 待补充 -->

    -   **原函数存在性与可积性不同**：连续函数必有原函数，但原函数存在不要求被积函数连续；初等函数不一定有初等原函数（如 $e^{-x^2}$）。

        ??? example "原函数的存在性"
            <!-- 待补充 -->

    -   **积分变量要与被积表达式一致**：$\displaystyle\int f(x)\,\mathrm dx$ 中的 $x$ 是哑变量，换元后必须同时换 $\mathrm dx$ 和积分限（定积分）或回代（不定积分）。

        ??? example "积分变量的替换"
            <!-- 待补充 -->

### §2 不定积分的几种基本方法

#### §2.1 凑微分法（第一换元法）

若 $F'(u)=f(u)$，$u=\varphi(x)$ 可导，则

$$
\int f(\varphi(x))\varphi'(x)\,\mathrm dx
=\int f(u)\,\mathrm du
=F(\varphi(x))+C.
$$

**注：** 运用此定理的关键是被积表达式能否凑成

$$
f(\varphi(x))\varphi'(x)\,\mathrm dx=f(\varphi(x))\,\mathrm d\varphi(x)
$$

的形式，并且 $f(u)$ 的原函数能求出。在具体运用此定理时，一般可不引入中间变量 $u$，而直接写出结果，即

$$
\int g(x)\,\mathrm dx
=\int f(\varphi(x))\varphi'(x)\,\mathrm dx
=\int f(\varphi(x))\,\mathrm d\varphi(x)
=F(\varphi(x))+C.
$$

???+ example "例1"

    求 $\displaystyle\int\frac1{\sqrt{a^2-x^2}}\,\mathrm dx$（$a>0$）。

    ??? success "解析"

        $$
        \begin{aligned}
        \int\frac1{\sqrt{a^2-x^2}}\,\mathrm dx
        &=\int\frac1{a\sqrt{1-\left(\dfrac xa\right)^2}}\,\mathrm dx\\
        &=\int\frac1{\sqrt{1-\left(\dfrac xa\right)^2}}\,\mathrm d\left(\frac xa\right)
        =\arcsin\frac xa+C.
        \end{aligned}
        $$

#### §2.2 变量代换法（第二换元法）

若 $x=\varphi(t)$ 在所用区间内严格单调、可导，$\varphi'(t)\ne0$，且 $G'(t)=f(\varphi(t))\varphi'(t)$，则

$$
\int f(x)\,\mathrm dx=G(\varphi^{-1}(x))+C.
$$

等价地，

$$
\int f(\varphi(t))\varphi'(t)\,\mathrm dt=G(t)+C,
\qquad t=\varphi^{-1}(x).
$$

下表中 $a>0$，各变量关系在相应的实数区间内成立。

| 根式 | 变量关系 | 参数范围 |
| --- | --- | --- |
| $\sqrt{a^2-x^2}$ | $x=a\sin t$ | $-\pi/2\le t\le\pi/2$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan t$ | $-\pi/2<t<\pi/2$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec t$ | $t\in[0,\pi/2)\cup(\pi/2,\pi]$ |

#### §2.3 分部积分法

若 $u,v$ 均可导，且 $\int u'v\,\mathrm dx$ 存在，则

$$
\int u(x)v'(x)\,\mathrm dx
=u(x)v(x)-\int u'(x)v(x)\,\mathrm dx,
$$

或写为

$$
\int u\,\mathrm dv=uv-\int v\,\mathrm du.
$$

!!! warning "提示"

    -   **$u$ 的选取决定成败**：一般按"反、对、幂、指、三"的优先级选 $u$，选错会使积分更复杂；$v$ 可取任一原函数，通常省略常数。

        ??? example "$u$ 与 $\mathrm dv$ 的选取"
            <!-- 待补充 -->

    -   **公式中的负号不能漏**：$\int u\,\mathrm dv=uv-\int v\,\mathrm du$；多次分部时要保持 $u$ 的类型一致，避免来回抵消。

        ??? example "分部积分公式"
            <!-- 待补充 -->

    -   **循环积分要移项**：对 $\int e^{ax}\sin bx\,\mathrm dx$ 一类，分部两次后出现原积分，应移项解出并补上常数 $C$，不能直接令两边相等。

        ??? example "循环积分"
            <!-- 待补充 -->

    -   **定积分分部要带上下限**：$\displaystyle\int_a^b u\,\mathrm dv=[uv]_a^b-\int_a^b v\,\mathrm du$，先代上下限再算第二项，避免遗漏边界项。

        ??? example "定积分的分部积分"
            <!-- 待补充 -->

??? info "分部积分公式的推导"

    若 $u=u(x)$，$v=v(x)$ 均可导，则 $(uv)'=u'v+uv'$。移项有 $uv'=(uv)'-u'v$，两边求不定积分，得

    $$
    \int uv'\,\mathrm dx=\int(uv)'\,\mathrm dx-\int u'v\,\mathrm dx.
    $$

    因此，有下面的结果：

    $$
    \int u(x)v'(x)\,\mathrm dx=u(x)v(x)-\int u'(x)v(x)\,\mathrm dx.
    $$

???+ example "例17"

    求 $\displaystyle\int xe^x\,\mathrm dx$。

    ??? success "解析"

        设 $u=x$，$v'=e^x$，于是

        $$
        \text{原式}=\int x\,\mathrm de^x=xe^x-\int e^x\,\mathrm dx=xe^x-e^x+C.
        $$

### §3 某些特殊类型函数的不定积分

#### §3.1 有理函数的不定积分

有理函数是两个多项式的商 $Q(x)/P(x)$。当 $\deg Q<\deg P$ 时称为有理真分式；当 $\deg Q\ge\deg P$ 时称为有理假分式。多项式除法给出

$$
\frac{Q(x)}{P(x)}=H(x)+\frac{R(x)}{P(x)},\qquad\deg R<\deg P,
$$

其中 $H,R$ 均为多项式。

实系数多项式在实数范围内可分解为一次因式和不可约二次因式的乘积。对既约有理真分式，部分分式中各因式对应的项为

$$
(x-a)^m:\qquad\sum_{k=1}^m\frac{A_k}{(x-a)^k},
$$

$$
(x^2+px+q)^m:\qquad
\sum_{k=1}^m\frac{B_kx+C_k}{(x^2+px+q)^k},
\qquad p^2-4q<0.
$$

$m$ 为因式的重数，$A_k,B_k,C_k$ 为待定常数。一次因式对应的积分为

$$
\int\frac{\mathrm dx}{(x-a)^n}
=\begin{cases}
\ln|x-a|+C,&n=1,\\[3pt]
\dfrac1{(1-n)(x-a)^{n-1}}+C,&n>1,
\end{cases}
\qquad n\in\mathbb N_+.
$$

#### §3.2 三角函数有理式的不定积分

由若干函数及常数经有限次四则运算得到的式子称为这些函数的有理式，记为 $R(u_1(x),\ldots,u_k(x))$。三角函数有理式可表示为 $R(\sin x,\cos x)$。

在 $-\pi<x<\pi$ 内，变量关系 $t=\tan(x/2)$ 给出

$$
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2},\qquad
x=2\arctan t,\qquad\mathrm dx=\frac{2\,\mathrm dt}{1+t^2},
$$

$$
\int R(\sin x,\cos x)\,\mathrm dx
=\int R\left(\frac{2t}{1+t^2},\frac{1-t^2}{1+t^2}\right)
\frac{2\,\mathrm dt}{1+t^2}.
$$

#### §3.3 某些无理函数的不定积分

对变量关系

$$
t=\sqrt[n]{\frac{ax+b}{cx+d}},
\qquad x=\varphi(t)=\frac{dt^n-b}{a-ct^n},
$$

其中 $n$ 为正整数、$ad-bc\ne0$，在各式有意义且变换可逆的区间内，有

$$
\int R\left(x,\sqrt[n]{\frac{ax+b}{cx+d}}\right)\,\mathrm dx
=\int R(\varphi(t),t)\varphi'(t)\,\mathrm dt.
$$

含二次根式 $\sqrt{ax^2+bx+c}$ 的欧拉变换为

$$
\begin{aligned}
a>0:\quad&\sqrt{ax^2+bx+c}=t\pm\sqrt a\,x,\\
c>0:\quad&\sqrt{ax^2+bx+c}=xt\pm\sqrt c.
\end{aligned}
$$

若 $ax^2+bx+c=a(x-\alpha)(x-\beta)$，$\alpha,\beta$ 为实根，还可使用变量关系

$$
\sqrt{a(x-\alpha)(x-\beta)}=t(x-\alpha),
\qquad\text{或}\qquad
\sqrt{a(x-\alpha)(x-\beta)}=t(x-\beta).
$$

!!! warning "提示"

    -   **代换必须可逆且分母非零**：$t=\sqrt[n]{\dfrac{ax+b}{cx+d}}$ 要求 $ad-bc\ne0$，回代时 $a-ct^n\ne0$；否则变换不一一对应，积分区间也会出错。

        ??? example "根式代换的条件"
            <!-- 待补充 -->

    -   **欧拉变换的符号要与根式一致**：取 $\sqrt{ax^2+bx+c}=t\pm\sqrt a\,x$ 或 $=xt\pm\sqrt c$ 时，要根据 $a,c$ 的符号和根式非负的要求选择，不能随意取正负。

        ??? example "欧拉变换"
            <!-- 待补充 -->

    -   **先配方再选方法**：含 $\sqrt{ax^2+bx+c}$ 时先配方，再根据判别式与 $a$ 的符号决定用三角代换还是欧拉变换；盲目套公式容易把定义域弄错。

        ??? example "二次根式的代换"
            <!-- 待补充 -->

    -   **回代后要检查定义域**：偶次根号要求被开方式非负，三角代换要满足参数范围（如 $x=a\sin t$ 取 $t\in[-\pi/2,\pi/2]$）以保证可逆；结果只在相应区间上成立。

        ??? example "回代与定义域"
            <!-- 待补充 -->

## 第五章 定积分及其应用

### §1 定积分概念

#### §1.1 定积分的定义

将 $[a,b]$ 分割为 $a=x_0<x_1<\cdots<x_n=b$，记 $\Delta x_i=x_i-x_{i-1}$、$\lambda=\max_i\Delta x_i$，任取 $\xi_i\in[x_{i-1},x_i]$。若极限

$$
I=\lim_{\lambda\to0}\sum_{i=1}^n f(\xi_i)\Delta x_i
$$

存在且与分割及取点方式无关，则称 $f$ 在 $[a,b]$ 上可积，$I$ 称为 $f$ 在 $[a,b]$ 上的定积分，记为

$$
I=\int_a^b f(x)\,\mathrm dx.
$$

$f$ 是被积函数，$x$ 是积分变量，$a,b$ 分别是积分下限、积分上限，$f(x)\,\mathrm dx$ 是被积表达式。

$$
\int_a^a f(x)\,\mathrm dx=0,\qquad
\int_b^a f(x)\,\mathrm dx=-\int_a^b f(x)\,\mathrm dx.
$$

当 $f\ge0$ 时，定积分表示曲线 $y=f(x)$、$x$ 轴及直线 $x=a,x=b$ 围成的曲边梯形面积；一般情形表示 $x$ 轴上方与下方面积的代数和。

#### §1.2 可积函数类

$$
f\text{ 在 }[a,b]\text{ 上可积}\Longrightarrow f\text{ 在 }[a,b]\text{ 上有界}.
$$

闭区间上的连续函数、有界且只有有限个间断点的函数、单调函数均可积。

!!! warning "提示"

    -   **可积必先有界**：$f$ 在 $[a,b]$ 上可积的必要条件是 $f$ 有界；但有界不一定可积，如 Dirichlet 函数在 $[0,1]$ 上有界却不可积。

        ??? example "有界与可积"
            <!-- 待补充 -->

    -   **充分条件不是必要条件**：连续、有界且只有有限个间断点、单调都只是可积的充分条件；单调函数即使有无限个间断点仍可积，不能把"有限个间断点"当成可积的必要条件。

        ??? example "可积的充分条件"
            <!-- 待补充 -->

    -   **区间必须是有限闭区间**：上述可积性结论针对 $[a,b]$；无穷区间或无界函数的积分属于反常积分，需另行判断敛散性。

        ??? example "积分区间的类型"
            <!-- 待补充 -->

    -   **"有限个间断点"要看是否有界**：有界且只有有限个间断点才保证可积；若函数无界，即使只有一个瑕点也不是常义可积，而是反常积分。

        ??? example "间断点与可积性"
            <!-- 待补充 -->

### §2 定积分的性质和基本定理

#### §2.1 定积分的基本性质

设以下各函数在相应区间可积，$\alpha,\beta$ 为常数，则

$$
\int_a^b1\,\mathrm dx=b-a,
$$

$$
\int_a^b[\alpha f(x)+\beta g(x)]\,\mathrm dx
=\alpha\int_a^bf(x)\,\mathrm dx+\beta\int_a^bg(x)\,\mathrm dx,
$$

$$
\int_a^bf(x)\,\mathrm dx=\int_a^cf(x)\,\mathrm dx+\int_c^bf(x)\,\mathrm dx.
$$

当 $a<b$ 时，

$$
f(x)\ge g(x)\Longrightarrow\int_a^bf(x)\,\mathrm dx\ge\int_a^bg(x)\,\mathrm dx,
\qquad
\left|\int_a^bf(x)\,\mathrm dx\right|\le\int_a^b|f(x)|\,\mathrm dx.
$$

若 $m\le f(x)\le M$，则

$$
m(b-a)\le\int_a^bf(x)\,\mathrm dx\le M(b-a).
$$

若 $f$ 连续、$f\ge0$ 且 $f\not\equiv0$，则 $\int_a^bf(x)\,\mathrm dx>0$。若 $f$ 在 $[a,b]$ 连续，则存在 $\xi\in[a,b]$，使积分中值公式成立：

$$
\int_a^bf(x)\,\mathrm dx=f(\xi)(b-a).
$$

#### §2.2 微积分学基本定理

设 $f$ 在区间 $I$ 连续，$a\in I$ 为固定点，变上限积分定义的函数

$$
G(x)=\int_a^xf(t)\,\mathrm dt
$$

满足

$$
G'(x)=f(x).
$$

若 $u,v$ 可导，且 $f$ 在包含其取值的区间连续，则

$$
\frac{\mathrm d}{\mathrm dx}\int_{v(x)}^{u(x)}f(t)\,\mathrm dt
=f(u(x))u'(x)-f(v(x))v'(x).
$$

若 $f$ 在 $[a,b]$ 连续，$F$ 为其一个原函数，则牛顿—莱布尼茨公式为

$$
\int_a^bf(x)\,\mathrm dx=[F(x)]_a^b=F(b)-F(a).
$$

!!! warning "提示"

    -   **变上限积分求导要求被积函数连续**：$G(x)=\int_a^x f(t)\,\mathrm dt$ 在 $f$ 连续时才有 $G'(x)=f(x)$；$f$ 仅可积时 $G$ 连续但未必可导。

        ??? example "变上限积分求导"
            <!-- 待补充 -->

    -   **上下限都是函数时的符号**：$\dfrac{\mathrm d}{\mathrm dx}\displaystyle\int_{v(x)}^{u(x)}f(t)\,\mathrm dt=f(u)u'-f(v)v'$，上限对应 $+$、下限对应 $-$，不要写反。

        ??? example "变限积分的求导"
            <!-- 待补充 -->

    -   **牛顿—莱布尼茨公式的条件**：$f$ 在 $[a,b]$ 上连续（或可积且有原函数），$F$ 必须是 $f$ 在该区间上的原函数；若 $F$ 在区间内某点无定义或跨过瑕点，不能直接代入。

        ??? example "牛顿—莱布尼茨公式"
            <!-- 待补充 -->

    -   **被积函数含参数 $x$ 时不能直接套公式**：如 $\int_0^x f(x,t)\,\mathrm dt$，要先换元把 $x$ 从被积函数中分离，再对变上限求导。

        ??? example "含参数的变限积分"
            <!-- 待补充 -->

??? info "微积分学基本定理的证明"

    任给 $x\in I$，当 $|\Delta x|$ 充分小时，有 $x+\Delta x\in I$，由于

    $$
    \begin{aligned}
    \lim_{\Delta x\to0}\frac{G(x+\Delta x)-G(x)}{\Delta x}
    &=\lim_{\Delta x\to0}\frac{\displaystyle\int_a^{x+\Delta x}f(t)\,\mathrm dt-\int_a^xf(t)\,\mathrm dt}{\Delta x}\\
    &=\lim_{\Delta x\to0}\frac{\displaystyle\int_a^xf(t)\,\mathrm dt+\int_x^{x+\Delta x}f(t)\,\mathrm dt-\int_a^xf(t)\,\mathrm dt}{\Delta x}\\
    &=\lim_{\Delta x\to0}\frac{\displaystyle\int_x^{x+\Delta x}f(t)\,\mathrm dt}{\Delta x}\\
    &=\lim_{\Delta x\to0}\frac{f(\xi)\Delta x}{\Delta x}
    \quad\text{（$\xi$ 在 $x$ 与 $x+\Delta x$ 之间）}\\
    &=\lim_{\Delta x\to0}f(\xi)=\lim_{\xi\to x}f(\xi)
    \quad\text{（当 $\Delta x\to0$ 时，有 $\xi\to x$）},
    \end{aligned}
    $$

    且 $f(t)$ 在 $x$ 处连续，所以 $\lim_{\xi\to x}f(\xi)=f(x)$。因此，$G(x)$ 在 $x$ 处可导，且

    $$
    G'(x)=\frac{\mathrm d}{\mathrm dx}\int_a^xf(t)\,\mathrm dt=f(x).
    $$

??? info "牛顿—莱布尼茨公式的证明"

    由定理条件知，$F(x)$ 也是 $f(x)$ 在区间 $[a,b]$ 上的一个原函数，而 $\int_a^xf(t)\,\mathrm dt$ 也是 $f(x)$ 在区间 $[a,b]$ 上的一个原函数，则

    $$
    \int_a^xf(t)\,\mathrm dt-F(x)=C,\qquad C\text{ 是某一个常数},
    $$

    即

    $$
    \int_a^xf(t)\,\mathrm dt=F(x)+C.
    $$

    在上面的恒等式中令 $x=a$，有 $0=\int_a^af(t)\,\mathrm dt=F(a)+C$，即 $C=-F(a)$，于是

    $$
    \int_a^xf(t)\,\mathrm dt=F(x)-F(a).
    $$

    再令 $x=b$，就有 $\int_a^bf(t)\,\mathrm dt=F(b)-F(a)$，即

    $$
    \int_a^bf(x)\,\mathrm dx=F(b)-F(a).
    $$

**注：** 不定积分的结果是一个函数，定积分的结果是一个数值。

???+ example "例3"

    求 $\displaystyle\frac{\mathrm d}{\mathrm dx}\int_{x^2}^{x^3}\cos t^2\,\mathrm dt$。

    ??? success "解析"

        $$
        \frac{\mathrm d}{\mathrm dx}\int_{x^2}^{x^3}\cos t^2\,\mathrm dt
        =3x^2\cos x^6-2x\cos x^4.
        $$

### §3 定积分的计算方法

#### §3.1 几种基本的定积分计算方法

若 $f$ 在 $[a,b]$ 连续，$x=\psi(t)$ 具有连续导数，$\psi(\alpha)=a$、$\psi(\beta)=b$，且 $\psi(t)$ 的取值属于 $[a,b]$，则

$$
\int_a^bf(x)\,\mathrm dx
=\int_\alpha^\beta f(\psi(t))\psi'(t)\,\mathrm dt.
$$

若 $u,v$ 在 $[a,b]$ 具有连续导数，则

$$
\int_a^bu(x)v'(x)\,\mathrm dx
=[u(x)v(x)]_a^b-\int_a^bv(x)u'(x)\,\mathrm dx.
$$

#### §3.2 几种简化的定积分计算方法

若 $f$ 在 $[-a,a]$ 连续，$a>0$，则

$$
\int_{-a}^af(x)\,\mathrm dx=
\begin{cases}
0,&f\text{ 为奇函数},\\
2\displaystyle\int_0^af(x)\,\mathrm dx,&f\text{ 为偶函数},
\end{cases}
$$

$$
\int_{-a}^af(x)\,\mathrm dx=\int_0^a[f(x)+f(-x)]\,\mathrm dx.
$$

若 $f$ 是连续的周期函数，周期为 $T>0$，则

$$
\int_a^{a+T}f(x)\,\mathrm dx=\int_0^Tf(x)\,\mathrm dx.
$$

记 $I_n=\int_0^{\pi/2}\sin^n x\,\mathrm dx$，其中 $n$ 为非负整数，则

$$
I_n=\int_0^{\pi/2}\cos^n x\,\mathrm dx,
\qquad I_0=\frac\pi2,\quad I_1=1,\quad
I_n=\frac{n-1}{n}I_{n-2}\quad(n\ge2),
$$

当 $n\ge2$ 时，

$$
I_n=
\begin{cases}
\dfrac{n-1}{n}\dfrac{n-3}{n-2}\cdots\dfrac12\dfrac\pi2,&n\text{ 为偶数},\\[4pt]
\dfrac{n-1}{n}\dfrac{n-3}{n-2}\cdots\dfrac23,&n\text{ 为奇数}.
\end{cases}
$$

!!! warning "提示"

    -   **奇偶性公式要求区间对称**：只有 $[-a,a]$ 上才能用奇函数积分为 $0$、偶函数积分为 $2\int_0^a$；区间不对称或函数没有奇偶性时不能套用。

        ??? example "对称区间上的积分"
            <!-- 待补充 -->

    -   **周期函数积分与起点无关**：若 $f$ 以 $T$ 为周期，则 $\int_a^{a+T}f=\int_0^Tf$ 对任意实数 $a$ 成立；推广到 $n$ 个周期时是 $n\int_0^Tf$。

        ??? example "周期函数的积分"
            <!-- 待补充 -->

    -   **华里士公式的奇偶结果要分清**：$I_0=\dfrac\pi2$、$I_1=1$，递推 $I_n=\dfrac{n-1}{n}I_{n-2}$；$n$ 为偶数时最后乘 $\dfrac\pi2$，为奇数时最后乘 $1$。

        ??? example "华里士公式"
            <!-- 待补充 -->

    -   **先拆分再利用对称性**：被积函数整体没有奇偶性时，可拆成奇、偶两部分分别积分；不要因为整体不是奇函数就直接放弃对称性。

        ??? example "拆分后利用对称性"
            <!-- 待补充 -->

### §4 定积分的应用

#### §4.1 平面图形的面积

连续曲线 $y=f_1(x),y=f_2(x)$ 与直线 $x=a,x=b$ 围成的图形面积为

$$
S=\int_a^b|f_2(x)-f_1(x)|\,\mathrm dx.
$$

连续曲线 $x=\psi_1(y),x=\psi_2(y)$ 与直线 $y=c,y=d$ 围成的图形面积为

$$
S=\int_c^d|\psi_2(y)-\psi_1(y)|\,\mathrm dy.
$$

#### §4.2 立体及旋转体的体积

设立体位于 $x=a$ 与 $x=b$ 之间，垂直于 $x$ 轴的截面积为连续函数 $A(x)$，则

$$
V=\int_a^bA(x)\,\mathrm dx.
$$

曲线 $y=f(x)$、$x$ 轴及直线 $x=a,x=b$ 围成的图形绕 $x$ 轴旋转所得体积为

$$
V_x=\pi\int_a^bf^2(x)\,\mathrm dx.
$$

#### §4.3 微元法及应用

微元 $\mathrm dQ=f(x)\,\mathrm dx$ 是部分量增量 $\Delta Q$ 的线性主部：

$$
\Delta Q=f(x)\Delta x+o(\Delta x),\qquad
Q=\int_a^bf(x)\,\mathrm dx.
$$

连续极坐标曲线 $r=r(\theta)$ 与射线 $\theta=\alpha,\theta=\beta$ 围成的曲边扇形面积为

$$
S=\frac12\int_\alpha^\beta r^2(\theta)\,\mathrm d\theta.
$$

平面曲线 $x=\varphi(t),y=\psi(t)$，$\alpha\le t\le\beta$，若一阶导数连续，则弧长为

$$
s=\int_\alpha^\beta\sqrt{\varphi'(t)^2+\psi'(t)^2}\,\mathrm dt.
$$

相应的弧长微分为

$$
\mathrm ds=\sqrt{(\mathrm dx)^2+(\mathrm dy)^2}.
$$

$$
\begin{aligned}
y=f(x):\quad&s=\int_a^b\sqrt{1+f'(x)^2}\,\mathrm dx,\\
x=\psi(y):\quad&s=\int_c^d\sqrt{1+\psi'(y)^2}\,\mathrm dy,\\
r=r(\theta):\quad&s=\int_\alpha^\beta\sqrt{r^2(\theta)+r'(\theta)^2}\,\mathrm d\theta.
\end{aligned}
$$

曲线 $y=f(x)$、$x$ 轴及直线 $x=a,x=b$ 围成的图形，$0\le a<b$，绕 $y$ 轴旋转所得体积为

$$
V_y=2\pi\int_a^bx|f(x)|\,\mathrm dx.
$$

曲线 $y=f(x)$ 绕 $x$ 轴旋转所得侧面积为

$$
S_x=2\pi\int_a^b|f(x)|\sqrt{1+f'(x)^2}\,\mathrm dx.
$$

#### §4.4 定积分在物理中的应用

液体密度为 $\rho$，深度为 $h$ 时的压强为 $p=\rho gh$，其中 $g$ 为重力加速度。水平窄条宽度为 $w(h)$ 时，竖直平板一侧的静压力为

$$
F=\int_{h_1}^{h_2}\rho gh\,w(h)\,\mathrm dh.
$$

变力 $F(x)$ 沿直线运动方向做功：

$$
W=\int_a^bF(x)\,\mathrm dx.
$$

相距 $r$ 的质点 $m_1,m_2$ 之间的引力大小为 $Gm_1m_2/r^2$，$G$ 为万有引力常数。质量微元、动能微元与转动惯量微元分别满足

$$
\mathrm dm=\rho\,\mathrm dV,\qquad
\mathrm dE=\frac12v^2\,\mathrm dm,\qquad
\mathrm dJ=r^2\,\mathrm dm,
$$

其中 $\rho$ 为体密度，$v$ 为速度，$r$ 为质量微元到转轴的距离。

连续函数在 $[a,b]$ 上的平均值为

$$
\bar y=\frac1{b-a}\int_a^bf(x)\,\mathrm dx.
$$

#### §4.5 定积分在经济中的应用

收入流 $P(t)$ 表示单位时间流入的收入。以年利率 $r$ 连续复利计算，$[0,T]$ 内收入流的总现值与总将来值为

$$
V_0=\int_0^TP(t)e^{-rt}\,\mathrm dt,\qquad
V_T=\int_0^TP(t)e^{r(T-t)}\,\mathrm dt=e^{rT}V_0.
$$

设需求函数为 $p=D(q)$，供给函数为 $p=S(q)$，平衡价格、平衡数量分别为 $p^*,q^*$，满足 $D(q^*)=S(q^*)=p^*$。消费者剩余是按平衡价格购买所节省的钱的总额；生产者剩余是按平衡价格出售所获得的额外收入：

$$
\text{消费者剩余}=\int_0^{q^*}D(q)\,\mathrm dq-p^*q^*,
$$

$$
\text{生产者剩余}=p^*q^*-\int_0^{q^*}S(q)\,\mathrm dq.
$$

!!! warning "提示"

    -   **现值与将来值的折现方向**：连续复利下 $V_0=\int_0^TP(t)e^{-rt}\,\mathrm dt$，$V_T=e^{rT}V_0$；由将来值求现值要乘 $e^{-rT}$，不能乘 $e^{rT}$。

        ??? example "收入流的现值"
            <!-- 待补充 -->

    -   **消费者剩余与生产者剩余的减法方向**：消费者剩余是需求曲线下面积减去实际支出 $p^*q^*$；生产者剩余是实际收入 $p^*q^*$ 减去供给曲线下面积，两者不要写反。

        ??? example "消费者剩余与生产者剩余"
            <!-- 待补充 -->

    -   **积分上限是均衡数量**：计算剩余时上限取均衡数量 $q^*$，且 $q^*$ 由 $D(q^*)=S(q^*)=p^*$ 确定；不能任意取一个产量。

        ??? example "均衡数量与剩余"
            <!-- 待补充 -->

    -   **收入流的单位要与利率一致**：$P(t)$ 必须是"单位时间收入"，$r$ 与 $t$ 的时间单位要统一；若 $P(t)$ 已是某段时期的总收入，不能再直接积分。

        ??? example "收入流的单位"
            <!-- 待补充 -->

### §5 反常积分

#### §5.1 无穷区间上的反常积分

若 $f$ 在 $[a,+\infty)$ 连续，则第一类反常积分定义为

$$
\int_a^{+\infty}f(x)\,\mathrm dx
=\lim_{t\to+\infty}\int_a^tf(x)\,\mathrm dx.
$$

极限为有限数时称积分收敛，否则称积分发散。同理，

$$
\int_{-\infty}^bf(x)\,\mathrm dx
=\lim_{t\to-\infty}\int_t^bf(x)\,\mathrm dx.
$$

对任意有限数 $c$，当右端两积分均收敛时，

$$
\int_{-\infty}^{+\infty}f(x)\,\mathrm dx
=\int_{-\infty}^cf(x)\,\mathrm dx+\int_c^{+\infty}f(x)\,\mathrm dx.
$$

$$
\int_a^{+\infty}\frac{\mathrm dx}{x^p}\text{ 收敛}\iff p>1\qquad(a>0).
$$

???+ example "例1"

    讨论 $\displaystyle\int_a^{+\infty}\frac{\mathrm dx}{x^p}$（$a>0$）的敛散性（第一 $p$ 反常积分）。

    ??? success "解析"

        当 $p\ne1$ 时，有

        $$
        \begin{aligned}
        \int_a^{+\infty}\frac{\mathrm dx}{x^p}
        &=\lim_{t\to+\infty}\int_a^t\frac{\mathrm dx}{x^p}
        =\lim_{t\to+\infty}\left.\frac{x^{-p+1}}{-p+1}\right|_a^t\\
        &=\lim_{t\to+\infty}\frac1{1-p}\left(t^{-p+1}-a^{-p+1}\right)
        =\begin{cases}\dfrac{a^{1-p}}{p-1},&p>1,\\+\infty,&p<1.\end{cases}
        \end{aligned}
        $$

        当 $p=1$ 时，有

        $$
        \int_a^{+\infty}\frac{\mathrm dx}{x}
        =\lim_{t\to+\infty}\int_a^t\frac{\mathrm dx}{x}
        =\lim_{t\to+\infty}\left.\ln x\right|_a^t=+\infty.
        $$

        因此，当 $p>1$ 时，反常积分 $\int_a^{+\infty}\dfrac{\mathrm dx}{x^p}$ 收敛；而当 $p\le1$ 时，$\int_a^{+\infty}\dfrac{\mathrm dx}{x^p}$ 发散。

#### §5.2 无界函数的反常积分

被积函数在端点附近无界时，该端点称为瑕点。$a$ 或 $b$ 为瑕点时，第二类反常积分分别定义为

$$
\int_a^bf(x)\,\mathrm dx
=\lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^bf(x)\,\mathrm dx,
\qquad
\int_a^bf(x)\,\mathrm dx
=\lim_{\varepsilon\to0^+}\int_a^{b-\varepsilon}f(x)\,\mathrm dx.
$$

相应极限为有限数时称收敛，否则称发散。若内部点 $c$ 为瑕点，则

$$
\int_a^bf(x)\,\mathrm dx=\int_a^cf(x)\,\mathrm dx+\int_c^bf(x)\,\mathrm dx,
$$

收敛的充要条件是右端两反常积分均收敛。

$$
\int_a^b\frac{\mathrm dx}{(b-x)^p}\text{ 收敛}\iff p<1,\qquad
\int_a^b\frac{\mathrm dx}{(x-a)^p}\text{ 收敛}\iff p<1.
$$

#### §5.3 反常积分敛散性的判别法 \*

设 $f,g$ 连续，且在反常端附近 $0\le f(x)\le g(x)$，比较判别关系为

$$
\int g\text{ 收敛}\Longrightarrow\int f\text{ 收敛},\qquad
\int f\text{ 发散}\Longrightarrow\int g\text{ 发散}.
$$

设 $f\ge0$、$a>0$，$\lim_{x\to+\infty}x^pf(x)=A$，则

| 条件 | $\int_a^{+\infty}f(x)\,\mathrm dx$ |
| --- | --- |
| $0<A<+\infty$ | $p>1$ 时收敛，$p\le1$ 时发散 |
| $A=0,\ p>1$ | 收敛 |
| $A=+\infty,\ p\le1$ | 发散 |

设 $b$ 为瑕点，$f\ge0$，$\lim_{x\to b^-}(b-x)^pf(x)=A$，则

| 条件 | $\int_a^bf(x)\,\mathrm dx$ |
| --- | --- |
| $0<A<+\infty$ | $p<1$ 时收敛，$p\ge1$ 时发散 |
| $A=0,\ p<1$ | 收敛 |
| $A=+\infty,\ p\ge1$ | 发散 |

$\int |f|$ 收敛称为绝对收敛；$\int f$ 收敛而 $\int|f|$ 发散称为条件收敛。

$$
\int|f|\text{ 收敛}\Longrightarrow\int f\text{ 收敛}.
$$

#### §5.4 Γ函数 \*

$$
\Gamma(s)=\int_0^{+\infty}x^{s-1}e^{-x}\,\mathrm dx,\qquad s>0.
$$

$$
\Gamma(s+1)=s\Gamma(s),\qquad
\Gamma(1)=1,\qquad \Gamma(n+1)=n!\quad(n\in\mathbb N^+),\qquad
\Gamma\left(\frac12\right)=\sqrt\pi.
$$

递推关系可将定义域延拓至除 $0,-1,-2,\ldots$ 以外的实数：

$$
\Gamma(s)=\frac{\Gamma(s+k)}{s(s+1)\cdots(s+k-1)},\qquad s+k>0.
$$

其中 $k$ 为正整数。

余元公式为

$$
\Gamma(s)\Gamma(1-s)=\frac\pi{\sin\pi s},\qquad0<s<1.
$$

!!! warning "提示"

    -   **定义域与延拓要区分**：$\Gamma(s)=\int_0^{+\infty}x^{s-1}e^{-x}\,\mathrm dx$ 只在 $s>0$ 时收敛；递推公式可把 $\Gamma$ 延拓到 $s\ne0,-1,-2,\ldots$，但不能再把延拓值当作该积分值。

        ??? example "Γ函数的定义域"
            <!-- 待补充 -->

    -   **阶乘的指标不要错位**：$\Gamma(n+1)=n!$，因此 $\Gamma(n)=(n-1)!$；$\Gamma(1)=1$、$\Gamma(2)=1$。

        ??? example "Γ函数与阶乘"
            <!-- 待补充 -->

    -   **特殊值要记准**：$\Gamma\left(\dfrac12\right)=\sqrt\pi$，不是 $\dfrac\pi2$；余元公式 $\Gamma(s)\Gamma(1-s)=\dfrac\pi{\sin\pi s}$ 只在 $0<s<1$ 时直接使用。

        ??? example "Γ函数的特殊值"
            <!-- 待补充 -->

    -   **负整数处是极点**：递推延拓的分母 $s(s+1)\cdots(s+k-1)$ 在 $s=0,-1,\ldots$ 处为零，因此 $\Gamma$ 在这些点无定义，不能约分后强行取值。

        ??? example "Γ函数的极点"
            <!-- 待补充 -->

### §6 定积分的近似计算 \*

#### §6.1 矩形法

设 $x_i=a+ih$，$h=(b-a)/n$，$y_i=f(x_i)$。左、右矩形公式为

$$
\int_a^bf(x)\,\mathrm dx\approx h\sum_{i=0}^{n-1}y_i,
\qquad
\int_a^bf(x)\,\mathrm dx\approx h\sum_{i=1}^ny_i.
$$

#### §6.2 梯形法

$$
\int_a^bf(x)\,\mathrm dx
\approx h\left(\frac{y_0+y_n}{2}+\sum_{i=1}^{n-1}y_i\right).
$$

#### §6.3 抛物线法

$n$ 为偶数时，抛物线公式（辛普森公式）为

$$
\int_a^bf(x)\,\mathrm dx\approx\frac h3
\left[y_0+y_n+4\sum_{j=1}^{n/2}y_{2j-1}+2\sum_{j=1}^{n/2-1}y_{2j}\right].
$$

!!! warning "提示"

    -   **$n$ 必须为偶数**：辛普森公式要求把 $[a,b]$ 等分为偶数份，否则无法按"三点一组"配对；使用前先检查 $n$ 的奇偶性。

        ??? example "抛物线法的等分要求"
            <!-- 待补充 -->

    -   **系数 $4,2$ 交替且端点系数为 $1$**：$\dfrac h3\left[y_0+y_n+4\sum y_{\text{奇}}+2\sum y_{\text{偶}}\right]$，奇数下标乘 $4$、偶数下标（除端点）乘 $2$，整体乘 $\dfrac h3$。

        ??? example "辛普森公式的系数"
            <!-- 待补充 -->

    -   **代数精度为 $3$ 不等于精确**：抛物线法对次数不超过 $3$ 的多项式精确成立，但对一般函数仍是近似；误差与四阶导数有关，$n$ 越大通常越精确。

        ??? example "抛物线法的精度"
            <!-- 待补充 -->

    -   **步长与节点要对应**：$h=\dfrac{b-a}{n}$、$x_i=a+ih$，$y_i=f(x_i)$；$n$ 变化后要重新计算全部节点，不能沿用旧步长。

        ??? example "节点与步长"
            <!-- 待补充 -->

## 第六章 常微分方程

### §1 基本概念

含有未知函数的导数或微分的方程称为微分方程；未知函数为一元函数时称为常微分方程。其一般形式为

$$
F(x,y,y',\ldots,y^{(n)})=0.
$$

方程中出现的最高阶导数的阶数称为方程的阶。代入方程后使其成为恒等式的函数称为方程的解；含有与阶数相同个数的独立任意常数的解称为通解，形式为

$$
y=y(x,C_1,\ldots,C_n).
$$

将通解中的任意常数确定后所得的解称为特解。初值条件规定同一点的函数值及所需导数值，一阶、二阶方程分别为

$$
y(x_0)=y_0;\qquad y(x_0)=y_0,\quad y'(x_0)=y'_0.
$$

!!! warning "提示"

    -   **阶数与次数不同**：方程的阶是最高阶导数的阶数，不是某个导数项的幂次；通解中独立任意常数的个数应等于阶数。

        ??? example "微分方程的阶"
            <!-- 待补充 -->

    -   **通解未必包含全部解**：通解只包含含任意常数的那一族解，可能存在不能由通解取值的奇解；解题时要检查是否漏掉奇解或特解。

        ??? example "通解与奇解"
            <!-- 待补充 -->

    -   **初值条件的个数要匹配阶数**：$n$ 阶方程需要 $n$ 个初值条件，且初值点必须在解的定义区间内；条件不足时无法确定唯一特解。

        ??? example "初值条件"
            <!-- 待补充 -->

    -   **"齐次"在不同语境下含义不同**：一阶线性齐次方程指 $q(x)\equiv0$，而齐次微分方程指可写成 $g(y/x)$ 的方程，两者不是同一概念。

        ??? example "两类“齐次”"
            <!-- 待补充 -->

### §2 可分离变量方程

#### §2.1 可分离变量方程

可分离变量方程的形式为

$$
\frac{\mathrm dy}{\mathrm dx}=f(x)g(y),
$$

其中 $f,g$ 连续。$g(y)\ne0$ 时，其积分关系为

$$
\frac{\mathrm dy}{g(y)}=f(x)\,\mathrm dx,\qquad
\int\frac{\mathrm dy}{g(y)}=\int f(x)\,\mathrm dx+C.
$$

#### §2.2 齐次微分方程

形如

$$
\frac{\mathrm dy}{\mathrm dx}=g\left(\frac yx\right)
$$

的一阶方程称为齐次微分方程。$x\ne0$ 时，变量关系

$$
u=\frac yx,\qquad y=xu,\qquad y'=u+xu'
$$

给出

$$
x\frac{\mathrm du}{\mathrm dx}=g(u)-u.
$$

!!! warning "提示"

    -   **"齐次"指可化为 $g(y/x)$**：它与线性方程中的"齐次"（自由项为零）含义不同，判断时看是否能写成 $\dfrac{\mathrm dy}{\mathrm dx}=g\left(\dfrac yx\right)$。

        ??? example "齐次方程的判定"
            <!-- 待补充 -->

    -   **代换要求 $x\ne0$**：令 $u=y/x$ 时默认 $x\ne0$；$x=0$ 附近的解要单独讨论，不能直接把 $y=xu$ 代入整个定义域。

        ??? example "代换的定义域"
            <!-- 待补充 -->

    -   **求导不要漏项**：$y=xu$ 给出 $y'=u+xu'$，代回后得到 $x\dfrac{\mathrm du}{\mathrm dx}=g(u)-u$；漏掉 $xu'$ 或把 $x$ 丢掉都会导致方程错误。

        ??? example "齐次方程代换"
            <!-- 待补充 -->

    -   **可能漏掉常数解**：分离变量时若除以 $g(u)-u$，要单独检查 $g(u)-u=0$ 对应的解；回代 $u=y/x$ 后还要说明定义区间。

        ??? example "齐次方程的漏解"
            <!-- 待补充 -->

### §3 一阶线性微分方程

#### §3.1 一阶线性微分方程

一阶线性微分方程的形式为

$$
y'+p(x)y=q(x),
$$

其中 $p,q$ 在所讨论区间连续，$q$ 称为自由项。$q\equiv0$ 时称为线性齐次方程，其通解为

$$
y=Ce^{-\int p(x)\,\mathrm dx}.
$$

非齐次方程的通解为

$$
y=e^{-\int p(x)\,\mathrm dx}
\left[\int q(x)e^{\int p(x)\,\mathrm dx}\,\mathrm dx+C\right].
$$

??? info "一阶线性非齐次方程通解公式的推导"

    先求对应齐次方程 $\dfrac{\mathrm dy}{\mathrm dx}+p(x)y=0$ 的通解

    $$
    y=Ce^{-\int p(x)\,\mathrm dx},
    $$

    再将上式中的任意常数 $C$ 换为待定函数 $u(x)$，即

    $$
    y=u(x)e^{-\int p(x)\,\mathrm dx},
    $$

    并对其关于 $x$ 求导数

    $$
    \frac{\mathrm dy}{\mathrm dx}
    =u'(x)e^{-\int p(x)\,\mathrm dx}
    +u(x)e^{-\int p(x)\,\mathrm dx}(-p(x)),
    $$

    将 $\dfrac{\mathrm dy}{\mathrm dx}$，$y$ 代入非齐次方程，得

    $$
    u'(x)e^{-\int p(x)\,\mathrm dx}
    -p(x)u(x)e^{-\int p(x)\,\mathrm dx}
    +p(x)u(x)e^{-\int p(x)\,\mathrm dx}=q(x),
    $$

    化简后为 $u'(x)e^{-\int p(x)\,\mathrm dx}=q(x)$，即

    $$
    u'(x)=q(x)e^{\int p(x)\,\mathrm dx}.
    $$

    积分得 $u(x)=\int q(x)e^{\int p(x)\,\mathrm dx}\,\mathrm dx+C$，其中 $C$ 为任意常数。于是得到一阶线性非齐次方程的通解为

    $$
    y=e^{-\int p(x)\,\mathrm dx}
    \left[\int q(x)e^{\int p(x)\,\mathrm dx}\,\mathrm dx+C\right].
    $$

???+ example "例2：解法二"

    求方程 $\displaystyle\frac{\mathrm dy}{\mathrm dx}-\frac1x y=2x^2$ 的通解。

    ??? success "解析"

        先求对应的齐次方程 $\dfrac{\mathrm dy}{\mathrm dx}-\dfrac1x y=0$ 的通解，得 $y=Cx$。用常数变易法，设 $y=u(x)x$，则

        $$
        \frac{\mathrm dy}{\mathrm dx}=u(x)+xu'(x),
        $$

        代入原方程，得

        $$
        u(x)+xu'(x)-\frac1xu(x)x=2x^2,
        $$

        即 $u'(x)=2x$，得 $u(x)=x^2+C$，从而原非齐次方程的通解

        $$
        y=x^3+Cx.
        $$

#### §3.2 伯努利方程

伯努利方程的形式为

$$
y'+p(x)y=q(x)y^\alpha,\qquad \alpha\ne0,1.
$$

在 $y\ne0$ 且幂函数有意义的区间，$z=y^{1-\alpha}$ 满足

$$
z'+(1-\alpha)p(x)z=(1-\alpha)q(x).
$$

!!! warning "提示"

    -   **参数范围 $\alpha\ne0,1$**：$\alpha=0$ 时方程退化为线性方程，$\alpha=1$ 时可分离变量；套用伯努利代换前先检查 $\alpha$ 的取值。

        ??? example "伯努利方程的参数"
            <!-- 待补充 -->

    -   **代换要求 $y\ne0$**：令 $z=y^{1-\alpha}$ 时需要 $y\ne0$ 且幂函数有意义；$y=0$ 可能是原方程的解，必须单独验证。

        ??? example "伯努利代换与 $y=0$"
            <!-- 待补充 -->

    -   **线性化后的系数不要漏**：代换后得到 $z'+(1-\alpha)p(x)z=(1-\alpha)q(x)$，右端和 $p(x)$ 项都要乘 $1-\alpha$。

        ??? example "伯努利方程线性化"
            <!-- 待补充 -->

    -   **回代时注意正负分支**：由 $z=y^{1-\alpha}$ 解出 $y=z^{1/(1-\alpha)}$，当 $1-\alpha$ 为偶数分母时要根据 $y$ 的符号取舍，不能只取正支。

        ??? example "伯努利方程的回代"
            <!-- 待补充 -->

### §4 全微分方程 \*

若方程

$$
M(x,y)\,\mathrm dx+N(x,y)\,\mathrm dy=0
$$

的左端是某个函数 $u(x,y)$ 的全微分，即

$$
\mathrm du=M\,\mathrm dx+N\,\mathrm dy,
$$

则称为全微分方程，其通解为 $u(x,y)=C$。

设 $M,N$ 在平面单连通区域 $G$ 上具有连续的一阶偏导数，则

$$
M\,\mathrm dx+N\,\mathrm dy=0\text{ 为全微分方程}
\iff \frac{\partial M}{\partial y}=\frac{\partial N}{\partial x}.
$$

此时，取固定点 $(x_0,y_0)\in G$，有

$$
u(x,y)=\int_{(x_0,y_0)}^{(x,y)}M\,\mathrm dx+N\,\mathrm dy.
$$

!!! warning "提示"

    -   **判定条件的适用范围**：$\dfrac{\partial M}{\partial y}=\dfrac{\partial N}{\partial x}$ 在单连通区域且 $M,N$ 有连续一阶偏导时才是全微分方程的充要条件；区域不单连通时只能保证局部成立。

        ??? example "全微分方程的判定"
            <!-- 待补充 -->

    -   **原函数的路径要与区域匹配**：$u(x,y)=\displaystyle\int_{(x_0,y_0)}^{(x,y)}M\,\mathrm dx+N\,\mathrm dy$ 的积分路径必须完全位于区域内，通常取折线路径计算。

        ??? example "求原函数"
            <!-- 待补充 -->

    -   **通解写成 $u(x,y)=C$**：全微分方程的通解是 $u(x,y)=C$，不是 $u(x,y)=0$；$C$ 由初值条件确定。

        ??? example "全微分方程的通解"
            <!-- 待补充 -->

    -   **非全微分方程可尝试积分因子**：若判定条件不成立，可寻找积分因子 $\mu(x,y)$ 使 $\mu M\,\mathrm dx+\mu N\,\mathrm dy$ 成为全微分；积分因子不唯一，且可能只在局部存在。

        ??? example "积分因子"
            <!-- 待补充 -->

### §5 可降阶的二阶微分方程

#### §5.1 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=f(x)$ 型微分方程

$$
y'=\int f(x)\,\mathrm dx+C_1,\qquad
y=\int\left[\int f(x)\,\mathrm dx+C_1\right]\mathrm dx+C_2.
$$

#### §5.2 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=f\left(x,\dfrac{\mathrm dy}{\mathrm dx}\right)$ 型微分方程

该方程不显含 $y$。$p(x)=y'$ 满足

$$
p'=f(x,p).
$$

若 $p=\varphi(x,C_1)$，则

$$
y=\int\varphi(x,C_1)\,\mathrm dx+C_2.
$$

#### §5.3 $\dfrac{\mathrm d^2y}{\mathrm dx^2}=f\left(y,\dfrac{\mathrm dy}{\mathrm dx}\right)$ 型微分方程

该方程不显含 $x$。以 $y$ 为局部自变量，$p(y)=y'$ 满足

$$
y''=\frac{\mathrm dp}{\mathrm dy}\frac{\mathrm dy}{\mathrm dx}
=p\frac{\mathrm dp}{\mathrm dy},\qquad
p\frac{\mathrm dp}{\mathrm dy}=f(y,p).
$$

!!! warning "提示"

    -   **$p$ 是 $y$ 的函数**：方程不显含 $x$，令 $p=y'$ 后要把 $p$ 看作 $y$ 的函数，$y''=p\dfrac{\mathrm dp}{\mathrm dy}$，不能写成 $\dfrac{\mathrm dp}{\mathrm dx}$。

        ??? example "不显含 $x$ 的降阶"
            <!-- 待补充 -->

    -   **先解 $p$ 再积分**：得到 $p\dfrac{\mathrm dp}{\mathrm dy}=f(y,p)$ 后，先求出 $p=\varphi(y,C_1)$，再由 $\dfrac{\mathrm dy}{\mathrm dx}=p$ 积分得到 $y$，两个常数都不能漏。

        ??? example "两次积分"
            <!-- 待补充 -->

    -   **除以 $p$ 可能漏解**：分离变量时若除以 $p$，要单独检查 $p=0$（即 $y=C$）是否满足原方程；这类常数解常被遗漏。

        ??? example "降阶中的漏解"
            <!-- 待补充 -->

    -   **注意 $y$ 作为自变量的局部性**：把 $y$ 当作自变量要求所讨论区间内 $y'=p\ne0$；在 $p=0$ 的点附近需另行讨论。

        ??? example "局部自变量"
            <!-- 待补充 -->

### §6 二阶线性微分方程解的结构

设 $p,q,f$ 在所讨论区间连续。二阶线性方程及其对应齐次方程为

$$
L[y]=y''+p(x)y'+q(x)y=f(x),\qquad L[y]=0.
$$

$L$ 是线性微分算子：

$$
L[C_1y_1+C_2y_2]=C_1L[y_1]+C_2L[y_2].
$$

若恒等式 $k_1y_1+k_2y_2\equiv0$ 仅在 $k_1=k_2=0$ 时成立，则称 $y_1,y_2$ 线性无关；否则称线性相关。

若 $y_1,y_2$ 是齐次方程的两个线性无关解，$\widetilde y$ 是非齐次方程的一个特解，则

$$
Y=C_1y_1+C_2y_2,\qquad y=Y+\widetilde y
$$

分别为齐次、非齐次方程的通解。若 $L[y_1]=f_1$、$L[y_2]=f_2$，则

$$
L[y_1+y_2]=f_1+f_2.
$$

若系数为实值函数，$L[y_1+iy_2]=f_1+if_2$，则

$$
L[y_1]=f_1,\qquad L[y_2]=f_2.
$$

!!! warning "提示"

    -   **线性无关不能只看形式**：$y_1,y_2$ 线性无关是指 $k_1y_1+k_2y_2\equiv0$ 只能推出 $k_1=k_2=0$；两个函数成比例即线性相关。

        ??? example "线性无关的判定"
            <!-- 待补充 -->

    -   **非齐次通解的结构**：$y=C_1y_1+C_2y_2+\widetilde y$，其中 $\widetilde y$ 是**一个**特解，不能再乘任意常数；齐次部分才含 $C_1,C_2$。

        ??? example "非齐次方程的通解"
            <!-- 待补充 -->

    -   **叠加原理只对线性方程成立**：若 $L[y_1]=f_1$、$L[y_2]=f_2$，则 $L[y_1+y_2]=f_1+f_2$；自由项相加时，特解可以相加，但齐次解不能重复计算。

        ??? example "叠加原理"
            <!-- 待补充 -->

    -   **复值解的实部与虚部**：实系数方程若 $L[y_1+iy_2]=f_1+if_2$，则 $L[y_1]=f_1$、$L[y_2]=f_2$；但复系数方程不能直接这样拆。

        ??? example "复值解"
            <!-- 待补充 -->

??? info "非齐次方程通解结构的证明"

    因为 $\widetilde y$ 是方程 $y''+p(x)y'+q(x)y=f(x)$ 的一个特解，所以有 $L[\widetilde y]=f(x)$。又因为 $Y=C_1y_1+C_2y_2$ 是对应齐次方程的通解，所以有 $L[C_1y_1+C_2y_2]=0$，于是

    $$
    L[C_1y_1+C_2y_2+\widetilde y]=0+f(x)=f(x),
    $$

    从而 $C_1y_1+C_2y_2+\widetilde y$ 是非齐次方程的解。

    又由于其含有两个相互独立的任意常数 $C_1,C_2$，所以

    $$
    y=C_1y_1+C_2y_2+\widetilde y
    $$

    是非齐次方程的通解。

### §7 二阶常系数线性微分方程的解法

#### §7.1 二阶常系数线性齐次方程及其解法

方程

$$
y''+py'+qy=0\qquad(p,q\text{ 为常数})
$$

的特征方程为 $r^2+pr+q=0$，其根称为特征根。

| 特征根 | 通解 |
| --- | --- |
| 两个不同实根 $r_1,r_2$ | $y=C_1e^{r_1x}+C_2e^{r_2x}$ |
| 二重实根 $r$ | $y=(C_1+C_2x)e^{rx}$ |
| 共轭复根 $\alpha\pm i\beta$ | $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ |

#### §7.2 二阶常系数线性非齐次方程的解法

对 $y''+py'+qy=f(x)$，特解形式为

| 自由项 $f(x)$ | 特解形式 |
| --- | --- |
| $P_n(x)e^{\alpha x}$ | $\widetilde y=x^kQ_n(x)e^{\alpha x}$ |
| $[P_n(x)\cos\beta x+P_l(x)\sin\beta x]e^{\alpha x}$ | $\widetilde y=x^k[R_m(x)\cos\beta x+S_m(x)\sin\beta x]e^{\alpha x}$ |

$P_n,P_l$ 分别是 $n,l$ 次多项式，$m=\max(n,l)$；$Q_n,R_m,S_m$ 为相应次数的待定系数多项式。第一行的 $k$ 为 $\alpha$ 作为特征根的重数，非根时取 $0$；第二行 $\beta\ne0$，$k=0$ 或 $1$，分别对应 $\alpha+i\beta$ 不是特征根或是单根。

???+ example "例3"

    求 $\displaystyle\frac{\mathrm d^2y}{\mathrm dx^2}+\frac{\mathrm dy}{\mathrm dx}+2y=x^2-3$ 的一个特解。

    ??? success "解析"

        自由项 $f(x)=x^2-3$，$P_n(x)$ 是一个二次多项式，$\alpha=0$，又

        $$
        \alpha^2+p\alpha+q=2\ne0,
        $$

        则可设方程的特解为

        $$
        \widetilde y=a_0x^2+a_1x+a_2,
        $$

        求导数 $\widetilde y'=2a_0x+a_1$，$\widetilde y''=2a_0$，代入方程有

        $$
        2a_0x^2+(2a_0+2a_1)x+(2a_0+a_1+2a_2)=x^2-3,
        $$

        比较同次幂项系数，得

        $$
        \begin{cases}2a_0=1,\\2a_0+2a_1=0,\\2a_0+a_1+2a_2=-3,\end{cases}
        \qquad
        \begin{cases}a_0=\dfrac12,\\a_1=-\dfrac12,\\a_2=-\dfrac74.\end{cases}
        $$

        所以特解 $\widetilde y=\dfrac12x^2-\dfrac12x-\dfrac74$。

#### §7.3 欧拉方程

欧拉方程的一般形式为

$$
a_0x^ny^{(n)}+a_1x^{n-1}y^{(n-1)}+\cdots+a_{n-1}xy'+a_ny=f(x),
$$

其中 $a_0,\ldots,a_n$ 为常数，$a_0\ne0$。对二阶方程

$$
a_0x^2y''+a_1xy'+a_2y=f(x),
$$

$x>0$ 时，记 $t=\ln x$、$Y(t)=y(e^t)$，则

$$
xy'=Y',\qquad x^2y''=Y''-Y',
$$

$$
a_0Y''+(a_1-a_0)Y'+a_2Y=f(e^t).
$$

!!! warning "提示"

    -   **$x>0$ 与 $x<0$ 要分开**：$t=\ln x$ 只适用于 $x>0$；$x<0$ 时应取 $t=\ln|x|$ 并注意符号，解的定义区间通常不跨过 $0$。

        ??? example "欧拉方程的定义域"
            <!-- 待补充 -->

    -   **变换公式不要漏 $-Y'$**：$xy'=Y'$，$x^2y''=Y''-Y'$；代回后常系数方程中 $Y'$ 的系数是 $a_1-a_0$。

        ??? example "欧拉方程化为常系数方程"
            <!-- 待补充 -->

    -   **自由项也要换元**：$f(x)$ 要写成 $f(e^t)$（或 $f(\pm e^t)$），不能保留原来的 $x$。

        ??? example "自由项的换元"
            <!-- 待补充 -->

    -   **回代后注明区间**：解出 $Y(t)$ 后用 $t=\ln x$ 回代，得到 $y(x)$；由于 $x=0$ 是奇点，通解只在 $x>0$ 或 $x<0$ 的区间上成立。

        ??? example "欧拉方程的回代"
            <!-- 待补充 -->

### §8 常系数线性微分方程组

含同一自变量的两个或多个未知函数及其导数的方程组称为常微分方程组；各未知函数及其导数以线性形式出现且系数为常数时，称为常系数线性微分方程组。

!!! warning "提示"

    -   **消元会提高阶数**：从一个方程解出某个未知函数再代入另一个方程，可能得到更高阶的方程，必须补足相应个数的初始条件。

        ??? example "方程组的消元"
            <!-- 待补充 -->

    -   **解完一个未知函数要回代**：求出 $x(t)$ 后还要代回原方程组求 $y(t)$，只给出一个未知函数不算完成求解。

        ??? example "回代求另一个未知函数"
            <!-- 待补充 -->

    -   **特征值重数与特征向量数可能不匹配**：用矩阵方法求解时，若特征值重数大于线性无关特征向量的个数，需要引入广义特征向量，不能只写 $e^{\lambda t}v$。

        ??? example "重特征值与广义特征向量"
            <!-- 待补充 -->

    -   **非齐次方程组的特解要整体代入**：特解形式与单个方程类似，但矩阵乘法不可交换，待定向量要代入原方程组验证，不能逐分量独立处理。

        ??? example "非齐次微分方程组"
            <!-- 待补充 -->

### §9 二阶变系数线性微分方程的一般解法

#### §9.1 降阶法

若 $y_1$ 是齐次方程 $y''+p(x)y'+q(x)y=0$ 的非零解，$y=y_1u$ 满足

$$
y_1u''+(2y'_1+py_1)u'=0.
$$

$y_1\ne0$ 的区间上，刘维尔公式为

$$
y=y_1\left(C_1+C_2\int\frac{e^{-\int p(x)\,\mathrm dx}}{y_1^2}\,\mathrm dx\right).
$$

对非齐次方程 $y''+py'+qy=f$，相同代换给出

$$
y_1u''+(2y'_1+py_1)u'=f.
$$

#### §9.2 常数变易法

设 $p,q,f$ 连续，$y_1,y_2$ 是对应齐次方程的两个线性无关解，记

$$
w(x)=y_1y'_2-y_2y'_1\ne0.
$$

特解 $\widetilde y=u_1y_1+u_2y_2$ 中的函数满足

$$
\begin{cases}
y_1u'_1+y_2u'_2=0,\\
y'_1u'_1+y'_2u'_2=f,
\end{cases}
\qquad
u'_1=-\frac{y_2f}{w},\quad u'_2=\frac{y_1f}{w}.
$$

非齐次方程的通解为

$$
y=C_1y_1+C_2y_2-y_1\int\frac{y_2f}{w}\,\mathrm dx+y_2\int\frac{y_1f}{w}\,\mathrm dx.
$$

!!! warning "提示"

    -   **前提是 $y_1,y_2$ 线性无关**：$w=y_1y_2'-y_2y_1'\ne0$ 才能作分母；$w=0$ 时 $y_1,y_2$ 线性相关，不能使用该公式。

        ??? example "常数变易法的前提"
            <!-- 待补充 -->

    -   **$u_1',u_2'$ 的符号不要写反**：$u_1'=-\dfrac{y_2f}{w}$、$u_2'=\dfrac{y_1f}{w}$，其中 $w=y_1y_2'-y_2y_1'$；符号写反会得到错误特解。

        ??? example "常数变易公式"
            <!-- 待补充 -->

    -   **附加条件不能忘**：设 $\widetilde y=u_1y_1+u_2y_2$ 时，需附加 $y_1u_1'+y_2u_2'=0$，否则两个未知函数无法唯一确定。

        ??? example "附加条件的来源"
            <!-- 待补充 -->

    -   **积分后要加常数并保留齐次部分**：$u_1,u_2$ 积分后各含一个常数，最终通解应写成齐次通解加特解的形式。

        ??? example "常数变易法的通解"
            <!-- 待补充 -->

### §10 数学建模（二）——微分方程在几何、物理中的应用举例

放射性物质的衰变速度与现存质量成正比。若 $x(t_0)=x_0$，则

$$
\frac{\mathrm dx}{\mathrm dt}=-kx,\qquad
x(t)=x_0e^{-k(t-t_0)},\qquad k>0.
$$

单参数曲线族 $F(x,y,C)=0$ 中，$C$ 为参数。若另一曲线族中的曲线与原曲线族中的曲线在交点处切线垂直，则称为正交轨线。原曲线族满足 $f(x,y,y')=0$ 时，在切线斜率有限且非零处，其正交轨线满足

$$
f\left(x,y,-\frac1{y'}\right)=0.
$$

弹簧振动方程为

$$
m x''+\lambda x'+kx=F(t),
$$

其中 $m>0$ 为物体质量，$\lambda$ 为阻尼系数，$k>0$ 为弹簧劲度系数，$x$ 为相对平衡位置的位移，$F$ 为外力。记 $2\beta=\lambda/m$、$\omega^2=k/m$、$f=F/m$，则

$$
x''+2\beta x'+\omega^2x=f(t).
$$

$f\equiv0$ 时称为自由振动；$f\not\equiv0$ 时称为强迫振动。无阻尼自由振动满足

$$
x''+\omega^2x=0,\qquad x=A\sin(\omega t+\varphi),
$$

其中 $A$ 为振幅，$\varphi$ 为初相角。无阻尼强迫振动 $x''+\omega^2x=a\sin\omega_0t$（$\omega>0,\ \omega_0>0$）的通解为

$$
x=
\begin{cases}
A\sin(\omega t+\varphi)+\dfrac{a}{\omega^2-\omega_0^2}\sin\omega_0t,&\omega\ne\omega_0,\\[5pt]
A\sin(\omega t+\varphi)-\dfrac{at}{2\omega}\cos\omega t,&\omega=\omega_0.
\end{cases}
$$

$\omega=\omega_0$ 时，强迫振动的振幅随时间增大，称为共振。

串联 $RLC$ 电路中，电流 $I$ 满足

$$
L I''+R I'+\frac1CI=E'(t),
$$

其中 $R,L,C$ 分别为电阻、电感、电容，$E(t)$ 为电动势。

!!! warning "提示"

    -   **衰变方程的负号与半衰期**：$\dfrac{\mathrm dx}{\mathrm dt}=-kx$（$k>0$）的解为 $x=x_0e^{-k(t-t_0)}$；半衰期 $T=\dfrac{\ln2}{k}$，不要漏负号或把 $k$ 与 $T$ 混用。

        ??? example "放射性衰变"
            <!-- 待补充 -->

    -   **正交轨线的斜率条件**：正交轨线满足 $f\left(x,y,-\dfrac1{y'}\right)=0$，但只在 $y'\ne0$ 且有限时成立；水平切线与垂直切线要单独讨论。

        ??? example "正交轨线"
            <!-- 待补充 -->

    -   **共振条件与振幅**：无阻尼强迫振动在 $\omega=\omega_0$ 时发生共振，特解含 $t\cos\omega t$，振幅随时间增大；$\omega\ne\omega_0$ 时不会出现这种增长。

        ??? example "共振"
            <!-- 待补充 -->

    -   **RLC 电路方程不要漏 $E'$**：$LI''+RI'+\dfrac1CI=E'(t)$ 是对电动势求导后的方程；若题目给的是 $E(t)$，要先求导再代入。

        ??? example "RLC 电路"
            <!-- 待补充 -->

### §11 差分方程 \*

#### §11.1 差分方程的基本概念

定义在非负整数集上的函数 $y_t$ 的差分为

$$
\Delta y_t=y_{t+1}-y_t,\qquad
\Delta^2y_t=y_{t+2}-2y_{t+1}+y_t,\qquad
\Delta^ny_t=\Delta(\Delta^{n-1}y_t).
$$

$$
\begin{aligned}
\Delta(Cy_t)&=C\Delta y_t,\\
\Delta(y_t+z_t)&=\Delta y_t+\Delta z_t,\\
\Delta(y_tz_t)&=y_{t+1}\Delta z_t+z_t\Delta y_t,\\
\Delta\left(\frac{y_t}{z_t}\right)
&=\frac{z_t\Delta y_t-y_t\Delta z_t}{z_{t+1}z_t}\qquad(z_{t+1}z_t\ne0).
\end{aligned}
$$

含未知函数差分的方程称为差分方程；最高差分的阶数，或未知函数附标最大值与最小值之差，称为方程的阶。线性差分方程的形式为

$$
a_0(t)y_{t+n}+a_1(t)y_{t+n-1}+\cdots+a_n(t)y_t=f(t).
$$

$f\equiv0$ 时为齐次方程；各系数为常数时为常系数线性差分方程。使方程成为恒等式的函数称为解；含有与阶数相同个数的独立任意常数的解称为通解；满足给定初值条件的解称为特解。

#### §11.2 一阶线性差分方程

对 $y_{t+1}=a_ty_t+f(t)$，给定 $y_0$ 后，

$$
y_t=y_0\prod_{i=0}^{t-1}a_i
+\sum_{j=0}^{t-1}\left[f(j)\prod_{i=j+1}^{t-1}a_i\right],
$$

其中空乘积为 $1$。$a_t=a$ 为常数时，

$$
y_t=a^ty_0+\sum_{i=1}^ta^{i-1}f(t-i).
$$

齐次方程 $y_{t+1}-ay_t=0$，$a\ne0$，的通解为 $y_t=Ca^t$。

#### §11.3 二阶常系数线性差分方程

$$
y_{t+2}+ay_{t+1}+by_t=f(t),\qquad b\ne0,
$$

对应齐次方程的特征方程为 $r^2+ar+b=0$。

| 特征根 | 齐次通解 $Y_t$ |
| --- | --- |
| 两个不同实根 $r_1,r_2$ | $C_1r_1^t+C_2r_2^t$ |
| 二重实根 $r$ | $(C_1+C_2t)r^t$ |
| 共轭复根 $\rho(\cos\theta\pm i\sin\theta)$ | $\rho^t(C_1\cos\theta t+C_2\sin\theta t)$ |

若 $\widetilde y_t$ 是非齐次方程的一个特解，则通解为

$$
y_t=Y_t+\widetilde y_t.
$$

当 $f(t)=P_m(t)A^t$，$P_m$ 为 $m$ 次多项式时，特解形式为

$$
\widetilde y_t=t^kR_m(t)A^t,
$$

其中 $R_m$ 为待定系数多项式，$k$ 为 $A$ 作为特征根的重数，非根时取 $0$。

!!! warning "提示"

    -   **通解是指数形式 $r^t$**：差分方程的特征方程为 $r^2+ar+b=0$，齐次通解由 $r_1^t,r_2^t$ 组成；不要与微分方程的 $e^{rx}$ 混淆。

        ??? example "差分方程的特征根"
            <!-- 待补充 -->

    -   **重根要乘 $t$**：二重实根 $r$ 对应 $(C_1+C_2t)r^t$；共轭复根 $\rho(\cos\theta\pm i\sin\theta)$ 对应 $\rho^t(C_1\cos\theta t+C_2\sin\theta t)$，角度中的 $t$ 不能漏。

        ??? example "重根与复根"
            <!-- 待补充 -->

    -   **特解中 $k$ 是 $A$ 作为特征根的重数**：对 $f(t)=P_m(t)A^t$，设 $\widetilde y_t=t^kR_m(t)A^t$，$k=0,1,2$ 分别对应 $A$ 不是特征根、是单根、是重根。

        ??? example "差分方程的特解"
            <!-- 待补充 -->

    -   **初始条件与整数变量**：二阶差分方程需要 $y_0,y_1$ 两个初值；$t$ 只在非负整数上取值，通解不能随意延拓到非整数。

        ??? example "差分方程的初值"
            <!-- 待补充 -->

## 第七章 矢量代数与空间解析几何

### §1 二阶、三阶行列式及线性方程组

#### §1.1 二阶行列式和二元线性方程组

二阶行列式定义为

$$
\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix}
=a_1b_2-a_2b_1.
$$

对于二元线性方程组

$$
\begin{cases}
a_1x+b_1y=c_1,\\
a_2x+b_2y=c_2,
\end{cases}
$$

记系数行列式与常数列替换所得的行列式为

$$
D=\begin{vmatrix}a_1&b_1\\a_2&b_2\end{vmatrix},\qquad
D_x=\begin{vmatrix}c_1&b_1\\c_2&b_2\end{vmatrix},\qquad
D_y=\begin{vmatrix}a_1&c_1\\a_2&c_2\end{vmatrix}.
$$

当 $D\ne0$ 时，克拉默法则给出唯一解

$$
x=\frac{D_x}{D},\qquad y=\frac{D_y}{D}.
$$

#### §1.2 三阶行列式和三元线性方程组

三阶行列式定义为

$$
\begin{vmatrix}
a_1&b_1&c_1\\
a_2&b_2&c_2\\
a_3&b_3&c_3
\end{vmatrix}
=a_1b_2c_3+b_1c_2a_3+c_1a_2b_3
-c_1b_2a_3-b_1a_2c_3-a_1c_2b_3.
$$

记 $a_{ij}$ 为第 $i$ 行、第 $j$ 列的元素。去掉该元素所在的行与列，剩下的行列式称为其余子式，记为 $M_{ij}$；代数余子式为

$$
A_{ij}=(-1)^{i+j}M_{ij}.
$$

三阶行列式可按任一行或列展开：

$$
D=\sum_{j=1}^3a_{ij}A_{ij}\quad\text{（固定第 $i$ 行）},
\qquad
D=\sum_{i=1}^3a_{ij}A_{ij}\quad\text{（固定第 $j$ 列）}.
$$

对于三元线性方程组

$$
\begin{cases}
a_1x+b_1y+c_1z=d_1,\\
a_2x+b_2y+c_2z=d_2,\\
a_3x+b_3y+c_3z=d_3,
\end{cases}
$$

令 $D$ 为系数行列式，$D_x,D_y,D_z$ 分别为将 $D$ 中 $x,y,z$ 的系数列换成常数列 $(d_1,d_2,d_3)^{\mathsf T}$ 所得的行列式。当 $D\ne0$ 时，唯一解为

$$
x=\frac{D_x}{D},\qquad y=\frac{D_y}{D},\qquad z=\frac{D_z}{D}.
$$

!!! warning "提示"

    -   **余子式与代数余子式不同**：$A_{ij}=(-1)^{i+j}M_{ij}$，符号由行标与列标之和决定；按行（列）展开时乘的是代数余子式，不是余子式。

        ??? example "代数余子式的符号"
            <!-- 待补充 -->

    -   **克拉默法则的前提是 $D\ne0$**：只有系数行列式非零时才有唯一解 $x=D_x/D$；$D=0$ 时可能无解或有无穷多解，不能直接相除。

        ??? example "克拉默法则"
            <!-- 待补充 -->

    -   **对角线法则只适用于二、三阶**：四阶及以上行列式不能套用对角线展开，必须用按行（列）展开或行列变换。

        ??? example "行列式的计算"
            <!-- 待补充 -->

    -   **行列式的性质要注意符号**：互换两行（列）行列式变号，某行（列）乘 $k$ 则行列式乘 $k$；这些性质常用于化简，但不要与矩阵变换混淆。

        ??? example "行列式的性质"
            <!-- 待补充 -->

### §2 矢量概念及矢量的线性运算

#### §2.1 矢量概念

只有大小的量称为数量；兼有大小和方向的量称为矢量。矢量可用有向线段 $\overrightarrow{AB}$ 或 $\mathbf a$ 表示，长度称为模，记为 $|\mathbf a|$。

模为零的矢量称为零矢量，记为 $\mathbf0$。大小相等、方向相同的矢量相等；平行移动后得到的矢量与原矢量相等，称为自由矢量。

两非零矢量的夹角记为 $\theta$，$0\le\theta\le\pi$；同向时 $\theta=0$，反向时 $\theta=\pi$。

#### §2.2 矢量的加法

以 $\mathbf a,\mathbf b$ 为邻边构成平行四边形，由共同起点指向对角顶点的矢量称为两矢量的和。等价地，首尾相接的两矢量之和为从第一矢量起点指向第二矢量终点的矢量：

$$
\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}.
$$

$$
\mathbf a+\mathbf b=\mathbf b+\mathbf a,\qquad
(\mathbf a+\mathbf b)+\mathbf c=\mathbf a+(\mathbf b+\mathbf c).
$$

#### §2.3 矢量的减法

若 $\mathbf b+\mathbf c=\mathbf a$，称 $\mathbf c$ 为 $\mathbf a$ 与 $\mathbf b$ 的差：

$$
\mathbf c=\mathbf a-\mathbf b,\qquad
\mathbf a-\mathbf b=\mathbf a+(-\mathbf b).
$$

其中 $-\mathbf b$ 与 $\mathbf b$ 模相等、方向相反。

#### §2.4 数量与矢量的乘法

数量 $m$ 与矢量 $\mathbf a$ 的乘积 $m\mathbf a$ 满足

$$
|m\mathbf a|=|m|\,|\mathbf a|.
$$

$m>0$ 时与 $\mathbf a$ 同向，$m<0$ 时反向，$m=0$ 时为零矢量。数乘运算满足

$$
(m+n)\mathbf a=m\mathbf a+n\mathbf a,\qquad
m(\mathbf a+\mathbf b)=m\mathbf a+m\mathbf b,
$$

$$
m(n\mathbf a)=(mn)\mathbf a.
$$

模为 $1$ 的矢量称为单位矢量。非零矢量 $\mathbf a$ 方向上的单位矢量为

$$
\mathbf e_a=\frac{\mathbf a}{|\mathbf a|},\qquad
\mathbf a=|\mathbf a|\mathbf e_a.
$$

#### §2.5 矢量的线性组合与矢量的分解

表达式

$$
\sum_{i=1}^nm_i\mathbf a_i
$$

称为矢量 $\mathbf a_1,\ldots,\mathbf a_n$ 的线性组合，其中 $m_i$ 为实数。将一个矢量表示为若干矢量的线性组合，称为矢量的分解。

平行的矢量称为共线矢量。若 $\mathbf b\ne\mathbf0$，则

$$
\mathbf a\text{ 与 }\mathbf b\text{ 共线}
\ \Longleftrightarrow\quad
\exists!m\in\mathbb R:\quad\mathbf a=m\mathbf b.
$$

平行于同一平面的矢量称为共面矢量。若 $\mathbf b,\mathbf c$ 不共线，则

$$
\mathbf a\text{ 与 }\mathbf b,\mathbf c\text{ 共面}
\ \Longleftrightarrow\quad
\exists!m_1,m_2\in\mathbb R:\quad\mathbf a=m_1\mathbf b+m_2\mathbf c.
$$

若 $\mathbf e_1,\mathbf e_2,\mathbf e_3$ 不共面，则任一空间矢量均可唯一分解为

$$
\mathbf a=m_1\mathbf e_1+m_2\mathbf e_2+m_3\mathbf e_3.
$$

此时 $\mathbf e_1,\mathbf e_2,\mathbf e_3$ 称为空间的一组基。

!!! warning "提示"

    -   **共线表示要求 $\mathbf b\ne\mathbf0$**：$\mathbf a=m\mathbf b$ 的唯一性依赖 $\mathbf b\ne\mathbf0$；零矢量与任何矢量共线，但表示不唯一（任意 $m$ 均可）。

        ??? example "共线矢量的表示"
            <!-- 待补充 -->

    -   **共面分解要求 $\mathbf b,\mathbf c$ 不共线**：只有 $\mathbf b,\mathbf c$ 不共线时，$\mathbf a=m_1\mathbf b+m_2\mathbf c$ 的系数才唯一；否则不能作为平面的一组基。

        ??? example "共面矢量的分解"
            <!-- 待补充 -->

    -   **空间分解要求三矢量不共面**：$\mathbf e_1,\mathbf e_2,\mathbf e_3$ 不共面时，任一空间矢量才能唯一分解；共面时表示不唯一或不存在。

        ??? example "空间矢量的分解"
            <!-- 待补充 -->

    -   **线性组合的系数是数量**：$m_i\mathbf a_i$ 是数乘，不是矢量积；不要把线性组合与数量积、矢量积混为一谈。

        ??? example "线性组合"
            <!-- 待补充 -->

### §3 空间直角坐标系与矢量的坐标表达式

#### §3.1 空间直角坐标系

空间中三条相互垂直、交于原点 $O$ 的有向数轴构成空间直角坐标系，记为 $Oxyz$。$Ox,Oy,Oz$ 为坐标轴，$Oxy,Oyz,Oxz$ 为坐标平面；三个坐标平面将空间分成八个卦限。

右手坐标系满足：右手四指从 $Ox$ 正向转向 $Oy$ 正向时，拇指指向 $Oz$ 正向。点 $M$ 与有序数组 $(x,y,z)$ 对应，记为 $M(x,y,z)$。

点 $M(x,y,z)$ 关于 $Oxy$ 平面、$Ox$ 轴和原点的对称点分别为

$$
(x,y,-z),\qquad(x,-y,-z),\qquad(-x,-y,-z).
$$

#### §3.2 空间两点间的距离

若 $M_1(x_1,y_1,z_1)$、$M_2(x_2,y_2,z_2)$，则

$$
|M_1M_2|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}.
$$

特别地，点 $M(x,y,z)$ 到原点的距离为

$$
|OM|=\sqrt{x^2+y^2+z^2}.
$$

#### §3.3 矢量的坐标表达式

记 $\mathbf i,\mathbf j,\mathbf k$ 为三个坐标轴正向的单位矢量，则

$$
\mathbf a=a_1\mathbf i+a_2\mathbf j+a_3\mathbf k=(a_1,a_2,a_3),
\qquad |\mathbf a|=\sqrt{a_1^2+a_2^2+a_3^2}.
$$

$(a_1,a_2,a_3)$ 为矢量的坐标，也称分量；$\mathbf i,\mathbf j,\mathbf k$ 构成直角坐标系的一组基。

非零矢量与三个坐标轴正向的夹角 $\alpha,\beta,\gamma$ 称为方向角，其余弦称为方向余弦：

$$
\cos\alpha=\frac{a_1}{|\mathbf a|},\qquad
\cos\beta=\frac{a_2}{|\mathbf a|},\qquad
\cos\gamma=\frac{a_3}{|\mathbf a|},
$$

$$
\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1,
\qquad
\mathbf e_a=(\cos\alpha,\cos\beta,\cos\gamma).
$$

#### §3.4 矢量的代数运算

设 $\mathbf a=(a_1,a_2,a_3)$、$\mathbf b=(b_1,b_2,b_3)$，则

$$
\mathbf a\pm\mathbf b=(a_1\pm b_1,a_2\pm b_2,a_3\pm b_3),
\qquad m\mathbf a=(ma_1,ma_2,ma_3).
$$

若 $M_1(x_1,y_1,z_1)$、$M_2(x_2,y_2,z_2)$，则

$$
\overrightarrow{M_1M_2}=(x_2-x_1,y_2-y_1,z_2-z_1).
$$

!!! warning "提示"

    -   **坐标运算要在同一坐标系下**：只有同一组基下的坐标才能直接加减、数乘；不同坐标系中的坐标不能直接运算。

        ??? example "坐标运算"
            <!-- 待补充 -->

    -   **向量坐标是终点减起点**：$\overrightarrow{M_1M_2}=(x_2-x_1,y_2-y_1,z_2-z_1)$，不要写成起点减终点，否则方向相反。

        ??? example "由两点求矢量"
            <!-- 待补充 -->

    -   **方向余弦的平方和为 $1$**：$\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$，方向角是矢量与三个坐标轴正向的夹角，取值范围为 $[0,\pi]$。

        ??? example "方向余弦"
            <!-- 待补充 -->

    -   **零矢量不能单位化**：$\mathbf e_a=\dfrac{\mathbf a}{|\mathbf a|}$ 要求 $\mathbf a\ne\mathbf0$；矢量相等要求坐标对应相等，模相等不代表是同一矢量。

        ??? example "单位矢量"
            <!-- 待补充 -->

### §4 两矢量的数量积与矢量积

#### §4.1 两矢量的数量积

两矢量 $\mathbf a,\mathbf b$ 的数量积定义为

$$
\mathbf a\cdot\mathbf b=|\mathbf a|\,|\mathbf b|\cos\theta,
$$

其中 $\theta$ 为两矢量的夹角，结果为数量，也称内积或点积。数量积满足

$$
\mathbf a\cdot\mathbf b=\mathbf b\cdot\mathbf a,\qquad
(m\mathbf a)\cdot\mathbf b=m(\mathbf a\cdot\mathbf b)=\mathbf a\cdot(m\mathbf b),
$$

$$
\mathbf a\cdot(\mathbf b+\mathbf c)=\mathbf a\cdot\mathbf b+\mathbf a\cdot\mathbf c.
$$

坐标表达式及夹角公式为

$$
\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3,
\qquad
|\mathbf a|=\sqrt{\mathbf a\cdot\mathbf a},
$$

$$
\cos\theta=\frac{\mathbf a\cdot\mathbf b}{|\mathbf a|\,|\mathbf b|},
\qquad\mathbf a,\mathbf b\ne\mathbf0.
$$

$$
\mathbf a\perp\mathbf b\ \Longleftrightarrow\ \mathbf a\cdot\mathbf b=0.
$$

矢量 $\mathbf a$ 在单位矢量 $\mathbf e$ 方向上的投影为数量

$$
(\mathbf a)_{\mathbf e}=\mathbf a\cdot\mathbf e.
$$

在非零矢量 $\mathbf b$ 方向上的投影为

$$
(\mathbf a)_{\mathbf b}=\frac{\mathbf a\cdot\mathbf b}{|\mathbf b|}.
$$

恒力 $\mathbf F$ 使物体发生位移 $\mathbf s$ 时，所做的功为

$$
W=\mathbf F\cdot\mathbf s.
$$

??? info "数量积坐标表达式的推导"

    下面我们利用数量积的性质和运算规律来推导数量积坐标表达式。设 $\mathbf a=a_1\mathbf i+a_2\mathbf j+a_3\mathbf k$，$\mathbf b=b_1\mathbf i+b_2\mathbf j+b_3\mathbf k$，则

    $$
    \begin{aligned}
    \mathbf a\cdot\mathbf b
    &=(a_1\mathbf i+a_2\mathbf j+a_3\mathbf k)\cdot(b_1\mathbf i+b_2\mathbf j+b_3\mathbf k)\\
    &=a_1b_1\mathbf i\cdot\mathbf i+a_1b_2\mathbf i\cdot\mathbf j+a_1b_3\mathbf i\cdot\mathbf k
    +a_2b_1\mathbf j\cdot\mathbf i+a_2b_2\mathbf j\cdot\mathbf j+a_2b_3\mathbf j\cdot\mathbf k\\
    &\quad+a_3b_1\mathbf k\cdot\mathbf i+a_3b_2\mathbf k\cdot\mathbf j+a_3b_3\mathbf k\cdot\mathbf k.
    \end{aligned}
    $$

    因为 $\mathbf i,\mathbf j,\mathbf k$ 是互相垂直的单位矢量，所以有

    $$
    \begin{cases}\mathbf i\cdot\mathbf j=\mathbf j\cdot\mathbf k=\mathbf k\cdot\mathbf i=0,\\
    \mathbf i\cdot\mathbf i=\mathbf j\cdot\mathbf j=\mathbf k\cdot\mathbf k=1.
    \end{cases}
    $$

    从而 $\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3$。

???+ example "例1"

    设 $|\mathbf a|=3$，$|\mathbf b|=5$，且两矢量的夹角 $\theta=\dfrac\pi3$，试求 $(\mathbf a-2\mathbf b)\cdot(3\mathbf a+2\mathbf b)$。

    ??? success "解析"

        $$
        \begin{aligned}
        (\mathbf a-2\mathbf b)\cdot(3\mathbf a+2\mathbf b)
        &=3\mathbf a\cdot\mathbf a-6\mathbf b\cdot\mathbf a+2\mathbf a\cdot\mathbf b-4\mathbf b\cdot\mathbf b\\
        &=3|\mathbf a|^2-4|\mathbf a||\mathbf b|\cos\frac\pi3-4|\mathbf b|^2\\
        &=3\times9-4\times3\times5\times\frac12-4\times25=-103.
        \end{aligned}
        $$

#### §4.2 两矢量的矢量积

两矢量 $\mathbf a,\mathbf b$ 的矢量积 $\mathbf a\times\mathbf b$ 为同时垂直于二者的矢量，方向由 $\mathbf a$ 转向 $\mathbf b$ 的右手规则确定，模为

$$
|\mathbf a\times\mathbf b|=|\mathbf a|\,|\mathbf b|\sin\theta.
$$

其模等于以 $\mathbf a,\mathbf b$ 为邻边的平行四边形面积。

$$
\mathbf a\times\mathbf b=-\mathbf b\times\mathbf a,\qquad
(m\mathbf a)\times\mathbf b=m(\mathbf a\times\mathbf b)=\mathbf a\times(m\mathbf b),
$$

$$
\mathbf a\times(\mathbf b+\mathbf c)=\mathbf a\times\mathbf b+\mathbf a\times\mathbf c,
$$

$$
(\mathbf a+\mathbf b)\times\mathbf c=\mathbf a\times\mathbf c+\mathbf b\times\mathbf c.
$$

坐标表达式为

$$
\mathbf a\times\mathbf b
=\begin{vmatrix}
\mathbf i&\mathbf j&\mathbf k\\
a_1&a_2&a_3\\
b_1&b_2&b_3
\end{vmatrix}
=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1).
$$

$$
\mathbf a\parallel\mathbf b\ \Longleftrightarrow\ \mathbf a\times\mathbf b=\mathbf0.
$$

!!! warning "提示"

    -   **矢量积不满足交换律**：$\mathbf a\times\mathbf b=-\mathbf b\times\mathbf a$，方向由右手规则确定；交换顺序会改变符号。

        ??? example "矢量积的方向"
            <!-- 待补充 -->

    -   **模是平行四边形面积**：$|\mathbf a\times\mathbf b|$ 等于以 $\mathbf a,\mathbf b$ 为邻边的平行四边形面积；三角形面积要再除以 $2$。

        ??? example "矢量积的几何意义"
            <!-- 待补充 -->

    -   **坐标公式的中间项带负号**：$\mathbf a\times\mathbf b=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1)$，按行列式展开时 $\mathbf j$ 分量前有负号。

        ??? example "矢量积的坐标计算"
            <!-- 待补充 -->

    -   **$\mathbf a\times\mathbf b=\mathbf0$ 等价于共线**：包括其中一个为零矢量的情形；不能由此推出 $\mathbf a=\mathbf0$ 或 $\mathbf b=\mathbf0$。矢量积也不满足结合律。

        ??? example "共线与矢量积"
            <!-- 待补充 -->

### §5 矢量的混合积与二重矢积

#### §5.1 三矢量的混合积

三矢量 $\mathbf a,\mathbf b,\mathbf c$ 的混合积定义为

$$
\mathbf a\cdot(\mathbf b\times\mathbf c)
=\begin{vmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{vmatrix}.
$$

其绝对值等于以三矢量为棱的平行六面体的体积：

$$
V_{\text{平行六面体}}=|\mathbf a\cdot(\mathbf b\times\mathbf c)|,
\qquad
V_{\text{四面体}}=\frac16|\mathbf a\cdot(\mathbf b\times\mathbf c)|,
$$

后一公式中三矢量为四面体同一顶点出发的三条棱。

$$
\mathbf a,\mathbf b,\mathbf c\text{ 共面}
\ \Longleftrightarrow\ \mathbf a\cdot(\mathbf b\times\mathbf c)=0.
$$

$$
\mathbf a\cdot(\mathbf b\times\mathbf c)
=\mathbf b\cdot(\mathbf c\times\mathbf a)
=\mathbf c\cdot(\mathbf a\times\mathbf b),
$$

$$
\mathbf a\cdot(\mathbf b\times\mathbf c)
=-\mathbf a\cdot(\mathbf c\times\mathbf b).
$$

#### §5.2 三矢量的二重矢积

三矢量的乘积 $\mathbf a\times(\mathbf b\times\mathbf c)$ 称为二重矢积，满足

$$
\mathbf a\times(\mathbf b\times\mathbf c)
=(\mathbf a\cdot\mathbf c)\mathbf b-(\mathbf a\cdot\mathbf b)\mathbf c,
$$

$$
(\mathbf a\times\mathbf b)\times\mathbf c
=(\mathbf c\cdot\mathbf a)\mathbf b-(\mathbf c\cdot\mathbf b)\mathbf a.
$$

!!! warning "提示"

    -   **公式的括号位置不能换**：$\mathbf a\times(\mathbf b\times\mathbf c)=(\mathbf a\cdot\mathbf c)\mathbf b-(\mathbf a\cdot\mathbf b)\mathbf c$，而 $(\mathbf a\times\mathbf b)\times\mathbf c=(\mathbf c\cdot\mathbf a)\mathbf b-(\mathbf c\cdot\mathbf b)\mathbf a$，两者一般不相等。

        ??? example "二重矢积公式"
            <!-- 待补充 -->

    -   **结果落在哪个平面内**：$\mathbf a\times(\mathbf b\times\mathbf c)$ 与 $\mathbf b,\mathbf c$ 共面；$(\mathbf a\times\mathbf b)\times\mathbf c$ 与 $\mathbf a,\mathbf b$ 共面，可用来判断分解方向。

        ??? example "二重矢积的几何意义"
            <!-- 待补充 -->

    -   **二重矢积不满足结合律**：$\mathbf a\times(\mathbf b\times\mathbf c)\ne(\mathbf a\times\mathbf b)\times\mathbf c$，书写时括号不能省略。

        ??? example "二重矢积的结合律"
            <!-- 待补充 -->

    -   **用"BAC-CAB"记忆时注意顺序**：第一项是 $(\mathbf a\cdot\mathbf c)\mathbf b$，第二项是 $-(\mathbf a\cdot\mathbf b)\mathbf c$，点积的两个矢量不要配错。

        ??? example "二重矢积的记忆"
            <!-- 待补充 -->

### §6 平面与直线方程

#### §6.1 平面及平面方程

垂直于平面的非零矢量称为平面的法矢量。过点 $P_0(x_0,y_0,z_0)$、法矢量为 $\mathbf n=(A,B,C)\ne\mathbf0$ 的平面的点法式方程为

$$
\mathbf n\cdot\overrightarrow{P_0P}=0,
\qquad
A(x-x_0)+B(y-y_0)+C(z-z_0)=0.
$$

一般式方程为

$$
Ax+By+Cz+D=0,\qquad A^2+B^2+C^2>0.
$$

在三坐标轴上的非零截距分别为 $a,b,c$ 时，截距式方程为

$$
\frac xa+\frac yb+\frac zc=1.
$$

两平面法矢量 $\mathbf n_1,\mathbf n_2$ 的夹角 $\theta$ 及其补角称为两平面的夹角，满足

$$
\cos\theta=\frac{\mathbf n_1\cdot\mathbf n_2}{|\mathbf n_1|\,|\mathbf n_2|}.
$$

$$
\text{两平面垂直}\ \Longleftrightarrow\ \mathbf n_1\cdot\mathbf n_2=0,
$$

$$
\text{两平面平行或重合}\ \Longleftrightarrow\ \mathbf n_1\times\mathbf n_2=\mathbf0.
$$

点 $P_0(x_0,y_0,z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离为

$$
d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.
$$

**注：** 在平面解析几何中，一次方程表示一条直线；在空间解析几何中，一次方程表示一张平面。例如 $x+y=1$ 在平面解析几何中表示一条直线，而在空间解析几何中表示一张平面。

???+ example "例2：解法一"

    求过三点 $M_1(1,1,2)$，$M_2(3,2,3)$，$M_3(2,0,3)$ 的平面方程。

    ??? success "解析"

        先求平面的法矢量 $\mathbf n$，因为 $\overrightarrow{M_1M_2}=2\mathbf i+\mathbf j+\mathbf k$，$\overrightarrow{M_1M_3}=\mathbf i-\mathbf j+\mathbf k$，故所求平面的法矢量为

        $$
        \mathbf n=\overrightarrow{M_1M_2}\times\overrightarrow{M_1M_3}
        =\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\2&1&1\\1&-1&1\end{vmatrix}
        =2\mathbf i-\mathbf j-3\mathbf k,
        $$

        又平面过点 $M_1(1,1,2)$，从而所求平面方程为

        $$
        2(x-1)-(y-1)-3(z-2)=0,\quad\text{或 }2x-y-3z+5=0.
        $$

??? info "点到平面距离公式的推导"

    求空间一点 $P_0(x_0,y_0,z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离。设 $P(x_1,y_1,z_1)$ 为平面 $Ax+By+Cz+D=0$ 上的任一点，则有 $Ax_1+By_1+Cz_1+D=0$。作矢量

    $$
    \overrightarrow{P_0P}=(x_1-x_0)\mathbf i+(y_1-y_0)\mathbf j+(z_1-z_0)\mathbf k,
    $$

    则该矢量在平面法矢量上的投影的绝对值就是点 $P_0$ 到平面的距离：

    $$
    d=|\overrightarrow{P_0P}|\cdot|\cos(\overrightarrow{P_0P},\mathbf n)|
    =|\overrightarrow{P_0P}\cdot\mathbf e_n|,
    $$

    由 $\mathbf n=A\mathbf i+B\mathbf j+C\mathbf k$，得

    $$
    \begin{aligned}
    d&=\frac{|A(x_1-x_0)+B(y_1-y_0)+C(z_1-z_0)|}{\sqrt{A^2+B^2+C^2}}\\
    &=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.
    \end{aligned}
    $$

    注意：$Ax_1+By_1+Cz_1=-D$。

#### §6.2 空间直线方程

与直线平行的非零矢量称为直线的方向矢量，其坐标称为方向数。过点 $P_0(x_0,y_0,z_0)$、方向矢量为 $\mathbf v=(l,m,n)$ 的直线，参数式方程为

$$
x=x_0+lt,\qquad y=y_0+mt,\qquad z=z_0+nt,
\qquad t\in\mathbb R.
$$

当 $lmn\ne0$ 时，其点向式或对称式方程为

$$
\frac{x-x_0}{l}=\frac{y-y_0}{m}=\frac{z-z_0}{n}.
$$

方向分量为零时，相应坐标恒定；如 $l=0$ 时，$x=x_0$。

过两点 $P_1(x_1,y_1,z_1)$、$P_2(x_2,y_2,z_2)$ 的直线的两点式为

$$
\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}=\frac{z-z_1}{z_2-z_1},
$$

其中相应分母非零；一般参数式为 $\overrightarrow{OP}=\overrightarrow{OP_1}+t\overrightarrow{P_1P_2}$。

空间直线也可表示为两个不平行平面的交线：

$$
\begin{cases}
A_1x+B_1y+C_1z+D_1=0,\\
A_2x+B_2y+C_2z+D_2=0,
\end{cases}
\qquad \mathbf n_1\times\mathbf n_2\ne\mathbf0.
$$

其方向矢量可取 $\mathbf v=\mathbf n_1\times\mathbf n_2$。

两直线方向矢量 $\mathbf v_1,\mathbf v_2$ 的夹角 $\theta$ 及其补角称为两直线的夹角，满足

$$
\cos\theta=\frac{\mathbf v_1\cdot\mathbf v_2}{|\mathbf v_1|\,|\mathbf v_2|}.
$$

设直线方向矢量 $\mathbf v$ 与平面法矢量 $\mathbf n$ 的夹角为 $\theta$，则线面夹角为

$$
\varphi=\left|\frac\pi2-\theta\right|.
$$

$$
\text{直线垂直于平面}\ \Longleftrightarrow\ \mathbf v\parallel\mathbf n,
\qquad
\text{直线方向平行于平面}\ \Longleftrightarrow\ \mathbf v\cdot\mathbf n=0.
$$

点 $P$ 到直线 $L$ 的距离为

$$
d(P,L)=\frac{|\overrightarrow{P_0P}\times\mathbf v|}{|\mathbf v|},
$$

其中 $P_0\in L$，$\mathbf v$ 为 $L$ 的方向矢量。

两异面直线间的距离是其公垂线段的长度，公式为

$$
d(L_1,L_2)=\frac{|\overrightarrow{P_1P_2}\cdot(\mathbf v_1\times\mathbf v_2)|}
{|\mathbf v_1\times\mathbf v_2|},
$$

其中 $P_1\in L_1,P_2\in L_2$，$\mathbf v_1,\mathbf v_2$ 为相应方向矢量。

#### §6.3 平面束方程

通过同一直线 $L$ 的所有平面构成平面束，$L$ 称为平面束的轴。若

$$
L:\quad F_1(x,y,z)=0,\qquad F_2(x,y,z)=0
$$

是两个不平行平面的交线，则平面束方程为

$$
\lambda F_1(x,y,z)+\mu F_2(x,y,z)=0,
\qquad(\lambda,\mu)\ne(0,0).
$$

!!! warning "提示"

    -   **$\lambda,\mu$ 不能同时为零**：平面束方程为 $\lambda F_1+\mu F_2=0$，$(\lambda,\mu)\ne(0,0)$；同时为零得到的是恒等式，不是平面。

        ??? example "平面束方程"
            <!-- 待补充 -->

    -   **单参数形式会漏掉一个平面**：若写成 $F_1+\lambda F_2=0$，则漏掉 $F_2=0$ 这个平面；需要时应用双参数形式或单独补上。

        ??? example "单参数与双参数形式"
            <!-- 待补充 -->

    -   **交线必须是两不平行的平面**：$F_1=0$ 与 $F_2=0$ 的法矢量不共线时，交线才是一条直线；若两平面平行或重合，不构成平面束的轴。

        ??? example "平面束的轴"
            <!-- 待补充 -->

    -   **用条件定参数后要归一化**：将所求平面满足的几何条件代入 $\lambda F_1+\mu F_2=0$，解出比值 $\lambda:\mu$ 即可；不要误把 $\lambda,\mu$ 当作唯一确定的值。

        ??? example "求平面束中的平面"
            <!-- 待补充 -->

### §7 曲面方程与空间曲线方程

#### §7.1 曲面方程

若曲面上任一点的坐标均满足 $F(x,y,z)=0$，而不在曲面上的点不满足该方程，则称它为曲面的方程。

球心为 $C(x_0,y_0,z_0)$、半径为 $R>0$ 的球面方程为

$$
(x-x_0)^2+(y-y_0)^2+(z-z_0)^2=R^2.
$$

一条直线沿定曲线平行移动形成的曲面称为柱面，平移的直线称为母线，定曲线称为准线。以 $Oxy$ 平面上的曲线 $F(x,y)=0$ 为准线、母线平行于 $\mathbf v=(a,b,c)$，$c\ne0$，柱面方程为

$$
F\left(x-\frac acz,\ y-\frac bcz\right)=0.
$$

特别地，$F(x,y)=0$ 在空间中表示母线平行于 $Oz$ 轴的柱面。

过定点的直线沿不经过该定点的定曲线移动所成的曲面称为锥面；定点称为顶点，移动直线称为母线，定曲线称为准线。以原点为顶点、以平面 $z=h\ne0$ 内的曲线 $F(x,y)=0$ 为准线时，除顶点外的锥面满足

$$
F\left(\frac{hx}{z},\frac{hy}{z}\right)=0,\qquad z\ne0.
$$

曲线绕定直线旋转形成的曲面称为旋转曲面，定直线称为旋转轴。$Oyz$ 平面上的曲线 $F(y,z)=0$ 绕 $Oz$ 轴旋转所得曲面为

$$
F\left(\pm\sqrt{x^2+y^2},z\right)=0.
$$

绕 $Oy$ 轴旋转所得曲面为

$$
F\left(y,\pm\sqrt{x^2+z^2}\right)=0.
$$

#### §7.2 空间曲线方程

空间曲线可表示为两个曲面的交线：

$$
\begin{cases}
F(x,y,z)=0,\\
G(x,y,z)=0.
\end{cases}
$$

其参数方程的一般形式为

$$
x=\varphi(t),\qquad y=\psi(t),\qquad z=\omega(t).
$$

绕 $Oz$ 轴的圆柱螺线可表示为

$$
x=R\cos t,\qquad y=R\sin t,\qquad z=kt,
\qquad R>0,\ k>0,
$$

其中 $2\pi k$ 为螺距，即绕轴一周沿轴方向上升的距离。

空间曲线在 $Oxy$ 平面上的投影由曲线上各点沿平行于 $Oz$ 轴方向投影所得，其点集为

$$
\{(x,y,0):\ \exists z,\ F(x,y,z)=G(x,y,z)=0\}.
$$

!!! warning "提示"

    -   **曲线表示不唯一**：同一条空间曲线可以由不同的两张曲面相交表示；两个方程必须相互独立，不能是同一曲面的倍数或只相差一个方程。

        ??? example "空间曲线的表示"
            <!-- 待补充 -->

    -   **投影要先消去 $z$**：曲线在 $Oxy$ 平面上的投影，应由两个方程消去 $z$ 得到关于 $x,y$ 的方程，再令 $z=0$；投影柱面与投影曲线不是一回事。

        ??? example "空间曲线的投影"
            <!-- 待补充 -->

    -   **参数方程要注明范围**：$x=\varphi(t),y=\psi(t),z=\omega(t)$ 必须给出 $t$ 的取值范围，否则可能表示整条曲线或重复绕行。

        ??? example "参数方程的范围"
            <!-- 待补充 -->

    -   **螺距与旋向**：圆柱螺线 $x=R\cos t,y=R\sin t,z=kt$ 的螺距为 $2\pi|k|$；$k>0$ 为右旋，$k<0$ 为左旋，不要只取 $k>0$。

        ??? example "圆柱螺线"
            <!-- 待补充 -->

### §8 二次曲面

由关于 $x,y,z$ 的二次方程所确定的曲面称为二次曲面。以下 $a,b,c>0$。

| 曲面 | 标准方程 |
| --- | --- |
| 椭球面 | $\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$ |
| 椭圆抛物面 | $\displaystyle z=\frac{x^2}{a^2}+\frac{y^2}{b^2}$ |
| 二次锥面 | $\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=0$ |
| 双曲抛物面（马鞍面） | $\displaystyle z=-\frac{x^2}{a^2}+\frac{y^2}{b^2}$ |
| 单叶双曲面 | $\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$ |
| 双叶双曲面 | $\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=-1$ |

!!! warning "提示"

    -   **正负号决定曲面类型**：$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}-\dfrac{z^2}{c^2}=1$ 是单叶双曲面，$=-1$ 是双叶双曲面；椭圆抛物面 $z=\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}$ 与马鞍面 $z=-\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}$ 也靠符号区分。

        ??? example "二次曲面的识别"
            <!-- 待补充 -->

    -   **$a,b,c$ 是半轴长**：标准方程中 $a,b,c>0$ 是半轴长，不是轴长；比较形状时要看 $a,b,c$ 的相对大小。

        ??? example "半轴长与形状"
            <!-- 待补充 -->

    -   **截痕法要先找对称性**：用坐标平面或平行平面截曲面，先确定对称轴、顶点和开口方向，再画截痕；不能只凭方程想象。

        ??? example "截痕法"
            <!-- 待补充 -->

    -   **锥面与双曲面的区别**：二次锥面 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}-\dfrac{z^2}{c^2}=0$ 在顶点处退化，不是双曲面；双曲面有渐近锥面，但本身不与锥面重合。

        ??? example "锥面与双曲面"
            <!-- 待补充 -->

## 第八章 多元函数微分学

### §1 多元函数的极限与连续性

#### §1.1 多元函数的概念

集合 $A,B$ 的直积为

$$
A\times B=\{(x,y):x\in A,\ y\in B\},\qquad
\mathbb R^n=\{(x_1,\ldots,x_n):x_i\in\mathbb R\}.
$$

设 $D\subseteq\mathbb R^n$ 非空。若每个 $P=(x_1,\ldots,x_n)\in D$ 都对应唯一的实数 $u$，则称此对应关系为定义在 $D$ 上的 $n$ 元函数，记为

$$
u=f(P)=f(x_1,\ldots,x_n).
$$

$D$ 为定义域，$x_1,\ldots,x_n$ 为自变量，$u$ 为因变量。函数的值域与图形分别为

$$
R(f)=\{f(P):P\in D\},\qquad
\Gamma_f=\{(x_1,\ldots,x_n,u):P\in D,\ u=f(P)\}\subseteq\mathbb R^{n+1}.
$$

#### §1.2 平面点集

平面两点 $P_0=(x_0,y_0)$、$P=(x,y)$ 的距离为

$$
\rho(P_0,P)=\sqrt{(x-x_0)^2+(y-y_0)^2}.
$$

$P_0$ 的 $\delta$ 邻域和去心 $\delta$ 邻域分别为

$$
U(P_0,\delta)=\{P:\rho(P_0,P)<\delta\},\qquad
\mathring U(P_0,\delta)=\{P:0<\rho(P_0,P)<\delta\}.
$$

对平面点集 $E$，若存在 $U(P_0,\delta)\subseteq E$，则 $P_0$ 是 $E$ 的内点；若存在 $U(P_0,\delta)\cap E=\varnothing$，则 $P_0$ 是 $E$ 的外点；若 $P_0$ 的任意邻域都同时含有 $E$ 中和 $E$ 外的点，则 $P_0$ 是 $E$ 的边界点。全体内点组成 $E$ 的内部，全体边界点组成边界 $\partial E$。

若 $E$ 的每一点都是内点，则 $E$ 是开集；若 $E$ 的补集是开集，则 $E$ 是闭集。若 $E$ 中任意两点都能用完全位于 $E$ 内的有限折线连接，则称 $E$ 连通。

连通的开集称为开区域；开区域连同其边界组成闭区域。开区域、闭区域及开区域连同部分边界统称为区域。若存在 $r>0$，使 $E\subseteq U(O,r)$，则称 $E$ 有界，否则称其无界。

#### §1.3 二元函数的极限与连续性

设 $f$ 在 $P_0$ 的某去心邻域内有定义。若

$$
\forall\varepsilon>0,\ \exists\delta>0:\quad
0<\rho(P,P_0)<\delta\Longrightarrow |f(P)-A|<\varepsilon,
$$

则称 $A$ 为 $f$ 在 $P\to P_0$ 时的极限，记为

$$
\lim_{P\to P_0}f(P)=A
\quad\text{或}\quad
\lim_{\substack{x\to x_0\\y\to y_0}}f(x,y)=A.
$$

上述极限称为二重极限；依次对两个变量取极限所得的

$$
\lim_{x\to x_0}\left[\lim_{y\to y_0}f(x,y)\right],\qquad
\lim_{y\to y_0}\left[\lim_{x\to x_0}f(x,y)\right]
$$

称为累次极限。若二重极限及两个累次极限都存在，则三者相等。

若 $f$ 在 $P_0$ 及其某邻域内有定义，且

$$
\lim_{P\to P_0}f(P)=f(P_0),
$$

则称 $f$ 在 $P_0$ 连续。函数的全增量与偏增量为

$$
\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0),
$$

$$
\Delta_xz=f(x_0+\Delta x,y_0)-f(x_0,y_0),\qquad
\Delta_yz=f(x_0,y_0+\Delta y)-f(x_0,y_0).
$$

连续性也可表示为

$$
\lim_{(\Delta x,\Delta y)\to(0,0)}\Delta z=0.
$$

!!! warning "提示"

    -   **二重极限要求沿任意路径**：$P\to P_0$ 可以沿任意曲线趋近，只有所有路径都趋于同一值才算极限存在；只验证几条直线（如 $y=kx$）不足以证明极限存在。

        ??? example "二重极限的存在性"
            <!-- 待补充 -->

    -   **累次极限与二重极限不同**：两个累次极限存在且相等，不能推出二重极限存在；二重极限存在也不保证累次极限存在。只有三者都存在时，它们才相等。

        ??? example "累次极限"
            <!-- 待补充 -->

    -   **偏导数存在不保证连续**：多元函数中 $f_x,f_y$ 都存在仍可能不连续；连续要求全增量 $\Delta z\to0$，不能用偏增量代替全增量。

        ??? example "偏导数与连续性"
            <!-- 待补充 -->

    -   **连续与有界闭区域**：最值定理、介值定理要求函数在有界闭区域上连续；区域无界或不闭时结论可能不成立。

        ??? example "有界闭区域上的连续性"
            <!-- 待补充 -->

**说明：** 必须注意这个极限值与点 $P(x,y)$ 趋于点 $P_0(x_0,y_0)$ 的方式无关，即不论 $P$ 以什么方向和路径（也可以是跳跃式地，忽上忽下地）趋向 $P_0$，只要 $P$ 与 $P_0$ 充分接近，就能使 $f(P)$ 与 $A$ 接近到预先任意指定的程度。

???+ example "例7"

    研究函数 $f(x,y)=\begin{cases}\dfrac{2xy}{x^2+y^2},&x^2+y^2\ne0,\\0,&x^2+y^2=0,\end{cases}$ 在点 $(0,0)$ 处的极限是否存在。

    ??? success "解析"

        当 $x^2+y^2\ne0$ 时，我们研究函数 $f(x,y)$ 沿 $x\to0$，$y=kx\to0$ 这一方式趋于 $(0,0)$ 的极限，有

        $$
        \lim_{x\to0}\frac{2x\cdot kx}{x^2+k^2x^2}=\frac{2k}{1+k^2}.
        $$

        很显然，对于不同的 $k$ 值，可得到不同的极限值，所以极限 $\lim_{x\to0,y\to0}f(x,y)$ 不存在。

### §2 偏导数与全微分

#### §2.1 偏导数

函数 $z=f(x,y)$ 在 $(x_0,y_0)$ 对 $x$、$y$ 的偏导数分别定义为

$$
f_x(x_0,y_0)=\lim_{h\to0}\frac{f(x_0+h,y_0)-f(x_0,y_0)}h,
$$

$$
f_y(x_0,y_0)=\lim_{k\to0}\frac{f(x_0,y_0+k)-f(x_0,y_0)}k.
$$

偏导函数记为

$$
f_x=\frac{\partial f}{\partial x}=\frac{\partial z}{\partial x},\qquad
f_y=\frac{\partial f}{\partial y}=\frac{\partial z}{\partial y}.
$$

$f_x(x_0,y_0)$ 是曲面 $z=f(x,y)$ 与平面 $y=y_0$ 的交线在对应点的切线斜率；$f_y(x_0,y_0)$ 是曲面与平面 $x=x_0$ 的交线在对应点的切线斜率。

二阶偏导数为

$$
f_{xx}=\frac{\partial}{\partial x}f_x,\qquad
f_{xy}=\frac{\partial}{\partial y}f_x,\qquad
f_{yx}=\frac{\partial}{\partial x}f_y,\qquad
f_{yy}=\frac{\partial}{\partial y}f_y.
$$

继续对偏导函数求偏导数，所得为高阶偏导数。若混合偏导数 $f_{xy},f_{yx}$ 在所讨论点连续，则

$$
f_{xy}=f_{yx}.
$$

高阶混合偏导数在连续条件下也与求导次序无关。

#### §2.2 全微分

设 $\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}$。若函数的全增量可以表示为

$$
\Delta z=A\Delta x+B\Delta y+o(\rho),
$$

其中 $A,B$ 与 $\Delta x,\Delta y$ 无关，则称 $f$ 在该点可微，线性部分称为全微分：

$$
\mathrm dz=A\Delta x+B\Delta y.
$$

可微函数在该点连续，两个偏导数存在，且

$$
A=f_x,\qquad B=f_y,\qquad
\mathrm dz=f_x\,\mathrm dx+f_y\,\mathrm dy,
\qquad\mathrm dx=\Delta x,\ \mathrm dy=\Delta y.
$$

若 $f_x,f_y$ 在该点的某邻域内存在且在该点连续，则 $f$ 在该点可微。

对可微函数 $u,v$ 及常数 $c$，有

$$
\mathrm d(u\pm v)=\mathrm du\pm\mathrm dv,\qquad
\mathrm d(cu)=c\,\mathrm du,
$$

$$
\mathrm d(uv)=v\,\mathrm du+u\,\mathrm dv,\qquad
\mathrm d\left(\frac uv\right)=\frac{v\,\mathrm du-u\,\mathrm dv}{v^2}\quad(v\ne0).
$$

??? info "可微的充分条件的证明"

    全增量

    $$
    \begin{aligned}
    \Delta z&=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)\\
    &=[f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0+\Delta y)]
    +[f(x_0,y_0+\Delta y)-f(x_0,y_0)],
    \end{aligned}
    $$

    在上面两个中括号中分别应用一元函数微分中值定理，有

    $$
    \Delta z=f_x(x_0+\theta_1\Delta x,y_0+\Delta y)\Delta x
    +f_y(x_0,y_0+\theta_2\Delta y)\Delta y,\qquad0<\theta_1,\theta_2<1.
    $$

    由给定条件知

    $$
    \lim_{\Delta x\to0,\Delta y\to0}f_x(x_0+\theta_1\Delta x,y_0+\Delta y)=f_x(x_0,y_0),
    $$

    有

    $$
    f_x(x_0+\theta_1\Delta x,y_0+\Delta y)=f_x(x_0,y_0)+\varepsilon_1,
    \qquad\lim_{\Delta x\to0,\Delta y\to0}\varepsilon_1=0.
    $$

    同理

    $$
    f_y(x_0,y_0+\theta_2\Delta y)=f_y(x_0,y_0)+\varepsilon_2,
    \qquad\lim_{\Delta x\to0,\Delta y\to0}\varepsilon_2=0.
    $$

    于是

    $$
    \Delta z=f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y+\varepsilon_1\Delta x+\varepsilon_2\Delta y.
    $$

    而

    $$
    \lim_{\Delta x\to0,\Delta y\to0}\frac{\varepsilon_1\Delta x+\varepsilon_2\Delta y}{\rho}
    =\lim_{\Delta x\to0,\Delta y\to0}\left(
    \varepsilon_1\frac{\Delta x}{\sqrt{(\Delta x)^2+(\Delta y)^2}}
    +\varepsilon_2\frac{\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}\right)
    =0+0=0,
    $$

    即 $\varepsilon_1\Delta x+\varepsilon_2\Delta y=o(\rho)$（$\rho\to0$），从而

    $$
    \Delta z=f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y+o(\rho)\qquad(\rho\to0).
    $$

    因此，$z=f(x,y)$ 在点 $(x_0,y_0)$ 处可微。

???+ example "例11"

    研究函数 $f(x,y)=\begin{cases}\dfrac{2xy}{\sqrt{x^2+y^2}},&x^2+y^2\ne0,\\0,&x^2+y^2=0,\end{cases}$ 在原点的可微性。

    ??? success "解析"

        $$
        f_x(0,0)=\lim_{x\to0}\frac{f(x,0)-f(0,0)}x=\lim_{x\to0}\frac0x=0,
        $$

        同理 $f_y(0,0)=0$。要验证函数 $f$ 在原点是否可微，只需看极限 $\lim\dfrac{\Delta z-(A\Delta x+B\Delta y)}\rho$ 是否为 $0$。由于

        $$
        \begin{aligned}
        \lim\frac{\Delta z-(A\Delta x+B\Delta y)}\rho
        &=\lim\frac{\dfrac{2\Delta x\Delta y}{\sqrt{(\Delta x)^2+(\Delta y)^2}}-(0\cdot\Delta x+0\cdot\Delta y)}\rho\\
        &=\lim_{\Delta x\to0,\Delta y\to0}\frac{2\Delta x\Delta y}{(\Delta x)^2+(\Delta y)^2},
        \end{aligned}
        $$

        由本章 §1 例7 知此极限不存在，所以函数 $f$ 在原点不可微。

##### 全微分在近似计算和误差估算中的应用 \*

当 $\Delta x,\Delta y$ 较小时，一阶近似公式为

$$
\Delta z\approx\mathrm dz=f_x(x,y)\Delta x+f_y(x,y)\Delta y,
$$

$$
f(x+\Delta x,y+\Delta y)
\approx f(x,y)+f_x(x,y)\Delta x+f_y(x,y)\Delta y.
$$

若 $x_0,y_0$ 为测量值，误差限为 $|\Delta x|\le\delta_1$、$|\Delta y|\le\delta_2$，则 $z=f(x,y)$ 的绝对误差限的一阶估计为

$$
\delta_z\approx |f_x(x_0,y_0)|\delta_1+|f_y(x_0,y_0)|\delta_2.
$$

当 $f(x_0,y_0)\ne0$ 时，相对误差限的一阶估计为

$$
\frac{\delta_z}{|f(x_0,y_0)|}
\approx\frac{|f_x(x_0,y_0)|\delta_1+|f_y(x_0,y_0)|\delta_2}{|f(x_0,y_0)|}.
$$

!!! warning "提示"

    -   **一阶近似只在增量很小时有效**：$\Delta z\approx f_x\Delta x+f_y\Delta y$ 的误差是 $o(\rho)$，$\Delta x,\Delta y$ 较大时不能用它代替精确增量。

        ??? example "全微分近似"
            <!-- 待补充 -->

    -   **误差限要加绝对值**：$\delta_z\approx|f_x(x_0,y_0)|\delta_1+|f_y(x_0,y_0)|\delta_2$，各项取绝对值后再相加；直接代数相加可能因符号相消而低估误差。

        ??? example "绝对误差限"
            <!-- 待补充 -->

    -   **相对误差限的分母**：相对误差限为 $\dfrac{\delta_z}{|f(x_0,y_0)|}$，要求 $f(x_0,y_0)\ne0$；不能把分母写成 $\delta_z$ 或某个偏导数。

        ??? example "相对误差限"
            <!-- 待补充 -->

    -   **可微的充分条件不是必要条件**：$f_x,f_y$ 在点附近存在且在该点连续可推出可微；但可微只保证偏导数存在，偏导数存在不一定可微。

        ??? example "可微的判定"
            <!-- 待补充 -->

### §3 复合函数微分法

#### §3.1 复合函数的偏导数

设 $z=f(u,v)$，$u=u(x,y)$、$v=v(x,y)$。若内层函数在所讨论点的偏导数存在，外层函数在对应点可微，则

$$
\frac{\partial z}{\partial x}
=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}
+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x},
\qquad
\frac{\partial z}{\partial y}
=\frac{\partial f}{\partial u}\frac{\partial u}{\partial y}
+\frac{\partial f}{\partial v}\frac{\partial v}{\partial y}.
$$

若 $u=u(x)$、$v=v(x)$ 可导且 $f$ 可微，则

$$
\frac{\mathrm dz}{\mathrm dx}
=\frac{\partial f}{\partial u}\frac{\mathrm du}{\mathrm dx}
+\frac{\partial f}{\partial v}\frac{\mathrm dv}{\mathrm dx}.
$$

若 $z=f(x,y,u(x,y))$，则

$$
\frac{\partial z}{\partial x}=f_x+f_u u_x,\qquad
\frac{\partial z}{\partial y}=f_y+f_u u_y,
$$

其中 $f_x,f_y,f_u$ 为外层函数对相应自变量的偏导数。

??? info "复合函数偏导公式的证明"

    设 $\Delta y=0$，$\Delta x\ne0$，得到 $u,v$ 对 $x$ 的偏增量

    $$
    \Delta_xu=u(x+\Delta x,y)-u(x,y),\qquad
    \Delta_xv=v(x+\Delta x,y)-v(x,y).
    $$

    由于 $z=f(u,v)$ 在点 $(u,v)$ 处可微，所以由全增量公式，有

    $$
    \Delta z=\frac{\partial z}{\partial u}\Delta u+\frac{\partial z}{\partial v}\Delta v
    +\varepsilon_1\Delta u+\varepsilon_2\Delta v,
    $$

    其中 $\lim_{\Delta u\to0,\Delta v\to0}\varepsilon_1=0$，$\lim_{\Delta u\to0,\Delta v\to0}\varepsilon_2=0$。把 $\Delta_xu,\Delta_xv$ 代入上式，得到 $z$ 对 $x$ 的偏增量，有

    $$
    \Delta_xz=\frac{\partial z}{\partial u}\Delta_xu+\frac{\partial z}{\partial v}\Delta_xv
    +\varepsilon_1\Delta_xu+\varepsilon_2\Delta_xv.
    $$

    等式两边同除以 $\Delta x$（$\ne0$），得

    $$
    \frac{\Delta_xz}{\Delta x}
    =\frac{\partial z}{\partial u}\frac{\Delta_xu}{\Delta x}
    +\frac{\partial z}{\partial v}\frac{\Delta_xv}{\Delta x}
    +\varepsilon_1\frac{\Delta_xu}{\Delta x}+\varepsilon_2\frac{\Delta_xv}{\Delta x},
    $$

    由 $\dfrac{\partial u}{\partial x}$，$\dfrac{\partial v}{\partial x}$ 存在，知

    $$
    \lim_{\Delta x\to0}\frac{\Delta_xu}{\Delta x}=\frac{\partial u}{\partial x},\qquad
    \lim_{\Delta x\to0}\frac{\Delta_xv}{\Delta x}=\frac{\partial v}{\partial x}.
    $$

    所以，当 $\Delta x\to0$ 时，有 $\Delta_xu\to0$，$\Delta_xv\to0$，从而 $\varepsilon_1\to0$，$\varepsilon_2\to0$。于是

    $$
    \lim_{\Delta x\to0}\frac{\Delta_xz}{\Delta x}
    =\frac{\partial z}{\partial x}
    =\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}
    +\frac{\partial z}{\partial v}\frac{\partial v}{\partial x},
    $$

    同理可得

    $$
    \frac{\partial z}{\partial y}
    =\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}
    +\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}.
    $$

#### §3.2 复合函数的全微分

设 $z=f(x,y)$，$x=x(s,t)$、$y=y(s,t)$ 均有连续偏导数，则

$$
\mathrm dz=f_x\,\mathrm dx+f_y\,\mathrm dy,
$$

$$
\mathrm dx=x_s\,\mathrm ds+x_t\,\mathrm dt,\qquad
\mathrm dy=y_s\,\mathrm ds+y_t\,\mathrm dt,
$$

$$
\mathrm dz=(f_x x_s+f_y y_s)\,\mathrm ds
+(f_x x_t+f_y y_t)\,\mathrm dt
=z_s\,\mathrm ds+z_t\,\mathrm dt.
$$

函数的一阶全微分表达式对中间变量仍保持相同形式，称为一阶全微分的形式不变性。

!!! warning "提示"

    -   **一阶形式不变性只对一阶微分成立**：$\mathrm dz=f_x\,\mathrm dx+f_y\,\mathrm dy$ 对中间变量仍成立；二阶及更高阶全微分不具有这种形式不变性。

        ??? example "一阶全微分形式不变性"
            <!-- 待补充 -->

    -   **链式法则的条件**：外层函数可微、内层函数偏导数存在时才能用 $z_s=f_x x_s+f_y y_s$；仅内层偏导存在而外层不可微时不能直接套。

        ??? example "复合函数求偏导"
            <!-- 待补充 -->

    -   **$f_x$ 与 $z_x$ 不同**：$z=f(x,y,u(x,y))$ 中，$f_x$ 是外层对第一个位置的偏导，$z_x=f_x+f_u u_x$ 才是对 $x$ 的全偏导，不能混用。

        ??? example "$f_x$ 与 $z_x$"
            <!-- 待补充 -->

    -   **全微分存在强于偏导存在**：$\mathrm dz$ 存在可推出 $f_x,f_y$ 存在，反之不成立；判断可微时不能只看两个偏导数。

        ??? example "全微分与偏导数"
            <!-- 待补充 -->

### §4 隐函数的偏导数

#### §4.1 隐函数的偏导数

设 $F(x,y,z)$ 在 $P_0=(x_0,y_0,z_0)$ 的某邻域内有连续偏导数，且

$$
F(x_0,y_0,z_0)=0,\qquad F_z(x_0,y_0,z_0)\ne0.
$$

则方程 $F(x,y,z)=0$ 在该点附近唯一确定一个有连续偏导数的隐函数 $z=f(x,y)$，满足 $f(x_0,y_0)=z_0$，且

$$
\frac{\partial z}{\partial x}=-\frac{F_x}{F_z},\qquad
\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}.
$$

各偏导数均在 $(x,y,f(x,y))$ 处取值。

#### §4.2 隐函数组的偏导数

设 $F(x,y,u,v)$、$G(x,y,u,v)$ 在 $P_0=(x_0,y_0,u_0,v_0)$ 的某邻域内有连续偏导数，并满足

$$
F(P_0)=G(P_0)=0,\qquad
J(P_0)=\frac{\partial(F,G)}{\partial(u,v)}(P_0)\ne0,
$$

其中雅可比行列式为

$$
J=\frac{\partial(F,G)}{\partial(u,v)}
=\begin{vmatrix}F_u&F_v\\G_u&G_v\end{vmatrix}.
$$

则方程组 $F=0,G=0$ 在该点附近唯一确定有连续偏导数的函数 $u=u(x,y)$、$v=v(x,y)$，且

$$
u_x=-\frac{\dfrac{\partial(F,G)}{\partial(x,v)}}J,\qquad
v_x=-\frac{\dfrac{\partial(F,G)}{\partial(u,x)}}J,
$$

$$
u_y=-\frac{\dfrac{\partial(F,G)}{\partial(y,v)}}J,\qquad
v_y=-\frac{\dfrac{\partial(F,G)}{\partial(u,y)}}J.
$$

#### §4.3 反函数组的偏导数 \*

若函数组 $x=x(u,v)$、$y=y(u,v)$ 的反函数组为 $u=u(x,y)$、$v=v(x,y)$，两组函数均有连续偏导数，则对应点处

$$
\frac{\partial(u,v)}{\partial(x,y)}
\frac{\partial(x,y)}{\partial(u,v)}=1.
$$

三元函数组的相应公式为

$$
\frac{\partial(x,y,z)}{\partial(u,v,w)}
\frac{\partial(u,v,w)}{\partial(x,y,z)}=1.
$$

!!! warning "提示"

    -   **雅可比行列式非零是局部条件**：$J\ne0$ 只保证在对应点附近存在连续可微的反函数组；$J=0$ 时反函数可能仍存在，但不能用该公式。

        ??? example "反函数组的存在性"
            <!-- 待补充 -->

    -   **雅可比行列式互为倒数**：$\dfrac{\partial(u,v)}{\partial(x,y)}\cdot\dfrac{\partial(x,y)}{\partial(u,v)}=1$，要求两个雅可比都不为零；不能把每个偏导数分别取倒数。

        ??? example "雅可比行列式"
            <!-- 待补充 -->

    -   **偏导矩阵是互逆矩阵**：反函数组的偏导矩阵是原函数组偏导矩阵的逆矩阵，非对角元素不能想当然为零。

        ??? example "反函数组的偏导"
            <!-- 待补充 -->

    -   **整体反函数还需一一对应**：局部可逆不等于整体可逆；要在整个定义域上定义反函数，还需函数组是单射（或区域满足相应条件）。

        ??? example "局部与整体反函数"
            <!-- 待补充 -->

### §5 场的方向导数与梯度

#### §5.1 场的概念

若空间区域 $V$ 内每一点 $P$ 都对应唯一的数量 $u(P)$，则称 $V$ 上确定了一个数量场，记为

$$
u=u(P)=u(x,y,z).
$$

若每一点 $P$ 都对应唯一的矢量 $\boldsymbol A(P)$，则称 $V$ 上确定了一个矢量场，记为

$$
\boldsymbol A(P)=A_x(x,y,z)\boldsymbol i+A_y(x,y,z)\boldsymbol j+A_z(x,y,z)\boldsymbol k.
$$

场量不随时间变化的场称为稳定场，否则称为不稳定场。数量场中取相同场值的点组成等值面：

$$
u(x,y,z)=C.
$$

平面数量场的相应点集称为等值线。

#### §5.2 场的方向导数

设 $l$ 为从 $P_0$ 出发的有向射线，$P\in l$，$\rho=|P_0P|$。若极限存在，则数量场 $u$ 在 $P_0$ 沿 $l$ 的方向导数为

$$
\frac{\partial u}{\partial l}(P_0)
=\lim_{\rho\to0^+}\frac{u(P)-u(P_0)}\rho.
$$

若 $u$ 在 $P_0$ 可微，$l$ 的单位方向矢量为 $\boldsymbol e_l=(\cos\alpha,\cos\beta,\cos\gamma)$，则

$$
\frac{\partial u}{\partial l}(P_0)
=u_x(P_0)\cos\alpha+u_y(P_0)\cos\beta+u_z(P_0)\cos\gamma.
$$

#### §5.3 梯度

数量场 $u$ 的梯度定义为

$$
\operatorname{grad}u=\nabla u
=u_x\boldsymbol i+u_y\boldsymbol j+u_z\boldsymbol k.
$$

当 $u$ 可微时，

$$
\frac{\partial u}{\partial l}
=\nabla u\cdot\boldsymbol e_l
=|\nabla u|\cos\theta,
$$

其中 $\theta$ 为梯度与方向 $l$ 的夹角。若 $\nabla u\ne\boldsymbol0$，则梯度方向的方向导数最大，反方向最小，垂直梯度方向的方向导数为零：

$$
\max_l\frac{\partial u}{\partial l}=|\nabla u|,\qquad
\min_l\frac{\partial u}{\partial l}=-|\nabla u|.
$$

!!! warning "提示"

    -   **梯度是矢量，方向导数是数量**：$\nabla u=(u_x,u_y,u_z)$，方向导数 $\dfrac{\partial u}{\partial l}=\nabla u\cdot\boldsymbol e_l$ 是数量；两者不能混淆。

        ??? example "梯度与方向导数"
            <!-- 待补充 -->

    -   **方向矢量必须单位化**：公式中的 $\boldsymbol e_l=(\cos\alpha,\cos\beta,\cos\gamma)$ 是单位矢量；直接用非单位矢量点乘会多乘一个模长。

        ??? example "方向导数的计算"
            <!-- 待补充 -->

    -   **最值方向与梯度**：$\nabla u\ne\boldsymbol0$ 时，沿梯度方向方向导数最大，值为 $|\nabla u|$；反方向最小，值为 $-|\nabla u|$；垂直梯度方向为零。

        ??? example "方向导数的最大值"
            <!-- 待补充 -->

    -   **$\nabla u=\boldsymbol0$ 时方向无定义**：梯度为零时不能谈"梯度方向"，所有方向的方向导数都为 $0$；梯度方向始终指向 $u$ 增加最快的方向，并与等值面垂直。

        ??? example "梯度为零的点"
            <!-- 待补充 -->

### §6 多元函数的极值及应用

#### §6.1 多元函数的泰勒公式

设 $f$ 在 $(x_0,y_0)$ 的某邻域内有直到 $n+1$ 阶的连续偏导数，$h,k$ 为增量，记

$$
D=h\frac{\partial}{\partial x}+k\frac{\partial}{\partial y},\qquad
D^m f=\sum_{j=0}^m\binom mj h^{m-j}k^j
\frac{\partial^m f}{\partial x^{m-j}\partial y^j}.
$$

当增量充分小时，存在 $\theta\in(0,1)$，使泰勒公式成立：

$$
f(x_0+h,y_0+k)
=\sum_{m=0}^n\frac{D^mf(x_0,y_0)}{m!}+R_n,
$$

$$
R_n=\frac{D^{n+1}f(x_0+\theta h,y_0+\theta k)}{(n+1)!},
\qquad R_n=o(\rho^n),\quad\rho=\sqrt{h^2+k^2}.
$$

当 $(x_0,y_0)=(0,0)$ 时，称为麦克劳林公式。$n=0$ 时得到中值公式：

$$
f(x_0+h,y_0+k)-f(x_0,y_0)
=hf_x(x_0+\theta h,y_0+\theta k)
+kf_y(x_0+\theta h,y_0+\theta k).
$$

#### §6.2 多元函数的极值

若在 $P_0$ 的某邻域内恒有 $f(P)\le f(P_0)$，则称 $f(P_0)$ 为极大值，$P_0$ 为极大值点；若恒有 $f(P)\ge f(P_0)$，则称 $f(P_0)$ 为极小值，$P_0$ 为极小值点。极大值与极小值统称极值。

若 $f$ 在内点 $(x_0,y_0)$ 取得极值，且两个偏导数存在，则

$$
f_x(x_0,y_0)=f_y(x_0,y_0)=0.
$$

满足上述方程的点称为驻点。设 $f$ 在驻点附近有连续的二阶偏导数，记

$$
A=f_{xx}(x_0,y_0),\quad B=f_{xy}(x_0,y_0),\quad
C=f_{yy}(x_0,y_0),\quad\Delta=AC-B^2.
$$

则极值的二阶判别公式为

$$
\begin{array}{c|c}
\Delta>0,\ A>0&\text{极小值}\\
\Delta>0,\ A<0&\text{极大值}\\
\Delta<0&\text{非极值}\\
\Delta=0&\text{此判别式不能确定}
\end{array}
$$

连续函数在有界闭区域上取得最大值与最小值。在约束条件限制下的极值称为条件极值；没有约束条件的极值称为无条件极值。

设 $f,G$ 有连续偏导数，约束为 $G(x,y,z)=0$，且 $\nabla G\ne\boldsymbol0$。拉格朗日函数为

$$
L(x,y,z,\lambda)=f(x,y,z)+\lambda G(x,y,z).
$$

条件极值点满足

$$
f_x+\lambda G_x=0,\qquad
f_y+\lambda G_y=0,\qquad
f_z+\lambda G_z=0,\qquad G=0.
$$

对 $n$ 个变量、$m<n$ 个独立约束 $\psi_k(x_1,\ldots,x_n)=0$，拉格朗日函数及相应方程为

$$
L=f+\sum_{k=1}^m\lambda_k\psi_k,\qquad
\frac{\partial L}{\partial x_i}=0\ (i=1,\ldots,n),\qquad
\psi_k=0\ (k=1,\ldots,m),
$$

其中 $\lambda_1,\ldots,\lambda_m$ 为拉格朗日乘子。

##### 数学建模初步（三） \*

对数据 $(x_i,y_i)$（$i=1,\ldots,n$），直线 $y=ax+b$ 的最小二乘拟合以偏差平方和

$$
\varepsilon(a,b)=\sum_{i=1}^n(y_i-ax_i-b)^2
$$

为目标函数，其参数满足

$$
\begin{cases}
a\displaystyle\sum_{i=1}^n x_i^2+b\displaystyle\sum_{i=1}^n x_i
=\displaystyle\sum_{i=1}^n x_i y_i,\\
a\displaystyle\sum_{i=1}^n x_i+nb=\displaystyle\sum_{i=1}^n y_i.
\end{cases}
$$

在线性不等式约束下求线性目标函数最大值或最小值的问题称为线性规划问题，其形式为

$$
z=\sum_{j=1}^n c_jx_j,\qquad
\sum_{j=1}^n a_{ij}x_j\ge b_i\ (i=1,\ldots,m),\qquad
x_j\ge0\ (j=1,\ldots,n),
$$

其中 $a_{ij},b_i,c_j$ 为给定常数，$x_j$ 为待定变量。

!!! warning "提示"

    -   **最小二乘的目标是平方和**：$\varepsilon(a,b)=\sum(y_i-ax_i-b)^2$ 对 $a,b$ 求偏导令零得正规方程；不要误用绝对偏差和或最大偏差。

        ??? example "最小二乘拟合"
            <!-- 待补充 -->

    -   **正规方程的变量对应**：第一条方程含 $\sum x_i^2$、$\sum x_i$、$\sum x_iy_i$，第二条含 $\sum x_i$、$n$、$\sum y_i$；不要把 $a,b$ 的系数写反。

        ??? example "正规方程"
            <!-- 待补充 -->

    -   **线性规划的约束方向**：标准形式中 $\sum a_{ij}x_j\ge b_i$、$x_j\ge0$ 的方向要统一；不同方向的约束不能直接套同一套顶点法。

        ??? example "线性规划"
            <!-- 待补充 -->

    -   **模型检验与外推**：拟合优度高不代表模型正确；要检查残差、异常值和适用范围，外推预测尤其要谨慎。

        ??? example "模型检验"
            <!-- 待补充 -->

### §7 偏导数在几何上的应用

#### §7.1 矢值函数的微分法

若每个 $t$ 都对应唯一的矢量 $\boldsymbol r(t)$，则称 $\boldsymbol r$ 为矢值函数，可写为

$$
\boldsymbol r(t)=x(t)\boldsymbol i+y(t)\boldsymbol j+z(t)\boldsymbol k.
$$

当 $t$ 变化时，$\boldsymbol r(t)$ 的终点轨迹称为矢端曲线。矢值函数的导数定义为

$$
\boldsymbol r'(t)=\lim_{\Delta t\to0}
\frac{\boldsymbol r(t+\Delta t)-\boldsymbol r(t)}{\Delta t}
=x'(t)\boldsymbol i+y'(t)\boldsymbol j+z'(t)\boldsymbol k.
$$

若 $\boldsymbol r(t)$ 表示运动质点的位置，则速度、速率与加速度分别为

$$
\boldsymbol v=\boldsymbol r'(t),\qquad
v=|\boldsymbol r'(t)|=\sqrt{[x'(t)]^2+[y'(t)]^2+[z'(t)]^2},\qquad
\boldsymbol a=\boldsymbol r''(t).
$$

#### §7.2 空间曲线的切线与法平面

设曲线 $\boldsymbol r=\boldsymbol r(t)$ 在 $t_0$ 可导，$P_0=\boldsymbol r(t_0)$，且 $\boldsymbol r'(t_0)\ne\boldsymbol0$。$\boldsymbol r'(t_0)$ 是曲线在 $P_0$ 的切向量，切线方程为

$$
\boldsymbol r=\boldsymbol r(t_0)+s\boldsymbol r'(t_0),\qquad s\in\mathbb R.
$$

过 $P_0$ 且垂直于切线的平面称为法平面，其方程为

$$
x'(t_0)(x-x_0)+y'(t_0)(y-y_0)+z'(t_0)(z-z_0)=0.
$$

#### §7.3 空间曲面的切平面与法线

设曲面方程为 $F(x,y,z)=0$，$F$ 在曲面点 $P_0=(x_0,y_0,z_0)$ 附近有连续偏导数，且 $\nabla F(P_0)\ne\boldsymbol0$。曲面在 $P_0$ 的法向量为

$$
\boldsymbol n=\nabla F(P_0)=(F_x(P_0),F_y(P_0),F_z(P_0)).
$$

切平面与法线方程分别为

$$
F_x(P_0)(x-x_0)+F_y(P_0)(y-y_0)+F_z(P_0)(z-z_0)=0,
$$

$$
\boldsymbol r=\boldsymbol r_0+s\nabla F(P_0),\qquad s\in\mathbb R.
$$

对显式曲面 $z=f(x,y)$，切平面及一个法向量为

$$
z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0),\qquad
\boldsymbol n=(f_x(x_0,y_0),f_y(x_0,y_0),-1).
$$

若曲线由 $F(x,y,z)=0$、$G(x,y,z)=0$ 的交线确定，且两法向量不平行，则曲线在 $P_0$ 的切线是两个切平面的交线：

$$
\begin{cases}
\nabla F(P_0)\cdot(\boldsymbol r-\boldsymbol r_0)=0,\\
\nabla G(P_0)\cdot(\boldsymbol r-\boldsymbol r_0)=0.
\end{cases}
$$

!!! warning "提示"

    -   **法向量是梯度**：曲面 $F(x,y,z)=0$ 在 $P_0$ 的法向量为 $\nabla F(P_0)$，前提是 $\nabla F(P_0)\ne\boldsymbol0$；梯度为零的点可能是奇点，不能直接写法向量。

        ??? example "曲面的法向量"
            <!-- 待补充 -->

    -   **显式曲面法向量的符号**：$z=f(x,y)$ 的法向量可取 $(f_x,f_y,-1)$，也可取 $(-f_x,-f_y,1)$，两者方向相反；切平面公式要与所选法向量一致。

        ??? example "显式曲面的切平面"
            <!-- 待补充 -->

    -   **切平面是线性近似**：$z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)$ 只在 $P_0$ 附近近似曲面，不能把切平面当作曲面本身。

        ??? example "切平面的近似"
            <!-- 待补充 -->

    -   **交线的切线是两个切平面的交线**：曲线由 $F=G=0$ 给出时，切线同时垂直于 $\nabla F$ 和 $\nabla G$，要求两法向量不平行；否则曲线在该点可能退化。

        ??? example "空间曲线的切线"
            <!-- 待补充 -->

## 第九章 多元函数积分学

### §1 二重积分的概念

#### §1.1 二重积分的概念

设 $f$ 是有界闭区域 $D$ 上的有界函数。将 $D$ 分成 $n$ 个小区域，第 $i$ 个小区域的面积为 $\Delta\sigma_i$，在其中任取点 $(\xi_i,\eta_i)$；记各小区域直径的最大值为 $\lambda$。若下列极限存在，且与分割和取点无关，则称其为 $f$ 在 $D$ 上的二重积分：

$$
\iint_D f(x,y)\,\mathrm d\sigma
=\lim_{\lambda\to0^+}\sum_{i=1}^n f(\xi_i,\eta_i)\Delta\sigma_i.
$$

$f$ 为被积函数，$D$ 为积分区域，$\mathrm d\sigma$ 为面积元素；在直角坐标系中，$\mathrm d\sigma=\mathrm dx\,\mathrm dy$。连续函数在有界闭区域上可积。

当 $f\ge0$ 时，$\iint_Df\,\mathrm d\sigma$ 是以 $D$ 为底、以 $z=f(x,y)$ 为顶的曲顶柱体的体积。特别地，

$$
\operatorname{Area}(D)=\iint_D1\,\mathrm d\sigma.
$$

!!! warning "提示"

    -   **极限与分割、取点无关**：二重积分要求 $\lambda\to0$ 时和式极限存在，且不依赖于如何分割、如何取点；只对某一种分割成立不能说明可积。

        ??? example "二重积分的定义"
            <!-- 待补充 -->

    -   **$\lambda$ 是最大直径**：$\lambda$ 是所有小区域直径的最大值，不是面积的最大值；$\lambda\to0$ 比"面积趋于零"更强。

        ??? example "分割的细度"
            <!-- 待补充 -->

    -   **几何意义要看符号**：$f\ge0$ 时是曲顶柱体体积；$f$ 变号时是 $xOy$ 平面上、下部分体积的代数和，不能直接当面积。

        ??? example "二重积分的几何意义"
            <!-- 待补充 -->

    -   **可积的必要条件是有界**：$f$ 在 $D$ 上可积则 $f$ 有界、$D$ 有界；无界区域或无界函数属于反常二重积分，不能按常义积分处理。

        ??? example "二重积分的可积性"
            <!-- 待补充 -->

#### §1.2 二重积分的性质

以下各式中有关函数均可积，$\alpha,\beta$ 为常数：

$$
\iint_D(\alpha f+\beta g)\,\mathrm d\sigma
=\alpha\iint_Df\,\mathrm d\sigma+\beta\iint_Dg\,\mathrm d\sigma.
$$

若 $D=D_1\cup D_2$，且 $D_1,D_2$ 无公共内点，则

$$
\iint_Df\,\mathrm d\sigma
=\iint_{D_1}f\,\mathrm d\sigma+\iint_{D_2}f\,\mathrm d\sigma.
$$

$$
f\le g\ \Longrightarrow\ \iint_Df\,\mathrm d\sigma\le\iint_Dg\,\mathrm d\sigma,
\qquad
\left|\iint_Df\,\mathrm d\sigma\right|\le\iint_D|f|\,\mathrm d\sigma.
$$

若 $m\le f\le M$，则

$$
m\operatorname{Area}(D)\le\iint_Df\,\mathrm d\sigma
\le M\operatorname{Area}(D).
$$

若 $f$ 在有界闭区域 $D$ 上连续，则存在 $(\xi,\eta)\in D$，使

$$
\iint_Df\,\mathrm d\sigma=f(\xi,\eta)\operatorname{Area}(D).
$$

$f$ 在 $D$ 上的平均值为

$$
\bar f=\frac{1}{\operatorname{Area}(D)}\iint_Df\,\mathrm d\sigma.
$$

!!! warning "提示"

    -   **区域可加性要求无公共内点**：$D=D_1\cup D_2$ 且 $D_1,D_2$ 至多边界相交时才能拆开；若内部有重叠，相加会重复计算。

        ??? example "区域可加性"
            <!-- 待补充 -->

    -   **不等式性质不能反向使用**：$f\le g$ 只能推出积分不等号同向；$\left|\iint_Df\right|\le\iint_D|f|$ 也不能反推 $f$ 的符号。

        ??? example "积分不等式"
            <!-- 待补充 -->

    -   **积分中值定理的条件**：要求 $f$ 在有界闭**连通**区域上连续，$\xi,\eta$ 在 $D$ 内；不连续或区域不连通时结论不一定成立。

        ??? example "积分中值定理"
            <!-- 待补充 -->

    -   **平均值的分母是面积**：$\bar f=\dfrac{1}{\operatorname{Area}(D)}\iint_Df\,\mathrm d\sigma$，不是除以 $1$ 或周长；面积为零的区域不能这样定义平均值。

        ??? example "函数的平均值"
            <!-- 待补充 -->

### §2 二重积分的计算

#### §2.1 在直角坐标系中计算二重积分

$x$ 型区域与 $y$ 型区域分别表示为

$$
D_x=\{(x,y):a\le x\le b,\ \varphi_1(x)\le y\le\varphi_2(x)\},
$$

$$
D_y=\{(x,y):c\le y\le d,\ \psi_1(y)\le x\le\psi_2(y)\}.
$$

对连续被积函数，有

$$
\iint_{D_x}f(x,y)\,\mathrm dx\,\mathrm dy
=\int_a^b\mathrm dx\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,\mathrm dy,
$$

$$
\iint_{D_y}f(x,y)\,\mathrm dx\,\mathrm dy
=\int_c^d\mathrm dy\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)\,\mathrm dx.
$$

在矩形 $[a,b]\times[c,d]$ 上，

$$
\int_a^b\mathrm dx\int_c^df(x,y)\,\mathrm dy
=\int_c^d\mathrm dy\int_a^bf(x,y)\,\mathrm dx.
$$

!!! warning "提示"

    -   **积分次序要与区域类型匹配**：$x$ 型区域先对 $y$ 积分、$y$ 型区域先对 $x$ 积分；内层积分的上下限可以是外层变量的函数，外层上下限必须是常数。

        ??? example "选择积分次序"
            <!-- 待补充 -->

    -   **上下限不能写反**：内层下限对应区域的下边界、上限对应上边界；写反会得到相反数或错误区域。

        ??? example "积分限的确定"
            <!-- 待补充 -->

    -   **一般区域交换次序要重新画图**：只有矩形区域在连续条件下可任意交换；一般区域交换 $dx,dy$ 次序时，必须重新用不等式描述区域并重新定限。

        ??? example "交换积分次序"
            <!-- 待补充 -->

    -   **先画图再分块**：求交点、确定区域边界，必要时把区域分成若干 $x$ 型或 $y$ 型小块；不要只凭被积函数选次序。

        ??? example "分块积分"
            <!-- 待补充 -->

???+ example "例3"

    计算积分 $\displaystyle\int_0^1x^2\,\mathrm dx\int_x^1e^{-y^2}\,\mathrm dy$。

    ??? success "解析"

        显然这个累次积分不能直接计算出来，因为 $e^{-y^2}$ 的原函数不能用初等函数表示。因此，有必要把它还原成二重积分，转化为另一顺序的累次积分进行求解。

        由题意知，$\sigma=\{(x,y):x\le y\le1,\ 0\le x\le1\}$。由于 $\sigma$ 可写成 $y$ 型区域：$0\le x\le y,\ 0\le y\le1$，所以

        $$
        \begin{aligned}
        \int_0^1x^2\,\mathrm dx\int_x^1e^{-y^2}\,\mathrm dy
        &=\iint_\sigma x^2e^{-y^2}\,\mathrm dx\,\mathrm dy
        =\int_0^1\mathrm dy\int_0^y x^2e^{-y^2}\,\mathrm dx\\
        &=\int_0^1\left[\left.e^{-y^2}\frac{x^3}{3}\right|_0^y\right]\mathrm dy
        =\frac13\int_0^1e^{-y^2}y^3\,\mathrm dy\\
        &=\frac16\int_0^1e^{-y^2}y^2\,\mathrm d(y^2)
        \overset{y^2=t}{=}\frac16\int_0^1e^{-t}t\,\mathrm dt.
        \end{aligned}
        $$

        由分部积分法，可得

        $$
        \text{原式}=\frac16-\frac1{3e}.
        $$

#### §2.2 在极坐标系中计算二重积分

当被积函数中含有 $x^2+y^2$ 的表达式和积分区域是圆域或圆域的一部分时，利用极坐标变换可以简化计算。

极坐标变换及面积元素为

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad r\ge0,
\qquad \mathrm d\sigma=r\,\mathrm dr\,\mathrm d\theta.
$$

若积分区域表示为

$$
D=\{(r,\theta):\alpha\le\theta\le\beta,\ r_1(\theta)\le r\le r_2(\theta)\},
$$

则

$$
\iint_Df(x,y)\,\mathrm d\sigma
=\int_\alpha^\beta\mathrm d\theta
\int_{r_1(\theta)}^{r_2(\theta)}f(r\cos\theta,r\sin\theta)r\,\mathrm dr.
$$

!!! warning "提示"

    -   **面积元素不要漏 $r$**：$\mathrm d\sigma=r\,\mathrm dr\,\mathrm d\theta$，这是极坐标换元雅可比为 $r$ 的结果；漏掉 $r$ 是最常见的错误。

        ??? example "极坐标的面积元素"
            <!-- 待补充 -->

    -   **被积函数要全部换成极坐标**：$f(x,y)$ 应写成 $f(r\cos\theta,r\sin\theta)$，不能保留 $x,y$。

        ??? example "极坐标下的被积函数"
            <!-- 待补充 -->

    -   **积分限要覆盖整个区域**：圆 $x^2+y^2\le R^2$ 对应 $0\le r\le R$、$0\le\theta\le2\pi$；扇形、圆环的 $\theta$ 与 $r$ 范围要按区域确定。

        ??? example "极坐标的积分限"
            <!-- 待补充 -->

    -   **极点与边界要单独检查**：$r=0$ 处极角无定义，但积分值不受影响；若区域包含极点，$\theta$ 的范围要覆盖一周，不能只取主值区间。

        ??? example "含极点的区域"
            <!-- 待补充 -->

???+ example "例7"

    计算积分 $\displaystyle\iint_\sigma e^{-(x^2+y^2)}\,\mathrm d\sigma$，其中 $\sigma$ 是由圆 $x^2+y^2=R^2$ 所围成的区域。

    ??? success "解析"

        经极坐标变换 $x=r\cos\theta,\ y=r\sin\theta$，得 $\sigma:0\le\theta\le2\pi,\ 0\le r\le R$，于是

        $$
        \begin{aligned}
        \iint_\sigma e^{-(x^2+y^2)}\,\mathrm d\sigma
        &=\int_0^{2\pi}\mathrm d\theta\int_0^R e^{-r^2}r\,\mathrm dr\\
        &=2\pi\int_0^R e^{-r^2}r\,\mathrm dr
        =-\pi\int_0^R e^{-r^2}\,\mathrm d(-r^2)\\
        &=-\pi\left.e^{-r^2}\right|_0^R
        =\pi(1-e^{-R^2}).
        \end{aligned}
        $$

#### §2.3 在一般曲线坐标中计算二重积分 \*

设变换 $x=x(u,v),y=y(u,v)$ 将区域 $G$ 与 $D$ 对应，具有连续偏导数，且在区域内部一一对应、雅可比行列式不为零。记

$$
J=\frac{\partial(x,y)}{\partial(u,v)}
=\begin{vmatrix}x_u&x_v\\y_u&y_v\end{vmatrix}.
$$

二重积分的换元公式为

$$
\iint_Df(x,y)\,\mathrm dx\,\mathrm dy
=\iint_Gf(x(u,v),y(u,v))|J|\,\mathrm du\,\mathrm dv.
$$

!!! warning "提示"

    -   **换元要乘 $|J|$**：$\iint_Df\,\mathrm dx\,\mathrm dy=\iint_Gf(x(u,v),y(u,v))|J|\,\mathrm du\,\mathrm dv$，绝对值不能丢；$J$ 为负时只改变符号，面积伸缩比仍为正。

        ??? example "一般换元公式"
            <!-- 待补充 -->

    -   **变换必须在内部一一对应**：要求 $G$ 与 $D$ 在区域内部一一对应、$J\ne0$；边界上 $J=0$ 可以允许，但内部退化会导致换元失败。

        ??? example "换元的条件"
            <!-- 待补充 -->

    -   **雅可比的行列顺序要对**：$J=\dfrac{\partial(x,y)}{\partial(u,v)}=\begin{vmatrix}x_u&x_v\\y_u&y_v\end{vmatrix}$，分子是旧变量、分母是新变量，不要写反。

        ??? example "雅可比行列式"
            <!-- 待补充 -->

    -   **积分区域也要换**：换元后积分区域从 $D$ 变为 $G$，不能仍用原来的 $x,y$ 范围；极坐标就是 $x=r\cos\theta,y=r\sin\theta$ 的特例。

        ??? example "换元后的区域"
            <!-- 待补充 -->

### §3 三重积分

#### §3.1 三重积分的概念

设 $f$ 是有界闭区域 $V$ 上的有界函数。将 $V$ 分成体积为 $\Delta V_i$ 的小区域，在各小区域内任取点 $(\xi_i,\eta_i,\zeta_i)$，记小区域直径的最大值为 $\lambda$。若下列极限存在且与分割、取点无关，则称其为三重积分：

$$
\iiint_Vf(x,y,z)\,\mathrm dV
=\lim_{\lambda\to0^+}\sum_{i=1}^nf(\xi_i,\eta_i,\zeta_i)\Delta V_i.
$$

$\mathrm dV$ 为体积元素；在直角坐标系中，$\mathrm dV=\mathrm dx\,\mathrm dy\,\mathrm dz$。连续函数在有界闭区域上可积，且

$$
\operatorname{Vol}(V)=\iiint_V1\,\mathrm dV.
$$

!!! warning "提示"

    -   **三重积分是体积分**：$\mathrm dV$ 是体积元素，$f=1$ 时积分等于区域体积；它不是"四维体积"，几何意义由 $f$ 的含义决定。

        ??? example "三重积分的意义"
            <!-- 待补充 -->

    -   **可积的必要条件**：$f$ 在有界闭区域 $V$ 上有界；连续函数一定可积，但可积不要求连续。

        ??? example "三重积分的可积性"
            <!-- 待补充 -->

    -   **极限与分割、取点无关**：与二重积分类似，$\lambda$ 是所有小区域直径的最大值，极限必须对任意分割和取点都相同。

        ??? example "三重积分的定义"
            <!-- 待补充 -->

    -   **无界区域或无界函数另作反常积分**：常义三重积分要求区域有界、函数有界；否则需按反常积分定义判断敛散性。

        ??? example "反常三重积分"
            <!-- 待补充 -->

#### §3.2 在直角坐标系中计算三重积分

若

$$
V=\{(x,y,z):(x,y)\in D,\ z_1(x,y)\le z\le z_2(x,y)\},
$$

则

$$
\iiint_Vf\,\mathrm dV
=\iint_D\left[\int_{z_1(x,y)}^{z_2(x,y)}f(x,y,z)\,\mathrm dz\right]\mathrm dx\,\mathrm dy.
$$

若 $c\le z\le d$，$D_z$ 为 $V$ 在高度 $z$ 处的截面在 $Oxy$ 平面上的投影，则

$$
\iiint_Vf\,\mathrm dV
=\int_c^d\left[\iint_{D_z}f(x,y,z)\,\mathrm dx\,\mathrm dy\right]\mathrm dz.
$$

!!! warning "提示"

    -   **"先一后二"与"先二后一"要选对**：先 $z$ 后 $xy$ 时，$z$ 的上下限是 $x,y$ 的函数；先 $xy$ 后 $z$ 时，$D_z$ 是高度 $z$ 处的截面投影。

        ??? example "两种积分次序"
            <!-- 待补充 -->

    -   **投影区域不要弄错**：$D$ 是 $V$ 在 $Oxy$ 平面上的投影，$D_z$ 是固定 $z$ 时的截面投影；两者不同，不能混用。

        ??? example "投影区域与截面"
            <!-- 待补充 -->

    -   **内层上下限是函数、外层是常数**：与二重积分类似，最外层积分限必须是常数；写反会导致区域描述错误。

        ??? example "三重积分的积分限"
            <!-- 待补充 -->

    -   **交换次序要重新描述区域**：$dx,dy,dz$ 的书写顺序可以换，但累次积分的次序不能随意交换；换次序必须重新确定各变量的范围。

        ??? example "交换三重积分次序"
            <!-- 待补充 -->

#### §3.3 在柱面坐标系、球面坐标系及一般曲面坐标系中计算三重积分

柱面坐标变换为

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad z=z,
\qquad \mathrm dV=r\,\mathrm dr\,\mathrm d\theta\,\mathrm dz,
$$

其中 $r\ge0$ 为点到 $Oz$ 轴的距离，$\theta$ 为方位角。

$$
\iiint_Vf(x,y,z)\,\mathrm dV
=\iiint_{V'}f(r\cos\theta,r\sin\theta,z)r\,\mathrm dr\,\mathrm d\theta\,\mathrm dz.
$$

球面坐标变换为

$$
x=\rho\sin\varphi\cos\theta,\quad
y=\rho\sin\varphi\sin\theta,\quad
z=\rho\cos\varphi,
$$

$$
\mathrm dV=\rho^2\sin\varphi\,\mathrm d\rho\,\mathrm d\varphi\,\mathrm d\theta.
$$

其中 $\rho\ge0$ 为点到原点的距离，$0\le\varphi\le\pi$ 为与 $Oz$ 正向的夹角，$\theta$ 为方位角。

$$
\iiint_Vf\,\mathrm dV
=\iiint_{V'}f(\rho\sin\varphi\cos\theta,
\rho\sin\varphi\sin\theta,\rho\cos\varphi)
\rho^2\sin\varphi\,\mathrm d\rho\,\mathrm d\varphi\,\mathrm d\theta.
$$

设一般变换 $x=x(u,v,w),y=y(u,v,w),z=z(u,v,w)$ 具有连续偏导数、在区域内部一一对应，且

$$
J=\frac{\partial(x,y,z)}{\partial(u,v,w)}\ne0,
$$

则

$$
\iiint_Vf(x,y,z)\,\mathrm dV
=\iiint_{V'}f(x(u,v,w),y(u,v,w),z(u,v,w))
|J|\,\mathrm du\,\mathrm dv\,\mathrm dw.
$$

???+ example "例5：解法二"

    计算 $\displaystyle\iiint_V z\,\mathrm dV$，其中 $V$ 是由球面 $x^2+y^2+z^2=4$ 及抛物面 $3z=x^2+y^2$ 所围成（在抛物面内的那一部分）的立体区域。

    ??? success "解析"

        经柱面坐标变换，上曲面方程为 $r^2+z^2=4$，即 $z=\sqrt{4-r^2}$；下曲面为 $3z=r^2$，即 $z=\dfrac{r^2}{3}$。有

        $$
        V:\frac{r^2}{3}\le z\le\sqrt{4-r^2},\qquad
        0\le\theta\le2\pi,\quad0\le r\le\sqrt3,
        $$

        于是

        $$
        \begin{aligned}
        \iiint_V z\,\mathrm dV
        &=\int_0^{2\pi}\mathrm d\theta\int_0^{\sqrt3}r\,\mathrm dr
        \int_{r^2/3}^{\sqrt{4-r^2}}z\,\mathrm dz\\
        &=\int_0^{2\pi}\mathrm d\theta\int_0^{\sqrt3}
        \frac12r\left(4-r^2-\frac{r^4}{9}\right)\,\mathrm dr\\
        &=\pi\int_0^{\sqrt3}\left(4r-r^3-\frac{r^5}{9}\right)\,\mathrm dr
        =\frac{13}{4}\pi.
        \end{aligned}
        $$

通常利用柱面坐标变换时，首先求出 $V$ 在 $Oxy$ 平面上的投影区域 $\sigma_{xy}$，确定上曲面、下曲面，然后用柱面坐标变换，把上曲面、下曲面表示成 $r,\theta$ 的函数，投影区域用 $r,\theta$ 的不等式来表示。

##### 四、重积分换元公式的证明 \*

??? info "二重积分换元公式的推导"

    在平面上，设由函数组 $u=u(x,y),\ v=v(x,y)$（$u,v$ 是单值函数且有连续的偏导数）可以唯一地确定一对单值反函数

    $$
    x=x(u,v),\qquad y=y(u,v).
    $$

    现在来考虑二重积分 $\displaystyle\iint_\sigma f(x,y)\,\mathrm d\sigma$ 在曲线坐标 $(u,v)$ 下的表达式。

    用两族坐标曲线将区域 $\sigma$ 分成若干个小区域，再求其中规则的小区域的面积。

    设小区域 $M_1M_2M_4M_3$ 是由两对邻近坐标线所围成，因 $\mathrm du,\mathrm dv$ 很小，所以可将该小区域看成是一个平行四边形。这个平行四边形的顶点 $M_4,M_2,M_3$ 的坐标（不计高阶无穷小）分别是

    $$
    \begin{aligned}
    M_4:&\quad x_1=x(u,v),\quad y_1=y(u,v);\\
    M_2:&\quad x_2=x(u+\mathrm du,v)=x(u,v)+x_u\,\mathrm du,\\
    &\quad y_2=y(u+\mathrm du,v)=y(u,v)+y_u\,\mathrm du;\\
    M_3:&\quad x_3=x(u,v+\mathrm dv)=x(u,v)+x_v\,\mathrm dv,\\
    &\quad y_3=y(u,v+\mathrm dv)=y(u,v)+y_v\,\mathrm dv.
    \end{aligned}
    $$

    因此

    $$
    \overrightarrow{M_4M_2}=x_u\,\mathrm du\,\mathbf i+y_u\,\mathrm du\,\mathbf j,
    \qquad
    \overrightarrow{M_4M_3}=x_v\,\mathrm dv\,\mathbf i+y_v\,\mathrm dv\,\mathbf j,
    $$

    $$
    \overrightarrow{M_4M_2}\times\overrightarrow{M_4M_3}
    =\begin{vmatrix}x_u&y_u\\x_v&y_v\end{vmatrix}
    \mathrm du\,\mathrm dv\,\mathbf k.
    $$

    通常记

    $$
    \frac{\partial(x,y)}{\partial(u,v)}
    =\begin{vmatrix}x_u&x_v\\y_u&y_v\end{vmatrix},
    $$

    叫做 $x,y$ 关于 $u,v$ 的雅可比行列式。于是，小区域 $M_1M_2M_4M_3$ 的面积取为

    $$
    \left|\overrightarrow{M_4M_2}\times\overrightarrow{M_4M_3}\right|
    =\left|\frac{\partial(x,y)}{\partial(u,v)}\right|\mathrm du\,\mathrm dv.
    $$

    又由 $f(x,y)=f(x(u,v),y(u,v))$，得

    $$
    \iint_\sigma f(x,y)\,\mathrm d\sigma
    =\iint_{\sigma'}f(x(u,v),y(u,v))
    \left|\frac{\partial(x,y)}{\partial(u,v)}\right|\mathrm du\,\mathrm dv,
    $$

    其中右边的 $\sigma'$ 用 $u,v$ 的不等式来表示。

??? info "三重积分换元公式的推导"

    在空间中，设由函数组 $u=u(x,y,z),\ v=v(x,y,z),\ w=w(x,y,z)$（单值函数且有连续偏导数）可以唯一地确定一组单值反函数

    $$
    x=x(u,v,w),\quad y=y(u,v,w),\quad z=z(u,v,w).
    $$

    用三族坐标曲面将立体 $V$ 分成若干个小立体区域，再求其中规则的小立体区域的体积。

    设小区域是由三对相邻的坐标曲面所围成。因 $\mathrm du,\mathrm dv,\mathrm dw$ 很小，故可将该小区域看成一个平行六面体。这个平行六面体的顶点 $M_1$ 与相邻的三个顶点 $M_2,M_4,M_5$ 的坐标（不计高阶无穷小）分别是

    $$
    \begin{aligned}
    M_1:&\quad (x,y,z),\\
    M_2:&\quad (x+x_u\,\mathrm du,\ y+y_u\,\mathrm du,\ z+z_u\,\mathrm du),\\
    M_4:&\quad (x+x_v\,\mathrm dv,\ y+y_v\,\mathrm dv,\ z+z_v\,\mathrm dv),\\
    M_5:&\quad (x+x_w\,\mathrm dw,\ y+y_w\,\mathrm dw,\ z+z_w\,\mathrm dw).
    \end{aligned}
    $$

    因此

    $$
    \begin{aligned}
    \overrightarrow{M_1M_2}&=(x_u\mathbf i+y_u\mathbf j+z_u\mathbf k)\,\mathrm du,\\
    \overrightarrow{M_1M_4}&=(x_v\mathbf i+y_v\mathbf j+z_v\mathbf k)\,\mathrm dv,\\
    \overrightarrow{M_1M_5}&=(x_w\mathbf i+y_w\mathbf j+z_w\mathbf k)\,\mathrm dw,
    \end{aligned}
    $$

    $$
    (\overrightarrow{M_1M_2}\times\overrightarrow{M_1M_4})\cdot\overrightarrow{M_1M_5}
    =\begin{vmatrix}x_u&x_v&x_w\\y_u&y_v&y_w\\z_u&z_v&z_w\end{vmatrix}
    \mathrm du\,\mathrm dv\,\mathrm dw.
    $$

    我们把

    $$
    \frac{\partial(x,y,z)}{\partial(u,v,w)}
    =\begin{vmatrix}x_u&x_v&x_w\\y_u&y_v&y_w\\z_u&z_v&z_w\end{vmatrix}
    $$

    称为 $x,y,z$ 关于 $u,v,w$ 的三阶雅可比行列式。于是规则小立体区域的体积

    $$
    \mathrm dV=
    \left|(\overrightarrow{M_1M_2}\times\overrightarrow{M_1M_4})\cdot\overrightarrow{M_1M_5}\right|
    =\left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|
    \mathrm du\,\mathrm dv\,\mathrm dw.
    $$

    又 $f(x,y,z)=f(x(u,v,w),y(u,v,w),z(u,v,w))$，于是可以得到三重积分从直角坐标 $(x,y,z)$ 变换为曲面坐标 $(u,v,w)$ 的换元公式

    $$
    \iiint_V f(x,y,z)\,\mathrm dV
    =\iiint_{V'}f(x(u,v,w),y(u,v,w),z(u,v,w))
    \left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|
    \mathrm du\,\mathrm dv\,\mathrm dw,
    $$

    其中右边的立体 $V'$ 用含 $u,v,w$ 的不等式来表示区域。

!!! warning "提示"

    -   **证明的核心是局部线性化**：把小块近似为平行四边形（或平行六面体），面积（体积）伸缩比由雅可比行列式的绝对值给出；误差是高阶小量。

        ??? example "换元公式的证明思路"
            <!-- 待补充 -->

    -   **$|J|$ 的绝对值不能省**：雅可比可能为负，但面积、体积的伸缩比为正；证明中取绝对值，公式中也要取绝对值。

        ??? example "雅可比与伸缩比"
            <!-- 待补充 -->

    -   **条件不能省**：变换要有连续偏导数、在区域内部一一对应、$J\ne0$；否则局部近似和可加性可能失效。

        ??? example "换元公式的条件"
            <!-- 待补充 -->

    -   **边界零面积不影响积分**：证明中边界上的退化不影响积分值；但若内部大片区域 $J=0$，换元不成立。

        ??? example "边界与内部退化"
            <!-- 待补充 -->

### §4 第一类曲线积分与第一类曲面积分

#### §4.1 第一类曲线积分

将光滑曲线 $L$ 分成弧长为 $\Delta s_i$ 的小段，各段任取点 $P_i$，记最大弧长为 $\lambda$。若极限存在且与分割、取点无关，定义

$$
\int_Lf(P)\,\mathrm ds
=\lim_{\lambda\to0^+}\sum_{i=1}^nf(P_i)\Delta s_i.
$$

$\mathrm ds$ 为弧长元素；第一类曲线积分与曲线方向无关，且

$$
\operatorname{Length}(L)=\int_L1\,\mathrm ds.
$$

若 $L$ 的参数方程为 $(x(t),y(t),z(t))$，$\alpha\le t\le\beta$，各分量一阶连续可微且导数不同时为零，则

$$
\mathrm ds=\sqrt{x'(t)^2+y'(t)^2+z'(t)^2}\,\mathrm dt,
$$

$$
\int_Lf\,\mathrm ds
=\int_\alpha^\beta f(x(t),y(t),z(t))
\sqrt{x'(t)^2+y'(t)^2+z'(t)^2}\,\mathrm dt.
$$

平面曲线 $y=\varphi(x)$，$a\le x\le b$，以及极坐标曲线 $r=r(\theta)$，$\alpha\le\theta\le\beta$，分别有

$$
\int_Lf(x,y)\,\mathrm ds
=\int_a^bf(x,\varphi(x))\sqrt{1+\varphi'(x)^2}\,\mathrm dx,
$$

$$
\int_Lf(x,y)\,\mathrm ds
=\int_\alpha^\beta f(r(\theta)\cos\theta,r(\theta)\sin\theta)
\sqrt{r(\theta)^2+r'(\theta)^2}\,\mathrm d\theta.
$$

!!! warning "提示"

    -   **第一类曲线积分与方向无关**：$\int_Lf\,\mathrm ds$ 只依赖曲线本身，反向不改变符号；第二类曲线积分才与方向有关。

        ??? example "第一类曲线积分的方向"
            <!-- 待补充 -->

    -   **弧长元素要乘 $|\boldsymbol r'(t)|$**：$\mathrm ds=\sqrt{x'^2+y'^2+z'^2}\,\mathrm dt$，不是 $\mathrm dt$，也不是 $\boldsymbol r'(t)\,\mathrm dt$。

        ??? example "弧长元素"
            <!-- 待补充 -->

    -   **参数范围与光滑性**：要求 $\alpha\le t\le\beta$（$\alpha<\beta$）、各分量一阶连续可微且导数不同时为零；否则可能不是光滑曲线。

        ??? example "参数曲线的条件"
            <!-- 待补充 -->

    -   **被积函数要代入曲线方程**：$f(x,y,z)$ 应写成 $f(x(t),y(t),z(t))$，不能保留原变量；极坐标曲线还要用 $x=r\cos\theta,y=r\sin\theta$。

        ??? example "曲线积分的代入"
            <!-- 待补充 -->

???+ example "例2"

    计算 $\displaystyle\int_Lx^2\,\mathrm ds$，其中 $L$ 为球面 $x^2+y^2+z^2=a^2$ 被平面 $x+y+z=0$ 所截得的圆周。

    ??? success "解析"

        由对称性知

        $$
        \int_Lx^2\,\mathrm ds=\int_Ly^2\,\mathrm ds=\int_Lz^2\,\mathrm ds,
        $$

        所以

        $$
        \int_Lx^2\,\mathrm ds
        =\frac13\int_L(x^2+y^2+z^2)\,\mathrm ds
        =\frac{a^2}{3}\int_L\mathrm ds
        =\frac23\pi a^3.
        $$

#### §4.2 第一类曲面积分

将光滑曲面 $S$ 分成面积为 $\Delta S_i$ 的小块，各块任取点 $P_i$，记小块直径的最大值为 $\lambda$。若极限存在且与分割、取点无关，定义

$$
\iint_Sf(P)\,\mathrm dS
=\lim_{\lambda\to0^+}\sum_{i=1}^nf(P_i)\Delta S_i.
$$

第一类曲面积分与曲面的侧无关，且

$$
\operatorname{Area}(S)=\iint_S1\,\mathrm dS.
$$

若 $S:z=z(x,y)$，在 $Oxy$ 平面上的投影为 $D_{xy}$，则

$$
\mathrm dS=\sqrt{1+z_x^2+z_y^2}\,\mathrm dx\,\mathrm dy,
$$

$$
\iint_Sf\,\mathrm dS
=\iint_{D_{xy}}f(x,y,z(x,y))\sqrt{1+z_x^2+z_y^2}\,\mathrm dx\,\mathrm dy.
$$

若 $S:y=y(x,z)$ 或 $S:x=x(y,z)$，则分别有

$$
\iint_Sf\,\mathrm dS
=\iint_{D_{xz}}f(x,y(x,z),z)\sqrt{1+y_x^2+y_z^2}\,\mathrm dx\,\mathrm dz,
$$

$$
\iint_Sf\,\mathrm dS
=\iint_{D_{yz}}f(x(y,z),y,z)\sqrt{1+x_y^2+x_z^2}\,\mathrm dy\,\mathrm dz.
$$

!!! warning "提示"

    -   **第一类曲面积分与侧无关**：$\iint_Sf\,\mathrm dS$ 不区分曲面的正侧；第二类曲面积分才与侧有关。

        ??? example "第一类曲面积分的侧"
            <!-- 待补充 -->

    -   **面积元素不要漏根号**：$S:z=z(x,y)$ 时 $\mathrm dS=\sqrt{1+z_x^2+z_y^2}\,\mathrm dx\,\mathrm dy$；漏掉根号会把曲面面积算成投影面积。

        ??? example "曲面的面积元素"
            <!-- 待补充 -->

    -   **投影区域的选择**：根据曲面方程选择投影到 $Oxy$、$Ozx$ 或 $Oyz$ 平面；投影区域是曲面在该平面上的投影，不是曲面本身。

        ??? example "曲面积分的投影"
            <!-- 待补充 -->

    -   **被积函数要代入曲面方程**：$f(x,y,z)$ 应写成 $f(x,y,z(x,y))$；曲面面积是 $\iint_S1\,\mathrm dS$，不是 $\iint_S\mathrm dS$ 的误写。

        ??? example "曲面积分的计算"
            <!-- 待补充 -->

### §5 点函数积分的概念、性质及应用

设 $\Omega$ 为有界闭的空间形体，$f(P)$ 为其上的点函数。以 $\Delta\Omega_i$ 表示分块的度量，$\lambda$ 为各块直径的最大值；若下列极限存在且与分割、取点无关，则定义点函数积分

$$
\int_\Omega f(P)\,\mathrm d\Omega
=\lim_{\lambda\to0^+}\sum_{i=1}^nf(P_i)\Delta\Omega_i.
$$

$\mathrm d\Omega$ 在区间、曲线、平面区域、曲面和空间区域上，分别表示 $\mathrm dx,\mathrm ds,\mathrm d\sigma,\mathrm dS,\mathrm dV$。$f$ 连续时可积。

$$
\int_\Omega1\,\mathrm d\Omega=|\Omega|,
\qquad
\int_\Omega(\alpha f+\beta g)\,\mathrm d\Omega
=\alpha\int_\Omega f\,\mathrm d\Omega+\beta\int_\Omega g\,\mathrm d\Omega.
$$

其中 $|\Omega|$ 为相应的长度、面积或体积。对无公共内点的分块，积分具有区域可加性；并有

$$
f\le g\ \Longrightarrow\ \int_\Omega f\,\mathrm d\Omega\le\int_\Omega g\,\mathrm d\Omega,
\qquad
\left|\int_\Omega f\,\mathrm d\Omega\right|\le\int_\Omega|f|\,\mathrm d\Omega.
$$

若 $m\le f\le M$，则

$$
m|\Omega|\le\int_\Omega f\,\mathrm d\Omega\le M|\Omega|.
$$

若 $f$ 在有界闭连通区域 $\Omega$ 上连续，则存在 $P^*\in\Omega$，使

$$
\int_\Omega f(P)\,\mathrm d\Omega=f(P^*)|\Omega|,
\qquad
\bar f=\frac1{|\Omega|}\int_\Omega f(P)\,\mathrm d\Omega.
$$

若 $\Omega=\Omega_+\cup\Omega_-$ 关于坐标平面 $x=0$ 对称，则

$$
\int_\Omega f\,\mathrm d\Omega
=\begin{cases}
0,&f(-x,y,z)=-f(x,y,z),\\
2\displaystyle\int_{\Omega_+}f\,\mathrm d\Omega,&f(-x,y,z)=f(x,y,z).
\end{cases}
$$

其余坐标平面或平面区域中的坐标轴对应的公式相同。

密度为 $\rho(P)$ 的物体的质量与质心为

$$
M=\int_\Omega\rho(P)\,\mathrm d\Omega,
$$

$$
\bar x=\frac1M\int_\Omega x\rho(P)\,\mathrm d\Omega,\qquad
\bar y=\frac1M\int_\Omega y\rho(P)\,\mathrm d\Omega,\qquad
\bar z=\frac1M\int_\Omega z\rho(P)\,\mathrm d\Omega,
\qquad M>0.
$$

对轴 $L$ 的转动惯量为

$$
I_L=\int_\Omega d(P,L)^2\rho(P)\,\mathrm d\Omega,
$$

其中 $d(P,L)$ 为点到轴的距离。特别地，

$$
I_x=\int_\Omega(y^2+z^2)\rho\,\mathrm d\Omega,\quad
I_y=\int_\Omega(z^2+x^2)\rho\,\mathrm d\Omega,\quad
I_z=\int_\Omega(x^2+y^2)\rho\,\mathrm d\Omega.
$$

物体对质点 $P_0=(x_0,y_0,z_0)$ 的引力为

$$
\mathbf F=Gm\int_\Omega\rho(P)
\frac{(x-x_0)\mathbf i+(y-y_0)\mathbf j+(z-z_0)\mathbf k}{r^3}
\,\mathrm d\Omega,
\qquad r=\sqrt{(x-x_0)^2+(y-y_0)^2+(z-z_0)^2},
$$

其中 $G$ 为万有引力常量，$m$ 为质点质量。

!!! warning "提示"

    -   **不同度量的积分不能混用**：$\mathrm d\Omega$ 在区间、曲线、平面区域、曲面、空间区域上分别是 $\mathrm dx,\mathrm ds,\mathrm d\sigma,\mathrm dS,\mathrm dV$；被积函数与度量要匹配。

        ??? example "点函数积分的类型"
            <!-- 待补充 -->

    -   **对称性公式要求区域对称且函数奇偶性匹配**：关于 $x=0$ 对称时，$f(-x,y,z)=-f(x,y,z)$ 积分为 $0$，偶函数则为 $2\int_{\Omega_+}$；只对相应变量成立。

        ??? example "对称区域上的积分"
            <!-- 待补充 -->

    -   **质心公式的分母是质量**：$\bar x=\dfrac1M\int_\Omega x\rho\,\mathrm d\Omega$，要求 $M>0$；均匀物体 $M=\rho|\Omega|$，不能漏密度。

        ??? example "质心"
            <!-- 待补充 -->

    -   **转动惯量用点到轴的距离平方**：$I_x=\int_\Omega(y^2+z^2)\rho\,\mathrm d\Omega$，$I_y$、$I_z$ 对应交换变量；不要写成到原点的距离。

        ??? example "转动惯量"
            <!-- 待补充 -->

## 第十章 第二类曲线积分与第二类曲面积分

### §1 第二类曲线积分

#### §1.1 第二类曲线积分的概念

设有向光滑曲线 $L$ 的单位切矢量为

$$
\boldsymbol\tau=(\cos\alpha,\cos\beta,\cos\gamma),
$$

矢量函数 $\mathbf A=(P,Q,R)$ 在 $L$ 上连续。$\mathbf A$ 沿 $L$ 的第二类曲线积分定义为

$$
\int_L\mathbf A\cdot\boldsymbol\tau\,\mathrm ds
=\int_L(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,\mathrm ds
=\int_LP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz.
$$

有向弧元素为

$$
\mathrm d\mathbf s=\boldsymbol\tau\,\mathrm ds=(\mathrm dx,\mathrm dy,\mathrm dz).
$$

反向曲线记为 $-L$，则

$$
\int_{-L}\mathbf A\cdot\mathrm d\mathbf s
=-\int_L\mathbf A\cdot\mathrm d\mathbf s.
$$

若 $L=L_1+L_2$，两段方向与 $L$ 一致，则

$$
\int_L\mathbf A\cdot\mathrm d\mathbf s
=\int_{L_1}\mathbf A\cdot\mathrm d\mathbf s+\int_{L_2}\mathbf A\cdot\mathrm d\mathbf s.
$$

若参数方程为 $\mathbf r(t)=(x(t),y(t),z(t))$，起点、终点对应参数为 $t_A,t_B$，则

$$
\int_LP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz
=\int_{t_A}^{t_B}
\bigl[P(\mathbf r(t))x'(t)+Q(\mathbf r(t))y'(t)+R(\mathbf r(t))z'(t)\bigr]\,\mathrm dt.
$$

力场 $\mathbf F$ 沿 $L$ 所做的功为

$$
W=\int_L\mathbf F\cdot\mathrm d\mathbf s.
$$

!!! warning "提示"

    -   **与方向有关**：第二类曲线积分沿反向曲线变号，$\displaystyle\int_{-L}\mathbf A\cdot\mathrm d\mathbf s=-\int_L\mathbf A\cdot\mathrm d\mathbf s$；第一类曲线积分则与方向无关。

        ??? example "第二类曲线积分的方向"
            <!-- 待补充 -->

    -   **参数化时积分限按起点到终点**：$\displaystyle\int_L P\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz=\int_{t_A}^{t_B}[\cdots]\,\mathrm dt$，$t_A$ 是起点参数、$t_B$ 是终点参数，不要求 $t_A<t_B$。

        ??? example "参数化计算"
            <!-- 待补充 -->

    -   **$\mathrm dx=x'(t)\,\mathrm dt$ 不要漏乘**：代入参数方程时，$P\,\mathrm dx$ 要写成 $P(x(t),y(t),z(t))x'(t)\,\mathrm dt$，每一项都要乘对应的导数。

        ??? example "曲线积分的参数化"
            <!-- 待补充 -->

    -   **分段曲线方向要一致**：$L=L_1+L_2$ 时，两段都必须沿 $L$ 的方向；若其中一段反向，要单独加负号。

        ??? example "分段曲线的积分"
            <!-- 待补充 -->

#### §1.2 格林公式

设平面有界闭区域 $D$ 的边界 $\partial D$ 由分段光滑曲线组成，$P,Q$ 在 $D$ 上连续且具有一阶连续偏导数，则

$$
\oint_{\partial D}P\,\mathrm dx+Q\,\mathrm dy
=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\,\mathrm dx\,\mathrm dy.
$$

边界取正向，即沿边界行进时区域 $D$ 位于左侧。

??? info "格林公式的证明：单条边界曲线"

    这里 $\Gamma$ 为区域 $D$ 的边界曲线，并取正向。

    若区域 $D$ 既是 $x$ 型区域又是 $y$ 型区域，这时区域 $D$ 可表示为

    $$
    \varphi_1(x)\le y\le\varphi_2(x),\quad a\le x\le b,
    $$

    或

    $$
    \psi_1(y)\le x\le\psi_2(y),\quad c\le y\le d.
    $$

    于是

    $$
    \begin{aligned}
    \iint_D\frac{\partial Q}{\partial x}\,\mathrm dx\,\mathrm dy
    &=\int_c^d\mathrm dy\int_{\psi_1(y)}^{\psi_2(y)}
    \frac{\partial Q}{\partial x}\,\mathrm dx\\
    &=\int_c^d Q(\psi_2(y),y)\,\mathrm dy
    -\int_c^d Q(\psi_1(y),y)\,\mathrm dy\\
    &=\oint_\Gamma Q(x,y)\,\mathrm dy,
    \end{aligned}
    $$

    $$
    \begin{aligned}
    -\iint_D\frac{\partial P}{\partial y}\,\mathrm dx\,\mathrm dy
    &=-\int_a^b\mathrm dx\int_{\varphi_1(x)}^{\varphi_2(x)}
    \frac{\partial P}{\partial y}\,\mathrm dy\\
    &=-\int_a^b P(x,\varphi_2(x))\,\mathrm dx
    +\int_a^b P(x,\varphi_1(x))\,\mathrm dx\\
    &=\oint_\Gamma P(x,y)\,\mathrm dx.
    \end{aligned}
    $$

    因此，

    $$
    \iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)
    \,\mathrm dx\,\mathrm dy=\oint_\Gamma P\,\mathrm dx+Q\,\mathrm dy.
    $$

    若区域 $D$ 由一条按段光滑的闭曲线 $\Gamma$ 围成，则可用几段光滑曲线将 $D$ 分成有限个既是 $x$ 型区域又是 $y$ 型区域的区域，然后逐块用上面的方法推得它的格林公式，再相加就得格林公式。区域的共同边界，因取向相反，它们的积分值正好互相抵消。

平面区域的面积公式为

$$
\operatorname{Area}(D)=\frac12\oint_{\partial D}(x\,\mathrm dy-y\,\mathrm dx).
$$

!!! warning "提示"

    -   **边界方向取正向**：沿 $\partial D$ 行进时区域 $D$ 在左侧；外边界为逆时针，带洞区域的内边界为顺时针，方向反了会差一个负号。

        ??? example "格林公式的方向"
            <!-- 待补充 -->

    -   **公式中的顺序不能反**：$\displaystyle\oint P\,\mathrm dx+Q\,\mathrm dy=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm dx\,\mathrm dy$，是 $Q_x-P_y$，不是 $P_y-Q_x$。

        ??? example "格林公式"
            <!-- 待补充 -->

    -   **奇点要挖去**：$P,Q$ 在 $D$ 上要有一阶连续偏导；若区域内有奇点（如原点），不能直接对整块区域用格林公式，需挖去小圆并讨论。

        ??? example "含奇点的区域"
            <!-- 待补充 -->

    -   **面积公式的符号**：$\operatorname{Area}(D)=\dfrac12\displaystyle\oint_{\partial D}(x\,\mathrm dy-y\,\mathrm dx)$ 要求边界取正向；方向取反会得到负面积。

        ??? example "用格林公式求面积"
            <!-- 待补充 -->

???+ example "例4"

    求 $\displaystyle\oint_Cxy^2\,\mathrm dy-x^2y\,\mathrm dx$，其中 $C$ 为圆周 $x^2+y^2=R^2$，依逆时针方向。

    ??? success "解析"

        由题意知，$P=-x^2y,\ Q=xy^2$，$C$ 为区域边界曲线正向。由格林公式知，

        $$
        \begin{aligned}
        \oint_Cxy^2\,\mathrm dy-x^2y\,\mathrm dx
        &=\iint_D(y^2+x^2)\,\mathrm dx\,\mathrm dy\\
        &=\int_0^{2\pi}\mathrm d\theta\int_0^R r^2r\,\mathrm dr
        =\frac{\pi R^4}{2}.
        \end{aligned}
        $$

#### §1.3 平面曲线积分与路径无关性

平面区域 $D$ 内任一闭曲线均可在 $D$ 内连续收缩成一点时，称 $D$ 为单连通区域。

设 $D$ 为单连通区域，$P,Q$ 在 $D$ 上具有一阶连续偏导数，则下列条件等价：

$$
\oint_LP\,\mathrm dx+Q\,\mathrm dy=0
\quad\text{（对任一闭的分段光滑曲线 $L\subset D$）};
$$

$$
\int_A^BP\,\mathrm dx+Q\,\mathrm dy\text{ 只与起点、终点有关};
$$

$$
\exists u(x,y):\quad\mathrm du=P\,\mathrm dx+Q\,\mathrm dy;
\qquad
\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}.
$$

满足 $\mathrm du=P\,\mathrm dx+Q\,\mathrm dy$ 的 $u$ 称为该微分表达式的原函数，且

$$
\int_A^BP\,\mathrm dx+Q\,\mathrm dy=u(B)-u(A).
$$

若相应折线在 $D$ 内，则

$$
u(x,y)=\int_{x_0}^{x}P(t,y_0)\,\mathrm dt
+\int_{y_0}^{y}Q(x,t)\,\mathrm dt+C.
$$

!!! warning "提示"

    -   **单连通条件不能少**：$P_y=Q_x$ 只保证局部与路径无关；区域有洞时，绕洞的闭曲线积分可能不为零（如 $\dfrac{-y}{x^2+y^2}\,\mathrm dx+\dfrac{x}{x^2+y^2}\,\mathrm dy$ 绕原点）。

        ??? example "单连通区域与路径无关"
            <!-- 待补充 -->

    -   **四个条件等价的前提**：$P,Q$ 在单连通区域上有一阶连续偏导；缺一不可，不能只验证 $P_y=Q_x$ 就断言路径无关。

        ??? example "路径无关的等价条件"
            <!-- 待补充 -->

    -   **原函数的积分路径要在区域内**：$u(x,y)=\displaystyle\int_{x_0}^xP(t,y_0)\,\mathrm dt+\int_{y_0}^yQ(x,t)\,\mathrm dt+C$ 的折线路径必须完全位于 $D$ 内，不能穿过洞。

        ??? example "求原函数"
            <!-- 待补充 -->

    -   **起点固定、终点可变**：路径无关时可选任意方便路径，但起点 $(x_0,y_0)$ 要固定；否则 $u$ 会差一个常数。

        ??? example "选择积分路径"
            <!-- 待补充 -->

### §2 第二类曲面积分

#### §2.1 第二类曲面积分的概念

光滑曲面上选定一点的法线方向，沿曲面任一闭曲线连续移动法线方向，回到原点时方向均保持原向的曲面称为双侧曲面。选定连续法线方向的一侧后，称为定侧曲面。

设定侧曲面 $S$ 的单位法矢量为

$$
\mathbf n=(\cos\alpha,\cos\beta,\cos\gamma),
$$

$\mathbf A=(P,Q,R)$ 在 $S$ 上连续。第二类曲面积分定义为

$$
\iint_S\mathbf A\cdot\mathbf n\,\mathrm dS
=\iint_S(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,\mathrm dS
=\iint_SP\,\mathrm dy\,\mathrm dz+Q\,\mathrm dz\,\mathrm dx+R\,\mathrm dx\,\mathrm dy.
$$

有向面积元素为

$$
\mathrm d\mathbf S=\mathbf n\,\mathrm dS,
\qquad
\mathrm dy\,\mathrm dz=\cos\alpha\,\mathrm dS,\quad
\mathrm dz\,\mathrm dx=\cos\beta\,\mathrm dS,\quad
\mathrm dx\,\mathrm dy=\cos\gamma\,\mathrm dS.
$$

若 $-S$ 表示选取相反侧的曲面，则

$$
\iint_{-S}\mathbf A\cdot\mathrm d\mathbf S
=-\iint_S\mathbf A\cdot\mathrm d\mathbf S.
$$

若 $S=S_1\cup S_2$，两片无公共内点且定侧与 $S$ 一致，则

$$
\iint_S\mathbf A\cdot\mathrm d\mathbf S
=\iint_{S_1}\mathbf A\cdot\mathrm d\mathbf S+\iint_{S_2}\mathbf A\cdot\mathrm d\mathbf S.
$$

密度为 $\rho$、速度为 $\mathbf v$ 的流体，单位时间内通过 $S$ 指定侧的流量为

$$
Q=\iint_S\rho\mathbf v\cdot\mathbf n\,\mathrm dS.
$$

!!! warning "提示"

    -   **与侧有关**：第二类曲面积分换到相反侧要变号，$\displaystyle\iint_{-S}\mathbf A\cdot\mathrm d\mathbf S=-\iint_S\mathbf A\cdot\mathrm d\mathbf S$；第一类曲面积分与侧无关。

        ??? example "第二类曲面积分的侧"
            <!-- 待补充 -->

    -   **$\mathrm dy\,\mathrm dz,\mathrm dz\,\mathrm dx,\mathrm dx\,\mathrm dy$ 是有向面积元素**：它们分别等于 $\cos\alpha\,\mathrm dS,\cos\beta\,\mathrm dS,\cos\gamma\,\mathrm dS$，符号由法线方向决定，不是普通面积微元。

        ??? example "有向面积元素"
            <!-- 待补充 -->

    -   **双侧曲面才能定侧**：法线方向要能沿曲面连续移动且不翻转；单侧曲面（如莫比乌斯带）不能定义第二类曲面积分。

        ??? example "双侧曲面"
            <!-- 待补充 -->

    -   **流量符号表示流入流出**：$Q=\displaystyle\iint_S\rho\mathbf v\cdot\mathbf n\,\mathrm dS$ 中 $\mathbf n$ 取指定侧；$Q>0$ 表示沿该侧流出，$Q<0$ 表示流入。

        ??? example "流量与侧"
            <!-- 待补充 -->

#### §2.2 第二类曲面积分的计算

若 $S:z=z(x,y)$，投影区域为 $D_{xy}$，则

$$
\iint_SP\,\mathrm dy\,\mathrm dz+Q\,\mathrm dz\,\mathrm dx+R\,\mathrm dx\,\mathrm dy
=\pm\iint_{D_{xy}}[-Pz_x-Qz_y+R]_{z=z(x,y)}\,\mathrm dx\,\mathrm dy,
$$

上侧取 $+$，下侧取 $-$。

若 $S:x=x(y,z)$，投影区域为 $D_{yz}$，则

$$
\iint_S\mathbf A\cdot\mathrm d\mathbf S
=\pm\iint_{D_{yz}}[P-Qx_y-Rx_z]_{x=x(y,z)}\,\mathrm dy\,\mathrm dz,
$$

法线的 $x$ 分量为正时取 $+$，为负时取 $-$。

若 $S:y=y(x,z)$，投影区域为 $D_{xz}$，则

$$
\iint_S\mathbf A\cdot\mathrm d\mathbf S
=\pm\iint_{D_{xz}}[-Py_x+Q-Ry_z]_{y=y(x,z)}\,\mathrm dx\,\mathrm dz,
$$

法线的 $y$ 分量为正时取 $+$，为负时取 $-$。

!!! warning "提示"

    -   **投影时符号由侧决定**：$S:z=z(x,y)$ 时，上侧取 $+$、下侧取 $-$；$\displaystyle\iint_SR\,\mathrm dx\,\mathrm dy=\pm\iint_{D_{xy}}R(x,y,z(x,y))\,\mathrm dx\,\mathrm dy$，符号不能丢。

        ??? example "投影的符号"
            <!-- 待补充 -->

    -   **三个投影公式不要混**：投影到 $Oxy$ 时被积式为 $-Pz_x-Qz_y+R$；投影到 $Oyz$、$Ozx$ 时公式中的项和符号不同，要按曲面方程选择。

        ??? example "三种投影公式"
            <!-- 待补充 -->

    -   **曲面要能写成显式方程**：$z=z(x,y)$、$x=x(y,z)$、$y=y(x,z)$ 三种形式要选曲面能表示的那种；否则要分片处理。

        ??? example "曲面方程的选择"
            <!-- 待补充 -->

    -   **投影区域可能重叠**：若曲面在投影平面上的投影有重叠，不能直接用一个积分，要把曲面分成投影不重叠的部分。

        ??? example "分片投影"
            <!-- 待补充 -->

#### §2.3 高斯公式

设空间有界闭区域 $V$ 的边界 $S$ 由分片光滑的双侧曲面组成，$P,Q,R$ 在 $V$ 上连续且具有一阶连续偏导数，则

$$
\oiint_SP\,\mathrm dy\,\mathrm dz+Q\,\mathrm dz\,\mathrm dx+R\,\mathrm dx\,\mathrm dy
=\iiint_V\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)\,\mathrm dV,
$$

其中 $S$ 取外侧。

??? info "高斯公式的证明"

    下面只证

    $$
    \iiint_V\frac{\partial R}{\partial z}\,\mathrm dx\,\mathrm dy\,\mathrm dz
    =\oiint_S R\,\mathrm dx\,\mathrm dy.
    $$

    读者可类似地证明

    $$
    \iiint_V\frac{\partial P}{\partial x}\,\mathrm dV=\oiint_S P\,\mathrm dy\,\mathrm dz,
    \qquad
    \iiint_V\frac{\partial Q}{\partial y}\,\mathrm dV=\oiint_S Q\,\mathrm dz\,\mathrm dx.
    $$

    这些结果相加便得到了高斯公式。

    先设 $V$ 是一个 $xy$ 型区域，即其边界曲面 $S$ 由曲面 $S_2$（上侧）：$z=z_2(x,y),\ (x,y)\in D_{xy}$，$S_1$（下侧）：$z=z_1(x,y),\ (x,y)\in D_{xy}$，及垂直于 $D_{xy}$ 的边界的柱面 $S_3$（外侧）组成，其中 $z_1(x,y)\le z_2(x,y)$。于是按三重积分的计算方法有

    $$
    \begin{aligned}
    \iiint_V\frac{\partial R}{\partial z}\,\mathrm dV
    &=\iint_{D_{xy}}\mathrm dx\,\mathrm dy
    \int_{z_1(x,y)}^{z_2(x,y)}\frac{\partial R}{\partial z}\,\mathrm dz\\
    &=\iint_{D_{xy}}[R(x,y,z_2(x,y))-R(x,y,z_1(x,y))],\mathrm d\sigma\\
    &=\iint_{S_2}R(x,y,z)\,\mathrm dx\,\mathrm dy
    +\iint_{S_1}R(x,y,z)\,\mathrm dx\,\mathrm dy.
    \end{aligned}
    $$

    其中 $S_2$ 取上侧，$S_1$ 取下侧。又由于 $S_3$ 上每一点的法矢量与 $Oz$ 轴正向夹角全为 $\dfrac\pi2$，或者说它在坐标面 $Oxy$ 上的投影区域面积为零，所以

    $$
    \iint_{S_3}R(x,y,z)\,\mathrm dx\,\mathrm dy=0.
    $$

    因此

    $$
    \begin{aligned}
    \iiint_V\frac{\partial R}{\partial z}\,\mathrm dV
    &=\iint_{S_2}R\,\mathrm dx\,\mathrm dy
    +\iint_{S_1}R\,\mathrm dx\,\mathrm dy
    +\iint_{S_3}R\,\mathrm dx\,\mathrm dy\\
    &=\oiint_S R(x,y,z)\,\mathrm dx\,\mathrm dy,
    \end{aligned}
    $$

    其中 $S$ 取外侧。对于不是 $xy$ 型区域的情形，则用有限个光滑曲面将它分成若干个 $xy$ 型区域来讨论。与推导格林公式过程类似，请读者自证。

!!! warning "提示"

    -   **曲面取外侧**：高斯公式要求 $S=\partial V$ 取外侧；若取内侧，右端（或左端）要加负号。

        ??? example "高斯公式的方向"
            <!-- 待补充 -->

    -   **散度的表达式**：$\operatorname{div}\mathbf A=\dfrac{\partial P}{\partial x}+\dfrac{\partial Q}{\partial y}+\dfrac{\partial R}{\partial z}$，三项都是对相应变量求偏导，不要漏项或写成旋度。

        ??? example "高斯公式与散度"
            <!-- 待补充 -->

    -   **闭曲面才可直接用**：高斯公式适用于封闭曲面；若曲面不封闭，需要补上一块面使其封闭，再减去补面部分。

        ??? example "补面使用高斯公式"
            <!-- 待补充 -->

    -   **奇点要挖去**：$P,Q,R$ 在 $V$ 内要有一阶连续偏导；若内部有奇点，需挖去小球并单独计算小球面上的积分。

        ??? example "含奇点的区域"
            <!-- 待补充 -->

???+ example "例4"

    计算 $\displaystyle\iint_S(x^2\cos\alpha+y^2\cos\beta+z^2\cos\gamma)\,\mathrm dS$，式中 $S$ 为圆锥面 $x^2+y^2=z^2\ (0\le z\le h)$ 的一部分，$\cos\alpha,\cos\beta,\cos\gamma$ 为此曲面外法线的方向余弦。

    ??? success "解析"

        设曲面 $S_1:z=h,\ x^2+y^2\le h^2$（法线朝上侧），则

        $$
        \begin{aligned}
        \oiint_{S+S_1}(x^2\cos\alpha+y^2\cos\beta+z^2\cos\gamma)\,\mathrm dS
        &=2\iiint_V(x+y+z)\,\mathrm dV\\
        &=2\int_0^{2\pi}\mathrm d\theta\int_0^h r\,\mathrm dr\int_r^h z\,\mathrm dz\\
        &=4\pi\int_0^h\frac r2(h^2-r^2)\,\mathrm dr\\
        &=2\pi\int_0^h(h^2r-r^3)\,\mathrm dr
        =\frac{\pi h^4}{2}.
        \end{aligned}
        $$

        又

        $$
        \begin{aligned}
        \iint_{S_1}(x^2\cos\alpha+y^2\cos\beta+z^2\cos\gamma)\,\mathrm dS
        &=\iint_{S_1}z^2\cos0\,\mathrm dS\\
        &=\iint_{S_1}h^2\,\mathrm dS=\pi h^4,
        \end{aligned}
        $$

        于是

        $$
        \iint_S(x^2\cos\alpha+y^2\cos\beta+z^2\cos\gamma)\,\mathrm dS
        =\frac{\pi h^4}{2}-\pi h^4=-\frac{\pi h^4}{2}.
        $$

#### §2.4 散度场

矢量场 $\mathbf A=(P,Q,R)$ 的散度定义为

$$
\operatorname{div}\mathbf A
=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}.
$$

散度作为点的函数构成散度场。高斯公式可写为

$$
\iiint_V\operatorname{div}\mathbf A\,\mathrm dV
=\oiint_{\partial V}\mathbf A\cdot\mathbf n\,\mathrm dS.
$$

散度的通量表示为

$$
\operatorname{div}\mathbf A(M_0)
=\lim_{V\to M_0}\frac{1}{\operatorname{Vol}(V)}
\oiint_{\partial V}\mathbf A\cdot\mathbf n\,\mathrm dS.
$$

散度表示单位体积的净流出量；若 $\operatorname{div}\mathbf A=0$，称 $\mathbf A$ 为无源场，并有

$$
\oiint_{\partial V}\mathbf A\cdot\mathbf n\,\mathrm dS=0.
$$

!!! warning "提示"

    -   **散度是数量**：$\operatorname{div}\mathbf A=P_x+Q_y+R_z$ 是一个数量函数，不是矢量；旋度才是矢量。

        ??? example "散度的计算"
            <!-- 待补充 -->

    -   **无源不等于无旋**：$\operatorname{div}\mathbf A=0$ 只说明无源，仍可能有旋；反之 $\operatorname{rot}\mathbf A=\mathbf0$ 也不说明无源。

        ??? example "无源场与无旋场"
            <!-- 待补充 -->

    -   **通量表示的极限**：$\operatorname{div}\mathbf A(M_0)=\lim_{V\to M_0}\dfrac{1}{\operatorname{Vol}(V)}\oiint_{\partial V}\mathbf A\cdot\mathbf n\,\mathrm dS$，要求 $V$ 收缩到 $M_0$，且法线取外侧。

        ??? example "散度的通量意义"
            <!-- 待补充 -->

    -   **高斯公式的散度形式方向**：$\iiint_V\operatorname{div}\mathbf A\,\mathrm dV=\oiint_{\partial V}\mathbf A\cdot\mathbf n\,\mathrm dS$，右端法线取外侧；内侧要变号。

        ??? example "散度形式的高斯公式"
            <!-- 待补充 -->

### §3 斯托克斯公式、空间曲线积分与路径无关性

#### §3.1 斯托克斯公式

设光滑双侧曲面 $S$ 的边界 $L$ 为分段光滑连续曲线，$P,Q,R$ 在 $S$ 及 $L$ 上连续且具有一阶连续偏导数，则

$$
\oint_LP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz
=\iint_S
\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)\mathrm dy\,\mathrm dz
+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)\mathrm dz\,\mathrm dx
+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm dx\,\mathrm dy.
$$

曲面法线方向与边界方向满足右手规则。

??? info "斯托克斯公式的证明"

    先证

    $$
    \iint_S\frac{\partial P}{\partial z}\,\mathrm dz\,\mathrm dx
    -\frac{\partial P}{\partial y}\,\mathrm dx\,\mathrm dy
    =\oint_LP\,\mathrm dx.
    $$

    其中曲面 $S$ 由方程 $z=z(x,y)$ 确定，它的正侧法线矢量方向矢量为 $(-z_x,-z_y,1)$，单位矢量为

    $$
    \left(\frac{-z_x}{\sqrt{1+z_x^2+z_y^2}},
    \frac{-z_y}{\sqrt{1+z_x^2+z_y^2}},
    \frac1{\sqrt{1+z_x^2+z_y^2}}\right),
    $$

    又方向余弦为 $(\cos\alpha,\cos\beta,\cos\gamma)$，得 $\cos\alpha=-z_x\cos\gamma,\ \cos\beta=-z_y\cos\gamma$，而 $\cos\gamma=\dfrac1{\sqrt{1+z_x^2+z_y^2}}$，所以

    $$
    \frac{\partial z}{\partial x}=-\frac{\cos\alpha}{\cos\gamma},\qquad
    \frac{\partial z}{\partial y}=-\frac{\cos\beta}{\cos\gamma}.
    $$

    若 $S$ 在 $Oxy$ 平面上的投影区域为 $D_{xy}$，$L$ 在 $Oxy$ 平面上的投影曲线记为 $\Gamma$，现由第二类曲线积分定义及格林公式有

    $$
    \oint_LP(x,y,z)\,\mathrm dx
    =\oint_\Gamma P(x,y,z(x,y))\,\mathrm dx
    =-\iint_{D_{xy}}\frac{\partial}{\partial y}P(x,y,z(x,y))\,\mathrm dx\,\mathrm dy.
    $$

    因为

    $$
    \frac{\partial}{\partial y}P(x,y,z(x,y))
    =\frac{\partial P}{\partial y}+\frac{\partial P}{\partial z}\frac{\partial z}{\partial y},
    $$

    所以

    $$
    \begin{aligned}
    \oint_LP\,\mathrm dx
    &=-\iint_{D_{xy}}\left(\frac{\partial P}{\partial y}
    +\frac{\partial P}{\partial z}\frac{\partial z}{\partial y}\right)\,\mathrm dx\,\mathrm dy\\
    &=-\iint_S\left(\frac{\partial P}{\partial y}
    -\frac{\partial P}{\partial z}\frac{\cos\beta}{\cos\gamma}\right)\,\mathrm dx\,\mathrm dy\\
    &=-\iint_S\left(\frac{\partial P}{\partial y}\cos\gamma
    -\frac{\partial P}{\partial z}\cos\beta\right)\,\mathrm dS\\
    &=\iint_S\frac{\partial P}{\partial z}\,\mathrm dz\,\mathrm dx
    -\frac{\partial P}{\partial y}\,\mathrm dx\,\mathrm dy.
    \end{aligned}
    $$

    同样对于曲面 $S$ 表示 $x=x(y,z)$ 和 $y=y(z,x)$，可得

    $$
    \iint_S\frac{\partial Q}{\partial x}\,\mathrm dx\,\mathrm dy
    -\frac{\partial Q}{\partial z}\,\mathrm dy\,\mathrm dz
    =\oint_LQ\,\mathrm dy,
    $$

    $$
    \iint_S\frac{\partial R}{\partial y}\,\mathrm dy\,\mathrm dz
    -\frac{\partial R}{\partial x}\,\mathrm dz\,\mathrm dx
    =\oint_LR\,\mathrm dz.
    $$

    将以上三式相加即得斯托克斯公式。如果曲面 $S$ 不能以 $z=z(x,y)$ 的形式给出，则用一些光滑曲线把 $S$ 分割为若干个小块，使每一小块都能用这种形式来表示，这时斯托克斯公式也能成立。

**注：** 由证明过程可知，对于以 $\Gamma$ 为边界且符合定理条件的曲面 $S$，结论都成立。从而我们利用斯托克斯公式时，寻找以 $\Gamma$ 为边界较简单的曲面 $S$，有利于解决问题。

!!! warning "提示"

    -   **方向满足右手规则**：曲面法线方向与边界 $L$ 的方向要符合右手规则；方向取反，公式两边同时变号。

        ??? example "斯托克斯公式的方向"
            <!-- 待补充 -->

    -   **各项符号不要写错**：$\oint P\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz=\iint_S(R_y-Q_z)\mathrm dy\,\mathrm dz+(P_z-R_x)\mathrm dz\,\mathrm dx+(Q_x-P_y)\mathrm dx\,\mathrm dy$。

        ??? example "斯托克斯公式的展开"
            <!-- 待补充 -->

    -   **曲面可以任选**：只要 $S$ 以 $L$ 为边界且方向匹配，可选最简单的曲面（如平面片）计算；不必用原曲面。

        ??? example "选择曲面"
            <!-- 待补充 -->

    -   **奇点要避开**：$P,Q,R$ 要在 $S$ 及 $L$ 上有一阶连续偏导；若 $L$ 围住奇点，不能直接套公式，需要挖洞。

        ??? example "含奇点的斯托克斯公式"
            <!-- 待补充 -->

???+ example "例1"

    计算 $\displaystyle\oint_C(y-z)\,\mathrm dx+(z-x)\,\mathrm dy+(x-y)\,\mathrm dz$，其中 $C$ 为椭圆

    $$
    x^2+y^2=a^2,\qquad\frac xa+\frac zh=1\quad(a>0,\ h>0),
    $$

    若从 $Ox$ 轴正向看去，此椭圆是沿逆时针方向前进的。

    ??? success "解析"

        把平面 $\dfrac xa+\dfrac zh=1$ 上 $C$ 所包围的区域记为 $S$，则 $S$ 的法线方向为 $(h,0,a)$。注意到 $S$ 的法线和曲线 $C$ 的方向是正向关系的，可知 $S$ 的法线与 $Oz$ 轴正向的夹角为锐角，因此，

        $$
        \mathbf e_n=\left(\frac h{\sqrt{h^2+a^2}},\ 0,\ \frac a{\sqrt{h^2+a^2}}\right).
        $$

        于是，由斯托克斯公式知

        $$
        \begin{aligned}
        &\oint_C(y-z)\,\mathrm dx+(z-x)\,\mathrm dy+(x-y)\,\mathrm dz\\
        &=-2\iint_S\mathrm dy\,\mathrm dz+\mathrm dz\,\mathrm dx+\mathrm dx\,\mathrm dy\\
        &=-2\iint_S(\cos\alpha+\cos\beta+\cos\gamma)\,\mathrm dS\\
        &=-2\frac{h+a}{\sqrt{h^2+a^2}}\iint_S\mathrm dS\\
        &=-2\frac{h+a}{\sqrt{h^2+a^2}}
        \iint_{x^2+y^2\le a^2}\sqrt{1+\frac{h^2}{a^2}}\,\mathrm d\sigma\\
        &=-2\frac{h+a}{\sqrt{h^2+a^2}}\cdot\frac{\sqrt{a^2+h^2}}a\pi a^2
        =-2\pi a(h+a).
        \end{aligned}
        $$

#### §3.2 空间曲线积分与路径无关性

空间区域 $V$ 内每一闭曲线均可在 $V$ 内连续收缩为一点时，称 $V$ 为空间单连通区域。

设 $V$ 为空间单连通区域，$P,Q,R$ 在 $V$ 上具有一阶连续偏导数，则下列条件等价：

$$
\oint_LP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz=0
\quad\text{（对任一闭的分段光滑曲线 $L\subset V$）};
$$

$$
\int_A^BP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz\text{ 只与起点、终点有关};
$$

$$
\exists u(x,y,z):\quad\mathrm du=P\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz;
$$

$$
P_y=Q_x,\qquad Q_z=R_y,\qquad R_x=P_z.
$$

满足这些条件时，

$$
\int_A^BP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz=u(B)-u(A).
$$

若相应折线在 $V$ 内，则

$$
u(x,y,z)=\int_{x_0}^xP(t,y_0,z_0)\,\mathrm dt
+\int_{y_0}^yQ(x,t,z_0)\,\mathrm dt
+\int_{z_0}^zR(x,y,t)\,\mathrm dt+C.
$$

!!! warning "提示"

    -   **空间单连通条件不能少**：区域内有洞（如环面内部）时，即使旋度为零，绕洞的闭曲线积分也可能不为零。

        ??? example "空间单连通区域"
            <!-- 待补充 -->

    -   **三个等式要同时成立**：$P_y=Q_x$、$Q_z=R_y$、$R_x=P_z$ 缺一不可；只验证其中两个不能推出路径无关。

        ??? example "路径无关的条件"
            <!-- 待补充 -->

    -   **原函数的折线路径要在区域内**：$u(x,y,z)=\displaystyle\int_{x_0}^xP(t,y_0,z_0)\,\mathrm dt+\int_{y_0}^yQ(x,t,z_0)\,\mathrm dt+\int_{z_0}^zR(x,y,t)\,\mathrm dt+C$ 的路径必须完全位于 $V$ 内。

        ??? example "求空间原函数"
            <!-- 待补充 -->

    -   **与平面情形一致**：闭曲线积分为零、路径无关、存在原函数、旋度为零，在单连通区域且偏导连续时等价。

        ??? example "空间路径无关的等价条件"
            <!-- 待补充 -->

#### §3.3 旋度场

矢量场 $\mathbf A=(P,Q,R)$ 的旋度定义为

$$
\operatorname{rot}\mathbf A
=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)
=\begin{vmatrix}
\mathbf i&\mathbf j&\mathbf k\\
\partial_x&\partial_y&\partial_z\\
P&Q&R
\end{vmatrix}.
$$

旋度作为点的矢量函数构成旋度场。斯托克斯公式为

$$
\oint_L\mathbf A\cdot\mathrm d\mathbf s
=\iint_S\operatorname{rot}\mathbf A\cdot\mathbf n\,\mathrm dS.
$$

设小平面区域 $D$ 含点 $M_0$，法线为单位矢量 $\mathbf n$，边界取相应正向，则

$$
\operatorname{rot}\mathbf A(M_0)\cdot\mathbf n
=\lim_{D\to M_0}\frac1{\operatorname{Area}(D)}
\oint_{\partial D}\mathbf A\cdot\mathrm d\mathbf s.
$$

旋度在法线方向的分量表示该方向的环流密度。若 $\operatorname{rot}\mathbf A=\mathbf0$，称 $\mathbf A$ 为无旋场。

!!! warning "提示"

    -   **旋度是矢量**：$\operatorname{rot}\mathbf A=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)$，三个分量都不要漏；第二分量是 $P_z-R_x$，不是 $R_x-P_z$。

        ??? example "旋度的计算"
            <!-- 待补充 -->

    -   **无旋不等于无源**：$\operatorname{rot}\mathbf A=\mathbf0$ 只说明无旋，仍可能有散度；反之散度为零也不说明无旋。

        ??? example "无旋场与无源场"
            <!-- 待补充 -->

    -   **斯托克斯公式的方向**：$\displaystyle\oint_L\mathbf A\cdot\mathrm d\mathbf s=\iint_S\operatorname{rot}\mathbf A\cdot\mathbf n\,\mathrm dS$，$L$ 的方向与 $S$ 的法线要满足右手规则。

        ??? example "旋度与斯托克斯公式"
            <!-- 待补充 -->

    -   **旋度的环流意义**：$\operatorname{rot}\mathbf A(M_0)\cdot\mathbf n$ 是沿法线方向的环流密度，不是通量密度；通量密度对应散度。

        ??? example "旋度的意义"
            <!-- 待补充 -->

#### §3.4 势量场 \*

若矢量场 $\mathbf A$ 可表示为某标量函数 $u$ 的梯度，称 $\mathbf A$ 为势量场，$u$ 为势函数：

$$
\mathbf A=\operatorname{grad}u=(u_x,u_y,u_z),
\qquad
\mathbf A\cdot\mathrm d\mathbf s=\mathrm du.
$$

!!! warning "提示"

    -   **势函数不唯一**：若 $\mathbf A=\operatorname{grad}u$，则 $u+C$ 也是势函数；求出的势函数要验证 $\nabla u=\mathbf A$。

        ??? example "势函数"
            <!-- 待补充 -->

    -   **无旋场在单连通区域才是势量场**：$\operatorname{rot}\mathbf A=\mathbf0$ 只保证局部存在势函数；区域有洞时可能有环流，不能定义整体势函数。

        ??? example "势量场的存在性"
            <!-- 待补充 -->

    -   **势函数与势能的符号约定不同**：数学中常写 $\mathbf A=\operatorname{grad}u$，物理中势能常写 $\mathbf F=-\operatorname{grad}V$；不要混用符号。

        ??? example "势函数与势能"
            <!-- 待补充 -->

    -   **求势函数要选区域内路径**：可用路径积分 $\displaystyle u=\int_{P_0}^P\mathbf A\cdot\mathrm d\mathbf s$，路径必须完全位于区域内，起点固定。

        ??? example "用路径积分求势函数"
            <!-- 待补充 -->

#### §3.5 向量微分算子 \*

向量微分算子定义为

$$
\nabla=\mathbf i\frac{\partial}{\partial x}
+\mathbf j\frac{\partial}{\partial y}
+\mathbf k\frac{\partial}{\partial z}.
$$

$$
\nabla u=\operatorname{grad}u,\qquad
\nabla\cdot\mathbf A=\operatorname{div}\mathbf A,\qquad
\nabla\times\mathbf A=\operatorname{rot}\mathbf A.
$$

拉普拉斯算子及其作用为

$$
\Delta=\nabla\cdot\nabla
=\frac{\partial^2}{\partial x^2}
+\frac{\partial^2}{\partial y^2}
+\frac{\partial^2}{\partial z^2},
\qquad
\Delta u=u_{xx}+u_{yy}+u_{zz}.
$$

!!! warning "提示"

    -   **$\nabla$ 是算子，不是普通矢量**：$\nabla u$ 是梯度（矢量），$\nabla\cdot\mathbf A$ 是散度（数量），$\nabla\times\mathbf A$ 是旋度（矢量），三者不能混用。

        ??? example "$\nabla$ 的三种作用"
            <!-- 待补充 -->

    -   **拉普拉斯算子是二阶算子**：$\Delta=\nabla\cdot\nabla=\partial_x^2+\partial_y^2+\partial_z^2$，作用在标量函数上得到数量；不要与 Hessian 矩阵混淆。

        ??? example "拉普拉斯算子"
            <!-- 待补充 -->

    -   **算子不能随意交换顺序**：$\nabla\times\nabla u=\mathbf0$、$\nabla\cdot(\nabla\times\mathbf A)=0$ 在二阶偏导连续时成立；但 $\nabla\cdot\nabla u$ 与 $\nabla(\nabla\cdot\mathbf A)$ 是不同的。

        ??? example "算子恒等式"
            <!-- 待补充 -->

    -   **乘积法则要按算子展开**：$\nabla(uv)=u\nabla v+v\nabla u$，$\nabla\cdot(u\mathbf A)=u\nabla\cdot\mathbf A+\mathbf A\cdot\nabla u$；不能把 $\nabla$ 当作普通数约分。

        ??? example "算子作用于乘积"
            <!-- 待补充 -->

## 第十一章 级数

### §1 数项级数的基本概念

#### §1.1 数项级数的概念

给定数列 $\{u_n\}$，表达式

$$
\sum_{n=1}^{\infty}u_n=u_1+u_2+\cdots+u_n+\cdots
$$

称为数项级数，$u_n$ 为通项，

$$
S_n=\sum_{k=1}^nu_k
$$

为第 $n$ 项部分和。若 $\lim_{n\to\infty}S_n=S$ 为有限数，则称级数收敛，$S$ 为其和；否则称级数发散。收敛级数的余项为

$$
R_n=S-S_n=\sum_{k=n+1}^{\infty}u_k.
$$

几何级数满足

$$
\sum_{n=0}^{\infty}aq^n=\frac{a}{1-q},\qquad |q|<1;
$$

当 $a\ne0$ 且 $|q|\ge1$ 时发散。

$p$ 级数满足

$$
\sum_{n=1}^{\infty}\frac1{n^p}
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\le1.
\end{cases}
$$

!!! warning "提示"

    -   **收敛看部分和极限**：级数收敛是指 $\lim S_n$ 存在且有限，不是通项 $u_n\to0$；$u_n\to0$ 只是必要条件，调和级数就是反例。

        ??? example "级数的收敛性"
            <!-- 待补充 -->

    -   **几何级数的首项与条件**：$\displaystyle\sum_{n=0}^{\infty}aq^n=\frac{a}{1-q}$ 仅在 $|q|<1$ 时成立；若级数从 $n=1$ 开始，首项是 $aq$，不要代错。

        ??? example "几何级数"
            <!-- 待补充 -->

    -   **$p$ 级数的分界是 $p=1$**：$p>1$ 收敛，$p\le1$ 发散；$p=1$ 是调和级数，不能误判为收敛。

        ??? example "$p$ 级数"
            <!-- 待补充 -->

    -   **余项只对收敛级数有定义**：$R_n=S-S_n$ 是收敛级数的尾部，收敛时 $R_n\to0$；发散级数不能谈余项。

        ??? example "级数的余项"
            <!-- 待补充 -->

#### §1.2 数项级数的基本性质

若 $\sum u_n=A$、$\sum v_n=B$ 均收敛，$\alpha,\beta$ 为常数，则

$$
\sum_{n=1}^{\infty}(\alpha u_n+\beta v_n)=\alpha A+\beta B.
$$

改变有限项、去掉或添加有限项不改变级数的敛散性。收敛级数任意加括号后仍收敛，且和不变。

收敛的必要条件为

$$
\sum_{n=1}^{\infty}u_n\text{ 收敛}\ \Longrightarrow\ \lim_{n\to\infty}u_n=0.
$$

柯西收敛准则为

$$
\sum_{n=1}^{\infty}u_n\text{ 收敛}
\ \Longleftrightarrow\quad
\forall\varepsilon>0,\ \exists N,\ \forall n>N,\ \forall p\in\mathbb N_+:
\left|\sum_{k=n+1}^{n+p}u_k\right|<\varepsilon.
$$

!!! warning "提示"

    -   **加括号保持收敛，但不能反推**：收敛级数任意加括号后仍收敛且和不变；但加括号后收敛，原级数不一定收敛（如 $(1-1)+(1-1)+\cdots$）。

        ??? example "加括号"
            <!-- 待补充 -->

    -   **改变有限项只改变和**：去掉、添加或改变有限项不影响敛散性，但会改变收敛级数的和；不能因此认为所有项都可以随意改动。

        ??? example "有限项的影响"
            <!-- 待补充 -->

    -   **线性运算要求两个级数都收敛**：$\sum(\alpha u_n+\beta v_n)=\alpha A+\beta B$ 需要 $\sum u_n,\sum v_n$ 都收敛；一收敛一发散时和发散，两个发散时和可能收敛。

        ??? example "级数的线性运算"
            <!-- 待补充 -->

    -   **柯西准则的量词**：要求存在 $N$，使 $n>N$ 时对**一切** $p\in\mathbb N_+$，$|u_{n+1}+\cdots+u_{n+p}|<\varepsilon$；不能只验证某个 $p$。

        ??? example "级数的柯西准则"
            <!-- 待补充 -->

### §2 正项级数敛散性的判别法

通项满足 $u_n\ge0$ 的级数称为正项级数。其收敛的充要条件为部分和数列有上界：

$$
\sum_{n=1}^{\infty}u_n\text{ 收敛}
\ \Longleftrightarrow\quad
\exists M,\ \forall n:\quad S_n\le M.
$$

**比较判别法。** 若 $0\le u_n\le v_n$，则

$$
\sum v_n\text{ 收敛}\ \Longrightarrow\ \sum u_n\text{ 收敛},
\qquad
\sum u_n\text{ 发散}\ \Longrightarrow\ \sum v_n\text{ 发散}.
$$

??? info "比较判别法的证明"

    设 $\displaystyle\sum_{n=1}^\infty v_n$ 的前 $n$ 项和为 $B_n$，$\displaystyle\sum_{n=1}^\infty u_n$ 的前 $n$ 项和为 $A_n$，由条件知

    $$
    A_n=u_1+u_2+\cdots+u_n\le v_1+v_2+\cdots+v_n=B_n.
    $$

    （1）若 $\sum v_n$ 收敛，存在常数 $M$，对一切正整数 $n$，都有 $B_n\le M$。因此，$A_n\le M$，由正项级数收敛的充要条件知 $\sum u_n$ 收敛。

    （2）若 $\sum u_n$ 发散，则 $\sum v_n$ 发散。假若不然，$\sum v_n$ 收敛，则由（1）知 $\sum u_n$ 也收敛，与条件 $\sum u_n$ 发散相矛盾。故 $\sum v_n$ 发散。

**注：** 此定理的条件可减弱为 $u_n\le v_n\ (n=k,k+1,\ldots)$。$u_n\le v_n$ 也可以改成 $u_n\le Cv_n$（$C>0$，为常数）（$n=k,k+1,\ldots$），结论依然成立。

**比较判别法的极限形式。** 若 $u_n,v_n>0$ 且 $\lim u_n/v_n=l$，则

$$
\begin{aligned}
0<l<+\infty&\ \Longrightarrow\ \sum u_n,\sum v_n\text{ 同敛散};\\
l=0,\ \sum v_n\text{ 收敛}&\ \Longrightarrow\ \sum u_n\text{ 收敛};\\
l=+\infty,\ \sum v_n\text{ 发散}&\ \Longrightarrow\ \sum u_n\text{ 发散}.
\end{aligned}
$$

**比值判别法。** 若 $u_n>0$ 且 $\lim u_{n+1}/u_n=q$，则

$$
q<1\ \Longrightarrow\ \sum u_n\text{ 收敛},\qquad
q>1\text{ 或 }q=+\infty\ \Longrightarrow\ \sum u_n\text{ 发散}.
$$

**根值判别法。** 若 $u_n\ge0$ 且 $\lim\sqrt[n]{u_n}=q$，则

$$
q<1\ \Longrightarrow\ \sum u_n\text{ 收敛},\qquad
q>1\text{ 或 }q=+\infty\ \Longrightarrow\ \sum u_n\text{ 发散}.
$$

**积分判别法。** 若 $f(x)$ 在 $[1,+\infty)$ 上非负、连续、单调递减，$u_n=f(n)$，则

$$
\sum_{n=1}^{\infty}u_n\text{ 与 }\int_1^{+\infty}f(x)\,\mathrm dx\text{ 同敛散}.
$$

!!! warning "提示"

    -   **正项级数看部分和是否有上界**：$\sum u_n$ 收敛 $\iff$ 部分和数列 $\{S_n\}$ 有上界；这是正项级数特有的充要条件，一般级数不适用。

        ??? example "部分和有界"
            <!-- 待补充 -->

    -   **比较判别法的方向**：$0\le u_n\le v_n$ 时，大级数收敛可推小级数收敛，小级数发散可推大级数发散；方向不能反。

        ??? example "比较判别法"
            <!-- 待补充 -->

    -   **极限形式的三种情形**：$0<l<+\infty$ 时同敛散；$l=0$ 只能用"$\sum v_n$ 收敛 $\Rightarrow\sum u_n$ 收敛"；$l=+\infty$ 只能用"$\sum v_n$ 发散 $\Rightarrow\sum u_n$ 发散"。

        ??? example "比较判别法的极限形式"
            <!-- 待补充 -->

    -   **比值、根值判别法的 $q=1$ 失效**：$q<1$ 收敛、$q>1$ 或 $+\infty$ 发散；$q=1$ 时不能判定，需改用其他方法。积分判别法要求 $f$ 非负、连续、单调递减。

        ??? example "比值与根值判别法"
            <!-- 待补充 -->

???+ example "例2"

    判断下列正项级数的敛散性：

    $$
    \text{（1）}\ \sum_{n=1}^\infty\frac1{\sqrt n}\sin\frac1n;
    \qquad
    \text{（2）}\ \sum_{n=1}^\infty\left(1-\cos\frac an\right)\quad(a>0).
    $$

    ??? success "解析"

        （1）因为

        $$
        0<\frac1{\sqrt n}\sin\frac1n<\frac1{\sqrt n}\cdot\frac1n=\frac1{n^{3/2}},
        $$

        且 $\displaystyle\sum_{n=1}^\infty\frac1{n^{3/2}}$ 收敛，故由比较判别法知，$\displaystyle\sum_{n=1}^\infty\frac1{\sqrt n}\sin\frac1n$ 收敛。

        （2）因为

        $$
        0\le1-\cos\frac an=2\sin^2\frac a{2n}
        \le2\cdot\frac{a^2}{4n^2}=\frac{a^2}{2}\frac1{n^2},
        $$

        而 $\displaystyle\sum_{n=1}^\infty\frac1{n^2}$ 收敛，且 $\dfrac{a^2}{2}>0$，由比较判别法知 $\displaystyle\sum_{n=1}^\infty\left(1-\cos\frac an\right)$ 收敛。

### §3 一般数项级数收敛性的判别法

#### §3.1 交错级数

设 $u_n>0$，级数

$$
\sum_{n=1}^{\infty}(-1)^{n-1}u_n
$$

称为交错级数。若

$$
u_1\ge u_2\ge\cdots,\qquad\lim_{n\to\infty}u_n=0,
$$

则级数收敛，且其和与余项满足

$$
0\le S\le u_1,\qquad |R_n|\le u_{n+1}.
$$

??? info "莱布尼茨定理及余项估计的证明"

    设级数的前 $n$ 项和为 $S_n$，

    $$
    0\le S_{2m}=(u_1-u_2)+(u_3-u_4)+\cdots+(u_{2m-1}-u_{2m}),
    $$

    由于

    $$
    S_{2m+2}=S_{2m}+(u_{2m+1}-u_{2m+2})\ge S_{2m},
    $$

    并且

    $$
    S_{2m}=u_1-(u_2-u_3)-\cdots-(u_{2m-2}-u_{2m-1})-u_{2m}\le u_1,
    $$

    即数列 $\{S_{2m}\}$ 递增有上界，所以其极限存在。设 $\lim\limits_{m\to\infty}S_{2m}=S$，又

    $$
    \lim_{m\to\infty}S_{2m+1}
    =\lim_{m\to\infty}(S_{2m}+u_{2m+1})=S+0=S,
    $$

    因此 $\lim\limits_{n\to\infty}S_n=S$，所以级数收敛。对 $S_{2m}\le u_1$ 两边令 $m\to\infty$，有 $S\le u_1$。

    交错级数 $\displaystyle\sum_{n=1}^\infty(-1)^{n-1}u_n$ 的余项绝对值

    $$
    \begin{aligned}
    |R_n|&=|(-1)^nu_{n+1}+(-1)^{n+1}u_{n+2}+\cdots|\\
    &=u_{n+1}-u_{n+2}+u_{n+3}-u_{n+4}+\cdots\le u_{n+1}.
    \end{aligned}
    $$

!!! warning "提示"

    -   **莱布尼茨判别法的两个条件**：$u_n$ 单调不增且 $\lim u_n=0$，缺一不可；仅通项趋于 $0$ 不能保证交错级数收敛。

        ??? example "莱布尼茨判别法"
            <!-- 待补充 -->

    -   **余项估计只对满足条件的级数**：$|R_n|\le u_{n+1}$ 是在莱布尼茨条件下得到的；对一般交错级数不能直接套用。

        ??? example "交错级数的余项"
            <!-- 待补充 -->

    -   **收敛不等于绝对收敛**：交错级数可能条件收敛（如 $\sum(-1)^{n-1}/n$）；判断绝对收敛要另看 $\sum u_n$。

        ??? example "条件收敛"
            <!-- 待补充 -->

    -   **先检查通项是否趋于 $0$**：若 $u_n\not\to0$，交错级数必发散，不必再验证单调性。

        ??? example "通项检验"
            <!-- 待补充 -->

#### §3.2 绝对收敛级数与条件收敛级数

若 $\sum|u_n|$ 收敛，称 $\sum u_n$ 绝对收敛；若 $\sum u_n$ 收敛而 $\sum|u_n|$ 发散，称其条件收敛。

$$
\sum|u_n|\text{ 收敛}\ \Longrightarrow\ \sum u_n\text{ 收敛}.
$$

??? info "绝对收敛级数收敛的证明"

    由于 $0\le u_n+|u_n|\le2|u_n|$，且 $\sum|u_n|$ 收敛，故由比较判别法知 $\sum(u_n+|u_n|)$ 收敛，又

    $$
    \sum_{n=1}^\infty u_n
    =\sum_{n=1}^\infty[(u_n+|u_n|)-|u_n|],
    $$

    根据收敛级数的线性运算性质知 $\sum u_n$ 收敛。

若 $\lim |u_{n+1}/u_n|=q$ 或 $\lim\sqrt[n]{|u_n|}=q$，则

$$
q<1\ \Longrightarrow\ \sum u_n\text{ 绝对收敛},\qquad
q>1\text{ 或 }q=+\infty\ \Longrightarrow\ \sum u_n\text{ 发散}.
$$

!!! warning "提示"

    -   **绝对收敛强于收敛**：$\sum|u_n|$ 收敛可推出 $\sum u_n$ 收敛；反之不成立，收敛但绝对值级数发散的是条件收敛。

        ??? example "绝对收敛与条件收敛"
            <!-- 待补充 -->

    -   **比值、根值判别法判的是绝对收敛**：由 $\lim|u_{n+1}/u_n|=q$ 或 $\lim\sqrt[n]{|u_n|}=q$ 得 $q<1$ 时绝对收敛，$q>1$ 时发散；$q=1$ 不能判定。

        ??? example "用比值法判断绝对收敛"
            <!-- 待补充 -->

    -   **条件收敛级数不能随意重排**：重排可能改变和，甚至得到不同的和；只有绝对收敛级数才能任意重排。

        ??? example "重排级数"
            <!-- 待补充 -->

    -   **判断条件收敛要两步**：先证 $\sum u_n$ 收敛，再证 $\sum|u_n|$ 发散；只证其中一步不够。

        ??? example "判断条件收敛"
            <!-- 待补充 -->

???+ example "例2"

    判别 $\displaystyle\sum_{n=1}^\infty(-1)^{n-1}\frac1{n^p}$ 的敛散性。

    ??? success "解析"

        $$
        \sum_{n=1}^\infty\left|(-1)^{n-1}\frac1{n^p}\right|
        =\sum_{n=1}^\infty\frac1{n^p},
        $$

        当 $p>1$ 时收敛。因此，当 $p>1$ 时，$\displaystyle\sum_{n=1}^\infty(-1)^{n-1}\frac1{n^p}$ 绝对收敛；当 $0<p\le1$ 时，由莱布尼茨定理知 $\displaystyle\sum_{n=1}^\infty(-1)^{n-1}\frac1{n^p}$ 收敛，但 $\displaystyle\sum_{n=1}^\infty\frac1{n^p}$ 发散，故原级数条件收敛；当 $p\le0$ 时，$(-1)^{n-1}\dfrac1{n^p}$ 不趋于零，这时级数发散。

#### §3.3 绝对收敛级数的性质 \*

若 $\varphi:\mathbb N_+\to\mathbb N_+$ 为一一对应，称 $\sum u_{\varphi(n)}$ 为 $\sum u_n$ 的重排级数。绝对收敛级数的任一重排仍绝对收敛，且

$$
\sum_{n=1}^{\infty}u_{\varphi(n)}=\sum_{n=1}^{\infty}u_n.
$$

若 $\sum u_n$ 条件收敛，则对任意给定实数 $\xi$，存在重排使其和为 $\xi$。

若 $\sum_{n=0}^{\infty}u_n=A$、$\sum_{n=0}^{\infty}v_n=B$ 均绝对收敛，令

$$
c_n=\sum_{k=0}^nu_kv_{n-k},
$$

则柯西乘积级数绝对收敛，且

$$
\sum_{n=0}^{\infty}c_n=AB.
$$

!!! warning "提示"

    -   **重排保持和不变的前提是绝对收敛**：绝对收敛级数任意重排仍绝对收敛且和不变；条件收敛级数重排可得到任意实数（黎曼定理）。

        ??? example "绝对收敛级数的重排"
            <!-- 待补充 -->

    -   **柯西乘积要求两个级数都绝对收敛**：只有这样 $\sum c_n=AB$ 才成立；条件收敛时柯西乘积不一定收敛到 $AB$。

        ??? example "柯西乘积"
            <!-- 待补充 -->

    -   **重排必须是一一对应**：$\varphi:\mathbb N_+\to\mathbb N_+$ 要为双射，不能遗漏或重复项；否则不是重排。

        ??? example "重排的定义"
            <!-- 待补充 -->

    -   **绝对收敛级数的柯西乘积绝对收敛**：这是比"乘积收敛"更强的结论，可用于证明幂级数乘法的合理性。

        ??? example "柯西乘积的绝对收敛"
            <!-- 待补充 -->

### §4 函数项级数与一致收敛性 \*

#### §4.1 函数项级数的基本概念

设 $u_n(x)$ 定义在集合 $E$ 上，称

$$
\sum_{n=1}^{\infty}u_n(x),\qquad x\in E
$$

为函数项级数，其部分和为 $S_n(x)=\sum_{k=1}^nu_k(x)$。使数项级数 $\sum u_n(x_0)$ 收敛的 $x_0$ 称为收敛点，全部收敛点构成收敛域 $D$。和函数与余项为

$$
S(x)=\lim_{n\to\infty}S_n(x),\qquad
R_n(x)=S(x)-S_n(x),\qquad x\in D.
$$

!!! warning "提示"

    -   **收敛域是逐点定义的**：$D$ 是所有使数项级数 $\sum u_n(x_0)$ 收敛的 $x_0$ 的集合；和函数 $S(x)$ 在 $D$ 上逐点定义。

        ??? example "收敛域"
            <!-- 待补充 -->

    -   **逐点收敛与一致收敛不同**：逐点收敛只保证每个 $x$ 有自己的 $N$；一致收敛要求 $N$ 与 $x$ 无关。

        ??? example "逐点收敛"
            <!-- 待补充 -->

    -   **余项依赖 $x$**：$R_n(x)=S(x)-S_n(x)$ 是 $x$ 的函数；逐点收敛只说明对每个固定的 $x$，$R_n(x)\to0$。

        ??? example "函数项级数的余项"
            <!-- 待补充 -->

    -   **收敛域可能包含端点**：求收敛域时先求收敛区间，再单独判断端点；不要漏掉端点。

        ??? example "收敛域的端点"
            <!-- 待补充 -->

#### §4.2 函数项级数一致收敛的概念

若对任意 $\varepsilon>0$，存在与 $x$ 无关的正整数 $N$，使当 $n>N$ 时，对一切 $x\in D$ 均有

$$
|S_n(x)-S(x)|<\varepsilon,
$$

则称 $\sum u_n(x)$ 在 $D$ 上一致收敛于 $S(x)$。

!!! warning "提示"

    -   **$N$ 与 $x$ 无关**：一致收敛要求存在只依赖于 $\varepsilon$ 的 $N$，使 $n>N$ 时对**一切** $x\in D$ 都有 $|S_n(x)-S(x)|<\varepsilon$。

        ??? example "一致收敛的定义"
            <!-- 待补充 -->

    -   **一致收敛强于逐点收敛**：一致收敛可推出逐点收敛；逐点收敛不能推出一致收敛（如 $x^n$ 在 $[0,1]$ 上）。

        ??? example "一致收敛与逐点收敛"
            <!-- 待补充 -->

    -   **上确界判别法**：$\sum u_n$ 在 $D$ 上一致收敛 $\iff$ $\lim_{n\to\infty}\sup_{x\in D}|S(x)-S_n(x)|=0$；需要先知道和函数。

        ??? example "上确界判别法"
            <!-- 待补充 -->

    -   **柯西准则中的 $N$ 与 $x$ 无关**：$\left|\sum_{k=n+1}^{n+p}u_k(x)\right|<\varepsilon$ 要对一切 $x\in D$、$p$ 同时成立。

        ??? example "一致收敛的柯西准则"
            <!-- 待补充 -->

#### §4.3 函数项级数一致收敛性的判别法

一致收敛的柯西准则为

$$
\forall\varepsilon>0,\ \exists N,\ \forall n>N,\ \forall p\in\mathbb N_+,\ \forall x\in D:
\left|\sum_{k=n+1}^{n+p}u_k(x)\right|<\varepsilon.
$$

对已有和函数的级数，

$$
\sum u_n(x)\text{ 在 }D\text{ 上一致收敛}
\ \Longleftrightarrow\quad
\lim_{n\to\infty}\sup_{x\in D}|S(x)-S_n(x)|=0.
$$

魏尔斯特拉斯判别法：若对所有 $x\in D$，有 $|u_n(x)|\le M_n$，且正项级数 $\sum M_n$ 收敛，则 $\sum u_n(x)$ 在 $D$ 上一致收敛。

!!! warning "提示"

    -   **魏尔斯特拉斯判别法是充分条件**：若 $|u_n(x)|\le M_n$ 且 $\sum M_n$ 收敛，则 $\sum u_n(x)$ 一致收敛；反之不成立。

        ??? example "魏尔斯特拉斯判别法"
            <!-- 待补充 -->

    -   **控制级数要与 $x$ 无关**：$M_n$ 必须是常数，不能依赖 $x$；否则不能保证一致收敛。

        ??? example "控制级数的选择"
            <!-- 待补充 -->

    -   **柯西准则可用于否定一致收敛**：若能找到 $x$ 和 $p$ 使部分和超过 $\varepsilon$，则可判定不一致收敛。

        ??? example "用柯西准则否定一致收敛"
            <!-- 待补充 -->

    -   **先确定收敛域再谈一致收敛**：一致收敛是在某个集合 $D$ 上说的；在不同区间上结论可能不同。

        ??? example "一致收敛的区间"
            <!-- 待补充 -->

??? info "魏尔斯特拉斯判别法的证明"

    正项级数 $\sum M_n$ 收敛，由数项级数的柯西准则知，$\forall\varepsilon>0$，$\exists$ 正整数 $N>0\ (N>k)$，当 $n>N$ 时，对一切正整数 $p$，都有

    $$
    |M_{n+1}+M_{n+2}+\cdots+M_{n+p}|<\varepsilon,
    $$

    则对一切 $x\in D$，都有

    $$
    \begin{aligned}
    |u_{n+1}(x)+u_{n+2}(x)+\cdots+u_{n+p}(x)|
    &\le|M_{n+1}+M_{n+2}+\cdots+M_{n+p}|\\
    &<\varepsilon.
    \end{aligned}
    $$

    由函数项级数一致收敛的柯西准则，级数 $\sum u_n(x)$ 在 $D$ 上一致收敛。

???+ example "例6（1）"

    证明函数项级数 $\displaystyle\sum_{n=1}^\infty\frac{\sin nx}{\sqrt[3]{n^4+x^4}}$ 在 $|x|<+\infty$ 上一致收敛。

    ??? success "解析"

        由于当 $|x|<+\infty$ 时，

        $$
        \left|\frac{\sin nx}{\sqrt[3]{n^4+x^4}}\right|\le\frac1{n^{4/3}},
        $$

        且 $\displaystyle\sum_{n=1}^\infty\frac1{n^{4/3}}$ 收敛，故由 $M$ 判别法知，级数 $\displaystyle\sum_{n=1}^\infty\frac{\sin nx}{\sqrt[3]{n^4+x^4}}$ 当 $|x|<+\infty$ 时一致收敛。

#### §4.4 一致收敛级数的性质

若各 $u_n$ 在区间 $I$ 上连续，且级数在 $I$ 上一致收敛于 $S$，则 $S$ 连续，并有

$$
\lim_{x\to x_0}\sum_{n=1}^{\infty}u_n(x)
=\sum_{n=1}^{\infty}\lim_{x\to x_0}u_n(x).
$$

在同样条件下，任取 $a,b\in I$，有逐项积分公式

$$
\int_a^b\left[\sum_{n=1}^{\infty}u_n(x)\right]\mathrm dx
=\sum_{n=1}^{\infty}\int_a^bu_n(x)\,\mathrm dx.
$$

若各 $u_n$ 在 $I$ 上有连续导数，$\sum u_n$ 在 $I$ 上收敛，且 $\sum u_n'$ 在 $I$ 上一致收敛，则

$$
S'(x)=\left[\sum_{n=1}^{\infty}u_n(x)\right]'
=\sum_{n=1}^{\infty}u_n'(x).
$$

!!! warning "提示"

    -   **连续函数的和**：各项连续且级数一致收敛时，和函数连续，并可逐项求极限。

        ??? example "和函数的连续性"
            <!-- 待补充 -->

    -   **逐项积分要求一致收敛**：仅有逐点收敛不够；一致收敛保证积分与求和可交换。

        ??? example "逐项积分"
            <!-- 待补充 -->

    -   **逐项求导的条件更强**：需要 $\sum u_n$ 收敛、$\sum u_n'$ 一致收敛，且各项有连续导数；缺一不可。

        ??? example "逐项求导"
            <!-- 待补充 -->

    -   **积分区间要在收敛区间内**：逐项积分对 $I$ 内任意 $a,b$ 成立；超出 $I$ 不能保证。

        ??? example "逐项积分的区间"
            <!-- 待补充 -->

### §5 幂级数及其和函数

#### §5.1 幂级数及其收敛半径

形如

$$
\sum_{n=0}^{\infty}a_n(x-x_0)^n
$$

的函数项级数称为幂级数，$a_n$ 为常数，$x_0$ 为展开中心。

阿贝尔定理：若 $\sum a_nx^n$ 在 $x=x_1\ne0$ 收敛，则在 $|x|<|x_1|$ 内绝对收敛；若在 $x=x_1$ 发散，则在 $|x|>|x_1|$ 处发散。

??? info "阿贝尔定理的证明"

    先设 $x_1$ 是幂级数 $\sum a_nx^n$ 的收敛点，即级数

    $$
    a_0+a_1x_1+a_2x_1^2+\cdots+a_nx_1^n+\cdots
    $$

    收敛。根据级数收敛的必要条件，这时有

    $$
    \lim_{n\to\infty}a_nx_1^n=0,
    $$

    于是存在一个常数 $M$，使得

    $$
    |a_nx_1^n|\le M\quad(n=0,1,2,\ldots).
    $$

    这样级数 $\sum a_nx^n$ 的一般项的绝对值

    $$
    |a_nx^n|=\left|a_nx_1^n\cdot\frac{x^n}{x_1^n}\right|
    =|a_nx_1^n|\cdot\left|\frac x{x_1}\right|^n
    \le M\left|\frac x{x_1}\right|^n.
    $$

    因为当 $|x|<|x_1|$ 时，等比级数 $\displaystyle\sum_{n=0}^\infty M\left|\dfrac x{x_1}\right|^n$ 收敛（公比 $\left|\dfrac x{x_1}\right|<1$），所以级数 $\sum|a_nx^n|$ 收敛，也就是幂级数 $\sum a_nx^n$ 绝对收敛。

    定理的第二部分可用反证法证明。假设幂级数当 $x=x_1$ 时发散而有一点 $x_2$ 适合 $|x_2|>|x_1|$ 使级数收敛，则根据本定理的第一部分，级数当 $x=x_1$ 时应收敛，这与假设矛盾。定理得证。

幂级数存在收敛半径 $R\in[0,+\infty]$，满足

$$
|x-x_0|<R\ \Longrightarrow\ \text{绝对收敛},\qquad
|x-x_0|>R\ \Longrightarrow\ \text{发散}.
$$

$(x_0-R,x_0+R)$ 称为收敛区间，收敛域由收敛区间及收敛的边界点构成。

当下列极限存在时，收敛半径为

$$
R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|,
\qquad\text{或}\qquad
R=\lim_{n\to\infty}\frac1{\sqrt[n]{|a_n|}}.
$$

!!! warning "提示"

    -   **阿贝尔定理的方向**：在 $x_1$ 收敛则 $|x|<|x_1|$ 内绝对收敛；在 $x_1$ 发散则 $|x|>|x_1|$ 处发散；边界点要单独判断。

        ??? example "阿贝尔定理"
            <!-- 待补充 -->

    -   **收敛半径可能为 $0$ 或 $+\infty$**：$R=0$ 时只在中心收敛，$R=+\infty$ 时在全实轴收敛；不要把 $R$ 当作一定有限。

        ??? example "收敛半径的特殊值"
            <!-- 待补充 -->

    -   **收敛区间与收敛域不同**：收敛区间是 $(x_0-R,x_0+R)$，收敛域还要加上使级数收敛的端点。

        ??? example "收敛域"
            <!-- 待补充 -->

    -   **收敛半径公式的极限要存在**：$R=\lim|a_n/a_{n+1}|$ 或 $R=1/\lim\sqrt[n]{|a_n|}$ 在极限存在时使用；否则用根值或定义判断。

        ??? example "求收敛半径"
            <!-- 待补充 -->

???+ example "例1（4）"

    求幂级数 $\displaystyle\sum_{n=1}^\infty\frac{(x-1)^{2n}}{n\cdot4^n}$ 的收敛半径、收敛区间及收敛域。

    ??? success "解析"

        此级数缺项，我们可直接利用绝对值的比值判别法。由于

        $$
        \begin{aligned}
        \lim_{n\to\infty}\frac{|u_{n+1}|}{|u_n|}
        &=\lim_{n\to\infty}\left(\frac{|x-1|^{2n+2}}{(n+1)4^{n+1}}
        \bigg/\frac{|x-1|^{2n}}{n4^n}\right)\\
        &=\lim_{n\to\infty}\frac{(x-1)^2}{4}\cdot\frac n{n+1}
        =\frac{|x-1|^2}{4},
        \end{aligned}
        $$

        当 $\dfrac{|x-1|^2}{4}<1$，即 $|x-1|<2$ 时，幂级数绝对收敛；当 $|x-1|>2$ 时，幂级数发散。

        所以收敛半径 $R=2$，收敛区间是 $(-1,3)$。

        当 $x=-1$ 时，幂级数为 $\displaystyle\sum_{n=1}^\infty\frac{(-2)^{2n}}{n4^n}=\sum_{n=1}^\infty\frac1n$，发散；当 $x=3$ 时，幂级数为 $\displaystyle\sum_{n=1}^\infty\frac{2^{2n}}{n4^n}=\sum_{n=1}^\infty\frac1n$，也发散。故收敛域是 $(-1,3)$。

#### §5.2 幂级数的性质及运算

设 $S(x)=\sum_{n=0}^{\infty}a_n(x-x_0)^n$ 的收敛半径为 $R>0$。在收敛区间内，$S$ 连续，可逐项求导与积分，所得幂级数的收敛半径仍为 $R$：

$$
S'(x)=\sum_{n=1}^{\infty}na_n(x-x_0)^{n-1},
$$

$$
\int_{x_0}^{x}S(t)\,\mathrm dt
=\sum_{n=0}^{\infty}\frac{a_n}{n+1}(x-x_0)^{n+1},
\qquad |x-x_0|<R.
$$

$$
a_n=\frac{S^{(n)}(x_0)}{n!}.
$$

若 $A(x)=\sum a_nx^n$、$B(x)=\sum b_nx^n$ 的收敛半径分别为 $R_a,R_b$，$R=\min\{R_a,R_b\}$，则在 $|x|<R$ 内，

$$
\alpha A(x)+\beta B(x)=\sum_{n=0}^{\infty}(\alpha a_n+\beta b_n)x^n,
$$

$$
A(x)B(x)=\sum_{n=0}^{\infty}c_nx^n,
\qquad c_n=\sum_{k=0}^na_kb_{n-k}.
$$

!!! warning "提示"

    -   **逐项求导、积分后半径不变**：在收敛区间内操作后收敛半径仍为 $R$，但端点的敛散性可能改变。

        ??? example "逐项求导与积分"
            <!-- 待补充 -->

    -   **端点处不能随意逐项求导**：幂级数在收敛区间内部可逐项求导、积分；端点处需要单独讨论。

        ??? example "端点处的性质"
            <!-- 待补充 -->

    -   **系数公式的适用范围**：$a_n=\dfrac{S^{(n)}(x_0)}{n!}$ 要求 $S$ 在 $x_0$ 的邻域内能展开为幂级数；不能对任意函数直接使用。

        ??? example "系数与导数"
            <!-- 待补充 -->

    -   **乘积的收敛半径至少为 $\min\{R_a,R_b\}$**：可能更大；柯西乘积的系数 $c_n=\sum a_kb_{n-k}$ 不要漏项。

        ??? example "幂级数的乘法"
            <!-- 待补充 -->

#### §5.3 幂级数的和函数

幂级数在收敛域内的和 $S(x)$ 称为其和函数。下列和函数公式成立：

$$
\sum_{n=0}^{\infty}x^n=\frac1{1-x},\qquad |x|<1,
$$

$$
\sum_{n=1}^{\infty}\frac{x^n}{n}=-\ln(1-x),\qquad -1\le x<1,
$$

$$
\sum_{n=1}^{\infty}nx^{n-1}=\frac1{(1-x)^2},\qquad |x|<1.
$$

!!! warning "提示"

    -   **公式的成立范围要记准**：$\displaystyle\sum_{n=0}^{\infty}x^n=\frac1{1-x}$（$|x|<1$）；$\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n}=-\ln(1-x)$（$-1\le x<1$）。

        ??? example "和函数公式"
            <!-- 待补充 -->

    -   **下标起点影响首项**：从 $n=0$ 与从 $n=1$ 开始的和函数不同，使用公式前先对齐下标。

        ??? example "下标与首项"
            <!-- 待补充 -->

    -   **可用逐项求导、积分构造和函数**：但要注意操作后的收敛域和端点变化。

        ??? example "构造和函数"
            <!-- 待补充 -->

    -   **和函数在收敛域内连续**：端点处要单独判断；不能把收敛区间内的公式直接外推到端点。

        ??? example "和函数的连续性"
            <!-- 待补充 -->

???+ example "例2（1）"

    求幂级数 $\displaystyle\sum_{n=1}^\infty\frac{x^n}{n}$ 的收敛半径、收敛区间、收敛域及和函数。

    ??? success "解析"

        设 $S(x)=\displaystyle\sum_{n=1}^\infty\frac{x^n}{n},\ x\in(-R,R)$，$S(0)=0$。由幂级数逐项求导的性质知

        $$
        S'(x)=\left(\sum_{n=1}^\infty\frac{x^n}{n}\right)'
        =\sum_{n=1}^\infty x^{n-1}=\frac1{1-x},\qquad |x|<1.
        $$

        所以 $R=1$，收敛区间为 $(-1,1)$。当 $x=-1$ 时，$\displaystyle\sum_{n=1}^\infty\frac{(-1)^n}{n}$ 收敛；当 $x=1$ 时，$\displaystyle\sum_{n=1}^\infty\frac1n$ 发散，故收敛域为 $[-1,1)$。由

        $$
        \int_0^x S'(x)\,\mathrm dx=S(x)-S(0),
        $$

        知

        $$
        S(x)=S(0)+\int_0^x S'(x)\,\mathrm dx.
        $$

        由于 $S(0)=0$，于是

        $$
        S(x)=\int_0^x\frac1{1-x}\,\mathrm dx=-\ln(1-x),\qquad x\in(-1,1).
        $$

        由于级数在 $x=-1$ 处收敛，$-\ln(1-x)$ 在 $x=-1$ 处连续，所以

        $$
        \sum_{n=1}^\infty\frac{x^n}{n}=-\ln(1-x),\qquad x\in[-1,1).
        $$

### §6 函数展成幂级数

#### §6.1 泰勒级数

若 $f$ 在 $x_0$ 的邻域内具有任意阶导数，则

$$
\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
$$

称为 $f$ 在 $x_0$ 处的泰勒级数。$x_0=0$ 时称为麦克劳林级数。

若该级数在 $|x-x_0|<R$ 内收敛，则它等于 $f(x)$ 的充要条件为泰勒余项趋于零：

$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n
\ \Longleftrightarrow\quad
\lim_{n\to\infty}R_n(x)=0,
$$

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1},
$$

其中 $\xi$ 位于 $x_0$ 与 $x$ 之间。

!!! warning "提示"

    -   **泰勒级数收敛不一定等于 $f(x)$**：需要余项 $R_n(x)\to0$（或 $f$ 在展开点解析）；仅算出级数并验证收敛还不够。

        ??? example "泰勒级数与函数"
            <!-- 待补充 -->

    -   **余项中的 $\xi$ 依赖 $x,n$**：拉格朗日余项不能把 $\xi$ 当作固定点；估计误差时要取上界。

        ??? example "泰勒余项"
            <!-- 待补充 -->

    -   **收敛半径由奇点决定**：泰勒级数的收敛半径受复平面上的奇点限制，可能小于函数定义域。

        ??? example "收敛半径"
            <!-- 待补充 -->

    -   **麦克劳林级数是 $x_0=0$ 的特例**：一般泰勒级数以 $x_0$ 为中心，不要混用系数中的 $x_0$。

        ??? example "麦克劳林级数"
            <!-- 待补充 -->

#### §6.2 基本初等函数的幂级数展开

$$
e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!},\qquad x\in\mathbb R,
$$

$$
\sin x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!},\qquad x\in\mathbb R,
$$

$$
\cos x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!},\qquad x\in\mathbb R,
$$

$$
\ln(1+x)=\sum_{n=1}^{\infty}(-1)^{n-1}\frac{x^n}{n},\qquad -1<x\le1,
$$

$$
(1+x)^\alpha=\sum_{n=0}^{\infty}\binom{\alpha}{n}x^n,\qquad |x|<1,
$$

$$
\binom{\alpha}{0}=1,\qquad
\binom{\alpha}{n}=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}.
$$

$$
\frac1{1-x}=\sum_{n=0}^{\infty}x^n,\qquad
\frac1{1+x}=\sum_{n=0}^{\infty}(-1)^nx^n,\qquad |x|<1.
$$

!!! warning "提示"

    -   **各展开式的成立范围不同**：$e^x,\sin x,\cos x$ 对 $x\in\mathbb R$ 成立；$\ln(1+x)$ 为 $-1<x\le1$；$(1+x)^\alpha$ 为 $|x|<1$（端点视 $\alpha$ 而定）。

        ??? example "展开式的收敛域"
            <!-- 待补充 -->

    -   **符号与阶乘不要写错**：$\sin x$ 只有奇次项且符号交替，$\cos x$ 只有偶次项；分母是对应阶乘。

        ??? example "正弦与余弦的展开"
            <!-- 待补充 -->

    -   **$\ln(1+x)$ 的端点**：$x=1$ 时收敛（交错调和级数），$x=-1$ 时发散；不能笼统写 $|x|<1$。

        ??? example "对数函数的展开"
            <!-- 待补充 -->

    -   **二项式系数**：$\binom{\alpha}{n}=\dfrac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}$，$\alpha$ 为整数时可能退化为有限项。

        ??? example "二项式展开"
            <!-- 待补充 -->

#### §6.3 函数展成幂级数的其他方法

$$
\frac1{1+x^2}=\sum_{n=0}^{\infty}(-1)^nx^{2n},\qquad |x|<1,
$$

$$
\arctan x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{2n+1},\qquad -1\le x\le1,
$$

$$
\frac1{\sqrt{1+x}}
=\sum_{n=0}^{\infty}(-1)^n\frac{(2n-1)!!}{(2n)!!}x^n,\qquad |x|<1,
$$

$$
\frac1{\sqrt{1-x^2}}
=\sum_{n=0}^{\infty}\frac{(2n-1)!!}{(2n)!!}x^{2n},\qquad |x|<1,
$$

$$
\arcsin x=\sum_{n=0}^{\infty}
\frac{(2n-1)!!}{(2n)!!}\frac{x^{2n+1}}{2n+1},\qquad |x|<1.
$$

其中 $(2n)!!=2\cdot4\cdots2n$，$(2n-1)!!=1\cdot3\cdots(2n-1)$，约定 $0!!=(-1)!!=1$。

!!! warning "提示"

    -   **逐项求导、积分后端点可能改变**：收敛半径不变，但端点的敛散性要重新判断；如 $\arctan x$ 的展开在 $x=\pm1$ 处条件收敛。

        ??? example "逐项积分得到的展开"
            <!-- 待补充 -->

    -   **先变形再套公式**：如 $\dfrac1{1+x^2}=\displaystyle\sum(-1)^nx^{2n}$ 是由 $\dfrac1{1+t}$ 令 $t=x^2$ 得到，注意 $|x|<1$。

        ??? example "变形后展开"
            <!-- 待补充 -->

    -   **双阶乘约定**：$(2n)!!=2\cdot4\cdots2n$，$(2n-1)!!=1\cdot3\cdots(2n-1)$，并约定 $0!!=(-1)!!=1$。

        ??? example "双阶乘"
            <!-- 待补充 -->

    -   **$\arcsin x$ 的收敛域**：$|x|<1$ 内展开成立，端点 $x=\pm1$ 需单独讨论；不能直接写全体实数。

        ??? example "反正弦的展开"
            <!-- 待补充 -->

### §7 幂级数的应用 \*

#### §7.1 函数的近似公式

当 $|x|$ 很小时，

$$
\sin x\approx x,\qquad
\sin x\approx x-\frac{x^3}{3!},\qquad
\sin x\approx x-\frac{x^3}{3!}+\frac{x^5}{5!},
$$

$$
\cos x\approx1,\qquad
\cos x\approx1-\frac{x^2}{2!},\qquad
\cos x\approx1-\frac{x^2}{2!}+\frac{x^4}{4!},
$$

$$
\ln(1+x)\approx x,\qquad
\ln(1+x)\approx x-\frac{x^2}{2},\qquad
\ln(1+x)\approx x-\frac{x^2}{2}+\frac{x^3}{3}.
$$

!!! warning "提示"

    -   **误差阶要清楚**：$\sin x\approx x$ 的误差为 $O(x^3)$，$\sin x\approx x-\dfrac{x^3}{3!}$ 的误差为 $O(x^5)$；截断到更高阶通常更精确。

        ??? example "近似阶数与误差"
            <!-- 待补充 -->

    -   **近似只在 $|x|$ 小时可靠**：$|x|$ 较大时误差迅速增大，不能把局部近似外推到整个定义域。

        ??? example "近似的适用范围"
            <!-- 待补充 -->

    -   **交替级数可用首个舍项估计误差**：若满足莱布尼茨条件，截断误差不超过第一个被舍去的项。

        ??? example "截断误差"
            <!-- 待补充 -->

    -   **不要混用不同阶的近似**：同一表达式中的各项应保持相同阶数，否则误差阶无法控制。

        ??? example "近似阶数的一致性"
            <!-- 待补充 -->

#### §7.2 数值计算

设

$$
A=\sum_{n=1}^{\infty}a_n,\qquad A_N=\sum_{n=1}^Na_n,
$$

截尾误差为

$$
R_N=A-A_N=\sum_{n=N+1}^{\infty}a_n.
$$

若满足莱布尼茨判别法的条件，则

$$
|R_N|\le|a_{N+1}|.
$$

若 $0\le a_n\le b_n$ 且 $\sum b_n$ 收敛，则

$$
0\le R_N\le\sum_{n=N+1}^{\infty}b_n.
$$

!!! warning "提示"

    -   **截尾误差与舍入误差不同**：$R_N=A-A_N$ 是截断级数产生的误差；实际计算还要考虑浮点舍入误差。

        ??? example "截尾误差"
            <!-- 待补充 -->

    -   **莱布尼茨级数的误差估计**：满足莱布尼茨条件时 $|R_N|\le|a_{N+1}|$；不满足时不能直接用。

        ??? example "交错级数的数值计算"
            <!-- 待补充 -->

    -   **比较法估计余项**：$0\le a_n\le b_n$ 且 $\sum b_n$ 收敛时，$0\le R_N\le\sum_{n=N+1}^{\infty}b_n$；需要先找到可求和的控制级数。

        ??? example "余项估计"
            <!-- 待补充 -->

    -   **先保证级数收敛再谈数值计算**：发散级数不能通过截断得到可靠近似；计算前先判断敛散性。

        ??? example "数值计算的前提"
            <!-- 待补充 -->

#### §7.3 积分计算

$$
\int\frac{\sin x}{x}\,\mathrm dx
=\sum_{n=0}^{\infty}(-1)^n
\frac{x^{2n+1}}{(2n+1)(2n+1)!}+C,
$$

其中 $\sin x/x$ 在 $x=0$ 处补充定义为 $1$。

欧拉公式为

$$
e^{ix}=\cos x+i\sin x,\qquad e^{-ix}=\cos x-i\sin x,
$$

$$
\sin x=\frac{e^{ix}-e^{-ix}}{2i},\qquad
\cos x=\frac{e^{ix}+e^{-ix}}2,
\qquad i^2=-1.
$$

!!! warning "提示"

    -   **逐项积分要求一致收敛**：在幂级数的收敛区间内可以逐项积分；超出收敛区间不能保证。

        ??? example "逐项积分"
            <!-- 待补充 -->

    -   **$\dfrac{\sin x}{x}$ 在 $x=0$ 要补充定义**：原函数在 $x=0$ 无定义，但极限为 $1$，积分时按补充定义处理。

        ??? example "$\sin x/x$ 的积分"
            <!-- 待补充 -->

    -   **欧拉公式的符号**：$e^{ix}=\cos x+i\sin x$，$\sin x=\dfrac{e^{ix}-e^{-ix}}{2i}$，$\cos x=\dfrac{e^{ix}+e^{-ix}}2$；分母的 $i$ 不要漏。

        ??? example "欧拉公式"
            <!-- 待补充 -->

    -   **不定积分要加 $C$**：定积分则要代入上下限；逐项积分后的常数项不能漏。

        ??? example "积分常数"
            <!-- 待补充 -->

### §8 函数的傅里叶展开

#### §8.1 傅里叶级数的概念

函数系

$$
1,\quad\cos\frac{n\pi x}{l},\quad\sin\frac{n\pi x}{l},\qquad n=1,2,\ldots
$$

在 $[-l,l]$ 上正交：

$$
\int_{-l}^{l}\cos\frac{m\pi x}{l}\sin\frac{n\pi x}{l}\,\mathrm dx=0,
$$

$$
\int_{-l}^{l}\cos\frac{m\pi x}{l}\cos\frac{n\pi x}{l}\,\mathrm dx=0
\quad(m\ne n),
$$

$$
\int_{-l}^{l}\sin\frac{m\pi x}{l}\sin\frac{n\pi x}{l}\,\mathrm dx=0
\quad(m\ne n),
$$

$$
\int_{-l}^{l}\cos^2\frac{n\pi x}{l}\,\mathrm dx
=\int_{-l}^{l}\sin^2\frac{n\pi x}{l}\,\mathrm dx=l,\qquad n\ge1.
$$

函数 $f$ 的傅里叶系数为

$$
a_n=\frac1l\int_{-l}^{l}f(x)\cos\frac{n\pi x}{l}\,\mathrm dx,
\qquad n=0,1,2,\ldots,
$$

$$
b_n=\frac1l\int_{-l}^{l}f(x)\sin\frac{n\pi x}{l}\,\mathrm dx,
\qquad n=1,2,\ldots.
$$

以这些系数组成的三角级数称为 $f$ 的傅里叶级数，记为

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}
\left(a_n\cos\frac{n\pi x}{l}+b_n\sin\frac{n\pi x}{l}\right).
$$

!!! warning "提示"

    -   **$a_0$ 的系数与级数中的 $\dfrac{a_0}{2}$**：$a_0=\dfrac1l\displaystyle\int_{-l}^{l}f(x)\,\mathrm dx$，级数中写 $\dfrac{a_0}{2}$；不要漏掉 $\dfrac12$。

        ??? example "傅里叶系数 $a_0$"
            <!-- 待补充 -->

    -   **正交性与区间**：三角函数系在 $[-l,l]$ 上正交，系数中的 $l$ 对应周期 $2l$；区间或周期改变，公式随之改变。

        ??? example "三角函数系的正交性"
            <!-- 待补充 -->

    -   **$a_n,b_n$ 的下标起点**：$a_n$ 从 $n=0$ 开始，$b_n$ 从 $n=1$ 开始；$b_0$ 不出现。

        ??? example "系数的下标"
            <!-- 待补充 -->

    -   **傅里叶级数只是形式展开**：$\sim$ 表示形式对应，是否收敛到 $f$ 需分段光滑等条件；不能直接写等号。

        ??? example "傅里叶级数的收敛性"
            <!-- 待补充 -->

#### §8.2 周期函数的傅里叶展开

设 $f$ 为周期 $2l$ 的周期函数，在 $[-l,l]$ 上分段光滑，则其傅里叶级数在各点收敛，和函数为

$$
S(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}
\left(a_n\cos\frac{n\pi x}{l}+b_n\sin\frac{n\pi x}{l}\right)
=\frac{f(x-0)+f(x+0)}2.
$$

分段光滑是指区间可分成有限个子区间，$f$ 在各子区间内部具有连续导数，且 $f,f'$ 在分点处均有有限的相应单侧极限。

若 $f$ 为偶函数，则

$$
b_n=0,\qquad
a_n=\frac2l\int_0^lf(x)\cos\frac{n\pi x}{l}\,\mathrm dx.
$$

若 $f$ 为奇函数，则

$$
a_n=0,\qquad
b_n=\frac2l\int_0^lf(x)\sin\frac{n\pi x}{l}\,\mathrm dx.
$$

当 $2l=2\pi$ 时，

$$
a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,\mathrm dx,\qquad
b_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,\mathrm dx.
$$

!!! warning "提示"

    -   **间断点取左右极限平均**：傅里叶级数收敛到 $\dfrac{f(x-0)+f(x+0)}2$，不是 $f(x)$；连续点才等于 $f(x)$。

        ??? example "间断点的和"
            <!-- 待补充 -->

    -   **奇偶性简化系数**：偶函数 $b_n=0$，奇函数 $a_n=0$；非奇非偶时两者都要算，不能想当然消去。

        ??? example "奇偶函数的傅里叶级数"
            <!-- 待补充 -->

    -   **周期与角频率对应**：周期 $2l$ 对应 $\dfrac{n\pi x}{l}$；周期为 $2\pi$ 时 $l=\pi$，公式中的 $l$ 要替换。

        ??? example "周期与角频率"
            <!-- 待补充 -->

    -   **分段光滑条件**：$f$ 在 $[-l,l]$ 上分段光滑（分段连续可导、单侧极限有限）时才有收敛定理；不满足时不能保证收敛。

        ??? example "分段光滑条件"
            <!-- 待补充 -->

$f(x)$ 为周期函数，周期 $T=2l$，由周期函数的性质 $f(x+T)=f(x)$，得

$$
\frac{f(l-0)+f(l+0)}2
=\frac{f(l-0)+f(-l+0)}2,
$$

$$
\frac{f(-l-0)+f(-l+0)}2
=\frac{f(l-0)+f(-l+0)}2.
$$

所以在 $x=\pm l$ 处，$S(\pm l)=\dfrac{f(-l+0)+f(l-0)}2$（左端点的右极限与右端点的左极限的平均值）。这是因为周期函数常常只给一个周期内的表达式，我们利用一个周期内的表达式就可计算出在端点处傅里叶级数的和。

???+ example "例2"

    将 $f(x)=\arcsin(\sin x)$ 展开成傅里叶级数。

    ??? success "解析"

        $f(x)$ 是以 $2\pi$ 为周期的连续周期函数，$l=\pi$，且

        $$
        f(-x)=\arcsin(\sin(-x))=-\arcsin(\sin x)=-f(x),
        $$

        即 $f(x)$ 为奇函数，从而 $a_n=0,\ n=0,1,2,\ldots$。而

        $$
        \begin{aligned}
        b_n&=\frac2\pi\int_0^\pi\arcsin(\sin x)\sin nx\,\mathrm dx\\
        &=\frac2\pi\left[\int_0^{\pi/2}x\sin nx\,\mathrm dx
        +\int_{\pi/2}^\pi(\pi-x)\sin nx\,\mathrm dx\right]\\
        &=\frac2\pi\left[\left.\left(-\frac x n\cos nx+\frac1{n^2}\sin nx\right)\right|_0^{\pi/2}
        +\left.\left(-\frac\pi n\cos nx+\frac x n\cos nx-\frac1{n^2}\sin nx\right)\right|_{\pi/2}^\pi\right]\\
        &=\frac4{n^2\pi}\sin\frac{n\pi}{2}
        =\begin{cases}0,&n=2k,\\
        (-1)^k\dfrac4{\pi(2k+1)^2},&n=2k+1.
        \end{cases}
        \end{aligned}
        $$

        由狄利克雷定理知

        $$
        \begin{aligned}
        \sum_{n=1}^\infty\frac4{n^2\pi}\sin\frac{n\pi}{2}\sin nx
        &=\frac4\pi\sum_{k=0}^\infty\frac{(-1)^k}{(2k+1)^2}\sin(2k+1)x\\
        &=\arcsin(\sin x),\qquad x\in(-\infty,+\infty).
        \end{aligned}
        $$

#### §8.3 有限区间上的傅里叶展开

设 $f$ 在 $[-l,l]$ 上分段光滑，以周期 $2l$ 延拓，则在 $-l<x<l$ 内，

$$
\frac{a_0}{2}+\sum_{n=1}^{\infty}
\left(a_n\cos\frac{n\pi x}{l}+b_n\sin\frac{n\pi x}{l}\right)
=\frac{f(x-0)+f(x+0)}2.
$$

在端点处，

$$
S(-l)=S(l)=\frac{f(-l+0)+f(l-0)}2.
$$

对一般区间 $[a,b]$，令 $T=b-a$，则

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}
\left(a_n\cos\frac{2n\pi x}{T}+b_n\sin\frac{2n\pi x}{T}\right),
$$

$$
a_n=\frac2T\int_a^bf(x)\cos\frac{2n\pi x}{T}\,\mathrm dx,
\qquad
b_n=\frac2T\int_a^bf(x)\sin\frac{2n\pi x}{T}\,\mathrm dx.
$$

帕塞瓦尔等式为

$$
\frac{a_0^2}{2}+\sum_{n=1}^{\infty}(a_n^2+b_n^2)
=\frac1l\int_{-l}^{l}f(x)^2\,\mathrm dx,
$$

其中 $f$ 与 $f^2$ 均可积，$a_n,b_n$ 为其傅里叶系数。

对 $[0,l]$ 上分段光滑的函数，奇延拓所对应的正弦级数与偶延拓所对应的余弦级数分别为

$$
f(x)\sim\sum_{n=1}^{\infty}b_n\sin\frac{n\pi x}{l},\qquad
b_n=\frac2l\int_0^lf(x)\sin\frac{n\pi x}{l}\,\mathrm dx,
$$

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos\frac{n\pi x}{l},\qquad
a_n=\frac2l\int_0^lf(x)\cos\frac{n\pi x}{l}\,\mathrm dx.
$$

!!! warning "提示"

    -   **有限区间要先周期延拓**：在 $[-l,l]$ 上展开需以 $2l$ 为周期延拓；端点处的和是左右极限平均。

        ??? example "周期延拓"
            <!-- 待补充 -->

    -   **奇延拓与偶延拓的选择**：奇延拓得到正弦级数，偶延拓得到余弦级数；选择不同，系数公式不同。

        ??? example "奇延拓与偶延拓"
            <!-- 待补充 -->

    -   **一般区间的周期与系数**：$[a,b]$ 上周期 $T=b-a$，角频率 $\dfrac{2n\pi}{T}$，系数前乘 $\dfrac2T$；不要与 $[-l,l]$ 的公式混用。

        ??? example "一般区间的傅里叶展开"
            <!-- 待补充 -->

    -   **帕塞瓦尔等式的系数匹配**：$\dfrac{a_0^2}{2}+\sum(a_n^2+b_n^2)=\dfrac1l\int_{-l}^{l}f^2\,\mathrm dx$；$a_0$ 项要除以 $2$。

        ??? example "帕塞瓦尔等式"
            <!-- 待补充 -->

#### §8.4 复数形式的傅里叶级数 \*

设 $f$ 为周期 $2l$ 的分段光滑周期函数，其复数形式的傅里叶级数为

$$
f(x)\sim\sum_{n=-\infty}^{\infty}c_ne^{in\pi x/l},
\qquad
c_n=\frac1{2l}\int_{-l}^{l}f(x)e^{-in\pi x/l}\,\mathrm dx.
$$

与实数形式系数的关系为

$$
c_0=\frac{a_0}{2},\qquad
c_n=\frac{a_n-ib_n}{2},\qquad
c_{-n}=\frac{a_n+ib_n}{2},\qquad n\ge1.
$$

级数的和为 $[f(x-0)+f(x+0)]/2$。

!!! warning "提示"

    -   **指数上的负号**：$c_n=\dfrac1{2l}\displaystyle\int_{-l}^{l}f(x)e^{-in\pi x/l}\,\mathrm dx$，求系数时是指数负号，级数中是正号。

        ??? example "复数形式的系数"
            <!-- 待补充 -->

    -   **系数之间的关系**：$c_0=\dfrac{a_0}{2}$，$c_n=\dfrac{a_n-ib_n}{2}$，$c_{-n}=\dfrac{a_n+ib_n}{2}$；不要漏 $\dfrac12$ 或共轭。

        ??? example "实系数与复系数"
            <!-- 待补充 -->

    -   **级数从 $-\infty$ 到 $+\infty$**：复数形式是双边级数，不能只写 $n\ge0$；负频率项对应 $c_{-n}$。

        ??? example "双边级数"
            <!-- 待补充 -->

    -   **收敛和仍取平均**：在间断点处复数形式也收敛到 $\dfrac{f(x-0)+f(x+0)}2$。

        ??? example "复数形式的收敛性"
            <!-- 待补充 -->

#### §8.5 矩形区域上二元函数的傅里叶展开 \*

设 $f$ 定义在矩形 $G=[-l,l]\times[-h,h]$ 上，可按 $x,y$ 逐次作傅里叶展开，其复数形式为

$$
f(x,y)\sim\sum_{n=-\infty}^{\infty}
\left[\sum_{m=-\infty}^{\infty}c_{mn}e^{im\pi y/h}\right]e^{in\pi x/l},
$$

$$
c_{mn}=\frac1{4hl}\int_{-h}^{h}\mathrm dy\int_{-l}^{l}
f(x,y)e^{-i(n\pi x/l+m\pi y/h)}\,\mathrm dx,
\qquad m,n\in\mathbb Z.
$$

!!! warning "提示"

    -   **归一化因子是 $\dfrac1{4hl}$**：$c_{mn}=\dfrac1{4hl}\displaystyle\int_{-h}^{h}\mathrm dy\int_{-l}^{l}f(x,y)e^{-i(n\pi x/l+m\pi y/h)}\,\mathrm dx$，两个方向的周期分别为 $2l,2h$。

        ??? example "二元傅里叶系数"
            <!-- 待补充 -->

    -   **指数中的符号与顺序**：$e^{-i(n\pi x/l+m\pi y/h)}$，$n$ 对应 $x$、$m$ 对应 $y$；不要写反。

        ??? example "二元指数因子"
            <!-- 待补充 -->

    -   **逐次展开要保证一致收敛**：先对 $x$ 或先对 $y$ 展开，结果应一致；需要相应的连续性/分段光滑条件。

        ??? example "逐次展开"
            <!-- 待补充 -->

    -   **不连续点的收敛和**：二元情形在间断点处取各方向极限的平均，不能直接代入 $f(x,y)$。

        ??? example "二元展开的收敛性"
            <!-- 待补充 -->

## 第十二章 含参量积分 \*

### §1 含参量的常义积分

设 $f(x,y)$ 在矩形 $[a,b]\times[c,d]$ 上连续，则

$$
\varphi(y)=\int_a^bf(x,y)\,\mathrm dx,\qquad y\in[c,d]
$$

为含参量 $y$ 的常义积分。$\varphi$ 在 $[c,d]$ 上连续，且

$$
\lim_{y\to y_0}\int_a^bf(x,y)\,\mathrm dx
=\int_a^b\lim_{y\to y_0}f(x,y)\,\mathrm dx.
$$

$$
\int_c^d\left[\int_a^bf(x,y)\,\mathrm dx\right]\mathrm dy
=\int_a^b\left[\int_c^df(x,y)\,\mathrm dy\right]\mathrm dx.
$$

若 $f,f_y$ 均在上述矩形上连续，则

$$
\varphi'(y)=\frac{\mathrm d}{\mathrm dy}\int_a^bf(x,y)\,\mathrm dx
=\int_a^b\frac{\partial f}{\partial y}(x,y)\,\mathrm dx.
$$

??? info "含参量常义积分求导公式的证明"

    设 $g(y)=\displaystyle\int_a^b\frac{\partial}{\partial y}f(x,y)\,\mathrm dx$。$\dfrac{\partial}{\partial y}f(x,y)$ 在 $D$ 上连续，由含参量积分的连续性知 $g(y)$ 在 $[c,d]$ 上连续。由积分次序交换公式知，当 $v\in[c,d]$ 时，

    $$
    \begin{aligned}
    \int_c^v g(y)\,\mathrm dy
    &=\int_c^v\left[\int_a^b\frac{\partial}{\partial y}f(x,y)\,\mathrm dx\right]\mathrm dy\\
    &=\int_a^b\left[\int_c^v\frac{\partial}{\partial y}f(x,y)\,\mathrm dy\right]\mathrm dx\\
    &=\int_a^b[f(x,v)-f(x,c)]\,\mathrm dx\\
    &=\int_a^b f(x,v)\,\mathrm dx-\int_a^b f(x,c)\,\mathrm dx\\
    &=\varphi(v)-\varphi(c).
    \end{aligned}
    $$

    两边同时对 $v$ 求导，有 $g(v)=\varphi'(v)$，即 $g(y)=\varphi'(y)$。于是 $\dfrac{\mathrm d}{\mathrm dy}\varphi(y)=g(y)$，所以

    $$
    \frac{\mathrm d}{\mathrm dy}\int_a^b f(x,y)\,\mathrm dx
    =\int_a^b\frac{\partial}{\partial y}f(x,y)\,\mathrm dx.
    $$

若上下限 $g_1(y),g_2(y)$ 在 $[c,d]$ 上可导，且 $a\le g_1(y)\le g_2(y)\le b$，则

$$
\frac{\mathrm d}{\mathrm dy}\int_{g_1(y)}^{g_2(y)}f(x,y)\,\mathrm dx
=\int_{g_1(y)}^{g_2(y)}f_y(x,y)\,\mathrm dx
+f(g_2(y),y)g_2'(y)-f(g_1(y),y)g_1'(y).
$$

!!! warning "提示"

    -   **连续性与极限交换**：$f(x,y)$ 在闭矩形 $[a,b]\times[c,d]$ 上连续时，$\varphi(y)=\int_a^bf(x,y)\,\mathrm dx$ 连续，积分与极限可以交换。

        ??? example "含参量积分的连续性"
            <!-- 待补充 -->

    -   **积分次序交换的条件**：$f$ 在矩形上连续时，$\int_c^d\mathrm dy\int_a^bf\,\mathrm dx=\int_a^b\mathrm dx\int_c^df\,\mathrm dy$；区域不是矩形时要重新处理。

        ??? example "交换积分次序"
            <!-- 待补充 -->

    -   **求导公式的前提**：$\varphi'(y)=\int_a^bf_y(x,y)\,\mathrm dx$ 要求 $f,f_y$ 在矩形上连续；仅有 $f$ 连续不够。

        ??? example "含参量积分求导"
            <!-- 待补充 -->

    -   **变上下限的边界项**：$\dfrac{\mathrm d}{\mathrm dy}\int_{g_1(y)}^{g_2(y)}f\,\mathrm dx=\int_{g_1}^{g_2}f_y\,\mathrm dx+f(g_2,y)g_2'-f(g_1,y)g_1'$，上下限的符号不要写反。

        ??? example "变限含参量积分"
            <!-- 待补充 -->

???+ example "例2"

    计算定积分 $\displaystyle I=\int_0^1\frac{\ln(1+x)}{1+x^2}\,\mathrm dx$。

    ??? success "解析"

        考虑含参变量 $a$ 的积分

        $$
        \Phi(a)=\int_0^1\frac{\ln(1+ax)}{1+x^2}\,\mathrm dx.
        $$

        由于 $\Phi(0)=0,\ \Phi(1)=I$，故由含参量积分求导公式知

        $$
        \begin{aligned}
        \Phi'(a)
        &=\int_0^1\frac{\partial}{\partial a}\left[\frac{\ln(1+ax)}{1+x^2}\right]\mathrm dx
        =\int_0^1\frac{x}{(1+ax)(1+x^2)}\,\mathrm dx\\
        &=\frac1{1+a^2}\left[\int_0^1\frac{x\,\mathrm dx}{1+x^2}
        +\int_0^1\frac{a\,\mathrm dx}{1+x^2}-\int_0^1\frac{a\,\mathrm dx}{1+ax}\right]\\
        &=\frac1{1+a^2}\left[\frac12\ln2+\frac{a\pi}{4}-\ln(1+a)\right],\qquad0\le a\le1.
        \end{aligned}
        $$

        $$
        \begin{aligned}
        \Phi(1)-\Phi(0)
        &=\int_0^1\Phi'(a)\,\mathrm da\\
        &=\frac12\ln2\int_0^1\frac{\mathrm da}{1+a^2}
        +\frac\pi4\int_0^1\frac{a\,\mathrm da}{1+a^2}
        -\int_0^1\frac{\ln(1+a)}{1+a^2}\,\mathrm da,
        \end{aligned}
        $$

        得 $I=\dfrac\pi8\ln2+\dfrac\pi8\ln2-I$，于是 $I=\dfrac\pi8\ln2$。

### §2 含参量的反常积分

#### §2.1 含参量的反常积分

若对每个 $x\in[a,b]$，反常积分均收敛，则

$$
I(x)=\int_c^{+\infty}f(x,y)\,\mathrm dy
=\lim_{A\to+\infty}\int_c^Af(x,y)\,\mathrm dy
$$

称为含参量的无穷限反常积分。

若对任意 $\varepsilon>0$，存在与 $x$ 无关的 $M>c$，当 $A>M$ 时，对所有 $x\in[a,b]$ 均有

$$
\left|\int_A^{+\infty}f(x,y)\,\mathrm dy\right|<\varepsilon,
$$

则称该积分在 $[a,b]$ 上一致收敛。

一致收敛的柯西准则为

$$
\forall\varepsilon>0,\ \exists M>c,\ \forall A_1,A_2>M,\ \forall x\in[a,b]:
\left|\int_{A_1}^{A_2}f(x,y)\,\mathrm dy\right|<\varepsilon.
$$

魏尔斯特拉斯判别法：若 $|f(x,y)|\le g(y)$，且 $\int_c^{+\infty}g(y)\,\mathrm dy$ 收敛，则含参积分在 $[a,b]$ 上一致收敛。

若 $f(x,y)$ 在 $a\le x\le b,c\le y<d$ 上有定义，且对各 $x$，$y=d$ 是瑕点，则

$$
\int_c^df(x,y)\,\mathrm dy
=\lim_{A\to d^-}\int_c^Af(x,y)\,\mathrm dy
$$

称为含参量的无界函数反常积分。

!!! warning "提示"

    -   **一致收敛的 $M$ 与 $x$ 无关**：逐点收敛只保证每个 $x$ 有自己的 $M$；一致收敛要求存在对所有 $x\in[a,b]$ 都有效的 $M$。

        ??? example "含参量反常积分的一致收敛"
            <!-- 待补充 -->

    -   **魏尔斯特拉斯判别法的控制函数与 $x$ 无关**：若 $|f(x,y)|\le g(y)$ 且 $\int_c^{+\infty}g(y)\,\mathrm dy$ 收敛，则一致收敛；$g$ 不能依赖 $x$。

        ??? example "魏尔斯特拉斯判别法"
            <!-- 待补充 -->

    -   **柯西准则的量词**：要对一切 $A_1,A_2>M$ 和一切 $x\in[a,b]$ 都有 $\left|\int_{A_1}^{A_2}f\,\mathrm dy\right|<\varepsilon$。

        ??? example "一致收敛的柯西准则"
            <!-- 待补充 -->

    -   **无穷限与瑕点要区分**：$y\to+\infty$ 是无穷限反常积分，$y\to d^-$ 是无界函数反常积分；两者的一致收敛定义类似，但极限过程不同。

        ??? example "两类含参量反常积分"
            <!-- 待补充 -->

#### §2.2 含参量的反常积分的性质

设 $f$ 在 $a\le x\le b,c\le y<+\infty$ 上连续，且

$$
I(x)=\int_c^{+\infty}f(x,y)\,\mathrm dy
$$

在 $[a,b]$ 上一致收敛，则 $I$ 连续，并有

$$
\lim_{x\to x_0}\int_c^{+\infty}f(x,y)\,\mathrm dy
=\int_c^{+\infty}\lim_{x\to x_0}f(x,y)\,\mathrm dy,
$$

$$
\int_a^b\mathrm dx\int_c^{+\infty}f(x,y)\,\mathrm dy
=\int_c^{+\infty}\mathrm dy\int_a^bf(x,y)\,\mathrm dx.
$$

若 $f,f_x$ 连续，$\int_c^{+\infty}f(x,y)\,\mathrm dy$ 在 $[a,b]$ 上收敛，且 $\int_c^{+\infty}f_x(x,y)\,\mathrm dy$ 在 $[a,b]$ 上一致收敛，则

$$
I'(x)=\int_c^{+\infty}f_x(x,y)\,\mathrm dy.
$$

设 $f$ 在 $a\le x<+\infty,c\le y<+\infty$ 上连续，$\int_a^{+\infty}f(x,y)\,\mathrm dx$ 关于 $y$ 在每一有限区间上一致收敛，$\int_c^{+\infty}f(x,y)\,\mathrm dy$ 关于 $x$ 在每一有限区间上一致收敛；若下列两个积分中至少一个收敛，

$$
\int_a^{+\infty}\mathrm dx\int_c^{+\infty}|f(x,y)|\,\mathrm dy,
\qquad
\int_c^{+\infty}\mathrm dy\int_a^{+\infty}|f(x,y)|\,\mathrm dx,
$$

则

$$
\int_a^{+\infty}\mathrm dx\int_c^{+\infty}f(x,y)\,\mathrm dy
=\int_c^{+\infty}\mathrm dy\int_a^{+\infty}f(x,y)\,\mathrm dx.
$$

!!! warning "提示"

    -   **连续性要求一致收敛**：$f$ 连续且 $\int_c^{+\infty}f(x,y)\,\mathrm dy$ 在 $[a,b]$ 上一致收敛时，$I(x)$ 连续，积分与极限可交换。

        ??? example "含参量反常积分的连续性"
            <!-- 待补充 -->

    -   **积分次序交换的条件**：逐项积分/交换次序需要一致收敛（或绝对收敛加一致收敛）；仅有逐点收敛不够。

        ??? example "交换积分次序"
            <!-- 待补充 -->

    -   **求导公式的三个条件**：$f,f_x$ 连续、$\int f$ 收敛、$\int f_x$ 一致收敛；缺一不可。

        ??? example "含参量反常积分求导"
            <!-- 待补充 -->

    -   **两个无穷积分交换次序**：除了各自关于另一变量在有限区间上一致收敛外，还要至少一个绝对收敛的累次积分；条件不能省。

        ??? example "二重反常积分交换次序"
            <!-- 待补充 -->

???+ example "例2"

    从等式 $\displaystyle\frac{e^{-ax}-e^{-bx}}x=\int_a^b e^{-xy}\,\mathrm dy$ 出发计算积分

    $$
    \int_0^{+\infty}\frac{e^{-ax}-e^{-bx}}x\,\mathrm dx\qquad(0<a<b).
    $$

    ??? success "解析"

        由 $e^{-xy}$ 在区域 $\{(x,y):0\le x<+\infty,\ a\le y\le b\}$ 上连续，当 $x\ge0,\ a\le y\le b$ 时，$0<e^{-xy}\le e^{-ax}$，且积分 $\displaystyle\int_0^{+\infty}e^{-ax}\,\mathrm dx$ 收敛，故积分 $\displaystyle\int_0^{+\infty}e^{-xy}\,\mathrm dx$ 一致收敛。于是利用积分次序交换公式，有

        $$
        \begin{aligned}
        \int_0^{+\infty}\frac{e^{-ax}-e^{-bx}}x\,\mathrm dx
        &=\int_0^{+\infty}\mathrm dx\int_a^b e^{-xy}\,\mathrm dy\\
        &=\int_a^b\mathrm dy\int_0^{+\infty}e^{-xy}\,\mathrm dx\\
        &=\int_a^b\left(-\frac1y\right)\left.e^{-xy}\right|_0^{+\infty}\,\mathrm dy\\
        &=\int_a^b\frac1y\,\mathrm dy
        =\left.\ln y\right|_a^b=\ln\frac ba.
        \end{aligned}
        $$

### §3 Γ函数和B函数

#### §3.1 Γ函数

Γ函数定义为

$$
\Gamma(s)=\int_0^{+\infty}x^{s-1}e^{-x}\,\mathrm dx,\qquad s>0.
$$

它在 $s>0$ 上连续且具有任意阶导数：

$$
\Gamma^{(n)}(s)=\int_0^{+\infty}x^{s-1}e^{-x}(\ln x)^n\,\mathrm dx.
$$

$$
\Gamma(s+1)=s\Gamma(s),\qquad
\Gamma(1)=1,\qquad
\Gamma(n+1)=n!,\qquad
\Gamma\left(\frac12\right)=\sqrt\pi.
$$

其他积分表示为

$$
\Gamma(s)=2\int_0^{+\infty}y^{2s-1}e^{-y^2}\,\mathrm dy,
$$

$$
\Gamma(s)=p^s\int_0^{+\infty}y^{s-1}e^{-py}\,\mathrm dy,
\qquad s>0,\ p>0.
$$

!!! warning "提示"

    -   **阶乘指标**：$\Gamma(n+1)=n!$，所以 $\Gamma(n)=(n-1)!$；$\Gamma(1)=1$、$\Gamma(2)=1$。

        ??? example "Γ函数与阶乘"
            <!-- 待补充 -->

    -   **特殊值与余元公式**：$\Gamma\left(\dfrac12\right)=\sqrt\pi$；$\Gamma(s)\Gamma(1-s)=\dfrac\pi{\sin\pi s}$（$0<s<1$）。

        ??? example "Γ函数的特殊值"
            <!-- 待补充 -->

    -   **求导可在积分号下进行**：$\Gamma^{(n)}(s)=\displaystyle\int_0^{+\infty}x^{s-1}e^{-x}(\ln x)^n\,\mathrm dx$（$s>0$），因为相应积分一致收敛。

        ??? example "Γ函数的导数"
            <!-- 待补充 -->

#### §3.2 B函数

B函数定义为

$$
B(p,q)=\int_0^1x^{p-1}(1-x)^{q-1}\,\mathrm dx,
\qquad p>0,\ q>0.
$$

$B$ 在 $p>0,q>0$ 内连续，且

$$
B(p,q)=B(q,p).
$$

递推公式为

$$
B(p,q)=\frac{q-1}{p+q-1}B(p,q-1),\qquad p>0,\ q>1,
$$

$$
B(p,q)=\frac{p-1}{p+q-1}B(p-1,q),\qquad p>1,\ q>0,
$$

$$
B(p,q)=\frac{(p-1)(q-1)}{(p+q-1)(p+q-2)}B(p-1,q-1),
\qquad p>1,\ q>1.
$$

其他积分表示为

$$
B(p,q)=2\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\,\mathrm d\theta,
$$

$$
B(p,q)=\int_0^{+\infty}\frac{t^{p-1}}{(1+t)^{p+q}}\,\mathrm dt,
\qquad p,q>0.
$$

!!! warning "提示"

    -   **定义域是 $p,q>0$**：$B(p,q)=\displaystyle\int_0^1t^{p-1}(1-t)^{q-1}\,\mathrm dt$ 在 $p,q>0$ 时收敛；参数不满足时积分可能发散。

        ??? example "B函数的定义域"
            <!-- 待补充 -->

    -   **对称性**：$B(p,q)=B(q,p)$，由换元 $t\mapsto1-t$ 得到；不要漏掉这个性质。

        ??? example "B函数的对称性"
            <!-- 待补充 -->

    -   **三角形式**：$B(p,q)=2\displaystyle\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\,\mathrm d\theta$，指数是 $2p-1,2q-1$，不是 $p,q$。

        ??? example "B函数的三角形式"
            <!-- 待补充 -->

    -   **与 Γ 函数的关系**：$B(p,q)=\dfrac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$（$p,q>0$）；分母是 $\Gamma(p+q)$，不要写成 $\Gamma(p)\Gamma(q)$ 相加。

        ??? example "B函数与Γ函数"
            <!-- 待补充 -->

#### §3.3 Γ函数与B函数的关系

$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)},\qquad p,q>0.
$$

$$
B(p,1-p)=\Gamma(p)\Gamma(1-p)=\frac\pi{\sin\pi p},\qquad0<p<1.
$$

!!! warning "提示"

    -   **关系式的参数范围**：$B(p,q)=\dfrac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$ 要求 $p,q>0$；负参数或极点处不能直接套用。

        ??? example "Γ与B的关系"
            <!-- 待补充 -->

    -   **分母是 $\Gamma(p+q)$**：不要把 $\Gamma(p+q)$ 与 $\Gamma(p)\Gamma(q)$ 混淆；B函数是对称的，Γ(p+q) 不是。

        ??? example "分母的选择"
            <!-- 待补充 -->

    -   **可用于计算 B 函数**：把 B 积分化为 Γ 函数，能简化计算；但要先确认 $p,q>0$ 且 Γ 值有意义。

        ??? example "用Γ函数计算B函数"
            <!-- 待补充 -->

    -   **由关系推出递推**：$B(p,q+1)=\dfrac{q}{p+q}B(p,q)$ 等递推式可由 Γ 函数的递推得到；注意参数位置。

        ??? example "B函数的递推"
            <!-- 待补充 -->

??? info "Γ函数与B函数关系的证明"

    由

    $$
    \Gamma(s)=p^s\int_0^{+\infty}y^{s-1}e^{-py}\,\mathrm dy,
    $$

    $s$ 用 $p$ 代换，$p$ 用 $t$ 代换，有

    $$
    \frac{\Gamma(p)}{t^p}=\int_0^{+\infty}y^{p-1}e^{-ty}\,\mathrm dy.
    $$

    $p$ 用 $p+q$ 代换，$t$ 用 $1+t$ 代换，有

    $$
    \frac{\Gamma(p+q)}{(1+t)^{p+q}}
    =\int_0^{+\infty}y^{p+q-1}e^{-(1+t)y}\,\mathrm dy.
    $$

    两边乘 $t^{p-1}$，并在 $[0,+\infty)$ 上对 $t$ 积分，

    $$
    \int_0^{+\infty}\Gamma(p+q)\frac{t^{p-1}}{(1+t)^{p+q}}\,\mathrm dt
    =\int_0^{+\infty}\mathrm dt\int_0^{+\infty}t^{p-1}y^{p+q-1}e^{-(1+t)y}\,\mathrm dy.
    $$

    左端由 $B$ 函数的另一种形式，有

    $$
    \begin{aligned}
    \Gamma(p+q)\int_0^{+\infty}\frac{t^{p-1}}{(1+t)^{p+q}}\,\mathrm dt
    &=\Gamma(p+q)B(p,q)\\
    &=\int_0^{+\infty}\mathrm dt\int_0^{+\infty}t^{p-1}y^{p+q-1}e^{-(1+t)y}\,\mathrm dy\\
    &=\int_0^{+\infty}y^{p+q-1}e^{-y}
    \left[\int_0^{+\infty}t^{p-1}e^{-ty}\,\mathrm dt\right]\mathrm dy\\
    &=\int_0^{+\infty}y^{p+q-1}e^{-y}\Gamma(p)y^{-p}\,\mathrm dy\\
    &=\Gamma(p)\int_0^{+\infty}y^{q-1}e^{-y}\,\mathrm dy
    =\Gamma(p)\Gamma(q),
    \end{aligned}
    $$

    故

    $$
    B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}\qquad(p>0,\ q>0).
    $$

???+ example "例1"

    计算积分 $\displaystyle I=\int_0^{\pi/2}\sin^m x\cos^n x\,\mathrm dx$。

    ??? success "解析"

        令 $t=\sin^2x$，则

        $$
        \begin{aligned}
        I&=\int_0^1 t^{m/2}(1-t)^{n/2}\frac12t^{-1/2}(1-t)^{-1/2}\,\mathrm dt\\
        &=\frac12\int_0^1t^{(m-1)/2}(1-t)^{(n-1)/2}\,\mathrm dt\\
        &=\frac12 B\left(\frac{m+1}{2},\frac{n+1}{2}\right)\\
        &=\frac12\frac{\Gamma\left(\frac{m+1}{2}\right)\Gamma\left(\frac{n+1}{2}\right)}
        {\Gamma\left(\frac{m+n}{2}+1\right)}\qquad(m>-1,\ n>-1).
        \end{aligned}
        $$

## 附录 I 基本初等函数与极坐标方程的图形

| 函数 | 表达式 | 定义域 | 值域 |
| --- | --- | --- | --- |
| 指数函数 | $y=a^x$，$a>0,\ a\ne1$ | $\mathbb R$ | $(0,+\infty)$ |
| 对数函数 | $y=\log_a x$，$a>0,\ a\ne1$ | $(0,+\infty)$ | $\mathbb R$ |
| 正弦函数 | $y=\sin x$ | $\mathbb R$ | $[-1,1]$ |
| 余弦函数 | $y=\cos x$ | $\mathbb R$ | $[-1,1]$ |
| 正切函数 | $y=\tan x$ | $x\ne k\pi+\pi/2,\ k\in\mathbb Z$ | $\mathbb R$ |
| 余切函数 | $y=\cot x$ | $x\ne k\pi,\ k\in\mathbb Z$ | $\mathbb R$ |
| 反正弦函数 | $y=\arcsin x$ | $[-1,1]$ | $[-\pi/2,\pi/2]$ |
| 反余弦函数 | $y=\arccos x$ | $[-1,1]$ | $[0,\pi]$ |
| 反正切函数 | $y=\arctan x$ | $\mathbb R$ | $(-\pi/2,\pi/2)$ |
| 反余切函数 | $y=\operatorname{arccot}x$ | $\mathbb R$ | $(0,\pi)$ |

幂函数为 $y=x^\mu$，其中 $\mu$ 为常数；其定义域随 $\mu$ 而定，在 $(0,+\infty)$ 上均有定义。

极坐标 $(r,\theta)$ 与直角坐标 $(x,y)$ 的关系为

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

下表中 $a>0$。

| 曲线 | 极坐标方程 |
| --- | --- |
| 圆 | $r=a$ |
| 圆 $x^2+(y-a)^2=a^2$ | $r=2a\sin\theta$ |
| 圆 $(x-a)^2+y^2=a^2$ | $r=2a\cos\theta$ |
| 射线 | $\theta=\alpha$，$r\ge0$ |
| 心形线 | $r=a(1+\sin\theta)$，$r=a(1+\cos\theta)$ |
| 阿基米德螺线 | $r=a\theta$ |
| 对数螺线（等角螺线） | $r=ae^{k\theta}$ |
| 双纽线 | $r^2=2a^2\cos2\theta$，$r^2=a^2\sin2\theta$ |
| 玫瑰线 | $r=a\sin3\theta$，$r=a\cos3\theta$，$r=a\sin2\theta$，$r=a\cos2\theta$ |

## 附录 II 线性空间与映射

### §II.1 笛卡儿乘积集合

非空集合 $A,B$ 的笛卡儿乘积（直积）为

$$
A\times B=\{(x,y):x\in A,\ y\in B\}.
$$

$n$ 维笛卡儿坐标空间为

$$
\mathbb R^n=\{(x_1,\ldots,x_n):x_i\in\mathbb R,\ i=1,\ldots,n\}.
$$

### §II.2 线性空间

非空集合 $V$ 对加法和实数数乘封闭，且对任意 $\alpha,\beta,\gamma\in V$、$k,\tau\in\mathbb R$ 满足以下规律，则称 $V$ 为实线性空间：

$$
\begin{gathered}
\alpha+\beta=\beta+\alpha,\qquad
(\alpha+\beta)+\gamma=\alpha+(\beta+\gamma),\\
\exists\,0\in V:\ \alpha+0=\alpha,\qquad
\forall\alpha\in V,\ \exists(-\alpha)\in V:\ \alpha+(-\alpha)=0,\\
1\alpha=\alpha,\qquad k(\tau\alpha)=(k\tau)\alpha,\\
(k+\tau)\alpha=k\alpha+\tau\alpha,\qquad
k(\alpha+\beta)=k\alpha+k\beta.
\end{gathered}
$$

$V$ 的非空子集 $W$ 在同样的加法与数乘下构成线性空间时，称为 $V$ 的线性子空间；其条件为

$$
\alpha,\beta\in W,\ k\in\mathbb R
\ \Longrightarrow\ \alpha+\beta\in W,\quad k\alpha\in W.
$$

### §II.3 映射

映射 $f:A\to B$ 给 $A$ 中每个元素 $x$ 唯一确定一个 $B$ 中的元素 $y=f(x)$。$A$ 为定义域，$f(A)$ 为值域；$y$ 为 $x$ 的像，满足 $f(x)=y$ 的所有 $x$ 为 $y$ 的原像。

对 $C\subseteq A$，集合 $C$ 的像为

$$
f(C)=\{f(x):x\in C\}.
$$

若 $A_1\subseteq A$ 且对任意 $x\in A_1$ 有 $f_1(x)=f(x)$，则 $f$ 是 $f_1$ 在 $A$ 上的延拓，$f_1$ 为 $f$ 在 $A_1$ 上的限制，记为 $f_1=f|_{A_1}$。

设 $A,B$ 为实线性空间，映射 $T:A\to B$ 满足

$$
T(\alpha x+\beta y)=\alpha T(x)+\beta T(y),
\qquad x,y\in A,\quad\alpha,\beta\in\mathbb R,
$$

则称 $T$ 为线性算子；当取值为实数时，称为线性泛函。

### §II.4 线性算子与线性泛函

在各自的定义域上，数列极限、函数极限、定点求导和定积分对应线性泛函：

$$
T_1(\{a_n\})=\lim_{n\to\infty}a_n,\qquad
T_2(f)=\lim_{x\to x_0}f(x),
$$

$$
T_3(f)=f'(x_0),\qquad T_4(f)=\int_a^b f(x)\,\mathrm dx.
$$

求导算子为 $D(f)=f'$，满足

$$
D(\alpha f+\beta g)=\alpha D(f)+\beta D(g).
$$

!!! warning "提示"

    -   **线性算子的定义**：$T(\alpha x+\beta y)=\alpha T(x)+\beta T(y)$ 要对任意 $x,y$ 和任意实数 $\alpha,\beta$ 成立；只验证可加性或齐次性之一不够。

        ??? example "线性算子的判定"
            <!-- 待补充 -->

    -   **泛函是取值为实数的线性算子**：线性泛函是线性算子的特例，不能把所有线性算子都叫泛函。

        ??? example "线性泛函"
            <!-- 待补充 -->

    -   **定义域要选对**：求导算子 $D(f)=f'$ 只能定义在可导函数空间上；极限、积分算子也要在相应的收敛/可积空间上定义。

        ??? example "算子的定义域"
            <!-- 待补充 -->

    -   **线性不等于连续**：有限维空间上的线性算子自动连续，无限维空间则不一定；讨论连续性需要额外的有界性条件。

        ??? example "线性算子的连续性"
            <!-- 待补充 -->

## 附录 III 可积函数类的证明

### §III.1 大和与小和的性质

设 $f$ 在 $[a,b]$ 上有界，分割 $T$ 为 $a=x_0<x_1<\cdots<x_n=b$。记

$$
\Delta x_i=x_i-x_{i-1},\qquad
\lambda=\max_{1\le i\le n}\Delta x_i,
$$

$$
M_i=\sup_{x\in[x_{i-1},x_i]}f(x),\qquad
m_i=\inf_{x\in[x_{i-1},x_i]}f(x).
$$

大和（达布上和）与小和（达布下和）分别为

$$
S(T)=\sum_{i=1}^n M_i\Delta x_i,\qquad
s(T)=\sum_{i=1}^n m_i\Delta x_i.
$$

任取 $\xi_i\in[x_{i-1},x_i]$，有

$$
s(T)\le\sum_{i=1}^n f(\xi_i)\Delta x_i\le S(T).
$$

若 $T'$ 为 $T$ 的加细分割，则

$$
s(T)\le s(T'),\qquad S(T')\le S(T).
$$

下积分与上积分定义为

$$
\underline I=\sup_T s(T),\qquad \overline I=\inf_T S(T),
$$

并满足

$$
\lim_{\lambda\to0}s(T)=\underline I,\qquad
\lim_{\lambda\to0}S(T)=\overline I.
$$

### §III.2 可积判断准则

有界函数 $f$ 在 $[a,b]$ 上可积的等价条件为

$$
\underline I=\overline I,
$$

或

$$
\forall\varepsilon>0,\ \exists T:\quad S(T)-s(T)<\varepsilon.
$$

记 $\omega_i=M_i-m_i$ 为 $f$ 在第 $i$ 个子区间上的振幅，则后一条件也写为

$$
\forall\varepsilon>0,\ \exists T:\quad
\sum_{i=1}^n\omega_i\Delta x_i<\varepsilon.
$$

??? info "上积分等于下积分的可积准则的证明"

    必要性。$f(x)$ 在 $[a,b]$ 上可积，由积分定义，存在常数 $I$，任给 $\varepsilon>0$，存在正数 $\delta$，当 $\lambda<\delta$ 时，有

    $$
    \left|\sum_{i=1}^n f(\xi_i)\Delta x_i-I\right|<\varepsilon.
    $$

    由于

    $$
    s(T)=\inf\left\{\sum_{i=1}^n f(\xi_i)\Delta x_i\right\},\qquad
    S(T)=\sup\left\{\sum_{i=1}^n f(\xi_i)\Delta x_i\right\},
    $$

    于是

    $$
    |s(T)-I|\le\varepsilon,\qquad |S(T)-I|\le\varepsilon,
    $$

    从而

    $$
    \underline I=\lim_{\lambda\to0}s(T)=I,\qquad
    \overline I=\lim_{\lambda\to0}S(T)=I,
    $$

    即 $\underline I=\overline I$。

    充分性。设 $\underline I=\overline I=I$，由达布定理知 $\lim\limits_{\lambda\to0}S(T)=\lim\limits_{\lambda\to0}s(T)=I$，再由大和与小和的性质知

    $$
    s(T)\le\sum_{i=1}^n f(\xi_i)\Delta x_i\le S(T),
    $$

    而 $\lim\limits_{\lambda\to0}s(T)=\lim\limits_{\lambda\to0}S(T)=I$。从而由夹逼定理知

    $$
    \lim_{\lambda\to0}\sum_{i=1}^n f(\xi_i)\Delta x_i=I,
    $$

    即 $f(x)$ 在 $[a,b]$ 上可积。

??? info "大和与小和之差的可积准则的证明"

    必要性。由于 $f(x)$ 在 $[a,b]$ 上可积，由上积分等于下积分的可积准则知

    $$
    \lim_{\lambda\to0}[S(T)-s(T)]=0.
    $$

    于是，任给 $\varepsilon>0$，存在正数 $\delta$，当 $\lambda<\delta$ 时，有

    $$
    S(T)-s(T)<\varepsilon.
    $$

    即存在分割 $T$，使 $S(T)-s(T)<\varepsilon$。

    充分性。存在分割 $T$，使 $S(T)-s(T)<\varepsilon$，由于 $s(T)\le\underline I\le\overline I\le S(T)$，所以

    $$
    0\le\overline I-\underline I\le S(T)-s(T)<\varepsilon,
    $$

    其中 $\overline I,\underline I$ 为常数，由 $\varepsilon$ 的任意性知，必有 $\overline I=\underline I$。

### §III.3 可积类函数

以下各类函数在 $[a,b]$ 上可积：连续函数；有界且只有有限个间断点的函数；单调函数。

??? info "闭区间上连续函数可积的证明"

    由于 $f(x)$ 在闭区间 $[a,b]$ 上连续，由康托尔定理知，$f(x)$ 在 $[a,b]$ 上一致连续。于是，对任给正数 $\varepsilon$，存在正数 $\delta$，对于 $[a,b]$ 上任意两点 $x',x''$，当 $|x'-x''|<\delta$ 时，都有

    $$
    |f(x')-f(x'')|<\frac\varepsilon{b-a}.
    $$

    当 $\lambda<\delta$ 时，有 $\omega_i=M_i-m_i\le\dfrac\varepsilon{b-a}$，从而

    $$
    \sum_{i=1}^n\omega_i\Delta x_i
    \le\sum_{i=1}^n\frac\varepsilon{b-a}\Delta x_i
    =\frac\varepsilon{b-a}\sum_{i=1}^n\Delta x_i
    =\frac\varepsilon{b-a}(b-a)=\varepsilon.
    $$

    由振幅和的可积准则知，$f(x)$ 在 $[a,b]$ 上可积。

??? info "有界且只有有限个间断点的函数可积的证明"

    设函数 $f(x)$ 在 $[a,b]$ 上有界。由确界原理知，它在 $[a,b]$ 上存在上、下确界，分别记为 $M,m$，即

    $$
    M=\sup_{x\in[a,b]}f(x),\qquad m=\inf_{x\in[a,b]}f(x).
    $$

    不妨设 $f(x)$ 在 $[a,b]$ 上有 $K$ 个间断点，$a<x_1<x_2<\cdots<x_K<b$。对任给 $\varepsilon>0$，令

    $$
    0<\delta'<\frac\varepsilon{4K(M-m)}
    $$

    （由于 $f(x)$ 在 $[a,b]$ 上有间断点，所以有 $m\ne M$），并且使 $a\le x_1-\delta',\ x_K+\delta'\le b$。设 $\Delta_i'=[x_i-\delta',x_i+\delta'],\ i=1,2,\ldots,K$，取 $\delta'$ 充分小，使 $\Delta_i'\cap\Delta_j'=\varnothing,\ i\ne j$。

    现在 $[a,b]$ 上取分割 $T'$，使得上述 $\Delta_i'\ (i=1,2,\ldots,K)$ 是它所属的一部分小区间。于是 $T'$ 所属的全部小区间可分成以下两类：一类是含有间断点的 $K$ 个小区间 $\Delta_i'$，其总长度不超过

    $$
    \frac\varepsilon{4K(M-m)}\cdot2K=\frac\varepsilon{2(M-m)};
    $$

    另一类是不含间断点的小区间 $\Delta_i''$，$f(x)$ 在这些 $\Delta_i''$ 上连续。由振幅和的可积准则的必要性知，对所给 $\varepsilon>0$，存在关于所有 $\Delta_i''$ 的一个分割 $T''$，使

    $$
    \sum_{T''}\omega_i\Delta x_i<\frac\varepsilon2.
    $$

    设 $T=T'+T''$，它是 $[a,b]$ 上的一个分割。对于 $T$，有

    $$
    \begin{aligned}
    \sum\omega_i\Delta x_i
    &=\sum_{\Delta_i'}\omega_i\Delta x_i
    +\sum_{T-\Delta_i'}\omega_i\Delta x_i\\
    &\le\sum_{\Delta_i'}\omega_i\Delta x_i+\sum_{T''}\omega_i\Delta x_i\\
    &\le(M-m)\sum_{\Delta_i'}\Delta x_i+\frac\varepsilon2\\
    &<(M-m)\frac\varepsilon{2(M-m)}+\frac\varepsilon2=\varepsilon.
    \end{aligned}
    $$

    由振幅和的可积准则知 $f(x)$ 在 $[a,b]$ 上可积。

??? info "闭区间上单调函数可积的证明"

    不妨设 $f(x)$ 在 $[a,b]$ 上递增，

    $$
    \begin{aligned}
    \sum_{i=1}^n\omega_i\Delta x_i
    &=\sum_{i=1}^n[f(x_i)-f(x_{i-1})]\Delta x_i\\
    &\le\sum_{i=1}^n[f(x_i)-f(x_{i-1})]\lambda
    =[f(b)-f(a)]\lambda.
    \end{aligned}
    $$

    （1）当 $f(a)\ne f(b)$ 时，有 $f(a)<f(b)$。于是，对任给 $\varepsilon>0$，只要 $\lambda<\dfrac\varepsilon{f(b)-f(a)}$，就有 $\displaystyle\sum_{i=1}^n\omega_i\Delta x_i<\varepsilon$。由振幅和的可积准则知，$f(x)$ 在 $[a,b]$ 上可积。

    （2）当 $f(a)=f(b)$ 时，有 $\displaystyle\sum_{i=1}^n\omega_i\Delta x_i=0<\varepsilon$。由振幅和的可积准则知，$f(x)$ 在 $[a,b]$ 上可积。

    当 $f(x)$ 递减时，同理可证 $f(x)$ 在 $[a,b]$ 上可积。

!!! warning "提示"

    -   **三类充分条件**：连续函数、有界且只有有限个间断点的函数、单调函数都可积；它们不是可积的必要条件。

        ??? example "可积函数类"
            <!-- 待补充 -->

    -   **单调函数可以有无限个间断点**：单调函数的间断点至多可数，但仍可积；不要误以为间断点必须有限。

        ??? example "单调函数的可积性"
            <!-- 待补充 -->

    -   **无界函数不是常义可积**：常义积分要求函数有界；无界函数的积分属于反常积分，即使只有一个瑕点也不能按常义积分处理。

        ??? example "无界函数"
            <!-- 待补充 -->

    -   **可积必有界，有界不一定可积**：Dirichlet 函数在 $[0,1]$ 上有界但不可积；判断可积要用振幅和或上下积分，不能只看有界。

        ??? example "有界与可积"
            <!-- 待补充 -->

## 附录 IV 积分表

$C$ 表示任意常数。下列公式在被积函数有定义的区间内成立。

当 $a\ne0$ 时，

$$
\int\frac{\mathrm dx}{ax+b}=\frac1a\ln|ax+b|+C,
$$

$$
\int(ax+b)^\mu\,\mathrm dx
=\frac{(ax+b)^{\mu+1}}{a(\mu+1)}+C,\qquad\mu\ne-1.
$$

当 $a>0$ 时，

$$
\int\frac{\mathrm dx}{x^2+a^2}=\frac1a\arctan\frac xa+C,
\qquad
\int\frac{\mathrm dx}{x^2-a^2}=\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|+C,
$$

$$
\int\frac{\mathrm dx}{\sqrt{x^2+a^2}}
=\ln\left(x+\sqrt{x^2+a^2}\right)+C,
$$

$$
\int\frac{\mathrm dx}{\sqrt{x^2-a^2}}
=\ln\left|x+\sqrt{x^2-a^2}\right|+C,\qquad |x|>a,
$$

$$
\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa+C,\qquad |x|<a,
$$

$$
\int\sqrt{x^2+a^2}\,\mathrm dx
=\frac12\left[x\sqrt{x^2+a^2}+a^2\ln\left(x+\sqrt{x^2+a^2}\right)\right]+C,
$$

$$
\int\sqrt{x^2-a^2}\,\mathrm dx
=\frac12\left[x\sqrt{x^2-a^2}-a^2\ln\left|x+\sqrt{x^2-a^2}\right|\right]+C,
\qquad |x|>a,
$$

$$
\int\sqrt{a^2-x^2}\,\mathrm dx
=\frac12\left[x\sqrt{a^2-x^2}+a^2\arcsin\frac xa\right]+C,\qquad |x|<a.
$$

当 $a^2+b^2>0$ 时，

$$
\int e^{ax}\cos bx\,\mathrm dx
=\frac{e^{ax}}{a^2+b^2}(a\cos bx+b\sin bx)+C,
$$

$$
\int e^{ax}\sin bx\,\mathrm dx
=\frac{e^{ax}}{a^2+b^2}(a\sin bx-b\cos bx)+C.
$$

三角函数的递推积分公式为

$$
\int\sin^nx\,\mathrm dx
=-\frac{\sin^{n-1}x\cos x}{n}
+\frac{n-1}{n}\int\sin^{n-2}x\,\mathrm dx,\qquad n\ge2,
$$

$$
\int\cos^nx\,\mathrm dx
=\frac{\cos^{n-1}x\sin x}{n}
+\frac{n-1}{n}\int\cos^{n-2}x\,\mathrm dx,\qquad n\ge2.
$$
