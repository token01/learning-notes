---
title: 新来了个技术总监：谁再在 POJO 中使用基本数据类型，以后就不用来了！
shortTitle: 新来了个技术总监：谁再在 POJO 中使用基本数据类型，以后就不用来了！
author: Hollis
category:
  - 优质文章
---

大家好，我是程序汪  

程序员编码时一些不经意的细节可能导致一些很难察觉的BUG，上生产运行一段时间后才发现，真的很头疼。  

在《阿里巴巴Java开发手册》中，对于POJO中如何选择变量的类型以及 RPC 接口中的返回值类型也有着一些规定：

![](https://mmbiz.qpic.cn/mmbiz_jpg/6fuT3emWI5IibzibgbpjKvoJTZebia3RKDOd3L0BMFtTBSsDmcbUPh8VAlQh2icxdcqbMybEhnNoGS24SNLUWBx71Q/640?wx_fmt=jpeg)

这里强制要求使用包装类型，原因是什么呢？

我们来看一段简单的代码

```
/**  

 * @author Hollis  

 */  

public class BooleanMainTest {  

  

    public static void main(String[] args) {  

        Model model1 = new Model();  

        System.out.println("default model : " + model1);  

    }  

}  

  

class Model {  

    /**  

     * 定一个Boolean类型的success成员变量  

     */  

    private Boolean success;  

    /**  

     * 定一个boolean类型的failure成员变量  

     */  

    private boolean failure;  

  

    /**  

     * 覆盖toString方法，使用Java 8 的StringJoiner  

     */  

    @Override  

    public String toString() {  

        return new StringJoiner(", ", Model.class.getSimpleName() + "[", "]")  

                .add("success=" + success)  

                .add("failure=" + failure)  

                .toString();  

    }  

}  

```

以上代码输出结果为：

```
default model : Model[success=null, failure=false]  

```

可以看到，当我们没有设置Model对象的字段的值的时候，Boolean类型的变量会设置默认值为null，而boolean类型的变量会设置默认值为false。

**即Boolean对象的默认值是**`null`，**boolean基本数据类型的默认值是**`false`。

也就是说，包装类型的默认值都是null，而基本数据类型的默认值是一个固定值，如boolean是false，byte、short、int、long是0，float是0.0f等；

我们再举一个扣费的例子，我们做一个扣费系统，扣费时需要从外部的定价系统中通过 RPC 请求读取一个费率的值，我们预期该接口的返回值中会包含一个浮点型的费率字段。当我们取到这个值得时候就使用公式：金额\*费率=费用 进行计算，计算结果进行划扣。

如果由于计费系统异常，他可能会返回个默认值，如果这个字段是Double类型的话，该默认值为null，如果该字段是double类型的话，该默认值为0.0。

如果扣费系统对于该费率返回值没做特殊处理的话，拿到null值进行计算会直接报错，阻断程序。拿到0.0可能就直接进行计算，得出接口为0后进行扣费了。这种异常情况就无法被感知。

有人说，那我可以对0.0做特殊判断，如果是0一样可以阻断报错啊。但是，这时候就会产生一个问题，如果允许费率是0的场景又怎么处理呢？

**所以，使用基本数据类型只会让方案越来越复杂，坑越来越多。**

这种使用包装类型定义变量的方式，通过异常来阻断程序，进而可以被识别到这种线上问题。如果使用基本数据类型的话，系统可能不会报错，进而认为无异常。

当然，以上的选择是针对一些电商、支付、金融等场景，可以牺牲暂时的可用性的场景，如果是对于某些软件系统，可以容忍数据不准，但是不能系统不可用的情况要另当别论。

**以上，就是要求在POJO和RPC的返回值中使用包装类型的原因。**

  

   

程序汪资料链接
-------

  

  

   

[程序汪接的7个私活都在这里，经验整理](http://mp.weixin.qq.com/s?__biz=MzA4NzQ0Njc4Ng==&mid=2247501524&idx=1&sn=2cb28e7b64ab77c55bcc1a172b82a2ad&chksm=903bc2b9a74c4baf5737cd430560ee3c5a357bb37864257a05a72e3cccf41db5bd221ccc63d8&scene=21#wechat_redirect)

   

[**Java项目分享  最新整理全集，找项目不累啦 07版**](http://mp.weixin.qq.com/s?__biz=Mzg2ODU0NTA2Mw==&mid=2247488419&idx=2&sn=0b80c7f9f73fca89b91e257a269cfada&chksm=ceabf4ebf9dc7dfdaa605a9bb92d31c9fc0a10a7a94351234181a89ba5800672c6e7da2ebfbe&scene=21#wechat_redirect)  

   

[堪称神级的Spring Boot手册，从基础入门到实战进阶](http://mp.weixin.qq.com/s?__biz=MzA4NzQ0Njc4Ng==&mid=2247494170&idx=1&sn=5181a5277946be31478b1b9425c93f63&chksm=903bee77a74c67614b2772248e8b5e912d323bfe42a0e576dd157a4752f5fed88d6b439ec52f&scene=21#wechat_redirect)

   

[**卧槽！字节跳动《算法中文手册》火了，完整版 PDF 开放下载！**](http://mp.weixin.qq.com/s?__biz=MzA4NzQ0Njc4Ng==&mid=2247492941&idx=1&sn=2ff31fec735d7c5d6f3483c346d5ca69&chksm=903be120a74c68361fd9afad178e7338315041a2cd4459f2165a8faa20e995a3477af3eda2bb&scene=21#wechat_redirect)

   

[**卧槽！阿里大佬总结的《图解Java》火了，完整版PDF开放下载！**](http://mp.weixin.qq.com/s?__biz=MzA4NzQ0Njc4Ng==&mid=2247496297&idx=2&sn=d253dda2160821262d9f6fc1a9a637d0&chksm=903bf604a74c7f126ab936e374a1f22b9b7cb26a7964b6cc837c3f73af516139064e522a1294&scene=21#wechat_redirect)

   

[**字节跳动总结的设计模式 PDF 火了，完整版开放下载！**](http://mp.weixin.qq.com/s?__biz=MzA4NzQ0Njc4Ng==&mid=2247490715&idx=2&sn=7f2c5de11bebaecfbaf1ce4b945a4d6f&chksm=903818f6a74f91e0fde557b75bd44adfd5d378612f682aa3eef6766927aebb9e5afc72c91a9e&scene=21#wechat_redirect)

   

  

   

欢迎添加程序汪个人微信 itwang009  进粉丝群或围观朋友圈