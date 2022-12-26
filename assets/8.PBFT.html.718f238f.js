import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as i,a as e,b as t,d as r,f as o,r as s}from"./app.e9ea989c.js";const l={},c=o('<blockquote><p>\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|\u5B9E\u7528\u62DC\u5360\u5EAD\u5BB9\u9519\u7B97\u6CD5(PBFT)</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7uqdgnmj31hc0u0wk5.jpg" alt="1"></p><h2 id="\u62DC\u5360\u5EAD\u5BB9\u9519bft" tabindex="-1"><a class="header-anchor" href="#\u62DC\u5360\u5EAD\u5BB9\u9519bft" aria-hidden="true">#</a> \u62DC\u5360\u5EAD\u5BB9\u9519BFT</h2><p>\u62DC\u5360\u5EAD\u5BB9\u9519\u662F\u5206\u5E03\u5F0F\u534F\u8BAE\u7684\u4E00\u79CD\u5C5E\u6027\uFF0C\u5982\u679C\u8FD9\u79CD\u534F\u8BAE\u53EF\u4EE5\u89E3\u51B3\u4E0D\u53EF\u4FE1\u4EFB\u73AF\u5883\u4E0B\u7684\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u62DC\u5360\u5EAD\u5BB9\u9519\u3002</p><p>pbft \u7B97\u6CD5\u7684\u63D0\u51FA\u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3\u62DC\u5360\u5EAD\u5C06\u519B\u95EE\u9898\u3002\u7F51\u4E0A\u5173\u4E8E pbft \u7684\u7B97\u6CD5\u4ECB\u7ECD\u57FA\u672C\u4E0A\u662F\u57FA\u4E8E liskov \u5728 1999 \u5E74\u53D1\u8868\u7684\u8BBA\u6587\u300A Practical Byzantine Fault Tolerance \u300B\u6765\u8FDB\u884C\u89E3\u91CA\u7684\u3002</p><h2 id="raft\u548Cpbft\u7684\u6700\u5927\u5BB9\u9519\u8282\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#raft\u548Cpbft\u7684\u6700\u5927\u5BB9\u9519\u8282\u70B9\u6570" aria-hidden="true">#</a> raft\u548Cpbft\u7684\u6700\u5927\u5BB9\u9519\u8282\u70B9\u6570</h2><p>\u5BF9\u4E8Eraft\u7B97\u6CD5\uFF0Craft\u7B97\u6CD5\u53EA\u652F\u6301\u5BB9\u9519\u6545\u969C\u8282\u70B9\uFF0C\u4E0D\u652F\u6301\u5BB9\u9519\u4F5C\u6076\u8282\u70B9\u3002\u5047\u8BBE\u96C6\u7FA4\u603B\u8282\u70B9\u6570\u4E3An\uFF0C\u6545\u969C\u8282\u70B9\u4E3A f \uFF0C\u96C6\u7FA4\u91CC\u6B63\u5E38\u8282\u70B9\u53EA\u9700\u8981\u6BD4 f \u4E2A\u8282\u70B9\u518D\u591A\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373 f+1 \u4E2A\u8282\u70B9\uFF0C\u6B63\u786E\u8282\u70B9\u7684\u6570\u91CF\u5C31\u4F1A\u6BD4\u6545\u969C\u8282\u70B9\u6570\u91CF\u591A\uFF0C\u90A3\u4E48\u96C6\u7FA4\u5C31\u80FD\u8FBE\u6210\u5171\u8BC6\u3002\u56E0\u6B64 raft \u7B97\u6CD5\u652F\u6301\u7684\u6700\u5927\u5BB9\u9519\u8282\u70B9\u6570\u91CF\u662F\uFF08n-1\uFF09/2\u3002</p><p>\u5BF9\u4E8E pbft \u7B97\u6CD5\uFF0C\u56E0\u4E3A pbft \u7B97\u6CD5\u7684\u9664\u4E86\u9700\u8981\u652F\u6301\u5BB9\u9519\u6545\u969C\u8282\u70B9\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u652F\u6301\u5BB9\u9519\u4F5C\u6076\u8282\u70B9\u3002\u5047\u8BBE\u96C6\u7FA4\u8282\u70B9\u6570\u4E3A N\uFF0C\u6709\u95EE\u9898\u7684\u8282\u70B9\u4E3A f\u3002\u6709\u95EE\u9898\u7684\u8282\u70B9\u4E2D\uFF0C\u53EF\u4EE5\u65E2\u662F\u6545\u969C\u8282\u70B9\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4F5C\u6076\u8282\u70B9\uFF0C\u6216\u8005\u53EA\u662F\u6545\u969C\u8282\u70B9\u6216\u8005\u53EA\u662F\u4F5C\u6076\u8282\u70B9\u3002\u90A3\u4E48\u4F1A\u4EA7\u751F\u4EE5\u4E0B\u4E24\u79CD\u6781\u7AEF\u60C5\u51B5\uFF1A</p><ol><li>\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0Cf \u4E2A\u6709\u95EE\u9898\u8282\u70B9\u65E2\u662F\u6545\u969C\u8282\u70B9\uFF0C\u53C8\u662F\u4F5C\u6076\u8282\u70B9\uFF0C\u90A3\u4E48\u6839\u636E\u5C0F\u6570\u670D\u4ECE\u591A\u6570\u7684\u539F\u5219\uFF0C\u96C6\u7FA4\u91CC\u6B63\u5E38\u8282\u70B9\u53EA\u9700\u8981\u6BD4f\u4E2A\u8282\u70B9\u518D\u591A\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373 f+1 \u4E2A\u8282\u70B9\uFF0C\u786E\u8282\u70B9\u7684\u6570\u91CF\u5C31\u4F1A\u6BD4\u6545\u969C\u8282\u70B9\u6570\u91CF\u591A\uFF0C\u90A3\u4E48\u96C6\u7FA4\u5C31\u80FD\u8FBE\u6210\u5171\u8BC6\u3002\u4E5F\u5C31\u662F\u8BF4\u8FD9\u79CD\u60C5\u51B5\u652F\u6301\u7684\u6700\u5927\u5BB9\u9519\u8282\u70B9\u6570\u91CF\u662F \uFF08n-1\uFF09/2\u3002</li><li>\u7B2C\u4E8C\u79CD\u60C5\u51B5\uFF0C\u6545\u969C\u8282\u70B9\u548C\u4F5C\u6076\u8282\u70B9\u90FD\u662F\u4E0D\u540C\u7684\u8282\u70B9\u3002\u90A3\u4E48\u5C31\u4F1A\u6709 f \u4E2A\u95EE\u9898\u8282\u70B9\u548C f \u4E2A\u6545\u969C\u8282\u70B9\uFF0C\u5F53\u53D1\u73B0\u8282\u70B9\u662F\u95EE\u9898\u8282\u70B9\u540E\uFF0C\u4F1A\u88AB\u96C6\u7FA4\u6392\u9664\u5728\u5916\uFF0C\u5269\u4E0B f \u4E2A\u6545\u969C\u8282\u70B9\uFF0C\u90A3\u4E48\u6839\u636E\u5C0F\u6570\u670D\u4ECE\u591A\u6570\u7684\u539F\u5219\uFF0C\u96C6\u7FA4\u91CC\u6B63\u5E38\u8282\u70B9\u53EA\u9700\u8981\u6BD4f\u4E2A\u8282\u70B9\u518D\u591A\u4E00\u4E2A\u8282\u70B9\uFF0C\u5373 f+1 \u4E2A\u8282\u70B9\uFF0C\u786E\u8282\u70B9\u7684\u6570\u91CF\u5C31\u4F1A\u6BD4\u6545\u969C\u8282\u70B9\u6570\u91CF\u591A\uFF0C\u90A3\u4E48\u96C6\u7FA4\u5C31\u80FD\u8FBE\u6210\u5171\u8BC6\u3002\u6240\u4EE5\uFF0C\u6240\u6709\u7C7B\u578B\u7684\u8282\u70B9\u6570\u91CF\u52A0\u8D77\u6765\u5C31\u662F f+1 \u4E2A\u6B63\u786E\u8282\u70B9\uFF0Cf\u4E2A\u6545\u969C\u8282\u70B9\u548Cf\u4E2A\u95EE\u9898\u8282\u70B9\uFF0C\u5373 3f+1=n\u3002</li></ol><p>\u7ED3\u5408\u4E0A\u8FF0\u4E24\u79CD\u60C5\u51B5\uFF0C\u56E0\u6B64 pbft \u7B97\u6CD5\u652F\u6301\u7684\u6700\u5927\u5BB9\u9519\u8282\u70B9\u6570\u91CF\u662F\uFF08n-1\uFF09/3\u3002</p><h2 id="pbft\u7B97\u6CD5\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#pbft\u7B97\u6CD5\u6D41\u7A0B" aria-hidden="true">#</a> PBFT\u7B97\u6CD5\u6D41\u7A0B</h2><p>\u57FA\u672C\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u5BA2\u6237\u7AEF\u53D1\u9001\u8BF7\u6C42\u7ED9\u4E3B\u8282\u70B9</li><li>\u4E3B\u8282\u70B9\u5E7F\u64AD\u8BF7\u6C42\u7ED9\u5176\u5B83\u8282\u70B9\uFF0C\u8282\u70B9\u6267\u884C pbft \u7B97\u6CD5\u7684\u4E09\u9636\u6BB5\u5171\u8BC6\u6D41\u7A0B\u3002</li><li>\u8282\u70B9\u5904\u7406\u5B8C\u4E09\u9636\u6BB5\u6D41\u7A0B\u540E\uFF0C\u8FD4\u56DE\u6D88\u606F\u7ED9\u5BA2\u6237\u7AEF\u3002</li><li>\u5BA2\u6237\u7AEF\u6536\u5230\u6765\u81EA f+1 \u4E2A\u8282\u70B9\u7684\u76F8\u540C\u6D88\u606F\u540E\uFF0C\u4EE3\u8868\u5171\u8BC6\u5DF2\u7ECF\u6B63\u786E\u5B8C\u6210\u3002</li></ol><p>\u65E0\u8BBA\u662F\u6700\u597D\u7684\u60C5\u51B5\u8FD8\u662F\u6700\u574F\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u6536\u5230 f+1 \u4E2A\u8282\u70B9\u7684\u76F8\u540C\u6D88\u606F\uFF0C\u90A3\u4E48\u5C31\u4EE3\u8868\u6709\u8DB3\u591F\u591A\u7684\u6B63\u786E\u8282\u70B9\u5DF2\u5168\u90E8\u8FBE\u6210\u5171\u8BC6\u5E76\u5904\u7406\u5B8C\u6BD5\u4E86\u3002</p><p>PBFT \u7B97\u6CD5\u4E2D, \u5B58\u5728\u4E00\u4E2A\u4E3B\u8282\u70B9(primary) \u548C\u5176\u4ED6\u7684\u5907\u4EFD\u8282\u70B9 (replica), PBFT \u5171\u8BC6\u673A\u5236\u4E3B\u8981\u5305\u542B\u4E24\u90E8\u5206: \u7B2C\u4E00\u90E8\u5206\u662F\u5206\u5E03\u5F0F\u5171\u8BC6\u8FBE\u6210,\u5728\u4E3B\u8282\u70B9\u6B63\u5E38\u5DE5\u4F5C\u65F6, PBFT \u901A\u8FC7\u9884\u51C6\u5907 (pre-prepare)\u3001\u51C6\u5907 (prepare) \u548C\u627F\u8BFA (commit) \u4E09\u4E2A\u6B65\u9AA4\u5B8C\u6210\u5171\u8BC6; \u7B2C\u4E8C\u90E8\u5206\u662F\u89C6\u56FE\u8F6C\u6362 (view-change), \u5F53\u4E3B\u8282\u70B9\u51FA\u73B0\u95EE\u9898\u4E0D\u80FD\u53CA\u65F6\u5904\u7406\u6570\u636E\u8BF7\u6C42\u65F6, \u5176\u4ED6\u5907\u4EFD\u8282\u70B9\u53D1\u8D77\u89C6\u56FE\u8F6C\u6362, \u8F6C\u6362\u6210\u529F\u540E\u65B0\u7684\u4E3B\u8282\u70B9\u5F00\u59CB\u5DE5\u4F5C. \u4E3B\u8282\u70B9\u4EE5\u8F6E\u8F6C (round robin) \u7684\u65B9\u5F0F\u4EA4\u66FF\u66F4\u6362.</p><p>PBFT \u7684\u5206\u5E03\u5F0F\u5171\u8BC6\u8FBE\u6210\u8FC7\u7A0B\u5982\u4E0B:</p><ol><li>\u8BF7\u6C42 (propose)\uFF1A\u5BA2\u6237\u7AEF (client) \u4E0A\u4F20\u8BF7\u6C42\u6D88\u606F <em>m</em> \u81F3\u7F51\u7EDC\u4E2D\u7684\u8282\u70B9, \u5305\u62EC\u4E3B\u8282\u70B9\u548C\u5176\u4ED6\u5907\u4EFD\u8282\u70B9\u3002</li><li>\u9884\u51C6\u5907 (pre-prepare)\uFF1A\u4E3B\u8282\u70B9\u6536\u5230\u5BA2\u6237\u7AEF\u4E0A\u4F20\u7684\u8BF7\u6C42\u6D88\u606F <em>m</em>, \u8D4B\u4E88\u6D88\u606F\u5E8F\u5217\u53F7 <em>s</em>, \u8BA1\u7B97\u5F97\u5230\u9884\u51C6\u5907\u6D88\u606F (pre-prepare*, H*(<em>m</em>)<em>, s, v</em>)\uFF0C\u5176\u4E2D <em>H</em>(m) \u662F\u5355\u5411\u54C8\u5E0C\u51FD\u6570, <em>v</em> \u4EE3\u8868\u7684\u662F\u6B64\u65F6\u7684\u89C6\u56FE (view),\u89C6\u56FE\u4E00\u822C\u7528\u4E8E\u8BB0\u5F55\u4E3B\u8282\u70B9\u7684\u66F4\u66FF, \u4E3B\u8282\u70B9\u53D1\u751F\u66F4\u66FF\u65F6, \u89C6\u56FE\u968F\u4E4B\u589E\u52A0 1 \u3002\u6D88\u606F\u53D1\u9001\u8005\u8282\u70B9\u5728\u53D1\u9001\u6D88\u606F\u524D\u9700\u5229\u7528\u81EA\u8EAB\u79C1\u94A5\u5BF9\u6D88\u606F\u5B9E\u65BD\u6570\u5B57\u7B7E\u540D\u3002\u4E3B\u8282\u70B9\u5C06\u9884\u51C6\u5907\u6D88\u606F\u53D1\u9001\u7ED9\u5176\u4ED6\u5907\u4EFD\u8282\u70B9.</li><li>\u51C6\u5907 (prepare)\uFF1A\u5907\u4EFD\u8282\u70B9\u6536\u5230\u4E3B\u8282\u70B9\u7684\u9884\u51C6\u5907\u6D88\u606F, \u9A8C\u8BC1 <em>H</em>(<em>m</em>) \u7684\u5408\u6CD5\u6027\u3002\u5373\u5BF9\u4E8E\u89C6\u56FE <em>v</em> \u548C\u5E8F\u5217\u53F7<em>s</em> \u6765\u8BF4, \u5907\u4EFD\u8282\u70B9\u5148\u524D\u5E76\u672A\u6536\u5230\u5176\u4ED6\u6D88\u606F\u3002\u9A8C\u8BC1\u901A\u8FC7\u540E, \u5907\u4EFD\u8282\u70B9\u8BA1\u7B97\u51C6\u5907\u6D88\u606F (prepare*, H*(<em>m</em>)<em>, s, v</em>) \u5E76\u5C06\u5176\u5728\u5168\u7F51\u5E7F\u64AD. \u4E0E\u6B64\u540C\u65F6, \u6240\u6709\u8282\u70B9\u6536\u96C6\u51C6\u5907\u6D88\u606F,\u5982\u679C\u6536\u96C6\u5230\u7684\u5408\u6CD5\u51C6\u5907\u6D88\u606F\u6570\u91CF\u5927\u4E8E\u7B49\u4E8E 2<em>f</em> + 1(\u5305\u542B\u81EA\u8EAB\u51C6\u5907\u6D88\u606F) \u4E2A, \u5219\u5C06\u5176\u7EC4\u6210\u51C6\u5907\u51ED\u8BC1 (prepared certificate)</li><li>\u627F\u8BFA (commit)\uFF1A\u5982\u679C\u5728\u51C6\u5907\u9636\u6BB5\u4E2D, \u8282\u70B9\u6536\u96C6\u5230\u8DB3\u591F\u7684\u51C6\u5907\u6D88\u606F\u5E76\u751F\u6210\u4E86\u51C6\u5907\u51ED\u8BC1, \u90A3\u4E48\u8282\u70B9\u5C06\u8BA1\u7B97\u627F\u8BFA\u6D88\u606F (commit*, s, v*) \u5E76\u5E7F\u64AD\uFF0C\u5C06\u6D88\u606F <em>m</em> \u653E\u5165\u5230\u672C\u5730\u65E5\u5FD7\u4E2D. \u4E0E\u6B64\u540C\u65F6\u8282\u70B9\u6536\u96C6\u7F51\u7EDC\u4E2D\u7684\u627F\u8BFA\u6D88\u606F,\u5982\u679C\u6536\u96C6\u5230\u7684\u5408\u6CD5\u627F\u8BFA\u6D88\u606F\u6570\u91CF\u5927\u4E8E\u7B49\u4E8E 2<em>f</em> +1(\u5305\u542B\u81EA\u8EAB\u627F\u8BFA\u6D88\u606F), \u90A3\u4E48\u5C06\u5176\u7EC4\u6210\u627F\u8BFA\u51ED\u8BC1 (committedcertificate), \u8BC1\u660E\u6D88\u606F <em>m</em> \u5B8C\u6210\u6700\u7EC8\u627F\u8BFA\u3002</li><li>\u7B54\u590D (reply)\uFF1A\u5907\u4EFD\u8282\u70B9\u548C\u4E3B\u8282\u70B9\u4E2D\u4EFB\u610F\u6536\u96C6\u5230\u8DB3\u591F\u627F\u8BFA\u6D88\u606F\u5E76\u7EC4\u6210\u627F\u8BFA\u51ED\u8BC1\u7684\u8282\u70B9, \u5C06\u627F\u8BFA\u51ED\u8BC1\u4F5C\u4E3A\u5BF9\u6D88\u606F <em>m</em> \u7684\u7B54\u590D\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF, \u5BA2\u6237\u7AEF\u786E\u8BA4\u6D88\u606F <em>m</em> \u7684\u6700\u7EC8\u627F\u8BFA.</li></ol><p>PBFT\u7684\u5171\u8BC6\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnxgennnu6j31fu0g6aet.jpg" alt="image-20210223143130925"></p><h2 id="checkpoint\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#checkpoint\u673A\u5236" aria-hidden="true">#</a> checkpoint\u673A\u5236</h2><p>\u5728 PBFT \u4E2D, \u5B58\u5728\u68C0\u67E5\u70B9 (checkpoint) \u673A\u5236, \u7531\u4E8E\u6BCF\u4E2A\u6D88\u606F\u90FD\u88AB\u8D4B\u4E88\u4E86\u4E00\u5B9A\u7684\u5E8F\u5217\u53F7, \u5982\u6D88\u606F <em>m</em> \u5BF9\u5E94\u7684\u5E8F\u5217\u53F7\u4E3A 118, \u5F53\u4E0D\u5C11\u4E8E 2<em>f</em> + 1 \u4E2A\u8282\u70B9\u7EC4\u6210\u6D88\u606F <em>m</em> \u7684\u627F\u8BFA\u51ED\u8BC1, \u5B8C\u6210\u6D88\u606F\u627F\u8BFA\u4E4B\u540E, \u5E8F\u5217\u53F7 118 \u6210\u4E3A\u5F53\u524D\u7684\u7A33\u5B9A\u68C0\u67E5\u70B9 (stable checkpoint). \u68C0\u67E5\u70B9\u673A\u5236\u88AB\u7528\u4E8E\u5B9E\u73B0\u5B58\u50A8\u5220\u51CF, \u5373\u5F53\u5386\u53F2\u65E5\u5FD7\u5185\u5BB9\u8FC7\u591A\u65F6, \u8282\u70B9\u53EF\u4EE5\u9009\u62E9\u6E05\u9664\u7A33\u5B9A\u68C0\u67E5\u70B9\u4E4B\u524D\u7684\u6570\u636E, \u51CF\u5C11\u5B58\u50A8\u6210\u672C. \u53E6\u5916\u7A33\u5B9A\u68C0\u67E5\u70B9\u5728 PBFT \u7684\u89C6\u56FE\u8F6C\u6362\u4E2D\u4E5F\u8D77\u5230\u4E86\u5173\u952E\u4F5C\u7528.</p><h2 id="viewchange\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#viewchange\u673A\u5236" aria-hidden="true">#</a> viewChange\u673A\u5236</h2><p>\u5F53\u4E3B\u8282\u70B9\u6302\u4E86\uFF08\u8D85\u65F6\u65E0\u54CD\u5E94\uFF09\u6216\u8005\u4ECE\u8282\u70B9\u96C6\u4F53\u8BA4\u4E3A\u4E3B\u8282\u70B9\u662F\u95EE\u9898\u8282\u70B9\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1 ViewChange \u4E8B\u4EF6\uFF0C ViewChange \u5B8C\u6210\u540E\uFF0C\u89C6\u56FE\u7F16\u53F7\u5C06\u4F1A\u52A0 1 \u3002\u4E0B\u56FE\u5C55\u793A ViewChange \u7684\u4E09\u4E2A\u9636\u6BB5\u6D41\u7A0B\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnxgw54qrsj31a00dw7be.jpg" alt="image-20210223144812547"></p><p>viewchange \u4F1A\u6709\u4E09\u4E2A\u9636\u6BB5\uFF0C\u5206\u522B\u662F <code>view-change</code> \uFF0C <code>view-change-ack</code> \u548C <code>new-view</code> \u9636\u6BB5\u3002\u4ECE\u8282\u70B9\u8BA4\u4E3A\u4E3B\u8282\u70B9\u6709\u95EE\u9898\u65F6\uFF0C\u4F1A\u5411\u5176\u5B83\u8282\u70B9\u53D1\u9001 view-change \u6D88\u606F\uFF0C\u5F53\u524D\u5B58\u6D3B\u7684\u8282\u70B9\u7F16\u53F7\u6700\u5C0F\u7684\u8282\u70B9\u5C06\u6210\u4E3A\u65B0\u7684\u4E3B\u8282\u70B9\u3002\u5F53\u65B0\u7684\u4E3B\u8282\u70B9\u6536\u5230 2f \u4E2A\u5176\u5B83\u8282\u70B9\u7684 view-change \u6D88\u606F\uFF0C\u5219\u8BC1\u660E\u6709\u8DB3\u591F\u591A\u4EBA\u7684\u8282\u70B9\u8BA4\u4E3A\u4E3B\u8282\u70B9\u6709\u95EE\u9898\uFF0C\u4E8E\u662F\u5C31\u4F1A\u5411\u5176\u5B83\u8282\u70B9\u5E7F\u64AD New-view \u6D88\u606F\u3002\u6CE8\u610F\uFF1A\u4ECE\u8282\u70B9\u4E0D\u4F1A\u53D1\u8D77 new-view \u4E8B\u4EF6\u3002\u5BF9\u4E8E\u4E3B\u8282\u70B9\uFF0C\u53D1\u9001 new-view \u6D88\u606F\u540E\u4F1A\u7EE7\u7EED\u6267\u884C\u4E0A\u4E2A\u89C6\u56FE\u672A\u5904\u7406\u5B8C\u7684\u8BF7\u6C42\uFF0C\u4ECE pre-prepare \u9636\u6BB5\u5F00\u59CB\u3002\u5176\u5B83\u8282\u70B9\u9A8C\u8BC1 new-view \u6D88\u606F\u901A\u8FC7\u540E\uFF0C\u5C31\u4F1A\u5904\u7406\u4E3B\u8282\u70B9\u53D1\u6765\u7684 pre-prepare \u6D88\u606F\uFF0C\u8FD9\u65F6\u6267\u884C\u7684\u8FC7\u7A0B\u5C31\u662F\u524D\u9762\u63CF\u8FF0\u7684 pbft \u8FC7\u7A0B\u3002</p><p>\u6700\u540E\u4E00\u5F20\u56FE\u6765\u4E86\u89E3\u4E00\u4E0BPBFT\u7B97\u6CD5\uFF1A</p><hr><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',28),h=e("p",null,"< >",-1),m={href:"http://pmg.csail.mit.edu/papers/osdi99.pdf",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/shangsongwww/article/details/88942215",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/thesis-mcastro.pdf",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.comp.nus.edu.sg/~rahul/allfiles/cs6234-16-pbft.pdf",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/35847127",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jianshu.com/p/0bef4fb1662b",target:"_blank",rel:"noopener noreferrer"},u={href:"https://learnblockchain.cn/article/781",target:"_blank",rel:"noopener noreferrer"},_={href:"https://lessisbetter.site/2020/03/22/why-pbft-needs-viewchange/%EF%BC%88View",target:"_blank",rel:"noopener noreferrer"};function v(k,B){const a=s("ExternalLinkIcon");return p(),i("div",null,[c,e("blockquote",null,[h,e("p",null,[e("a",m,[t("http://pmg.csail.mit.edu/papers/osdi99.pdf"),r(a)])]),e("p",null,[e("a",f,[t("https://blog.csdn.net/shangsongwww/article/details/88942215"),r(a)])]),e("p",null,[e("a",d,[t("https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/thesis-mcastro.pdf"),r(a)])]),e("p",null,[e("a",w,[t("https://www.comp.nus.edu.sg/~rahul/allfiles/cs6234-16-pbft.pdf"),r(a)])]),e("p",null,[e("a",g,[t("https://zhuanlan.zhihu.com/p/35847127"),r(a)])]),e("p",null,[e("a",b,[t("https://www.jianshu.com/p/0bef4fb1662b"),r(a)])]),e("p",null,[e("a",u,[t("https://learnblockchain.cn/article/781"),r(a)]),t("\uFF08\u4E3A\u4EC0\u4E48\u9700\u8981\u4E09\u9636\u6BB5\u6D88\u606F\uFF09")]),e("p",null,[e("a",_,[t("https://lessisbetter.site/2020/03/22/why-pbft-needs-viewchange/\uFF08View"),r(a)]),t(" Change\u7684\u4F5C\u7528\uFF09")])])])}const x=n(l,[["render",v],["__file","8.PBFT.html.vue"]]);export{x as default};
