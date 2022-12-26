import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,a,d as n,b as r,f as p,r as l}from"./app.c8d9b7d0.js";const o={},d=p(`<h1 id="mysql-\u7D22\u5F15-b-\u6811" tabindex="-1"><a class="header-anchor" href="#mysql-\u7D22\u5F15-b-\u6811" aria-hidden="true">#</a> MySQL - \u7D22\u5F15(B+\u6811)</h1><h2 id="_1-b-tree-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-b-tree-\u539F\u7406" aria-hidden="true">#</a> 1. B+ Tree \u539F\u7406</h2><h3 id="_1-1-\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 1.1 \u6570\u636E\u7ED3\u6784</h3><p>B Tree \u6307\u7684\u662F Balance Tree\uFF0C\u4E5F\u5C31\u662F\u5E73\u8861\u6811\u3002\u5E73\u8861\u6811\u662F\u4E00\u9897\u67E5\u627E\u6811\uFF0C\u5E76\u4E14\u6240\u6709\u53F6\u5B50\u8282\u70B9\u4F4D\u4E8E\u540C\u4E00\u5C42\u3002</p><p>B+ Tree \u662F\u57FA\u4E8E B Tree \u548C\u53F6\u5B50\u8282\u70B9\u987A\u5E8F\u8BBF\u95EE\u6307\u9488\u8FDB\u884C\u5B9E\u73B0\uFF0C\u5B83\u5177\u6709 B Tree \u7684\u5E73\u8861\u6027\uFF0C\u5E76\u4E14\u901A\u8FC7\u987A\u5E8F\u8BBF\u95EE\u6307\u9488\u6765\u63D0\u9AD8\u533A\u95F4\u67E5\u8BE2\u7684\u6027\u80FD\u3002</p><p>\u5728 B+ Tree \u4E2D\uFF0C\u4E00\u4E2A\u8282\u70B9\u4E2D\u7684 key \u4ECE\u5DE6\u5230\u53F3\u975E\u9012\u51CF\u6392\u5217\uFF0C\u5982\u679C\u67D0\u4E2A\u6307\u9488\u7684\u5DE6\u53F3\u76F8\u90BB key \u5206\u522B\u662F keyi \u548C keyi+1\uFF0C\u4E14\u4E0D\u4E3A null\uFF0C\u5219\u8BE5\u6307\u9488\u6307\u5411\u8282\u70B9\u7684\u6240\u6709 key \u5927\u4E8E\u7B49\u4E8E keyi \u4E14\u5C0F\u4E8E\u7B49\u4E8E keyi+1\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220607205004079.png" alt="image-20220607205004079"></p><h3 id="_1-2-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-2-\u64CD\u4F5C" aria-hidden="true">#</a> 1.2. \u64CD\u4F5C</h3><p>\u8FDB\u884C\u67E5\u627E\u64CD\u4F5C\u65F6\uFF0C\u9996\u5148\u5728\u6839\u8282\u70B9\u8FDB\u884C\u4E8C\u5206\u67E5\u627E\uFF0C\u627E\u5230\u4E00\u4E2A key \u6240\u5728\u7684\u6307\u9488\uFF0C\u7136\u540E\u9012\u5F52\u5730\u5728\u6307\u9488\u6240\u6307\u5411\u7684\u8282\u70B9\u8FDB\u884C\u67E5\u627E\u3002\u76F4\u5230\u67E5\u627E\u5230\u53F6\u5B50\u8282\u70B9\uFF0C\u7136\u540E\u5728\u53F6\u5B50\u8282\u70B9\u4E0A\u8FDB\u884C\u4E8C\u5206\u67E5\u627E\uFF0C\u627E\u51FA key \u6240\u5BF9\u5E94\u7684 data\u3002</p><p>\u63D2\u5165\u5220\u9664\u64CD\u4F5C\u8BB0\u5F55\u4F1A\u7834\u574F\u5E73\u8861\u6811\u7684\u5E73\u8861\u6027\uFF0C\u56E0\u6B64\u5728\u63D2\u5165\u5220\u9664\u64CD\u4F5C\u4E4B\u540E\uFF0C\u9700\u8981\u5BF9\u6811\u8FDB\u884C\u4E00\u4E2A\u5206\u88C2\u3001\u5408\u5E76\u3001\u65CB\u8F6C\u7B49\u64CD\u4F5C\u6765\u7EF4\u62A4\u5E73\u8861\u6027\u3002</p><h3 id="_1-3-\u4E0E\u7EA2\u9ED1\u6811\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4E0E\u7EA2\u9ED1\u6811\u7684\u6BD4\u8F83" aria-hidden="true">#</a> 1.3. \u4E0E\u7EA2\u9ED1\u6811\u7684\u6BD4\u8F83</h3><p>\u7EA2\u9ED1\u6811\u7B49\u5E73\u8861\u6811\u4E5F\u53EF\u4EE5\u7528\u6765\u5B9E\u73B0\u7D22\u5F15\uFF0C\u4F46\u662F\u6587\u4EF6\u7CFB\u7EDF\u53CA\u6570\u636E\u5E93\u7CFB\u7EDF\u666E\u904D\u91C7\u7528 B+ Tree \u4F5C\u4E3A\u7D22\u5F15\u7ED3\u6784\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u4E2A\u539F\u56E0:</p><ol><li><p><strong>\u66F4\u5C11\u7684\u67E5\u627E\u6B21\u6570</strong></p><p>\u5E73\u8861\u6811\u67E5\u627E\u64CD\u4F5C\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u7B49\u4E8E\u6811\u9AD8 h\uFF0C\u800C\u6811\u9AD8\u5927\u81F4\u4E3A O(h)=O(logdN)\uFF0C\u5176\u4E2D d \u4E3A\u6BCF\u4E2A\u8282\u70B9\u7684\u51FA\u5EA6\u3002</p><p>\u7EA2\u9ED1\u6811\u7684\u51FA\u5EA6\u4E3A 2\uFF0C\u800C B+ Tree \u7684\u51FA\u5EA6\u4E00\u822C\u90FD\u975E\u5E38\u5927\uFF0C\u6240\u4EE5<strong>\u7EA2\u9ED1\u6811\u7684\u6811\u9AD8 h \u5F88\u660E\u663E\u6BD4 B+ Tree \u5927\u975E\u5E38\u591A\uFF0C\u68C0\u7D22\u7684\u6B21\u6570\u4E5F\u5C31\u66F4\u591A\u3002</strong></p></li><li><p><strong>\u5229\u7528\u8BA1\u7B97\u673A\u9884\u8BFB\u7279\u6027</strong></p><blockquote><p>B+Tree \u7684\u53F6\u5B50\u8282\u70B9\u4E2D\u7684 key \u4ECE\u5DE6\u5230\u53F3\u975E\u9012\u51CF\u6392\u5217\uFF0C\u53EF\u4EE5\u5229\u7528\u5230\u8BA1\u7B97\u673A\u9884\u8BFB\u7279\u6027</p></blockquote><p>\u4E3A\u4E86\u51CF\u5C11\u78C1\u76D8 I/O\uFF0C\u78C1\u76D8\u5F80\u5F80\u4E0D\u662F\u4E25\u683C\u6309\u9700\u8BFB\u53D6\uFF0C\u800C\u662F\u6BCF\u6B21\u90FD\u4F1A\u9884\u8BFB\u3002\u9884\u8BFB\u8FC7\u7A0B\u4E2D\uFF0C\u78C1\u76D8\u8FDB\u884C\u987A\u5E8F\u8BFB\u53D6\uFF0C\u987A\u5E8F\u8BFB\u53D6\u4E0D\u9700\u8981\u8FDB\u884C\u78C1\u76D8\u5BFB\u9053\uFF0C\u5E76\u4E14\u53EA\u9700\u8981\u5F88\u77ED\u7684\u65CB\u8F6C\u65F6\u95F4\uFF0C\u56E0\u6B64\u901F\u5EA6\u4F1A\u975E\u5E38\u5FEB\u3002</p><p>\u64CD\u4F5C\u7CFB\u7EDF\u4E00\u822C\u5C06\u5185\u5B58\u548C\u78C1\u76D8\u5206\u5272\u6210\u56FA\u6001\u5927\u5C0F\u7684\u5757\uFF0C\u6BCF\u4E00\u5757\u79F0\u4E3A\u4E00\u9875\uFF0C\u5185\u5B58\u4E0E\u78C1\u76D8\u4EE5\u9875\u4E3A\u5355\u4F4D\u4EA4\u6362\u6570\u636E\u3002\u6570\u636E\u5E93\u7CFB\u7EDF\u5C06\u7D22\u5F15\u7684\u4E00\u4E2A\u8282\u70B9\u7684\u5927\u5C0F\u8BBE\u7F6E\u4E3A\u9875\u7684\u5927\u5C0F\uFF0C\u4F7F\u5F97\u4E00\u6B21 I/O \u5C31\u80FD\u5B8C\u5168\u8F7D\u5165\u4E00\u4E2A\u8282\u70B9\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5229\u7528\u9884\u8BFB\u7279\u6027\uFF0C\u76F8\u90BB\u7684\u8282\u70B9\u4E5F\u80FD\u591F\u88AB\u9884\u5148\u8F7D\u5165\u3002</p></li></ol><h2 id="_2-mysql-\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-mysql-\u7D22\u5F15" aria-hidden="true">#</a> 2. MySQL \u7D22\u5F15</h2><p>\u7D22\u5F15\u662F\u5728\u5B58\u50A8\u5F15\u64CE\u5C42\u5B9E\u73B0\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u670D\u52A1\u5668\u5C42\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u4E0D\u540C\u5B58\u50A8\u5F15\u64CE\u5177\u6709\u4E0D\u540C\u7684\u7D22\u5F15\u7C7B\u578B\u548C\u5B9E\u73B0\u3002</p><h3 id="_2-1-b-tree-\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-1-b-tree-\u7D22\u5F15" aria-hidden="true">#</a> 2.1. B+Tree \u7D22\u5F15</h3><p>\u662F\u5927\u591A\u6570 MySQL \u5B58\u50A8\u5F15\u64CE\u7684\u9ED8\u8BA4\u7D22\u5F15\u7C7B\u578B\u3002</p><p>\u56E0\u4E3A\u4E0D\u518D\u9700\u8981\u8FDB\u884C\u5168\u8868\u626B\u63CF\uFF0C\u53EA\u9700\u8981\u5BF9\u6811\u8FDB\u884C\u641C\u7D22\u5373\u53EF\uFF0C\u56E0\u6B64\u67E5\u627E\u901F\u5EA6\u5FEB\u5F88\u591A\u3002\u9664\u4E86\u7528\u4E8E\u67E5\u627E\uFF0C\u8FD8\u53EF\u4EE5\u7528\u4E8E\u6392\u5E8F\u548C\u5206\u7EC4\u3002</p><p>\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u5217\u4F5C\u4E3A\u7D22\u5F15\u5217\uFF0C\u591A\u4E2A\u7D22\u5F15\u5217\u5171\u540C\u7EC4\u6210\u952E\u3002</p><p>\u9002\u7528\u4E8E\u5168\u952E\u503C\u3001\u952E\u503C\u8303\u56F4\u548C\u952E\u524D\u7F00\u67E5\u627E\uFF0C\u5176\u4E2D\u952E\u524D\u7F00\u67E5\u627E\u53EA\u9002\u7528\u4E8E\u6700\u5DE6\u524D\u7F00\u67E5\u627E\u3002\u5982\u679C\u4E0D\u662F\u6309\u7167\u7D22\u5F15\u5217\u7684\u987A\u5E8F\u8FDB\u884C\u67E5\u627E\uFF0C\u5219\u65E0\u6CD5\u4F7F\u7528\u7D22\u5F15\u3002</p><p>InnoDB \u7684 B+Tree \u7D22\u5F15\u5206\u4E3A\u4E3B\u7D22\u5F15\u548C\u8F85\u52A9\u7D22\u5F15\u3002</p><p>\u4E3B\u7D22\u5F15\u7684\u53F6\u5B50\u8282\u70B9 data \u57DF\u8BB0\u5F55\u7740\u5B8C\u6574\u7684\u6570\u636E\u8BB0\u5F55\uFF0C\u8FD9\u79CD\u7D22\u5F15\u65B9\u5F0F\u88AB\u79F0\u4E3A\u805A\u7C07\u7D22\u5F15\u3002\u56E0\u4E3A\u65E0\u6CD5\u628A\u6570\u636E\u884C\u5B58\u653E\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u5730\u65B9\uFF0C\u6240\u4EE5\u4E00\u4E2A\u8868\u53EA\u80FD\u6709\u4E00\u4E2A\u805A\u7C07\u7D22\u5F15\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220607211730533.png" alt="image-20220607211730533"></p><p>\u8F85\u52A9\u7D22\u5F15\u7684\u53F6\u5B50\u8282\u70B9\u7684 data \u57DF\u8BB0\u5F55\u7740\u4E3B\u952E\u7684\u503C\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528\u8F85\u52A9\u7D22\u5F15\u8FDB\u884C\u67E5\u627E\u65F6\uFF0C\u9700\u8981\u5148\u67E5\u627E\u5230\u4E3B\u952E\u503C\uFF0C\u7136\u540E\u518D\u5230\u4E3B\u7D22\u5F15\u4E2D\u8FDB\u884C\u67E5\u627E\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220607211800581.png" alt="image-20220607211800581"></p><h3 id="_2-2-\u54C8\u5E0C\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-2-\u54C8\u5E0C\u7D22\u5F15" aria-hidden="true">#</a> 2.2. \u54C8\u5E0C\u7D22\u5F15</h3><p>\u54C8\u5E0C\u7D22\u5F15\u80FD\u4EE5 O(1) \u65F6\u95F4\u8FDB\u884C\u67E5\u627E\uFF0C\u4F46\u662F\u5931\u53BB\u4E86\u6709\u5E8F\u6027\uFF0C\u5B83\u5177\u6709\u4EE5\u4E0B\u9650\u5236:</p><ul><li>\u65E0\u6CD5\u7528\u4E8E\u6392\u5E8F\u4E0E\u5206\u7EC4\uFF1B</li><li>\u53EA\u652F\u6301\u7CBE\u786E\u67E5\u627E\uFF0C\u65E0\u6CD5\u7528\u4E8E\u90E8\u5206\u67E5\u627E\u548C\u8303\u56F4\u67E5\u627E\u3002</li></ul><p>InnoDB \u5B58\u50A8\u5F15\u64CE\u6709\u4E00\u4E2A\u7279\u6B8A\u7684\u529F\u80FD\u53EB\u201C\u81EA\u9002\u5E94\u54C8\u5E0C\u7D22\u5F15\u201D\uFF0C\u5F53\u67D0\u4E2A\u7D22\u5F15\u503C\u88AB\u4F7F\u7528\u7684\u975E\u5E38\u9891\u7E41\u65F6\uFF0C\u4F1A\u5728 B+Tree \u7D22\u5F15\u4E4B\u4E0A\u518D\u521B\u5EFA\u4E00\u4E2A\u54C8\u5E0C\u7D22\u5F15\uFF0C\u8FD9\u6837\u5C31\u8BA9 B+Tree \u7D22\u5F15\u5177\u6709\u54C8\u5E0C\u7D22\u5F15\u7684\u4E00\u4E9B\u4F18\u70B9\uFF0C\u6BD4\u5982\u5FEB\u901F\u7684\u54C8\u5E0C\u67E5\u627E\u3002</p><h3 id="_2-3-\u5168\u6587\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5168\u6587\u7D22\u5F15" aria-hidden="true">#</a> 2.3 \u5168\u6587\u7D22\u5F15</h3><p>MyISAM \u5B58\u50A8\u5F15\u64CE\u652F\u6301\u5168\u6587\u7D22\u5F15\uFF0C\u7528\u4E8E\u67E5\u627E\u6587\u672C\u4E2D\u7684\u5173\u952E\u8BCD\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u6BD4\u8F83\u662F\u5426\u76F8\u7B49\u3002\u67E5\u627E\u6761\u4EF6\u4F7F\u7528 MATCH AGAINST\uFF0C\u800C\u4E0D\u662F\u666E\u901A\u7684 WHERE\u3002</p><p>\u5168\u6587\u7D22\u5F15\u4E00\u822C\u4F7F\u7528\u5012\u6392\u7D22\u5F15\u5B9E\u73B0\uFF0C\u5B83\u8BB0\u5F55\u7740\u5173\u952E\u8BCD\u5230\u5176\u6240\u5728\u6587\u6863\u7684\u6620\u5C04\u3002</p><p>InnoDB \u5B58\u50A8\u5F15\u64CE\u5728 MySQL 5.6.4 \u7248\u672C\u4E2D\u4E5F\u5F00\u59CB\u652F\u6301\u5168\u6587\u7D22\u5F15\u3002</p><h3 id="_2-4-\u7A7A\u95F4\u6570\u636E\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-4-\u7A7A\u95F4\u6570\u636E\u7D22\u5F15" aria-hidden="true">#</a> 2.4 \u7A7A\u95F4\u6570\u636E\u7D22\u5F15</h3><p>MyISAM \u5B58\u50A8\u5F15\u64CE\u652F\u6301\u7A7A\u95F4\u6570\u636E\u7D22\u5F15(R-Tree)\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5730\u7406\u6570\u636E\u5B58\u50A8\u3002\u7A7A\u95F4\u6570\u636E\u7D22\u5F15\u4F1A\u4ECE\u6240\u6709\u7EF4\u5EA6\u6765\u7D22\u5F15\u6570\u636E\uFF0C\u53EF\u4EE5\u6709\u6548\u5730\u4F7F\u7528\u4EFB\u610F\u7EF4\u5EA6\u6765\u8FDB\u884C\u7EC4\u5408\u67E5\u8BE2\u3002</p><p>\u5FC5\u987B\u4F7F\u7528 GIS \u76F8\u5173\u7684\u51FD\u6570\u6765\u7EF4\u62A4\u6570\u636E\u3002</p><h2 id="_3-\u7D22\u5F15\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_3-\u7D22\u5F15\u4F18\u5316" aria-hidden="true">#</a> 3.\u7D22\u5F15\u4F18\u5316</h2><h3 id="_3-1-\u72EC\u7ACB\u7684\u5217" tabindex="-1"><a class="header-anchor" href="#_3-1-\u72EC\u7ACB\u7684\u5217" aria-hidden="true">#</a> 3.1. \u72EC\u7ACB\u7684\u5217</h3><p>\u5728\u8FDB\u884C\u67E5\u8BE2\u65F6\uFF0C\u7D22\u5F15\u5217\u4E0D\u80FD\u662F\u8868\u8FBE\u5F0F\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u4E0D\u80FD\u662F\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u5426\u5219\u65E0\u6CD5\u4F7F\u7528\u7D22\u5F15\u3002</p><p>\u4F8B\u5982\u4E0B\u9762\u7684\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528 actor_id \u5217\u7684\u7D22\u5F15:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> actor_id <span class="token keyword">FROM</span> sakila<span class="token punctuation">.</span>actor <span class="token keyword">WHERE</span> actor_id <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-\u591A\u5217\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-2-\u591A\u5217\u7D22\u5F15" aria-hidden="true">#</a> 3.2 \u591A\u5217\u7D22\u5F15</h3><p>\u5728\u9700\u8981\u4F7F\u7528\u591A\u4E2A\u5217\u4F5C\u4E3A\u6761\u4EF6\u8FDB\u884C\u67E5\u8BE2\u65F6\uFF0C\u4F7F\u7528\u591A\u5217\u7D22\u5F15\u6BD4\u4F7F\u7528\u591A\u4E2A\u5355\u5217\u7D22\u5F15\u6027\u80FD\u66F4\u597D\u3002\u4F8B\u5982\u4E0B\u9762\u7684\u8BED\u53E5\u4E2D\uFF0C\u6700\u597D\u628A actor_id \u548C film_id \u8BBE\u7F6E\u4E3A\u591A\u5217\u7D22\u5F15\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> film_id<span class="token punctuation">,</span> actor_ id <span class="token keyword">FROM</span> sakila<span class="token punctuation">.</span>film_actor
<span class="token keyword">WHERE</span> actor_id <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">AND</span> film_id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u7D22\u5F15\u5217\u7684\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#_3-3-\u7D22\u5F15\u5217\u7684\u987A\u5E8F" aria-hidden="true">#</a> 3.3. \u7D22\u5F15\u5217\u7684\u987A\u5E8F</h3><p>\u8BA9\u9009\u62E9\u6027\u6700\u5F3A\u7684\u7D22\u5F15\u5217\u653E\u5728\u524D\u9762\uFF0C\u7D22\u5F15\u7684\u9009\u62E9\u6027\u662F\u6307: \u4E0D\u91CD\u590D\u7684\u7D22\u5F15\u503C\u548C\u8BB0\u5F55\u603B\u6570\u7684\u6BD4\u503C\u3002\u6700\u5927\u503C\u4E3A 1\uFF0C\u6B64\u65F6\u6BCF\u4E2A\u8BB0\u5F55\u90FD\u6709\u552F\u4E00\u7684\u7D22\u5F15\u4E0E\u5176\u5BF9\u5E94\u3002\u9009\u62E9\u6027\u8D8A\u9AD8\uFF0C\u67E5\u8BE2\u6548\u7387\u4E5F\u8D8A\u9AD8\u3002</p><p>\u4F8B\u5982\u4E0B\u9762\u663E\u793A\u7684\u7ED3\u679C\u4E2D customer_id \u7684\u9009\u62E9\u6027\u6BD4 staff_id \u66F4\u9AD8\uFF0C\u56E0\u6B64\u6700\u597D\u628A customer_id \u5217\u653E\u5728\u591A\u5217\u7D22\u5F15\u7684\u524D\u9762\u3002</p><blockquote><p>\u7D22\u5F15\u7684\u9009\u62E9\u6027\uFF08Index Selectivity\uFF09\uFF0C\u5B83\u662F\u6307\u4E0D\u91CD\u590D\u7684\u7D22\u5F15\u503C\uFF08\u4E5F\u79F0\u4E3A\u57FA\u6570 cardinality)\u548C\u6570\u636E\u8868\u7684\u8BB0\u5F55\u603B\u6570\u7684\u6BD4\u503C\uFF0C\u53D6\u503C\u8303\u56F4\u5728 <code>[0,1]</code> \u4E4B\u95F4\u3002\u7D22\u5F15\u7684\u9009\u62E9\u6027\u8D8A\u9AD8\u5219\u67E5\u8BE2\u6548\u7387\u8D8A\u9AD8\uFF0C\u56E0\u4E3A\u9009\u62E9\u6027\u9AD8\u7684\u7D22\u5F15\u53EF\u4EE5\u8BA9 MySQL \u5728\u67E5\u627E\u65F6\u8FC7\u6EE4\u6389\u66F4\u591A\u7684\u884C\u3002</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> staff_id<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> staff_id_selectivity<span class="token punctuation">,</span>
<span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> customer_id<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> customer_id_selectivity<span class="token punctuation">,</span>
<span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span> payment<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>   staff_id_selectivity: 0.0001
customer_id_selectivity: 0.0373
               COUNT(*): 16049

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u524D\u7F00\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-4-\u524D\u7F00\u7D22\u5F15" aria-hidden="true">#</a> 3.4. \u524D\u7F00\u7D22\u5F15</h3><p>\u5BF9\u4E8E BLOB\u3001TEXT \u548C VARCHAR \u7C7B\u578B\u7684\u5217\uFF0C\u5FC5\u987B\u4F7F\u7528\u524D\u7F00\u7D22\u5F15\uFF0C\u53EA\u7D22\u5F15\u5F00\u59CB\u7684\u90E8\u5206\u5B57\u7B26\u3002</p><p>\u5BF9\u4E8E<strong>\u524D\u7F00\u957F\u5EA6\u7684\u9009\u53D6\u9700\u8981\u6839\u636E\u7D22\u5F15\u9009\u62E9\u6027\u6765\u786E\u5B9A</strong>\u3002</p><blockquote><p>\u524D\u7F00\u7D22\u5F15\uFF1A<strong>\u5BF9\u6587\u672C\u7684\u524D\u51E0\u4E2A\u5B57\u7B26\u5EFA\u7ACB\u7D22\u5F15\uFF08\u5177\u4F53\u662F\u51E0\u4E2A\u5B57\u7B26\u5728\u5EFA\u7ACB\u7D22\u5F15\u65F6\u6307\u5B9A\uFF09</strong>\uFF0C\u8FD9\u6837\u5EFA\u7ACB\u8D77\u6765\u7684\u7D22\u5F15\u66F4\u5C0F\uFF0C\u6240\u4EE5\u67E5\u8BE2\u66F4\u5FEB</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> <span class="token keyword">system_user</span> <span class="token keyword">add</span> <span class="token keyword">index</span> user_uuid_index<span class="token punctuation">(</span>user_uuid<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="_3-5-\u8986\u76D6\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-5-\u8986\u76D6\u7D22\u5F15" aria-hidden="true">#</a> 3.5. \u8986\u76D6\u7D22\u5F15</h3><p>\u7D22\u5F15\u5305\u542B\u6240\u6709\u9700\u8981\u67E5\u8BE2\u7684\u5B57\u6BB5\u7684\u503C\u3002</p><p>\u5177\u6709\u4EE5\u4E0B\u4F18\u70B9:</p><ul><li>\u7D22\u5F15\u901A\u5E38\u8FDC\u5C0F\u4E8E\u6570\u636E\u884C\u7684\u5927\u5C0F\uFF0C\u53EA\u8BFB\u53D6\u7D22\u5F15\u80FD\u5927\u5927\u51CF\u5C11\u6570\u636E\u8BBF\u95EE\u91CF\u3002</li><li>\u4E00\u4E9B\u5B58\u50A8\u5F15\u64CE(\u4F8B\u5982 MyISAM)\u5728\u5185\u5B58\u4E2D\u53EA\u7F13\u5B58\u7D22\u5F15\uFF0C\u800C\u6570\u636E\u4F9D\u8D56\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u6765\u7F13\u5B58\u3002\u56E0\u6B64\uFF0C\u53EA\u8BBF\u95EE\u7D22\u5F15\u53EF\u4EE5\u4E0D\u4F7F\u7528\u7CFB\u7EDF\u8C03\u7528(\u901A\u5E38\u6BD4\u8F83\u8D39\u65F6)\u3002</li><li>\u5BF9\u4E8E InnoDB \u5F15\u64CE\uFF0C\u82E5\u8F85\u52A9\u7D22\u5F15\u80FD\u591F\u8986\u76D6\u67E5\u8BE2\uFF0C\u5219\u65E0\u9700\u8BBF\u95EE\u4E3B\u7D22\u5F15\u3002</li></ul><h2 id="_4-\u7D22\u5F15\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-\u7D22\u5F15\u7684\u4F18\u70B9" aria-hidden="true">#</a> 4. \u7D22\u5F15\u7684\u4F18\u70B9</h2><ul><li>\u5927\u5927\u51CF\u5C11\u4E86\u670D\u52A1\u5668\u9700\u8981\u626B\u63CF\u7684\u6570\u636E\u884C\u6570\u3002</li><li>\u5E2E\u52A9\u670D\u52A1\u5668\u907F\u514D\u8FDB\u884C\u6392\u5E8F\u548C\u5206\u7EC4\uFF0C\u4E5F\u5C31\u4E0D\u9700\u8981\u521B\u5EFA\u4E34\u65F6\u8868(B+Tree \u7D22\u5F15\u662F\u6709\u5E8F\u7684\uFF0C\u53EF\u4EE5\u7528\u4E8E ORDER BY \u548C GROUP BY \u64CD\u4F5C\u3002\u4E34\u65F6\u8868\u4E3B\u8981\u662F\u5728\u6392\u5E8F\u548C\u5206\u7EC4\u8FC7\u7A0B\u4E2D\u521B\u5EFA\uFF0C\u56E0\u4E3A\u4E0D\u9700\u8981\u6392\u5E8F\u548C\u5206\u7EC4\uFF0C\u4E5F\u5C31\u4E0D\u9700\u8981\u521B\u5EFA\u4E34\u65F6\u8868)\u3002</li><li>\u5C06\u968F\u673A I/O \u53D8\u4E3A\u987A\u5E8F I/O(B+Tree \u7D22\u5F15\u662F\u6709\u5E8F\u7684\uFF0C\u4E5F\u5C31\u5C06\u76F8\u90BB\u7684\u6570\u636E\u90FD\u5B58\u50A8\u5728\u4E00\u8D77)\u3002</li></ul><h2 id="_5-\u7D22\u5F15\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_5-\u7D22\u5F15\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 5. \u7D22\u5F15\u7684\u4F7F\u7528\u573A\u666F</h2><ul><li>\u5BF9\u4E8E\u975E\u5E38\u5C0F\u7684\u8868\u3001\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u7B80\u5355\u7684\u5168\u8868\u626B\u63CF\u6BD4\u5EFA\u7ACB\u7D22\u5F15\u66F4\u9AD8\u6548\u3002</li><li>\u5BF9\u4E8E\u4E2D\u5230\u5927\u578B\u7684\u8868\uFF0C\u7D22\u5F15\u5C31\u975E\u5E38\u6709\u6548\u3002</li><li>\u4F46\u662F\u5BF9\u4E8E\u7279\u5927\u578B\u7684\u8868\uFF0C\u5EFA\u7ACB\u548C\u7EF4\u62A4\u7D22\u5F15\u7684\u4EE3\u4EF7\u5C06\u4F1A\u968F\u4E4B\u589E\u957F\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u7528\u5230\u4E00\u79CD\u6280\u672F\u53EF\u4EE5\u76F4\u63A5\u533A\u5206\u51FA\u9700\u8981\u67E5\u8BE2\u7684\u4E00\u7EC4\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u4E00\u6761\u8BB0\u5F55\u4E00\u6761\u8BB0\u5F55\u5730\u5339\u914D\uFF0C\u4F8B\u5982\u53EF\u4EE5\u4F7F\u7528\u5206\u533A\u6280\u672F\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,63),c={href:"https://pdai.tech/md/db/sql-mysql/sql-mysql-b-tree.html",target:"_blank",rel:"noopener noreferrer"},u=a("strong",null,"MySQL - \u7D22\u5F15(B+\u6811)",-1),h={href:"https://blog.csdn.net/wdjnb/article/details/122880079",target:"_blank",rel:"noopener noreferrer"};function k(_,m){const e=l("ExternalLinkIcon");return i(),t("div",null,[d,a("p",null,[a("a",c,[u,n(e)])]),a("p",null,[a("a",h,[r("\u4E00\u7BC7\u6587\u7AE0\u5F04\u61C2\u524D\u7F00\u7D22\u5F15"),n(e)])])])}const y=s(o,[["render",k],["__file","sql-mysql-b-tree.html.vue"]]);export{y as default};
