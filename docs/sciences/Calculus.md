# 微积分

## 第一章 函数与极限

### §1 函数

#### 函数的概念与表示

函数 $f:D\to \mathbb R$ 给定义域 $D$ 中每个 $x$ 唯一确定一个值 $f(x)$。**定义域与对应法则共同确定函数**；自变量使用哪个字母不影响函数。值域是 $\{f(x):x\in D\}$。

常用表示有解析式、表格和图像。分段函数要连同分段条件一起理解；隐函数由关系式 $F(x,y)=0$ 局部确定；参数式 $x=\varphi(t),y=\psi(t)$ 同时描述两个坐标随参数的变化。

复合函数 $(f\circ g)(x)=f(g(x))$ 要求 $x\in D_g$ 且 $g(x)\in D_f$。反函数 $f^{-1}$ 存在的前提是 $f$ 在所取定义域上为 **一一映射**；其定义域是原函数的值域，图像与原函数关于 $y=x$ 对称。

#### 基本初等函数

| 类型 | 典型形式 | 需要注意的定义域或性质 |
| --- | --- | --- |
| 幂函数 | $x^\alpha$ | 任意实数指数时先在 $x>0$ 定义；能否延伸到负数或零由指数决定 |
| 指数函数 | $a^x$，$a>0,a\ne 1$ | 定义域为 $\mathbb R$，值域为 $(0,+\infty)$ |
| 对数函数 | $\log_a x$ | $x>0$；是 $a^x$ 的反函数 |
| 三角函数 | $\sin x,\cos x,\tan x,\cot x$ | 注意周期与分母为零的点 |
| 反三角函数 | $\arcsin x,\arccos x,\arctan x,\operatorname{arccot}x$ | 由限制三角函数的单调区间获得主值 |

通常取 $\arcsin x\in[-\pi/2,\pi/2]$、$\arccos x\in[0,\pi]$、$\arctan x\in (-\pi/2,\pi/2)$、$\operatorname{arccot}x\in (0,\pi)$。基本初等函数经有限次四则运算与复合得到初等函数。

#### 函数的四种常见特性

- **有界性：** 在集合 $D$ 上存在统一的 $M$，使 $|f(x)|\le M$。有界总是相对于一个集合而言。
- **单调性：** 对任意 $x_1<x_2$，比较 $f(x_1),f(x_2)$；严格单调函数可在其值域上定义反函数。
- **奇偶性：** 先检查定义域关于原点对称，再判断 $f(-x)=f(x)$ 或 $f(-x)=-f(x)$。
- **周期性：** 存在 $T>0$，使平移后仍在定义域且 $f(x+T)=f(x)$。并非每个周期函数都存在最小正周期，例如常数函数。

!!! example "例 1.1：定义域决定能否复合"

    设 $f(u)=\ln(1-u)$，$g(x)=\sqrt x$，求 $f(g(x))$ 的定义域。

    **解：** 根号要求 $x\ge 0$，对数要求 $1-\sqrt x>0$，合并得 $0\le x<1$。不能只检查最外层或最内层函数。

### §2 数列极限

#### 定义与基本性质

数列 $\{a_n\}$ 收敛到 $A$，是指

$$
\forall\varepsilon>0,\ \exists N,\ \forall n>N,\qquad |a_n-A|<\varepsilon.
$$

这里 $N$ 可以依赖 $\varepsilon$，但不能随后面的 $n$ 改变。极限描述尾部行为，改变有限项不改变极限。

| 性质 | 结论及使用范围 |
| --- | --- |
| 唯一性 | 收敛数列的极限唯一 |
| 有界性 | 收敛数列必有界；有界不保证收敛 |
| 保号性 | 若 $a_n\to A>0$，则从某项起 $a_n>0$ |
| 保序性 | 若最终 $a_n\le b_n$ 且二者收敛，则极限仍满足不等式 |
| 子列 | 收敛数列的每个子列都趋于同一极限 |
| 四则运算 | 收敛数列可逐项加、减、乘；作商还需分母极限不为零 |

!!! warning "严格不等式取极限后可能变为等号"

    $a_n>0$ 并不保证极限大于零，例如 $\displaystyle\frac{1}{n}\to 0$。反过来，极限大于零可推出最终为正。若两个子列极限不同，原数列一定不收敛，例如 $(-1)^n$。

#### 极限存在的常用准则

**夹逼准则：** 最终 $b_n\le a_n\le c_n$，且 $b_n,c_n$ 都趋于 $A$，则 $a_n\to A$。

**单调有界准则：** 单调递增且有上界，或单调递减且有下界的数列，必收敛。

递推数列通常按“界限 → 单调性 → 收敛 → 极限方程”的顺序求解。直接设极限并解方程，只得到候选值，尚未证明极限存在。

!!! example "例 1.2：递推数列先证收敛"

    设 $a_1=1$，$a_{n+1}=\sqrt{2+a_n}$，求 $\lim a_n$。

    **解：** 归纳可得 $1\le a_n<2$。在 $1\le a_n<2$ 时，$2+a_n-a_n^2=(2-a_n)(a_n+1)>0$，故 $a_{n+1}>a_n$。由单调有界准则，极限 $A$ 存在。

    取极限得 $A=\sqrt{2+A}$，即 $(A-2)(A+1)=0$。由 $A\ge 1$，得 $A=2$。

#### 数列极限存在的准则（续）（\*）

教材第 29 页起补充两个结论。

- **有界数列的子列定理：** 每个有界实数列都有收敛子列。
- **柯西收敛准则：** 实数列收敛，当且仅当

$$
\forall\varepsilon>0,\ \exists N,\ \forall m,n>N,\qquad |a_m-a_n|<\varepsilon.
$$

柯西准则不必预先知道极限。注意它要求任意两个足够靠后的项彼此接近，只有 $a_{n+1}-a_n\to 0$ 不够。

### §3 函数极限

#### 趋近方式与定义

有限点的双侧极限写成

$$
\lim_{x\to a}f(x)=L
\quad \Longleftrightarrow\quad
\forall\varepsilon>0,\ \exists\delta>0,
\quad 0<|x-a|<\delta\Rightarrow |f(x)-L|<\varepsilon.
$$

讨论范围限于函数定义域。$0<|x-a|$ 表示去心邻域，因而极限可以与 $f(a)$ 无关，甚至 $f(a)$ 没有定义。

左、右极限分别限制 $x<a$、$x>a$。在两侧都有定义点趋近 $a$ 时，双侧极限存在当且仅当两侧极限存在且相等。

$x\to+\infty$ 时，把邻域条件换成 $x>M$；$x\to-\infty$ 换成 $x<-M$；$x\to \infty$ 表示 $|x|\to+\infty$，须同时检查正、负两个方向。

#### 函数极限的性质与判定

唯一性、局部保号性、四则运算及夹逼准则与数列类似。有限极限只保证在该点某个去心邻域**局部有界**，不能推出函数在整个定义域有界。

**海涅定理：** $\lim_{x\to a}f(x)=L$，当且仅当对任意定义域中的数列 $x_n\to a$、$x_n\ne a$，都有 $f(x_n)\to L$。证明极限不存在，往往只需构造两列趋近点使函数值极限不同。

!!! example "例 1.3：振荡与夹逼"

    比较 $\sin(\displaystyle\frac{1}{x})$ 与 $x\sin(\displaystyle\frac{1}{x})$ 在 $x\to 0$ 时的极限。

    **解：** 分别取 $x_n=\displaystyle\frac{1}{2n\pi+\pi/2}$、$y_n=\displaystyle\frac{1}{2n\pi+3\pi/2}$，第一函数值分别为 $1,-1$，所以没有极限。而 $|x\sin(\displaystyle\frac{1}{x})|\le|x|\to 0$，第二函数极限为 $0$。

#### 函数极限存在的准则（续）（\*）

教材第 42 页起：单调有界函数在区间端点具有相应的单侧极限；函数的柯西准则要求，在足够小的去心邻域内，任意两点的函数值之差都小于给定的 $\varepsilon$。这两种准则都能在不知道极限值时先证明存在性。

#### 无穷小、无穷大与阶的比较

无穷小是指定趋近过程中趋于 $0$ 的变量；无穷大是绝对值趋于 $+\infty$ 的变量。无穷大不是一个实数极限；无界也不等于趋于无穷大。

若 $\alpha\to 0$ 且最终非零，则 $\displaystyle\frac{1}{\alpha}$ 是无穷大，反之亦然。有限个无穷小之和仍为无穷小；有界量乘无穷小仍为无穷小。

设 $\alpha,\beta$ 都趋于 $0$，且 $\beta$ 最终非零：

| 商的极限或估计 | 记号与含义 |
| --- | --- |
| $\displaystyle\frac{\alpha}{\beta}\to 0$ | $\alpha=o(\beta)$，$\alpha$ 是更高阶无穷小 |
| $\displaystyle\frac{\alpha}{\beta}\to c\ne 0$ | 同阶无穷小 |
| $\displaystyle\frac{\alpha}{\beta}\to 1$ | $\alpha\sim \beta$，等价无穷小 |
| $\lvert\displaystyle\frac{\alpha}{\beta}\rvert\to+\infty$ | $\alpha$ 比 $\beta$ 低阶 |
| $\lvert\alpha\rvert\le C\lvert\beta\rvert$ 最终成立 | $\alpha=O(\beta)$；不要求商有极限 |

当 $x\to 0$ 时，常用等价式为

$$
\sin x\sim \tan x\sim \arcsin x\sim \arctan x\sim x,
$$

$$
1-\cos x\sim \frac{x^2}{2},\qquad
\ln(1+x)\sim x,\qquad e^x-1\sim x,
$$

$$
a^x-1\sim x\ln a\quad (a>0,a\ne 1),\qquad
(1+x)^\alpha-1\sim \alpha x\quad (\alpha\ne 0).
$$

!!! warning "等价替换要保护相消后的主项"

    在乘积、商中通常可以替换相应因子；在加减中不能任意替换。例如 $\sin x-x$ 不能通过 $\sin x\sim x$ 变为零。应保留更高阶信息：$\sin x-x=-\displaystyle\frac{x^3}{6}+o(x^3)$，这将在第三章用泰勒公式处理。

#### 两个重要极限

$$
\lim_{x\to 0}\frac{\sin x}{x}=1,\qquad
\lim_{x\to 0}(1+x)^{\frac{1}{x}}=e.
$$

第二式也可写成 $\lim_{n\to \infty}(1+\displaystyle\frac{1}{n})^n=e$，或 $\lim_{x\to+\infty}(1+\displaystyle\frac{1}{x})^x=e$。三角函数求极限时，角度采用弧度制。

对于底数最终为正的幂指函数，先写成

$$
u(x)^{v(x)}=\exp\bigl(v(x)\ln u(x)\bigr).
$$

若 $u(x)=1+\alpha(x)$，$\alpha(x)\to 0$，且 $v(x)\alpha(x)\to A$，则 $u(x)^{v(x)}\to e^A$。

!!! example "例 1.4：把复合量作为整体"

    求 $\lim_{x\to 0}(1+2x)^{\frac{3}{x}}$。

    **解：** 在零点附近底数为正，且 $(\displaystyle\frac{3}{x})\ln(1+2x)\sim (\frac{3}{x})\cdot 2x\to 6$，故原极限为 $e^6$。

#### 极限在经济中的应用

本金为 $P$，年利率为 $r$，每年计息 $m$ 次，经过 $t$ 年的本利和模型为 $P(1+\displaystyle\frac{r}{m})^{mt}$。令计息频率趋于无穷，得到连续复利模型 $Pe^{rt}$。这里假定利率固定且不考虑存取款，是重要极限的一个应用。

### §4 函数的连续性

#### 连续与间断点

$f$ 在 $a$ 连续，要求 $f(a)$ 有定义且 $\lim_{x\to a}f(x)=f(a)$。端点使用相应单侧连续性。初等函数在其定义区域内连续，因此在允许的点可直接代入求极限。

| 类型 | 判断方法 |
| --- | --- |
| 可去间断点 | 左、右极限存在且相等，但函数值未定义或不等于该极限 |
| 跳跃间断点 | 左、右极限都有限，但不相等 |
| 无穷间断点 | 至少一侧趋于无穷 |
| 振荡等其他间断点 | 至少一侧没有有限极限，且不属于前面的情形 |

可去与跳跃属于第一类间断点，其余为第二类。只改变一个点的函数值能修补可去间断，不能修补跳跃间断。

#### 连续函数的局部性质与闭区间性质

连续函数可作四则运算和复合，商的分母不能为零；连续且严格单调函数的反函数连续。若 $f(a)>0$，连续性保证在足够小邻域内 $f(x)>0$。

对 $f\in C[a,b]$：

1. 有界，且一定取得最大值和最小值。
2. 具有介值性：介于两个函数值之间的每个数都能取到。
3. 若 $f(a)f(b)<0$，则 $(a,b)$ 内至少存在一个零点。

证明零点“存在且唯一”，通常用连续性和异号证明存在，再用严格单调性证明唯一。

!!! example "例 1.5：分段函数的连续条件"

    设 $f(x)=\displaystyle\frac{e^{2x}-1}{x}$（$x\ne 0$），$f(0)=c$。求使 $f$ 在零点连续的 $c$。

    **解：** 由 $e^{2x}-1\sim 2x$，去心极限为 $2$，因此必须且只需取 $c=2$。

#### 闭区间上连续函数性质的证明（\*）

教材第 65 页起。证明有界性可用反证法：若连续函数在闭区间无界，取点列使函数值无界，再取收敛子列，用连续性推出矛盾。最值的取得也可用趋近上确界的点列证明。零点定理可用不断二分保留异号端点的区间，再对公共极限点使用连续性。

#### 一致连续（\*）

教材第 68 页起。$f$ 在集合 $E$ 上一致连续，是指

$$
\forall\varepsilon>0,\ \exists\delta>0,\ \forall x,y\in E,
\quad |x-y|<\delta\Rightarrow |f(x)-f(y)|<\varepsilon.
$$

关键是 $\delta$ 不依赖具体点。闭区间上的连续函数必一致连续。若 $|f(x)-f(y)|\le L|x-y|$，则也一致连续；例如 $\sin x$ 在整个实轴上一致连续。

!!! tip "不要混淆两种‘一致’"

    一致连续讨论同一个函数在不同点的变化；第十一章的一致收敛讨论一列函数或部分和对所有点的统一逼近。二者都要求误差控制不依赖具体的点，但讨论对象不同。

### 本章自测

!!! example "自测 1"

    1. 求 $\ln(x^2-1)$ 的定义域，并判断奇偶性。
    2. 求 $\lim_{n\to \infty}(\sqrt{n^2+3n}-n)$。
    3. 设 $a_1=1$，$a_{n+1}=\displaystyle\frac{a_n+3}{2}$，证明数列收敛并求极限。
    4. 求 $\lim_{x\to 0}\displaystyle\frac{1-\cos2x}{x\sin3x}$。
    5. 判断 $f(x)=\displaystyle\frac{\sin x}{x}$（$x\ne 0$）、$f(0)=0$ 在零点的间断类型；怎样修改才能连续？
    6. 证明方程 $e^{-x}=x$ 在 $(0,1)$ 内恰有一根。

    ??? success "答案与提示"

        1. 定义域为 $(-\infty,-1)\cup(1,+\infty)$，是偶函数。
        2. 有理化得 $\displaystyle\frac{3}{\sqrt{1+\dfrac{3}{n}}+1}\to 3/2$。
        3. $1\le a_n<3$ 且 $a_{n+1}-a_n=\displaystyle\frac{3-a_n}{2}>0$，故收敛；由 $A=\displaystyle\frac{A+3}{2}$ 得 $A=3$。
        4. 分子等价于 $2x^2$，分母等价于 $3x^2$，故极限为 $2/3$。
        5. 去心极限为 $1$，与 $f(0)=0$ 不同，是可去间断点；改为 $f(0)=1$ 即可。
        6. $g(x)=e^{-x}-x$ 连续，$g(0)>0,g(1)<0$，故至少一根；$e^{-x}$ 严格递减而 $x$ 严格递增，故至多一根。

## 第二章 导数与微分

### §1 导数

#### 定义、单侧导数与几何意义

$$
f'(x_0)=\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}h
=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}.
$$

导数要求上式有**有限**极限。分别令 $h\to 0^-,h\to 0^+$ 得左、右导数；内点可导当且仅当二者存在且相等。

导数是瞬时变化率，也是曲线切线的斜率。在可导点 $(x_0,y_0)$：

$$
\text{切线：}\quad y-y_0=f'(x_0)(x-x_0),
$$

$$
\text{法线：}\quad (x-x_0)+f'(x_0)(y-y_0)=0.
$$

法线这一写法也包含 $f'(x_0)=0$ 时的竖直法线。导数无穷时不属于通常的可导，但可能存在竖直切线，应另作几何分析。

**可导必连续，连续不一定可导。** 例如 $|x|$ 在零点连续，但左右导数为 $-1,1$。分段点应先判断连续，再计算左右差商。

!!! example "例 2.1：从定义判断分段点可导"

    设 $f(x)=x^2\sin(\displaystyle\frac{1}{x})$（$x\ne 0$），$f(0)=0$。求 $f'(0)$，并判断导函数是否在零点连续。

    **解：** 差商为 $h\sin(\displaystyle\frac{1}{h})\to 0$，故 $f'(0)=0$。对 $x\ne 0$，

    $$
    f'(x)=2x\sin(\frac{1}{x})-\cos(\frac{1}{x}),
    $$

    它在零点没有极限，因此导函数不连续。可导不要求导函数连续。

#### 基本公式与运算法则

| 函数 | 导数 | 条件或提醒 |
| --- | --- | --- |
| $x^\alpha$ | $\alpha x^{\alpha-1}$ | 在函数可导的定义区间使用 |
| $e^x,a^x$ | $e^x,a^x\ln a$ | $a>0,a\ne 1$ |
| $\ln\lvert x\rvert,\log_a x$ | $\displaystyle\frac{1}{x},\frac{1}{x\ln a}$ | 前者 $x\ne 0$，后者 $x>0$ |
| $\sin x,\cos x$ | $\cos x,-\sin x$ | 弧度制 |
| $\tan x,\cot x$ | $\sec^2x,-\csc^2x$ | 排除原函数无定义点 |
| $\arcsin x,\arccos x$ | $\displaystyle\frac{1}{\sqrt{1-x^2}},-\frac{1}{\sqrt{1-x^2}}$ | $-1<x<1$ |
| $\arctan x,\operatorname{arccot}x$ | $\displaystyle\frac{1}{1+x^2},-\frac{1}{1+x^2}$ | 按第一章主值约定 |

$$
(uv)'=u'v+uv',\qquad
\left(\frac uv\right)'=\frac{u'v-uv'}{v^2},\qquad v\ne 0.
$$

复合函数的链式法则为

$$
\frac{\mathrm dy}{\mathrm dx}
=\frac{\mathrm dy}{\mathrm du}\frac{\mathrm du}{\mathrm dx}.
$$

反函数满足 $\displaystyle\frac{\mathrm dx}{\mathrm dy}\ne 0$ 时，

$$
\frac{\mathrm dy}{\mathrm dx}=\frac1{\dfrac{\mathrm dx}{\mathrm dy}},\qquad
\frac{\mathrm d^2y}{\mathrm dx^2}
=-\frac{\dfrac{\mathrm d^2x}{\mathrm dy^2}}{\left(\dfrac{\mathrm dx}{\mathrm dy}\right)^3}.
$$

幂指函数 $y=u(x)^{v(x)}$，在 $u>0$ 时可先取对数：

$$
y'=u^v\left(v'\ln u+v\frac{u'}u\right).
$$

乘积含多个因子、幂次复杂时，也可使用对数求导；需要取 $\ln|y|$ 的情形，应先限制在有关函数非零的区间。

#### 隐函数与参数方程求导

由 $F(x,y)=0$ 定义 $y=y(x)$ 时，对等式两边求导，所有含 $y$ 的项都要使用链式法则。若 $F$ 一阶连续可微且 $F_y\ne 0$，则局部有

$$
y'=-\frac{F_x}{F_y}.
$$

这里 $F_x,F_y$ 表示把另一变量暂视为常量得到的偏导，第八章将系统讨论。二阶导数通常通过对一阶导数关系再次求导获得。

若 $x=\varphi(t),y=\psi(t)$ 且 $\varphi'(t)\ne 0$，则

$$
\frac{\mathrm dy}{\mathrm dx}=\frac{\psi'(t)}{\varphi'(t)},\qquad
\frac{\mathrm d^2y}{\mathrm dx^2}
=\frac1{\varphi'(t)}\frac{\mathrm d}{\mathrm dt}
\left(\frac{\psi'(t)}{\varphi'(t)}\right).
$$

!!! warning "二阶导数不是两个二阶导数相除"

    参数方程中，$\displaystyle\frac{\mathrm d^2y}{\mathrm dx^2}$ 一般不等于 $\displaystyle\frac{\psi''(t)}{\varphi''(t)}$。每对 $x$ 求一次导数，都应先对 $t$ 求导，再除以 $\displaystyle\frac{\mathrm dx}{\mathrm dt}$。

!!! example "例 2.2：隐函数的二阶导数"

    对单位圆上满足 $y>0$ 的点，将 $y$ 视为 $x$ 的函数，求 $y',y''$。

    **解：** 从 $x^2+y^2=1$ 得 $x+yy'=0$，所以 $y'=-\displaystyle\frac{x}{y}$。再求导得 $1+(y')^2+yy''=0$，于是

    $$
    y''=-\frac{1+\dfrac{x^2}{y^2}}{y}=-\frac1{y^3}.
    $$

#### 高阶导数

高阶导数逐次求得，但求一般的 $n$ 阶导数时，应寻找结构：

$$
\frac{\mathrm d^n}{\mathrm dx^n}e^{ax}=a^ne^{ax},\qquad
\frac{\mathrm d^n}{\mathrm dx^n}\sin(ax+b)=a^n\sin\left(ax+b+\frac{n\pi}2\right),
$$

$$
\frac{\mathrm d^n}{\mathrm dx^n}\frac1{x-a}
=\frac{(-1)^nn!}{(x-a)^{n+1}},\qquad
\frac{\mathrm d^n}{\mathrm dx^n}\ln x
=\frac{(-1)^{n-1}(n-1)!}{x^n}\quad (n\ge 1).
$$

乘积的莱布尼茨公式为

$$
(uv)^{(n)}=\sum_{k=0}^n\binom nk u^{(k)}v^{(n-k)}.
$$

若一个因子是低次多项式，求和中只有少数非零项。

!!! example "例 2.3：用莱布尼茨公式减少计算"

    求 $f(x)=x^2e^x$ 的 $n$ 阶导数，$n\ge 1$。

    **解：** $x^2$ 的三阶及以上导数为零，所以

    $$
    f^{(n)}(x)=e^x[x^2+2nx+n(n-1)].
    $$

#### 导数在实际中的应用

若 $s(t)$ 为位移，则速度 $v=s'$，加速度 $a=s''$。相关变化率问题应先写各变量之间的关系，再统一对时间求导。

!!! example "例 2.4：相关变化率"

    球的半径以 $\displaystyle\frac{\mathrm dr}{\mathrm dt}=2$ 的速度增加，求半径为 $3$ 时体积的增长率。

    **解：** $V=\displaystyle\frac{4\pi r^3}{3}$，因此 $\displaystyle\frac{\mathrm dV}{\mathrm dt}=4\pi r^2\,\frac{\mathrm dr}{\mathrm dt}=72\pi$。若长度单位为厘米、时间单位为秒，结果单位为立方厘米每秒。

### §2 微分

#### 可微的定义与线性近似

若

$$
\Delta y=f(x+\Delta x)-f(x)=A\Delta x+o(\Delta x),
$$

则称 $f$ 在该点可微，$A\Delta x$ 是增量的线性主部。对一元函数，**可微与可导等价**，且

$$
\mathrm dy=f'(x)\,\mathrm dx,\qquad \mathrm dx=\Delta x.
$$

因此 $\Delta y=\mathrm dy+o(\Delta x)$，但 $\Delta y$ 与 $\mathrm dy$ 一般不严格相等。若 $f'(x)=0$，线性主部为零，应关注更高阶项。

#### 微分法则与形式不变性

$$
\mathrm d(u\pm v)=\mathrm du\pm \mathrm dv,\quad
\mathrm d(uv)=v\,\mathrm du+u\,\mathrm dv,\quad
\mathrm d\left(\frac uv\right)=\frac{v\,\mathrm du-u\,\mathrm dv}{v^2}.
$$

无论 $u$ 是自变量还是可微的中间变量，$y=f(u)$ 都满足 $\mathrm dy=f'(u)\,\mathrm du$，称为一阶微分的形式不变性。这也是不定积分中“凑微分”的依据。

#### 近似计算与误差估计

$$
f(x_0+h)\approx f(x_0)+f'(x_0)h.
$$

绝对误差的一阶估计为 $|\Delta y|\approx|f'(x_0)\Delta x|$；当 $f(x_0)\ne 0$ 时，相对误差约为 $|f'(x_0)\displaystyle\frac{\Delta x}{f(x_0)}|$。这是近似估计，严格误差界需用中值定理或泰勒余项。

!!! example "例 2.5：线性近似及其误差"

    估计 $\sqrt{4.04}$。

    **解：** 在 $x_0=4$ 处线性化，得 $\sqrt{4.04}\approx 2+0.04/4=2.01$。第三章的泰勒公式进一步给出：在 $[4,4.04]$ 上 $|f''(x)|\le 1/32$，故这次近似的绝对误差不超过 $(1/2)(1/32)(0.04)^2=0.000025$。

#### 高阶微分（\*）

教材正文第 112 页将本小节标为选学。自变量 $x$ 的微分视为常量时，

$$
\mathrm d^ny=f^{(n)}(x)(\mathrm dx)^n.
$$

若 $y=f(u)$、$u=u(x)$，则

$$
\mathrm d^2y=f''(u)(\mathrm du)^2+f'(u)\,\mathrm d^2u.
$$

高阶微分一般不具有一阶微分的形式不变性；**高阶导数仍是复习重点**，不能因本小节选学而省略。

### 本章自测

!!! example "自测 2"

    1. 用定义求 $f(x)=\ln(1+x)$ 在零点的导数。
    2. 设 $f(x)=ax+b$（$x<0$），$f(x)=e^x$（$x\ge 0$），求使其在零点可导的 $a,b$。
    3. 求 $y=x^{\sin x}$（$x>0$）的导数。
    4. 设 $x=t^2,y=t^3$（$t>0$），求 $\displaystyle\frac{\mathrm dy}{\mathrm dx}$ 和 $\displaystyle\frac{\mathrm d^2y}{\mathrm dx^2}$。
    5. 求 $x\cos x$ 的 $n$ 阶导数，$n\ge 1$。
    6. 求 $y=\ln x$ 在 $x=1$ 处的切线与法线，并用微分估计 $\ln1.02$。

    ??? success "答案与提示"

        1. $\lim_{h\to 0}\displaystyle\frac{\ln(1+h)}{h}=1$。
        2. 连续要求 $b=1$；左右导数相等要求 $a=1$。
        3. $y'=x^{\sin x}(\cos x\ln x+\displaystyle\frac{\sin x}{x})$。
        4. $\displaystyle\frac{\mathrm dy}{\mathrm dx}=\frac{3t}{2}$，$\displaystyle\frac{\mathrm d^2y}{\mathrm dx^2}=\frac{3}{4t}$。
        5. $x\cos(x+\displaystyle\frac{n\pi}{2})+n\cos(x+\frac{(n-1)\pi}{2})$。
        6. 切线 $y=x-1$，法线 $x+y=1$；$\ln1.02\approx 0.02$。

## 第三章 微分中值定理及导数的应用

### §1 微分中值定理

#### 费马定理与极值候选点

若 $x_0$ 是定义区间内点，$f$ 在 $x_0$ 可导且取得局部极值，则 $f'(x_0)=0$。导数为零的点称驻点。费马定理是必要条件，驻点不一定是极值点，例如 $x^3$ 的零点。

区间上求最值时，应检查内部驻点、不可导点和区间端点；最大值、最小值属于全局概念，极大值、极小值属于局部概念。

#### 罗尔、拉格朗日与柯西定理

| 定理 | 条件 | 结论 |
| --- | --- | --- |
| 罗尔定理 | $f\in C[a,b]$，在 $(a,b)$ 可导，$f(a)=f(b)$ | 存在 $\xi\in (a,b)$，$f'(\xi)=0$ |
| 拉格朗日中值定理 | $f\in C[a,b]$，在 $(a,b)$ 可导 | 存在 $\xi\in (a,b)$，$f(b)-f(a)=f'(\xi)(b-a)$ |
| 柯西中值定理 | $f,g\in C[a,b]$，在 $(a,b)$ 可导 | 存在 $\xi\in (a,b)$，$[f(b)-f(a)]g'(\xi)=[g(b)-g(a)]f'(\xi)$ |

柯西定理若写成商式，需另保证相关分母非零；常用充分条件是 $g'(x)\ne 0$。中值点 $\xi$ 通常依赖区间和函数，不同次使用定理得到的中值点不能擅自视为同一点。

拉格朗日定理的直接推论：区间上导数恒为零则函数为常数；导数恒正则严格递增，导数恒负则严格递减；若 $|f'|\le M$，则 $|f(x)-f(y)|\le M|x-y|$。

!!! tip "证明题怎样找辅助函数"

    目标为 $f'(\xi)=0$ 时先找两个相等函数值；目标含 $f'(\xi)-\lambda f(\xi)$ 时，可考虑 $e^{-\lambda x}f(x)$；目标比较函数与割线时，可用 $f(x)-f(a)-(f(b)-f(a))\displaystyle\frac{x-a}{b-a}$。辅助函数应使端点条件可用。

!!! example "例 3.1：用中值定理证明不等式"

    证明：对 $x>0$，有 $\displaystyle\frac{x}{1+x}<\ln(1+x)<x$。

    **解：** 对 $f(t)=\ln(1+t)$ 在 $[0,x]$ 用拉格朗日定理，得 $\ln(1+x)=\displaystyle\frac{x}{1+\xi}$，其中 $0<\xi<x$。比较分母即可得到两端严格不等式。

#### 单调区间与极值判别

在函数连续且相应开区间可导的条件下，用 $f'$ 的符号划分单调区间。在内点 $x_0$ 两侧：$f'$ 由正变负给出极大值，由负变正给出极小值；不变号时不产生极值。

若 $f'(x_0)=0$ 且 $f''(x_0)>0$，则为严格极小值；$f''(x_0)<0$ 时为严格极大值；$f''(x_0)=0$ 时该判别失效，应回到导数变号或泰勒展开。

### §2 未定式的极限

#### 洛必达法则

对于 $0/0$ 或 $\displaystyle\frac{\infty}{\infty}$ 型商，若在相应去心邻域或无穷区间内 $f,g$ 可导，$g'\ne 0$，且

$$
\lim \frac{f'(x)}{g'(x)}=A
$$

存在或为正、负无穷，则在洛必达法则的相应条件下 $\lim \displaystyle\frac{f(x)}{g(x)}=A$。单侧极限可分别应用。

使用顺序是：**确认未定式 → 检查条件 → 分子分母分别求导 → 重新判断类型**。不能对整个商求导来替代分子、分母分别求导。

#### 其他未定式的转换

| 类型 | 常用转换 |
| --- | --- |
| $0\cdot \infty$ | 将其中一个因子移到分母，化为商 |
| $\infty-\infty$ | 通分、有理化、提取主项 |
| $1^\infty,0^0,\infty^0$ | 底数为正时先取对数，研究 $v\ln u$ |

!!! warning "洛必达法则是充分方法，失效不等于原极限不存在"

    求导后的商没有极限，只说明这次使用未能给出结论。例如 $x\to+\infty$ 时，$\displaystyle\frac{x+\sin x}{x}\to 1$，但导数之商 $1+\cos x$ 没有极限。数列极限也不能直接对下标求导，应先构造相应连续变量函数并证明其极限。

!!! example "例 3.2：先变形，再决定是否求导"

    求 $\lim_{x\to 0^+}x\ln x$。

    **解：** 改写为 $\displaystyle\frac{\ln x}{\dfrac{1}{x}}$，这是无穷比无穷型。由洛必达法则，极限等于 $\lim_{x\to 0^+}\displaystyle\frac{\dfrac{1}{x}}{-\dfrac{1}{x^2}}=\lim (-x)=0$。

### §3 泰勒定理及应用

#### 两种余项

若 $f$ 在连接 $a$ 与 $x$ 的区间上有足够的连续导数，则

$$
f(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k
+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1},
$$

其中 $\xi$ 位于 $a,x$ 之间。这是带**拉格朗日余项**的泰勒公式，适合估计误差与证明不等式。

在 $a$ 处具有 $n$ 阶导数时，可使用带**佩亚诺余项**的局部展开

$$
f(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k+o((x-a)^n),\qquad x\to a.
$$

它适合计算极限和比较无穷小阶数。$a=0$ 时称麦克劳林公式。

#### 常用局部展开

以下均指 $x\to 0$，需要更高精度时继续保留后续项：

$$
e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+o(x^4),
$$

$$
\sin x=x-\frac{x^3}{6}+\frac{x^5}{120}+o(x^5),\qquad
\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4),
$$

$$
\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+o(x^4),
$$

$$
(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2
+\frac{\alpha(\alpha-1)(\alpha-2)}6x^3+o(x^3),
$$

$$
\arctan x=x-\frac{x^3}{3}+\frac{x^5}{5}+o(x^5),\qquad
\tan x=x+\frac{x^3}{3}+o(x^3).
$$

!!! example "例 3.3：展开到相消后的首个非零项"

    求 $\lim_{x\to 0}\displaystyle\frac{\ln(1+x)-x+\dfrac{x^2}{2}}{x^3}$。

    **解：** 分子为 $\displaystyle\frac{x^3}{3}+o(x^3)$，所以极限为 $1/3$。只使用 $\ln(1+x)\sim x$ 会丢失决定结果的三阶项。

#### 极值的高阶判别与近似误差

若 $f'(a)=\cdots=f^{(m-1)}(a)=0$、$f^{(m)}(a)\ne 0$，则在相应可展开条件下：$m$ 为偶数时，由 $f^{(m)}(a)$ 的正、负分别判断严格极小、极大；$m$ 为奇数时，不是极值点。

近似计算若使用 $n$ 次泰勒多项式，且区间上 $|f^{(n+1)}|\le M$，则

$$
|R_n(x)|\le \frac{M}{(n+1)!}|x-a|^{n+1}.
$$

!!! tip "有限泰勒公式与无穷级数的分工"

    本章的有限展开只需控制有限阶余项；第十一章要把函数写成无穷级数，还需证明阶数趋于无穷时余项趋于零。有限展开有效，并不自动给出无穷展开等于原函数。

### §4 数学建模（一）

最优化建模的一般步骤：确定变量与可行范围，写目标函数，用约束消去多余变量，求候选点，检查端点或边界，最后解释量纲与实际意义。

!!! example "例 3.4：开口圆柱容器的最省材料设计"

    制作容积为 $V>0$ 的无盖圆柱容器，底面和侧面单位面积耗材相同，忽略厚度，求最省材料的半径、高度关系。

    **解：** 由 $\pi r^2h=V$，表面积为 $S(r)=\pi r^2+\displaystyle\frac{2V}{r}$，$r>0$。令 $S'(r)=2\pi r-\displaystyle\frac{2V}{r^2}=0$，得 $r^3=\displaystyle\frac{V}{\pi}$，于是 $h=r$。

    $S''(r)=2\pi+\displaystyle\frac{4V}{r^3}>0$，且两端趋于无穷，因此该设计给出全局最小表面积。

### §5 函数图形的凹凸性与拐点

沿用教材的图形约定：曲线在各点切线上方称为**凹**（向上弯，$\cup$），在切线下方称为**凸**（向下弯，$\cap$）。在二阶可导区间内，$f''>0$ 对应凹，$f''<0$ 对应凸。

拐点是连续曲线上凹凸性发生改变的点。寻找时先列出 $f''=0$ 或 $f''$ 不存在的候选点，再检查两侧凹凸性。$f''=0$ 既不是充分条件，也不是所有情形下的必要条件。

!!! warning "凹凸名称可能因教材而异"

    复习时同时记录“$f''$ 的符号、图像向哪边弯、切线在图像哪一侧”，不要只记名称。$x^4$ 在零点二阶导数为零却没有拐点；$x^3$ 在零点才发生凹凸改变。

### §6 函数图形的描绘

#### 渐近线

- **竖直渐近线：** 若 $x\to a$ 的某一侧有 $|f(x)|\to+\infty$，则 $x=a$ 为竖直渐近线。
- **水平渐近线：** 若 $x\to+\infty$ 或 $-\infty$ 时 $f(x)\to b$，则该方向有 $y=b$。
- **斜渐近线：** 若 $f(x)-(kx+b)\to 0$，$k\ne 0$，则 $y=kx+b$ 是该方向的斜渐近线；可依次计算

$$
k=\lim \frac{f(x)}x,\qquad b=\lim[f(x)-kx].
$$

要求两个极限都有限。正、负无穷方向应分别讨论；曲线可以穿过水平或斜渐近线。

#### 作图步骤

定义域与间断点 → 奇偶性、周期性及交轴点 → 极限与渐近线 → $f'$ 的符号、极值 → $f''$ 的符号、拐点 → 综合画图。

!!! example "例 3.5：用结构描绘有理函数"

    分析 $f(x)=x+\displaystyle\frac{1}{x}$ 的主要图形特征。

    **解：** 定义域为 $x\ne 0$，函数为奇函数；渐近线为 $x=0$ 和 $y=x$。由 $f'=1-\displaystyle\frac{1}{x^2}$，在 $(-\infty,-1)$、$(1,+\infty)$ 递增，在 $(-1,0)$、$(0,1)$ 递减。

    $(-1,-2)$ 是极大值点，$(1,2)$ 是极小值点。$f''=\displaystyle\frac{2}{x^3}$，两侧弯曲方向不同，但原点不在曲线上，因此不能把原点记为拐点。

### §7 导数在经济中的应用（\*）

教材第 164 页起选学。设产量为 $q$，成本 $C(q)$、收入 $R(q)$、利润 $\Pi(q)=R(q)-C(q)$。

- 边际成本、边际收入分别为 $C'(q),R'(q)$，表示产量增加一个小单位时的近似增量。
- 内部利润极值的候选条件是 $R'(q)=C'(q)$，仍需二阶或变号判别。
- 平均成本为 $\overline C(q)=\displaystyle\frac{C(q)}{q}$，其内部驻点满足 $C'(q)=\displaystyle\frac{C(q)}{q}$。
- 对非零的 $y=f(x)$，弹性可写成 $E=x \displaystyle\frac{f'(x)}{f(x)}$，表示相对变化率之比。需求价格弹性常另取负号或绝对值，必须先看定义。

这些经济专门术语作为应用拓展；导数、最值和相对变化率的计算方法与主线相通。

### §8 曲率

曲率衡量切线方向随弧长改变的快慢：$\kappa=|\displaystyle\frac{\mathrm d\theta}{\mathrm ds}|$。对 $y=f(x)$，

$$
\kappa=\frac{|f''(x)|}{[1+f'(x)^2]^{3/2}}.
$$

对正则参数曲线 $x=x(t),y=y(t)$，

$$
\kappa=\frac{|x'y''-y'x''|}{(x'^2+y'^2)^{3/2}}.
$$

当 $\kappa\ne 0$ 时，曲率半径 $\rho=\displaystyle\frac{1}{\kappa}$；曲率圆的圆心位于曲线的凹侧法线上。对 $f''\ne 0$，圆心坐标为

$$
X=x-\frac{f'(1+f'^2)}{f''},\qquad
Y=f(x)+\frac{1+f'^2}{f''}.
$$

直线曲率为零，半径为 $R$ 的圆曲率为 $\displaystyle\frac{1}{R}$。

!!! example "例 3.6：曲率与曲率圆"

    求抛物线 $y=x^2$ 在原点的曲率及曲率圆。

    **解：** $f'(0)=0,f''(0)=2$，所以 $\kappa=2,\rho=1/2$。圆心为 $(0,1/2)$，曲率圆为 $x^2+(y-1/2)^2=1/4$。

### §9 方程的近似根（\*）

教材第 180 页起选学。先通过图形、变号与单调性确定隔根区间，再选数值方法。

| 方法 | 基本步骤或迭代式 | 需要关注的条件 |
| --- | --- | --- |
| 二分法 | 每次保留端点异号的一半区间 | 函数连续；不适合直接发现偶重根 |
| 牛顿法（切线法） | $x_{n+1}=x_n-\displaystyle\frac{f(x_n)}{f'(x_n)}$ | 导数不能为零，初值要合适；不保证任意初值都收敛 |
| 弦截法 | $x_{n+1}=x_n-f(x_n)\displaystyle\frac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})}$ | 使用割线近似切线；分母非零，需判断收敛 |

二分 $n$ 次后的区间长度为 $\displaystyle\frac{b-a}{2^n}$；若取这个区间的中点，误差不超过 $\displaystyle\frac{b-a}{2^{n+1}}$。光滑函数的单根附近，在导数非零等条件下，牛顿法具有二次收敛速度。

### 本章自测

!!! example "自测 3"

    1. 设 $f\in C[0,1]$，在 $(0,1)$ 可导，$f(0)=f(1)$。证明存在 $\xi\in (0,1)$ 使 $f'(\xi)=0$，并说明用到的条件。
    2. 求 $\lim_{x\to 0}\displaystyle\frac{\sin x-x\cos x}{x^3}$。
    3. 求 $f(x)=x^3-3x$ 在 $[-2,2]$ 上的最大、最小值和全部取得点。
    4. 求 $y=\displaystyle\frac{x}{x-1}$ 的竖直与水平渐近线。
    5. 判断 $y=x^4$ 的零点是否为极值点、拐点，并说明判据。
    6. 求 $y=\ln x$ 在 $x=1$ 处的曲率。
    7. （\*）用牛顿法求 $\sqrt2$，从 $x_0=1$ 出发写出前两次迭代结果。

    ??? success "答案与提示"

        1. 闭区间连续、开区间可导、端点值相等，正好满足罗尔定理。
        2. 分子为 $\displaystyle\frac{x^3}{3}+o(x^3)$，故极限为 $1/3$。
        3. 候选点为 $-2,-1,1,2$，函数值分别为 $-2,2,-2,2$。最大值为 $2$，在 $-1,2$ 取得；最小值为 $-2$，在 $-2,1$ 取得。
        4. 竖直渐近线 $x=1$；正、负无穷方向均有水平渐近线 $y=1$。
        5. $x^4\ge 0$，零点为严格极小值点；$f''=12x^2$ 在两侧不变号，故不是拐点。
        6. $\displaystyle\frac{|f''(1)|}{[1+f'(1)^2]^{3/2}}=\frac{1}{2\sqrt2}$。
        7. $x_{n+1}=\displaystyle\frac{x_n+\dfrac{2}{x_n}}{2}$，$x_1=3/2$，$x_2=17/12$。

## 第四章 不定积分

### §1 不定积分的概念

#### 原函数与不定积分

若在区间 $I$ 上有 $F'(x)=f(x)$，则 $F$ 是 $f$ 的一个原函数。$f$ 的全部原函数构成不定积分：

$$
\int f(x)\,\mathrm dx=F(x)+C.
$$

同一区间上的任意两个原函数只差常数，这由“导数恒为零的函数是常数”推出。连续函数一定有原函数，但原函数不一定能用初等函数表示，例如 $e^{-x^2}$ 的原函数。

!!! warning "积分常数与定义区间"

    不定积分必须写任意常数。若定义域分成不相连的区间，各区间上的常数可以独立选取。例如 $\displaystyle\frac{1}{x}$ 在 $(0,+\infty)$ 与 $(-\infty,0)$ 上的原函数可以分别是 $\ln|x|+C_1$、$\ln|x|+C_2$。

#### 基本积分表

以下均在被积函数连续的适当区间上使用，$a>0$：

| 被积函数 | 一个原函数 |
| --- | --- |
| $x^\alpha$，$\alpha\ne-1$ | $\displaystyle\frac{x^{\alpha+1}}{\alpha+1}$ |
| $\displaystyle\frac{1}{x}$ | $\ln\lvert x\rvert$ |
| $e^x$，$a^x$（$a\ne 1$） | $e^x$，$\displaystyle\frac{a^x}{\ln a}$ |
| $\sin x$，$\cos x$ | $-\cos x$，$\sin x$ |
| $\sec^2x$，$\csc^2x$ | $\tan x$，$-\cot x$ |
| $\sec x\tan x$，$\csc x\cot x$ | $\sec x$，$-\csc x$ |
| $\displaystyle\frac{1}{a^2+x^2}$ | $a^{-1}\arctan(\displaystyle\frac{x}{a})$ |
| $\displaystyle\frac{1}{\sqrt{a^2-x^2}}$ | $\arcsin(\displaystyle\frac{x}{a})$ |
| $\displaystyle\frac{1}{x^2-a^2}$ | $(2a)^{-1}\ln\lvert\displaystyle\frac{x-a}{x+a}\rvert$ |
| $\displaystyle\frac{1}{\sqrt{x^2+a^2}}$ | $\ln\lvert x+\sqrt{x^2+a^2}\rvert$ |
| $\displaystyle\frac{1}{\sqrt{x^2-a^2}}$ | $\ln\lvert x+\sqrt{x^2-a^2}\rvert$，$\lvert x\rvert>a$ |

上表省略的任意常数在写不定积分答案时都要补上。还常用

$$
\int \tan x\,\mathrm dx=-\ln|\cos x|+C,\qquad
\int \cot x\,\mathrm dx=\ln|\sin x|+C,
$$

$$
\int \sec x\,\mathrm dx=\ln|\sec x+\tan x|+C,\qquad
\int \csc x\,\mathrm dx=\ln|\csc x-\cot x|+C.
$$

#### 线性性质

$$
\int[\alpha f(x)+\beta g(x)]\,\mathrm dx
=\alpha\int f(x)\,\mathrm dx+\beta\int g(x)\,\mathrm dx.
$$

这里的任意常数最终合并为一个。积分不保持一般乘积或商：$\displaystyle\int fg$ 不能拆成两个积分的乘积。

### §2 不定积分的几种基本方法

#### 凑微分法（第一换元法）

若 $F'=f$，则链式法则反向给出

$$
\int f(\varphi(x))\varphi'(x)\,\mathrm dx=F(\varphi(x))+C.
$$

识别一个整体及其导数，例如 $\displaystyle\int \frac{f'}{f}\,\mathrm dx=\ln|f|+C$（在 $f\ne 0$ 的区间）。凑微分时缺少的常数因子必须补偿。

!!! example "例 4.1：把内层函数作为整体"

    求 $\displaystyle\int \frac{x}{1+x^2}\,\mathrm dx$。

    **解：** $\mathrm d(1+x^2)=2x\,\mathrm dx$，所以积分为 $\displaystyle\frac12\ln(1+x^2)+C$。少写 $1/2$ 会使求导结果扩大一倍。

#### 变量代换法（第二换元法）

令 $x=\varphi(t)$，在可逆的合适区间内，

$$
\int f(x)\,\mathrm dx=\int f(\varphi(t))\varphi'(t)\,\mathrm dt.
$$

先化简为易积分的形式，求完后再换回 $x$。含根式时可参考：

| 结构 | 常用代换 | 分支提醒 |
| --- | --- | --- |
| $\sqrt{a^2-x^2}$ | $x=a\sin t$ | 选择 $\cos t\ge 0$ 的区间化简根号 |
| $\sqrt{a^2+x^2}$ | $x=a\tan t$ | 可取 $-\pi/2<t<\pi/2$ |
| $\sqrt{x^2-a^2}$ | 在 $x>a$ 分支取 $x=a\sec t$ | $x<-a$ 的分支另选代换或回代核查 |
| 同一线性式的分数次幂 | 取共同根式为新变量 | 指数分母的公倍数有助于有理化 |

!!! example "例 4.2：三角代换与回代"

    求 $\displaystyle\int \sqrt{a^2-x^2}\,\mathrm dx$，$a>0$、$|x|<a$。

    **解：** 令 $x=a\sin t$，$-\pi/2<t<\pi/2$，被积式化为 $a^2\cos^2t\,\mathrm dt$。降幂后积分并回代得

    $$
    \int \sqrt{a^2-x^2}\,\mathrm dx
    =\frac x2\sqrt{a^2-x^2}+\frac{a^2}{2}\arcsin\frac xa+C.
    $$

#### 分部积分法

由乘积微分公式得到

$$
\int u\,\mathrm dv=uv-\int v\,\mathrm du.
$$

选择 $u$ 时希望它求导后更简单，选择 $\mathrm dv$ 时希望能容易积分。对数、反三角函数常适合作 $u$；多项式乘指数或三角函数可反复分部积分。

!!! example "例 4.3：两类分部积分"

    分别求 $\displaystyle\int \ln x\,\mathrm dx$（$x>0$）与 $\displaystyle\int e^x\sin x\,\mathrm dx$。

    **解：** 第一题取 $u=\ln x,\mathrm dv=\mathrm dx$，得 $x\ln x-x+C$。

    第二题连续两次分部积分。记原积分为 $I$，得到 $I=e^x\sin x-e^x\cos x-I$，整理为

    $$
    I=\frac{e^x}{2}(\sin x-\cos x)+C.
    $$

!!! tip "先看结构，再选方法"

    内层函数及其导数成对出现时先凑微分；根式或复杂复合式可尝试换元；两类函数相乘且一类求导后变简单时考虑分部积分。方法可以组合，求完后对结果求导是直接的数学核对方式。

### §3 某些特殊类型函数的不定积分

#### 有理函数：多项式除法与部分分式

对 $\displaystyle\frac{P(x)}{Q(x)}$，若分子次数不小于分母次数，先作多项式除法。对剩下的真分式，把分母在实数范围分解为一次因式与不可约二次因式，再配部分分式。

- 因子 $(x-a)^m$ 对应 $\displaystyle\frac{A_1}{x-a}+\cdots+\frac{A_m}{(x-a)^m}$。
- 不可约二次因子 $(x^2+px+q)^m$ 对应 $\sum_{k=1}^m\displaystyle\frac{B_kx+C_k}{(x^2+px+q)^k}$。

二次式分母常通过“分子拆成分母导数的一部分 + 常数”、配方和递推处理，最后化为有理式、对数与反正切。

!!! example "例 4.4：先拆分，避免盲目换元"

    求 $\displaystyle\int \frac{1}{x(x+1)}\,\mathrm dx$。

    **解：** $\displaystyle\frac{1}{x(x+1)}=\frac{1}{x}-\frac{1}{x+1}$，所以结果为 $\ln|x|-\ln|x+1|+C$，在不跨越 $-1,0$ 的区间理解。

#### 三角函数有理式

对 $R(\sin x,\cos x)$，万能代换 $t=\tan(\displaystyle\frac{x}{2})$ 给出

$$
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2},\qquad
\mathrm dx=\frac{2\,\mathrm dt}{1+t^2}.
$$

它把三角有理式转成有理函数，但需在代换有效的区间内使用，计算量也可能增大。更简单的结构应优先利用：

- $\sin x$ 为奇数次幂时，留出 $\sin x\,\mathrm dx$，其余用 $\sin^2x=1-\cos^2x$。
- $\cos x$ 为奇数次幂时，类似地用 $u=\sin x$。
- 两者均为偶数次幂时，用降幂与倍角公式。
- 含 $\sec^2x\,\mathrm dx$ 或 $\csc^2x\,\mathrm dx$ 时，考虑 $\tan x$ 或 $\cot x$。

#### 某些无理函数：先消去根式

根式中的二次多项式先配方，再选择三角代换；若涉及 $\sqrt[m]{x}$ 与 $\sqrt[n]{x}$，常取 $x=t^k$，其中 $k$ 为 $m,n$ 的公倍数。代换必须记录实数范围，尤其是偶次根的符号。

!!! example "例 4.5：根式有理化"

    求 $\displaystyle\int \frac{\sqrt x}{1+\sqrt x}\,\mathrm dx$，$x>0$。

    **解：** 令 $t=\sqrt x$，则 $\mathrm dx=2t\,\mathrm dt$，得到

    $$
    \int \frac{2t^2}{1+t}\,\mathrm dt
    =\int 2\left(t-1+\frac1{t+1}\right)\mathrm dt
    =x-2\sqrt x+2\ln(1+\sqrt x)+C.
    $$

### 本章自测

!!! example "自测 4"

    1. 求 $\displaystyle\int (3x^2-\frac{2}{x})\,\mathrm dx$。
    2. 求 $\displaystyle\int x e^{x^2}\,\mathrm dx$。
    3. 求 $\displaystyle\int x\ln x\,\mathrm dx$（$x>0$）。
    4. 求 $\displaystyle\int \frac{x^2}{1+x^2}\,\mathrm dx$。
    5. 求 $\displaystyle\int \sin^3x\cos x\,\mathrm dx$。
    6. 求 $\displaystyle\int \frac{1}{x\sqrt{\ln x}}\,\mathrm dx$（$x>1$），说明选择哪个整体换元。

    ??? success "答案与提示"

        1. $x^3-2\ln|x|+C$。
        2. 令 $u=x^2$，结果为 $\displaystyle\frac{e^{x^2}}{2}+C$。
        3. 分部积分得 $\displaystyle\frac{x^2}{2}\ln x-\frac{x^2}{4}+C$。
        4. 分拆成 $1-\displaystyle\frac{1}{1+x^2}$，得 $x-\arctan x+C$。
        5. 令 $u=\sin x$，得 $\displaystyle\frac{\sin^4x}{4}+C$。
        6. 令 $u=\ln x$，积分为 $\displaystyle\int u^{-1/2}\,\mathrm du=2\sqrt{\ln x}+C$。

## 第五章 定积分及其应用

### §1 定积分概念

#### 分割、取点、求和与极限

将 $[a,b]$ 分成 $a=x_0<x_1<\cdots<x_n=b$，在每段任取 $\xi_i$，记 $\Delta x_i=x_i-x_{i-1}$、$\lambda=\max_i\Delta x_i$。若

$$
\lim_{\lambda\to 0}\sum_{i=1}^nf(\xi_i)\Delta x_i=I
$$

与分割及取点方式无关，则 $f$ 在 $[a,b]$ 上黎曼可积，记 $I=\displaystyle\int_a^bf(x)\,\mathrm dx$。积分是数值，积分变量是哑变量，可以更换字母。

当 $f\ge 0$ 时，它表示曲边梯形面积；一般情况下表示上、下区域面积的带符号之差。几何面积应对绝对值积分或按符号分段。

#### 可积函数类

黎曼可积必有界，有界不一定可积。闭区间上的连续函数、单调函数，以及有界且只有有限个间断点的函数都可积。

可积不要求连续；可积也不保证有原函数。例如阶跃函数可积，但跳跃点使它不能在整个区间上作为某个可导函数的导数。相反，有原函数与是否黎曼可积也不能脱离有界性等条件混为一谈。

!!! example "例 5.1：把数列和式识别为定积分"

    求 $\lim_{n\to \infty}\sum_{k=1}^n \displaystyle\frac{n}{n^2+k^2}$。

    **解：** 改写为 $\displaystyle\frac1n\sum_{k=1}^n[1+(\frac{k}{n})^2]^{-1}$，这是 $[0,1]$ 上等分、取右端点的黎曼和，因此极限为 $\displaystyle\int_0^1\frac{\mathrm dx}{1+x^2}=\pi/4$。

### §2 定积分的性质和基本定理

#### 基本性质

$$
\int_a^af=0,\qquad \int_b^af=-\int_a^bf,\qquad
\int_a^bf=\int_a^cf+\int_c^bf.
$$

线性性质仍成立。以下保序与估值默认 $a<b$ 且函数可积：

$$
f\le g\Rightarrow\int_a^bf\le \int_a^bg,\qquad
\left|\int_a^bf\right|\le \int_a^b|f|.
$$

若 $m\le f\le M$，则 $m(b-a)\le \displaystyle\int_a^bf\le M(b-a)$。若 $f$ 连续，积分中值定理给出某个 $\xi\in[a,b]$，使

$$
\int_a^bf(x)\,\mathrm dx=f(\xi)(b-a).
$$

积分平均值为 $(b-a)^{-1}\displaystyle\int_a^bf$。连续非负函数若在某一点为正，则在整个非退化区间上的积分为正；连续非负函数积分为零，当且仅当它恒为零。

#### 微积分学基本定理

若 $f$ 连续，定义 $F(x)=\displaystyle\int_a^xf(t)\,\mathrm dt$，则

$$
F'(x)=f(x).
$$

更一般地，被积函数可积且在 $x_0$ 连续时，变上限积分在该点的导数等于 $f(x_0)$。

若 $\alpha,\beta$ 可导、$f$ 连续，则

$$
\frac{\mathrm d}{\mathrm dx}\int_{\alpha(x)}^{\beta(x)}f(t)\,\mathrm dt
=f(\beta(x))\beta'(x)-f(\alpha(x))\alpha'(x).
$$

若 $F'=f$ 且 $f$ 连续，则牛顿—莱布尼茨公式为

$$
\int_a^bf(x)\,\mathrm dx=F(b)-F(a).
$$

!!! warning "区分积分变量与外部变量"

    对 $\displaystyle\int_0^xf(t)\,\mathrm dt$ 求导，结果为 $f(x)$；若被积函数还显含外部变量，例如 $\displaystyle\int_0^x(x-t)f(t)\,\mathrm dt$，不能只把 $t=x$ 代入。可先拆成 $x\displaystyle\int_0^xf(t)\,\mathrm dt-\int_0^xtf(t)\,\mathrm dt$，再求导，结果为 $\displaystyle\int_0^xf(t)\,\mathrm dt$。

!!! example "例 5.2：变限积分与链式法则"

    求 $G(x)=\displaystyle\int_x^{x^2}\sin(t^2)\,\mathrm dt$ 的导数。

    **解：** 上限与下限分别贡献一项，$G'(x)=2x\sin(x^4)-\sin(x^2)$。不需要先找到 $\sin(t^2)$ 的初等原函数。

### §3 定积分的计算方法

#### 换元与分部积分

在相应连续、可导条件下，令 $x=\varphi(t)$，$\varphi(\alpha)=a,\varphi(\beta)=b$，有

$$
\int_a^bf(x)\,\mathrm dx
=\int_\alpha^\beta f(\varphi(t))\varphi'(t)\,\mathrm dt.
$$

换元时同时改变被积函数、微分和上下限。按新上下限计算完，不必再换回旧变量；递减代换的负号与反向积分限应配套处理。

$$
\int_a^bu(x)v'(x)\,\mathrm dx
=[u(x)v(x)]_a^b-\int_a^bu'(x)v(x)\,\mathrm dx.
$$

#### 利用对称性、周期性和区间变换

| 结构 | 简化公式 |
| --- | --- |
| 奇函数、对称区间 | $\displaystyle\int_{-a}^af(x)\,\mathrm dx=0$ |
| 偶函数、对称区间 | $\displaystyle\int_{-a}^af(x)\,\mathrm dx=2\int_0^af(x)\,\mathrm dx$ |
| 区间反射 | $\displaystyle\int_a^bf(x)\,\mathrm dx=\int_a^bf(a+b-x)\,\mathrm dx$ |
| 周期为 $T>0$ | 一个完整周期的积分与起点无关；整周期数可提取倍数 |
| $f(a+b-x)=f(x)$ | $\displaystyle\int_a^bxf(x)\,\mathrm dx=\frac{a+b}{2}\int_a^bf(x)\,\mathrm dx$ |

这些公式都要在积分存在的前提下使用；反常积分不能仅凭奇偶性越过奇点相消。

!!! example "例 5.3：区间反射省去求原函数"

    求 $I=\displaystyle\int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\,\mathrm dx$。

    **解：** 作 $x=\pi/2-t$，得到 $I=\displaystyle\int_0^{\pi/2}\frac{\cos t}{\sin t+\cos t}\,\mathrm dt$。两式相加得 $2I=\pi/2$，所以 $I=\pi/4$。

### §4 定积分的应用

#### 微元法

把总量分成小块，找出小块的一阶近似 $\mathrm dQ$，再按几何范围积分。先确定“积累什么、沿哪个变量切片、每片厚度是什么”，再写公式。

#### 平面面积与立体体积

| 对象 | 公式与条件 |
| --- | --- |
| 两曲线之间的面积 | $A=\displaystyle\int_a^b\lvert f(x)-g(x)\rvert\,\mathrm dx$；交点处分段 |
| 用水平截线算面积 | $A=\displaystyle\int_c^d[x_{\rm right}(y)-x_{\rm left}(y)]\,\mathrm dy$ |
| 极坐标面积 | $A=\displaystyle\frac12\int_\alpha^\beta[r_2(\theta)^2-r_1(\theta)^2]\,\mathrm d\theta$，要求 $0\le r_1\le r_2$ 且区域不重复覆盖 |
| 已知截面积的体积 | $V=\displaystyle\int_a^bA(x)\,\mathrm dx$ |
| 绕轴旋转的垫片法 | $V=\pi\displaystyle\int_a^b[R(x)^2-r(x)^2]\,\mathrm dx$，内外半径是到旋转轴的距离 |
| 绕 $y$ 轴的柱壳法 | $V=2\pi\displaystyle\int_a^bxh(x)\,\mathrm dx$，适用于 $0\le a<b$ 且旋转壳层不重复覆盖 |

旋转区域跨越轴时，不能直接把带符号的坐标当半径；应先画出旋转后的截面，确定真实内外半径或避免重叠的壳层。

!!! example "例 5.4：同一区域的面积与旋转体积"

    区域由 $y=x$、$y=x^2$ 围成，求面积及绕 $x$ 轴旋转所得体积。

    **解：** 交点为 $x=0,1$，在其间 $x\ge x^2$，故面积为 $\displaystyle\int_0^1(x-x^2)\,\mathrm dx=1/6$。外半径为 $x$，内半径为 $x^2$，体积为

    $$
    V=\pi\int_0^1(x^2-x^4)\,\mathrm dx=\frac{2\pi}{15}.
    $$

#### 弧长与旋转曲面面积

弧长元始终非负。按参数从小到大积分：

$$
L=\int_a^b\sqrt{1+f'(x)^2}\,\mathrm dx,
$$

$$
L=\int_\alpha^\beta\sqrt{x'(t)^2+y'(t)^2}\,\mathrm dt,
\qquad
L=\int_\alpha^\beta\sqrt{r(\theta)^2+r'(\theta)^2}\,\mathrm d\theta.
$$

若平面曲线绕一条轴旋转且曲面没有被重复计入，表面积为

$$
S=\int_L2\pi\,\operatorname{dist}(P,\text{旋转轴})\,\mathrm ds.
$$

例如 $y=f(x)\ge 0$ 绕 $x$ 轴旋转，$S=2\pi\displaystyle\int_a^bf(x)\sqrt{1+f'(x)^2}\,\mathrm dx$。面积、体积、弧长与曲面面积的积分元不同，不能只凭图形相似套公式。

#### 物理应用

| 物理量 | 微元与积分 |
| --- | --- |
| 直线上的变力做功 | $W=\displaystyle\int_a^bF(x)\,\mathrm dx$，$F$ 取沿位移方向的有符号分量 |
| 线密度为 $\rho(x)$ 的细杆质量 | $M=\displaystyle\int_a^b\rho(x)\,\mathrm dx$ |
| 细杆质心与转动惯量 | $\bar x=M^{-1}\displaystyle\int_a^bx\rho(x)\,\mathrm dx$；$I=\displaystyle\int_a^bd(x,\text{轴})^2\rho(x)\,\mathrm dx$ |
| 竖直平板所受静水压力 | $F=\displaystyle\int \rho g h\,w(h)\,\mathrm dh$；$h$ 为液面下深度，$w(h)$ 为该深度的水平宽度 |
| 引力 | 对每个质量元使用 $\displaystyle\frac{Gm\,\mathrm dm}{r^2}$，再取所需方向的分量积分 |

例如，均匀细杆位于 $[0,L]$，线密度为 $\rho$，质量 $m$ 的质点位于杆外 $a>L$，引力大小为

$$
Gm\rho\int_0^L\frac{\mathrm dx}{(a-x)^2}
=Gm\rho\left(\frac1{a-L}-\frac1a\right),
$$

方向指向细杆。更一般的质量分布将在第九章统一处理。

#### 经济应用

边际量积分还原总量的变化，例如 $C(q_2)-C(q_1)=\displaystyle\int_{q_1}^{q_2}C'(q)\,\mathrm dq$；绝对成本还需固定成本或一个初始值。连续收入流 $R(t)$、固定连续贴现率 $r$ 下，区间 $[0,T]$ 的现值模型为 $\displaystyle\int_0^TR(t)e^{-rt}\,\mathrm dt$。经济模型作为应用阅读，重点理解累计量与变化率的对应。

### §5 反常积分

#### 无穷区间上的反常积分

$$
\int_a^{+\infty}f(x)\,\mathrm dx
=\lim_{A\to+\infty}\int_a^Af(x)\,\mathrm dx.
$$

极限有限则收敛，否则发散。对整个实轴，应任取有限分点 $c$，分别要求

$$
\int_{-\infty}^cf(x)\,\mathrm dx,\qquad
\int_c^{+\infty}f(x)\,\mathrm dx
$$

都收敛，才把二者相加。不能用对称截断代替这两个独立极限。

#### 无界函数的反常积分

若 $b$ 是奇点，则定义 $\displaystyle\int_a^bf=\lim_{t\to b^-}\int_a^tf$；若 $a$ 是奇点，则取右侧截断。区间内部有奇点 $c$ 时，必须拆成两段且两段分别收敛。

基本的 $p$ 型结论为

$$
\int_1^{+\infty}\frac{\mathrm dx}{x^p}\text{ 收敛}\iff p>1,
\qquad
\int_0^1\frac{\mathrm dx}{x^p}\text{ 收敛}\iff p<1.
$$

两类积分的判断方向相反，因为一类看无穷远尾部，另一类看零点附近。

!!! warning "主值存在不等于反常积分收敛"

    $\displaystyle\int_{-1}^1\frac{\mathrm dx}{x}$ 的左右两段分别发散，因此反常积分发散。对称删去 $(-\varepsilon,\varepsilon)$ 得到的和虽恒为零，只是柯西主值，不能当作本章定义下的积分值。

#### 反常积分敛散性的判别法（\*）

教材第 278 页起选学。对非负函数，若在反常端附近 $0\le f\le g$，则 $\displaystyle\int g$ 收敛推出 $\displaystyle\int f$ 收敛；$\displaystyle\int f$ 发散推出 $\displaystyle\int g$ 发散。若 $\displaystyle\frac{f}{g}\to c\in (0,+\infty)$，则二者同敛散。

对变号函数，绝对收敛即 $\displaystyle\int|f|<\infty$，它能推出原积分收敛；反之未必成立。比较时应分别分析每个反常端点，正常区间上的有限积分不影响尾部敛散性。

!!! info "选学标记与复习方法"

    教材把一般判别法的系统讨论列为选学；反常积分的定义、计算及 $p$ 型判断仍要掌握。比较法能帮助判断某个积分是否有意义，也与第十一章正项级数的比较、积分判别法相联系。

!!! example "例 5.5：同时检查零点与无穷远"

    判断 $\displaystyle\int_0^{+\infty}\frac{x^{-p}}{1+x}\,\mathrm dx$ 的收敛范围。

    **解：** 在 $0$ 附近，被积函数等价于 $x^{-p}$，要求 $p<1$；在无穷远等价于 $x^{-p-1}$，要求 $p+1>1$，即 $p>0$。合并得 $0<p<1$。

#### Γ 函数（\*）

教材第 283 页起选学。定义

$$
\Gamma(s)=\int_0^{+\infty}x^{s-1}e^{-x}\,\mathrm dx,\qquad s>0.
$$

它满足 $\Gamma(s+1)=s\Gamma(s)$、$\Gamma(n+1)=n!$ 和 $\Gamma(1/2)=\sqrt\pi$。它把阶乘推广到连续参数；相关参数求导、$B$ 函数及两者关系见第十二章。

### §6 定积分的近似计算（\*）

教材第 286 页起选学。设等分步长 $h=\displaystyle\frac{b-a}{n}$，$x_i=a+ih$。

**矩形法**可用左、右端点或中点近似函数高度；中点公式为

$$
M_n=h\sum_{i=1}^nf\left(\frac{x_{i-1}+x_i}2\right).
$$

**梯形公式：**

$$
T_n=h\left[\frac{f(a)+f(b)}2+\sum_{i=1}^{n-1}f(x_i)\right].
$$

**辛普森公式（抛物线法）：** $n$ 必须是偶数，

$$
S_n=\frac h3\left[f(x_0)+f(x_n)
+4\sum_{\substack{1\le i\le n-1\\i\text{ 为奇数}}}f(x_i)
+2\sum_{\substack{2\le i\le n-2\\i\text{ 为偶数}}}f(x_i)\right].
$$

在相应导数连续条件下，若 $|f''|\le M_2$、$|f^{(4)}|\le M_4$，则

$$
|I-M_n|\le \frac{b-a}{24}h^2M_2,\qquad
|I-T_n|\le \frac{b-a}{12}h^2M_2,\qquad
|I-S_n|\le \frac{b-a}{180}h^4M_4.
$$

这些误差界不直接适用于有奇点的反常积分，必须先分析端点或另作处理。

### 本章自测

!!! example "自测 5"

    1. 求 $\lim_{n\to \infty}(\displaystyle\frac{1}{n})\sum_{k=1}^n(\frac{k}{n})^2$。
    2. 求 $F(x)=\displaystyle\int_{x}^{2x}\ln(1+t^2)\,\mathrm dt$ 的导数。
    3. 计算 $\displaystyle\int_0^\pi x\sin x\,\mathrm dx$，尝试用区间反射简化。
    4. 求 $y=x^2$、$y=4$ 围成的面积及该区域绕 $y$ 轴旋转所得体积。
    5. 求 $y=x^{3/2}$ 在 $0\le x\le 4$ 上的弧长。
    6. 判断并计算 $\displaystyle\int_0^1\ln x\,\mathrm dx$；再判断 $\displaystyle\int_{-1}^1\frac{1}{x^2}\,\mathrm dx$ 是否收敛。
    7. 高 $H$、宽 $b$ 的竖直矩形平板，上边缘在液面处，液体密度为 $\rho$。求一侧静水压力的大小。

    ??? success "答案与提示"

        1. $\displaystyle\int_0^1x^2\,\mathrm dx=1/3$。
        2. $F'(x)=2\ln(1+4x^2)-\ln(1+x^2)$。
        3. $\sin(\pi-x)=\sin x$，所以原积分为 $(\pi/2)\displaystyle\int_0^\pi\sin x\,\mathrm dx=\pi$。
        4. 面积为 $\displaystyle\int_{-2}^2(4-x^2)\,\mathrm dx=32/3$。旋转后在高度 $y$ 的截面半径为 $\sqrt y$，故体积为 $\pi\displaystyle\int_0^4y\,\mathrm dy=8\pi$。
        5. $L=\displaystyle\int_0^4\sqrt{1+\dfrac{9x}{4}}\,\mathrm dx=\frac8{27}(10\sqrt{10}-1)$。
        6. 第一积分等于 $\lim_{\varepsilon\to 0^+}[x\ln x-x]_\varepsilon^1=-1$。第二积分在零点两侧均发散，故发散。
        7. 深度 $h$ 的微元压力为 $\rho ghb\,\mathrm dh$，所以 $F=\displaystyle\frac{\rho gbH^2}{2}$。

## 第六章 常微分方程

本章求的是未知函数。已知 $y=x^2$ 求 $y'=2x$ 是求导；已知 $y'=2x$ 求 $y$，则要找出所有满足这个导数关系的函数，得到 $y=x^2+C$。微分方程把这种问题推广到同时含有 $x,y,y',y''$ 等量的情形。

学习时先掌握一阶方程的分类与求解，再学习二阶方程。每种方法都要分清三件事：原方程满足什么条件、变换后求的是哪个函数、怎样还原并检验原方程的解。

### §1 基本概念

!!! tip "这一章的主线"

    先观察未知函数及其导数怎样出现在方程中，再判断能否分离变量、是否线性、是否缺少某个变量。分类的目的是选择适用的方法；同一方程也可能有不止一种解法。

    配套两个习惯：一是**解完要检验**，代回原方程或对结果求导都能核对；二是**交代解所在区间**，初值条件、分母不为零、对数与根式的限制都要一并写清。分离变量时除掉的常数解容易漏，需要单独回代检查。

常微分方程是含未知函数及其对一个自变量的导数的关系式；出现的最高阶导数决定方程的阶。把函数及所需导数代回后，在某区间上恒成立，就称该函数为该区间上的解。

- **通解：** 通常含与阶数相同个数的独立任意常数，但还须注意换元可能遗漏的解。
- **特解：** 确定任意常数后得到的解。
- **初值问题：** 除方程外，指定同一点的函数值及必要的导数值。
- **积分曲线：** 解函数的图像；方程可用方向场描述其局部斜率。

这里的“阶”按最高阶导数判断，不按幂次判断。例如 $(y')^2+y=0$ 是一阶方程，$y''+y=0$ 是二阶方程。只在某一个 $x$ 值处满足等式，还不足以称为解；解必须在所讨论区间内处处满足方程。

!!! example "例 6.1：通解、特解与初值条件"

    求 $y'=2x$ 且 $y(1)=3$ 的解。

    **解：** 先积分得到 $y=x^2+C$。每一个固定的 $C$ 都给出一个解，含任意常数的表达式给出通解。再代入初值，$3=1+C$，得 $C=2$，所以初值问题的解为 $y=x^2+2$。

    二阶方程通常需要两个初值。例如 $y''=2$ 积分两次得 $y=x^2+C_1x+C_2$；给出 $y(0)$ 和 $y'(0)$ 后，才能分别确定 $C_2$ 和 $C_1$。

线性方程中，未知函数及其各阶导数只以一次线性组合出现，系数只能依赖自变量。例如 $y''+xy'+y=\sin x$ 是线性的，$yy'+x=0$ 不是。$x$ 的次数不影响线性判断；$y^2$、$(y')^2$、$yy'$ 或 $\sin y$ 等项则不符合线性形式。

把所有含 $y$ 及其导数的项移到左边后，右边不含未知函数的项叫**自由项**。自由项恒为零，称为线性齐次方程；否则称为线性非齐次方程。

!!! info "解的局部存在与唯一性"

    对 $y'=f(x,y)$，若 $f$ 与 $f_y$ 在初始点附近连续，则初值问题在足够小的区间内有唯一解。这是常用充分条件；不能据此断言解在整个实轴存在，也不能在条件失效时直接断言无解。

### §2 可分离变量方程

#### 直接分离变量

分离变量要求右端能够写成“只含 $x$ 的函数”与“只含 $y$ 的函数”的乘积。例如 $y'=x(1+y^2)$ 符合这种形式；$y'=x+y$ 不能直接按此法分离。

设 $g(y)\ne0$，原方程可写成 $\displaystyle\frac{y'}{g(y)}=f(x)$。若 $G'(y)=\displaystyle\frac{1}{g(y)}$，由链式法则，左端就是 $\displaystyle\frac{\mathrm d[G(y(x))]}{\mathrm dx}$。因此两边对 $x$ 积分得到 $G(y(x))=\int f(x)\,\mathrm dx+C$。这说明分离后的积分有链式法则作为依据。

若 $y'=f(x)g(y)$，在 $g(y)\ne 0$ 的区间上有

$$
\frac{\mathrm dy}{g(y)}=f(x)\,\mathrm dx,
\qquad
\int \frac{\mathrm dy}{g(y)}=\int f(x)\,\mathrm dx+C.
$$

若 $g(c)=0$，常数函数 $y=c$ 可能是解，应代回原方程检查。解可能以隐式形式给出，还需限定对应的分支与存在区间。

!!! example "例 6.2：初值确定常数与分支"

    解 $y'=2x(1+y^2)$，$y(0)=0$。

    **解：** 因为 $1+y^2>0$，除以它不会漏解。先把两种变量分开：

    $$
    \frac{\mathrm dy}{1+y^2}=2x\,\mathrm dx.
    $$

    两边积分得 $\arctan y=x^2+C$。代入 $x=0,y=0$ 得 $C=0$，再解出 $y=\tan(x^2)$。

    还要确定包含 $0$ 的解区间：从 $x=0$ 出发，最先遇到的极点满足 $x^2=\pi/2$，故最大解区间为 $|x|<\sqrt{\pi/2}$。在此区间内，$y'=2x\sec^2(x^2)=2x(1+y^2)$，且 $y(0)=0$，检验完成。

#### 齐次微分方程

有些方程暂时不能分离，但右端只含 $\displaystyle\frac{y}{x}$。例如 $y'=1+(\displaystyle\frac{y}{x})^2$ 中，$x,y$ 总以同一个比值出现。令这个比值等于新函数 $u(x)$，就可以减少右端的变量种类。注意 $u$ 随 $x$ 变化，所以 $y=xu(x)$ 求导时必须使用乘积法则。

一阶齐次型方程指 $y'=F(\displaystyle\frac{y}{x})$，在 $x\ne 0$ 的区间令 $u=\displaystyle\frac{y}{x}$，即 $y=ux$，则

$$
y'=u+xu',\qquad xu'=F(u)-u.
$$

这时可分离变量。若 $F(c)=c$，直线 $y=cx$ 可能因除以 $F(u)-u$ 而遗漏，应补查。

!!! example "例 6.3：齐次型换元后的回代"

    解 $y'=1+\displaystyle\frac{y}{x}$，讨论 $x>0$。

    **解：** 令 $u=\displaystyle\frac{y}{x}$，则 $y=xu$、$y'=u+xu'$。代回得

    $$
    u+xu'=1+u,\qquad u'=\frac1x.
    $$

    积分得到的是 $u=\ln x+C$，而题目要求的是 $y$，因此还须回代：$y=x(\ln x+C)$。代回可得 $y'=\ln x+C+1=1+\displaystyle\frac{y}{x}$。

!!! warning "两个‘齐次’含义不同"

    一阶齐次型是指右端可以写成 $\displaystyle\frac{y}{x}$ 的函数；线性齐次方程是指自由项为零，例如 $y'+P(x)y=0$。应先识别具体结构，再选方法。

### §3 一阶线性微分方程

#### 积分因子与常数变易

对标准形式 $y'+P(x)y=Q(x)$，假设 $P,Q$ 在所讨论区间连续。可以通过乘上适当的函数，将左端化成一个乘积的导数。设乘上的函数为 $\mu(x)$，比较

$$
\mu y'+\mu P y
\quad\text{与}\quad
(\mu y)'=\mu y'+\mu' y,
$$

可知只要 $\mu'=P\mu$，两式就相等。解这个可分离变量方程，可取 $\mu=e^{\int P(x)\,\mathrm dx}$，它称为**积分因子**。这里任取 $P$ 的一个原函数即可；原函数相差的常数只会让 $\mu$ 多一个非零常数倍，不影响求解。

因此，取积分因子

$$
\mu(x)=e^{\int P(x)\,\mathrm dx},
$$

则 $(\mu y)'=\mu Q$，因此

$$
y=e^{-\int P(x)\,\mathrm dx}
\left[\int Q(x)e^{\int P(x)\,\mathrm dx}\,\mathrm dx+C\right].
$$

另一种方法是先解 $y'+Py=0$，得到 $y=Ce^{-\int P}$，再设非齐次解为 $y=C(x)e^{-\int P}$。代入后含 $C(x)$ 的两项抵消，只剩 $C'(x)e^{-\int P}=Q$；积分求出 $C(x)$，仍得到上面的通解。这叫**常数变易法**。

若原方程不是标准式，先除以最高阶导数的系数，并排除该系数为零的点后分区间讨论。例如 $xy'+2y=x^2$ 在 $x\ne0$ 时应先化为 $y'+(\displaystyle\frac{2}{x})y=x$，此时 $P=\displaystyle\frac{2}{x},Q=x$。

!!! example "例 6.4：一阶线性初值问题"

    解 $y'+2y=e^{-x}$，$y(0)=0$。

    **解：** 这里 $P=2,Q=e^{-x}$，所以积分因子为 $e^{2x}$。两边同乘它，得到

    $$
    e^{2x}y'+2e^{2x}y=e^x,
    \qquad (e^{2x}y)'=e^x.
    $$

    积分得 $e^{2x}y=e^x+C$，再除以 $e^{2x}$，得 $y=e^{-x}+Ce^{-2x}$。代入 $y(0)=0$，有 $0=1+C$，故所求解为 $y=e^{-x}-e^{-2x}$。系数在全实轴连续，该解也在全实轴上成立。

#### 伯努利方程

伯努利方程右端含 $y^m$，一般不是线性方程。先除以 $y^m$，会出现 $y^{-m}y'$ 和 $y^{1-m}$。因为 $(y^{1-m})'=(1-m)y^{-m}y'$，这两项可以同时用一个新函数及其导数表示。

对 $y'+P(x)y=Q(x)y^m$，$m\ne 0,1$，在幂函数及除法有意义的非零解区间内令 $z=y^{1-m}$，得到

$$
z'+(1-m)P(x)z=(1-m)Q(x).
$$

先解一阶线性方程，再还原 $y$。$m=0,1$ 本身就是线性方程；$y=0$ 是否为解由原方程决定，不能在换元时丢掉。

!!! example "例 6.5：伯努利方程的零解不能漏"

    解 $y'+y=xy^2$。

    **解：** 先处理非零解。两边除以 $y^2$ 得 $\displaystyle\frac{y'}{y^2}+\frac{1}{y}=x$。令 $z=\displaystyle\frac{1}{y}$，注意 $z'=-\displaystyle\frac{y'}{y^2}$，所以 $-z'+z=x$，即 $z'-z=-x$。

    这个一阶线性方程的积分因子为 $e^{-x}$，于是

    $$
    (e^{-x}z)'=-xe^{-x},\qquad e^{-x}z=(x+1)e^{-x}+C.
    $$

    因而 $z=x+1+Ce^x$。回代得到非零解

    $$
    y=\frac1{x+1+Ce^x},
    $$

    定义在分母不为零的区间。此外 $y\equiv 0$ 也满足原方程。

### §4 全微分方程（\*）

本节用到第八章的偏导数与全微分，可以在学过那里后回看。记 $u_x,u_y$ 分别为固定另一变量时的导数；全微分写为 $\mathrm du=u_x\,\mathrm dx+u_y\,\mathrm dy$。如果方程左端就是这个形式，那么沿解曲线有 $\mathrm du=0$，故 $u$ 保持为常数。

教材第 310 页起选学，正文提示可结合下册知识再学。若

$$
M(x,y)\,\mathrm dx+N(x,y)\,\mathrm dy=0
$$

的左端恰为某个函数 $u(x,y)$ 的全微分，则解可表示为 $u(x,y)=C$。在单连通开区域内，$M,N$ 有连续一阶偏导时，存在这样的 $u$ 的充要条件是 $M_y=N_x$。

求 $u$ 可先对 $x$ 积分：$u=\displaystyle\int M\,\mathrm dx+\varphi(y)$，再用 $u_y=N$ 确定 $\varphi$。第八章的全微分和第十章的路径无关性提供其理论依据；这个关联中的原函数与全微分概念仍需掌握。

!!! example "例 6.6：识别一个全微分"

    解 $(2xy+1)\,\mathrm dx+(x^2+2y)\,\mathrm dy=0$。

    **解：** $M_y=N_x=2x$。对 $M$ 关于 $x$ 积分，得 $u=x^2y+x+\varphi(y)$；由 $u_y=x^2+\varphi'=x^2+2y$，得 $\varphi=y^2+C_0$。积分曲线为 $x^2y+x+y^2=C$。

### §5 可降阶的二阶微分方程

| 类型 | 代换 | 降阶后的方程 |
| --- | --- | --- |
| $y''=f(x)$ | 连续积分两次 | $y'=\displaystyle\int f(x)\,\mathrm dx+C_1$，再积分 |
| $y''=f(x,y')$，不显含 $y$ | $p(x)=y'$ | $p'=f(x,p)$，解出后再由 $y'=p$ 积分 |
| $y''=f(y,y')$，不显含 $x$ | 局部取 $p(y)=y'$ | $p\,\displaystyle\frac{\mathrm dp}{\mathrm dy}=f(y,p)$，再由 $\displaystyle\frac{\mathrm dy}{\mathrm dx}=p(y)$ 求解 |

第三种代换用到 $y''=(\displaystyle\frac{\mathrm dp}{\mathrm dy})(\frac{\mathrm dy}{\mathrm dx})$，在能把 $y$ 作为局部变量的区间使用。常数解和转折点处要另外检查，尤其不能除以 $p$ 后就丢掉 $p=0$ 的解。

“降阶”是先求一个辅助函数，再求原来的 $y$。尤其要区分 $p(x)$ 与 $p(y)$：前者对 $x$ 求导就是 $y''$；后者还需乘上 $y'=p$。

!!! example "例 6.7：不显含 y 时，先求 y'"

    解 $y''=2xy'$，并满足 $y(0)=0,y'(0)=1$。

    **解：** 方程没有直接出现 $y$，令 $p(x)=y'$，则 $p'=2xp$。由初值 $p(0)=1$ 得 $p=e^{x^2}$。再由 $y'=e^{x^2}$ 及 $y(0)=0$ 得

    $$
    y(x)=\int_0^x e^{t^2}\,\mathrm dt.
    $$

    这个定积分定义的函数就是解，不要求一定写成初等函数。求导可验证 $y'=e^{x^2}$、$y''=2xe^{x^2}=2xy'$。

对于不显含 $x$ 的情形，例如 $y''=(y')^2$，在 $y'\ne0$ 的局部区间令 $p=p(y)$，得 $p\,\displaystyle\frac{\mathrm dp}{\mathrm dy}=p^2$。除以 $p$ 后有 $\displaystyle\frac{\mathrm dp}{\mathrm dy}=p$，故 $p=Ce^y$，再解 $y'=Ce^y$，得到 $e^{-y}=C_1-Cx$，即 $y=-\ln(C_1-Cx)$，取 $C_1-Cx>0$ 的区间。上述非零分支中 $C\ne0$；除法排除的 $p=0$ 对应任意常数解，须另行保留。

### §6 二阶线性微分方程解的结构

先看一个不需要线性代数的例子：$y''-y=0$ 有两个解 $e^x,e^{-x}$。将 $C_1e^x+C_2e^{-x}$ 代入，仍有 $y''-y=0$，因为求导和相减都遵守线性运算规则。

对 $y''-y=2$，常数函数 $y_p=-2$ 是一个特解。若再加上任意齐次解 $y_h$，则 $(y_p+y_h)''-(y_p+y_h)=2+0=2$。反过来，任意两个非齐次解相减，右端的 $2$ 抵消，差就满足齐次方程。这给出下面的解的结构。

对

$$
y''+p(x)y'+q(x)y=f(x),
$$

假设 $p,q,f$ 在所讨论区间连续。

- 齐次方程的解可作线性组合。
- 若 $y_1,y_2$ 是线性无关的齐次解，则齐次通解为 $C_1y_1+C_2y_2$。
- 非齐次通解为**对应齐次通解 + 任一非齐次特解**。
- 同一非齐次方程两个解的差是齐次解。
- 不同右端对应的特解可按右端的线性组合叠加。

这里的**线性无关**是指：若常数 $c_1,c_2$ 使 $c_1y_1(x)+c_2y_2(x)$ 在整个区间恒为零，则只能有 $c_1=c_2=0$。对两个非零解，这也就是不能由其中一个乘固定常数得到另一个。例如 $e^x$ 与 $2e^x$ 不能提供两个独立的任意常数，而 $e^x$ 与 $e^{-x}$ 可以。

对同一个二阶齐次方程的两个解，可用朗斯基行列式

$$
W(x)=\begin{vmatrix}y_1&y_2\\y_1'&y_2'\end{vmatrix}
=y_1y_2'-y_1'y_2
$$

判断独立性：在某一点 $W\ne 0$，则构成基本解组；连续系数条件下 $W'= -pW$，所以此时在整个区间都不为零。

??? info "与线性代数的联系"

    记 $L[y]=y''+p(x)y'+q(x)y$。由于 $L[c_1y_1+c_2y_2]=c_1L[y_1]+c_2L[y_2]$，$L$ 是一个线性算子。在上述连续系数条件下，二阶齐次方程的解构成二维线性空间，两个线性无关的解是一组基；非齐次解集则由一个特解加上全部齐次解得到。这与线性方程组的解的结构一致。

!!! warning "非齐次方程的解不能任意线性组合"

    记 $L[y]=y''+p(x)y'+q(x)y$。若 $L[y_1]=L[y_2]=f$，则 $L[c_1y_1+c_2y_2]=(c_1+c_2)f$。当 $f\not\equiv 0$ 时，只有 $c_1+c_2=1$ 才仍对应原来的右端；不要把齐次方程的叠加原则直接照搬。

### §7 二阶常系数线性微分方程的解法

#### 齐次方程：特征根

常系数意味着 $p,q$ 是固定数。试设 $y=e^{rx}$，则 $y'=re^{rx}$、$y''=r^2e^{rx}$；代入齐次方程后得到 $(r^2+pr+q)e^{rx}=0$。由于 $e^{rx}\ne0$，只须求解关于 $r$ 的代数方程。

对 $y''+py'+qy=0$，特征方程为 $r^2+pr+q=0$。

| 特征根 | 实通解 |
| --- | --- |
| 不同实根 $r_1,r_2$ | $C_1e^{r_1x}+C_2e^{r_2x}$ |
| 二重实根 $r$ | $(C_1+C_2x)e^{rx}$ |
| 共轭复根 $\alpha\pm i\beta$，$\beta>0$ | $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ |

简单高阶常系数齐次方程同样使用特征多项式：$m$ 重实根 $r$ 对应 $e^{rx},xe^{rx},\ldots,x^{m-1}e^{rx}$；复根对应的实解由指数、正弦余弦及相应的 $x$ 次幂组成。

例如 $y''-3y'+2y=0$ 的特征方程是 $(r-1)(r-2)=0$，故 $y=C_1e^x+C_2e^{2x}$。若给定 $y(0)=1,y'(0)=0$，则 $C_1+C_2=1,C_1+2C_2=0$，解得 $y=2e^x-e^{2x}$。

重根时，只写两个 $e^{rx}$ 不能得到两个线性无关的解，需使用 $e^{rx}$ 和 $xe^{rx}$。复根 $\alpha\pm i\beta$ 则利用 $e^{i\beta x}=\cos\beta x+i\sin\beta x$，得到表中的两个实值解。

#### 非齐次方程：待定系数与共振

先求对应齐次方程的通解，再找一个非齐次特解。待定系数法适用于右端是多项式、指数函数、正弦余弦及其有限乘积、和的情形；它不是任意右端都适用的方法。

例如右端为 $x$，可先试 $y_p=Ax+B$，因为求导后仍是多项式。把它代回原方程，比较同次幂的系数，即可确定 $A,B$。如果试探形式已经全部属于齐次解，代回左端恒为零，就必须调整形式。下表中的 $x^k$ 正是为此引入；与特征根重复的情形也称为共振。无阻尼振动中的同频外力是其物理应用之一。

对 $y''+py'+qy=f(x)$，设一个与右端结构匹配的特解：

| 右端 | 特解试探形式 |
| --- | --- |
| $e^{\lambda x}P_m(x)$ | $x^ke^{\lambda x}Q_m(x)$ |
| $e^{\alpha x}[P_m(x)\cos\beta x+Q_n(x)\sin\beta x]$ | $x^ke^{\alpha x}[A_s(x)\cos\beta x+B_s(x)\sin\beta x]$，$s=\max (m,n)$ |

第一行 $k$ 是 $\lambda$ 作为特征根的重数，非根时 $k=0$；第二行 $\beta>0$，$k$ 是 $\alpha+i\beta$ 的重数。待定多项式应保留从常数到最高次的全部系数。即使右端只含正弦，也通常要同时设正弦和余弦两部分。

!!! example "例 6.8：先求齐次解，再比较系数"

    解 $y''-3y'+2y=x$。

    **解：** 齐次通解为 $C_1e^x+C_2e^{2x}$。右端是一次多项式，且 $0$ 不是特征根，设 $y_p=Ax+B$。由 $y_p'=A,y_p''=0$ 得

    $$
    2Ax+(2B-3A)=x.
    $$

    比较一次项与常数项，$2A=1,2B-3A=0$，得 $A=1/2,B=3/4$。因此通解为 $y=C_1e^x+C_2e^{2x}+\displaystyle\frac{x}{2}+3/4$。

!!! example "例 6.9：二重共振要乘二次幂"

    解 $y''-2y'+y=e^x$。

    **解：** 特征根 $r=1$ 为二重根，齐次通解为 $(C_1+C_2x)e^x$。特解设为 $Ax^2e^x$，代入左端得 $2Ae^x=e^x$，故 $A=1/2$。

    通解为 $y=(C_1+C_2x+\displaystyle\frac{x^2}{2})e^x$。若误设 $Ae^x$ 或 $Axe^x$，它们都已属于齐次解，无法产生所需右端。

#### 欧拉方程

对 $x>0$ 上的

$$
x^2y''+axy'+by=g(x),
$$

令 $t=\ln x$、$Y(t)=y(e^t)$，则

$$
xy'=Y',\qquad x^2y''=Y''-Y',
$$

从而得到常系数方程 $Y''+(a-1)Y'+bY=g(e^t)$。齐次情形也可直接试 $y=x^m$，得到 $m(m-1)+am+b=0$。

在 $x<0$ 的区间可用 $t=\ln|x|$ 分别处理；$x=0$ 往往是奇点，不能自动跨越。

### §8 常系数线性微分方程组

对

$$
\begin{cases}
x'=ax+by+f(t),\\
y'=cx+dy+g(t),
\end{cases}
$$

常用消元法：对一个方程求导，再用原方程消去另一个未知函数。若 $b\ne 0$，可得

$$
x''-(a+d)x'+(ad-bc)x=f'(t)-df(t)+bg(t),
$$

解出 $x$ 后，通过 $y=\displaystyle\frac{x'-ax-f(t)}{b}$ 还原。此方法要求所用右端具有必要的可导性；$b=0$ 时可先解第一式，或改从另一式消元。

!!! info "与线性代数的联系"

    方程组可以写成 $\mathbf X'=A\mathbf X+\mathbf F$。齐次情形中，若 $A\mathbf v=\lambda\mathbf v$，则 $e^{\lambda t}\mathbf v$ 是一个解。这将特征值与微分方程联系起来。本节教材未标星，备考时可在标量方程熟练后补充，不把它与一阶线性方程混为同一题型。

!!! example "例 6.10：相加、相减直接解方程组"

    解 $x'=x+y,y'=x+y$。

    **解：** 令 $u=x+y,v=x-y$，有 $u'=2u,v'=0$。回代并重命名常数，得到

    $$
    x=C_1e^{2t}+C_2,\qquad y=C_1e^{2t}-C_2.
    $$

### §9 二阶变系数线性微分方程的一般解法

教材第 337 页起介绍降阶法与常数变易法。本节作为一般方法保留，复习先保证能处理前面的常用类型。

#### 已知一个齐次解时的降阶

对 $y''+p(x)y'+q(x)y=f(x)$，若已知对应齐次方程的非零解 $y_1$，在 $y_1\ne 0$ 的区间令 $y=y_1v$，代回得

$$
y_1v''+(2y_1'+py_1)v'=f.
$$

这里用了 $y'=y_1'v+y_1v'$、$y''=y_1''v+2y_1'v'+y_1v''$。代入后，$v$ 的系数恰好是 $y_1''+py_1'+qy_1=0$，所以新方程只含 $v',v''$，实现了降阶。

再令 $w=v'$，便成为一阶线性方程。齐次情形可直接得到第二个解

$$
y_2=y_1\int \frac{e^{-\int p(x)\,\mathrm dx}}{y_1^2}\,\mathrm dx.
$$

#### 二阶方程的常数变易法

一阶常数变易法把一个常数换成函数，二阶情形则把 $C_1,C_2$ 分别换成 $u_1(x),u_2(x)$。一个待求的 $y_p$ 用两个函数表示，允许附加一个辅助条件。选择 $u_1'y_1+u_2'y_2=0$ 后，$y_p'=u_1y_1'+u_2y_2'$，再次求导并代入原方程，便只需解下面关于 $u_1',u_2'$ 的二元线性方程组。

设 $y_1,y_2$ 是齐次方程的一组基本解，$W=y_1y_2'-y_1'y_2\ne 0$。令特解 $y_p=u_1y_1+u_2y_2$，并要求

$$
\begin{cases}
u_1'y_1+u_2'y_2=0,\\
u_1'y_1'+u_2'y_2'=f.
\end{cases}
$$

解得

$$
y_p=-y_1\int \frac{y_2f}{W}\,\mathrm dx
+y_2\int \frac{y_1f}{W}\,\mathrm dx.
$$

先把方程化成最高阶导数系数为 $1$ 的形式，再使用此公式。非齐次通解仍为 $C_1y_1+C_2y_2+y_p$。

### §10 数学建模（二）——微分方程在几何、物理中的应用举例

建模的基本步骤是选变量、写变化率关系、补初始条件、解方程、检验实际范围。常见模型如下：

| 场景 | 方程 | 假设与含义 |
| --- | --- | --- |
| 几何曲线 | 将切线斜率条件写成 $y'=f(x,y)$ | 曲线上已知点提供初值 |
| 指数增长或衰减 | $N'=kN$ | 瞬时变化率与当前量成正比 |
| 牛顿冷却 | $T'=-k(T-T_a)$，$k>0$ | 环境温度 $T_a$ 固定，温差控制变化率 |
| 受力运动 | $m s''=F(t,s,s')$ | 由受力分析确定方向与正负号 |
| 弹簧振动 | $m s''+c s'+ks=F(t)$ | $s$ 从平衡位置量起；$c$ 为阻尼系数 |
| 串联 RLC 电路 | $Lq''+Rq'+\displaystyle\frac{q}{C}=E(t)$ | $q$ 为电荷，电流为 $q'$ |

无阻尼自由振动满足 $s''+\omega_0^2s=0$；周期外力频率与固有频率相同，可能产生共振，对应待定系数法中需要补乘 $t$ 的情形。

!!! example "例 6.11：由一次测量确定模型参数"

    环境温度为 $20$，物体初温为 $80$，按牛顿冷却模型，10 分钟后温度为 $50$。求 20 分钟后的温度。

    **解：** 模型解为 $T(t)=20+60e^{-kt}$。由 $T(10)=50$，得 $e^{-10k}=1/2$。所以 $T(20)=20+60/4=35$。

    温差按指数衰减，温度本身并非每 10 分钟减半。

### §11 差分方程（\*）

微分方程求随连续变量变化的函数，差分方程求按整数下标排列的数列。比如 $u_{n+1}=2u_n+1$ 规定了相邻两项的关系；给定 $u_0$ 后，可以逐项计算，也可以求出直接表示 $u_n$ 的通项公式。

教材第 348 页起选学。差分方程描述离散序列之间的关系，正向差分为 $\Delta u_n=u_{n+1}-u_n$，二阶差分为 $\Delta^2u_n=u_{n+2}-2u_{n+1}+u_n$。

#### 一阶线性差分方程

一般形式为 $u_{n+1}=a_nu_n+b_n$。逐次迭代可得

$$
u_n=\left(\prod_{k=0}^{n-1}a_k\right)u_0
+\sum_{j=0}^{n-1}\left(\prod_{k=j+1}^{n-1}a_k\right)b_j,
$$

其中空乘积取 $1$。特别地，对常系数 $u_{n+1}=au_n+b$，$n\ge 1$ 时

$$
u_n=
\begin{cases}
a^nu_0+\dfrac{b(1-a^n)}{1-a},&a\ne 1,\\
u_0+nb,&a=1.
\end{cases}
$$

若 $|a|<1$，序列趋于平衡值 $\displaystyle\frac{b}{1-a}$；这把第一章的递推极限与差分方程联系起来。

#### 二阶常系数线性差分方程

对 $u_{n+2}+pu_{n+1}+qu_n=0$，令 $u_n=r^n$ 得特征方程 $r^2+pr+q=0$。在 $q\ne 0$ 时，根的分类与微分方程平行：

| 特征根 | 解的形式 |
| --- | --- |
| 不同实根 $r_1,r_2$ | $C_1r_1^n+C_2r_2^n$ |
| 二重根 $r$ | $(C_1+C_2n)r^n$ |
| 共轭复根 $\rho e^{\pm i\theta}$ | $\rho^n(C_1\cos n\theta+C_2\sin n\theta)$ |

非齐次解仍可由齐次通解加一个特解组成。出现零根或退化形式时，可直接从原递推式处理，避免机械使用含 $0^0$ 的表达式。

### 本章自测

!!! example "自测 6"

    1. 解 $y'=xy$，$y(0)=2$。
    2. 解 $y'=1+\displaystyle\frac{y}{x}$，$y(1)=0$，讨论 $x>0$。
    3. 解 $y'+y=x$，$y(0)=0$。
    4. 解 $y''=y'$，$y(0)=0,y'(0)=1$。
    5. 求 $y''+y=\sin x$ 的通解，说明特解为什么需要乘 $x$。
    6. 求 $x^2y''-xy'+y=0$（$x>0$）的通解。
    7. 单位质量物体作无阻尼弹簧运动，弹性系数为 $4$，从平衡位置正向位移 $1$ 处静止释放。建立并求解运动方程。
    8. （\*）解差分方程 $u_{n+1}=2u_n+1$，$u_0=0$。

    ??? success "答案与提示"

        1. $y=2e^{\frac{x^2}{2}}$。
        2. 令 $u=\displaystyle\frac{y}{x}$，得 $xu'=1$，所以 $y=x(\ln x+C)$；由初值 $C=0$。
        3. 积分因子为 $e^x$，解为 $y=x-1+e^{-x}$。
        4. 令 $p=y'$，则 $p'=p,p(0)=1$，故 $p=e^x$，再积分得 $y=e^x-1$。
        5. $y=C_1\cos x+C_2\sin x-(\displaystyle\frac{x}{2})\cos x$。右端频率对应特征根 $i$，与齐次解发生共振。
        6. 欧拉特征方程为 $(m-1)^2=0$，故 $y=x(C_1+C_2\ln x)$。
        7. $s''+4s=0,s(0)=1,s'(0)=0$，解为 $s=\cos2t$。
        8. $u_n=2^n-1$，可用通式或令 $v_n=u_n+1$ 化成等比数列。

## 第七章 矢量代数与空间解析几何

### §1 二阶、三阶行列式及线性方程组

二阶行列式及三阶行列式按第一行展开分别为

$$
\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc,
$$

$$
\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}
=a_1(b_2c_3-b_3c_2)-a_2(b_1c_3-b_3c_1)+a_3(b_1c_2-b_2c_1).
$$

常用性质：交换两行变号；某行乘 $k$，行列式乘 $k$；一行加上另一行的倍数，行列式不变；两行成比例则为零。列也有同样性质。

对方程组 $A\mathbf x=\mathbf b$，若系数行列式 $D\ne 0$，则由克拉默法则

$$
x_i=\frac{D_i}{D},
$$

其中 $D_i$ 是把系数矩阵第 $i$ 列换为常数列后的行列式。$D\ne 0$ 意味着唯一解；$D=0$ 时应继续消元，不能据此判断无解还是无穷多解。

!!! tip "行列式的几何用途"

    二阶行列式对应平面有向面积，三阶行列式对应空间有向体积。后面的矢量积、混合积，都可以借助行列式统一记忆。

### §2 矢量概念及矢量的线性运算

矢量同时具有大小和方向。记 $\mathbf a$ 的模为 $\lVert\mathbf a\rVert$，非零矢量对应的单位矢量为 $\displaystyle\frac{\mathbf a}{\lVert\mathbf a\rVert}$。

- 加法用平行四边形法则或首尾相接法则；减法看成加上相反矢量。
- 数乘 $\lambda\mathbf a$ 的模是 $|\lambda|\lVert\mathbf a\rVert$，方向由 $\lambda$ 的符号决定。
- 非零矢量平行，当且仅当其中一个是另一个的数倍。
- 三个不共面的矢量构成空间的一组基底，任意空间矢量可唯一表示为它们的线性组合。

### §3 空间直角坐标系与矢量的坐标表达式

采用右手直角坐标系。若 $A(x_1,y_1,z_1)$、$B(x_2,y_2,z_2)$，则

$$
\overrightarrow{AB}=(x_2-x_1,y_2-y_1,z_2-z_1),\qquad
|AB|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}.
$$

矢量加减与数乘按分量进行。若 $\mathbf a=(a_1,a_2,a_3)\ne \mathbf0$ 与三个正坐标轴的夹角分别为 $\alpha,\beta,\gamma$，则其**方向余弦**为

$$
(\cos\alpha,\cos\beta,\cos\gamma)
=\frac{(a_1,a_2,a_3)}{\sqrt{a_1^2+a_2^2+a_3^2}},\qquad
\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1.
$$

### §4 两矢量的数量积与矢量积

#### 数量积：投影与垂直

$$
\mathbf a\cdot \mathbf b
=\lVert\mathbf a\rVert\lVert\mathbf b\rVert\cos\theta
=a_1b_1+a_2b_2+a_3b_3.
$$

两非零矢量垂直等价于数量积为零。$\mathbf a$ 在非零矢量 $\mathbf b$ 方向上的**标量投影**与**矢量投影**分别为

$$
\operatorname{comp}_{\mathbf b}\mathbf a
=\frac{\mathbf a\cdot \mathbf b}{\lVert\mathbf b\rVert},\qquad
\operatorname{proj}_{\mathbf b}\mathbf a
=\frac{\mathbf a\cdot \mathbf b}{\lVert\mathbf b\rVert^2}\mathbf b.
$$

#### 矢量积：法向量与面积

$$
\mathbf a\times \mathbf b
=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix},\qquad
\lVert\mathbf a\times \mathbf b\rVert
=\lVert\mathbf a\rVert\lVert\mathbf b\rVert\sin\theta.
$$

方向按从 $\mathbf a$ 转向 $\mathbf b$ 的右手法则确定；结果垂直于两矢量。其模是两矢量所张平行四边形的面积，三角形面积再除以 $2$。

$$
\mathbf a\times \mathbf b=-\mathbf b\times \mathbf a.
$$

两非零矢量平行等价于矢量积为零。

!!! warning "两种乘积不能混用"

    数量积输出一个数，矢量积输出一个矢量。矢量积不满足交换律，也不满足一般的结合律；计算三重乘积时必须保留括号。

### §5 矢量的混合积与二重矢积

**混合积**为

$$
[\mathbf a,\mathbf b,\mathbf c]
=\mathbf a\cdot (\mathbf b\times \mathbf c)
=\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}.
$$

它的绝对值是平行六面体的体积，除以 $6$ 是共顶点三棱锥的体积。三矢量共面，当且仅当混合积为零。循环置换不变，交换任意两个矢量变号。

**二重矢积**可化成线性组合：

$$
\mathbf a\times (\mathbf b\times \mathbf c)
=(\mathbf a\cdot \mathbf c)\mathbf b
-(\mathbf a\cdot \mathbf b)\mathbf c.
$$

!!! example "例 7.1：法向量、面积与体积"

    设 $\mathbf a=(1,1,0)$、$\mathbf b=(0,1,1)$、$\mathbf c=(1,0,1)$。求前两矢量张成平面的一个法向量，以及三矢量张成的平行六面体体积。

    **解：** $\mathbf a\times \mathbf b=(1,-1,1)$ 是所求法向量。平行四边形面积为 $\sqrt3$，体积为

    $$
    |(\mathbf a\times \mathbf b)\cdot \mathbf c|=2.
    $$

### §6 平面与直线方程

#### 平面方程

过点 $\mathbf r_0=(x_0,y_0,z_0)$、以 $\mathbf n=(A,B,C)\ne \mathbf0$ 为法向量的平面为

$$
\mathbf n\cdot (\mathbf r-\mathbf r_0)=0
\quad \Longleftrightarrow\quad
A(x-x_0)+B(y-y_0)+C(z-z_0)=0.
$$

一般式为 $Ax+By+Cz+D=0$。若三个非零截距是 $a,b,c$，截距式为 $\displaystyle\frac{x}{a}+\frac{y}{b}+\frac{z}{c}=1$。过三个不共线点的平面，可先对两条连线矢量作矢量积求法向量。

#### 直线方程

过 $\mathbf r_0$、方向矢量为 $\mathbf s=(l,m,n)\ne \mathbf0$ 的直线为

$$
\mathbf r=\mathbf r_0+t\mathbf s,
\qquad
x=x_0+lt,\quad y=y_0+mt,\quad z=z_0+nt.
$$

当各分母非零时，可写对称式

$$
\frac{x-x_0}{l}=\frac{y-y_0}{m}=\frac{z-z_0}{n}.
$$

若某个方向分量为零，直接把相应坐标写成常数。两个不平行平面的交线也可表示直线，方向矢量为两个法向量的矢量积。

#### 角度与位置关系

下表的直线夹角、平面夹角取不大于 $\pi/2$ 的角，线面夹角在 $[0,\pi/2]$ 内。

| 对象 | 夹角公式 | 平行或垂直的判断 |
| --- | --- | --- |
| 两直线，方向为 $\mathbf s_1,\mathbf s_2$ | $\cos\theta=\displaystyle\frac{\lvert\mathbf s_1\cdot \mathbf s_2\rvert}{\lVert\mathbf s_1\rVert\lVert\mathbf s_2\rVert}$ | 方向成比例则平行或重合；数量积为零则方向正交 |
| 两平面，法向量为 $\mathbf n_1,\mathbf n_2$ | $\cos\theta=\displaystyle\frac{\lvert\mathbf n_1\cdot \mathbf n_2\rvert}{\lVert\mathbf n_1\rVert\lVert\mathbf n_2\rVert}$ | 法向量平行则平面平行或重合；法向量垂直则平面垂直 |
| 直线与平面 | $\sin\theta=\displaystyle\frac{\lvert\mathbf s\cdot \mathbf n\rvert}{\lVert\mathbf s\rVert\lVert\mathbf n\rVert}$ | $\mathbf s\cdot \mathbf n=0$ 则直线平行于平面或在平面内；二者平行则线面垂直 |

两条方向不平行的空间直线还可能异面。设其上分别取点 $P_1,P_2$，则共面条件为

$$
\overrightarrow{P_1P_2}\cdot (\mathbf s_1\times \mathbf s_2)=0.
$$

共面且不平行时才相交。线面位置关系可把直线参数方程代入平面方程，观察参数方程是唯一解、无解还是恒成立。

#### 距离与平面束

点 $P(x_0,y_0,z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离为

$$
d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.
$$

点 $P$ 到直线 $\mathbf r=\mathbf r_0+t\mathbf s$ 的距离为

$$
d=\frac{\lVert(\mathbf r_P-\mathbf r_0)\times \mathbf s\rVert}{\lVert\mathbf s\rVert}.
$$

过两个相交平面 $F_1=0,F_2=0$ 的交线的平面束为

$$
\lambda F_1+\mu F_2=0,\qquad (\lambda,\mu)\ne (0,0).
$$

写成 $F_1+kF_2=0$ 会漏掉 $F_2=0$，使用单参数形式时须单独检查。

!!! example "例 7.2：由三个点确定平面"

    求过 $A(1,0,0)$、$B(0,2,0)$、$C(0,0,3)$ 的平面，以及原点到该平面的距离。

    **解：** 用截距式得 $x+\displaystyle\frac{y}{2}+\frac{z}{3}=1$，即 $6x+3y+2z-6=0$。法向量为 $(6,3,2)$，故距离为 $6/7$。也可先求 $\overrightarrow{AB}\times \overrightarrow{AC}=(6,3,2)$。

### §7 曲面方程与空间曲线方程

曲面常写成 $F(x,y,z)=0$，空间曲线常写成两曲面的交线

$$
\begin{cases}F(x,y,z)=0,\\G(x,y,z)=0,\end{cases}
$$

或参数方程 $\mathbf r(t)=(x(t),y(t),z(t))$。

- **柱面：** 方程缺少某个坐标，就沿该坐标轴方向延伸。例如 $x^2+y^2=R^2$ 在空间中是圆柱面。
- **旋转曲面：** 把母线上点到旋转轴的距离改写成空间径向距离。例如 $z=\rho^2$ 绕 $z$ 轴旋转得到 $z=x^2+y^2$。
- **投影：** 将交线向坐标面投影，先消去被投影方向的变量，再核查实数解存在的范围。投影到 $xOy$ 面时，作为空间集合还应写 $z=0$。

!!! warning "消元结果还要检查范围"

    消元可能扩大集合；平方可能引入额外分支。绘图和设置积分限时，应同时保留原方程中的非负条件、参数区间和分支限制。

### §8 二次曲面

下表中 $a,b,c>0$。识图的基本办法是分别令 $x,y,z$ 为常数，观察截痕。

| 标准方程 | 名称与形状 |
| --- | --- |
| $\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1$ | 椭球面；三个方向均有界 |
| $\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1$ | 单叶双曲面；负号对应其轴方向 |
| $\displaystyle\frac{z^2}{c^2}-\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | 双叶双曲面；正号对应其轴方向 |
| $\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=0$ | 椭圆锥面；包含上下两叶 |
| $z=\displaystyle\frac{x^2}{a^2}+\frac{y^2}{b^2}$ | 椭圆抛物面；开口朝 $z$ 正向 |
| $z=\displaystyle\frac{x^2}{a^2}-\frac{y^2}{b^2}$ | 双曲抛物面；鞍形 |

平移通过 $x-x_0,y-y_0,z-z_0$ 识别；出现交叉项时不能直接套标准式，需要进一步配方或变换坐标。

!!! tip "为后面的积分作准备"

    识别曲面时同时问：投影是什么？沿哪个方向切片最简单？是否适合柱坐标或球坐标？这些信息比只记曲面名称更有助于设置积分限。

### 本章自测

!!! example "自测 7"

    1. 设 $\mathbf a=(1,2,2)$、$\mathbf b=(2,1,-2)$，求数量积、夹角和 $\mathbf a$ 在 $\mathbf b$ 方向上的标量投影。
    2. 求过 $(1,0,1)$ 且垂直于平面 $x-2y+2z=3$ 的直线。
    3. 求过平面 $x+y+z=1$ 与 $x-y=0$ 的交线、且过原点的平面。
    4. 求曲线 $x^2+y^2+z^2=2$、$z=x$ 在 $xOy$ 面上的投影，并给出原曲线的一组参数方程。

    ??? success "答案与提示"

        1. 数量积为 $0$，夹角为 $\pi/2$，标量投影为 $0$。
        2. $(x,y,z)=(1,0,1)+t(1,-2,2)$，$t\in \mathbb R$。
        3. 设 $\lambda(x+y+z-1)+\mu(x-y)=0$，代入原点得 $\lambda=0$，故答案是 $x-y=0$。此题正好说明单参数平面束可能漏解。
        4. 投影为 $2x^2+y^2=2,z=0$。原曲线可取 $x=\cos t,y=\sqrt2\sin t,z=\cos t$，$0\le t\le 2\pi$。

## 第八章 多元函数微分学

一元函数研究一个自变量变化时函数值怎样变化；多元函数允许多个自变量参与。由此产生两个不同的问题：只改变其中一个变量时如何求导，以及多个变量同时改变时如何描述总变化。前者引出偏导数，后者引出全微分与可微性。

本章仍沿用“极限与连续 → 导数与微分 → 求导法则 → 导数的应用”的顺序，但一元函数中若干熟悉的推论不再成立，尤其是“偏导存在”不能直接推出“可微”。

### §1 多元函数的极限与连续性

#### 函数与平面点集

二元函数 $z=f(x,y)$ 对定义域中的每一对有序数 $(x,y)$ 唯一确定一个函数值。例如 $f(x,y)=x^2+xy$ 有 $f(1,2)=3$、$f(2,1)=6$，可见自变量的位置不能随意交换。

二元函数的定义域是平面点集，图形由空间中的点 $(x,y,f(x,y))$ 组成，通常是曲面。定义域与图形不是同一个集合：前者记录允许输入的 $(x,y)$，后者还记录函数值。三元函数 $u=f(x,y,z)$ 的定义域是空间点集，常用等值面 $f(x,y,z)=c$ 描述其取值。

例如 $f(x,y)=\sqrt{1-x^2-y^2}$ 要求 $x^2+y^2\le1$，所以定义域是闭圆盘；将函数关系平方并保留 $z\ge0$，得到图形是单位球面的上半部。

点 $P_0$ 的 $\delta$ 邻域是满足 $\lVert P-P_0\rVert<\delta$ 的点集；在平面内就是以 $P_0$ 为圆心、半径为 $\delta$ 的开圆盘。去心邻域再排除中心点。这里 $\lVert P-P_0\rVert$ 表示两点的距离。

内点拥有完全包含在集合中的邻域；边界点的每个邻域都同时接触集合与补集。开集不含自己的边界点，闭集包含全部边界点。例如 $x^2+y^2<1$ 是开集，$x^2+y^2\le1$ 是闭集，二者的边界都是 $x^2+y^2=1$。若集合能包含在某个有限半径的圆内，则称为有界集；闭有界集上连续函数能取得最大、最小值。

#### 二重极限

$(x,y)\to(x_0,y_0)$ 表示两点间距离趋于零，也就是 $x\to x_0$ 与 $y\to y_0$ 同时发生。它不指定两者变化的速度，也不规定先改变哪个变量。讨论极限时，假定定义域中存在任意接近 $(x_0,y_0)$ 的其他点。

$$
\lim_{(x,y)\to (x_0,y_0)}f(x,y)=A
$$

要求：对任意 $\varepsilon>0$，存在 $\delta>0$，使定义域内所有满足

$$
0<\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta
$$

的点都满足 $|f(x,y)-A|<\varepsilon$。

**任意路径趋近都必须得到同一个值。** 否定极限只需找到两条路径给出不同结果；证明存在则通常用估计、夹逼或连续函数运算。

例如 $f(x,y)=x^2+y^2$ 在原点的极限为 $0$，因为它恰好等于到原点距离的平方。证明中没有限制 $x,y$ 的关系，因此同时涵盖了所有趋近方式。

若要说明 $\displaystyle\frac{xy}{x^2+y^2}$ 在原点没有极限，沿 $y=0$ 得到 $0$，沿 $y=x$ 得到 $1/2$，已足够产生矛盾。应区分两种任务：**证明不存在可以找反例路径；证明存在需要覆盖所有定义域内的趋近点。**

!!! warning "直线检查不等于所有路径检查"

    沿全部直线的极限相同，仍不能保证二重极限存在。两次累次极限也不能替代二重极限。使用极坐标时，必须得到对角度一致的估计，不能只固定角度令半径趋于零。

!!! example "例 8.1：沿直线都趋于零，极限仍不存在"

    判断 $f(x,y)=\displaystyle\frac{x^2y}{x^4+y^2}$ 在原点的极限。

    **解：** 沿 $y=kx$，$k\ne 0$ 时函数为 $\displaystyle\frac{kx}{x^2+k^2}\to 0$；沿 $y=0$ 或 $x=0$ 也为零。但沿 $y=x^2$，函数恒为 $1/2$，所以二重极限不存在。

#### 连续性

$f$ 在 $P_0$ 连续，是指 $P_0$ 处有定义且 $\lim_{P\to P_0}f(P)=f(P_0)$。初等多元函数在其定义域内的适当点连续；遇到分段定义点，应回到极限检验。

在原点附近，若能估计

$$
|f(x,y)-A|\le C(x^2+y^2)^{\frac{\alpha}{2}},\qquad \alpha>0,
$$

便有极限 $A$。这类以距离统一控制的估计，比枚举路径更有证明力。

### §2 偏导数与全微分

#### 偏导数与高阶偏导数

计算 $f_x$ 时，先固定 $y=y_0$，把 $f(x,y_0)$ 当作关于 $x$ 的一元函数求导；计算 $f_y$ 时反过来固定 $x$。下标说明对哪个变量求导，$f_x(x_0,y_0)$ 则表示求出偏导后在指定点取值。

$$
f_x(x_0,y_0)=\lim_{h\to 0}\frac{f(x_0+h,y_0)-f(x_0,y_0)}h,
\qquad
f_y(x_0,y_0)=\lim_{k\to 0}\frac{f(x_0,y_0+k)-f(x_0,y_0)}k.
$$

求偏导时其余自变量视为常量；在特殊分段点通常必须用定义。二阶偏导包括 $f_{xx},f_{xy},f_{yx},f_{yy}$。本页 $f_{xy}=\partial_y(\partial_x f)$；若混合偏导在点的邻域内连续，则 $f_{xy}=f_{yx}$。

!!! example "例 8.2：偏导数中哪些量是常量"

    设 $f(x,y)=x^2y+\sin y$，求一阶、二阶偏导数。

    **解：** 对 $x$ 求导时，$y$ 与 $\sin y$ 都按常量处理，故 $f_x=2xy$；对 $y$ 求导时，$x^2$ 按常系数处理，故 $f_y=x^2+\cos y$。继续求导得

    $$
    f_{xx}=2y,\qquad f_{xy}=2x,\qquad
    f_{yx}=2x,\qquad f_{yy}=-\sin y.
    $$

    例如 $f_x(1,0)=0$，而 $f_y(1,0)=2$，两个偏导分别描述不同变量的变化，数值不必相等。

在分段定义点，先代入该点附近的分段式不一定能求出偏导。应按定义固定另一变量，计算差商；只有确认所用公式在该点适用后，才能直接代值。

#### 全微分与可微性

固定点 $(x,y)$，让两个变量分别增加 $\Delta x,\Delta y$，全增量是

$$
\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y).
$$

偏导数只分别考察一个变量变化的情况，尚未说明两个变量同时变化时的全增量。可微性要求：全增量能写成关于 $\Delta x,\Delta y$ 的一次式，加上相对总位移更小的余项。

设 $\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}$。若

$$
\Delta z=A\Delta x+B\Delta y+o(\rho),\qquad \rho\to 0,
$$

则称 $f$ 在该点可微，且 $A=f_x,B=f_y$，全微分为

$$
\mathrm dz=f_x\,\mathrm dx+f_y\,\mathrm dy.
$$

这里 $A,B$ 可以依赖所考察的点，但不能依赖增量；$o(\rho)$ 表示余项除以 $\rho$ 后趋于零。只要求余项本身趋于零还不够。取 $\Delta y=0$ 或 $\Delta x=0$ 回到偏导定义，就能分别得到 $A=f_x,B=f_y$。

$\mathrm dz$ 是全增量中的线性部分，通常不等于 $\Delta z$。在自变量独立时约定 $\mathrm dx=\Delta x,\mathrm dy=\Delta y$，从而把这个线性部分记为 $f_x\,\mathrm dx+f_y\,\mathrm dy$。

它给出最佳的一阶线性近似

$$
f(x_0+\Delta x,y_0+\Delta y)
\approx f(x_0,y_0)+f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y.
$$

!!! example "例 8.3：把全增量拆成微分与余项"

    对 $f(x,y)=xy$，在 $(1,2)$ 处令 $\Delta x=h,\Delta y=k$，有

    $$
    \Delta z=(1+h)(2+k)-2=2h+k+hk.
    $$

    其中 $2h+k$ 是线性部分。令 $\rho=\sqrt{h^2+k^2}$，由 $|hk|\le\displaystyle\frac{h^2+k^2}{2}$ 得

    $$
    \frac{|hk|}{\rho}\le\frac\rho2\to0.
    $$

    所以函数在该点可微，$\mathrm dz=2\,\mathrm dx+\mathrm dy$。若要近似计算 $1.01\times1.98$，取 $h=0.01,k=-0.02$，有 $\mathrm dz=0$，近似值为 $2$；实际增量还含 $hk=-0.0002$，实际值为 $1.9998$。

| 条件 | 能推出什么 |
| --- | --- |
| 一阶偏导在该点邻域存在且在该点连续 | 该点可微（常用充分条件） |
| 该点可微 | 该点连续，且两个偏导存在 |
| 两个偏导存在 | 一般不能推出连续或可微 |
| 连续且两个偏导存在 | 一般仍不能推出可微 |

直接检验可微性，就是计算

$$
\frac{f(x_0+h,y_0+k)-f(x_0,y_0)-f_x(x_0,y_0)h-f_y(x_0,y_0)k}
{\sqrt{h^2+k^2}}
$$

是否趋于零。

!!! example "例 8.4：连续且偏导存在，为什么还不够"

    设 $f(x,y)=\displaystyle\frac{xy}{\sqrt{x^2+y^2}}$（$(x,y)\ne (0,0)$），$f(0,0)=0$。判断它在原点是否可微。

    **解：** 由 $|xy|\le \displaystyle\frac{x^2+y^2}{2}$，有 $|f(x,y)|\le \displaystyle\frac{\sqrt{x^2+y^2}}{2}\to 0$，故连续。两坐标轴上函数恒为零，故 $f_x(0,0)=f_y(0,0)=0$。

    可微性要求 $\displaystyle\frac{f(x,y)}{\sqrt{x^2+y^2}}\to 0$，但沿 $y=x\ne 0$，这个商恒为 $1/2$，所以不可微。

### §3 复合函数微分法

#### 链式法则

复合函数求偏导时，需要先区分**独立变量**与**中间变量**。若独立变量是 $x,y$，对 $x$ 求偏导就是保持 $y$ 不变，但 $u(x,y),v(x,y)$ 都可能随 $x$ 变化；因此它们引起的变化都要计入。

若 $z=f(u,v)$，$u=u(x,y),v=v(x,y)$，且有关函数可微，则

$$
z_x=f_u u_x+f_v v_x,\qquad
z_y=f_u u_y+f_v v_y.
$$

右端的 $f_u,f_v$ 应在 $(u(x,y),v(x,y))$ 处取值。它们表示 $f$ 对中间变量的偏导，不等于最终的 $z_x,z_y$。

!!! example "例 8.5：先分清两层求导"

    设 $z=u^2+v$，$u=x+y,v=xy$，求 $z_x,z_y$。

    **解：** 外层导数为 $f_u=2u,f_v=1$；内层导数为 $u_x=u_y=1,v_x=y,v_y=x$。因此

    $$
    z_x=2u\cdot1+1\cdot y=2x+3y,\qquad
    z_y=2u\cdot1+1\cdot x=3x+2y.
    $$

    也可先展开 $z=(x+y)^2+xy=x^2+3xy+y^2$，直接求偏导核对。

对于单参数曲线 $u=u(t),v=v(t)$，

$$
\frac{\mathrm dz}{\mathrm dt}=f_u u'+f_v v'.
$$

若二阶导数连续，则

$$
\frac{\mathrm d^2z}{\mathrm dt^2}
=f_{uu}(u')^2+2f_{uv}u'v'+f_{vv}(v')^2+f_u u''+f_v v''.
$$

含显式自变量时也要计入所有路径。例如 $z=f(x,u(x,y))$，则 $z_x=f_1+f_2u_x$，$z_y=f_2u_y$，其中 $f_1,f_2$ 是对 $f$ 的第一、第二个自变量求偏导。

#### 全微分形式不变性

无论 $u,v$ 是独立变量还是可微的中间变量，始终有

$$
\mathrm dz=f_u\,\mathrm du+f_v\,\mathrm dv.
$$

再把 $\mathrm du,\mathrm dv$ 展开即可。这是一阶全微分的形式不变性；二阶微分还会出现中间变量的二阶微分，不能机械照搬一阶规则。

!!! tip "先画依赖关系，再求导"

    从目标变量出发，沿所有路径走到求导变量：每条路径的导数相乘，不同路径相加。二次求导时，先前得到的每一个系数和每一个中间变量都可能继续变化。

!!! example "例 8.6：复合函数的二阶导数"

    设 $z=f(x+y,x-y)$，$f$ 二阶连续可微，求 $z_{xx}+z_{yy}$。

    **解：** 记 $u=x+y,v=x-y$。先求一阶偏导：$z_x=f_u+f_v$，$z_y=f_u-f_v$。

    再对 $x$ 求导时，$(f_u)_x=f_{uu}u_x+f_{uv}v_x=f_{uu}+f_{uv}$，$(f_v)_x=f_{vu}+f_{vv}$；对 $y$ 求导时同样要计入 $u_y=1,v_y=-1$。利用 $f_{uv}=f_{vu}$，得到

    $$
    z_{xx}=f_{uu}+2f_{uv}+f_{vv},\qquad
    z_{yy}=f_{uu}-2f_{uv}+f_{vv},
    $$

    故 $z_{xx}+z_{yy}=2(f_{uu}+f_{vv})$，右端各偏导均在 $(u,v)=(x+y,x-y)$ 处取值。

### §4 隐函数的偏导数

#### 一个方程确定一个函数

隐函数关系把 $x,y,z$ 联系在一起。若要把 $z$ 看成 $z(x,y)$，对 $x$ 求偏导时，$y$ 不变而 $z$ 随 $x$ 变化，故链式法则给出

$$
F_x+F_z z_x=0.
$$

对 $y$ 求导则有 $F_y+F_z z_y=0$。这里 $F_x$ 是把 $y,z$ 都暂时固定时的偏导，而 $z_x$ 是约束关系中 $z$ 对 $x$ 的偏导，两者的求导对象不同。

若 $F(x,y,z)=0$，$F$ 在点附近一阶连续可微，且该点 $F_z\ne 0$，则局部可将 $z$ 视为 $x,y$ 的函数，且

$$
z_x=-\frac{F_x}{F_z},\qquad z_y=-\frac{F_y}{F_z}.
$$

再次求导时，$F_x,F_z$ 都依赖于 $z(x,y)$。例如在二阶连续可微条件下

$$
z_{xx}=-\frac{F_{xx}+2F_{xz}z_x+F_{zz}z_x^2}{F_z},
$$

$$
z_{xy}=-\frac{F_{xy}+F_{xz}z_y+F_{yz}z_x+F_{zz}z_xz_y}{F_z}.
$$

分母为零表示这个定理在该点不能直接使用，并不自动表示隐函数绝不存在。

!!! example "例 8.7：隐函数二阶导数还要考虑 z 的变化"

    在球面 $x^2+y^2+z^2=9$ 的 $z>0$ 部分求 $z_x,z_{xx}$。

    **解：** 对 $x$ 求偏导得 $2x+2zz_x=0$，所以 $z_x=-\displaystyle\frac{x}{z}$。再次对原来的导数关系求导，比直接记忆二阶公式更方便：

    $$
    2+2z_x^2+2zz_{xx}=0,
    \qquad z_{xx}=-\frac{1+z_x^2}{z}
    =-\frac1z-\frac{x^2}{z^3}.
    $$

    在 $(1,2,2)$ 处，$z_x=-1/2,z_{xx}=-5/8$。条件 $z>0$ 保证本题中除以 $z$ 合法。

#### 方程组确定隐函数组

两个未知函数 $u(x,y),v(x,y)$ 通常需要两个关系式共同确定。求偏导时，对每个关系式都使用链式法则，再联立求解。例如由 $u+v=x$、$u-v=y^2$，对 $x$ 求偏导得 $u_x+v_x=1,u_x-v_x=0$，所以 $u_x=v_x=1/2$；对 $y$ 求偏导得 $u_y+v_y=0,u_y-v_y=2y$，所以 $u_y=y,v_y=-y$。

一般情形中，下面的雅可比行列式 $J$ 就是这些导数方程的系数行列式。条件 $J\ne0$ 保证可以唯一解出待求偏导数，并在函数一阶连续可微的条件下保证局部隐函数存在。

设 $F(x,y,u,v)=0,G(x,y,u,v)=0$。若二者一阶连续可微且

$$
J=\frac{\partial(F,G)}{\partial(u,v)}
=\begin{vmatrix}F_u&F_v\\G_u&G_v\end{vmatrix}\ne 0,
$$

则局部可确定 $u(x,y),v(x,y)$。对 $x$ 求导后解线性方程组

$$
\begin{pmatrix}F_u&F_v\\G_u&G_v\end{pmatrix}
\begin{pmatrix}u_x\\v_x\end{pmatrix}
=-\begin{pmatrix}F_x\\G_x\end{pmatrix}.
$$

对 $y$ 求导同理。通常边列方程边消元，比记忆四个商式更可靠。

#### 反函数组的偏导数（\*）

教材第 96 页起。设 $u=u(x,y),v=v(x,y)$ 一阶连续可微，且 $J=\displaystyle\frac{\partial(u,v)}{\partial(x,y)}\ne 0$，则局部反函数组满足

$$
\begin{pmatrix}x_u&x_v\\y_u&y_v\end{pmatrix}
=\begin{pmatrix}u_x&u_y\\v_x&v_y\end{pmatrix}^{-1}
=\frac1J\begin{pmatrix}v_y&-u_y\\-v_x&u_x\end{pmatrix}.
$$

!!! info "与积分换元的联系"

    雅可比矩阵描述坐标变换的局部线性作用，其行列式描述有向面积或体积的伸缩。第九章换元时取其绝对值。

### §5 场的方向导数与梯度

数量场给空间每个点一个数值，例如温度；矢量场给每点一个矢量，例如速度。二元或三元函数沿单位矢量 $\mathbf e$ 的方向导数定义为

$$
D_{\mathbf e}f(P)=\lim_{t\to 0^+}\frac{f(P+t\mathbf e)-f(P)}t.
$$

这里采用教材沿射线、$t\to 0^+$ 的约定。若 $f$ 在该点可微，则

$$
D_{\mathbf e}f=\nabla f\cdot \mathbf e,\qquad
\nabla f=(f_x,f_y,f_z).
$$

单位矢量的长度为 $1$，所以 $t$ 正好表示沿指定方向移动的距离；若直接使用非单位矢量，分母 $t$ 就不再等于移动距离。可微时，将 $\Delta\mathbf r=t\mathbf e$ 代入全微分展开，再除以 $t$ 取极限，即得到梯度公式。

二元情形省去第三分量。当 $\nabla f\ne \mathbf0$ 时，梯度方向增长最快，最大方向导数是 $\lVert\nabla f\rVert$；反梯度方向下降最快，最小值为 $-\lVert\nabla f\rVert$。梯度垂直于光滑等值面。

!!! warning "方向必须单位化，公式需要可微性"

    给出方向矢量 $(a,b,c)$ 时，应先除以 $\sqrt{a^2+b^2+c^2}$。只知道偏导存在，不能直接使用梯度公式；各方向导数都存在也不保证可微。

!!! example "例 8.8：给定方向与最大变化率"

    求 $f(x,y)=x^2+3y^2$ 在 $(1,1)$ 沿 $\mathbf v=(3,4)$ 的方向导数。

    **解：** 先单位化，$\mathbf e=(3/5,4/5)$；再求 $\nabla f(1,1)=(2,6)$。因此

    $$
    D_{\mathbf e}f=2\cdot\frac35+6\cdot\frac45=6.
    $$

    这是题目指定方向的变化率。若允许选择方向，则最大值为 $\sqrt{2^2+6^2}=2\sqrt{10}$，在单位方向 $(1/\sqrt{10},3/\sqrt{10})$ 取得。

### §6 多元函数的极值及应用

#### 二元泰勒公式

设 $f$ 在 $(a,b)$ 附近二阶连续可微，$h=x-a,k=y-b$，则

$$
f(a+h,b+k)=f(a,b)+f_xh+f_yk
+\frac12(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2)+o(h^2+k^2),
$$

右侧偏导均在 $(a,b)$ 取值。更高阶展开可沿线段设 $g(t)=f(a+th,b+tk)$，使用一元泰勒公式推导。

#### 无约束极值

局部极小值要求：存在该点的一个邻域，使其中所有允许的点都有 $f(x,y)\ge f(x_0,y_0)$；极大值反向。只沿某一条曲线取得最小值，不足以说明它是二元函数的极小值。

内点处若可微且取得极值，必要条件为 $f_x=f_y=0$；这样的点称为驻点。不可微点也可能是极值点，应另查。

在驻点处令 $A=f_{xx},B=f_{xy},C=f_{yy}$，$\Delta=AC-B^2$。若二阶偏导在附近连续，则

| 条件 | 结论 |
| --- | --- |
| $\Delta>0,A>0$ | 严格极小值 |
| $\Delta>0,A<0$ | 严格极大值 |
| $\Delta<0$ | 鞍点，不是极值点 |
| $\Delta=0$ | 判别失效，需用定义、高阶项或路径分析 |

在驻点处，一阶项为零，二元泰勒公式的主要变化由 $\frac12(Ah^2+2Bhk+Ck^2)$ 决定。$\Delta>0$ 时这个二次式保持同号，符号由 $A$ 决定；$\Delta<0$ 时能取正、负两种值，所以不是极值点。这是表中判别法的依据。

例如 $f=x^2+y^2-2x-4y$ 的驻点为 $(1,2)$，$A=C=2,B=0$，所以是严格极小值点。又因 $f=(x-1)^2+(y-2)^2-5$，还能确认它是全平面上的最小值点。相比之下，$x^2-y^2$ 在原点沿 $x$ 轴增大、沿 $y$ 轴减小，对应 $\Delta=-4<0$，是鞍点。

闭有界区域上求连续函数最值，要比较**内部驻点、不可微点、边界各段及边界端点**。局部极值不自动是全局最值。

#### 条件极值与拉格朗日乘数法

条件极值只在满足约束的点中比较函数值。例如在圆周 $x^2+y^2=1$ 上求最值，就不应同时要求所有平面方向上的变化率都为零，因此不能直接套用 $f_x=f_y=0$。

在约束曲线的正则点，极值处 $f$ 沿约束切线的变化率为零，于是 $\nabla f$ 与约束曲线的法向量 $\nabla g$ 平行。用一个待定数 $\lambda$ 表示这个比例关系，就得到拉格朗日乘数法。

在约束 $g(x,y)=0$ 下，若约束正则，即 $\nabla g\ne \mathbf0$，可构造

$$
\mathcal L=f-\lambda g,
\qquad f_x=\lambda g_x,\quad f_y=\lambda g_y,\quad g=0.
$$

多个独立等式约束时写 $\nabla f=\sum_j\lambda_j\nabla g_j$。解方程只能得到候选点，仍需比较或判别；约束梯度退化处要另外检查。

!!! example "例 8.9：圆周上的条件最值"

    求 $f(x,y)=xy$ 在 $x^2+y^2=1$ 上的最大、最小值。

    **解：** 方程为 $y=2\lambda x,x=2\lambda y,x^2+y^2=1$，得到 $y=x$ 或 $y=-x$。于是最大值为 $1/2$，在 $(\displaystyle\frac{1}{\sqrt2},\frac{1}{\sqrt2})$ 和 $(-\displaystyle\frac{1}{\sqrt2},-\frac{1}{\sqrt2})$ 取得；最小值为 $-1/2$，在另两个异号点取得。

    也可由 $2|xy|\le x^2+y^2=1$ 直接证明结果是全局最值。

### §7 偏导数在几何上的应用

#### 矢量值函数与曲线的切线、法平面

对 $\mathbf r(t)=(x(t),y(t),z(t))$，逐分量求导。若 $\mathbf r'(t_0)\ne \mathbf0$，它是曲线在 $P=\mathbf r(t_0)$ 的切向量。

$$
\text{切线：}\quad \mathbf r=\mathbf r(t_0)+s\mathbf r'(t_0),
$$

$$
\text{法平面：}\quad \mathbf r'(t_0)\cdot (\mathbf r-\mathbf r(t_0))=0.
$$

对交线 $F=0,G=0$，若 $\nabla F\times \nabla G\ne \mathbf0$，可取此矢量为切向量。

#### 曲面的切平面与法线

对 $F(x,y,z)=0$，若 $F$ 一阶连续可微且 $\nabla F(P)\ne \mathbf0$，则

$$
\text{切平面：}\quad \nabla F(P)\cdot (\mathbf r-\mathbf r_P)=0,
$$

$$
\text{法线：}\quad \mathbf r=\mathbf r_P+t\nabla F(P).
$$

对显式曲面 $z=f(x,y)$，切平面为

$$
z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0),
$$

法向量可取 $(f_x,f_y,-1)$。

切平面方程与全微分近似使用相同的系数，只是这里把 $(x,y,z)$ 当作平面上可变的点。例如 $z=x^2+y^2$ 在 $(1,2,5)$ 处有 $f_x=2,f_y=4$，切平面为 $z-5=2(x-1)+4(y-2)$，法线可写成 $(x,y,z)=(1,2,5)+t(2,4,-1)$。

!!! tip "切线和切平面的联系"

    曲线用导数得到切向量，隐式曲面用梯度得到法向量；两个曲面的交线，再对两个法向量作矢量积。最后统一代入第七章的点向式、点法式。

### 本章自测

!!! example "自测 8"

    1. 判断 $\displaystyle\frac{x^2y}{x^2+y^2}$ 在原点的极限。
    2. 设 $z=e^{xy}$，求 $\mathrm dz$ 和 $z_{xy}$。
    3. 在球面 $x^2+y^2+z^2=9$ 的上半部，将 $z$ 视为 $x,y$ 的函数，求 $(1,2,2)$ 处的 $z_x,z_{xx}$。
    4. 求 $f=x^2+y^2+z^2$ 在 $(1,0,1)$ 沿 $(1,2,2)$ 方向的方向导数，并求等值面在该点的切平面。
    5. 求 $f=x^2+y^2-2x-4y$ 在圆盘 $x^2+y^2\le 1$ 上的最大、最小值。

    ??? success "答案与提示"

        1. 绝对值不超过 $|y|$，故极限为 $0$。
        2. $\mathrm dz=e^{xy}(y\,\mathrm dx+x\,\mathrm dy)$，$z_{xy}=e^{xy}(1+xy)$。
        3. $z_x=-\displaystyle\frac{x}{z}=-1/2$，$z_{xx}=-\displaystyle\frac{1}{z}-\frac{x^2}{z^3}=-5/8$。
        4. 单位方向为 $\displaystyle\frac{1,2,2}{3}$，方向导数为 $2$。切平面为 $x+z=2$。
        5. 内部唯一驻点 $(1,2)$ 不在圆盘内，极值只能在边界。边界上 $f=1-2x-4y$，最大值为 $1+2\sqrt5$，点为 $(-\displaystyle\frac{1}{\sqrt5},-\frac{2}{\sqrt5})$；最小值为 $1-2\sqrt5$，点为 $(\displaystyle\frac{1}{\sqrt5},\frac{2}{\sqrt5})$。

## 第九章 多元函数积分学

### §1 二重积分的概念

!!! tip "这一章在讲什么"

    第五章的定积分是“分割—取点—求和—取极限”的产物，本章把这个套路推广到平面区域、空间区域、曲线和曲面：分割对象从区间换成几何体，$\Delta x$ 换成面积元、体积元、弧长元或面积元，于是多出一个新问题——几何对象该怎么参数化。

    四类积分的定义思想完全相同，区别只在两件事：**区域是什么**（平面、空间、曲线、曲面）与**积分元是什么**（面积、体积、弧长、面积）。到 §5 把它们放进同一个框架后你会发现，剩下的工作只有两步：选坐标、定积分限。

将平面区域 $D$ 分割成小块，在第 $i$ 块任取点 $(\xi_i,\eta_i)$，面积记为 $\Delta\sigma_i$。若小块最大直径趋于零时，和式有与分割、取点无关的极限，便定义

$$
\iint_D f(x,y)\,\mathrm d\sigma
=\lim \sum_i f(\xi_i,\eta_i)\Delta\sigma_i.
$$

连续函数在常见有界闭区域上可积。若 $f\ge 0$，积分可表示曲面下的体积；一般函数则产生带符号的累积量。

主要性质包括线性、区域可加性、保序性及估值：若 $m\le f\le M$，则

$$
m\,\operatorname{Area}(D)\le \iint_Df\,\mathrm d\sigma
\le M\,\operatorname{Area}(D),\qquad
\left|\iint_Df\,\mathrm d\sigma\right|\le \iint_D|f|\,\mathrm d\sigma.
$$

若 $D$ 是有界闭连通区域，$f$ 连续，则存在区域内某点使积分等于该点函数值乘面积，这是二重积分中值定理。

### §2 二重积分的计算

#### 直角坐标：先确定一条截线

!!! tip "写积分限的两条检查"

    - 内层积分的上下限可以是外层变量的函数，外层积分的上下限必须是常数；写反过来几乎一定出错。
    - 写完之后取几个“极端”位置（区域的左端、右端）检验：截线是否恰好扫过整段区域，有没有多扫或漏扫。

若区域可写成

$$
D=\{(x,y):a\le x\le b,\ \varphi_1(x)\le y\le \varphi_2(x)\},
$$

则

$$
\iint_Df(x,y)\,\mathrm dx\,\mathrm dy
=\int_a^b\left[\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,\mathrm dy\right]\mathrm dx.
$$

内层沿竖直截线积分，外层让截线扫过区域。若按水平截线描述更简单，就写成先 $x$ 后 $y$；边界函数在中途变化时应分块。

**交换次序的步骤：** 还原区域不等式 → 画边界和交点 → 沿新内层方向切片 → 确定新上下限。不能只交换两个微分符号。

!!! example "例 9.1：交换次序消去难积分"

    计算 $I=\displaystyle\int_0^1\mathrm dx\int_x^1e^{y^2}\,\mathrm dy$。

    **解：** 区域为 $0\le x\le y\le 1$。交换次序后

    $$
    I=\int_0^1\mathrm dy\int_0^ye^{y^2}\,\mathrm dx
    =\int_0^1ye^{y^2}\,\mathrm dy=\frac{e-1}{2}.
    $$

#### 极坐标

面积元中的因子 $\rho$ 值得记一次来历：在极坐标网格下取一小块，径向跨出 $\mathrm d\rho$、角度转过 $\mathrm d\theta$，两邻边长分别是 $\mathrm d\rho$ 与 $\rho\,\mathrm d\theta$，面积近似为 $\rho\,\mathrm d\rho\,\mathrm d\theta$。换句话说，$\rho$ 是半径带来的“伸长”，漏掉它相当于把远处的面积算小了。

要不要用极坐标，看两条线索：区域是圆、圆环、扇形或由 $x^2+y^2$ 描述；被积函数含 $x^2+y^2$ 或 $\sqrt{x^2+y^2}$。圆心不在原点时，先写出边界曲线的极坐标方程，再据此确定角度的分段。

令 $x=r\cos\theta,y=r\sin\theta$，$r\ge 0$，则

$$
\mathrm d\sigma=r\,\mathrm dr\,\mathrm d\theta,
$$

$$
\iint_Df(x,y)\,\mathrm d\sigma
=\int_\alpha^\beta\int_{r_1(\theta)}^{r_2(\theta)}
f(r\cos\theta,r\sin\theta)r\,\mathrm dr\,\mathrm d\theta.
$$

圆、扇形、圆环以及被积函数含 $x^2+y^2$ 的情形，常适合极坐标。区域不一定以原点为圆心，例如 $x^2+y^2\le 2ax$（$a>0$）可写成 $-\pi/2\le \theta\le \pi/2,0\le r\le 2a\cos\theta$。

!!! warning "换元同时改变三件事"

    被积函数、积分区域和面积元都要变。极坐标漏掉因子 $r$，或让同一区域被角度范围重复覆盖，都会改变结果。原点处坐标退化不妨碍常规积分，仍应保证区域内部除零面积集合外不重复参数化。

#### 一般曲线坐标（\*）

教材第 149 页起。设 $x=x(u,v),y=y(u,v)$ 在对应区域内一阶连续可微，内部一一对应，且雅可比不为零，则

$$
\iint_Df(x,y)\,\mathrm dx\,\mathrm dy
=\iint_G f(x(u,v),y(u,v))
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|\mathrm du\,\mathrm dv.
$$

常用线性变换把平行四边形化为矩形；$x=au,y=bv$ 把椭圆化为单位圆，面积元为 $ab\,\mathrm du\,\mathrm dv$（$a,b>0$）。一般理论为教材选学，极坐标换元仍需熟练掌握。

### §3 三重积分

#### 定义与直角坐标计算

三重积分由体积小块上的和式取极限定义：

$$
\iiint_\Omega f(x,y,z)\,\mathrm dV
=\lim \sum_i f(\xi_i,\eta_i,\zeta_i)\Delta V_i.
$$

性质与二重积分类似。计算可选“先一后二”或“先二后一”。

若

$$
\Omega=\{(x,y,z):(x,y)\in D,\ z_1(x,y)\le z\le z_2(x,y)\},
$$

则先沿竖直线积分，再在投影区域积分：

$$
\iiint_\Omega f\,\mathrm dV
=\iint_D\left[\int_{z_1(x,y)}^{z_2(x,y)}f(x,y,z)\,\mathrm dz\right]\mathrm dx\,\mathrm dy.
$$

若固定 $z$ 时截面为 $D_z$，也可先算截面积分：

$$
\iiint_\Omega f\,\mathrm dV
=\int_c^d\left[\iint_{D_z}f(x,y,z)\,\mathrm dx\,\mathrm dy\right]\mathrm dz.
$$

#### 柱坐标与球坐标

选择坐标的依据是**对称性**：区域绕某条轴旋转、边界含圆柱面或圆锥面时用柱坐标；区域由球面与以原点为顶点的锥面围成时用球坐标。球坐标中 $\varphi$ 是与 $z$ 轴正方向的夹角（极角），$\theta$ 是绕 $z$ 轴的方位角，$\rho$ 是到原点的距离，三者不要混用。

体积元 $\rho^2\sin\varphi\,\mathrm d\rho\,\mathrm d\varphi\,\mathrm d\theta$ 中，$\rho^2$ 来自径向向外扩张时的面积增长，$\sin\varphi$ 来自“纬度圈半径等于 $\rho\sin\varphi$”。自检办法：取整个球体算一遍体积，看结果是不是 $\displaystyle\frac{4\pi R^3}{3}$。

| 坐标 | 变换 | 体积元 | 常用场景 |
| --- | --- | --- | --- |
| 柱坐标 | $x=r\cos\theta,y=r\sin\theta,z=z$ | $r\,\mathrm dr\,\mathrm d\theta\,\mathrm dz$ | 柱体、绕轴对称、抛物面与锥面围成的区域 |
| 球坐标 | $x=\rho\sin\varphi\cos\theta,y=\rho\sin\varphi\sin\theta,z=\rho\cos\varphi$ | $\rho^2\sin\varphi\,\mathrm d\rho\,\mathrm d\varphi\,\mathrm d\theta$ | 球、球壳、以原点为顶点的圆锥截球体 |

本页球坐标中，$\rho\ge 0$，$\varphi\in[0,\pi]$ 是与 $z$ 正轴的夹角，$\theta$ 是方位角。整球可取 $0\le \theta\le 2\pi$；上半球取 $0\le \varphi\le \pi/2$。

一般三维换元中，体积元为三阶雅可比行列式的绝对值乘新坐标体积元。例如

$$
x=a\rho\sin\varphi\cos\theta,\quad
y=b\rho\sin\varphi\sin\theta,\quad z=c\rho\cos\varphi
$$

把椭球变为 $0\le \rho\le 1$，体积元为 $abc\rho^2\sin\varphi\,\mathrm d\rho\,\mathrm d\varphi\,\mathrm d\theta$（$a,b,c>0$）。

!!! info "重积分换元公式的证明（\*）"

    教材第 167 页起将证明列为选学。核心思想是：光滑坐标变换在很小区域上近似一个线性变换，雅可比行列式的绝对值给出体积伸缩率，再对分割求和取极限。复习计算时应掌握公式的条件、区域对应关系及常用坐标的因子。

!!! example "例 9.2：圆锥区域的体积与质心"

    均匀立体 $\Omega$ 由 $0\le z\le 1$、$x^2+y^2\le z^2$ 确定，求体积和质心。

    **解：** 柱坐标中 $0\le \theta\le 2\pi,0\le z\le 1,0\le r\le z$，故

    $$
    V=\int_0^1\int_0^{2\pi}\int_0^z r\,\mathrm dr\,\mathrm d\theta\,\mathrm dz
    =\frac\pi3.
    $$

    对称性给出 $\bar x=\bar y=0$，而

    $$
    \bar z=\frac1V\iiint_\Omega z\,\mathrm dV
    =\frac{\pi\int_0^1z^3\,\mathrm dz}{\pi/3}=\frac34.
    $$

    质心更靠近面积较大的底面；若锥体顶点和底面位置改变，不能直接背 $\bar z=3/4$。

### §4 第一类曲线积分与第一类曲面积分

第一类曲线积分与第一类曲面积分都是“沿几何对象的标量累积”：可以把它们分别想象成一根非均匀细丝的总质量、一张非均匀薄壳的总质量。它们与方向无关，只与几何对象和函数值有关；同一条曲线或同一张曲面，正着走、反着走结果一样。

计算的关键动作只有两步：把几何对象参数化，写出配套的“长度因子”或“面积因子”（弧长元 $\mathrm ds$、面积元 $\mathrm dS$）。因子与参数化是合作伙伴，不能拆开记忆，更不能乱搭。

#### 对弧长的曲线积分

第一类曲线积分定义为弧长小段上的标量累积：

$$
\int_L f\,\mathrm ds=\lim \sum_i f(P_i)\Delta s_i.
$$

若曲线由 $\mathbf r(t)=(x(t),y(t),z(t))$ 参数化，$a\le t\le b$，则

$$
\int_Lf\,\mathrm ds
=\int_a^bf(x(t),y(t),z(t))\sqrt{x'(t)^2+y'(t)^2+z'(t)^2}\,\mathrm dt.
$$

常用弧长元为

$$
\mathrm ds=\sqrt{1+y'(x)^2}\,\mathrm dx\quad (x\text{ 从小到大}),
$$

$$
\mathrm ds=\sqrt{r(\theta)^2+r'(\theta)^2}\,\mathrm d\theta
\quad (\theta\text{ 从小到大}).
$$

第一类曲线积分与曲线方向无关，但参数区间应避免无意的重复走过；若重复走过就重复计入。

#### 对面积的曲面积分

第一类曲面积分定义为曲面小块面积上的累积：

$$
\iint_S f\,\mathrm dS=\lim \sum_i f(P_i)\Delta S_i.
$$

若 $S$ 是 $z=z(x,y)$，投影为 $D$，则

$$
\iint_Sf(x,y,z)\,\mathrm dS
=\iint_Df(x,y,z(x,y))\sqrt{1+z_x^2+z_y^2}\,\mathrm dx\,\mathrm dy.
$$

若用参数曲面 $\mathbf r(u,v)$，则

$$
\mathrm dS=\lVert\mathbf r_u\times \mathbf r_v\rVert\,\mathrm du\,\mathrm dv.
$$

第一类曲面积分与曲面选哪一侧无关；无法表示成单张函数图像的曲面需要分片。

!!! example "例 9.3：曲面积分中的面积因子"

    求单位上半球面 $S:x^2+y^2+z^2=1,z\ge 0$ 上的 $\displaystyle\iint_Sz\,\mathrm dS$。

    **解：** 用球面参数 $\mathbf r(\varphi,\theta)=(\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi)$，有 $\mathrm dS=\sin\varphi\,\mathrm d\varphi\,\mathrm d\theta$，故

    $$
    \iint_Sz\,\mathrm dS
    =\int_0^{2\pi}\int_0^{\pi/2}\cos\varphi\sin\varphi\,\mathrm d\varphi\,\mathrm d\theta=\pi.
    $$

    也可投影到单位圆盘：$z=\sqrt{1-x^2-y^2}$ 时 $\sqrt{1+z_x^2+z_y^2}=\displaystyle\frac{1}{z}$，内部被积函数恰好化为 $1$。赤道处用极限理解。

### §5 点函数积分的概念、性质及应用

本节把二重积分、三重积分、第一类曲线积分与第一类曲面积分写成统一记号 $\displaystyle\int_E f\,\mathrm d\mu$，以说明它们共有的性质及应用。第十章的第二类积分也可通过切向或法向分量，与这里的积分建立联系。

#### 统一看四种积分

用 $\mathrm d\mu$ 统一记 $\mathrm ds,\mathrm d\sigma,\mathrm dS,\mathrm dV$，它们分别对应曲线长度、平面面积、曲面面积和空间体积。于是 $\displaystyle\int_Ef\,\mathrm d\mu$ 表示标量 $f$ 在几何对象 $E$ 上的累积。

| 几何或物理量 | 统一公式 |
| --- | --- |
| 长度、面积或体积 | $\displaystyle\int_E1\,\mathrm d\mu$ |
| 密度为 $\rho$ 的质量 | $M=\displaystyle\int_E\rho\,\mathrm d\mu$ |
| 质心 | $\bar x=M^{-1}\displaystyle\int_Ex\rho\,\mathrm d\mu$；$\bar y,\bar z$ 同理 |
| 对 $z$ 轴的转动惯量 | $I_z=\displaystyle\int_E(x^2+y^2)\rho\,\mathrm d\mu$ |
| 对某轴的一般转动惯量 | $I=\displaystyle\int_Ed(P,\text{轴})^2\rho(P)\,\mathrm d\mu$ |
| 点 $P_0$ 处质量 $m$ 受到的引力 | $\mathbf F=Gm\displaystyle\int_E\rho(P)\frac{\mathbf r_P-\mathbf r_{P_0}}{\lVert\mathbf r_P-\mathbf r_{P_0}\rVert^3}\,\mathrm d\mu$ |

质心要求 $M>0$。引力公式中方向从受力点指向质量元；这里先考虑 $P_0$ 不在物体上，若存在奇点需另查反常积分的收敛性。平面薄片对原点的极转动惯量满足 $I_O=I_x+I_y$。

#### 对称性

若区域与相应长度、面积或体积元在反射 $x\mapsto-x$ 下保持不变，则被积函数对 $x$ 为奇函数时积分为零，为偶函数时可化为半区域积分的两倍。变量交换对称也可用于把若干积分平均。

例如在球面或球体的对称区域上，$\displaystyle\int x^2\,\mathrm d\mu=\int y^2\,\mathrm d\mu=\int z^2\,\mathrm d\mu$，可用三者之和简化。**区域、被积函数、积分元**都应纳入对称性判断；质心位于对称轴还要求密度也具有相同对称性。

!!! tip "积分方法的选择顺序"

    先辨认积分对象及积分元，再用对称性简化，然后选坐标或参数，最后设置积分限。重积分优先看区域，曲线与曲面积分优先看参数化和投影是否简单。

### 本章自测

!!! example "自测 9"

    1. 求单位圆盘 $D$ 上的 $\displaystyle\iint_D(x^2+y^2)\,\mathrm d\sigma$。
    2. 将 $\displaystyle\int_0^1\mathrm dx\int_{x^2}^{x}f(x,y)\,\mathrm dy$ 交换积分次序。
    3. 求半径为 $R$ 的球体上 $\displaystyle\iiint_\Omega(x^2+y^2+z^2)\,\mathrm dV$。
    4. 求单位圆周上 $\displaystyle\int_Lx^2\,\mathrm ds$，并说明反向行走是否改变结果。
    5. 均匀三角形薄片由 $x\ge 0,y\ge 0,x+y\le 1$ 确定，面密度为 $1$，求质量、质心和对原点的极转动惯量。

    ??? success "答案与提示"

        1. $\displaystyle\int_0^{2\pi}\int_0^1r^3\,\mathrm dr\,\mathrm d\theta=\pi/2$。
        2. $\displaystyle\int_0^1\mathrm dy\int_y^{\sqrt y}f(x,y)\,\mathrm dx$。
        3. 球坐标给出 $4\pi\displaystyle\int_0^R\rho^4\,\mathrm d\rho=4\frac{\pi R^5}{5}$。
        4. 对称性使积分为圆周长的一半，即 $\pi$；反向不改变第一类曲线积分。
        5. $M=1/2$，$\displaystyle\int_Dx\,\mathrm d\sigma=\int_Dy\,\mathrm d\sigma=1/6$，故质心为 $(1/3,1/3)$。$I_O=2\displaystyle\int_0^1x^2(1-x)\,\mathrm dx=1/6$。

## 第十章 第二类曲线积分与第二类曲面积分

第九章的第一类积分使用弧长元 $\mathrm ds$ 或面积元 $\mathrm dS$；本章还要规定曲线的行进方向或曲面的法向方向。方向不是计算完成后附加的信息，而是积分定义的一部分。

本章涉及两种不同的积分对象：沿曲线计算的 $\int_L\mathbf F\cdot\mathrm d\mathbf r$，以及通过曲面计算的 $\iint_S\mathbf F\cdot\mathbf n\,\mathrm dS$。前者常用于计算功或环流，后者称为通量。计算时先确认对象和方向，再选择参数法、投影法或积分公式。

### §1 第二类曲线积分

设矢量场 $\mathbf F=(P,Q,R)$，即每一点 $(x,y,z)$ 对应一个矢量，三个分量 $P,Q,R$ 都可以是坐标的函数。沿曲线的一小段位移为 $\Delta\mathbf r=(\Delta x,\Delta y,\Delta z)$，力在这一小段上所做的功近似为

$$
\mathbf F\cdot\Delta\mathbf r=P\Delta x+Q\Delta y+R\Delta z.
$$

各坐标增量带有正负号；反向行进时，增量的符号改变。这是第二类曲线积分需要规定方向的原因。

#### 定义、方向及参数计算

按曲线方向依次取分点 $A=M_0,M_1,\ldots,M_n=B$，在每段上取一点 $\xi_i$。以 $\Delta x_i,\Delta y_i,\Delta z_i$ 表示该段终点坐标减起点坐标，作和

$$
\sum_{i=1}^{n}\bigl[P(\xi_i)\Delta x_i+Q(\xi_i)\Delta y_i+R(\xi_i)\Delta z_i\bigr].
$$

当各小段弧长的最大值趋于零，若这个和趋于与分割、取点无关的有限值，就定义为第二类曲线积分。对连续矢量场和分段光滑曲线，可以用下面的参数公式计算。

在有向曲线 $L$ 上，第二类曲线积分为

$$
\int_LP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz
=\int_L\mathbf F\cdot \mathrm d\mathbf r,
\qquad \mathbf F=(P,Q,R).
$$

它可以表示力沿路径所做的功。若 $\mathbf r(t)$ 在 $a\le t\le b$ 上按指定方向走过 $L$，则

$$
\int_L\mathbf F\cdot \mathrm d\mathbf r
=\int_a^b\mathbf F(\mathbf r(t))\cdot \mathbf r'(t)\,\mathrm dt.
$$

写成坐标形式，就是

$$
\int_a^b\bigl[P(x(t),y(t),z(t))x'(t)
+Q(x(t),y(t),z(t))y'(t)
+R(x(t),y(t),z(t))z'(t)\bigr]\,\mathrm dt.
$$

这一步同时完成两种代换：把 $P,Q,R$ 中的坐标换成参数表达式，并把 $\mathrm dx,\mathrm dy,\mathrm dz$ 换成对应的导数乘 $\mathrm dt$。只替换坐标而漏掉微分，是常见错误。平面曲线可省去 $z$ 分量；分段曲线则逐段计算后相加。

**反向变号。** 参数起点、终点必须与曲线方向一致；若方向相反，可交换积分限或整体添负号。

!!! example "例 10.1：从曲线方程到一元定积分"

    沿抛物线 $y=x^2$ 从 $A=(0,0)$ 到 $B=(1,1)$，求 $I=\int_L y\,\mathrm dx+x\,\mathrm dy$。

    **解：** 取 $x=t,y=t^2$，$0\le t\le1$。当 $t$ 增大时，恰好从 $A$ 到 $B$；有 $\mathrm dx=\mathrm dt,\mathrm dy=2t\,\mathrm dt$，所以

    $$
    I=\int_0^1[t^2+t\cdot2t]\,\mathrm dt
    =\int_0^1 3t^2\,\mathrm dt=1.
    $$

    若沿同一段抛物线从 $B$ 到 $A$，取 $t$ 从 $1$ 到 $0$，结果为 $-1$。改变的是路径方向，曲线的点集并没有改变。

#### 两类曲线积分的联系

若单位切向量为 $\mathbf\tau=(\cos\alpha,\cos\beta,\cos\gamma)$，则

$$
\mathrm dx=\cos\alpha\,\mathrm ds,\quad
\mathrm dy=\cos\beta\,\mathrm ds,\quad
\mathrm dz=\cos\gamma\,\mathrm ds,
$$

$$
\int_LP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz
=\int_L(P\cos\alpha+Q\cos\beta+R\cos\gamma)\,\mathrm ds.
$$

第一类累积标量乘弧长，第二类累积矢量在切向上的分量乘弧长。

两类积分转换时，方向信息保留在单位切向量中。例如沿线段 $x=t,y=0$，$0\le t\le1$，有 $\int_L\mathrm ds=1$、$\int_L\mathrm dx=1$；反向后，前者仍为 $1$，后者为 $-1$。因此不能在第二类积分中用总为非负的弧长元直接替换 $\mathrm dx$。

#### 格林公式

直接参数化需要分别处理各段边界。若曲线恰好是一个平面区域的完整边界，格林公式允许把沿边界的积分改为区域上的二重积分。记号 $\oint$ 中的圆圈表示沿闭曲线积分，$\partial D$ 表示区域 $D$ 的边界。

设平面区域 $D$ 的边界分段光滑，$P,Q$ 在包含 $\overline D$ 的开集内有连续一阶偏导，则

$$
\oint_{\partial D}P\,\mathrm dx+Q\,\mathrm dy
=\iint_D\left(Q_x-P_y\right)\,\mathrm dx\,\mathrm dy.
$$

边界取正向：**沿边界前进时，区域始终在左侧**。单连通区域外边界逆时针；有孔区域外边界逆时针、内边界顺时针。多个边界分量的积分要一起计入。

平面面积可写成

$$
\operatorname{Area}(D)=\oint_{\partial D}x\,\mathrm dy
=-\oint_{\partial D}y\,\mathrm dx
=\frac12\oint_{\partial D}(x\,\mathrm dy-y\,\mathrm dx).
$$

对非闭合路径，可添一条易计算的辅助路径，使其成为闭合边界，再减去辅助路径积分。

!!! example "例 10.2：用格林公式计算环流"

    设 $L$ 为单位圆周，方向逆时针，求 $\displaystyle\oint_L(-y\,\mathrm dx+x\,\mathrm dy)$。

    **解：** 先辨认 $\mathrm dx$ 与 $\mathrm dy$ 的系数：$P=-y,Q=x$，所以 $P_y=-1,Q_x=1$。两者在整个圆盘及其邻域光滑，曲线方向也与格林公式一致，故

    $$
    I=\iint_{x^2+y^2\le1}2\,\mathrm dx\,\mathrm dy=2\pi.
    $$

    可用参数法核对：$x=\cos t,y=\sin t$，$0\le t\le2\pi$，被积式变为 $(\sin^2t+\cos^2t)\,\mathrm dt$，积分同样为 $2\pi$。若圆周改为顺时针，结果为 $-2\pi$。

!!! example "例 10.3：补线时要写清辅助线的方向"

    沿上半圆 $x^2+y^2=1,y\ge0$，从 $(1,0)$ 到 $(-1,0)$，求 $I=\int_L(-y\,\mathrm dx+x\,\mathrm dy)$。

    **解：** 补上直径 $C$，方向取从 $(-1,0)$ 到 $(1,0)$，于是 $L+C$ 是上半圆盘的正向边界。由格林公式，

    $$
    \int_L(-y\,\mathrm dx+x\,\mathrm dy)
    +\int_C(-y\,\mathrm dx+x\,\mathrm dy)
    =2\cdot\frac\pi2=\pi.
    $$

    在 $C$ 上 $y=0,\mathrm dy=0$，辅助积分为零，因此 $I=\pi$。一般情况下应使用“闭合边界积分减去辅助线积分”，并保持辅助线方向前后一致。

#### 积分与路径无关

一般而言，即使两条路径具有相同的起点和终点，积分也可能不同。所谓路径无关，是指在指定区域内，任意两条连接相同端点的允许路径都有相同积分值。

例如 $\int_L y\,\mathrm dx$ 从 $(0,0)$ 到 $(1,1)$，沿直线 $y=x$ 得 $\int_0^1x\,\mathrm dx=1/2$；先沿 $x$ 轴到 $(1,0)$、再竖直到 $(1,1)$，两段积分都为零。这说明路径无关需要证明，不能仅凭端点已知就使用端点差。

在开连通区域内，连续的 $P,Q$ 满足以下三个条件等价：

1. 任意两点间的曲线积分只由端点决定；
2. 沿区域内任意闭曲线的积分为零；
3. 存在原函数 $u$，使 $\mathrm du=P\,\mathrm dx+Q\,\mathrm dy$。

若另外有 $P,Q\in C^1$，则原函数存在必有 $P_y=Q_x$；当区域还**单连通**时，$P_y=Q_x$ 也是充分条件。这里单连通意味着闭曲线能在区域内连续收缩到一点。

这里的 $u$ 同时满足 $u_x=P,u_y=Q$，是二元函数意义下的原函数。若 $\mathbf r(t)=(x(t),y(t))$，链式法则给出

$$
\frac{\mathrm d}{\mathrm dt}u(x(t),y(t))=P x'(t)+Q y'(t).
$$

右端正是参数化后的被积函数，因此可以用一元微积分基本定理计算。单连通是使偏导相等足以保证原函数存在的一项区域条件；它不是路径无关本身的必要条件。有孔区域中的某些场也可以有原函数。

找到原函数后，

$$
\int_A^B P\,\mathrm dx+Q\,\mathrm dy=u(B)-u(A).
$$

一种构造方法是先对 $P$ 关于 $x$ 积分，写成 $u=\displaystyle\int P\,\mathrm dx+\phi(y)$，再用 $u_y=Q$ 确定 $\phi$。也可在适合的矩形邻域内选水平、竖直折线路径求积分。

!!! example "例 10.4：求原函数并计算积分"

    设 $P=2xy+e^x,Q=x^2+2y$。求从 $(0,0)$ 到 $(1,1)$ 沿任意分段光滑路径的积分。

    **解：** 全平面上 $P_y=Q_x=2x$，故路径无关。由 $u_x=P$ 得 $u=x^2y+e^x+\phi(y)$，再由 $u_y=Q$ 得 $\phi'=2y$，故 $u=x^2y+e^x+y^2+C$。

    所求积分为 $u(1,1)-u(0,0)=(e+2)-1=e+1$。

!!! warning "偏导相等时，还要检查区域和奇点"

    对 $P=-\displaystyle\frac{y}{x^2+y^2},Q=\frac{x}{x^2+y^2}$，原点外虽有 $P_y=Q_x$，但沿逆时针单位圆积分为 $2\pi$。穿孔平面不是单连通区域，原点处又不满足格林公式的光滑条件，不能将积分判为零。

### §2 第二类曲面积分

曲线通过指定行进方向定向，曲面通过指定连续的法向量定向。光滑曲面在每点有两个相反的单位法向量，选取其中一侧并保持连续，就是选择曲面的方向。本章讨论可定向曲面；封闭曲面常用“外侧、内侧”，图形 $z=z(x,y)$ 常用“上侧、下侧”。

若 $\mathbf F$ 是流速，$\mathbf F\cdot\mathbf n$ 是沿所选法向的速度分量。一小块面积 $\Delta S$ 上的有向流量近似为 $(\mathbf F\cdot\mathbf n)\Delta S$；正值表示沿所选法向通过，负值表示反向通过。对各小块求和并取极限，就得到通量积分。

#### 通量与定向

在可定向曲面 $S$ 上选定连续单位法向量 $\mathbf n=(\cos\alpha,\cos\beta,\cos\gamma)$，定义

$$
\iint_S\mathbf F\cdot \mathbf n\,\mathrm dS
=\iint_SP\,\mathrm dy\,\mathrm dz+Q\,\mathrm dz\,\mathrm dx+R\,\mathrm dx\,\mathrm dy.
$$

它可表示流量或通量。此处 $\mathrm dy\,\mathrm dz,\mathrm dz\,\mathrm dx,\mathrm dx\,\mathrm dy$ 是有向投影面积元，分别等于 $\cos\alpha\,\mathrm dS,\cos\beta\,\mathrm dS,\cos\gamma\,\mathrm dS$。换另一侧，积分变号。

下表可以帮助区分面积大小与方向。此处 $S$ 是面积为 $A$ 的水平面片，$\mathbf F=(0,0,c)$ 为常矢量场。

| 选取方向 | 单位法向量 | 通量 |
| --- | --- | --- |
| 上侧 | $(0,0,1)$ | $cA$ |
| 下侧 | $(0,0,-1)$ | $-cA$ |

第一类面积积分 $\iint_S1\,\mathrm dS=A$ 不随选侧改变。第二类积分中的三个有向投影面积元则分别记录法向量的三个分量，不能都视为普通的正面积。

#### 计算公式

先设曲面可以单值表示为 $z=z(x,y)$，投影区域为 $D$。由参数式 $\mathbf r(x,y)=(x,y,z(x,y))$，两个切向量为 $(1,0,z_x)$、$(0,1,z_y)$，它们的矢量积为 $(-z_x,-z_y,1)$，指向上侧。

将单位法向量与面积元分别写出：

$$
\mathbf n=\frac{(-z_x,-z_y,1)}{\sqrt{1+z_x^2+z_y^2}},\qquad
\mathrm dS=\sqrt{1+z_x^2+z_y^2}\,\mathrm dx\,\mathrm dy.
$$

相乘后两个根式约去，这就是下面的投影公式。若整个曲面不能这样单值表示，应分片处理或使用适合的参数化。

若 $S:z=z(x,y)$，取上侧，即法向量的 $z$ 分量为正，则

$$
\mathbf n\,\mathrm dS=(-z_x,-z_y,1)\,\mathrm dx\,\mathrm dy,
$$

$$
\iint_S\mathbf F\cdot \mathbf n\,\mathrm dS
=\iint_D[-Pz_x-Qz_y+R]_{z=z(x,y)}\,\mathrm dx\,\mathrm dy.
$$

取下侧时整体变号。若曲面更适合投影到 $yOz$ 或 $zOx$ 面，循环调整坐标即可。参数曲面则用

$$
\mathbf n\,\mathrm dS=\pm (\mathbf r_u\times \mathbf r_v)\,\mathrm du\,\mathrm dv,
$$

符号根据题目指定侧选择。

!!! example "例 10.5：斜平面的通量直接投影计算"

    设 $S$ 为第一卦限内的平面片 $z=1-x-y$，取上侧，求 $\mathbf F=(x,y,z)$ 的通量。

    **解：** 先确定投影区域：由 $x,y,z\ge0$ 得 $D=\{x\ge0,y\ge0,x+y\le1\}$。再求 $z_x=z_y=-1$，所以

    $$
    \mathbf F\cdot\mathbf n\,\mathrm dS
    =(x+y+z)\,\mathrm dx\,\mathrm dy
    =1\,\mathrm dx\,\mathrm dy.
    $$

    这里最后一步用了曲面方程 $z=1-x-y$。于是

    $$
    \iint_S\mathbf F\cdot\mathbf n\,\mathrm dS
    =\int_0^1\int_0^{1-x}1\,\mathrm dy\,\mathrm dx=\frac12.
    $$

    若改取下侧，答案为 $-1/2$。这个计算已包含曲面的面积因子，不能再乘 $\sqrt3$。

!!! warning "单位法向量与面积因子配套使用"

    用 $\mathbf F\cdot \mathbf n\,\mathrm dS$ 时，$\mathbf n$ 必须是单位矢量；用 $\mathbf F\cdot (\mathbf r_u\times \mathbf r_v)\,\mathrm du\,\mathrm dv$ 时，矢量积已经包含面积因子，无须再单位化或再乘一次面积因子。

#### 高斯公式

设立体 $\Omega$ 的边界 $S=\partial\Omega$ 分片光滑且取**外侧**，$P,Q,R$ 在包含 $\overline\Omega$ 的开集内有连续一阶偏导，则

$$
\oiint_{\partial\Omega}\mathbf F\cdot \mathbf n\,\mathrm dS
=\iiint_\Omega(P_x+Q_y+R_z)\,\mathrm dV.
$$

这是把封闭曲面的通量化为体积分的工具。对开曲面，常用“补面—封闭—求总体通量—减去补面通量”的方法；补面的方向按所围立体的外侧确定。

使用时先检查曲面是否封闭。只有把所围立体的全部边界计入，才有高斯公式中的 $S=\partial\Omega$。对于各面组成的边界，“外侧”是相对于同一个立体而言的，底面法向往往朝下，不能把每个面都取成上侧。

!!! tip "立体内部的奇点怎么处理"

    被积函数在立体内部某点没有定义时，不能直接对整个立体使用高斯公式。标准做法是在奇点周围挖去一个足够小的区域（常取小球）：对挖空后的区域用高斯公式，再单独计算内边界曲面的通量。自测第 5 题就是这种情形——$\mathbf F=\displaystyle\frac{x,y,z}{(x^2+y^2+z^2)^{3/2}}$ 在原点无定义，通过单位球面的通量不为零，而是 $4\pi$。

#### 散度

$$
\operatorname{div}\mathbf F=P_x+Q_y+R_z.
$$

散度是标量，表示局部单位体积净流出的强度。散度为零称为无源场；在高斯公式条件下，封闭曲面的净通量为零，但单个开曲面的通量未必为零。

例如 $\mathbf F=(0,0,1)$ 的散度为零。对一个圆柱体，顶面的外向通量为底面积，底面的外向通量为其相反数，侧面通量为零，总和为零。可见“净通量为零”允许不同部分的通量互相抵消。

高斯公式中的偏导也应按分量配对：$P$ 对 $x$、$Q$ 对 $y$、$R$ 对 $z$ 求导，再相加。它与格林公式中的 $Q_x-P_y$ 是不同运算。

!!! example "例 10.6：上半球的通量与补面"

    对 $\mathbf F=(x,y,z)$，求单位上半球面 $S$ 外侧的通量。

    **解：** 添底面圆盘 $S_0:z=0,x^2+y^2\le 1$，底面外法向朝下。散度为 $3$，半球体体积为 $2\pi/3$，故封闭曲面通量为 $2\pi$。

    在底面 $\mathbf F\cdot (0,0,-1)=-z=0$，所以所求通量仍为 $2\pi$。也可在球面直接利用 $\mathbf F=\mathbf n$，把积分化为半球面积。

### §3 斯托克斯公式、空间曲线积分与路径无关性

#### 旋度

对 $\mathbf F=(P,Q,R)$，定义

$$
\operatorname{rot}\mathbf F=\operatorname{curl}\mathbf F
=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y).
$$

旋度是矢量，描述局部环流的强度与轴向。可用形式行列式记忆，但其中各项是微分运算。

#### 斯托克斯公式

斯托克斯公式把沿空间闭曲线的环流，改为跨接这条曲线的曲面上的旋度通量。这里积分的是 $\operatorname{curl}\mathbf F$ 的通量，而不是原场 $\mathbf F$ 的通量；曲面也不必封闭，它的边界应恰好是给定曲线。

格林公式是它在平面上的特殊情形：取 $z=0$ 上的区域及向上法向量，旋度与法向量的数量积就是 $Q_x-P_y$，从而得到格林公式。

设 $S$ 为分片光滑的有向曲面，边界 $L=\partial S$ 分段光滑，$\mathbf F$ 在曲面附近一阶连续可微，则

$$
\oint_L\mathbf F\cdot \mathrm d\mathbf r
=\iint_S\operatorname{curl}\mathbf F\cdot \mathbf n\,\mathrm dS.
$$

边界方向与法向量满足**右手关系**：右手拇指指向法向，四指弯曲方向为边界正向。等价地，从法向量所指的一侧向曲面看，边界为逆时针。

计算时可选择边界相同、方向一致且满足光滑条件的更简单曲面；空间闭曲线若位于某平面，通常选平面片。

!!! example "例 10.7：空间闭曲线换成平面片"

    设 $L$ 为柱面 $x^2+y^2=1$ 与平面 $z=x$ 的交线，从 $z$ 轴正向向下看为逆时针。计算

    $$
    I=\oint_L(-y\,\mathrm dx+x\,\mathrm dy+z\,\mathrm dz).
    $$

    **解：** 先逐项求旋度：$R_y-Q_z=0$，$P_z-R_x=0$，$Q_x-P_y=2$，故 $\operatorname{curl}\mathbf F=(0,0,2)$。

    选择由 $L$ 围成的平面片 $z=x$，而不用柱面。它向 $xOy$ 面的投影是单位圆盘。题目给定从上向下看为逆时针，因此应取上侧；由 $z_x=1,z_y=0$ 得面积矢量 $(-1,0,1)\,\mathrm dx\,\mathrm dy$，所以

    $$
    I=\iint_{x^2+y^2\le 1}(0,0,2)\cdot (-1,0,1)\,\mathrm dx\,\mathrm dy=2\pi.
    $$

#### 空间路径无关性

空间情形仍然通过寻找原函数，把曲线积分化为端点处的函数值之差。平面中的条件 $P_y=Q_x$ 扩展为下面三组偏导相等，也就是旋度为零。第六章 §4 的全微分方程与此相联系：它也是先判断并构造一个函数，使其全微分等于给定表达式。

在空间开连通区域中，路径无关、任意闭曲线积分为零、存在 $u$ 使

$$
\mathrm du=P\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz
$$

三者等价。若 $\mathbf F\in C^1$ 且区域单连通，则又等价于

$$
\operatorname{curl}\mathbf F=\mathbf0
\quad \Longleftrightarrow\quad
P_y=Q_x,\quad Q_z=R_y,\quad R_x=P_z.
$$

此时积分仍为 $u(B)-u(A)$。求原函数可逐次积分并匹配三个偏导。

#### 势量场（\*）

教材第 230 页起。若存在单值函数 $u$，使 $\mathbf F=\nabla u$，则称为势量场或保守场，$u$ 是势函数。对 $C^2$ 的 $u$，必有 $\operatorname{curl}(\nabla u)=\mathbf0$。反向结论需要区域条件，不能漏掉定义域中的孔或奇点。

!!! info "数学势函数与物理势能的符号"

    本页沿用教材数学约定 $\mathbf F=\nabla u$。物理中常把势能或电势记为 $V$，写 $\mathbf F=-\nabla V$。两者可能差一个负号，应以具体定义为准。

#### 向量微分算子（\*）

教材第 232 页起。记

$$
\nabla=\left(\frac\partial{\partial x},\frac\partial{\partial y},\frac\partial{\partial z}\right),
$$

则梯度、散度、旋度可分别写成 $\nabla u,\nabla\cdot \mathbf F,\nabla\times \mathbf F$。拉普拉斯算子为

$$
\Delta u=\nabla\cdot \nabla u=u_{xx}+u_{yy}+u_{zz}.
$$

在有关函数二阶连续可微时，

$$
\nabla\times (\nabla u)=\mathbf0,\qquad
\nabla\cdot (\nabla\times \mathbf F)=0.
$$

这些等式来自混合偏导相等。算子不是普通常矢量，对乘积使用时必须遵守求导法则。

### 三个积分公式如何选择

| 公式 | 左端对象 | 右端对象 | 方向与条件重点 |
| --- | --- | --- | --- |
| 格林 | 平面闭曲线上的环流 | 二重积分 $Q_x-P_y$ | 区域在行进方向左侧；洞的边界也要算 |
| 高斯 | 封闭曲面的通量 | 三重积分 $\operatorname{div}\mathbf F$ | 外侧；检查整个立体内有无奇点 |
| 斯托克斯 | 空间闭曲线上的环流 | 曲面上的旋度通量 | 边界与法向满足右手关系 |

!!! tip "先看闭合，再看微分"

    闭曲线优先考虑格林或斯托克斯，封闭曲面优先考虑高斯；再判断求导是否让被积函数变简单。非闭合对象可考虑补线、补面。若有原函数，直接用端点差往往最省步骤。

还可以从所需的区域反查条件：格林公式检查整个平面区域，高斯公式检查整个立体，斯托克斯公式检查所选曲面及其邻域。只检查边界上没有奇点，通常不足以使用前两种公式。若直接参数化已经很简单，也没有必要强行改用积分公式。

### 本章自测

!!! example "自测 10"

    1. 沿单位圆周顺时针计算 $\displaystyle\oint_L(x\,\mathrm dy-y\,\mathrm dx)$。
    2. 求 $\omega=yz\,\mathrm dx+xz\,\mathrm dy+xy\,\mathrm dz$ 的原函数，并计算从 $(1,1,1)$ 到 $(2,1,3)$ 的积分。
    3. 求 $\mathbf F=(x,y,z)$ 通过半径为 $R$ 的球面外侧的通量。
    4. 设 $\mathbf F=(-\displaystyle\frac{y}{2},\frac{x}{2},0)$，$L$ 是平面 $z=1$ 上半径为 $a$ 的圆，从上向下看为逆时针，求其环流。
    5. 对 $\mathbf F=\displaystyle\frac{x,y,z}{(x^2+y^2+z^2)^{3/2}}$，原点外散度为零。它通过单位球面外侧的通量是否为零？说明理由。

    ??? success "答案与提示"

        1. $-2\pi$；顺时针与格林正向相反。
        2. $u=xyz+C$，积分为 $6-1=5$。
        3. 散度为 $3$，通量为 $\displaystyle\frac{3\cdot 4\pi R^3}{3}=4\pi R^3$。
        4. 旋度为 $(0,0,1)$，取向上的圆盘，环流为 $\pi a^2$。
        5. 不为零。在单位球面上 $\mathbf F=\mathbf n$，通量为 $4\pi$。原点处场无定义，不满足对整个球体使用高斯公式的条件；挖掉一个小球后，内球面按穿孔区域的外侧应取朝向球心的方向。

## 第十一章 级数

级数用一列有限和的极限描述“无穷项相加”。本章有三条主线：**能不能相加**（收敛性）、**相加得到什么**（和与和函数）、**怎样用有限项近似**（余项与误差）。

| 学习对象 | 核心问题 | 常用工具 |
| --- | --- | --- |
| 数项级数 | 部分和是否有有限极限 | 比较、比值、根值、积分、莱布尼茨判别法 |
| 函数项级数 | 在哪些点收敛，能否交换极限与运算 | 收敛域、一致收敛 |
| 幂级数 | 收敛半径、和函数、函数展开 | 阿贝尔定理、逐项求导与积分、泰勒公式 |
| 傅里叶级数 | 用三角函数展开周期函数 | 正交性、傅里叶系数、收敛定理 |

### §1 数项级数：定义与基本性质

有限个实数相加总有确定结果，无穷多项相加则需要定义。办法是先加前一项、前两项、前三项，得到部分和数列，再考察项数增加时这些部分和是否趋于一个有限数。因此，研究级数的第一步是区分原来的通项与由它构成的部分和。

由此，级数中的运算通常先在有限和上进行，再检查能否取极限。判断敛散时可以先看通项是否趋于零；不趋于零，级数一定发散；趋于零，只通过了必要条件的检查，还不能确定部分和是否收敛。

#### 部分和、收敛与余项

给定数列 $\{u_n\}$，形式表达式 $\sum_{n=1}^{\infty}u_n$ 称为数项级数。它的**前 $N$ 项部分和**为

$$
S_N=\sum_{n=1}^{N}u_n.
$$

若 $S_N$ 有有限极限 $S$，就称级数收敛，记为 $\sum_{n=1}^{\infty}u_n=S$；否则称为发散。收敛时，**余项**为

$$
r_N=S-S_N=\sum_{n=N+1}^{\infty}u_n,
\qquad r_N\longrightarrow0.
$$

!!! example "例：通项、部分和与级数的和"

    对 $\sum_{n=1}^{\infty}2^{-n}$，几个量分别是：

    | 项数 N | 第 N 项 $u_N$ | 前 N 项和 $S_N$ |
    | --- | --- | --- |
    | $1$ | $1/2$ | $1/2$ |
    | $2$ | $1/4$ | $3/4$ |
    | $3$ | $1/8$ | $7/8$ |
    | $N$ | $2^{-N}$ | $1-2^{-N}$ |

    当 $N\to\infty$，通项趋于 $0$，部分和趋于 $1$，所以级数的和是 $1$。余项为 $r_N=2^{-N}$，它表示用前 $N$ 项代替全部级数时还差多少。

    若要求误差小于 $10^{-3}$，只需使 $2^{-N}<10^{-3}$，取 $N=10$ 即可。这同时用到了收敛、求和与误差估计三个概念。

!!! warning "通项趋于零只是必要条件"

    若 $\sum u_n$ 收敛，则 $u_n=S_n-S_{n-1}\to 0$。反之不成立：$\displaystyle\frac{1}{n}\to 0$，但调和级数 $\sum \displaystyle\frac{1}{n}$ 发散。

    因此，判敛时先检查通项；通项不趋于零可以立即判定发散，趋于零则仍需继续判断。

调和级数为什么发散，可以直接从部分和看出。保留首项 $1$，将其后各项按 $1,2,4,8,\ldots$ 项分组。第 $k$ 组满足

$$
\sum_{n=2^{k-1}+1}^{2^k}\frac1n
\ge 2^{k-1}\cdot\frac1{2^k}=\frac12.
$$

因此 $S_{2^m}\ge1+\displaystyle\frac{m}{2}\to+\infty$。虽然单项 $\displaystyle\frac{1}{n}$ 越来越小，每一组的和却仍至少为 $1/2$，部分和就没有统一上界。这里估计的是原级数的有限部分和，并未预先假定无穷和存在。

!!! example "例：几何级数与裂项求和"

    **几何级数**：设 $a\ne 0$，则

    $$
    \sum_{n=0}^{\infty}aq^n=\frac{a}{1-q},\qquad |q|<1.
    $$

    这里下标从 $0$ 开始，取至第 $N$ 次幂的和含 $N+1$ 项。记它为 $T_N=a+aq+\cdots+aq^N$，由 $T_N-qT_N=a-aq^{N+1}$，当 $q\ne1$ 时得

    $$
    T_N=\frac{a(1-q^{N+1})}{1-q}.
    $$

    若 $|q|<1$，则 $q^{N+1}\to0$，得到上面的和。当 $|q|\ge1$ 时通项不趋于零，级数发散；$a=0$ 时则恒为零。

    **裂项求和**：

    $$
    \sum_{n=1}^{\infty}\frac1{n(n+1)}
    =\lim_{N\to \infty}\sum_{n=1}^{N}\left(\frac1n-\frac1{n+1}\right)
    =\lim_{N\to \infty}\left(1-\frac1{N+1}\right)=1.
    $$

    先对有限和作运算，再取极限，可以避免对无穷和作不合法的消项。

#### 基本性质

- **有限项不影响敛散性**：增加、删除或改变有限项，只可能改变级数的和。
- **线性运算**：若 $\sum u_n=U$、$\sum v_n=V$ 都收敛，则 $\sum (\alpha u_n+\beta v_n)=\alpha U+\beta V$。
- **收敛与发散相加**：一个收敛级数与一个发散级数逐项相加，结果发散；两个发散级数相加则没有统一结论。
- **保持顺序的分组**：收敛级数任意合并相邻有限项，和不变；分组后收敛，不能反推原级数收敛。例如 $(1-1)+(1-1)+\cdots$ 的分组部分和为零，但原级数部分和在 $1$ 和 $0$ 之间振荡。

**柯西收敛准则**：$\sum u_n$ 收敛，当且仅当

$$
\forall\varepsilon>0,\ \exists N,\ \forall m>n\ge N,
\quad \left|\sum_{k=n+1}^{m}u_k\right|<\varepsilon.
$$

它要求从足够靠后的位置开始，**任意长度的有限尾和**都足够小。

### §2 正项级数：敛散性的判别

以下“正项级数”的结论也适用于非负项级数；涉及商式时要求分母最终为正。

#### 部分和有界准则

若 $u_n\ge 0$，则 $S_N$ 单调不减，因此

$$
\sum u_n\text{ 收敛}\quad \Longleftrightarrow\quad \{S_N\}\text{ 有上界}.
$$

正项级数发散时，部分和趋于 $+\infty$。这是比较判别法的基础。

#### 比较判别法

比较判别法把未知级数与已知敛散性的级数联系起来。最常用的基准是几何级数 $\sum q^n$（$0<q<1$）与 $p$ 级数 $\sum \displaystyle\frac{1}{n^p}$，后者的判定会在本节积分判别法中说明。选择比较对象时，先考察 $n\to\infty$ 时通项的主要部分，再用不等式或比值极限作严格判断。

若从某项起 $0\le u_n\le v_n$，则：

- $\sum v_n$ 收敛 $\Rightarrow\sum u_n$ 收敛；
- $\sum u_n$ 发散 $\Rightarrow\sum v_n$ 发散。

可记为：**用收敛的大项控制小项，用发散的小项推出大项发散。**

比较方向可以由部分和解释：若 $u_n\le v_n$，则 $\sum_{n=1}^{N}u_n\le\sum_{n=1}^{N}v_n$。右边有统一上界，左边便随之有上界；反过来，左边无界，右边必无界。若不等式只从某项起成立，就对相应的尾部作同样比较。

例如 $0<\displaystyle\frac{1}{n^2+1}\le\frac{1}{n^2}$，右侧级数收敛，故左侧也收敛。而 $\displaystyle\frac{1}{n+1}\ge\frac{1}{2n}$（$n\ge1$），右侧级数发散，故左侧发散。若仅找到一个发散的上界或收敛的下界，都不能据此下结论。

若 $u_n,v_n>0$，且 $\lim_{n\to \infty}\displaystyle\frac{u_n}{v_n}=\ell$，则极限比较法给出：

| 比值极限 | 可以得出的结论 |
| --- | --- |
| $0<\ell<+\infty$ | 两级数同敛散 |
| $\ell=0$ | $\sum v_n$ 收敛可推出 $\sum u_n$ 收敛 |
| $\ell=+\infty$ | $\sum v_n$ 发散可推出 $\sum u_n$ 发散 |

特别地，正项之间 $u_n\sim v_n$ 可以用于判敛。

!!! example "例：有理式与根式的比较"

    因为

    $$
    \frac{3n+1}{n^3+2}\sim \frac3{n^2},
    $$

    所以 $\sum \displaystyle\frac{3n+1}{n^3+2}$ 收敛。

    对含根式的项，先有理化：

    $$
    \sqrt{n^2+1}-n=\frac1{\sqrt{n^2+1}+n}\sim \frac1{2n},
    $$

    因而 $\sum (\sqrt{n^2+1}-n)$ 发散。

#### 比值与根值判别法

几何级数的相邻项之比是固定数 $q$。对一般正项级数，若相邻项之比最终小于某个固定的 $q<1$，其尾项就可以被一个收敛的几何级数控制。这是比值判别法的依据。根值判别法则直接比较 $u_n$ 与 $q^n$，即比较 $\sqrt[n]{u_n}$ 与 $q$。

因此，阶乘或连乘适合先作相邻两项的比值，以约去公共因子；整体带 $n$ 次幂的项适合先开 $n$ 次方。两种方法都应计算极限后再判断，不能仅凭表达式中含有指数就断言收敛。

对正项级数，若下列极限存在：

$$
\rho=\lim_{n\to \infty}\frac{u_{n+1}}{u_n}
\quad \text{或}\quad
\rho=\lim_{n\to \infty}\sqrt[n]{u_n},
$$

则 $\rho<1$ 时收敛，$\rho>1$（包括 $+\infty$）时发散，$\rho=1$ 时不能判断。

| 通项特征 | 优先考虑 |
| --- | --- |
| 含 $n!$、连续乘积、指数因子 | 比值判别法 |
| 整体有 $n$ 次幂 | 根值判别法 |
| 多项式、根式、对数 | 比较或积分判别法 |

!!! example "例：比值法与根值法"

    对 $\sum \displaystyle\frac{n!}{n^n}$，

    $$
    \frac{u_{n+1}}{u_n}
    =\frac{(n+1)!}{(n+1)^{n+1}}\frac{n^n}{n!}
    =\left(\frac n{n+1}\right)^n
    =\left(1+\frac1n\right)^{-n}\to e^{-1}<1,
    $$

    所以收敛。对 $\sum[\displaystyle\frac{n}{2n+1}]^n$，根值极限为 $1/2$，所以收敛。

    对 $\sum \displaystyle\frac{1}{n}$ 和 $\sum \displaystyle\frac{1}{n^2}$，比值极限都等于 $1$，但前者发散、后者收敛。

#### 积分判别法与常用基准级数

若 $f$ 非负且单调不增，则对 $n\le x\le n+1$ 有 $f(n+1)\le f(x)\le f(n)$，积分后得到

$$
f(n+1)\le\int_n^{n+1}f(x)\,\mathrm dx\le f(n).
$$

把这些不等式相加，就能把级数的部分和与反常积分的截断积分互相比较。两者不必具有相同的值，但在以下条件下具有相同的敛散性。

若 $f(x)$ 在 $[N,+\infty)$ 上连续、非负且单调不增，并且 $u_n=f(n)$，则

$$
\sum_{n=N}^{\infty}u_n
\quad \text{与}\quad
\int_N^{+\infty}f(x)\,\mathrm dx
\quad \text{同敛散}.
$$

由此得到两个常用结论：

$$
\sum_{n=1}^{\infty}\frac1{n^p}
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\le 1,
\end{cases}
\qquad
\sum_{n=2}^{\infty}\frac1{n(\ln n)^p}
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\le 1.
\end{cases}
$$

第一个结论可由反常积分直接核对：当 $p\ne1$ 时，

$$
\int_1^A x^{-p}\,\mathrm dx=\frac{A^{1-p}-1}{1-p};
$$

只有 $p>1$ 时能趋于有限值。$p=1$ 时积分为 $\ln A\to+\infty$。对于 $p\le0$，级数通项本身已经不趋于零，无须使用积分判别法。

第二个结论在积分中作代换 $t=\ln x$ 即可得到。对上述满足单调条件且收敛的级数，还有余项估计

$$
\int_{N+1}^{+\infty}f(x)\,\mathrm dx
\le r_N\le
\int_N^{+\infty}f(x)\,\mathrm dx.
$$

### §3 一般数项级数：符号变化与绝对收敛

#### 交错级数与莱布尼茨判别法

交错级数的正负号交替出现，但判断收敛仍要回到部分和。在下面的单调条件下，从足够靠后的项起，偶数项部分和单调不减，奇数项部分和单调不增；两者的差是一项趋于零的 $b_n$，所以趋向同一个极限。

对交错级数 $\sum_{n=1}^{\infty}(-1)^{n-1}b_n$，若 $b_n\ge 0$、从某项起单调不增，且 $b_n\to 0$，则级数收敛。

在单调性成立的尾部，截断误差满足

$$
|r_N|\le b_{N+1},
$$

余项的符号与第一个被舍去的项相同。证明思路是分别考察奇数项、偶数项部分和：它们从两侧趋向同一个极限。

例如 $1-1/2+1/3-1/4+\cdots$ 中，$b_n=\displaystyle\frac{1}{n}$ 单调趋于零，故级数收敛。其和 $S$ 满足 $S_{2m}\le S\le S_{2m+1}$。若取前 $100$ 项，则 $|S-S_{100}|\le1/101$，且 $S_{100}$ 不超过真实的和。判别法和误差界都不要求先求出 $S$ 的具体值。

!!! warning "不能省略单调条件"

    仅有“正负交替、通项趋于零”不足以保证收敛。例如令 $b_{2k-1}=\displaystyle\frac{1}{\sqrt{k}}$、$b_{2k}=\displaystyle\frac{1}{\sqrt{k}}-\frac{1}{k}$，则 $b_n\to 0$，但每对带符号项之和为 $\displaystyle\frac{1}{k}$，偶数项部分和发散。

#### 绝对收敛与条件收敛

对变号级数，可以进一步考察：去掉正负号后是否仍收敛？若仍收敛，原级数的收敛不依赖正负项之间的抵消；若去掉符号后发散，而原级数收敛，则正负项的抵消对收敛有实质作用。这就产生下面两种分类。

- 若 $\sum|u_n|$ 收敛，称 $\sum u_n$ **绝对收敛**。
- 若 $\sum u_n$ 收敛，而 $\sum|u_n|$ 发散，称其**条件收敛**。

**绝对收敛必然推出收敛**，可由柯西准则与 $|\sum u_k|\le \sum|u_k|$ 证明。

判断时可以先检查 $\sum|u_n|$。它若收敛，便已证明原级数绝对收敛；它若发散，还需要另判原级数，不能立即断言原级数发散。只有同时确认“原级数收敛”和“绝对值级数发散”，才是条件收敛。

!!! example "例：带参数的交错 p 级数"

    考察 $\sum_{n=1}^{\infty}\displaystyle\frac{(-1)^{n-1}}{n^p}$。

    - $p>1$：绝对值级数是收敛的 $p$ 级数，因此绝对收敛。
    - $0<p\le 1$：由莱布尼茨判别法收敛，但绝对值级数发散，因此条件收敛。
    - $p\le 0$：通项不趋于零，因此发散。

对任意实数项或复数项级数，也可对 $|u_n|$ 使用比值法、根值法：极限小于 $1$ 时绝对收敛，大于 $1$ 时原级数发散，等于 $1$ 时仍需另判。

#### 绝对收敛级数的运算（\*）

**重排**：绝对收敛级数任意重排后仍收敛到原来的和。条件收敛级数不能任意重排；重排可能改变和，也可能使其发散。

**柯西乘积**：若 $\sum_{n=0}^{\infty}a_n=A$、$\sum_{n=0}^{\infty}b_n=B$ 都绝对收敛，令

$$
c_n=\sum_{k=0}^{n}a_kb_{n-k},
$$

则 $\sum_{n=0}^{\infty}c_n$ 绝对收敛，且其和为 $AB$。这里按下标和相同的项归并，不能把无穷乘法当作不需条件的有限乘法。

### §4 函数项级数与一致收敛（\*）

!!! info "教材选学与考试基础的交叉"

    教材第 263 页起整节标为选学。但函数项级数的收敛点、收敛域和和函数仍属于数学一复习内容；本节的一致收敛定义、判别法及一般交换定理则用于加深理解。幂级数的连续性、逐项求导与积分性质应掌握。

#### 逐点收敛、收敛域与和函数

对于 $\sum u_n(x)$，固定 $x$ 后得到一个数项级数。使该数项级数收敛的点构成**收敛域**；在收敛域上定义

$$
S(x)=\sum_{n=1}^{\infty}u_n(x),
\qquad S_N(x)=\sum_{n=1}^{N}u_n(x),
\qquad r_N(x)=S(x)-S_N(x).
$$

以 $\sum_{n=0}^{\infty}x^n$ 为例：固定 $x=1/2$ 得到和为 $2$ 的数项级数，固定 $x=-1/2$ 得到和为 $2/3$ 的数项级数，固定 $x=1$ 则发散。将所有收敛的 $x$ 收集起来得到 $(-1,1)$，而 $S(x)=\displaystyle\frac{1}{1-x}$ 记录每一个收敛点上的级数和。

逐点都能求和之后，还要研究能否对和函数交换极限、积分或求导。有限和具有的性质不一定自动传到无穷和；一致收敛正是常用的附加条件。

**逐点收敛**允许达到同样误差所需的项数依赖于 $x$。**一致收敛**要求一个项数门槛同时适用于集合 $D$ 内所有点：

$$
\forall\varepsilon>0,\ \exists N,\ \forall n\ge N,\ \forall x\in D,
\quad |r_n(x)|<\varepsilon.
$$

等价地，$\sup_{x\in D}|r_n(x)|\to 0$。逐点收敛中量词的次序则是 $\forall x\in D,\forall\varepsilon>0,\exists N=N(x,\varepsilon)$。

??? example "例：同一个级数在不同集合上的一致收敛性"

    对 $\sum_{n=0}^{\infty}x^n$，部分和取至 $x^N$，余项为

    $$
    r_N(x)=\frac{x^{N+1}}{1-x}.
    $$

    在 $[0,1)$ 上逐点收敛，但每个固定 $N$ 都有 $\sup_{0\le x<1}|r_N(x)|=+\infty$，所以不一致收敛。

    在任意固定的 $[-q,q]$（$0<q<1$）上，

    $$
    |r_N(x)|\le \frac{q^{N+1}}{1-q}\to 0,
    $$

    因而一致收敛。讨论一致收敛时必须指明集合。

#### 一致收敛的判别法

一致收敛要求误差上界对整个集合统一成立。证明时常寻找不依赖 $x$ 的数列 $\eta_N\to0$，使所有 $x\in D$ 都满足 $|r_N(x)|\le\eta_N$；前例中的 $\displaystyle\frac{q^{N+1}}{1-q}$ 就是这样的上界。若只能对每个固定的 $x$ 分别证明余项趋于零，得到的仍只是逐点收敛。

**一致柯西准则**：对任意 $\varepsilon>0$，存在与 $x$ 无关的 $N$，使所有 $m>n\ge N$、$x\in D$ 都满足

$$
\left|\sum_{k=n+1}^{m}u_k(x)\right|<\varepsilon.
$$

**魏尔斯特拉斯判别法（M 判别法）**：若对所有 $x\in D$ 有 $|u_n(x)|\le M_n$，而数项级数 $\sum M_n$ 收敛，则 $\sum u_n(x)$ 在 $D$ 上绝对且一致收敛。

例如 $|\displaystyle\frac{\sin nx}{n^2}|\le \frac{1}{n^2}$，所以 $\sum \displaystyle\frac{\sin nx}{n^2}$ 在 $\mathbb R$ 上一致收敛。M 判别法是充分条件，找不到这样的控制级数不能直接判定不一致收敛。

以下两种判别法可处理带振荡因子的 $\sum a_n(x)b_n(x)$，这里 $b_n(x)$ 为实值函数：

- **狄利克雷判别法**：$\sum_{n=1}^{N}a_n(x)$ 对 $N,x$ 一致有界；对每个 $x$，$b_n(x)$ 关于 $n$ 单调，并且 $b_n\to 0$ 在 $D$ 上一致成立。
- **阿贝尔判别法**：$\sum a_n(x)$ 在 $D$ 上一致收敛；对每个 $x$，$b_n(x)$ 关于 $n$ 单调，且存在常数 $M$ 使所有 $n,x$ 都有 $|b_n(x)|\le M$。

满足相应条件时，乘积级数在 $D$ 上一致收敛。令 $D$ 只含一个点，也得到相应的数项级数判别法。

#### 一致收敛与运算交换

| 想进行的操作 | 一组常用的充分条件 | 结论 |
| --- | --- | --- |
| 保持连续性 | 各 $u_n$ 在 $D$ 上连续，级数在 $D$ 上一致收敛 | 和函数在 $D$ 上连续 |
| 逐项积分 | 各 $u_n$ 在 $[a,b]$ 上连续，级数在该区间一致收敛 | $\displaystyle\int_a^b\sum u_n=\sum \int_a^b u_n$ |
| 逐项求导 | 各 $u_n\in C^1[a,b]$；$\sum u_n'$ 一致收敛；$\sum u_n(x_0)$ 在某一点收敛 | 原级数一致收敛，且 $S'=\sum u_n'$ |

!!! warning "原级数一致收敛不自动保证可逐项求导"

    求导需要单独控制导数级数。积分和求导的条件不可混用。

### §5 幂级数：收敛半径与和函数

#### 收敛半径

幂级数是函数项级数中的一种特殊形式：每项由一个固定系数乘以 $x-x_0$ 的整数次幂组成。$x_0$ 是展开中心，$a_n$ 只随下标 $n$ 变化，不随 $x$ 变化。研究收敛性时，仍然先固定 $x$，把它当作数项级数。

例如 $1+(x-2)+(x-2)^2+\cdots$ 的中心是 $2$。令 $t=x-2$ 后就是几何级数，收敛条件 $|t|<1$ 换回为 $1<x<3$。

以 $x_0$ 为中心的幂级数为

$$
\sum_{n=0}^{\infty}a_n(x-x_0)^n.
$$

阿贝尔定理的基本结论：若它在 $x_1\ne x_0$ 处收敛，则在 $|x-x_0|<|x_1-x_0|$ 内绝对收敛；若在某点发散，则在距中心更远处也发散。

因此存在收敛半径 $R\in[0,+\infty]$：

- $|x-x_0|<R$：绝对收敛；
- $|x-x_0|>R$：发散；
- $|x-x_0|=R$：需要分别代入左右端点判断。

“半径”只给出距离中心多远以内必收敛，不包含端点结论。中心处 $x=x_0$ 只剩常数项 $a_0$，总是收敛；$R=0$ 表示仅中心收敛，$R=+\infty$ 表示所有实数处都收敛。$0<R<\infty$ 时，两个端点 $x_0-R,x_0+R$ 要分别代入原级数检验。

相邻系数比值公式来自完整通项的比值：对固定的 $x\ne x_0$，

$$
\left|\frac{a_{n+1}(x-x_0)^{n+1}}{a_n(x-x_0)^n}\right|
=\left|\frac{a_{n+1}}{a_n}\right||x-x_0|.
$$

它的极限小于 $1$ 时绝对收敛，大于 $1$ 时发散，恰好等于 $1$ 时不能判断；因此端点必须另判。

若系数最终非零，且比值极限存在，可用

$$
R=\lim_{n\to \infty}\left|\frac{a_n}{a_{n+1}}\right|.
$$

更一般地，柯西—阿达马公式为

$$
\frac1R=\limsup_{n\to \infty}\sqrt[n]{|a_n|},
$$

其中右端为 $0$ 时 $R=+\infty$，右端为 $+\infty$ 时 $R=0$。

!!! tip "收敛半径不等于收敛域"

    求收敛域应按“半径 → 开区间 → 两个端点”完成。缺少奇数次或偶数次项时，不要直接对相邻非零系数套用半径公式；可以对完整通项作比值检验，或先代换变量。

!!! example "例：同时判断端点和收敛类型"

    求 $\sum_{n=1}^{\infty}\displaystyle\frac{(x-2)^n}{n3^n}$ 的收敛域。

    对绝对值通项作比值检验，极限为 $\displaystyle\frac{|x-2|}{3}$，故 $R=3$，先得到 $-1<x<5$。

    - $x=-1$：得到 $\sum \displaystyle\frac{(-1)^n}{n}$，条件收敛。
    - $x=5$：得到 $\sum \displaystyle\frac{1}{n}$，发散。

    所以收敛域为 $[-1,5)$，其中 $(-1,5)$ 内绝对收敛。

!!! example "例：只有偶数次幂时，对完整通项作判断"

    求 $\sum_{n=1}^{\infty}\displaystyle\frac{x^{2n}}{n}$ 的收敛域。

    **解：** 对 $x\ne0$，相邻非零项的绝对值之比为 $\displaystyle\frac{|x|^2n}{n+1}\to|x|^2$，故 $|x|<1$ 时收敛；$x=0$ 也收敛。两端 $x=\pm1$ 都得到调和级数，均发散，所以收敛域为 $(-1,1)$。

    也可令 $t=x^2$，先研究 $\sum \displaystyle\frac{t^n}{n}$。但最后必须把关于 $t$ 的条件换回 $x$，不能把 $t$ 的收敛半径直接当成关于 $x$ 的结论。

#### 幂级数的性质与运算

幂级数在收敛区间内部的每个闭子区间上一致收敛；这称为**内闭一致收敛**，不意味着在整个开区间上一致收敛。

在 $|x-x_0|<R$ 内，可以逐项求导和积分：

$$
S'(x)=\sum_{n=1}^{\infty}na_n(x-x_0)^{n-1},
$$

$$
\int_{x_0}^{x}S(t)\,\mathrm dt
=\sum_{n=0}^{\infty}\frac{a_n}{n+1}(x-x_0)^{n+1}.
$$

求导、积分后的幂级数具有相同的收敛半径，但**端点敛散性可能变化**。收敛区间内部可以任意有限次逐项求导，且

$$
a_n=\frac{S^{(n)}(x_0)}{n!},
$$

说明给定中心的幂级数展开系数是唯一的。

例如 $\sum_{n=1}^{\infty}\displaystyle\frac{x^n}{n}$ 在 $x=-1$ 条件收敛、在 $x=1$ 发散；逐项求导后成为 $\sum_{n=1}^{\infty}x^{n-1}$，两端都发散。两级数的收敛半径同为 $1$，收敛域却不同。

两个同中心幂级数可以在共同收敛区间内部相加或作柯西乘积；所得级数的实际半径可能因抵消而扩大，不能一概说等于原半径的较小值。

若 $0<R<\infty$，且原幂级数在某个端点收敛，则其和函数从区间内部趋向该端点时，极限等于端点级数的和。这一端点连续性结论常称为阿贝尔第二定理。

#### 求和函数：从几何级数出发

求和函数常用的方法是把所求级数变换为已知级数，再对相应的函数作同样运算。系数带 $n$ 时可考虑求导，系数带 $\displaystyle\frac{1}{n}$ 时可考虑积分，幂次不一致时可先乘一个 $x$ 或作代换。每一步都应注明所在的收敛区间；通过积分恢复函数时，还要确定积分常数。

由 $\sum_{n=0}^{\infty}x^n=\displaystyle\frac{1}{1-x}$（$\lvert x\rvert<1$），逐项求导、乘以 $x$ 或积分得到

$$
\sum_{n=1}^{\infty}nx^{n-1}=\frac1{(1-x)^2},
\qquad
\sum_{n=1}^{\infty}nx^n=\frac{x}{(1-x)^2},
$$

$$
\sum_{n=1}^{\infty}\frac{x^n}{n}=-\ln(1-x),\qquad |x|<1.
$$

以系数中的 $\displaystyle\frac{1}{n}$ 为例，在 $|x|<1$ 内，将几何级数从 $0$ 到 $x$ 逐项积分：

$$
\int_0^x\frac1{1-t}\,\mathrm dt
=\sum_{n=0}^{\infty}\int_0^x t^n\,\mathrm dt
=\sum_{n=0}^{\infty}\frac{x^{n+1}}{n+1}.
$$

左端为 $-\ln(1-x)$；右端令 $k=n+1$，就是 $\sum_{k=1}^{\infty}\displaystyle\frac{x^k}{k}$。取下限为 $0$，既符合幂级数的积分性质，又自动确定了常数。负的 $x$ 也适用，因为 $x$ 与 $0$ 之间的闭区间仍在 $(-1,1)$ 内。

!!! example "例：用积分求和，再回到原级数"

    设 $S(x)=\sum_{n=1}^{\infty}\displaystyle\frac{x^n}{n(n+1)}$。利用 $\displaystyle\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}$，有

    $$
    \begin{aligned}
    S(x)
    &=-\ln(1-x)-\frac{-\ln(1-x)-x}{x}\\
    &=1+\frac{1-x}{x}\ln(1-x),\qquad 0<|x|<1.
    \end{aligned}
    $$

    $x=0$ 处由原级数得 $S(0)=0$，也等于上式的极限。

    两端点均绝对收敛。利用端点连续性，$S(1)=1$、$S(-1)=1-2\ln2$。不能在没有检验收敛性的情况下直接把端点代入区间内部的推导。

### §6 函数的幂级数展开

#### 泰勒级数与余项

函数在 $x_0$ 处的形式泰勒级数为

$$
\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.
$$

$x_0=0$ 时称为麦克劳林级数。泰勒公式写成

$$
f(x)=\sum_{n=0}^{N}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_N(x).
$$

当区间内有足够阶连续导数时，拉格朗日余项为

$$
R_N(x)=\frac{f^{(N+1)}(\xi)}{(N+1)!}(x-x_0)^{N+1},
$$

其中 $\xi$ 介于 $x_0$ 与 $x$ 之间。函数等于其泰勒级数的关键条件是 **$R_N(x)\to 0$**。

这里要区分两个极限过程：第三章的有限阶泰勒近似通常固定阶数 $N$，让 $x\to x_0$；把函数展开成无穷级数，则固定一个 $x$，让 $N\to\infty$。前者的局部误差结论不能直接代替后者的余项检验。

例如 $e^x$ 的各阶导数仍是 $e^x$，在 $0$ 处都为 $1$，所以候选展开为 $\sum \displaystyle\frac{x^n}{n!}$。对每个固定的实数 $x$，

$$
|R_N(x)|\le e^{|x|}\frac{|x|^{N+1}}{(N+1)!}\to0,
$$

因为右端中相邻幂阶项的比为 $\displaystyle\frac{|x|}{N+2}\to0$。因此这一展开确实等于 $e^x$，而不仅是形式上写出的级数。

!!! warning "无穷次可导不等于可以展开成自身的泰勒级数"

    例如 $f(x)=e^{-\frac{1}{x^2}}$（$x\ne 0$）、$f(0)=0$ 在零点无穷次可导，且所有阶导数均为零。其零点泰勒级数恒为零，却在任何零点邻域内都不等于原函数。

#### 常用麦克劳林展开

| 函数 | 展开式 | 实数范围 |
| --- | --- | --- |
| $\dfrac1{1-x}$ | $\displaystyle\sum_{n=0}^{\infty}x^n$ | $\lvert x\rvert<1$ |
| $e^x$ | $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$ | $x\in \mathbb R$ |
| $\sin x$ | $\displaystyle\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!}$ | $x\in \mathbb R$ |
| $\cos x$ | $\displaystyle\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!}$ | $x\in \mathbb R$ |
| $\ln(1+x)$ | $\displaystyle\sum_{n=1}^{\infty}(-1)^{n-1}\frac{x^n}{n}$ | $-1<x\le 1$ |
| $\arctan x$ | $\displaystyle\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{2n+1}$ | $-1\le x\le 1$ |
| $(1+x)^\alpha$ | $\displaystyle\sum_{n=0}^{\infty}\binom\alpha n x^n$ | 一般先取 $\lvert x\rvert<1$；端点另判 |

这里 $\alpha\in \mathbb R$，且

$$
\binom\alpha0=1,\qquad
\binom\alpha n=\frac{\alpha(\alpha-1)\cdots (\alpha-n+1)}{n!}.
$$

若 $\alpha$ 为非负整数，二项式展开终止，成为对所有实数成立的多项式等式。若 $\alpha$ 不是非负整数，则 $x=1$ 在 $\alpha>-1$ 时收敛，$x=-1$ 在 $\alpha>0$ 时收敛；其余相应端点发散。

上表中 $\ln(1+x)$ 在 $x=1$ 条件收敛，$\arctan x$ 在两个端点都条件收敛。

#### 间接展开方法

直接计算高阶导数往往繁琐，可用已有展开式进行代换、四则运算、求导或积分。每次代换都要同步变换收敛条件。

!!! example "例：代换并逐项积分"

    先由几何级数得到

    $$
    \frac1{1+t^2}=\sum_{n=0}^{\infty}(-1)^nt^{2n},\qquad |t|<1.
    $$

    从 $0$ 到 $x$ 积分：

    $$
    \arctan x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{2n+1},\qquad |x|<1.
    $$

    再用莱布尼茨判别法与端点连续性，将等式延伸到 $x=\pm 1$。

!!! example "例：在非零中心展开"

    在 $x_0=1$ 展开 $\ln x$，令 $h=x-1$，则

    $$
    \ln x=\ln(1+h)
    =\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}n(x-1)^n.
    $$

    由 $-1<h\le 1$ 得 $0<x\le 2$。展开中心为 $1$，收敛半径为 $1$；不能把它当作以零点为中心的展开。

### §7 幂级数的应用（\*）

教材第 289 页起列为选学。近似计算可在主线掌握后补充；利用展开求极限、求和，以及逐项积分的技能仍与核心内容密切相关。

#### 近似公式与误差控制

在零点附近，常用

$$
e^x=1+x+\frac{x^2}{2}+O(x^3),\qquad
\sin x=x-\frac{x^3}{6}+O(x^5),
$$

$$
\ln(1+x)=x-\frac{x^2}{2}+O(x^3),\qquad
(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}2x^2+O(x^3).
$$

这里 $O(x^k)$ 描述 $x\to 0$ 时的误差阶；实际数值计算仍应给出余项上界。

??? example "例：计算 sin 0.1，并保证误差"

    取 $\sin0.1\approx 0.1-\displaystyle\frac{0.1^3}{6}=0.099833333\ldots$。

    由交错级数余项估计，截断误差不超过

    $$
    \frac{0.1^5}{5!}=8.333\ldots \times 10^{-8}.
    $$

    若另外将结果四舍五入，还应将舍入误差计入总误差。

#### 积分计算

有些函数没有初等原函数，但其幂级数可以逐项积分。

??? example "例：用级数近似非初等积分"

    由于 $e^{-x^2}=\sum_{n=0}^{\infty}(-1)^n\displaystyle\frac{x^{2n}}{n!}$ 在 $[0,1]$ 上一致收敛，

    $$
    \int_0^1e^{-x^2}\,\mathrm dx
    =\sum_{n=0}^{\infty}\frac{(-1)^n}{n!(2n+1)}.
    $$

    取至 $n=5$ 得

    $$
    1-\frac13+\frac1{10}-\frac1{42}+\frac1{216}-\frac1{1320}
    \approx 0.7467291967.
    $$

    截断误差不超过首个舍去项 $\displaystyle\frac{1}{6!\cdot 13}\approx 1.07\times 10^{-4}$。

!!! example "例：用展开求极限"

    处理极限时，展开到**抵消之后的首个非零项**即可。例如

    $$
    \lim_{x\to 0}\frac{e^x-1-x}{x^2}
    =\lim_{x\to 0}\frac{\dfrac{x^2}{2}+O(x^3)}{x^2}=\frac12.
    $$

### §8 傅里叶级数：用三角函数展开

#### 正交性与傅里叶系数

幂级数按 $1,x,x^2,\ldots$ 展开函数；傅里叶级数则使用常数、正弦和余弦。对周期为 $2L$ 的函数，选取 $\cos(\displaystyle\frac{n\pi x}{L})$、$\sin(\displaystyle\frac{n\pi x}{L})$，是因为这些函数平移 $2L$ 后都保持不变。

傅里叶展开要分别解决两个问题：怎样由给定函数计算系数，以及这些系数组成的级数收敛到什么。下面先定义系数，再说明收敛条件，不能把写出系数当作已经证明级数处处等于原函数。

设 $f$ 是周期为 $2L$ 的实值函数，在 $[-L,L]$ 上可积。考虑三角级数

$$
f(x)\sim \frac{a_0}{2}
+\sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L}
+b_n\sin\frac{n\pi x}{L}\right).
$$

符号 $\sim$ 在这里表示“对应的傅里叶级数”，不是渐近等价，也不预先断言处处等于 $f$。

系数为

$$
a_0=\frac1L\int_{-L}^{L}f(x)\,\mathrm dx,
$$

$$
a_n=\frac1L\int_{-L}^{L}f(x)\cos\frac{n\pi x}{L}\,\mathrm dx,
\qquad
b_n=\frac1L\int_{-L}^{L}f(x)\sin\frac{n\pi x}{L}\,\mathrm dx.
$$

这些公式来自三角函数的正交性。对正整数 $m,n$，

$$
\int_{-L}^{L}\cos\frac{m\pi x}{L}\cos\frac{n\pi x}{L}\,\mathrm dx
=\begin{cases}L,&m=n,\\0,&m\ne n,\end{cases}
$$

正弦与正弦有同样的关系，正弦与余弦的积分为零。常数函数的平方积分为 $2L$，因此常数项是 $\displaystyle\frac{a_0}{2}$。

正交性在计算中用于分离系数。先看有限三角和：两边乘以 $\cos(\displaystyle\frac{m\pi x}{L})$ 后积分，不同频率的乘积积分为零，正弦项与常数项也为零，只留下 $La_m$。所以对 $f$ 作相同积分，再除以 $L$，就得到上面的 $a_m$。求 $b_m$ 时改乘正弦即可。

若只对有限三角和本身积分，所有正弦、余弦项的积分都为零，仅余常数项乘区间长度，即 $(\displaystyle\frac{a_0}{2})\cdot2L=La_0$。这也说明 $\displaystyle\frac{a_0}{2}$ 是函数在一个周期上的平均值。无穷级数的逐项积分仍需要条件；本节的系数公式可以直接作为傅里叶系数的定义。

周期为 $2\pi$ 时取 $L=\pi$，便得到通常的 $\cos nx$、$\sin nx$ 形式。

#### 收敛到哪里：先看周期延拓

一组常用的狄利克雷充分条件是：在一个周期内，函数只有有限个第一类间断点，并且可划分成有限个单调区间。此时傅里叶级数在每点收敛到

$$
\frac{f(x-0)+f(x+0)}2.
$$

- 在连续点，级数和等于 $f(x)$。
- 在跳跃点，级数和等于左右极限的平均值，与人为指定的单点函数值无关。
- 在周期边界，要用**周期延拓后**的左右极限；例如 $x=L$ 处取 $\displaystyle\frac{f(L-0)+f(-L+0)}{2}$。

!!! warning "傅里叶级数不是泰勒级数"

    泰勒系数由一个点的各阶导数决定；傅里叶系数由整个周期上的积分决定。傅里叶展开允许跳跃间断，且在跳跃点通常不等于指定的函数值。

#### 奇偶性与周期函数展开

| 函数性质 | 为零的系数 | 剩余系数的简化 |
| --- | --- | --- |
| $f$ 为偶函数 | $b_n=0$ | $a_n=\dfrac2L\displaystyle\int_0^Lf(x)\cos\frac{n\pi x}{L}\,\mathrm dx$，含 $n=0$ |
| $f$ 为奇函数 | $a_0=a_n=0$ | $b_n=\dfrac2L\displaystyle\int_0^Lf(x)\sin\frac{n\pi x}{L}\,\mathrm dx$ |

!!! example "例：锯齿波 f(x)=x 的展开"

    令 $f(x)=x$（$-\pi<x<\pi$），再作 $2\pi$ 周期延拓。函数为奇函数，因此只需计算

    $$
    \begin{aligned}
    b_n&=\frac2\pi\int_0^\pi x\sin nx\,\mathrm dx\\
    &=\frac2\pi\left[-\frac{x\cos nx}{n}\right]_0^\pi
    +\frac{2}{n\pi}\int_0^\pi\cos nx\,\mathrm dx\\
    &=-\frac{2(-1)^n}{n}=\frac{2(-1)^{n+1}}n.
    \end{aligned}
    $$

    故

    $$
    x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n\sin nx,
    \qquad -\pi<x<\pi.
    $$

    在 $x=\pm \pi$ 处，级数和为 $0$，等于周期延拓左右极限的平均值。代入 $x=\pi/2$ 可得

    $$
    1-\frac13+\frac15-\frac17+\cdots=\frac\pi4.
    $$

!!! info "吉布斯现象"

    在跳跃点附近，有限部分和常出现振荡和过冲。增加项数会使明显振荡的区域变窄，但最大过冲相对跳跃高度的比例不会趋于零；不能据此期待在跳跃点附近一致逼近。

#### 有限区间上的展开：正弦级数与余弦级数

对于只给定在 $(0,L)$ 上的函数，负半区间的函数值还没有规定。可以先延拓到 $(-L,L)$，再作 $2L$ 周期延拓。常用的两种规定是

$$
F_{\mathrm{odd}}(x)=
\begin{cases}f(x),&0<x<L,\\-f(-x),&-L<x<0,\end{cases}
\qquad
F_{\mathrm{even}}(x)=
\begin{cases}f(x),&0<x<L,\\f(-x),&-L<x<0.\end{cases}
$$

前者使延拓函数成为奇函数，后者使其成为偶函数，因而分别只保留正弦项或余弦项。$0,\pm L$ 处的指定值不影响系数积分；级数在这些点的和仍由延拓后的左右极限决定。

**奇延拓**得到正弦级数：

$$
f(x)\sim \sum_{n=1}^{\infty}b_n\sin\frac{n\pi x}{L},
\qquad
b_n=\frac2L\int_0^Lf(x)\sin\frac{n\pi x}{L}\,\mathrm dx.
$$

**偶延拓**得到余弦级数：

$$
f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos\frac{n\pi x}{L},
\qquad
a_n=\frac2L\int_0^Lf(x)\cos\frac{n\pi x}{L}\,\mathrm dx,
\quad n\ge 0.
$$

同一函数在开区间内可以有这两种展开，因为采用了不同的延拓。正弦级数在 $x=0,L$ 逐项均为零；端点是否等于原函数值必须另看延拓。

!!! example "例：常数函数的半区间展开"

    设 $f(x)=1$，$0<x<L$。奇延拓时

    $$
    b_n=\frac{2[1-(-1)^n]}{n\pi},
    $$

    因而

    $$
    1=\frac4\pi\sum_{k=0}^{\infty}\frac1{2k+1}
    \sin\frac{(2k+1)\pi x}{L},\qquad 0<x<L.
    $$

    两端点级数和为零。偶延拓则仍是常数函数，只有 $a_0=2$，其余系数全为零。

若函数给定在任意有限区间 $(a,b)$，也可直接以 $b-a$ 为周期延拓；这与半区间奇、偶延拓采用的周期不同，写系数前应先确定周期和基函数。

#### 复数形式（\*）

利用欧拉公式，实数形式可以改写为

$$
f(x)\sim \sum_{n=-\infty}^{\infty}c_ne^{i\frac{n\pi x}{L}},
\qquad
c_n=\frac1{2L}\int_{-L}^{L}f(x)e^{-i\frac{n\pi x}{L}}\,\mathrm dx.
$$

这里级数按对称部分和 $\sum_{n=-N}^{N}$ 理解，且

$$
c_0=\frac{a_0}{2},\qquad
c_n=\frac{a_n-ib_n}{2},\qquad
c_{-n}=\frac{a_n+ib_n}{2}\quad (n\ge 1).
$$

当 $f$ 为实值函数时，$c_{-n}=\overline{c_n}$。

#### 矩形区域上的二元展开（\*）

在矩形 $(-L,L)\times (-H,H)$ 上，对两个变量分别使用傅里叶基函数。复数形式为

$$
f(x,y)\sim \sum_{m,n\in \mathbb Z}c_{mn}
e^{i(\frac{m\pi x}{L}+\frac{n\pi y}{H})},
$$

$$
c_{mn}=\frac1{4LH}\int_{-L}^{L}\int_{-H}^{H}
f(x,y)e^{-i(\frac{m\pi x}{L}+\frac{n\pi y}{H})}\,\mathrm dy\,\mathrm dx.
$$

部分和可取 $|m|\le M$、$|n|\le N$ 的矩形截断。若只在 $(0,L)\times (0,H)$ 给定函数，并对两个变量均作奇延拓，则得到双重正弦展开

$$
f(x,y)\sim \sum_{m=1}^{\infty}\sum_{n=1}^{\infty}
B_{mn}\sin\frac{m\pi x}{L}\sin\frac{n\pi y}{H},
$$

$$
B_{mn}=\frac4{LH}\int_0^L\int_0^H
f(x,y)\sin\frac{m\pi x}{L}\sin\frac{n\pi y}{H}\,\mathrm dy\,\mathrm dx.
$$

核心是**基函数取乘积，系数作二重积分**。例如 $f(x,y)=g(x)h(y)$ 时，$B_{mn}$ 等于两个一维正弦系数的乘积；相应矩形部分和也等于两个一维部分和的乘积。

这些公式首先定义展开系数。二元级数的收敛与换序需要额外条件，不能直接照搬一维逐点收敛定理。对连续的双周期函数，若其系数满足 $\sum_{m,n}|c_{mn}|<\infty$，则展开绝对且一致收敛到该函数；例如，无穷次连续可微的双周期函数满足这一条件；此处要求周期延拓后也保持光滑。有关系数衰减与收敛的补充说明，见 [MIT 18.117 讲义第 4 节](https://math.mit.edu/~vwg/classnotes-spring05.pdf)。

### 复习：判别步骤与易错点

#### 按题型选择入口

1. **数项级数**：先看通项是否趋于零，再判断正项、交错或一般变号；区分“收敛”和“绝对收敛”。
2. **正项级数**：先找几何级数、$p$ 级数等比较对象；阶乘用比值法，$n$ 次幂用根值法，含对数时考虑积分法。
3. **函数项级数**：先确定讨论集合；一致收敛要找与 $x$ 无关的尾和或余项控制。
4. **幂级数**：求半径，检查端点，再写收敛域；求和时优先从几何级数通过代换、求导、积分得到。
5. **泰勒展开**：确定中心，选直接或间接展开，写出有效范围；数值近似附上余项估计。
6. **傅里叶展开**：确定周期与延拓，检查奇偶性，计算系数，最后说明连续点、跳跃点和端点的级数和。

#### 易错结论对照

| 容易误用的说法 | 正确判断 |
| --- | --- |
| 通项趋于零，所以级数收敛 | 通项趋于零只是必要条件 |
| 比值或根值极限为 $1$，所以发散 | 此时判别法失效，需要换方法 |
| 交错且通项趋于零，所以收敛 | 应检查莱布尼茨判别法的单调条件，或另用其他方法 |
| 原级数收敛，所以绝对值级数也收敛 | 条件收敛就是反例 |
| 逐点收敛，所以可以逐项积分 | 应核查一致收敛或其他可交换积分的条件 |
| 幂级数在整个收敛区间一致收敛 | 一般先保证内闭一致收敛 |
| 求导后半径不变，所以收敛域不变 | 端点敛散性可能变化 |
| 无穷次可导，所以等于泰勒级数 | 还需泰勒余项趋于零 |
| 傅里叶级数在所有点都等于函数值 | 跳跃处取周期延拓左右极限的平均值 |

### 本章自测

!!! example "自测 11"

    1. 判断 $\sum_{n=1}^{\infty}\displaystyle\frac{n}{n^3+1}$ 的敛散性。
    2. 判断 $\sum_{n=1}^{\infty}\displaystyle\frac{(-1)^{n-1}}{\sqrt n}$ 是绝对收敛、条件收敛还是发散。
    3. 求 $\sum_{n=1}^{\infty}\displaystyle\frac{x^n}{n^2}$ 的收敛域，并判断它在 $[-1,1]$ 上是否一致收敛（\*）。
    4. 求 $\sum_{n=1}^{\infty}nx^n$ 的和函数与收敛域。
    5. 在 $x=1$ 处将 $\displaystyle\frac{1}{x}$ 展开为幂级数，并给出收敛域。
    6. 将 $f(x)=x^2$（$-\pi\le x\le \pi$）作 $2\pi$ 周期延拓，求傅里叶展开，并据此求 $\sum_{n=1}^{\infty}\displaystyle\frac{1}{n^2}$。

    ??? success "答案与提示"

        1. $\displaystyle\frac{n}{n^3+1}\sim \frac{1}{n^2}$，由极限比较法收敛。
        2. 由莱布尼茨判别法收敛，但 $\sum \displaystyle\frac{1}{\sqrt n}$ 发散，因此条件收敛。
        3. 半径为 $1$，两个端点均绝对收敛，收敛域为 $[-1,1]$。由 $|\displaystyle\frac{x^n}{n^2}|\le \frac{1}{n^2}$ 及 M 判别法，在该闭区间上一致收敛。
        4. 和函数为 $\displaystyle\frac{x}{(1-x)^2}$，收敛域为 $(-1,1)$；两个端点的通项都不趋于零。
        5. $\displaystyle\frac{1}{x}=\frac{1}{1+(x-1)}=\sum_{n=0}^{\infty}(-1)^n(x-1)^n$，收敛域为 $(0,2)$。
        6. 偶函数只含余弦项。分部积分两次得 $a_0=2\pi^2/3$、$a_n=4\displaystyle\frac{(-1)^n}{n^2}$，于是

            $$
            x^2=\frac{\pi^2}{3}+4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx,
            \qquad -\pi\le x\le \pi.
            $$

            周期延拓在端点连续，代入 $x=\pi$ 得 $\sum_{n=1}^{\infty}\displaystyle\frac{1}{n^2}=\pi^2/6$。

## 第十二章 含参量积分（\*）

本章把积分看成参数的函数，核心问题是：参数变化时，积分是否连续、可导，以及能否把极限或导数移入积分号。

### §1 含参量的常义积分

#### 连续性与积分号下求导

设

$$
I(t)=\int_a^bf(x,t)\,\mathrm dx.
$$

如果 $f$ 在矩形 $[a,b]\times[c,d]$ 上连续，则 $I$ 在 $[c,d]$ 上连续，并可交换参数极限与积分。若 $f_t$ 也在该矩形上连续，则在参数区间内部

$$
I'(t)=\int_a^bf_t(x,t)\,\mathrm dx.
$$

在连续性条件下还可以对参数再积分并交换次序：

$$
\int_c^dI(t)\,\mathrm dt
=\int_a^b\left[\int_c^df(x,t)\,\mathrm dt\right]\mathrm dx.
$$

#### 上下限也含参数：莱布尼茨公式

设 $\alpha,\beta$ 可导，$f,f_t$ 在包含有关积分区域的矩形上连续，则

$$
\frac{\mathrm d}{\mathrm dt}\int_{\alpha(t)}^{\beta(t)}f(x,t)\,\mathrm dx
=f(\beta(t),t)\beta'(t)-f(\alpha(t),t)\alpha'(t)
+\int_{\alpha(t)}^{\beta(t)}f_t(x,t)\,\mathrm dx.
$$

它包含三种变化：上限移动、下限移动、被积函数本身变化。普通变限积分是 $f$ 不显含 $t$ 的特殊情形。

!!! example "例 12.1：三部分都要求导"

    对 $t>0$，设 $I(t)=\displaystyle\int_0^{t^2}e^{tx}\,\mathrm dx$，求 $I'(t)$。

    **解：** 上限贡献 $2t e^{t^3}$，下限不变，被积函数的偏导为 $xe^{tx}$，故

    $$
    I'(t)=2t e^{t^3}+\int_0^{t^2}xe^{tx}\,\mathrm dx.
    $$

    也可先算 $I(t)=\displaystyle\frac{e^{t^3}-1}{t}$，求导核对结果。

### §2 含参量的反常积分

#### 收敛与一致收敛

考虑

$$
I(t)=\int_a^{+\infty}f(x,t)\,\mathrm dx
=\lim_{A\to+\infty}\int_a^Af(x,t)\,\mathrm dx.
$$

逐点收敛允许截断位置 $A$ 随参数 $t$ 而变；在参数集合 $T$ 上一致收敛则要求

$$
\sup_{t\in T}\left|\int_A^{+\infty}f(x,t)\,\mathrm dx\right|\longrightarrow0.
$$

等价的柯西条件是：对任意 $\varepsilon>0$，存在与 $t$ 无关的 $A_0$，使 $B>A\ge A_0$ 时，对所有 $t\in T$ 都有

$$
\left|\int_A^Bf(x,t)\,\mathrm dx\right|<\varepsilon.
$$

瑕积分的情形类似，只需把无穷远尾部换成奇点附近的小区间；有多个反常端点时要分别检查。

#### M 判别法

若对所有 $t\in T$，有 $|f(x,t)|\le M(x)$，且 $\displaystyle\int_a^{+\infty}M(x)\,\mathrm dx$ 收敛，则原积分在 $T$ 上一致收敛，同时各参数下绝对收敛。控制函数必须**不依赖参数**。

!!! example "例 12.2：参数范围决定一致收敛"

    讨论 $I(t)=\displaystyle\int_0^{+\infty}e^{-tx}\,\mathrm dx$，$t>0$。

    **解：** $I(t)=\displaystyle\frac{1}{t}$。在 $t\ge \delta>0$ 上，$e^{-tx}\le e^{-\delta x}$，由 M 判别法一致收敛。

    但在整个 $(0,+\infty)$ 上，尾积分 $\displaystyle\frac{e^{-tA}}{t}$ 对每个固定 $A$ 都随 $t\to 0^+$ 无界，故不一致收敛。逐点有积分值，不能替代对参数统一的尾部控制。

#### 与连续、求导、积分交换的条件

以下给出常用的充分条件，参数先取有限闭区间 $[c,d]$。

| 要进行的运算 | 一组常用充分条件 |
| --- | --- |
| 把参数极限移入积分号 | $f$ 连续，且反常积分对参数一致收敛 |
| 在积分号下对参数求导 | $f,f_t$ 连续，原积分对每个参数收敛，$\displaystyle\int_a^\infty f_t(x,t)\,\mathrm dx$ 对参数一致收敛 |
| 交换有限参数积分与反常积分 | $f$ 连续，原反常积分在 $[c,d]$ 上一致收敛 |

在上述求导条件下，

$$
I'(t)=\int_a^{+\infty}f_t(x,t)\,\mathrm dx.
$$

局部性质可以在任意内闭参数区间上验证，例如对 $t>0$，固定 $0<c<d$ 后估计。若两个积分区间都无界，应另外验证换序条件；常用办法是证明绝对可积。对非负可测函数可使用非负积分换序，但还需另证所得值有限，才能断言反常积分收敛。

!!! warning "求导合法性要检查导数的积分"

    原反常积分一致收敛，并不单独保证可以对参数求导。积分号下求导要控制 $f_t$ 的反常积分；“把导数移进去之后算得出来”不是合法性的证明。

!!! tip "与级数的联系"

    第十一章用统一尾和控制交换运算，本章用统一尾积分控制。可把 $[a,+\infty)$ 分成小区间，将各区间积分组成函数项级数，从而理解两套定理为什么形式相似。

!!! example "例 12.3：先对参数求导，再积分回来"

    求 $J(t)=\displaystyle\int_0^1\frac{x^t-1}{\ln x}\,\mathrm dx$，$t>-1$，其中 $x=1$ 处用极限补定义。

    **解：** 先说明积分存在：在 $0$ 附近，用 $\displaystyle\frac{1}{|\ln x|}\le 1$（$x\le e^{-1}$）可由 $x^t+1$ 控制；在 $1$ 附近，商趋于 $t$。对参数求导后被积函数为 $x^t$。

    在任意内闭区间 $t\in[c,d]\subset (-1,+\infty)$ 上，$x^t\le x^c$（$0<x<1$），而 $\displaystyle\int_0^1x^c\,\mathrm dx<\infty$，可在积分号下求导：

    $$
    J'(t)=\int_0^1x^t\,\mathrm dx=\frac1{t+1}.
    $$

    因此 $J(t)=\ln(t+1)+C$，利用 $J(0)=0$ 得 $C=0$。参数求导给出的是导数，最后不要漏掉确定常数。

### §3 Γ 函数和 B 函数

#### Γ 函数：把阶乘推广到连续参数

$$
\Gamma(s)=\int_0^{+\infty}x^{s-1}e^{-x}\,\mathrm dx,\qquad s>0.
$$

在 $0$ 附近依靠 $s>0$ 保证可积，在无穷远依靠指数衰减。分部积分得

$$
\Gamma(s+1)=s\Gamma(s),\qquad
\Gamma(1)=1,\qquad \Gamma(n+1)=n!.
$$

由高斯积分得

$$
\Gamma\left(\frac12\right)=\sqrt\pi,\qquad
\Gamma\left(n+\frac12\right)=\frac{(2n)!}{4^n n!}\sqrt\pi
\quad (n=0,1,\ldots).
$$

在 $s>0$ 内可逐次对参数求导：

$$
\Gamma^{(k)}(s)=\int_0^{+\infty}x^{s-1}e^{-x}(\ln x)^k\,\mathrm dx.
$$

证明可在任意 $0<c\le s\le d$ 上，将积分分为 $(0,1]$ 与 $[1,+\infty)$，分别用可积函数控制。尺度代换还给出

$$
\int_0^{+\infty}x^{s-1}e^{-ax}\,\mathrm dx=\frac{\Gamma(s)}{a^s},\qquad a>0, s>0.
$$

#### B 函数：两端都有幂次的积分

$$
B(p,q)=\int_0^1x^{p-1}(1-x)^{q-1}\,\mathrm dx,\qquad p,q>0.
$$

两个正数条件分别保证 $0$、$1$ 附近可积。通过 $x\mapsto1-x$ 可得对称性

$$
B(p,q)=B(q,p).
$$

常用递推式为

$$
B(p+1,q)=\frac p{p+q}B(p,q),\qquad
B(p,q+1)=\frac q{p+q}B(p,q).
$$

代换 $x=\displaystyle\frac{t}{1+t}$ 或 $x=\sin^2\theta$ 得到

$$
B(p,q)=\int_0^{+\infty}\frac{t^{p-1}}{(1+t)^{p+q}}\,\mathrm dt
=2\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\,\mathrm d\theta.
$$

#### 两个函数的关系

$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)},\qquad p,q>0.
$$

一种推导是把 $\Gamma(p)\Gamma(q)$ 写成第一象限的二重积分，再令 $x=ru,y=r(1-u)$，其中 $r>0,0<u<1$，雅可比绝对值为 $r$；积分分离成 $\Gamma(p+q)B(p,q)$。

对正整数 $m,n$，有 $B(m,n)=(m-1)!\displaystyle\frac{(n-1)!}{(m+n-1)!}$。对实数 $\alpha,\beta>-1$，有

$$
\int_0^{\pi/2}\sin^\alpha x\cos^\beta x\,\mathrm dx
=\frac12 B\left(\frac{\alpha+1}2,\frac{\beta+1}2\right).
$$

!!! info "欧拉反射公式"

    教材还利用 $\Gamma(p)\Gamma(1-p)=\displaystyle\frac{\pi}{\sin(\pi p)}$（$0<p<1$）得到 $B(p,1-p)=\displaystyle\frac{\pi}{\sin(\pi p)}$。本页限于积分定义适用的实参数范围；特殊函数的更广泛延拓不在此展开。

!!! example "例 12.4：将反常积分化为 B 函数"

    求 $I=\displaystyle\int_0^{+\infty}\frac{\sqrt x}{(1+x)^3}\,\mathrm dx$。

    **解：** 与 B 函数的无穷区间形式比较，有 $p=3/2,p+q=3$，故 $q=3/2$，两者均为正。

    $$
    I=B\left(\frac32,\frac32\right)
    =\frac{\Gamma(3/2)^2}{\Gamma(3)}
    =\frac{\left(\dfrac{\sqrt\pi}{2}\right)^2}{2}=\frac\pi8.
    $$

### 本章自测（\*）

!!! example "自测 12"

    1. 对 $t>0$，求 $I(t)=\displaystyle\int_t^{2t}e^{tx}\,\mathrm dx$ 的导数，保留积分形式即可。
    2. $\displaystyle\int_1^{+\infty}x^{-t}\,\mathrm dx$ 对哪些 $t$ 收敛？它在 $[1+\delta,+\infty)$（$\delta>0$）及 $(1,+\infty)$ 上分别是否一致收敛？
    3. 求 $\displaystyle\int_0^{+\infty}x^2e^{-3x}\,\mathrm dx$ 和 $\Gamma(5/2)$。
    4. 求 $\displaystyle\int_0^1\sqrt{x(1-x)}\,\mathrm dx$。
    5. 设 $a>0$，利用 $\displaystyle\int_0^{+\infty}e^{-ax}\,\mathrm dx=\frac{1}{a}$，推导 $\displaystyle\int_0^{+\infty}x^ne^{-ax}\,\mathrm dx$（$n$ 为非负整数），并说明交换求导的依据。

    ??? success "答案与提示"

        1. $I'(t)=2e^{2t^2}-e^{t^2}+\displaystyle\int_t^{2t}xe^{tx}\,\mathrm dx$。
        2. 当且仅当 $t>1$ 收敛，积分为 $\displaystyle\frac{1}{t-1}$。在 $[1+\delta,+\infty)$ 上由 $x^{-t}\le x^{-1-\delta}$ 一致收敛；在 $(1,+\infty)$ 上，尾积分 $\displaystyle\frac{A^{1-t}}{t-1}$ 随 $t\to 1^+$ 无界，故不一致收敛。
        3. $\displaystyle\frac{\Gamma(3)}{3^3}=2/27$；$\Gamma(5/2)=\displaystyle\frac{3\sqrt\pi}{4}$。
        4. $B(3/2,3/2)=\pi/8$。
        5. 对 $a$ 求 $n$ 次导数，有 $\displaystyle\int_0^\infty x^ne^{-ax}\,\mathrm dx=\frac{n!}{a^{n+1}}$。在 $a\ge a_0>0$ 上，每次求导后的绝对值由相应的 $x^ke^{-a_0x}$ 控制，后者在 $[0,+\infty)$ 可积，故可在任意内闭参数区间逐次求导。

## 上册附录：图形、线性结构与积分工具

### 附录 I 基本初等函数与极坐标方程的图形

基本初等函数应结合定义域、奇偶性、单调性、零点与渐近线记图。例如指数与对数图像关于 $y=x$ 对称；$\arcsin$、$\arccos$ 的图像来自三角函数的单调分支；$\arctan x$ 的水平渐近线为 $y=\pm \pi/2$。

极坐标与直角坐标的关系是 $x=r\cos\theta,y=r\sin\theta$。下表设 $a>0$：

| 极坐标方程 | 图形特征 |
| --- | --- |
| $r=a$ | 以原点为圆心、半径为 $a$ 的圆 |
| $r=2a\cos\theta$ | $(x-a)^2+y^2=a^2$ |
| $r=2a\sin\theta$ | $x^2+(y-a)^2=a^2$ |
| $r=a(1+\cos\theta)$ | 关于极轴对称的心形线，尖点在原点 |
| $r=a\cos n\theta$ 或 $a\sin n\theta$ | 玫瑰线；正整数 $n$ 为奇数时 $n$ 瓣，为偶数时 $2n$ 瓣 |
| $r^2=a^2\cos2\theta$ | 双纽线，沿水平轴伸展；只在右端非负的角度范围有实点 |

作图时允许负的极径表示反向点，但计算区域面积时通常选择 $r\ge 0$ 的范围，并确认每一瓣只计算一次。角度区间长度为 $2\pi$ 不保证曲线恰好描绘一遍。

!!! example "例 A.1：先找一瓣，再计算面积"

    求玫瑰线 $r=a\cos3\theta$ 右侧一瓣的面积。

    **解：** 该瓣对应 $-\pi/6\le \theta\le \pi/6$，在此范围极径非负，且两端回到原点。因此

    $$
    A=\frac12\int_{-\pi/6}^{\pi/6}a^2\cos^2(3\theta)\,\mathrm d\theta
    =\frac{\pi a^2}{12}.
    $$

    三瓣的总面积为 $\displaystyle\frac{\pi a^2}{4}$，可由对称性直接得到。

### 附录 II 线性空间与映射

笛卡儿乘积 $A\times B$ 是所有有序对 $(a,b)$ 的集合；$\mathbb R^2,\mathbb R^3$ 分别对应平面、空间坐标。

线性空间是对加法和数乘封闭、满足相应运算规律的集合。元素不一定是几何箭头，也可以是数列、函数或多项式。一个非空子集若对加法和数乘封闭，就是子空间。

映射 $T:V\to W$ 若满足

$$
T(\alpha u+\beta v)=\alpha T(u)+\beta T(v),
$$

则称为线性映射或线性算子；若输出为标量，则称为线性泛函。线性映射必满足 $T(0)=0$。

!!! tip "用线性结构串起各章"

    在合适的函数空间上，求导 $D[f]=f'$ 是线性算子，定积分 $I[f]=\displaystyle\int_a^bf$ 是线性泛函，收敛数列的极限也是线性泛函。线性微分方程 $L[y]=f$ 的齐次解空间与“通解 = 齐次通解 + 特解”，正是这种结构的体现。

!!! example "例 A.2：有常数项为什么通常不线性"

    判断 $T[f]=f'+f$ 与 $S[f]=f'+1$ 是否为线性算子。

    **解：** $T[\alpha f+\beta g]=\alpha T[f]+\beta T[g]$，所以 $T$ 线性。$S[0]=1\ne 0$，因此 $S$ 不线性。

### 附录 III 可积函数类的证明

对 $[a,b]$ 上的有界函数，给定分割 $P$，令每个子区间上函数的上、下确界为 $M_i,m_i$，定义大和与小和（达布上、下和）

$$
U(P)=\sum_iM_i\Delta x_i,\qquad L(P)=\sum_im_i\Delta x_i.
$$

任何同一分割的黎曼和都位于 $L(P),U(P)$ 之间。增加分点时，上和不增、下和不减。上积分 $\inf_PU(P)$ 与下积分 $\sup_PL(P)$ 相等，当且仅当函数可积。

等价的可积准则是：对任意 $\varepsilon>0$，存在分割 $P$，使

$$
U(P)-L(P)=\sum_i(M_i-m_i)\Delta x_i<\varepsilon.
$$

$M_i-m_i$ 是子区间内的振幅，所以上式控制的是“振幅乘区间长度”的总和。

三类可积性证明的思路：

- 连续函数在闭区间一致连续，足够细的分割使每段振幅统一变小。
- 有界且只有有限间断点时，用总长度很小的区间包住间断点，在其余部分使用连续性。
- 单调函数的上、下和之差，可用最大网格长度乘端点函数值之差控制。

!!! info "有界仍可能不可积"

    狄利克雷函数在有理点取 $1$、无理点取 $0$。每个非退化区间同时含有理数和无理数，故在 $[0,1]$ 上任何分割都满足 $U(P)=1,L(P)=0$，不能达到可积准则。这说明第五章中“可积必有界”的逆命题不成立。

### 附录 IV 积分表

积分表用于识别结构，不能替代对定义域、参数、常数和奇点的检查。第四章已列出核心基本积分；另记几组常用组合式（均需补任意常数）：

$$
\int e^{ax}\cos bx\,\mathrm dx
=\frac{e^{ax}}{a^2+b^2}(a\cos bx+b\sin bx)+C,
$$

$$
\int e^{ax}\sin bx\,\mathrm dx
=\frac{e^{ax}}{a^2+b^2}(a\sin bx-b\cos bx)+C,
\qquad a^2+b^2>0.
$$

对 $a>0$，

$$
\int \sqrt{x^2+a^2}\,\mathrm dx
=\frac12\left[x\sqrt{x^2+a^2}+a^2\ln\left|x+\sqrt{x^2+a^2}\right|\right]+C,
$$

$$
\int \sqrt{x^2-a^2}\,\mathrm dx
=\frac12\left[x\sqrt{x^2-a^2}-a^2\ln\left|x+\sqrt{x^2-a^2}\right|\right]+C,
\qquad |x|>a.
$$

定积分中常用的递推关系为

$$
J_n=\int_0^{\pi/2}\sin^nx\,\mathrm dx
=\frac{n-1}{n}J_{n-2}\quad (n\ge 2),\qquad
J_0=\frac\pi2,\quad J_1=1.
$$

这由分部积分和 $\cos^2x=1-\sin^2x$ 推得；余弦的同次幂在该区间有相同积分值。

!!! info "复习安排与参考资料"

    本页按《微积分》（第三版）上、下册章节顺序整理，选学标记（\*）沿用教材。笔记为归纳改写，例题和自测题为另选或自拟，不沿用教材习题编号。

    备考目标为 **2027 年数学一（301）**。截至 2026-09-30，已核实高等教育出版社列有[2027 年数学考试大纲书目](https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=6aa1910be119ac97297a608f)，但尚未取得可逐条比对的考纲正文；复习重点暂以下列 2026 年考纲转载为核对基线，不据此断言 2027 年考纲没有增删。

    - 苏德矿、吴明华、童雯雯：《微积分》（第三版）（上），高等教育出版社，2021 年，ISBN 978-7-04-054816-7。以用户提供的扫描版为正文参考；上册正文第 1–358 页，附录第 359–384 页。
    - 苏德矿、吴明华、童雯雯：《微积分》（第三版）（下），高等教育出版社，2021 年。以用户提供的扫描版为正文参考，按印刷页码标注范围；[出版社书目信息与目录](https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=5fde33475710f1bcc39a1b92)。
    - [2026 年考研数学一考试大纲转载（文都，2025-10-17）](https://kaoyan.wendu.com/m/2025/1017/212673.shtml)：用于本页的备考范围对照，转载材料不替代 2027 年正式考纲。
    - [教育部教育考试院考试用书目录](https://www.neea.edu.cn/html1/category/1509/6235-1.htm)：正式考试用书信息的核验入口。
    - [MIT 18.117 讲义](https://math.mit.edu/~vwg/classnotes-spring05.pdf)：仅用于第十一章二元傅里叶展开的补充说明。
