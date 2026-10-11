# 概率论与数理统计

<style id="pas-math-spacing">
/* 仅调整本页行间公式的留白；修改这一变量即可调整间距。 */
.md-typeset:has(> #pas-math-spacing) {
    --pas-display-math-gap: .35em;
}

.md-typeset:has(> #pas-math-spacing) div.arithmatex {
    margin-block: var(--pas-display-math-gap);
}

.md-typeset:has(> #pas-math-spacing) div.arithmatex .katex-display {
    margin: 0;
}

.md-typeset:has(> #pas-math-spacing) :is(p, ul, ol):has(+ div.arithmatex) {
    margin-block-end: var(--pas-display-math-gap);
}

.md-typeset:has(> #pas-math-spacing) div.arithmatex + :is(p, ul, ol) {
    margin-block-start: var(--pas-display-math-gap);
}
</style>

## 随机事件与概率

### 基本概念

#### 随机试验

**随机试验**通常记为 $E$，具有以下三个特点：

- **可重复性**：可以在相同条件下重复进行。
- **可预知性**：每次试验的可能结果不止一个，且所有可能结果事先明确。
- **不确定性**：试验前不能确定本次会出现哪一个结果。

例如，掷一枚骰子，可以事先列出点数 $1,2,\ldots,6$，但不能预先确定某次的点数。

#### 随机事件

**随机事件**是随机试验中可能发生、也可能不发生的事情，通常用 $A,B,C$ 等表示。事件由满足某种条件的一组试验结果构成；当试验结果属于这组结果时，称该事件发生。

- **基本事件**：只包含一个样本点的事件。
- **必然事件**：每次试验一定发生的事件，记为 $\Omega$。
- **不可能事件**：每次试验都不发生的事件，记为 $\varnothing$。

例如，掷一枚骰子时，“点数为偶数”对应事件 $A=\{2,4,6\}$，“点数为 $2$”对应基本事件 $\{2\}$。

#### 样本空间

随机试验的每一个可能结果称为一个**样本点**，记为 $\omega$；所有样本点组成的集合称为**样本空间**，记为 $\Omega$。

事件可以用样本空间的子集表示。当试验结果 $\omega\in A$ 时，事件 $A$ 发生。

- 掷一枚骰子：$\Omega=\{1,2,3,4,5,6\}$。
- 连续掷两枚硬币：$\Omega=\{(\text{正},\text{正}),(\text{正},\text{反}),(\text{反},\text{正}),(\text{反},\text{反})\}$。
- 记录某元件的寿命：$\Omega=[0,+\infty)$。

严格地说，事件应属于指定的事件集合族 $\mathcal F$；有限或可数样本空间通常可取全部子集为事件，连续样本空间则需考虑可测性。

#### 事件的关系与运算

用集合描述事件，可以把“或”“且”“不发生”等语言转化为集合关系和运算。以下约定 $AB=A\cap B$，$\overline A=\Omega\setminus A$。

???+ note "关系与基本运算"

    <center markdown="1">

    | 名称 | 记号或条件 | 含义 |
    | --- | --- | --- |
    | 包含 | $A\subseteq B$ | $A$ 发生必然导致 $B$ 发生 |
    | 相等 | $A=B$ | $A\subseteq B$ 且 $B\subseteq A$，两者包含相同的样本点 |
    | 积（交） | $AB=A\cap B$ | $A$ 与 $B$ 同时发生 |
    | 相容 | $A\cap B\ne\varnothing$ | $A$ 与 $B$ 可以同时发生 |
    | 互斥（不相容） | $A\cap B=\varnothing$ | $A$ 与 $B$ 不能同时发生 |
    | 和（并） | $A\cup B$ | $A$ 与 $B$ 至少有一个发生 |
    | 差 | $A-B=A\setminus B=A\overline B$ | $A$ 发生而 $B$ 不发生 |
    | 逆（对立） | $\overline A=\Omega\setminus A$ | $A$ 不发生 |

    </center>

    -   对立事件满足 $A\cap\overline A=\varnothing$ 且 $A\cup\overline A=\Omega$，即在互斥的基础上还要求两事件的并为整个样本空间。因此，对立必然互斥，互斥未必对立。

    -   多个事件中，“至少一个发生”可以写成 $\bigcup_{i=1}^n A_i$，“全部发生”可以写成 $\bigcap_{i=1}^n A_i$。对两个事件，“恰有一个发生”可以写成 $A\overline B\cup\overline A B$。

???+ note "运算法则"

    <center markdown="1">

    | 法则 | 公式 |
    | --- | --- |
    | 吸收律 | $A\cup(A\cap B)=A$；$A\cap(A\cup B)=A$ |
    | 交换律 | $A\cup B=B\cup A$；$A\cap B=B\cap A$ |
    | 结合律 | $(A\cup B)\cup C=A\cup(B\cup C)$；$(A\cap B)\cap C=A\cap(B\cap C)$ |
    | 分配律 | $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$；$A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$ |
    | 对偶律（德·摩根律） | $\overline{A\cup B}=\overline A\cap\overline B$；$\overline{A\cap B}=\overline A\cup\overline B$ |

    </center>

    对偶律也适用于有限或可数个事件：

    $$
    \overline{\bigcup_i A_i}=\bigcap_i\overline{A_i},
    \qquad
    \overline{\bigcap_i A_i}=\bigcup_i\overline{A_i}.
    $$

    换句话说，“至少一个发生”的对立事件是“全部不发生”，“全部发生”的对立事件是“至少一个不发生”。

???+ Example "练习"

    设 $A, B, C$ 是在同一样本空间的任意三个事件，则下列选项中正确的是（  ）。

    A. 若 $A \cup C = B \cup C$，则 $A = B$
    
    B. 若 $A - C = B - C$，则 $A = B$
    
    C. 若 $AC = BC$，则 $A = B$
    
    D. 若 $AB = \varnothing$ 且 $\overline A \overline B = \varnothing$，则 $\overline A = B$

    ??? success "解答"

        D.

        对于 A.，考虑 $A \cup C = B \cup C = \Omega$。

        对于 B.，考虑 $AC \neq BC$。

        对于 C.，考虑 $A-C \neq B-C$。

#### 概率的定义

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**描述性定义**

事件 $A$ 的概率 $P(A)$ 是衡量事件 $A$ 发生可能性大小的数值，取值在 $[0,1]$ 内。这给出了直观含义，严格的数学基础由公理化定义提供。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**统计性定义**

在相同条件下重复进行 $n$ 次试验，若事件 $A$ 发生了 $n_A$ 次，则称 $f_n(A)=\dfrac{n_A}{n}$ 为事件 $A$ 的**频率**。在大量重复试验中，频率通常在某个常数附近稳定下来，用这个常数刻画 $P(A)$。

频率随试验结果变化，概率是给定模型中的确定数值；有限次试验的频率一般不等于概率，也不保证随试验次数增加而单调接近概率。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**公理化定义**

设 $\Omega$ 为样本空间，$\mathcal F$ 为事件集合族。若定义在 $\mathcal F$ 上的函数 $P$ 满足以下三条公理，则称 $P$ 为概率：

1. **非负性**：对任意事件 $A$，$P(A)\ge 0$。
2. **规范性**：$P(\Omega)=1$。
3. **可列可加性**：若事件 $A_1,A_2,\ldots$ 两两互斥，则

$$
P\left(\bigcup_{i=1}^{\infty}A_i\right)
=\sum_{i=1}^{\infty}P(A_i).
$$

</div>
</div>

### 古典概型和几何概型

#### 古典概型

古典概型具有两个条件：**样本点总数有限**，且**各样本点等可能**。若 $\Omega$ 中有 $n$ 个样本点，事件 $A$ 包含其中 $m$ 个，则

$$
P(A)=\frac{\lvert A\rvert}{\lvert\Omega\rvert}=\frac{m}{n}.
$$

计数时，分子、分母必须采用一致的标准：是否区分对象、是否考虑顺序、是否允许重复，都应先明确。

常用计数公式为

$$
A_n^r=\frac{n!}{(n-r)!},
\qquad
C^{r}_{n}=\frac{n!}{r!(n-r)!},
\qquad 0\le r\le n,\quad 0!=1.
$$

其中，排列数 $A_n^r$ 考虑顺序，组合数 $C^{r}_{n}$ 不考虑顺序。

???+ note "随机分配问题"

    将 $n$ 个**可区分**的物品独立、等概率地投入 $m$ 个**可区分**的盒子，每个物品都有 $m$ 种选择，等可能分配方式共 $m^n$ 种。

    - 指定盒子为空的概率为 $\left(1-\frac1m\right)^n$。
    - 当 $n\le m$ 时，每个盒子至多有一个物品的概率为 $\frac{A_m^n}{m^n}$。
    - 指定各盒物品数为 $n_1,\ldots,n_m$，其中 $n_i\ge0$、$\sum_{i=1}^m n_i=n$ 时，概率为

    $$
    P=\frac{n!}{n_1!n_2!\cdots n_m!}\left(\frac1m\right)^n.
    $$

    不同的“盒内数量组合”一般不等可能。例如，两个物品投入两个盒子时，数量组合 $(2,0)$、$(1,1)$、$(0,2)$ 的概率分别为 $\frac14,\frac12,\frac14$。

???+ note "简单随机抽样问题"

    从 $N$ 个可区分个体中抽取 $n$ 个：

    <center markdown="1">

    | 抽样方式 | 等可能样本的计数方式 | 样本总数 |
    | --- | --- | --- |
    | 不放回，考虑顺序 | 长度为 $n$、无重复的有序序列 | $A_N^n$ |
    | 不放回，不考虑顺序 | 含 $n$ 个个体的子集 | $C^{n}_{N}$ |
    | 有放回，各次独立且均匀抽取，考虑顺序 | 长度为 $n$、允许重复的有序序列 | $N^n$ |

    </center>

    简单随机不放回抽样通常指：总体中每个容量为 $n$ 的子集被抽到的概率相同。

    若总体 $N$ 个个体中有 $M$ 个具有某特征，不放回抽取 $n$ 个，恰有 $k$ 个具有该特征的概率为

    $$
    P=\frac{C^{k}_{M}C^{n-k}_{N-M}}{C^{n}_{N}},
    \qquad
    \max(0,n-N+M)\le k\le\min(n,M).
    $$

    这就是超几何分布的抽样背景。若改为独立、有放回地抽取，则每次抽中特征个体的概率恒为 $M/N$，可使用后面的二项概率公式。

#### 几何概型

当样本空间为某个几何区域，且随机点在该区域内**均匀选取**，概率与区域的几何度量成正比时，有

$$
P(A)=\frac{\mu(A)}{\mu(\Omega)},
\qquad 0\lt \mu(\Omega)\lt \infty.
$$

其中 $\mu$ 在一维、二维、三维问题中分别表示长度、面积、体积，事件 $A$ 对应可测的有利区域。

例如，在区间 $[0,1]$ 上均匀取一点 $X$，则

$$
P\left(\frac14\le X\le\frac34\right)
=\frac{\frac34-\frac14}{1-0}=\frac12.
$$

!!! Warning "使用时注意"

    -   “随机选取”应落实为具体的均匀性假设，不能仅凭几何图形就直接取面积比或长度比。
    -   非空事件的概率可以为 $0$。例如在几何概型中，$P(X=\dfrac12)=0$，但 $\{\dfrac12\}$ 不是空集。
    -   同理，概率为 $1$ 的事件未必等于样本空间。因此，$P(A)=0$ 不一定表示 $A=\varnothing$，$P(A)=1$ 不一定表示 $A=\Omega$。

### 概率的性质与公式

#### 性质

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**有界性**

对任意事件 $A$， $0\le P(A)\le1, \qquad P(\varnothing)=0,\quad P(\Omega)=1.$

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**单调性**

若 $A\subseteq B$，则 $P(A)\le P(B).$

因为 $B=A\cup(B-A)$ 且右侧两事件互斥，所以 $P(B)=P(A)+P(B-A)\ge P(A)$。

反过来，$P(A)\le P(B)$ 不一定推出 $A\subseteq B$；概率相等也不一定意味着事件相等。

</div>
</div>

#### 公式

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**逆事件概率公式**

$P(\overline A)=1-P(A).$

遇到“至少一个”“不全是”等事件时，可以先求其对立事件的概率。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**加法公式**

对任意两个事件 $A,B$， $P(A\cup B)=P(A)+P(B)-P(AB).$

若 $A,B$ 互斥，则简化为 $P(A\cup B)=P(A)+P(B)$。

对三个事件，

$$
P(A\cup B\cup C)
=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC).
$$

一般情形按容斥原理展开：先加单个事件的概率，减去两两交的概率，加上三者交的概率，依次交替。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**减法公式**

$P(A-B)=P(A)-P(AB).$

特别地，当 $B\subseteq A$ 时， $P(A-B)=P(A)-P(B).$

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**条件概率公式**

若 $P(B)>0$，则在事件 $B$ 已发生的条件下，事件 $A$ 发生的概率为

$$
P(A\mid B)=\frac{P(AB)}{P(B)}.
$$

这里相当于把考察范围缩小到 $B$，再对 $AB$ 的概率进行归一化。通常 $P(A\mid B)\ne P(B\mid A)$。

固定条件 $B$ 后，条件概率仍满足概率的基本性质，例如 $P(\overline A\mid B)=1-P(A\mid B).$

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**乘法公式**

由条件概率的定义可得 $P(AB)=P(B)P(A\mid B)\quad(P(B)>0),$

以及 $P(AB)=P(A)P(B\mid A)\quad(P(A)>0).$

对多个事件，在相关条件事件概率均为正时，

$$
P(A_1A_2\cdots A_n)
=P(A_1)\prod_{i=2}^{n}
P(A_i\mid A_1A_2\cdots A_{i-1}).
$$

乘法公式本身不要求事件独立；独立时，才可以把相应条件概率替换为无条件概率。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**全概率公式**

若 $B_1,\ldots,B_n$ 构成样本空间的一个**划分（完备事件组）**，即

$$
B_i\cap B_j=\varnothing\quad(i\ne j),
\qquad
\bigcup_{i=1}^n B_i=\Omega,
\qquad
P(B_i)>0,
$$

则对任意事件 $A$，

$$
P(A)=\sum_{i=1}^nP(B_i)P(A\mid B_i).
$$

它将事件 $A$ 按互斥且穷尽的情况分解，再把各情况下的概率加权求和。常用于“已知各来源比例及各来源下的发生概率，求总体发生概率”。

特别地，当 $0\lt P(B)\lt 1$ 时， $P(A)=P(B)P(A\mid B)+P(\overline B)P(A\mid\overline B).$

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**贝叶斯公式（逆概率公式）**

在上述划分条件下，若 $P(A)>0$，则

$$
P(B_j\mid A)
=\frac{P(B_j)P(A\mid B_j)}
{\sum_{i=1}^nP(B_i)P(A\mid B_i)}.
$$

其中，$P(B_j)$ 是观察到 $A$ 之前的**先验概率**，$P(B_j\mid A)$ 是观察到 $A$ 之后的**后验概率**。它常用于“已知结果，反推来源”。

例如，两台机器提供的产品分别占 $60\%$、$40\%$，次品率分别为 $1\%$、$2\%$。令 $D$ 表示抽到次品，$B_2$ 表示产品来自第二台机器，则 $P(D)=0.6\times0.01+0.4\times0.02=0.014,$ $\displaystyle P(B_2\mid D)=\frac{0.4\times0.02}{0.014}=\frac47.$

全概率公式由各来源求结果的概率，贝叶斯公式在结果已知时求来源的条件概率。

</div>
</div>

!!! example "公式的使用条件"

    已知 $0 \lt P(A) \lt 1$ 且 $P(B+C|A) = P(B|A) + P(C|A)$，则以下结论：

    ① $P(B+C) = P(B) + P(C)$；

    ② $P(B+C) = P(B|A) + P(C|A)$；

    ③ $P(B+C|\overline A) = P(B|\overline A) + P(C|\overline A)$；

    ④ $P(BA+CA) = P(BA) + P(CA)$。

    正确的是 $\underline\qquad$。

### 事件的独立性和独立重复试验

#### 事件的独立性

若事件 $A,B$ 满足 $P(AB)=P(A)P(B),$ 则称 $A,B$ **相互独立**。当 $P(B)>0$ 时，这等价于 $P(A\mid B)=P(A)$，即知道 $B$ 发生不会改变 $A$ 的发生概率。

对多个事件，需要区分：

- **两两独立**：任意两个不同事件均独立，即 $P(A_iA_j)=P(A_i)P(A_j)$。
- **相互独立**：任取至少两个事件，其交的概率都等于各自概率的乘积，即对任意 $2\le k\le n$ 及任意 $i_1\lt \cdots\lt i_k$，

$$
P(A_{i_1}\cdots A_{i_k})
=\prod_{r=1}^kP(A_{i_r}).
$$

??? Warning "相互独立必然两两独立，两两独立未必相互独立。"
    特别地，三个事件相互独立需要同时验证三个两两乘积等式以及 $P(ABC)=P(A)P(B)P(C)$，仅验证最后一个等式也不够。

    例如，独立抛掷两枚均匀硬币，令 $A$ 表示第一枚正面，$B$ 表示第二枚正面，$C$ 表示两枚朝向相同。三个事件的概率均为 $\frac12$，任意两个事件交的概率均为 $\frac14$，但 $\displaystyle P(ABC)=\frac14\ne\frac18=P(A)P(B)P(C).$

    因此，这三个事件两两独立，但不相互独立。

#### 独立性的判定

???+ note "定义直接判定"

    优先检验 $P(AB)=P(A)P(B)$。若已知相关条件事件的概率大于 $0$，也可检验 $P(A\mid B)=P(A)$ 或 $P(B\mid A)=P(B)$。

???+ note "独立性的判定定理"

    ① 以下四个命题等价：

    - $A$ 与 $B$ 独立。
    - $A$ 与 $\overline B$ 独立。
    - $\overline A$ 与 $B$ 独立。
    - $\overline A$ 与 $\overline B$ 独立。

    !!! Success "证明"
        
        若 $A,B$ 独立，则

        $$
        P(A\overline B)=P(A)-P(AB)
        =P(A)[1-P(B)]
        =P(A)P(\overline B).
        $$

    ② 对于相互独立的多个事件，将其中任意一些换成各自的对立事件后，仍相互独立。

    ③ 若 $P(A)=0$ 或 $P(A)=1$，则 $A$ 与任意事件 $B$ 相互独立。

!!! tip "互斥与独立的区别"

    <center markdown="1">

    | 比较项 | 互斥 | 独立 |
    | --- | --- | --- |
    | 判定条件 | $AB=\varnothing$ | $P(AB)=P(A)P(B)$ |
    | 含义 | 不能同时发生 | 一个事件的发生不改变另一个事件的概率（条件概率有定义时） |
    | 当 $P(A),P(B)>0$ | 不可能独立 | 不可能互斥 |

    </center>

    若 $A,B$ 互斥且两者概率均大于 $0$，则 $P(AB)=0\lt P(A)P(B)$，所以不独立。

#### 独立试验序列概型与 n 重伯努利概型

???+ note "独立试验序列概型"

    若各次试验相互独立，第 $i$ 次试验中指定事件 $A_i$ 的概率为 $p_i$，则 $\displaystyle P(A_1A_2\cdots A_n)=\prod_{i=1}^n p_i.$

    各次试验可以具有不同的结果类别或不同的事件概率。若每次都关注某事件是否发生，则

    $$
    P(\text{一次也不发生})=\prod_{i=1}^n(1-p_i),\\
    P(\text{至少发生一次})=1-\prod_{i=1}^n(1-p_i).
    $$

!!! note "n 重伯努利概型"

    $n$ 重伯努利试验满足：

    - 共进行固定的 $n$ 次试验。
    - 各次试验相互独立。
    - 每次只区分“成功”与“失败”两种结果。
    - 每次成功的概率恒为 $p$，失败的概率恒为 $1-p$。

    这里“成功”仅指所关注的事件发生，并不表示结果一定有利。

    设 $X$ 为 $n$ 次试验中的成功次数，则 $X$ 服从**二项分布**，记为 $X\sim B(n,p)$，且

    $$
    P(X=k)=C^{k}_{n} p^k(1-p)^{n-k},
    \qquad k=0,1,\ldots,n.
    $$

    当 $p=0$ 或 $p=1$ 时，分别有 $X=0$ 或 $X=n$ 几乎必然成立。

    固定某 $k$ 次成功、其余失败的一个指定序列，其概率为 $p^k(1-p)^{n-k}$；“恰有 $k$ 次成功”允许成功位置变化，共有 $C^{k}_{n}$ 种互斥的位置选择。

    常用结果：

    $P(X=0)=(1-p)^n,\qquad P(X=n)=p^n,$ $P(X\ge1)=1-(1-p)^n,$

    $$
    P(X\le r)=\sum_{k=0}^{r}C^{k}_{n} p^k(1-p)^{n-k},
    \qquad r=0,1,\ldots,n.
    $$

    !!! warning "使用二项分布公式前，必须确认“独立”和“成功概率不变”；不放回抽样通常不满足这两个条件。"

    ???+ info "多项分布"

        若每次独立重复试验有 $r$ 类互斥且穷尽的结果，类别概率恒为 $p_1,\ldots,p_r$，且 $\sum_{i=1}^r p_i=1$，则 $n$ 次试验中各类分别出现 $n_1,\ldots,n_r$ 次的概率为

        $$
        P=\frac{n!}{n_1!n_2!\cdots n_r!}
        \prod_{i=1}^r p_i^{n_i},
        \qquad n_i\ge0,\quad \sum_{i=1}^r n_i=n.
        $$

        这就是多项分布的试验背景；二项分布是 $r=2$ 时的特殊情形。

### 小结

!!! example "习题"

    1. 袋中有 $3$ 个红球、$2$ 个蓝球，各球可区分。不放回地等可能抽取 $2$ 个，求恰有一个红球的概率；若改为独立有放回抽取，答案如何变化？
    2. 将 $3$ 个可区分的物品独立、等概率地放入 $3$ 个可区分的盒子。求没有空盒的概率，以及指定的第一个盒子为空的概率。为什么不能把所有盒内数量组合看作等可能？
    3. 甲、乙独立地在一小时内均匀到达约定地点，每人到达后最多等待 $15$ 分钟。求两人见面的概率，并写出所用的样本空间和事件区域。
    4. 甲、乙两条生产线分别提供 $70\%$、$30\%$ 的产品，次品率分别为 $2\%$、$5\%$。随机抽取一件产品，求次品概率；若已知是次品，求其来自乙线的概率。

    5. 四个元件相互独立，每个正常工作的概率为 $0.8$。系统至少有三个元件正常时才工作。求系统工作概率；已知系统工作，求四个元件全部正常的条件概率。
    6. 独立掷两枚均匀硬币。令 $A$ 为“第一枚正面”、$B$ 为“第二枚正面”、$C$ 为“两枚结果相同”。证明三事件两两独立，并判断它们是否相互独立。

    ??? success "解答"

        1. 不放回时为 $C_3^1C_2^1/C_5^2=3/5$；有放回时为 $2(3/5)(2/5)=12/25$。
        2. 没有空盒的概率为 $3!/3^3=2/9$；第一个盒子为空的概率为 $(2/3)^3=8/27$。数量组合 $(3,0,0)$ 只对应一种有序投放结果，而 $(1,1,1)$ 对应六种。
        3. 以小时为单位，样本空间为 $[0,1]^2$，见面区域为 $|x-y|\le1/4$。概率为 $1-(3/4)^2=7/16$。
        4. $P(D)=0.7\times0.02+0.3\times0.05=0.029$；$P(\text{乙}\mid D)=0.015/0.029=15/29$。
        5. 工作概率为 $C_4^3(0.8)^3(0.2)+(0.8)^4=0.8192$；条件概率为 $(0.8)^4/0.8192=1/2$。
        6. 三事件概率均为 $1/2$，任意两事件交的概率均为 $1/4$，但 $P(ABC)=1/4\ne1/8$，所以不是相互独立。

## 一维随机变量及其分布

### 一维随机变量及其分布函数

#### 一维随机变量

设随机试验的样本空间为 $\Omega$，若对每个样本点 $\omega\in\Omega$，都有一个实数 $X(\omega)$ 与之对应，则称满足可测性要求的实值函数 $X=X(\omega)$ 为**一维随机变量**，通常用 $X,Y,Z$ 等表示。

这里的可测性要求是：对任意实数 $x$，集合 $\{\omega:X(\omega)\le x\}$ 都是事件，从而可以讨论它的概率。

!!! tip "随机变量的实质就是“实值单值函数”，和 $y=y(x)$ 这类定义域在实数集内部的“函数”有所区别。"

- **随机变量 $X$** 是从试验结果到实数的映射。
- **取值 $x$** 是随机变量可能取得的某个具体数值。
- $\{X\le x\}$、$\{a\lt X\le b\}$ 等表示由随机变量确定的事件，概率计算中常省略花括号。

例如，连续掷两枚硬币，令 $X$ 表示出现正面的次数，则

$$
X(\text{反},\text{反})=0,\qquad
X(\text{正},\text{反})=X(\text{反},\text{正})=1,\qquad
X(\text{正},\text{正})=2.
$$

不同样本点可以对应同一个随机变量取值。随机变量的**分布**描述其取值所遵循的概率规律。

#### 分布函数

???+ note "分布函数的概念"

    随机变量 $X$ 的**分布函数**定义为 $F_X(x)=P(X\le x),\qquad x \in \mathbb{R}.$

    不致混淆时记为 $F(x)$。分布函数给出随机变量落在 $(-\infty,x]$ 内的概率，适用于离散型、连续型和混合型等各种随机变量，并能唯一确定其分布。我们称 $X$ 服从 $F(x)$ 分布，记作 $X \sim F(x)$。

分布函数满足：

-   **单调不减**：若 $x_1\lt x_2$，则 $F(x_1)\le F(x_2)$。
-   **有界性与两端极限**：

    $$
    0\le F(x)\le1,\qquad
    \lim_{x\to-\infty}F(x)=0,\qquad
    \lim_{x\to+\infty}F(x)=1.
    $$

-   **右连续性**：对任意 $x$，$\lim_{t\to x^+}F(t)=F(x)$。

上面三个性质是一个实函数成为某个随机变量分布函数的 **充要条件**，缺一不可。

记左极限为 $\displaystyle F(x^-)=\lim_{t\to x^-}F(t)=P(X\lt x).$

则 $P(X=x)=F(x)-F(x^-).$

因此，分布函数在 $x$ 处的跳跃量就是 $X$ 取值为 $x$ 的概率；$F$ 在 $x$ 处连续，当且仅当 $P(X=x)=0$。

!!! Example "分布函数的判断"
    已知 $F(x)$ 是分布函数。下列函数中：

    ① $aF(x)~(a\gt 0,a\neq 1)$；② $F(x)+F(-x)$；③ $F(x)-F(-x)$；④ $F(x)\cdot F(-x)$.

    不能作为分布函数的是？

    ??? Success "答案"
        答案是都不行。

        -   对于 ①，当 $x\to+\infty$ 时，$aF(x)\to a \neq 1$，因此不可能是分布函数；
        -   对于 ②，当 $x\to-\infty$ 时，$F(x)+F(-x)\to 1 \neq 0$，因此不可能是分布函数；
        -   对于 ③，当 $x\to-\infty$ 时，$F(x)-F(-x)\to -1 \neq 0$，因此不可能是分布函数；
        -   对于 ④，当 $x\to+\infty$ 时，$F(x)F(-x)\to 0 \neq 1$，因此不可能是分布函数。

**应用——求概率**

对任意 $a\lt b$，区间概率可统一表示为：

<center markdown="1">

| 事件 | 概率 |
| --- | --- |
| $X\le a$ | $F(a)$ |
| $X\lt a$ | $F(a^-)$ |
| $X>a$ | $1-F(a)$ |
| $X\ge a$ | $1-F(a^-)$ |
| $a\lt X\le b$ | $F(b)-F(a)$ |
| $a\le X\le b$ | $F(b)-F(a^-)$ |
| $a\lt X\lt b$ | $F(b^-)-F(a)$ |
| $a\le X\lt b$ | $F(b^-)-F(a^-)$ |

</center>

端点是否包含，在端点概率不为 $0$ 时会影响结果。只有确认相应端点的概率为 $0$ 后，才可忽略开闭区间的区别。

### 一维离散型随机变量

#### 分布律

若随机变量 $X$ 以概率 $1$ 取有限个或可数无穷个值 $x_1,x_2,\ldots$，则称 $X$ 为**离散型随机变量**。

各个取值及其对应概率 $P(X=x_k)=p_k,\qquad k=1,2,\ldots$ 构成 $X$ 的**分布律**，也称概率质量函数，可用表格表示：

<center markdown="1">

| $X$ | $x_1$ | $x_2$ | $\cdots$ |
| --- | --- | --- | --- |
| $P$ | $p_1$ | $p_2$ | $\cdots$ |

</center>

---

例如，两枚独立均匀硬币的正面次数 $X$ 的分布律为：

<center markdown="1">

| $X$ | $0$ | $1$ | $2$ |
| --- | --- | --- | --- |
| $P$ | $\frac14$ | $\frac12$ | $\frac14$ |

</center>

#### 性质

分布律满足两个基本条件： $\displaystyle p_k\ge0,\qquad \sum_k p_k=1.$

反过来，一组对应于互异取值的概率只要满足非负性和归一性，就可以构成离散型随机变量的分布律。遇到含未知常数的分布律，可以利用这两个条件确定常数及其允许范围。

分布律与分布函数的关系为 $\displaystyle F(x)=\sum_{x_k\le x}p_k.$

当取值按 $x_1\lt x_2\lt \cdots$ 排列时，$F$ 在相邻取值之间保持不变，在每个 $x_k$ 处向上跳跃 $p_k$，并在跳跃点取跳跃后的函数值。

---

上面提到的例子中，正面次数的分布函数为

$$
F(x)=
\begin{cases}
0, & x\lt 0,\\
\displaystyle\frac14, & 0\le x\lt 1,\\
\displaystyle\frac34, & 1\le x\lt 2,\\
1, & x\ge2.
\end{cases}
$$

#### 应用——求概率

对取值范围 $D$，将所有落在 $D$ 内的取值概率相加：

$$
P(X\in D)=\sum_{x_k\in D}p_k.
$$

---

例如， $\displaystyle P(a\lt X\le b)=\sum_{a\lt x_k\le b}p_k.$

若 $X$ 只取整数值，则对整数 $m\le n$，

$$
P(m\le X\le n)=\sum_{k=m}^nP(X=k)=F(n)-F(m-1).
$$

处理非整数边界时，应先找出实际包含的整数取值。例如，$P(X\lt 2.5)=P(X\le2)$。

#### 五大分布

??? note "0-1 分布（伯努利分布）"

    若 $X$ 只取 $0,1$，且 $P(X=1)=p,\qquad P(X=0)=1-p,\qquad 0\le p\le1,$ 则称 $X$ 服从参数为 $p$ 的 0—1 分布。

    它描述一次试验中某事件是否发生。若令 $X=1$ 表示事件 $A$ 发生、$X=0$ 表示 $A$ 不发生，则 $p=P(A)$，此时 $X$ 也称事件 $A$ 的示性随机变量。

??? note "二项分布"

    在 $n$ 次独立重复的伯努利试验中，每次成功概率均为 $p$，成功次数 $X$ 服从二项分布，记为 $X\sim B(n,p)$：

    $$
    P(X=k)=C^{k}_{n} p^k(1-p)^{n-k},
    \qquad k=0,1,\ldots,n.
    $$

    其中 $n$ 为正整数，$0\le p\le1$。当 $p=0$ 或 $p=1$ 时，分布分别退化为 $X=0$ 或 $X=n$。

    - **模型条件**：试验次数固定、各次独立、每次成功概率相同。
    - **典型问题**：独立有放回抽样中的命中次数，或独立重复检测中的合格次数。
    - **常用概率**：$P(X\ge1)=1-(1-p)^n$。
    - 当 $n=1$ 时，二项分布就是 0-1 分布。

??? note "泊松分布"

    若

    $$
    P(X=k)=\frac{\lambda^k}{k!}e^{-\lambda},
    \qquad k=0,1,2,\ldots,\quad \lambda>0,
    $$

    则称 $X$ 服从参数为 $\lambda$ 的泊松分布，记为 $X\sim P(\lambda)$ 或 $X\sim\operatorname{Poisson}(\lambda)$。

    它常用于描述在给定时间或空间范围内、满足相应随机到达假设的事件发生次数，例如单位时间内的呼叫次数。仅知道“计数”这一背景，并不能直接断定服从泊松分布。

    常用关系为 $P(X=0)=e^{-\lambda},\qquad P(X\ge1)=1-e^{-\lambda},$

    $$
    \frac{P(X=k+1)}{P(X=k)}=\frac{\lambda}{k+1}.
    $$

    ??? info "泊松近似"
    
        若 $X\sim B(n,p)$，在 $n$ 较大、$p$ 较小的稀有事件情形下，可用参数 $\lambda=np$ 的泊松分布近似：

        $$
        C^{k}_{n} p^k(1-p)^{n-k}
        \approx \frac{(np)^k}{k!}e^{-np}.
        $$

        其极限依据是：当 $n\to\infty$、$p_n\to0$ 且 $np_n\to\lambda>0$ 时，对每个固定的非负整数 $k$，相应二项概率趋于泊松概率。

??? note "几何分布"

    独立重复进行成功概率为 $p$ 的伯努利试验，令 $X$ 表示**首次成功时的试验次数**，则

    $$
    P(X=k)=(1-p)^{k-1}p,
    \qquad k=1,2,\ldots,\quad 0\lt p\lt 1.
    $$

    记为 $X\sim G(p)$。若 $p=1$，则退化为 $X=1$。

    首次在第 $k$ 次成功，意味着前 $k-1$ 次全部失败、第 $k$ 次成功。于是对非负整数 $m$， $P(X>m)=(1-p)^m.$

    !!! tip "几何分布具有无记忆性"
    
        对非负整数 $m,n$， $P(X>m+n\mid X>m)=P(X>n).$

        即已经失败 $m$ 次之后，再等待首次成功所需的试验次数，仍服从原来的几何分布。

    有些教材将几何分布定义为“首次成功前的失败次数”。若用 $Y=X-1$ 表示这一数量，则 $P(Y=k)=(1-p)^kp,\qquad k=0,1,2,\ldots.$

    !!! warning "这里介绍的 $k$ 是从 $1$ 开始计数的。使用公式前要确认随机变量从 $0$ 还是从 $1$ 开始取值。"

??? note "超几何分布"

    总体有 $N$ 个个体，其中 $M$ 个具有某特征。简单随机、不放回地抽取 $n$ 个，令 $X$ 表示抽到的具有该特征的个体数，则

    $$
    P(X=k)=
    \frac{C^{k}_{M}C^{n-k}_{N-M}}{C^{n}_{N}},
    $$

    $$
    \max(0,n-N+M)\le k\le\min(n,M),
    $$

    其中 $N,M,n$ 均为整数，$N\ge1$、$0\le M\le N$、$0\le n\le N$。

    分子分别从特征个体中选 $k$ 个、从其余个体中选 $n-k$ 个；分母为所有容量为 $n$ 的样本数。

    超几何分布用于不放回抽样，二项分布用于各次独立且成功概率不变的试验。当抽样比例 $n/N$ 很小时，可考虑用 $B(n,M/N)$ 近似超几何分布。

### 一维连续型随机变量

#### 概率密度

若存在非负可积函数 $f(x)$，使随机变量 $X$ 的分布函数可表示为

$$
F(x)=\int_{-\infty}^x f(t)\,\mathrm dt,
$$

则称 $X$ 为**连续型随机变量**，称 $f(x)$ 为 $X$ 的**概率密度函数**，简称概率密度。

这里采用具有概率密度的连续型定义。分布函数连续是概率密度存在的必要条件。

在 $f$ 连续的点上， $F'(x)=f(x).$ 另外，若 $f$ 在 $x$ 处连续，对很小的 $h>0$，有 $P(x\lt X\le x+h)\approx f(x)h.$ 这说明密度刻画的是局部概率相对于区间长度的集中程度。

反过来，求得密度后，可以通过积分得到分布函数。分段密度需要分段积分，并把前面各段已累计的概率计入 $F(x)$。

#### 概率密度的性质

-   **非负性和归一性**：概率密度满足：

    $$
    f(x)\ge0,\qquad
    \int_{-\infty}^{+\infty}f(x)\,\mathrm dx=1.
    $$

    密度的非负性严格说只需几乎处处成立，通常选取处处非负的代表。概率密度函数在某一点的值可以大于 $1$，概率由密度在区间上的积分给出。

    例如，$X$ 在 $(0,\displaystyle\frac12)$ 上均匀分布时，该区间内的密度为 $2$，但总概率仍为 $2\times \displaystyle\frac12=1$。

-   **单点概率为零**：对任意实数 $a$，$P(X=a)=0$。
-   **分布函数连续**：因此区间概率不受有限个端点是否包含的影响。
-   **密度不唯一**：在有限个点上改变密度的值，不改变任何区间积分，也就不改变分布；更一般地，在零测集上的修改也不影响分布。

#### 应用——求概率

对 $a\lt b$，

$$
P(a\lt X\le b)=P(a\le X\le b)
=P(a\lt X\lt b)=P(a\le X\lt b)
=\int_a^b f(x)\,\mathrm dx.
$$

更一般地，对可测集合 $D$，$P(X\in D)=\displaystyle\int_D f(x)\,\mathrm dx.$

也即计算时先确定事件对应的取值范围，再与密度非零的区间取交集，最后积分。若范围包含多个不相交区间，应将各区间的积分相加。遇到含参数的概率密度时，可利用使用归一性解出参数。

#### 三大分布

??? note "均匀分布"

    若 $X$ 的密度为

    $$
    f(x)=
    \begin{cases}
    \displaystyle\frac1{b-a}, & a\lt x\lt b,\\
    0, & \text{其他},
    \end{cases}
    \qquad a\lt b,
    $$

    则称 $X$ 服从区间 $(a,b)$ 上的均匀分布，记为 $X\sim U(a,b)$。端点是否写入区间不影响该分布。

    其分布函数为

    $$
    F(x)=
    \begin{cases}
    0, & x\lt a,\\
    \displaystyle\frac{x-a}{b-a}, & a\le x\lt b,\\
    1, & x\ge b.
    \end{cases}
    $$

    若 $a\le c\lt d\le b$，则 $P(c\lt X\lt d)=\dfrac{d-c}{b-a}.$

    概率仅与子区间长度有关，与其在 $(a,b)$ 中的位置无关。

??? note "指数分布"

    若 $X$ 的密度为

    $$
    f(x)=
    \begin{cases}
    \lambda e^{-\lambda x}, & x\ge0,\\
    0, & x\lt 0,
    \end{cases}
    \qquad \lambda>0,
    $$

    则称 $X$ 服从参数为 $\lambda$ 的指数分布，记为 $X\sim\operatorname{Exp}(\lambda)$。这里 $\lambda$ 为**率参数**。

    其分布函数和尾概率分别为

    $$
    F(x)=
    \begin{cases}
    0, & x\lt 0,\\
    1-e^{-\lambda x}, & x\ge0,
    \end{cases}
    \qquad
    P(X>x)=e^{-\lambda x}\quad(x\ge0).
    $$

    它常用于描述具有恒定失效率的寿命，或齐次泊松过程中相邻事件的等待时间。

    !!! tip "指数分布具有无记忆性"
    
        对任意 $s,t\ge0$， $P(X>s+t\mid X>s)=P(X>t)=e^{-\lambda t}.$

        即已经等待 $s$ 时间之后，剩余等待时间的分布与初始等待时间相同。这与几何分布的无记忆性相对应，前者描述连续时间，后者描述离散试验次数。

    若改用 **尺度参数** $\theta>0$，则密度写成 $\dfrac1\theta e^{-x/\theta}$，其中 $\theta=1/\lambda$。

??? note "正态分布"

    若 $X$ 的密度为

    $$
    f(x)=\frac1{\sqrt{2\pi}\sigma}
    \exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right],
    \qquad -\infty\lt x\lt +\infty,
    $$

    其中 $\mu\in\mathbb R$、$\sigma>0$，则称 $X$ 服从正态分布，记为 $X\sim N(\mu,\sigma^2).$

    密度曲线关于直线 $x=\mu$ 对称，在 $x=\mu$ 处取最大值；$\mu$ 决定位置，$\sigma$ 控制分散程度。记号中的第二个参数为 $\sigma^2$。

    当 $\mu=0$、$\sigma=1$ 时，称为**标准正态分布**，其密度和分布函数分别记为

    $$
    \varphi(x)=\frac1{\sqrt{2\pi}}e^{-x^2/2},
    \qquad
    \Phi(x)=\int_{-\infty}^x\varphi(t)\,\mathrm dt.
    $$

    !!! info "事实上，非退化的正态分布的分布函数都不是初等函数，因此我们这里只用积分形式表示。"

    利用对称性不难得到， $\varphi(-x)=\varphi(x),\qquad \Phi(-x)=1-\Phi(x),\qquad \Phi(0)=\dfrac12.$

    !!! example "正态分布的常见应用"

        若 $X\sim N(\mu,\sigma^2)$，则通过**标准化** $Z=\dfrac{X-\mu}{\sigma}\sim N(0,1)$

        可将概率转化为标准正态分布函数的值： $F_X(x)=\Phi\left(\dfrac{x-\mu}{\sigma}\right),$

        $$
        P(a\lt X\le b)
        =\Phi\left(\frac{b-\mu}{\sigma}\right)
        -\Phi\left(\frac{a-\mu}{\sigma}\right).
        $$

        特别地，对 $c\ge0$， $P(\lvert X-\mu\rvert\le c) =2\Phi\left(\dfrac c\sigma\right)-1.$

        常见的中心区间概率约为

        $$
        P(\lvert X-\mu\rvert\le\sigma)\approx0.6827,\\
        P(\lvert X-\mu\rvert\le2\sigma)\approx0.9545,\\
        P(\lvert X-\mu\rvert\le3\sigma)\approx0.9973.
        $$

        若定义上侧 $\alpha$ 分位点 $z_\alpha$ 满足 $P(Z>z_\alpha)=\alpha$，则 $\Phi(z_\alpha)=1-\alpha$。

### 一维随机变量函数的分布

已知 $X$ 的分布，令 $Y=g(X)$，其中 $g$ 为可测函数，我们的目标是求出 $Y$ 的分布。一般方法是先确定 $Y$ 的取值范围，再由事件 $\{g(X)\le y\}$ 求分布函数： $F_Y(y)=P(Y\le y)=P(g(X)\le y).$

#### 离散型 → 离散型

若 $X$ 的分布律为 $P(X=x_k)=p_k$，则 $Y=g(X)$ 的可能取值为 $g(x_k)$。把相同的函数值合并后，对每个不同的取值 $y_j$，

$$
P(Y=y_j)=\sum_{k:\,g(x_k)=y_j}p_k.
$$

具体步骤为：

1. 列出 $X$ 的所有可能取值及对应概率。
2. 计算各个取值对应的 $g(x_k)$。
3. 合并相同的 $Y$ 值，并把对应概率相加。

例如，若 $X$ 的分布律为

<center markdown="1">

| $X$ | $-1$ | $0$ | $1$ |
| --- | --- | --- | --- |
| $P$ | $\frac14$ | $\frac12$ | $\frac14$ |

</center>

令 $Y=X^2$，则 $X=-1$ 和 $X=1$ 均对应 $Y=1$，所以

<center markdown="1">

| $Y$ | $0$ | $1$ |
| --- | --- | --- |
| $P$ | $\frac12$ | $\frac12$ |

</center>

当 $g$ 不是一一对应时，必须合并概率，不能只替换分布律表格中的取值。

#### 连续型 → 连续型（或混合型）

???+ note "分布函数法（定义法）"

    若 $X$ 具有密度 $f_X$，则

    $$
    F_Y(y)=\int_{\{x:\,g(x)\le y\}}f_X(x)\,\mathrm dx.
    $$

    先针对不同的 $y$ 解不等式 $g(x)\le y$，再与 $X$ 的取值范围相交并积分。若所得 $F_Y$ 可由密度积分表示，则可通过求导得到密度；若存在跳跃，还应单独记录相应的点概率。

    !!! example "习题 1"

        已知随机变量 $X$ 的概率密度为
        
        $$
        f(x)=
        \begin{cases}
        |x|, & |x|\le 1,\\
        0, & \text{其他}.
        \end{cases}
        $$

        求 $Y=X^2 + 1$ 的概率密度 $f_Y(y)$。

        ??? success "解答"

            我们知道，$F_Y(y) = P\{Y \le y\} = P\{X^2 + 1 \le y\}$。

            -   当 $y \lt 1$ 时，$F_Y(y) = P\{\varnothing\} = 0$；
            -   当 $1 \le y \le 2$ 时，$F_Y(y) = P\{|X| \le y-1\} = \displaystyle\int_{-\sqrt{y-1}}^{\sqrt{y-1}} f(x) \mathrm dx \overset{\text{偶函数对称性}}{=} 2\displaystyle\int_0^{\sqrt{y-1}} x \mathrm dx = y-1$；
            -   当 $y \gt 2$ 时，$F_Y(y) = P\{X^2 + 1 \le y\} = 1$.

            所以 $Y$ 的概率密度
            
            $$
            f_Y(y) =
            \begin{cases}
            1, & 1 \le y \le 2,\\
            0, & \text{其他}.
            \end{cases}
            $$

    !!! example "习题 2 ☆"

        设随机变量 $X$ 的概率密度为 $\begin{cases}f(x)=2x, &{0 \lt x \lt 1}\\0, &\text{其他}, \end{cases}$$F(x)$ 为 $X$ 的分布函数，$E(X)$ 为 $X$ 的[数学期望](#数学期望)，则 $P\{F(X) \gt E(X)\} = \underline{\qquad}.$

        ??? success "解答"

            由题给概率密度得 $E(X) = \displaystyle\int_{-\infty}^{+\infty} xf(x) \mathrm dx = \dfrac 23$；当 $0 \lt x \lt 1$ 时，$F(x) = \displaystyle\int_{0}^{x} f(t) \mathrm dt = x^2$。

            而再由题给概率密度，随机变量的取值 $X \in (0,1)$，在这个区间，$F(x) = x^2$。因此，我们可以将 $F(X)$ 代换为 $X^2$，因而

            $$
            P\{F(X) \ge E(X)\} = P\{X^2 \ge \dfrac 23\}.
            $$

            解不等式得到 $X \gt \sqrt{\dfrac 23}$，于是所求概率转化为 $P\{X \gt \sqrt{\dfrac 23}\} = 1 - F(\sqrt{\dfrac 23}) = 1 - \displaystyle\int_{\sqrt{\frac 23}}^1 f(x) \mathrm dx = \dfrac 13.$
        
        !!! danger "这里的关键有两个，一是数学期望在确定概率密度后实质上就是一个常值；二是处理 $F(X)$：此处应该把 $F(X)$ 视为随机变量 $X$ 的函数，并利用相应区间实现代换“脱去” $F(\cdot)$。"


???+ note "单调变换公式"

    若 $g$ 在 $X$ 的密度所对应区间上严格单调、可导且 $g'(x)\ne0$，**反函数** 为 $x=h(y)$，则在变换后的区间内，$f_Y(y)=f_X(h(y))\lvert h'(y)\rvert.$ 这可以由密度函数的定义式两边求导得出。

    区间外密度为 $0$。绝对值保证密度非负，不能省略。

    - 若 $g$ 严格递增，则 $F_Y(y)=F_X(h(y))$。
    - 若 $g$ 严格递减，则由 $X$ 的单点概率为 $0$，有 $F_Y(y)=1-F_X(h(y))$。

    例如，若 $Y=aX+b$ 且 $a\ne0$，则

    $$
    f_Y(y)=\frac1{\lvert a\rvert}
    f_X\left(\frac{y-b}{a}\right).
    $$

    因此，若 $X\sim N(\mu,\sigma^2)$，则 $aX+b\sim N(a\mu+b,a^2\sigma^2),\qquad a\ne0.$

    若 $a=0$，则 $Y=b$ 以概率 $1$ 成立，此时为退化的离散分布。

    !!! example "习题"

        已知随机变量 $X$ 服从 $(0,1)$ 上的均匀分布，则 $Y=-\ln X$ 服从什么分布？

        ??? success "解答"

            参数为 $1$ 的**指数分布**。
            
            我们知道，

            $$
            f_X(x) =
            \begin{cases}
            1, & 0 \lt y \lt 1,\\
            0, & \text{其他}.
            \end{cases}
            $$

            且 $X = e^{-Y}$，所以 $Y$ 的概率密度在变换后的区间 $y \in (0,+\infty)$ 内有
            
            $$
            f_Y(y) = f_X(e^{-y})|-e^{-y}| = e^{-y}.
            $$

            这就是 $\lambda = 1$ 的指数分布。

??? Tip "非单调变换情形：分段"
    若 $g$ 可以分成若干严格单调且满足上述求导条件的区间，方程 $g(x)=y$ 在这些区间内的有效解为 $x_1(y),x_2(y),\ldots$，则在公式适用处，

    $$
    f_Y(y)=\sum_i
    f_X(x_i(y))\left|\frac{\mathrm d x_i(y)}{\mathrm dy}\right|
    =\sum_i\frac{f_X(x_i(y))}{|g'(x_i(y))|}.
    $$

    只对位于 $X$ 有效取值范围内的分支求和。对临界值或分段边界，可以回到分布函数法处理。

    例如，令 $Y=X^2$，则 $Y\ge0$，对 $y\ge0$，

    $$
    F_Y(y)=P(-\sqrt y\le X\le\sqrt y)
    =F_X(\sqrt y)-F_X(-\sqrt y).
    $$

    在相应可导点，对 $y>0$，

    $$
    f_Y(y)=
    \frac{f_X(\sqrt y)+f_X(-\sqrt y)}{2\sqrt y}.
    $$

    若 $X$ 的某一侧没有概率密度，对应项自然为 $0$。

??? Tip "混合型情形"
    连续型随机变量经过函数变换后，不一定仍为连续型。若 $g$ 将一段具有正概率的取值范围映射为同一个常数，$Y$ 就会在该常数处产生正的点概率。

    例如，设 $X\sim U(-1,1)$，令 $Y=\max(X,0)$。当 $X\le0$ 时，$Y=0$，所以 $P(Y=0)=P(X\le0)=\dfrac12.$

    而对 $0\lt a\lt b\lt 1$， $P(a\lt Y\le b)=\dfrac{b-a}{2}.$

    因此，

    $$
    F_Y(y)=
    \begin{cases}
    0, & y\lt 0,\\
    \displaystyle\frac{1+y}{2}, & 0\le y\lt 1,\\
    1, & y\ge1.
    \end{cases}
    $$

    这个分布在 $0$ 处有大小为 $\displaystyle\frac12$ 的跳跃，并在 $(0,1)$ 上具有总质量为 $\displaystyle\frac12$ 的连续部分，是**混合型分布**。仅对分布函数的连续部分求导，会遗漏 $Y=0$ 处的点概率，不能用所得函数作为整个分布的概率密度。

    此外，连续型随机变量也可变换为纯离散型，例如 $Y=\mathbf 1_{\{X>0\}}$ 只取 $0,1$。判断变换后的类型，应依据实际得到的分布。

## 多维随机变量及其分布

### n 维随机变量及其分布函数

#### n 维随机变量

设 $X_1,\ldots,X_n$ 是定义在同一个样本空间上的随机变量，则称 $\mathbf X=(X_1,\ldots,X_n)$ 为 **$n$ 维随机变量**，也称 **$n$ 维随机向量**。每次试验的结果对应 $\mathbb R^n$ 中的一个点。

当 $n=2$ 时，记为 $(X,Y)$。例如，同时记录某人的身高 $X$ 与体重 $Y$，不仅要描述两个变量各自的分布，还要描述它们共同取值的概率规律。

各分量定义在同一概率空间上，并不意味着它们相互独立。

#### 联合分布函数的性质

???+ note "联合分布函数的概念"

    $n$ 维随机向量 $\mathbf X$ 的联合分布函数定义为

    $$
    F(x_1,\ldots,x_n)
    =P(X_1\le x_1,\ldots,X_n\le x_n).
    $$

    其中逗号表示事件同时发生，即取交集。二维情形为 $F(x,y)=P(X\le x,\ Y\le y).$

    几何上，它表示随机点 $(X,Y)$ 落在矩形区域 $(-\infty,x]\times(-\infty,y]$ 内的概率。联合分布函数能够唯一确定随机向量的分布。$(X,Y)$ 服从分布函数 $F(X,Y)$ 记为 $(X,Y) \sim F(X,Y)$。

以二维情况说明（无特殊说明则以下都是二维为例），二维联合分布函数满足：

-   **有界性**：$0\le F(x,y)\le1$。
-   **对每个变量单调不减**：固定一个变量时，$F$ 关于另一个变量单调不减。
-   **对每个变量右连续**：

    $$
    \lim_{h\to0^+}F(x+h,y)=F(x,y),
    \qquad
    \lim_{k\to0^+}F(x,y+k)=F(x,y).
    $$

-   **边界条件**：当任一坐标趋于 $-\infty$ 时，联合分布函数趋于 $0$；当所有坐标都趋于 $+\infty$ 时，联合分布函数趋于 $1$。二维情形中，

    $$
    F(-\infty,y)=F(x,-\infty)=0,
    \qquad F(+\infty,+\infty)=1.
    $$

-   **矩形增量非负**：对任意 $a\lt b$、$c\lt d$，

    $$
    F(b,d)-F(a,d)-F(b,c)+F(a,c)\ge0.
    $$

    上述矩形增量恰好等于 $P(a\lt X\le b,\ c\lt Y\le d).$

!!! warning "“分别单调不减”不能替代“矩形增量非负”。在 $n$ 维情形中，“矩形增量”对应要求是任意半开长方体的 $2^n$ 个顶点所构成的交替增量非负。"

计算含不同开闭端点的矩形概率时，可使用相应坐标方向的左极限。例如，

$$
P(X=x,\ Y=y)
=F(x,y)-F(x^-,y)-F(x,y^-)+F(x^-,y^-).
$$

#### 边缘分布函数

可由联合分布求出联合分布中的某一个分量或部分分量的分布，称为**边缘分布**。对二维随机向量 $(X,Y)$，

$$
F_X(x)=P(X\le x)=\lim_{y\to+\infty}F(x,y)=F(x,+\infty),
$$

$$
F_Y(y)=P(Y\le y)=\lim_{x\to+\infty}F(x,y)=F(+\infty,y).
$$

求某个分量的边缘分布函数时，把其余坐标都趋向 $+\infty$，相当于不再限制其余分量的取值。

$n$ 维中第 $i$ 个分量的边缘分布函数为

$$
F_{X_i}(x_i)
=F(+\infty,\ldots,+\infty,x_i,+\infty,\ldots,+\infty).
$$

!!! tip "联合分布与边缘分布的联系"

    联合分布可以唯一确定各边缘分布，但仅凭边缘分布一般不能确定联合分布，因为边缘分布没有完整描述分量之间的依赖关系。

    例如，设 $X\sim B(1,\dfrac12)$。若 $Y=X$，或令 $Y$ 为与 $X$ 独立且同分布的随机变量，两种模型的 $X,Y$ 边缘分布完全相同，但分别有 $P(X=0,Y=0)=\dfrac12, \qquad P(X=0,Y=0)=\dfrac14.$

    只有加入独立性等额外条件，才能进一步由边缘分布确定联合分布。

### 常见的两类二维随机变量

#### 二维离散型随机变量

???+ note "联合分布律"

    若 $(X,Y)$ 以概率 $1$ 取有限个或可数无穷个数对，则称其为二维离散型随机变量。设各分量的可能取值分别为 $x_i$、$y_j$，联合分布律为 $p_{ij}=P(X=x_i,\ Y=y_j).$

    并非每个数对都一定能取到；不可能取到的组合对应 $p_{ij}=0$。联合分布律满足

    $$
    p_{ij}\ge0,\qquad \sum_i\sum_jp_{ij}=1.
    $$

    联合分布函数和区域概率分别为

    $$
    F(x,y)=\sum_{x_i\le x}\sum_{y_j\le y}p_{ij},
    $$

    $$
    P((X,Y)\in D)=\sum_{(x_i,y_j)\in D}p_{ij}.
    $$

    例如，求 $P(X\lt Y)$ 时，应把所有满足 $x_i\lt y_j$ 的单元格概率相加。

    常用表格列出两个变量的联合分布律：

    <center markdown="1">

    | $X\backslash Y$ | $y_1$ | $y_2$ | $\cdots$ | $P(X=x_i)$ |
    | --- | --- | --- | --- | --- |
    | $x_1$ | $p_{11}$ | $p_{12}$ | $\cdots$ | $p_{1\cdot}$ |
    | $x_2$ | $p_{21}$ | $p_{22}$ | $\cdots$ | $p_{2\cdot}$ |
    | $\vdots$ | $\vdots$ | $\vdots$ | $\ddots$ | $\vdots$ |
    | $P(Y=y_j)$ | $p_{\cdot1}$ | $p_{\cdot2}$ | $\cdots$ | $1$ |

    </center>

???+ note "边缘分布律"

    对联合分布律求行和或列和：

    $$
    P(X=x_i)=p_{i\cdot}=\sum_jp_{ij},
    \qquad
    P(Y=y_j)=p_{\cdot j}=\sum_ip_{ij}.
    $$

    可以记为：**保留哪个变量，就对另一个变量的所有取值求和**。

    例如，若联合分布律为

    <center markdown="1">

    | $X\backslash Y$ | $0$ | $1$ | $P(X=x)$ |
    | --- | --- | --- | --- |
    | $0$ | $\frac18$ | $\frac38$ | $\frac12$ |
    | $1$ | $\frac14$ | $\frac14$ | $\frac12$ |
    | $P(Y=y)$ | $\frac38$ | $\frac58$ | $1$ |

    </center>

    则 $X\sim B(1,\dfrac12)$、$Y\sim B(1,\dfrac58)$。

???+ note "条件分布律"

    若 $P(Y=y_j)=p_{\cdot j}>0$，则给定 $Y=y_j$ 时，$X$ 的条件分布律为

    $$
    P(X=x_i\mid Y=y_j)=\frac{p_{ij}}{p_{\cdot j}}.
    $$

    同理，若 $p_{i\cdot}>0$，

    $$
    P(Y=y_j\mid X=x_i)=\frac{p_{ij}}{p_{i\cdot}}.
    $$

    求条件分布相当于固定某一列或某一行，再用该列或该行的总概率归一化。固定条件后，所有条件概率之和为 $1$。

    以上表为例，

    $$
    P(X=0\mid Y=1)=\frac{3/8}{5/8}=\frac35,
    \qquad
    P(X=1\mid Y=1)=\frac{1/4}{5/8}=\frac25.
    $$

    还可用乘法关系恢复联合概率： $p_{ij}=P(X=x_i\mid Y=y_j)\,p_{\cdot j}.$

    这里的·代表任意取值，下同。

#### 二维连续型随机变量

???+ note "联合概率密度"

    若存在 **非负** 可积函数 $f(x,y)$，使

    $$
    F(x,y)=\int_{-\infty}^{x}\int_{-\infty}^{y}
    f(u,v)\,\mathrm dv\,\mathrm du,
    $$

    则称 $(X,Y)$ 为二维连续型随机变量，$f(x,y)$ 称为**联合概率密度**。它满足

    $$
    f(x,y)\ge0,\qquad
    \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty}
    f(x,y)\,\mathrm dy\,\mathrm dx=1.
    $$

    在满足相应连续性条件的点上， $f(x,y)=\dfrac{\partial^2 F(x,y)}{\partial x\,\partial y}.$

    对平面上的可测区域 $D$，

    $$
    P((X,Y)\in D)=\iint_D f(x,y)\,\mathrm dx\,\mathrm dy.
    $$

    计算时先画出密度非零区域，再与事件对应的区域取交集，依据交集写出积分限。联合密度的数值不是点概率，面积为 $0$ 的集合在这一模型中的概率为 $0$，例如点、直线以及通常的光滑曲线。

    !!! example "分区域讨论"

        已知二维随机变量 $(X,Y)$ 的概率密度为 $f(x,y) = \begin{cases} 2e^{-(x+y)}, &{0 \lt x \lt y},\\ 0, &\text{其他}, \end{cases}$ 求 $(X,Y)$ 的分布函数 $F(x,y)$。
        
        ??? success "解答"

            密度函数将平面直角坐标系分成三块区域。

            ① $x \lt 0$ 或 $y \lt 0$ 时，显然 $F(x,y) = 0$；

            ② $0 \le x \le y$ 时，由定义得
            
            $$
            \begin{split}
            F(x,y) &= \int_{-\infty}^{x}\int_{-\infty}^{y}f(u,v)\,\mathrm dv\,\mathrm du \\
                &= 2 \int_{0}^{x} e^{-u} \mathrm du\int_{u}^{y} e^{-v} \mathrm dv \\
                &= 1-2e^{-y}-e^{-2x}+2e^{-(x+y)}.
            \end{split}
            $$

            ③ $0 \le y \lt x$ 时，由于 $x \ge y$ 的部分密度为 $0$，由定义得

            $$
            \begin{split}
            F(x,y) &= \int_{-\infty}^{x}\int_{-\infty}^{y}f(u,v)\,\mathrm dv\,\mathrm du \\
                &= 2 \int_{0}^{y} e^{-v} \mathrm dv\int_{0}^{v} e^{-u} \mathrm du \\
                &= 1-2e^{-y}+e^{-2y}.
            \end{split}
            $$

            综上三种情况即为分布函数。

???+ note "边缘概率密度"

    由联合密度对另一个变量积分：

    $$
    f_X(x)=\int_{-\infty}^{+\infty}f(x,y)\,\mathrm dy,
    \qquad
    f_Y(y)=\int_{-\infty}^{+\infty}f(x,y)\,\mathrm dx.
    $$

    形式上的积分上下限是无穷，但实际计算范围应由联合密度的非零区域确定，且可能依赖保留的变量。

    例如，

    $$
    f(x,y)=
    \begin{cases}
    2, & 0\lt x\lt y\lt 1,\\
    0, & \text{其他},
    \end{cases}
    $$

    则固定 $x\in(0,1)$ 时，$y$ 从 $x$ 变化到 $1$；固定 $y\in(0,1)$ 时，$x$ 从 $0$ 变化到 $y$。因此，

    $$
    f_X(x)=
    \begin{cases}
    2(1-x), & 0\lt x\lt 1,\\
    0, & \text{其他},
    \end{cases}
    \qquad
    f_Y(y)=
    \begin{cases}
    2y, & 0\lt y\lt 1,\\
    0, & \text{其他}.
    \end{cases}
    $$

!!! Warning "二维连续型随机变量的分量均为连续型；反过来，各分量为连续型，不一定存在二维联合密度。例如，$X\sim U(0,1)$、$Y=X$ 时，概率全部集中在直线 $y=x$ 上。"

???+ note "条件概率密度"

    对满足 $0\lt f_Y(y)\lt +\infty$ 的 $y$，条件密度的标准表达式为

    $$
    f_{X\mid Y}(x\mid y)=\frac{f(x,y)}{f_Y(y)}.
    $$

    类似地，对满足 $0\lt f_X(x)\lt +\infty$ 的 $x$，

    $$
    f_{Y\mid X}(y\mid x)=\frac{f(x,y)}{f_X(x)}.
    $$

    严格地说，这些公式给出几乎处处意义下的条件密度；在不影响概率的例外点上，条件分布的版本可能不唯一。

    固定条件 $y$ 后，应把 $f_{X\mid Y}(x\mid y)$ 作为关于 $x$ 的一维密度使用：

    $$
    \int_{-\infty}^{+\infty}f_{X\mid Y}(x\mid y)\,\mathrm dx=1,
    $$

    $$
    P(a\lt X\le b\mid Y=y)
    =\int_a^b f_{X\mid Y}(x\mid y)\,\mathrm dx.
    $$

    连续型情形中 $P(Y=y)=0$，所以这里不能直接套用普通事件条件概率的比值 $P(A\cap\{Y=y\})/P(Y=y)$；条件密度通过联合密度与边缘密度的比值描述。

    对前述三角形区域的例子，固定 $0\lt y\lt 1$，

    $$
    f_{X\mid Y}(x\mid y)=
    \begin{cases}
    \displaystyle\frac1y, & 0\lt x\lt y,\\
    0, & \text{其他}.
    \end{cases}
    $$

    因此，给定 $Y=y$ 时，$X \sim U(0,y)$，例如 $P(X\lt y/2\mid Y=y)=1/2$。

    !!! example "从条件概率密度求其他概率密度/分布函数"

        设随机变量 $X$ 在区间 $(a,b)$ 上随机取值，当观察到 $X=x(a \lt x \lt b)$ 时，随机变量 $Y$ 在区间 $(a,b)$ 上随机取值，求：

        1) $Y$ 的概率密度；
        2) $P\{X+Y \lt a+b\}$.

        ??? success "解答"

            这里将题目中的“随机取值”理解为**均匀取值**，且 $a\lt b$。由一维均匀分布的密度公式，

            $$
            f_X(x)=
            \begin{cases}
            \displaystyle\frac1{b-a}, & a\lt x\lt b,\\
            0, & \text{其他}.
            \end{cases}
            $$

            给定 $X=x$（$a\lt x\lt b$）时，$Y$ 在 $(a,b)$ 上均匀取值，所以条件概率密度为

            $$
            f_{Y\mid X}(y\mid x)=
            \begin{cases}
            \displaystyle\frac1{b-a}, & a\lt y\lt b,\\
            0, & \text{其他}.
            \end{cases}
            $$

            由条件密度公式 $f_{Y\mid X}(y\mid x)=\dfrac{f(x,y)}{f_X(x)}$，可反求联合密度 $f(x,y)=f_X(x)f_{Y\mid X}(y\mid x)$：

            $$
            f(x,y)=
            \begin{cases}
            \displaystyle\frac1{(b-a)^2}, & a\lt x\lt b,\ a\lt y\lt b,\\
            0, & \text{其他}.
            \end{cases}
            $$

            **1) 求 $Y$ 的概率密度。**

            按前述边缘密度公式，对 $x$ 积分。当 $a\lt y\lt b$ 时，

            $$
            f_Y(y)=\int_{-\infty}^{+\infty}f(x,y)\,\mathrm dx
            =\int_a^b\frac1{(b-a)^2}\,\mathrm dx
            =\frac1{b-a}.
            $$

            其余 $y$ 处联合密度为 $0$，因此

            $$
            f_Y(y)=
            \begin{cases}
            \displaystyle\frac1{b-a}, & a\lt y\lt b,\\
            0, & \text{其他},
            \end{cases}
            \qquad Y\sim U(a,b).
            $$

            **2) 求 $P\{X+Y\lt a+b\}$。**

            将联合密度的非零区域 $a\lt x\lt b,\ a\lt y\lt b$ 与事件对应的半平面 $y\lt a+b-x$ 取交集。固定 $x\in(a,b)$ 时，$a\lt a+b-x\lt b$，所以积分范围为 $a\lt y\lt a+b-x$。于是有

            $$
            \begin{aligned}
            P\{X+Y\lt a+b\}
            &=\int_a^b\int_a^{a+b-x}f(x,y)\,\mathrm dy\,\mathrm dx\\
            &=\frac1{(b-a)^2}\int_a^b(b-x)\,\mathrm dx\\
            &=\frac1{(b-a)^2}\cdot\frac{(b-a)^2}{2}
            =\boxed{\frac12}.
            \end{aligned}
            $$

#### 常见的二维连续型随机变量的分布

??? note "二维均匀分布"

    设平面区域 $D$ 的面积为 $S_D$，且 $0\lt S_D\lt +\infty$。若

    $$
    f(x,y)=
    \begin{cases}
    \dfrac1{S_D}, & (x,y)\in D,\\
    0, & (x,y)\notin D,
    \end{cases}
    $$

    则称 $(X,Y)$ 在 $D$ 上服从二维均匀分布。

    对可测区域 $A$，$P((X,Y)\in A)=\dfrac{\operatorname{Area}(A\cap D)}{S_D}.$

    边缘密度由区域的截线长度决定：

    $$
    f_X(x)=\frac{\text{区域 }D\text{ 在横坐标 }x\text{ 处的竖直截线总长度}}{S_D},
    $$

    $$
    f_Y(y)=\frac{\text{区域 }D\text{ 在纵坐标 }y\text{ 处的水平截线总长度}}{S_D}.
    $$

    所以二维均匀分布的边缘分布不一定均匀。前述三角形 $0\lt x\lt y\lt 1$ 上的均匀分布，其边缘密度就不是常数。

    若 $D=(a,b)\times(c,d)$ 为边平行于坐标轴的矩形，则 $X\sim U(a,b),\qquad Y\sim U(c,d)$，且 $X,Y$ 相互独立。

??? note "二维正态分布"

    若联合密度为

    $$
    f(x,y)=\frac1{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}}
    \exp\left\{-\frac1{2(1-\rho^2)}
    \left[
    \frac{(x-\mu_1)^2}{\sigma_1^2}
    -\frac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}
    +\frac{(y-\mu_2)^2}{\sigma_2^2}
    \right]\right\},
    $$

    其中 $\mu_1,\mu_2\in\mathbb R$、$\sigma_1,\sigma_2>0$、$-1\lt \rho\lt 1$，则称 $(X,Y)$ 服从非退化的二维正态分布，记为 $(X,Y)\sim N(\mu_1,\mu_2;\sigma_1^2,\sigma_2^2;\rho).$

    $\mu_1,\mu_2$ 为两个分量的均值，$\sigma_1^2,\sigma_2^2$ 为方差，$\rho$ 为相关系数。

    ???+ tip "重要结论"

        - **边缘分布均为正态分布**：$X\sim N(\mu_1,\sigma_1^2), \qquad Y\sim N(\mu_2,\sigma_2^2).$

        - **条件分布仍为正态分布**：

            $$
            X\mid(Y=y)\sim
            N\left(\mu_1+\rho\frac{\sigma_1}{\sigma_2}(y-\mu_2),
            \,\sigma_1^2(1-\rho^2)\right),
            $$

            $$
            Y\mid(X=x)\sim
            N\left(\mu_2+\rho\frac{\sigma_2}{\sigma_1}(x-\mu_1),
            \,\sigma_2^2(1-\rho^2)\right).
            $$

        - **独立性**：在二维正态分布前提下，$X,Y$ 相互独立当且仅当 $\rho=0$。
        - **线性组合仍为正态分布**：当 $a,b$ 不全为 $0$ 时，

            $$
            aX+bY\sim N\left(
            a\mu_1+b\mu_2,\,
            a^2\sigma_1^2+b^2\sigma_2^2+2ab\rho\sigma_1\sigma_2
            \right).
            $$

        仅知道两个边缘分布都为正态分布，不能推出联合分布是二维正态分布；还需要联合结构的信息（独立与否）。$\lvert\rho\rvert=1$ 对应退化情形，不能代入上述含 $\sqrt{1-\rho^2}$ 分母的密度公式。

### 随机变量的相互独立性

#### 概念

若对任意实数 $x,y$，事件 $\{X\le x\}$ 与 $\{Y\le y\}$ 相互独立，即 $P(X\le x,\ Y\le y)=P(X\le x)P(Y\le y),$ 则称随机变量 $X,Y$ **相互独立**。

等价地，对任意博雷尔（Borel）集 $A,B$， $P(X\in A,\ Y\in B)=P(X\in A)P(Y\in B).$

!!! tip "这把上一章“两个事件的独立”推广为“由两个随机变量各自确定的任意事件均独立”。"

对 $n$ 个随机变量，相互独立要求对任意实数 $x_1,\ldots,x_n$，

$$
P(X_1\le x_1,\ldots,X_n\le x_n)
=\prod_{i=1}^nP(X_i\le x_i).
$$

当 $n\ge3$ 时，任意两个分量独立称为两两独立；两两独立一般不能推出相互独立。

#### 相互独立的充要条件

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**分布函数判据**

适用于任意类型的随机变量：

$$
X\text{ 与 }Y\text{ 独立}
\iff F(x,y)=F_X(x)F_Y(y)
\quad\text{对所有 }x,y.
$$

它说明在独立条件下，联合分布由两个边缘分布的乘积确定。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**离散型判据**

对二维离散型随机变量，

$$
X\text{ 与 }Y\text{ 独立}
\iff p_{ij}=p_{i\cdot}p_{\cdot j}
\quad\text{对所有 }i,j.
$$

必须检查所有可能取值的组合，包括联合概率为 $0$ 的单元格。若某个单元格为 $0$，但其所在行与列的边缘概率均大于 $0$，就可立即判定不独立。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**连续型判据**

若 $(X,Y)$ 具有联合密度，则

$$
X\text{ 与 }Y\text{ 独立}
\iff f(x,y)=f_X(x)f_Y(y)
\quad\text{几乎处处成立}.
$$

“几乎处处”允许密度在面积为 $0$ 的集合上不同，因为这些差异不改变分布。若可以选择在全平面上满足乘积关系的密度版本，也可直接用它判定独立。

</div>
</div>

#### 性质

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**① 整体相互独立则部分也相互独立**

若一组随机变量 $X_1, X_2, \dots, X_n$ 相互独立，则其中任意 $k~(2\le k\le n)$ 个随机变量也相互独立。

!!! question "是不是有点像线性代数中，向量组的整体与部分的关系？"

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**② 分别作函数变换仍独立**

若 $X,Y$ 独立，$g,h$ 为可测函数，则 $g(X)$ 与 $h(Y)$ 也独立。例如，$X^2$ 与 $\lvert Y\rvert$ 独立。

更一般地，若 $X_1,\ldots,X_n$ 相互独立，将它们划分为不相交的若干组，并分别对每组作可测函数变换，得到的随机变量仍相互独立。

这里要求不同组使用的原始变量不重叠。即使 $X,Y$ 独立，也不能直接断言 $X+Y$ 与 $X-Y$ 独立。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**③ 条件分布等于对应边缘分布**

$X,Y$ 独立时，条件分布与对应的边缘分布一致。

离散型情形中，对任意满足 $p_{\cdot j}>0$ 的 $j$， $P(X=x_i\mid Y=y_j)=P(X=x_i) \quad\text{对所有 }i.$

连续型情形中，条件密度等于对应边缘密度：

$$
f_{X\mid Y}(x\mid y)=f_X(x),
\qquad
f_{Y\mid X}(y\mid x)=f_Y(y),
$$

等式在相关条件密度有定义的范围内按几乎处处意义理解。

</div>
</div>

#### 判断

!!! note "判定步骤"

    1. 确认给出的是联合分布函数、联合分布律还是联合密度。
    2. 求出两个边缘分布。
    3. 使用对应的乘积判据；证明独立需要满足整个判据，否定独立只需找到有效的反例。

!!! example "例子"

    离散型中，以前面的分布表为例，其满足 $\displaystyle p_{00}=\frac18,~~ p_{0\cdot}p_{\cdot0}=\frac12\times\frac38=\frac3{16}$，两者不等，所以 $X,Y$ 不独立。

    连续型中，密度的代数表达式能写成乘积还不够，必须同时考虑其非零区域。例如对 $f(x,y)=2\,\mathbf1_{\{0\lt x\lt y\lt 1\}}$，虽然区域内部密度为常数，但该区域不是两个分量取值区间的笛卡尔积：如在 $0\lt y\lt x\lt 1$ 上，联合密度为 $0$，而边缘密度的乘积 $4y(1-x)>0$，所以不独立。

    反之，即使非零区域是矩形，也仍需检验密度的乘积关系，不能仅凭区域形状判定独立。对于连续密度，在单个点上不相等也不足以否定独立，应依据几乎处处判据或找到概率事件的反例。

### 多维随机变量函数的分布

#### 概念

已知随机向量 $(X_1,\ldots,X_n)$ 的联合分布。由该随机向量构造新的随机变量，令 $Z=g(X_1,\ldots,X_n),$

其中 $g$ 为可测函数，则 $Z$ 是一个随机变量。常见情形有和、差、积、商、最大值与最小值，例如

$$
Z=X+Y,\qquad Z=XY,\qquad
Z=\max(X,Y),\qquad Z=\min(X,Y).
$$

一般必须利用联合分布求 $Z$ 的分布，仅有各边缘分布通常不够。若已知各分量独立，就可以先用边缘分布构造联合分布。

若同时定义 $U=g(X,Y)$、$V=h(X,Y)$，则需要求新的随机向量 $(U,V)$ 的联合分布。

#### 求法

???+ note "分布函数法（定义法）"

    对 $Z=g(X,Y)$， $F_Z(z)=P(Z\le z)=P(g(X,Y)\le z).$

    - **离散型**：将满足条件的联合概率相加，

    $$
    F_Z(z)=\sum_{g(x_i,y_j)\le z}p_{ij},
    \qquad
    P(Z=z_k)=\sum_{g(x_i,y_j)=z_k}p_{ij}.
    $$

    同一个 $Z$ 值可能由多个数对产生，需合并对应概率。

    - **连续型**：令 $D_z=\{(x,y):g(x,y)\le z\}$，则

    $$
    F_Z(z)=\iint_{D_z}f(x,y)\,\mathrm dx\,\mathrm dy.
    $$

    先确定 $Z$ 的可能取值，再求 $D_z$ 与联合密度非零区域的交集，分段积分。若得到的分布具有密度，再对 $F_Z$ 求导；若出现跳跃，则需保留对应的点概率。

    !!! example "定义法的运用"

        若 $X,Y$ 独立且都服从 $U(0,1)$，令 $Z=X+Y$，则 $Z$ 的概率密度和分布函数分别是？
        
        ??? success "解答"

            由题意，联合密度在单位正方形内等于 $1$。事件 $X+Y\le z$ 对应直线下方区域，因此

            $$
            F_Z(z)=
            \begin{cases}
            0, & z\le0,\\
            \displaystyle\frac{z^2}{2}, & 0\lt z\le1,\\
            1-\displaystyle\frac{(2-z)^2}{2}, & 1\lt z\lt 2,\\
            1, & z\ge2.
            \end{cases}
            $$

            对应密度为

            $$
            f_Z(z)=
            \begin{cases}
            z, & 0\lt z\lt 1,\\
            2-z, & 1\le z\lt 2,\\
            0, & \text{其他}.
            \end{cases}
            $$





以下各公式假设 $(X,Y)$ 具有联合密度，

???+ note "最大值与最小值的分布"

    令 $M=\max(X,Y)$、$L=\min(X,Y)$。不要求独立时，

    $$
    F_M(z)=P(X\le z,Y\le z)=F(z,z),
    $$

    $$
    F_L(z)=1-P(X>z,Y>z)
    =F_X(z)+F_Y(z)-F(z,z).
    $$

    若 $X,Y$ 独立，则 $F_M(z)=F_X(z)F_Y(z),$ $F_L(z)=1-[1-F_X(z)][1-F_Y(z)].$

    若进一步具有密度，则几乎处处有

    $$
    f_M(z)=f_X(z)F_Y(z)+F_X(z)f_Y(z),
    $$

    $$
    f_L(z)=f_X(z)[1-F_Y(z)]+[1-F_X(z)]f_Y(z).
    $$

    若 $X_1,\ldots,X_n$ 独立同分布，公共分布函数为 $F$，则

    $$
    F_{\max_iX_i}(z)=[F(z)]^n,
    \qquad
    F_{\min_iX_i}(z)=1-[1-F(z)]^n.
    $$

    这类问题先把最大值、最小值的事件转化为所有分量同时满足的条件，通常比直接求密度更方便。

???+ note "和的分布"

    令 $Z=X+Y$，则代换利用边缘密度，有

    $$
    f_Z(z)=\int_{-\infty}^{+\infty}f(x,z-x)\,\mathrm dx
    =\int_{-\infty}^{+\infty}f(z-y,y)\,\mathrm dy.
    $$

    若 $X,Y$ 独立，则化为卷积公式：

    $$
    f_Z(z)=\int_{-\infty}^{+\infty}f_X(x)f_Y(z-x)\,\mathrm dx
    =\int_{-\infty}^{+\infty}f_X(z-y)f_Y(y)\,\mathrm dy.
    $$

    对独立的整数值随机变量，对应的离散卷积为

    $$
    P(X+Y=k)=\sum_{i\in\mathbb Z}P(X=i)P(Y=k-i).
    $$

    例如，独立泊松变量满足

    $$
    X\sim P(\lambda_1),\quad Y\sim P(\lambda_2)
    \quad\Longrightarrow\quad
    X+Y\sim P(\lambda_1+\lambda_2).
    $$

???+ note "差的分布"

    令 $Z=X-Y$，

    $$
    f_Z(z)=\int_{-\infty}^{+\infty}f(z+y,y)\,\mathrm dy
    =\int_{-\infty}^{+\infty}f(x,x-z)\,\mathrm dx.
    $$

    若 $X,Y$ 独立，则化为

    $$
    f_Z(z)=\int_{-\infty}^{+\infty}f_X(z+y)f_Y(y)\,\mathrm dy
    =\int_{-\infty}^{+\infty}f_X(x)f_Y(x-z)\,\mathrm dx.
    $$

??? info "卷积公式"

    在数学定义上，卷积公式定义为

    $$
    (f * g)(t) = \int_{-\infty}^{+\infty} f(\tau)g(t-\tau) \mathrm\tau
    $$

    其中 $\tau$ 是积分变量，卷积结果 $(f * g)(t)$ 表示函数 $f$ 和 $g$ 在时间 $t$ 的重叠部分的加权之和。

!!! success "推导"

    事实上在这里，卷积公式可以通过换元法推导得到，而如此一来也省去了关于变量和区域的讨论。

    假设 $X \sim f_X(x),~~ Y \sim f_Y(y)$，$X$ 和 $Y$ 相互独立。令 $Z = aX+bY (ab \neq 0)$.

    令 $\begin{cases} u=ax+by \\ v=y \end{cases}$，则 $\begin{cases} x=\dfrac{u-bv}{a} \\ y=v \end{cases}$，雅可比行列式 $J = \begin{vmatrix} \dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\ \dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v} \end{vmatrix} = \dfrac 1a.$

    故 $f_{U,V}(u,v) = f(\dfrac{u-bv}{a}, v) \cdot \dfrac {1}{|a|}$（考虑对分布函数求导，二维变换时运用雅可比公式），而 $X$ 和 $Y$ 相互独立，所以 $f_{U,V}(u,v) = f_X(\dfrac{u-bv}{a}) \cdot f_Y(v) \cdot \dfrac {1}{|a|}$。
    
    利用边缘概率密度，
    
    $$
    f_U(u) = \displaystyle\int_{-\infty}^{+\infty} f_X(\dfrac{u-bv}{a}) \cdot f_Y(v) \cdot \dfrac {1}{|a|} \mathrm dv
    $$
    
    而 $u$ 可以“无痛”换成 $z$，则结果即为 $Z$ 的概率密度。下面的积和商也是类似的推导过程，利用辅助变量把问题补成二维变换即可。

???+ note "积的分布"

    令 $Z=XY$，

    $$
    f_Z(z)=\int_{x\ne0}\frac1{|x|}
    f\left(x,\frac zx\right)\,\mathrm dx
    =\int_{y\ne0}\frac1{|y|}
    f\left(\frac zy, y\right)\,\mathrm dy.
    $$

    若 $X,Y$ 独立，则化为

    $$
    f_Z(z)=\int_{x\ne0}\frac1{|x|}
    f_X(x)f_Y\left(\frac zx\right)\,\mathrm dx
    =\int_{y\ne0}\frac1{|y|}
    f_X\left(\frac zy\right)f_Y(y)\,\mathrm dy.
    $$

???+ note "商的分布"

    令 $Z=X/Y$，

    $$
    f_Z(z)=\int_{-\infty}^{+\infty}|y|f(zy,y)\,\mathrm dy.
    $$

    若 $X,Y$ 独立，则化为

    $$
    f_Z(z)=\int_{-\infty}^{+\infty}|y|f_X(zy)f_Y(y)\,\mathrm dy.
    $$

    联合具有密度时，$P(Y=0)=0$，所以商可在 $Y=0$ 的零概率事件上任意定义而不影响分布。

实际积分范围仍由原联合密度的非零区域决定，积的公式中 $x=0$ 附近若出现瑕积分，应按相应积分含义处理。

## 随机变量的数字特征

### 一维随机变量的数字特征

#### 数学期望

???+ note "概念"

    数学期望描述随机变量取值的**平均水平**或分布的**重心位置**，记为 $E(X)$ 或 $\mathbb E[X]$。它由随机变量的分布决定，不一定是随机变量实际能够取到的值。

    本章说“期望存在”时，通常指期望为有限实数，即满足**绝对可积**条件 $E(|X|)\lt+\infty$。

    对于离散型随机变量，若 $P(X=x_k)=p_k$，且 $\displaystyle \sum_k |x_k|p_k\lt+\infty,$

    则

    $$
    E(X)=\sum_k x_kp_k.
    $$

    对于具有密度 $f(x)$ 的连续型随机变量，若

    $$
    \int_{-\infty}^{+\infty}|x|f(x)\,\mathrm dx\lt+\infty,
    $$

    则

    $$
    E(X)=\int_{-\infty}^{+\infty}xf(x)\,\mathrm dx.
    $$

    ---

    例如，均匀骰子的点数 $X$ 满足 $\displaystyle E(X)=\frac{1+2+3+4+5+6}{6}=\frac72.$

    虽然骰子不可能掷出 $3.5$ 点，但其数学期望仍为 $3.5$。期望也不等于某次观测值或有限次观测的样本平均值。

    !!! warning "不能仅凭形式上的正负抵消判定期望存在。对于正负两部分积分均发散的情形，即使对称积分的主值存在，也不能把它当作数学期望。"

    ???+ tip "随机变量函数的期望"

        设 $Y=g(X)$。求 $E(g(X))$ 时，可以直接利用 $X$ 的分布。

        离散型情形：

        $$
        E(g(X))=\sum_k g(x_k)p_k,
        \qquad
        \sum_k |g(x_k)|p_k\lt+\infty.
        $$

        连续型情形：

        $$
        E(g(X))=\int_{-\infty}^{+\infty}g(x)f(x)\,\mathrm dx,
        \qquad
        \int_{-\infty}^{+\infty}|g(x)|f(x)\,\mathrm dx\lt+\infty.
        $$

        例如，当 $X\sim U(0,1)$ 时，

        $$
        E(X)=\int_0^1x\,\mathrm dx=\frac12,
        \qquad
        E(X^2)=\int_0^1x^2\,\mathrm dx=\frac13.
        $$

        所以一般有 $E(g(X))\ne g(E(X))$；特别地，$E(X^2)$ 与 $[E(X)]^2$ 不能混淆。

???+ note "性质"

    以下涉及的期望均假定存在。

    - **常数的期望**：$E(c)=c$。
    - **线性性质**：对常数 $a_i$、$b$，

    $$
    E\left(\sum_{i=1}^n a_iX_i+b\right)
    =\sum_{i=1}^n a_iE(X_i)+b.
    $$

    线性性质**不要求随机变量独立**。特别地，$E(aX+b)=aE(X)+b$。

    - **非负性与单调性**：若 $X\ge0$ 几乎处处，则 $E(X)\ge0$；若 $X\le Y$ 几乎处处，则 $E(X)\le E(Y)$。
    - **绝对值不等式**： $|E(X)|\le E(|X|).$

    - **独立变量的乘积期望**：若 $X,Y$ 独立且都可积，则 $E(XY)=E(X)E(Y).$

    对有限个相互独立且可积的随机变量，同样有 $E(\prod_iX_i)=\prod_iE(X_i)$。没有独立性时，不能直接使用这一性质。

    这里“几乎处处”表示相应关系以概率 $1$ 成立，允许在零概率事件上例外。

#### 方差、标准差

???+ note "概念"

    设 $\mu=E(X)$。若 $E[(X-\mu)^2]$ 有限，则称 $D(X)=\operatorname{Var}(X)=E[(X-E(X))^2]$ 为 $X$ 的**方差**，其非负平方根 $\sigma_X=\sqrt{D(X)}$ 称为**标准差**。

    方差衡量随机变量相对于其平均水平的离散程度。标准差与 $X$ 具有相同量纲，方差的量纲则是 $X$ 量纲的平方。

    离散型与连续型的计算公式分别为

    $$
    D(X)=\sum_k(x_k-\mu)^2p_k,
    $$

    $$
    D(X)=\int_{-\infty}^{+\infty}(x-\mu)^2f(x)\,\mathrm dx.
    $$

    有限方差等价于二阶矩 $E(X^2)\lt+\infty$；有限二阶矩保证期望有限，但期望有限不一定保证方差有限。

    展开平方可得最常用的计算公式：

    $$
    D(X)=E(X^2)-[E(X)]^2.
    $$

    例如，当 $X\sim U(0,1)$ 时， $\displaystyle D(X)=\frac13-\left(\frac12\right)^2=\frac1{12}.$

???+ note "性质"

    方差的主要性质包括：

    - **非负性**：$D(X)\ge0$。
    - **零方差的判定**： $D(X)=0\iff P(X=E(X))=1.$

    - **常数的方差**：$D(c)=0$。
    - **线性变换**： $D(aX+b)=a^2D(X), \qquad \sigma_{aX+b}=|a|\sigma_X.$

    平移不改变方差；缩放使方差乘以系数的平方（方差的单位是原始数据单位的平方）。

    - **独立变量之和的方差**：若 $X_1,\ldots,X_n$ 相互独立且方差有限，则

    $$
    D\left(\sum_{i=1}^n a_iX_i\right)
    =\sum_{i=1}^n a_i^2D(X_i).
    $$

    事实上，两两不相关已足以保证这一等式。一般情形下必须考虑协方差，不能直接把方差相加。

??? info "标准化与平方偏差"

    若 $0\lt D(X)=\sigma^2\lt+\infty$，令 $Z=\dfrac{X-\mu}{\sigma},$

    则 $E(Z)=0,~ D(Z)=1.$

    标准化只保证均值为 $0$、方差为 $1$，**不能据此断言 $Z$ 服从标准正态分布**。只有当原变量服从正态分布时，才有对应的正态标准化结论。

    对任意常数 $c$， $E[(X-c)^2]=D(X)+[E(X)-c]^2.$

    因此，当 $c=E(X)$ 时，平均平方偏差最小，最小值为 $D(X)$。

#### 常见分布的期望与方差

下表沿用前面章节的参数约定：

<center markdown="1">

| 分布 | 参数与取值约定 | $E(X)$ | $D(X)$ |
| --- | --- | --- | --- |
| 0—1 分布 | $P(X=1)=p$，$0\le p\le1$ | $p$ | $p(1-p)$ |
| 二项分布 $B(n,p)$ | $n$ 次独立伯努利试验的成功次数 | $np$ | $np(1-p)$ |
| 泊松分布 $P(\lambda)$ | $\lambda>0$ | $\lambda$ | $\lambda$ |
| 几何分布 $G(p)$ | 首次成功时的试验次数，取 $1,2,\ldots$，$0\lt p\le1$ | $\displaystyle\frac1p$ | $\displaystyle\frac{1-p}{p^2}$ |
| 超几何分布 | 总体 $N$，特征个体 $M$，不放回抽取 $n$ 个，$N>1$ | $\displaystyle\frac{nM}{N}$ | $\displaystyle{n\frac MN(1-\frac MN)\frac{N-n}{N-1}}$ |
| 均匀分布 $U(a,b)$ | $a\lt b$ | $\displaystyle\frac{a+b}{2}$ | $\displaystyle\frac{(b-a)^2}{12}$ |
| 指数分布 $\operatorname{Exp}(\lambda)$ | $\lambda>0$ 为率参数 | $\displaystyle\frac1\lambda$ | $\displaystyle\frac1{\lambda^2}$ |
| 正态分布 $N(\mu,\sigma^2)$ | $\sigma>0$ | $\mu$ | $\sigma^2$ |

</center>

-   几何分布若改为记录“首次成功前的失败次数” $Y=X-1$，则 $\displaystyle E(Y)=\frac{1-p}{p}, \qquad D(Y)=\frac{1-p}{p^2}.$

-   超几何分布中，$\displaystyle\frac{N-n}{N-1}$ 是与不放回抽样有关的有限总体修正因子；若抽遍总体，$n=N$，则 $X=M$ 为常数、方差为 $0$。$N=1$ 时应直接按退化分布处理，不能代入含 $N-1$ 分母的公式。
-   指数分布若使用尺度参数 $\theta=1/\lambda$，则期望为 $\theta$、方差为 $\theta^2$。
-   对于随机变量 $X \sim N(0, \tau^2)$，其中 $\tau>0$，其绝对值的期望 $E(|X|) = \tau \sqrt{\displaystyle\frac{2}{\pi}}$。

    ??? success "推导"

        将 $X$ 标准化，令 $Z = \displaystyle\frac{X}{\tau}$，则 $Z\sim N(0,1)$，其概率密度函数为 $\varphi(z)=\frac1{\sqrt{2\pi}}e^{-z^2/2}$。

        根据随机变量函数的期望公式，$E(|Z|) = \displaystyle\int_{-\infty}^{+\infty} |z|\varphi(z)\,\mathrm dz$。注意到被积函数是偶函数，且 $\displaystyle\frac{\mathrm d}{\mathrm dz}e^{-z^2/2}=-ze^{-z^2/2}$，于是

        $$
        \begin{aligned}
        E(|Z|)
        &=2\int_0^{+\infty}z\varphi(z)\,\mathrm dz\\
        &=\frac{2}{\sqrt{2\pi}}\int_0^{+\infty}ze^{-z^2/2}\,\mathrm dz\\
        &=\frac{2}{\sqrt{2\pi}}\left[-e^{-z^2/2}\right]_0^{+\infty}\\
        &=\frac{2}{\sqrt{2\pi}}(0+1)
        =\sqrt{\frac{2}{\pi}}.
        \end{aligned}
        $$

        由于 $X=\tau Z$ 且 $\tau>0$，有 $|X|=\tau|Z|$。由期望的线性性质，得到 $\displaystyle E(|X|)=\tau E(|Z|)=\tau\sqrt{\frac{2}{\pi}}.$

### 二维随机变量的数字特征

#### 数学期望

???+ note "随机向量的期望与分量的期望"

    对随机向量 $(X,Y)$，若两个分量的期望存在，可将其期望写为 $E[(X,Y)]=(E(X),E(Y)).$

    计算每个分量的期望，可以使用边缘分布，也可以直接使用联合分布。

    离散型情形：设 $p_{ij}=P(X=x_i,Y=y_j)$，则

    $$
    E(X)=\sum_i x_ip_{i\cdot}=\sum_i\sum_jx_ip_{ij},
    $$

    $$
    E(Y)=\sum_j y_jp_{\cdot j}=\sum_i\sum_jy_jp_{ij}.
    $$

    连续型情形：设联合密度为 $f(x,y)$，则

    $$
    E(X)=\int_{-\infty}^{+\infty}xf_X(x)\,\mathrm dx
    =\iint_{\mathbb R^2}xf(x,y)\,\mathrm dx\,\mathrm dy,
    $$

    $$
    E(Y)=\int_{-\infty}^{+\infty}yf_Y(y)\,\mathrm dy
    =\iint_{\mathbb R^2}yf(x,y)\,\mathrm dx\,\mathrm dy.
    $$

    求某个分量自身的数字特征时，使用它的边缘分布就可以了。

???+ note "二维随机变量函数的期望"

    令 $Z=g(X,Y)$。若 $E(|g(X,Y)|)\lt+\infty$，则可以直接利用联合分布计算：

    $$
    E(g(X,Y))=\sum_i\sum_jg(x_i,y_j)p_{ij}
    $$

    或

    $$
    E(g(X,Y))=\iint_{\mathbb R^2}g(x,y)f(x,y)\,\mathrm dx\,\mathrm dy.
    $$

    积分区域实际取联合密度的非零区域。一般不必先求出 $Z$ 的分布。

    ??? Example "计算示例"
        设

        $$
        f(x,y)=
        \begin{cases}
        2, & 0\lt x\lt y\lt1,\\
        0, & \text{其他}.
        \end{cases}
        $$

        直接利用联合密度，有

        $$
        E(X)=\int_0^1\int_0^y2x\,\mathrm dx\,\mathrm dy=\frac13,
        $$

        $$
        E(Y)=\int_0^1\int_0^y2y\,\mathrm dx\,\mathrm dy=\frac23,
        $$

        $$
        E(XY)=\int_0^1\int_0^y2xy\,\mathrm dx\,\mathrm dy=\frac14.
        $$

        由期望的线性性质， $E(X+Y)=E(X)+E(Y)=1.$
    
    !!! example "习题"

        设随机变量 $X$ 和 $Y$ 独立同分布，都服从参数为 $1$ 的指数分布。若 $Z = \begin{cases} 2X, &{X\ge Y},\\ Y-1, &{X\lt Y}, \end{cases}$ 则 $E(Z) = \underline\qquad.$

        ??? success "解答"

            $\dfrac 74$。

            由于 $X$ 和 $Y$ 独立同分布，则必有

            $$
            f(x,y)=f_X(x)f_Y(y) =
            \begin{cases}
            e^{-x-y}, &x \gt 0~\text{且}~y \gt 0,\\
            0, &\text{其他}.
            \end{cases}
            $$

            所以

            $$
            \begin{aligned}
            E(Z)
            &=\underbrace{\int_0^{+\infty}\mathrm dy\int_0^x2x e^{-x-y}\,\mathrm dx}_{X\ge Y}
            +\underbrace{\int_0^{+\infty}\mathrm dy\int_x^{+\infty}(y-1)e^{-x-y}\,\mathrm dx}_{X\lt Y}\\
            &=\frac32+\frac14=\boxed{\frac74}.
            \end{aligned}
            $$

#### 协方差

???+ note "协方差的概念"

    设 $X,Y$ 均具有有限二阶矩，则称 $\operatorname{Cov}(X,Y) =E[(X-E(X))(Y-E(Y))]$ 为 $X,Y$ 的**协方差**。

    它描述两个变量相对于各自均值的共同变化方向。化简定义式可得常用计算公式为
    
    $$
    \operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y).
    $$

    继续利用方差和数学期望的关系，可以得到

    $$
    \operatorname{Cov}(X,Y)=\dfrac 12 [D(X+Y)-D(X)-D(Y)].
    $$

    - 协方差为正，表示两个中心化变量的乘积平均为正，通常体现同向变化。
    - 协方差为负，通常体现反向变化。
    - 协方差为零，称 $X,Y$ **不相关**。

    协方差的量纲为两个变量量纲的乘积，其大小会受到单位选择的影响。因此，比较线性相关程度时通常采用无量纲的相关系数。

???+ note "协方差的性质"

    对具有有限二阶矩的随机变量及常数 $a,b,c,d$，
    
    $$
    \operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X),\\
    \operatorname{Cov}(X,X)=D(X),\\
    \operatorname{Cov}(X,c)=0,\\
    \operatorname{Cov}(aX+b,cY+d)=ac\,\operatorname{Cov}(X,Y).
    $$

    协方差对两个位置分别具有线性性质。例如，

    $$
    \operatorname{Cov}(X_1+X_2,Y)
    =\operatorname{Cov}(X_1,Y)+\operatorname{Cov}(X_2,Y).
    $$

    因此，

    $$
    D(aX+bY)
    =a^2D(X)+b^2D(Y)+2ab\,\operatorname{Cov}(X,Y).
    $$

    特别地，
    
    $$
    D(X+Y)=D(X)+D(Y)+2\operatorname{Cov}(X,Y),\\
    D(X-Y)=D(X)+D(Y)-2\operatorname{Cov}(X,Y).
    $$

    至此我们从两个方向推导了两个随机变量的协方差和方差的关系式。
    
    若 $X,Y$ 不相关，则和与差的方差均为 $D(X)+D(Y)$（都是相加）。

    推广到多个随机变量，

    $$
    D\left(\sum_{i=1}^n a_iX_i\right)
    =\sum_{i=1}^n a_i^2D(X_i)
    +2\sum_{i\lt j}a_ia_j\operatorname{Cov}(X_i,X_j).
    $$

#### 相关系数

???+ note "相关系数的概念"

    若 $0\lt D(X),D(Y)\lt+\infty$，则称

    $$
    \rho_{XY}
    =\frac{\operatorname{Cov}(X,Y)}{\sqrt{D(X)D(Y)}}
    =\frac{E(XY)-E(X)E(Y)}{\sigma_X\sigma_Y}
    $$

    为 $X,Y$ 的**相关系数**。

    相关系数可以看作两个标准化变量乘积的期望：

    $$
    \rho_{XY}
    =E\left[
    \frac{X-E(X)}{\sigma_X}
    \frac{Y-E(Y)}{\sigma_Y}
    \right].
    $$

    ??? info "更准确地来说..."
    
        这一系数叫 Pearson 相关系数。它衡量的是**线性相关程度**。$\rho_{XY}=0$ 表示不存在线性相关，并不排除其他依赖关系。

    !!! warning "若某个变量方差为 $0$，则上述相关系数没有定义，不能直接把它赋值为 $0$。<br>不过，此时它与另一个与其配对的、具有有限二阶矩变量的协方差仍然可以定义，协方差为 $0$。"

???+ note "相关系数的性质"

    -   由柯西—施瓦茨不等式，$|\operatorname{Cov}(X,Y)|\le\sqrt{D(X)D(Y)}$，从而

        $$
        -1\le\rho_{XY}\le1.
        $$

    -   在方差有限且均为正的前提下：

        -   $\rho_{XY}=0$ 当且仅当 $\operatorname{Cov}(X,Y)=0$。
        -   $\rho_{XY}=1$ 当且仅当存在常数 $a>0,b$，使 $P(Y=aX+b)=1$。
        -   $\rho_{XY}=-1$ 当且仅当存在常数 $a\lt0,b$，使 $P(Y=aX+b)=1$。

        所以 $|\rho_{XY}|=1$ 对应以概率 $1$ 成立的非退化线性关系，而不只是“相关性较强”。

    -   对于非零常数 $a,c$， $\rho_{aX+b,\ cY+d} =\dfrac{ac}{|ac|}\rho_{XY}.$

        平移或正比例缩放不改变相关系数；若恰有一个变量乘以负数，则相关系数变号。

!!! Example "协方差与相关系数的计算示例"
    继续使用三角形区域 $0\lt x\lt y\lt1$ 上的联合密度 $f(x,y)=2$。已有 
    
    $$
    \displaystyle E(X)=\frac13,\qquad E(Y)=\frac23,\qquad E(XY)=\frac14.
    $$

    再计算

    $$
    E(X^2)=\int_0^1\int_0^y2x^2\,\mathrm dx\,\mathrm dy=\frac16,
    $$

    $$
    E(Y^2)=\int_0^1\int_0^y2y^2\,\mathrm dx\,\mathrm dy=\frac12.
    $$

    于是 $\displaystyle D(X)=\frac16-\frac19=\frac1{18}, \qquad D(Y)=\frac12-\frac49=\frac1{18},$ $\displaystyle \operatorname{Cov}(X,Y)=\frac14-\frac13\cdot\frac23=\frac1{36},$

    $$
    \rho_{XY}
    =\frac{1/36}{\sqrt{(1/18)(1/18)}}=\frac12.
    $$

    因此，两个变量正相关但不是完全线性相关，并且 $\displaystyle D(X+Y)=\frac1{18}+\frac1{18}+2\cdot\frac1{36}=\frac16.$

### 独立性与不相关性的判定、切比雪夫不等式

#### 独立性的分布判据

一般使用分布情况来判断独立性。判断两个随机变量是否独立，应根据给出的分布类型使用对应条件：

<center markdown="1">

| 已知信息 | 独立的充要条件 |
| --- | --- |
| 联合分布函数 | $F(x,y)=F_X(x)F_Y(y)$ 对所有 $x,y$ 成立 |
| 联合分布律 | $p_{ij}=p_{i\cdot}p_{\cdot j}$ 对所有 $i,j$ 成立 |
| 联合概率密度 | $f(x,y)=f_X(x)f_Y(y)$ 几乎处处成立 |

</center>

证明独立需要满足整个判据；证明不独立，只需找到不符合判据的有效反例。连续型的密度判据应考虑非零区域及“几乎处处”的要求，不能只比较某一个点的密度值。

!!! tip "实用结论"
    若 $Y=g(X)$ 几乎处处成立，其中 $g$ 为可测函数，且 $Y$ 不是几乎处处为常数，则 $X,Y$ 一定不独立。交换 $X,Y$ 后同样成立。
    
    简单来说，如果两个随机变量之间有非平凡的确定函数关系，则它们一定不独立。

    ??? success "推导"

        用反证法。假设 $X,Y$ 独立。由于 $Y$ 不是几乎处处为常数，可选取某个实数 $t$，使得 $0\lt p=P(Y\le t)\lt1.$

        令 $A=\{g(X)\le t\}$、$B=\{Y\le t\}$。事件 $A$ 只由 $X$ 决定，事件 $B$ 只由 $Y$ 决定，因此由 $X,Y$ 的独立性，有 $P(A\cap B)=P(A)P(B).$

        另一方面，由 $Y=g(X)$ 几乎处处成立，事件 $A,B$ 除去一个概率为 $0$ 的集合外相同，故 $P(A)=P(B)=P(A\cap B)=p.$

        于是 $p=p^2$，只能有 $p=0$ 或 $p=1$，与 $0\lt p\lt1$ 矛盾。因此 $X,Y$ 不独立。

        ---

        这里“非平凡”要求 $g(X)$ 不是几乎处处为常数。仅要求函数 $g$ 本身不是常函数并不足够，还应该保证随机变量不能退化为常数。例如，若 $Y=c$ 几乎处处成立，则 $Y$ 与任意随机变量 $X$ 都独立，不能套用上述结论。

#### 不相关性的等价判据

一般用数字特征判定不相关性。若 $X,Y$ 具有有限二阶矩，则以下条件等价：

$$
X,Y\text{ 不相关}
\iff\operatorname{Cov}(X,Y)=0
\iff E(XY)=E(X)E(Y).
$$

还等价于 $D(X+Y)=D(X)+D(Y)$

或 $D(X-Y)=D(X)+D(Y).$

若两个方差均为正，也等价于 $\rho_{XY}=0$。

实际计算时，通常先求 $E(X)$、$E(Y)$、$E(XY)$，比较 $E(XY)$ 与 $E(X)E(Y)$；仅判断是否不相关时，不一定需要计算相关系数的分母。

!!! tip "独立与不相关的关系"

    在有限二阶矩条件下， $X,Y\text{ 独立}\Longrightarrow X,Y\text{ 不相关}.$

    其逆命题一般不成立。

    <center markdown="1">

    | 关系 | 是否可能 | 说明 |
    | --- | --- | --- |
    | 独立且不相关 | 可能 | 例如两枚独立骰子的点数 |
    | 不独立但不相关 | 可能 | 非线性依赖可能使协方差仍为 $0$ |
    | 不独立且相关 | 可能 | 协方差非零可直接否定独立 |
    | ~~独立但相关~~ | 不可能 | 此处假定变量具有有限二阶矩 |

    </center>

    因此，可以用协方差非零证明不独立，但不能仅凭协方差为零证明独立。

    ??? Question "不相关推出独立还需要什么条件（特殊情形）？"
        
        -   **联合服从二维正态分布**：此时独立与不相关等价。必须有联合正态的前提，不能只知道两个边缘分布各自为正态。
        -   **两个变量都服从 0—1 分布**：此时 $E(XY)=P(X=1,Y=1)$。若不相关，令 $p=P(X=1)$、$q=P(Y=1)$，则 $P(X=1,Y=1)=pq.$

            其余三个联合概率由边缘概率确定，分别为 $p(1-q)$、$(1-p)q$、$(1-p)(1-q)$，因此整个联合分布律均满足乘积关系，两个变量独立。

!!! Example "不相关但不独立的例子"
    设 $X\sim U(-1,1)$，令 $Y=X^2$。由对称性， $E(X)=E(X^3)=0,$

    所以 $\operatorname{Cov}(X,Y)=E(X^3)-E(X)E(X^2)=0.$

    但令 $\displaystyle A=\{|X|\le\frac 12\},\qquad B=\{Y\le\frac 14\},$

    则 $A=B$，且 $P(A)=P(B)=\displaystyle\frac 12$，从而 $\displaystyle P(A\cap B)=\frac12\ne\frac14=P(A)P(B).$

    所以 $X,Y$ 不独立。
    
    这个例子说明：完全由另一个变量确定的非线性关系，也可能具有零相关系数。

#### 切比雪夫不等式

若随机变量 $X$ 的期望为 $\mu$，方差为有限值 $\sigma^2$，则对任意 $\varepsilon>0$，

$$
P(|X-\mu|\ge\varepsilon)
\le\frac{\sigma^2}{\varepsilon^2}.
$$

其等价形式（互为补事件）为

$$
P(|X-\mu|\lt\varepsilon)
\ge1-\frac{\sigma^2}{\varepsilon^2}.
$$

也可写出其他有效但不完全相同的界：

$$
P(|X-\mu|>\varepsilon)
\le\frac{\sigma^2}{\varepsilon^2},
\qquad
P(|X-\mu|\le\varepsilon)
\ge1-\frac{\sigma^2}{\varepsilon^2}.
$$

当 $\sigma>0$，取 $\varepsilon=k\sigma$，得到标准差单位下的形式：

$$
P(|X-\mu|\ge k\sigma)\le\frac1{k^2},
\qquad
P(|X-\mu|\lt k\sigma)\ge1-\frac1{k^2},
\quad k>0.
$$

这些界对所有具有有限方差的分布成立，不要求正态分布。当不等式右侧超出概率本身的取值范围时，应结合 $0\le P\le1$ 理解。

??? success "推导思路"

    对每个试验结果，

    $$
    (X-\mu)^2
    \ge\varepsilon^2\mathbf1_{\{|X-\mu|\ge\varepsilon\}}.
    $$

    两边取期望，并使用示性随机变量的期望等于事件概率，得到

    $$
    \sigma^2=E[(X-\mu)^2]
    \ge\varepsilon^2P(|X-\mu|\ge\varepsilon).
    $$

    除以 $\varepsilon^2$ 即得切比雪夫不等式。这也可以看作对非负随机变量 $(X-\mu)^2$ 使用马尔可夫不等式。

!!! Example "切比雪夫不等式的应用"

    已知期望和方差、但不知道具体分布时，可以用切比雪夫不等式给出偏离均值的概率上界或落在均值附近的概率下界。

    ---

    例如，若 $E(X)=10$、$D(X)=4$，则 $\displaystyle P(|X-10|\ge6)\le\frac4{36}=\frac19,$

    因此 $P(4\lt X\lt16)\ge\dfrac89.$

    这里只得到一个保证成立的界，不能据此断言概率恰好等于 $8/9$。若已知具体分布，则通常可用分布函数获得更精确的概率。

    若希望保证 $P(|X-\mu|\lt\varepsilon)\ge1-\alpha, \qquad 0\lt\alpha\lt1,$

    由切比雪夫不等式可知，一个充分条件是 $\displaystyle \varepsilon\ge\frac{\sigma}{\sqrt\alpha}.$

## 大数定律与中心极限定理
### 依概率收敛

???+ note "概念"

    设 $X_1,X_2,\ldots$ 与 $X$ 定义在同一概率空间上。若对任意 $\varepsilon>0$，都有

    $$
    \lim_{n\to\infty}P(|X_n-X|\ge\varepsilon)=0,
    $$

    则称随机变量序列 $\{X_n\}$ **依概率收敛**于 $X$，记为 $X_n\xrightarrow{P}X.$

    等价地，对任意 $\varepsilon>0$，

    $$
    \lim_{n\to\infty}P(|X_n-X|\lt\varepsilon)=1.
    $$

    定义中的“$\ge\varepsilon$”也可换成“$>\varepsilon$”，因为要求对每一个正的 $\varepsilon$ 都成立。

    若极限为常数 $a$，则写为 $X_n\xrightarrow{P}a$。其含义是：当 $n$ 足够大时，$X_n$ 与 $a$ 相差超过任意固定误差的概率可以任意小。

    依概率收敛不表示每次观测都更接近极限，也不要求误差随 $n$ 单调减小；它描述的是误差事件的概率变化。

???+ note "常用性质"

    -   若 $X_n\xrightarrow{P}a$、$Y_n\xrightarrow{P}b$，其中 $a,b$ 为有限常数，则 $X_n+Y_n\xrightarrow{P}a+b$， $X_nY_n\xrightarrow{P}ab.$

    -   当 $b\ne0$ 时，若比值已定义，则 $\displaystyle \frac{X_n}{Y_n}\xrightarrow{P}\frac ab.$

    -   若 $Y_n$ 可能等于 $0$，可以在该事件上为比值指定任意有限值；由于 $b\ne0$，其概率趋于 $0$，不影响上述结论。这些运算性质不要求 $X_n$ 与 $Y_n$ 独立。

    -   更一般地，若 $g$ 在 $a$ 处连续，则 $X_n\xrightarrow{P}a \quad\Longrightarrow\quad g(X_n)\xrightarrow{P}g(a).$ 例如，若 $X_n\xrightarrow{P}2$，则 $X_n^2\xrightarrow{P}4$。

### 大数定律
#### 切比雪夫大数定律

!!! info "该定律由俄国数学家帕夫努季·利沃维奇·切比雪夫（Chebyshev）提出。"

???+ note "条件与结论"

    设 $X_1,X_2,\ldots$ **两两不相关**，各自具有有限方差，且方差存在统一上界：存在常数 $C\lt+\infty$，使对所有 $i$ 都有 $D(X_i)\le C.$

    则

    $$
    \frac1n\sum_{i=1}^nX_i
    -\frac1n\sum_{i=1}^nE(X_i)
    \xrightarrow{P}0.
    $$

    即 **大量随机变量的平均值，依概率接近它们的期望的平均值**。

    两两独立可以推出两两不相关，因此常用的“两两独立且方差一致有界”版本也是上述定理的特例（弱化）版本。

    若进一步有 $E(X_i)=\mu$，则

    $$
    \overline X_n=\frac1n\sum_{i=1}^nX_i\xrightarrow{P}\mu.
    $$

    若各期望不相同，但 $\frac1n\sum_{i=1}^nE(X_i)\to a$，也可得 $\overline X_n\xrightarrow{P}a$。

??? info "切比雪夫大数定律的证明与更一般的方差条件"

    令 $T_n=\dfrac1n\sum_{i=1}^n[X_i-E(X_i)].$
    
    由期望的线性性质，可进一步得到 $T_n=\dfrac1n\sum_{i=1}^n X_i - E(\dfrac1n\sum_{i=1}^n).$

    由两两不相关性，

    $$
    E(T_n)=0,
    \qquad
    D(T_n)=\frac1{n^2}\sum_{i=1}^nD(X_i)\le\frac Cn.
    $$

    应用切比雪夫不等式，对任意 $\varepsilon>0$，

    $$
    P(|T_n|\ge\varepsilon)
    \le\frac{D(T_n)}{\varepsilon^2}
    \le\frac{C}{n\varepsilon^2}\to0.\qquad\square
    $$

    读者可以回到[切比雪夫不等式](#切比雪夫不等式)一节对照形式参看。

    ---

    事实上，统一上界只是便于使用的充分条件。上述证明只需 $\displaystyle \frac1{n^2}\sum_{i=1}^nD(X_i)\to0$

    即可。不能把“每个方差都有限”直接替换为“方差一致有界”；有限方差可能随 $i$ 增大而迅速增长。

#### 辛钦大数定律

!!! info "该定律由苏联数学家亚历山大·雅科夫列维奇·辛钦（Khinchin）提出。"

???+ note "条件与结论"

    设 $X_1,X_2,\ldots$ **相互独立、同分布**，且都具有有限数学期望 $E(X_i)=\mu, \qquad E(|X_i|)\lt+\infty.$

    则

    $$
    \overline X_n=\frac1n\sum_{i=1}^nX_i\xrightarrow{P}\mu.
    $$

    即 **大量随机变量的平均值，依概率接近它们的期望**。

??? example "辛钦大数定律的运用"

    若 $X_1,X_2,\ldots$ 独立同分布，$g$ 为可测函数，且 $E(|g(X_1)|)\lt+\infty$，则 $g(X_i)$ 也独立同分布，所以

    $$
    \frac1n\sum_{i=1}^ng(X_i)\xrightarrow{P}E(g(X_1)).
    $$

    例如，若 $E(X_1^2)\lt+\infty$，则 $\displaystyle \frac1n\sum_{i=1}^nX_i^2\xrightarrow{P}E(X_1^2).$

    结合 $\overline X_n\xrightarrow{P}\mu$ 及连续函数的收敛性质，可得

    $$
    \frac1n\sum_{i=1}^n(X_i-\overline X_n)^2
    =\frac1n\sum_{i=1}^nX_i^2-\overline X_n^2
    \xrightarrow{P}D(X_1).
    $$

    即样本的平均平方偏差可以依概率逼近总体方差。

#### 伯努利大数定律

???+ note "条件与结论"

    独立重复进行同一个试验，事件 $A$ 在每次试验中发生的概率恒为 $p$。令 $S_n$ 表示前 $n$ 次试验中 $A$ 发生的次数，则

    $$
    \frac{S_n}{n}\xrightarrow{P}p.
    $$

    （读者朋友们或许注意到这里也可以表述成随机变量 $X \sim B(n,p)$）

    也就是对任意 $\varepsilon>0$，

    $$
    \lim_{n\to\infty}
    P\left(\left|\frac{S_n}{n}-p\right|\ge\varepsilon\right)=0.
    $$

    这说明 **频率依概率收敛于概率**，为用大量独立重复试验的频率估计概率提供了理论依据。

??? info "伯努利大数定律的证明"

    设

    $$
    I_i=
    \begin{cases}
    1, & \text{第 }i\text{ 次试验中 }A\text{ 发生},\\
    0, & \text{第 }i\text{ 次试验中 }A\text{ 不发生}.
    \end{cases}
    $$

    则示性变量 $I_i$ 独立同分布（参数为 $p$ 的 0-1 分布），且

    $$
    S_n=\sum_{i=1}^nI_i,\qquad E(I_i)=p,\qquad D(I_i)=p(1-p).
    $$

    因此<u>伯努利大数定律实际上是切比雪夫大数定律的一个特例</u>，并有

    $$
    P\left(\left|\frac{S_n}{n}-p\right|\ge\varepsilon\right)
    \le\frac{p(1-p)}{n\varepsilon^2}
    \le\frac1{4n\varepsilon^2}.
    $$

    ---

    进一步地，若希望该误差概率不超过 $\alpha$，其中 $0\lt\alpha\lt1$，一个不依赖未知 $p$ 的充分条件为 $n\ge\dfrac1{4\alpha\varepsilon^2}.$

    这是保守的充分条件，也就意味着不等号右侧不是达到目标所必需的最小试验次数。

#### 小结

!!! tip "三种大数定律的比较"

    <center markdown="1">

    | 定律 | 常用条件 | 结论 |
    | --- | --- | --- |
    | 切比雪夫大数定律 | 两两不相关（特例：两两独立）、方差一致有界 | 平均值与期望的平均值之差依概率趋于 $0$ |
    | 辛钦大数定律 | 独立同分布，期望有限 | 样本平均值依概率趋于总体期望 |
    | 伯努利大数定律 | 独立重复的伯努利试验，成功概率恒为 $p$ | 频率 $S_n/n$ 依概率趋于 $p$ |

    </center>

    本节这些结论采用依概率收敛的形式，属于弱大数定律。独立同分布且方差有限时，可以同时满足切比雪夫与辛钦定律的条件；仅有有限期望时，则优先考虑辛钦定律。

!!! example "大数定律的运用"

    1.  设 $X_1,X_2,\cdots,X_n,\cdots$ 是来自总体 $X$ 的简单随机样本，$X$ 服从 $[-\pi,\pi]$ 上的均匀分布，记 $Y_k=\cos(kX_k)$，$k=1,2,\cdots,n,\cdots$，则 $\dfrac{1}{n}\sum_{k=1}^{n}Y_k^2$ 依概率收敛于 $\underline{\qquad}$。

        ??? success "解答"

            $\dfrac 12$。

            由于总体是均匀分布（有界性），则方差也一定有界。由于 $X_1,X_2,\cdots,X_n,\cdots$ 是来自同一总体的简单随机样本，$X_1,X_2,\cdots,X_n,\cdots$ 互相独立（其实也同分布），因而它们各自的函数也互相独立；
            
            综上即 $Y^2_k=\cos^2(kX_k)$ 相互独立且方差一致有界，根据切比雪夫大数定律，$\dfrac{1}{n}\sum_{k=1}^{n}Y_k^2$ 依概率收敛于 $\dfrac{1}{n}\sum_{k=1}^{n}E(Y_k^2)$。而 $E(Y_k^2) = \displaystyle\int_{-\pi}^{\pi} \dfrac{1}{2\pi} \cos^2(kx) \mathrm dx = \dfrac{2k \times 2}{2k\pi} \displaystyle\int_0^{\frac {\pi}{2}} \cos^2t \mathrm dt = \dfrac{2}{\pi} \cdot \dfrac{\pi}{4} = \dfrac 12$。

    2.  设总体 $X$ 服从参数为 $2$ 的指数分布，$X_1,X_2,\cdots,X_n,\cdots$ 为来自总体 $X$ 的简单随机样本，则 $Y_n=\dfrac{1}{n}\sum_{i=1}^{n}X_i^2$ 依概率收敛于 $\underline{\qquad}$。

        ??? success "解答"

            $\dfrac 12$。

            由于 $X_1,X_2,\cdots,X_n,\cdots$ 是来自同一总体的简单随机样本，$X_1,X_2,\cdots,X_n,\cdots$ 互相独立，且都有 $X_i \sim \operatorname{Exp}(2)$（同分布），因而它们各自的函数 $X^2_i$ 也互相独立。

            由同分布可知 $E(X^2_i) = D(X_i) + [E(X_i)]^2 = \dfrac{1+1}{\lambda^2} = \dfrac 12$。

            即 $X^2_i$ 独立同分布且具有相同的有限数学期望。根据辛钦大数定律，$$Y_n=\dfrac{1}{n}\sum_{i=1}^{n}X_i^2$ 依概率收敛于 $E(X^2_i) = \dfrac 12$。

            !!! tip "为什么不用切比雪夫大数定律？"

                有朋友可能会想到，指数分布虽然无界，但各阶矩都有限，即对于 $X_i\sim\operatorname{Exp}(2)$，有 $E(X_i^m)=\frac{m!}{2^m}$，所以可知 $D(X^2_i) = E(X^4_i) - [E(X^2_i)]^2 \lt +\infty$。所以这里也可以使用切比雪夫大数定律，只不过判断的过程多了一步，我们能省事就省事。

### 中心极限定理
#### 列维—林德伯格定理

!!! info "该定理由芬兰数学家耶尔·瓦尔德马·林德伯格（Lindeberg）于 20 世纪 20 年代提出。<br>法国数学家保罗·列维（Levy）几乎同时独立证明了这一定理。"

???+ note "条件与结论"

    设 $X_1,X_2,\ldots$ **相互独立、同分布**。记 $E(X_i)=\mu,\qquad D(X_i)=\sigma^2, \qquad 0\lt\sigma^2\lt+\infty.$

    令 $S_n=\sum_{i=1}^nX_i$，则 **标准化的和**

    $$
    Z_n=\frac{S_n-n\mu}{\sigma\sqrt n}
    =\frac{\sqrt n(\overline X_n-\mu)}{\sigma}
    $$

    依分布收敛于标准正态分布，记为 $Z_n\xrightarrow{d}N(0,1).$

    展开为分布函数形式，即对任意实数 $x$，

    $$
    \lim_{n\to\infty}
    P\left(\frac{S_n-n\mu}{\sigma\sqrt n}\le x\right)
    =\Phi(x),
    $$

    其中 $\Phi$ 是标准正态分布函数。

!!! warning "定理只指出标准化的和依分布收敛于正态分布，并不意味着原变量服从于正态分布。<br>依分布收敛描述分布函数的收敛，不能认为 $Z_n$ 依概率收敛于 $0$。"

???+ example "和与平均值的正态近似"

    当 $n$ 足够大且近似效果适当时，可以写成 $S_n\approx N(n\mu,n\sigma^2),\qquad\overline X_n = \dfrac 1n S_n\approx N\left(\mu,\frac{\sigma^2}{n}\right).$

    这里的 $\approx$ 表示分布近似，不是精确分布等式。相应地，

    $$
    P(a\lt S_n\le b)
    \approx
    \Phi\left(\frac{b-n\mu}{\sigma\sqrt n}\right)
    -\Phi\left(\frac{a-n\mu}{\sigma\sqrt n}\right),
    $$

    $$
    P(a\lt\overline X_n\le b)
    \approx
    \Phi\left(\frac{\sqrt n(b-\mu)}{\sigma}\right)
    -\Phi\left(\frac{\sqrt n(a-\mu)}{\sigma}\right).
    $$

    对给定 $\varepsilon>0$，常用估计为

    $$
    P(|\overline X_n-\mu|\lt\varepsilon)
    \approx2\Phi\left(\frac{\sqrt n\,\varepsilon}{\sigma}\right)-1.
    $$

!!! tip "与大数定律的区别及适用边界"

    <center markdown="1">

    | 比较项 | 大数定律 | 中心极限定理 |
    | --- | --- | --- |
    | 主要问题 | 平均值趋向哪里 | 平均值围绕其极限如何波动 |
    | 独立同分布下的典型结论 | $\overline X_n\xrightarrow{P}\mu$ | $\sqrt n(\overline X_n-\mu)/\sigma\xrightarrow{d}N(0,1)$ |
    | 常见用途 | 说明频率、样本平均值等的稳定性 | 用正态分布近似和、平均值的概率 |

    </center>

    两者并不矛盾：平均值本身趋于 $\mu$，而把它与 $\mu$ 的偏差放大 $\sqrt n$ 倍并标准化后，可以得到非退化的正态极限。

    使用时还应注意：

    - 若原变量本身独立且服从正态分布，则和与平均值的正态分布是精确结论，不必等待 $n$ 很大。
    - 对一般分布，有限样本的近似精度取决于原分布的偏斜程度、尾部等因素，不存在对所有分布都有效的固定样本量门槛。
    - 方差无穷、变量存在依赖或不同分布时，不能直接套用这里的定理；若要使用其他中心极限定理，必须另外检查其条件。
    - 中心极限定理本身不提供有限样本的统一误差保证，极端尾部概率也不能仅凭“$n$ 较大”就认为近似可靠。

#### 棣莫弗—拉普拉斯定理

!!! info "或称拉普拉斯（中心极限）定理。1718 年，法裔数学家亚伯拉罕·棣莫弗（De Moivre）发表的《机遇论》是概率论早期的重要著作，书中对 n 重伯努利试验的中心极限定理的特殊情况，即 $p=\dfrac 12$ 的情况作了讨论。1812 年，法国学者皮埃尔-西蒙·拉普拉斯（Laplace）在《概率的分析理论》一书中总结了概率论所有已经得到的成果，并将此定理推广到一般情形。"

???+ note "条件与结论"

    设 $S_n\sim B(n,p)$，其中 $0\lt p\lt1$ 固定。则

    $$
    \frac{S_n-np}{\sqrt{np(1-p)}}\xrightarrow{d}N(0,1).
    $$

    即对任意实数 $x$，

    $$
    \lim_{n\to\infty}
    P\left(\frac{S_n-np}{\sqrt{np(1-p)}}\le x\right)=\Phi(x).
    $$

    因为 $S_n$ 可以表示为 $n$ 个独立同分布的示性变量之和，每个变量的期望为 $p$、方差为 $p(1-p)$，所以<u>该定理是独立同分布中心极限定理（列维-林德伯格定理）的特例</u>。

    因此，在适用的近似情形下， $S_n\approx N(np,np(1-p)),$ $\displaystyle \frac{S_n}{n}\approx N\left(p,\frac{p(1-p)}n\right).$

    特别地，当 $p=0$ 或 $p=1$ 时，二项分布退化为常数分布，不能使用上述含标准差分母的标准化公式。

???+ info "连续性修正"

    二项变量只取整数值，而正态变量连续。用正态分布近似整数区间概率时，常将端点向外扩展半个单位，这称为**连续性修正**。

    记 $\mu_n=np,\qquad \sigma_n=\sqrt{np(1-p)}.$

    对整数 $r\le s$，常用公式为：

    <center markdown="1">

    | 二项事件 | 经过连续性修正的正态近似 |
    | :---: | :---: |
    | $r\le S_n\le s$ | $\Phi\left(\dfrac{s+1/2-\mu_n}{\sigma_n}\right)-\Phi\left(\dfrac{r-1/2-\mu_n}{\sigma_n}\right)$ |
    | $S_n\le s$ | $\Phi\left(\dfrac{s+1/2-\mu_n}{\sigma_n}\right)$ |
    | $S_n\ge r$ | $1-\Phi\left(\dfrac{r-1/2-\mu_n}{\sigma_n}\right)$ |
    | $S_n=k$ | $\Phi\left(\dfrac{k+1/2-\mu_n}{\sigma_n}\right)-\Phi\left(\dfrac{k-1/2-\mu_n}{\sigma_n}\right)$ |

    </center>

    若原事件包含严格不等号或非整数边界，先利用 $S_n$ 的整数取值化为对应的整数闭区间，再做连续性修正。例如，对整数 $k$，$S_n\lt k$ 等价于 $S_n\le k-1$，其修正边界为 $k-1/2$。

    连续性修正是改善有限样本近似的常用方法，并不是中心极限定理极限表达式中的必需项；相差半个单位的修正在标准化后会随 $n$ 增大而消失。

    ??? note "连续性修正中的分布近似选择"

        选用近似时应同时考虑 $np$ 与 $n(1-p)$：

        - 当两者都较大时，二项分布通常更适合用正态分布近似。
        - 当 $p$ 很小且 $np$ 不大时，泊松近似往往更合适，不能只看 $n$ 很大就直接使用正态近似。
        - 常见的 $np\ge5$、$n(1-p)\ge5$ 等规则只是经验判断，不能保证所有区间、尤其是尾部概率都达到所需精度。
        - 若需要精确概率，可直接求和 $\sum_{k=r}^s\binom nkp^k(1-p)^{n-k}$，或计算二项分布函数。

伯努利大数定律说明成功频率接近 $p$，棣莫弗—拉普拉斯定理进一步描述成功次数及频率在各自均值附近的近似波动分布。

#### 小结

!!! example "中心极限定理的计算"

    1.  设随机变量 $X_1,X_2,\cdots,X_n,\cdots$ 相互独立且均服从 $U[1,4]$，$\Phi(x)$ 是标准正态分布的分布函数，则

        $$
        \lim_{n\to\infty}P\left\{
        \dfrac{2\sum_{i=1}^{n}X_i-5n}{\sqrt{n}}\le x
        \right\}
        =(\qquad)。
        $$

        A. $\Phi(x)\qquad$
        B. $\Phi(\sqrt{3}x)\qquad$
        C. $\Phi\left(\dfrac{x}{\sqrt{3}}\right)\qquad$
        D. $\Phi\left(\dfrac{2x}{\sqrt{3}}\right)$

        ??? success "解答"

            选 C.

            由题设知 $E(X_i) = \dfrac 52$，$D(X_i) = \dfrac 34 \qquad (i=1,2,\cdots,n,\cdots)$。由列维-林德伯格中心极限定理知，

            $$
            \lim_{n\to\infty}P\left\{\dfrac{\sum_{i=1}^{n}X_i-n \cdot\dfrac 52}{\sqrt n \cdot \dfrac{\sqrt 3}{2}} \le t\right\} = \Phi(t)
            $$

            即

            $$
            \lim_{n\to\infty}P\left\{\dfrac{2\sum_{i=1}^{n}X_i-5n}{\sqrt n} \le \sqrt 3 t\right\} = \Phi(t)
            $$

            作代换 $\sqrt 3 t = x$，故有

            $$
            \lim_{n\to\infty}P\left\{\dfrac{2\sum_{i=1}^{n}X_i-5n}{\sqrt n} \le 
            x\right\} = \Phi(\dfrac {x}{\sqrt 3})
            $$

    2.  设随机变量 $X_1,X_2,\cdots,X_{2n},\cdots$ 相互独立，且均服从二项分布 $B\left(1,\dfrac{1}{2}\right)$，若根据中心极限定理，有

        $$
        \lim_{n\to\infty}P\left\{
        a\sum_{i=1}^{n}(X_{2i}-X_{2i-1})\le\sqrt{n}x
        \right\}
        =\Phi(x)，
        $$

        其中 $\Phi(x)$ 为标准正态分布函数，则 $a=\underline{\qquad}$。

        ??? success "解答"

            $\sqrt 2$.

            由题意，由于随机变量 $X_1,X_2,\cdots,X_{2n},\cdots$ 相互独立，若记 $Y_i=X_{2i}-X_{2i-1},\qquad i=1,2,\cdots,n,\cdots$，显然 $Y_i$ 也独立同分布。

            又因 $X_i \sim B(1,\dfrac 12)$ 得 $E(X_i)=\dfrac 12$，$D(X_i)=\dfrac 14$，所以

            $$
            E(Y_i)=E(X_{2i}-X_{2i-1})=E(X_{2i})-E(X_{2i-1})=0 \\
            D(Y_i)=D(X_{2i}-X_{2i-1})=D(X_{2i})+D(X_{2i-1})=\dfrac 12
            $$

            由列维-林德伯格中心极限定理知，
            
            $$
            \lim_{n\to\infty}P\left\{\dfrac{\sum_{i=1}^{n}Y_i-nE(Y_i)}{\sqrt {nD(Y_i)}} \le x\right\} = \lim_{n\to\infty}P\left\{\dfrac{\sum_{i=1}^{n}Y_i-E(\sum_{i=1}^{n}Y_i)}{\sqrt {D(\sum_{i=1}^{n}Y_i})} \le x\right\} = \lim_{n\to\infty}P\left\{\dfrac{\sum_{i=1}^{n}Y_i}{\sqrt {\dfrac n2}} \le x\right\} = \Phi(x)
            $$

            故 $a=\sqrt 2$。

!!! example "实际问题中中心极限定理的应用"

    关键在于 **识别出对应的随机变量和参数**。

    1.  某保险公司接受了 $10\,000$ 辆汽车的保险，每辆汽车每年的保费为 $1.2$ 万元。若汽车丢失，则车主获得赔偿 $100$ 万元。设汽车的丢失率为 $0.006$，对于此项业务，利用中心极限定理，则保险公司一年所获利润不少于 $6\,000$ 万元的概率为 $\underline{\qquad}$。

        ??? success "解答"

            $\dfrac 12$。

            设一年内丢失的汽车数为 $X$，则 $X\sim B(10\,000,0.006)$，且

            $$
            E(X)=np=10\,000\times0.006=60,\\
            D(X)=np(1-p)=10\,000\times0.006\times0.994=59.64.
            $$

            保险公司一年的保费收入为 $10\,000\times1.2=12\,000$（万元），赔偿支出为 $100X$（万元），故年利润为 $12\,000-100X$（万元）。由 $12\,000-100X\ge6\,000 \iff X\le60$

            知所求概率为 $P\{X\le60\}$。由棣莫弗—拉普拉斯定理，$X$ 近似服从 $N(60,59.64)$，于是

            $$
            P\{X\le60\}
            \approx\Phi\left(\dfrac{60-60}{\sqrt{59.64}}\right)
            =\Phi(0)=\dfrac 12.
            $$

    2.  设生产每件产品的时间服从指数分布，且平均时间为 $10$ 分钟，生产各件产品的时间相互独立，由中心极限定理，在 $15$ 小时至 $20$ 小时之间生产 $100$ 件产品的概率约为（　）。

        A. $\Phi(2)-\Phi(1)\qquad$  
        B. $2\Phi(1)-\Phi(2)\qquad$  
        C. $\Phi(1)+\Phi(2)-1\qquad$  
        D. $2[\Phi(1)-\Phi(-2)]$

        ??? success "解答"

            选 C.

            设生产第 $i$ 件产品所需的时间为 $T_i$（单位：分钟），则 $T_1,T_2,\cdots,T_{100}$ 相互独立，且均服从参数 $\lambda=\dfrac 1{10}$ 的指数分布。于是

            $$
            E(T_i)=\dfrac 1\lambda=10,
            \qquad
            D(T_i)=\dfrac 1{\lambda^2}=100,
            \qquad i=1,2,\cdots,100.
            $$

            生产 $100$ 件产品的总时间 $S=\sum_{i=1}^{100}T_i$ 的期望与方差分别为

            $$
            E(S)=100\times10=1\,000,\\
            D(S)=100\times100=10\,000,
            \qquad
            \sigma_S=\sqrt{D(S)}=100.
            $$

            $15$ 小时、$20$ 小时分别换算为 $900$ 分钟、$1\,200$ 分钟，由列维-林德伯格中心极限定理，

            $$
            P(900\le S\le1\,200)
            \approx\Phi\left(\dfrac{1\,200-1\,000}{100}\right)
            -\Phi\left(\dfrac{900-1\,000}{100}\right)
            =\Phi(2)-\Phi(-1).
            $$

            再由 $\Phi(-1)=1-\Phi(1)$，即得 $P(900\le S\le1\,200)\approx\Phi(2)+\Phi(1)-1.$


## 数理统计

从总体中抽取样本，利用统计量推断总体的未知参数或检验有关总体的假设。

### 总体与样本
#### 总体、个体和总体分布

研究对象的全体称为**总体**，其中每个研究对象称为**个体**。数理统计通常用随机变量 $X$ 表示个体的某个数量指标，并把 $X$ 的分布称为总体分布。

例如，研究某批零件的长度时，总体是这批零件，$X$ 表示随机抽取一个零件所得的长度。

若总体分布属于某个已知分布族，但其中参数未知，可以写为 $F(x;\theta),\qquad \theta\in\Theta,$

其中 $\theta$ 是待推断的参数，也可以是参数向量，$\Theta$ 为参数空间。例如，正态总体 $N(\mu,\sigma^2)$ 的未知参数可以是 $\mu$、$\sigma^2$，或二者共同组成的向量。

总体参数是由总体分布确定的量。在本章的频率学派框架中，未知参数视为固定但未知的常数。

#### 样本

设 $X_1,\ldots,X_n$ 相互独立，且每个 $X_i$ 都与总体 $X$ 同分布，则称它们组成总体的一个容量为 $n$ 的**简单随机样本**。

简单随机样本的核心条件是**独立同分布**，简称 iid： $X_1,\ldots,X_n\overset{\mathrm{iid}}{\sim}F.$

- $X_1,\ldots,X_n$ 表示抽样前的随机变量，称为样本。
- $x_1,\ldots,x_n$ 表示抽样后得到的具体观测值，称为样本值或样本观测值。
- $n$ 称为样本容量。

$\overline X=\frac1n\sum_iX_i$ 是随机变量，$\overline x=\frac1n\sum_ix_i$ 是根据数据计算出的数值，二者应区分。

这里使用的是 iid 抽样模型。有限总体的不放回抽样中，各次抽取一般不独立，不能无条件地套用 iid 样本的公式。

#### 样本的分布（iid）

若总体分布函数为 $F(x;\theta)$，由样本独立性可得

$$
P(X_1\le x_1,\ldots,X_n\le x_n)
=\prod_{i=1}^nF(x_i;\theta).
$$

若总体具有概率密度 $f(x;\theta)$，则样本的联合密度为

$$
f(x_1,\ldots,x_n;\theta)=\prod_{i=1}^nf(x_i;\theta).
$$

若总体为离散型，概率质量函数为 $p(x;\theta)$，则

$$
P(X_1=x_1,\ldots,X_n=x_n)
=\prod_{i=1}^np(x_i;\theta).
$$

这一乘积结构也是后面构造似然函数的基础。

### 统计量及其分布
#### 统计量

设 $X_1,\ldots,X_n$ 为来自某总体的样本。若样本函数 $T=T(X_1,\ldots,X_n)$ 的表达式**不含未知参数**，则称 $T$ 为统计量。

例如，样本均值 $\overline X$、样本方差 $S^2$、样本最大值 $X_{(n)}$ 都是统计量。若总体均值 $\mu$ 未知，则 $\overline X-\mu$ 含未知参数，不是统计量；但它可以参与构造后面的枢轴量。

#### 常用统计量

???+ note "样本均值"

    样本均值定义为

    $$
    \overline X=\frac1n\sum_{i=1}^nX_i.
    $$

    若总体具有有限期望 $\mu$ 与有限方差 $\sigma^2$，则 $E(\overline X)=\mu,\qquad D(\overline X)=\dfrac{\sigma^2}{n}.$

    其中方差公式利用了样本之间的独立性（$D(\sum_{i=1}^n X_i) = n\sigma^2$）。$\overline X$ 描述样本的平均水平，也是估计总体均值最常用的统计量。

???+ note "样本方差"

    对 $n\ge2$，样本方差定义为

    $$
    S^2=\frac1{n-1}\sum_{i=1}^n(X_i-\overline X)^2
    =\frac1{n-1}\left(\sum_{i=1}^nX_i^2-n\overline X^2\right).
    $$

    若总体方差有限，则 $E(S^2)=\sigma^2.$

    分母取 $n-1$ 可以使其成为总体方差的无偏估计量。其依据是

    $$
    \sum_{i=1}^n(X_i-\overline X)^2
    =\sum_{i=1}^n(X_i-\mu)^2-n(\overline X-\mu)^2,
    $$

本章统一用 $S^2$ 表示分母为 $n-1$ 的样本方差。

???+ note "样本标准差"

    样本标准差是样本方差的非负平方根： $S=\sqrt{S^2}.$

    它与样本观测值具有相同量纲。虽然 $S^2$ 是 $\sigma^2$ 的无偏估计量，但一般 **并没有** $E(S)=\sigma$。

???+ note "样本 k 阶原点矩"

    对正整数 $k$，样本 $k$ 阶原点矩定义为

    $$
    A_k=\frac1n\sum_{i=1}^nX_i^k.
    $$

    特别地，$\displaystyle A_1=\overline X,\qquad A_2=\frac1n\sum_{i=1}^nX_i^2.$

    若总体 $k$ 阶绝对矩有限，即 $E(|X|^k)\lt+\infty$，则 $E(A_k)=E(X^k), \qquad A_k\xrightarrow{P}E(X^k).$

    后一结论来自对 $X_i^k$ 应用辛钦大数定律，是矩估计法的依据之一。

???+ note "样本 k 阶中心矩"

    样本 $k$ 阶中心矩定义为

    $$
    M_k=\frac1n\sum_{i=1}^n(X_i-\overline X)^k.
    $$

    它以 **样本均值** 为中心，而不是以未知的总体均值为中心。特别地， $M_1=0,\qquad M_2=A_2-A_1^2=\dfrac{n-1}{n}S^2.$

    样本中心矩一般不自动具有无偏性。例如，$E(M_2)=\dfrac{n-1}{n}\sigma^2$。

以上五种统计量从不同角度反映了样本的数字特征。在统计中我们可能还会用到别的统计量。

???+ note "顺序统计量"

    把样本从小到大排列，得到 $X_{(1)}\le X_{(2)}\le\cdots\le X_{(n)},$

    其中 $X_{(k)}$ 称为第 $k$ 个顺序统计量。特别地， $\displaystyle X_{(1)}=\min_iX_i,\qquad X_{(n)}=\max_iX_i.$

    虽然原样本 $X_i$ 相互独立，顺序统计量一般并不独立。

    若总体分布函数为 $F$，则

    $$
    F_{X_{(n)}}(x)=[F(x)]^n,
    \qquad
    F_{X_{(1)}}(x)=1-[1-F(x)]^n.
    $$

    更一般地，$X_{(k)}\le x$ 等价于至少 $k$ 个样本值不超过 $x$，因此

    $$
    F_{X_{(k)}}(x)
    =\sum_{j=k}^n\binom nj[F(x)]^j[1-F(x)]^{n-j}.
    $$

    若总体具有密度 $f$，则相应密度为

    $$
    f_{X_{(k)}}(x)
    =\frac{n!}{(k-1)!(n-k)!}
    [F(x)]^{k-1}[1-F(x)]^{n-k}f(x).
    $$

!!! tip "常用性质"

    -   样本均值及中心化偏差满足

        $$
        \sum_{i=1}^n(X_i-\overline X)=0,\\
        \sum_{i=1}^n(X_i-c)^2
        =\sum_{i=1}^n(X_i-\overline X)^2+n(\overline X-c)^2.
        $$

        所以对给定样本，离差平方和在 $c=\overline X$ 处最小。

    -   若对样本作线性变换 $Y_i=aX_i+b$，则 $\overline Y=a\overline X+b,~~S_Y^2=a^2S_X^2,~~S_Y=|a|S_X.$

    -   在 iid 且总体方差有限的条件下，还有 $\overline X\xrightarrow{P}\mu,~~ S^2\xrightarrow{P}\sigma^2.$

#### 三大抽样分布

统计量本身是随机变量，其概率分布称为**抽样分布**。

!!! warning "统计量的表达式不含未知参数，并不表示它的分布也不含未知参数。"

    例如，

    $$
    X_i\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2)
    \quad\Longrightarrow\quad
    \overline X\sim N\left(\mu,\frac{\sigma^2}{n}\right).
    $$

    $n$ 就是未知量。

???+ note "$\chi^2$ 分布"

    若 $Z_1,\ldots,Z_\nu$ 相互独立且均服从 $N(0,1)$，则

    $$
    U=\sum_{i=1}^{\nu}Z_i^2
    $$

    服从自由度为 $\nu$ 的 $\chi^2$ 分布，记为 $U\sim\chi^2(\nu)$。它的取值为非负数。

    主要性质为
    
    -   $E(U)=\nu,~~ D(U)=2\nu.$

    -   若 $U\sim\chi^2(\nu_1)$、$V\sim\chi^2(\nu_2)$ 且相互独立，则 $U+V\sim\chi^2(\nu_1+\nu_2).$

    自由度反映构成平方和的独立标准正态分量个数；在样本残差平方和中，估计均值会产生一个线性约束，因此常出现 $n-1$ 个自由度。

???+ note "$t$ 分布"

    若 $Z\sim N(0,1)$、$U\sim\chi^2(\nu)$，且 $Z,U$ 相互独立，则

    $$
    T=\frac{Z}{\sqrt{U/\nu}}\sim t(\nu).
    $$

    $t$ 分布关于 $0$ 对称，尾部比标准正态分布更厚。
    
    其数字特征为 $E(T)=0\quad(\nu>1), ~~ D(T)=\dfrac{\nu}{\nu-2}\quad(\nu>2).$（注意条件）

    特别地，$t(1)$ 为标准柯西分布，数学期望不存在；当 $\nu\to\infty$ 时，$t(\nu)$ 依分布趋于 $N(0,1)$。
    
    正态总体均值未知、方差也未知时，用样本标准差代替总体标准差所构造的统计量通常服从 $t$ 分布。

???+ note "$F$ 分布"

    若 $U\sim\chi^2(\nu_1)$、$V\sim\chi^2(\nu_2)$ 相互独立，则

    $$
    W=\frac{U/\nu_1}{V/\nu_2}\sim F(\nu_1,\nu_2).
    $$

    主要性质包括
    
    -   $\dfrac1W\sim F(\nu_2,\nu_1),$ $T\sim t(\nu)\quad\Longrightarrow\quad T^2\sim F(1,\nu).$

    -   $F$ 分布**不关于 $0$ 对称**。其期望与方差在相应条件下为

        $$
        E(W)=\dfrac{\nu_2}{\nu_2-2}\quad(\nu_2>2),\\
        D(W)=
        \frac{2\nu_2^2(\nu_1+\nu_2-2)}
        {\nu_1(\nu_2-2)^2(\nu_2-4)}
        \quad(\nu_2>4).
        $$

!!! example "抽样分布的识别"

    1.  设 $X_1, X_2$ 是取自正态总体 $X\sim N(1,1)$ 的简单随机样本，则 $\dfrac{X_1-1}{|1-X_2|}$ 服从（    ）。

        A. $t(1)$ B. $F(1,1)$ C. $\chi^2(1)$ D. $N(1,1)$

        ??? success "解答"

            A.

            由题给条件，注意到 $X_1,X_2$ 是来自 $N(1,1)$ 的简单随机样本，知

            $$
            X_1-1\sim N(0,1),\qquad X_2-1\sim N(0,1),
            $$

            且二者相互独立。

            令 $Z=X_1-1$、$U=(X_2-1)^2$。因此 $Z\sim N(0,1)$、$U\sim\chi^2(1)$，并且 $Z$ 与 $U$ 也相互独立。

            再将分母改写为

            $$
            |1-X_2|=\sqrt{(X_2-1)^2}=\sqrt{U/1},
            $$

            就得到了 $t$ 分布定义中的形式：

            $$
            \frac{X_1-1}{|1-X_2|}
            =\frac{Z}{\sqrt{U/1}}
            \sim t(1).
            $$

            所以选 **A**。这里的自由度 $1$ 来自分母中的 $U$ 只有一个独立标准正态变量的平方。

    2.  设 $X_1, X_2, \cdots, X_{10}$ 是来自正态总体 $X\sim N(0, \sigma^2)(\sigma \gt 0)$ 的简单随机样本。令 $Y^2 = \dfrac 19 \sum\limits_{i=2}^{10} X_i^2$，则下列结论正确的是（    ）。
    
        A. $X_1^2 \sim \chi^2(1)$ B. $Y^2 \sim \chi^2(9)$ C. $\dfrac{X_1}{|Y|} \sim t(9)$ D. $\dfrac{X_1^2}{Y^2} \sim F(9,1)$

        ??? success "解答"

            C.

            事实上，由题给条件可知 $\dfrac{X_i}{\sigma} \sim N(0,1),\, i=1,2,\cdots,10$，且相互独立。根据抽样分布的定义，

            $$
            \dfrac{X_1^2}{\sigma^2} \sim \chi^2(1),\,\sum_{i=2}^{10} (\dfrac{X_i}{\sigma})^2 = \dfrac{9Y^2}{\sigma^2} \sim \chi^2(9).
            $$

            $Y^2$ 不服从 $\chi^2(9)$，注意系数是不符合定义的。

            又 $X_1$ 和 $Y^2$ 一定相互独立，故 $\dfrac{X_1/\sigma}{\sqrt{\dfrac{9Y^2}{\sigma^2}/9}} = \dfrac{X_1}{|Y|} \sim \chi^2(9).$

            而 $X_1^2 \sim \chi^2(1)$，$9Y^2 \sim \chi^2(9)$，故 $\dfrac{X_1^2/1}{9Y^2/9} = \dfrac{X_1^2}{Y^2} \sim F(1,9).$

!!! example "服从抽样分布的独立性条件"

    设随机变量 $X\sim N(0,1),\,Y\sim N(0,1)$，则下列结论正确的是（    ）。

    <div class="exam-options" markdown="1">

    A. $X+Y$ 服从正态分布

    B. $X^2+Y^2$ 服从 $\chi^2$ 分布

    C. $X^2/Y^2$ 服从 $F$ 分布

    D. $X^2$ 和 $Y^2$ 分别服从 $\chi^2$ 分布
    </div>

    ??? success "解答"

        D.

        由 $\chi^2$ 分布的定义，我们可以知道，从标准正态总体里取一个个体，其平方 $U = X^2$ 服从自由度为 $1$ 的 $\chi^2$ 分布。

        对于 A. B. C.，我们需要保证 $X$ 和 $Y$ 独立。

??? warning "分位点的统一约定"

    本章统一使用**上侧分位点**。对 $0\lt\alpha\lt1$，

    $$
    P(Z>z_\alpha)=\alpha,\qquad
    P(T>t_\alpha(\nu))=\alpha,\\
    \newline
    P(U>\chi^2_\alpha(\nu))=\alpha,\qquad
    P(W>F_\alpha(\nu_1,\nu_2))=\alpha.
    $$

    例如，$z_{0.025}\approx1.96$。上侧概率越小，对应分位点越大。

    由对称性和倒数关系， $z_{1-\alpha}=-z_\alpha,\qquad t_{1-\alpha}(\nu)=-t_\alpha(\nu),$ $F_{1-\alpha}(\nu_1,\nu_2) =\dfrac1{F_\alpha(\nu_2,\nu_1)}.$

    $\chi^2$ 分布与 $F$ 分布的左右分位点不能通过简单改变正负号获得。若软件使用下侧累计概率分位点，应输入 $1-\alpha$ 来获得这里的上侧 $\alpha$ 分位点。

#### 正态总体下的常用结论

!!! tip "① 单个正态总体"

    设

    $$
    X_1,\ldots,X_n\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2),
    \qquad \sigma^2>0,\quad n\ge2.
    $$

    则

    $$
    \overline X\sim N\left(\mu,\frac{\sigma^2}{n}\right),
    \qquad
    Z=\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1),
    $$

    $$
    \frac1{\sigma^2}\sum_{i=1}^n(X_i-\mu)^2\sim\chi^2(n).
    $$

    若以样本均值 $\overline X$ 替代 $\mu$，则对应结论变为

    $$
    \frac1{\sigma^2}\sum_{i=1}^n(X_i-\overline X)^2
    =\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1).
    $$

    并且 $\overline X$ 与 $S^2$ 相互独立。因此，

    $$
    T=\frac{\overline X-\mu}{S/\sqrt n}\sim t(n-1).
    $$

    还可以得到 $D(S^2)=\dfrac{2\sigma^4}{n-1}.$

!!! warning "需要注意的是，样本均值与样本方差的独立性是正态样本的重要性质，不能直接推广到任意总体。"

!!! tip "② 两个独立正态总体"

    设两组样本分别来自

    $$
    X_i\overset{\mathrm{iid}}{\sim}N(\mu_1,\sigma_1^2),
    \qquad
    Y_j\overset{\mathrm{iid}}{\sim}N(\mu_2,\sigma_2^2),
    $$

    容量分别为 $n_1,n_2\ge2$，且两组样本相互独立。易知 $\overline X - \overline Y \sim N(\mu_1 - \mu_2, \dfrac{\sigma_1^2}{n_1}+\dfrac{\sigma_2^2}{n_2})$。记各自样本方差为 $S_1^2,S_2^2$，则

    $$
    \frac{(\overline X-\overline Y)-(\mu_1-\mu_2)}
    {\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}\sim N(0,1),
    $$

    $$
    \frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}
    \sim F(n_1-1,n_2-1).
    $$

    !!! info "若进一步有 $\sigma_1^2=\sigma_2^2=\sigma^2$..."
        定义合并样本方差

        $$
        S_p^2=
        \frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2},
        $$

        则

        $$
        \frac{(\overline X-\overline Y)-(\mu_1-\mu_2)}
        {S_p\sqrt{1/n_1+1/n_2}}
        \sim t(n_1+n_2-2).
        $$

!!! example "习题"

    1.  从总体 $X\sim N\left(\mu,2^2\right)$ 中随意抽取容量为 $n$ 的一组样本，其均值为 $\overline X$，若要求 $E(|\overline X - \mu|)\le 0.1$，则 $n$ 的最小取值是多少？

        ??? success "解答"

            如果总体服从正态分布，那么样本均值也应该服从正态分布（可参看 ① 中结论）。 $\displaystyle \overline X\sim N\left(\mu,\frac{\sigma^2}{n}\right) = N(\mu,\frac 4n)$

            所以 $\overline X -\mu \sim N(0, \displaystyle\frac 4n)$。

            而对于对于正态分布 $Z \sim N(0, \tau^2)$，其绝对值的数学期望为 $E(|Z|) = \tau \sqrt{\displaystyle\frac{2}{\pi}}$（见[常见分布的期望与方差](#常见分布的期望与方差)）。令 $Y = \overline X -\mu$，显然有 $\displaystyle E(|Y|) = \frac{2}{\sqrt n} \sqrt{\frac{2}{\pi}}$

            由题意得 $\displaystyle \frac{2}{\sqrt n} \sqrt{\frac{2}{\pi}} \le 0.1$

            解得 $n \pi \ge 800$，$n \ge \displaystyle\frac{800}{\pi} \approx 254.65$，所以 $n$ 最小是 $\mathbb 255$。

    2.  设总体 $X$ 和 $Y$ 相互独立，且都服从正态分布 $N(0,\sigma^2)$，$X_1, X_2, \cdots, X_n$ 和 $Y_1, Y_2, \cdots, Y_n$ 分别是来自总体 $X$ 和 $Y$ 且容量都为 $n$ 的两个简单随机样本，样本均值、样本方差分别为 $\overline X$、$S_X^2$ 和 $\overline Y$、$S_Y^2$，则（  ）。

        <div class="exam-options" markdown="1">

        A. $\overline X-\overline Y\sim N(0,\sigma^2)$

        B. $S_X^2+S_Y^2\sim\chi^2(2n-2)$

        C. $\dfrac{\overline X-\overline Y}{\sqrt{S_X^2+S_Y^2}}\sim t(2n-2)$

        D. $\dfrac{S_X^2}{S_Y^2}\sim F(n-1,n-1)$
        </div>

        ??? success "解答"

            D.

            对于 A，$D(\overline X-\overline Y) = 2\sigma^2$；

            对于 B，$S_X^2+S_Y^2 = \dfrac {1}{n-1} \sum\limits_{i=1}^n (X_i - \overline X)^2 + \dfrac {1}{n-1} \sum\limits_{i=1}^n (Y_i - \overline Y)^2$ 不符合 $\chi^2$ 分布的定义；

            对于 C，不符合 $t$ 分布的定义（可对照 ② 中的结论）；

            对于 D，根据 ① 中相关结论有 $\dfrac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$，由 $F$ 分布的定义知选项正确。

    3.  设 $X,Y$ 独立同分布于 $N(0,\sigma^2)$，$X_1,\cdots,X_9$ 与 $Y_1,\cdots,Y_{11}$ 是分别来自总体 $X$ 与 $Y$ 的简单随机样本，样本方差分别为 $S_X^2$ 与 $S_Y^2$，记 $S_1^2=\dfrac12(S_X^2+S_Y^2)$，$S_2^2=\dfrac19(4S_X^2+5S_Y^2)$，则方差最小的是（  ）。

        A. $S_X^2$
        B. $S_Y^2$
        C. $S_1^2$
        D. $S_2^2$

        ??? success "解答"

            D.

            由正态总体下样本方差的性质（可参看 ① 中结论），$D(S^2)=\dfrac{2\sigma^4}{n-1}$。分别代入两组样本的容量 $9$ 和 $11$，得

            $$
            D(S_X^2)=\frac{2\sigma^4}{9-1}=\frac{\sigma^4}{4},\qquad
            D(S_Y^2)=\frac{2\sigma^4}{11-1}=\frac{\sigma^4}{5}.
            $$

            两组样本相互独立，因而 $S_X^2$ 与 $S_Y^2$ 也相互独立。利用独立随机变量线性组合的方差公式 $D(aU+bV)=a^2D(U)+b^2D(V)$，有

            $$
            D(S_1^2)
            =\frac14\left[D(S_X^2)+D(S_Y^2)\right]
            =\frac14\left(\frac{\sigma^4}{4}+\frac{\sigma^4}{5}\right)
            =\frac{9\sigma^4}{80},
            $$

            $$
            D(S_2^2)
            =\frac1{81}\left[16D(S_X^2)+25D(S_Y^2)\right]
            =\frac1{81}\left(4\sigma^4+5\sigma^4\right)
            =\frac{\sigma^4}{9}.
            $$

            所以

            $$
            D(S_2^2)\lt D(S_1^2)\lt D(S_Y^2)\lt D(S_X^2).
            $$

### 参数的点估计
#### 概念

用统计量 $\widehat\theta=\widehat\theta(X_1,\ldots,X_n)$ 估计未知参数 $\theta$，称为参数的**点估计**。其中，$\widehat\theta$ 是估计量，将观测值代入得到的 $\widehat\theta(x_1,\ldots,x_n)$ 是估计值。

同一个参数可以有不同估计量。例如，估计 $U(0,\theta)$ 的上端点时，可以考虑 $2\overline X$ 或样本最大值 $X_{(n)}$，但它们的偏差、方差等性质不同。

构造估计量的方法，与评价估计量好坏的标准，是两个不同的问题。

#### 方法

???+ note "矩估计法"

    矩估计法用样本矩代替总体矩，并解出未知参数。

    若总体含 $r$ 个未知参数 $\theta_1,\ldots,\theta_r$，可选择 $r$ 个存在的总体矩，建立方程 $E_\theta(X^k)=A_k,\qquad k=1,\ldots,r,$

    再求解得到矩估计量。所选矩应足以识别参数，方程的解还应满足参数空间的限制。

    例如，正态总体 $N(\mu,\sigma^2)$ 满足 $E(X)=\mu,\qquad E(X^2)=\mu^2+\sigma^2.$

    用 $A_1,A_2$ 代替总体矩，得到

    $$
    \widehat\mu_{\mathrm{MM}}=\overline X,
    \qquad
    \widehat{\sigma^2}_{\mathrm{MM}}
    =A_2-A_1^2
    =\frac1n\sum_{i=1}^n(X_i-\overline X)^2.
    $$

    这里的方差矩估计使用分母 $n$，与分母为 $n-1$ 的无偏样本方差 $S^2$ 不同。

    若 $X\sim U(0,\theta)$、$\theta>0$，由 $E(X)=\theta/2$，可得 $\widehat\theta_{\mathrm{MM}}=2\overline X$。

???+ note "最大似然估计法"

    给定样本观测值 $x_1,\ldots,x_n$，将样本联合概率或联合密度视为参数 $\theta$ 的函数，称为**似然函数**：

    <center markdown="1">
    $L(\theta)=\prod_{i=1}^np(x_i;\theta)~~$ 或 $~~L(\theta)=\prod_{i=1}^nf(x_i;\theta).$
    </center>

    使 $L(\theta)$ 在参数空间内达到最大值的参数值，称为**最大似然估计值**。将数据换回随机样本，得到**最大似然估计量**。

    当 $L(\theta)>0$ 时，可以最大化对数似然 $\ell(\theta)=\ln L(\theta)$ 以简化乘积。常用步骤为：写出似然及参数范围，取对数，求驻点，再检查极值性质、边界和参数限制。

    似然不是“参数在给定数据下的概率”。求导得到的驻点也不自动就是最大值，最大似然估计还可能不存在或不唯一。

    ??? tip "最大似然估计在几种分布下的估计结果"

        -   **伯努利总体**：若 $X_i\sim B(1,p)$、$p\in[0,1]$，则

            $$
            L(p)=p^{\sum_i x_i}(1-p)^{n-\sum_i x_i},
            \qquad
            \widehat p=\overline X.
            $$

            全为 $0$ 或全为 $1$ 的样本对应边界估计 $0$ 或 $1$。

        -   **指数总体**：若 $X_i\sim\operatorname{Exp}(\lambda)$，其中 $\lambda>0$ 为率参数，则在 $\sum_ix_i>0$ 时，

            $$
            \ell(\lambda)=n\ln\lambda-\lambda\sum_ix_i,
            \qquad
            \widehat\lambda=\frac1{\overline X}.
            $$

        -   **正态总体**：均值、方差均未知时，对样本离差平方和大于 $0$ 的通常情形，

            $$
            \widehat\mu=\overline X,\qquad
            \widehat{\sigma^2}=\frac1n\sum_{i=1}^n(X_i-\overline X)^2.
            $$

            对连续正态样本且 $n\ge2$，离差平方和大于 $0$ 以概率 $1$ 成立。

    参数影响取值范围时，对均匀总体，采用密度版本

    $$
    f(x;\theta)=\frac1\theta\mathbf1_{\{0\lt x\le\theta\}},
    \qquad\theta>0,
    $$

    则对于正的样本观测值， $L(\theta)=\theta^{-n}\mathbf1_{\{\theta\ge x_{(n)}\}}.$

    在允许范围 $\theta\ge x_{(n)}$ 内，$\theta^{-n}$ 随 $\theta$ 增大而减小，因此 $\widehat\theta_{\mathrm{MLE}}=X_{(n)}.$

    此时最大值位于参数约束边界，不能只靠对数似然求导找零点。端点采用上述闭端密度版本，使最大值能够在 $\theta=x_{(n)}$ 处取到；若把约束写成严格的 $\theta>x_{(n)}$，则对应似然只有边界上确界，需要明确这一差别。

    !!! tip "最大似然估计的不变性"

        若 $\widehat\theta$ 是 $\theta$ 的最大似然估计量，则在诱导的似然意义下，$g(\widehat\theta)$ 是 $g(\theta)$ 的最大似然估计量。

        例如，指数总体的率参数估计为 $\widehat\lambda=1/\overline X$，其均值 $1/\lambda$ 的最大似然估计为 $\overline X$。

        不变性不意味着变换后的估计量无偏；无偏性一般不会在非线性变换下保持。

!!! example "习题"

    1.  设 $X_1, X_2, \cdots, X_n$ 是取自总体 $X$ 的简单随机样本，$X$ 的概率密度为

        $$
        f(x)=\frac{1}{2\lambda}e^{-\frac{|x|}{\lambda}},
        \qquad -\infty\lt x\lt +\infty,\quad \lambda>0.
        $$

        求：(1) $\lambda$ 的矩估计量；(2) $\lambda$ 的最大似然估计量。

        ??? success "解答"

            **(1) $\lambda$ 的矩估计量。**

            密度关于 $x=0$ 对称，故 $E(X)=0$（一阶矩为 $0$），其中不含 $\lambda$，不能用于估计；改用二阶原点矩。由

            $$
            E(X^2)
            =\int_{-\infty}^{+\infty}x^2\cdot\frac{1}{2\lambda}e^{-\frac{|x|}{\lambda}}\,\mathrm dx
            =\frac{1}{\lambda}\int_0^{+\infty}x^2e^{-\frac{x}{\lambda}}\,\mathrm dx
            =\frac{1}{\lambda}\cdot2\lambda^3
            =2\lambda^2,
            $$

            令 $A_2=\dfrac1n\sum_{i=1}^nX_i^2$，则由 $2\lambda^2=A_2$ 解得

            $$
            \widehat\lambda_{\mathrm{MM}}
            =\sqrt{\frac{A_2}{2}}
            =\sqrt{\frac{1}{2n}\sum_{i=1}^nX_i^2}.
            $$

            !!! tip "另一种做法"

                由于密度关于原点对称，也可由一阶绝对矩 $E|X|=\lambda$ 直接用 $\frac1n\sum_{i=1}^n|X_i|$ 作为 $\lambda$ 的矩估计，与最大似然估计量一致。按原点矩的矩估计法，通常做法则是上面的 $E(X^2)$。

            ---

            **(2) $\lambda$ 的最大似然估计量。**

            设样本观测值为 $x_1,\ldots,x_n$，似然函数为

            $$
            L(\lambda)
            =\prod_{i=1}^n\frac{1}{2\lambda}e^{-\frac{|x_i|}{\lambda}}
            =(2\lambda)^{-n}e^{-\frac{1}{\lambda}\sum_{i=1}^n|x_i|},
            \qquad \lambda>0.
            $$

            取对数得 $\displaystyle \ell(\lambda)=-n\ln(2\lambda)-\frac{1}{\lambda}\sum_{i=1}^n|x_i|$，对其求导：

            $$
            \ell'(\lambda)
            =-\frac n\lambda+\frac{1}{\lambda^2}\sum_{i=1}^n|x_i|
            =\frac{1}{\lambda^2}\left(\sum_{i=1}^n|x_i|-n\lambda\right).
            $$

            令 $\ell'(\lambda)=0$ 得驻点 $\displaystyle \widehat\lambda=\frac1n\sum_{i=1}^n|x_i|$。又当 $\lambda\to0^+$ 或 $\lambda\to+\infty$ 时均有 $L(\lambda)\to0$，所以该驻点就是最大值点，故

            $$
            \widehat\lambda_{\mathrm{MLE}}=\frac1n\sum_{i=1}^n|X_i|.
            $$
    
    2.  在数集 $\Omega=\{0,1,2,\cdots,N\}$ 中有放回地抽取 $n$ 次，得 $X_1,X_2,\cdots,X_n$，则 $N$ 的最大似然估计量是（    ）。

        <div class="exam-options" markdown="1">

        A. $\max\{X_1,X_2,\cdots,X_n\}$

        B. $\min\{X_1,X_2,\cdots,X_n\}$

        C. $\dfrac 1n\sum\limits_{i=1}^n X_i$

        D. $n$
        </div>

        ??? success "解答"

            A.

            有放回地随机抽取，即每次等可能地抽到 $0,1,\cdots,N$ 中的任意一个数，故

            $$
            P(X_i=k)=\frac{1}{N+1},
            \qquad k=0,1,\cdots,N.
            $$

            设样本观测值为 $x_1,\ldots,x_n$，则似然函数为

            $$
            L(N)=
            \begin{cases}
            \dfrac{1}{(N+1)^n}, & N\ge\max\{x_1,\ldots,x_n\},\\
            0, & N\lt\max\{x_1,\ldots,x_n\}.
            \end{cases}
            $$

            当 $N\lt\max\{x_1,\ldots,x_n\}$ 时，至少有一个观测值不可能取到，故 $L(N)=0$；而在可行的参数范围 $N\ge\max\{x_1,\ldots,x_n\}$ 上，$\dfrac{1}{(N+1)^n}$ 关于 $N$ 单调递减，所以 $L(N)$ 在左端点 $N=\max\{x_1,\ldots,x_n\}$ 处取得最大值。

            换回随机样本，得 $N$ 的最大似然估计量

            $$
            \widehat N=\max\{X_1,X_2,\cdots,X_n\}.
            $$

            故选 **A**。

            !!! tip "直观理解"

                $N$ 越小，每个值被抽到的概率 $\dfrac{1}{N+1}$ 越大，但 $N$ 不能小于样本中已经出现的最大值。因此最优的 $N$ 恰好等于样本最大值。

#### 估计量的评价标准

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**无偏性**

若对参数空间中所有 $\theta$ 都有 $E_\theta(\widehat\theta)=\theta,$ 则称 $\widehat\theta$ 为 $\theta$ 的无偏估计量。偏差定义为 $\operatorname{Bias}_\theta(\widehat\theta) =E_\theta(\widehat\theta)-\theta.$

例如，$\overline X$ 无偏估计 $\mu$，$S^2$ 无偏估计 $\sigma^2$；正态总体方差的最大似然估计满足 $E\left(\widehat{\sigma^2}_{\mathrm{MLE}}\right) =\dfrac{n-1}{n}\sigma^2,$

所以一般有偏，但偏差随 $n$ 增大而趋于 $0$。

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**有效性（最小方差性）**

比较同一参数的无偏估计量时，方差越小，表示估计围绕真值的波动越小。

若 $\widehat\theta_1,\widehat\theta_2$ 均无偏，且对所有 $\theta$， $D_\theta(\widehat\theta_1)\le D_\theta(\widehat\theta_2),$ 则称前者至少与后者同样有效。若某个无偏估计量在所考虑的全部无偏估计量中，对所有参数值都具有最小方差，则称为一致最小方差无偏估计量。

有偏估计量之间或有偏与无偏估计量之间，不能只凭方差判断优劣。常用均方误差综合衡量：

$$
\operatorname{MSE}_\theta(\widehat\theta)
=E_\theta[(\widehat\theta-\theta)^2]
=D_\theta(\widehat\theta)
+\operatorname{Bias}_\theta(\widehat\theta)^2.
$$

</div>
</div>

<div class="card card-shadow" markdown="1">
<div class="card-body" markdown="1">

**一致性（相合性）**

若对每个参数真值 $\theta$，都有 $\widehat\theta_n\xrightarrow{P}\theta,$ 则称估计量序列具有一致性，也称相合性。

无偏性描述固定样本量下的期望是否等于真值，一致性描述样本量趋于无穷时是否逼近真值，二者不等价。

例如，在独立同分布且期望有限时，$\overline X_n$ 一致估计 $\mu$；有偏的样本二阶中心矩也可在总体方差有限时一致估计 $\sigma^2$。

若 $E_\theta(\widehat\theta_n)\to\theta,\qquad D_\theta(\widehat\theta_n)\to0,$

则均方误差趋于 $0$，从而 $\widehat\theta_n\xrightarrow{P}\theta$。这是证明一致性的一个充分条件。

</div>
</div>

!!! example "习题"

    设总体 $X$ 的数学期望 $E(X) = 0$，方差 $D(X) = \sigma^2$。$X_1,X_2,\cdots,X_n~(n \gt 2)$ 是来自总体 $X$ 的简单随机样本。$\overline X = \dfrac 1n \sum\limits_{i=1}^n X_i$，$S^2 = \dfrac 1{n-1} \sum\limits_{i=1}^n (X_i-\overline X)^2$，则下列属于 $\sigma^2$ 的无偏估计量是（    ）。

    <div class="exam-options" markdown="1">

    A. $n{\overline X}^2+S^2$

    B. $\dfrac 12 (n{\overline X}^2+S^2)$

    C. $\dfrac 13 (n{\overline X}^2+S^2)$

    D. $\dfrac 14 (n{\overline X}^2+S^2)$
    </div>

    ??? success "解答"
        B.

        

#### 估计量的数字特征与收敛性

???+ note "求期望与方差"

    将估计量看作样本函数，利用期望线性性、方差公式或其抽样分布计算。

    例如，若 $\widehat\theta=\sum_{i=1}^na_iX_i$，样本独立同分布且 $E(X_i)=\mu$、$D(X_i)=\sigma^2$，则

    $$
    E(\widehat\theta)=\mu\sum_{i=1}^na_i,
    \qquad
    D(\widehat\theta)=\sigma^2\sum_{i=1}^na_i^2.
    $$

    若 $\sum_i a_i=1$，则它无偏估计 $\mu$。由 $\displaystyle \sum_{i=1}^na_i^2\ge\frac1n,$

    可知等权重 $a_i=1/n$ 对应的样本均值，在这类固定权重的线性无偏估计量中方差最小。

???+ note "验证依概率收敛"

    常用方法包括：

    - 应用大数定律及依概率收敛的连续函数性质。
    - 证明 $E(\widehat\theta_n)\to\theta$ 且 $D(\widehat\theta_n)\to0$。
    - 直接计算或估计 $P(|\widehat\theta_n-\theta|\ge\varepsilon)$，证明其趋于 $0$。

    例如，若总体为 $U(0,\theta)$，令 $M_n=X_{(n)}$，则

    $$
    E(M_n)=\frac n{n+1}\theta,
    \qquad
    D(M_n)=\frac{n\theta^2}{(n+1)^2(n+2)}.
    $$

    所以 $M_n$ 有偏，但 $E(M_n)\to\theta$、$D(M_n)\to0$，从而 $M_n\xrightarrow{P}\theta$。

    也可以直接利用其分布：对 $0\lt\varepsilon\lt\theta$，

    $$
    P(|M_n-\theta|\ge\varepsilon)
    =P(M_n\le\theta-\varepsilon)
    =\left(1-\frac{\varepsilon}{\theta}\right)^n\to0.
    $$

    乘以修正系数可得到无偏估计量 $\frac{n+1}{n}M_n$，它也一致收敛于 $\theta$。

### 参数的区间估计
#### 概念

???+ note "置信区间与置信水平"

    设 $L=L(X_1,\ldots,X_n)$、$U=U(X_1,\ldots,X_n)$ 为样本函数。若对每个参数真值 $\theta$，

    $$
    P_\theta(L\le\theta\le U)=1-\alpha,
    \qquad 0\lt\alpha\lt1,
    $$

    则称随机区间 $[L,U]$ 为 $\theta$ 的置信水平为 $1-\alpha$ 的置信区间。某些构造使用覆盖概率至少为 $1-\alpha$ 的保守区间。

    抽样前，区间端点是随机的，参数 $\theta$ 是固定的；重复抽样并按同一规则构造区间，长期来看有约 $1-\alpha$ 的比例覆盖真值。

    样本已经观测后，得到的是一个确定区间。不能把频率学派的置信水平解释为“固定参数以 $1-\alpha$ 的概率落入这一个已经算出的区间”。

???+ note "枢轴量"

    构造置信区间的常见方法是寻找**枢轴量** $Q(X_1,\ldots,X_n;\theta)$：它可以含未知参数，但其分布不含未知参数。

    具体步骤为：

    1. 选择分布已知的枢轴量。
    2. 利用分位点写出概率为 $1-\alpha$ 的事件。
    3. 对不等式变形，把待估参数单独放在中间。
    4. 用观测值替代样本变量，得到区间估计值。

    例如，若 $Z=\dfrac{(\overline X-\mu)}{(\sigma/\sqrt n)}\sim N(0,1)$，则 $P\left(-z_{\alpha/2}\le Z\le z_{\alpha/2}\right)=1-\alpha.$

    移项后就得到 $\mu$ 的双侧置信区间。

    在其他条件相同的情况下，提高置信水平通常会使区间变宽，增大样本量通常会使区间变窄。区间宽度反映估计精度，但比较宽度时应保持置信水平及模型条件一致。

#### 单个正态总体均值和方差的置信区间

???+ note "均值"

    -   **总体方差已知**：

        设 $X_1,\ldots,X_n\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2)$，$\sigma^2$ 已知，则 $\mu$ 的置信水平为 $1-\alpha$ 的双侧置信区间为

        $$
        \left[
        \overline X-z_{\alpha/2}\frac{\sigma}{\sqrt n},
        \quad
        \overline X+z_{\alpha/2}\frac{\sigma}{\sqrt n}
        \right].
        $$

        这里使用总体标准差 $\sigma$，相应枢轴量服从标准正态分布。若总体不正态，仅在满足中心极限定理等条件且近似适当时，才可将它用作大样本近似区间。

    -   **总体方差未知**：

        设总体正态，$\mu,\sigma^2$ 均未知，且 $n\ge2$。由

        $$
        \frac{\overline X-\mu}{S/\sqrt n}\sim t(n-1),
        $$

        可得 $\mu$ 的双侧置信区间

        $$
        \left[
        \overline X-t_{\alpha/2}(n-1)\frac S{\sqrt n},
        \quad
        \overline X+t_{\alpha/2}(n-1)\frac S{\sqrt n}
        \right].
        $$

        使用 $S$ 替代 $\sigma$ 后，精确的小样本分布为 $t(n-1)$，不能仍然无条件使用标准正态临界值。

        例如，$n=16$、$\overline x=10$、$s=2$，取置信水平 $0.95$，则区间为 $10\pm t_{0.025}(15)\dfrac2{4}.$

        用 $t_{0.025}(15)\approx2.131$，得到约为 $[8.9345,11.0655]$ 的区间。

???+ note "方差"

    -   **总体均值未知**：

        设总体正态，$\mu$ 未知，$n\ge2$。由

        $$
        Q=\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1)
        $$

        及上侧分位点约定，

        $$
        P\left(
        \chi^2_{1-\alpha/2}(n-1)
        \le Q\le
        \chi^2_{\alpha/2}(n-1)
        \right)=1-\alpha.
        $$

        解出 $\sigma^2$，得到置信区间

        $$
        \left[
        \frac{(n-1)S^2}{\chi^2_{\alpha/2}(n-1)},
        \quad
        \frac{(n-1)S^2}{\chi^2_{1-\alpha/2}(n-1)}
        \right].
        $$

        下限的分母是较大的分位点，上限的分母是较小的分位点；对正数取倒数时，不等号方向会反转。

        若要求标准差 $\sigma$ 的置信区间，对以上两个端点分别开平方即可。

    -   **总体均值已知**：

        若总体均值 $\mu$ 已知，则使用

        $$
        Q_0=\frac{\sum_{i=1}^n(X_i-\mu)^2}{\sigma^2}\sim\chi^2(n),
        $$

        得到 $\sigma^2$ 的双侧置信区间

        $$
        \left[
        \frac{\sum_{i=1}^n(X_i-\mu)^2}{\chi^2_{\alpha/2}(n)},
        \quad
        \frac{\sum_{i=1}^n(X_i-\mu)^2}{\chi^2_{1-\alpha/2}(n)}
        \right].
        $$

        这里围绕已知的 $\mu$ 计算平方和，自由度为 $n$；不能混用未知均值情形的 $n-1$。

### 假设检验
#### 概念

假设检验先对总体分布或参数提出一个假设，再根据样本判断是否有足够证据拒绝它。

基本步骤为：

1. 明确总体模型、待检验参数及原假设 $H_0$、备择假设 $H_1$。
2. 在观察检验结果前确定显著性水平 $\alpha$。
3. 选择检验统计量，确定其在 $H_0$ 下的分布。
4. 依据备择方向确定拒绝域。
5. 代入样本值，判断是否落入拒绝域。

若统计量观测值落入拒绝域，则**拒绝 $H_0$**；否则**不拒绝 $H_0$**。

!!! warning "“不拒绝”表示当前数据不足以拒绝原假设，并不代表已经证明原假设正确。"

#### 原假设与备择假设

原假设 $H_0$ 是接受检验的命题，备择假设 $H_1$ 表示与之相对的研究方向。对参数 $\theta$ 和指定值 $\theta_0$，常见形式为：

<center markdown="1">

| 检验类型 | 原假设 | 备择假设 | 拒绝域方向 |
| --- | --- | --- | --- |
| 双侧检验 | $H_0:\theta=\theta_0$ | $H_1:\theta\ne\theta_0$ | 统计量过大或过小 |
| 右侧检验 | $H_0:\theta\le\theta_0$ | $H_1:\theta>\theta_0$ | 对应统计量过大 |
| 左侧检验 | $H_0:\theta\ge\theta_0$ | $H_1:\theta\lt\theta_0$ | 对应统计量过小 |

</center>

常见单侧检验在原假设边界 $\theta=\theta_0$ 上确定临界分布，以控制整个单侧原假设中的第一类错误概率。教材有时将单侧原假设简写为边界等式。

检验方向应由问题事先确定，不能看到样本结果后再选择更容易显著的一侧。

#### 小概率原理

如果 $H_0$ 成立时，某类结果出现的概率很小，而样本恰好落入预先规定的这类结果区域，就将其视为反对 $H_0$ 的证据。

“小概率”不是“不可能”。即使 $H_0$ 正确，样本仍可能偶然落入拒绝域，这正是第一类错误的来源。

连续模型中单个观测点的概率本来就为 $0$，所以检验比较的是尾部区域等事件的概率，而不是某个精确观测点的概率。

#### 显著性水平与 p 值

设拒绝域为 $W$。显著性水平 $\alpha$ 控制原假设为真时错误拒绝它的概率：

$$
P_\theta(\text{样本落入 }W)\le\alpha
\quad\text{对所有 }\theta\in\Theta_0.
$$

$\Theta_0$ 为原假设对应的参数集合。精确连续检验常在原假设边界上达到等号。

$p$ 值是在原假设模型下，取得当前观测结果或更极端结果的**相应尾部概率**。例如，标准正态均值检验的观测值为 $z_{\mathrm{obs}}$ 时，

$$
p_{\text{右侧}}=1-\Phi(z_{\mathrm{obs}}),
\qquad
p_{\text{左侧}}=\Phi(z_{\mathrm{obs}}),
$$

$$
p_{\text{双侧}}=2[1-\Phi(|z_{\mathrm{obs}}|)].
$$

通常按 $p\le\alpha$ 拒绝 $H_0$。$p$ 值不是原假设成立的概率，$\alpha$ 也不是某次检验结论错误的后验概率。

#### 正态总体下的六大检验及拒绝域

???+ note "① 单总体均值检验：方差已知（Z 检验）"

    设 $X_i\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2)$，$\sigma^2$ 已知，检验基准为 $\mu_0$。使用

    $$
    Z=\frac{\overline X-\mu_0}{\sigma/\sqrt n}.
    $$

    在 $\mu=\mu_0$ 时，$Z\sim N(0,1)$。显著性水平为 $\alpha$ 的拒绝域为：

    <center markdown="1">

    | 备择假设 | 拒绝域 |
    | --- | --- |
    | $H_1:\mu\ne\mu_0$ | $|Z|>z_{\alpha/2}$ |
    | $H_1:\mu>\mu_0$ | $Z>z_\alpha$ |
    | $H_1:\mu\lt\mu_0$ | $Z\lt-z_\alpha$ |

    </center>

    ---

    例如，$\mu_0=50$、$\sigma=10$、$n=100$、$\overline x=52.5$，则 $z_{\mathrm{obs}}=2.5$。在 $\alpha=0.05$ 的双侧检验中，$2.5>1.96$，因此拒绝 $H_0:\mu=50$。

???+ note "② 单总体均值检验：方差未知（t 检验）"

    设总体正态，$\sigma^2$ 未知，$n\ge2$。使用

    $$
    T=\frac{\overline X-\mu_0}{S/\sqrt n}.
    $$

    在 $\mu=\mu_0$ 时，$T\sim t(n-1)$。拒绝域为：

    <center markdown="1">

    | 备择假设 | 拒绝域 |
    | --- | --- |
    | $H_1:\mu\ne\mu_0$ | $|T|>t_{\alpha/2}(n-1)$ |
    | $H_1:\mu>\mu_0$ | $T>t_\alpha(n-1)$ |
    | $H_1:\mu\lt\mu_0$ | $T\lt-t_\alpha(n-1)$ |

    </center>

    这里 $S^2$ 的分母为 $n-1$。正态性保证该 $t$ 分布是精确结论，而非仅由样本量较大得到的近似。

???+ note "③ 单总体方差检验（$\chi^2$ 检验）"

    设总体正态，均值未知，检验基准方差为 $\sigma_0^2>0$。使用

    $$
    Q=\frac{(n-1)S^2}{\sigma_0^2}.
    $$

    在 $\sigma^2=\sigma_0^2$ 时，$Q\sim\chi^2(\nu)$，其中 $\nu=n-1$。常用等尾拒绝域为：

    <center markdown="1">

    | 备择假设 | 拒绝域 |
    | --- | --- |
    | $H_1:\sigma^2\ne\sigma_0^2$ | $Q\lt\chi^2_{1-\alpha/2}(\nu)$ 或 $Q>\chi^2_{\alpha/2}(\nu)$ |
    | $H_1:\sigma^2>\sigma_0^2$ | $Q>\chi^2_\alpha(\nu)$ |
    | $H_1:\sigma^2\lt\sigma_0^2$ | $Q\lt\chi^2_{1-\alpha}(\nu)$ |

    </center>

    若总体均值 $\mu$ 已知，可改用 $Q=\sum_i(X_i-\mu)^2/\sigma_0^2$，并把自由度改为 $\nu=n$。

???+ note "④ 两总体均值差检验：两方差已知（Z 检验）"

    设两个总体均为正态，两组样本相互独立，方差 $\sigma_1^2,\sigma_2^2$ 已知。检验均值差基准 $\Delta_0$，使用

    $$
    Z=
    \frac{\overline X-\overline Y-\Delta_0}
    {\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}.
    $$

    在 $\mu_1-\mu_2=\Delta_0$ 时，$Z\sim N(0,1)$。拒绝域为：

    <center markdown="1">

    | 备择假设 | 拒绝域 |
    | --- | --- |
    | $H_1:\mu_1-\mu_2\ne\Delta_0$ | $|Z|>z_{\alpha/2}$ |
    | $H_1:\mu_1-\mu_2>\Delta_0$ | $Z>z_\alpha$ |
    | $H_1:\mu_1-\mu_2\lt\Delta_0$ | $Z\lt-z_\alpha$ |

    </center>

    检验两个均值是否相等时，取 $\Delta_0=0$。两组样本的独立性不能省略；配对数据需要按差值样本等相应模型处理。

???+ note "⑤ 两总体均值差检验：两方差未知但相等（合并 t 检验）"

    设两个正态总体具有共同的未知方差 $\sigma^2$，两组样本相互独立，$n_1,n_2\ge2$。令

    $$
    S_p^2=
    \frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2},
    $$

    $$
    T=
    \frac{\overline X-\overline Y-\Delta_0}
    {S_p\sqrt{1/n_1+1/n_2}}.
    $$

    在 $\mu_1-\mu_2=\Delta_0$ 时，$T\sim t(\nu)$，其中 $\nu=n_1+n_2-2$。拒绝域为：

    <center markdown="1">

    | 备择假设 | 拒绝域 |
    | --- | --- |
    | $H_1:\mu_1-\mu_2\ne\Delta_0$ | $|T|>t_{\alpha/2}(\nu)$ |
    | $H_1:\mu_1-\mu_2>\Delta_0$ | $T>t_\alpha(\nu)$ |
    | $H_1:\mu_1-\mu_2\lt\Delta_0$ | $T\lt-t_\alpha(\nu)$ |

    </center>

    !!! warning "方差未知并不等于方差相等。若不满足等方差假设，不能直接使用这个合并方差公式及其自由度。"

???+ note "⑥ 两总体方差比检验（F 检验）"

    设两个正态总体的均值未知，两组样本相互独立。检验方差比基准 $r_0=\dfrac{\sigma_1^2}{\sigma_2^2}>0,$

    其中 $r_0$ 表示原假设规定的数值。使用

    $$
    F_{\mathrm{stat}}=\frac{S_1^2/S_2^2}{r_0}.
    $$

    在原假设边界 $\sigma_1^2/\sigma_2^2=r_0$ 时，

    $$
    F_{\mathrm{stat}}\sim F(\nu_1,\nu_2),
    \qquad
    \nu_1=n_1-1,\quad\nu_2=n_2-1.
    $$

    常用等尾拒绝域为：

    <center markdown="1">

    | 备择假设 | 拒绝域 |
    | --- | --- |
    | $H_1:\sigma_1^2/\sigma_2^2\ne r_0$ | $F_{\mathrm{stat}}\lt F_{1-\alpha/2}(\nu_1,\nu_2)$ 或 $F_{\mathrm{stat}}>F_{\alpha/2}(\nu_1,\nu_2)$ |
    | $H_1:\sigma_1^2/\sigma_2^2>r_0$ | $F_{\mathrm{stat}}>F_\alpha(\nu_1,\nu_2)$ |
    | $H_1:\sigma_1^2/\sigma_2^2\lt r_0$ | $F_{\mathrm{stat}}\lt F_{1-\alpha}(\nu_1,\nu_2)$ |

    </center>

    检验两方差是否相等时取 $r_0=1$。分子对应第一总体、分母对应第二总体；若交换分子分母，应同时交换自由度、变换方差比及备择方向。

!!! tip "检验与置信区间的联系"

    对同一模型、同一枢轴量及相匹配的双侧检验，显著性水平 $\alpha$ 的检验与置信水平 $1-\alpha$ 的区间互相对应： $\theta_0\text{ 不在相应置信区间内} \iff \text{拒绝 }H_0:\theta=\theta_0.$

    例如，正态总体方差未知时，$\mu_0$ 不在对应的双侧 $t$ 置信区间内，等价于 $|T|>t_{\alpha/2}(n-1)$。

    上述精确检验统计量在原假设下均为连续分布，临界点处取严格或非严格不等号不改变第一类错误概率；实际计算时应统一端点判定约定。

### 两类错误
#### 第一类错误

当 $H_0$ 实际为真，却作出拒绝 $H_0$ 的结论，称为**第一类错误**，也称弃真错误。

对给定的原假设参数值 $\theta$，其概率为 $P_\theta(\text{拒绝 }H_0).$

水平为 $\alpha$ 的检验要求该概率在整个原假设参数空间上不超过 $\alpha$。对于简单原假设的精确检验，或某些复合原假设的边界情形，它通常恰好等于 $\alpha$。

例如，使用 $\alpha=0.05$ 的检验，并不保证本次结论一定正确，而是控制按同一规则反复检验时的弃真概率。

#### 第二类错误

当 $H_0$ 实际为假，却未拒绝 $H_0$，称为**第二类错误**，也称取伪错误。

对备择假设中的具体参数值 $\theta$，定义 $\beta(\theta)=P_\theta(\text{不拒绝 }H_0),$

则 $1-\beta(\theta)=P_\theta(\text{拒绝 }H_0)$ 称为在该参数值下的**检验功效**。

$\beta$ 一般依赖真实参数值、样本量、显著性水平以及检验规则，不能仅凭给定的 $\alpha$ 就确定。

<center markdown="1">

| 实际情况 | 不拒绝 $H_0$ | 拒绝 $H_0$ |
| --- | --- | --- |
| $H_0$ 为真 | 正确决策 | 第一类错误 |
| $H_0$ 为假 | 第二类错误 | 正确决策，概率为功效 |

</center>

???+ note "第二类错误概率的计算"

    计算 $\beta$ 时，先确定“不拒绝域”，再把统计量放到备择假设下的真实分布中计算概率。不能继续把它当成原假设下的标准分布。

    例如，正态总体方差 $\sigma^2$ 已知，检验 $H_0:\mu=\mu_0$ 对 $H_1:\mu\ne\mu_0$。双侧 $Z$ 检验的不拒绝域为

    $$
    a\le\overline X\le b,
    \qquad
    a=\mu_0-z_{\alpha/2}\frac{\sigma}{\sqrt n},
    \quad
    b=\mu_0+z_{\alpha/2}\frac{\sigma}{\sqrt n}.
    $$

    若真实均值为 $\mu_1\ne\mu_0$，则 $\overline X\sim N(\mu_1,\sigma^2/n)$，因此

    $$
    \beta(\mu_1)
    =\Phi\left(\frac{b-\mu_1}{\sigma/\sqrt n}\right)
    -\Phi\left(\frac{a-\mu_1}{\sigma/\sqrt n}\right).
    $$

    在固定样本量、模型和通常的检验形式下，降低 $\alpha$ 会缩小拒绝域，往往使 $\beta$ 增大。增加样本量则通常可以在保持 $\alpha$ 不变时降低特定备择下的 $\beta$，提高功效。

    因此，“显著性水平更低”不等于检验在所有方面都更好；还要结合样本量和需要识别的参数偏离程度。
