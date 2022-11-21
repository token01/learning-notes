---
title: 中小厂（五八、中通、安硕、浩鲸...） Java 后端面经
shortTitle: 中小厂（五八、中通、安硕、浩鲸...） Java 后端面经
author: Guide
category:
  - 优质文章
---

> [《Java 面试指北》](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519384&idx=1&sn=bc7e71af75350b755f04ca4178395b1a&chksm=cea1c353f9d64a458f797696d4144b4d6e58639371a4612b8e4d106d83a66d2289e7b2cd7431&token=660789642&lang=zh_CN&scene=21#wechat_redirect)来啦！这是一份教你如何更高效地准备面试的小册，涵盖常见八股文（系统设计、常见框架、分布式、高并发 ......）、优质面经等内容。
> 
> JavaGuide 在线阅读网站：https://javaguide.cn/

你好，我是 Guide。

简单对[知识星球](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519201&idx=1&sn=b910e72ec34a1447ecece7e993bc977d&chksm=cea1c42af9d64d3c69ba4849fc9175b26a2219d67c2aa6dabb7b73d95f4c41b8a9461e818243&token=1878783075&lang=zh_CN&scene=21#wechat_redirect)的球友分享的一些中小厂面经做了一下总结，准备面试或者想要跳槽的朋友可以拿来自测一下。  

由于问题太多，我这里就不贴参考答案了，需要参考答案的朋友可以在下面 3 个资料中找到：

*   [Java 面试题&面经汇总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg2OTA0Njk0OA==&action=getalbum&album_id=1352302538565189634&scene=173&from_msgid=2247521040&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
*   [《Java 面试指北》](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519384&idx=1&sn=bc7e71af75350b755f04ca4178395b1a&chksm=cea1c353f9d64a458f797696d4144b4d6e58639371a4612b8e4d106d83a66d2289e7b2cd7431&token=660789642&lang=zh_CN&scene=21#wechat_redirect)
*   JavaGuide 在线阅读网站：https://javaguide.cn/

> 以下面经来自[知识星球](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519201&idx=1&sn=b910e72ec34a1447ecece7e993bc977d&chksm=cea1c42af9d64d3c69ba4849fc9175b26a2219d67c2aa6dabb7b73d95f4c41b8a9461e818243&token=1878783075&lang=zh_CN&scene=21#wechat_redirect)的 W 同学。

五八同城
----

1.  自我介绍。
2.  说一下项目的技术栈。
3.  项目中遇到了什么困难？怎么解决的？
4.  MySQL 和 Redis 怎么保持数据一致?
5.  RocketMQ 广播消息 丢失消息怎么办？
6.  分布式事务了解吗？
7.  说一下怎么实现的分布式事务？还有没有其他的解决方案？
8.  RocketMQ 能做分布式事务吗？
9.  并发事务带来了哪些问题?
10.  问一下 MySQL 默认隔离级别，可以解决幻读吗？（考察 当前读 快照读 间隙锁 等）
11.  MySQL 的隔离级别是基于锁实现的吗？
12.  多个人给一个主播打赏怎么设计？我说是一个高并发写的操作，对一个记录频繁写，分批操作，比如 10 个记录 操作一次。他说这个方案可以 但是有 100 个记录 怎么去做一个一个操作呢？我说如果在一个进程可以 分多个线程分批。他说还是不够快 我们是用的 MQ 多个消费者 一个打赏就发一个消息
13.  `synchronized` 和 `volatile` 区别？
14.  `synchronized` 有了为什么还要 `ReentranLock` ，有啥不一样？
15.  接口和抽象类有什么区别？
16.  泛型有啥用？泛型擦除是啥？

总结：整体上 先问项目问项目依赖的中间件，问技术方案怎么设计，比较符合开发场景，MysSQL 间隙锁需要补充一下

最后点评：项目和技术广度很好 但是深度不够，说 MySQL 间隙锁不是很熟悉

上海中通
----

1.  讲一下 `ArrayList` 和 `HashMap` 底层数据结构，优缺点，使用方式。
2.  `ConcurrentHashMap`有用过吗？
3.  CAS 设计思路和原理？
4.  `ThreadLocal` 底层原理？什么场景使用的 `ThreadLocal`？
5.  用到了 Java 8 的哪些新特性？
6.  Lambda 怎么用的，Stream 的实现原理？
7.  除了刚刚的场景 还有什么场景使用过异步任务，并发任务计算结果后做聚合 么做？
8.  网络编程用过吗？IO 讲一下
9.  你开发中都用到了什么设计模式？
10.  工厂模式的设计理念是什么？有什么好处？体现了什么编程思想？
11.  适配器模式了解吗？策略和适配器模式有什么区别，你为什么选择用策略模式而不是适配器原因是什么？
12.  JVM 调优经验 说一下做了什么？
13.  Spring 事务注解 `Transaction` 实现原理？
14.  A 方法调用 B 方法，如果 B 方法开启事务 则直接用 B 方法的事务，如果是你,你怎么设计怎么做？
15.  InnoDB 的默认隔离级别，可重复读，解决了什么问题，没有解决什么问题？
16.  什么场景下使用了 ES？
17.  倒排索引 是什么讲一下？
18.  为什么 ES 检索比较快？
19.  你使用 MQ（RocketMQ 和 Kafka）的应用场景什么？
20.  你说系统单接口 qps 达到了 8W 你做了性能优化，这个是怎么做的？本地缓存用了什么删除策略？本地缓存设置了多大？
21.  做了重试保证订单的最终一致性 这个是怎么做的重试？
22.  MQ 消息积压遇到过吗？你是怎么处理这个？

> 以下面经来自[知识星球](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519201&idx=1&sn=b910e72ec34a1447ecece7e993bc977d&chksm=cea1c42af9d64d3c69ba4849fc9175b26a2219d67c2aa6dabb7b73d95f4c41b8a9461e818243&token=1878783075&lang=zh_CN&scene=21#wechat_redirect)的傅晓海同学。

上海安硕信息
------

1.  Dubbo 使用的注册中心和推荐的协议
2.  Redis 的具体应用
3.  Spring 的常用注解
4.  MySQL 的默认数据库引擎
5.  MySQL 支持哪些存储引擎？默认使用哪个？
6.  MyISAM 和 InnoDB 的区别是什么？
7.  看毕设

上海地听
----

1.  什么是多态？
2.  JSP 内置对象有哪些？
3.  什么是跨域问题?如何解决?
4.  一个 Tomcat 上发布两个项目,一个端口 80,一个 81,相互之间调用算不算跨域
5.  说说索引和主键的用途。
6.  MyBatis 中 `#{}` 和 `${}` 的区别?
7.  单例模式的实现。
8.  链表和队列的特点，查询和增删改的时间复杂度。
9.  Spring 的常用注解
10.  `@Required` 注解的作用
11.  如果有一条 SQL 语句执行的很慢,怎么进行优化?
12.  存储过程是什么,有什么特点?

南京浩鲸科技
------

1.  常用的数据结构有哪些？
2.  数组和链表的区别，以及获取元素的时间复杂度
3.  线程池的特点和具体实现，线程的状态，
4.  `notify()` 和 `notifyall()` 的区别
5.  MySQL 索引的分类
6.  什么是视图
7.  事务的隔离级别以及解决了哪些问题
8.  IOC 源码
9.  Spring 常用注解和作用
10.  AoP 的具体应用
11.  Spring 事务

上海华讯
----

1.  接口和抽象类的区别
2.  内部类有哪些以及特点和应用
3.  数组和链表
4.  快速排序算法
5.  异常的处理方式
6.  `HashMap` 的底层数据结构
7.  `hashcode` 的作用，如果 `hashcode` 相同，怎么存入元素
8.  内连接和外连接的区别
9.  分组查询的关键字
10.  如何开启慢查询日志
11.  数据库优化技巧
12.  索引的分类
13.  主键索引和唯一索引的区别
14.  Spring 通过注解实现 DI 的原理
15.  什么是 RESTful 风格
16.  Spring 和 Mybatis 整合的步骤
17.  Mybatis 执行流程

**·········· END ··············**

欢迎加入我的[知识星球](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519201&idx=1&sn=b910e72ec34a1447ecece7e993bc977d&chksm=cea1c42af9d64d3c69ba4849fc9175b26a2219d67c2aa6dabb7b73d95f4c41b8a9461e818243&token=1878783075&lang=zh_CN&scene=21#wechat_redirect)获取更多面试干货，[《Java 面试指北》](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519384&idx=1&sn=bc7e71af75350b755f04ca4178395b1a&chksm=cea1c353f9d64a458f797696d4144b4d6e58639371a4612b8e4d106d83a66d2289e7b2cd7431&token=660789642&lang=zh_CN&scene=21#wechat_redirect)持续更新完善中！

![](https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyGIdWmVOht6AvFIs6gqH9ZgaajiaKxicyza3eq3PWjcRRrSxSFQicFBkkQUORWxYibtsWHlHqLjhic9Sg/640?wx_fmt=png)

《Java 面试指北》目录

近期文章精选 ：

*   [今年找工作有点难！](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247521303&idx=1&sn=4b61fcc28bb3c92732f7e92bbbe7e60b&chksm=cea1dbdcf9d652ca2aad9e505908a33e246f375e6cdf482b11882e3f8b843e83c8615142cd0f&token=538611389&lang=zh_CN&scene=21#wechat_redirect)
*   [上岸美团、华为、字节！](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247520849&idx=1&sn=cc6631b532239ffcf615df7a79c018da&chksm=cea1dd9af9d6548cece4e4819a9ebf5002ace11fe61aed7e10c50a2ac29ae1b525587b508db8&token=2094715744&lang=zh_CN&scene=21#wechat_redirect)
*   [顺利找到工作了](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247521040&idx=1&sn=d075c86309fe0e1b46517062557df04f&chksm=cea1dcdbf9d655cdd16e38749b46a12428c996b56543f693dc696026773801133a86ba83bc2e&token=787347680&lang=zh_CN&scene=21#wechat_redirect)
*   [八股文又又又更新了！](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247519384&idx=1&sn=bc7e71af75350b755f04ca4178395b1a&chksm=cea1c353f9d64a458f797696d4144b4d6e58639371a4612b8e4d106d83a66d2289e7b2cd7431&token=660789642&lang=zh_CN&scene=21#wechat_redirect)
*   [大专非科班上岸银行外包，很开心！](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247520826&idx=1&sn=ac878b8e415e5d4d713378f27c7f1d35&chksm=cea1ddf1f9d654e753b3718ebb67d9a54c33f14f4a05e2b7527f62c5739983811bba7483d292&token=2094715744&lang=zh_CN&scene=21#wechat_redirect)
*   [拿了几十个 offer，我依然很 emo](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247520785&idx=1&sn=406ca2c06c531f69a063252e829e59c4&chksm=cea1dddaf9d654cc0a821c5e5f9ecc3ad99d5b22d90a0b081b1da0182624d476c2617d07cb52&token=2094715744&lang=zh_CN&scene=21#wechat_redirect)
*   [虾皮二面：MySQL 支持哪些存储引擎？MyISAM 和 InnoDB 的区别是什么？](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247520732&idx=1&sn=f786634cfa830214e3ac5e70b7bbe748&chksm=cea1de17f9d657012c4156b140fd69da758c9786681835901b51ae893f7adf13b687caa2d68e&token=2094715744&lang=zh_CN&scene=21#wechat_redirect)
*   [一款跨时代的高性能 Java 框架！启动速度快到飞起](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247520633&idx=1&sn=aec35af40e3ed3b1e844addd04e31af5&chksm=cea1deb2f9d657a46a0684bbcbcb2900cebff39a2b2746a4a809b6b5306bce08d4382efd5ca8&token=2094715744&lang=zh_CN&scene=21#wechat_redirect)

如果本文对你有帮助的话，欢迎点赞&在看&分享，这对我继续分享&创作优质文章非常重要。感谢🙏🏻