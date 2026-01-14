# 期末复习

> ~~孩子们，这门课真的不能速通...~~

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

*   **数据速率计算**：
    *   **比特率 = 码元速率 (波特率) $\times$ 每个码元携带的比特数**。调制方法决定了 bits per symbol
    *   **奈奎斯特定理 (无噪声)**：最大波特率 $B = 2H$，数据速率 $B = 2H \log_2 V$ (H为带宽，V为离散电平数)。
    *   **香农定理 (有噪声)**：最大数据速率 $B = H \log_2 (1 + S/N)$。
    *   **信噪比 (SNR)**：用分贝表示，$dB = 10 \log_{10} S/N$。
*   **传输介质**：有线（双绞线、同轴电缆、电力线、光纤）和无线（无线电、微波、红外、光波）。
    
    ![freq-of-waves](/Notes/images/Network/freq.png){ width="600" style="display: block; margin: 0 auto;" }

*   **数字调制与复用**：
    *   **基带传输**：编码方式包括 NRZ、NRZI、曼彻斯特编码（Ex 2: 两个码元代表1比特，效率50%）、AMI。
    *   **通带传输**：调幅、调频、调相。星座图包括 QPSK、QAM-16、QAM-64。
    *   **复用技术**：FDM (频分)、TDM (时分)、WDM (波分)、CDM (码分)。
        *   **CDM (码分复用)**：每个站分配一个唯一的、互相正交的码片序列。发送 1 为原码，发送 0 为反码。
*   **PSTN**
    *   三个主要部分：Local loops (客户 -> 交换所) / trunks (交换所间的长距离链接) / switching offices
---

## 第三章：数据链路层
*   **功能**：成帧 (Framing)、差错控制、流量控制。
*   **成帧方法**：字节计数法、带字节填充的定界符法、带比特填充的定界符法（例如 `01111110`，逢5个1填0）、物理层编码违例法。
*   **差错控制**：
    *   **海明距离**：两个码字之间不同位的个数。
    *   **检错/纠错能力**：**检测** $d$ 个错误需要距离 $d+1$；**纠正** $d$ 个错误需要 $2d+1$。
    *   **校验方式**：奇偶校验、校验和 (Checksum)、**CRC (循环冗余校验)**（基于多项式模2除法，加减法等同于异或）。
*   **流量控制 (滑动窗口)**：
    *   **停止-等待协议**：利用率 $U = 1 / (2\alpha + 1)$，其中 $\alpha = T_{prop} / T_{frame}$。

    ![stop-and-wait](/Notes/images/Network/stop-and-wait.png){ width="600" style="display: block; margin: 0 auto;" }

    *   **滑动窗口协议**：GBN (回退N帧)、SR (选择重传)。窗口大小需满足：$发送窗口 + 接收窗口 \le 2^n$。
*   **PPP 协议**：点对点协议。包含 LCP (链路控制) 和 NCP (网络控制)。

---

## 第四章：介质访问控制子层 (MAC Sublayer)
*   **信道分配协议**：
    *   **ALOHA**：纯 ALOHA (吞吐量 $S=G e^{-2G}$)、分隙 ALOHA ($S=G e^{-G}$)。
    *   **CSMA (载波侦听多路访问)**：1-坚持、非坚持、p-坚持。
    *   **CSMA/CD**：带冲突检测。检测冲突最长时间为 $2\tau$（两倍传播时延）。
    *   **无冲突协议**：位图协议、令牌环、二进制倒数协议。
*   **无线局域网 (802.11)**：
    *   **问题**：隐藏终端问题、暴露终端问题。
    *   **解决**：CSMA/CA (带冲突避免)，使用 RTS/CTS 握手及 NAV (虚拟侦听)。
*   **冲突避免协议**：
    *   位图 (Bitmap) / 令牌 (Token passing) / 二进制倒数 (Binary count down)
*   **以太网 (802.3)**：
    *   **二进制指数退避算法**：第 $i$ 次冲突后，随机等待 $0 \sim 2^i-1$ 个时隙。
    *   **设备**：集线器 (Hub) 属于一层，交换机 (Switch) 属于二层。冲突域 vs 广播域。

---

## 第五章：网络层
*   **服务类型**：无连接服务 (数据报) vs 面向连接服务 (虚电路)。
*   **路由算法**：
    *   **距离矢量路由 (DV)**：Bellman-Ford 算法，存在“无穷大计数”问题。
    *   **链路状态路由 (LS)**：OSPF 协议基础，使用 Dijkstra 算法计算最短路径。
    *   **分层路由**：通过区域划分减少路由表规模。
    *   **其他**：广播 (逆向路径转发)、组播 (剪枝生成树)、Anycast (选播)。
*   **互联网协议 (IPv4)**：
    *   **首部**：版本、IHL、总长度、标识/标志/偏移 (用于分片)、TTL、协议、校验和、源/目地址。
    *   **CIDR (无分类域间路由)**：最长前缀匹配。
    *   **NAT (网络地址转换)**：私有地址转换，缓解 IP 枯竭，涉及 NAT 穿透问题。
*   **IPv6**：128位地址，简化首部，取消校验和，支持扩展首部。
*   **辅助协议**：ICMP (控制报文)、ARP (IP 转 MAC)、DHCP (动态获取 IP)。
*   **路由协议**：RIP (内部, DV)、OSPF (内部, LS)、BGP (外部, 策略路由)。
*   **SDN (软件定义网络)**：数据平面（局部转发）与控制平面（全局逻辑）分离。

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

1.  **多协议路由器:** 在网络层和链路层进行协议转换和处理 *(Slide 90)*。
2.  **隧道技术 (Tunneling):** *(Slide 91)*
    *   **场景：** 两个相同类型的网络（如IPv6）通过一个异构网络（如IPv4）通信。
    *   **方法：** 将整个数据包（IPv6）封装在另一个协议（IPv4）的载荷中传输。
3.  **分片 (Fragmentation):** *(Slide 93-94)*
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
*   **头部格式 (Header Format):** *(Slide 98-105)*
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
    *   **路由聚合 (Aggregation):** 将多个小的前缀合并为一个大的前缀通告，减少路由表条目（如Slide 109 纽约路由器的例子）。
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
*   **ICMP (Internet Control Message Protocol):** *(Slide 117)*
    *   用于报告错误和网络探测。
    *   常见类型：Destination Unreachable（不可达）、Time Exceeded（TTL耗尽，Traceroute利用此原理）、Echo Request/Reply（Ping）。
*   **ARP (Address Resolution Protocol):** *(Slide 118)*
    *   作用：已知 IP 地址，解析对应的 MAC 地址。
    *   工作在局域网内。
*   **DHCP (Dynamic Host Configuration Protocol):** *(Slide 119)*
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
