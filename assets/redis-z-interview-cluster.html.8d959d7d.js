import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,f as r}from"./app.e9ea989c.js";const a={},d=r('<h1 id="redis\u9762\u8BD5-\u96C6\u7FA4-\u5206\u7247\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#redis\u9762\u8BD5-\u96C6\u7FA4-\u5206\u7247\u6280\u672F" aria-hidden="true">#</a> Redis\u9762\u8BD5 - \u96C6\u7FA4-\u5206\u7247\u6280\u672F</h1><h2 id="_1-\u4EC0\u4E48\u662Fredis-cluster" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fredis-cluster" aria-hidden="true">#</a> 1 \u4EC0\u4E48\u662FRedis Cluster\uFF1F</h2><p>Redis-cluster\u662F\u4E00\u79CD\u670D\u52A1\u5668Sharding\u6280\u672F\uFF0CRedis3.0\u4EE5\u540E\u7248\u672C\u6B63\u5F0F\u63D0\u4F9B\u652F\u6301\u3002</p><h2 id="_2-\u8BF4\u8BF4redis\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5-\u4E3A\u4EC0\u4E48\u662F16384\u4E2A" tabindex="-1"><a class="header-anchor" href="#_2-\u8BF4\u8BF4redis\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5-\u4E3A\u4EC0\u4E48\u662F16384\u4E2A" aria-hidden="true">#</a> 2 \u8BF4\u8BF4Redis\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5\uFF1F\u4E3A\u4EC0\u4E48\u662F16384\u4E2A\uFF1F</h2><p>Redis-cluster\u6CA1\u6709\u4F7F\u7528\u4E00\u81F4\u6027hash\uFF0C\u800C\u662F\u5F15\u5165\u4E86<strong>\u54C8\u5E0C\u69FD</strong>\u7684\u6982\u5FF5\u3002Redis-cluster\u4E2D\u670916384(\u53732\u768414\u6B21\u65B9\uFF09\u4E2A\u54C8\u5E0C\u69FD\uFF0C\u6BCF\u4E2Akey\u901A\u8FC7CRC16\u6821\u9A8C\u540E\u5BF916383\u53D6\u6A21\u6765\u51B3\u5B9A\u653E\u7F6E\u54EA\u4E2A\u69FD\u3002Cluster\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u8D1F\u8D23\u4E00\u90E8\u5206hash\u69FD\uFF08hash slot\uFF09\u3002</p><p>\u6BD4\u5982\u96C6\u7FA4\u4E2D\u5B58\u5728\u4E09\u4E2A\u8282\u70B9\uFF0C\u5219\u53EF\u80FD\u5B58\u5728\u7684\u4E00\u79CD\u5206\u914D\u5982\u4E0B\uFF1A</p><ol><li>\u8282\u70B9A\u5305\u542B0\u52305500\u53F7\u54C8\u5E0C\u69FD\uFF1B</li><li>\u8282\u70B9B\u5305\u542B5501\u523011000\u53F7\u54C8\u5E0C\u69FD\uFF1B</li><li>\u8282\u70B9C\u5305\u542B11001 \u5230 16384\u53F7\u54C8\u5E0C\u69FD\u3002</li></ol><ul><li><strong>\u4E3A\u4EC0\u4E48\u662F16384\u4E2A</strong></li></ul><p>\u6211\u4EEC\u77E5\u9053\u4E00\u81F4\u6027hash\u7B97\u6CD5\u662F2\u768416\u6B21\u65B9\uFF0C\u4E3A\u4EC0\u4E48hash slot\u662F2\u768414\u6B21\u65B9\u5462\uFF1F</p><ol><li><p>\u5982\u679C\u69FD\u4F4D\u4E3A65536\uFF0C\u53D1\u9001\u5FC3\u8DF3\u4FE1\u606F\u7684\u6D88\u606F\u5934\u8FBE8k\uFF0C\u53D1\u9001\u7684\u5FC3\u8DF3\u5305\u8FC7\u4E8E\u5E9E\u5927\u3002</p><p>\u5982\u4E0A\u6240\u8FF0\uFF0C\u5728\u6D88\u606F\u5934\u4E2D\uFF0C\u6700\u5360\u7A7A\u95F4\u7684\u662Fmyslots[CLUSTER_SLOTS/8]\u3002 \u5F53\u69FD\u4F4D\u4E3A65536\u65F6\uFF0C\u8FD9\u5757\u7684\u5927\u5C0F\u662F: 65536\xF78\xF71024=8kb \u56E0\u4E3A\u6BCF\u79D2\u949F\uFF0Credis\u8282\u70B9\u9700\u8981\u53D1\u9001\u4E00\u5B9A\u6570\u91CF\u7684ping\u6D88\u606F\u4F5C\u4E3A\u5FC3\u8DF3\u5305\uFF0C\u5982\u679C\u69FD\u4F4D\u4E3A65536\uFF0C\u8FD9\u4E2Aping\u6D88\u606F\u7684\u6D88\u606F\u5934\u592A\u5927\u4E86\uFF0C\u6D6A\u8D39\u5E26\u5BBD\u3002</p></li><li><p>redis\u7684\u96C6\u7FA4\u4E3B\u8282\u70B9\u6570\u91CF\u57FA\u672C\u4E0D\u53EF\u80FD\u8D85\u8FC71000\u4E2A\u3002</p><p>\u5982\u4E0A\u6240\u8FF0\uFF0C\u96C6\u7FA4\u8282\u70B9\u8D8A\u591A\uFF0C\u5FC3\u8DF3\u5305\u7684\u6D88\u606F\u4F53\u5185\u643A\u5E26\u7684\u6570\u636E\u8D8A\u591A\u3002\u5982\u679C\u8282\u70B9\u8FC71000\u4E2A\uFF0C\u4E5F\u4F1A\u5BFC\u81F4\u7F51\u7EDC\u62E5\u5835\u3002\u56E0\u6B64redis\u4F5C\u8005\uFF0C\u4E0D\u5EFA\u8BAEredis cluster\u8282\u70B9\u6570\u91CF\u8D85\u8FC71000\u4E2A\u3002 \u90A3\u4E48\uFF0C\u5BF9\u4E8E\u8282\u70B9\u6570\u57281000\u4EE5\u5185\u7684redis cluster\u96C6\u7FA4\uFF0C16384\u4E2A\u69FD\u4F4D\u591F\u7528\u4E86\u3002\u6CA1\u6709\u5FC5\u8981\u62D3\u5C55\u523065536\u4E2A\u3002</p></li><li><p>\u69FD\u4F4D\u8D8A\u5C0F\uFF0C\u8282\u70B9\u5C11\u7684\u60C5\u51B5\u4E0B\uFF0C\u538B\u7F29\u6BD4\u9AD8</p><p>Redis\u4E3B\u8282\u70B9\u7684\u914D\u7F6E\u4FE1\u606F\u4E2D\uFF0C\u5B83\u6240\u8D1F\u8D23\u7684\u54C8\u5E0C\u69FD\u662F\u901A\u8FC7\u4E00\u5F20bitmap\u7684\u5F62\u5F0F\u6765\u4FDD\u5B58\u7684\uFF0C\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5BF9bitmap\u8FDB\u884C\u538B\u7F29\uFF0C\u4F46\u662F\u5982\u679Cbitmap\u7684\u586B\u5145\u7387slots / N\u5F88\u9AD8\u7684\u8BDD(N\u8868\u793A\u8282\u70B9\u6570)\uFF0Cbitmap\u7684\u538B\u7F29\u7387\u5C31\u5F88\u4F4E\u3002 \u5982\u679C\u8282\u70B9\u6570\u5F88\u5C11\uFF0C\u800C\u54C8\u5E0C\u69FD\u6570\u91CF\u5F88\u591A\u7684\u8BDD\uFF0Cbitmap\u7684\u538B\u7F29\u7387\u5C31\u5F88\u4F4E\u3002</p></li></ol><h2 id="_3-redis\u96C6\u7FA4\u4F1A\u6709\u5199\u64CD\u4F5C\u4E22\u5931\u5417-\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_3-redis\u96C6\u7FA4\u4F1A\u6709\u5199\u64CD\u4F5C\u4E22\u5931\u5417-\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> 3 Redis\u96C6\u7FA4\u4F1A\u6709\u5199\u64CD\u4F5C\u4E22\u5931\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F</h2><p>Redis\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6570\u636E\u7684\u5F3A\u4E00\u81F4\u6027\uFF0C\u8FD9\u610F\u5473\u8FD9\u5728\u5B9E\u9645\u4E2D\u96C6\u7FA4\u5728\u7279\u5B9A\u7684\u6761\u4EF6\u4E0B\u53EF\u80FD\u4F1A\u4E22\u5931\u5199\u64CD\u4F5C\u3002</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',13),t=[d];function l(h,n){return i(),s("div",null,t)}const p=e(a,[["render",l],["__file","redis-z-interview-cluster.html.vue"]]);export{p as default};
