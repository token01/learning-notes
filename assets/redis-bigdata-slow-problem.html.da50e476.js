import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as a,f as d}from"./app.9ff179fe.js";const s={},r=d(`<h1 id="redis\u5927\u6570\u636E\u67E5\u8BE2\u8FD8\u4E0D\u5982\u76F4\u63A5\u67E5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#redis\u5927\u6570\u636E\u67E5\u8BE2\u8FD8\u4E0D\u5982\u76F4\u63A5\u67E5\u6570\u636E\u5E93" aria-hidden="true">#</a> redis\u5927\u6570\u636E\u67E5\u8BE2\u8FD8\u4E0D\u5982\u76F4\u63A5\u67E5\u6570\u636E\u5E93</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u4EEC\u5B57\u5178\u8868\u6570\u636E\u4F1A\u6839\u636E \u5B57\u5178\u540D \u5B58redis \u4F5C\u4E3A\u7F13\u5B58\u4F7F\u7528\uFF0C\u4F46\u662F\u5B57\u5178\u5E76\u4E0D\u5355\u5355\u6709\u6211\u4EEC\u7CFB\u7EDF\u4E2D\u65B0\u589E\u7684\u3002\u8FD8\u5305\u62EC<code>\u56FD\u6807 </code>\u7684\u5B57\u5178\u8868\u3002\u5982 \u6C11\u65CF\u4EE3\u7801\uFF0C\u804C\u4E1A\u4EE3\u7801\uFF0C\u884C\u653F\u533A\u5212\u4EE3\u7801\u3002\u8FD9\u4E9B\u56FD\u6807\u5B57\u5178\u8868\u662F\u5355\u72EC\u5B58\u8868\u7684\uFF08\u6211\u4EEC\u4EE5T_\u5F00\u5934\uFF09</p><p>\u4E3A\u4E86\u4FDD\u6301\u903B\u8F91\u4E00\u81F4\uFF0C\u6211\u4EEC\u5728service \u5C42\u901A\u8FC7\u8868\u524D\u7F00 <code>T_ </code> \u533A\u5206\u662F\u7CFB\u7EDF\u5B57\u5178\u8868\u8FD8\u662F \u56FD\u6807\u5B57\u5178\u8868\u3002\u8F6C\u6210\u7EDF\u4E00\u7684\u6570\u636E\u7ED3\u6784\u8FD4\u56DE\u3002\u5176\u4E2D\u4F1A\u5C06\u5B57\u5178\u8868\u7684\u6570\u636E\u5B58\u50A8\u5728redis \u4E2D</p><h2 id="_2-\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u95EE\u9898" aria-hidden="true">#</a> 2. \u95EE\u9898</h2><p>\u5728\u4E00\u6B21\u7CFB\u7EDF\u6D4B\u8BD5\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4E1A\u52A1\u63A5\u53E3\u54CD\u5E94\u65F6\u95F4\u957F\u3002\u6392\u67E5\u53D1\u73B0\u662Fredis \u67E5\u8BE2 <code>\u5168\u56FD\u884C\u653F\u533A\u5212\u4EE3\u7801</code> \u6162\uFF0C</p><ul><li>redis\u67E5\u8BE2 <code>\u5168\u56FD\u884C\u653F\u533A\u5212\u4EE3\u7801</code> \u82B1\u8D39\uFF1A200ms</li><li>\u76F4\u63A5\u67E5\u8BE2\u6570\u636E\u5E93 \u82B1\u8D3910ms</li></ul><h2 id="_3-\u6392\u67E5\u5B9A\u4F4D" tabindex="-1"><a class="header-anchor" href="#_3-\u6392\u67E5\u5B9A\u4F4D" aria-hidden="true">#</a> 3. \u6392\u67E5\u5B9A\u4F4D</h2><h3 id="_3-1-redis-\u6162\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_3-1-redis-\u6162\u65E5\u5FD7" aria-hidden="true">#</a> 3.1 redis \u6162\u65E5\u5FD7</h3><p>\u901A\u8FC7\u67E5\u8BE2\u6162\u65E5\u5FD7\u5B9A\u4F4Dredis \u4E2D\u54EA\u4E9Bkey \u64CD\u4F5C\u7684\u6162</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>SLOWLOG get <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220628173939773.png" alt="image-20220628173939773"></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u884C\u653F\u533A\u5212\u4EE3\u7801redis \u4E2D\u67E5\u8BE2\u82B1\u8D39\u4E8610ms\uFF0C\u518D\u52A0\u4E0A\u7F51\u7EDC\u4F20\u8F93\u548C\u6570\u636E\u683C\u5F0F\u7EC4\u88C5\u5C31\u66F4\u4E45\u4E86</p><h3 id="_3-2-redis-\u67E5\u8BE2bigkeys" tabindex="-1"><a class="header-anchor" href="#_3-2-redis-\u67E5\u8BE2bigkeys" aria-hidden="true">#</a> 3.2 redis \u67E5\u8BE2bigkeys</h3><p>\u67E5\u8BE2bigkeys \u4FE1\u606F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>redis-cli -h 192.168.0.1 -p 6379 -a &quot;xxxx&quot; --bigkeys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220628174234793.png" alt="image-20220628174234793"></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u884C\u653F\u533A\u5212\u5C31\u5360\u4E860.6M \u5927\u5C0F\u3002\u5DF2\u7ECF\u975E\u5E38\u5927\u4E86</p><h2 id="_4-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 4. \u89E3\u51B3\u65B9\u6848</h2><p>\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\uFF0C\u884C\u653F\u533A\u5212\u4EE3\u7801\u5176\u5B9E\u57FA\u672C\u4E0D\u53D8\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4ED6\u653E\u5728\u524D\u7AEF\u6216\u8005\u670D\u52A1\u7AEF\u5185\u5B58\u4E2D\u505A\u4E00\u7EA7\u7F13\u5B58\u5C31\u53EF\u4EE5\u4E86\u3002\uFF08ps\uFF1Aredis \u5C5E\u4E8E\u4E8C\u7EA7\u7F13\u5B58\uFF09</p><h2 id="_5-\u5927bigkeys-\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#_5-\u5927bigkeys-\u600E\u4E48\u529E" aria-hidden="true">#</a> 5. \u5927bigkeys \u600E\u4E48\u529E</h2><p>\u8FD9\u91CC\u6709\u4E24\u70B9\u53EF\u4EE5\u4F18\u5316\uFF1A</p><ul><li>\u4E1A\u52A1\u5E94\u7528\u5C3D\u91CF\u907F\u514D\u5199\u5165 bigkey</li><li>\u5982\u679C\u4F60\u4F7F\u7528\u7684 Redis \u662F 4.0 \u4EE5\u4E0A\u7248\u672C\uFF0C\u7528 UNLINK \u547D\u4EE4\u66FF\u4EE3 DEL\uFF0C\u6B64\u547D\u4EE4\u53EF\u4EE5\u628A\u91CA\u653E key \u5185\u5B58\u7684\u64CD\u4F5C\uFF0C\u653E\u5230\u540E\u53F0\u7EBF\u7A0B\u4E2D\u53BB\u6267\u884C\uFF0C\u4ECE\u800C\u964D\u4F4E\u5BF9 Redis \u7684\u5F71\u54CD</li><li>\u5982\u679C\u4F60\u4F7F\u7528\u7684 Redis \u662F 6.0 \u4EE5\u4E0A\u7248\u672C\uFF0C\u53EF\u4EE5\u5F00\u542F lazy-free \u673A\u5236\uFF08lazyfree-lazy-user-del = yes\uFF09\uFF0C\u5728\u6267\u884C DEL \u547D\u4EE4\u65F6\uFF0C\u91CA\u653E\u5185\u5B58\u4E5F\u4F1A\u653E\u5230\u540E\u53F0\u7EBF\u7A0B\u4E2D\u6267\u884C</li></ul><p>\u4F46\u5373\u4FBF\u53EF\u4EE5\u4F7F\u7528\u65B9\u6848 2\uFF0C\u6211\u4E5F\u4E0D\u5EFA\u8BAE\u4F60\u5728\u5B9E\u4F8B\u4E2D\u5B58\u5165 bigkey\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A bigkey \u5728\u5F88\u591A\u573A\u666F\u4E0B\uFF0C\u4F9D\u65E7\u4F1A\u4EA7\u751F\u6027\u80FD\u95EE\u9898\u3002\u4F8B\u5982\uFF0Cbigkey \u5728\u5206\u7247\u96C6\u7FA4\u6A21\u5F0F\u4E0B\uFF0C\u5BF9\u4E8E\u6570\u636E\u7684\u8FC1\u79FB\u4E5F\u4F1A\u6709\u6027\u80FD\u5F71\u54CD\uFF0C\u4EE5\u53CA\u6211\u540E\u9762\u5373\u5C06\u8BB2\u5230\u7684\u6570\u636E\u8FC7\u671F\u3001\u6570\u636E\u6DD8\u6C70\u3001\u900F\u660E\u5927\u9875\uFF0C\u90FD\u4F1A\u53D7\u5230 bigkey \u7684\u5F71\u54CD\u3002</p>`,25),n=[r];function l(c,h){return i(),a("div",null,n)}const p=e(s,[["render",l],["__file","redis-bigdata-slow-problem.html.vue"]]);export{p as default};
