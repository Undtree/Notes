---
exercise_view: true
---

# 线性代数 FAQ

<div class="exercise-view-controls" data-exercise-view-controls role="group" aria-label="内容显示模式" hidden>
  <span>显示模式</span>
  <button type="button" data-exercise-view="all" aria-pressed="true">知识点 + 习题</button>
  <button type="button" data-exercise-view="exercises" aria-pressed="false">只展示习题</button>
</div>

## 行列式

<div class="supplement" markdown="1">
<p class="supplement__title">基本运算性质</p>

- 设 $E,O$ 分别为 $n\ge1$ 阶单位矩阵和零矩阵，则 $\det E=1$，$\det O=0$。
- 设 $A$ 为 $n$ 阶方阵、$c$ 为标量，则 $\det(A^{\mathsf T})=\det A$，$\det(cA)=c^n\det A$。
- 设 $A,B$ 均为 $n$ 阶方阵，则 $\det(AB)=\det A\cdot\det B$。
- 若 $A$ 可逆，则 $\det(A^{-1})=\dfrac{1}{\det A}$。
- 设 $A$ 为 $n\ge2$ 阶方阵、$A^*$ 为其伴随矩阵，则 $\det(A^*)=(\det A)^{n-1}$。

</div>

!!! example exercise "☆☆☆ 逆矩阵之和的行列式"

    设 $\alpha,\beta,\gamma$ 为三个线性无关的三维列向量，记 $A=(\alpha,\beta,\gamma)$，$B=(2\alpha+3\gamma,\ 3\alpha+\beta,\ \alpha+2\gamma)$。已知 $\det(A^{-1}+B^{-1})=6$，求 $\det A$。

    ??? success "解析"

        $B$ 的每列都已按基 $\alpha,\beta,\gamma$ 展开，把系数按**列**排列，就得到 $B=AM$，其中

        $$
        M=\begin{pmatrix}2&3&1\\0&1&0\\3&0&2\end{pmatrix}.
        $$

        沿第二行展开，$\det M=4-3=1$，$\det(E+M)=2(9-3)=12$。故 $\det B=\det A$，而 $A+B=A(E+M)$，其行列式为 $12\det A$。

        遇到逆矩阵的**和**，不能把行列式拆成和。左乘 $A$、右乘 $B$ 恰可消去两个逆：$A(A^{-1}+B^{-1})B=B+A$。两边取行列式得 $6(\det A)^2=12\det A$。因三列线性无关，$\det A\ne0$，故 **$\det A=2$**。


<div class="supplement" markdown="1">
<p class="supplement__title">初等变换与按行（列）展开</p>

- 交换行列式的两行（列），行列式变号。
- 将行列式的某一行（列）乘以标量 $c$，所得行列式值等于原行列式值的 $c$ 倍。
- 将行列式的某一行（列）的 $c$ 倍加到另一行（列），行列式不变。
- 设 $C_{ij}$ 为 $n$ 阶方阵 $A=(a_{ij})$ 中 $a_{ij}$ 的代数余子式，则对任意 $i,j$，有 $\det A=\sum_{k=1}^n a_{ik}C_{ik}=\sum_{k=1}^n a_{kj}C_{kj}$。

</div>

!!! example exercise "☆☆☆ 三角矩阵的代数余子式之和"

    设 $A=\begin{pmatrix}1&2&-1&0\\0&2&1&-1\\0&0&4&-2\\0&0&0&2\end{pmatrix}$，设 $A_{ij}$ 为 $a_{ij}$ 的代数余子式，求 $\sum_{i=1}^4\sum_{j=1}^4A_{ij}$。

    <div class="exam-options" markdown="1">

    A. 4

    B. 16

    C. 32

    D. 64
    </div>

    ??? success "解析"

        求**全部**代数余子式之和时，逐个展开没有必要。取全一列向量 $\boldsymbol1$，左、右各乘一次就把矩阵全部元素相加。转置不改变总和，所以所求为 $\boldsymbol1^{\mathsf T}A^*\boldsymbol1$。

        $A$ 是上三角阵，$\det A=1\cdot2\cdot4\cdot2=16$，可用 $A^*=(\det A)A^{-1}$。这时只需要 $u=A^{-1}\boldsymbol1$，不需要整个逆矩阵。

        观察 $A$ 的**每行元素之和都是 $2$**，即 $A\boldsymbol1=2\boldsymbol1$，立刻得 $u=\dfrac12\boldsymbol1$。于是总和为 $16\boldsymbol1^{\mathsf T}u=16\cdot2=\mathbf{32}$，选 **C**。


<div class="supplement" markdown="1">
<p class="supplement__title">四种常见行列式形式</p>

- **三角形行列式**：若 $A=(a_{ij})$ 为 $n$ 阶上三角或下三角矩阵，则 $\det A=\prod_{i=1}^n a_{ii}$。例如上三角形式为

    $$
    \begin{vmatrix}
    a_{11}&a_{12}&\cdots&a_{1n}\\
    0&a_{22}&\cdots&a_{2n}\\
    \vdots&\ddots&\ddots&\vdots\\
    0&\cdots&0&a_{nn}
    \end{vmatrix}
    =\prod_{i=1}^n a_{ii}.
    $$

- **范德蒙德行列式**：设 $x_1,\ldots,x_n$ 为实数或复数，则

    $$
    \begin{vmatrix}
    1&1&\cdots&1\\
    x_1&x_2&\cdots&x_n\\
    \vdots&\vdots&&\vdots\\
    x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}
    \end{vmatrix}
    =\prod_{1\le i\lt j\le n}(x_j-x_i).
    $$

- **爪形（箭形）行列式**：设 $n\ge2$，约定空乘积为 $1$，则

    $$
    \begin{vmatrix}
    a_1&b_2&b_3&\cdots&b_n\\
    c_2&a_2&0&\cdots&0\\
    c_3&0&a_3&\cdots&0\\
    \vdots&\vdots&\vdots&\ddots&\vdots\\
    c_n&0&0&\cdots&a_n
    \end{vmatrix}
    =\left(a_1 - \sum_{i=2}^n \frac{b_ic_i}{a_i}\right)\prod_{i=2}^n a_i.
    $$

- **三对角行列式**：设 $D_k$ 为下列矩阵的前 $k$ 阶顺序主子式，约定 $D_0=1$，则

    $$
    D_n=
    \begin{vmatrix}
    a_1&b_1&0&\cdots&0\\
    c_1&a_2&b_2&\ddots&\vdots\\
    0&c_2&a_3&\ddots&0\\
    \vdots&\ddots&\ddots&\ddots&b_{n-1}\\
    0&\cdots&0&c_{n-1}&a_n
    \end{vmatrix},
    \qquad D_1=a_1,
    $$

    $$
    D_k=a_kD_{k-1}-b_{k-1}c_{k-1}D_{k-2}
    \quad(2\le k\le n).
    $$

</div>

## 矩阵

<div class="supplement" markdown="1">
<p class="supplement__title">矩阵的运算</p>

- 设 $A=(a_{ij})$ 为 $m\times n$ 矩阵、$B=(b_{ij})$ 为 $n\times p$ 矩阵，则 $AB$ 为 $m\times p$ 矩阵，且 $(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}$。
- 若 $A,B,C$ 的尺寸使连续乘积有定义，则 $(AB)C=A(BC)$。
- 若相应运算的尺寸相容，则 $A(B+C)=AB+AC$，$(A+B)C=AC+BC$。
- 若 $AB$ 有定义，且 $c$ 为标量，则 $c(AB)=(cA)B=A(cB)$。
- 设 $A$ 为 $m\times n$ 矩阵，$E_m,E_n$ 分别为 $m,n$ 阶单位矩阵，则 $E_mA=A=AE_n$。
- 若乘积尺寸相容，则 $AO=O$，$OA=O$。
- 设 $A$ 为 $m\times n$ 矩阵、$B$ 为 $n\times m$ 矩阵，则 $\operatorname{tr}(AB)=\operatorname{tr}(BA)$。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">矩阵的转置</p>

- 对任意矩阵 $A$，有 $(A^{\mathsf T})^{\mathsf T}=A$。
- 设 $A,B$ 同型、$c$ 为标量，则 $(A+B)^{\mathsf T}=A^{\mathsf T}+B^{\mathsf T}$，$(cA)^{\mathsf T}=cA^{\mathsf T}$。
- 若 $AB$ 有定义，则 $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$；多个矩阵乘积的转置同样按逆序排列各因子的转置。

</div>

!!! example exercise "☆☆☆ 代数余子式、伴随与正交"

    设三阶实非零矩阵 $A=(a_{ij})$ 满足 $a_{ij}=-A_{ij}$，其中 $A_{ij}$ 为代数余子式。设 $\alpha,\beta$ 为任意三维列向量，$E$ 为三阶单位矩阵。下列结论中，哪些正确？

    ① $\alpha^{\mathsf T}A^{\mathsf T}A\alpha=\|\alpha\|^2$<br>
    ② $\langle A\alpha,A\beta\rangle=\langle\alpha,\beta\rangle$<br>
    ③ $(A+E)x=0$ 有非零解<br>
    ④ $\operatorname{tr}(A^2)=(\operatorname{tr}A)^2$

    <div class="exam-options" markdown="1">

    A. ①③

    B. ②④

    C. ①②③

    D. ①②④
    </div>

    ??? success "解析"

        **先把逐元素条件变成矩阵等式。** $A^*$ 是代数余子式矩阵的转置，所以 $A^*=-A^{\mathsf T}$。代入 $A^*A=(\det A)E$，得 $A^{\mathsf T}A=-(\det A)E$。左边半正定且非零，故 $\det A<0$。

        三阶矩阵满足 $\det A^*=(\det A)^2$；另一方面 $\det(-A^{\mathsf T})=-\det A$，故 $\det A=-1$。于是 $A^{\mathsf T}A=E$，所以 $\langle A\alpha,A\beta\rangle=\alpha^{\mathsf T}\beta$。令 $\beta=\alpha$ 还得到保长度，①②都成立。

        **再看③④。** 正交矩阵的实特征值只能为 $\pm1$，非实特征值成共轭对且乘积为 $1$。全部特征值的乘积是 $-1$，故必有特征值 $-1$，即 $(A+E)x=0$ 有非零解。对④取符合题设的 $A=-E$，则 $\operatorname{tr}(A^2)=3$，而 $(\operatorname{tr}A)^2=9$。选 **C：①②③**。


<div class="supplement" markdown="1">
<p class="supplement__title">逆矩阵</p>

- 若 $A$ 为 $n$ 阶可逆矩阵，则 $AA^{-1}=A^{-1}A=E$，且 $(A^{-1})^{-1}=A$。
- 设 $A,B$ 为同阶方阵。若 $AB=E$，则 $BA=E$，且 $A^{-1}=B$、$B^{-1}=A$。
- 设 $A,B$ 为同阶方阵，则 $AB$ 可逆，当且仅当 $A,B$ 均可逆；此时 $(AB)^{-1}=B^{-1}A^{-1}$。多个可逆矩阵乘积的逆同样按逆序排列各因子的逆。
- 若 $A$ 可逆，则 $A^{\mathsf T}$ 也可逆，且 $(A^{\mathsf T})^{-1}=(A^{-1})^{\mathsf T}$。
- 若 $A$ 可逆且 $c\ne0$，则 $(cA)^{-1}=\dfrac1c A^{-1}$。
- 设 $A$ 为 $n\ge2$ 阶方阵、$A^*$ 为其伴随矩阵，则 $AA^*=A^*A=(\det A)E$；若 $A$ 可逆，则 $A^{-1}=\dfrac1{\det A}A^*$。
- 若 $A$ 可逆，且相应乘积有定义，则 $AB=AC\implies B=C$，$BA=CA\implies B=C$。
- 设 $Q$ 为 $n$ 阶实矩阵。若 $Q^{\mathsf T}Q=E$，则 $Q^{-1}=Q^{\mathsf T}$，且 $QQ^{\mathsf T}=E$，此时称 $Q$ 为正交矩阵。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">方阵的幂与交换</p>

- 设 $A$ 为 $n$ 阶方阵，$p,q$ 为非负整数，约定 $A^0=E$，则 $A^pA^q=A^{p+q}$，$(A^p)^q=A^{pq}$。
- 若 $A$ 可逆、$k$ 为正整数，则 $(A^k)^{-1}=(A^{-1})^k=A^{-k}$。
- 设 $A,B$ 为同阶方阵，则 $(A\pm B)^2=A^2\pm(AB+BA)+B^2$。
- 若 $A,B$ 为同阶方阵且 $AB=BA$，$k$ 为正整数，则 $(AB)^k=A^kB^k$，$(A\pm B)^2=A^2\pm2AB+B^2$。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">秩的判定与保秩变换</p>

- 设 $A$ 为 $m\times n$ 矩阵，则 $0\le r(A)\le\min\{m,n\}$，且 $r(A)=0\iff A=O$。
- 将 $A$ 化为行阶梯形矩阵，则 $r(A)$ 等于其非零行数。
- 若 $A\ne O$，则 $r(A)$ 等于非零子式的最高阶数；若 $A=O$，则 $r(A)=0$。
- 对任意矩阵 $A$，有 $r(A^{\mathsf T})=r(A)$；若 $c\ne0$，则 $r(cA)=r(A)$。
- 初等行、列变换均保秩。也即，若 $P,Q$ 为尺寸匹配的可逆矩阵，则 $r(PAQ)=r(A)$。
- 设 $A$ 为 $n$ 阶方阵，则 $r(A)=n\iff\det A\ne0\iff A$ 可逆。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">特殊矩阵的秩</p>

- 若 $A$ 为实矩阵，则 $r(A^{\mathsf T}A)=r(AA^{\mathsf T})=r(A)$；若 $A$ 为复矩阵，则将转置改为共轭转置。
- 设 $A$ 为 $n\ge2$ 阶方阵，$A^*$ 为其伴随矩阵，则 $r(A^*)=\begin{cases}n,&r(A)=n,\\1,&r(A)=n-1,\\0,&r(A)\le n-2.\end{cases}$

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">和与积的秩</p>

- 设 $A,B$ 均为 $m\times n$ 矩阵，则 $\lvert r(A)-r(B)\rvert\le r(A\pm B)\le\min\{m,n,r(A)+r(B)\}$。
- 设 $A,B$ 同型，则 $\lvert r(A+B)-r(A)\rvert\le r(B)$。
- 设 $A$ 为 $m\times n$ 矩阵、$B$ 为 $n\times p$ 矩阵，则 $\max\{0,r(A)+r(B)-n\}\le r(AB)\le\min\{r(A),r(B)\}$。
- 若 $AB$ 有定义且 $A$ 满列秩，则 $r(AB)=r(B)$。
- 若 $AB$ 有定义且 $B$ 满行秩，则 $r(AB)=r(A)$。
- 设 $A$ 的列数、$B$ 的行数均为 $n$，若 $AB=O$，则 $r(A)+r(B)\le n$。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">分块矩阵的秩</p>

- $r\begin{pmatrix}A&O\\O&B\end{pmatrix}=r(A)+r(B)$。
- 对分块上三角矩阵，有 $r\begin{pmatrix}A&C\\O&B\end{pmatrix}\ge r(A)+r(B)$。
- 若 $A$ 为 $k$ 阶可逆矩阵，则 $r\begin{pmatrix}A&B\\C&D\end{pmatrix}=k+r(D-CA^{-1}B)$。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">幂与幂等矩阵的秩</p>

- 设 $A$ 为 $n$ 阶方阵，则 $r(A)\ge r(A^2)\ge r(A^3)\ge\cdots$，且 $r(A^2)\ge\max\{0,2r(A)-n\}$。
- 若 $A$ 为 $n$ 阶方阵且 $A^2=O$，则 $r(A)\le\lfloor n/2\rfloor$。
- 设 $A$ 为实或复 $n$ 阶方阵，$E$ 为 $n$ 阶单位矩阵。若 $A^2=A$，则 $r(A)+r(E-A)=n$，$r(A)=\operatorname{tr}(A)$。

</div>

!!! example exercise "幂等乘积中的非方阵消去"

    设 $A$ 为 $3\times2$ 矩阵，$B$ 为 $2\times3$ 矩阵，$r(AB)=2$、$(AB)^2=AB$。下列等式中，必然成立的有几项？

    ① $BAB=B$<br>
    ② $ABA=A$<br>
    ③ $BA=E_2$<br>
    ④ $AB=\operatorname{diag}(1,1,0)$

    <div class="exam-options" markdown="1">

    A. 1

    B. 2

    C. 3

    D. 4
    </div>

    ??? success "解析"

        $AB$ 是三阶矩阵，秩为 $2$；$A$ 只有两列、$B$ 只有两行，由 $r(AB)\le\min\{r(A),r(B)\}$ 知 $A$ 满列秩、$B$ 满行秩。这里能用的是**单侧消去**。

        把 $(AB)^2=AB$ 移项得 $A(BA-E_2)B=0$。$A$ 的零空间只有零，对各列消去 $A$ 得 $(BA-E_2)B=0$。又 $B$ 的列张成 $\mathbb R^2$，故 $BA-E_2$ 把整个 $\mathbb R^2$ 映成零，即 $BA=E_2$。于是 $B(AB)=(BA)B=B$，$(AB)A=A(BA)=A$。

        ④要求的是原矩阵恰等于指定对角阵。取 $A=(e_1,e_3)$、$B=A^{\mathsf T}$，则 $AB=\operatorname{diag}(1,0,1)$ 仍满足题设。故成立的是 **①②③，共三项（C）**。


## 向量组

<div class="supplement" markdown="1">
<p class="supplement__title">向量组的秩与线性表示</p>

- $r(A)$ 等于其行向量组的秩，也等于其列向量组的秩。
- 设 $A,B$ 行数相同，则 $\max\{r(A),r(B)\}\le r([A\ B])\le r(A)+r(B)$；纵向拼接也有对应结论。
- 设 $A,B$ 行数相同，则 $r([A\ B])=r(A)$ 当且仅当 $B$ 的每一列均可由 $A$ 的列线性表示。

</div>

!!! example exercise "☆☆☆ 向量组的线性表示条件"

    设 $a,b$ 为实数，$\alpha_1=(1,2,-1)^{\mathsf T}$，$\alpha_2=(1,0,1)^{\mathsf T}$，$\alpha_3=(-1,a,3)^{\mathsf T}$，$\beta=(3,2,b)^{\mathsf T}$。

    已知 $\beta$ 可由 $\alpha_1,\alpha_2,\alpha_3$ 线性表示，但不能由 $\alpha_1,\alpha_2$ 线性表示。下列哪一组条件成立？

    <div class="exam-options" markdown="1">

    A. $a\ne-4$，$b$ 为任意实数

    B. $a=4,\ b=1$

    C. $a\ne-4$ 且 $b\ne1$

    D. $a=4$，$b$ 为任意实数
    </div>

    ??? success "解析"

        “能由三列表示，却不能由前两列表示”给出了两个条件：先判断 $\beta$ 是否在前两列张成的平面内，再看第三列有没有把这个平面扩大。

        设 $\beta=s\alpha_1+t\alpha_2$。第二坐标给出 $2s=2$，第一坐标给出 $s+t=3$，所以 $s=1,t=2$。第三坐标此时只能是 $-s+t=1$。要满足“不能由前两列表示”，必须且只须 $b\ne1$。

        再看 $\det(\alpha_1,\alpha_2,\alpha_3)=-2(a+4)$。当 $a=-4$ 时，$\alpha_3=-2\alpha_1+\alpha_2$，加入它仍然表示不了 $\beta$；当 $a\ne-4$ 时，三列张成整个 $\mathbb R^3$，一定能表示 $\beta$。合起来选 **C：$a\ne-4,\ b\ne1$**。

!!! example exercise "☆☆☆ 列空间的秩与正交投影"

    设实数 $a\ne0$，向量组 $\alpha_1=(a,0,1)^{\mathsf T},\ \alpha_2=(0,-a,0)^{\mathsf T},\ \alpha_3=(1,0,a)^{\mathsf T}$。已知 $\beta=(1,1,-1)^{\mathsf T}$ 不能由该向量组线性表示。向量 $\gamma$ 满足 $\gamma=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3$，且 $\beta^{\mathsf T}\alpha_i=\gamma^{\mathsf T}\alpha_i$（$i=1,2,3$）。

    （1）求 $a$。

    （2）记 $A=(\alpha_1,\alpha_2,\alpha_3)$，证明 $\beta-\gamma$ 是 $A^{\mathsf T}x=0$ 的解。

    （3）求 $\gamma$。

    ??? success "解析"

        **（1）由“不能线性表示”筛参数。** 若 $\det A=-a(a^2-1)\ne0$，三列能表示任意三维向量。由 $a\ne0$，只需考察 $a=\pm1$。这时前两列独立且张成平面 $x=az$，第三列也在平面内。$\beta=(1,1,-1)^{\mathsf T}$ 在 $x=-z$ 上，却不在 $x=z$ 上，因此 **$a=1$**。

        **（2）把三个内积合成一个方程。** 移项得 $\alpha_i^{\mathsf T}(\beta-\gamma)=0$。将三式上下叠放，左边正是 $A^{\mathsf T}(\beta-\gamma)$，故 $\beta-\gamma$ 是 $A^{\mathsf T}x=0$ 的解。

        **（3）求投影。** $\gamma$ 在平面 $x=z$ 内，$\beta-\gamma$ 又垂直于此平面，因此 $\gamma$ 是正交投影。取法向量 $n=(1,0,-1)^{\mathsf T}$，去掉 $\beta$ 的法向分量：

        $$
        \gamma=\beta-\frac{\beta^{\mathsf T}n}{n^{\mathsf T}n}\,n=\beta-n=(0,1,0)^{\mathsf T}.
        $$

!!! example exercise "向量组的两种线性表示条件"

    设 $\alpha_1=(1,0,1)^{\mathsf T}$、$\alpha_2=(1,2,1)^{\mathsf T}$、$\alpha_3=(1,-1,a)^{\mathsf T}$、$\alpha_4=(1,b,1)^{\mathsf T}$。若 $\alpha_4$ 可由前三列表示，而 $\alpha_1$ 不能由其余三列表示，求 $a,b$ 的条件。

    <div class="exam-options" markdown="1">

    A. $a\ne1$ 且 $b\ne2$

    B. $a\ne1$ 且 $b=2$

    C. $a=1$ 且 $b\ne2$

    D. $a=1$ 且 $b=2$
    </div>

    ??? success "解析"

        先看坐标：$\alpha_1,\alpha_2,\alpha_4$ 都在平面 $x=z$ 内，只有 $\alpha_3$ 可能在平面外。因此可以先按 $a$ 分类，再处理 $b$。

        若 $a=1$，则 $\alpha_2,\alpha_3$ 在平面内且线性无关，已经能表示 $\alpha_1$，与第二个条件矛盾。若 $a\ne1$，$\alpha_3$ 在平面外，$\alpha_1,\alpha_2,\alpha_3$ 张成全空间，第一个条件自动成立。

        此时要用 $\alpha_2,\alpha_3,\alpha_4$ 表示平面内的 $\alpha_1$，$\alpha_3$ 的系数必须为零。若 $b\ne2$，余下两列独立，仍可表示 $\alpha_1$；若 $b=2$，两列重合且均不与 $\alpha_1$ 共线，才符合“不可表示”。故选 **B：$a\ne1,\ b=2$**。


<div class="supplement" markdown="1">
<p class="supplement__title">线性相关与极大无关组</p>

- 设 $A$ 为 $n$ 阶方阵，则 $A$ 的行向量组（或列向量组）线性相关，当且仅当 $\det A=0$。
- 找原矩阵的极大无关列组：只做行变换，找出阶梯形矩阵的主元列，再取原矩阵对应的列。

</div>

## 线性方程组

<div class="supplement" markdown="1">
<p class="supplement__title">齐次方程组与基础解系</p>

- 设 $A$ 有 $n$ 列，记 $\ker A=\{x\mid Ax=\mathbf{0}\}$ 为 $A$ 的核（零空间），即齐次方程组的解空间，则 $\dim\ker A=n-r(A)$，其基础解系含 $n-r(A)$ 个向量。
- 设 $A$ 有 $n$ 列，则 $Ax=\mathbf{0}$ 有非零解 $\iff r(A)\lt n$。
- 设 $A$ 有 $n$ 列，若 $Ax=\mathbf{0}$ 有 $s$ 个线性无关的解，则 $r(A)\le n-s$；若这些解构成基础解系，则 $r(A)=n-s$。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">齐次方程组的同解判据</p>

两个方程组使用同一组未知量 $x$ 时，**同解**是指解集完全相同：第一个方程组的每个解都是第二个的解，反过来也成立。方程的个数可以不同。

设 $A,B$ 均有 $n$ 列。在实数域中，$Ax=\mathbf{0}$ 表示 $x$ 与 $A$ 的每一行都正交。因此，$Ax=\mathbf{0}$ 与 $Bx=\mathbf{0}$ 同解，当且仅当 **$A,B$ 的行空间相同**，也就是两个行向量组能相互线性表示。用秩判断时，把矩阵**上下叠放**：

$$
\ker A=\ker B
\quad\Longleftrightarrow\quad
r(A)=r(B)=r\!\begin{pmatrix}A\\ B\end{pmatrix}.
$$

- **已有单向包含时，只需再比较秩。** 若 $Ax=\mathbf{0}$ 的每个解都是 $Bx=\mathbf{0}$ 的解，则 $\ker A\subseteq\ker B$。此时 $r(A)=r(B)$ 就能保证同解，因为两个解空间的维数均为 $n-r(A)$。例如 $Ax=\mathbf{0}$ 的解自动满足 $CAx=\mathbf{0}$，故这两组同解当且仅当 $r(CA)=r(A)$。
- **只知道秩相等时，还要比较方向。** 例如 $x_1=0$ 与 $x_2=0$ 在平面内的解集分别是两条不同的坐标轴，尽管两个系数矩阵的秩都是 $1$。用基础解系判断时，要看它们是否张成同一空间，而不是只数向量个数。

</div>

!!! example exercise "☆☆☆ 齐次方程组的同解条件"

    设 $A=\begin{pmatrix}1&-1&1\\a&1&2\end{pmatrix}$、$B=\begin{pmatrix}1&1\\1&2\\1&b\end{pmatrix}$，若 $Ax=0$ 与 $B^{\mathsf T}x=0$ 同解，求 $a+b$。

    ??? success "解析"

        齐次方程组的解空间是系数矩阵行空间的正交补。所以“同解”要求**行空间相同**；两个矩阵的秩相同只是必要条件。

        两个行空间若相同，就必须同时包含 $(1,-1,1)$ 和 $(1,1,1)$。这两个向量独立，且第一、三坐标相等，正好张成平面 $x_1=x_3$。每个矩阵都只有两行，其行空间就只能是这个平面。

        于是 $A$ 的第二行 $(a,1,2)$ 要满足 $a=2$，$B^{\mathsf T}$ 的第二行 $(1,2,b)$ 要满足 $b=1$。代回后，两组行向量都独立，确实各自张成整个平面，故 **$a+b=3$**。


<div class="supplement" markdown="1">
<p class="supplement__title">非齐次方程组与矩阵方程</p>

- 设 $A,b$ 行数相同，则 $Ax=b$ 有解 $\iff r(A)=r([A\ b])$。
- 设 $A$ 有 $n$ 列，则 $Ax=b$ 有唯一解 $\iff r(A)=r([A\ b])=n$。
- 设 $A$ 为有 $n$ 列的实或复矩阵，则 $Ax=b$ 有无穷多解 $\iff r(A)=r([A\ b])\lt n$，自由参数个数为 $n-r(A)$。
- 设 $A$ 有 $m$ 行，则 $Ax=b$ 对同一数域上的任意 $m$ 维列向量 $b$ 均有解 $\iff r(A)=m$。
- 设 $A,B$ 行数相同，则 $AX=B$ 有解 $\iff r([A\ B])=r(A)$。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">非齐次方程组的同解判据</p>

判断 $Ax=b$ 与 $Bx=c$ 是否同解，先看它们是否有解：若两组都无解，解集同为空集；若只有一组有解，解集不同。

**两组都有解时，同解当且仅当：有一个公共特解，且对应的齐次方程组同解。** 具体地，取 $Ax=b$ 的任一特解 $x_0$，先验算 $Bx_0=c$，再比较 $\ker A$ 与 $\ker B$。这是因为有了公共特解后，两组的解集分别是 $x_0+\ker A$ 与 $x_0+\ker B$。例如 $x_1+x_2=1$ 与 $x_1+x_2=2$ 的齐次解空间相同，解集却是两条平行直线。

**用消元判断时，要把右端常数一起变换。** 对两个有解方程组，分别将增广矩阵 $[A\ b]$、$[B\ c]$ 化为行最简形，去掉全零行后，两者完全相同当且仅当两组同解。多出一个能由其余方程线性表示的方程，不会改变解集。

</div>

!!! example exercise "☆☆☆ 实对称矩阵的零空间与通解"

    设三阶实对称矩阵 $A$ 的秩为 $1$，$\alpha=(1,-1,1)^{\mathsf T}$ 是对应特征值 $\dfrac{1}{2}$ 的特征向量。其中 $k_1,k_2$ 为任意常数，下列哪一项是 $Ax=\alpha$ 的通解？

    <div class="exam-options" markdown="1">

    A. $k_1(1,1,0)^{\mathsf T}+k_2(1,0,-1)^{\mathsf T}+(1,-1,1)^{\mathsf T}$

    B. $k_1(1,0,-1)^{\mathsf T}+k_2(-1,1,2)^{\mathsf T}+\left(\dfrac12,-\dfrac12,\dfrac12\right)^{\mathsf T}$

    C. $k_1(1,1,0)^{\mathsf T}+k_2(1,0,1)^{\mathsf T}+(2,-2,2)^{\mathsf T}$

    D. $k_1(1,1,0)^{\mathsf T}+k_2(-1,1,2)^{\mathsf T}+(2,-2,2)^{\mathsf T}$
    </div>

    ??? success "解析"

        **先找一个特解。** 已知 $A\alpha=\dfrac12\alpha$，右端恰好是 $\alpha$，所以 $A(2\alpha)=\alpha$。选项中的常向量应是特解，不能直接照抄特征向量。

        **再找全部齐次解。** $r(A)=1$，故零空间有两维。由实对称性，属于特征值 $0$ 的向量都与 $\alpha$ 正交；而平面 $x_1-x_2+x_3=0$ 恰是两维，因此它就是整个零空间。

        $(1,1,0)^{\mathsf T}$ 与 $(-1,1,2)^{\mathsf T}$ 都在平面内且线性无关。把二者的任意线性组合加到特解上，得 $x=2\alpha+k_1(1,1,0)^{\mathsf T}+k_2(-1,1,2)^{\mathsf T}$，选 **D**。

!!! example exercise "☆☆☆ 矩阵方程的相容性与二次型的对称部分"

    设矩阵

    $$
    A=\begin{pmatrix}1&-1\\1&1\\a&b\end{pmatrix},\qquad C=\begin{pmatrix}1&1&a\\1&2&1\\a&1&1\end{pmatrix}.
    $$

    （1）求参数 $a,b$，使得存在矩阵 $B$ 满足 $AB=C$。

    （2）对每组满足条件的参数，求矩阵 $B$。

    （3）令 $x=(x_1,x_2)^{\mathsf T}$，求二次型 $f=x^{\mathsf T}BAx$ 的正惯性指数和负惯性指数。

    ??? success "解析"

        **（1）前两行决定 $B$，第三行检验相容性。** 记 $B$ 的两行为 $u,v$。矩阵等式前两行给出 $u-v=(1,1,a)$、$u+v=(1,2,1)$。相加、相减便得到

        $$
        u=\left(1,\frac32,\frac{a+1}{2}\right),\qquad v=\left(0,\frac12,\frac{1-a}{2}\right).
        $$

        第三行还须满足 $au+bv=(a,1,1)$。第一分量自动成立，后两分量要求 $3a+b=2$、$a(a+1)+b(1-a)=2$。消去 $b$ 得 $4a(a-1)=0$，所以 **$(a,b)=(0,2)$ 或 $(1,-1)$**。

        **（2）分别写出矩阵。** 按上述参数顺序，两组解为

        $$
        \begin{aligned}B_1&=\begin{pmatrix}1&\frac32&\frac12\\[2pt]0&\frac12&\frac12\end{pmatrix},\\[5pt] B_2&=\begin{pmatrix}1&\frac32&1\\[2pt]0&\frac12&0\end{pmatrix}.\end{aligned}
        $$

        **（3）对二次型取对称部分。** 对任意 $x$，标量 $x^{\mathsf T}BAx$ 等于其转置，因此可以用 $S=\dfrac{BA+(BA)^{\mathsf T}}{2}$ 替代 $BA$。两种参数依次给出

        $$
        S_1=\begin{pmatrix}\frac52&1\\[2pt]1&\frac32\end{pmatrix},\qquad S_2=\begin{pmatrix}\frac72&0\\[2pt]0&\frac12\end{pmatrix}.
        $$

        两者的一阶顺序主子式均正，行列式分别为 $\dfrac{11}{4}$、$\dfrac74$，也都为正。故两个二次型都正定，**正惯性指数均为 $2$，负惯性指数均为 $0$**。

!!! example exercise "☆☆☆ 含参线性方程组的无解条件"

    求使下列方程组无解的非零实数 $k$：

    $$
    \begin{cases}
    kx_1-x_3+x_4=1,\\
    kx_2+x_3-x_4=-1,\\
    -x_1+x_2+kx_3=1,\\
    x_1-x_2+kx_4=-1.
    \end{cases}
    $$

    ??? success "解析"

        前两式中 $x_3,x_4$ 的系数互反，后两式中 $x_1,x_2$ 的系数互反。分别相加，利用 $k\ne0$ 得 $x_2=-x_1,\ x_4=-x_3$。代回后，只要判断以下两式是否相容：

        $$
        kx_1-2x_3=1,\qquad -2x_1+kx_3=1.
        $$

        系数行列式为 $k^2-4$，非零时必有唯一解。为零只说明不能用唯一解公式，**无解还是无穷多解要看右端**。

        当 $k=-2$ 时，两式完全相同，仍有解；当 $k=2$ 时，两式左端互为相反数，右端却都为 $1$，相加得到 $0=2$。所以无解的参数只有 **$k=2$**。

!!! example exercise "非齐次通解的基坐标与矩阵作用"

    设 $A$ 为三阶矩阵，非齐次方程组 $Ax=(2,1,0)^{\mathsf T}$ 的通解为 $k_1\xi_1+k_2\xi_2+\eta^*$，其中 $k_1,k_2$ 为任意常数，$\xi_1=(2,1,0)^{\mathsf T}$，$\xi_2=(1,0,1)^{\mathsf T}$，$\eta^*=(-1,2,1)^{\mathsf T}$。

    记 $B=(\xi_1,\xi_2,\eta^*)$，$\beta=(1,2,3)^{\mathsf T}$。

    （1）求方程组 $Bx=\beta$ 的解。

    （2）求 $\beta^{\mathsf T}A\beta$。

    ??? success "解析"

        通解中，任意常数前的两个向量是齐次解，常向量是特解。所以 $A\xi_1=A\xi_2=0$，$A\eta^*=(2,1,0)^{\mathsf T}$。$\xi_1,\xi_2$ 独立，$\eta^*$ 又不在它们张成的零空间内，因而 $B$ 的三列构成一组基。

        **（1）求坐标。** $Bx=\beta$ 就是用这组三列表示 $\beta$。逐坐标可见 $2(1,0,1)^{\mathsf T}+(-1,2,1)^{\mathsf T}=(1,2,3)^{\mathsf T}$，故唯一解为 **$x=(0,2,1)^{\mathsf T}$**。

        **（2）求二次型值。** 不用恢复矩阵 $A$：对上式左乘 $A$，两倍齐次解那一项消失，故 $A\beta=A\eta^*=(2,1,0)^{\mathsf T}$。再与 $\beta$ 点乘，得 **$\beta^{\mathsf T}A\beta=1\cdot2+2\cdot1+3\cdot0=4$**。


## 特征值

<div class="supplement" markdown="1">
<p class="supplement__title">特征值的基本性质</p>

- 设 $A$ 为 $n$ 阶方阵、$E$ 为 $n$ 阶单位矩阵，则 $\lambda$ 为 $A$ 的特征值，当且仅当 $\det(\lambda E-A)=0$；对应的特征向量为 $(A-\lambda E)\alpha=\mathbf{0}$ 的非零解。
- 设 $n$ 阶方阵 $A$ 的全部特征值为 $\lambda_1,\ldots,\lambda_n$，按代数重数计，则 $\operatorname{tr}(A)=\sum_{i=1}^n\lambda_i$，$\det A=\prod_{i=1}^n\lambda_i$。
- 设 $A$ 为方阵，则 $A$ 可逆，当且仅当 $0$ 不是 $A$ 的特征值。
- 若 $A$ 为上三角或下三角矩阵，则其特征值为主对角线元素，重复次数即相应的代数重数。
- 设 $A$ 为方阵，则 $A$ 与 $A^{\mathsf T}$ 的特征多项式相同，特征值及其代数重数相同。

</div>

!!! example exercise "☆☆☆ 两个 Gram 矩阵的非零特征值"

    设实矩阵 $A$ 为 $2\times3$ 矩阵，$\det(AA^{\mathsf T})=2$、$\det(A^{\mathsf T}A-2E)=0$，求 $\det(A^{\mathsf T}A+2E)$。

    <div class="exam-options" markdown="1">

    A. $-12$

    B. $12$

    C. $-24$

    D. $24$
    </div>

    ??? success "解析"

        题中同时出现 $AA^{\mathsf T}$ 和 $A^{\mathsf T}A$，但两者分别是二阶、三阶矩阵。可以传递的是**非零特征值**，而不是整个特征值表。

        由 $\det(A^{\mathsf T}A-2E)=0$，取 $A^{\mathsf T}Ax=2x$，$x\ne0$。左乘 $A$ 得 $AA^{\mathsf T}(Ax)=2Ax$。这里 $Ax\ne0$，否则原式右端也为零。因此 $2$ 是 $AA^{\mathsf T}$ 的一个特征值。

        二阶矩阵 $AA^{\mathsf T}$ 的行列式为 $2$，故另一个特征值为 $1$。同理，左乘 $A^{\mathsf T}$ 可将特征值 $1$ 传回。最后补上维数差：$A$ 的秩为 $2$，$A^{\mathsf T}A$ 还有一个零特征值。加 $2E$ 后三个特征值变为 $4,3,2$，故行列式为 **$24$（D）**。


<div class="supplement" markdown="1">
<p class="supplement__title">特征子空间与线性无关性</p>

- 设 $\lambda$ 为 $n$ 阶方阵 $A$ 的特征值，其代数重数为 $m_\lambda$。记特征子空间 $V_\lambda=\ker(A-\lambda E)$，则其维数（几何重数）满足 $1\le\dim V_\lambda=n-r(A-\lambda E)\le m_\lambda$。
- 设 $\alpha_1,\ldots,\alpha_s$ 均为 $A$ 属于同一特征值 $\lambda$ 的特征向量。若 $\beta=\sum_{i=1}^s c_i\alpha_i\ne\mathbf{0}$，则 $\beta$ 也是 $A$ 属于 $\lambda$ 的特征向量。
- 若 $\lambda_1,\ldots,\lambda_s$ 互不相同，且 $\alpha_i$ 分别为 $A$ 属于 $\lambda_i$ 的特征向量，则 $\alpha_1,\ldots,\alpha_s$ 线性无关。
- 若 $\lambda$ 是 $A$ 的单特征值，则属于 $\lambda$ 的任意两个特征向量均成比例。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">矩阵多项式与特征向量</p>

- 设 $A\alpha=\lambda\alpha$、$\alpha\ne\mathbf{0}$，$f$ 为多项式，则 $f(A)\alpha=f(\lambda)\alpha$。
- 若 $A$ 可逆，且 $A\alpha=\lambda\alpha$、$\alpha\ne\mathbf{0}$，则 $\lambda\ne0$，且 $A^{-1}\alpha=\lambda^{-1}\alpha$。
- 设 $A$ 为 $n\ge2$ 阶方阵、$A^*$ 为其伴随矩阵。若 $A\alpha=\lambda\alpha$、$\alpha\ne\mathbf{0}$ 且 $\lambda\ne0$，则 $A^*\alpha=\dfrac{\det A}{\lambda}\alpha$。
- 设 $A$ 为方阵，特征多项式为 $\chi_A(t)=\det(tE-A)$，则 $\chi_A(A)=O$（Cayley–Hamilton 定理）。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">相似矩阵</p>

- 设 $A,B$ 为同一数域上的 $n$ 阶方阵。若存在可逆矩阵 $P$，使 $B=P^{-1}AP$，则称 $A$ 与 $B$ 相似，记为 $A\sim B$。
- 若 $A\sim B$，则两者的特征多项式相同，各特征值及其代数重数、几何重数分别相同。
- 若 $A\sim B$，则 $r(A)=r(B)$，$\det A=\det B$，$\operatorname{tr}(A)=\operatorname{tr}(B)$。
- 若 $B=P^{-1}AP$，且 $A\alpha=\lambda\alpha$、$\alpha\ne\mathbf{0}$，则 $B(P^{-1}\alpha)=\lambda(P^{-1}\alpha)$，即 $P^{-1}\alpha$ 是 $B$ 属于 $\lambda$ 的特征向量。
- 若 $B=P^{-1}AP$，且 $f$ 为多项式，则 $f(B)=P^{-1}f(A)P$。
- 设 $A,B$ 均为 $n$ 阶方阵。若 $A$ 可逆，则 $A^{-1}(AB)A=BA$，故 $AB\sim BA$。

</div>

!!! example exercise "☆☆☆ 列向量组等价与矩阵相似"

    设 $a\ne0$，给定两组列向量：

    $$
    \begin{aligned} &\alpha_1=(a,0,1)^{\mathsf T},\quad\alpha_2=(0,-a,0)^{\mathsf T},\quad\alpha_3=(1,0,a)^{\mathsf T};\\ &\beta_1=(a,0,1)^{\mathsf T},\quad\beta_2=(a,1,1)^{\mathsf T},\quad\beta_3=(a^2,0,a)^{\mathsf T}. \end{aligned}
    $$

    （1）若这两个向量组等价，求 $a$ 的值。

    （2）记 $A=(\alpha_1,\alpha_2,\alpha_3),\ B=(\beta_1,\beta_2,\beta_3)$。当 $a$ 为何值时，存在可逆矩阵 $P$，使 $P^{-1}AP=B$？求出一个这样的 $P$。

    ??? success "解析"

        **（1）比较列空间。** $B$ 的第三列是第一列的 $a$ 倍，前两列独立且均满足 $x=az$，所以列空间就是平面 $x=az$。由于 $a\ne0$，$A$ 的前两列也张成此平面。只需检查其第三列 $(1,0,a)^{\mathsf T}$：代入平面方程得到 $1=a^2$。因此两向量组等价当且仅当 **$a=\pm1$**。

        **（2）先筛相似的参数。** 相似保持秩和迹。$B$ 的秩恒为 $2$，而 $A$ 秩为 $2$ 恰好要求 $a^2=1$。再比较迹，$a=2a+1$，只剩 **$a=-1$**。这些不变量给出候选值，还需要实际构造 $P$。

        此时解两组特征方程，按**相同的特征值顺序** $0,1,-2$ 把对应特征向量排成列，可取

        $$
        P_1=\begin{pmatrix}1&0&1\\0&1&0\\1&0&-1\end{pmatrix},\qquad P_2=\begin{pmatrix}1&-1&-1\\0&3&0\\1&1&1\end{pmatrix}.
        $$

        于是 $P_1^{-1}AP_1=P_2^{-1}BP_2$。把 $P^{-1}AP=B$ 中的左右因子对齐，得到

        $$
        P=P_1P_2^{-1}=\begin{pmatrix}0&-\frac13&1\\0&\frac13&0\\1&\frac13&0\end{pmatrix}.
        $$


<div class="supplement" markdown="1">
<p class="supplement__title">相似对角化</p>

- 设 $A$ 为数域 $\mathbb F$ 上的 $n$ 阶方阵，则 $A$ 在 $\mathbb F$ 上可相似对角化，当且仅当它在 $\mathbb F^n$ 中有 $n$ 个线性无关的特征向量。
- 设 $A$ 为 $n$ 阶方阵。若 $A\alpha_i=\lambda_i\alpha_i$，且 $\alpha_1,\ldots,\alpha_n$ 线性无关，则取 $P=(\alpha_1,\ldots,\alpha_n)$，有 $P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$，对角元顺序与 $P$ 的列向量顺序一致。
- 若 $n$ 阶方阵 $A$ 在数域 $\mathbb F$ 中有 $n$ 个互不相同的特征值，则 $A$ 在 $\mathbb F$ 上可相似对角化。
- 若 $A$ 的特征多项式在数域 $\mathbb F$ 上可分解为一次因子的乘积，则 $A$ 在 $\mathbb F$ 上可相似对角化，当且仅当每个特征值的几何重数等于其代数重数。
- 若 $A,B$ 在同一数域上均可相似对角化，则 $A\sim B$ 当且仅当两者的特征值按代数重数计完全相同。
- 若 $P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$，则对任意正整数 $k$，有 $A^k=P\operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)P^{-1}$。

</div>

!!! example exercise "☆☆☆ 无重根的湮灭多项式与对角化"

    设三阶矩阵 $A$ 的特征值为 $a,a,b$，$a\ne b$。“$A$ 可对角化”是“$(A-aE)(A-bE)=0$”的什么条件？

    <div class="exam-options" markdown="1">

    A. 充分必要条件

    B. 充分非必要条件

    C. 必要非充分条件

    D. 既非充分也非必要条件
    </div>

    ??? success "解析"

        **从可对角化推矩阵等式。** 令 $A=PDP^{-1}$。对角阵 $D$ 的每个对角元都是 $a$ 或 $b$，故 $(D-aE)(D-bE)=0$。在左右乘回 $P,P^{-1}$，就得到题设等式。

        **从矩阵等式推可对角化。** 关键是重特征值 $a$ 是否有足够的特征向量。对任意向量 $x$，因 $a\ne b$，可以分解为

        $$
        x=\frac{(A-bE)x}{a-b}+\frac{(A-aE)x}{b-a}.
        $$

        用 $A-aE$ 乘第一项得到零，用 $A-bE$ 乘第二项也得到零（两个矩阵都是 $A$ 的多项式，可以交换）。所以任意 $x$ 都在两个特征子空间的和中，能选出一组特征向量基。两个方向均成立，选 **A：充分必要条件**。

!!! example exercise "☆☆☆ 重特征值的对角化与二次型的正定性"

    设三阶矩阵 $A=\begin{pmatrix}1&0&a\\0&1-a&-2\\-1&0&2\end{pmatrix}$ 的特征值均为实数，$x=(x_1,x_2,x_3)^{\mathsf T}$。

    （1）若 $A$ 可对角化，求参数 $a$ 的取值范围。

    （2）当 $a<0$ 且 $A$ 不可对角化时，判断二次型 $f(x_1,x_2,x_3)=x^{\mathsf T}Ax$ 的正定性。

    ??? success "解析"

        **（1）先找可能的重根。** 沿 $\lambda E-A$ 的第二列展开，特征多项式为 $(\lambda-1+a)(\lambda^2-3\lambda+2+a)$。二次因子判别式为 $1-4a$，故实特征值要求 $a\le\dfrac14$。

        重根有两种来源：二次因子自身有重根，给出 $a=\dfrac14$；一次因子的根 $1-a$ 也使二次因子为零，代入得 $a(a+2)=0$。其余参数下三个实根互异，必可对角化。

        在 $a=\dfrac14,0,-2$ 时，重根依次为 $\dfrac32,1,3$。分别解 $(A-\lambda E)x=0$：第一种要求 $x_3=2x_1,\ x_2=-\dfrac83x_3$；后两种均要求 $x_1=x_3=0$。每次都只有一个自由变量，重根的几何重数为 $1$，不足其代数重数 $2$。故 **$a<\dfrac14$ 且 $a\notin\{-2,0\}$** 时可对角化。

        **（2）检验二次型。** $a<0$ 且不可对角化只剩 $a=-2$。$A$ 不对称，不能直接凭它的特征值判断。取 $x=(1,0,0)^{\mathsf T}$，得 $x^{\mathsf T}Ax=1$；取 $x=(3,0,2)^{\mathsf T}$，得 $9-18+8=-1$。二次型既取正值又取负值，故**不正定**。也可以通过依次计算其顺序主子式，或将 $A$ 变为对应的对称矩阵来说明不正定。


<div class="supplement" markdown="1">
<p class="supplement__title">实对称矩阵与正交对角化</p>

- 若 $A$ 为实对称矩阵，则其特征值均为实数，且属于不同特征值的实特征向量相互正交。
- 若 $A$ 为实对称矩阵，则存在正交矩阵 $Q$，使 $Q^{\mathsf T}AQ=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$，其中 $Q^{\mathsf T}Q=E$，$Q$ 的列向量为 $A$ 的一组标准正交特征向量。

</div>

## 二次型

<div class="supplement" markdown="1">
<p class="supplement__title">二次型的矩阵表示、合同与惯性</p>

- 设 $A=(a_{ij})$ 为实对称矩阵，则 $f(x)=x^{\mathsf T}Ax=\sum_i a_{ii}x_i^2+2\sum_{i\lt j}a_{ij}x_ix_j$；由二次型写矩阵时，交叉项系数取一半填入两个对称位置（为了保持对称性，理论上也可以不对称地表示）。
- 设 $B$ 为实方阵，则 $x^{\mathsf T}Bx=x^{\mathsf T}\dfrac{B+B^{\mathsf T}}2x$。
- 设 $A$ 为实对称矩阵，$f(x)=x^{\mathsf T}Ax$。若作可逆线性变换 $x=Cy$，则 $f=y^{\mathsf T}(C^{\mathsf T}AC)y$，矩阵 $A$ 与 $C^{\mathsf T}AC$ 合同。
- 设 $A$ 为 $n$ 阶实对称矩阵，则存在可逆矩阵 $C$，使 $C^{\mathsf T}AC=\operatorname{diag}(E_p,-E_q,O)$；其中 $p,q$ 分别为正、负惯性指数，均由 $A$ 唯一确定，且 $p+q=r(A)$。
- 设 $A,B$ 为同阶实对称矩阵，则 $A$ 与 $B$ 合同，当且仅当两者的正、负惯性指数分别相同；合同变换保持秩及正、负惯性指数。
- 若已得标准形 $f=\sum_i\lambda_i y_i^2$，则对 $\lambda_i\ne0$ 的项，令 $y_i=z_i/\sqrt{|\lambda_i|}$，零系数对应的变量保持不变，即得非零系数为 $1$ 或 $-1$ 的规范形。

</div>

!!! example exercise "☆☆☆ Gram 矩阵的合同"

    设三阶矩阵 $A$ 可逆且 $A^{-1}=3E-A$。问 $(A-E)^{\mathsf T}(A-E)$ 与下列哪个对角阵合同。

    <div class="exam-options" markdown="1">

    A. $\operatorname{diag}(0,0,1)$

    B. $\operatorname{diag}(0,1,1)$

    C. $\operatorname{diag}(1,0,1)$

    D. $\operatorname{diag}(1,1,1)$
    </div>

    ??? success "解析"

        看到 $(A-E)^{\mathsf T}(A-E)$，先记 $C=A-E$。它已写成 $C^{\mathsf T}EC$；要据此判定与 $E$ 合同，唯一缺少的条件是 $C$ 可逆。$A$ 可逆本身并不能推出 $A-E$ 可逆。

        由 $A^{-1}=3E-A$ 得 $3A-A^2=E$，所以

        $$
        (A-E)(A-2E)=A^2-3A+2E=E.
        $$

        这就找到了 $C$ 的逆矩阵 $A-2E$。因此题设矩阵与三阶单位矩阵合同，选 **D**。


<div class="supplement" markdown="1">
<p class="supplement__title">求正交变换与标准形的一般步骤</p>

- 设 $f(x)=x^{\mathsf T}Ax$，其中 $A$ 为实对称矩阵。先由 $\det(\lambda E-A)=0$ 求出全部特征值。
- 对每个特征值 $\lambda$，解 $(A-\lambda E)\alpha=\mathbf{0}$，求出对应特征子空间的一组实基。
- 设同一特征子空间的一组实基为 $\alpha_1,\ldots,\alpha_s$，则可按下式施密特正交化并单位化，其中 $\langle\cdot,\cdot\rangle$ 为标准内积，$\lVert\cdot\rVert_2$ 为二范数；不同特征值对应的实特征向量已相互正交。

    $$
    \begin{aligned}
    u_1&=\alpha_1,\\
    u_j&=\alpha_j-\sum_{i=1}^{j-1}\frac{\langle\alpha_j,u_i\rangle}{\lVert u_i\rVert^2}u_i
    \quad(j=2,\ldots,s),\\
    q_j&=\frac{u_j}{\lVert u_j\rVert}
    \quad(j=1,\ldots,s).
    \end{aligned}
    $$

- 将各特征子空间所得的标准正交特征向量 $q_j$ 依次作为列组成 $Q$，则 $Q^{\mathsf T}Q=E$。令 $x=Qy$，有 $Q^{\mathsf T}AQ=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$，从而 $f=\sum_{i=1}^n\lambda_i y_i^2$；对角元顺序须与 $Q$ 的列向量顺序一致。

</div>

!!! example exercise "☆☆☆ 单位球上的二次型最小值"

    已知二次型 $f(x_1,x_2,x_3)=2x_1^2+2x_2^2+ax_3^2-2x_1x_2+2x_1x_3-2x_2x_3$，其矩阵为 $A$。向量 $\alpha=(1,b,1)^{\mathsf T}$ 是 $A$ 对应于特征值 $\lambda$ 的一个特征向量，且 $b<0$。

    （1）求 $a,b,\lambda$。

    （2）求正交变换 $x=Qy$，将 $f$ 化为标准形，并写出相应的标准形。

    （3）求 $f$ 在 $x^{\mathsf T}x=1$ 条件下的最小值。

    ??? success "解析"

        **（1）由特征向量求参数。** 把交叉项的系数平分到对称位置，得到 $A=\begin{pmatrix}2&-1&1\\-1&2&-1\\1&-1&a\end{pmatrix}$。将 $A(1,b,1)^{\mathsf T}=\lambda(1,b,1)^{\mathsf T}$ 按行展开：

        $$
        3-b=\lambda,\qquad 2b-2=b\lambda,\qquad 1-b+a=\lambda.
        $$

        前两式给出 $(b-2)(b+1)=0$，用 $b<0$ 选 $b=-1$，再代回得 **$\lambda=4,\ a=2$**。

        **（2）构造正交变换。** 记 $v=(1,-1,1)^{\mathsf T}$。此时 $A=E+vv^{\mathsf T}$，所以每个垂直于 $v$ 的向量都属于特征值 $1$。在这个平面内选两个互相垂直的单位向量，再补上 $v$ 的单位向量：

        $$
        q_1=\frac{(1,1,0)^{\mathsf T}}{\sqrt2},\quad q_2=\frac{(1,-1,-2)^{\mathsf T}}{\sqrt6},\quad q_3=\frac{v}{\sqrt3}.
        $$

        取 $x=Qy$，$Q=(q_1,q_2,q_3)$，标准形为 $y_1^2+y_2^2+4y_3^2$。

        **（3）利用单位球约束。** 正交变换保持长度，$y_1^2+y_2^2+y_3^2=1$。标准形因此等于 $1+3y_3^2$，最小值是 **$1$**，在 $y_3=0$ 的单位向量上取到。这里选正交变换很重要：一般的可逆变换会改变单位球约束。


<div class="supplement" markdown="1">
<p class="supplement__title">正定与半正定判据</p>

- 设 $A$ 为实对称矩阵，则 $A$ 正定，当且仅当对任意实向量 $x\ne\mathbf{0}$，有 $x^{\mathsf T}Ax>0$。
- 设 $A$ 为实对称矩阵，则 $A$ 正定，当且仅当其全部特征值均为正数。
- 设 $A$ 为 $n$ 阶实对称矩阵，$\Delta_k$ 为其前 $k$ 阶顺序主子式，则 $A$ 正定，当且仅当 $\Delta_k>0$ 对 $k=1,\ldots,n$ 均成立。
- 设 $A$ 为实对称矩阵，则 $A$ 正定，当且仅当存在可逆实矩阵 $C$，使 $A=C^{\mathsf T}C$。
- 设 $A$ 为实对称矩阵，则 $A$ 半正定，当且仅当其全部特征值非负，也当且仅当其所有主子式非负。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">正定矩阵的性质</p>

- 若 $A$ 为实对称正定矩阵，则 $A$ 可逆，且 $\det A>0$、$\operatorname{tr}(A)>0$。
- 若 $A$ 为实对称正定矩阵，则 $A^{-1}$ 也是实对称正定矩阵。
- 若 $A,B$ 为同阶实对称正定矩阵，且 $a,b\ge0$、$a+b>0$，则 $aA+bB$ 也是实对称正定矩阵。
- 若 $A$ 为 $n$ 阶实对称正定矩阵，$C$ 为满列秩的 $n\times m$ 实矩阵，则 $C^{\mathsf T}AC$ 为 $m$ 阶实对称正定矩阵。
- 若 $A$ 为实对称正定矩阵，则其任意非空主子矩阵均正定。
- 若 $A,B$ 为同阶实对称正定矩阵，则 $AB$ 为实对称正定矩阵，当且仅当 $AB=BA$。
- 若 $A$ 为实对称正定矩阵，其最小、最大特征值分别为 $\lambda_{\min},\lambda_{\max}$，则对任意实向量 $x$，有 $\lambda_{\min}\lVert x\rVert^2\le x^{\mathsf T}Ax\le\lambda_{\max}\lVert x\rVert^2$。

</div>
