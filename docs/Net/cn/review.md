# 期末复习

> ~~孩子们，这门课真的不能速通...~~
> 本页内容由 Gemini 3 Pro 生成后再人工修改，不免存在疏漏，恳请读者朋友们斧正。

---

## 第一章：引言
*   **网络模型**：
    *   **C/S 模式**：客户端/服务器模式。
    *   **P2P 模式**：对等网络模式。
*   **网络硬件分类**：
    *   按传输技术：广播式网络、点对点网络。
    *   按规模：PAN (蓝牙，RFID)、LAN (以太网/WiFi)、MAN (有线电视)、WAN (由主机和子网组成，子网由传输线和交换设备组成)、互联网络 (Inter-networks)。
*   **网络软件**：
    *   **协议 (Protocol)**：通信双方关于如何通信的协议，定义了报文格式和意义。
    *   **服务 (Service)**：层与层之间的接口，下层为上层提供的原语操作。
*   **参考模型**：
    *   **OSI (Open Systems Interconnection) 模型**：7层（物理、数据链路、网络、传输、会话、表示、应用）。
    *   **TCP/IP 模型**：4层（主机-网络、互联、传输、应用）。
    !!! Note "OSI 和 TCP/IP 参考模型的不同"
        -   服务/接口/协议
            -   OSI 对这三个核心概念加以明确区分；TCP/IP 则没有清晰划分。
        -   设计方法
            -   OSI 模型优先；TCP/IP 协议优先。
        -   层数不同。
        -   面向连接 vs 无连接
            -   OSI 认为“网络应该尽力提供完美的连接”，所以网络层支持面向连接和无连接两种方式，传输层是面向连接的；TCP/IP 认为网络内部应该尽可能简单，复杂的逻辑应该放在网络边缘的设备上，所以网络层是无连接的，传输层支持面向连接和无连接两种方式。
    *   我们使用五层模型（物理、数据链路、网络、传输、应用）。
*   网络的例子：
    *   因特网（从 1969 年 12 月发明的 APARNET 发源）；
    *   无线局域网：802.11.
*   **网络标准相关**：
    *   ITU，国际电信联盟
    *   ISO，国际标准化组织
    *   IEEE，电气与电子工程师协会；主要负责 LAN 和 MAN 标准
    *   IAB，互联网架构委员会
        *   IAB 有两个主要分支： IRTF + IETF（研究、工程）
        *   RFC 是 IETF 发布的所有互联网正式标准的文件形式。

---

## 第二章：物理层
!!! Abstact "要点速览"
    -   理论基础
    -   传输介质
    -   数字调制 (Modulation) 与复用 (Multiplexing)
    -   公共交换电话网络，PSTN

### 数据通信的理论基础

#### 1. 码元速率 vs 数据速率
*   **码元速率 (Symbol Rate / Baud Rate):** 信号每秒变化的次数（波特率）。
*   **数据速率 (Data Rate / Bit Rate):** 每秒传输的比特数 (bps)。
*   **关系公式:** $\text{Data Rate} = \text{Symbol Rate} \times \text{Bits per Symbol}$
*   例如，
    *   QAM/多电平: 如果使用8个离散电压电平，1个码元可以代表 $\log_2 8 = 3$ 个比特。此时 Data Rate = 3 * Symbol Rate。
    *   曼彻斯特编码 (Manchester): 使用电压跳变（高变低或低变高）来表示1或0。需要2个码元（半个周期高，半个周期低）来表示1个比特。此时 Data Rate = 1/2 * Symbol Rate。

#### 2. 奈奎斯特定理
*   **适用场景:** 理想的、**无噪声** 信道。
*   **公式:**
    *   最大数据速率 $B = 2H \log_2 V$ (bits/sec)，H为带宽，V为离散电平数。
    *   最大码元速率 $S = 2H$

#### 3. 香农定理
*   **适用场景:** 带有**随机噪声（高斯白噪声是最普遍的噪声模型）** 的信道。
*   **公式:** 最大数据速率 $B = H \log_2 (1 + S/N)$ (bits/sec)
*   **信噪比 (SNR):** 公式中的 $S/N$ 是比值，但通常题目给出的是分贝 (dB)。
    *   换算公式: $\text{dB} = 10 \log_{10} (S/N)$
    *   例子: 20dB 意味着 $S/N = 100$；30dB 意味着 $S/N = 1000$。**计算时一定要先将dB换算成比值代入公式。**

### 传输介质

*   **有线传输 (Guided):**
    *   磁介质、双绞线 (Twisted pair)、同轴电缆 (Coaxial cable)、电力线、**光纤 (Fiber optics)**。
*   **无线传输 (Wireless):**
    *   无线电 (Radio)、微波 (Microwave)、红外与毫米波、光波传输。
    
    ![freq-of-waves](/Notes/images/Network/freq.png){ width="600" style="display: block; margin: 0 auto;" }

### 数字调制与复用 (Digital Modulation and Multiplexing)

#### 1. 传输方式
*   **基带传输:**
    *   信号占用从0到最大值的频率。
    *   **编码方式**
        *   **NRZ (不归零):** 高电平1，低电平0。
        *   **NRZI (倒不归零):** 遇到1翻转，遇到0保持。
        *   **Manchester (曼彻斯特):** 每一位中间都有跳变。1是高到低，0是低到高（或反之）。用于时钟同步。
        *   **AMI (双极性):** 0不跳变，1交替为正负电压。
*   **通带传输:**
    *   信号占用载波频率周围的一段频带。
    *   **调制方式:** 调节振幅、频率、相位。
    *   **星座图 (Constellation diagrams)**
        *   **QPSK:** 4个点，每个点2 bit。
        *   **QAM-16:** 16个点，每个点4 bit。
        *   **QAM-64:** 64个点，每个点6 bit。
        *   点越多，传输速率越高，但抗干扰能力越差。

#### 2. 复用技术 (Multiplexing)

*   **FDM (频分复用):** 分割频率。
*   **TDM (时分复用):** 分割时间片。
*   **WDM (波分复用):** 在光纤上使用不同波长的光（本质是高频FDM）。
*   **CDM (码分复用 / CDMA):**
    *   **原理:** 每个站点被分配唯一的**码片序列 (Chip sequence)**。
    *   **正交性 (Orthogonal):** 任意两个不同站点的码片序列向量的点积为0 ($S \cdot T = 0$)，自己的点积为1 ($S \cdot S = 1$)。
    *   **发送:** 发送1发码片序列 $S$，发送0发反码片序列 $\bar{S}$ (即 $-S$)。
    *   **接收 (Recovery):** 将接收到的叠加信号与目标站点的码片序列做**内积**。
        *   结果为 +1: 发送了比特 1。
        *   结果为 -1: 发送了比特 0。
        *   结果为 0: 该站点未发送数据。

!!! Example "例子"
    ![CDM-Eg](/Notes/images/Network/CDM-Eg.png){ width="600" style="display: block; margin: 0 auto;" }

### 公用交换电话网络 (PSTN)

PSTN 包含三个部分：本地回路 (Local loops)、干线 (Trunks)、交换局 (Switching offices)。

#### 1. 本地回路 (Local loop)
*   连接用户到交换局。
*   **技术演进:** 拨号调制解调器 (Modem) -> **xDSL (数字用户线)**。
*   **ADSL (非对称 DSL):**
    *   带宽非对称（下载 > 上传）。
    *   **原理:** 使用 **离散多音频调制 (Discrete Multitone Modulation)**。将带宽分割成许多个4kHz的子信道，本质上是FDM。

#### 2. 干线 (Trunks)
*   连接交换局之间，使用复用技术 (FDM 或 TDM)。
*   **T1 Carrier (T1载波):**
    *   使用 **TDM** (时分复用)。
    *   **容量:** 复用 **24** 个语音信道。
    *   **帧结构:** 
        *   每个信道采样 8 bit (7 data + 1 control)。
        *   一帧 = 24 * 8 + 1 (framing bit) = **193 bits**。
        *   采样率 8000次/秒。
    *   **总速率:** $193 \text{ bits} \times 8000/\text{sec} \approx \textbf{1.544 Mbps}$。

#### 3. 交换技术对比 (Switching)
*   **电路交换 (Circuit-switched):** (如传统电话)
    *   需要建立连接 (Call setup)。
    *   物理路径独占，带宽固定。
    *   资源浪费 (Wasted bandwidth) 如果不传输数据。
*   **分组交换 (Packet-switched):** (如Internet)
    *   不需要建立连接。
    *   没有独占路径，带宽动态分配。
    *   存在排队延迟，可能发生拥塞。

---

## 第三章：数据链路层

### 数据链路层的服务

数据链路层向网络层提供三种类型的服务：

1.  **无确认无连接服务 (Unacknowledged connectionless):** 发送方直接发，不需建立连接，接收方也不回复ACK（如以太网）。
2.  **有确认无连接服务 (Acknowledged connectionless):** 不需建立连接，但每帧都需要确认（如Wifi）。
3.  **有确认面向连接服务 (Acknowledged connection-oriented):** 建立连接，每帧确认，编号保证顺序。

---

### 成帧

如何将比特流划分成“帧”？课件列出了四种方法：

1.  **字节计数法 (Byte count):** 头部带一个长度字段。缺点：如果长度字段出错，后续同步会完全丢失。
2.  **字节填充法 (Byte stuffing):** 使用特定的 FLAG 字节作为帧的开始和结束。如果数据中出现了 FLAG，则使用转义字符（ESC）进行填充。
3.  **比特填充法 (Bit stuffing):**
    *   使用 `01111110` 作为边界标志。
    *   **规则：** 发送方只要检测到数据中有**连续5个1**，立即在后面插入一个**0**。接收方做逆操作。
4.  **物理层编码违例法:** 使用物理层中非法的信号电平（如曼彻斯特编码中没有跳变的信号）来界定帧。

### 差错控制

#### 1. 海明距离 (Hamming Distance)
这是理论核心。
*   **定义：** 两个码字之间不同比特的个数。**海明距离**是指整个编码集中任意两个有效码字之间距离的最小值。
*   **纠错与检错能力（重点公式）：**
    *   **检测 d 个错误 (Detect d errors):** 需要海明距离 **$D \ge d + 1$**。
        *   *解释：* d个错误无法将一个有效码字变成另一个有效码字。
    *   **纠正 d 个错误 (Correct d errors):** 需要海明距离 **$D \ge 2d + 1$**。
        *   *解释：* 即使发生d个错误，错误的码字离原本的码字依然比离其他任何有效码字都近。
    *   *例子:* 要纠正2个错误，需要海明距离为5的编码。如果只有距离3，无法纠正2个错误。

#### 2. 检错码
*   **校验和 (Checksum):**
    *   **Internet 16-bit 1's complement checksum:** 将数据按16位分组相加，如果有进位则回卷（加到末尾），最后取反码。
*   **循环冗余校验 (CRC):**
    *   基于多项式除法。
    *   **计算步骤：**
        1.  将数据看作多项式 $M(x)$。
        2.  生成多项式 $G(x)$ 的阶数为 $r$（即最高次幂）。
        3.  在 $M(x)$ 后面补 $r$ 个 0。
        4.  使用**模2除法**（即异或运算，不借位减法）用补0后的数据除以 $G(x)$。
        5.  余数即为校验码（FCS），附加到数据后面发送。
    
    !!! Example "CRC 计算示例"
    
        ![CRC](/Notes/images/Network/CRC.png){ width="600" style="display: block; margin: 0 auto;" }

### 流量控制

控制发送速率，防止接收方缓存溢出。

#### 1. 停等协议 (Stop-and-Wait)
*   **机制：** 发送一帧，等待ACK，再发下一帧。
*   **利用率 (Utilization/Efficiency) 计算（重点）：**
    *   $$U = \frac{T_{frame}}{T_{cycle}} = \frac{T_{frame}}{T_{frame} + 2 \times T_{prop}}$$
    *   令 $\alpha = T_{prop} / T_{frame}$，则 $U = \frac{1}{2\alpha + 1}$。
    *   **$T_{prop}$ (传播延迟):** 距离 / 光速。
    *   **$T_{frame}$ (发送延迟):** 帧大小 / 带宽。

!!! Example "Question - 停等协议"
    Assume A sends B packets with payload of 100 bytes using stop-and-wait. Assume the header overhead is 40 bytes, and the ACK size is 60 bytes. What is the effective utilization (i.e., transmission of payload data is useful and effective) from A to B? Transmission rate=$100$ Mbps, and Propagation time (传输时延) =$12 \mu$s. 

    ??? Success "Answer"
        为了计算从 A 到 B 的有效利用率，我们需要计算发送一个完整数据包所需的总周期时间，以及其中用于传输有效载荷的时间。

        首先，统一物理量单位：

        *   传输速率 $R = 100 \text{ Mbps} = 10^8 \text{ bps}$
        *   有效载荷 $L_{payload} = 100 \text{ bytes} = 800 \text{ bits}$
        *   报头开销 $L_{header} = 40 \text{ bytes} = 320 \text{ bits}$
        *   数据包总大小 $L_{data} = 100 + 40 = 140 \text{ bytes} = 1120 \text{ bits}$
        *   确认帧大小 $L_{ack} = 60 \text{ bytes} = 480 \text{ bits}$
        *   传输时延 $t_{prop} = 12 \mu\text{s}$

        接着，计算各项时间开销：

        1. 数据包传输时延 $t_{data} = \frac{L_{data}}{R} = \frac{1120}{10^8} = 11.2 \mu\text{s}$
        2. 确认帧传输时延 $t_{ack} = \frac{L_{ack}}{R} = \frac{480}{10^8} = 4.8 \mu\text{s}$
        3. 有效载荷传输时间 $t_{payload} = \frac{L_{payload}}{R} = \frac{800}{10^8} = 8 \mu\text{s}$

        在停止-等待协议中，一个完整的周期 $T_{total}$ 包括：发送数据包的时间、数据包到达 B 的传播时间、B 发送确认帧的时间、确认帧到达 A 的传播时间。

        $T_{total} = t_{data} + t_{prop} + t_{ack} + t_{prop}$

        $T_{total} = 11.2 \mu\text{s} + 12 \mu\text{s} + 4.8 \mu\text{s} + 12 \mu\text{s} = 40 \mu\text{s}$

        有效利用率定义为传输有效载荷的时间与总周期的比值：
        $U_{eff} = \frac{t_{payload}}{T_{total}} = \frac{8 \mu\text{s}}{40 \mu\text{s}} = 0.2$

        因此，有效利用率为 **20%**。


#### 2. 滑动窗口协议 (Sliding Window)
*   允许发送方在收到ACK之前发送多个帧（管道化）。
*   **利用率：** 如果窗口足够大，可以使信道利用率接近 100%。
    *   $U = \frac{N \times T_{frame}}{T_{frame} + 2T_{prop}}$ （当 $N$ 较小时）
    *   理想窗口大小 $N \approx 2\alpha + 1$。

#### 3. 两种ARQ协议对比（重点记忆窗口大小限制）

| 协议 | Go-Back-N (GBN) | Selective Repeat (SR) |
| :--- | :--- | :--- |
| **接收窗口** ($W_r$) | **1** (只能按序接收，出错丢弃后续所有) | $1 < W_r \le W_s$ (可以缓存乱序到达的帧) |
| **发送窗口** ($W_s$) | $W_s \le 2^n - 1$ (MAX_SEQ) | $W_s + W_r \le 2^n$ ($W_s$ 的最大值最小为 $2^{n-1}$) |
| **出错处理** | 重传出错帧及其**之后所有**已发送帧 | **只重传**出错的那一帧 |
| **ACK机制** | 累积确认 (Cumulative ACK) | 单独确认 |

*   *但请注意*，对于SR协议我们一般默认**发送窗口等于接收窗口**。也即SR协议下，如果序列号是3 bit (0-7)，发送窗口最大只能是4，否则接收方无法区分是重传的旧帧还是新的帧。

### 数据链路层协议实例：PPP

PPP是广域网中常用的点对点协议（如ADSL, SONET）。

*   **特点：** 面向字节，用于路由器之间或主机到ISP。
*   **三个组成部分：**
    1.  **成帧 (Framing):** 定义帧的边界，支持检错。
    2.  **LCP (Link Control Protocol):** 用于建立、测试和拆除数据链路连接（身份验证等）。
    3.  **NCP (Network Control Protocol):** 协商网络层参数（例如，为每一方分配IP地址）。不同的网络层协议需要不同的NCP。

---

## 第四章：介质访问控制子层

**MAC 层 (Medium Access Control Layer)** 是数据链路层的一个子层（下层）。

*   **功能：** 它的核心任务是**“控制谁有权在什么时候说话”**。
*   **为什么需要它：** 因为通信介质（网线、WiFi空气）往往是**共享**的。如果大家都同时说话，就会吵作一团（发生冲突 Collision）。
*   **它做什么：** 它定义了一套协议（如 CSMA/CD, CSMA/CA, ALOHA），用来侦听信道、处理冲突、决定发送时机。
*   **类比：** 这就是十字路口的**红绿灯**或者交警，或者是大家约定俗成的“先来后到”的**规则**。

### 信道分配问题

网络传输主要有两种分配信道的方式：

1.  **静态信道分配 (Static Channel Allocation):**
    *   **FDM (频分复用) / TDM (时分复用):** 将带宽或时间片平均分配给每个用户。
    *   **缺点：** 无法适应突发流量 (Bursty traffic)。如果有N个用户，但只有少数几个在发送数据，大部分频谱或时间片就会被浪费；且当用户数动态变化时，难以扩展。
2.  **动态信道分配 (Dynamic Channel Allocation):**
    *   这是MAC层的核心。所有的站通过一个共享信道进行通信，需要协议来决定谁在什么时候发送。
    *   **五个关键假设：**
        1.  **站模型：** 独立的站点，产生帧。
        2.  **单一信道：** 所有通信都在这一条共享介质上进行。
        3.  **冲突 (Collision)：** 如果两帧重叠，则信号混淆，传输失败。
        4.  **时间：** 可能是连续的（随时发送），也可能是分槽的（Slotted，只能在特定时间起点发送）。
        5.  **载波侦听 (Carrier Sense)：** 站点在发送前能知道信道是否忙（或者不能，如ALOHA）。

### 设备识别 - MAC 地址
**MAC 地址 (Media Access Control Address)** 是硬件设备的唯一标识符。

*   **定义：** 它是一个 48位（6字节）的二进制数，通常写成十六进制（如 `00:1A:2B:3C:4D:5E`）。
*   **来源：** 它通常在出厂时就被烧录在网卡（NIC）里，全球唯一（理论上）。
*   **作用：** 用来在局域网（LAN）内区分不同的设备。

#### MAC 地址与 MAC 层

MAC 层是**动作的执行者**，MAC 地址是**动作的操作对象**。

*   关系一：**封装与寻址** (Encapsulation & Addressing)

    当 MAC 层决定“现在可以发送数据了”（比如通过了 CSMA/CD 的检测），它需要把上层（网络层/IP）传下来的数据包包装成一个**帧 (Frame)**。

    *   **MAC 层的工作：** 制造这个帧的头部 (Header)。
    *   **MAC 地址的角色：** 这个头部里必须填上**“发给谁”（目的 MAC 地址）**和**“谁发的”（源 MAC 地址）**。
        *   如果没有 MAC 地址，MAC 层虽然抢到了说话的机会，但不知道把话传给谁。

*   关系二：**过滤与接收** (Filtering)

    当一个帧在网线上跑的时候，所有的网卡都能收到信号。

    *   **MAC 层的工作：** 网卡的 MAC 层硬件会检查收到的每一帧。
    *   **MAC 地址的角色：** 硬件会比对帧头里的**目的 MAC 地址**和**自己的 MAC 地址**。
        *   **如果匹配：** MAC 层收下数据，把外壳拆掉，把里面的数据上传给上层。
        *   **如果不匹配：** MAC 层直接丢弃这个帧（除非是广播帧）。
        *   *这就是为什么你在局域网里不会处理发给别人的数据，全靠 MAC 层对比 MAC 地址来实现。*

*   关系三：**交换机的运作基础**

    交换机（Switch）是工作在 MAC 层的设备。

    *   交换机内部有一张表（MAC 地址表）。
    *   交换机利用 MAC 层的逻辑，读取帧里的 MAC 地址，来决定从哪个端口转发数据。

| 维度 | MAC 层 | MAC 地址 |
| :--- | :--- | :--- |
| **本质** | **协议 / 机制 / 算法** (Logic) | **标识符 / 名字** (Data) |
| **比喻** | 邮递系统、交通规则 | 收件人名字、车牌号 |
| **作用** | 控制信道访问，避免冲突，成帧 | 唯一标识网络设备 |
| **关系** | **MAC 层**协议在发送数据帧时，必须使用**MAC 地址**来标记源和目的。 |

### 多路访问协议

#### 1. ALOHA 协议
*   **纯 ALOHA (Pure ALOHA):**
    *   **机制：** 想发就发，不看时间。
    *   **冲突处理：** 发送后侦听，若冲突则等待随机时间重发。
    *   **效率：** 非常低，最大吞吐量仅为 **18.4%** ($1/2e$)。
    *   **冲突窗口 (Vulnerable period):** $2t$（t为帧传输时间）。因为你发送时，可能碰到刚刚发的帧，或者你发到一半别人开始了。
*   **分槽 ALOHA (Slotted ALOHA):**
    *   **机制：** 时间被划分为离散的槽（Slot），只能在槽的开始处发送。
    *   **效率：** 提高了一倍，最大吞吐量为 **36.8%** ($1/e$)。
    *   **冲突窗口：** 减小为 $t$。

![ALOHA](/Notes/images/Network/ALOHA.png){ width="600" style="display: block; margin: 0 auto;" }

#### 2. CSMA 协议 (载波侦听多路访问)
为了避免ALOHA那样盲目发送导致的冲突，引入了“先听后说”机制。
*   **1-坚持 CSMA (1-persistent):** 侦听到信道忙，就持续监听；一变空闲，**立即 (概率=1)** 发送。
    *   缺点：如果有两个人在等，一空闲两人同时发，必冲突。
*   **非坚持 CSMA (Non-persistent):** 侦听到信道忙，就不听了，等待一个**随机时间**后再来侦听。
    *   优点：减少了冲突。
    *   缺点：增加了延迟（信道空闲时可能没人发）。
*   **p-坚持 CSMA (p-persistent):** 侦听到信道空闲，以概率 $p$ 发送，以概率 $1-p$ 推迟。适用于分槽信道。

#### 3. CSMA/CD (带冲突检测的CSMA) - 以太网的基础
*   **机制：** “边听边说”。
    1.  侦听信道，空闲则发送。
    2.  发送过程中持续检测信号电压。
    3.  如果检测到冲突（电压异常），**立即停止发送**，并发送人为的干扰信号 (Jam signal) 强化冲突，让所有人都知道。
    4.  等待随机时间（退避）后重试。
*   **状态模型：** 信道在 **传输周期 (Transmission)**、**竞争周期 (Contention)** 和 **空闲周期 (Idle)** 之间切换。

#### 4. 无冲突协议 (Collision-Free Protocols)
为了在高负载下保证性能（CSMA在高负载下冲突剧烈，效率下降）。
*   **位图协议 (Bit-map / Reservation):**
    *   每一轮传输前有一个预留阶段（N个槽对应N个站）。
    *   想发送的站在自己的槽里置1。
    *   之后按顺序发送。效率高，但有预留开销。
*   **令牌传递 (Token Passing):**
    *   一个逻辑令牌在站点间传递，拿到令牌的才能发。不会冲突，但令牌丢失很麻烦（如令牌环网）。
*   **二进制倒计数 (Binary Countdown):**
    *   通过比较站点地址的二进制位来仲裁，高序号优先。信道利用率极高。

#### 5. 有限竞争协议 (Limited-Contention)
*   **自适应树遍历 (Adaptive Tree Walk):**
    *   低负载时像ALOHA（大家随便争抢）。
    *   发生冲突时，将站点分组（左子树和右子树），通过递归的方式减少竞争者数量，直到成功发送。

### 以太网 (Ethernet - IEEE 802.3)

#### 1. 经典以太网结构
*   **物理层：** 早期使用同轴电缆（10Base5, 10Base2），后来使用双绞线（10Base-T），最便宜；光纤（10Base-F）是在建筑间传输的最佳选择。
*   **编码：** 使用 **曼彻斯特编码**（保证时钟同步）。
*   **帧格式：**
    *   **前导码 (Preamble):** 7个字节的101010...用于同步硬件。
    *   **帧开始符 (SFD):** 10101011。
    *   **目的地址/源地址:** 6字节 MAC地址。
    *   **长度/类型:** 指示数据长度或上层协议。
    *   **数据:** 46 ~ 1500 字节。
    *   **校验和 (CRC):** 32位。

#### 2. 最短帧长限制 (Minimum Frame Size) - 重点
*   **原因：** 为了确保发送方在发送完整个帧之前，如果发生了冲突，一定能检测到冲突。
*   **条件：** **帧传输时间 $\ge$ 2 $\times$ 传播延迟 (RTT)**。
    *   如果帧太短，发送方发完了，冲突信号还没传回来，发送方就会误以为发送成功。
*   **规定：** 10Mbps以太网中，最大网络直径对应的RTT约为 $51.2\mu s$。
    *   $10 \text{Mbps} \times 51.2 \mu s = 512 \text{bits} = 64 \text{Bytes}$。
    *   所以，以太网帧最小必须是 **64字节**。如果**数据**不够46字节，必须**填充 (Pad)**。

#### 3. 二进制指数退避算法 (Binary Exponential Backoff)
*   **目的：** 发生冲突后，动态调整等待时间，以适应负载变化。
*   **规则：**
    1.  确定基本退避时间（Slot time）为 $51.2 \mu s$。
    2.  第 $i$ 次冲突后，在 $0$ 到 $2^k - 1$ 之间随机选一个数 $r$，$k = \min{i, 10}$，即上限为1023个槽。
    3.  等待 $r \times 51.2 \mu s$。
    4.  如果冲突达到16次，放弃传输并报错。

#### 4. 交换式以太网 (Switched Ethernet)
*   **集线器 (Hub):** 物理层设备，所有端口在一个**冲突域 (Collision Domain)**，带宽共享。
*   **交换机 (Switch):** 链路层设备，每个端口是一个独立的冲突域。
    *   支持全双工，没有冲突，不需要CSMA/CD（虽然协议仍支持）。
    *   背板带宽大，允许多对传输同时进行。

### 无线局域网 (Wireless LANs - 802.11)

无线环境与有线不同，信号会衰减，且无法做到完美的“边听边说”。

#### 1. 无线网络的特殊问题
*   **隐藏终端问题 (Hidden Terminal Problem):**
    *   A和C都在B的覆盖范围内，但A和C互听不到。
    *   A向B发数据，C不知道，也向B发数据 -> 在B处发生冲突。
    *   CSMA在这里失效，因为C侦听不到A。
*   **暴露终端问题 (Exposed Terminal Problem):**
    *   B向A发数据，C在B的范围听到B在忙。
    *   C想向D（A的反方向）发数据，C以为介质忙而不敢发。
    *   实际上C发给D并不干扰B发给A。C被“暴露”了，导致浪费带宽。

#### 2. CSMA/CA (带冲突避免的CSMA)
802.11 无法使用 CD（冲突检测），因为发送时自己的信号太强，掩盖了远程信号，且无线信道是半双工的。因此使用 **CA (Collision Avoidance)**。

*   **MACA / RTS-CTS 机制 (可选):**
    *   发送方先发一个短包 **RTS (Request To Send)**，包含要发数据的长度。
    *   接收方回复一个短包 **CTS (Clear To Send)**，也包含长度。
    *   **作用：**
        *   RTS 会被发送方附近的（如隐藏节点）听到 -> 它们保持沉默。
        *   CTS 会被接收方附近的听到 -> 它们保持沉默。
        *   从而解决了隐藏终端问题。
*   **NAV (网络分配向量):** 其他站点听到RTS或CTS中的时长信息后，设置一个虚拟计时器（NAV），在此期间不尝试发送。

#### 3. 帧间间隔 (IFS)
802.11 定义了不同优先级的等待时间：
*   **SIFS (Short IFS):** 最短。用于ACK、CTS等控制帧。优先级最高。
*   **PIFS (PCF IFS):** 中等。用于无竞争服务（轮询）。
*   **DIFS (DCF IFS):** 最长。用于普通数据传输竞争。

### 数据链路层交换

#### 1. 网桥 (Bridges)
*   连接不同的LAN。工作在混杂模式 (Promiscuous mode)。
*   **逆向学习 (Backward Learning):**
    *   网桥观察源MAC地址，建立一张 **哈希表 (MAC地址 -> 端口)**。
    *   如果目的MAC在表中：单播转发到对应端口（如果端口和源端口一样则丢弃）。
    *   如果目的MAC不在表中：**泛洪 (Flooding)** 到除入口外的所有端口。

#### 2. 生成树协议 (Spanning Tree Protocol)
*   **问题：** 如果网络中有环路（冗余链路），泛洪会导致**广播风暴**，帧会无限循环。
*   **解决方案：** 逻辑上切断某些链路，把图变成树。
*   **过程：**
    1.  选一个 **根网桥 (Root Bridge)**（ID最小的）。
    2.  每个网桥计算到根的最短路径。
    3.  关闭（Block）那些不在最短路径树上的端口。

#### 3. 虚拟局域网 (VLAN)
*   **概念：** 将局域网的物理连接和逻辑分组解耦。
*   **实现：** 通过软件配置交换机端口。属于同一VLAN的端口构成一个广播域，即使它们在不同的物理交换机上。
*   **802.1Q 标签：** 为了在交换机之间传递VLAN信息，在以太网帧头中插入了4字节的VLAN Tag（包含VLAN ID）。

---

## 第五章：网络层
### 网络层设计

网络层向传输层提供两种类型的服务：

1.  **无连接服务 (Connectionless Service - Datagrams):**
    *   **机制：** 每个数据包被独立路由。路由器不需要保留连接状态。
    *   **实现：** 路由器根据目标地址查找路由表，决定下一跳。
    *   **特点：** 鲁棒性强（某个路由器坏了，数据包可以走别的路），不需要建立连接 (Call setup)。
    *   **典型代表：** IP协议。
2.  **面向连接服务 (Connection-oriented Service - Virtual Circuits):**
    *   **机制：** 在数据传输前必须建立连接（虚电路），所有数据包沿着同一条路径传输。
    *   **实现：** 使用标签交换（Label Switching）。路由表维护 (Input Port, Input Label) -> (Output Port, Output Label) 的映射。
    *   **特点：** 需要建立连接，保证顺序，资源预留（如ATM网络）。

### 路由算法 (Routing Algorithms)

#### 1. 路由模式分类
*   **Unicast (单播):** 点对点 (One-to-one)。
*   **Broadcast (广播):** 一对所有 (One-to-all)。
*   **Multicast (组播):** 一对多 (One-to-many)。
*   **Anycast (任播):** 一对最近的一个 (One-to-any)。

#### 2. 主要单播路由算法
*   **距离矢量路由 (Distance Vector - DV / Bellman-Ford):**
    *   **原理：** 每个路由器维护一张表，记录到**所有**目的地的**距离**和**下一跳**。
    *   **更新机制：** 周期性地与**邻居**交换自己的路由表。公式：$D_x(y) = min\{c(x,v) + D_v(y)\}$。
    *   **缺点：** 收敛慢 (Slow convergence)，存在“计数到无穷”问题。早期的度量标准是队列长度，但这忽略了带宽。
*   **链路状态路由 (Link State - LS / Dijkstra):**
    1.  发现邻居节点及其网络地址。
    2.  测量到邻居的开销（Cost/Metric）。
    3.  构造链路状态包（LSP）。
    4.  将 LSP **广播（Flooding）** 到全网，使每个路由器拥有完整的网络拓扑图。
    5.  使用 Dijkstra 算法计算到每个节点的最短路径。
  
    **对比 DV：** LS 收敛快，更健壮，但通过广播交换信息，消息量较大。

![Comp-LS-DV](/Notes/images/Network/Comp-LS-DV.png){ width="600" style="display: block; margin: 0 auto;" }

*   **分层路由 (Hierarchical Routing):**
    *   **目的：** 解决网络规模过大导致路由表过于庞大的问题。
    *   **方法：** 将网络划分为区域（Regions），路由器只知道本区域内的细节，去往其他区域的数据包只需知道通向该区域的路径，从而缩减路由表。

#### 3. 广播与组播路由
*   **广播 (Broadcasting):**
    *   **Flooding (泛洪):** 简单但浪费带宽。
    *   **Reverse Path Forwarding (RPF):** 只有当数据包从到达源节点的“最短路径”对应的接口到来时，才转发。
    *   **Spanning Tree (生成树):** 最佳方案（Optimal），沿着生成树发送，无环路且覆盖所有点。
*   **组播 (Multicasting):**
    *   基于生成树，但会进行**修剪 (Pruning)**。如果是没有组成员的分支，就不转发数据。

### 网络互连 (Internetworking)

当不同的网络（异构网络，如以太网、802.11、MPLS等）连接在一起时，需要解决兼容性问题。

1.  **多协议路由器:** 在网络层和链路层进行协议转换和处理。
2.  **隧道技术 (Tunneling):**
    *   **场景：** 两个相同类型的网络（如IPv6）通过一个异构网络（如IPv4）通信。
    *   **方法：** 将整个数据包（IPv6）封装在另一个协议（IPv4）的载荷中传输。
3.  **分片 (Fragmentation):**
    *   **原因：** 不同网络有不同的最大传输单元（MTU）。
    *   **策略：**
        *   透明分片：分片后在出口重组（对端无感知，但路由器压力大）。
        *   非透明分片：分片后由最终目的地主机重组（IP采用此方式）。
    *   **现代策略：** **路径MTU发现 (Path MTU Discovery)**。源主机先试探路径上最小的MTU，发送合适大小的包，避免分片。

### 软件定义网络 (SDN)
*   **核心思想：** 将**控制平面 (Control Plane)** 与 **数据平面 (Data Plane)** 分离。
*   **架构：**
    *   **数据平面：** 交换机/路由器，只负责根据流表 (Flow Table) 转发数据。
    *   **控制平面：** 远程控制器，负责计算路由、生成流表并下发给交换机。
    *   **接口：** 北向接口 (Northbound API) 面向应用；南向接口 (Southbound API) 面向设备 (如OpenFlow)。

### 互联网中的网络层

#### 1. IPv4 协议
*   **头部格式 (Header Format):**
    *   **Version:** 版本号 (4)。
    *   **IHL:** 头部长度 (单位是32-bit words，最小值为5，即20字节)。
    *   **Differentiated Services (DiffServ):** 服务类型，用于QoS（以前叫Type of Service）。
    *   **Total Length:** 头部+数据的总长度（最大65,535字节）。
    *   **分片相关字段:**
        *   **Identification:** 标识属于同一个数据包的分片。
        *   **DF (Don't Fragment):** 禁止分片位。
        *   **MF (More Fragments):** 还有后续分片。
        *   **Fragment Offset:** 偏移量（单位是8字节）。
    *   **TTL (Time to Live):** 生存时间，防止死循环，每经过一跳减1。
    *   **Protocol:** 上层协议（如TCP=6, UDP=17）。
    *   **Header Checksum:** 首部校验和（每跳都要重新计算，因为TTL变了）。
    *   **Source/Destination Address:** 32位源/目的IP地址。

#### 2. IP 地址规划
*   **CIDR (无类别域间路由):**
    *   **格式：** A.B.C.D/n (例如 192.24.0.0/19)，n表示前缀长度（网络号）。
    *   **最长前缀匹配 (Longest Matching Prefix):** 路由器在转发表中查找时，如果一个IP匹配多个表项，选择掩码最长（最具体）的那一个。
    *   **路由聚合 (Aggregation):** 将多个小的前缀合并为一个大的前缀通告，减少路由表条目。
*   **分类地址 (Classful - 已过时):** A类、B类、C类、D类（组播）、E类。
*   **特殊地址:**
    *   127.x.x.x (Loopback, 本地回环)。
    *   全0主机号：代表网络本身。
    *   全1主机号：代表该网络的广播地址。
*   **私有地址 (Private IPs):**
    *   10.0.0.0/8
    *   172.16.0.0/12
    *   192.168.0.0/16
    *   这些地址不能在公网上路由，通常配合 **NAT (网络地址转换)** 使用。

#### 3. NAT (Network Address Translation)

*   **作用：** 解决IPv4地址短缺。
*   **原理：** 路由器维护一张转换表，将 (内网IP, 内网端口) 映射为 (公网IP, 新端口)。
*   **过程：** 出去时替换源IP/端口，回来时替换目的IP/端口。

#### 4. IPv6 协议

*   **改进：** 128位地址，固定40字节头部（处理更快）。
*   **移除字段：** 取消了 Checksum（由链路层和传输层负责），取消了分片字段（由源端负责分片）。
*   **新字段：** Flow Label（流标签，用于QoS）。
*   **扩展头部 (Extension Headers):** 选项信息放在扩展头中，由 `Next Header` 字段指示。

#### 5. 互联网控制协议
*   **ICMP (Internet Control Message Protocol):**
    *   用于报告错误和网络探测。
    *   常见类型：Destination Unreachable（不可达）、Time Exceeded（TTL耗尽，Traceroute利用此原理）、Echo Request/Reply（Ping）。
*   **ARP (Address Resolution Protocol):**
    *   作用：已知 IP 地址，解析对应的 MAC 地址。
    *   工作在局域网内。
*   **DHCP (Dynamic Host Configuration Protocol):**
    *   作用：动态分配IP地址、网关、DNS等配置。
    *   前身是 RARP 和 BOOTP。

#### 6. 互联网路由协议 (Routing Protocols)

*   **自治系统 (AS - Autonomous System):** 一个管理实体下的网络集合（如一个ISP）。
*   **域内路由 (Interior Gateway Protocol - IGP):** AS内部使用。
    *   **RIP:** 基于距离矢量 (DV)，简单。
    *   **OSPF:** 基于链路状态 (LS)。支持大规模网络，收敛快。
        *   OSPF直接运行在IP之上。
        *   使用泛洪 (Flooding) 传播链路状态。
        *   使用 Dijkstra 计算路径。
*   **域间路由 (Exterior Gateway Protocol - EGP):** AS之间使用。
    *   **BGP (Border Gateway Protocol):** 
        *   基于 **路径矢量 (Path Vector)** (类似DV，但传播的是完整路径，防止环路)。
        *   核心关注点是 **策略 (Policy)** 和 **政治 (Politics)**，而不仅仅是性能。
        *   路由器之间通过 TCP 连接交换路由信息。

#### Intra-AS vs Inter-AS
*   **Intra-AS (如OSPF):** 关注**性能**，单一管理员，不需要复杂的策略。
*   **Inter-AS (如BGP):** 关注**策略**（谁能走我的网络），规模巨大（使用分层聚合），性能是次要的。


---

## 第六章：传输层
### 传输层服务接口：Berkeley Sockets
这是应用程序与网络协议栈交互的门户，提供了 8 个核心**原语 (Primitives)**：
*   **SOCKET**：创建一个新的通信端点。
*   **BIND**：将一个本地地址（IP+端口）与 socket 关联。
*   **LISTEN**：通告愿意接受连接，并设置等待队列的大小。
*   **ACCEPT**：被动接受一个进入的连接请求。
*   **CONNECT**：主动尝试建立一个连接（三次握手发起方）。
*   **SEND**：通过连接发送数据。
*   **RECEIVE**：从连接接收数据。
*   **CLOSE**：释放连接。

### 传输协议要素
这一部分对比了**传输层**与**数据链路层**的异同点。

*   **相似性**：都具备差错控制、排序（Sequencing）、流量控制等。
*   **核心区别 (Environment)**：
    *   **链路层**：两个节点通过**物理信道**直接通信（点到点）。
    *   **传输层**：通信跨越**整个网络**，环境更复杂（端到端）。
    *   例如，链路层的校验和保护一个帧，而传输层校验和保护一个段；在滑动窗口协议中，对链路层来说，停止-等待协议通常是足够的，而传输层会用更大的窗口。
*   **端到端论据 (End-to-End Argument)**：
    *   **链路层校验**：保护帧在单个链路上的传输，是非必需的，但对性能有价值（减少长距离重传）。
    *   **传输层校验**：保护段在整个路径上的完整性，是**确保正确性的核心**。

### UDP: 用户数据报协议
*   **特性**：无连接、不可靠、不保证顺序、不提供流量和拥塞控制。
*   **首部结构 (8 字节)**：
    *   源端口 - 16 bits
    *   目的端口 - 16 bits
    *   UDP 长度 - 16 bits
    *   UDP 校验和 - 16 bits
*   **应用场景**：RTP（流媒体）、DNS（域名解析）、RIP（早期的路由协议）。

### TCP: 传输控制协议

#### (1) 服务模型与特性
*   **全双工 (Full duplex)** 且 **点对点**。
*   **字节流**：TCP 不保留消息边界。例如：发送端写 4 个 512 字节，接收端可能通过一个 2048 字节的 READ 调用一次性读走。
*   **序号系统**：TCP 连接中的每一个字节都有一个唯一的 **32 位序号**。

#### (2) TCP 首部字段

![TCP-header](/Notes/images/Network/TCP-header.png){ width="600" style="display: block; margin: 0 auto;" }

*   **源/目的端口**：标识端点，结合 IP 构成 48 位的唯一 Socket 标识。
*   **序号 (Seq)** & **确认号 (Ack)**：各 32 位。
*   **首部长度**：指示首部有多少个 32 位字 (word)。
*   **Flags (标志位)**：
    *   **CWR/ECE**：拥塞通知相关。
    *   **URG**：紧急指针有效。
    *   **ACK**：确认号有效。
    *   **PSH**：请求立即推送数据。
    *   **RST**：重置混乱的连接。
    *   **SYN**：建立连接请求。
    *   **FIN**：释放连接请求。
*   **窗口大小**：流量控制的核心，告诉对方我还能收多少字节。
*   **校验和**
*   **紧急数据指针**：URG = 1 时有效，表示紧急数据的末尾位置（相对于 Seq 号的偏移量）。紧急数据拥有优先交付应用层的权利。
*   **选项字段**

### TCP 连接管理
*   **建立连接（三次握手）**：
    1.  Host 1 $\rightarrow$ Host 2: `SYN (SEQ=x)`
    2.  Host 1 $\leftarrow$ Host 1: `SYN (SEQ=y), ACK=x+1`
    3.  Host 1 $\rightarrow$ Host 2: `SEQ=x+1, ACK=y+1`
*   **连接释放（四次挥手）**：
    *   涉及 `FIN` 和 `ACK` 的交互。一方发 FIN 表示数据发完了，进入半关闭状态，直到另一方也发 FIN。
*   **状态转换**：包括 `LISTEN`, `SYN_SENT`, `ESTABLISHED`, `FIN_WAIT_1`, `TIME_WAIT`（等待 2MSL 以确保包死掉）等。

![Conn-Manage](/Notes/images/Network/Conn-Manage.png){ width="600" style="display: block; margin: 0 auto;" }

### TCP 计时器管理：Jacobson 算法
这是为了动态调整**重传超时时间 (RTO)**。

*   **公式 1：平滑 RTT (SRTT)**

    $$\text{SRTT} = \alpha \cdot \text{SRTT} + (1 - \alpha) \cdot R$$
    
    （其中 $R$ 是最近一次测得的样本值，一般取 $\alpha=7/8$）

*   **公式 2：RTT 偏差 (RTTVAR)**

    $$\text{RTTVAR} = \beta \cdot \text{RTTVAR} + (1 - \beta) \cdot |\text{SRTT} - R|$$
    
    （通常 $\beta=3/4$）

*   **公式 3：重传超时 (RTO)**

    $$\text{RTO} = \text{SRTT} + 4 \cdot \text{RTTVAR}$$

!!! Example "Question 1 - 序号计算"
    Suppose Host A sends two TCP segments back to back to Host B over a TCP connection. The first segment has sequence number 90; the second has sequence number 110.

    1)   How much data is in the first segment?
    
    2)   Suppose that the first segment is lost but the second segment arrives at B. In the acknowledgment that Host B sends to Host A, what will be the acknowledgment number?

    ??? Success "Answer 1"
        1)  Seq 90 发出，下一个是 Seq 110，则第一段数据量为 $110 - 90 = 20$ 字节。
        
        2)  如果第一段丢了，第二段到了，接收方回的 ACK 号依然是 **90**（表示仍在等 90）。

!!! Example "Question 2 - Estimated RTT"
    If the TCP round-trip time, RTT, is currently $30$ msec and the following acknowledgements come in after $26$, $32$, and $24$ msec, respectively, what is the new RTT estimate using the Jacobson algorithm? Use $\alpha = 0.9$.

    ??? Success "Answer 2"
        根据给出的多个 R 样本值和 $\alpha=0.9$ 连续迭代计算 SRTT。

        -   第一次计算（26）
            
            $$EstimatedRTT = 0.9 \times 30 + 0.1 \times 26$$

            $$EstimatedRTT = 27 + 2.6$$

            $$EstimatedRTT = 29.6 \text{ ms}$$

        -   第一次计算（32）

            $$EstimatedRTT = 0.9 \times 29.6 + 0.1 \times 32$$

            $$EstimatedRTT = 26.64 + 3.2$$

            $$EstimatedRTT = 29.84 \text{ ms}$$

        -   第三次计算（24）
        
            $$EstimatedRTT = 0.9 \times 29.84 + 0.1 \times 24$$

            $$EstimatedRTT = 26.856 + 2.4$$

            $$EstimatedRTT = 29.256 \text{ ms}$$

        新的 RTT 估计值约为 **29.256 ms**。

### TCP 拥塞控制
TCP Tahoe 和 TCP Reno 是 TCP 拥塞控制的两个经典版本。它们的核心区别在于如何处理丢包。

为了控制发送速率，TCP 维护两个核心变量：
1.  **`cwnd` (Congestion Window)**：拥塞窗口，决定了发送方一次能发多少数据。
2.  **`Threshold` (ssthresh)**：慢启动阈值，是“慢启动”阶段和“拥塞避免”阶段的分界线。

发送速率大约等于：$\text{Rate} \approx \frac{\text{cwnd}}{\text{RTT}}$

#### 两个共同的基础阶段
无论是 Tahoe 还是 Reno，在网络正常（没丢包）的时候，行为是一样的：

*   慢启动 (Slow Start, SS)
    *   **触发条件**：`cwnd < Threshold`
    *   **增长方式**：**指数增长** (Exponential Increase)。
    *   **如何改变速率**：每收到一个 ACK，`cwnd` 就增加 1 个 MSS（最大报文段长度）。
        *   *效果*：经过一个 RTT（往返时间），窗口大小翻倍（1 -> 2 -> 4 -> 8...）。

*   拥塞避免 (Congestion Avoidance, CA)
    *   **触发条件**：`cwnd >= Threshold`
    *   **增长方式**：**加性增 / 线性增长** (Additive Increase)。
    *   **如何改变速率**：每收到一个 ACK，`cwnd` 增加 `MSS * (MSS / cwnd)`。
        *   *效果*：经过一个完整的 RTT（收到了这一轮发出的所有包的 ACK），窗口大小只增加 **1 个 MSS**。

#### 丢包处理

丢包有两种表现形式：
1.  **超时 (Timeout)**：发送方等了很久都没收到确认，计时器响了（情况严重，说明网络可能断了或极其拥堵）。
2.  **3 个冗余 ACK (3 Duplicate ACKs)**：发送方连续收到 3 个对同一个包的确认（说明虽然有包丢了，但后续的包接收方收到了，网络还能通，情况没那么严重）。

*   TCP Tahoe
    
    Tahoe 的策略非常激进，被称为**“Hard Reset”**。无论发生什么类型的丢包（超时 还是 3个冗余ACK），它都一视同仁：

    *   **动作**：
        1.  **`Threshold` 设为当前 `cwnd` 的一半**。
        2.  **`cwnd` 直接重置为 1 MSS**。
        3.  **重新进入慢启动 (Slow Start)**。
    *   **缺点**：一旦丢包，发送速率瞬间降到最低，网络利用率波动很大。

*   TCP Reno
    
    Reno 改进了 Tahoe，引入了**快恢复 (Fast Recovery)** 机制。它根据丢包类型采取不同策略：

    *   **情况 A：发生超时 (Timeout)** —— **和 Tahoe 一样**（因为超时意味着网络可能瘫痪了）。
        *   `Threshold = cwnd / 2`
        *   `cwnd = 1`
        *   进入慢启动。

    *   **情况 B：收到 3 个冗余 ACK** —— **Reno 的改进点 (Soft Landing)**。
        *   **逻辑**：既然能收到 3 个 ACK，说明网络还是通的，没必要重置为 1。
        *   **动作 (快重传 + 快恢复)**：
            1.  立即重传丢失的那个包（快重传）。
            2.  **`Threshold` 设为当前 `cwnd` 的一半**。
            3.  **`cwnd` 设为新的 `Threshold`** (即减半，而不是归 1)。
            4.  **跳过慢启动，直接进入拥塞避免 (Congestion Avoidance)** 阶段（线性增长）。

!!! Example "对比"
    ![Reno-Tahoe](/Notes/images/Network/Reno-Tahoe.png){ width="600" style="display: block; margin: 0 auto;" }

    *   **蓝色线 (TCP Tahoe)**：
        *   当在 `cwnd=12` 处发生“3个冗余ACK”时，它直接掉到了底（`cwnd=1`），然后重新慢启动。
    *   **黑色线 (TCP Reno)**：
        *   当在 `cwnd=12` 处发生“3个冗余ACK”时，它没有掉到底。
        *   它将 `Threshold` 设为 6 (12的一半)。
        *   它将 `cwnd` 也设为 6。
        *   然后从 6 开始线性增长 (6 -> 7 -> 8...)。这就是著名的**“锯齿状” (Sawtooth)** 曲线。

#### 改变发送速率的数学公式

如何通过 ACK 来调整 `cwnd`（即调整速率）？

1.  **线性增长 (拥塞避免)**：
    *   目标：每经过 1 个 RTT，`cwnd` + 1。
    *   实现：每收到 1 个 ACK：

        $$cwnd = cwnd + MSS \times \left( \frac{MSS}{cwnd} \right)$$

2.  **指数增长 (慢启动)**：
    *   目标：每经过 1 个 RTT，`cwnd` 翻倍。
    *   实现：每收到 1 个 ACK：

        $$cwnd = cwnd + MSS$$


| 事件 | TCP Tahoe (旧) | TCP Reno (新) |
| :--- | :--- | :--- |
| **超时 (Timeout)** | Threshold=cwnd/2, cwnd=1, 进入 SS | 同 Tahoe |
| **3 个冗余 ACK (3 dup ACKs)** | 同 Timeout 处理 | **Threshold=cwnd/2, cwnd=Threshold, 进入 CA** (这是快恢复) |


---

## 第七章：应用层
### DNS (域名系统)
*   DNS 的作用是将人类可读的域名转换为机器识别的 IP 地址。
*   **域名空间 (Name space)**
    *   结构：层次树状结构。
    *   层级：从根开始，向下分为：
        -   Generic (通用顶级域名)：如 com, edu, gov, mil, org, net 等。
        -   Countries (国家顶级域名)：如 jp, us, nl 等。
        -   二级域名：如 yale, google 等。
*   **资源记录**：每个域，无论是单个主机还是顶级域，都可以有一组与其关联的资源记录。一个资源记录是五元组 `(Domain_name, Time_to_live, Class, Type, Value)` 。一些重要的资源类型：

![DNS-resource](/Notes/images/Network/DNS-resource.png){ width="600" style="display: block; margin: 0 auto;" }

*   **查询方式**
    *   递归查询：主机向本地服务器请求，本地服务器“包办到底”，直到拿回最终结果。
    *   迭代查询：本地服务器依次询问根服务器、顶级服务器、权威服务器，每个服务器只返回“下一个该找谁”的线索（Partial answer）。

### 电子邮件
*   **架构与协议**
    *   组件：用户代理、邮件传输代理 (MTA)。
    *   发送协议 (SMTP)：用于邮件提交和邮件传输。
    *   读取协议 (POP3 / IMAP)：用于最终投递到接收者。

![Email-arch](/Notes/images/Network/Email-arch.png){ width="600" style="display: block; margin: 0 auto;" }

*   **邮件格式**
*   RFC 5322：基本的互联网邮件格式，区分信封字段 (Envelope) 和首部字段(Header)，使用 ASCII 文本。
*   MIME (多用途互联网邮件扩展)：扩展了邮件功能，支持非 ASCII 数据（图片、音频、视频等）。
    *   常见内容类型：text (plain, html), image (gif, jpeg), audio, video, application (zip, pdf), multipart (多种混合)。
*   **Base 64 编码**
    *   原理：将每 24 比特数据分为四组，每组 6 比特。
    *   编码表：`A-Z` 代表 0-25，`a-z` 代表 26-51，`0-9` 代表 52-61，最后用 `+` (62) 和 `/` (63)。
    *   填充：末尾不足 24 位时，使用 `==` 或 `=` (最后一组只有 8 或 16 比特) 进行填充。此时仍然遵循 6 位一组的原则，不足位补 0 后再填充。
    *   忽略 CR 和 LF 。

### WWW
*   **基础架构**
    *   URL (统一资源定位符)：格式为 协议(http) + DNS名称 + 路径名。
    
![www-protocol](/Notes/images/Network/www-protocol.png){ width="600" style="display: block; margin: 0 auto;" }

*   **浏览器与服务器**：
    *   浏览器处理非 HTML 类型：使用 插件 (Plug-ins) 或 辅助程序 (Helper applications)。
    *   服务器运行步骤：接受 TCP 连接；获取请求文件名；从磁盘读取文件；发回客户端；释放 TCP 连接。
    *   多线程 Web 服务器架构：包含前端、处理模块线程、缓存和磁盘。
*   **Cookies**：包含 Domain, Path, Content, Expires, Secure 五个字段。
*   **静态与动态网页**
    *   静态 (HTML)：固定标签，如 `<html>`, `<body>`, `<a>`, `<img>` 等。
    *   动态 (AJAX)：异步 JavaScript 和 XML。包含 5 项核心技术：
        
        HTML/CSS（以页面形式呈现信息）；XML；DOM（修改页面局部内容）；异步检索数据；JavaScript（绑定所有功能）。
        
    *   服务端动态技术：PHP, ASP, JSP, CGI 脚本。

### HTTP

#### (1) HTTP 方法
*   **GET**：请求读取网页。
*   **HEAD**：请求网页首部信息。
*   **PUT**：存储一个网页。
*   **POST**：在资源后附加内容。
*   **DELETE**：删除网页。
*   **TRACE**：回显收到的请求。
*   **CONNECT**：保留备用。
*   **OPTIONS**：查询某些选项。

#### (2) 状态码
*   **1xx**：信息性（100 = 服务器同意处理）。
*   **2xx**：成功（200 = 成功，204 = 无内容）。
*   **3xx**：重定向（301 = 永久移动，304 = 缓存有效）。
*   **4xx**：客户端错误（403 = 禁止访问，404 = 未找到）。
*   **5xx**：服务器错误（500 = 内部错误，503 = 稍后重试）。

#### (3) HTTP 版本的演进
*   **HTTP 1.0**：每请求一个对象都要建立/关闭一次 TCP 连接。
*   **HTTP 1.1**：
    *   **持久连接 (Persistent connections)**：一个 TCP 连接内可以发多个请求。
    *   **流水线**：不必等上一个响应回来就可以发下一个请求。

![HTTP-1x](/Notes/images/Network/HTTP-1x.png){ width="600" style="display: block; margin: 0 auto;" }

*   **HTTP/2**：
    *   **二进制格式**、**优先级处理**。
    *   **首部压缩**：减小开销。
    *   **服务器推送 (Server push)**：服务器主动把客户端需要的资源推过去。
*   **HTTP/3**：
    *   **不再依赖 TCP**。
    *   基于 **QUIC** (运行在 **UDP** 之上的协议)。
    *   在用户空间实现拥塞控制，支持多路复用。
