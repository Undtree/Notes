# 概率论与数理统计

## 随机事件与概率

### 基本概念

#### 随机试验

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**随机试验**通常记为 $E$，具有以下三个特点：

- **可重复性**：可以在相同条件下重复进行。
- **可预知性**：每次试验的可能结果不止一个，且所有可能结果事先明确。
- **不确定性**：试验前不能确定本次会出现哪一个结果。

例如，掷一枚骰子，可以事先列出点数 $1,2,\ldots,6$，但不能预先确定某次的点数。

</div>
</div>

#### 随机事件

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**随机事件**是随机试验中可能发生、也可能不发生的事情，通常用 $A,B,C$ 等表示。事件由满足某种条件的一组试验结果构成；当试验结果属于这组结果时，称该事件发生。

- **基本事件**：只包含一个样本点的事件。
- **必然事件**：每次试验一定发生的事件，记为 $\Omega$。
- **不可能事件**：每次试验都不发生的事件，记为 $\varnothing$。

例如，掷一枚骰子时，“点数为偶数”对应事件 $A=\{2,4,6\}$，“点数为 $2$”对应基本事件 $\{2\}$。

</div>
</div>

#### 样本空间

<div class="card" markdown="1">
<div class="card-body" markdown="1">

随机试验的每一个可能结果称为一个**样本点**，记为 $\omega$；所有样本点组成的集合称为**样本空间**，记为 $\Omega$。

事件可以用样本空间的子集表示。当试验结果 $\omega\in A$ 时，事件 $A$ 发生。

- 掷一枚骰子：$\Omega=\{1,2,3,4,5,6\}$。
- 连续掷两枚硬币：$\Omega=\{(\text{正},\text{正}),(\text{正},\text{反}),(\text{反},\text{正}),(\text{反},\text{反})\}$。
- 记录某元件的寿命：$\Omega=[0,+\infty)$。

严格地说，事件应属于指定的事件集合族 $\mathcal F$；有限或可数样本空间通常可取全部子集为事件，连续样本空间则需考虑可测性。

</div>
</div>

#### 事件的关系与运算

<div class="card" markdown="1">
<div class="card-body" markdown="1">

用集合描述事件，可以把“或”“且”“不发生”等语言转化为集合关系和运算。以下约定 $AB=A\cap B$，$\overline A=\Omega\setminus A$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**关系与基本运算**

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

对立事件满足 $A\cap\overline A=\varnothing$ 且 $A\cup\overline A=\Omega$。因此，对立必然互斥，互斥未必对立；对立还要求两事件的并为整个样本空间。

多个事件中，“至少一个发生”写成 $\bigcup_{i=1}^n A_i$，“全部发生”写成 $\bigcap_{i=1}^n A_i$。对两个事件，“恰有一个发生”写成 $A\overline B\cup\overline A B$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**运算法则**

| 法则 | 公式 |
| --- | --- |
| 吸收律 | $A\cup(A\cap B)=A$；$A\cap(A\cup B)=A$ |
| 交换律 | $A\cup B=B\cup A$；$A\cap B=B\cap A$ |
| 结合律 | $(A\cup B)\cup C=A\cup(B\cup C)$；$(A\cap B)\cap C=A\cap(B\cap C)$ |
| 分配律 | $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$；$A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$ |
| 对偶律（德·摩根律） | $\overline{A\cup B}=\overline A\cap\overline B$；$\overline{A\cap B}=\overline A\cup\overline B$ |

对偶律也适用于有限或可数个事件：

$$
\overline{\bigcup_i A_i}=\bigcap_i\overline{A_i},
\qquad
\overline{\bigcap_i A_i}=\bigcup_i\overline{A_i}.
$$

这反映了“至少一个发生”的对立事件是“全部不发生”，“全部发生”的对立事件是“至少一个不发生”。

</div>
</div>

??? Example "练习"
    设 $A, B, C$ 是在同一样本空间的任意三个事件，则下列选项中正确的是（  ）。

    A. 若 $A \cup C = B \cup C$，则 $A = B$
    
    B. 若 $A - C = B - C$，则 $A = B$
    
    C. 若 $AC = BC$，则 $A = B$
    
    D. 若 $AB = \emptyset$ 且 $\overline A \overline B = \emptyset$，则 $\overline A = B$

#### 概率的定义

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**描述性定义**

事件 $A$ 的概率 $P(A)$ 是衡量事件 $A$ 发生可能性大小的数值，取值在 $[0,1]$ 内。这给出了直观含义，严格的数学基础由公理化定义提供。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**统计性定义**

在相同条件下重复进行 $n$ 次试验，若事件 $A$ 发生了 $n_A$ 次，则称

$$
f_n(A)=\frac{n_A}{n}
$$

为事件 $A$ 的**频率**。在大量重复试验中，频率通常在某个常数附近稳定下来，用这个常数刻画 $P(A)$。

频率随试验结果变化，概率是给定模型中的确定数值；有限次试验的频率一般不等于概率，也不保证随试验次数增加而单调接近概率。

</div>
</div>

<div class="card" markdown="1">
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

<div class="card" markdown="1">
<div class="card-body" markdown="1">

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**随机分配问题**

将 $n$ 个**可区分**的物品独立、等概率地投入 $m$ 个**可区分**的盒子，每个物品都有 $m$ 种选择，等可能分配方式共 $m^n$ 种。

- 指定盒子为空的概率为 $\left(1-\frac1m\right)^n$。
- 当 $n\le m$ 时，每个盒子至多有一个物品的概率为 $\frac{A_m^n}{m^n}$。
- 指定各盒物品数为 $n_1,\ldots,n_m$，其中 $n_i\ge0$、$\sum_{i=1}^m n_i=n$ 时，概率为

$$
P=\frac{n!}{n_1!n_2!\cdots n_m!}\left(\frac1m\right)^n.
$$

不同的“盒内数量组合”一般不等可能。例如，两个物品投入两个盒子时，数量组合 $(2,0)$、$(1,1)$、$(0,2)$ 的概率分别为 $\frac14,\frac12,\frac14$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**简单随机抽样问题**

从 $N$ 个可区分个体中抽取 $n$ 个：

| 抽样方式 | 等可能样本的计数方式 | 样本总数 |
| --- | --- | --- |
| 不放回，考虑顺序 | 长度为 $n$、无重复的有序序列 | $A_N^n$ |
| 不放回，不考虑顺序 | 含 $n$ 个个体的子集 | $C^{n}_{N}$ |
| 有放回，各次独立且均匀抽取，考虑顺序 | 长度为 $n$、允许重复的有序序列 | $N^n$ |

简单随机不放回抽样通常指：总体中每个容量为 $n$ 的子集被抽到的概率相同。

若总体 $N$ 个个体中有 $M$ 个具有某特征，不放回抽取 $n$ 个，恰有 $k$ 个具有该特征的概率为

$$
P=\frac{C^{k}_{M}C^{n-k}_{N-M}}{C^{n}_{N}},
\qquad
\max(0,n-N+M)\le k\le\min(n,M).
$$

这就是超几何分布的抽样背景。若改为独立、有放回地抽取，则每次抽中特征个体的概率恒为 $M/N$，可使用后面的二项概率公式。

</div>
</div>

#### 几何概型

<div class="card" markdown="1">
<div class="card-body" markdown="1">

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

</div>
</div>

!!! Warning "使用时注意"
    -   “随机选取”应落实为具体的均匀性假设，不能仅凭几何图形就直接取面积比或长度比。
    -   非空事件的概率可以为 $0$。例如上述模型中，$P(X=\frac12)=0$，但 $\{\frac12\}$ 不是空集。
    -   同理，概率为 $1$ 的事件未必等于样本空间。因此，$P(A)=0$ 不一定表示 $A=\varnothing$，$P(A)=1$ 不一定表示 $A=\Omega$。

### 概率的性质与公式

#### 性质

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**有界性**

对任意事件 $A$，

$$
0\le P(A)\le1,
\qquad
P(\varnothing)=0,\quad P(\Omega)=1.
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**单调性**

若 $A\subseteq B$，则

$$
P(A)\le P(B).
$$

因为 $B=A\cup(B-A)$ 且右侧两事件互斥，所以 $P(B)=P(A)+P(B-A)\ge P(A)$。

反过来，$P(A)\le P(B)$ 不一定推出 $A\subseteq B$；概率相等也不一定意味着事件相等。

</div>
</div>

#### 公式

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**逆事件概率公式**

$$
P(\overline A)=1-P(A).
$$

遇到“至少一个”“不全是”等事件时，可以先求其对立事件的概率。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**加法公式**

对任意两个事件 $A,B$，

$$
P(A\cup B)=P(A)+P(B)-P(AB).
$$

若 $A,B$ 互斥，则简化为 $P(A\cup B)=P(A)+P(B)$。

对三个事件，

$$
P(A\cup B\cup C)
=P(A)+P(B)+P(C)
-P(AB)-P(AC)-P(BC)+P(ABC).
$$

一般情形按容斥原理展开：先加单个事件的概率，减去两两交的概率，加上三者交的概率，依次交替。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**减法公式**

$$
P(A-B)=P(A)-P(AB).
$$

特别地，当 $B\subseteq A$ 时，

$$
P(A-B)=P(A)-P(B).
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件概率公式**

若 $P(B)>0$，则在事件 $B$ 已发生的条件下，事件 $A$ 发生的概率为

$$
P(A\mid B)=\frac{P(AB)}{P(B)}.
$$

这里相当于把考察范围缩小到 $B$，再对 $AB$ 的概率进行归一化。通常 $P(A\mid B)\ne P(B\mid A)$。

固定条件 $B$ 后，条件概率仍满足概率的基本性质，例如

$$
P(\overline A\mid B)=1-P(A\mid B).
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**乘法公式**

由条件概率的定义可得

$$
P(AB)=P(B)P(A\mid B)\quad(P(B)>0),
$$

以及

$$
P(AB)=P(A)P(B\mid A)\quad(P(A)>0).
$$

对多个事件，在相关条件事件概率均为正时，

$$
P(A_1A_2\cdots A_n)
=P(A_1)\prod_{i=2}^{n}
P(A_i\mid A_1A_2\cdots A_{i-1}).
$$

乘法公式本身不要求事件独立；独立时，才可以把相应条件概率替换为无条件概率。

</div>
</div>

<div class="card" markdown="1">
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

特别地，当 $0\lt P(B)\lt 1$ 时，

$$
P(A)=P(B)P(A\mid B)+P(\overline B)P(A\mid\overline B).
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**贝叶斯公式（逆概率公式）**

在上述划分条件下，若 $P(A)>0$，则

$$
P(B_j\mid A)
=\frac{P(B_j)P(A\mid B_j)}
{\sum_{i=1}^nP(B_i)P(A\mid B_i)}.
$$

其中，$P(B_j)$ 是观察到 $A$ 之前的**先验概率**，$P(B_j\mid A)$ 是观察到 $A$ 之后的**后验概率**。它常用于“已知结果，反推来源”。

例如，两台机器提供的产品分别占 $60\%$、$40\%$，次品率分别为 $1\%$、$2\%$。令 $D$ 表示抽到次品，$B_2$ 表示产品来自第二台机器，则

$$
P(D)=0.6\times0.01+0.4\times0.02=0.014,
$$

$$
P(B_2\mid D)=\frac{0.4\times0.02}{0.014}=\frac47.
$$

全概率公式由各来源求结果的概率，贝叶斯公式在结果已知时求来源的条件概率。

</div>
</div>

### 事件的独立性和独立重复试验

#### 事件的独立性

<div class="card" markdown="1">
<div class="card-body" markdown="1">

若事件 $A,B$ 满足

$$
P(AB)=P(A)P(B),
$$

则称 $A,B$ **相互独立**。当 $P(B)>0$ 时，这等价于 $P(A\mid B)=P(A)$，即知道 $B$ 发生不会改变 $A$ 的发生概率。

对多个事件，需要区分：

- **两两独立**：任意两个不同事件均独立，即 $P(A_iA_j)=P(A_i)P(A_j)$。
- **相互独立**：任取至少两个事件，其交的概率都等于各自概率的乘积，即对任意 $2\le k\le n$ 及任意 $i_1\lt \cdots\lt i_k$，

$$
P(A_{i_1}\cdots A_{i_k})
=\prod_{r=1}^kP(A_{i_r}).
$$

??? Warning "相互独立必然两两独立，两两独立未必相互独立。"
    特别地，三个事件相互独立需要同时验证三个两两乘积等式以及 $P(ABC)=P(A)P(B)P(C)$，仅验证最后一个等式也不够。

    例如，独立抛掷两枚均匀硬币，令 $A$ 表示第一枚正面，$B$ 表示第二枚正面，$C$ 表示两枚朝向相同。三个事件的概率均为 $\frac12$，任意两个事件交的概率均为 $\frac14$，但

    $$
    P(ABC)=\frac14\ne\frac18=P(A)P(B)P(C).
    $$

    因此，这三个事件两两独立，但不相互独立。

</div>
</div>

#### 独立性的判定

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**定义直接判定**

优先检验 $P(AB)=P(A)P(B)$。若已知相关条件事件的概率大于 $0$，也可检验 $P(A\mid B)=P(A)$ 或 $P(B\mid A)=P(B)$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**独立性的判定定理**

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

</div>
</div>

!!! Note "互斥与独立的区别"

    | 比较项 | 互斥 | 独立 |
    | --- | --- | --- |
    | 判定条件 | $AB=\varnothing$ | $P(AB)=P(A)P(B)$ |
    | 含义 | 不能同时发生 | 一个事件的发生不改变另一个事件的概率（条件概率有定义时） |
    | 当 $P(A),P(B)>0$ | 不可能独立 | 不可能互斥 |

    若 $A,B$ 互斥且两者概率均大于 $0$，则 $P(AB)=0\lt P(A)P(B)$，所以不独立。

#### 独立试验序列概型与 n 重伯努利概型

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**独立试验序列概型**

若各次试验相互独立，第 $i$ 次试验中指定事件 $A_i$ 的概率为 $p_i$，则

$$
P(A_1A_2\cdots A_n)=\prod_{i=1}^n p_i.
$$

各次试验可以具有不同的结果类别或不同的事件概率。若每次都关注某事件是否发生，则

$$
P(\text{一次也不发生})=\prod_{i=1}^n(1-p_i),
$$

$$
P(\text{至少发生一次})=1-\prod_{i=1}^n(1-p_i).
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**n 重伯努利概型**

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

常用结果包括

$$
P(X=0)=(1-p)^n,\qquad P(X=n)=p^n,
$$

$$
P(X\ge1)=1-(1-p)^n,
$$

$$
P(X\le r)=\sum_{k=0}^{r}C^{k}_{n} p^k(1-p)^{n-k},
\qquad r=0,1,\ldots,n.
$$

使用二项公式前，必须确认“独立”和“成功概率不变”；不放回抽样通常不满足这两个条件。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**多项分布背景**

若每次独立重复试验有 $r$ 类互斥且穷尽的结果，类别概率恒为 $p_1,\ldots,p_r$，且 $\sum_{i=1}^r p_i=1$，则 $n$ 次试验中各类分别出现 $n_1,\ldots,n_r$ 次的概率为

$$
P=\frac{n!}{n_1!n_2!\cdots n_r!}
\prod_{i=1}^r p_i^{n_i},
\qquad n_i\ge0,\quad \sum_{i=1}^r n_i=n.
$$

这就是多项分布的试验背景；二项分布是 $r=2$ 时的特殊情形。

</div>
</div>

### 本章自测：随机事件与概率

!!! example "自测题"

    **基础**

    1. 用 $A,B,C$ 的集合运算表示“三个事件中恰有一个发生”和“至少两个发生”。若 $A,B$ 互斥且各自概率均大于零，它们能否独立？说明理由。
    2. 已知 $P(A)=0.6$、$P(B)=0.5$、$P(AB)=0.3$，求 $P(A\cup B)$、$P(A-B)$、$P(A\mid B)$，并判断 $A,B$ 是否独立。

    **应用**

    3. 袋中有 $3$ 个红球、$2$ 个蓝球，各球可区分。不放回地等可能抽取 $2$ 个，求恰有一个红球的概率；若改为独立有放回抽取，答案如何变化？
    4. 将 $3$ 个可区分的物品独立、等概率地放入 $3$ 个可区分的盒子。求没有空盒的概率，以及指定的第一个盒子为空的概率。为什么不能把所有盒内数量组合看作等可能？
    5. 甲、乙独立地在一小时内均匀到达约定地点，每人到达后最多等待 $15$ 分钟。求两人见面的概率，并写出所用的样本空间和事件区域。
    6. 甲、乙两条生产线分别提供 $70\%$、$30\%$ 的产品，次品率分别为 $2\%$、$5\%$。随机抽取一件产品，求次品概率；若已知是次品，求其来自乙线的概率。

    **综合**

    7. 四个元件相互独立，每个正常工作的概率为 $0.8$。系统至少有三个元件正常时才工作。求系统工作概率；已知系统工作，求四个元件全部正常的条件概率。
    8. 独立掷两枚均匀硬币。令 $A$ 为“第一枚正面”、$B$ 为“第二枚正面”、$C$ 为“两枚结果相同”。证明三事件两两独立，并判断它们是否相互独立。

    ??? success "参考"

        1. 恰有一个发生为 $A\overline B\overline C\cup\overline AB\overline C\cup\overline A\overline BC$；至少两个发生为 $AB\cup AC\cup BC$。互斥且概率均为正时，$P(AB)=0\ne P(A)P(B)$，故不独立。
        2. 依次为 $0.8$、$0.3$、$0.6$；因 $P(AB)=P(A)P(B)$，两事件独立。
        3. 不放回时为 $C_3^1C_2^1/C_5^2=3/5$；有放回时为 $2(3/5)(2/5)=12/25$。
        4. 没有空盒的概率为 $3!/3^3=2/9$；第一个盒子为空的概率为 $(2/3)^3=8/27$。数量组合 $(3,0,0)$ 只对应一种有序投放结果，而 $(1,1,1)$ 对应六种。
        5. 以小时为单位，样本空间为 $[0,1]^2$，见面区域为 $|x-y|\le1/4$。概率为 $1-(3/4)^2=7/16$。
        6. $P(D)=0.7\times0.02+0.3\times0.05=0.029$；$P(\text{乙}\mid D)=0.015/0.029=15/29$。
        7. 工作概率为 $C_4^3(0.8)^3(0.2)+(0.8)^4=0.8192$；条件概率为 $(0.8)^4/0.8192=1/2$。
        8. 三事件概率均为 $1/2$，任意两事件交的概率均为 $1/4$，但 $P(ABC)=1/4\ne1/8$，所以不是相互独立。

## 一维随机变量及其分布

### 一维随机变量

#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

设随机试验的样本空间为 $\Omega$，若对每个样本点 $\omega\in\Omega$，都有一个实数 $X(\omega)$ 与之对应，则称满足可测性要求的实值函数 $X=X(\omega)$ 为**一维随机变量**，通常用 $X,Y,Z$ 等表示。

这里的可测性要求是：对任意实数 $x$，集合 $\{\omega:X(\omega)\le x\}$ 都是事件，从而可以讨论它的概率。

!!! Note "随机变量的实质就是“实值单值函数”，和 $y=y(x)$ 这类定义域在实数集内部的“函数”有所区别。"

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

</div>
</div>

#### 分布函数

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**概念**

随机变量 $X$ 的**分布函数**定义为

$$
F_X(x)=P(X\le x),\qquad x \in \mathbb{R}.
$$

不致混淆时记为 $F(x)$。分布函数给出随机变量落在 $(-\infty,x]$ 内的概率，适用于离散型、连续型和混合型等各种随机变量，并能唯一确定其分布。我们称 $X$ 服从 $F(x)$ 分布，记作 $X \sim F(x)$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**性质**

分布函数满足：

- **单调不减**：若 $x_1\lt x_2$，则 $F(x_1)\le F(x_2)$。
- **有界性与两端极限**：

$$
0\le F(x)\le1,\qquad
\lim_{x\to-\infty}F(x)=0,\qquad
\lim_{x\to+\infty}F(x)=1.
$$

- **右连续性**：对任意 $x$，$\lim_{t\to x^+}F(t)=F(x)$。

上面三个性质是一个实函数成为某个随机变量分布函数的 **充要条件**。

记左极限为

$$
F(x^-)=\lim_{t\to x^-}F(t)=P(X\lt x).
$$

则

$$
P(X=x)=F(x)-F(x^-).
$$

因此，分布函数在 $x$ 处的跳跃量就是 $X$ 取值为 $x$ 的概率；$F$ 在 $x$ 处连续，当且仅当 $P(X=x)=0$。

</div>
</div>

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

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**应用——求概率**

对任意 $a\lt b$，区间概率可统一表示为：

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

端点是否包含，在端点概率不为 $0$ 时会影响结果。只有确认相应端点的概率为 $0$ 后，才可忽略开闭区间的区别。

</div>
</div>

### 一维离散型随机变量

#### 分布律

<div class="card" markdown="1">
<div class="card-body" markdown="1">

若随机变量 $X$ 以概率 $1$ 取有限个或可数无穷个值 $x_1,x_2,\ldots$，则称 $X$ 为**离散型随机变量**。

各个取值及其对应概率

$$
P(X=x_k)=p_k,\qquad k=1,2,\ldots
$$

构成 $X$ 的**分布律**，也称概率质量函数，可用表格表示：

| $X$ | $x_1$ | $x_2$ | $\cdots$ |
| --- | --- | --- | --- |
| $P$ | $p_1$ | $p_2$ | $\cdots$ |

---

例如，两枚独立均匀硬币的正面次数 $X$ 的分布律为：

| $X$ | $0$ | $1$ | $2$ |
| --- | --- | --- | --- |
| $P$ | $\frac14$ | $\frac12$ | $\frac14$ |

</div>
</div>

#### 性质

<div class="card" markdown="1">
<div class="card-body" markdown="1">

分布律满足两个基本条件：

$$
p_k\ge0,\qquad \sum_k p_k=1.
$$

反过来，一组对应于互异取值的概率只要满足非负性和归一性，就可以构成离散型随机变量的分布律。遇到含未知常数的分布律，可以利用这两个条件确定常数及其允许范围。

分布律与分布函数的关系为

$$
F(x)=\sum_{x_k\le x}p_k.
$$

当取值按 $x_1\lt x_2\lt \cdots$ 排列时，$F$ 在相邻取值之间保持不变，在每个 $x_k$ 处向上跳跃 $p_k$，并在跳跃点取跳跃后的函数值。

---、

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

</div>
</div>

#### 应用——求概率

<div class="card" markdown="1">
<div class="card-body" markdown="1">

对取值范围 $D$，将所有落在 $D$ 内的取值概率相加：

$$
P(X\in D)=\sum_{x_k\in D}p_k.
$$

---

例如，

$$
P(a\lt X\le b)=\sum_{a\lt x_k\le b}p_k.
$$

若 $X$ 只取整数值，则对整数 $m\le n$，

$$
P(m\le X\le n)=\sum_{k=m}^nP(X=k)=F(n)-F(m-1).
$$

处理非整数边界时，应先找出实际包含的整数取值。例如，$P(X\lt 2.5)=P(X\le2)$。

</div>
</div>

#### 五大分布

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**0—1 分布（伯努利分布）**

若 $X$ 只取 $0,1$，且

$$
P(X=1)=p,\qquad P(X=0)=1-p,\qquad 0\le p\le1,
$$

则称 $X$ 服从参数为 $p$ 的 0—1 分布。

它描述一次试验中某事件是否发生。若令 $X=1$ 表示事件 $A$ 发生、$X=0$ 表示 $A$ 不发生，则 $p=P(A)$，此时 $X$ 也称事件 $A$ 的示性随机变量。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**二项分布**

在 $n$ 次独立重复的伯努利试验中，每次成功概率均为 $p$，成功次数 $X$ 服从二项分布，记为 $X\sim B(n,p)$：

$$
P(X=k)=C^{k}_{n} p^k(1-p)^{n-k},
\qquad k=0,1,\ldots,n.
$$

其中 $n$ 为正整数，$0\le p\le1$。当 $p=0$ 或 $p=1$ 时，分布分别退化为 $X=0$ 或 $X=n$。

- **模型条件**：试验次数固定、各次独立、每次成功概率相同。
- **典型问题**：独立有放回抽样中的命中次数，或独立重复检测中的合格次数。
- **常用概率**：$P(X\ge1)=1-(1-p)^n$。
- 当 $n=1$ 时，二项分布就是 0—1 分布。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**泊松分布**

若

$$
P(X=k)=\frac{\lambda^k}{k!}e^{-\lambda},
\qquad k=0,1,2,\ldots,\quad \lambda>0,
$$

则称 $X$ 服从参数为 $\lambda$ 的泊松分布，记为 $X\sim P(\lambda)$ 或 $X\sim\operatorname{Poisson}(\lambda)$。

它常用于描述在给定时间或空间范围内、满足相应随机到达假设的事件发生次数，例如单位时间内的呼叫次数。仅知道“计数”这一背景，并不能直接断定服从泊松分布。

常用关系为

$$
P(X=0)=e^{-\lambda},\qquad
P(X\ge1)=1-e^{-\lambda},
$$

$$
\frac{P(X=k+1)}{P(X=k)}=\frac{\lambda}{k+1}.
$$

**泊松近似**：若 $X\sim B(n,p)$，在 $n$ 较大、$p$ 较小的稀有事件情形下，可用参数 $\lambda=np$ 的泊松分布近似：

$$
C^{k}_{n} p^k(1-p)^{n-k}
\approx \frac{(np)^k}{k!}e^{-np}.
$$

其极限依据是：当 $n\to\infty$、$p_n\to0$ 且 $np_n\to\lambda>0$ 时，对每个固定的非负整数 $k$，相应二项概率趋于泊松概率。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**几何分布**

独立重复进行成功概率为 $p$ 的伯努利试验，令 $X$ 表示**首次成功时的试验次数**，则

$$
P(X=k)=(1-p)^{k-1}p,
\qquad k=1,2,\ldots,\quad 0\lt p\lt 1.
$$

记为 $X\sim G(p)$。若 $p=1$，则退化为 $X=1$。

首次在第 $k$ 次成功，意味着前 $k-1$ 次全部失败、第 $k$ 次成功。于是对非负整数 $m$，

$$
P(X>m)=(1-p)^m.
$$

几何分布具有**无记忆性**：对非负整数 $m,n$，

$$
P(X>m+n\mid X>m)=P(X>n).
$$

即已经失败 $m$ 次之后，再等待首次成功所需的试验次数，仍服从原来的几何分布。

有些教材将几何分布定义为“首次成功前的失败次数”。若用 $Y=X-1$ 表示这一数量，则

$$
P(Y=k)=(1-p)^kp,\qquad k=0,1,2,\ldots.
$$

使用公式前要确认随机变量从 $0$ 还是从 $1$ 开始取值。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**超几何分布**

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

</div>
</div>

### 一维连续型随机变量

#### 概率密度

<div class="card" markdown="1">
<div class="card-body" markdown="1">

若存在非负可积函数 $f(x)$，使随机变量 $X$ 的分布函数可表示为

$$
F(x)=\int_{-\infty}^x f(t)\,\mathrm dt,
$$

则称 $X$ 为**连续型随机变量**，称 $f(x)$ 为 $X$ 的**概率密度函数**，简称概率密度。

这里采用具有概率密度的连续型定义。分布函数连续是必要条件，但仅有连续性并不足以保证存在概率密度。

在 $f$ 连续的点上，

$$
F'(x)=f(x).
$$

反过来，求得密度后，可以通过积分得到分布函数。分段密度需要分段积分，并把前面各段已累计的概率计入 $F(x)$。

</div>
</div>

#### 性质

<div class="card" markdown="1">
<div class="card-body" markdown="1">

概率密度满足：

$$
f(x)\ge0,\qquad
\int_{-\infty}^{+\infty}f(x)\,\mathrm dx=1.
$$

密度的非负性严格说只需几乎处处成立，通常选取处处非负的代表。

- **密度不是概率**：$f(x)$ 可以大于 $1$，概率由密度在区间上的积分给出。
- **单点概率为零**：对任意实数 $a$，$P(X=a)=0$。
- **分布函数连续**：因此区间概率不受有限个端点是否包含的影响。
- **密度不唯一**：在有限个点上改变密度的值，不改变任何区间积分，也就不改变分布；更一般地，在零测集上的修改也不影响分布。

例如，$X$ 在 $(0,\displaystyle\frac12)$ 上均匀分布时，该区间内的密度为 $2$，但总概率仍为 $2\times \displaystyle\frac12=1$。

若 $f$ 在 $x$ 处连续，对很小的 $h>0$，有

$$
P(x\lt X\le x+h)\approx f(x)h.
$$

这说明密度刻画的是局部概率相对于区间长度的集中程度。

</div>
</div>

#### 应用——求概率

<div class="card" markdown="1">
<div class="card-body" markdown="1">

对 $a\lt b$，

$$
P(a\lt X\le b)=P(a\le X\le b)
=P(a\lt X\lt b)=P(a\le X\lt b)
=\int_a^b f(x)\,\mathrm dx.
$$

更一般地，对可测集合 $D$，

$$
P(X\in D)=\int_D f(x)\,\mathrm dx.
$$

计算时先确定事件对应的取值范围，再与密度非零的区间取交集，最后积分。若范围包含多个不相交区间，应将各区间的积分相加。

---

例如，若

$$
f(x)=
\begin{cases}
cx, & 0\lt x\lt 1,\\
0, & \text{其他},
\end{cases}
$$

由归一性 $\displaystyle\int_0^1cx\,\mathrm dx=1$ 得 $c=2$，进而

$$
P\left(X>\frac12\right)
=\int_{1/2}^1 2x\,\mathrm dx=\frac34.
$$

</div>
</div>

#### 三大分布

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**均匀分布**

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

若 $a\le c\lt d\le b$，则

$$
P(c\lt X\lt d)=\frac{d-c}{b-a}.
$$

概率仅与子区间长度有关，与其在 $(a,b)$ 中的位置无关。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**指数分布**

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

指数分布具有**无记忆性**：对任意 $s,t\ge0$，

$$
P(X>s+t\mid X>s)=P(X>t)=e^{-\lambda t}.
$$

即已经等待 $s$ 时间之后，剩余等待时间的分布与初始等待时间相同。这与几何分布的无记忆性相对应，前者描述连续时间，后者描述离散试验次数。

若教材改用尺度参数 $\theta>0$，则密度写成 $\frac1\theta e^{-x/\theta}$，其中 $\theta=1/\lambda$；应先确认参数约定。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**正态分布**

若 $X$ 的密度为

$$
f(x)=\frac1{\sqrt{2\pi}\sigma}
\exp\left[-\frac{(x-\mu)^2}{2\sigma^2}\right],
\qquad -\infty\lt x\lt +\infty,
$$

其中 $\mu\in\mathbb R$、$\sigma>0$，则称 $X$ 服从正态分布，记为

$$
X\sim N(\mu,\sigma^2).
$$

密度曲线关于直线 $x=\mu$ 对称，在 $x=\mu$ 处取最大值；$\mu$ 决定位置，$\sigma$ 控制分散程度。记号中的第二个参数为 $\sigma^2$。

当 $\mu=0$、$\sigma=1$ 时，称为**标准正态分布**，其密度和分布函数分别记为

$$
\varphi(x)=\frac1{\sqrt{2\pi}}e^{-x^2/2},
\qquad
\Phi(x)=\int_{-\infty}^x\varphi(t)\,\mathrm dt.
$$

利用对称性，

$$
\varphi(-x)=\varphi(x),\qquad
\Phi(-x)=1-\Phi(x),\qquad
\Phi(0)=\frac12.
$$

---

若 $X\sim N(\mu,\sigma^2)$，则通过**标准化**

$$
Z=\frac{X-\mu}{\sigma}\sim N(0,1)
$$

可将概率转化为标准正态分布函数的值：

$$
F_X(x)=\Phi\left(\frac{x-\mu}{\sigma}\right),
$$

$$
P(a\lt X\le b)
=\Phi\left(\frac{b-\mu}{\sigma}\right)
-\Phi\left(\frac{a-\mu}{\sigma}\right).
$$

特别地，对 $c\ge0$，

$$
P(\lvert X-\mu\rvert\le c)
=2\Phi\left(\frac c\sigma\right)-1.
$$

常见的中心区间概率约为

$$
P(\lvert X-\mu\rvert\le\sigma)\approx0.6827,\qquad
P(\lvert X-\mu\rvert\le2\sigma)\approx0.9545,
$$

$$
P(\lvert X-\mu\rvert\le3\sigma)\approx0.9973.
$$

若定义上侧 $\alpha$ 分位点 $z_\alpha$ 满足 $P(Z>z_\alpha)=\alpha$，则 $\Phi(z_\alpha)=1-\alpha$。使用分位点表前应确认其采用上侧概率还是累计概率的记号。

</div>
</div>

### 一维随机变量函数的分布

已知 $X$ 的分布，令 $Y=g(X)$，其中 $g$ 为可测函数，我们的目标是求出 $Y$ 的分布。一般方法是先确定 $Y$ 的取值范围，再由事件 $\{g(X)\le y\}$ 求分布函数：

$$
F_Y(y)=P(Y\le y)=P(g(X)\le y).
$$

#### 离散型 → 离散型

<div class="card" markdown="1">
<div class="card-body" markdown="1">

若 $X$ 的分布律为 $P(X=x_k)=p_k$，则 $Y=g(X)$ 的可能取值为 $g(x_k)$。把相同的函数值合并后，对每个不同的取值 $y_j$，

$$
P(Y=y_j)=\sum_{k:\,g(x_k)=y_j}p_k.
$$

具体步骤为：

1. 列出 $X$ 的所有可能取值及对应概率。
2. 计算各个取值对应的 $g(x_k)$。
3. 合并相同的 $Y$ 值，并把对应概率相加。

例如，若 $X$ 的分布律为

| $X$ | $-1$ | $0$ | $1$ |
| --- | --- | --- | --- |
| $P$ | $\frac14$ | $\frac12$ | $\frac14$ |

令 $Y=X^2$，则 $X=-1$ 和 $X=1$ 均对应 $Y=1$，所以

| $Y$ | $0$ | $1$ |
| --- | --- | --- |
| $P$ | $\frac12$ | $\frac12$ |

当 $g$ 不是一一对应时，必须合并概率，不能只替换分布律表格中的取值。

</div>
</div>

#### 连续型 → 连续型（或混合型）

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**① 分布函数法（定义法）**

若 $X$ 具有密度 $f_X$，则

$$
F_Y(y)=\int_{\{x:\,g(x)\le y\}}f_X(x)\,\mathrm dx.
$$

先针对不同的 $y$ 解不等式 $g(x)\le y$，再与 $X$ 的取值范围相交并积分。若所得 $F_Y$ 可由密度积分表示，则可通过求导得到密度；若存在跳跃，还应单独记录相应的点概率。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**② 单调变换公式**

若 $g$ 在 $X$ 的密度所对应区间上严格单调、可导且 $g'(x)\ne0$，反函数为 $x=h(y)$，则在变换后的区间内，

$$
f_Y(y)=f_X(h(y))\lvert h'(y)\rvert.
$$

区间外密度为 $0$。绝对值保证密度非负，不能省略。

- 若 $g$ 严格递增，则 $F_Y(y)=F_X(h(y))$。
- 若 $g$ 严格递减，则由 $X$ 的单点概率为 $0$，有 $F_Y(y)=1-F_X(h(y))$。

例如，若 $Y=aX+b$ 且 $a\ne0$，则

$$
f_Y(y)=\frac1{\lvert a\rvert}
f_X\left(\frac{y-b}{a}\right).
$$

因此，若 $X\sim N(\mu,\sigma^2)$，则

$$
aX+b\sim N(a\mu+b,a^2\sigma^2),\qquad a\ne0.
$$

若 $a=0$，则 $Y=b$ 以概率 $1$ 成立，此时为退化的离散分布。

</div>
</div>

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

    例如，设 $X\sim U(-1,1)$，令 $Y=\max(X,0)$。当 $X\le0$ 时，$Y=0$，所以

    $$
    P(Y=0)=P(X\le0)=\frac12.
    $$

    而对 $0\lt a\lt b\lt 1$，

    $$
    P(a\lt Y\le b)=\frac{b-a}{2}.
    $$

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

### 本章自测：一维随机变量及其分布

!!! example "自测题"

    **基础**

    1. 已知分布函数 $F(x)$ 在 $x<-1$、$-1\le x<0$、$0\le x<2$、$x\ge2$ 上分别为 $0$、$0.2$、$0.5$、$1$。写出 $X$ 的分布律，求 $P(-1<X\le2)$ 与 $P(-1\le X<2)$。
    2. 随机变量只取 $1,2,3$，且 $P(X=k)=ck$。求 $c$，写出 $Y=(X-2)^2$ 的分布律。
    3. 分别为以下变量选择合适分布并写出参数：一次成功概率为 $0.3$ 的试验是否成功；十次这样的独立试验中的成功次数；首次成功时的试验次数；从含三个次品的十件产品中不放回抽四件所得的次品数；已假定服从泊松模型、平均每分钟到达两次时的一分钟到达次数。

    **应用**

    4. 设 $f_X(x)=cx$（$0<x<2$），区间外为零。求 $c$、分布函数 $F_X$ 以及 $P(1<X<2)$。密度值能否大于 $1$？
    5. 设 $T\sim\operatorname{Exp}(0.2)$，时间单位为小时。求 $P(T>5)$ 与 $P(T>8\mid T>3)$，解释两者相等的原因。
    6. 设 $X\sim N(10,4)$。用 $\Phi$ 表示 $P(8<X\le13)$，并求 $Y=3-2X$ 的分布。

    **综合**

    7. 设 $X\sim U(-2,1)$、$Y=X^2$。分段求 $F_Y$ 与密度，特别说明为什么在 $y=1$ 前后公式不同。
    8. 设 $X\sim U(-1,2)$、$Y=\max(X,0)$。求 $P(Y=0)$ 和 $F_Y$，判断 $Y$ 的分布类型，并说明仅对 $F_Y$ 求导会遗漏什么。
    9. 一批 $1000$ 个元件各自独立地以概率 $0.002$ 出现缺陷。写出缺陷数不超过一个的精确概率，并给出泊松近似；说明近似参数的来源。

    ??? success "参考"

        1. 在 $-1,0,2$ 的概率分别为 $0.2,0.3,0.5$，即分布函数的跳跃量。两个区间概率分别为 $0.8$、$0.5$。
        2. $c=1/6$；$P(Y=0)=1/3$、$P(Y=1)=2/3$，注意合并 $X=1,3$ 对应的概率。
        3. 依次为伯努利分布 $B(1,0.3)$、$B(10,0.3)$、$G(0.3)$、超几何分布 $(N,M,n)=(10,3,4)$、$P(2)$。几何变量从 $1$ 开始取值。
        4. $c=1/2$；$F_X(x)$ 在 $x\le0$、$0<x<2$、$x\ge2$ 上分别为 $0,x^2/4,1$；所求概率为 $3/4$。一般密度可以大于 $1$，例如 $U(0,1/2)$ 的密度为 $2$，归一化约束的是积分。
        5. 两者均为 $e^{-1}$；指数分布的剩余寿命具有无记忆性，第二问额外等待时间为 $8-3=5$ 小时。
        6. $P=\Phi(1.5)-\Phi(-1)$；$Y\sim N(-17,16)$。原变量标准差为 $2$，不是 $4$。
        7. 当 $0<y<1$ 时，$[-\sqrt y,\sqrt y]$ 的两端均在原区间内；当 $1<y<4$ 时，正分支超出右端点 $1$。因此

            $$
            F_Y(y)=\begin{cases}
            0,&y<0,\\
            2\sqrt y/3,&0\le y\le1,\\
            (1+\sqrt y)/3,&1<y<4,\\
            1,&y\ge4,
            \end{cases}
            \qquad
            f_Y(y)=\begin{cases}
            1/(3\sqrt y),&0<y<1,\\
            1/(6\sqrt y),&1<y<4,\\
            0,&\text{其他}.
            \end{cases}
            $$

        8. $P(Y=0)=1/3$；$F_Y(y)$ 在 $y<0$、$0\le y<2$、$y\ge2$ 上分别为 $0,(y+1)/3,1$。这是混合型分布；求导只得到总质量为 $2/3$ 的连续部分，遗漏零点的概率质量。
        9. 精确值为 $0.998^{1000}+1000(0.002)0.998^{999}$；由 $\lambda=np=2$，泊松近似为 $e^{-2}(1+2)=3e^{-2}$。

## 多维随机变量及其分布

### n 维随机变量及其分布函数

#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**随机向量**

设 $X_1,\ldots,X_n$ 是定义在同一个样本空间上的随机变量，则称

$$
\mathbf X=(X_1,\ldots,X_n)
$$

为 **$n$ 维随机变量**，也称 **$n$ 维随机向量**。每次试验的结果对应 $\mathbb R^n$ 中的一个点。

当 $n=2$ 时，记为 $(X,Y)$。例如，同时记录某人的身高 $X$ 与体重 $Y$，不仅要描述两个变量各自的分布，还要描述它们共同取值的概率规律。

各分量定义在同一概率空间上，并不意味着它们相互独立。

</div>
</div>

#### 联合分布函数

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**概念**

$n$ 维随机向量 $\mathbf X$ 的联合分布函数定义为

$$
F(x_1,\ldots,x_n)
=P(X_1\le x_1,\ldots,X_n\le x_n).
$$

其中逗号表示事件同时发生，即取交集。二维情形为

$$
F(x,y)=P(X\le x,\ Y\le y).
$$

几何上，它表示随机点 $(X,Y)$ 落在矩形区域 $(-\infty,x]\times(-\infty,y]$ 内的概率。联合分布函数能够唯一确定随机向量的分布。$(X,Y)$ 服从分布函数 $F(X,Y)$ 记为 $(X,Y) \sim F(X,Y)$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**性质**

以二维情况说明，二维联合分布函数满足：

- **有界性**：$0\le F(x,y)\le1$。
- **对每个变量单调不减**：固定一个变量时，$F$ 关于另一个变量单调不减。
- **对每个变量右连续**：

$$
\lim_{h\to0^+}F(x+h,y)=F(x,y),
\qquad
\lim_{k\to0^+}F(x,y+k)=F(x,y).
$$

- **边界条件**：当任一坐标趋于 $-\infty$ 时，联合分布函数趋于 $0$；当所有坐标都趋于 $+\infty$ 时，联合分布函数趋于 $1$。二维中，

$$
F(-\infty,y)=F(x,-\infty)=0,
\qquad F(+\infty,+\infty)=1.
$$

- **矩形增量非负**：对任意 $a\lt b$、$c\lt d$，

$$
F(b,d)-F(a,d)-F(b,c)+F(a,c)\ge0.
$$

上述矩形增量恰好等于

$$
P(a\lt X\le b,\ c\lt Y\le d).
$$

所以，“分别单调不减”不能替代“矩形增量非负”。在 $n$ 维情形中，对应要求是任意半开长方体的 $2^n$ 个顶点所构成的交替增量非负。

计算含不同开闭端点的矩形概率时，可使用相应坐标方向的左极限。例如，

$$
P(X=x,\ Y=y)
=F(x,y)-F(x^-,y)-F(x,y^-)+F(x^-,y^-).
$$

</div>
</div>

#### 边缘分布函数

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**由联合分布求边缘分布**

联合分布中的某一个分量或部分分量的分布，称为**边缘分布**。对二维随机向量 $(X,Y)$，

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**联合分布与边缘分布的联系**

联合分布可以唯一确定各边缘分布，但仅凭边缘分布一般不能确定联合分布，因为边缘分布没有完整描述分量之间的依赖关系。

例如，设 $X\sim B(1,\frac12)$。若 $Y=X$，或令 $Y$ 为与 $X$ 独立且同分布的随机变量，两种模型的 $X,Y$ 边缘分布完全相同，但分别有

$$
P(X=0,Y=0)=\frac12,
\qquad
P(X=0,Y=0)=\frac14.
$$

只有加入独立性等额外条件，才能进一步由边缘分布确定联合分布。

</div>
</div>

### 常见的两类二维随机变量

#### 二维离散型随机变量

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**联合分布律**

若 $(X,Y)$ 以概率 $1$ 取有限个或可数无穷个数对，则称其为二维离散型随机变量。设各分量的可能取值分别为 $x_i$、$y_j$，联合分布律为

$$
p_{ij}=P(X=x_i,\ Y=y_j).
$$

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

| $X\backslash Y$ | $y_1$ | $y_2$ | $\cdots$ | $P(X=x_i)$ |
| --- | --- | --- | --- | --- |
| $x_1$ | $p_{11}$ | $p_{12}$ | $\cdots$ | $p_{1\cdot}$ |
| $x_2$ | $p_{21}$ | $p_{22}$ | $\cdots$ | $p_{2\cdot}$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\ddots$ | $\vdots$ |
| $P(Y=y_j)$ | $p_{\cdot1}$ | $p_{\cdot2}$ | $\cdots$ | $1$ |

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**边缘分布律**

对联合分布律求行和或列和：

$$
P(X=x_i)=p_{i\cdot}=\sum_jp_{ij},
\qquad
P(Y=y_j)=p_{\cdot j}=\sum_ip_{ij}.
$$

可以记为：**保留哪个变量，就对另一个变量的所有取值求和**。

例如，若联合分布律为

| $X\backslash Y$ | $0$ | $1$ | $P(X=x)$ |
| --- | --- | --- | --- |
| $0$ | $\frac18$ | $\frac38$ | $\frac12$ |
| $1$ | $\frac14$ | $\frac14$ | $\frac12$ |
| $P(Y=y)$ | $\frac38$ | $\frac58$ | $1$ |

则 $X\sim B(1,\displaystyle\frac12)$、$Y\sim B(1,\displaystyle\frac58)$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件分布律**

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

还可用乘法关系恢复联合概率：

$$
p_{ij}=P(X=x_i\mid Y=y_j)\,p_{\cdot j}.
$$

这里的·代表任意取值，下同。

</div>
</div>

#### 二维连续型随机变量

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**联合概率密度**

若存在**非负**可积函数 $f(x,y)$，使

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

在满足相应连续性条件的点上，

$$
f(x,y)=\frac{\partial^2 F(x,y)}{\partial x\,\partial y}.
$$

对平面上的可测区域 $D$，

$$
P((X,Y)\in D)=\iint_D f(x,y)\,\mathrm dx\,\mathrm dy.
$$

计算时先画出密度非零区域，再与事件对应的区域取交集，依据交集写出积分限。联合密度的数值不是点概率，面积为 $0$ 的集合在这一模型中的概率为 $0$，例如点、直线以及通常的光滑曲线。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**边缘概率密度**

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件概率密度**

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

</div>
</div>

#### 常见的二维连续型随机变量的分布

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**二维均匀分布**

设平面区域 $D$ 的面积为 $S_D$，且 $0\lt S_D\lt +\infty$。若

$$
f(x,y)=
\begin{cases}
\displaystyle\frac1{S_D}, & (x,y)\in D,\\
0, & (x,y)\notin D,
\end{cases}
$$

则称 $(X,Y)$ 在 $D$ 上服从二维均匀分布。

对可测区域 $A$，

$$
P((X,Y)\in A)=\frac{\operatorname{Area}(A\cap D)}{S_D}.
$$

边缘密度由区域的截线长度决定：

$$
f_X(x)=\frac{\text{区域 }D\text{ 在横坐标 }x\text{ 处的竖直截线总长度}}{S_D},
$$

$$
f_Y(y)=\frac{\text{区域 }D\text{ 在纵坐标 }y\text{ 处的水平截线总长度}}{S_D}.
$$

所以二维均匀分布的边缘分布不一定均匀。前述三角形 $0\lt x\lt y\lt 1$ 上的均匀分布，其边缘密度就不是常数。

若 $D=(a,b)\times(c,d)$ 为边平行于坐标轴的矩形，则

$$
X\sim U(a,b),\qquad Y\sim U(c,d),
$$

且 $X,Y$ 相互独立。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**二维正态分布**

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

其中 $\mu_1,\mu_2\in\mathbb R$、$\sigma_1,\sigma_2>0$、$-1\lt \rho\lt 1$，则称 $(X,Y)$ 服从非退化的二维正态分布，记为

$$
(X,Y)\sim N(\mu_1,\mu_2;\sigma_1^2,\sigma_2^2;\rho).
$$

$\mu_1,\mu_2$ 为两个分量的均值，$\sigma_1^2,\sigma_2^2$ 为方差，$\rho$ 为相关系数。

它具有以下重要结论：

- **边缘分布均为正态分布**：

$$
X\sim N(\mu_1,\sigma_1^2),
\qquad
Y\sim N(\mu_2,\sigma_2^2).
$$

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

仅知道两个边缘分布都为正态分布，不能推出联合分布是二维正态分布；还需要联合结构的信息。$\lvert\rho\rvert=1$ 对应退化情形，不能代入上述含 $\sqrt{1-\rho^2}$ 分母的密度公式。

</div>
</div>

### 随机变量的相互独立性

#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

若对任意实数 $x,y$，事件 $\{X\le x\}$ 与 $\{Y\le y\}$ 相互独立，即

$$
P(X\le x,\ Y\le y)=P(X\le x)P(Y\le y),
$$

则称随机变量 $X,Y$ **相互独立**。

等价地，对任意博雷尔（Borel）集 $A,B$，

$$
P(X\in A,\ Y\in B)=P(X\in A)P(Y\in B).
$$

这把上一章“两个事件的独立”推广为“由两个随机变量各自确定的任意事件均独立”。

对 $n$ 个随机变量，相互独立要求对任意实数 $x_1,\ldots,x_n$，

$$
P(X_1\le x_1,\ldots,X_n\le x_n)
=\prod_{i=1}^nP(X_i\le x_i).
$$

当 $n\ge3$ 时，任意两个分量独立称为两两独立；两两独立一般不能推出相互独立。

</div>
</div>

#### 相互独立的充要条件

<div class="card" markdown="1">
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

<div class="card" markdown="1">
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

<div class="card" markdown="1">
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

<div class="card" markdown="1">
<div class="card-body" markdown="1">

若一组随机变量 $X_1, X_2, \dots, X_n$ 相互独立，则其中任意 $k~(2\le k\le n)$ 个随机变量也相互独立。

!!! Note "是不是有点像线性代数中，向量组的整体与部分的关系？"

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**分别作函数变换仍独立**

若 $X,Y$ 独立，$g,h$ 为可测函数，则 $g(X)$ 与 $h(Y)$ 也独立。例如，$X^2$ 与 $\lvert Y\rvert$ 独立。

更一般地，若 $X_1,\ldots,X_n$ 相互独立，将它们划分为不相交的若干组，并分别对每组作可测函数变换，得到的随机变量仍相互独立。

这里要求不同组使用的原始变量不重叠。即使 $X,Y$ 独立，也不能直接断言 $X+Y$ 与 $X-Y$ 独立。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件分布等于对应边缘分布**

$X,Y$ 独立时，条件分布与对应的边缘分布一致。

离散型情形中，对任意满足 $p_{\cdot j}>0$ 的 $j$，

$$
P(X=x_i\mid Y=y_j)=P(X=x_i)
\quad\text{对所有 }i.
$$

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

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**判定步骤**

1. 确认给出的是联合分布函数、联合分布律还是联合密度。
2. 求出两个边缘分布。
3. 使用对应的乘积判据；证明独立需要满足整个判据，否定独立只需找到有效的反例。

---

离散型中，前面的分布表满足

$$
p_{00}=\frac18,\qquad
p_{0\cdot}p_{\cdot0}=\frac12\times\frac38=\frac3{16},
$$

两者不等，所以 $X,Y$ 不独立。

连续型中，密度的代数表达式能写成乘积还不够，必须同时考虑其非零区域。对

$$
f(x,y)=2\,\mathbf1_{\{0\lt x\lt y\lt 1\}},
$$

虽然区域内部密度为常数，但该区域不是两个分量取值区间的笛卡尔积；例如在 $0\lt y\lt x\lt 1$ 上，联合密度为 $0$，而边缘密度的乘积 $4y(1-x)>0$，所以不独立。

反之，即使非零区域是矩形，也仍需检验密度的乘积关系，不能仅凭区域形状判定独立。对于连续密度，在单个点上不相等也不足以否定独立，应依据几乎处处判据或找到概率事件的反例。

</div>
</div>

### 多维随机变量函数的分布

#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**由随机向量构造新的随机变量**

已知随机向量 $(X_1,\ldots,X_n)$ 的联合分布，令

$$
Z=g(X_1,\ldots,X_n),
$$

其中 $g$ 为可测函数，则 $Z$ 是一个随机变量。常见情形有和、差、积、商、最大值与最小值，例如

$$
Z=X+Y,\qquad Z=XY,\qquad
Z=\max(X,Y),\qquad Z=\min(X,Y).
$$

一般必须利用联合分布求 $Z$ 的分布，仅有各边缘分布通常不够。若已知各分量独立，就可以先用边缘分布构造联合分布。

若同时定义 $U=g(X,Y)$、$V=h(X,Y)$，则需要求新的随机向量 $(U,V)$ 的联合分布。

</div>
</div>

#### 求法

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**分布函数法（定义法）**

对 $Z=g(X,Y)$，

$$
F_Z(z)=P(Z\le z)=P(g(X,Y)\le z).
$$

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

---

例如，若 $X,Y$ 独立且都服从 $U(0,1)$，令 $Z=X+Y$，则联合密度在单位正方形内等于 $1$。事件 $X+Y\le z$ 对应直线下方区域，因此

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**最大值与最小值的分布**

令 $M=\max(X,Y)$、$L=\min(X,Y)$。不要求独立时，

$$
F_M(z)=P(X\le z,Y\le z)=F(z,z),
$$

$$
F_L(z)=1-P(X>z,Y>z)
=F_X(z)+F_Y(z)-F(z,z).
$$

若 $X,Y$ 独立，则

$$
F_M(z)=F_X(z)F_Y(z),
$$

$$
F_L(z)=1-[1-F_X(z)][1-F_Y(z)].
$$

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**和的分布**

若 $(X,Y)$ 具有联合密度，令 $Z=X+Y$，则

$$
f_Z(z)=\int_{-\infty}^{+\infty}f(x,z-x)\,\mathrm dx
=\int_{-\infty}^{+\infty}f(z-y,y)\,\mathrm dy.
$$

若 $X,Y$ 独立，则化为**卷积公式**：

$$
f_Z(z)=\int_{-\infty}^{+\infty}f_X(x)f_Y(z-x)\,\mathrm dx
=\int_{-\infty}^{+\infty}f_X(z-y)f_Y(y)\,\mathrm dy.
$$

它可由分布函数法推导：

$$
F_Z(z)=\int_{-\infty}^{+\infty}
\left[\int_{-\infty}^{z-x}f(x,y)\,\mathrm dy\right]\mathrm dx,
$$

在适当条件下对 $z$ 求导，即得到上述密度公式。使用卷积时，要同时满足 $x$ 与 $z-x$ 落在各自密度的有效范围内。

若 $X,Y$ 都以概率 $1$ 非负且相互独立，则对 $z>0$，

$$
f_Z(z)=\int_0^z f_X(x)f_Y(z-x)\,\mathrm dx,
$$

而 $z\lt 0$ 时密度为 $0$。

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**差、积、商的密度公式**

若 $(X,Y)$ 具有联合密度 $f$，则以下公式在几乎处处意义下成立；独立时可把联合密度换成两个边缘密度的乘积。

- **差 $Z=X-Y$**：

$$
f_Z(z)=\int_{-\infty}^{+\infty}f(z+y,y)\,\mathrm dy
=\int_{-\infty}^{+\infty}f(x,x-z)\,\mathrm dx.
$$

- **积 $Z=XY$**：

$$
f_Z(z)=\int_{x\ne0}\frac1{|x|}
f\left(x,\frac zx\right)\,\mathrm dx
=\int_{y\ne0}\frac1{|y|}
f\left(\frac zy, y\right)\,\mathrm dy.
$$

- **商 $Z=X/Y$**：

$$
f_Z(z)=\int_{-\infty}^{+\infty}|y|f(zy,y)\,\mathrm dy.
$$

联合具有密度时，$P(Y=0)=0$，所以商可在 $Y=0$ 的零概率事件上任意定义而不影响分布。

这些公式都可以通过变量替换推导。实际积分范围仍由原联合密度的非零区域决定，积的公式中 $x=0$ 附近若出现瑕积分，应按相应积分含义处理。

</div>
</div>

!!! Note "二维变换与雅可比公式"
    若定义 $U=g(X,Y)$、$V=h(X,Y)$，变换在相应区域内一一对应，具有连续可微的逆变换

    $$
    x=x(u,v),\qquad y=y(u,v),
    $$

    且雅可比行列式
    
    $$
    J = 
    \left |
    \begin{matrix}
    \dfrac{\partial u}{\partial x} & \dfrac{\partial u}{\partial y} \\[1.5ex]
    \dfrac{\partial v}{\partial x} & \dfrac{\partial v}{\partial y}
    \end{matrix}
    \right |
    $$
    
    非零，则在变换后的区域内，

    $$
    f_{U,V}(u,v)
    =f_{X,Y}(x(u,v),y(u,v))
    \left|\frac{\partial(x,y)}{\partial(u,v)}\right|.
    $$

    区域外密度为 $0$。若变换分段一一对应，应对所有有效逆分支的贡献求和。

    只需求一个函数 $Z=g(X,Y)$ 的分布时，可以选取一个辅助变量，将问题补成二维变换，求出联合密度后再对辅助变量积分。和、积、商的密度公式都可以用这一方法得到。

### 本章自测：多维随机变量及其分布

!!! example "自测题"

    **基础**

    1. 设 $X,Y\in\{0,1\}$，联合概率 $p_{00},p_{01},p_{10},p_{11}$ 依次为 $0.1,0.2,0.3,0.4$。求两个边缘分布、$P(X=1\mid Y=1)$、$P(X<Y)$，并判断独立性。
    2. 令 $G(t)$ 在 $t\le0$、$0<t<1$、$t\ge1$ 上分别为 $0,t,1$，已知联合分布函数 $F(x,y)=G(x)G(y)$。求边缘分布，并用联合分布函数计算 $P(1/4<X\le3/4,\ 1/3<Y\le2/3)$。

    **应用**

    3. 设联合密度为常数 $c$，有效区域为 $x>0,y>0,x+y<1$，区域外为零。求 $c$、两个边缘密度、$f_{Y\mid X}(y\mid x)$，并求 $P(X+Y<1/2)$。$X,Y$ 是否独立？
    4. 设 $(X,Y)\sim N(1,2;4,9;1/2)$。求 $Y\mid X=x$ 的分布以及 $2X-Y$ 的分布；若把相关系数改为零，能否断言独立？
    5. 设 $X,Y$ 独立且均服从 $\operatorname{Exp}(\lambda)$，其中 $\lambda>0$。用卷积求 $S=X+Y$ 的密度，并求 $P(S>t)$（$t\ge0$）。
    6. 设 $X,Y$ 独立且均服从 $U(0,1)$。求 $M=\max(X,Y)$、$L=\min(X,Y)$ 各自的分布函数与密度。$M,L$ 是否独立？

    **综合**

    7. 仍设 $X,Y$ 独立且均服从 $U(0,1)$。分别求差 $D=X-Y$ 与积 $W=XY$ 的密度，写出实际积分范围。
    8. 设 $X,Y$ 独立且均服从 $\operatorname{Exp}(1)$，令 $U=X+Y$、$V=X/(X+Y)$。求逆变换、雅可比行列式的绝对值及联合密度，判断 $U,V$ 是否独立。

    ??? success "参考"

        1. $P(X=0)=0.3$、$P(X=1)=0.7$；$P(Y=0)=0.4$、$P(Y=1)=0.6$。条件概率为 $0.4/0.6=2/3$，$P(X<Y)=0.2$。因 $p_{00}=0.1\ne0.3\times0.4$，不独立。
        2. 两边缘分布函数均为 $G$，所以各自服从 $U(0,1)$ 且独立。矩形概率为 $[G(3/4)-G(1/4)][G(2/3)-G(1/3)]=1/6$。
        3. $c=2$；$f_X(x)=2(1-x)$（$0<x<1$），$f_Y(y)=2(1-y)$（$0<y<1$），各自区间外为零。给定 $0<x<1$，条件密度为 $1/(1-x)$（$0<y<1-x$），其余为零；所求概率为 $1/4$。支持区域是三角形，且联合密度不等于边缘密度的乘积，故不独立。
        4. $Y\mid X=x\sim N(2+\frac34(x-1),27/4)$；$2X-Y\sim N(0,13)$。在联合二维正态的前提下，相关系数为零可以推出独立。
        5. 对 $s>0$，$f_S(s)=\int_0^s\lambda^2e^{-\lambda s}\,\mathrm dx=\lambda^2se^{-\lambda s}$，其余为零。积分得 $P(S>t)=e^{-\lambda t}(1+\lambda t)$。
        6. 在 $0<z<1$ 上，$F_M(z)=z^2$、$F_L(z)=2z-z^2$，密度分别为 $2z$、$2(1-z)$；左侧分布函数为零，右侧为一，区间外密度为零。它们不独立：$P(M\le1/2,L>1/2)=0$，但两个边缘事件的概率乘积为 $1/16$。
        7. 对差，积分中需 $0<x<1$ 且 $0<x-d<1$，故 $x\in(\max(0,d),\min(1,1+d))$，得到 $f_D(d)=1-|d|$（$|d|<1$），其余为零。对积，当 $0<w<1$ 时，$x\in(w,1)$，故 $f_W(w)=\int_w^1\mathrm dx/x=-\ln w$，其余为零。
        8. 逆变换为 $x=uv$、$y=u(1-v)$，有效区域为 $u>0,0<v<1$，且 $|\partial(x,y)/\partial(u,v)|=u$。因此 $f_{U,V}(u,v)=ue^{-u}$，区域外为零；它分解为 $f_U(u)=ue^{-u}$ 与 $f_V(v)=1$ 在各自区间上的乘积，所以独立，且 $V\sim U(0,1)$。

## 随机变量的数字特征

### 一维随机变量的数字特征

#### 数学期望

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**概念**

数学期望描述随机变量取值的**平均水平**或分布的**重心位置**，记为 $E(X)$ 或 $\mathbb E[X]$。它由随机变量的分布决定，不一定是随机变量实际能够取到的值。

本章说“期望存在”时，通常指期望为有限实数，即满足**绝对可积**条件 $E(|X|)\lt+\infty$。

对于离散型随机变量，若 $P(X=x_k)=p_k$，且

$$
\sum_k |x_k|p_k\lt+\infty,
$$

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

例如，均匀骰子的点数 $X$ 满足

$$
E(X)=\frac{1+2+3+4+5+6}{6}=\frac72.
$$

虽然骰子不可能掷出 $3.5$ 点，但其数学期望仍为 $3.5$。期望也不等于某次观测值或有限次观测的样本平均值。

不能仅凭形式上的正负抵消判定期望存在。对于正负两部分积分均发散的情形，即使对称积分的主值存在，也不能把它当作数学期望。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**随机变量函数的期望**

设 $Y=g(X)$。求 $E(g(X))$ 时，可以直接利用 $X$ 的分布，一般不必先求出 $Y$ 的分布。

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**性质**

以下涉及的期望均假定存在。

- **常数的期望**：$E(c)=c$。
- **线性性质**：对常数 $a_i$、$b$，

$$
E\left(\sum_{i=1}^n a_iX_i+b\right)
=\sum_{i=1}^n a_iE(X_i)+b.
$$

线性性质**不要求随机变量独立**。特别地，$E(aX+b)=aE(X)+b$。

- **非负性与单调性**：若 $X\ge0$ 几乎处处，则 $E(X)\ge0$；若 $X\le Y$ 几乎处处，则 $E(X)\le E(Y)$。
- **绝对值不等式**：

$$
|E(X)|\le E(|X|).
$$

- **独立变量的乘积期望**：若 $X,Y$ 独立且都可积，则

$$
E(XY)=E(X)E(Y).
$$

对有限个相互独立且可积的随机变量，同样有 $E(\prod_iX_i)=\prod_iE(X_i)$。没有独立性时，不能直接使用这一性质。

这里“几乎处处”表示相应关系以概率 $1$ 成立，允许在零概率事件上例外。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**示性随机变量与计数期望**

对事件 $A$，定义示性随机变量

$$
\mathbf1_A=
\begin{cases}
1, & A\text{ 发生},\\
0, & A\text{ 不发生}.
\end{cases}
$$

则

$$
E(\mathbf1_A)=P(A).
$$

若 $X$ 表示事件 $A_1,\ldots,A_n$ 中发生的事件个数，则

$$
X=\sum_{i=1}^n\mathbf1_{A_i},
\qquad
E(X)=\sum_{i=1}^nP(A_i).
$$

这一方法不要求事件独立，适合处理成功次数、命中个数等计数问题。

例如，从 $N$ 个个体中简单随机不放回抽取 $n$ 个，其中总体有 $M$ 个特征个体。令 $I_j$ 表示第 $j$ 次抽到特征个体，则每次抽取的边缘概率均为 $M/N$，所以特征个体总数 $X$ 满足

$$
E(X)=E\left(\sum_{j=1}^nI_j\right)
=\sum_{j=1}^n\frac MN=\frac{nM}{N}.
$$

</div>
</div>

#### 方差、标准差

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**概念**

设 $\mu=E(X)$。若 $E[(X-\mu)^2]$ 有限，则称

$$
D(X)=\operatorname{Var}(X)=E[(X-E(X))^2]
$$

为 $X$ 的**方差**，其非负平方根

$$
\sigma_X=\sqrt{D(X)}
$$

称为**标准差**。

方差衡量随机变量相对于其平均水平的离散程度。标准差与 $X$ 具有相同量纲，方差的量纲则是 $X$ 量纲的平方。

离散型与连续型的计算公式分别为

$$
D(X)=\sum_k(x_k-\mu)^2p_k,
$$

$$
D(X)=\int_{-\infty}^{+\infty}(x-\mu)^2f(x)\,\mathrm dx.
$$

有限方差等价于二阶矩 $E(X^2)\lt+\infty$；有限二阶矩保证期望有限，但期望有限不一定保证方差有限。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**计算公式与性质**

展开平方可得最常用的计算公式：

$$
D(X)=E(X^2)-[E(X)]^2.
$$

因此，计算方差通常先求 $E(X)$、$E(X^2)$，再相减。例如，当 $X\sim U(0,1)$ 时，

$$
D(X)=\frac13-\left(\frac12\right)^2=\frac1{12}.
$$

主要性质包括：

- **非负性**：$D(X)\ge0$。
- **零方差的判定**：

$$
D(X)=0\iff P(X=E(X))=1.
$$

- **常数的方差**：$D(c)=0$。
- **线性变换**：

$$
D(aX+b)=a^2D(X),
\qquad
\sigma_{aX+b}=|a|\sigma_X.
$$

平移不改变方差；缩放使方差乘以系数的平方（方差的单位是原始数据单位的平方）。

- **独立变量之和的方差**：若 $X_1,\ldots,X_n$ 相互独立且方差有限，则

$$
D\left(\sum_{i=1}^n a_iX_i\right)
=\sum_{i=1}^n a_i^2D(X_i).
$$

事实上，两两不相关已足以保证这一等式。一般情形下必须考虑协方差，不能直接把方差相加。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**标准化与平方偏差**

若 $0\lt D(X)=\sigma^2\lt+\infty$，令

$$
Z=\frac{X-\mu}{\sigma},
$$

则

$$
E(Z)=0,\qquad D(Z)=1.
$$

标准化只保证均值为 $0$、方差为 $1$，不能据此断言 $Z$ 服从标准正态分布。只有当原变量服从正态分布时，才有对应的正态标准化结论。

对任意常数 $c$，

$$
E[(X-c)^2]=D(X)+[E(X)-c]^2.
$$

因此，当 $c=E(X)$ 时，平均平方偏差最小，最小值为 $D(X)$。

</div>
</div>

#### 常见分布的期望与方差

<div class="card" markdown="1">
<div class="card-body" markdown="1">

下表沿用前面章节的参数约定：

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

-   几何分布若改为记录“首次成功前的失败次数” $Y=X-1$，则

    $$
    E(Y)=\frac{1-p}{p},
    \qquad
    D(Y)=\frac{1-p}{p^2}.
    $$

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

        由于 $X=\tau Z$ 且 $\tau>0$，有 $|X|=\tau|Z|$。由期望的线性性质，得到

        $$
        E(|X|)=\tau E(|Z|)=\tau\sqrt{\frac{2}{\pi}}.
        $$

</div>
</div>

### 二维随机变量的数字特征

#### 数学期望

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**分量的期望与随机向量的期望**

对随机向量 $(X,Y)$，若两个分量的期望存在，可将其期望写为

$$
E[(X,Y)]=(E(X),E(Y)).
$$

计算每个分量的期望，可以使用边缘分布，也可以直接使用联合分布。

离散型情形，设 $p_{ij}=P(X=x_i,Y=y_j)$，则

$$
E(X)=\sum_i x_ip_{i\cdot}=\sum_i\sum_jx_ip_{ij},
$$

$$
E(Y)=\sum_j y_jp_{\cdot j}=\sum_i\sum_jy_jp_{ij}.
$$

连续型情形，设联合密度为 $f(x,y)$，则

$$
E(X)=\int_{-\infty}^{+\infty}xf_X(x)\,\mathrm dx
=\iint_{\mathbb R^2}xf(x,y)\,\mathrm dx\,\mathrm dy,
$$

$$
E(Y)=\int_{-\infty}^{+\infty}yf_Y(y)\,\mathrm dy
=\iint_{\mathbb R^2}yf(x,y)\,\mathrm dx\,\mathrm dy.
$$

求某个分量自身的数字特征时，使用它的边缘分布已经足够。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**二维随机变量函数的期望**

令 $Z=g(X,Y)$。若 $E(|g(X,Y)|)\lt+\infty$，则可以直接利用联合分布计算：

$$
E(g(X,Y))=\sum_i\sum_jg(x_i,y_j)p_{ij}
$$

或

$$
E(g(X,Y))=\iint_{\mathbb R^2}g(x,y)f(x,y)\,\mathrm dx\,\mathrm dy.
$$

积分区域实际取联合密度的非零区域。一般不必先求出 $Z$ 的分布。

特别地，

$$
E(XY)=\sum_i\sum_jx_iy_jp_{ij}
$$

或

$$
E(XY)=\iint_{\mathbb R^2}xyf(x,y)\,\mathrm dx\,\mathrm dy.
$$

与 $E(X)$、$E(Y)$ 不同，$E(XY)$ 一般需要联合分布的信息；只有在满足独立性等相应条件时，才能把它写成 $E(X)E(Y)$。

</div>
</div>

!!! Example "计算示例"
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

    由期望的线性性质，

    $$
    E(X+Y)=E(X)+E(Y)=1.
    $$

#### 协方差与相关系数

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**协方差的概念**

设 $X,Y$ 均具有有限二阶矩，则称

$$
\operatorname{Cov}(X,Y)
=E[(X-E(X))(Y-E(Y))]
$$

为 $X,Y$ 的**协方差**。

它描述两个变量相对于各自均值的共同变化方向。常用计算公式为

$$
\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y).
$$

- 协方差为正，表示两个中心化变量的乘积平均为正，通常体现同向变化。
- 协方差为负，通常体现反向变化。
- 协方差为零，称 $X,Y$ **不相关**。

协方差的量纲为两个变量量纲的乘积，其大小会受到单位选择的影响。因此，比较线性相关程度时通常采用无量纲的相关系数。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**协方差的性质**

对具有有限二阶矩的随机变量及常数 $a,b,c,d$，

$$
\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X),
$$

$$
\operatorname{Cov}(X,X)=D(X),
\qquad
\operatorname{Cov}(X,c)=0,
$$

$$
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
D(X+Y)=D(X)+D(Y)+2\operatorname{Cov}(X,Y),
$$

$$
D(X-Y)=D(X)+D(Y)-2\operatorname{Cov}(X,Y).
$$

若 $X,Y$ 不相关，则和与差的方差均为 $D(X)+D(Y)$（都是相加）。

推广到多个随机变量，

$$
D\left(\sum_{i=1}^n a_iX_i\right)
=\sum_{i=1}^n a_i^2D(X_i)
+2\sum_{i\lt j}a_ia_j\operatorname{Cov}(X_i,X_j).
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**相关系数的概念**

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

它衡量的是**线性相关程度**。$\rho_{XY}=0$ 表示不存在线性相关，并不排除其他依赖关系。

若某个变量方差为 $0$，则上述相关系数没有定义，不能直接把它赋值为 $0$；不过，此时它与另一个有限二阶矩变量的协方差为 $0$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**相关系数的性质**

由柯西—施瓦茨不等式，

$$
|\operatorname{Cov}(X,Y)|\le\sqrt{D(X)D(Y)},
$$

从而

$$
-1\le\rho_{XY}\le1.
$$

在方差有限且均为正的前提下：

- $\rho_{XY}=0$ 当且仅当 $\operatorname{Cov}(X,Y)=0$。
- $\rho_{XY}=1$ 当且仅当存在常数 $a>0,b$，使 $P(Y=aX+b)=1$。
- $\rho_{XY}=-1$ 当且仅当存在常数 $a\lt0,b$，使 $P(Y=aX+b)=1$。

所以 $|\rho_{XY}|=1$ 对应以概率 $1$ 成立的非退化线性关系，而不只是“相关性较强”。

对于非零常数 $a,c$，

$$
\rho_{aX+b,\ cY+d}
=\frac{ac}{|ac|}\rho_{XY}.
$$

平移不改变相关系数，正比例缩放不改变相关系数；若恰有一个变量乘以负数，则相关系数变号。

</div>
</div>

!!! Example "协方差与相关系数的计算示例"
    继续使用三角形区域 $0\lt x\lt y\lt1$ 上的联合密度 $f(x,y)=2$。已有

    $$
    E(X)=\frac13,\qquad E(Y)=\frac23,\qquad E(XY)=\frac14.
    $$

    再计算

    $$
    E(X^2)=\int_0^1\int_0^y2x^2\,\mathrm dx\,\mathrm dy=\frac16,
    $$

    $$
    E(Y^2)=\int_0^1\int_0^y2y^2\,\mathrm dx\,\mathrm dy=\frac12.
    $$

    于是

    $$
    D(X)=\frac16-\frac19=\frac1{18},
    \qquad
    D(Y)=\frac12-\frac49=\frac1{18},
    $$

    $$
    \operatorname{Cov}(X,Y)=\frac14-\frac13\cdot\frac23=\frac1{36},
    $$

    $$
    \rho_{XY}
    =\frac{1/36}{\sqrt{(1/18)(1/18)}}=\frac12.
    $$

    因此，两个变量正相关但不是完全线性相关，并且

    $$
    D(X+Y)=\frac1{18}+\frac1{18}+2\cdot\frac1{36}=\frac16.
    $$

### 独立性与不相关性的判定、切比雪夫不等式

#### 一般用分布判定独立性

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**独立性的分布判据**

判断两个随机变量是否独立，应根据给出的分布类型使用对应条件：

| 已知信息 | 独立的充要条件 |
| --- | --- |
| 联合分布函数 | $F(x,y)=F_X(x)F_Y(y)$ 对所有 $x,y$ 成立 |
| 联合分布律 | $p_{ij}=p_{i\cdot}p_{\cdot j}$ 对所有 $i,j$ 成立 |
| 联合概率密度 | $f(x,y)=f_X(x)f_Y(y)$ 几乎处处成立 |

证明独立需要满足整个判据；证明不独立，只需找到不符合判据的有效反例。连续型的密度判据应考虑非零区域及“几乎处处”的要求，不能只比较某一个点的密度值。

这三个判据直接刻画联合分布，无需先计算数字特征。

</div>
</div>

!!! note "结论速记"
    若 $Y=g(X)$ 几乎处处成立，其中 $g$ 为可测函数，且 $Y$ 不是几乎处处为常数，则 $X,Y$ 一定不独立。交换 $X,Y$ 后同样成立。简单来说，如果两个随机变量之间有非平凡的确定函数关系，则它们一定不独立。

    ??? success "推导"

        用反证法。假设 $X,Y$ 独立。由于 $Y$ 不是几乎处处为常数，可选取某个实数 $t$，使得

        $$
        0\lt p=P(Y\le t)\lt1.
        $$

        令 $A=\{g(X)\le t\}$、$B=\{Y\le t\}$。事件 $A$ 只由 $X$ 决定，事件 $B$ 只由 $Y$ 决定，因此由 $X,Y$ 的独立性，有

        $$
        P(A\cap B)=P(A)P(B).
        $$

        另一方面，由 $Y=g(X)$ 几乎处处成立，事件 $A,B$ 除去一个概率为 $0$ 的集合外相同，故

        $$
        P(A)=P(B)=P(A\cap B)=p.
        $$

        于是 $p=p^2$，只能有 $p=0$ 或 $p=1$，与 $0\lt p\lt1$ 矛盾。因此 $X,Y$ 不独立。

        这里“非平凡”要求 $g(X)$ 不是几乎处处为常数，仅要求函数 $g$ 本身不是常函数并不足够。若 $Y=c$ 几乎处处成立，则 $Y$ 与任意随机变量 $X$ 都独立，不能套用上述结论。

#### 一般用数字特征判定不相关性

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**不相关性的等价判据**

若 $X,Y$ 具有有限二阶矩，则以下条件等价：

$$
X,Y\text{ 不相关}
\iff\operatorname{Cov}(X,Y)=0
\iff E(XY)=E(X)E(Y).
$$

还等价于

$$
D(X+Y)=D(X)+D(Y)
$$

或

$$
D(X-Y)=D(X)+D(Y).
$$

若两个方差均为正，也等价于 $\rho_{XY}=0$。

实际计算时，通常先求 $E(X)$、$E(Y)$、$E(XY)$，比较 $E(XY)$ 与 $E(X)E(Y)$；仅判断是否不相关时，不一定需要计算相关系数的分母。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**独立与不相关的关系**

在有限二阶矩条件下，

$$
X,Y\text{ 独立}\Longrightarrow X,Y\text{ 不相关}.
$$

其逆命题一般不成立。

| 关系 | 是否可能 | 说明 |
| --- | --- | --- |
| 独立且不相关 | 可能 | 例如两枚独立骰子的点数 |
| 不独立但不相关 | 可能 | 非线性依赖可能使协方差仍为 $0$ |
| 不独立且相关 | 可能 | 协方差非零可直接否定独立 |
| 独立但相关 | 不可能 | 此处假定有限二阶矩 |

因此，可以用协方差非零证明不独立，但不能仅凭协方差为零证明独立。

??? Question "不相关推出独立还需要什么条件（特殊情形）？"
    
    -   **联合服从二维正态分布**：此时独立与不相关等价。必须有联合正态的前提，不能只知道两个边缘分布各自为正态。
    -   **两个变量都服从 0—1 分布**：此时 $E(XY)=P(X=1,Y=1)$。若不相关，令 $p=P(X=1)$、$q=P(Y=1)$，则

        $$
        P(X=1,Y=1)=pq.
        $$

        其余三个联合概率由边缘概率确定，分别为 $p(1-q)$、$(1-p)q$、$(1-p)(1-q)$，因此整个联合分布律均满足乘积关系，两个变量独立。

!!! Example "不相关但不独立的例子"
    设 $X\sim U(-1,1)$，令 $Y=X^2$。由对称性，

    $$
    E(X)=E(X^3)=0,
    $$

    所以

    $$
    \operatorname{Cov}(X,Y)=E(X^3)-E(X)E(X^2)=0.
    $$

    但令

    $$
    A=\{|X|\le\frac 12\},\qquad B=\{Y\le\frac 14\},
    $$

    则 $A=B$，且 $P(A)=P(B)=\displaystyle\frac 12$，从而

    $$
    P(A\cap B)=\frac12\ne\frac14=P(A)P(B).
    $$

    所以 $X,Y$ 不独立。
    
    这个例子说明：完全由另一个变量确定的非线性关系，也可能具有零相关系数。

</div>
</div>

#### 切比雪夫不等式

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**公式与适用条件**

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

这些界对所有具有有限方差的分布成立，不要求正态分布。$k>1$ 时才给出正的中心区间概率下界；当右侧超出概率本身的取值范围时，应结合 $0\le P\le1$ 理解。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**推导思路**

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

</div>
</div>

!!! Example "切比雪夫不等式的应用"

    已知期望和方差、但不知道具体分布时，可以用切比雪夫不等式给出偏离均值的概率上界或落在均值附近的概率下界。

    ---

    例如，若 $E(X)=10$、$D(X)=4$，则

    $$
    P(|X-10|\ge6)\le\frac4{36}=\frac19,
    $$

    因此

    $$
    P(4\lt X\lt16)\ge\frac89.
    $$

    这里只得到一个保证成立的界，不能据此断言概率恰好等于 $8/9$。若已知具体分布，则通常可用分布函数获得更精确的概率。

    若希望保证

    $$
    P(|X-\mu|\lt\varepsilon)\ge1-\alpha,
    \qquad 0\lt\alpha\lt1,
    $$

    由切比雪夫不等式可知，一个充分条件是

    $$
    \varepsilon\ge\frac{\sigma}{\sqrt\alpha}.
    $$

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**样本平均值的集中程度**

若 $X_1,\ldots,X_n$ 相互独立、具有相同期望 $\mu$ 与有限方差 $\sigma^2$，令

$$
\overline X_n=\frac1n\sum_{i=1}^nX_i.
$$

则

$$
E(\overline X_n)=\mu,
\qquad
D(\overline X_n)=\frac{\sigma^2}{n}.
$$

因此，对任意 $\varepsilon>0$，

$$
P(|\overline X_n-\mu|\ge\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}.
$$

随着 $n$ 增大，样本平均值偏离总体均值超过固定误差的概率上界趋于 $0$。这是利用数字特征研究大数定律的一种基本思路。

</div>
</div>

### 本章自测：随机变量的数字特征

!!! example "自测题"

    **基础**

    1. $X$ 取 $-1,0,2$ 的概率分别为 $1/4,1/2,1/4$。求 $E(X)$、$E(X^2)$、$D(X)$ 和 $E[(X-1)^2]$。
    2. 已知 $E(X)=2$、$D(X)=3$，求 $E(5-2X)$、$D(5-2X)$ 和 $E(X^2)$。判断 $E(X^2)=[E(X)]^2$ 是否总成立。

    **应用**

    3. 对 $X\sim B(20,0.3)$、$Y\sim P(4)$、$T\sim\operatorname{Exp}(2)$，分别求期望与方差。另从十件产品（三件次品）中不放回抽四件，求次品数的期望与方差。
    4. 设 $X,Y$ 独立，$E(X)=1,E(Y)=2,D(X)=2,D(Y)=3$。求 $E(XY)$、$D(2X-Y)$、$\operatorname{Cov}(X+Y,X-Y)$，判断 $X+Y$ 与 $X-Y$ 是否不相关。
    5. 将六个可区分的物品独立、等概率地放入三个盒子。令 $K$ 为空盒数。用示性变量求 $E(K)$，进一步求 $D(K)$。
    6. 设 $E(X)=10$、$D(X)=4$。用切比雪夫不等式给出 $P(|X-10|\ge5)$ 的上界，以及 $P(5<X<15)$ 的下界。能否把所得界当作精确概率？

    **综合**

    7. 设 $X\sim U(-1,1)$、$Y=X^2$。求 $E(X),E(Y),D(X),D(Y),\operatorname{Cov}(X,Y)$ 及相关系数，并用具体事件证明二者不独立。
    8. 已知 $E(X)=1,E(Y)=2,D(X)=4,D(Y)=9$，相关系数为 $1/3$。令 $W=X-aY$，求使 $D(W)$ 最小的 $a$、最小方差及此时的 $E(W)$。此时 $W,Y$ 是否不相关？能否进一步断言独立？

    ??? success "参考"

        1. $E(X)=1/4$、$E(X^2)=5/4$、$D(X)=19/16$；$E[(X-1)^2]=E(X^2)-2E(X)+1=7/4$。
        2. 依次为 $1,12,7$。等式一般不成立；在二阶矩有限时，它等价于 $D(X)=0$。
        3. 三者的“期望、方差”分别为 $(6,4.2)$、$(4,4)$、$(1/2,1/4)$。超几何变量的期望为 $4\times3/10=6/5$，方差为 $4(3/10)(7/10)(6/9)=14/25$。
        4. 依次为 $2,11,-1$。最后一个结果来自 $D(X)-D(Y)$，不为零，所以两者相关。
        5. 令 $I_j$ 表示第 $j$ 个盒子为空，$K=\sum_{j=1}^3I_j$。记 $p=(2/3)^6$、$q=(1/3)^6$，则 $E(K)=3p=64/243$。任意两盒同时为空的概率为 $q$，故

            $$
            D(K)=3p(1-p)+6(q-p^2).
            $$

            各盒是否为空并不独立，不能遗漏协方差项。

        6. 上界为 $4/25$；下界为 $1-4/25=21/25$。这是对符合所给矩条件的分布都适用的界，不是精确概率。
        7. 由对称性及积分，$E(X)=0,E(Y)=1/3,D(X)=1/3,D(Y)=1/5-1/9=4/45$，协方差和相关系数均为零。令 $A=\{|X|\le1/2\}$、$B=\{Y\le1/4\}$，则 $A=B$，$P(AB)=1/2\ne P(A)P(B)=1/4$，故不独立。
        8. $\operatorname{Cov}(X,Y)=(1/3)\cdot2\cdot3=2$，故 $D(W)=4+9a^2-4a$，在 $a=2/9$ 时最小为 $32/9$，此时 $E(W)=5/9$，且 $\operatorname{Cov}(W,Y)=2-9a=0$。仅凭这些矩条件不能推出独立；若另有联合正态假设，才可利用相应结论。

## 大数定律与中心极限定理
### 依概率收敛

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**概念**

设 $X_1,X_2,\ldots$ 与 $X$ 定义在同一概率空间上。若对任意 $\varepsilon>0$，都有

$$
\lim_{n\to\infty}P(|X_n-X|\ge\varepsilon)=0,
$$

则称随机变量序列 $\{X_n\}$ **依概率收敛**于 $X$，记为

$$
X_n\xrightarrow{P}X.
$$

等价地，对任意 $\varepsilon>0$，

$$
\lim_{n\to\infty}P(|X_n-X|\lt\varepsilon)=1.
$$

定义中的“$\ge\varepsilon$”也可换成“$>\varepsilon$”，因为要求对每一个正的 $\varepsilon$ 都成立。

若极限为常数 $a$，则写为 $X_n\xrightarrow{P}a$。其含义是：当 $n$ 足够大时，$X_n$ 与 $a$ 相差超过任意固定误差的概率可以任意小。

依概率收敛不表示每次观测都更接近极限，也不要求误差随 $n$ 单调减小；它描述的是误差事件的概率变化。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**常用性质**

若 $X_n\xrightarrow{P}a$、$Y_n\xrightarrow{P}b$，其中 $a,b$ 为有限常数，则

$$
X_n+Y_n\xrightarrow{P}a+b,
\qquad
X_nY_n\xrightarrow{P}ab.
$$

当 $b\ne0$ 时，若比值已定义，则

$$
\frac{X_n}{Y_n}\xrightarrow{P}\frac ab.
$$

若 $Y_n$ 可能等于 $0$，可以在该事件上为比值指定任意有限值；由于 $b\ne0$，其概率趋于 $0$，不影响上述结论。这些运算性质不要求 $X_n$ 与 $Y_n$ 独立。

更一般地，若 $g$ 在 $a$ 处连续，则

$$
X_n\xrightarrow{P}a
\quad\Longrightarrow\quad
g(X_n)\xrightarrow{P}g(a).
$$

例如，若 $X_n\xrightarrow{P}2$，则 $X_n^2\xrightarrow{P}4$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**利用数字特征判定**

若 $E(X_n)\to a$ 且 $D(X_n)\to0$，则

$$
E[(X_n-a)^2]=D(X_n)+[E(X_n)-a]^2\to0.
$$

因而对任意 $\varepsilon>0$，

$$
P(|X_n-a|\ge\varepsilon)
\le\frac{E[(X_n-a)^2]}{\varepsilon^2}\to0,
$$

所以 $X_n\xrightarrow{P}a$。

这是用切比雪夫不等式及其平方偏差形式证明依概率收敛的常见方法，也是下面切比雪夫大数定律的证明基础。

</div>
</div>

### 大数定律
#### 切比雪夫大数定律

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件与结论**

设 $X_1,X_2,\ldots$ **两两不相关**，各自具有有限方差，且方差存在统一上界：存在常数 $C\lt+\infty$，使对所有 $i$ 都有

$$
D(X_i)\le C.
$$

则

$$
\frac1n\sum_{i=1}^nX_i
-\frac1n\sum_{i=1}^nE(X_i)
\xrightarrow{P}0.
$$

即大量随机变量的平均值，依概率接近它们的期望的平均值。

两两独立可以推出两两不相关，因此教材中常用的“两两独立且方差一致有界”版本也是上述定理的特例。不要求各变量同分布，也不要求它们具有相同的期望。

若进一步有 $E(X_i)=\mu$，则

$$
\overline X_n=\frac1n\sum_{i=1}^nX_i\xrightarrow{P}\mu.
$$

若各期望不相同，但 $\frac1n\sum_{i=1}^nE(X_i)\to a$，也可得 $\overline X_n\xrightarrow{P}a$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**证明与更一般的方差条件**

令

$$
T_n=\frac1n\sum_{i=1}^n[X_i-E(X_i)].
$$

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
\le\frac{C}{n\varepsilon^2}\to0.
$$

事实上，统一上界只是便于使用的充分条件。上述证明只需

$$
\frac1{n^2}\sum_{i=1}^nD(X_i)\to0
$$

即可。不能把“每个方差都有限”直接替换为“方差一致有界”；有限方差可能随 $i$ 增大而迅速增长。

</div>
</div>

#### 伯努利大数定律

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件与结论**

独立重复进行同一个试验，事件 $A$ 在每次试验中发生的概率恒为 $p$。令 $S_n$ 表示前 $n$ 次试验中 $A$ 发生的次数，则

$$
\frac{S_n}{n}\xrightarrow{P}p.
$$

也就是对任意 $\varepsilon>0$，

$$
\lim_{n\to\infty}
P\left(\left|\frac{S_n}{n}-p\right|\ge\varepsilon\right)=0.
$$

这说明**频率依概率收敛于概率**，为用大量独立重复试验的频率估计概率提供了理论依据。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**示性变量表示与误差界**

设

$$
I_i=
\begin{cases}
1, & \text{第 }i\text{ 次试验中 }A\text{ 发生},\\
0, & \text{第 }i\text{ 次试验中 }A\text{ 不发生}.
\end{cases}
$$

则 $I_i$ 独立同分布，且

$$
S_n=\sum_{i=1}^nI_i,\qquad E(I_i)=p,\qquad D(I_i)=p(1-p).
$$

因此伯努利大数定律是切比雪夫大数定律的一个特例，并有

$$
P\left(\left|\frac{S_n}{n}-p\right|\ge\varepsilon\right)
\le\frac{p(1-p)}{n\varepsilon^2}
\le\frac1{4n\varepsilon^2}.
$$

若希望该误差概率不超过 $\alpha$，其中 $0\lt\alpha\lt1$，一个不依赖未知 $p$ 的充分条件为

$$
n\ge\frac1{4\alpha\varepsilon^2}.
$$

这是保守的充分条件，不是达到目标所必需的最小试验次数。

频率收敛于概率不意味着下一次试验会“补偿”之前的偏差。独立试验中，下一次事件发生的概率仍为 $p$。

</div>
</div>

#### 辛钦大数定律

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件与结论**

设 $X_1,X_2,\ldots$ **相互独立、同分布**，且具有有限数学期望

$$
E(X_i)=\mu,
\qquad E(|X_i|)\lt+\infty.
$$

则

$$
\overline X_n=\frac1n\sum_{i=1}^nX_i\xrightarrow{P}\mu.
$$

与切比雪夫大数定律的常见条件相比，辛钦大数定律不要求方差有限，但要求独立同分布。

因此，遇到独立同分布、期望有限而方差无穷的变量时，仍可以用辛钦大数定律说明样本平均值的依概率收敛，但不能直接使用需要有限方差的切比雪夫证明。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**随机变量函数的平均值**

若 $X_1,X_2,\ldots$ 独立同分布，$g$ 为可测函数，且 $E(|g(X_1)|)\lt+\infty$，则 $g(X_i)$ 也独立同分布，所以

$$
\frac1n\sum_{i=1}^ng(X_i)\xrightarrow{P}E(g(X_1)).
$$

例如，若 $E(X_1^2)\lt+\infty$，则

$$
\frac1n\sum_{i=1}^nX_i^2\xrightarrow{P}E(X_1^2).
$$

结合 $\overline X_n\xrightarrow{P}\mu$ 及连续函数的收敛性质，可得

$$
\frac1n\sum_{i=1}^n(X_i-\overline X_n)^2
=\frac1n\sum_{i=1}^nX_i^2-\overline X_n^2
\xrightarrow{P}D(X_1).
$$

这说明样本的平均平方偏差可以依概率逼近总体方差。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**三种大数定律的比较**

| 定律 | 常用条件 | 结论 |
| --- | --- | --- |
| 切比雪夫大数定律 | 两两不相关、方差一致有界；也常使用两两独立版本 | 平均值与期望的平均值之差依概率趋于 $0$ |
| 伯努利大数定律 | 独立重复的伯努利试验，成功概率恒为 $p$ | 频率 $S_n/n$ 依概率趋于 $p$ |
| 辛钦大数定律 | 独立同分布，期望有限 | 样本平均值依概率趋于总体期望 |

本节这些结论采用依概率收敛的形式，属于弱大数定律。独立同分布且方差有限时，可以同时满足切比雪夫与辛钦定律的条件；仅有有限期望时，则优先考虑辛钦定律。

</div>
</div>

### 中心极限定理
#### 列维—林德伯格定理

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件与结论**

设 $X_1,X_2,\ldots$ **相互独立、同分布**，且

$$
E(X_i)=\mu,\qquad D(X_i)=\sigma^2,
\qquad 0\lt\sigma^2\lt+\infty.
$$

令 $S_n=\sum_{i=1}^nX_i$，则标准化的和

$$
Z_n=\frac{S_n-n\mu}{\sigma\sqrt n}
=\frac{\sqrt n(\overline X_n-\mu)}{\sigma}
$$

依分布收敛于标准正态分布，记为

$$
Z_n\xrightarrow{d}N(0,1).
$$

这里的列维—林德伯格定理指独立同分布的中心极限定理。展开为分布函数形式，即对任意实数 $x$，

$$
\lim_{n\to\infty}
P\left(\frac{S_n-n\mu}{\sigma\sqrt n}\le x\right)
=\Phi(x),
$$

其中 $\Phi$ 是标准正态分布函数。

结论针对的是**中心化并标准化之后的和**。原变量不必服从正态分布，但独立性、同分布以及正的有限方差等条件不能省略。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**和与平均值的正态近似**

当 $n$ 足够大且近似效果适当时，可以写成

$$
S_n\approx N(n\mu,n\sigma^2),
\qquad
\overline X_n\approx N\left(\mu,\frac{\sigma^2}{n}\right).
$$

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

使用时先明确计算的是“和”还是“平均值”：前者的标准差为 $\sigma\sqrt n$，后者为 $\sigma/\sqrt n$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**计算示例**

设 $X_1,\ldots,X_n$ 独立同分布，且 $X_i\sim U(0,1)$。由

$$
\mu=\frac12,\qquad \sigma^2=\frac1{12},
$$

可得当 $n$ 较大时，

$$
S_n\approx N\left(\frac n2,\frac n{12}\right),
\qquad
\overline X_n\approx N\left(\frac12,\frac1{12n}\right).
$$

例如取 $n=100$，则

$$
P(|\overline X_{100}-1/2|\lt0.05)
\approx2\Phi\left(\frac{10\times0.05}{1/\sqrt{12}}\right)-1
=2\Phi(\sqrt3)-1.
$$

这里直接用原变量的期望和方差构造近似，无需先求 $100$ 个均匀变量之和的精确分布。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**与大数定律的区别及适用边界**

| 比较项 | 大数定律 | 中心极限定理 |
| --- | --- | --- |
| 主要问题 | 平均值趋向哪里 | 平均值围绕其极限如何波动 |
| 独立同分布下的典型结论 | $\overline X_n\xrightarrow{P}\mu$ | $\sqrt n(\overline X_n-\mu)/\sigma\xrightarrow{d}N(0,1)$ |
| 常见用途 | 说明频率、样本平均值等的稳定性 | 用正态分布近似和、平均值的概率 |

两者并不矛盾：平均值本身趋于 $\mu$，而把它与 $\mu$ 的偏差放大 $\sqrt n$ 倍并标准化后，可以得到非退化的正态极限。

依分布收敛描述分布函数的收敛，不能理解为 $Z_n$ 依概率收敛于 $0$。

使用时还应注意：

- 若原变量本身独立且服从正态分布，则和与平均值的正态分布是精确结论，不必等待 $n$ 很大。
- 对一般分布，有限样本的近似精度取决于原分布的偏斜程度、尾部等因素，不存在对所有分布都有效的固定样本量门槛。
- 方差无穷、变量存在依赖或不同分布时，不能直接套用这里的定理；若要使用其他中心极限定理，必须另外检查其条件。
- 中心极限定理本身不提供有限样本的统一误差保证，极端尾部概率也不能仅凭“$n$ 较大”就认为近似可靠。

</div>
</div>

#### 棣莫弗—拉普拉斯定理

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**条件与结论**

设 $S_n\sim B(n,p)$，其中 $0\lt p\lt1$ 固定。则

$$
\frac{S_n-np}{\sqrt{np(1-p)}}\xrightarrow{d}N(0,1).
$$

即对任意实数 $x$，

$$
\lim_{n\to\infty}
P\left(\frac{S_n-np}{\sqrt{np(1-p)}}\le x\right)=\Phi(x).
$$

因为 $S_n$ 可以表示为 $n$ 个独立同分布的 0—1 变量之和，每个变量的期望为 $p$、方差为 $p(1-p)$，所以该定理是独立同分布中心极限定理的特例。

因此，在适用的近似情形下，

$$
S_n\approx N(np,np(1-p)),
$$

$$
\frac{S_n}{n}\approx N\left(p,\frac{p(1-p)}n\right).
$$

当 $p=0$ 或 $p=1$ 时，二项分布退化为常数分布，不能使用上述含标准差分母的标准化公式。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**连续性修正**

二项变量只取整数值，而正态变量连续。用正态分布近似整数区间概率时，常将端点向外扩展半个单位，称为**连续性修正**。

记

$$
\mu_n=np,\qquad \sigma_n=\sqrt{np(1-p)}.
$$

对整数 $r\le s$，常用公式为：

| 二项事件 | 经过连续性修正的正态近似 |
| --- | --- |
| $r\le S_n\le s$ | $\Phi\left(\frac{s+1/2-\mu_n}{\sigma_n}\right)-\Phi\left(\frac{r-1/2-\mu_n}{\sigma_n}\right)$ |
| $S_n\le s$ | $\Phi\left(\frac{s+1/2-\mu_n}{\sigma_n}\right)$ |
| $S_n\ge r$ | $1-\Phi\left(\frac{r-1/2-\mu_n}{\sigma_n}\right)$ |
| $S_n=k$ | $\Phi\left(\frac{k+1/2-\mu_n}{\sigma_n}\right)-\Phi\left(\frac{k-1/2-\mu_n}{\sigma_n}\right)$ |

若原事件包含严格不等号或非整数边界，先利用 $S_n$ 的整数取值化为对应的整数闭区间，再做连续性修正。例如，对整数 $k$，$S_n\lt k$ 等价于 $S_n\le k-1$，其修正边界为 $k-1/2$。

连续性修正是改善有限样本近似的常用方法，并不是中心极限定理极限表达式中的必需项；相差半个单位的修正在标准化后会随 $n$ 增大而消失。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**计算示例与近似选择**

设 $S_{100}\sim B(100,\frac12)$，求 $P(45\le S_{100}\le55)$。有

$$
\mu_{100}=50,\qquad \sigma_{100}=5.
$$

使用连续性修正，

$$
P(45\le S_{100}\le55)
\approx
\Phi\left(\frac{55.5-50}{5}\right)
-\Phi\left(\frac{44.5-50}{5}\right)
=2\Phi(1.1)-1
\approx0.7287.
$$

选用近似时应同时考虑 $np$ 与 $n(1-p)$：

- 当两者都较大时，二项分布通常更适合用正态分布近似。
- 当 $p$ 很小且 $np$ 不大时，泊松近似往往更合适，不能只看 $n$ 很大就直接使用正态近似。
- 常见的 $np\ge5$、$n(1-p)\ge5$ 等规则只是经验判断，不能保证所有区间、尤其是尾部概率都达到所需精度。
- 若需要精确概率，可直接求和 $\sum_{k=r}^s\binom nkp^k(1-p)^{n-k}$，或计算二项分布函数。

伯努利大数定律说明成功频率接近 $p$，棣莫弗—拉普拉斯定理进一步描述成功次数及频率在各自均值附近的近似波动分布。

</div>
</div>

### 本章自测：大数定律与中心极限定理

!!! example "自测题"

    **基础**

    1. 写出 $X_n\xrightarrow{P}a$ 的定义。若 $P(X_n=n)=1/n$、$P(X_n=0)=1-1/n$，证明 $X_n\xrightarrow{P}0$，并计算 $E(X_n)$。依概率收敛是否必然推出期望收敛？
    2. 指出以下情形适用本章哪一种大数定律：两两不相关且方差一致有界；独立重复伯努利试验的频率；独立同分布、期望有限但方差无穷。最后一种情形能否直接使用本章的独立同分布中心极限定理？

    **应用**

    3. 设 $X_i$ 两两不相关，$E(X_i)=2+1/i$、$D(X_i)\le9$。证明 $\overline X_n\xrightarrow{P}2$，并给出平均值偏离其期望至少 $\varepsilon$ 的概率上界。
    4. 独立重复进行成功概率为未知 $p$ 的试验。若要求成功频率与 $p$ 的绝对误差小于 $0.05$ 的概率至少为 $0.95$，用切比雪夫不等式给出不依赖 $p$ 的充分样本量。该样本量是否是实际所需的最小值？
    5. 设 $X_1,\ldots,X_{100}$ 独立且均服从 $\operatorname{Exp}(2)$，令 $S=\sum X_i$。用中心极限定理近似计算 $P(45<S<55)$，并说明平均值对应的事件和标准差。
    6. 设 $S\sim B(200,0.4)$。使用连续性修正，用 $\Phi$ 表示 $P(70\le S\le90)$ 和 $P(S>90)$ 的正态近似。说明为什么第二问的修正边界不是 $89.5$。

    **综合**

    7. 设 $X_i$ 独立且均服从 $U(0,1)$，定义

        $$
        A_n=\frac1n\sum_{i=1}^nX_i^2,
        \qquad V_n=A_n-\overline X_n^2.
        $$

        求 $A_n,V_n$ 的依概率极限，并写出 $\overline X_n$ 的中心极限定理标准化表达式。再分别用切比雪夫不等式和正态近似，给出使 $P(|\overline X_n-1/2|<0.05)\ge0.95$ 的样本量建议，区分保证与近似；可用 $\Phi(1.96)\approx0.975$。

    ??? success "参考"

        1. 定义为：对任意 $\varepsilon>0$，$P(|X_n-a|\ge\varepsilon)\to0$。固定 $\varepsilon$ 后，对足够大的 $n$，相应尾概率为 $1/n\to0$，但 $E(X_n)=1$，所以不能据此推出期望收敛到零。
        2. 依次用切比雪夫、伯努利、辛钦大数定律。方差无穷时不满足本章中心极限定理的有限方差条件。
        3. $E(\overline X_n)=2+\frac1n\sum_{i=1}^n1/i\to2$，且 $D(\overline X_n)\le9/n$。因此 $P(|\overline X_n-E\overline X_n|\ge\varepsilon)\le9/(n\varepsilon^2)\to0$，结合期望的极限得到结论。
        4. 由 $p(1-p)\le1/4$，误差概率不超过 $1/[4n(0.05)^2]$。使之不超过 $0.05$，得到 $n\ge2000$。这是保守的充分条件，不能称为实际最小样本量。
        5. 单个变量均值为 $1/2$、方差为 $1/4$，故 $S\approx N(50,25)$，所求概率约为 $2\Phi(1)-1\approx0.6827$。对应平均值事件为 $0.45<\overline X<0.55$，平均值标准差为 $0.05$。
        6. 均值为 $80$、方差为 $48$，两问分别近似为

            $$
            \Phi\left(\frac{10.5}{\sqrt{48}}\right)
            -\Phi\left(\frac{-10.5}{\sqrt{48}}\right),
            \qquad
            1-\Phi\left(\frac{10.5}{\sqrt{48}}\right).
            $$

            因 $S>90$ 等价于 $S\ge91$，应以 $90.5$ 为修正边界。

        7. 辛钦大数定律给出 $A_n\xrightarrow{P}1/3$、$\overline X_n\xrightarrow{P}1/2$，因此 $V_n\xrightarrow{P}1/12$。中心极限定理为 $\sqrt{12n}(\overline X_n-1/2)\xrightarrow{d}N(0,1)$。切比雪夫法要求 $1/[12n(0.05)^2]\le0.05$，取 $n\ge667$ 可保证目标；正态近似要求 $0.05\sqrt{12n}\ge1.96$，得到 $n\ge129$ 的近似建议，后者不提供同样的严格保证。

## 数理统计

<div class="card" markdown="1">
<div class="card-body" markdown="1">

本章从总体中抽取样本，利用统计量推断总体的未知参数或检验有关总体的假设。

</div>
</div>

### 总体与样本
#### 总体

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**总体、个体与总体分布**

研究对象的全体称为**总体**，其中每个研究对象称为**个体**。数理统计通常用随机变量 $X$ 表示个体的某个数量指标，并把 $X$ 的分布称为总体分布。

例如，研究某批零件的长度时，总体是这批零件，$X$ 表示随机抽取一个零件所得的长度。

若总体分布属于某个已知分布族，但其中参数未知，可以写为

$$
F(x;\theta),\qquad \theta\in\Theta,
$$

其中 $\theta$ 是待推断的参数，也可以是参数向量，$\Theta$ 为参数空间。例如，正态总体 $N(\mu,\sigma^2)$ 的未知参数可以是 $\mu$、$\sigma^2$，或二者共同组成的向量。

总体参数是由总体分布确定的量。在本章的频率学派框架中，未知参数视为固定但未知的常数。

</div>
</div>

#### 样本

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**简单随机样本与样本值**

设 $X_1,\ldots,X_n$ 相互独立，且每个 $X_i$ 都与总体 $X$ 同分布，则称它们组成总体的一个容量为 $n$ 的**简单随机样本**。

简单随机样本的核心条件是**独立同分布**，简称 iid：

$$
X_1,\ldots,X_n\overset{\mathrm{iid}}{\sim}F.
$$

- $X_1,\ldots,X_n$ 表示抽样前的随机变量，称为样本。
- $x_1,\ldots,x_n$ 表示抽样后得到的具体观测值，称为样本值或样本观测值。
- $n$ 称为样本容量。

例如，$\overline X=\frac1n\sum_iX_i$ 是随机变量，$\overline x=\frac1n\sum_ix_i$ 是根据数据计算出的数值，二者应区分。

这里使用的是 iid 抽样模型。有限总体的不放回抽样中，各次抽取一般不独立，不能无条件地套用 iid 样本的公式。

</div>
</div>

#### 样本的分布（iid）

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**联合分布**

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

独立性保证联合分布可以写成乘积，同分布性保证每个因子采用相同的分布形式。这一乘积结构也是后面构造似然函数的基础。

</div>
</div>

### 统计量及其分布
#### 统计量

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**概念与抽样分布**

设 $X_1,\ldots,X_n$ 为来自某总体的样本。若样本函数

$$
T=T(X_1,\ldots,X_n)
$$

的表达式**不含未知参数**，则称 $T$ 为统计量。

例如，样本均值 $\overline X$、样本方差 $S^2$、样本最大值 $X_{(n)}$ 都是统计量。若总体均值 $\mu$ 未知，则 $\overline X-\mu$ 含未知参数，不是统计量；它可以参与构造后面的枢轴量。

统计量本身是随机变量，其概率分布称为**抽样分布**。统计量的表达式不含未知参数，并不表示它的分布也不含未知参数。例如，

$$
X_i\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2)
\quad\Longrightarrow\quad
\overline X\sim N\left(\mu,\frac{\sigma^2}{n}\right).
$$

</div>
</div>

#### 常用统计量

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**样本数字特征：样本均值**

样本均值定义为

$$
\overline X=\frac1n\sum_{i=1}^nX_i.
$$

若总体具有有限期望 $\mu$ 与有限方差 $\sigma^2$，则

$$
E(\overline X)=\mu,\qquad D(\overline X)=\frac{\sigma^2}{n}.
$$

其中方差公式利用了样本之间的独立性。$\overline X$ 描述样本的平均水平，也是估计总体均值最常用的统计量。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**样本数字特征：样本方差**

对 $n\ge2$，样本方差定义为

$$
S^2=\frac1{n-1}\sum_{i=1}^n(X_i-\overline X)^2
=\frac1{n-1}\left(\sum_{i=1}^nX_i^2-n\overline X^2\right).
$$

若总体方差有限，则

$$
E(S^2)=\sigma^2.
$$

分母取 $n-1$ 可以使其成为总体方差的无偏估计量。其依据是

$$
\sum_{i=1}^n(X_i-\overline X)^2
=\sum_{i=1}^n(X_i-\mu)^2-n(\overline X-\mu)^2,
$$

取期望后右侧为 $n\sigma^2-\sigma^2=(n-1)\sigma^2$。

注意区分 $S^2$ 与分母为 $n$ 的样本二阶中心矩：

$$
M_2=\frac1n\sum_{i=1}^n(X_i-\overline X)^2
=\frac{n-1}{n}S^2.
$$

本章统一用 $S^2$ 表示分母为 $n-1$ 的样本方差。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**样本数字特征：样本标准差**

样本标准差是样本方差的非负平方根：

$$
S=\sqrt{S^2}.
$$

它与样本观测值具有相同量纲。虽然 $S^2$ 是 $\sigma^2$ 的无偏估计量，但一般并没有 $E(S)=\sigma$，不能把“平方的期望”与“期望的平方”混淆。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**样本数字特征：样本 k 阶原点矩**

对正整数 $k$，样本 $k$ 阶原点矩定义为

$$
A_k=\frac1n\sum_{i=1}^nX_i^k.
$$

特别地，

$$
A_1=\overline X,\qquad A_2=\frac1n\sum_{i=1}^nX_i^2.
$$

若总体 $k$ 阶绝对矩有限，即 $E(|X|^k)\lt+\infty$，则

$$
E(A_k)=E(X^k),
\qquad
A_k\xrightarrow{P}E(X^k).
$$

后一结论来自对 $X_i^k$ 应用辛钦大数定律，是矩估计法的依据之一。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**样本数字特征：样本 k 阶中心矩**

样本 $k$ 阶中心矩定义为

$$
M_k=\frac1n\sum_{i=1}^n(X_i-\overline X)^k.
$$

它以样本均值为中心，而不是以未知的总体均值为中心。特别地，

$$
M_1=0,\qquad
M_2=A_2-A_1^2=\frac{n-1}{n}S^2.
$$

样本中心矩一般不自动具有无偏性。例如，$E(M_2)=\frac{n-1}{n}\sigma^2$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**顺序统计量**

把样本从小到大排列，得到

$$
X_{(1)}\le X_{(2)}\le\cdots\le X_{(n)},
$$

其中 $X_{(k)}$ 称为第 $k$ 个顺序统计量。特别地，

$$
X_{(1)}=\min_iX_i,\qquad X_{(n)}=\max_iX_i.
$$

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**常用性质**

样本均值及中心化偏差满足

$$
\sum_{i=1}^n(X_i-\overline X)=0,
$$

$$
\sum_{i=1}^n(X_i-c)^2
=\sum_{i=1}^n(X_i-\overline X)^2+n(\overline X-c)^2.
$$

所以对给定样本，离差平方和在 $c=\overline X$ 处最小。

若对样本作线性变换 $Y_i=aX_i+b$，则

$$
\overline Y=a\overline X+b,
\qquad
S_Y^2=a^2S_X^2,\qquad S_Y=|a|S_X.
$$

在 iid 且总体方差有限的条件下，还有

$$
\overline X\xrightarrow{P}\mu,\qquad S^2\xrightarrow{P}\sigma^2.
$$

这些一般性结论不要求总体正态；后面的精确抽样分布则通常需要正态性。

</div>
</div>

#### 三大分布

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**$\chi^2$ 分布**

若 $Z_1,\ldots,Z_\nu$ 相互独立且均服从 $N(0,1)$，则

$$
U=\sum_{i=1}^{\nu}Z_i^2
$$

服从自由度为 $\nu$ 的 $\chi^2$ 分布，记为 $U\sim\chi^2(\nu)$。

它的取值为非负数，主要性质为

$$
E(U)=\nu,\qquad D(U)=2\nu.
$$

若 $U\sim\chi^2(\nu_1)$、$V\sim\chi^2(\nu_2)$ 且相互独立，则

$$
U+V\sim\chi^2(\nu_1+\nu_2).
$$

自由度反映构成平方和的独立标准正态分量个数；在样本残差平方和中，估计均值会产生一个线性约束，因此常出现 $n-1$ 个自由度。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**$t$ 分布**

若 $Z\sim N(0,1)$、$U\sim\chi^2(\nu)$，且 $Z,U$ 相互独立，则

$$
T=\frac{Z}{\sqrt{U/\nu}}\sim t(\nu).
$$

$t$ 分布关于 $0$ 对称，尾部比标准正态分布更厚。其数字特征为

$$
E(T)=0\quad(\nu>1),
\qquad
D(T)=\frac{\nu}{\nu-2}\quad(\nu>2).
$$

自由度不满足相应条件时，不能使用上述有限期望或有限方差公式。特别地，$t(1)$ 为标准柯西分布，数学期望不存在。

当 $\nu\to\infty$ 时，$t(\nu)$ 依分布趋于 $N(0,1)$。正态总体均值未知、方差也未知时，用样本标准差代替总体标准差所构造的统计量通常服从 $t$ 分布。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**$F$ 分布**

若 $U\sim\chi^2(\nu_1)$、$V\sim\chi^2(\nu_2)$ 相互独立，则

$$
W=\frac{U/\nu_1}{V/\nu_2}\sim F(\nu_1,\nu_2).
$$

$\nu_1$ 是分子自由度，$\nu_2$ 是分母自由度，二者次序不能交换。主要性质包括

$$
\frac1W\sim F(\nu_2,\nu_1),
$$

$$
T\sim t(\nu)\quad\Longrightarrow\quad T^2\sim F(1,\nu).
$$

$F$ 分布不关于 $0$ 对称。其期望与方差在相应条件下为

$$
E(W)=\frac{\nu_2}{\nu_2-2}\quad(\nu_2>2),
$$

$$
D(W)=
\frac{2\nu_2^2(\nu_1+\nu_2-2)}
{\nu_1(\nu_2-2)^2(\nu_2-4)}
\quad(\nu_2>4).
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**分位点的统一约定**

本章统一使用**上侧分位点**。对 $0\lt\alpha\lt1$，

$$
P(Z>z_\alpha)=\alpha,\qquad
P(T>t_\alpha(\nu))=\alpha,
$$

$$
P(U>\chi^2_\alpha(\nu))=\alpha,\qquad
P(W>F_\alpha(\nu_1,\nu_2))=\alpha.
$$

例如，$z_{0.025}\approx1.96$。上侧概率越小，对应分位点越大。

由对称性和倒数关系，

$$
z_{1-\alpha}=-z_\alpha,\qquad
t_{1-\alpha}(\nu)=-t_\alpha(\nu),
$$

$$
F_{1-\alpha}(\nu_1,\nu_2)
=\frac1{F_\alpha(\nu_2,\nu_1)}.
$$

$\chi^2$ 分布与 $F$ 分布的左右分位点不能通过简单改变正负号获得。若软件使用下侧累计概率分位点，应输入 $1-\alpha$ 来获得这里的上侧 $\alpha$ 分位点。

</div>
</div>

#### 正态总体下的常用结论

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**单个正态总体**

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
U=\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1),
$$

并且 $\overline X$ 与 $S^2$ 相互独立。因此，

$$
T=\frac{\overline X-\mu}{S/\sqrt n}\sim t(n-1).
$$

还可以得到

$$
D(S^2)=\frac{2\sigma^4}{n-1}.
$$

样本均值与样本方差的独立性是正态样本的重要性质，不能直接推广到任意总体。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**已知总体均值时的平方和**

若 $\mu$ 已知，则

$$
\frac1{\sigma^2}\sum_{i=1}^n(X_i-\mu)^2\sim\chi^2(n).
$$

若以样本均值 $\overline X$ 替代未知的 $\mu$，则对应结论变为

$$
\frac1{\sigma^2}\sum_{i=1}^n(X_i-\overline X)^2
=\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1).
$$

因此，自由度取 $n$ 还是 $n-1$，取决于平方和围绕已知总体均值还是估计出的样本均值构造。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**两个独立正态总体**

设两组样本分别来自

$$
X_i\overset{\mathrm{iid}}{\sim}N(\mu_1,\sigma_1^2),
\qquad
Y_j\overset{\mathrm{iid}}{\sim}N(\mu_2,\sigma_2^2),
$$

容量分别为 $n_1,n_2\ge2$，且两组样本相互独立。记各自样本方差为 $S_1^2,S_2^2$，则

$$
\frac{(\overline X-\overline Y)-(\mu_1-\mu_2)}
{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}\sim N(0,1),
$$

$$
\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}
\sim F(n_1-1,n_2-1).
$$

若进一步有 $\sigma_1^2=\sigma_2^2=\sigma^2$，定义合并样本方差

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

合并方差的精确 $t$ 结论需要两总体方差相等；方差未知且不等时，不能直接使用这个公式。

</div>
</div>

!!! example "习题"

    从总体 $X\sim N\left(\mu,2^2\right)$ 中随意抽取容量为 $n$ 的一组样本，其均值为 $\overline X$，若要求 $E(|\overline X - \mu|)\le 0.1$，则 $n$ 的最小取值是多少？

    ??? success "解答"

        如果总体服从正态分布，那么样本均值也应该服从正态分布：

        $$
        \overline X\sim N\left(\mu,\frac{\sigma^2}{n}\right) = N(\mu,\frac 4n)
        $$

        所以 $\overline X -\mu \sim N(0, \displaystyle\frac 4n)$。

        而对于对于正态分布 $Z \sim N(0, \tau^2)$，其绝对值的数学期望为 $E(|Z|) = \tau \sqrt{\displaystyle\frac{2}{\pi}}$（见[常见分布的期望与方差](#常见分布的期望与方差)）。令 $Y = \overline X -\mu$，显然有

        $$
        E(|Y|) = \frac{2}{\sqrt n} \sqrt{\frac{2}{\pi}}
        $$

        由题意得

        $$
        \frac{2}{\sqrt n} \sqrt{\frac{2}{\pi}} \le 0.1
        $$

        解得 $n \pi \ge 800$，$n \ge \displaystyle\frac{800}{\pi} \approx 254.65$，所以 $n$ 最小是 $\mathbb 255$。

### 参数的点估计
#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**估计量与估计值**

用统计量

$$
\widehat\theta=\widehat\theta(X_1,\ldots,X_n)
$$

估计未知参数 $\theta$，称为参数的**点估计**。其中，$\widehat\theta$ 是估计量，将观测值代入得到的 $\widehat\theta(x_1,\ldots,x_n)$ 是估计值。

同一个参数可以有不同估计量。例如，估计 $U(0,\theta)$ 的上端点时，可以考虑 $2\overline X$ 或样本最大值 $X_{(n)}$，但它们的偏差、方差等性质不同。

构造估计量的方法，与评价估计量好坏的标准，是两个不同的问题。

</div>
</div>

#### 方法

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**矩估计法**

矩估计法用样本矩代替总体矩，并解出未知参数。

若总体含 $r$ 个未知参数 $\theta_1,\ldots,\theta_r$，可选择 $r$ 个存在的总体矩，建立方程

$$
E_\theta(X^k)=A_k,\qquad k=1,\ldots,r,
$$

再求解得到矩估计量。所选矩应足以识别参数，方程的解还应满足参数空间的限制。

例如，正态总体 $N(\mu,\sigma^2)$ 满足

$$
E(X)=\mu,\qquad E(X^2)=\mu^2+\sigma^2.
$$

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**最大似然估计法**

给定样本观测值 $x_1,\ldots,x_n$，将样本联合概率或联合密度视为参数 $\theta$ 的函数，称为**似然函数**：

$$
L(\theta)=\prod_{i=1}^np(x_i;\theta)
$$

或

$$
L(\theta)=\prod_{i=1}^nf(x_i;\theta).
$$

使 $L(\theta)$ 在参数空间内达到最大值的参数值，称为最大似然估计值。将数据换回随机样本，得到最大似然估计量。

当 $L(\theta)>0$ 时，可以最大化对数似然

$$
\ell(\theta)=\log L(\theta)
$$

以简化乘积。常用步骤为：写出似然及参数范围，取对数，求驻点，再检查极值性质、边界和参数限制。

似然不是“参数在给定数据下的概率”。求导得到的驻点也不自动就是最大值，最大似然估计还可能不存在或不唯一。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**最大似然估计的常见例子**

- **伯努利总体**：若 $X_i\sim B(1,p)$、$p\in[0,1]$，则

$$
L(p)=p^{\sum_i x_i}(1-p)^{n-\sum_i x_i},
\qquad
\widehat p=\overline X.
$$

全为 $0$ 或全为 $1$ 的样本对应边界估计 $0$ 或 $1$。

- **指数总体**：若 $X_i\sim\operatorname{Exp}(\lambda)$，其中 $\lambda>0$ 为率参数，则在 $\sum_ix_i>0$ 时，

$$
\ell(\lambda)=n\log\lambda-\lambda\sum_ix_i,
\qquad
\widehat\lambda=\frac1{\overline X}.
$$

- **正态总体**：均值、方差均未知时，对样本离差平方和大于 $0$ 的通常情形，

$$
\widehat\mu=\overline X,\qquad
\widehat{\sigma^2}=\frac1n\sum_{i=1}^n(X_i-\overline X)^2.
$$

对连续正态样本且 $n\ge2$，离差平方和大于 $0$ 以概率 $1$ 成立。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**参数影响取值范围时的处理**

对均匀总体，采用密度版本

$$
f(x;\theta)=\frac1\theta\mathbf1_{\{0\lt x\le\theta\}},
\qquad\theta>0,
$$

则对于正的样本观测值，

$$
L(\theta)=\theta^{-n}\mathbf1_{\{\theta\ge x_{(n)}\}}.
$$

在允许范围 $\theta\ge x_{(n)}$ 内，$\theta^{-n}$ 随 $\theta$ 增大而减小，因此

$$
\widehat\theta_{\mathrm{MLE}}=X_{(n)}.
$$

此时最大值位于参数约束边界，不能只靠对数似然求导找零点。端点采用上述闭端密度版本，使最大值能够在 $\theta=x_{(n)}$ 处取到；若把约束写成严格的 $\theta>x_{(n)}$，则对应似然只有边界上确界，需要明确这一差别。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**最大似然估计的不变性**

若 $\widehat\theta$ 是 $\theta$ 的最大似然估计量，则在诱导的似然意义下，$g(\widehat\theta)$ 是 $g(\theta)$ 的最大似然估计量。

例如，指数总体的率参数估计为 $\widehat\lambda=1/\overline X$，其均值 $1/\lambda$ 的最大似然估计为 $\overline X$。

不变性不意味着变换后的估计量无偏；无偏性一般不会在非线性变换下保持。

</div>
</div>

#### 估计量的评价标准

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**无偏性**

若对参数空间中所有 $\theta$ 都有

$$
E_\theta(\widehat\theta)=\theta,
$$

则称 $\widehat\theta$ 为 $\theta$ 的无偏估计量。偏差定义为

$$
\operatorname{Bias}_\theta(\widehat\theta)
=E_\theta(\widehat\theta)-\theta.
$$

例如，$\overline X$ 无偏估计 $\mu$，$S^2$ 无偏估计 $\sigma^2$；正态总体方差的最大似然估计满足

$$
E\left(\widehat{\sigma^2}_{\mathrm{MLE}}\right)
=\frac{n-1}{n}\sigma^2,
$$

所以一般有偏，但偏差随 $n$ 增大而趋于 $0$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**有效性（最小方差性）**

比较同一参数的无偏估计量时，方差越小，表示估计围绕真值的波动越小。

若 $\widehat\theta_1,\widehat\theta_2$ 均无偏，且对所有 $\theta$，

$$
D_\theta(\widehat\theta_1)\le D_\theta(\widehat\theta_2),
$$

则称前者至少与后者同样有效。若某个无偏估计量在所考虑的全部无偏估计量中，对所有参数值都具有最小方差，则称为一致最小方差无偏估计量。

有偏估计量之间或有偏与无偏估计量之间，不能只凭方差判断优劣。常用均方误差综合衡量：

$$
\operatorname{MSE}_\theta(\widehat\theta)
=E_\theta[(\widehat\theta-\theta)^2]
=D_\theta(\widehat\theta)
+\operatorname{Bias}_\theta(\widehat\theta)^2.
$$

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**一致性（相合性）**

若对每个参数真值 $\theta$，都有

$$
\widehat\theta_n\xrightarrow{P}\theta,
$$

则称估计量序列具有一致性，也称相合性。

无偏性描述固定样本量下的期望是否等于真值，一致性描述样本量趋于无穷时是否逼近真值，二者不等价。

例如，在独立同分布且期望有限时，$\overline X_n$ 一致估计 $\mu$；有偏的样本二阶中心矩也可在总体方差有限时一致估计 $\sigma^2$。

若

$$
E_\theta(\widehat\theta_n)\to\theta,\qquad
D_\theta(\widehat\theta_n)\to0,
$$

则均方误差趋于 $0$，从而 $\widehat\theta_n\xrightarrow{P}\theta$。这是证明一致性的一个充分条件。

</div>
</div>

#### 估计量的数字特征与收敛性

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**求期望与方差**

将估计量看作样本函数，利用期望线性性、方差公式或其抽样分布计算。

例如，若 $\widehat\theta=\sum_{i=1}^na_iX_i$，样本独立同分布且 $E(X_i)=\mu$、$D(X_i)=\sigma^2$，则

$$
E(\widehat\theta)=\mu\sum_{i=1}^na_i,
\qquad
D(\widehat\theta)=\sigma^2\sum_{i=1}^na_i^2.
$$

若 $\sum_i a_i=1$，则它无偏估计 $\mu$。由

$$
\sum_{i=1}^na_i^2\ge\frac1n,
$$

可知等权重 $a_i=1/n$ 对应的样本均值，在这类固定权重的线性无偏估计量中方差最小。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**验证依概率收敛**

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

</div>
</div>

### 参数的区间估计
#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**置信区间与置信水平**

设 $L=L(X_1,\ldots,X_n)$、$U=U(X_1,\ldots,X_n)$ 为样本函数。若对每个参数真值 $\theta$，

$$
P_\theta(L\le\theta\le U)=1-\alpha,
\qquad 0\lt\alpha\lt1,
$$

则称随机区间 $[L,U]$ 为 $\theta$ 的置信水平为 $1-\alpha$ 的置信区间。某些构造使用覆盖概率至少为 $1-\alpha$ 的保守区间。

抽样前，区间端点是随机的，参数 $\theta$ 是固定的；重复抽样并按同一规则构造区间，长期来看有约 $1-\alpha$ 的比例覆盖真值。

样本已经观测后，得到的是一个确定区间。不能把频率学派的置信水平解释为“固定参数以 $1-\alpha$ 的概率落入这一个已经算出的区间”。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**枢轴量法与区间宽度**

构造置信区间的常见方法是寻找**枢轴量** $Q(X_1,\ldots,X_n;\theta)$：它可以含未知参数，但其分布不含未知参数。

具体步骤为：

1. 选择分布已知的枢轴量。
2. 利用分位点写出概率为 $1-\alpha$ 的事件。
3. 对不等式变形，把待估参数单独放在中间。
4. 用观测值替代样本变量，得到区间估计值。

例如，若 $Z=(\overline X-\mu)/(\sigma/\sqrt n)\sim N(0,1)$，则

$$
P\left(-z_{\alpha/2}\le Z\le z_{\alpha/2}\right)=1-\alpha.
$$

移项后就得到 $\mu$ 的双侧置信区间。

在其他条件相同的情况下，提高置信水平通常会使区间变宽，增大样本量通常会使区间变窄。区间宽度反映估计精度，但比较宽度时应保持置信水平及模型条件一致。

</div>
</div>

#### 单个正态总体均值和方差的置信区间

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**均值：总体方差已知**

设 $X_1,\ldots,X_n\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2)$，$\sigma^2$ 已知，则 $\mu$ 的置信水平为 $1-\alpha$ 的双侧置信区间为

$$
\left[
\overline X-z_{\alpha/2}\frac{\sigma}{\sqrt n},
\quad
\overline X+z_{\alpha/2}\frac{\sigma}{\sqrt n}
\right].
$$

这里使用总体标准差 $\sigma$，相应枢轴量服从标准正态分布。若总体不正态，仅在满足中心极限定理等条件且近似适当时，才可将它用作大样本近似区间。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**均值：总体方差未知**

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

例如，$n=16$、$\overline x=10$、$s=2$，取置信水平 $0.95$，则区间为

$$
10\pm t_{0.025}(15)\frac2{4}.
$$

用 $t_{0.025}(15)\approx2.131$，得到约为 $[8.9345,11.0655]$ 的区间。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**方差：总体均值未知**

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**方差：总体均值已知**

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

</div>
</div>

### 假设检验
#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**检验统计量、拒绝域与检验结论**

假设检验先对总体分布或参数提出一个假设，再根据样本判断是否有足够证据拒绝它。

基本步骤为：

1. 明确总体模型、待检验参数及原假设 $H_0$、备择假设 $H_1$。
2. 在观察检验结果前确定显著性水平 $\alpha$。
3. 选择检验统计量，确定其在 $H_0$ 下的分布。
4. 依据备择方向确定拒绝域。
5. 代入样本值，判断是否落入拒绝域。

若统计量观测值落入拒绝域，则**拒绝 $H_0$**；否则**不拒绝 $H_0$**。

“不拒绝”表示当前数据不足以拒绝原假设，不等于已经证明原假设正确。显著性检验的结论也应与模型假设和实际问题结合解释。

</div>
</div>

#### 原假设与备择假设

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**双侧检验与单侧检验**

原假设 $H_0$ 是接受检验的命题，备择假设 $H_1$ 表示与之相对的研究方向。对参数 $\theta$ 和指定值 $\theta_0$，常见形式为：

| 检验类型 | 原假设 | 备择假设 | 拒绝域方向 |
| --- | --- | --- | --- |
| 双侧检验 | $H_0:\theta=\theta_0$ | $H_1:\theta\ne\theta_0$ | 统计量过大或过小 |
| 右侧检验 | $H_0:\theta\le\theta_0$ | $H_1:\theta>\theta_0$ | 对应统计量过大 |
| 左侧检验 | $H_0:\theta\ge\theta_0$ | $H_1:\theta\lt\theta_0$ | 对应统计量过小 |

常见单侧检验在原假设边界 $\theta=\theta_0$ 上确定临界分布，以控制整个单侧原假设中的第一类错误概率。教材有时将单侧原假设简写为边界等式。

检验方向应由问题事先确定，不能看到样本结果后再选择更容易显著的一侧。

</div>
</div>

#### 小概率原理与显著性水平

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**小概率原理**

如果 $H_0$ 成立时，某类结果出现的概率很小，而样本恰好落入预先规定的这类结果区域，就将其视为反对 $H_0$ 的证据。

“小概率”不是“不可能”。即使 $H_0$ 正确，样本仍可能偶然落入拒绝域，这正是第一类错误的来源。

连续模型中单个观测点的概率本来就为 $0$，所以检验比较的是尾部区域等事件的概率，而不是某个精确观测点的概率。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**显著性水平与 p 值**

设拒绝域为 $W$。显著性水平 $\alpha$ 控制原假设为真时错误拒绝它的概率：

$$
P_\theta(\text{样本落入 }W)\le\alpha
\quad\text{对所有 }\theta\in\Theta_0.
$$

$\Theta_0$ 为原假设对应的参数集合。精确连续检验常在原假设边界上达到等号。

$p$ 值是在原假设模型下，取得当前观测结果或更极端结果的相应尾部概率。例如，标准正态均值检验的观测值为 $z_{\mathrm{obs}}$ 时，

$$
p_{\text{右侧}}=1-\Phi(z_{\mathrm{obs}}),
\qquad
p_{\text{左侧}}=\Phi(z_{\mathrm{obs}}),
$$

$$
p_{\text{双侧}}=2[1-\Phi(|z_{\mathrm{obs}}|)].
$$

通常按 $p\le\alpha$ 拒绝 $H_0$。$p$ 值不是原假设成立的概率，$\alpha$ 也不是某次检验结论错误的后验概率。

</div>
</div>

#### 正态总体下的六大检验及拒绝域

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**一、单总体均值检验：方差已知（Z 检验）**

设 $X_i\overset{\mathrm{iid}}{\sim}N(\mu,\sigma^2)$，$\sigma^2$ 已知，检验基准为 $\mu_0$。使用

$$
Z=\frac{\overline X-\mu_0}{\sigma/\sqrt n}.
$$

在 $\mu=\mu_0$ 时，$Z\sim N(0,1)$。显著性水平为 $\alpha$ 的拒绝域为：

| 备择假设 | 拒绝域 |
| --- | --- |
| $H_1:\mu\ne\mu_0$ | $|Z|>z_{\alpha/2}$ |
| $H_1:\mu>\mu_0$ | $Z>z_\alpha$ |
| $H_1:\mu\lt\mu_0$ | $Z\lt-z_\alpha$ |

例如，$\mu_0=50$、$\sigma=10$、$n=100$、$\overline x=52.5$，则 $z_{\mathrm{obs}}=2.5$。在 $\alpha=0.05$ 的双侧检验中，$2.5>1.96$，因此拒绝 $H_0:\mu=50$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**二、单总体均值检验：方差未知（t 检验）**

设总体正态，$\sigma^2$ 未知，$n\ge2$。使用

$$
T=\frac{\overline X-\mu_0}{S/\sqrt n}.
$$

在 $\mu=\mu_0$ 时，$T\sim t(n-1)$。拒绝域为：

| 备择假设 | 拒绝域 |
| --- | --- |
| $H_1:\mu\ne\mu_0$ | $|T|>t_{\alpha/2}(n-1)$ |
| $H_1:\mu>\mu_0$ | $T>t_\alpha(n-1)$ |
| $H_1:\mu\lt\mu_0$ | $T\lt-t_\alpha(n-1)$ |

这里 $S^2$ 的分母为 $n-1$。正态性保证该 $t$ 分布是精确结论，而非仅由样本量较大得到的近似。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**三、单总体方差检验（$\chi^2$ 检验）**

设总体正态，均值未知，检验基准方差为 $\sigma_0^2>0$。使用

$$
Q=\frac{(n-1)S^2}{\sigma_0^2}.
$$

在 $\sigma^2=\sigma_0^2$ 时，$Q\sim\chi^2(\nu)$，其中 $\nu=n-1$。常用等尾拒绝域为：

| 备择假设 | 拒绝域 |
| --- | --- |
| $H_1:\sigma^2\ne\sigma_0^2$ | $Q\lt\chi^2_{1-\alpha/2}(\nu)$ 或 $Q>\chi^2_{\alpha/2}(\nu)$ |
| $H_1:\sigma^2>\sigma_0^2$ | $Q>\chi^2_\alpha(\nu)$ |
| $H_1:\sigma^2\lt\sigma_0^2$ | $Q\lt\chi^2_{1-\alpha}(\nu)$ |

若总体均值 $\mu$ 已知，可改用 $Q=\sum_i(X_i-\mu)^2/\sigma_0^2$，并把自由度改为 $\nu=n$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**四、两总体均值差检验：两方差已知（Z 检验）**

设两个总体均为正态，两组样本相互独立，方差 $\sigma_1^2,\sigma_2^2$ 已知。检验均值差基准 $\Delta_0$，使用

$$
Z=
\frac{\overline X-\overline Y-\Delta_0}
{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}.
$$

在 $\mu_1-\mu_2=\Delta_0$ 时，$Z\sim N(0,1)$。拒绝域为：

| 备择假设 | 拒绝域 |
| --- | --- |
| $H_1:\mu_1-\mu_2\ne\Delta_0$ | $|Z|>z_{\alpha/2}$ |
| $H_1:\mu_1-\mu_2>\Delta_0$ | $Z>z_\alpha$ |
| $H_1:\mu_1-\mu_2\lt\Delta_0$ | $Z\lt-z_\alpha$ |

检验两个均值是否相等时，取 $\Delta_0=0$。两组样本的独立性不能省略；配对数据需要按差值样本等相应模型处理。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**五、两总体均值差检验：两方差未知但相等（合并 t 检验）**

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

| 备择假设 | 拒绝域 |
| --- | --- |
| $H_1:\mu_1-\mu_2\ne\Delta_0$ | $|T|>t_{\alpha/2}(\nu)$ |
| $H_1:\mu_1-\mu_2>\Delta_0$ | $T>t_\alpha(\nu)$ |
| $H_1:\mu_1-\mu_2\lt\Delta_0$ | $T\lt-t_\alpha(\nu)$ |

方差未知并不等于方差相等。若不满足等方差假设，不能直接使用这个合并方差公式及其自由度。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**六、两总体方差比检验（F 检验）**

设两个正态总体的均值未知，两组样本相互独立。检验方差比基准

$$
r_0=\frac{\sigma_1^2}{\sigma_2^2}>0,
$$

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

| 备择假设 | 拒绝域 |
| --- | --- |
| $H_1:\sigma_1^2/\sigma_2^2\ne r_0$ | $F_{\mathrm{stat}}\lt F_{1-\alpha/2}(\nu_1,\nu_2)$ 或 $F_{\mathrm{stat}}>F_{\alpha/2}(\nu_1,\nu_2)$ |
| $H_1:\sigma_1^2/\sigma_2^2>r_0$ | $F_{\mathrm{stat}}>F_\alpha(\nu_1,\nu_2)$ |
| $H_1:\sigma_1^2/\sigma_2^2\lt r_0$ | $F_{\mathrm{stat}}\lt F_{1-\alpha}(\nu_1,\nu_2)$ |

检验两方差是否相等时取 $r_0=1$。分子对应第一总体、分母对应第二总体；若交换分子分母，应同时交换自由度、变换方差比及备择方向。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**检验与置信区间的联系**

对同一模型、同一枢轴量及相匹配的双侧检验，显著性水平 $\alpha$ 的检验与置信水平 $1-\alpha$ 的区间互相对应：

$$
\theta_0\text{ 不在相应置信区间内}
\iff
\text{拒绝 }H_0:\theta=\theta_0.
$$

例如，正态总体方差未知时，$\mu_0$ 不在对应的双侧 $t$ 置信区间内，等价于 $|T|>t_{\alpha/2}(n-1)$。

上述精确检验统计量在原假设下均为连续分布，临界点处取严格或非严格不等号不改变第一类错误概率；实际计算时应统一端点判定约定。

</div>
</div>

### 两类错误
#### 第一类错误

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**弃真错误与显著性水平**

当 $H_0$ 实际为真，却作出拒绝 $H_0$ 的结论，称为**第一类错误**，也称弃真错误。

对给定的原假设参数值 $\theta$，其概率为

$$
P_\theta(\text{拒绝 }H_0).
$$

水平为 $\alpha$ 的检验要求该概率在整个原假设参数空间上不超过 $\alpha$。对于简单原假设的精确检验，或某些复合原假设的边界情形，它通常恰好等于 $\alpha$。

例如，使用 $\alpha=0.05$ 的检验，并不保证本次结论一定正确，而是控制按同一规则反复检验时的弃真概率。

</div>
</div>

#### 第二类错误

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**取伪错误与检验功效**

当 $H_0$ 实际为假，却未拒绝 $H_0$，称为**第二类错误**，也称取伪错误。

对备择假设中的具体参数值 $\theta$，定义

$$
\beta(\theta)=P_\theta(\text{不拒绝 }H_0),
$$

则

$$
1-\beta(\theta)=P_\theta(\text{拒绝 }H_0)
$$

称为在该参数值下的**检验功效**。

$\beta$ 一般依赖真实参数值、样本量、显著性水平以及检验规则，不能仅凭给定的 $\alpha$ 就确定。

| 实际情况 | 不拒绝 $H_0$ | 拒绝 $H_0$ |
| --- | --- | --- |
| $H_0$ 为真 | 正确决策 | 第一类错误 |
| $H_0$ 为假 | 第二类错误 | 正确决策，概率为功效 |

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**第二类错误概率的计算**

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

</div>
</div>

### 本章自测：数理统计

!!! example "自测题"

    本组题沿用正文的**上侧分位点**约定，$S^2$ 一律使用分母 $n-1$。涉及精确的 $t$、$\chi^2$、$F$ 推断时，均应检查正态性与独立性条件。

    **基础**

    1. 从均值 $\mu$ 未知的总体抽取简单随机样本。判断 $\overline X$、$\overline X-\mu$、$S^2$、$X_{(n)}$ 是否为统计量。对样本观测值 $1,2,3,4$，计算样本均值、样本方差及二阶原点样本矩。
    2. 设 $X_1,\ldots,X_{10}$ 独立且均服从 $N(\mu,\sigma^2)$。分别写出 $\overline X$、$9S^2/\sigma^2$、$\sqrt{10}(\overline X-\mu)/S$、$\sum_{i=1}^{10}(X_i-\mu)^2/\sigma^2$ 的分布，并说明 $\overline X$ 与 $S^2$ 的关系。
    3. 设 $Z\sim N(0,1)$、$U\sim\chi^2(5)$、$V\sim\chi^2(8)$ 相互独立。写出 $Z/\sqrt{U/5}$、$(U/5)/(V/8)$ 及后者倒数的分布。若 $T\sim t(5)$，则 $T^2$ 服从什么分布？

    **应用**

    4. 设 $X_i$ 独立且均服从 $B(1,p)$，$p\in[0,1]$。求 $p$ 的矩估计和最大似然估计，计算其期望、方差，并说明无偏性与一致性。若样本全为零，最大似然估计是否存在？
    5. 设 $X_i$ 独立且均服从 $\operatorname{Exp}(\lambda)$，$\lambda>0$ 为率参数。写出似然函数，求 $\lambda$ 的矩估计、最大似然估计及总体均值 $1/\lambda$ 的最大似然估计。能否仅凭不变性断言 $\widehat\lambda$ 无偏？
    6. 正态总体方差已知为 $16$，样本量 $64$，样本均值 $12$。用 $z_{0.025}=1.96$ 求均值的 $95\%$ 置信区间；若希望区间半宽不超过 $0.5$，需要多大的样本量？解释置信水平的含义。
    7. 正态总体均值、方差均未知，$n=25,\overline x=10,s=2$。求均值的 $95\%$ 置信区间，并在显著性水平 $0.05$ 下检验 $H_0:\mu=9$ 对 $H_1:\mu\ne9$。给定 $t_{0.025}(24)=2.064$，验证区间与检验结论一致。
    8. 正态总体均值未知，$n=10,s^2=4$。写出方差的 $95\%$ 置信区间；检验 $H_0:\sigma^2=2$ 对 $H_1:\sigma^2\ne2$，取 $\alpha=0.05$。给定 $\chi^2_{0.025}(9)=19.023$、$\chi^2_{0.975}(9)=2.700$，作出结论。
    9. 两个独立正态总体的方差分别已知为 $4,9$，样本量分别为 $25,36$，样本均值分别为 $12,10.5$。在 $\alpha=0.05$ 下检验 $H_0:\mu_1-\mu_2\le0$ 对 $H_1:\mu_1-\mu_2>0$；给定 $z_{0.05}=1.645$。
    10. 两个独立正态总体具有相等的未知方差，样本量分别为 $10,12$，样本均值分别为 $5,3$，样本方差均为 $4$。在 $\alpha=0.05$ 下检验均值是否相等，给定 $t_{0.025}(20)=2.086$。若删去等方差假设，这套精确检验还能否直接使用？
    11. 两组独立正态样本的容量分别为 $8,11$，样本方差之比为 $r=s_1^2/s_2^2$。对 $H_0:\sigma_1^2/\sigma_2^2=1$ 与双侧备择，在水平 $\alpha$ 下写出统计量分布及拒绝域；若交换分子、分母，分位点和自由度如何调整？

    **综合**

    12. 设 $X_i$ 独立且均服从 $U(0,\theta)$，$\theta>0$，$n\ge2$。采用正文的闭端密度版本，求矩估计、最大似然估计及最大似然估计的无偏修正。比较两个无偏估计量的方差，并判断最大似然估计是否一致。
    13. 设 $X_i$ 独立且均服从 $N(\mu,4)$，$n=16$。在 $\alpha=0.05$ 下检验 $H_0:\mu\le0$ 对 $H_1:\mu>0$，取 $z_{0.05}=1.645$。写出关于 $\overline X$ 的拒绝域，求真实均值为 $1$ 时的第二类错误概率和功效；若要求该点功效至少为 $0.9$，估算所需样本量，给定 $z_{0.1}=1.282$。
    14. 判断并改正：① $p$ 值为 $0.03$ 表示原假设只有 $3\%$ 的概率成立；② 不拒绝原假设就是证明它正确；③ 降低显著性水平能同时减少两类错误；④ 无偏估计量必然比任何有偏估计量均方误差更小。最后，在正态样本下比较 $S^2$ 与 $\widehat{\sigma^2}=(n-1)S^2/n$ 的均方误差（$n\ge2$），给出第④项的具体反例。

    ??? success "参考"

        1. 除 $\overline X-\mu$ 含未知参数外，其余都是统计量。观测值为 $\overline x=5/2$、$s^2=5/3$、$A_2=15/2$。
        2. 依次服从 $N(\mu,\sigma^2/10)$、$\chi^2(9)$、$t(9)$、$\chi^2(10)$；$\overline X$ 与 $S^2$ 相互独立。围绕总体均值与围绕样本均值的平方和自由度不同。
        3. 依次为 $t(5)$、$F(5,8)$、$F(8,5)$；$T^2\sim F(1,5)$。
        4. 两种估计均为 $\widehat p=\overline X$；$E(\widehat p)=p$、$D(\widehat p)=p(1-p)/n$，所以无偏且一致。全零样本在参数空间边界处取得最大值，估计为 $0$。
        5. 对非负样本且总和为正的情形，$L(\lambda)=\lambda^n e^{-\lambda\sum x_i}$。两种率参数估计均为 $1/\overline X$；总体均值的最大似然估计为 $\overline X$。非线性变换不保持无偏性，不能由最大似然不变性得出率参数估计无偏。
        6. 区间为 $12\pm1.96(4/8)=[11.02,12.98]$；半宽要求给出 $n\ge(1.96\times4/0.5)^2=245.8624$，向上取整为 $246$。$95\%$ 指重复抽样时按该规则构造的随机区间覆盖固定真值的比例，不能给观测后的固定区间赋予这种参数概率。
        7. 区间为 $10\pm2.064(2/5)=[9.1744,10.8256]$。$t_{\mathrm{obs}}=(10-9)/(2/5)=2.5>2.064$，拒绝 $H_0$；$9$ 也不在对应置信区间内。
        8. 区间为 $[36/19.023,36/2.700]\approx[1.892,13.333]$。检验统计量为 $q=36/2=18$，位于 $[2.700,19.023]$ 内，故不拒绝 $H_0$；原假设方差 $2$ 也在区间内。
        9. 在原假设边界处 $Z\sim N(0,1)$。观测值为 $1.5/\sqrt{4/25+9/36}=1.5/\sqrt{0.41}\approx2.343>1.645$，拒绝 $H_0$。
        10. $S_p^2=4$，自由度为 $20$；$t_{\mathrm{obs}}=2/[2\sqrt{1/10+1/12}]\approx2.335>2.086$，拒绝均值相等的原假设。删去等方差假设后，不能继续无条件采用该合并方差及精确 $t(20)$ 分布。
        11. 原假设下 $F_{\mathrm{stat}}=S_1^2/S_2^2\sim F(7,10)$；拒绝域为 $r<F_{1-\alpha/2}(7,10)$ 或 $r>F_{\alpha/2}(7,10)$。倒数服从 $F(10,7)$，两端点依倒数关系互换，不能只对原临界值改变正负号。
        12. 令 $M=X_{(n)}$，则矩估计为 $2\overline X$，最大似然估计为 $M$，无偏修正为 $(n+1)M/n$。两个无偏估计量的方差分别为 $\theta^2/(3n)$ 与 $\theta^2/[n(n+2)]$，后者在 $n\ge2$ 时更小。对 $0<\varepsilon<\theta$，$P(|M-\theta|\ge\varepsilon)=(1-\varepsilon/\theta)^n\to0$；对 $\varepsilon\ge\theta$ 该概率为零，故 $M$ 虽有偏但一致。
        13. 拒绝域为 $\overline X>1.645\times2/4=0.8225$。真实均值为 $1$ 时，$\overline X\sim N(1,1/4)$，故

            $$
            \beta(1)=\Phi\left(\frac{0.8225-1}{0.5}\right)=\Phi(-0.355),
            \qquad 1-\beta(1)=\Phi(0.355)\approx0.639.
            $$

            任意 $n$ 下功效为 $\Phi(\sqrt n/2-1.645)$。要求至少为 $0.9$，用给定分位点得 $\sqrt n/2\ge1.645+1.282$，即 $n\ge34.269316$，向上取整取 $35$。

        14. 四项均不正确。$p$ 值是在原假设模型下的相应尾部概率；不拒绝仅表示证据不足；固定样本量时缩小拒绝域通常会增加第二类错误；均方误差还包含偏差的平方。在正态样本下，

            $$
            \operatorname{MSE}(S^2)=\frac{2\sigma^4}{n-1},
            \qquad
            \operatorname{MSE}(\widehat{\sigma^2})
            =\frac{2(n-1)\sigma^4}{n^2}+\frac{\sigma^4}{n^2}
            =\frac{(2n-1)\sigma^4}{n^2}.
            $$

            对 $n\ge2$，后者更小，尽管其偏差为 $-\sigma^2/n$。
