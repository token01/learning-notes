import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,f as l}from"./app.98b6d306.js";const t={},d=l(`<blockquote><p>\u6D45\u8C08\u4EE5\u592A\u574A\u6E90\u7801\u5206\u6790\u4E4BKademlia\u7B97\u6CD5</p></blockquote><h2 id="kad-\u7B97\u6CD5\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#kad-\u7B97\u6CD5\u6982\u8FF0" aria-hidden="true">#</a> KAD \u7B97\u6CD5\u6982\u8FF0</h2><p>Kademlia\u662F\u4E00\u79CD\u70B9\u5BF9\u70B9\u5206\u5E03\u5F0F\u54C8\u5E0C\u8868\uFF08DHT\uFF09\uFF0C\u5B83\u5728\u5BB9\u6613\u51FA\u9519\u7684\u73AF\u5883\u4E2D\u4E5F\u5177\u6709\u53EF\u8BC1\u660E\u7684\u4E00\u81F4\u6027\u548C\u6027\u80FD\u3002\u4F7F\u7528\u4E00\u79CD\u57FA\u4E8E\u5F02\u6216\u6307\u6807\u7684\u62D3\u6251\u7ED3\u6784\u6765\u8DEF\u7531\u67E5\u8BE2\u548C\u5B9A\u4F4D\u8282\u70B9\uFF0C\u8FD9\u7B80\u5316\u4E86\u7B97\u6CD5\u5E76\u6709\u52A9\u4E8E\u8BC1\u660E\u3002\u8BE5\u62D3\u6251\u7ED3\u6784\u6709\u4E00\u4E2A\u7279\u70B9\uFF1A<strong>\u6BCF\u6B21\u6D88\u606F\u4EA4\u6362\u90FD\u80FD\u591F\u4F20\u9012\u6216\u5F3A\u5316\u6709\u6548\u4FE1\u606F</strong>\u3002\u7CFB\u7EDF\u5229\u7528\u8FD9\u4E9B\u4FE1\u606F\u8FDB\u884C\u5E76\u53D1\u7684\u5F02\u6B65\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u5BB9\u5FCD\u8282\u70B9\u6545\u969C\uFF0C\u5E76\u4E14\u6545\u969C\u4E0D\u4F1A\u5BFC\u81F4\u7528\u6237\u8D85\u65F6\u3002</p><h2 id="kad\u7B97\u6CD5\u8981\u5904\u7406\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#kad\u7B97\u6CD5\u8981\u5904\u7406\u7684\u95EE\u9898" aria-hidden="true">#</a> KAD\u7B97\u6CD5\u8981\u5904\u7406\u7684\u95EE\u9898</h2><ol><li>\u5982\u4F55\u5206\u914D\u5B58\u50A8\u5185\u5BB9\u5230\u5404\u4E2A\u8282\u70B9\uFF0C\u65B0\u589E/\u5220\u9664\u5185\u5BB9\u5982\u4F55\u5904\u7406</li><li>\u5982\u4F55\u627E\u5230\u5B58\u50A8\u6587\u4EF6\u7684\u8282\u70B9/\u5730\u5740/\u8DEF\u5F84</li></ol><h2 id="\u8282\u70B9\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u72B6\u6001" aria-hidden="true">#</a> \u8282\u70B9\u72B6\u6001</h2><p>\u8282\u70B9\u7684\u57FA\u672C\u5C5E\u6027\u5305\u62EC\u5982\u4E0B\uFF1A</p><blockquote><ul><li>\u8282\u70B9ID\uFF0CNode ID</li><li>\u8282\u70B9IP\u5730\u5740\u4E0E\u7AEF\u53E3\u53F7</li></ul></blockquote><p>\u5728 Kad \u7F51\u7EDC\u4E2D\uFF0C\u6240\u6709\u8282\u70B9\u90FD\u88AB\u5F53\u4F5C\u4E00\u9897\u4E8C\u53C9\u6811\u7684\u53F6\u5B50\uFF0C\u5E76\u4E14\u6BCF\u4E00\u4E2A\u8282\u70B9\u7684\u4F4D\u7F6E\u90FD\u7531\u5176 ID \u503C\u7684\u6700\u77ED\u524D\u7F00\u552F\u4E00\u7684\u786E\u5B9A\u3002</p><p>\u5BF9\u4E8E\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\uFF0C\u90FD\u53EF\u4EE5\u628A\u8FD9\u9897\u4E8C\u53C9\u6811\u5206\u89E3\u4E3A\u4E00\u7CFB\u5217\u8FDE\u7EED\u7684\uFF0C\u4E0D\u5305\u542B\u81EA\u5DF1\u7684\u5B50\u6811\u3002\u6700\u9AD8\u5C42\u7684\u5B50\u6811\uFF0C\u7531\u6574\u9897\u6811\u4E0D\u5305\u542B\u81EA\u5DF1\u7684\u6811\u7684\u53E6\u4E00\u534A\u7EC4\u6210\uFF1B\u4E0B\u4E00\u5C42\u5B50\u6811\u7531\u5269\u4E0B\u90E8\u5206\u4E0D\u5305\u542B\u81EA\u5DF1\u7684\u4E00\u534A\u7EC4\u6210\uFF1B\u4F9D\u6B64\u7C7B\u63A8\uFF0C\u76F4\u5230\u5206\u5272\u5B8C\u6574\u9897\u6811\u3002\u56FE 1 \u5C31\u5C55\u793A\u4E86\u8282\u70B90011\u5982\u4F55\u8FDB\u884C\u5B50\u6811\u7684\u5212\u5206\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkxt4yerlnj313e0ckgpk.jpg" alt="image-20201122115058412"></p><p>\u865A\u7EBF\u5305\u542B\u7684\u90E8\u5206\u5C31\u662F\u5404\u5B50\u6811\uFF0C\u7531\u4E0A\u5230\u4E0B\u5404\u5C42\u7684\u524D\u7F00\u5206\u522B\u4E3A0\uFF0C01\uFF0C000\uFF0C0010\u3002</p><p>Kad \u534F\u8BAE\u786E\u4FDD\u6BCF\u4E2A\u8282\u70B9\u77E5\u9053\u5176\u5404\u5B50\u6811\u7684\u81F3\u5C11\u4E00\u4E2A\u8282\u70B9\uFF0C\u53EA\u8981\u8FD9\u4E9B\u5B50\u6811\u975E\u7A7A\u3002\u5728\u8FD9\u4E2A\u524D\u63D0\u4E0B\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u53EF\u4EE5\u901A\u8FC7ID\u503C\u6765\u627E\u5230\u4EFB\u4F55\u4E00\u4E2A\u8282\u70B9\u3002\u8FD9\u4E2A\u8DEF\u7531\u7684\u8FC7\u7A0B\u662F\u901A\u8FC7\u6240\u8C13\u7684 XOR\uFF08\u5F02\u6216\uFF09\u8DDD\u79BB\u5F97\u5230\u7684\u3002</p><p>\u56FE 2 \u5C31\u6F14\u793A\u4E86\u8282\u70B90011\u5982\u4F55\u901A\u8FC7\u8FDE\u7EED\u67E5\u8BE2\u6765\u627E\u5230\u8282\u70B91110\u7684\u3002\u8282\u70B90011\u901A\u8FC7\u5728\u9010\u6B65\u5E95\u5C42\u7684\u5B50\u6811\u95F4\u4E0D\u65AD\u5B66\u4E60\u5E76\u67E5\u8BE2\u6700\u4F73\u8282\u70B9\uFF0C\u83B7\u5F97\u4E86\u8D8A\u6765\u8D8A\u63A5\u8FD1\u7684\u8282\u70B9\uFF0C\u6700\u7EC8\u6536\u655B\u5230\u76EE\u6807\u8282\u70B9\u4E0A\u3002</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkxt81k4ltj314o0u0ti5.jpg" alt="image-20201122115359426"></p><p>\u9700\u8981\u8BF4\u660E\u7684\u662F:<strong>\u53EA\u6709\u7B2C\u4E00\u6B65\u67E5\u8BE2\u7684\u8282\u70B9101\uFF0C\u662F\u8282\u70B90011\u5DF2\u7ECF\u77E5\u9053\u7684\uFF0C\u540E\u9762\u5404\u6B65\u67E5\u8BE2\u7684\u8282\u70B9\uFF0C\u90FD\u662F\u7531\u4E0A\u4E00\u6B65\u67E5\u8BE2\u8FD4\u56DE\u7684\u66F4\u63A5\u8FD1\u76EE\u6807\u7684\u8282\u70B9\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9012\u5F52\u64CD\u4F5C\u7684\u8FC7\u7A0B</strong>\u3002</p><hr><h2 id="\u8282\u70B9\u8DDD\u79BB" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u8DDD\u79BB" aria-hidden="true">#</a> \u8282\u70B9\u8DDD\u79BB</h2><p>Kad \u7F51\u7EDC\u4E2D\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2A 160 bit \u7684 ID \u503C\u4F5C\u4E3A\u6807\u5FD7\u7B26\uFF0CKey \u4E5F\u662F\u4E00\u4E2A 160 bit \u7684\u6807\u5FD7\u7B26\uFF0C\u6BCF\u4E00\u4E2A\u52A0\u5165 Kad \u7F51\u7EDC\u7684\u8BA1\u7B97\u673A\u90FD\u4F1A\u5728 160 bit \u7684 key \u7A7A\u95F4\u88AB\u5206\u914D\u4E00\u4E2A\u8282\u70B9 ID\uFF08node ID\uFF09\u503C\uFF08\u53EF\u4EE5\u8BA4\u4E3A ID \u662F\u968F\u673A\u4EA7\u751F\u7684\uFF09\uFF0C <code>&lt;key,value&gt;</code> \u5BF9\u7684\u6570\u636E\u5C31\u5B58\u653E\u5728 ID \u503C\u201C\u6700\u201D\u63A5\u8FD1 key \u503C\u7684\u8282\u70B9\u4E0A\u3002</p><p>\u5224\u65AD\u4E24\u4E2A\u8282\u70B9 x,y \u7684\u8DDD\u79BB\u8FDC\u8FD1\u662F\u57FA\u4E8E\u6570\u5B66\u4E0A\u7684\u5F02\u6216\u7684\u4E8C\u8FDB\u5236\u8FD0\u7B97\uFF0C d(x,y)=x\u2295y \uFF0C\u65E2\u5BF9\u5E94\u4F4D\u76F8\u540C\u65F6\u7ED3\u679C\u4E3A0\uFF0C\u4E0D\u540C\u65F6\u7ED3\u679C\u4E3A1\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    010101
XOR 110001
----------
    100100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5219\u8FD9\u4E24\u4E2A\u8282\u70B9\u7684\u8DDD\u79BB\u4E3A 32+4=36 \u3002</p><p>\u663E\u7136\uFF0C\u9AD8\u4F4D\u4E0A\u6570\u503C\u7684\u5DEE\u5F02\u5BF9\u7ED3\u679C\u7684\u5F71\u54CD\u66F4\u5927\u3002</p><p>\u5BF9\u4E8E\u5F02\u6216\u64CD\u4F5C\uFF0C\u6709\u5982\u4E0B\u4E00\u4E9B\u6570\u5B66\u6027\u8D28\uFF1A</p><ul><li>\u4E24\u4E2A\u8282\u70B9\u95F4\u7684\u8DDD\u79BB\u662F\u968F\u673A\u7684</li><li>\u8282\u70B9\u4E0E\u81EA\u8EAB\u7684\u8DDD\u79BB\u662F0</li><li>\u5BF9\u79F0\u6027\u3002A \u5230 B \u7684\u8DDD\u79BB\u548C B \u5230 A \u7684\u8DDD\u79BB\u76F8\u7B49</li><li>\u4E09\u89D2\u4E0D\u7B49\u3002distance(A,B)+distance(B,C) &lt;= distance(A,C)</li></ul><p>\u5BF9\u4E8E\u4EFB\u610F\u7ED9\u5B9A\u7684\u8282\u70B9 x \u548C\u8DDD\u79BB \u0394\u22650 \uFF0C\u603B\u4F1A\u5B58\u5728\u4E00\u4E2A\u7CBE\u786E\u7684\u8282\u70B9 y \uFF0C\u4F7F\u5F97 d(x,y)=\u0394 \u3002\u53E6\u5916\uFF0C\u5355\u5411\u6027\u4E5F\u786E\u4FDD\u4E86\u5BF9\u4E8E\u540C\u4E00\u4E2A key \u503C\u7684\u6240\u6709\u67E5\u8BE2\u90FD\u4F1A\u9010\u6B65\u6536\u655B\u5230\u540C\u4E00\u4E2A\u8DEF\u5F84\u4E0A\uFF0C\u800C\u4E0D\u7BA1\u67E5\u8BE2\u7684\u8D77\u59CB\u8282\u70B9\u4F4D\u7F6E\u5982\u4F55\u3002\u8FD9\u6837\uFF0C\u53EA\u8981\u6CBF\u7740\u67E5\u8BE2\u8DEF\u5F84\u4E0A\u7684\u8282\u70B9\u90FD\u7F13\u5B58\u8FD9\u4E2A <code>&lt;key,value&gt;</code> \u5BF9\uFF0C\u5C31\u53EF\u4EE5\u51CF\u8F7B\u5B58\u653E\u70ED\u95E8 key \u503C\u8282\u70B9\u7684\u538B\u529B\uFF0C\u540C\u65F6\u4E5F\u80FD\u591F\u52A0\u5FEB\u67E5\u8BE2\u54CD\u5E94\u901F\u5EA6\u3002</p><h2 id="k\u6876" tabindex="-1"><a class="header-anchor" href="#k\u6876" aria-hidden="true">#</a> K\u6876</h2><h3 id="k-\u6876\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#k-\u6876\u7684\u6982\u5FF5" aria-hidden="true">#</a> K \u6876\u7684\u6982\u5FF5</h3><p>Kad \u7684\u8DEF\u7531\u8868\u662F\u901A\u8FC7\u4E00\u4E9B\u79F0\u4E4B\u4E3A K \u6876\u7684\u8868\u683C\u6784\u9020\u8D77\u6765\u7684\u3002</p><p>\u5BF9\u6BCF\u4E00\u4E2A 0\u2264i\u2264160 \uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u4FDD\u5B58\u6709\u4E00\u4E9B\u548C\u81EA\u5DF1\u8DDD\u79BB\u8303\u56F4\u5728\u533A\u95F4 [2<sup>i</sup>,2<sup>i+1</sup>) \u5185\u7684\u4E00\u4E9B\u8282\u70B9\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u7531\u4E00\u4E9B (IP address,UDP port,Node ID) \u6570\u636E\u5217\u8868\u6784\u6210\uFF08Kad \u7F51\u7EDC\u662F\u9760 UDP \u534F\u8BAE\u4EA4\u6362\u4FE1\u606F\u7684\uFF09\u3002\u6BCF\u4E00\u4E2A\u8FD9\u6837\u7684\u5217\u8868\u90FD\u79F0\u4E4B\u4E3A\u4E00\u4E2A K \u6876\uFF0C\u5E76\u4E14\u6BCF\u4E2A K \u6876\u5185\u90E8\u4FE1\u606F\u5B58\u653E\u4F4D\u7F6E\u662F\u6839\u636E\u4E0A\u6B21\u770B\u5230\u7684\u65F6\u95F4\u987A\u5E8F\u6392\u5217\uFF0C\u6700\u8FD1\uFF08 least-recently\uFF09\u770B\u5230\u7684\u653E\u5728\u5934\u90E8\uFF0C\u6700\u540E\uFF08most-recently\uFF09\u770B\u5230\u7684\u653E\u5728\u5C3E\u90E8\u3002\u6BCF\u4E2A\u6876\u90FD\u6709\u4E0D\u8D85\u8FC7 k \u4E2A\u7684\u6570\u636E\u9879\u3002</p><p>\u4E00\u4E2A\u8282\u70B9\u7684\u5168\u90E8 K \u6876\u5217\u8868\u5982\u4E0B\u56FE \u6240\u793A\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkxxsik21cj30qs0eidhw.jpg" alt="image-20201122143202816"></p><p>\u5F53 i \u503C\u5F88\u5C0F\u65F6\uFF0CK \u6876\u901A\u5E38\u662F\u7A7A\u7684\uFF08\u4E5F\u5C31\u662F\u8BF4\u6CA1\u6709\u8DB3\u591F\u591A\u7684\u8282\u70B9\uFF0C\u6BD4\u5982\u5F53 i = 0 \u65F6\uFF0C\u5C31\u6700\u591A\u53EF\u80FD\u53EA\u67091\u9879\uFF09\uFF1B\u800C\u5F53 i \u503C\u5F88\u5927\u65F6\uFF0C\u5176\u5BF9\u5E94 K \u6876\u7684\u9879\u6570\u53C8\u5F88\u53EF\u80FD\u4F1A\u8D85\u8FC7 k \u4E2A\uFF08\u5F53\u7136\uFF0C\u8986\u76D6\u8DDD\u79BB\u8303\u56F4\u8D8A\u5E7F\uFF0C\u5B58\u5728\u8F83\u591A\u8282\u70B9\u7684\u53EF\u80FD\u6027\u4E5F\u5C31\u8D8A\u5927\uFF09\uFF0C\u8FD9\u91CC k \u662F\u4E3A\u5E73\u8861\u7CFB\u7EDF\u6027\u80FD\u548C\u7F51\u7EDC\u8D1F\u8F7D\u800C\u8BBE\u7F6E\u7684\u4E00\u4E2A\u5E38\u6570\uFF0C\u4F46\u5FC5\u987B\u662F\u5076\u6570\uFF0C\u6BD4\u5982 k = 20\u3002\u5728 BitTorrent \u7684\u5B9E\u73B0\u4E2D\uFF0C\u53D6\u503C\u4E3A k = 8\u3002</p><p>\u7531\u4E8E\u6BCF\u4E2A K \u6876\u8986\u76D6\u8DDD\u79BB\u7684\u8303\u56F4\u5448\u6307\u6570\u5173\u7CFB\u589E\u957F\uFF0C\u8FD9\u5C31\u5F62\u6210\u4E86\u79BB\u81EA\u5DF1\u8FD1\u7684\u8282\u70B9\u7684\u4FE1\u606F\u591A\uFF0C\u79BB\u81EA\u5DF1\u8FDC\u7684\u8282\u70B9\u7684\u4FE1\u606F\u5C11\uFF0C\u4ECE\u800C\u53EF\u4EE5\u4FDD\u8BC1\u8DEF\u7531\u67E5\u8BE2\u8FC7\u7A0B\u662F\u6536\u655B\u3002\u56E0\u4E3A\u662F\u7528\u6307\u6570\u65B9\u5F0F\u5212\u5206\u533A\u95F4\uFF0C\u7ECF\u8FC7\u8BC1\u660E\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u6709 N \u4E2A\u8282\u70B9\u7684 Kad \u7F51\u7EDC\uFF0C\u6700\u591A\u53EA\u9700\u8981\u7ECF\u8FC7 logN \u6B65\u67E5\u8BE2\uFF0C\u5C31\u53EF\u4EE5\u51C6\u786E\u5B9A\u4F4D\u5230\u76EE\u6807\u8282\u70B9\u3002</p><h3 id="k\u6876\u66F4\u65B0\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#k\u6876\u66F4\u65B0\u673A\u5236" aria-hidden="true">#</a> K\u6876\u66F4\u65B0\u673A\u5236</h3><p>\u5F53\u8282\u70B9 x \u6536\u5230\u4E00\u4E2A PRC \u6D88\u606F\u65F6\uFF0C\u53D1\u9001\u8005 y \u7684 IP \u5730\u5740\u5C31\u88AB\u7528\u6765\u66F4\u65B0\u5BF9\u5E94\u7684 K \u6876\uFF0C\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u8BA1\u7B97\u81EA\u5DF1\u548C\u53D1\u9001\u8005\u7684\u8DDD\u79BB\uFF1A d(x,y)=x\u2295y \uFF0C\u6CE8\u610F\uFF1Ax \u548C y \u662F ID \u503C\uFF0C\u4E0D\u662F IP \u5730\u5740</li><li>\u901A\u8FC7\u8DDD\u79BB d \u9009\u62E9\u5BF9\u5E94\u7684 K \u6876\u8FDB\u884C\u66F4\u65B0\u64CD\u4F5C</li><li>\u5982\u679C y \u7684 IP \u5730\u5740\u5DF2\u7ECF\u5B58\u5728\u4E8E\u8FD9\u4E2A K \u6876\u4E2D\uFF0C\u5219\u628A\u5BF9\u5E94\u9879\u79FB\u5230\u8BE5\u8BE5 K \u6876\u7684\u5C3E\u90E8</li><li>\u5982\u679C y \u7684 IP \u5730\u5740\u6CA1\u6709\u8BB0\u5F55\u5728\u8BE5 K \u6876\u4E2D <ol><li>\u5982\u679C\u8BE5 K \u6876\u7684\u8BB0\u5F55\u9879\u5C0F\u4E8E k \u4E2A\uFF0C\u5219\u76F4\u63A5\u628A y \u7684 (IP address, UDP port, Node ID) \u4FE1\u606F\u63D2\u5165\u961F\u5217\u5C3E\u90E8</li><li>\u5982\u679C\u8BE5 K \u6876\u7684\u8BB0\u5F55\u9879\u5927\u4E8E k \u4E2A\uFF0C\u5219\u9009\u62E9\u5934\u90E8\u7684\u8BB0\u5F55\u9879\uFF08\u5047\u5982\u662F\u8282\u70B9 z\uFF09\u8FDB\u884C RPC_PING \u64CD\u4F5C <ol><li>\u5982\u679C z \u6CA1\u6709\u54CD\u5E94\uFF0C\u5219\u4ECE K \u6876\u4E2D\u79FB\u9664 z \u7684\u4FE1\u606F\uFF0C\u5E76\u628A y \u7684\u4FE1\u606F\u63D2\u5165\u961F\u5217\u5C3E\u90E8</li><li>\u5982\u679C z \u6709\u54CD\u5E94\uFF0C\u5219\u628A z \u7684\u4FE1\u606F\u79FB\u5230\u961F\u5217\u5C3E\u90E8\uFF0C\u540C\u65F6\u5FFD\u7565 y \u7684\u4FE1\u606F</li></ol></li></ol></li></ol><p>K \u6876\u7684\u66F4\u65B0\u673A\u5236\u975E\u5E38\u9AD8\u6548\u7684\u5B9E\u73B0\u4E86\u4E00\u79CD\u628A<strong>\u6700\u8FD1\u770B\u5230\u7684\u8282\u70B9\u66F4\u65B0</strong>\u7684\u7B56\u7565\uFF0C\u9664\u975E\u5728\u7EBF\u8282\u70B9\u4E00\u76F4\u672A\u4ECE K \u6876\u4E2D\u79FB\u51FA\u8FC7\u3002\u4E5F\u5C31\u662F\u8BF4\u5728\u7EBF\u65F6\u95F4\u957F\u7684\u8282\u70B9\u5177\u6709\u8F83\u9AD8\u7684\u53EF\u80FD\u6027\u7EE7\u7EED\u4FDD\u7559\u5728 K \u6876\u5217\u8868\u4E2D\u3002</p><p>\u6240\u4EE5\uFF0C\u901A\u8FC7\u628A\u5728\u7EBF\u65F6\u95F4\u957F\u7684\u8282\u70B9\u7559\u5728 K \u6876\u91CC\uFF0CKad \u5C31\u660E\u663E\u589E\u52A0 K \u6876\u4E2D\u7684\u8282\u70B9\u5728\u4E0B\u4E00\u65F6\u95F4\u6BB5\u4ECD\u7136\u5728\u7EBF\u7684\u6982\u7387\uFF0C\u8FD9**\u5BF9\u5E94 Kad \u7F51\u7EDC\u7684\u7A33\u5B9A\u6027\u548C\u51CF\u5C11\u7F51\u7EDC\u7EF4\u62A4\u6210\u672C\uFF08\u4E0D\u9700\u8981\u9891\u7E41\u6784\u5EFA\u8282\u70B9\u7684\u8DEF\u7531\u8868\uFF09**\u5E26\u6765\u5F88\u5927\u597D\u5904\u3002</p><p>\u8FD9\u79CD\u673A\u5236\u7684\u53E6\u4E00\u4E2A\u597D\u5904\u662F\u80FD\u5728<strong>\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u9632\u5FA1 DOS \u653B\u51FB</strong>\uFF0C\u56E0\u4E3A\u53EA\u6709\u5F53\u8001\u8282\u70B9\u5931\u6548\u540E\uFF0CKad \u624D\u4F1A\u66F4\u65B0 K \u6876\u7684\u4FE1\u606F\uFF0C\u8FD9\u5C31\u907F\u514D\u4E86\u901A\u8FC7\u65B0\u8282\u70B9\u7684\u52A0\u5165\u6765\u6CDB\u6D2A\u8DEF\u7531\u4FE1\u606F\u3002</p><p>\u4E3A\u4E86\u9632\u6B62 K \u6876\u8001\u5316\uFF0C\u6240\u6709\u5728\u4E00\u5B9A\u65F6\u95F4\u4E4B\u5185\u65E0\u66F4\u65B0\u64CD\u4F5C\u7684 K \u6876\uFF0C\u90FD\u4F1A\u5206\u522B\u4ECE\u81EA\u5DF1\u7684 K \u6876\u4E2D\u968F\u673A\u9009\u62E9\u4E00\u4E9B\u8282\u70B9\u6267\u884C RPC_PING \u64CD\u4F5C\u3002</p><p>\u4E0A\u8FF0\u8FD9\u4E9B K \u6876\u673A\u5236\u4F7F Kad \u7F13\u548C\u4E86\u6D41\u91CF\u74F6\u9888\uFF08\u6240\u6709\u8282\u70B9\u4E0D\u4F1A\u540C\u65F6\u8FDB\u884C\u5927\u91CF\u7684\u66F4\u65B0\u64CD\u4F5C\uFF09\uFF0C\u540C\u65F6\u4E5F\u80FD\u5BF9\u8282\u70B9\u7684\u5931\u6548\u8FDB\u884C\u8FC5\u901F\u54CD\u5E94\u3002</p><hr><h2 id="\u534F\u8BAE\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE\u6D88\u606F" aria-hidden="true">#</a> \u534F\u8BAE\u6D88\u606F</h2><p>Kademlia \u534F\u8BAE\u5305\u62EC\u56DB\u79CD\u8FDC\u7A0B RPC \u64CD\u4F5C\uFF1APING\u3001STORE\u3001FIND_NODE\u3001FIND_VALUE\u3002</p><ol><li><p>PING \u64CD\u4F5C\u7684\u4F5C\u7528\u662F\u63A2\u6D4B\u4E00\u4E2A\u8282\u70B9\uFF0C\u7528\u4EE5\u5224\u65AD\u5176\u662F\u5426\u4ECD\u7136\u5728\u7EBF\u3002</p></li><li><p>STORE \u64CD\u4F5C\u7684\u4F5C\u7528\u662F\u901A\u77E5\u4E00\u4E2A\u8282\u70B9\u5B58\u50A8\u4E00\u4E2A <code>&lt;key,value&gt;</code> \u5BF9\uFF0C\u4EE5\u4FBF\u4EE5\u540E\u67E5\u8BE2\u9700\u8981\u3002</p></li><li><p>FIND_NODE \u64CD\u4F5C\u4F7F\u7528\u4E00\u4E2A 160 bit \u7684 ID \u4F5C\u4E3A\u53C2\u6570\u3002\u672C\u64CD\u4F5C\u7684\u63A5\u53D7\u8005\u8FD4\u56DE\u5B83\u6240\u77E5\u9053\u7684\u66F4\u63A5\u8FD1\u76EE\u6807 ID \u7684 K \u4E2A\u8282\u70B9\u7684 (IP address, UDP port, Node ID) \u4FE1\u606F\u3002</p><p>\u8FD9\u4E9B\u8282\u70B9\u7684\u4FE1\u606F\u53EF\u4EE5\u662F\u4ECE\u4E00\u4E2A\u5355\u72EC\u7684 K \u6876\u83B7\u5F97\uFF0C\u4E5F\u53EF\u4EE5\u4ECE\u591A\u4E2A K \u6876\u83B7\u5F97\uFF08\u5982\u679C\u6700\u63A5\u8FD1\u76EE\u6807 ID \u7684 K \u6876\u672A\u6EE1\uFF09\u3002\u4E0D\u7BA1\u662F\u54EA\u79CD\u60C5\u51B5\uFF0C\u63A5\u53D7\u8005\u90FD\u5C06\u8FD4\u56DE K \u4E2A\u8282\u70B9\u7684\u4FE1\u606F\u7ED9\u64CD\u4F5C\u53D1\u8D77\u8005\u3002\u4F46\u5982\u679C\u63A5\u53D7\u8005\u6240\u6709 K \u6876\u7684\u8282\u70B9\u4FE1\u606F\u52A0\u8D77\u6765\u4E5F\u6CA1\u6709 K \u4E2A\uFF0C\u5219\u5B83\u4F1A\u8FD4\u56DE\u5168\u90E8\u8282\u70B9\u7684\u4FE1\u606F\u7ED9\u53D1\u8D77\u8005\u3002</p></li><li><p>FIND_VALUE \u64CD\u4F5C\u548C FIND_NODE \u64CD\u4F5C\u7C7B\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\u5B83\u53EA\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u8282\u70B9\u7684 (IP address, UDP port, Node ID) \u4FE1\u606F\u3002\u5982\u679C\u672C\u64CD\u4F5C\u7684\u63A5\u53D7\u8005\u6536\u5230\u540C\u4E00\u4E2A key \u7684 STORE \u64CD\u4F5C\uFF0C\u5219\u4F1A\u76F4\u63A5\u8FD4\u56DE\u5B58\u50A8\u7684 value \u503C\u3002</p><p>\u6CE8\uFF1A\u5728 Kad \u7F51\u7EDC\u4E2D\uFF0C\u7CFB\u7EDF\u5B58\u50A8\u7684\u6570\u636E\u4EE5 <code>&lt;key,value&gt;</code> \u5BF9\u5F62\u5F0F\u5B58\u653E\u3002\u6839\u636E\u7B14\u8005\u7684\u5206\u6790\uFF0C\u5728 BitSpirit \u7684 DHT \u5B9E\u73B0\u4E2D\uFF0C\u5176 key \u503C\u4E3A torrent \u6587\u4EF6\u7684 info_hash \u4E32\uFF0C\u5176 value \u503C\u5219\u548C torrent \u6587\u4EF6\u6709\u5BC6\u5207\u5173\u7CFB\u3002</p></li></ol><p>\u4E3A\u4E86\u9632\u6B62\u4F2A\u9020\u5730\u5740\uFF0C\u5728\u6240\u6709 RPC \u64CD\u4F5C\u4E2D\uFF0C\u63A5\u53D7\u8005\u90FD\u9700\u8981\u54CD\u5E94\u4E00\u4E2A\u968F\u673A\u7684 160 bit \u7684 ID \u503C\u3002\u53E6\u5916\uFF0C\u4E3A\u4E86\u786E\u4FE1\u53D1\u9001\u8005\u7684\u7F51\u7EDC\u5730\u5740\uFF0CPING \u64CD\u4F5C\u8FD8\u53EF\u4EE5\u9644\u5E26\u5728\u63A5\u53D7\u8005\u7684 RPC \u56DE\u590D\u4FE1\u606F\u4E2D\uFF08<strong>\u5728\u4E0A\u8FF0 4\u79CD\u64CD\u4F5C\u4E2D \u63A5\u53D7\u8005\u56DE\u590D \u53D1\u9001\u8005\u65F6\uFF0C\u53EF\u4EE5\u643A\u5E26\u4E0A \u63A5\u53D7\u8005\u5BF9 \u53D1\u9001\u8005\u7684 PING, \u4EE5\u6B64\u6821\u9A8C \u53D1\u9001\u8005\u662F\u5426\u8FD8\u5065\u5728</strong>\uFF09\u3002</p><hr><h2 id="\u8DEF\u7531\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u67E5\u627E" aria-hidden="true">#</a> \u8DEF\u7531\u67E5\u627E</h2><p>Kad \u6280\u672F\u7684\u6700\u5927\u7279\u70B9\u4E4B\u4E00\u5C31\u662F\u80FD\u591F\u63D0\u4F9B\u5FEB\u901F\u7684\u8282\u70B9\u67E5\u627E\u673A\u5236\uFF0C\u5E76\u4E14\u8FD8\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u8FDB\u884C\u67E5\u627E\u901F\u5EA6\u7684\u8C03\u8282\u3002</p><p>\u5047\u5982\u8282\u70B9 x \u8981\u67E5\u627E ID \u503C\u4E3A t \u7684\u8282\u70B9\uFF0CKad \u6309\u7167\u5982\u4E0B\u9012\u5F52\u64CD\u4F5C\u6B65\u9AA4\u8FDB\u884C\u8DEF\u7531\u67E5\u627E\uFF1A</p><ol><li>\u8BA1\u7B97\u5230 t \u7684\u8DDD\u79BB\uFF1A d(x,y)=x\u2295y</li><li>\u4ECE x \u7684\u7B2C [logd] \u4E2A K \u6876\u4E2D\u53D6\u51FA \u03B1 \u4E2A\u8282\u70B9\u7684\u4FE1\u606F\uFF08\u201C[\u201D\u201C]\u201D\u662F\u53D6\u6574\u7B26\u53F7\uFF09\uFF0C\u540C\u65F6\u8FDB\u884C FIND_NODE \u64CD\u4F5C\u3002\u5982\u679C\u8FD9\u4E2A K \u6876\u4E2D\u7684\u4FE1\u606F\u5C11\u4E8E \u03B1 \u4E2A\uFF0C\u5219\u4ECE\u9644\u8FD1\u591A\u4E2A\u6876\u4E2D\u9009\u62E9\u8DDD\u79BB\u6700\u63A5\u8FD1 d \u7684\u603B\u5171 \u03B1 \u4E2A\u8282\u70B9\u3002</li><li>\u5BF9\u63A5\u53D7\u5230\u67E5\u8BE2\u64CD\u4F5C\u7684\u6BCF\u4E2A\u8282\u70B9\uFF0C\u5982\u679C\u53D1\u73B0\u81EA\u5DF1\u5C31\u662F t\uFF0C\u5219\u56DE\u7B54\u81EA\u5DF1\u662F\u6700\u63A5\u8FD1 t \u7684\uFF1B\u5426\u5219\u6D4B\u91CF\u81EA\u5DF1\u548C t \u7684\u8DDD\u79BB\uFF0C\u5E76\u4ECE\u81EA\u5DF1\u5BF9\u5E94\u7684 K \u6876\u4E2D\u9009\u62E9 \u03B1 \u4E2A\u8282\u70B9\u7684\u4FE1\u606F\u7ED9 x\u3002</li><li>X \u5BF9\u65B0\u63A5\u53D7\u5230\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u518D\u6B21\u6267\u884C FIND_NODE \u64CD\u4F5C\uFF0C\u6B64\u8FC7\u7A0B\u4E0D\u65AD\u91CD\u590D\u6267\u884C\uFF0C\u76F4\u5230\u6BCF\u4E00\u4E2A\u5206\u652F\u90FD\u6709\u8282\u70B9\u54CD\u5E94\u81EA\u5DF1\u662F\u6700\u63A5\u8FD1 t \u7684\u3002</li><li>\u901A\u8FC7\u4E0A\u8FF0\u67E5\u627E\u64CD\u4F5C\uFF0Cx \u5F97\u5230\u4E86 k \u4E2A\u6700\u63A5\u8FD1 t \u7684\u8282\u70B9\u4FE1\u606F\u3002</li></ol><p>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7528\u201C\u6700\u63A5\u8FD1\u201D\u8FD9\u4E2A\u8BF4\u6CD5\uFF0C\u662F\u56E0\u4E3A ID \u503C\u4E3A t \u7684\u8282\u70B9\u4E0D\u4E00\u5B9A\u5B58\u5728\u7F51\u7EDC\u4E2D\uFF0C\u4E5F\u5C31\u662F\u8BF4 t \u6CA1\u6709\u5206\u914D\u7ED9\u4EFB\u4F55\u4E00\u53F0\u7535\u8111\u3002</p><p>\u8FD9\u91CC \u03B1 \u4E5F\u662F\u4E3A\u7CFB\u7EDF\u4F18\u5316\u800C\u8BBE\u7ACB\u7684\u4E00\u4E2A\u53C2\u6570\uFF0C\u5C31\u50CF K \u4E00\u6837\u3002\u5728 BitTorrent \u5B9E\u73B0\u4E2D\uFF0C\u53D6\u503C\u4E3A \u03B1=3 \u3002</p><p>\u5F53 \u03B1=1 \u65F6\uFF0C\u67E5\u8BE2\u8FC7\u7A0B\u5C31\u7C7B\u4F3C\u4E8E Chord \u7684\u9010\u8DF3\u67E5\u8BE2\u8FC7\u7A0B\uFF0C\u5982\u56FE 4\u3002</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkxw58zgnyj30ym0u0ast.jpg" alt="image-20201122133505567"></p><p>\u6574\u4E2A\u8DEF\u7531\u67E5\u8BE2\u8FC7\u7A0B\u662F\u9012\u5F52\u64CD\u4F5C\u7684\uFF0C\u5176\u8FC7\u7A0B\u53EF\u7528\u6570\u5B66\u516C\u5F0F\u8868\u793A\u4E3A\uFF1A</p><blockquote><p>N0=x (\u5373\u67E5\u8BE2\u64CD\u4F5C\u7684\u53D1\u8D77\u8005)</p><p>N1=find \u23AFnoden0(t)</p><p>N2=find \u23AFnoden1(t)</p><p>... ...</p><p>Nl=find \u23AFnodenl\u22121(t)</p></blockquote><p>\u8FD9\u4E2A\u9012\u5F52\u8FC7\u7A0B\u4E00\u76F4\u6301\u7EED\u5230 Nl=t \uFF0C\u6216\u8005 Nl \u7684\u8DEF\u7531\u8868\u4E2D\u6CA1\u6709\u4EFB\u4F55\u5173\u4E8E t \u7684\u4FE1\u606F\uFF0C\u5373\u67E5\u8BE2\u5931\u8D25\u3002</p><p>\u7531\u4E8E\u6BCF\u6B21\u67E5\u8BE2\u90FD\u80FD\u4ECE\u66F4\u63A5\u8FD1 t \u7684 K \u6876\u4E2D\u83B7\u53D6\u4FE1\u606F\uFF0C\u8FD9\u6837\u7684\u673A\u5236\u4FDD\u8BC1\u4E86\u6BCF\u4E00\u6B21\u9012\u5F52\u64CD\u4F5C\u90FD\u80FD\u591F\u81F3\u5C11\u83B7\u5F97\u8DDD\u79BB\u51CF\u534A\uFF08\u6216\u8DDD\u79BB\u51CF\u5C11 1 bit\uFF09\u7684\u6548\u679C\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u6574\u4E2A\u67E5\u8BE2\u8FC7\u7A0B\u7684\u6536\u655B\u901F\u5EA6\u4E3A O(logN) \uFF0C\u8FD9\u91CC N \u4E3A\u7F51\u7EDC\u5168\u90E8\u8282\u70B9\u7684\u6570\u91CF\u3002</p><p>\u5F53\u8282\u70B9 x \u8981\u67E5\u8BE2 <code>&lt;key,value&gt;</code> \u5BF9\u65F6\uFF0C\u548C\u67E5\u627E\u8282\u70B9\u7684\u64CD\u4F5C\u7C7B\u4F3C\uFF0Cx \u9009\u62E9 k \u4E2A ID \u503C\u6700\u63A5\u8FD1 key \u503C\u7684\u8282\u70B9\uFF0C\u6267\u884C FIND_VALUE \u64CD\u4F5C\uFF0C\u5E76\u5BF9\u6BCF\u4E00\u4E2A\u8FD4\u56DE\u7684\u65B0\u8282\u70B9\u91CD\u590D\u6267\u884C FIND_VALUE \u64CD\u4F5C\uFF0C\u76F4\u5230\u67D0\u4E2A\u8282\u70B9\u8FD4\u56DE value \u503C\u3002</p><p>\u4E00\u65E6 FIND_VALUE \u64CD\u4F5C\u6210\u529F\u6267\u884C\uFF0C\u5219 <code>&lt;key,value&gt;</code> \u5BF9\u6570\u636E\u4F1A\u7F13\u5B58\u5728\u6CA1\u6709\u8FD4\u56DE value \u503C\u7684\u6700\u63A5\u8FD1\u7684\u8282\u70B9\u4E0A\u3002\u8FD9\u6837\u4E0B\u4E00\u6B21\u67E5\u8BE2\u76F8\u540C\u7684 key \u65F6\u5C31\u4F1A\u66F4\u52A0\u5FEB\u901F\u7684\u5F97\u5230\u7ED3\u679C\u3002\u901A\u8FC7\u8FD9\u6837\u7684\u65B9\u5F0F\uFF0C\u70ED\u95E8 <code>&lt;key,value&gt;</code> \u5BF9\u6570\u636E\u7684\u7F13\u5B58\u8303\u56F4\u5C31\u9010\u6B65\u6269\u5927\uFF0C\u4F7F\u7CFB\u7EDF\u5177\u6709\u6781\u4F73\u7684\u54CD\u5E94\u901F\u5EA6( <strong>cache \u4E3A\u5B58\u6D3B24\u5C0F\u65F6</strong>\uFF0C\u4F46\u662F\u76EE\u6807\u8282\u70B9\u4E0A\u7684\u5185\u5BB9\u65F6<strong>\u6BCF1\u5C0F\u65F6</strong>\u5411\u5176\u4ED6\u6700\u8FD1\u8282\u70B9\u91CD\u65B0\u53D1\u5E03&lt;key, value&gt;\u4F7F\u5F97\u6570\u636E\u7684\u8D85\u65F6\u65F6\u95F4\u5F97\u4EE5\u5237\u65B0\uFF0C\u800C\u8FDC\u79BB\u76EE\u6807\u8282\u70B9\u7684\u8282\u70B9\u7684\u6570\u636E\u5B58\u6D3B\u65F6\u95F4\u5F53\u7136\u5C31\u53EF\u80FD\u4E0D\u4F1A\u88AB\u91CD\u65B0\u53D1\u5E03\u5230\uFF0C\u6240\u4EE5\u4E5F\u5C31\u662F\u6570\u636E\u7F13\u5B58\u7684\u8D85\u65F6\u65F6\u95F4\u548C\u8282\u70B9\u7684\u8DDD\u79BB\u6210\u53CD\u6BD4)</p><hr><h2 id="\u6570\u636E\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5B58\u50A8" aria-hidden="true">#</a> \u6570\u636E\u5B58\u50A8</h2><p>\u5B58\u653E <code>&lt;key,value&gt;</code> \u5BF9\u6570\u636E\u7684\u8FC7\u7A0B\u4E3A\uFF1A</p><ol><li>\u53D1\u8D77\u8005\u9996\u5148\u5B9A\u4F4D k \u4E2A ID \u503C\u6700\u63A5\u8FD1 key \u7684\u8282\u70B9</li><li>\u53D1\u8D77\u8005\u5BF9\u8FD9 k \u4E2A\u8282\u70B9\u53D1\u8D77 STORE \u64CD\u4F5C</li><li>\u6267\u884C STORE \u64CD\u4F5C\u7684 k \u4E2A\u8282\u70B9\u6BCF\u5C0F\u65F6\u91CD\u53D1\u5E03\u81EA\u5DF1\u6240\u6709\u7684 <code>&lt;key,value&gt;</code> \u5BF9\u6570\u636E</li><li>\u4E3A\u4E86\u9650\u5236\u5931\u6548\u4FE1\u606F\uFF0C\u6240\u6709 <code>&lt;key,value&gt;</code> \u5BF9\u6570\u636E\u5728\u521D\u59CB\u53D1\u5E0324\u5C0F\u65F6\u540E\u8FC7\u671F</li></ol><p>\u53E6\u5916\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u6570\u636E\u53D1\u5E03\u3001\u641C\u5BFB\u7684\u4E00\u81F4\u6027\uFF0C\u89C4\u5B9A\u5728\u4EFB\u4F55\u65F6\u5019\uFF0C\u5F53\u8282\u70B9 w \u53D1\u73B0\u65B0\u8282\u70B9 u \u6BD4 w \u4E0A\u7684\u67D0\u4E9B <code>&lt;key,value&gt;</code> \u5BF9\u6570\u636E\u66F4\u63A5\u8FD1\uFF0C\u5219 w \u628A\u8FD9\u4E9B <code>&lt;key,value&gt;</code> \u5BF9\u6570\u636E\u590D\u5236\u5230 u \u4E0A\uFF0C\u4F46\u662F\u5E76\u4E0D\u4F1A\u4ECE w \u4E0A\u5220\u9664\u3002</p><hr><h2 id="\u8282\u70B9\u7684\u52A0\u5165\u548C\u79BB\u5F00" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u7684\u52A0\u5165\u548C\u79BB\u5F00" aria-hidden="true">#</a> \u8282\u70B9\u7684\u52A0\u5165\u548C\u79BB\u5F00</h2><p>\u5982\u679C\u8282\u70B9 u \u8981\u60F3\u52A0\u5165 Kad \u7F51\u7EDC\uFF0C\u5B83\u5FC5\u987B\u8981\u548C\u4E00\u4E2A\u5DF2\u7ECF\u5728 Kad \u7F51\u7EDC\u7684\u8282\u70B9\uFF0C\u6BD4\u5982 w\uFF0C\u53D6\u5F97\u8054\u7CFB\u3002</p><p>u \u9996\u5148\u628A w \u63D2\u5165\u81EA\u5DF1\u9002\u5F53\u7684 K \u6876\u4E2D\uFF0C\u7136\u540E\u5BF9\u81EA\u5DF1\u7684\u8282\u70B9 ID \u6267\u884C\u4E00\u6B21 FIND_NODE \u64CD\u4F5C (\u5411 w \u53D1\u5E03 \u67E5\u627E u \u7684 FIND_NODE \u8BF7\u6C42)\uFF0C\u7136\u540E\u6839\u636E\u63A5\u6536\u5230\u7684\u4FE1\u606F\u66F4\u65B0\u81EA\u5DF1\u7684 K \u6876\u5185\u5BB9\u3002\u901A\u8FC7\u5BF9\u81EA\u5DF1\u90BB\u8FD1\u8282\u70B9\u7531\u8FD1\u53CA\u8FDC\u7684\u9010\u6B65\u67E5\u8BE2\uFF0Cu \u5B8C\u6210\u4E86\u4ECD\u7136\u662F\u7A7A\u7684 K \u6876\u4FE1\u606F\u7684\u6784\u5EFA\uFF0C\u540C\u65F6\u4E5F\u628A\u81EA\u5DF1\u7684\u4FE1\u606F\u53D1\u5E03\u5230\u5176\u4ED6\u8282\u70B9\u7684 K \u6876\u4E2D\u3002</p><p>\u8282\u70B9 u \u4E3A\u4F8B\uFF0C\u5176\u8DEF\u7531\u8868\u7684\u751F\u6210\u8FC7\u7A0B\u4E3A\uFF1A</p><ol><li>\u6700\u521D\uFF0Cu \u7684\u8DEF\u7531\u8868\u4E3A\u4E00\u4E2A\u5355\u4E2A\u7684 K \u6876\uFF0C\u8986\u76D6\u4E86\u6574\u4E2A 160 bit ID \u7A7A\u95F4\uFF0C\u5982\u56FE 6 \u6700\u4E0A\u9762\u7684\u8DEF\u7531\u8868\uFF1B</li><li>\u5F53\u5B66\u4E60\u5230\u65B0\u7684\u8282\u70B9\u4FE1\u606F\u540E\uFF0C\u5219 u \u4F1A\u5C1D\u8BD5\u628A\u65B0\u8282\u70B9\u7684\u4FE1\u606F\uFF0C\u6839\u636E\u5176\u524D\u7F00\u503C\u63D2\u5165\u5230\u5BF9\u5E94\u7684 K \u6876\u4E2D\uFF1A <ol><li>\u5982\u679C\u8BE5 K \u6876\u6CA1\u6709\u6EE1\uFF0C\u5219\u65B0\u8282\u70B9\u76F4\u63A5\u63D2\u5165\u5230\u8FD9\u4E2A K \u6876\u4E2D\uFF1B</li><li>\u5982\u679C\u8BE5 K \u6876\u5DF2\u7ECF\u6EE1\u4E86\uFF0C <ol><li>\u5982\u679C\u8BE5 K \u6876\u8986\u76D6\u8303\u56F4\u5305\u542B\u4E86\u8282\u70B9 u \u7684 ID\uFF0C\u5219\u628A\u8BE5 K \u6876\u5206\u88C2\u4E3A\u4E24\u4E2A\u5927\u5C0F\u76F8\u540C\u7684\u65B0 K \u6876\uFF0C\u5E76\u5BF9\u539F K \u6876\u5185\u7684\u8282\u70B9\u4FE1\u606F\u6309\u7167\u65B0\u7684 K \u6876\u524D\u7F00\u503C\u8FDB\u884C\u91CD\u65B0\u5206\u914D</li><li>\u5982\u679C\u8BE5 K \u6876\u8986\u76D6\u8303\u56F4\u6CA1\u6709\u5305\u8282\u70B9 u \u7684 ID\uFF0C\u5219\u76F4\u63A5\u4E22\u5F03\u8BE5\u65B0\u8282\u70B9\u4FE1\u606F</li></ol></li></ol></li><li>\u4E0A\u8FF0\u8FC7\u7A0B\u4E0D\u65AD\u91CD\u590D\uFF0C\u6700\u7EC8\u4F1A\u5F62\u6210\u8868 1 \u7ED3\u6784\u7684\u8DEF\u7531\u8868\u3002\u8FBE\u5230\u8DDD\u79BB\u8FD1\u7684\u8282\u70B9\u7684\u4FE1\u606F\u591A\uFF0C\u8DDD\u79BB\u8FDC\u7684\u8282\u70B9\u7684\u4FE1\u606F\u5C11\u7684\u7ED3\u679C\uFF0C\u4FDD\u8BC1\u4E86\u8DEF\u7531\u67E5\u8BE2\u8FC7\u7A0B\u80FD\u5FEB\u901F\u6536\u655B\u3002</li></ol><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkxyh70im3j30vu0my40e.jpg" alt="image-20201122145547341"></p><p>\u5728\u56FE 7 \u4E2D\uFF0C\u6F14\u793A\u4E86\u5F53\u8986\u76D6\u8303\u56F4\u5305\u542B\u81EA\u5DF1 ID \u503C\u7684 K \u6876\u662F\u5982\u4F55\u9010\u6B65\u5206\u88C2\u7684\u3002</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkxyhl2k3bj30vk0pgq7o.jpg" alt="image-20201122145609681"></p><p>\u5F53 K \u6876 010 \u6EE1\u4E86\u4E4B\u540E\uFF0C\u7531\u4E8E\u5176\u8986\u76D6\u8303\u56F4\u5305\u542B\u4E86\u8282\u70B9 0100 \u7684 ID\uFF0C\u6545\u8BE5 K \u6876\u5206\u88C2\u4E3A\u4E24\u4E2A\u65B0\u7684 K \u6876\uFF1A0101 \u548C 0100\uFF0C\u539F K \u6876 010 \u7684\u4FE1\u606F\u4F1A\u6839\u636E\u5176\u5176\u524D\u7F00\u503C\u91CD\u65B0\u5206\u5E03\u5230\u8FD9\u4E24\u4E2A\u65B0\u7684 K \u6876\u4E2D\u3002\u6CE8\u610F\uFF0C\u8FD9\u91CC\u5E76\u6CA1\u6709\u4F7F\u7528 160 bit \u7684 ID \u503C\u8868\u793A\u6CD5\uFF0C\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u539F\u7406\u7684\u6F14\u793A\uFF0C\u5B9E\u9645 Kad \u7F51\u7EDC\u4E2D\u7684 ID \u503C\u90FD\u662F 160 bit \u7684\u3002</p><p><strong>\u8282\u70B9\u79BB\u5F00 Kad \u7F51\u7EDC\u4E0D\u9700\u8981\u53D1\u5E03\u4EFB\u4F55\u4FE1\u606F</strong>\uFF0CKademlia \u534F\u8BAE\u7684\u76EE\u6807\u4E4B\u4E00\u5C31\u662F\u80FD\u591F\u5F39\u6027\u5DE5\u4F5C\u5728\u4EFB\u610F\u8282\u70B9\u968F\u65F6\u5931\u6548\u7684\u60C5\u51B5\u4E0B\u3002\u4E3A\u6B64\uFF0CKad \u8981\u6C42\u6BCF\u4E2A\u8282\u70B9\u5FC5\u987B\u5468\u671F\u6027 \u3010\u4E00\u822C\u662F\uFF1A \u6BCF\u5C0F\u65F6\u3011 \u7684\u53D1\u5E03\u5168\u90E8\u81EA\u5DF1\u5B58\u653E\u7684 &lt;key,value&gt; \u5BF9\u6570\u636E\uFF0C\u5E76\u628A\u8FD9\u4E9B\u6570\u636E\u7F13\u5B58\u5728\u81EA\u5DF1\u7684 k \u4E2A\u6700\u8FD1\u90BB\u5C45\u5904\uFF0C\u8FD9\u6837\u5B58\u653E\u5728\u5931\u6548\u8282\u70B9\u7684\u6570\u636E\u4F1A\u5F88\u5FEB\u88AB\u66F4\u65B0\u5230\u5176\u4ED6\u65B0\u8282\u70B9\u4E0A\u3002\u6240\u4EE5\u6709\u8282\u70B9\u79BB\u5F00\u4E86\uFF0C\u90A3\u4E48\u5C31\u79BB\u5F00\u4E86\uFF0C\u800C\u4E14\u8282\u70B9\u4E2D\u7684k-\u6876\u5237\u65B0\u673A\u5236\u4E5F\u80FD\u4FDD\u8BC1\u4F1A\u628A\u5DF2\u7ECF\u4E0D\u5728\u7EBF\u7684\u8282\u70B9\u4FE1\u606F\u4ECE\u81EA\u5DF1\u672C\u5730k-\u6876\u4E2D\u79FB\u9664</p><hr><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><blockquote><p>\u516C\u4F17\u53F7\uFF1AAbel sun</p><p>\u6587\u7AE0\u53CA\u6240\u6709\u8D44\u6599\uFF1A /</p></blockquote>`,81),p=[d];function r(o,n){return a(),i("div",null,p)}const h=e(t,[["render",r],["__file","2.Etheric_fang_Kademlia_algorithm_of_the_source_code_analysis.html.vue"]]);export{h as default};
