import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,a as e,b as a,d as l,f as i,r as s}from"./app.c8d9b7d0.js";const h={},c=i('<h1 id="java-io\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#java-io\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3" aria-hidden="true">#</a> Java IO\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3</h1><h2 id="_1-\u77E5\u8BC6\u4F53\u7CFB" tabindex="-1"><a class="header-anchor" href="#_1-\u77E5\u8BC6\u4F53\u7CFB" aria-hidden="true">#</a> 1. \u77E5\u8BC6\u4F53\u7CFB</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/java-io-overview.jpeg" alt="java-io-overview"></p><h2 id="_2-\u76F8\u5173\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_2-\u76F8\u5173\u6587\u7AE0" aria-hidden="true">#</a> 2. \u76F8\u5173\u6587\u7AE0</h2><blockquote><p><strong>A. Java\u8FDB\u9636 - IO\u6846\u67B6\u4E4B\u77E5\u8BC6\u4F53\u7CFB</strong>\uFF1A\u9996\u5148\u4E86\u89E3\u4E0BJava IO\u6846\u67B6\u5305\u542B\u4EC0\u4E48\uFF0C\u540C\u65F6\u63A8\u8350\u4E0B\u5982\u4F55\u5B66\u4E60IO\u6846\u67B6\u3002</p></blockquote>',5),d={href:"https://pdai.tech/md/java/io/java-io-overview.html",target:"_blank",rel:"noopener noreferrer"},u=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u68B3\u7406Java IO/NIO/AIO\u7684\u77E5\u8BC6\u4F53\u7CFB")],-1),_=e("blockquote",null,[e("p",null,[e("strong",null,"B. Java\u8FDB\u9636 - IO\u6846\u67B6\u4E4B\u57FA\u7840IO"),a("\uFF1A\u5176\u6B21\u5BF9Java\u57FA\u7840IO\u6846\u67B6\u8FDB\u884C\u68B3\u7406\uFF0C\u5305\u62EC\u5176\u5206\u7C7B\uFF0C\u4F7F\u7528\u548C\u6E90\u7801\u8BE6\u89E3\u3002")])],-1),v={href:"https://pdai.tech/md/java/io/java-io-basic-category.html",target:"_blank",rel:"noopener noreferrer"},p=e("ul",null,[e("li",null,[a("\u672C\u6587\u4E3B\u8981\u4ECE"),e("code",null,"\u4F20\u8F93\u65B9\u5F0F"),a("\u548C"),e("code",null,"\u6570\u636E\u64CD\u4F5C"),a("\u4E24\u4E2A\u65B9\u9762\u5206\u6790Java IO\u7684\u5206\u7C7B")])],-1),I={href:"https://pdai.tech/md/java/io/java-io-basic-design-pattern.html",target:"_blank",rel:"noopener noreferrer"},O=e("ul",null,[e("li",null,"Java I/O \u4F7F\u7528\u4E86\u88C5\u9970\u8005\u6A21\u5F0F\u6765\u5B9E\u73B0")],-1),m={href:"https://pdai.tech/md/java/io/java-io-basic-code-inputstream.html",target:"_blank",rel:"noopener noreferrer"},f=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u4ECEJDK\u6E90\u7801\u89D2\u5EA6\u5206\u6790InputStream")],-1),j={href:"https://pdai.tech/md/java/io/java-io-basic-code-outputstream.html",target:"_blank",rel:"noopener noreferrer"},b=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u4ECEJDK\u6E90\u7801\u89D2\u5EA6\u5206\u6790 OutputStream")],-1),J={href:"https://pdai.tech/md/java/io/java-io-basic-usage.html",target:"_blank",rel:"noopener noreferrer"},g=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDJava IO\u5E38\u89C1\u7C7B\u7684\u4F7F\u7528\uFF0C\u5305\u62EC\uFF1A\u78C1\u76D8\u64CD\u4F5C\uFF0C\u5B57\u8282\u64CD\u4F5C\uFF0C\u5B57\u7B26\u64CD\u4F5C\uFF0C\u5BF9\u8C61\u64CD\u4F5C\u548C\u7F51\u7EDC\u64CD\u4F5C")],-1),k=e("blockquote",null,[e("p",null,[e("strong",null,"C. Java\u8FDB\u9636 - IO\u6846\u67B6\u4E4BNIO/AIO\u7B49"),a("\uFF1A\u7136\u540E\u518D\u5BF9Unix IO\u6A21\u578B\u5B66\u4E60\uFF0C\u5F15\u5165\u5230Java BIO/NIO/AIO\u76F8\u5173\u77E5\u8BC6\u8BE6\u89E3\u3002")])],-1),N={href:"https://pdai.tech/md/java/io/java-io-model.html",target:"_blank",rel:"noopener noreferrer"},x=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u7B80\u8981\u4ECB\u7ECD Unix I/O 5\u79CD\u6A21\u578B\uFF0C\u5E76\u5BF95\u5927\u6A21\u578B\u6BD4\u8F83\uFF0C\u5E76\u91CD\u70B9\u4E3A\u540E\u7EED\u7AE0\u8282\u89E3\u91CAIO\u591A\u8DEF\u590D\u7528\u505A\u94FA\u57AB")],-1),y={href:"https://pdai.tech/md/java/io/java-io-bio.html",target:"_blank",rel:"noopener noreferrer"},B=e("ul",null,[e("li",null,"BIO\u5C31\u662F: blocking IO\u3002\u6700\u5BB9\u6613\u7406\u89E3\u3001\u6700\u5BB9\u6613\u5B9E\u73B0\u7684IO\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5411\u64CD\u4F5C\u7CFB\u7EDF\u8BF7\u6C42\u7F51\u7EDCIO\u64CD\u4F5C\uFF0C\u8FD9\u65F6\u5E94\u7528\u7A0B\u5E8F\u4F1A\u4E00\u76F4\u7B49\u5F85\uFF1B\u53E6\u4E00\u65B9\u9762\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u4E5F\u4F1A\u7B49\u5F85\uFF0C\u76F4\u5230\u7F51\u7EDC\u4E0A\u6709\u6570\u636E\u4F20\u5230\u76D1\u542C\u7AEF\u53E3\uFF1B\u64CD\u4F5C\u7CFB\u7EDF\u5728\u6536\u96C6\u6570\u636E\u540E\uFF0C\u4F1A\u628A\u6570\u636E\u53D1\u9001\u7ED9\u5E94\u7528\u7A0B\u5E8F\uFF1B\u6700\u540E\u5E94\u7528\u7A0B\u5E8F\u53D7\u5230\u6570\u636E\uFF0C\u5E76\u89E3\u9664\u7B49\u5F85\u72B6\u6001")],-1),A={href:"https://pdai.tech/md/java/io/java-io-nio.html",target:"_blank",rel:"noopener noreferrer"},w=e("ul",null,[e("li",null,"\u65B0\u7684\u8F93\u5165/\u8F93\u51FA (NIO) \u5E93\u662F\u5728 JDK 1.4 \u4E2D\u5F15\u5165\u7684\uFF0C\u5F25\u8865\u4E86\u539F\u6765\u7684 I/O \u7684\u4E0D\u8DB3\uFF0C\u63D0\u4F9B\u4E86\u9AD8\u901F\u7684\u3001\u9762\u5411\u5757\u7684 I/O")],-1),z={href:"https://pdai.tech/md/java/io/java-io-nio-select-epoll.html",target:"_blank",rel:"noopener noreferrer"},q=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u5BF9IO\u591A\u8DEF\u590D\u7528\uFF0CRactor\u6A21\u578B\u4EE5\u53CAJava NIO\u5BF9\u5176\u7684\u652F\u6301")],-1),C={href:"https://pdai.tech/md/java/io/java-io-aio.html",target:"_blank",rel:"noopener noreferrer"},D=e("ul",null,[e("li",null,"\u672C\u6587\u4E3B\u8981\u5BF9\u5F02\u6B65IO\u548CJava\u4E2D\u5BF9AIO\u7684\u652F\u6301\u8BE6\u89E3\u3002")],-1),S=e("blockquote",null,[e("p",null,[e("strong",null,"D. Java\u8FDB\u9636 - IO\u6846\u67B6\u4E4B\u5F00\u6E90\u6846\u67B6"),a("\uFF1A\u6700\u540E\u518D\u5BF9\u5E38\u7528\u7684\u5F00\u6E90\u6846\u67B6\u8FDB\u884C\u5206\u6790\u548C\u8BE6\u89E3\u3002")])],-1),K={href:"https://pdai.tech/md/java/io/java-io-nio-zerocopy.html",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,"\u8FD9\u91CC\u8F6C\u4E00\u7BC7Java NIO \u96F6\u62F7\u8D1D\u7684\u5B9E\u73B0\u6587\u7AE0\uFF0C\u5728\u6B64\u4E4B\u524D\u5EFA\u8BAE\u5148\u7406\u89E3\u4EC0\u4E48\u662FLinux\u4E2D\u96F6\u62F7\u8D1D\uFF0C\u53EF\u4EE5\u5148\u770B\u8FD9\u7BC7\u6587\u7AE0\u3002\u672C\u6587\u4ECE\u6E90\u7801\u7740\u624B\u5206\u6790\u4E86 Java NIO \u5BF9\u96F6\u62F7\u8D1D\u7684\u5B9E\u73B0\uFF0C\u4E3B\u8981\u5305\u62EC\u57FA\u4E8E\u5185\u5B58\u6620\u5C04\uFF08mmap\uFF09\u65B9\u5F0F\u7684 MappedByteBuffer \u4EE5\u53CA\u57FA\u4E8E sendfile \u65B9\u5F0F\u7684 FileChannel\u3002\u6700\u540E\u5728\u7BC7\u672B\u7B80\u5355\u7684\u9610\u8FF0\u4E86\u4E00\u4E0B Netty \u4E2D\u7684\u96F6\u62F7\u8D1D\u673A\u5236\uFF0C\u4EE5\u53CA RocketMQ \u548C Kafka \u4E24\u79CD\u6D88\u606F\u961F\u5217\u5728\u96F6\u62F7\u8D1D\u5B9E\u73B0\u65B9\u5F0F\u4E0A\u7684\u533A\u522B\u3002",-1),V={href:"https://pdai.tech/md/java/io/java-io-nio-netty.html",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"Netty\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u3001\u5F02\u6B65\u4E8B\u4EF6\u9A71\u52A8\u7684NIO\u6846\u67B6\uFF0C\u63D0\u4F9B\u4E86\u5BF9TCP\u3001UDP\u548C\u6587\u4EF6\u4F20\u8F93\u7684\u652F\u6301\u3002\u4F5C\u4E3A\u5F53\u524D\u6700\u6D41\u884C\u7684NIO\u6846\u67B6\uFF0CNetty\u5728\u4E92\u8054\u7F51\u9886\u57DF\u3001\u5927\u6570\u636E\u5206\u5E03\u5F0F\u8BA1\u7B97\u9886\u57DF\u3001\u6E38\u620F\u884C\u4E1A\u3001\u901A\u4FE1\u884C\u4E1A\u7B49\u83B7\u5F97\u4E86\u5E7F\u6CDB\u7684\u5E94\u7528\uFF0C\u4E00\u4E9B\u4E1A\u754C\u8457\u540D\u7684\u5F00\u6E90\u7EC4\u4EF6\u4E5F\u57FA\u4E8ENetty\u6784\u5EFA\uFF0C\u6BD4\u5982RPC\u6846\u67B6\u3001zookeeper\u7B49",-1),L=e("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u6587\u7AE0")],-1),P={href:"https://pdai.tech/md/java/io/java-io-overview.html",target:"_blank",rel:"noopener noreferrer"};function R(M,T){const t=s("ExternalLinkIcon");return n(),r("div",null,[c,e("ul",null,[e("li",null,[e("a",d,[a("Java IO/NIO/AIO - Overview"),l(t)]),u])]),_,e("ul",null,[e("li",null,[e("a",v,[a("Java IO - \u5206\u7C7B(\u4F20\u8F93\uFF0C\u64CD\u4F5C)"),l(t)]),p]),e("li",null,[e("a",I,[a("Java IO - \u8BBE\u8BA1\u6A21\u5F0F(\u88C5\u9970\u8005\u6A21\u5F0F)"),l(t)]),O]),e("li",null,[e("a",m,[a("Java IO - \u6E90\u7801: InputStream"),l(t)]),f]),e("li",null,[e("a",j,[a("Java IO - \u6E90\u7801: OutputStream"),l(t)]),b]),e("li",null,[e("a",J,[a("Java IO - \u5E38\u89C1\u7C7B\u4F7F\u7528"),l(t)]),g])]),k,e("ul",null,[e("li",null,[e("a",N,[a("IO \u6A21\u578B - Unix IO \u6A21\u578B"),l(t)]),x]),e("li",null,[e("a",y,[a("Java IO - BIO \u8BE6\u89E3"),l(t)]),B]),e("li",null,[e("a",A,[a("Java NIO - \u57FA\u7840\u8BE6\u89E3"),l(t)]),w]),e("li",null,[e("a",z,[a("Java NIO - IO\u591A\u8DEF\u590D\u7528\u8BE6\u89E3"),l(t)]),q]),e("li",null,[e("a",C,[a("Java AIO - \u5F02\u6B65IO\u8BE6\u89E3"),l(t)]),D])]),S,e("ul",null,[e("li",null,[e("p",null,[e("a",K,[a("Java NIO - \u96F6\u62F7\u8D1D\u5B9E\u73B0"),l(t)])]),U]),e("li",null,[e("p",null,[e("a",V,[a("Java N(A)IO - \u6846\u67B6: Netty"),l(t)])]),E])]),L,e("p",null,[e("a",P,[a("Java IO\u77E5\u8BC6\u4F53\u7CFB\u8BE6\u89E3"),l(t)])])])}const G=o(h,[["render",R],["__file","java-io-overview.html.vue"]]);export{G as default};
