# 微积分

## 第七章 矢量代数与空间解析几何

**教材范围：** 第 1–61 页，§1–§8。数学一应重点掌握数量积、矢量积、混合积，直线与平面的方程及位置关系，常见曲面和曲线的表示。小阶行列式同时为线性代数提供计算基础。

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

对方程组 $A\boldsymbol x=\boldsymbol b$，若系数行列式 $D\ne0$，则由克拉默法则

$$
x_i=\frac{D_i}{D},
$$

其中 $D_i$ 是把系数矩阵第 $i$ 列换为常数列后的行列式。$D\ne0$ 意味着唯一解；$D=0$ 时应继续消元，不能据此判断无解还是无穷多解。

!!! tip "行列式的几何用途"

    二阶行列式对应平面有向面积，三阶行列式对应空间有向体积。后面的矢量积、混合积，都可以借助行列式统一记忆。

### §2 矢量概念及矢量的线性运算

矢量同时具有大小和方向。记 $\boldsymbol a$ 的模为 $\lVert\boldsymbol a\rVert$，非零矢量对应的单位矢量为 $\boldsymbol a/\lVert\boldsymbol a\rVert$。

- 加法用平行四边形法则或首尾相接法则；减法看成加上相反矢量。
- 数乘 $\lambda\boldsymbol a$ 的模是 $|\lambda|\lVert\boldsymbol a\rVert$，方向由 $\lambda$ 的符号决定。
- 非零矢量平行，当且仅当其中一个是另一个的数倍。
- 三个不共面的矢量构成空间的一组基底，任意空间矢量可唯一表示为它们的线性组合。

### §3 空间直角坐标系与矢量的坐标表达式

采用右手直角坐标系。若 $A(x_1,y_1,z_1)$、$B(x_2,y_2,z_2)$，则

$$
\overrightarrow{AB}=(x_2-x_1,y_2-y_1,z_2-z_1),\qquad
|AB|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}.
$$

矢量加减与数乘按分量进行。若 $\boldsymbol a=(a_1,a_2,a_3)\ne\boldsymbol0$ 与三个正坐标轴的夹角分别为 $\alpha,\beta,\gamma$，则其**方向余弦**为

$$
(\cos\alpha,\cos\beta,\cos\gamma)
=\frac{(a_1,a_2,a_3)}{\sqrt{a_1^2+a_2^2+a_3^2}},\qquad
\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1.
$$

### §4 两矢量的数量积与矢量积

#### 数量积：投影与垂直

$$
\boldsymbol a\cdot\boldsymbol b
=\lVert\boldsymbol a\rVert\lVert\boldsymbol b\rVert\cos\theta
=a_1b_1+a_2b_2+a_3b_3.
$$

两非零矢量垂直等价于数量积为零。$\boldsymbol a$ 在非零矢量 $\boldsymbol b$ 方向上的**标量投影**与**矢量投影**分别为

$$
\operatorname{comp}_{\boldsymbol b}\boldsymbol a
=\frac{\boldsymbol a\cdot\boldsymbol b}{\lVert\boldsymbol b\rVert},\qquad
\operatorname{proj}_{\boldsymbol b}\boldsymbol a
=\frac{\boldsymbol a\cdot\boldsymbol b}{\lVert\boldsymbol b\rVert^2}\boldsymbol b.
$$

#### 矢量积：法向量与面积

$$
\boldsymbol a\times\boldsymbol b
=\begin{vmatrix}\boldsymbol i&\boldsymbol j&\boldsymbol k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix},\qquad
\lVert\boldsymbol a\times\boldsymbol b\rVert
=\lVert\boldsymbol a\rVert\lVert\boldsymbol b\rVert\sin\theta.
$$

方向按从 $\boldsymbol a$ 转向 $\boldsymbol b$ 的右手法则确定；结果垂直于两矢量。其模是两矢量所张平行四边形的面积，三角形面积再除以 $2$。

$$
\boldsymbol a\times\boldsymbol b=-\boldsymbol b\times\boldsymbol a.
$$

两非零矢量平行等价于矢量积为零。

!!! warning "两种乘积不能混用"

    数量积输出一个数，矢量积输出一个矢量。矢量积不满足交换律，也不满足一般的结合律；计算三重乘积时必须保留括号。

### §5 矢量的混合积与二重矢积

**混合积**为

$$
[\boldsymbol a,\boldsymbol b,\boldsymbol c]
=\boldsymbol a\cdot(\boldsymbol b\times\boldsymbol c)
=\begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix}.
$$

它的绝对值是平行六面体的体积，除以 $6$ 是共顶点三棱锥的体积。三矢量共面，当且仅当混合积为零。循环置换不变，交换任意两个矢量变号。

**二重矢积**可化成线性组合：

$$
\boldsymbol a\times(\boldsymbol b\times\boldsymbol c)
=(\boldsymbol a\cdot\boldsymbol c)\boldsymbol b
-(\boldsymbol a\cdot\boldsymbol b)\boldsymbol c.
$$

!!! example "例 7.1：法向量、面积与体积"

    设 $\boldsymbol a=(1,1,0)$、$\boldsymbol b=(0,1,1)$、$\boldsymbol c=(1,0,1)$。求前两矢量张成平面的一个法向量，以及三矢量张成的平行六面体体积。

    **解：** $\boldsymbol a\times\boldsymbol b=(1,-1,1)$ 是所求法向量。平行四边形面积为 $\sqrt3$，体积为

    $$
    |(\boldsymbol a\times\boldsymbol b)\cdot\boldsymbol c|=2.
    $$

### §6 平面与直线方程

#### 平面方程

过点 $\boldsymbol r_0=(x_0,y_0,z_0)$、以 $\boldsymbol n=(A,B,C)\ne\boldsymbol0$ 为法向量的平面为

$$
\boldsymbol n\cdot(\boldsymbol r-\boldsymbol r_0)=0
\quad\Longleftrightarrow\quad
A(x-x_0)+B(y-y_0)+C(z-z_0)=0.
$$

一般式为 $Ax+By+Cz+D=0$。若三个非零截距是 $a,b,c$，截距式为 $x/a+y/b+z/c=1$。过三个不共线点的平面，可先对两条连线矢量作矢量积求法向量。

#### 直线方程

过 $\boldsymbol r_0$、方向矢量为 $\boldsymbol s=(l,m,n)\ne\boldsymbol0$ 的直线为

$$
\boldsymbol r=\boldsymbol r_0+t\boldsymbol s,
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
| 两直线，方向为 $\boldsymbol s_1,\boldsymbol s_2$ | $\cos\theta=\lvert\boldsymbol s_1\cdot\boldsymbol s_2\rvert/(\lVert\boldsymbol s_1\rVert\lVert\boldsymbol s_2\rVert)$ | 方向成比例则平行或重合；数量积为零则方向正交 |
| 两平面，法向量为 $\boldsymbol n_1,\boldsymbol n_2$ | $\cos\theta=\lvert\boldsymbol n_1\cdot\boldsymbol n_2\rvert/(\lVert\boldsymbol n_1\rVert\lVert\boldsymbol n_2\rVert)$ | 法向量平行则平面平行或重合；法向量垂直则平面垂直 |
| 直线与平面 | $\sin\theta=\lvert\boldsymbol s\cdot\boldsymbol n\rvert/(\lVert\boldsymbol s\rVert\lVert\boldsymbol n\rVert)$ | $\boldsymbol s\cdot\boldsymbol n=0$ 则直线平行于平面或在平面内；二者平行则线面垂直 |

两条方向不平行的空间直线还可能异面。设其上分别取点 $P_1,P_2$，则共面条件为

$$
\overrightarrow{P_1P_2}\cdot(\boldsymbol s_1\times\boldsymbol s_2)=0.
$$

共面且不平行时才相交。线面位置关系可把直线参数方程代入平面方程，观察参数方程是唯一解、无解还是恒成立。

#### 距离与平面束

点 $P(x_0,y_0,z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离为

$$
d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}.
$$

点 $P$ 到直线 $\boldsymbol r=\boldsymbol r_0+t\boldsymbol s$ 的距离为

$$
d=\frac{\lVert(\boldsymbol r_P-\boldsymbol r_0)\times\boldsymbol s\rVert}{\lVert\boldsymbol s\rVert}.
$$

过两个相交平面 $F_1=0,F_2=0$ 的交线的平面束为

$$
\lambda F_1+\mu F_2=0,\qquad (\lambda,\mu)\ne(0,0).
$$

写成 $F_1+kF_2=0$ 会漏掉 $F_2=0$，使用单参数形式时须单独检查。

!!! example "例 7.2：由三个点确定平面"

    求过 $A(1,0,0)$、$B(0,2,0)$、$C(0,0,3)$ 的平面，以及原点到该平面的距离。

    **解：** 用截距式得 $x+y/2+z/3=1$，即 $6x+3y+2z-6=0$。法向量为 $(6,3,2)$，故距离为 $6/7$。也可先求 $\overrightarrow{AB}\times\overrightarrow{AC}=(6,3,2)$。

### §7 曲面方程与空间曲线方程

曲面常写成 $F(x,y,z)=0$，空间曲线常写成两曲面的交线

$$
\begin{cases}F(x,y,z)=0,\\G(x,y,z)=0,\end{cases}
$$

或参数方程 $\boldsymbol r(t)=(x(t),y(t),z(t))$。

- **柱面：** 方程缺少某个坐标，就沿该坐标轴方向延伸。例如 $x^2+y^2=R^2$ 在空间中是圆柱面。
- **旋转曲面：** 把母线上点到旋转轴的距离改写成空间径向距离。例如 $z=\rho^2$ 绕 $z$ 轴旋转得到 $z=x^2+y^2$。
- **投影：** 将交线向坐标面投影，先消去被投影方向的变量，再核查实数解存在的范围。投影到 $xOy$ 面时，作为空间集合还应写 $z=0$。

!!! warning "消元结果还要检查范围"

    消元可能扩大集合；平方可能引入额外分支。绘图和设置积分限时，应同时保留原方程中的非负条件、参数区间和分支限制。

### §8 二次曲面

下表中 $a,b,c>0$。识图的基本办法是分别令 $x,y,z$ 为常数，观察截痕。

| 标准方程 | 名称与形状 |
| --- | --- |
| $x^2/a^2+y^2/b^2+z^2/c^2=1$ | 椭球面；三个方向均有界 |
| $x^2/a^2+y^2/b^2-z^2/c^2=1$ | 单叶双曲面；负号对应其轴方向 |
| $z^2/c^2-x^2/a^2-y^2/b^2=1$ | 双叶双曲面；正号对应其轴方向 |
| $x^2/a^2+y^2/b^2-z^2/c^2=0$ | 椭圆锥面；包含上下两叶 |
| $z=x^2/a^2+y^2/b^2$ | 椭圆抛物面；开口朝 $z$ 正向 |
| $z=x^2/a^2-y^2/b^2$ | 双曲抛物面；鞍形 |

平移通过 $x-x_0,y-y_0,z-z_0$ 识别；出现交叉项时不能直接套标准式，需要进一步配方或变换坐标。

!!! tip "为后面的积分作准备"

    识别曲面时同时问：投影是什么？沿哪个方向切片最简单？是否适合柱坐标或球坐标？这些信息比只记曲面名称更有助于设置积分限。

### 本章自测

!!! example "自测 7：从矢量计算到空间区域"

    1. 设 $\boldsymbol a=(1,2,2)$、$\boldsymbol b=(2,1,-2)$，求数量积、夹角和 $\boldsymbol a$ 在 $\boldsymbol b$ 方向上的标量投影。
    2. 求过 $(1,0,1)$ 且垂直于平面 $x-2y+2z=3$ 的直线。
    3. 求过平面 $x+y+z=1$ 与 $x-y=0$ 的交线、且过原点的平面。
    4. 求曲线 $x^2+y^2+z^2=2$、$z=x$ 在 $xOy$ 面上的投影，并给出原曲线的一组参数方程。

    ??? example "答案与提示"

        1. 数量积为 $0$，夹角为 $\pi/2$，标量投影为 $0$。
        2. $(x,y,z)=(1,0,1)+t(1,-2,2)$，$t\in\mathbb R$。
        3. 设 $\lambda(x+y+z-1)+\mu(x-y)=0$，代入原点得 $\lambda=0$，故答案是 $x-y=0$。此题正好说明单参数平面束可能漏解。
        4. 投影为 $2x^2+y^2=2,z=0$。原曲线可取 $x=\cos t,y=\sqrt2\sin t,z=\cos t$，$0\le t\le2\pi$。

## 第八章 多元函数微分学

**教材范围：** 第 62–130 页，§1–§7。数学一复习重点是极限与连续、偏导数与全微分、复合与隐函数求导、方向导数和梯度、极值与几何应用。二元泰勒公式为极值判别和局部近似提供依据。

### §1 多元函数的极限与连续性

#### 函数与平面点集

二元函数 $z=f(x,y)$ 的定义域是平面点集，图形通常是空间曲面。三元函数 $u=f(x,y,z)$ 的定义域是空间点集，可用等值面描述。

点 $P_0$ 的 $\delta$ 邻域是满足 $\lVert P-P_0\rVert<\delta$ 的点集。内点拥有完全包含在集合中的邻域；边界点的每个邻域都同时接触集合与补集。开集不含自己的边界点，闭集包含全部边界点；闭有界集上连续函数能取得最大、最小值。

#### 二重极限

$$
\lim_{(x,y)\to(x_0,y_0)}f(x,y)=A
$$

要求：对任意 $\varepsilon>0$，存在 $\delta>0$，使定义域内所有满足

$$
0<\sqrt{(x-x_0)^2+(y-y_0)^2}<\delta
$$

的点都满足 $|f(x,y)-A|<\varepsilon$。

**任意路径趋近都必须得到同一个值。** 否定极限只需找到两条路径给出不同结果；证明存在则通常用估计、夹逼或连续函数运算。

!!! warning "直线检查不等于所有路径检查"

    沿全部直线的极限相同，仍不能保证二重极限存在。两次累次极限也不能替代二重极限。使用极坐标时，必须得到对角度一致的估计，不能只固定角度令半径趋于零。

!!! example "例 8.1：沿直线都趋于零，极限仍不存在"

    判断 $f(x,y)=x^2y/(x^4+y^2)$ 在原点的极限。

    **解：** 沿 $y=kx$，$k\ne0$ 时函数为 $kx/(x^2+k^2)\to0$；沿 $y=0$ 或 $x=0$ 也为零。但沿 $y=x^2$，函数恒为 $1/2$，所以二重极限不存在。

#### 连续性

$f$ 在 $P_0$ 连续，是指 $P_0$ 处有定义且 $\lim_{P\to P_0}f(P)=f(P_0)$。初等多元函数在其定义域内的适当点连续；遇到分段定义点，应回到极限检验。

在原点附近，若能估计

$$
|f(x,y)-A|\le C(x^2+y^2)^{\alpha/2},\qquad \alpha>0,
$$

便有极限 $A$。这类以距离统一控制的估计，比枚举路径更有证明力。

### §2 偏导数与全微分

#### 偏导数与高阶偏导数

$$
f_x(x_0,y_0)=\lim_{h\to0}\frac{f(x_0+h,y_0)-f(x_0,y_0)}h,
\qquad
f_y(x_0,y_0)=\lim_{k\to0}\frac{f(x_0,y_0+k)-f(x_0,y_0)}k.
$$

求偏导时其余自变量视为常量；在特殊分段点通常必须用定义。二阶偏导包括 $f_{xx},f_{xy},f_{yx},f_{yy}$。本页 $f_{xy}=\partial_y(\partial_x f)$；若混合偏导在点的邻域内连续，则 $f_{xy}=f_{yx}$。

#### 全微分与可微性

设 $\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}$。若

$$
\Delta z=A\Delta x+B\Delta y+o(\rho),\qquad \rho\to0,
$$

则称 $f$ 在该点可微，且 $A=f_x,B=f_y$，全微分为

$$
\mathrm dz=f_x\,\mathrm dx+f_y\,\mathrm dy.
$$

它给出最佳的一阶线性近似

$$
f(x_0+\Delta x,y_0+\Delta y)
\approx f(x_0,y_0)+f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y.
$$

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

!!! example "例 8.2：连续且偏导存在，为什么还不够"

    设 $f(x,y)=xy/\sqrt{x^2+y^2}$（$(x,y)\ne(0,0)$），$f(0,0)=0$。判断它在原点是否可微。

    **解：** 由 $|xy|\le(x^2+y^2)/2$，有 $|f(x,y)|\le\sqrt{x^2+y^2}/2\to0$，故连续。两坐标轴上函数恒为零，故 $f_x(0,0)=f_y(0,0)=0$。

    可微性要求 $f(x,y)/\sqrt{x^2+y^2}\to0$，但沿 $y=x\ne0$，这个商恒为 $1/2$，所以不可微。

### §3 复合函数微分法

#### 链式法则

若 $z=f(u,v)$，$u=u(x,y),v=v(x,y)$，且有关函数可微，则

$$
z_x=f_u u_x+f_v v_x,\qquad
z_y=f_u u_y+f_v v_y.
$$

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

!!! example "例 8.3：复合函数的二阶导数"

    设 $z=f(x+y,x-y)$，$f$ 二阶连续可微，求 $z_{xx}+z_{yy}$。

    **解：** 记 $u=x+y,v=x-y$。有

    $$
    z_{xx}=f_{uu}+2f_{uv}+f_{vv},\qquad
    z_{yy}=f_{uu}-2f_{uv}+f_{vv},
    $$

    故 $z_{xx}+z_{yy}=2(f_{uu}+f_{vv})$，右端各偏导均在 $(u,v)=(x+y,x-y)$ 处取值。

### §4 隐函数的偏导数

#### 一个方程确定一个函数

若 $F(x,y,z)=0$，$F$ 在点附近一阶连续可微，且该点 $F_z\ne0$，则局部可将 $z$ 视为 $x,y$ 的函数，且

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

#### 方程组确定隐函数组

设 $F(x,y,u,v)=0,G(x,y,u,v)=0$。若二者一阶连续可微且

$$
J=\frac{\partial(F,G)}{\partial(u,v)}
=\begin{vmatrix}F_u&F_v\\G_u&G_v\end{vmatrix}\ne0,
$$

则局部可确定 $u(x,y),v(x,y)$。对 $x$ 求导后解线性方程组

$$
\begin{pmatrix}F_u&F_v\\G_u&G_v\end{pmatrix}
\begin{pmatrix}u_x\\v_x\end{pmatrix}
=-\begin{pmatrix}F_x\\G_x\end{pmatrix}.
$$

对 $y$ 求导同理。通常边列方程边消元，比记忆四个商式更可靠。

#### 反函数组的偏导数（\*）

教材第 96 页起。设 $u=u(x,y),v=v(x,y)$ 一阶连续可微，且 $J=\partial(u,v)/\partial(x,y)\ne0$，则局部反函数组满足

$$
\begin{pmatrix}x_u&x_v\\y_u&y_v\end{pmatrix}
=\begin{pmatrix}u_x&u_y\\v_x&v_y\end{pmatrix}^{-1}
=\frac1J\begin{pmatrix}v_y&-u_y\\-v_x&u_x\end{pmatrix}.
$$

!!! info "与积分换元的联系"

    雅可比矩阵描述坐标变换的局部线性作用，其行列式描述有向面积或体积的伸缩。第九章换元时取其绝对值。

### §5 场的方向导数与梯度

数量场给空间每个点一个数值，例如温度；矢量场给每点一个矢量，例如速度。二元或三元函数沿单位矢量 $\boldsymbol e$ 的方向导数定义为

$$
D_{\boldsymbol e}f(P)=\lim_{t\to0^+}\frac{f(P+t\boldsymbol e)-f(P)}t.
$$

这里采用教材沿射线、$t\to0^+$ 的约定。若 $f$ 在该点可微，则

$$
D_{\boldsymbol e}f=\nabla f\cdot\boldsymbol e,\qquad
\nabla f=(f_x,f_y,f_z).
$$

二元情形省去第三分量。当 $\nabla f\ne\boldsymbol0$ 时，梯度方向增长最快，最大方向导数是 $\lVert\nabla f\rVert$；反梯度方向下降最快，最小值为 $-\lVert\nabla f\rVert$。梯度垂直于光滑等值面。

!!! warning "方向必须单位化，公式需要可微性"

    给出方向矢量 $(a,b,c)$ 时，应先除以 $\sqrt{a^2+b^2+c^2}$。只知道偏导存在，不能直接使用梯度公式；各方向导数都存在也不保证可微。

### §6 多元函数的极值及应用

#### 二元泰勒公式

设 $f$ 在 $(a,b)$ 附近二阶连续可微，$h=x-a,k=y-b$，则

$$
f(a+h,b+k)=f(a,b)+f_xh+f_yk
+\frac12(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2)+o(h^2+k^2),
$$

右侧偏导均在 $(a,b)$ 取值。更高阶展开可沿线段设 $g(t)=f(a+th,b+tk)$，使用一元泰勒公式推导。

#### 无约束极值

内点处若可微且取得极值，必要条件为 $f_x=f_y=0$；这样的点称为驻点。不可微点也可能是极值点，应另查。

在驻点处令 $A=f_{xx},B=f_{xy},C=f_{yy}$，$\Delta=AC-B^2$。若二阶偏导在附近连续，则

| 条件 | 结论 |
| --- | --- |
| $\Delta>0,A>0$ | 严格极小值 |
| $\Delta>0,A<0$ | 严格极大值 |
| $\Delta<0$ | 鞍点，不是极值点 |
| $\Delta=0$ | 判别失效，需用定义、高阶项或路径分析 |

闭有界区域上求连续函数最值，要比较**内部驻点、不可微点、边界各段及边界端点**。局部极值不自动是全局最值。

#### 条件极值与拉格朗日乘数法

在约束 $g(x,y)=0$ 下，若约束正则，即 $\nabla g\ne\boldsymbol0$，可构造

$$
\mathcal L=f-\lambda g,
\qquad f_x=\lambda g_x,\quad f_y=\lambda g_y,\quad g=0.
$$

多个独立等式约束时写 $\nabla f=\sum_j\lambda_j\nabla g_j$。解方程只能得到候选点，仍需比较或判别；约束梯度退化处要另外检查。

!!! example "例 8.4：圆周上的条件最值"

    求 $f(x,y)=xy$ 在 $x^2+y^2=1$ 上的最大、最小值。

    **解：** 方程为 $y=2\lambda x,x=2\lambda y,x^2+y^2=1$，得到 $y=x$ 或 $y=-x$。于是最大值为 $1/2$，在 $(1/\sqrt2,1/\sqrt2)$ 和 $(-1/\sqrt2,-1/\sqrt2)$ 取得；最小值为 $-1/2$，在另两个异号点取得。

    也可由 $2|xy|\le x^2+y^2=1$ 直接证明结果是全局最值。

### §7 偏导数在几何上的应用

#### 矢量值函数与曲线的切线、法平面

对 $\boldsymbol r(t)=(x(t),y(t),z(t))$，逐分量求导。若 $\boldsymbol r'(t_0)\ne\boldsymbol0$，它是曲线在 $P=\boldsymbol r(t_0)$ 的切向量。

$$
\text{切线：}\quad \boldsymbol r=\boldsymbol r(t_0)+s\boldsymbol r'(t_0),
$$

$$
\text{法平面：}\quad \boldsymbol r'(t_0)\cdot(\boldsymbol r-\boldsymbol r(t_0))=0.
$$

对交线 $F=0,G=0$，若 $\nabla F\times\nabla G\ne\boldsymbol0$，可取此矢量为切向量。

#### 曲面的切平面与法线

对 $F(x,y,z)=0$，若 $F$ 一阶连续可微且 $\nabla F(P)\ne\boldsymbol0$，则

$$
\text{切平面：}\quad \nabla F(P)\cdot(\boldsymbol r-\boldsymbol r_P)=0,
$$

$$
\text{法线：}\quad \boldsymbol r=\boldsymbol r_P+t\nabla F(P).
$$

对显式曲面 $z=f(x,y)$，切平面为

$$
z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0),
$$

法向量可取 $(f_x,f_y,-1)$。

!!! tip "切线和切平面的联系"

    曲线用导数得到切向量，隐式曲面用梯度得到法向量；两个曲面的交线，再对两个法向量作矢量积。最后统一代入第七章的点向式、点法式。

### 本章自测

!!! example "自测 8：概念、求导、几何与最值"

    1. 判断 $x^2y/(x^2+y^2)$ 在原点的极限。
    2. 设 $z=e^{xy}$，求 $\mathrm dz$ 和 $z_{xy}$。
    3. 在球面 $x^2+y^2+z^2=9$ 的上半部，将 $z$ 视为 $x,y$ 的函数，求 $(1,2,2)$ 处的 $z_x,z_{xx}$。
    4. 求 $f=x^2+y^2+z^2$ 在 $(1,0,1)$ 沿 $(1,2,2)$ 方向的方向导数，并求等值面在该点的切平面。
    5. 求 $f=x^2+y^2-2x-4y$ 在圆盘 $x^2+y^2\le1$ 上的最大、最小值。

    ??? example "答案与提示"

        1. 绝对值不超过 $|y|$，故极限为 $0$。
        2. $\mathrm dz=e^{xy}(y\,\mathrm dx+x\,\mathrm dy)$，$z_{xy}=e^{xy}(1+xy)$。
        3. $z_x=-x/z=-1/2$，$z_{xx}=-1/z-x^2/z^3=-5/8$。
        4. 单位方向为 $(1,2,2)/3$，方向导数为 $2$。切平面为 $x+z=2$。
        5. 内部唯一驻点 $(1,2)$ 不在圆盘内，极值只能在边界。边界上 $f=1-2x-4y$，最大值为 $1+2\sqrt5$，点为 $(-1/\sqrt5,-2/\sqrt5)$；最小值为 $1-2\sqrt5$，点为 $(1/\sqrt5,2/\sqrt5)$。

## 第九章 多元函数积分学

**教材范围：** 第 131–191 页，§1–§5。本章把二重积分、三重积分、第一类曲线积分和第一类曲面积分统一为点函数积分。数学一应重点掌握积分区域、坐标选择、积分限和几何、物理应用。

### §1 二重积分的概念

将平面区域 $D$ 分割成小块，在第 $i$ 块任取点 $(\xi_i,\eta_i)$，面积记为 $\Delta\sigma_i$。若小块最大直径趋于零时，和式有与分割、取点无关的极限，便定义

$$
\iint_D f(x,y)\,\mathrm d\sigma
=\lim\sum_i f(\xi_i,\eta_i)\Delta\sigma_i.
$$

连续函数在常见有界闭区域上可积。若 $f\ge0$，积分可表示曲面下的体积；一般函数则产生带符号的累积量。

主要性质包括线性、区域可加性、保序性及估值：若 $m\le f\le M$，则

$$
m\,\operatorname{Area}(D)\le\iint_Df\,\mathrm d\sigma
\le M\,\operatorname{Area}(D),\qquad
\left|\iint_Df\,\mathrm d\sigma\right|\le\iint_D|f|\,\mathrm d\sigma.
$$

若 $D$ 是有界闭连通区域，$f$ 连续，则存在区域内某点使积分等于该点函数值乘面积，这是二重积分中值定理。

### §2 二重积分的计算

#### 直角坐标：先确定一条截线

若区域可写成

$$
D=\{(x,y):a\le x\le b,\ \varphi_1(x)\le y\le\varphi_2(x)\},
$$

则

$$
\iint_Df(x,y)\,\mathrm dx\,\mathrm dy
=\int_a^b\left[\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,\mathrm dy\right]\mathrm dx.
$$

内层沿竖直截线积分，外层让截线扫过区域。若按水平截线描述更简单，就写成先 $x$ 后 $y$；边界函数在中途变化时应分块。

**交换次序的步骤：** 还原区域不等式 → 画边界和交点 → 沿新内层方向切片 → 确定新上下限。不能只交换两个微分符号。

!!! example "例 9.1：交换次序消去难积分"

    计算 $I=\int_0^1\mathrm dx\int_x^1e^{y^2}\,\mathrm dy$。

    **解：** 区域为 $0\le x\le y\le1$。交换次序后

    $$
    I=\int_0^1\mathrm dy\int_0^ye^{y^2}\,\mathrm dx
    =\int_0^1ye^{y^2}\,\mathrm dy=\frac{e-1}{2}.
    $$

#### 极坐标

令 $x=r\cos\theta,y=r\sin\theta$，$r\ge0$，则

$$
\mathrm d\sigma=r\,\mathrm dr\,\mathrm d\theta,
$$

$$
\iint_Df(x,y)\,\mathrm d\sigma
=\int_\alpha^\beta\int_{r_1(\theta)}^{r_2(\theta)}
f(r\cos\theta,r\sin\theta)r\,\mathrm dr\,\mathrm d\theta.
$$

圆、扇形、圆环以及被积函数含 $x^2+y^2$ 的情形，常适合极坐标。区域不一定以原点为圆心，例如 $x^2+y^2\le2ax$（$a>0$）可写成 $-\pi/2\le\theta\le\pi/2,0\le r\le2a\cos\theta$。

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
=\lim\sum_i f(\xi_i,\eta_i,\zeta_i)\Delta V_i.
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

| 坐标 | 变换 | 体积元 | 常用场景 |
| --- | --- | --- | --- |
| 柱坐标 | $x=r\cos\theta,y=r\sin\theta,z=z$ | $r\,\mathrm dr\,\mathrm d\theta\,\mathrm dz$ | 柱体、绕轴对称、抛物面与锥面围成的区域 |
| 球坐标 | $x=\rho\sin\varphi\cos\theta,y=\rho\sin\varphi\sin\theta,z=\rho\cos\varphi$ | $\rho^2\sin\varphi\,\mathrm d\rho\,\mathrm d\varphi\,\mathrm d\theta$ | 球、球壳、以原点为顶点的圆锥截球体 |

本页球坐标中，$\rho\ge0$，$\varphi\in[0,\pi]$ 是与 $z$ 正轴的夹角，$\theta$ 是方位角。整球可取 $0\le\theta\le2\pi$；上半球取 $0\le\varphi\le\pi/2$。

一般三维换元中，体积元为三阶雅可比行列式的绝对值乘新坐标体积元。例如

$$
x=a\rho\sin\varphi\cos\theta,\quad
y=b\rho\sin\varphi\sin\theta,\quad z=c\rho\cos\varphi
$$

把椭球变为 $0\le\rho\le1$，体积元为 $abc\rho^2\sin\varphi\,\mathrm d\rho\,\mathrm d\varphi\,\mathrm d\theta$（$a,b,c>0$）。

!!! info "重积分换元公式的证明（\*）"

    教材第 167 页起将证明列为选学。核心思想是：光滑坐标变换在很小区域上近似一个线性变换，雅可比行列式的绝对值给出体积伸缩率，再对分割求和取极限。复习计算时应掌握公式的条件、区域对应关系及常用坐标的因子。

!!! example "例 9.2：圆锥区域的体积与质心"

    均匀立体 $\Omega$ 由 $0\le z\le1$、$x^2+y^2\le z^2$ 确定，求体积和质心。

    **解：** 柱坐标中 $0\le\theta\le2\pi,0\le z\le1,0\le r\le z$，故

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

#### 对弧长的曲线积分

第一类曲线积分定义为弧长小段上的标量累积：

$$
\int_L f\,\mathrm ds=\lim\sum_i f(P_i)\Delta s_i.
$$

若曲线由 $\boldsymbol r(t)=(x(t),y(t),z(t))$ 参数化，$a\le t\le b$，则

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
\iint_S f\,\mathrm dS=\lim\sum_i f(P_i)\Delta S_i.
$$

若 $S$ 是 $z=z(x,y)$，投影为 $D$，则

$$
\iint_Sf(x,y,z)\,\mathrm dS
=\iint_Df(x,y,z(x,y))\sqrt{1+z_x^2+z_y^2}\,\mathrm dx\,\mathrm dy.
$$

若用参数曲面 $\boldsymbol r(u,v)$，则

$$
\mathrm dS=\lVert\boldsymbol r_u\times\boldsymbol r_v\rVert\,\mathrm du\,\mathrm dv.
$$

第一类曲面积分与曲面选哪一侧无关；无法表示成单张函数图像的曲面需要分片。

!!! example "例 9.3：曲面积分中的面积因子"

    求单位上半球面 $S:x^2+y^2+z^2=1,z\ge0$ 上的 $\iint_Sz\,\mathrm dS$。

    **解：** 用球面参数 $\boldsymbol r(\varphi,\theta)=(\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi)$，有 $\mathrm dS=\sin\varphi\,\mathrm d\varphi\,\mathrm d\theta$，故

    $$
    \iint_Sz\,\mathrm dS
    =\int_0^{2\pi}\int_0^{\pi/2}\cos\varphi\sin\varphi\,\mathrm d\varphi\,\mathrm d\theta=\pi.
    $$

    也可投影到单位圆盘：$z=\sqrt{1-x^2-y^2}$ 时 $\sqrt{1+z_x^2+z_y^2}=1/z$，内部被积函数恰好化为 $1$。赤道处用极限理解。

### §5 点函数积分的概念、性质及应用

#### 统一看四种积分

用 $\mathrm d\mu$ 统一记 $\mathrm ds,\mathrm d\sigma,\mathrm dS,\mathrm dV$，它们分别对应曲线长度、平面面积、曲面面积和空间体积。于是 $\int_Ef\,\mathrm d\mu$ 表示标量 $f$ 在几何对象 $E$ 上的累积。

| 几何或物理量 | 统一公式 |
| --- | --- |
| 长度、面积或体积 | $\int_E1\,\mathrm d\mu$ |
| 密度为 $\rho$ 的质量 | $M=\int_E\rho\,\mathrm d\mu$ |
| 质心 | $\bar x=M^{-1}\int_Ex\rho\,\mathrm d\mu$；$\bar y,\bar z$ 同理 |
| 对 $z$ 轴的转动惯量 | $I_z=\int_E(x^2+y^2)\rho\,\mathrm d\mu$ |
| 对某轴的一般转动惯量 | $I=\int_Ed(P,\text{轴})^2\rho(P)\,\mathrm d\mu$ |
| 点 $P_0$ 处质量 $m$ 受到的引力 | $\boldsymbol F=Gm\int_E\rho(P)(\boldsymbol r_P-\boldsymbol r_{P_0})/\lVert\boldsymbol r_P-\boldsymbol r_{P_0}\rVert^3\,\mathrm d\mu$ |

质心要求 $M>0$。引力公式中方向从受力点指向质量元；这里先考虑 $P_0$ 不在物体上，若存在奇点需另查反常积分的收敛性。平面薄片对原点的极转动惯量满足 $I_O=I_x+I_y$。

#### 对称性

若区域与相应长度、面积或体积元在反射 $x\mapsto-x$ 下保持不变，则被积函数对 $x$ 为奇函数时积分为零，为偶函数时可化为半区域积分的两倍。变量交换对称也可用于把若干积分平均。

例如在球面或球体的对称区域上，$\int x^2\,\mathrm d\mu=\int y^2\,\mathrm d\mu=\int z^2\,\mathrm d\mu$，可用三者之和简化。**区域、被积函数、积分元**都应纳入对称性判断；质心位于对称轴还要求密度也具有相同对称性。

!!! tip "积分方法的选择顺序"

    先辨认积分对象及积分元，再用对称性简化，然后选坐标或参数，最后设置积分限。重积分优先看区域，曲线与曲面积分优先看参数化和投影是否简单。

### 本章自测

!!! example "自测 9：从设置积分限到物理应用"

    1. 求单位圆盘 $D$ 上的 $\iint_D(x^2+y^2)\,\mathrm d\sigma$。
    2. 将 $\int_0^1\mathrm dx\int_{x^2}^{x}f(x,y)\,\mathrm dy$ 交换积分次序。
    3. 求半径为 $R$ 的球体上 $\iiint_\Omega(x^2+y^2+z^2)\,\mathrm dV$。
    4. 求单位圆周上 $\int_Lx^2\,\mathrm ds$，并说明反向行走是否改变结果。
    5. 均匀三角形薄片由 $x\ge0,y\ge0,x+y\le1$ 确定，面密度为 $1$，求质量、质心和对原点的极转动惯量。

    ??? example "答案与提示"

        1. $\int_0^{2\pi}\int_0^1r^3\,\mathrm dr\,\mathrm d\theta=\pi/2$。
        2. $\int_0^1\mathrm dy\int_y^{\sqrt y}f(x,y)\,\mathrm dx$。
        3. 球坐标给出 $4\pi\int_0^R\rho^4\,\mathrm d\rho=4\pi R^5/5$。
        4. 对称性使积分为圆周长的一半，即 $\pi$；反向不改变第一类曲线积分。
        5. $M=1/2$，$\int_Dx\,\mathrm d\sigma=\int_Dy\,\mathrm d\sigma=1/6$，故质心为 $(1/3,1/3)$。$I_O=2\int_0^1x^2(1-x)\,\mathrm dx=1/6$。

## 第十章 第二类曲线积分与第二类曲面积分

**教材范围：** 第 192–235 页，§1–§3。数学一重点是两类积分的联系、计算与方向，格林、高斯、斯托克斯公式，路径无关性、原函数、散度和旋度。教材将势量场和向量微分算子的进一步讨论列为选学，其中涉及的梯度、散度、旋度和路径无关仍需掌握。

### §1 第二类曲线积分

#### 定义、方向及参数计算

在有向曲线 $L$ 上，第二类曲线积分为

$$
\int_LP\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz
=\int_L\boldsymbol F\cdot\mathrm d\boldsymbol r,
\qquad \boldsymbol F=(P,Q,R).
$$

它可以表示力沿路径所做的功。若 $\boldsymbol r(t)$ 在 $a\le t\le b$ 上按指定方向走过 $L$，则

$$
\int_L\boldsymbol F\cdot\mathrm d\boldsymbol r
=\int_a^b\boldsymbol F(\boldsymbol r(t))\cdot\boldsymbol r'(t)\,\mathrm dt.
$$

**反向变号。** 参数起点、终点必须与曲线方向一致；若方向相反，可交换积分限或整体添负号。

#### 两类曲线积分的联系

若单位切向量为 $\boldsymbol\tau=(\cos\alpha,\cos\beta,\cos\gamma)$，则

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

#### 格林公式

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

!!! example "例 10.1：用格林公式计算环流"

    设 $L$ 为单位圆周，方向逆时针，求 $\oint_L(-y\,\mathrm dx+x\,\mathrm dy)$。

    **解：** $Q_x-P_y=1-(-1)=2$，故积分为 $2\operatorname{Area}(D)=2\pi$。若圆周改为顺时针，结果为 $-2\pi$。

#### 积分与路径无关

在开连通区域内，连续的 $P,Q$ 满足以下三个条件等价：

1. 任意两点间的曲线积分只由端点决定；
2. 沿区域内任意闭曲线的积分为零；
3. 存在原函数 $u$，使 $\mathrm du=P\,\mathrm dx+Q\,\mathrm dy$。

若另外有 $P,Q\in C^1$，则原函数存在必有 $P_y=Q_x$；当区域还**单连通**时，$P_y=Q_x$ 也是充分条件。这里单连通意味着闭曲线能在区域内连续收缩到一点。

找到原函数后，

$$
\int_A^B P\,\mathrm dx+Q\,\mathrm dy=u(B)-u(A).
$$

一种构造方法是先对 $P$ 关于 $x$ 积分，写成 $u=\int P\,\mathrm dx+\phi(y)$，再用 $u_y=Q$ 确定 $\phi$。也可在适合的矩形邻域内选水平、竖直折线路径求积分。

!!! example "例 10.2：求原函数并计算积分"

    设 $P=2xy+e^x,Q=x^2+2y$。求从 $(0,0)$ 到 $(1,1)$ 沿任意分段光滑路径的积分。

    **解：** 全平面上 $P_y=Q_x=2x$，故路径无关。由 $u_x=P$ 得 $u=x^2y+e^x+\phi(y)$，再由 $u_y=Q$ 得 $\phi'=2y$，故 $u=x^2y+e^x+y^2+C$。

    所求积分为 $u(1,1)-u(0,0)=(e+2)-1=e+1$。

!!! warning "偏导相等时，还要检查区域和奇点"

    对 $P=-y/(x^2+y^2),Q=x/(x^2+y^2)$，原点外虽有 $P_y=Q_x$，但沿逆时针单位圆积分为 $2\pi$。穿孔平面不是单连通区域，原点处又不满足格林公式的光滑条件，不能将积分判为零。

### §2 第二类曲面积分

#### 通量与定向

在可定向曲面 $S$ 上选定连续单位法向量 $\boldsymbol n=(\cos\alpha,\cos\beta,\cos\gamma)$，定义

$$
\iint_S\boldsymbol F\cdot\boldsymbol n\,\mathrm dS
=\iint_SP\,\mathrm dy\,\mathrm dz+Q\,\mathrm dz\,\mathrm dx+R\,\mathrm dx\,\mathrm dy.
$$

它可表示流量或通量。此处 $\mathrm dy\,\mathrm dz,\mathrm dz\,\mathrm dx,\mathrm dx\,\mathrm dy$ 是有向投影面积元，分别等于 $\cos\alpha\,\mathrm dS,\cos\beta\,\mathrm dS,\cos\gamma\,\mathrm dS$。换另一侧，积分变号。

#### 计算公式

若 $S:z=z(x,y)$，取上侧，即法向量的 $z$ 分量为正，则

$$
\boldsymbol n\,\mathrm dS=(-z_x,-z_y,1)\,\mathrm dx\,\mathrm dy,
$$

$$
\iint_S\boldsymbol F\cdot\boldsymbol n\,\mathrm dS
=\iint_D[-Pz_x-Qz_y+R]_{z=z(x,y)}\,\mathrm dx\,\mathrm dy.
$$

取下侧时整体变号。若曲面更适合投影到 $yOz$ 或 $zOx$ 面，循环调整坐标即可。参数曲面则用

$$
\boldsymbol n\,\mathrm dS=\pm(\boldsymbol r_u\times\boldsymbol r_v)\,\mathrm du\,\mathrm dv,
$$

符号根据题目指定侧选择。

!!! warning "单位法向量与面积因子配套使用"

    用 $\boldsymbol F\cdot\boldsymbol n\,\mathrm dS$ 时，$\boldsymbol n$ 必须是单位矢量；用 $\boldsymbol F\cdot(\boldsymbol r_u\times\boldsymbol r_v)\,\mathrm du\,\mathrm dv$ 时，矢量积已经包含面积因子，无须再单位化或再乘一次面积因子。

#### 高斯公式

设立体 $\Omega$ 的边界 $S=\partial\Omega$ 分片光滑且取**外侧**，$P,Q,R$ 在包含 $\overline\Omega$ 的开集内有连续一阶偏导，则

$$
\oiint_{\partial\Omega}\boldsymbol F\cdot\boldsymbol n\,\mathrm dS
=\iiint_\Omega(P_x+Q_y+R_z)\,\mathrm dV.
$$

这是把封闭曲面的通量化为体积分的工具。对开曲面，常用“补面—封闭—求总体通量—减去补面通量”的方法；补面的方向按所围立体的外侧确定。

#### 散度

$$
\operatorname{div}\boldsymbol F=P_x+Q_y+R_z.
$$

散度是标量，表示局部单位体积净流出的强度。散度为零称为无源场；在高斯公式条件下，封闭曲面的净通量为零，但单个开曲面的通量未必为零。

!!! example "例 10.3：上半球的通量与补面"

    对 $\boldsymbol F=(x,y,z)$，求单位上半球面 $S$ 外侧的通量。

    **解：** 添底面圆盘 $S_0:z=0,x^2+y^2\le1$，底面外法向朝下。散度为 $3$，半球体体积为 $2\pi/3$，故封闭曲面通量为 $2\pi$。

    在底面 $\boldsymbol F\cdot(0,0,-1)=-z=0$，所以所求通量仍为 $2\pi$。也可在球面直接利用 $\boldsymbol F=\boldsymbol n$，把积分化为半球面积。

### §3 斯托克斯公式、空间曲线积分与路径无关性

#### 旋度

对 $\boldsymbol F=(P,Q,R)$，定义

$$
\operatorname{rot}\boldsymbol F=\operatorname{curl}\boldsymbol F
=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y).
$$

旋度是矢量，描述局部环流的强度与轴向。可用形式行列式记忆，但其中各项是微分运算。

#### 斯托克斯公式

设 $S$ 为分片光滑的有向曲面，边界 $L=\partial S$ 分段光滑，$\boldsymbol F$ 在曲面附近一阶连续可微，则

$$
\oint_L\boldsymbol F\cdot\mathrm d\boldsymbol r
=\iint_S\operatorname{curl}\boldsymbol F\cdot\boldsymbol n\,\mathrm dS.
$$

边界方向与法向量满足**右手关系**：右手拇指指向法向，四指弯曲方向为边界正向。等价地，从法向量所指的一侧向曲面看，边界为逆时针。

计算时可选择边界相同、方向一致且满足光滑条件的更简单曲面；空间闭曲线若位于某平面，通常选平面片。

!!! example "例 10.4：空间闭曲线换成平面片"

    设 $L$ 为柱面 $x^2+y^2=1$ 与平面 $z=x$ 的交线，从 $z$ 轴正向向下看为逆时针。计算

    $$
    I=\oint_L(-y\,\mathrm dx+x\,\mathrm dy+z\,\mathrm dz).
    $$

    **解：** $\boldsymbol F=(-y,x,z)$ 的旋度为 $(0,0,2)$。取 $z=x$ 内的椭圆片，上侧面积矢量为 $(-1,0,1)\,\mathrm dx\,\mathrm dy$，投影是单位圆盘，故

    $$
    I=\iint_{x^2+y^2\le1}(0,0,2)\cdot(-1,0,1)\,\mathrm dx\,\mathrm dy=2\pi.
    $$

#### 空间路径无关性

在空间开连通区域中，路径无关、任意闭曲线积分为零、存在 $u$ 使

$$
\mathrm du=P\,\mathrm dx+Q\,\mathrm dy+R\,\mathrm dz
$$

三者等价。若 $\boldsymbol F\in C^1$ 且区域单连通，则又等价于

$$
\operatorname{curl}\boldsymbol F=\boldsymbol0
\quad\Longleftrightarrow\quad
P_y=Q_x,\quad Q_z=R_y,\quad R_x=P_z.
$$

此时积分仍为 $u(B)-u(A)$。求原函数可逐次积分并匹配三个偏导。

#### 势量场（\*）

教材第 230 页起。若存在单值函数 $u$，使 $\boldsymbol F=\nabla u$，则称为势量场或保守场，$u$ 是势函数。对 $C^2$ 的 $u$，必有 $\operatorname{curl}(\nabla u)=\boldsymbol0$。反向结论需要区域条件，不能漏掉定义域中的孔或奇点。

!!! info "数学势函数与物理势能的符号"

    本页沿用教材数学约定 $\boldsymbol F=\nabla u$。物理中常把势能或电势记为 $V$，写 $\boldsymbol F=-\nabla V$。两者可能差一个负号，应以具体定义为准。

#### 向量微分算子（\*）

教材第 232 页起。记

$$
\nabla=\left(\frac\partial{\partial x},\frac\partial{\partial y},\frac\partial{\partial z}\right),
$$

则梯度、散度、旋度可分别写成 $\nabla u,\nabla\cdot\boldsymbol F,\nabla\times\boldsymbol F$。拉普拉斯算子为

$$
\Delta u=\nabla\cdot\nabla u=u_{xx}+u_{yy}+u_{zz}.
$$

在有关函数二阶连续可微时，

$$
\nabla\times(\nabla u)=\boldsymbol0,\qquad
\nabla\cdot(\nabla\times\boldsymbol F)=0.
$$

这些等式来自混合偏导相等。算子不是普通常矢量，对乘积使用时必须遵守求导法则。

### 三个积分公式如何选择

| 公式 | 左端对象 | 右端对象 | 方向与条件重点 |
| --- | --- | --- | --- |
| 格林 | 平面闭曲线上的环流 | 二重积分 $Q_x-P_y$ | 区域在行进方向左侧；洞的边界也要算 |
| 高斯 | 封闭曲面的通量 | 三重积分 $\operatorname{div}\boldsymbol F$ | 外侧；检查整个立体内有无奇点 |
| 斯托克斯 | 空间闭曲线上的环流 | 曲面上的旋度通量 | 边界与法向满足右手关系 |

!!! tip "先看闭合，再看微分"

    闭曲线优先考虑格林或斯托克斯，封闭曲面优先考虑高斯；再判断求导是否让被积函数变简单。非闭合对象可考虑补线、补面。若有原函数，直接用端点差往往最省步骤。

### 本章自测

!!! example "自测 10：方向、原函数与积分定理"

    1. 沿单位圆周顺时针计算 $\oint_L(x\,\mathrm dy-y\,\mathrm dx)$。
    2. 求 $\omega=yz\,\mathrm dx+xz\,\mathrm dy+xy\,\mathrm dz$ 的原函数，并计算从 $(1,1,1)$ 到 $(2,1,3)$ 的积分。
    3. 求 $\boldsymbol F=(x,y,z)$ 通过半径为 $R$ 的球面外侧的通量。
    4. 设 $\boldsymbol F=(-y/2,x/2,0)$，$L$ 是平面 $z=1$ 上半径为 $a$ 的圆，从上向下看为逆时针，求其环流。
    5. 对 $\boldsymbol F=(x,y,z)/(x^2+y^2+z^2)^{3/2}$，原点外散度为零。它通过单位球面外侧的通量是否为零？说明理由。

    ??? example "答案与提示"

        1. $-2\pi$；顺时针与格林正向相反。
        2. $u=xyz+C$，积分为 $6-1=5$。
        3. 散度为 $3$，通量为 $3\cdot4\pi R^3/3=4\pi R^3$。
        4. 旋度为 $(0,0,1)$，取向上的圆盘，环流为 $\pi a^2$。
        5. 不为零。在单位球面上 $\boldsymbol F=\boldsymbol n$，通量为 $4\pi$。原点处场无定义，不满足对整个球体使用高斯公式的条件；挖掉一个小球后，内球面按穿孔区域的外侧应取朝向球心的方向。

## 第十一章 级数

**教材范围：** 第 236–311 页，§1–§8。数学一重点是数项级数判敛、绝对与条件收敛、幂级数收敛域与和函数、泰勒展开及傅里叶展开。一致收敛理论、重排与乘积的深入讨论，以及复数和二元傅里叶展开可作为拓展。

级数用一列有限和的极限描述“无穷项相加”。本章有三条主线：**能不能相加**（收敛性）、**相加得到什么**（和与和函数）、**怎样用有限项近似**（余项与误差）。

| 学习对象 | 核心问题 | 常用工具 |
| --- | --- | --- |
| 数项级数 | 部分和是否有有限极限 | 比较、比值、根值、积分、莱布尼茨判别法 |
| 函数项级数 | 在哪些点收敛，能否交换极限与运算 | 收敛域、一致收敛 |
| 幂级数 | 收敛半径、和函数、函数展开 | 阿贝尔定理、逐项求导与积分、泰勒公式 |
| 傅里叶级数 | 用三角函数展开周期函数 | 正交性、傅里叶系数、收敛定理 |

### §1 数项级数：定义与基本性质

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

!!! warning "通项趋于零只是必要条件"

    若 $\sum u_n$ 收敛，则 $u_n=S_n-S_{n-1}\to0$。反之不成立：$1/n\to0$，但调和级数 $\sum 1/n$ 发散。

    因此，判敛时先检查通项；通项不趋于零可以立即判定发散，趋于零则仍需继续判断。

!!! example "例：几何级数与裂项求和"

    **几何级数**：设 $a\ne0$，则

    $$
    \sum_{n=0}^{\infty}aq^n=\frac{a}{1-q},\qquad |q|<1.
    $$

    这来自有限和 $S_N=a(1-q^{N+1})/(1-q)$。当 $|q|\ge1$ 时通项不趋于零，级数发散；$a=0$ 时则恒为零。

    **裂项求和**：

    $$
    \sum_{n=1}^{\infty}\frac1{n(n+1)}
    =\lim_{N\to\infty}\sum_{n=1}^{N}\left(\frac1n-\frac1{n+1}\right)
    =\lim_{N\to\infty}\left(1-\frac1{N+1}\right)=1.
    $$

    先对有限和作运算，再取极限，可以避免对无穷和作不合法的消项。

#### 基本性质

- **有限项不影响敛散性**：增加、删除或改变有限项，只可能改变级数的和。
- **线性运算**：若 $\sum u_n=U$、$\sum v_n=V$ 都收敛，则 $\sum(\alpha u_n+\beta v_n)=\alpha U+\beta V$。
- **收敛与发散相加**：一个收敛级数与一个发散级数逐项相加，结果发散；两个发散级数相加则没有统一结论。
- **保持顺序的分组**：收敛级数任意合并相邻有限项，和不变；分组后收敛，不能反推原级数收敛。例如 $(1-1)+(1-1)+\cdots$ 的分组部分和为零，但原级数部分和在 $1$ 和 $0$ 之间振荡。

**柯西收敛准则**：$\sum u_n$ 收敛，当且仅当

$$
\forall\varepsilon>0,\ \exists N,\ \forall m>n\ge N,
\quad\left|\sum_{k=n+1}^{m}u_k\right|<\varepsilon.
$$

它要求从足够靠后的位置开始，**任意长度的有限尾和**都足够小。

### §2 正项级数：敛散性的判别

以下“正项级数”的结论也适用于非负项级数；涉及商式时要求分母最终为正。

#### 部分和有界准则

若 $u_n\ge0$，则 $S_N$ 单调不减，因此

$$
\sum u_n\text{ 收敛}\quad\Longleftrightarrow\quad\{S_N\}\text{ 有上界}.
$$

正项级数发散时，部分和趋于 $+\infty$。这是比较判别法的基础。

#### 比较判别法

若从某项起 $0\le u_n\le v_n$，则：

- $\sum v_n$ 收敛 $\Rightarrow\sum u_n$ 收敛；
- $\sum u_n$ 发散 $\Rightarrow\sum v_n$ 发散。

可记为：**用收敛的大项控制小项，用发散的小项推出大项发散。**

若 $u_n,v_n>0$，且 $\lim_{n\to\infty}u_n/v_n=\ell$，则极限比较法给出：

| 比值极限 | 可以得出的结论 |
| --- | --- |
| $0<\ell<+\infty$ | 两级数同敛散 |
| $\ell=0$ | $\sum v_n$ 收敛可推出 $\sum u_n$ 收敛 |
| $\ell=+\infty$ | $\sum v_n$ 发散可推出 $\sum u_n$ 发散 |

特别地，正项之间 $u_n\sim v_n$ 可以用于判敛。

??? example "例：有理式与根式的比较"

    因为

    $$
    \frac{3n+1}{n^3+2}\sim\frac3{n^2},
    $$

    所以 $\sum(3n+1)/(n^3+2)$ 收敛。

    对含根式的项，先有理化：

    $$
    \sqrt{n^2+1}-n=\frac1{\sqrt{n^2+1}+n}\sim\frac1{2n},
    $$

    因而 $\sum(\sqrt{n^2+1}-n)$ 发散。

#### 比值与根值判别法

对正项级数，若下列极限存在：

$$
\rho=\lim_{n\to\infty}\frac{u_{n+1}}{u_n}
\quad\text{或}\quad
\rho=\lim_{n\to\infty}\sqrt[n]{u_n},
$$

则 $\rho<1$ 时收敛，$\rho>1$（包括 $+\infty$）时发散，$\rho=1$ 时不能判断。

| 通项特征 | 优先考虑 |
| --- | --- |
| 含 $n!$、连续乘积、指数因子 | 比值判别法 |
| 整体有 $n$ 次幂 | 根值判别法 |
| 多项式、根式、对数 | 比较或积分判别法 |

??? example "例：比值法与根值法"

    对 $\sum n!/n^n$，

    $$
    \frac{u_{n+1}}{u_n}=\left(\frac n{n+1}\right)^n\to e^{-1}<1,
    $$

    所以收敛。对 $\sum[n/(2n+1)]^n$，根值极限为 $1/2$，所以收敛。

    对 $\sum1/n$ 和 $\sum1/n^2$，比值极限都等于 $1$，但前者发散、后者收敛。

#### 积分判别法与常用基准级数

若 $f(x)$ 在 $[N,+\infty)$ 上连续、非负且单调不增，并且 $u_n=f(n)$，则

$$
\sum_{n=N}^{\infty}u_n
\quad\text{与}\quad
\int_N^{+\infty}f(x)\,\mathrm dx
\quad\text{同敛散}.
$$

由此得到两个常用结论：

$$
\sum_{n=1}^{\infty}\frac1{n^p}
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\le1,
\end{cases}
\qquad
\sum_{n=2}^{\infty}\frac1{n(\ln n)^p}
\begin{cases}
\text{收敛},&p>1,\\
\text{发散},&p\le1.
\end{cases}
$$

第二个结论在积分中作代换 $t=\ln x$ 即可得到。对上述满足单调条件且收敛的级数，还有余项估计

$$
\int_{N+1}^{+\infty}f(x)\,\mathrm dx
\le r_N\le
\int_N^{+\infty}f(x)\,\mathrm dx.
$$

### §3 一般数项级数：符号变化与绝对收敛

#### 交错级数与莱布尼茨判别法

对交错级数 $\sum_{n=1}^{\infty}(-1)^{n-1}b_n$，若 $b_n\ge0$、从某项起单调不增，且 $b_n\to0$，则级数收敛。

在单调性成立的尾部，截断误差满足

$$
|r_N|\le b_{N+1},
$$

余项的符号与第一个被舍去的项相同。证明思路是分别考察奇数项、偶数项部分和：它们从两侧趋向同一个极限。

!!! warning "不能省略单调条件"

    仅有“正负交替、通项趋于零”不足以保证收敛。例如令 $b_{2k-1}=1/\sqrt{k}$、$b_{2k}=1/\sqrt{k}-1/k$，则 $b_n\to0$，但每对带符号项之和为 $1/k$，偶数项部分和发散。

#### 绝对收敛与条件收敛

- 若 $\sum|u_n|$ 收敛，称 $\sum u_n$ **绝对收敛**。
- 若 $\sum u_n$ 收敛，而 $\sum|u_n|$ 发散，称其**条件收敛**。

**绝对收敛必然推出收敛**，可由柯西准则与 $|\sum u_k|\le\sum|u_k|$ 证明。

??? example "例：带参数的交错 p 级数"

    考察 $\sum_{n=1}^{\infty}(-1)^{n-1}/n^p$。

    - $p>1$：绝对值级数是收敛的 $p$ 级数，因此绝对收敛。
    - $0<p\le1$：由莱布尼茨判别法收敛，但绝对值级数发散，因此条件收敛。
    - $p\le0$：通项不趋于零，因此发散。

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

**逐点收敛**允许达到同样误差所需的项数依赖于 $x$。**一致收敛**要求一个项数门槛同时适用于集合 $D$ 内所有点：

$$
\forall\varepsilon>0,\ \exists N,\ \forall n\ge N,\ \forall x\in D,
\quad |r_n(x)|<\varepsilon.
$$

等价地，$\sup_{x\in D}|r_n(x)|\to0$。逐点收敛中量词的次序则是 $\forall x\in D,\forall\varepsilon>0,\exists N=N(x,\varepsilon)$。

??? example "例：同一个级数在不同集合上的一致收敛性"

    对 $\sum_{n=0}^{\infty}x^n$，部分和取至 $x^N$，余项为

    $$
    r_N(x)=\frac{x^{N+1}}{1-x}.
    $$

    在 $[0,1)$ 上逐点收敛，但每个固定 $N$ 都有 $\sup_{0\le x<1}|r_N(x)|=+\infty$，所以不一致收敛。

    在任意固定的 $[-q,q]$（$0<q<1$）上，

    $$
    |r_N(x)|\le\frac{q^{N+1}}{1-q}\to0,
    $$

    因而一致收敛。讨论一致收敛时必须指明集合。

#### 一致收敛的判别法

**一致柯西准则**：对任意 $\varepsilon>0$，存在与 $x$ 无关的 $N$，使所有 $m>n\ge N$、$x\in D$ 都满足

$$
\left|\sum_{k=n+1}^{m}u_k(x)\right|<\varepsilon.
$$

**魏尔斯特拉斯判别法（M 判别法）**：若对所有 $x\in D$ 有 $|u_n(x)|\le M_n$，而数项级数 $\sum M_n$ 收敛，则 $\sum u_n(x)$ 在 $D$ 上绝对且一致收敛。

例如 $|\sin nx/n^2|\le1/n^2$，所以 $\sum\sin nx/n^2$ 在 $\mathbb R$ 上一致收敛。M 判别法是充分条件，找不到这样的控制级数不能直接判定不一致收敛。

以下两种判别法可处理带振荡因子的 $\sum a_n(x)b_n(x)$，这里 $b_n(x)$ 为实值函数：

- **狄利克雷判别法**：$\sum_{n=1}^{N}a_n(x)$ 对 $N,x$ 一致有界；对每个 $x$，$b_n(x)$ 关于 $n$ 单调，并且 $b_n\to0$ 在 $D$ 上一致成立。
- **阿贝尔判别法**：$\sum a_n(x)$ 在 $D$ 上一致收敛；对每个 $x$，$b_n(x)$ 关于 $n$ 单调，且存在常数 $M$ 使所有 $n,x$ 都有 $|b_n(x)|\le M$。

满足相应条件时，乘积级数在 $D$ 上一致收敛。令 $D$ 只含一个点，也得到相应的数项级数判别法。

#### 一致收敛与运算交换

| 想进行的操作 | 一组常用的充分条件 | 结论 |
| --- | --- | --- |
| 保持连续性 | 各 $u_n$ 在 $D$ 上连续，级数在 $D$ 上一致收敛 | 和函数在 $D$ 上连续 |
| 逐项积分 | 各 $u_n$ 在 $[a,b]$ 上连续，级数在该区间一致收敛 | $\int_a^b\sum u_n=\sum\int_a^b u_n$ |
| 逐项求导 | 各 $u_n\in C^1[a,b]$；$\sum u_n'$ 一致收敛；$\sum u_n(x_0)$ 在某一点收敛 | 原级数一致收敛，且 $S'=\sum u_n'$ |

!!! warning "原级数一致收敛不自动保证可逐项求导"

    求导需要单独控制导数级数。积分和求导的条件不可混用。

### §5 幂级数：收敛半径与和函数

#### 收敛半径

以 $x_0$ 为中心的幂级数为

$$
\sum_{n=0}^{\infty}a_n(x-x_0)^n.
$$

阿贝尔定理的基本结论：若它在 $x_1\ne x_0$ 处收敛，则在 $|x-x_0|<|x_1-x_0|$ 内绝对收敛；若在某点发散，则在距中心更远处也发散。

因此存在收敛半径 $R\in[0,+\infty]$：

- $|x-x_0|<R$：绝对收敛；
- $|x-x_0|>R$：发散；
- $|x-x_0|=R$：需要分别代入左右端点判断。

若系数最终非零，且比值极限存在，可用

$$
R=\lim_{n\to\infty}\left|\frac{a_n}{a_{n+1}}\right|.
$$

更一般地，柯西—阿达马公式为

$$
\frac1R=\limsup_{n\to\infty}\sqrt[n]{|a_n|},
$$

其中右端为 $0$ 时 $R=+\infty$，右端为 $+\infty$ 时 $R=0$。

!!! tip "收敛半径不等于收敛域"

    求收敛域应按“半径 → 开区间 → 两个端点”完成。缺少奇数次或偶数次项时，不要直接对相邻非零系数套用半径公式；可以对完整通项作比值检验，或先代换变量。

??? example "例：同时判断端点和收敛类型"

    求 $\sum_{n=1}^{\infty}(x-2)^n/(n3^n)$ 的收敛域。

    对绝对值通项作比值检验，极限为 $|x-2|/3$，故 $R=3$，先得到 $-1<x<5$。

    - $x=-1$：得到 $\sum(-1)^n/n$，条件收敛。
    - $x=5$：得到 $\sum1/n$，发散。

    所以收敛域为 $[-1,5)$，其中 $(-1,5)$ 内绝对收敛。

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

两个同中心幂级数可以在共同收敛区间内部相加或作柯西乘积；所得级数的实际半径可能因抵消而扩大，不能一概说等于原半径的较小值。

若 $0<R<\infty$，且原幂级数在某个端点收敛，则其和函数从区间内部趋向该端点时，极限等于端点级数的和。这一端点连续性结论常称为阿贝尔第二定理。

#### 求和函数：从几何级数出发

由 $\sum_{n=0}^{\infty}x^n=1/(1-x)$（$\lvert x\rvert<1$），逐项求导、乘以 $x$ 或积分得到

$$
\sum_{n=1}^{\infty}nx^{n-1}=\frac1{(1-x)^2},
\qquad
\sum_{n=1}^{\infty}nx^n=\frac{x}{(1-x)^2},
$$

$$
\sum_{n=1}^{\infty}\frac{x^n}{n}=-\ln(1-x),\qquad |x|<1.
$$

??? example "例：用积分求和，再回到原级数"

    设 $S(x)=\sum_{n=1}^{\infty}x^n/[n(n+1)]$。利用 $1/[n(n+1)]=1/n-1/(n+1)$，有

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

其中 $\xi$ 介于 $x_0$ 与 $x$ 之间。函数等于其泰勒级数的关键条件是 **$R_N(x)\to0$**。

!!! warning "无穷次可导不等于可以展开成自身的泰勒级数"

    例如 $f(x)=e^{-1/x^2}$（$x\ne0$）、$f(0)=0$ 在零点无穷次可导，且所有阶导数均为零。其零点泰勒级数恒为零，却在任何零点邻域内都不等于原函数。

#### 常用麦克劳林展开

| 函数 | 展开式 | 实数范围 |
| --- | --- | --- |
| $\dfrac1{1-x}$ | $\displaystyle\sum_{n=0}^{\infty}x^n$ | $\lvert x\rvert<1$ |
| $e^x$ | $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$ | $x\in\mathbb R$ |
| $\sin x$ | $\displaystyle\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!}$ | $x\in\mathbb R$ |
| $\cos x$ | $\displaystyle\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!}$ | $x\in\mathbb R$ |
| $\ln(1+x)$ | $\displaystyle\sum_{n=1}^{\infty}(-1)^{n-1}\frac{x^n}{n}$ | $-1<x\le1$ |
| $\arctan x$ | $\displaystyle\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{2n+1}$ | $-1\le x\le1$ |
| $(1+x)^\alpha$ | $\displaystyle\sum_{n=0}^{\infty}\binom\alpha n x^n$ | 一般先取 $\lvert x\rvert<1$；端点另判 |

这里 $\alpha\in\mathbb R$，且

$$
\binom\alpha0=1,\qquad
\binom\alpha n=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}.
$$

若 $\alpha$ 为非负整数，二项式展开终止，成为对所有实数成立的多项式等式。若 $\alpha$ 不是非负整数，则 $x=1$ 在 $\alpha>-1$ 时收敛，$x=-1$ 在 $\alpha>0$ 时收敛；其余相应端点发散。

上表中 $\ln(1+x)$ 在 $x=1$ 条件收敛，$\arctan x$ 在两个端点都条件收敛。

#### 间接展开方法

直接计算高阶导数往往繁琐，可用已有展开式进行代换、四则运算、求导或积分。每次代换都要同步变换收敛条件。

??? example "例：代换并逐项积分"

    先由几何级数得到

    $$
    \frac1{1+t^2}=\sum_{n=0}^{\infty}(-1)^nt^{2n},\qquad |t|<1.
    $$

    从 $0$ 到 $x$ 积分：

    $$
    \arctan x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{2n+1},\qquad |x|<1.
    $$

    再用莱布尼茨判别法与端点连续性，将等式延伸到 $x=\pm1$。

??? example "例：在非零中心展开"

    在 $x_0=1$ 展开 $\ln x$，令 $h=x-1$，则

    $$
    \ln x=\ln(1+h)
    =\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}n(x-1)^n.
    $$

    由 $-1<h\le1$ 得 $0<x\le2$。展开中心为 $1$，收敛半径为 $1$；不能把它当作以零点为中心的展开。

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

这里 $O(x^k)$ 描述 $x\to0$ 时的误差阶；实际数值计算仍应给出余项上界。

??? example "例：计算 sin 0.1，并保证误差"

    取 $\sin0.1\approx0.1-0.1^3/6=0.099833333\ldots$。

    由交错级数余项估计，截断误差不超过

    $$
    \frac{0.1^5}{5!}=8.333\ldots\times10^{-8}.
    $$

    若另外将结果四舍五入，还应将舍入误差计入总误差。

#### 积分计算

有些函数没有初等原函数，但其幂级数可以逐项积分。

??? example "例：用级数近似非初等积分"

    由于 $e^{-x^2}=\sum_{n=0}^{\infty}(-1)^nx^{2n}/n!$ 在 $[0,1]$ 上一致收敛，

    $$
    \int_0^1e^{-x^2}\,\mathrm dx
    =\sum_{n=0}^{\infty}\frac{(-1)^n}{n!(2n+1)}.
    $$

    取至 $n=5$ 得

    $$
    1-\frac13+\frac1{10}-\frac1{42}+\frac1{216}-\frac1{1320}
    \approx0.7467291967.
    $$

    截断误差不超过首个舍去项 $1/(6!\cdot13)\approx1.07\times10^{-4}$。

!!! example "例：用展开求极限"

    处理极限时，展开到**抵消之后的首个非零项**即可。例如

    $$
    \lim_{x\to0}\frac{e^x-1-x}{x^2}
    =\lim_{x\to0}\frac{x^2/2+O(x^3)}{x^2}=\frac12.
    $$

### §8 傅里叶级数：用三角函数展开

#### 正交性与傅里叶系数

设 $f$ 是周期为 $2L$ 的实值函数，在 $[-L,L]$ 上可积。考虑三角级数

$$
f(x)\sim\frac{a_0}{2}
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

正弦与正弦有同样的关系，正弦与余弦的积分为零。常数函数的平方积分为 $2L$，因此常数项是 $a_0/2$。

周期为 $2\pi$ 时取 $L=\pi$，便得到通常的 $\cos nx$、$\sin nx$ 形式。

#### 收敛到哪里：先看周期延拓

一组常用的狄利克雷充分条件是：在一个周期内，函数只有有限个第一类间断点，并且可划分成有限个单调区间。此时傅里叶级数在每点收敛到

$$
\frac{f(x-0)+f(x+0)}2.
$$

- 在连续点，级数和等于 $f(x)$。
- 在跳跃点，级数和等于左右极限的平均值，与人为指定的单点函数值无关。
- 在周期边界，要用**周期延拓后**的左右极限；例如 $x=L$ 处取 $[f(L-0)+f(-L+0)]/2$。

!!! warning "傅里叶级数不是泰勒级数"

    泰勒系数由一个点的各阶导数决定；傅里叶系数由整个周期上的积分决定。傅里叶展开允许跳跃间断，且在跳跃点通常不等于指定的函数值。

#### 奇偶性与周期函数展开

| 函数性质 | 为零的系数 | 剩余系数的简化 |
| --- | --- | --- |
| $f$ 为偶函数 | $b_n=0$ | $a_n=\dfrac2L\int_0^Lf(x)\cos(n\pi x/L)\,\mathrm dx$，含 $n=0$ |
| $f$ 为奇函数 | $a_0=a_n=0$ | $b_n=\dfrac2L\int_0^Lf(x)\sin(n\pi x/L)\,\mathrm dx$ |

??? example "例：锯齿波 f(x)=x 的展开"

    令 $f(x)=x$（$-\pi<x<\pi$），再作 $2\pi$ 周期延拓。函数为奇函数，因此只需计算

    $$
    b_n=\frac2\pi\int_0^\pi x\sin nx\,\mathrm dx
    =\frac{2(-1)^{n+1}}n.
    $$

    故

    $$
    x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n\sin nx,
    \qquad -\pi<x<\pi.
    $$

    在 $x=\pm\pi$ 处，级数和为 $0$，等于周期延拓左右极限的平均值。代入 $x=\pi/2$ 可得

    $$
    1-\frac13+\frac15-\frac17+\cdots=\frac\pi4.
    $$

!!! info "吉布斯现象"

    在跳跃点附近，有限部分和常出现振荡和过冲。增加项数会使明显振荡的区域变窄，但最大过冲相对跳跃高度的比例不会趋于零；不能据此期待在跳跃点附近一致逼近。

#### 有限区间上的展开：正弦级数与余弦级数

对于只给定在 $(0,L)$ 上的函数，可以先延拓到 $(-L,L)$，再作 $2L$ 周期延拓。

**奇延拓**得到正弦级数：

$$
f(x)\sim\sum_{n=1}^{\infty}b_n\sin\frac{n\pi x}{L},
\qquad
b_n=\frac2L\int_0^Lf(x)\sin\frac{n\pi x}{L}\,\mathrm dx.
$$

**偶延拓**得到余弦级数：

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos\frac{n\pi x}{L},
\qquad
a_n=\frac2L\int_0^Lf(x)\cos\frac{n\pi x}{L}\,\mathrm dx,
\quad n\ge0.
$$

同一函数在开区间内可以有这两种展开，因为采用了不同的延拓。正弦级数在 $x=0,L$ 逐项均为零；端点是否等于原函数值必须另看延拓。

??? example "例：常数函数的半区间展开"

    设 $f(x)=1$，$0<x<L$。奇延拓时

    $$
    b_n=\frac{2[1-(-1)^n]}{n\pi},
    $$

    因而

    $$
    1=\frac4\pi\sum_{k=0}^{\infty}\frac1{2k+1}
    \sin\frac{(2k+1)\pi x}{L},\qquad0<x<L.
    $$

    两端点级数和为零。偶延拓则仍是常数函数，只有 $a_0=2$，其余系数全为零。

若函数给定在任意有限区间 $(a,b)$，也可直接以 $b-a$ 为周期延拓；这与半区间奇、偶延拓采用的周期不同，写系数前应先确定周期和基函数。

#### 复数形式（\*）

利用欧拉公式，实数形式可以改写为

$$
f(x)\sim\sum_{n=-\infty}^{\infty}c_ne^{in\pi x/L},
\qquad
c_n=\frac1{2L}\int_{-L}^{L}f(x)e^{-in\pi x/L}\,\mathrm dx.
$$

这里级数按对称部分和 $\sum_{n=-N}^{N}$ 理解，且

$$
c_0=\frac{a_0}{2},\qquad
c_n=\frac{a_n-ib_n}{2},\qquad
c_{-n}=\frac{a_n+ib_n}{2}\quad(n\ge1).
$$

当 $f$ 为实值函数时，$c_{-n}=\overline{c_n}$。

#### 矩形区域上的二元展开（\*）

在矩形 $(-L,L)\times(-H,H)$ 上，对两个变量分别使用傅里叶基函数。复数形式为

$$
f(x,y)\sim\sum_{m,n\in\mathbb Z}c_{mn}
e^{i(m\pi x/L+n\pi y/H)},
$$

$$
c_{mn}=\frac1{4LH}\int_{-L}^{L}\int_{-H}^{H}
f(x,y)e^{-i(m\pi x/L+n\pi y/H)}\,\mathrm dy\,\mathrm dx.
$$

部分和可取 $|m|\le M$、$|n|\le N$ 的矩形截断。若只在 $(0,L)\times(0,H)$ 给定函数，并对两个变量均作奇延拓，则得到双重正弦展开

$$
f(x,y)\sim\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}
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

!!! example "自测 11：判敛、求和与展开"

    以下题目用于检查本章知识点，不对应教材原题。

    1. 判断 $\sum_{n=1}^{\infty}n/(n^3+1)$ 的敛散性。
    2. 判断 $\sum_{n=1}^{\infty}(-1)^{n-1}/\sqrt n$ 是绝对收敛、条件收敛还是发散。
    3. 求 $\sum_{n=1}^{\infty}x^n/n^2$ 的收敛域，并判断它在 $[-1,1]$ 上是否一致收敛（\*）。
    4. 求 $\sum_{n=1}^{\infty}nx^n$ 的和函数与收敛域。
    5. 在 $x=1$ 处将 $1/x$ 展开为幂级数，并给出收敛域。
    6. 将 $f(x)=x^2$（$-\pi\le x\le\pi$）作 $2\pi$ 周期延拓，求傅里叶展开，并据此求 $\sum_{n=1}^{\infty}1/n^2$。

    ??? example "答案与提示"

        1. $n/(n^3+1)\sim1/n^2$，由极限比较法收敛。
        2. 由莱布尼茨判别法收敛，但 $\sum1/\sqrt n$ 发散，因此条件收敛。
        3. 半径为 $1$，两个端点均绝对收敛，收敛域为 $[-1,1]$。由 $|x^n/n^2|\le1/n^2$ 及 M 判别法，在该闭区间上一致收敛。
        4. 和函数为 $x/(1-x)^2$，收敛域为 $(-1,1)$；两个端点的通项都不趋于零。
        5. $1/x=1/[1+(x-1)]=\sum_{n=0}^{\infty}(-1)^n(x-1)^n$，收敛域为 $(0,2)$。
        6. 偶函数只含余弦项。分部积分两次得 $a_0=2\pi^2/3$、$a_n=4(-1)^n/n^2$，于是

            $$
            x^2=\frac{\pi^2}{3}+4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx,
            \qquad -\pi\le x\le\pi.
            $$

            周期延拓在端点连续，代入 $x=\pi$ 得 $\sum_{n=1}^{\infty}1/n^2=\pi^2/6$。

## 第十二章 含参量积分（\*）

**教材范围：** 第 312–325 页，§1–§3，教材整章选学。按目前核对的数学一考纲基线，含参量反常积分的一致收敛理论及 $\Gamma$、$B$ 函数不作为独立列出的复习专题，可在核心内容掌握后学习。**普通变限积分的求导仍是基础要求**，不能因为本章选学而一起跳过。

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

    对 $t>0$，设 $I(t)=\int_0^{t^2}e^{tx}\,\mathrm dx$，求 $I'(t)$。

    **解：** 上限贡献 $2t e^{t^3}$，下限不变，被积函数的偏导为 $xe^{tx}$，故

    $$
    I'(t)=2t e^{t^3}+\int_0^{t^2}xe^{tx}\,\mathrm dx.
    $$

    也可先算 $I(t)=(e^{t^3}-1)/t$，求导核对结果。

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

若对所有 $t\in T$，有 $|f(x,t)|\le M(x)$，且 $\int_a^{+\infty}M(x)\,\mathrm dx$ 收敛，则原积分在 $T$ 上一致收敛，同时各参数下绝对收敛。控制函数必须**不依赖参数**。

!!! example "例 12.2：参数范围决定一致收敛"

    讨论 $I(t)=\int_0^{+\infty}e^{-tx}\,\mathrm dx$，$t>0$。

    **解：** $I(t)=1/t$。在 $t\ge\delta>0$ 上，$e^{-tx}\le e^{-\delta x}$，由 M 判别法一致收敛。

    但在整个 $(0,+\infty)$ 上，尾积分 $e^{-tA}/t$ 对每个固定 $A$ 都随 $t\to0^+$ 无界，故不一致收敛。逐点有积分值，不能替代对参数统一的尾部控制。

#### 与连续、求导、积分交换的条件

以下给出常用的充分条件，参数先取有限闭区间 $[c,d]$。

| 要进行的运算 | 一组常用充分条件 |
| --- | --- |
| 把参数极限移入积分号 | $f$ 连续，且反常积分对参数一致收敛 |
| 在积分号下对参数求导 | $f,f_t$ 连续，原积分对每个参数收敛，$\int_a^\infty f_t(x,t)\,\mathrm dx$ 对参数一致收敛 |
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

    求 $J(t)=\int_0^1(x^t-1)/\ln x\,\mathrm dx$，$t>-1$，其中 $x=1$ 处用极限补定义。

    **解：** 先说明积分存在：在 $0$ 附近，用 $1/|\ln x|\le1$（$x\le e^{-1}$）可由 $x^t+1$ 控制；在 $1$ 附近，商趋于 $t$。对参数求导后被积函数为 $x^t$。

    在任意内闭区间 $t\in[c,d]\subset(-1,+\infty)$ 上，$x^t\le x^c$（$0<x<1$），而 $\int_0^1x^c\,\mathrm dx<\infty$，可在积分号下求导：

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
\quad(n=0,1,\ldots).
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

代换 $x=t/(1+t)$ 或 $x=\sin^2\theta$ 得到

$$
B(p,q)=\int_0^{+\infty}\frac{t^{p-1}}{(1+t)^{p+q}}\,\mathrm dt
=2\int_0^{\pi/2}\sin^{2p-1}\theta\cos^{2q-1}\theta\,\mathrm d\theta.
$$

#### 两个函数的关系

$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)},\qquad p,q>0.
$$

一种推导是把 $\Gamma(p)\Gamma(q)$ 写成第一象限的二重积分，再令 $x=ru,y=r(1-u)$，其中 $r>0,0<u<1$，雅可比绝对值为 $r$；积分分离成 $\Gamma(p+q)B(p,q)$。

对正整数 $m,n$，有 $B(m,n)=(m-1)!(n-1)!/(m+n-1)!$。对实数 $\alpha,\beta>-1$，有

$$
\int_0^{\pi/2}\sin^\alpha x\cos^\beta x\,\mathrm dx
=\frac12 B\left(\frac{\alpha+1}2,\frac{\beta+1}2\right).
$$

!!! info "欧拉反射公式"

    教材还利用 $\Gamma(p)\Gamma(1-p)=\pi/\sin(\pi p)$（$0<p<1$）得到 $B(p,1-p)=\pi/\sin(\pi p)$。本页限于积分定义适用的实参数范围；特殊函数的更广泛延拓不在此展开。

!!! example "例 12.4：将反常积分化为 B 函数"

    求 $I=\int_0^{+\infty}\sqrt x/(1+x)^3\,\mathrm dx$。

    **解：** 与 B 函数的无穷区间形式比较，有 $p=3/2,p+q=3$，故 $q=3/2$，两者均为正。

    $$
    I=B\left(\frac32,\frac32\right)
    =\frac{\Gamma(3/2)^2}{\Gamma(3)}
    =\frac{(\sqrt\pi/2)^2}{2}=\frac\pi8.
    $$

### 本章自测（\*）

!!! example "自测 12：参数求导、收敛范围与特殊函数"

    1. 对 $t>0$，求 $I(t)=\int_t^{2t}e^{tx}\,\mathrm dx$ 的导数，保留积分形式即可。
    2. $\int_1^{+\infty}x^{-t}\,\mathrm dx$ 对哪些 $t$ 收敛？它在 $[1+\delta,+\infty)$（$\delta>0$）及 $(1,+\infty)$ 上分别是否一致收敛？
    3. 求 $\int_0^{+\infty}x^2e^{-3x}\,\mathrm dx$ 和 $\Gamma(5/2)$。
    4. 求 $\int_0^1\sqrt{x(1-x)}\,\mathrm dx$。
    5. 设 $a>0$，利用 $\int_0^{+\infty}e^{-ax}\,\mathrm dx=1/a$，推导 $\int_0^{+\infty}x^ne^{-ax}\,\mathrm dx$（$n$ 为非负整数），并说明交换求导的依据。

    ??? example "答案与提示"

        1. $I'(t)=2e^{2t^2}-e^{t^2}+\int_t^{2t}xe^{tx}\,\mathrm dx$。
        2. 当且仅当 $t>1$ 收敛，积分为 $1/(t-1)$。在 $[1+\delta,+\infty)$ 上由 $x^{-t}\le x^{-1-\delta}$ 一致收敛；在 $(1,+\infty)$ 上，尾积分 $A^{1-t}/(t-1)$ 随 $t\to1^+$ 无界，故不一致收敛。
        3. $\Gamma(3)/3^3=2/27$；$\Gamma(5/2)=3\sqrt\pi/4$。
        4. $B(3/2,3/2)=\pi/8$。
        5. 对 $a$ 求 $n$ 次导数，有 $\int_0^\infty x^ne^{-ax}\,\mathrm dx=n!/a^{n+1}$。在 $a\ge a_0>0$ 上，每次求导后的绝对值由相应的 $x^ke^{-a_0x}$ 控制，后者在 $[0,+\infty)$ 可积，故可在任意内闭参数区间逐次求导。

## 复习安排与参考资料

第一轮按第七至第十一章主线建立概念，做各章基础自测；第二轮把第八章的梯度、隐函数求导与第十章的曲面积分联系起来，把第七章的空间区域与第九章积分限联系起来；第三轮整理综合题中的条件、方向和端点问题。教材选学内容可在主线掌握后补充，其中与核心考点重叠的概念不要跳过。

本页只覆盖所提供的**下册**。数学一高等数学中的一元函数极限、微积分与微分方程等其他内容，以及线性代数、概率论与数理统计，并未因本页覆盖下册而全部覆盖。

- 苏德矿、吴明华、童雯雯：《微积分》（第三版）（下），高等教育出版社，2021 年。以用户提供的扫描版为正文参考，按印刷页码标注范围；[出版社书目信息与目录](https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=5fde33475710f1bcc39a1b92)。
- [2026 年考研数学一考试大纲转载（文都，2025-10-17）](https://kaoyan.wendu.com/m/2025/1017/212673.shtml)：用于本页的备考范围对照，转载材料不替代 2027 年正式考纲。
- [教育部教育考试院考试用书目录](https://www.neea.edu.cn/html1/category/1509/6235-1.htm)：正式考试用书信息的核验入口。
- [MIT 18.117 讲义](https://math.mit.edu/~vwg/classnotes-spring05.pdf)：仅用于第十一章二元傅里叶展开的补充说明。
