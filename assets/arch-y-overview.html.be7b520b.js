import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as n,a as r,b as o,d as s,f as p,r as h}from"./app.b4e87c2d.js";const i={},d=p('<h1 id="\u67B6\u6784-\u9AD8\u5E76\u53D1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784-\u9AD8\u5E76\u53D1-\u6982\u8FF0" aria-hidden="true">#</a> \u67B6\u6784-\u9AD8\u5E76\u53D1\uFF1A\u6982\u8FF0</h1><blockquote><p><strong>\u6458\u8981</strong>\uFF1A\u672C\u6587\u4ECB\u7ECD\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u7684\u5EA6\u91CF\u6307\u6807\uFF0C\u8BB2\u8FF0\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u601D\u8DEF\uFF0C\u518D\u68B3\u7406\u9AD8\u5E76\u53D1\u7684\u5173\u952E\u6280\u672F\uFF0C\u6700\u540E\u7ED3\u5408\u4F5C\u8005\u7684\u7ECF\u9A8C\u505A\u4E00\u4E9B\u5EF6\u4F38\u63A2\u8BA8\u3002</p></blockquote><p>\u5F53\u524D\uFF0C\u6570\u5B57\u5316\u5728\u7ED9\u4F01\u4E1A\u5E26\u6765\u4E1A\u52A1\u521B\u65B0\uFF0C\u63A8\u52A8\u4F01\u4E1A\u9AD8\u901F\u53D1\u5C55\u7684\u540C\u65F6\uFF0C\u4E5F\u7ED9\u4F01\u4E1A\u7684IT\u8F6F\u4EF6\u7CFB\u7EDF\u5E26\u6765\u4E86\u4E25\u5CFB\u7684\u6311\u6218\u3002\u9762\u5BF9\u6D41\u91CF\u9AD8\u5CF0\uFF0C\u4E0D\u540C\u7684\u4F01\u4E1A\u662F\u5982\u4F55\u901A\u8FC7\u6280\u672F\u624B\u6BB5\u89E3\u51B3\u9AD8\u5E76\u53D1\u96BE\u9898\u7684\u5462?</p><h2 id="_0-\u5F15\u8A00" tabindex="-1"><a class="header-anchor" href="#_0-\u5F15\u8A00" aria-hidden="true">#</a> 0. \u5F15\u8A00</h2><p>\u8F6F\u4EF6\u7CFB\u7EDF\u6709\u4E09\u4E2A\u8FFD\u6C42\uFF1A<strong>\u9AD8\u6027\u80FD\u3001\u9AD8\u5E76\u53D1\u3001\u9AD8\u53EF\u7528</strong>\uFF0C\u4FD7\u79F0\u4E09\u9AD8\u3002\u4E09\u8005\u65E2\u6709\u533A\u522B\u4E5F\u6709\u8054\u7CFB\uFF0C\u95E8\u95E8\u9053\u9053\u5F88\u591A\uFF0C\u5168\u9762\u8BA8\u8BBA\u9700\u8981\u4E09\u5929\u4E09\u591C\uFF0C\u672C\u7BC7\u8BA8\u8BBA\u9AD8\u5E76\u53D1\u3002</p><p><strong>\u9AD8\u5E76\u53D1\uFF08High Concurrency\uFF09</strong>\u3002\u5E76\u53D1\u662F\u64CD\u4F5C\u7CFB\u7EDF\u9886\u57DF\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u6307\u7684\u662F\u4E00\u6BB5\u65F6\u95F4\u5185\u591A\u4EFB\u52A1\u6D41\u4EA4\u66FF\u6267\u884C\u7684\u73B0\u8C61\uFF0C\u540E\u6765\u8FD9\u4E2A\u6982\u5FF5\u88AB\u6CDB\u5316\uFF0C\u9AD8\u5E76\u53D1\u7528\u6765\u6307\u5927\u6D41\u91CF\u3001\u9AD8\u8BF7\u6C42\u7684\u4E1A\u52A1\u60C5\u666F\uFF0C\u6BD4\u5982\u6625\u8FD0\u62A2\u7968\uFF0C\u7535\u5546\u53CC\u5341\u4E00\uFF0C\u79D2\u6740\u5927\u4FC3\u7B49\u573A\u666F\u3002</p><p>\u5F88\u591A\u7A0B\u5E8F\u5458\u6BCF\u5929\u5FD9\u7740\u642C\u7816\uFF0C\u5E73\u65F6\u63A5\u89E6\u4E0D\u5230\u9AD8\u5E76\u53D1\uFF0C\u54EA\u5929\u53D7\u4E0D\u4E86\u8DD1\u53BB\u9762\u8BD5\uFF0C\u8FD8\u5E38\u5E38\u4F1A\u88AB\u9762\u8BD5\u5B98\u7280\u5229\u7684\u9AD8\u5E76\u53D1\u95EE\u9898\u76F4\u63A5KO\uFF0C\u5176\u5B9E\u5427\uFF0C\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u4E5F\u4E0D\u9AD8\u6DF1\uFF0C\u6211\u4FDD\u8BC1\u4EFB\u4F55\u4E00\u4E2A\u667A\u5546\u5728\u7EBF\u7684\u770B\u8FC7\u8FD9\u7BC7\u6587\u7AE0\u540E\uFF0C\u90FD\u80FD\u6218\u80DC\u6050\u60E7\uFF0C\u91CD\u62FE\u751F\u6D3B\u7684\u4FE1\u5FC3\u3002</p><p>\u672C\u6587\u5148\u4ECB\u7ECD\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u7684\u5EA6\u91CF\u6307\u6807\uFF0C\u7136\u540E\u8BB2\u8FF0\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u601D\u8DEF\uFF0C\u518D\u68B3\u7406\u9AD8\u5E76\u53D1\u7684\u5173\u952E\u6280\u672F\uFF0C\u6700\u540E\u7ED3\u5408\u4F5C\u8005\u7684\u7ECF\u9A8C\u505A\u4E00\u4E9B\u5EF6\u4F38\u63A2\u8BA8\u3002</p><h2 id="_1-\u9AD8\u5E76\u53D1\u7684\u5EA6\u91CF\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#_1-\u9AD8\u5E76\u53D1\u7684\u5EA6\u91CF\u6307\u6807" aria-hidden="true">#</a> 1. \u9AD8\u5E76\u53D1\u7684\u5EA6\u91CF\u6307\u6807</h2><p>\u65E2\u7136\u662F\u9AD8\u5E76\u53D1\u7CFB\u7EDF\uFF0C\u90A3\u5E76\u53D1\u4E00\u5B9A\u8981\u9AD8\uFF0C\u4E0D\u7136\u5C31\u540D\u4E0D\u526F\u5B9E\u3002\u5E76\u53D1\u7684\u6307\u6807\u4E00\u822C\u6709<strong>QPS\u3001TPS\u3001IOPS</strong>\uFF0C\u8FD9\u51E0\u4E2A\u6307\u6807\u90FD\u662F\u53EF\u5F52\u4E3A<strong>\u7CFB\u7EDF\u541E\u5410\u7387</strong>\uFF0CQPS\u8D8A\u9AD8\u7CFB\u7EDF\u80FDhold\u4F4F\u7684\u8BF7\u6C42\u6570\u8D8A\u591A\uFF0C\u4F46\u5149\u5173\u6CE8\u8FD9\u51E0\u4E2A\u6307\u6807\u4E0D\u591F\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5173\u6CE8RT\uFF0C\u5373\u54CD\u5E94\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u4ECE\u53D1\u51FArequest\u5230\u6536\u5230response\u7684\u65F6\u5EF6\uFF0C\u8FD9\u4E2A\u6307\u6807\u8DDF\u541E\u5410\u5F80\u5F80\u662F\u6B64\u6D88\u5F7C\u957F\u7684\uFF0C\u6211\u4EEC\u8FFD\u6C42\u7684\u662F\u4E00\u5B9A\u65F6\u5EF6\u4E0B\u7684\u9AD8\u541E\u5410\u3002</p><p>\u6BD4\u5982\u6709100\u4E07\u6B21\u8BF7\u6C42\uFF0C99\u4E07\u6B21\u8BF7\u6C42\u90FD\u572810\u6BEB\u79D2\u5185\u54CD\u5E94\uFF0C\u5176\u4ED6\u6B21\u657010\u79D2\u624D\u54CD\u5E94\uFF0C\u5E73\u5747\u65F6\u5EF6\u4E0D\u9AD8\uFF0C\u4F46\u65F6\u5EF6\u9AD8\u7684\u7528\u6237\u53D7\u4E0D\u4E86\uFF0C\u6240\u4EE5\uFF0C\u5C31\u6709\u4E86<strong>TP90/TP99\u6307\u6807</strong>\uFF0C\u8FD9\u4E2A\u6307\u6807\u4E0D\u662F\u6C42\u5E73\u5747\uFF0C\u800C\u662F\u628A\u65F6\u5EF6\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F\uFF0C\u53D6\u6392\u540D90%/99%\u7684\u65F6\u5EF6\uFF0C\u8FD9\u4E2A\u6307\u6807\u8D8A\u5927\uFF0C\u5BF9\u6162\u8BF7\u6C42\u8D8A\u654F\u611F\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u4E5F\u4F1A\u5173\u6CE8\u53EF\u7528\u6027\u6307\u6807\uFF0C\u8FD9\u53EF\u5F52\u5230\u7A33\u5B9A\u6027\u3002</p><p>\u4E00\u822C\u800C\u8A00\uFF0C\u7528\u6237\u611F\u77E5\u53CB\u597D\u7684\u9AD8\u5E76\u53D1\u7CFB\u7EDF\uFF0C\u65F6\u5EF6\u5E94\u8BE5\u63A7\u5236\u5728250\u6BEB\u79D2\u4EE5\u5185\u3002</p><p>\u4EC0\u4E48\u6837\u7684\u7CFB\u7EDF\u624D\u80FD\u79F0\u4E3A\u9AD8\u5E76\u53D1\uFF1F\u8FD9\u4E2A\u4E0D\u597D\u56DE\u7B54\uFF0C\u56E0\u4E3A\u5B83\u53D6\u51B3\u4E8E\u7CFB\u7EDF\u6216\u8005\u4E1A\u52A1\u7684\u7C7B\u578B\u3002\u4E0D\u8FC7\u6211\u53EF\u4EE5\u544A\u8BC9\u4F60\u4E00\u4E9B\u4F17\u6240\u5468\u77E5\u7684\u6307\u6807\uFF0C\u8FD9\u6837\u80FD\u5E2E\u52A9\u4F60\u4E0B\u6B21\u5728\u8DDF\u4EBA\u626F\u6DE1\u7684\u65F6\u5019\u7A0D\u5FAE\u9760\u70B9\u513F\u8C31\uFF0C\u4E0D\u81F3\u4E8E\u8D3B\u7B11\u5927\u65B9\u3002</p><p>\u901A\u5E38\uFF0C\u6570\u636E\u5E93\u5355\u673A\u6BCF\u79D2\u4E5F\u5C31\u80FD\u6297\u4F4F\u51E0\u5343\u8FD9\u4E2A\u91CF\u7EA7\uFF0C\u800C\u505A\u903B\u8F91\u5904\u7406\u7684\u670D\u52A1\u5355\u53F0\u6BCF\u79D2\u6297\u51E0\u4E07\u3001\u751A\u81F3\u51E0\u5341\u4E07\u90FD\u6709\u53EF\u80FD\uFF0C\u800C\u6D88\u606F\u961F\u5217\u7B49\u4E2D\u95F4\u4EF6\u5355\u673A\u6BCF\u79D2\u5904\u7406\u4E2A\u51E0\u4E07\u6CA1\u95EE\u9898\uFF0C\u6240\u4EE5\u6211\u4EEC\u7ECF\u5E38\u542C\u5230\u6BCF\u79D2\u5904\u7406\u6570\u767E\u4E07\u3001\u6570\u5343\u4E07\u7684\u6D88\u606F\u4E2D\u95F4\u4EF6\u96C6\u7FA4\uFF0C\u800C\u50CF\u963F\u67D0\u7684API\u7F51\u5173\uFF0C\u6BCF\u65E5\u767E\u4EBF\u8BF7\u6C42\u4E5F\u6709\u53EF\u80FD\u3002</p><h2 id="_2-\u9AD8\u5E76\u53D1\u7684\u8BBE\u8BA1\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u9AD8\u5E76\u53D1\u7684\u8BBE\u8BA1\u601D\u8DEF" aria-hidden="true">#</a> 2. \u9AD8\u5E76\u53D1\u7684\u8BBE\u8BA1\u601D\u8DEF</h2><p>\u9AD8\u5E76\u53D1\u7684\u8BBE\u8BA1\u601D\u8DEF\u6709\u4E24\u4E2A\u65B9\u5411\uFF1A</p><ol><li>\u5782\u76F4\u65B9\u5411\u6269\u5C55\uFF0C\u4E5F\u53EB\u7AD6\u5411\u6269\u5C55</li><li>\u6C34\u5E73\u65B9\u5411\u6269\u5C55\uFF0C\u4E5F\u53EB\u6A2A\u5411\u6269\u5C55</li></ol><h3 id="_2-1-\u5782\u76F4\u65B9\u5411-\u63D0\u5347\u5355\u673A\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5782\u76F4\u65B9\u5411-\u63D0\u5347\u5355\u673A\u80FD\u529B" aria-hidden="true">#</a> 2.1 \u5782\u76F4\u65B9\u5411\uFF1A\u63D0\u5347\u5355\u673A\u80FD\u529B</h3><p>\u63D0\u5347\u5355\u673A\u5904\u7406\u80FD\u529B\u53C8\u53EF\u5206\u4E3A\u786C\u4EF6\u548C\u8F6F\u4EF6\u4E24\u4E2A\u65B9\u9762\uFF1A</p><ul><li>\u786C\u4EF6\u65B9\u5411\uFF0C\u5F88\u597D\u7406\u89E3\uFF0C\u82B1\u94B1\u5347\u7EA7\u673A\u5668\uFF0C\u66F4\u591A\u6838\u66F4\u9AD8\u4E3B\u9891\u66F4\u5927\u5B58\u50A8\u7A7A\u95F4\u66F4\u591A\u5E26\u5BBD</li><li>\u8F6F\u4EF6\u65B9\u5411\uFF0C\u5305\u62EC\u7528\u5404\u5FEB\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6539\u8FDB\u67B6\u6784\uFF0C\u5E94\u7528\u591A\u7EBF\u7A0B\u3001\u534F\u7A0B\uFF0C\u4EE5\u53CA\u4E0A\u6027\u80FD\u4F18\u5316\u5404\u79CD\u624B\u6BB5\uFF0C\u4F46\u8FD9\u73A9\u610F\u513F\u5929\u82B1\u677F\u4F4E\uFF0C\u5C31\u50CF\u63D0\u5347\u4E2A\u4EBA\u4EA7\u51FA\u4E00\u6837\uFF0C996\u3001007\u3001\u6700\u591A24 X 7\u3002</li></ul><h3 id="_2-2-\u6C34\u5E73\u65B9\u5411-\u5206\u5E03\u5F0F\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6C34\u5E73\u65B9\u5411-\u5206\u5E03\u5F0F\u96C6\u7FA4" aria-hidden="true">#</a> 2.2 \u6C34\u5E73\u65B9\u5411\uFF1A\u5206\u5E03\u5F0F\u96C6\u7FA4</h3><p>\u4E3A\u4E86\u89E3\u51B3\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u590D\u6742\u6027\u95EE\u9898\uFF0C\u4E00\u822C\u4F1A\u7528\u5230<strong>\u67B6\u6784\u5206\u5C42\u548C\u670D\u52A1\u62C6\u5206</strong>\uFF0C\u901A\u8FC7\u5206\u5C42\u505A<strong>\u9694\u79BB</strong>\uFF0C\u901A\u8FC7\u5FAE\u670D\u52A1<strong>\u89E3\u8026</strong>\u3002</p><p>\u8FD9\u4E2A\u7406\u8BBA\u4E0A\u6CA1\u6709\u4E0A\u9650\uFF0C\u53EA\u8981\u505A\u597D\u5C42\u6B21\u548C\u670D\u52A1\u5212\u5206\uFF0C\u52A0\u673A\u5668\u6269\u5BB9\u5C31\u80FD\u6EE1\u8DB3\u9700\u6C42\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5E76\u975E\u5982\u6B64\uFF0C\u4E00\u65B9\u9762\u5206\u5E03\u5F0F\u4F1A\u589E\u52A0\u7CFB\u7EDF\u590D\u6742\u6027\uFF0C\u53E6\u4E00\u65B9\u9762\u96C6\u7FA4\u89C4\u6A21\u4E0A\u53BB\u4E4B\u540E\uFF0C\u4E5F\u4F1A\u5F15\u5165\u4E00\u5806AIOps\u3001\u670D\u52A1\u53D1\u73B0\u3001\u670D\u52A1\u6CBB\u7406\u7684\u65B0\u95EE\u9898\u3002</p><p>\u56E0\u4E3A\u5782\u76F4\u5411\u7684\u9650\u5236\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u901A\u5E38\u66F4\u5173\u6CE8\u6C34\u5E73\u6269\u5C55\uFF0C\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u7684\u5B9E\u65BD\u4E5F\u4E3B\u8981\u56F4\u7ED5\u6C34\u5E73\u65B9\u5411\u5C55\u5F00\u3002</p><h2 id="_3-\u9AD8\u5E76\u53D1\u7684\u5173\u952E\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#_3-\u9AD8\u5E76\u53D1\u7684\u5173\u952E\u6280\u672F" aria-hidden="true">#</a> 3. \u9AD8\u5E76\u53D1\u7684\u5173\u952E\u6280\u672F</h2><p>\u73A9\u5177\u5F0F\u7684\u7F51\u7EDC\u670D\u52A1\u7A0B\u5E8F\uFF0C\u7528\u6237\u53EF\u4EE5\u76F4\u8FDE\u670D\u52A1\u5668\uFF0C\u751A\u81F3\u4E0D\u9700\u8981\u6570\u636E\u5E93\uFF0C\u76F4\u63A5\u5199\u78C1\u76D8\u6587\u4EF6\u3002\u4F46\u6625\u8FD0\u8D2D\u7968\u7CFB\u7EDF\u663E\u7136\u4E0D\u80FD\u8FD9\u4E48\u505A\uFF0C\u5B83\u80AF\u5B9A\u625B\u4E0D\u4F4F\u8FD9\u4E2A\u538B\u529B\uFF0C\u90A3\u4E00\u822C\u7684\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u662F\u600E\u4E48\u505A\u5462\uFF1F\u6BD4\u5982\u67D0\u5B9D\u8FD9\u6837\u7684\u6B63\u7ECF\u7CFB\u7EDF\u662F\u600E\u4E48\u5904\u7406\u9AD8\u5E76\u53D1\u7684\u5462\uFF1F</p><p>\u5176\u5B9E\u5927\u7684\u601D\u8DEF\u90FD\u5DEE\u4E0D\u591A\uFF0C\u5C42\u6B21\u5212\u5206 + \u529F\u80FD\u5212\u5206\u3002\u53EF\u4EE5\u628A\u5C42\u6B21\u5212\u5206\u7406\u89E3\u4E3A\u6C34\u5E73\u65B9\u5411\u7684\u5212\u5206\uFF0C\u800C\u529F\u80FD\u5212\u5206\u7406\u89E3\u4E3A\u5782\u76F4\u65B9\u5411\u7684\u5212\u5206\u3002</p><p>\u9996\u5148\uFF0C\u7528\u6237\u4E0D\u80FD\u76F4\u8FDE\u670D\u52A1\u5668\uFF0C\u8981\u505A\u5206\u5E03\u5F0F\u5C31\u8981\u89E3\u51B3\u201C\u5206\u201D\u7684\u95EE\u9898\uFF0C\u6709\u591A\u4E2A\u670D\u52A1\u5B9E\u4F8B\u5C31\u9700\u8981\u505A\u8D1F\u8F7D\u5747\u8861\uFF0C\u6709\u4E0D\u540C\u670D\u52A1\u7C7B\u578B\u5C31\u9700\u8981\u670D\u52A1\u53D1\u73B0\u3002</p><h3 id="_3-1-\u96C6\u7FA4\u5316-\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-1-\u96C6\u7FA4\u5316-\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.1 \u96C6\u7FA4\u5316\uFF1A\u8D1F\u8F7D\u5747\u8861</h3><p>\u8D1F\u8F7D\u5747\u8861\u5C31\u662F\u628A\u8D1F\u8F7D\uFF08request\uFF09\u5747\u8861\u5206\u914D\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5B9E\u4F8B\uFF0C\u5229\u7528\u96C6\u7FA4\u7684\u80FD\u529B\u53BB\u5BF9\u6297\u9AD8\u5E76\u53D1\uFF0C\u8D1F\u8F7D\u5747\u8861\u662F\u670D\u52A1\u96C6\u7FA4\u5316\u7684\u5B9E\u65BD\u8981\u7D20\uFF0C\u5B83\u52063\u79CD\uFF1A</p><ol><li><strong>DNS\u8D1F\u8F7D\u5747\u8861</strong>\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7URL\u53D1\u8D77\u7F51\u7EDC\u670D\u52A1\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u4F1A\u53BBDNS\u670D\u52A1\u5668\u505A\u57DF\u540D\u89E3\u91CA\uFF0CDNS\u4F1A\u6309\u4E00\u5B9A\u7684\u7B56\u7565\uFF08\u6BD4\u5982\u5C31\u8FD1\u7B56\u7565\uFF09\u628AURL\u8F6C\u6362\u6210IP\u5730\u5740\uFF0C\u540C\u4E00\u4E2AURL\u4F1A\u88AB\u89E3\u91CA\u6210\u4E0D\u540C\u7684IP\u5730\u5740\uFF0C\u8FD9\u4FBF\u662FDNS\u8D1F\u8F7D\u5747\u8861\uFF0C\u5B83\u662F\u4E00\u79CD\u7C97\u7C92\u5EA6\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u5B83\u53EA\u7528URL\u524D\u534A\u90E8\u5206\uFF0C\u56E0\u4E3ADNS\u8D1F\u8F7D\u5747\u8861\u4E00\u822C\u91C7\u7528\u5C31\u8FD1\u539F\u5219\uFF0C\u6240\u4EE5\u901A\u5E38\u80FD\u964D\u4F4E\u65F6\u5EF6\uFF0C\u4F46DNS\u6709cache\uFF0C\u6240\u4EE5\u4E5F\u4F1A\u66F4\u65B0\u4E0D\u53CA\u65F6\u7684\u95EE\u9898\u3002</li><li><strong>\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861</strong>\uFF0C\u901A\u8FC7\u5E03\u7F6E\u7279\u6B8A\u7684\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u5230\u673A\u623F\u505A\u8D1F\u8F7D\u5747\u8861\uFF0C\u6BD4\u5982F5\uFF0C\u8FD9\u79CD\u8BBE\u5907\u8D35\uFF0C\u6027\u80FD\u9AD8\uFF0C\u53EF\u4EE5\u652F\u6491\u6BCF\u79D2\u767E\u4E07\u5E76\u53D1\uFF0C\u8FD8\u80FD\u505A\u4E00\u4E9B\u5B89\u5168\u9632\u62A4\uFF0C\u6BD4\u5982\u9632\u706B\u5899\u3002</li><li><strong>\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861</strong>\uFF0C\u6839\u636E\u5DE5\u4F5C\u5728ISO 7\u5C42\u7F51\u7EDC\u6A21\u578B\u7684\u5C42\u6B21\uFF0C\u53EF\u5206\u4E3A\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\uFF08\u6BD4\u5982\u7AE0\u6587\u5D69\u535A\u58EB\u7684LVS\uFF09\u548C\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\uFF08NGINX\uFF09\uFF0C\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E\u7075\u6D3B\uFF0C\u6269\u5C55\u6027\u5F3A\uFF0C\u963F\u67D0\u4E91\u7684SLB\u4F5C\u4E3A\u670D\u52A1\u5BF9\u5916\u552E\u5356\uFF0CNginx\u53EF\u4EE5\u5BF9URL\u7684\u540E\u534A\u90E8\u505A\u89E3\u91CA\u627F\u62C5API\u7F51\u5173\u7684\u804C\u8D23\u3002</li></ol><p>\u6240\u4EE5\uFF0C\u5B8C\u6574\u7684\u8D1F\u8F7D\u5747\u8861\u94FE\u8DEF\u662F client &lt;-&gt; DNS\u8D1F\u8F7D\u5747\u8861 -&gt; F5 -&gt; LVS/SLB -&gt; NGINX</p><p>\u4E0D\u7BA1\u9009\u62E9\u54EA\u79CDLB\u7B56\u7565\uFF0C\u6216\u8005\u7EC4\u5408LB\u7B56\u7565\uFF0C\u903B\u8F91\u4E0A\uFF0C\u6211\u4EEC\u90FD\u53EF\u4EE5\u89C6\u4E3A\u8D1F\u8F7D\u5747\u8861\u5C42\uFF0C\u901A\u8FC7\u6DFB\u52A0\u8D1F\u8F7D\u5747\u8861\u5C42\uFF0C\u6211\u4EEC\u5C06\u8D1F\u8F7D\u5747\u5300\u5206\u6563\u5230\u4E86\u540E\u9762\u7684\u670D\u52A1\u96C6\u7FA4\uFF0C\u5177\u5907\u57FA\u7840\u7684\u9AD8\u5E76\u53D1\u80FD\u529B\uFF0C\u4F46\u8FD9\u53EA\u662F\u4E07\u91CC\u957F\u5F81\u7B2C\u4E00\u6B65\u3002</p><h3 id="_3-2-\u6570\u636E\u5E93\u5C42\u9762-\u5206\u5E93\u5206\u8868-\u8BFB\u5199\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6570\u636E\u5E93\u5C42\u9762-\u5206\u5E93\u5206\u8868-\u8BFB\u5199\u5206\u79BB" aria-hidden="true">#</a> 3.2 \u6570\u636E\u5E93\u5C42\u9762\uFF1A\u5206\u5E93\u5206\u8868+\u8BFB\u5199\u5206\u79BB</h3><p>\u524D\u9762\u901A\u8FC7<strong>\u8D1F\u8F7D\u5747\u8861\u89E3\u51B3\u4E86\u65E0\u72B6\u6001\u670D\u52A1\u7684\u6C34\u5E73\u6269\u5C55\u95EE\u9898</strong>\uFF0C\u4F46\u6211\u4EEC\u7684\u7CFB\u7EDF\u4E0D\u5168\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u540E\u9762\u901A\u5E38\u8FD8\u6709\u6709\u72B6\u6001\u7684\u6570\u636E\u5E93\uFF0C\u6240\u4EE5\u89E3\u51B3\u4E86\u524D\u9762\u7684\u95EE\u9898\uFF0C\u5B58\u50A8\u6709\u53EF\u80FD\u6210\u4E3A\u7CFB\u7EDF\u7684\u74F6\u9888\uFF0C\u6211\u4EEC\u9700\u8981<strong>\u5BF9\u6709\u72B6\u6001\u5B58\u50A8\u505A\u5206\u7247\u8DEF\u7531</strong>\u3002</p><p>\u6570\u636E\u5E93\u7684\u5355\u673AQPS\u4E00\u822C\u4E0D\u9AD8\uFF0C\u4E5F\u5C31\u51E0\u5343\uFF0C\u663E\u7136\u6EE1\u8DB3\u4E0D\u4E86\u9AD8\u5E76\u53D1\u7684\u8981\u6C42\u3002</p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u5206\u5E93\u5206\u8868 + \u8BFB\u5199\u5206\u79BB\u3002</p><p>\u5C31\u662F\u628A\u4E00\u4E2A\u5E93\u5206\u6210\u591A\u4E2A\u5E93\uFF0C\u90E8\u7F72\u5728\u591A\u4E2A\u6570\u636E\u5E93\u670D\u52A1\u4E0A\uFF0C\u4E3B\u5E93\u627F\u8F7D\u5199\u8BF7\u6C42\uFF0C\u4ECE\u5E93\u627F\u8F7D\u8BFB\u8BF7\u6C42\u3002\u4ECE\u5E93\u53EF\u4EE5\u6302\u8F7D\u591A\u4E2A\uFF0C\u56E0\u4E3A\u5F88\u591A\u573A\u666F\u5199\u7684\u8BF7\u6C42\u8FDC\u5C11\u4E8E\u8BFB\u7684\u8BF7\u6C42\uFF0C\u8FD9\u6837\u5C31\u628A\u5BF9\u5355\u4E2A\u5E93\u7684\u538B\u529B\u964D\u4E0B\u6765\u4E86\u3002</p><p>\u5982\u679C\u5199\u7684\u8BF7\u6C42\u4E0A\u5347\u5C31\u7EE7\u7EED\u5206\u5E93\u5206\u8868\uFF0C\u5982\u679C\u8BFB\u7684\u8BF7\u6C42\u4E0A\u5347\u5C31\u6302\u66F4\u591A\u7684\u4ECE\u5E93\uFF0C\u4F46\u6570\u636E\u5E93\u5929\u751F\u4E0D\u662F\u5F88\u9002\u5408\u9AD8\u5E76\u53D1\uFF0C\u800C\u4E14\u6570\u636E\u5E93\u5BF9\u673A\u5668\u914D\u7F6E\u7684\u8981\u6C42\u4E00\u822C\u5F88\u9AD8\uFF0C\u5BFC\u81F4\u5355\u4F4D\u670D\u52A1\u6210\u672C\u9AD8\uFF0C\u6240\u4EE5\uFF0C\u8FD9\u6837\u52A0\u673A\u5668\u6297\u538B\u529B\u6210\u672C\u592A\u9AD8\uFF0C\u8FD8\u5F97\u53E6\u5916\u60F3\u62DB\u3002</p><h3 id="_3-3-\u8BFB\u591A\u5199\u5C11-\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-3-\u8BFB\u591A\u5199\u5C11-\u7F13\u5B58" aria-hidden="true">#</a> 3.3 \u8BFB\u591A\u5199\u5C11\uFF1A\u7F13\u5B58</h3><p>\u7F13\u5B58\u7684\u7406\u8BBA\u4F9D\u636E\u662F<strong>\u5C40\u90E8\u6027\u539F\u7406</strong>\u3002</p><p>\u4E00\u822C\u7CFB\u7EDF\u7684\u5199\u5165\u8BF7\u6C42\u8FDC\u5C11\u4E8E\u8BFB\u8BF7\u6C42\uFF0C\u9488\u5BF9\u5199\u5C11\u8BFB\u591A\u7684\u573A\u666F\uFF0C\u5F88\u9002\u5408\u5F15\u5165\u7F13\u5B58\u96C6\u7FA4\u3002</p><p>\u5728\u5199\u6570\u636E\u5E93\u7684\u65F6\u5019\u540C\u65F6\u5199\u4E00\u4EFD\u6570\u636E\u5230\u7F13\u5B58\u96C6\u7FA4\u91CC\uFF0C\u7136\u540E\u7528\u7F13\u5B58\u96C6\u7FA4\u6765\u627F\u8F7D\u5927\u90E8\u5206\u7684\u8BFB\u8BF7\u6C42\uFF0C\u56E0\u4E3A\u7F13\u5B58\u96C6\u7FA4\u5F88\u5BB9\u6613\u505A\u5230\u9AD8\u6027\u80FD\uFF0C\u6240\u4EE5\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u901A\u8FC7\u7F13\u5B58\u96C6\u7FA4\uFF0C\u5C31\u53EF\u4EE5\u7528\u66F4\u5C11\u7684\u673A\u5668\u8D44\u6E90\u627F\u8F7D\u66F4\u9AD8\u7684\u5E76\u53D1\u3002</p><p>\u7F13\u5B58\u7684\u547D\u4E2D\u7387\u4E00\u822C\u80FD\u505A\u5230\u5F88\u9AD8\uFF0C\u800C\u4E14\u901F\u5EA6\u5F88\u5FEB\uFF0C\u5904\u7406\u80FD\u529B\u4E5F\u5F3A\uFF08\u5355\u673A\u5F88\u5BB9\u6613\u505A\u5230\u51E0\u4E07\u5E76\u53D1\uFF09\uFF0C\u662F\u7406\u60F3\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><p>CDN\u672C\u8D28\u4E0A\u5C31\u662F\u7F13\u5B58\uFF0C\u88AB\u7528\u6237\u5927\u91CF\u8BBF\u95EE\u7684\u9759\u6001\u8D44\u6E90\u7F13\u5B58\u5728CDN\u4E2D\u662F\u76EE\u524D\u7684\u901A\u7528\u505A\u6CD5\u3002</p><h4 id="_3-3-1-\u7F13\u5B58\u4E5F\u6709\u5F88\u591A\u9700\u8981\u8C28\u614E\u5904\u7406\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u7F13\u5B58\u4E5F\u6709\u5F88\u591A\u9700\u8981\u8C28\u614E\u5904\u7406\u7684\u95EE\u9898" aria-hidden="true">#</a> 3.3.1 \u7F13\u5B58\u4E5F\u6709\u5F88\u591A\u9700\u8981\u8C28\u614E\u5904\u7406\u7684\u95EE\u9898\uFF1A</h4><ol><li><strong>\u4E00\u81F4\u6027\u95EE\u9898</strong>\uFF1A(a)\u66F4\u65B0db\u6210\u529F+\u66F4\u65B0cache\u5931\u8D25 -&gt; \u4E0D\u4E00\u81F4 (b)\u66F4\u65B0db\u5931\u8D25+\u66F4\u65B0cache\u6210\u529F -&gt; \u4E0D\u4E00\u81F4 \xA9\u66F4\u65B0db\u6210\u529F+\u6DD8\u6C70\u7F13\u5B58\u5931\u8D25 -&gt; \u4E0D\u4E00\u81F4</li><li><strong>\u7F13\u5B58\u7A7F\u900F</strong>\uFF1A\u67E5\u8BE2\u4E00\u5B9A\u4E0D\u5B58\u5728\u7684\u6570\u636E\uFF0C\u4F1A\u7A7F\u900F\u7F13\u5B58\u76F4\u63A5\u538B\u5230\u6570\u636E\u5E93\uFF0C\u4ECE\u800C\u5BFC\u81F4\u7F13\u5B58\u5931\u53BB\u4F5C\u7528\uFF0C\u5982\u679C\u6709\u4EBA\u5229\u7528\u8FD9\u4E2A\u6F0F\u6D1E\uFF0C\u5927\u91CF\u67E5\u8BE2\u4E00\u5B9A\u4E0D\u5B58\u5728\u7684\u6570\u636E\uFF0C\u4F1A\u5BF9\u6570\u636E\u5E93\u9020\u6210\u538B\u529B\uFF0C\u751A\u81F3\u6253\u6302\u6570\u636E\u5E93\u3002\u89E3\u51B3\u65B9\u6848\uFF1A\u5E03\u9686\u8FC7\u6EE4\u5668 \u6216\u8005 \u7B80\u5355\u7684\u65B9\u6848\uFF0C\u67E5\u8BE2\u4E0D\u5B58\u5728\u7684key\uFF0C\u4E5F\u628A\u7A7A\u7ED3\u679C\u5199\u5165\u7F13\u5B58\uFF08\u8BBE\u7F6E\u8F83\u77ED\u7684\u8FC7\u671F\u6DD8\u6C70\u65F6\u95F4\uFF09\uFF0C\u4ECE\u800C\u964D\u4F4E\u547D\u5931</li><li><strong>\u7F13\u5B58\u96EA\u5D29</strong>\uFF1A\u5982\u679C\u5927\u91CF\u7F13\u5B58\u5728\u4E00\u4E2A\u65F6\u523B\u540C\u65F6\u5931\u6548\uFF0C\u5219\u8BF7\u6C42\u4F1A\u8F6C\u5230DB\uFF0C\u5219\u5BF9DB\u5F62\u6210\u538B\u8FEB\uFF0C\u5BFC\u81F4\u96EA\u5D29\u3002\u7B80\u5355\u7684\u89E3\u51B3\u65B9\u6848\u662F\u4E3A\u7F13\u5B58\u5931\u6548\u65F6\u95F4\u6DFB\u52A0\u968F\u673A\u503C\uFF0C\u964D\u4F4E\u540C\u4E00\u65F6\u95F4\u70B9\u5931\u6548\u6DD8\u6C70\u7F13\u5B58\u6570\uFF0C\u907F\u514D\u96C6\u4F53\u5931\u6548\u4E8B\u4EF6\u53D1\u751F</li></ol><p>\u4F46\u7F13\u5B58\u662F\u9488\u5BF9\u8BFB\uFF0C\u5982\u679C\u5199\u7684\u538B\u529B\u5F88\u5927\uFF0C\u600E\u4E48\u529E\uFF1F</p><h3 id="_3-4-\u9AD8\u5199\u5165-\u6D88\u606F\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-4-\u9AD8\u5199\u5165-\u6D88\u606F\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 3.4 \u9AD8\u5199\u5165\uFF1A\u6D88\u606F\u4E2D\u95F4\u4EF6</h3><p>\u540C\u7406\uFF0C\u901A\u8FC7\u8DDF\u4E3B\u5E93\u52A0\u673A\u5668\uFF0C\u8017\u8D39\u7684\u673A\u5668\u8D44\u6E90\u662F\u5F88\u5927\u7684\uFF0C\u8FD9\u4E2A\u5C31\u662F\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u7279\u70B9\u6240\u51B3\u5B9A\u7684\u3002</p><p>\u76F8\u540C\u7684\u8D44\u6E90\u4E0B\uFF0C\u6570\u636E\u5E93\u7CFB\u7EDF\u592A\u91CD\u592A\u590D\u6742\uFF0C\u6240\u4EE5\u5E76\u53D1\u627F\u8F7D\u80FD\u529B\u5C31\u5728\u51E0\u5343/s\u7684\u91CF\u7EA7\uFF0C\u6240\u4EE5\u6B64\u65F6\u4F60\u9700\u8981\u5F15\u5165\u522B\u7684\u4E00\u4E9B\u6280\u672F\u3002</p><p>\u6BD4\u5982\u8BF4\u6D88\u606F\u4E2D\u95F4\u4EF6\u6280\u672F\uFF0C\u4E5F\u5C31\u662FMQ\u96C6\u7FA4\uFF0C\u5B83\u662F\u975E\u5E38\u597D\u7684\u505A\u5199\u8BF7\u6C42\u5F02\u6B65\u5316\u5904\u7406\uFF0C\u5B9E\u73B0<strong>\u524A\u5CF0\u586B\u8C37</strong>\u7684\u6548\u679C\u3002</p><p>\u6D88\u606F\u961F\u5217\u80FD\u505A<strong>\u89E3\u8026</strong>\uFF0C\u5728\u53EA\u9700\u8981\u6700\u7EC8\u4E00\u81F4\u6027\u7684\u573A\u666F\u4E0B\uFF0C\u5F88\u9002\u5408\u7528\u6765\u914D\u5408\u505A\u6D41\u63A7\u3002</p><p>\u5047\u5982\u8BF4\uFF0C\u6BCF\u79D2\u662F1\u4E07\u6B21\u5199\u8BF7\u6C42\uFF0C\u5176\u4E2D\u6BD4\u59825\u5343\u6B21\u8BF7\u6C42\u662F\u5FC5\u987B\u8BF7\u6C42\u8FC7\u6765\u7ACB\u9A6C\u5199\u5165\u6570\u636E\u5E93\u4E2D\u7684\uFF0C\u4F46\u662F\u53E6\u59165\u5343\u6B21\u5199\u8BF7\u6C42\u662F\u53EF\u4EE5\u5141\u8BB8\u5F02\u6B65\u5316\u7B49\u5F85\u4E2A\u51E0\u5341\u79D2\uFF0C\u751A\u81F3\u51E0\u5206\u949F\u540E\u624D\u843D\u5165\u6570\u636E\u5E93\u5185\u7684\u3002</p><p>\u90A3\u4E48\u6B64\u65F6\u5B8C\u5168\u53EF\u4EE5\u5F15\u5165\u6D88\u606F\u4E2D\u95F4\u4EF6\u96C6\u7FA4\uFF0C\u628A\u5141\u8BB8\u5F02\u6B65\u5316\u7684\u6BCF\u79D25\u5343\u6B21\u8BF7\u6C42\u5199\u5165MQ\uFF0C\u7136\u540E\u57FA\u4E8EMQ\u505A\u4E00\u4E2A\u524A\u5CF0\u586B\u8C37\u3002\u6BD4\u5982\u5C31\u4EE5\u5E73\u7A33\u76841000/s\u7684\u901F\u5EA6\u6D88\u8D39\u51FA\u6765\u7136\u540E\u843D\u5165\u6570\u636E\u5E93\u4E2D\u5373\u53EF\uFF0C\u6B64\u65F6\u5C31\u4F1A\u5927\u5E45\u5EA6\u964D\u4F4E\u6570\u636E\u5E93\u7684\u5199\u5165\u538B\u529B\u3002</p><p>\u4E1A\u754C\u6709\u5F88\u591A\u8457\u540D\u7684\u6D88\u606F\u4E2D\u95F4\u4EF6\uFF0C\u6BD4\u5982ZeroMQ\uFF0CrabbitMQ\uFF0Ckafka\u7B49\u3002</p><p>\u6D88\u606F\u961F\u5217\u672C\u8EAB\u4E5F\u8DDF\u7F13\u5B58\u7CFB\u7EDF\u4E00\u6837\uFF0C\u53EF\u4EE5\u7528\u5F88\u5C11\u7684\u8D44\u6E90\u652F\u6491\u5F88\u9AD8\u7684\u5E76\u53D1\u8BF7\u6C42\uFF0C\u7528\u5B83\u6765\u652F\u6491\u90E8\u5206\u5141\u8BB8\u5F02\u6B65\u5316\u7684\u9AD8\u5E76\u53D1\u5199\u5165\u662F\u5F88\u5408\u9002\u7684\uFF0C\u6BD4\u4F7F\u7528\u6570\u636E\u5E93\u76F4\u63A5\u652F\u6491\u90A3\u90E8\u5206\u9AD8\u5E76\u53D1\u8BF7\u6C42\u8981\u51CF\u5C11\u5F88\u591A\u7684\u673A\u5668\u4F7F\u7528\u91CF\u3002</p><h3 id="_3-5-\u907F\u514D\u6324\u5151-\u6D41\u63A7" tabindex="-1"><a class="header-anchor" href="#_3-5-\u907F\u514D\u6324\u5151-\u6D41\u63A7" aria-hidden="true">#</a> 3.5 \u907F\u514D\u6324\u5151\uFF1A\u6D41\u63A7</h3><p>\u518D\u5F3A\u5927\u7684\u7CFB\u7EDF\uFF0C\u4E5F\u6015\u6D41\u91CF\u77ED\u65F6\u95F4\u5185\u96C6\u4E2D\u7206\u53D1\uFF0C\u5C31\u50CF\u94F6\u884C\u6015\u6324\u5151\u4E00\u6837\uFF0C\u6240\u4EE5\uFF0C\u9AD8\u5E76\u53D1\u53E6\u4E00\u4E2A\u5FC5\u4E0D\u53EF\u5C11\u7684\u6A21\u5757\u5C31\u662F\u6D41\u63A7\u3002</p><p>\u6D41\u63A7\u7684\u5173\u952E\u662F\u6D41\u63A7\u7B97\u6CD5\uFF0C\u67094\u79CD\u5E38\u89C1\u7684\u6D41\u63A7\u7B97\u6CD5\u3002</p><ol><li><strong>\u8BA1\u6570\u5668\u7B97\u6CD5</strong>\uFF08\u56FA\u5B9A\u7A97\u53E3\uFF09\uFF1A\u8BA1\u6570\u5668\u7B97\u6CD5\u662F\u4F7F\u7528\u8BA1\u6570\u5668\u5728\u5468\u671F\u5185\u7D2F\u52A0\u8BBF\u95EE\u6B21\u6570\uFF0C\u5F53\u8FBE\u5230\u8BBE\u5B9A\u7684\u9650\u6D41\u503C\u65F6\uFF0C\u89E6\u53D1\u9650\u6D41\u7B56\u7565\uFF0C\u4E0B\u4E00\u4E2A\u5468\u671F\u5F00\u59CB\u65F6\uFF0C\u8FDB\u884C\u6E05\u96F6\uFF0C\u91CD\u65B0\u8BA1\u6570\uFF0C\u5B9E\u73B0\u7B80\u5355\u3002\u8BA1\u6570\u5668\u7B97\u6CD5\u65B9\u5F0F\u9650\u6D41\u5BF9\u4E8E\u5468\u671F\u6BD4\u8F83\u957F\u7684\u9650\u6D41\uFF0C\u5B58\u5728\u5F88\u5927\u7684\u5F0A\u7AEF\uFF0C\u6709\u4E25\u91CD\u7684\u4E34\u754C\u95EE\u9898\u3002</li><li><strong>\u6ED1\u52A8\u7A97\u53E3\u7B97\u6CD5</strong>\uFF1A\u5C06\u65F6\u95F4\u5468\u671F\u5206\u4E3AN\u4E2A\u5C0F\u5468\u671F\uFF0C\u5206\u522B\u8BB0\u5F55\u6BCF\u4E2A\u5C0F\u5468\u671F\u5185\u8BBF\u95EE\u6B21\u6570\uFF0C\u5E76\u4E14\u6839\u636E\u65F6\u95F4\u6ED1\u52A8\u5220\u9664\u8FC7\u671F\u7684\u5C0F\u5468\u671F\uFF0C\u5F53\u6ED1\u52A8\u7A97\u53E3\u7684\u683C\u5B50\u5212\u5206\u7684\u8D8A\u591A\uFF0C\u90A3\u4E48\u6ED1\u52A8\u7A97\u53E3\u7684\u6EDA\u52A8\u5C31\u8D8A\u5E73\u6ED1\uFF0C\u9650\u6D41\u7684\u7EDF\u8BA1\u5C31\u4F1A\u8D8A\u7CBE\u786E\u3002\u6B64\u7B97\u6CD5\u53EF\u4EE5\u5F88\u597D\u7684\u89E3\u51B3\u56FA\u5B9A\u7A97\u53E3\u7B97\u6CD5\u7684\u4E34\u754C\u95EE\u9898\u3002</li><li><strong>\u6F0F\u6876\u7B97\u6CD5</strong>\uFF1A\u8BBF\u95EE\u8BF7\u6C42\u5230\u8FBE\u65F6\u76F4\u63A5\u653E\u5165\u6F0F\u6876\uFF0C\u5982\u5F53\u524D\u5BB9\u91CF\u5DF2\u8FBE\u5230\u4E0A\u9650\uFF08\u9650\u6D41\u503C\uFF09\uFF0C\u5219\u8FDB\u884C\u4E22\u5F03\uFF08\u89E6\u53D1\u9650\u6D41\u7B56\u7565\uFF09\u3002\u6F0F\u6876\u4EE5\u56FA\u5B9A\u7684\u901F\u7387\u8FDB\u884C\u91CA\u653E\u8BBF\u95EE\u8BF7\u6C42\uFF08\u5373\u8BF7\u6C42\u901A\u8FC7\uFF09\uFF0C\u76F4\u5230\u6F0F\u6876\u4E3A\u7A7A\u3002\u5206\u5E03\u5F0F\u73AF\u5883\u4E0B\u5B9E\u65BD\u96BE\u5EA6\u9AD8\u3002</li><li><strong>\u4EE4\u724C\u6876\u7B97\u6CD5</strong>\uFF1A\u7A0B\u5E8F\u4EE5r\uFF08r=\u65F6\u95F4\u5468\u671F/\u9650\u6D41\u503C\uFF09\u7684\u901F\u5EA6\u5411\u4EE4\u724C\u6876\u4E2D\u589E\u52A0\u4EE4\u724C\uFF0C\u76F4\u5230\u4EE4\u724C\u6876\u6EE1\uFF0C\u8BF7\u6C42\u5230\u8FBE\u65F6\u5411\u4EE4\u724C\u6876\u8BF7\u6C42\u4EE4\u724C\uFF0C\u5982\u83B7\u53D6\u5230\u4EE4\u724C\u5219\u901A\u8FC7\u8BF7\u6C42\uFF0C\u5426\u5219\u89E6\u53D1\u9650\u6D41\u7B56\u7565\u3002\u5206\u5E03\u5F0F\u73AF\u5883\u4E0B\u5B9E\u65BD\u96BE\u5EA6\u9AD8\u3002</li></ol><h2 id="_4-\u9AD8\u5E76\u53D1\u7684\u5B9E\u8DF5\u7ECF\u9A8C" tabindex="-1"><a class="header-anchor" href="#_4-\u9AD8\u5E76\u53D1\u7684\u5B9E\u8DF5\u7ECF\u9A8C" aria-hidden="true">#</a> 4. \u9AD8\u5E76\u53D1\u7684\u5B9E\u8DF5\u7ECF\u9A8C</h2><p>\u63A5\u5165-\u903B\u8F91-\u5B58\u50A8\u662F\u7ECF\u5178\u7684\u4E92\u8054\u7F51\u540E\u7AEF\u5206\u5C42\uFF0C\u4F46\u968F\u7740\u4E1A\u52A1\u89C4\u6A21\u7684\u63D0\u9AD8\uFF0C\u903B\u8F91\u5C42\u7684\u590D\u6742\u5EA6\u4E5F\u4E0A\u5347\u4E86\uFF0C\u6240\u4EE5\uFF0C\u9488\u5BF9\u903B\u8F91\u5C42\u7684\u67B6\u6784\u8BBE\u8BA1\u4E5F\u51FA\u73B0\u5F88\u591A\u65B0\u7684\u6280\u672F\u548C\u601D\u8DEF\uFF0C\u5E38\u89C1\u7684\u505A\u6CD5\u5305\u62EC\u7CFB\u7EDF\u62C6\u5206\uFF0C\u5FAE\u670D\u52A1\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u4E5F\u6709\u5F88\u591A\u4E1A\u754C\u7684\u4F18\u79C0\u5B9E\u8DF5\uFF0C\u5305\u62EC\u67D0\u4FE1\u670D\u52A1\u5668\u901A\u8FC7\u534F\u7A0B\uFF08\u65E0\u4FB5\u5165\uFF0C\u5DF2\u5F00\u6E90libco\uFF09\u6539\u9020\uFF0C\u6781\u5927\u7684\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u5E76\u53D1\u5EA6\u548C\u7A33\u5B9A\u6027\uFF0C\u53E6\u5916\uFF0C\u7F13\u5B58\u9884\u70ED\uFF0C\u9884\u8BA1\u7B97\uFF0C\u6279\u91CF\u8BFB\u5199\uFF08\u51CF\u5C11IO\uFF09\uFF0C\u6C60\u6280\u672F\u7B49\u4E5F\u5E7F\u6CDB\u5E94\u7528\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u6709\u6548\u7684\u63D0\u5347\u4E86\u7CFB\u7EDF\u5E76\u53D1\u80FD\u529B\u3002</p><p>\u4E3A\u4E86\u63D0\u5347\u5E76\u53D1\u80FD\u529B\uFF0C\u903B\u8F91\u540E\u7AEF\u5BF9\u8BF7\u6C42\u7684\u5904\u7406\uFF0C\u4E00\u822C\u4F1A\u7528\u5230\u751F\u4EA7\u8005-\u6D88\u8D39\u8005\u591A\u7EBF\u7A0B\u6A21\u578B\uFF0C\u5373I/O\u7EBF\u7A0B\u8D1F\u8D23\u7F51\u7EDCIO\uFF0C\u534F\u8BAE\u7F16\u89E3\u7801\uFF0C\u7F51\u7EDC\u5B57\u8282\u6D41\u88AB\u89E3\u7801\u540E\u4EA7\u751F\u7684\u534F\u8BAE\u5BF9\u8C61\uFF0C\u4F1A\u88AB\u5305\u88C5\u6210task\u6295\u5165\u5230task queue\uFF0C\u7136\u540Eworker\u7EBF\u7A0B\u4F1A\u4ECE\u8BE5\u961F\u5217\u53D6\u51FAtask\u6267\u884C\uFF0C\u6709\u4E9B\u7CFB\u7EDF\u4F1A\u7528\u591A\u8FDB\u7A0B\u800C\u975E\u591A\u7EBF\u7A0B\uFF0C\u901A\u8FC7\u5171\u4EAB\u5B58\u50A8\uFF0C\u7EF4\u62A42\u4E2A\u65B9\u5411\u7684shm queue\uFF0C\u4E00\u4E2Ainput q\uFF0C\u4E00\u4E2Aoutput q\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u5E76\u53D1\u5EA6\uFF0C\u6709\u65F6\u5019\u4F1A\u5F15\u5165\u534F\u7A0B\uFF0C\u534F\u7A0B\u662F\u7528\u6237\u7EBF\u7A0B\u6001\u7684\u591A\u6267\u884C\u6D41\uFF0C\u5B83\u7684\u5207\u6362\u6210\u672C\u66F4\u4F4E\uFF0C\u901A\u5E38\u6709\u66F4\u597D\u7684\u8C03\u5EA6\u6548\u7387\u3002</p><p>\u53E6\u5916\uFF0C\u6784\u5EFA<strong>\u6F0F\u6597\u578B\u4E1A\u52A1\u6216\u8005\u7CFB\u7EDF</strong>\uFF0C\u4ECE\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5230\u63A5\u5165\u5C42\uFF0C\u5230\u903B\u8F91\u5C42\uFF0C\u5230DB\u5C42\uFF0C\u5C42\u5C42\u9012\u51CF\uFF0C\u8FC7\u6EE4\u6389\u8BF7\u6C42\uFF0CFail Fast\uFF08\u5C3D\u65E9\u53D1\u73B0\u5C3D\u65E9\u8FC7\u6EE4\uFF09\uFF0C\u5634\u5927\u5C41\u773C\u5C0F\uFF0C\u54C8\u54C8\u3002</p><p>\u6F0F\u6597\u578B\u7CFB\u7EDF\u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A\u6280\u672F\u6A21\u578B\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A<strong>\u4EA7\u54C1\u601D\u7EF4</strong>\uFF0C\u914D\u5408\u4EA7\u54C1\u7684\u7528\u6237\u5206\u6D41\uFF0C\u903B\u8F91\u5206\u79BB\uFF0C\u53EF\u4EE5\u6784\u5EFA\u5168\u65B9\u4F4D\u7684\u7ACB\u4F53\u6A21\u578B\u3002</p><h2 id="_5-\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u5C0F\u7ED3" aria-hidden="true">#</a> 5. \u5C0F\u7ED3</h2><p>\u83AB\u8BA9\u6D6E\u4E91\u906E\u671B\u773C\uFF0C\u9664\u5C3D\u7E41\u534E\u8BC6\u771F\u989C\u3002\u6211\u4EEC\u4E0D\u80FD\u638C\u63E1\u4E86\u5927\u65B9\u6848\uFF0C\u5439\u5B8C\u4E86\u725B\u76AE\uFF0C\u800C\u5FFD\u89C6\u4E86<strong>\u7F16\u7A0B\u6700\u672C\u8D28\u7684\u4E1C\u897F\uFF0C\u638C\u63E1\u6700\u57FA\u672C\u6700\u6838\u5FC3\u7684\u7F16\u7A0B\u80FD\u529B</strong>\uFF0C\u6BD4\u5982\u6570\u636E\u67B6\u6784\u548C\u7B97\u6CD5\uFF0C\u8BBE\u8BA1\uFF0C\u60EF\u7528\u6CD5\uFF0C\u57F9\u517B\u6280\u672F\u7684\u5BA1\u7F8E\uFF0C\u4E5F\u662F\u5F88\u91CD\u8981\u7684\uFF0C<strong>\u65E2\u8981\u81F4\u9AD8\u8FDC\uFF0C\u53C8\u8981\u5C3D\u7CBE\u5FAE</strong>\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',71),l={href:"https://zhuanlan.zhihu.com/p/187336277",target:"_blank",rel:"noopener noreferrer"};function c(g,_){const a=h("ExternalLinkIcon");return t(),n("div",null,[d,r("p",null,[r("a",l,[o("\u9AD8\u5E76\u53D1\uFF0C\u4F60\u771F\u7684\u4E86\u89E3\u5417\uFF1F"),s(a)])])])}const b=e(i,[["render",c],["__file","arch-y-overview.html.vue"]]);export{b as default};
