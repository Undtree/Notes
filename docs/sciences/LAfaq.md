# 线性代数 FAQ

## 行列式

<div class="supplement" markdown="1">
<p class="supplement__title">基本运算性质</p>

- 设 $E,O$ 分别为 $n\ge1$ 阶单位矩阵和零矩阵，则 $\det E=1$，$\det O=0$。
- 设 $A$ 为 $n$ 阶方阵、$c$ 为标量，则 $\det(A^{\mathsf T})=\det A$，$\det(cA)=c^n\det A$。
- 设 $A,B$ 均为 $n$ 阶方阵，则 $\det(AB)=\det A\cdot\det B$。
- 若 $A$ 可逆，则 $\det(A^{-1})=\dfrac{1}{\det A}$。
- 设 $A$ 为 $n\ge2$ 阶方阵、$A^*$ 为其伴随矩阵，则 $\det(A^*)=(\det A)^{n-1}$。

</div>

<div class="supplement" markdown="1">
<p class="supplement__title">初等变换与按行（列）展开</p>

- 交换行列式的两行（列），行列式变号。
- 将行列式的某一行（列）乘以标量 $c$，所得行列式值等于原行列式值的 $c$ 倍。
- 将行列式的某一行（列）的 $c$ 倍加到另一行（列），行列式不变。
- 设 $C_{ij}$ 为 $n$ 阶方阵 $A=(a_{ij})$ 中 $a_{ij}$ 的代数余子式，则对任意 $i,j$，有 $\det A=\sum_{k=1}^n a_{ik}C_{ik}=\sum_{k=1}^n a_{kj}C_{kj}$。

</div>

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
    =a_1\prod_{i=2}^n a_i
    -\sum_{i=2}^n b_ic_i\prod_{\substack{2\le j\le n\\j\ne i}}a_j.
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

## 向量组

<div class="supplement" markdown="1">
<p class="supplement__title">向量组的秩与线性表示</p>

- $r(A)$ 等于其行向量组的秩，也等于其列向量组的秩。
- 设 $A,B$ 行数相同，则 $\max\{r(A),r(B)\}\le r([A\ B])\le r(A)+r(B)$；纵向拼接也有对应结论。
- 设 $A,B$ 行数相同，则 $r([A\ B])=r(A)$ 当且仅当 $B$ 的每一列均可由 $A$ 的列线性表示。

</div>

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
<p class="supplement__title">非齐次方程组与矩阵方程</p>

- 设 $A,b$ 行数相同，则 $Ax=b$ 有解 $\iff r(A)=r([A\ b])$。
- 设 $A$ 有 $n$ 列，则 $Ax=b$ 有唯一解 $\iff r(A)=r([A\ b])=n$。
- 设 $A$ 为有 $n$ 列的实或复矩阵，则 $Ax=b$ 有无穷多解 $\iff r(A)=r([A\ b])\lt n$，自由参数个数为 $n-r(A)$。
- 设 $A$ 有 $m$ 行，则 $Ax=b$ 对同一数域上的任意 $m$ 维列向量 $b$ 均有解 $\iff r(A)=m$。
- 设 $A,B$ 行数相同，则 $AX=B$ 有解 $\iff r([A\ B])=r(A)$。

</div>

## 特征值

<div class="supplement" markdown="1">
<p class="supplement__title">特征值的基本性质</p>

- 设 $A$ 为 $n$ 阶方阵、$E$ 为 $n$ 阶单位矩阵，则 $\lambda$ 为 $A$ 的特征值，当且仅当 $\det(\lambda E-A)=0$；对应的特征向量为 $(A-\lambda E)\alpha=\mathbf{0}$ 的非零解。
- 设 $n$ 阶方阵 $A$ 的全部特征值为 $\lambda_1,\ldots,\lambda_n$，按代数重数计，则 $\operatorname{tr}(A)=\sum_{i=1}^n\lambda_i$，$\det A=\prod_{i=1}^n\lambda_i$。
- 设 $A$ 为方阵，则 $A$ 可逆，当且仅当 $0$ 不是 $A$ 的特征值。
- 若 $A$ 为上三角或下三角矩阵，则其特征值为主对角线元素，重复次数即相应的代数重数。
- 设 $A$ 为方阵，则 $A$ 与 $A^{\mathsf T}$ 的特征多项式相同，特征值及其代数重数相同。

</div>

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

<div class="supplement" markdown="1">
<p class="supplement__title">相似对角化</p>

- 设 $A$ 为数域 $\mathbb F$ 上的 $n$ 阶方阵，则 $A$ 在 $\mathbb F$ 上可相似对角化，当且仅当它在 $\mathbb F^n$ 中有 $n$ 个线性无关的特征向量。
- 设 $A$ 为 $n$ 阶方阵。若 $A\alpha_i=\lambda_i\alpha_i$，且 $\alpha_1,\ldots,\alpha_n$ 线性无关，则取 $P=(\alpha_1,\ldots,\alpha_n)$，有 $P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$，对角元顺序与 $P$ 的列向量顺序一致。
- 若 $n$ 阶方阵 $A$ 在数域 $\mathbb F$ 中有 $n$ 个互不相同的特征值，则 $A$ 在 $\mathbb F$ 上可相似对角化。
- 若 $A$ 的特征多项式在数域 $\mathbb F$ 上可分解为一次因子的乘积，则 $A$ 在 $\mathbb F$ 上可相似对角化，当且仅当每个特征值的几何重数等于其代数重数。
- 若 $A,B$ 在同一数域上均可相似对角化，则 $A\sim B$ 当且仅当两者的特征值按代数重数计完全相同。
- 若 $P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$，则对任意正整数 $k$，有 $A^k=P\operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)P^{-1}$。

</div>

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
