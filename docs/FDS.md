!!! Abstract
    **课程信息**：浙江大学计算机科学与技术专业大一春夏学期预置。

    - 陈翔老师授课。

    - 教材：Data Structure and Algorithm Analysis in C, 2nd Edition, by Mark Allen Weiss, arranged by 陈越

    - Grading Policy:
      60%(Homework 10%+Quizzes 10%+Mid-Term Exam 15%+Lab Grade 25/30%, Bonus 4%, 总共不超过60%)+40% Final

!!! Note Algorithm Analysis
    **[Defenition]** 一个**算法**是一个用于完成特定任务的指令的有限集。

    一个算法必须满足以下条件：

    - Input
      一个算法必须有0个或多于0个的输入。

    - Output

    - Definiteness

    - Finiteness

    - Effectiveness

!!! Note Program 

### Analysis

> Time complexity analysis & Space complexity analysis

#### 实际应用: 算法比较

!!! Example 最大子段和
    问题介绍略。

    首先，我们有一个很朴素的想法，就是遍历。我们容易得出这里需要三个N-循环，所以时间复杂度应该是$\Omicron (N^3)$。

    分治算法的时间复杂度是$\Omicron (N \log N)$。分治算法的核心思想就是大问题划分为几个小问题再分别解决。

## 线性数据结构-Lists, Stacks, and Queues

**抽象数据结构**

!!! Note Definition
    $$
    Data\ Type = \{Objects\} \cup \{Operations\}
    $$

    !!! Example int
        $$
        int = \{0, \pm 1, \pm 2 , \dots, INT_MAX, INT_MIN\} \cup \{+,-,\times,/,%,\dots\}
        $$

抽象数据结构是一个逻辑上的概念，帮助我们了解一个数据结构的大致情况。

### Lists