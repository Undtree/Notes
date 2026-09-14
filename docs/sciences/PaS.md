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

它把“至少一个发生”的对立事件转化为“全部不发生”，把“全部发生”的对立事件转化为“至少一个不发生”。

</div>
</div>

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
\binom nr=\frac{n!}{r!(n-r)!},
\qquad 0\le r\le n,\quad 0!=1.
$$

其中，排列数 $A_n^r$ 考虑顺序，组合数 $\binom nr$ 不考虑顺序。

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
| 不放回，不考虑顺序 | 含 $n$ 个个体的子集 | $\binom Nn$ |
| 有放回，各次独立且均匀抽取，考虑顺序 | 长度为 $n$、允许重复的有序序列 | $N^n$ |

简单随机不放回抽样通常指：总体中每个容量为 $n$ 的子集被抽到的概率相同。

若总体 $N$ 个个体中有 $M$ 个具有某特征，不放回抽取 $n$ 个，恰有 $k$ 个具有该特征的概率为

$$
P=\frac{\binom Mk\binom{N-M}{n-k}}{\binom Nn},
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

相互独立必然两两独立，两两独立未必相互独立。特别地，三个事件相互独立需要同时验证三个两两乘积等式以及 $P(ABC)=P(A)P(B)P(C)$，仅验证最后一个等式也不够。

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

③ 若 $P(A)=0$（不可能事件）或 $P(A)=1$（必然事件），则 $A$ 与任意事件 $B$ 相互独立。

</div>
</div>

!!! Note "互斥与独立的区别"

    | 比较项 | 互斥 | 独立 |
    | --- | --- | --- |
    | 判定条件 | $AB=\varnothing$ | $P(AB)=P(A)P(B)$ |
    | 含义 | 不能同时发生 | 一个事件的发生不改变另一个事件的概率（条件概率有定义时） |
    | 当 $P(A),P(B)>0$ | 不可能独立 | 不可能互斥 |

    若 $A,B$ 互斥且两者概率均大于 $0$，则 $P(AB)=0\lt P(A)P(B)$，所以不独立。概率为 $0$ 或 $1$ 的事件与任意事件独立，但它们未必分别为空集或整个样本空间。

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
P(X=k)=\binom nk p^k(1-p)^{n-k},
\qquad k=0,1,\ldots,n.
$$

当 $p=0$ 或 $p=1$ 时，分别有 $X=0$ 或 $X=n$ 几乎必然成立。

固定某 $k$ 次成功、其余失败的一个指定序列，其概率为 $p^k(1-p)^{n-k}$；“恰有 $k$ 次成功”允许成功位置变化，共有 $\binom nk$ 种互斥的位置选择。

常用结果包括

$$
P(X=0)=(1-p)^n,\qquad P(X=n)=p^n,
$$

$$
P(X\ge1)=1-(1-p)^n,
$$

$$
P(X\le r)=\sum_{k=0}^{r}\binom nk p^k(1-p)^{n-k},
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

## 一维随机变量及其分布

### 一维随机变量

#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

设随机试验的样本空间为 $\Omega$，若对每个样本点 $\omega\in\Omega$，都有一个实数 $X(\omega)$ 与之对应，则称满足可测性要求的实值函数 $X=X(\omega)$ 为**一维随机变量**，通常用 $X,Y,Z$ 等表示。

这里的可测性要求是：对任意实数 $x$，集合 $\{\omega:X(\omega)\le x\}$ 都是事件，从而可以讨论它的概率。

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
F_X(x)=P(X\le x),\qquad -\infty\lt x\lt +\infty.
$$

不致混淆时记为 $F(x)$。分布函数给出随机变量落在 $(-\infty,x]$ 内的概率，适用于离散型、连续型和混合型等各种随机变量，并能唯一确定其分布。

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

- **右连续性**：对任意 $x$，$\lim_{t\downarrow x}F(t)=F(x)$。

单调不减、两端极限分别为 $0$ 和 $1$、右连续，是一个实函数成为某个随机变量分布函数的充要条件。

记左极限为

$$
F(x^-)=\lim_{t\uparrow x}F(t)=P(X\lt x).
$$

则

$$
P(X=x)=F(x)-F(x^-).
$$

因此，分布函数在 $x$ 处的跳跃量就是 $X$ 取值为 $x$ 的概率；$F$ 在 $x$ 处连续，当且仅当 $P(X=x)=0$。

</div>
</div>

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

例如，上述正面次数的分布函数为

$$
F(x)=
\begin{cases}
0, & x\lt 0,\\
\frac14, & 0\le x\lt 1,\\
\frac34, & 1\le x\lt 2,\\
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
P(X=k)=\binom nk p^k(1-p)^{n-k},
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
\binom nk p^k(1-p)^{n-k}
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
\frac{\binom Mk\binom{N-M}{n-k}}{\binom Nn},
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

例如，$X$ 在 $(0,\frac12)$ 上均匀分布时，该区间内的密度为 $2$，但总概率仍为 $2\times\frac12=1$。

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

例如，若

$$
f(x)=
\begin{cases}
cx, & 0\lt x\lt 1,\\
0, & \text{其他},
\end{cases}
$$

由归一性 $\int_0^1cx\,\mathrm dx=1$ 得 $c=2$，进而

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
\frac1{b-a}, & a\lt x\lt b,\\
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
\frac{x-a}{b-a}, & a\le x\lt b,\\
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

已知 $X$ 的分布，令 $Y=g(X)$，其中 $g$ 为可测函数，目标是求出 $Y$ 的分布。一般方法是先确定 $Y$ 的取值范围，再由事件 $\{g(X)\le y\}$ 求分布函数：

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

**分布函数法**

若 $X$ 具有密度 $f_X$，则

$$
F_Y(y)=\int_{\{x:\,g(x)\le y\}}f_X(x)\,\mathrm dx.
$$

先针对不同的 $y$ 解不等式 $g(x)\le y$，再与 $X$ 的取值范围相交并积分。若所得 $F_Y$ 可由密度积分表示，则可通过求导得到密度；若存在跳跃，还应单独记录相应的点概率。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**单调变换公式**

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

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**非单调变换：分段求逆后相加**

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

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**混合型情形**

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
\frac{1+y}{2}, & 0\le y\lt 1,\\
1, & y\ge1.
\end{cases}
$$

这个分布在 $0$ 处有大小为 $\frac12$ 的跳跃，并在 $(0,1)$ 上具有总质量为 $\frac12$ 的连续部分，是**混合型分布**。仅对分布函数的连续部分求导，会遗漏 $Y=0$ 处的点概率，不能用所得函数作为整个分布的概率密度。

此外，连续型随机变量也可变换为纯离散型，例如 $Y=\mathbf 1_{\{X>0\}}$ 只取 $0,1$。判断变换后的类型，应依据实际得到的分布。

</div>
</div>

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

几何上，它表示随机点 $(X,Y)$ 落在矩形区域 $(-\infty,x]\times(-\infty,y]$ 内的概率。联合分布函数能够唯一确定随机向量的分布。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**性质**

二维联合分布函数满足：

- **有界性**：$0\le F(x,y)\le1$。
- **对每个变量单调不减**：固定一个变量时，$F$ 关于另一个变量单调不减。
- **对每个变量右连续**：

$$
\lim_{h\downarrow0}F(x+h,y)=F(x,y),
\qquad
\lim_{k\downarrow0}F(x,y+k)=F(x,y).
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

例如，$n$ 维中第 $i$ 个分量的边缘分布函数为

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

常用表格同时列出联合分布律和边缘分布律：

| $X\backslash Y$ | $y_1$ | $y_2$ | $\cdots$ | $P(X=x_i)$ |
| --- | --- | --- | --- | --- |
| $x_1$ | $p_{11}$ | $p_{12}$ | $\cdots$ | $p_{1\cdot}$ |
| $x_2$ | $p_{21}$ | $p_{22}$ | $\cdots$ | $p_{2\cdot}$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\ddots$ | $\vdots$ |
| $P(Y=y_j)$ | $p_{\cdot1}$ | $p_{\cdot2}$ | $\cdots$ | $1$ |

联合分布函数和区域概率分别为

$$
F(x,y)=\sum_{x_i\le x}\sum_{y_j\le y}p_{ij},
$$

$$
P((X,Y)\in D)=\sum_{(x_i,y_j)\in D}p_{ij}.
$$

例如，求 $P(X\lt Y)$ 时，应把所有满足 $x_i\lt y_j$ 的单元格概率相加。

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

则 $X\sim B(1,\frac12)$、$Y\sim B(1,\frac58)$。

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

</div>
</div>

#### 二维连续型随机变量

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**联合概率密度**

若存在非负可积函数 $f(x,y)$，使

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

二维连续型随机变量的分量均为连续型；反过来，各分量为连续型，不一定存在二维联合密度。例如，$X\sim U(0,1)$、$Y=X$ 时，概率全部集中在直线 $y=x$ 上。

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
\frac1y, & 0\lt x\lt y,\\
0, & \text{其他}.
\end{cases}
$$

因此，给定 $Y=y$ 时，$X$ 服从 $U(0,y)$，例如 $P(X\lt y/2\mid Y=y)=1/2$。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**二维均匀分布**

设平面区域 $D$ 的面积为 $S_D$，且 $0\lt S_D\lt +\infty$。若

$$
f(x,y)=
\begin{cases}
\frac1{S_D}, & (x,y)\in D,\\
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

### 独立性

#### 概念

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**随机变量的相互独立**

若对任意实数 $x,y$，事件 $\{X\le x\}$ 与 $\{Y\le y\}$ 相互独立，即

$$
P(X\le x,\ Y\le y)=P(X\le x)P(Y\le y),
$$

则称随机变量 $X,Y$ **相互独立**。

等价地，对任意 Borel 集 $A,B$，

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

等价地，对所有满足 $p_{\cdot j}>0$ 的 $j$，

$$
P(X=x_i\mid Y=y_j)=P(X=x_i)
\quad\text{对所有 }i.
$$

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

独立时，条件密度等于对应边缘密度：

$$
f_{X\mid Y}(x\mid y)=f_X(x),
\qquad
f_{Y\mid X}(y\mid x)=f_Y(y),
$$

等式在相关条件密度有定义的范围内按几乎处处意义理解。

</div>
</div>

#### 性质

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

**独立与不相关**

当相关的二阶矩有限时，独立可以推出协方差为 $0$；若两者方差均为正，则相关系数为 $0$。反过来，不相关一般不能推出独立。

例如，设 $X\sim U(-1,1)$，$Y=X^2$。由对称性，

$$
E(X)=E(X^3)=0,
\qquad
\operatorname{Cov}(X,Y)=E(X^3)-E(X)E(X^2)=0.
$$

但 $Y$ 完全由 $X$ 决定，二者不独立。具体地，令 $A=\{\lvert X\rvert\le1/2\}$、$B=\{Y\le1/4\}$，则 $A=B$，且

$$
P(A\cap B)=\frac12\ne\frac14=P(A)P(B).
$$

对于联合服从二维正态分布的变量，不相关与独立等价；不能把这一结论推广到任意分布。

</div>
</div>

#### 判断

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**判定步骤与常见错误**

1. 确认给出的是联合分布函数、联合分布律还是联合密度。
2. 求出两个边缘分布。
3. 使用对应的乘积判据；证明独立需要满足整个判据，否定独立只需找到有效的反例。

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

例如，若 $X,Y$ 独立且都服从 $U(0,1)$，令 $Z=X+Y$，则联合密度在单位正方形内等于 $1$。事件 $X+Y\le z$ 对应直线下方区域，因此

$$
F_Z(z)=
\begin{cases}
0, & z\le0,\\
\frac{z^2}{2}, & 0\lt z\le1,\\
1-\frac{(2-z)^2}{2}, & 1\lt z\lt 2,\\
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

**卷积公式——和的分布**

若 $(X,Y)$ 具有联合密度，令 $Z=X+Y$，则

$$
f_Z(z)=\int_{-\infty}^{+\infty}f(x,z-x)\,\mathrm dx
=\int_{-\infty}^{+\infty}f(z-y,y)\,\mathrm dy.
$$

若 $X,Y$ 独立，则化为**卷积公式**：

$$
f_Z(z)=\int_{-\infty}^{+\infty}f_X(x)f_Y(z-x)\,\mathrm dx.
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
f_Z(z)=\int_{-\infty}^{+\infty}f(z+y,y)\,\mathrm dy.
$$

- **积 $Z=XY$**：

$$
f_Z(z)=\int_{x\ne0}\frac1{|x|}
f\left(x,\frac zx\right)\,\mathrm dx.
$$

- **商 $Z=X/Y$**：

$$
f_Z(z)=\int_{-\infty}^{+\infty}|y|f(zy,y)\,\mathrm dy.
$$

联合具有密度时，$P(Y=0)=0$，所以商可在 $Y=0$ 的零概率事件上任意定义而不影响分布。

这些公式都可以通过变量替换推导。实际积分范围仍由原联合密度的非零区域决定，积的公式中 $x=0$ 附近若出现瑕积分，应按相应积分含义处理。

</div>
</div>

<div class="card" markdown="1">
<div class="card-body" markdown="1">

**补充：二维变换与雅可比公式**

若定义 $U=g(X,Y)$、$V=h(X,Y)$，变换在相应区域内一一对应，具有连续可微的逆变换

$$
x=x(u,v),\qquad y=y(u,v),
$$

且雅可比行列式非零，则在变换后的区域内，

$$
f_{U,V}(u,v)
=f_{X,Y}(x(u,v),y(u,v))
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|.
$$

区域外密度为 $0$。若变换分段一一对应，应对所有有效逆分支的贡献求和。

只需求一个函数 $Z=g(X,Y)$ 的分布时，可以选取一个辅助变量，将问题补成二维变换，求出联合密度后再对辅助变量积分。和、积、商的密度公式都可以用这一方法得到。

</div>
</div>
