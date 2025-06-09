!!! Abstract
    **课程信息**
    - 黄忠东老师授课。
  
    - 参考用书：《Database System Concept》, 7th Edition

    - Grading Policy
    
!!! 这门课讲什么
    在这门课程中，我们将学习到有严格事务要求(data access requirement)的结构化数据(data type)的管理。

特别感谢Github上[@yile-liu](https://github.com/yile-liu/ZJU_database_system)老师的数据库系统笔记。

<!-- ## 数据库概念

### 使用一般的文件处理系统可能产生的问题

- 数据冗余(redundancy)和不一致(inconsistency)

- 访问数据的困难性
  对于每个新的任务，需要写新的程序来实现

- 完整性(integrity)问题

    - 完整性约束(例如要求成绩必须>0)表示不明显

    - 修改和新增操作较为繁琐(需要修改程序代码)

- 更新异常 -->

## Relational Model

我们来看一个例子：

![relation_example](images/DB/db1.png)

在这个例子中，蓝底的列名被称为**attributes(属性)**，下面的每一行被称为一个**tuple(元组)**。我们给定 $A_1, A_2, …, A_n$ 是一系列attributes，那么

$$
R = (A_1, A_2, …, A_n )
$$

被称为**relation schema**。一般地，我们用 $R$ 等大写字母表记一个relation schema，用 $r$ 等小写字母表记一个 relation instance。

每一列的所有可取值(取值范围)被称为它的**domain**。我们给定列 $A_i$ 的 domain 是 $D_i$ ，那么从形式上说，一个**relation**就是 $D_1 \times D_2 \times ... \times D_n$ 的一个子集。

换句话说，一个relation instance就是一张表格，每一行代表一个事物，每一列代表一项属性。

一个**数据库(Database)**就是由多个relation组成的。这一点在后续SQL部分还会有所体现。

我们定义一个概念：**键(key)**，并规定键 $K \subseteq R~\mbox{(Relation Schema)}$，键实际上就是一个列名。

- $K$ is a **superkey** of $R$ if values for $K$ are sufficient to identify a unique tuple of each possible relation $r$.

- Superkey $K$ is a **candidate key** if the number of attributes in $K$ is minimal (If we remove one more attribute in $K$, $K$ will not be a superkey).
    
    Note that <u>Candidate key can have more than one attribute</u>.

- One of the candidate keys is selected to be the **primary key(主键)**.

- **Foreign key(外键)** constraint: Value in one relation must appear in another.

    Assume there exists relations $r$ and $s$: $r(A,B,C)$, $s(B,D)$, we can say that attribute $B$ in relation $r$ is foreign key referencing $s$, and $r$ is a referencing relation, and $s$ is a referenced relation.

    referencing relation 是“引用”，其表述的是外键所在的relation；referenced relation 是“被引用”，其表述的是被引用的键所在的relation。

## Relational Algebra

需要注意：

- 关系代数的输入和输出都是relations。

### 基础操作

| 操作 | 表达式 | 含义 |
| :--: | :--: | :--: |
| 选择 | $\sigma_{p}{(r)}$ | 单关系操作。返回关系 $r$ 中满足关系式 $p$ 的元组的关系 |
| 投影 | $\Pi_{~A_1,A_2,...,A_3~}{(r)}$ | 单关系操作。返回关系 $r$ 中属性为 $A_1, A_2, ..., A_n$ 的列并**去重** |
| 重命名 | $\rho_{x}{(E)}$ | 单关系操作。将 $E$ 重命名为 $x$ 并返回 |
| 集合并 | $r \cup s$ | 将两个属性数相等且所有属性的域相同的两个关系合并为同一个关系，并**去重** |
| 集合差 | $r - s$ | 返回<u>属于关系 $r$ </u>却不出现在关系 $s$ 中的元组的关系 |
| 笛卡尔积 | $r \times s$ | 返回任意两个关系的元组组合 (两个关系的属性应不相交，否则应重命名) |

### 进阶操作

| 操作 | 表达式 | 含义 |
| :--: | :--: | :--: |
| 集合交 | $r \cap s$ | 取同时出现在两个关系中的元组，可转化为 $r - (r - s)$ |
| 自然连接 | $r \bowtie s$ | 取两个关系公共属性中具有**相同属性值**的元组进行拼接 |
| $\theta$ 连接 | $r \bowtie_{\theta} s$ | 返回满足关系式 $\theta$ 的自然连接结果 |
| 外连接：<br>左外连接<br>右外连接<br>全外连接</br> | <br>$r~⟕~s$<br>$r~⟖~s$<br>$r~⟗~s$</br> | <br>左外连接表示在保留左表所有记录的同时，进行join操作，以此类推。 |
| 除 | $r \div s$ | $r \div s = \{ t \mid t \in \Pi_{R - S}{(r)} \cap \forall u \in s (t \times u \in r) \}$，找出与“除数”关系中所有元组都有联系的元组 |
| 赋值 | $r \leftarrow E$ | 将右边的计算结果赋值给左边的表 |
| <br>聚集 | <br>$_{G_1, G_2, ..., G_n}~\mathcal{G}_{F_1(A_1), F_2(A_2), ..., F_n(A_n)}{r}$ | $G_i$ 是用于分组的属性 (可为空) ，$F_i$ 是聚集函数，$A_i$ 是属性名。聚集操作对一组值执行计算并返回单个值，它对数据集合进行"纵向"计算 (跨多行计算)。假设已经指定用于分组的属性，则按指定属性将关系划分为多个组，对每个组独立应用聚合函数，每组产生一个结果元组 |

## SQL

SQL，全称结构化查询语言。

### 基础SQL

### 进阶SQL

## 数据库设计范式

## 存储

### 存储层级

![storage](images/DB/db2.png)

上图中的是否易失是根据掉电后数据会不会丢失区分的。

### 磁盘存储接口

存储设备通常直接连接到计算机系统上，因此往往需要一个接口。目前一些主流的存储设备协议家族有：

- SATA

    最近的SATA 3理论带宽可以达到 6Gbps。

- SAS

    第三代SAS理论带宽可达 12Gbps，第四代的理论带宽可达 22.5Gbps。

- NVMe

    是一种直接运行在PCIe总线上的高效协议。它通过PCIe接口访问非易失性数据，延迟更小，传输速度更快。
    NVMe 2.0采用PCIe 5.0 x4接口，理论带宽可达约 16GB/s。

我们也时不时需要在网络上存储数据。**SAN** 和 **NAS** 就是两种主流的网络存储架构。

- **SAN(Storage Area Networks，存储区域网络)**

    A large number of disks are connected by a high-speed network to a number of servers.

- **NAS(Network Attached Storage，网络附加存储)**

    Networked storage provides a file system interface using networked file system protocol, instead of providing a disk system interface.

### 磁盘工作机制

下图展示一个机械硬盘的结构：

![disk_mechanism](images/DB/db3.png)

1. **读写磁头 (Read-write head)**

    - 定位在盘片表面极近处（几乎接触）

    - 通过磁编码方式读取/写入信息  
   
    *技术说明：现代硬盘采用气浮技术保持3-10纳米间距，称为"飞行高度"(Flying Height)*

2. 盘片表面划分 
   
    - 由同心圆状的**磁道(Track)**组成  
   
    - 典型硬盘每盘片含50,000-100,000条磁道  
   
    *注：磁道密度随技术发展提升，HAMR(热辅助磁记录)技术可达200k+TPI(每英寸磁道数)*

3. 磁道结构 
   
    - 每条磁道划分为**扇区(Sector)**  
   
    - 扇区是物理读写的最小数据单元  
   
    - 典型扇区大小：512字节（现代高级格式盘为4K）  
   
    - 每磁道扇区数：  
        内圈磁道：500-1000个  
        外圈磁道：1000-2000个  
    
    *技术演进：ZBR(区位记录)技术使外圈磁道存储更多扇区*

4. 扇区访问机制

    - 磁臂摆动使磁头定位到目标磁道  
   
    - 盘片持续旋转，当扇区经过磁头下方时完成读写  
    
    *延迟组成：寻道时间(Seek Time) + 旋转延迟(Rotational Latency)*

5. **磁头-盘片组件(Head-Disk Assembly, HDA)**

    - 单个主轴安装多层盘片（通常1-5片）  
   
    - 每个盘面对应一个磁头，所有磁头安装在同一磁臂上  
   
    *关键参数：面密度(Areal Density) = 磁道密度 × 线性密度*

6. **柱面(Cylinder)**  
    
    - 由所有盘片的第 $i$ 号磁道组成柱面 $i$  
    
    *优化原理：同一柱面数据无需移动磁臂即可连续访问*

有了主机系统和存储设备，我们还需要一个主机系统与物理存储设备之间的桥梁来实现管理和优化数据存取。**磁盘管理器(Disk Controller)**就担当了这一角色。

磁盘管理器：

- 接收高层读写扇区指令 (解析来自操作系统的读/写扇区命令)

- 启动磁盘操作：例如驱动磁头移动到指定磁道、执行物理层面的数据读写操作等

- 数据校验管理：为每个扇区计算并附加**校验和(checksums)** (如CRC32/ECC)，读取时通过校验和验证数据完整性

    * 错误检测机制：当数据损坏时，存储的校验和与重新计算值不匹配的概率极高

- 写入验证：采用“写后读”(Read-After-Write)技术确保写入成功

- 坏扇区处理：执行坏扇区重映射 (remapping of bad sectors，通过备用扇区替换损坏区域)

### 磁盘性能评估

磁盘性能一般从以下维度评价：

- Access time 访问时间

    对HDD又可以细分为 Seek time 寻道时间 和 Rotation latency 旋转延迟。

- Data-transfer rate 数据传输速率

- IOPS 每秒I/O操作数

- Mean time of failure(MTTF) 平均故障时间

根据所访问数据的储存位置，可以将访问分为随机访问 (Random access)和顺序访问 (Sequential access)。顺序访问的上限主要由传输速率决定；随机访问的上限主要由IOPS决定，IOPS又主要由访问时间决定。

优化磁盘性能的常见方式主要有：

- Buffering 缓冲区，避免重复读写相同数据

- Read-ahead 预读取

- Disk-arm-scheduling：针对HDD，相比让磁头来回摇摆，适当重排IO请求使磁头有序移动能减少平均寻道时间

    !!! 电梯算法

- File Organization：针对HDD，文件整理，使数据分布尽可能有序

- Wear Leveling：针对NVM和SSD，因为擦写寿命相对有限，需要实现负载均衡

### 闪存 Flash Storage

## 数据存储结构

从物理存储的层面上看，一个数据库由多个文件(files)组成，每个文件是记录(records)的有序序列，每条记录是字段(fields)的有序序列。

由于扇区的空间比较小且数目众多，在寻址时比较困难，所以操作系统就将多个扇区组合在一起，形成一个更大的单位，再对这个单位进行整体的操作。一般将这个单位称作**块(blocks)**。也就是说，操作系统是通过块来做为单位读取等操作数据的。而文件系统就是操作系统的一部分，<u>所以文件系统操作文件的最小单位是块</u>。

我们下面的讨论假设每条记录的大小都不超过一个块。

### 单条记录

#### 定长记录存储

按行存放 (Row-Oriented Storage) 的定长数据的增查改都容易实现：

- Store record i starting from byte $n * (i – 1)$, where $n$ is the size of each record.

- 访问数据是简单的，但是一条记录可能跨块存储。于是我们做出限定：记录不允许跨越块的边界。

删除一般有两种方式：

- 删除后的空位用链表串联供下次插入用 (如图所示：link all free records on a free list)

    ![file_deletion_1](images/DB/db4.png)

- 删除后将最下面的一个数据移到删除后的空位

但是数据还可以按列存放，称为 Columnar Representation 或 Column-Oriented Storage 。增删查改的实现与上面类似；按列存放更有利于向量运算。如果按属性访问多于按tuple访问，这种储存方式会更快。

#### 不定长记录存储

!!! Tip "为什么会有变长记录"
    - 多记录类型共存：单文件存储不同结构记录（如PostgreSQL的TOAST机制）

    - 变长字段：VARCHAR、TEXT、BLOB等类型

    - 重复字段：历史数据模型（如网状/层次模型）允许的多值属性

    例如，存储JSON数组时可能产生变长记录

用null-bit map解决允许为NULL的数据储存。n个允许为空的属性需要n个bit的空位图，空位图中某一bit为0/1意味着对应的属性不是/是空的。

> 需要注意的是memory不允许以bit为单位的读写，n不能被8整除时需要补齐到8的整倍数 (至少1Byte) 以实现Byte为单位的读写。

属性按照顺序存储。对于不定长的属性值，用定长的数据 $\mbox{(offset, length)}$ 间接表达，例如图中(21, 5)表示该属性从21号Byte开始且长度为5。
在定长的属性值存储完后再存储不定长属性值的本体。

![file_deletion_2](images/DB/db5.png)

### 槽式页(Slotted Page)

**Slotted Page(槽式页)** 是数据库系统中用于组织磁盘数据页的一种高效结构，特别适用于管理变长记录。

不定长数据的数据页一般采用两头夹击的结构便于对齐。

- 页头(Header)设计

    - 记录条目数：维护当前页内有效记录数(如PostgreSQL的`pd_lowe`)

    - 空闲空间尾指针：指向可用空间起始位置(如MySQL的`PAGE_FREE`)

    - 记录位置/大小数组：每个槽位存储(offset, length)二元组

- 记录移动策略

    数据页可以通过移动记录消除碎片，保持数据的连续性。

    但是需要注意，所有的相关指针必须同步原子性更新，否则会破坏数据的一致性。

- 指针间接访问。外部指针指向页头中指向实际数据的指针(二级指针)。

```mermaid
graph LR
A[外部指针] --> B[槽数组条目]
B --> C[实际记录位置]
```

### 文件记录组织

我们总需要一种方式组织单条数据和数据页，即它们如何分布在文件内部。下图是几种常见的结构：

![File_Organization](images/DB/db6.png)

#### 堆(Heap)文件管理

堆文件的**特性**有：

- 记录自由放置：记录可以插入到文件中任何有空闲空间的位置

- 记录固定性：记录一旦写入通常不移动（除非主动重组）

- 关键需求：需要高效定位空闲空间

我们可以采用**空闲空间映射表(Free-Space Map, FSM)**来快速定位有足够空闲空间的块。

- 对于一级FSM，每个块对应一个条目(1 entry per block)。每一个条目都用数位(一般最多到一个字节)来记录对应块中空余空间的比例。

- 我们来看一个例子：

    !!! Example

        在这个例子中，每个条目我们用3位，条目值除以8 ($2^3$) 的值就是块中剩余空间的比例。

        我们还可以采取二级FSM的方式加速大范围空闲块搜索。比如，对于这个示例，我们让每个二级条目对应4个一级条目，存储这4个块中的最大空闲比例。

- FSM会定期写入(非实时更新)磁盘，容忍暂时性不一致，这种暂时性的不一致会被检测并修复。通常采取的检测方式是，在实际分配时再次验证可用空间。

#### 顺序(Sequential)文件管理

这里的Sequential不是指储存空间上有序，而是指每一条数据逻辑关系上有序。在数据经常按某种排序先后取用时，可以考虑顺序文件系统。先后逻辑一般用类似指针的结构实现。

- 删除：使用指针链。改变指针指向以改变逻辑先后关系。空余位置的处理视单条数据的结构而定。

- 插入：需要先定位记录在何处插入。有剩余空间可以直接插入。但是如果当前block满了，只能插入到新block中(**overflow block**)。但我们又需要维持逻辑先后关系，这时就会形成下图所示的结构（为便于理解这里以定长数据为例）。
    
    ![overflow_block](images/DB/db7.png)

因为存在上图所示问题，在多次插入和删除之后指针系统会变得很低效，因此顺序文件系统需要适时Reorganize。

#### 多表聚簇(Multitable Clustering)文件管理

这种技术将多个逻辑上关联的表的记录混合存储在同一个物理文件块中，以优化关联查询性能。从实现上看，它是将频繁参与连接操作(如`JOIN`)的表记录存储在同一物理页或相邻页中。下面就是一个例子：

![example_of_mul_clus](images/DB/db8.png)

这可以提高查找的速度，但也意味着成倍的空间和增删改成本。

优势：

✅ 关联查询性能提升

✅ 减少连接操作的CPU开销

✅ 提高缓存局部性(相关数据同处CPU缓存行)

局限：

❌ 非关联查询可能变慢(如全表扫描单表)

❌ 插入/更新开销增加(需维护共置关系)

❌ 设计复杂度高(需预知查询模式)

我们也可以利用指针连接起一些关系的记录：

![pointer_mul_clus](images/DB/db9.png)

#### Table Partitioning

一个关系里的有些记录可以被分成一些更小的记录分别储存。

例如选课信息表，虽然从逻辑上所有学年的选课信息都在同一张表上，但是因为往年的数据几乎不需要增删查改，数据操作集中于当前学年，所以按照学年物理划分为多个储存文件将有助于提高性能。

#### B+ Tree File Index

B+树不仅可以作为索引的结构，还可以直接作为文件组织的结构。在下一章“索引”中会进行介绍。

### 数据字典存储(Data Dictionary Storage)

上面的三类文件组织都是对库中的实例而言的，但是数据库还有一些框架性的全局的信息需要储存，我们称为**Metadata**。**Data Dictionary**(亦称**system catalog**)就用来存储这些信息。

![data_dic_storage](images/DB/db10.png)

其中一种实现方式是用事先约定的固定的几个表，储存用户定义的信息。在磁盘中，这些metadata可以用下面的关系图表示：

![data_dic_storage_relation](images/DB/db11.png)

### 缓冲区/缓存

我们希望更快速地获取一些短时间内频繁使用的数据。**缓冲区(Buffer)**就是这样的角色。Buffer是主内存中用于存储磁盘块副本的专用区域。而**缓冲区管理器(Buffer Manager)**就是负责动态分配和管理内存缓冲区的核心子系统。

程序进程需要缓冲区中的数据时，它们就会唤起缓冲区管理器。

若该块已在缓冲区中，缓冲区管理器返回其在主内存中的地址。  

若该块不在缓冲区中，缓冲区管理器则：  

1. 在缓冲区内为该块分配空间  

2. 如有必要，置换(移出)其他块以腾出空间  
    
    - 仅当被置换块自上次磁盘读写后被修改过，才将其写回磁盘  

3. 将目标块从磁盘读入缓冲区，并向请求者返回其主内存地址

最常用的是LRU策略(Least Recently Used Stratergy)，即根据“最近访问过的内容更有可能再次被访问”的原则管理缓存内容。需要理解下图所示buffer的变化(实际上这部分内容计组也涉及过)：

![buffer_change](images/DB/db12.png)

其余缓存策略：

![other_buffer_rep_policy](images/DB/db13.png)

## 索引(Indexing)

索引机制旨在加速对目标数据的访问。我们生活中也会遇到索引，比如图书馆书目的索引。

一个**索引文件(index file)**由如下形式的记录(称为**索引条目(index entries)**)

![index_form](images/DB/db14.png)

其中，**search key(搜索键)**是所有列中被选中用来查找记录的属性(列名)。这里的指针都指向各条记录。

### 有序索引和无序索引

有两种基本的索引方式：**有序索引**和**无序索引**。这里的“序”指的是search key的值有无顺序。

无序索引比较常见的是**哈希索引(Hash indecies)**，其原理就是通过哈希操作分布，而哈希操作想必大家在FDS课程中都已经有所了解。

顺序索引可以根据不同的排序规则分类成：

- **Primary Index (clustering index)**

    索引(搜索键)的顺序与物理储存的顺序对应。

    ![primary_index](images/DB/db15.png)

    **Index-sequential file**: ordered sequential file with a primary index.


- **Secondary Index (non-clustering index)**

    物理存储不按照搜索键存储。每个索引条目指向一个指针桶，这个指针桶指向相同搜索键值的所有数据。

    ![secondary_index](images/DB/db16.png)

<u>二级索引必须是**稠密(Dense)**的</u>。一个稠密索引中，一条索引必须对应一个搜索键值，每个搜索键值都要有相应的索引对应。稠密索引对文件是否是顺序的没有要求。

![secondary_dense](images/DB/db17.png)

在上图中，文件并没有按照索引的搜索键`dept_name`存储，所以这是一个二级索引，同时是一个稠密索引。

与之对应的，**稀疏索引(Sparse Index)**指的是只有部分搜索键值有对应索引。

![sparse_index](images/DB/db18.png)

比如我们如果想找到搜索键值为K的记录：

- 找到比K小的搜索键值中最大的那个的索引

- 从索引指向的记录开始顺序查找

稀疏索引相较于稠密索引，其可以

- 显著减少索引体积；

- 维护成本低，增删操作时一般情况下只需要更新少量索引条目。例如：块内数据变动不触发索引更新，除非涉及块的边界键值。

但是，稀疏索引由于需要两步定位记录，所以整体上查询记录的效率不如稠密索引。

我们有一个较好的折中方案：**按数据块建立稀疏索引**：每个文件块（Block）在索引中对应一个条目，存储该块的最小搜索键值。

按照这个方案，我们可以继续嵌套下去，形成**多级索引(Multilevel Index)**。
