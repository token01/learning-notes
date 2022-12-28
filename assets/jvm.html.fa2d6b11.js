import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as s,a as e,b as t,d as o,e as i,f as n,r as h}from"./app.047e4de1.js";const c={},p=n('<p>2020 \u5E74\u7684\u65F6\u5019\uFF0C\u901A\u8BFB\u4E86\u4E00\u904D\u5468\u5FD7\u660E\u8001\u5E08\u7684\u300A\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A\uFF1AJVM \u9AD8\u7EA7\u7279\u6027\u4E0E\u6700\u4F73\u5B9E\u8DF5\u300B\u7B2C\u4E09\u7248\uFF0C\u8BFB\u5B8C\u4E4B\u540E\u53D7\u76CA\u532A\u6D45\uFF0C\u8FD9\u8BA9\u6211\u5BF9 Java \u865A\u62DF\u673A\u6709\u4E86\u4E00\u4E2A\u66F4\u5B8C\u6574\u7684\u8BA4\u8BC6\u3002\u6BEB\u65E0\u7591\u95EE\uFF0C\u300A\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A\u300B\u662F JVM \u4E66\u7C4D\u4E2D\u6700\u597D\u7684\u4E00\u672C\u4E66\u4E86\uFF0C\u56FD\u4EA7\u6280\u672F\u4E66\u7684\u5929\u82B1\u677F\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-7036a048-4034-4965-92a6-e35d0211ba71.png" alt=""></p><p>\u5728\u91D1\u4E09\u94F6\u56DB/\u91D1\u4E5D\u94F6\u5341\u7684\u8DF3\u69FD\u5B63\u4E2D\uFF0C\u5F88\u591A\u5C0F\u4F19\u4F34\u90FD\u4F1A\u5FCD\u4E0D\u4F4F\u8822\u8822\u6B32\u52A8\uFF0C\u5176\u4E2D JVM \u66F4\u662F\u9762\u8BD5\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u90E8\u5206\uFF0C\u6240\u4EE5\u6211\u82B1\u4E86\u51E0\u5929\u7684\u65F6\u95F4\u6574\u7406\u4E86\u4E00\u6761 JVM \u7684\u5B66\u4E60\u8DEF\u7EBF\uFF0C\u5E0C\u671B\u80FD\u5E2E\u52A9\u5230\u5927\u5BB6\u3002</p><h2 id="\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-jvm" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-jvm" aria-hidden="true">#</a> \u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 JVM\uFF1F</h2><p>\u66FE\u7ECF\u6211\u5BF9 JVM \u4E5F\u662F\u611F\u5230\u975E\u5E38\u7684\u5934\u75DB\uFF0C\u5B8C\u5168\u641E\u4E0D\u61C2\u8BE5\u600E\u4E48\u5165\u95E8\uFF0C\u53EA\u662F\u542C\u8BF4\u300A\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A\u300B\u8FD9\u672C\u4E66\u5F88\u540A\uFF0C\u4F46\u771F\u8BFB\u8D77\u6765\uFF0C\u5374\u9700\u8981\u6781\u5927\u7684\u8010\u5FC3\u548C\u5B9A\u529B\uFF0C\u5426\u5219\u5F88\u5FEB\u5C31\u4F1A\u5728\u8BFB\u5B8C\u7B2C\u4E00\u7AE0 JVM \u7684\u7B80\u53F2\u540E\u653E\u5F03\u3002</p><p>\u90A3\u9996\u5148\uFF0C\u6211\u4EEC\u5C31\u8981\u641E\u6E05\u695A\uFF0C\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 JVM \uFF1F</p><p>\u7B2C\u4E00\uFF0C\u5F53\u7136\u662F\u9762\u8BD5\u8981\u8003\uFF0C\u8FD9\u4E00\u70B9\u6BEB\u65E0\u7591\u95EE\uFF0C\u5C24\u5176\u662F\u5BF9\u4E8E\u8981\u53C2\u52A0\u6821\u62DB\u7684\u5E94\u5C4A\u751F\u6765\u8BF4\uFF0CJVM \u662F\u7ED5\u4E0D\u8FC7\u53BB\u7684\uFF0C\u5FC5\u987B\u5F97\u5B66\u3002</p><p>\u7B2C\u4E8C\uFF0C\u5982\u679C\u4F60\u60F3\u6210\u4E3A\u516C\u53F8\u4E0D\u53EF\u6216\u7F3A\u7684\u9876\u6881\u67F1\uFF0C\u90A3 JVM \u4F60\u5F97\u5B66\uFF0C\u56E0\u4E3A\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u9047\u5230\u7684\u95EE\u9898\u57FA\u672C\u4E0A Google \u4E0B\u5C31\u80FD\u89E3\u51B3\u4E86\uFF0C\u53EF\u4E00\u65E6\u9047\u5230 JVM \u6027\u80FD\u8C03\u4F18\uFF0C\u5C31\u5FC5\u987B\u5F97\u6709\u80FD\u67E5 OOM \u7684\u539F\u56E0\u3001\u80FD\u770B\u61C2\u5B57\u8282\u7801\u7684\u8001\u9E1F\u51FA\u9A6C\u4E86\u3002</p><p>\u5E94\u7528\u7A0B\u5E8F\u4E00\u65E6\u4E0A\u7EBF\uFF0C\u51FA\u95EE\u9898\u662F\u677F\u4E0A\u9489\u9489\u7684\u4E8B\uFF0C\u9664\u4E86\u6570\u636E\u5E93\u3001\u7F51\u7EDC\u3001\u4EE3\u7801\u903B\u8F91\u4E0A\u7684\u95EE\u9898\uFF0C\u5269\u4E0B\u7684\u5C31\u6709\u5185\u5B58\u6EA2\u51FA\u554A\uFF0C\u9891\u7E41 GC \u5BFC\u81F4\u7684\u6027\u80FD\u74F6\u9888\u554A\u7B49\u68D8\u624B\u95EE\u9898\u3002</p><p>\u9047\u5230\u8FD9\u79CD\u95EE\u9898\uFF0C\u4F60\u5C31\u5FC5\u987B\u5F97\u80FD\u770B\u61C2 GC \u65E5\u5FD7\uFF0C\u660E\u767D\u4EC0\u4E48\u662F\u8001\u5E74\u4EE3\u3001\u6C38\u4E45\u4EE3\u3001\u5143\u6570\u636E\u533A\u7B49\uFF0C\u8FD9\u4E9B\u90FD\u662F Java \u865A\u62DF\u673A\u65B9\u9762\u7684\u77E5\u8BC6\u3002</p><p>\u660E\u767D\u4E86\u5B66\u4E60 JVM \u7684\u91CD\u8981\u6027\uFF0C\u90A3\u6211\u4EEC\u5C31\u5F00\u641E\u5427\uFF01</p><h2 id="\u4E8C\u3001jvm-\u5B66\u4E60\u8DEF\u7EBF\u56FE" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001jvm-\u5B66\u4E60\u8DEF\u7EBF\u56FE" aria-hidden="true">#</a> \u4E8C\u3001JVM \u5B66\u4E60\u8DEF\u7EBF\u56FE</h2><p>\u8FD9\u662F\u6211\u6700\u8FD1\u6574\u7406\u7684\u4E00\u5F20\u5173\u4E8E JVM \u7684\u601D\u7EF4\u5BFC\u56FE\uFF0C\u5927\u7684\u65B9\u5411\u53EF\u4EE5\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF1A\u5B57\u8282\u7801\u4E0E\u7C7B\u7684\u52A0\u8F7D\u3001\u5185\u5B58\u4E0E\u5783\u573E\u56DE\u6536\u3001\u6027\u80FD\u76D1\u63A7\u548C\u8C03\u4F18\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-b4ec034b-9f20-40b9-a2a3-e77afffd2abf.png" alt=""></p><p>\u5B57\u8282\u7801\u4E0E\u7C7B\u7684\u52A0\u8F7D\u5305\u62EC\uFF1A</p><ul><li>\u7C7B\u7684\u52A0\u8F7D\u673A\u5236\uFF08\u7C7B\u7684\u52A0\u8F7D\u8FC7\u7A0B\u3001\u7C7B\u52A0\u8F7D\u5668\u3001\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\uFF09</li><li>\u5B57\u8282\u7801\uFF08\u7C7B\u6587\u4EF6\u7ED3\u6784\u3001\u5B57\u8282\u7801\u6307\u4EE4\u3001\u5B57\u8282\u7801\u6267\u884C\u5F15\u64CE\u3001\u5B9E\u6218\u5B57\u8282\u7801\uFF09</li></ul><p>\u5185\u5B58\u4E0E\u5783\u573E\u56DE\u6536\u5305\u62EC\uFF1A</p><ul><li>JVM \u5185\u5B58\u7ED3\u6784</li><li>\u5783\u573E\u56DE\u6536\u7B97\u6CD5</li><li>\u5783\u573E\u56DE\u6536\u673A\u5236</li><li>\u5783\u573E\u6536\u96C6\u5668</li></ul><p>\u6027\u80FD\u76D1\u63A7\u548C\u8C03\u4F18\u5305\u62EC\uFF1A</p><ul><li>\u8C03\u4F18\u6307\u6807</li><li>\u8C03\u4F18\u5BF9\u8C61</li><li>\u8C03\u4F18\u5DE5\u5177</li><li>JIT \u4F18\u5316</li></ul><p>\u6709\u7406\u8BBA\u77E5\u8BC6\uFF0C\u6709\u52A8\u624B\u5B9E\u6218\uFF0C\u57FA\u672C\u4E0A\u53EF\u4EE5\u628A JVM \u8FD9\u5757\u5B66\u7684\u975E\u5E38\u624E\u5B9E\u4E86\u3002</p><h2 id="\u4E09\u3001\u786C\u6838-jvm-\u5B66\u4E60\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u786C\u6838-jvm-\u5B66\u4E60\u8D44\u6599" aria-hidden="true">#</a> \u4E09\u3001\u786C\u6838 JVM \u5B66\u4E60\u8D44\u6599</h2><h3 id="_1-java-\u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF" tabindex="-1"><a class="header-anchor" href="#_1-java-\u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF" aria-hidden="true">#</a> <strong>1\uFF09Java \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF</strong></h3><p>\u5B66 Java\uFF0C\u600E\u4E48\u80FD\u5C11\u5F97\u4E86musk\u7684\u5C0F\u7834\u7AD9\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\uFF0C\u7F51\u5740\u6211\u8D34\u4E0B\u9762\u4E86\u54C8\uFF1A</p>',24),_={href:"https://tobebetterjavaer.com/home.html#java%E8%99%9A%E6%8B%9F%E6%9C%BA",target:"_blank",rel:"noopener noreferrer"},b=n('<p>\u8FDB\u53BB\u76F4\u63A5\u627E\u300CJava \u6838\u5FC3\u300D\u91CC\u9762\u7684 Java \u865A\u62DF\u673A\u5C31\u5BF9\u4E86\u3002\u6211\u6309\u7167\u524D\u9762\u7684\u601D\u7EF4\u5BFC\u56FE\u6574\u7406\u4E86 19 \u7BC7\u6587\u7AE0\uFF0C\u5168\u90E8\u90FD\u662F\u786C\u6838\u7EA7\u522B\u7684\uFF0C\u8DDF\u7740\u5B66\u5C31\u5BF9\u4E86\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-cc84fead-278b-46aa-a8ab-a3b07acefc12.png" alt=""></p><h3 id="_2-\u89C6\u9891" tabindex="-1"><a class="header-anchor" href="#_2-\u89C6\u9891" aria-hidden="true">#</a> <strong>2\uFF09\u89C6\u9891</strong></h3><p>\u61C2\u7684\u90FD\u61C2\uFF0C\u770B\u89C6\u9891\u5230 B \u7AD9\u3002\u5148\u63A8\u8350\u5B8B\u7EA2\u5EB7\u8001\u5E08\u7684 JVM \u5168\u5957\u6559\u7A0B\uFF0C200\u591A\u4E07\u7684\u64AD\u653E\u91CF\uFF0C\u8FD8\u662F\u975E\u5E38\u53D7\u6B22\u8FCE\u7684\u3002\u5168\u5957\u8BFE\u7A0B\u5206\u4E3A\uFF1A</p><ul><li>\u5185\u5B58\u4E0E\u5783\u573E\u56DE\u6536\u7BC7</li><li>\u5B57\u8282\u7801\u4E0E\u7C7B\u7684\u52A0\u8F7D\u7BC7</li><li>\u6027\u80FD\u76D1\u63A7\u548C\u8C03\u4F18\u7BC7</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-59c829ce-7fe3-45a5-b074-35dacb08941e.png" alt=""></p>',6),m={href:"https://www.bilibili.com/video/BV1PJ411n7xZ",target:"_blank",rel:"noopener noreferrer"},u=n('<p>\u53CB\u60C5\u63D0\u793A\uFF0C\u5BF9\u4E8E\u627E\u5DE5\u4F5C\u9762\u8BD5\u7684\u5C0F\u4F19\u4F34\uFF0C\u770B p01-p203\u3001p266-301 \u5C31\u591F\u4E86\uFF01</p><p>\u518D\u63A8\u8350\u4E00\u4E2A\u72C2\u795E\u8BF4\u7684\uFF0C40\u591A\u4E07\u7684\u64AD\u653E\u91CF\uFF0C\u7B97\u662F\u4E00\u4E2A\u9762\u5411 JVM \u9762\u8BD5\u7684\u7A81\u51FB\u7248\u3002\u50CF\u4E00\u4E9B\u5E38\u89C1\u7684 JVM \u9762\u8BD5\u9898\uFF0C\u89C6\u9891\u91CC\u90FD\u6709\u8BB2\u5230\uFF0C\u6BD4\u5982\u8BF4\uFF1A</p><ul><li>\u4EC0\u4E48\u662F JVM\uFF1F</li><li>\u8BF4\u4E00\u8BF4\u7C7B\u52A0\u8F7D\u5668\uFF1F</li><li>\u6808\u548C\u5806\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F</li><li>JDK 8 \u548C\u4E4B\u524D\u53D1\u751F\u4E86\u4EC0\u4E48\u53D8\u5316\uFF1F</li><li>\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\u662F\u5E72\u561B\u7684\uFF1F</li><li>From\u533A\u548C To\u533A\u4EC0\u4E48\u533A\u522B\uFF1F</li><li>\u5982\u4F55\u6392\u67E5 OOM\uFF1F</li><li>\u8BF4\u8BF4\u5783\u573E\u56DE\u6536\u7B97\u6CD5</li><li>\u8BF4\u8BF4 JVM \u5185\u5B58\u7ED3\u6784</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-be0910d8-7669-46cb-b8b9-2399162e723d.png" alt=""></p>',4),d={href:"https://www.bilibili.com/video/BV1iJ411d7jS",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"_3-\u4E66\u7C4D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-\u4E66\u7C4D","aria-hidden":"true"},"#"),t(),e("strong",null,"3\uFF09\u4E66\u7C4D")],-1),v={href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-3f6065c5-2fbf-4107-804e-393b32a4f9ab.png",alt:""})],-1),J=e("p",null,"\u8FD9\u662F\u4E00\u90E8\u4ECE\u5DE5\u4F5C\u539F\u7406\u548C\u5DE5\u7A0B\u5B9E\u8DF5\u4E24\u4E2A\u7EF4\u5EA6\u6DF1\u5165\u5256\u6790JVM\u7684\u8457\u4F5C\uFF0C\u662F\u8BA1\u7B97\u673A\u9886\u57DF\u516C\u8BA4\u7684\u7ECF\u5178\u3002",-1),j=e("p",null,"\u5168\u4E66\u5206\u4E3A\u4E94\u4E2A\u90E8\u5206\uFF0C\u7B2C\u4E00\u90E8\u5206\u4E3A\u8D70\u8FD1 Java\uFF0C\u4E3B\u8981\u662F\u5BF9 JVM \u7684\u53D1\u5C55\u5386\u53F2\u8FDB\u884C\u4E86\u4ECB\u7ECD\uFF0C\u5176\u4E2D\u7B2C\u4E8C\u90E8\u5206\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u548C\u7B2C\u4E09\u90E8\u5206\u865A\u62DF\u673A\u6267\u884C\u5B50\u7CFB\u7EDF\u9700\u8981\u91CD\u70B9\u638C\u63E1\uFF0C\u8FD9\u4E24\u90E8\u5206\u7684\u5185\u5BB9\u4E5F\u662F\u6700\u591A\u7684\u3002",-1),k={href:"https://t.zsxq.com/iYRNrJu",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"\u53EF\u4EE5\u914D\u5408 GitHub \u4E0A\u8FD9\u4E2A\u5F00\u6E90\u7684\u9605\u8BFB\u7B14\u8BB0\u5B66\u4E60\uFF1A",-1),M={href:"https://github.com/TangBean/understanding-the-jvm",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"_4-\u5F00\u6E90\u7535\u5B50\u4E66",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-\u5F00\u6E90\u7535\u5B50\u4E66","aria-hidden":"true"},"#"),t(),e("strong",null,"4\uFF09\u5F00\u6E90\u7535\u5B50\u4E66")],-1),w={href:"https://doocs.github.io/jvm/",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-f2e2e5c4-c193-4af5-b1bc-fea8df2006af.png",alt:""})],-1),x={href:"https://github.com/doocs/jvm",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"\u518D\u63A8\u8350\u4E00\u4EFD GitHub \u4E0A\u5F00\u6E90\u7684 Java \u865A\u62DF\u673A\u77E5\u8BC6\u70B9\u603B\u7ED3\uFF1A",-1),E={href:"https://github.com/heibaiying/Full-Stack-Notes/blob/master/notes/Java_%E8%99%9A%E6%8B%9F%E6%9C%BA.md",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"\u4E3A\u4E86\u65B9\u4FBF\u5927\u5BB6\u7684\u5B66\u4E60\uFF0C\u6211\u4E5F\u5C06\u5176\u6574\u7406\u6210\u4E86 PDF\uFF0C\u5185\u5BB9\u5305\u542B\u4E86 Java \u5185\u5B58\u533A\u57DF\u3001\u5783\u573E\u6536\u96C6\u7B97\u6CD5\u3001\u7ECF\u5178\u5783\u573E\u6536\u96C6\u5668\u3001\u865A\u62DF\u673A\u7C7B\u52A0\u8F7D\u673A\u5236\u3001\u7A0B\u5E8F\u7F16\u8BD1\u548C\u4EE3\u7801\u4F18\u5316\uFF0C\u624B\u7ED8\u56FE\u4E5F\u975E\u5E38\u7684\u6F02\u4EAE\u3002",-1),T=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-2beabbe4-2ddd-4180-8690-1bc3224e6b41.png",alt:""})],-1),N=e("p",null,[t("\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u5FAE\u4FE1\u641C\u7D22\u300C"),e("strong",null,"musk"),t("\u300D\u56DE\u590D\u5173\u952E\u5B57\u300C"),e("strong",null,"java"),t("\u300D\u5C31\u53EF\u4EE5\u62C9\u53D6\u5230\u4E86\u3002")],-1),F=e("p",null,[e("strong",null,"5\uFF09\u4ED8\u8D39\u4E13\u680F")],-1),G={href:"http://gk.link/a/11htX",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"\u56DB\u3001jvm-\u516B\u80A1\u6587",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DB\u3001jvm-\u516B\u80A1\u6587","aria-hidden":"true"},"#"),t(" \u56DB\u3001JVM \u516B\u80A1\u6587")],-1),I={href:"https://mp.weixin.qq.com/s/1jhBZrAb7bnvkgN1TgAUpw",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/jvm-a11893df-e518-4bdc-a166-884b168a8cf0.png",alt:""})],-1),A=e("p",null,"\u4E3A\u4E86\u65B9\u4FBF\u5927\u5BB6\u7684\u9605\u8BFB\u548C\u80CC\u8BF5\uFF0C\u6211\u5DF2\u7ECF\u5C06\u5176\u6574\u7406\u5230\u4E86musk\u7684\u5C0F\u7834\u7AD9\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\u4E0A\uFF0C\u9762\u8BD5\u9006\u88AD Java \u865A\u62DF\u673A\u7BC7\uFF1A",-1),D={href:"https://tobebetterjavaer.com/sidebar/sanfene/jvm.html",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"Java \u865A\u62DF\u673A\u516B\u80A1\u6587\uFF08\u80CC\u8BF5\u7248\uFF09\uFF1A",-1),H={href:"https://tobebetterjavaer.com/baguwen/jvm.html",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"\u8BDA\u5B9E\u70B9\u8BF4\uFF0C\u5982\u679C\u80FD\u628A\u8FD9\u4E24\u4EFD\u516B\u80A1\u6587\u80CC\u4F1A/\u7406\u89E3\u7684\u8BDD\uFF0C\u7B80\u5386\u4E0A\u5C31\u771F\u7684\u6562\u5199\u201C\u7CBE\u901A\u201DJava \u865A\u62DF\u673A\u4E86\u3002",-1),Z=e("h2",{id:"\u4E94\u3001\u5B66\u4E60-jvm-\u7684\u4E00\u70B9\u5C0F\u5FC3\u5F97",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E94\u3001\u5B66\u4E60-jvm-\u7684\u4E00\u70B9\u5C0F\u5FC3\u5F97","aria-hidden":"true"},"#"),t(" \u4E94\u3001\u5B66\u4E60 JVM \u7684\u4E00\u70B9\u5C0F\u5FC3\u5F97")],-1),K=e("p",null,"\u548C C++ \u76F8\u6BD4\uFF0CJava \u7684\u5185\u5B58\u7BA1\u7406\u673A\u5236\u53EF\u4EE5\u8BF4\u662F\u4E00\u5927\u7279\u8272\uFF0CJava \u5F00\u53D1\u4E0D\u518D\u9700\u8981\u81EA\u5DF1\u53BB\u5199\u4EE3\u7801\u624B\u52A8\u91CA\u653E\u5185\u5B58\uFF0C\u751A\u81F3\u4F60\u60F3\u81EA\u5DF1\u5E72\uFF0CJVM \u90FD\u4E0D\u7ED9\u4F60\u8FD9\u4E2A\u673A\u4F1A\uFF0C\u865A\u62DF\u673A\u5B8C\u5168\u638C\u63E1\u4E86 Java \u5185\u5B58\u7684\u63A7\u5236\u6743\u3002",-1),L=e("p",null,"\u8FD9\u770B\u8D77\u6765\u633A\u7F8E\u597D\u7684\uFF0C\u4F46\u5E76\u4E0D\u610F\u5473\u7740Java \u5F00\u53D1\u5C31\u53EF\u4EE5\u968F\u610F\u5199\u4EE3\u7801\uFF0C\u968F\u610F\u4F7F\u7528\u5185\u5B58\uFF0C\u4ECE\u6211\u591A\u5E74\u7684\u4F7F\u7528\u4F53\u9A8C\u6765\u770B\uFF0C\u5185\u5B58\u6EA2\u51FA\u548C\u5185\u5B58\u6CC4\u9732\u8FD8\u662F\u4F1A\u65F6\u4E0D\u65F6\u53D1\u751F\u7684\uFF0C\u5C24\u5176\u662F\u521D\u5B66\u9636\u6BB5\uFF0C\u5C24\u5176\u5728\u5F00\u542F\u591A\u7EBF\u7A0B\u7684\u60C5\u51B5\u4E0B\u3002",-1),R=e("p",null,"\u4E00\u65E6\u51FA\u73B0\u5185\u5B58\u6EA2\u51FA\u6216\u8005\u5185\u5B58\u6CC4\u9732\uFF0C\u6392\u67E5\u95EE\u9898\u8FD8\u662F\u633A\u56F0\u96BE\u7684\uFF0C\u6240\u4EE5\u77E5\u9053\u900A\u5C3C\u57FA\u5230\u5E95\u662F\u600E\u4E48\u7BA1\u7406\u5185\u5B58\u7684\u5C31\u53D8\u5F97\u5341\u5206\u91CD\u8981\u4E86\u3002",-1),U={href:"https://tobebetterjavaer.com/jvm/gc.html",target:"_blank",rel:"noopener noreferrer"},X={href:"https://tobebetterjavaer.com/jvm/whereis-the-object.html",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://tobebetterjavaer.com/jvm/neicun-jiegou.html",target:"_blank",rel:"noopener noreferrer"},Q=e("li",null,"\u8FD9\u4E9B\u5E9F\u5F03\u4E86\u7684\u5BF9\u8C61\u4F1A\u4E0D\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u9732\uFF08OOM\uFF0COutOfMemoryError\uFF09\uFF1F\u4E8E\u662F\u6211\u4EEC\u5C31\u9700\u8981\u4E86\u89E3\u6BCF\u4E2A\u5206\u533A\u7684 OOM\u3002",-1),W=e("li",null,"\u8FD9\u4E9B\u5E9F\u5F03\u4E86\u5BF9\u8C61\u4EC0\u4E48\u65F6\u5019\u88AB\u56DE\u6536\uFF1F\u4E8E\u662F\u6211\u4EEC\u5C31\u9700\u8981\u4E86\u89E3\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF0C\u6BD4\u5982\u8BF4\u6E05\u9664\u7B97\u6CD5\u3001\u590D\u5236\u7B97\u6CD5\u3001\u6807\u8BB0\u6574\u7406\u7B97\u6CD5\u548C\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5\u3002",-1),$=e("p",null,"\u77E5\u9053\u4E86\u4E00\u4E2A\u5BF9\u8C61\u5728\u5185\u5B58\u4E2D\u7684\u751F\u548C\u6B7B\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u77E5\u9053\u7C7B\u662F\u5982\u4F55\u5728\u5185\u5B58\u4E2D\u53D8\u6210\u5BF9\u8C61\u7684\uFF1F\u5BF9\u8C61\u7684\u65B9\u6CD5\u662F\u5982\u4F55\u6267\u884C\u7684\uFF1F",-1),ee={href:"https://tobebetterjavaer.com/jvm/class-file-jiegou.html",target:"_blank",rel:"noopener noreferrer"},te={href:"https://tobebetterjavaer.com/jvm/class-load.html",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://tobebetterjavaer.com/jvm/how-jvm-run-zijiema-zhiling.html",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://tobebetterjavaer.com/jvm/zijiema-zhiling.html",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://tobebetterjavaer.com/jvm/problem-tools.html",target:"_blank",rel:"noopener noreferrer"},le={href:"https://tobebetterjavaer.com/jvm/jit.html",target:"_blank",rel:"noopener noreferrer"},re=e("p",null,"JVM \u76F8\u5173\u7684\u77E5\u8BC6\u5DF2\u7ECF\u6210\u4E3A\u9762\u8BD5\u5FC5\u8003\u7684\u79D1\u76EE\u4E86\uFF0C\u4F46\u8001\u5B9E\u8BB2\uFF0CJVM \u76F8\u5173\u7684\u77E5\u8BC6\u8FD8\u771F\u7684\u4E0D\u592A\u597D\u7528\u5728\u9879\u76EE\u4E2D\uFF0C\u6216\u8005\u8BF4\u4E0D\u592A\u597D\u5728\u9879\u76EE\u4E2D\u4F53\u73B0\u51FA\u6765\u3002",-1),se=e("p",null,"\u90A3\u8FD9\u91CC\u7ED9\u5927\u5BB6\u63A8\u8350\u4E00\u4E2A\u5B9E\u6218\u9879\u76EE\uFF0C\u57FA\u4E8E Spring Boot \u7684\u5728\u7EBF Java IDE\uFF0C\u53EF\u4EE5\u8FDC\u7A0B\u6267\u884C Java \u4EE3\u7801\u5E76\u5C06\u7A0B\u5E8F\u7684\u8FD0\u884C\u7ED3\u679C\u53CD\u9988\u51FA\u6765\u3002\u6D89\u53CA\u4E86 Java \u7C7B\u6587\u4EF6\u7684\u7ED3\u6784\u3001Java \u7C7B\u52A0\u8F7D\u5668\u548C Java \u7C7B\u7684\u70ED\u66FF\u6362\u7B49 JVM \u76F8\u5173\u7684\u6280\u672F\u3002",-1),ie={href:"https://github.com/TangBean/OnlineExecutor",target:"_blank",rel:"noopener noreferrer"},he=e("p",null,"\u542C\u6211\u8FD9\u4E48\u4E00\u8BF4\uFF0C\u662F\u4E0D\u662F\u4E00\u4E0B\u5B50\u5C31\u6E05\u6670\u591A\u4E86\uFF01",-1),ce=e("p",null,"\u53E6\u5916\uFF0C\u9700\u8981 Java \u5B66\u4E60\u8D44\u6599\u7684\u8BDD\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6233\u6211\u6574\u7406\u7684\u8FD9\u4E2A GitHub/\u7801\u4E91\u4ED3\u5E93\u2014\u2014\u{1F4DA}Java\u7A0B\u5E8F\u5458\u5FC5\u8BFB\u4E66\u5355\u6574\u7406\uFF0C\u9644\u4E0B\u8F7D\u5730\u5740\uFF0C\u52A9\u529B\u6BCF\u4E00\u4E2AJava\u7A0B\u5E8F\u5458\u6784\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u77E5\u8BC6\u4F53\u7CFB\u3002\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u64CD\u4F5C\u7CFB\u7EDF\u3001\u6570\u636E\u5E93\u3001\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u3001\u5927\u6570\u636E\u3001\u67B6\u6784\u3001\u9762\u8BD5\u7B49\u7B49\u3002",-1),pe={href:"https://github.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://gitee.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},be=e("p",null,"\u7ED9\u5927\u5BB6\u622A\u56FE\u5C55\u793A\u4E00\u4E0B\u91CC\u9762\u90FD\u6709\u54EA\u4E9B\u4F18\u8D28\u7684 PDF\uFF1A",-1),me=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/java-books.jpg",alt:""})],-1),ue=e("p",null,[e("strong",null,"Java \u865A\u62DF\u673A\u867D\u7136\u96BE\u5B66\uFF0C\u4F46\u5982\u679C\u4F60\u80FD\u575A\u6301\u5B66\u4E0B\u53BB\uFF0C\u5185\u529F\u81EA\u7136\u800C\u7136\u5C31\u63D0\u5347\u4E86\u4E00\u5927\u622A"),t("\u3002")],-1),de=e("hr",null,null,-1);function ge(ve,fe){const a=h("ExternalLinkIcon");return r(),s("div",null,[p,e("blockquote",null,[e("p",null,[e("a",_,[t("https://tobebetterjavaer.com/home.html#java\u865A\u62DF\u673A"),o(a)])])]),b,e("blockquote",null,[e("p",null,[t("\u89C6\u9891\u5730\u5740\uFF1A"),e("a",m,[t("https://www.bilibili.com/video/BV1PJ411n7xZ"),o(a)])])]),u,e("blockquote",null,[e("p",null,[t("\u89C6\u9891\u5730\u5740\uFF1A"),e("a",d,[t("https://www.bilibili.com/video/BV1iJ411d7jS"),o(a)])])]),g,e("p",null,[t("\u7EB8\u8D28\u4E66\u53EA\u63A8\u8350\u4E00\u672C\u5468\u5FD7\u660E\u8001\u5E08\u7684\u795E\u4E66\u300A"),e("a",v,[t("\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A"),o(a)]),t("\u300B\uFF0C\u57FA\u672C\u4E0A\u5B66\u4E60 JVM \u7684\u5C0F\u4F19\u4F34\u4EBA\u624B\u4E00\u672C\u3002")]),f,J,j,e("p",null,[t("\u7B2C\u56DB\u90E8\u5206\u7A0B\u5E8F\u7F16\u8BD1\u4E0E\u4EE3\u7801\u4F18\u5316\u4E2D\u9700\u8981\u91CD\u70B9\u638C\u63E1\u7684\u662F JIT \u90E8\u5206\uFF0C\u7B2C\u4E94\u90E8\u5206\u9AD8\u6548\u5E76\u53D1\u6700\u597D\u548C"),e("a",k,[t("Java \u5E76\u53D1\u7F16\u7A0B"),o(a)]),t("\uFF08\u6211\u524D\u9762\u4E5F\u505A\u4E86\u5B66\u4E60\u8DEF\u7EBF\u7684\u603B\u7ED3\uFF09\u8FD9\u5757\u5185\u5BB9\u7ED3\u5408\u8D77\u6765\u5B66\u4E60\u3002")]),V,e("blockquote",null,[e("p",null,[e("a",M,[t("https://github.com/TangBean/understanding-the-jvm"),o(a)])])]),q,e("p",null,[t("\u63A8\u8350 doocs \u793E\u533A\u7684 "),e("a",w,[t("JVM \u5E95\u5C42\u539F\u7406\u6700\u5168\u77E5\u8BC6\u603B\u7ED3"),o(a)]),t("\uFF0C\u7B97\u662F\u300A\u6DF1\u5165\u7406\u89E3 Java \u865A\u62DF\u673A\u300B\u8FD9\u672C\u4E66\u7684\u4E00\u4E2A\u7CBE\u7B80\u77E5\u8BC6\u70B9\u68B3\u7406\u3002")]),B,e("blockquote",null,[e("p",null,[t("GitHub \u5730\u5740\uFF1A"),e("a",x,[t("https://github.com/doocs/jvm"),o(a)])])]),i(` \u8003\u8651\u5230\u6709\u4E9B\u5C0F\u4F19\u4F34\u53EF\u80FD\u9700\u8981 PDF \u7248\u672C\uFF0C\u6211\u90FD\u6574\u7406\u597D\u4E86\uFF0C\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u8BF7\u626B\u63CF\u4E0B\u65B9\u7684\u4E8C\u7EF4\u7801\u5173\u6CE8\u4F5C\u8005\u7684\u539F\u521B\u516C\u4F17\u53F7\u300C**musk**\u300D\u56DE\u590D\u5173\u952E\u5B57\u300C**java**\u300D\u5C31\u53EF\u4EE5\u62C9\u53D6\u5230\u4E86\u3002

![\u626B\u7801\u5173\u6CE8\u540E\u56DE\u590D\u300Cjava\u300D\u5173\u952E\u5B57](https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/gongzhonghao.png) `),y,e("blockquote",null,[e("p",null,[e("a",E,[t("https://github.com/heibaiying/Full-Stack-Notes/blob/master/notes/Java_\u865A\u62DF\u673A.md"),o(a)])])]),O,T,N,F,e("p",null,[t("\u90D1\u96E8\u8FEA\u8001\u5E08\u5728\u6781\u5BA2\u65F6\u95F4\u4E0A\u5F00\u4E86\u4E00\u95E8\u300A\u6DF1\u5165\u62C6\u89E3Java\u865A\u62DF\u673A\u300B\u7684\u4ED8\u8D39\u4E13\u680F\uFF0C\u8D28\u91CF\u8FD8\u662F\u633A\u9AD8\u7684\uFF0C\u559C\u6B22\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u6233"),e("a",G,[t("\u94FE\u63A5"),o(a)]),t("\u53BB\u8D2D\u4E70\uFF0C\u53CD\u6B63\u6211\u81EA\u5DF1\u611F\u89C9\u8D28\u91CF\u8FD8\u4E0D\u9519\u3002")]),C,e("p",null,[t("\u8FD9\u91CC\u7ED9\u5927\u5BB6\u63A8\u8350\u4E24\u4EFD Java \u865A\u62DF\u673A\u65B9\u9762\u7684\u516B\u80A1\u6587\uFF0C\u4E00\u4EFD\u6765\u81EA\u8BFB\u8005"),e("a",I,[t("\u4E09\u5206\u6076"),o(a)]),t("\uFF0C\u4E00\u4EFD\u6765\u81EA\u8BFB\u8005\u5C0F\u725B\uFF0C\u5148\u622A\u56FE\u7ED9\u5927\u5BB6\u770B\u4E00\u4E0B Java \u865A\u62DF\u673A\u7684\u7406\u89E3\u7248\u516B\u80A1\u6587\uFF0C\u56FE\u6587\u5E76\u8302\uFF0C\u975E\u5E38\u5BB9\u6613\u6D88\u5316\u548C\u5438\u6536\u3002")]),z,A,e("blockquote",null,[e("p",null,[e("a",D,[t("https://tobebetterjavaer.com/sidebar/sanfene/jvm.html"),o(a)])])]),S,e("blockquote",null,[e("p",null,[e("a",H,[t("https://tobebetterjavaer.com/baguwen/jvm.html"),o(a)])])]),P,Z,K,L,R,e("p",null,[e("a",U,[t("JVM \u7684\u5783\u573E\u56DE\u6536"),o(a)]),t("\uFF0C\u5176\u5B9E\u5C31\u662F\u6536\u62FE\u90A3\u4E9B\u4E0D\u518D\u4F7F\u7528\u7684 Java \u5BF9\u8C61\uFF0C\u628A\u4ED6\u4EEC\u66FE\u7ECF\u5360\u7528\u7684\u5185\u5B58\u91CD\u65B0\u91CA\u653E\u51FA\u6765\u3002\u6240\u4EE5\u6211\u4EEC\u8981\u641E\u6E05\u695A\uFF1A")]),e("ul",null,[e("li",null,[e("a",X,[t("\u5BF9\u8C61\u662F\u5982\u4F55\u521B\u5EFA\u7684"),o(a)]),t("\uFF1F\u5BF9\u8C61\u662F\u5982\u4F55\u88AB\u8BBF\u95EE\u7684\uFF1F\u5230\u5E95\u54EA\u4E9B\u5BF9\u8C61\u662F\u5E9F\u5F03\u7684\uFF1F\u4E8E\u662F\u6211\u4EEC\u5C31\u9700\u8981\u641E\u6E05\u695A\u5BF9\u8C61\u7684\u751F\u548C\u6B7B\u3002")]),e("li",null,[t("\u8FD9\u4E9B\u5E9F\u5F03\u4E86\u7684\u5BF9\u8C61\u5230\u5E95\u653E\u5728\u54EA\uFF1F\u4E8E\u662F\u5C31\u9700\u8981\u4E86\u89E3"),e("a",Y,[t("JVM \u7684\u5185\u5B58\u7ED3\u6784"),o(a)]),t("\uFF1A\u65B9\u6CD5\u533A\u3001\u5806\u3001\u7A0B\u5E8F\u8BA1\u6570\u5668\u3001\u865A\u62DF\u673A\u6808\u548C\u672C\u5730\u65B9\u6CD5\u6808\u3002")]),Q,W]),$,e("p",null,[t("\u4E8E\u662F\u6211\u4EEC\u5F00\u59CB\u5B66\u4E60 Java \u865A\u62DF\u673A\u7684\u6267\u884C\u8FC7\u7A0B\uFF0C\u5B66\u4E60"),e("a",ee,[t("\u5B57\u8282\u7801\u6587\u4EF6"),o(a)]),t("\uFF08 .class \u6587\u4EF6\uFF09\uFF0C\u5B66\u4E60"),e("a",te,[t("\u7C7B\u7684\u52A0\u8F7D\u673A\u5236"),o(a)]),t("\uFF0C\u5B66\u4E60"),e("a",ae,[t("\u865A\u62DF\u673A\u6808\u7684\u6808\u5E27\u7ED3\u6784"),o(a)]),t("\uFF0C\u5B66\u4E60\u65B9\u6CD5\u7684\u8C03\u7528\u8FC7\u7A0B\uFF0C\u5B66\u4E60"),e("a",oe,[t("\u5B57\u8282\u7801\u6307\u4EE4"),o(a)]),t("\u7B49\u7B49\u3002")]),e("p",null,[t("\u4E3A\u4E86\u76D1\u63A7\u865A\u62DF\u673A\u548C\u6545\u969C\u6392\u67E5\uFF0C\u6211\u4EEC\u9700\u8981\u5B66\u4E60"),e("a",ne,[t("\u5E38\u7528\u7684 JDK \u547D\u4EE4\u884C\u5DE5\u5177"),o(a)]),t("\uFF0C\u638C\u63E1\u5FC5\u8981\u7684\u7EBF\u4E0A\u95EE\u9898\u6392\u67E5\u65B9\u6CD5\uFF1B\u6B64\u5916\uFF0C\u8FD8\u9700\u8981\u4E86\u89E3 JIT (Just In Time)\u5E76\u4E0D\u662F\u7B80\u5355\u7684\u5C06\u70ED\u70B9\u4EE3\u7801\u7F16\u8BD1\u6210\u673A\u5668\u7801\u5C31\u6536\u5DE5\u7684\uFF0C\u5B83\u8FD8\u4F1A\u5BF9\u4EE3\u7801\u7684\u6267\u884C\u8FDB\u884C\u4F18\u5316\uFF08"),e("a",le,[t("\u65B9\u6CD5\u5185\u8054\u548C\u9003\u9038\u5206\u6790"),o(a)]),t("\uFF09\u3002")]),re,se,e("blockquote",null,[e("p",null,[e("a",ie,[t("https://github.com/TangBean/OnlineExecutor"),o(a)])])]),he,ce,e("ul",null,[e("li",null,[t("GitHub \u5730\u5740\uFF1A"),e("a",pe,[t("https://github.com/itwanger/JavaBooks"),o(a)])]),e("li",null,[t("\u7801\u4E91\u5730\u5740\uFF1A"),e("a",_e,[t("https://gitee.com/itwanger/JavaBooks"),o(a)])])]),be,me,ue,de])}const ke=l(c,[["render",ge],["__file","jvm.html.vue"]]);export{ke as default};
