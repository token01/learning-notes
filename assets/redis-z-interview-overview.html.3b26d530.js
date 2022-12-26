import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as a,a as i,d as r,f as s,r as t}from"./app.e9ea989c.js";const h={},n=s('<h1 id="redis\u9762\u8BD5-redis\u95EE\u9898\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#redis\u9762\u8BD5-redis\u95EE\u9898\u603B\u7ED3" aria-hidden="true">#</a> Redis\u9762\u8BD5 - redis\u95EE\u9898\u603B\u7ED3</h1><blockquote><p>Redis \u9762\u8BD5\u4F1A\u6709\u54EA\u4E9B\u95EE\u9898\u5462\uFF1F\u6216\u8005\u5B66\u5B8C\u6574\u4E2A\u4F53\u7CFB\uFF0C\u5982\u4F55\u53BB\u7528\u95EE\u9898\u6D4B\u8BD5\u81EA\u5DF1\u7684\u7406\u89E3\u5462\uFF1F</p></blockquote><h2 id="_1-\u5E38\u89C4\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u89C4\u95EE\u9898" aria-hidden="true">#</a> 1. \u5E38\u89C4\u95EE\u9898</h2><ul><li>\u4EC0\u4E48\u662Fredis\uFF0C\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5B83</li><li>redis\u4E00\u822C\u6709\u54EA\u4E9B\u4F7F\u7528\u573A\u666F</li><li>redis\u4E3A\u4EC0\u4E48\u5FEB</li></ul><h2 id="_2-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 2. \u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784</h2><ul><li>redis\u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B</li><li>redis\u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u547D\u4EE4</li><li>\u8C08\u8C08redis\u7684\u5BF9\u8C61\u673A\u5236\uFF08redisObject)</li><li>redis\u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784</li><li>\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds\uFF1F</li><li>\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11\uFF1F512M</li><li>\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1Stream</li><li>Stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F</li><li>\u6D88\u606FID\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898</li></ul><h2 id="_3-\u6301\u4E45\u5316\u548C\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-\u6301\u4E45\u5316\u548C\u5185\u5B58" aria-hidden="true">#</a> 3. \u6301\u4E45\u5316\u548C\u5185\u5B58</h2><ul><li><p>Redis \u7684\u6301\u4E45\u5316\u673A\u5236\u662F\u4EC0\u4E48\uFF1F\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF1F\u4E00\u822C\u600E\u4E48\u7528\uFF1F</p></li><li><p>Redis \u8FC7\u671F\u952E\u7684\u5220\u9664\u7B56\u7565\u6709\u54EA\u4E9B</p></li><li><p>Redis \u5185\u5B58\u6DD8\u6C70\u7B97\u6CD5\u6709\u54EA\u4E9B</p></li><li><p>Redis\u7684\u5185\u5B58\u7528\u5B8C\u4E86\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F \u5982\u679C\u8FBE\u5230\u8BBE\u7F6E\u7684\u4E0A\u9650\uFF0CRedis\u7684\u5199\u547D\u4EE4\u4F1A\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\uFF08\u4F46\u662F\u8BFB\u547D\u4EE4\u8FD8\u53EF\u4EE5\u6B63\u5E38\u8FD4\u56DE\u3002\uFF09\u6216\u8005\u4F60\u53EF\u4EE5\u914D\u7F6E\u5185\u5B58\u6DD8\u6C70\u673A\u5236\uFF0C\u5F53Redis\u8FBE\u5230\u5185\u5B58\u4E0A\u9650\u65F6\u4F1A\u51B2\u5237\u6389\u65E7\u7684\u5185\u5BB9\u3002</p></li><li><p>Redis\u5982\u4F55\u505A\u5185\u5B58\u4F18\u5316\uFF1F</p></li><li><p>Redis key \u7684\u8FC7\u671F\u65F6\u95F4\u548C\u6C38\u4E45\u6709\u6548\u5206\u522B\u600E\u4E48\u8BBE\u7F6E\uFF1F</p><p>EXPIRE \u548C PERSIST \u547D\u4EE4</p></li><li><p>Redis \u4E2D\u7684\u7BA1\u9053\u6709\u4EC0\u4E48\u7528\uFF1F</p><p>\u4E00\u6B21\u8BF7\u6C42/\u54CD\u5E94\u670D\u52A1\u5668\u80FD\u5B9E\u73B0\u5904\u7406\u65B0\u7684\u8BF7\u6C42\u5373\u4F7F\u65E7\u7684\u8BF7\u6C42\u8FD8\u672A\u88AB\u54CD\u5E94\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5C06\u591A\u4E2A\u547D\u4EE4\u53D1\u9001\u5230\u670D\u52A1\u5668\uFF0C\u800C\u4E0D\u7528\u7B49\u5F85\u56DE\u590D\uFF0C\u6700\u540E\u5728\u4E00\u4E2A\u6B65\u9AA4\u4E2D\u8BFB\u53D6\u8BE5\u7B54\u590D\u3002</p><p>\u8FD9\u5C31\u662F\u7BA1\u9053\uFF08pipelining\uFF09\uFF0C\u662F\u4E00\u79CD\u51E0\u5341\u5E74\u6765\u5E7F\u6CDB\u4F7F\u7528\u7684\u6280\u672F\u3002\u4F8B\u5982\u8BB8\u591A POP3 \u534F\u8BAE\u5DF2\u7ECF\u5B9E\u73B0\u652F\u6301\u8FD9\u4E2A\u529F\u80FD\uFF0C\u5927\u5927\u52A0\u5FEB\u4E86\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D\u65B0\u90AE\u4EF6\u7684\u8FC7\u7A0B\u3002</p></li></ul><h2 id="_4-\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-\u4E8B\u52A1" aria-hidden="true">#</a> 4. \u4E8B\u52A1</h2><ul><li>\u4EC0\u4E48\u662Fredis\u4E8B\u52A1</li><li>Redis\u4E8B\u52A1\u76F8\u5173\u547D\u4EE4</li><li>Redis\u4E8B\u52A1\u7684\u4E09\u4E2A\u9636\u6BB5</li><li>watch\u662F\u5982\u4F55\u76D1\u89C6\u5B9E\u73B0\u7684\u5462</li><li>\u4E3A\u4EC0\u4E48 Redis \u4E0D\u652F\u6301\u56DE\u6EDA</li><li>redis \u5BF9 ACID\u7684\u652F\u6301\u6027\u7406\u89E3</li><li>Redis\u4E8B\u52A1\u5176\u4ED6\u5B9E\u73B0</li></ul><p>\u57FA\u4E8ELua\u811A\u672C\uFF0CRedis\u53EF\u4EE5\u4FDD\u8BC1\u811A\u672C\u5185\u7684\u547D\u4EE4\u4E00\u6B21\u6027\u3001\u6309\u987A\u5E8F\u5730\u6267\u884C\uFF0C\u5176\u540C\u65F6\u4E5F\u4E0D\u63D0\u4F9B\u4E8B\u52A1\u8FD0\u884C\u9519\u8BEF\u7684\u56DE\u6EDA\uFF0C\u6267\u884C\u8FC7\u7A0B\u4E2D\u5982\u679C\u90E8\u5206\u547D\u4EE4\u8FD0\u884C\u9519\u8BEF\uFF0C\u5269\u4E0B\u7684\u547D\u4EE4\u8FD8\u662F\u4F1A\u7EE7\u7EED\u8FD0\u884C\u5B8C</p><p>\u57FA\u4E8E\u4E2D\u95F4\u6807\u8BB0\u53D8\u91CF\uFF0C\u901A\u8FC7\u53E6\u5916\u7684\u6807\u8BB0\u53D8\u91CF\u6765\u6807\u8BC6\u4E8B\u52A1\u662F\u5426\u6267\u884C\u5B8C\u6210\uFF0C\u8BFB\u53D6\u6570\u636E\u65F6\u5148\u8BFB\u53D6\u8BE5\u6807\u8BB0\u53D8\u91CF\u5224\u65AD\u662F\u5426\u4E8B\u52A1\u6267\u884C\u5B8C\u6210\u3002\u4F46\u8FD9\u6837\u4F1A\u9700\u8981\u989D\u5916\u5199\u4EE3\u7801\u5B9E\u73B0\uFF0C\u6BD4\u8F83\u7E41\u7410</p><h2 id="_5-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_5-\u96C6\u7FA4" aria-hidden="true">#</a> 5. \u96C6\u7FA4</h2><h3 id="_5-1-\u4E3B\u4ECE\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#_5-1-\u4E3B\u4ECE\u590D\u5236" aria-hidden="true">#</a> 5.1 \u4E3B\u4ECE\u590D\u5236</h3><ul><li>Redis\u96C6\u7FA4\u7684\u4E3B\u4ECE\u590D\u5236\u6A21\u578B\u662F\u600E\u6837\u7684\uFF1F</li><li>\u5168\u91CF\u590D\u5236\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1\u589E\u91CF\u590D\u5236\uFF1F</li><li>\u589E\u91CF\u590D\u5236\u7684\u6D41\u7A0B\uFF1F \u5982\u679C\u5728\u7F51\u7EDC\u65AD\u5F00\u671F\u95F4\uFF0Crepl_backlog_size\u73AF\u5F62\u7F13\u51B2\u533A\u5199\u6EE1\u4E4B\u540E\uFF0C\u4ECE\u5E93\u662F\u4F1A\u4E22\u5931\u6389\u90A3\u90E8\u5206\u88AB\u8986\u76D6\u6389\u7684\u6570\u636E\uFF0C\u8FD8\u662F\u76F4\u63A5\u8FDB\u884C\u5168\u91CF\u590D\u5236\u5462\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u4E0D\u6301\u4E45\u5316\u7684\u4E3B\u670D\u52A1\u5668\u81EA\u52A8\u91CD\u542F\u975E\u5E38\u5371\u9669\u5462?</li><li>\u4E3A\u4EC0\u4E48\u4E3B\u4ECE\u5168\u91CF\u590D\u5236\u4F7F\u7528RDB\u800C\u4E0D\u4F7F\u7528AOF\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u8FD8\u6709\u65E0\u78C1\u76D8\u590D\u5236\u6A21\u5F0F\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u6709\u4ECE\u5E93\u7684\u4ECE\u5E93\u7684\u8BBE\u8BA1\uFF1F</li></ul><h3 id="_5-2-\u54E8\u5175\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_5-2-\u54E8\u5175\u673A\u5236" aria-hidden="true">#</a> 5.2 \u54E8\u5175\u673A\u5236</h3><ul><li>Redis\u54E8\u5175\u673A\u5236\uFF1F\u54E8\u5175\u5B9E\u73B0\u4E86\u4EC0\u4E48\u529F\u80FD\u5462</li><li>\u54E8\u5175\u96C6\u7FA4\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u7EC4\u5EFA\u7684\uFF1F</li><li>\u54E8\u5175\u662F\u5982\u4F55\u76D1\u63A7Redis\u96C6\u7FA4\u7684\uFF1F</li><li>\u54E8\u5175\u5982\u4F55\u5224\u65AD\u4E3B\u5E93\u5DF2\u7ECF\u4E0B\u7EBF\u4E86\u5462\uFF1F</li><li>\u54E8\u5175\u7684\u9009\u4E3E\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684\uFF1F</li><li>Redis 1\u4E3B4\u4ECE\uFF0C5\u4E2A\u54E8\u5175\uFF0C\u54E8\u5175\u914D\u7F6Equorum\u4E3A2\uFF0C\u5982\u679C3\u4E2A\u54E8\u5175\u6545\u969C\uFF0C\u5F53\u4E3B\u5E93\u5B95\u673A\u65F6\uFF0C\u54E8\u5175\u80FD\u5426\u5224\u65AD\u4E3B\u5E93\u201C\u5BA2\u89C2\u4E0B\u7EBF\u201D\uFF1F\u80FD\u5426\u81EA\u52A8\u5207\u6362\uFF1F</li><li>\u4E3B\u5E93\u5224\u5B9A\u5BA2\u89C2\u4E0B\u7EBF\u4E86\uFF0C\u90A3\u4E48\u5982\u4F55\u4ECE\u5269\u4F59\u7684\u4ECE\u5E93\u4E2D\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u4E3B\u5E93\u5462\uFF1F</li><li>\u65B0\u7684\u4E3B\u5E93\u9009\u62E9\u51FA\u6765\u540E\uFF0C\u5982\u4F55\u8FDB\u884C\u6545\u969C\u7684\u8F6C\u79FB\uFF1F</li></ul><h3 id="_5-3-redis\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_5-3-redis\u96C6\u7FA4" aria-hidden="true">#</a> 5.3 Redis\u96C6\u7FA4</h3><ul><li>\u8BF4\u8BF4Redis\u54C8\u5E0C\u69FD\u7684\u6982\u5FF5\uFF1F\u4E3A\u4EC0\u4E48\u662F16384\u4E2A\uFF1F</li><li>Redis\u96C6\u7FA4\u4F1A\u6709\u5199\u64CD\u4F5C\u4E22\u5931\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F</li></ul><p>Redis\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u6570\u636E\u7684\u5F3A\u4E00\u81F4\u6027\uFF0C\u8FD9\u610F\u5473\u8FD9\u5728\u5B9E\u9645\u4E2D\u96C6\u7FA4\u5728\u7279\u5B9A\u7684\u6761\u4EF6\u4E0B\u53EF\u80FD\u4F1A\u4E22\u5931\u5199\u64CD\u4F5C\u3002</p><h2 id="_6-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_6-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 6. \u5E94\u7528\u573A\u666F</h2><ul><li><p>redis \u5BA2\u6237\u7AEF\u6709\u54EA\u4E9B</p><p>Redisson\u3001Jedis\u3001lettuce\u7B49\u7B49\uFF0C\u5B98\u65B9\u63A8\u8350\u4F7F\u7528Redisson\u3002</p><p>Redisson\u662F\u4E00\u4E2A\u9AD8\u7EA7\u7684\u5206\u5E03\u5F0F\u534F\u8C03Redis\u5BA2\u6237\u7AEF\uFF0C\u80FD\u5E2E\u52A9\u7528\u6237\u5728\u5206\u5E03\u5F0F\u73AF\u5883\u4E2D\u8F7B\u677E\u5B9E\u73B0\u4E00\u4E9BJava\u7684\u5BF9\u8C61 (Bloom filter, BitSet, Set, SetMultimap, ScoredSortedSet, SortedSet, Map, ConcurrentMap, List, ListMultimap, Queue, BlockingQueue, Deque, BlockingDeque, Semaphore, Lock, ReadWriteLock, AtomicLong, CountDownLatch, Publish / Subscribe, HyperLogLog)\u3002</p></li><li><p>Redis\u5982\u4F55\u505A\u5927\u91CF\u6570\u636E\u63D2\u5165\uFF1F Redis2.6\u5F00\u59CBredis-cli\u652F\u6301\u4E00\u79CD\u65B0\u7684\u88AB\u79F0\u4E4B\u4E3Apipe mode\u7684\u65B0\u6A21\u5F0F\u7528\u4E8E\u6267\u884C\u5927\u91CF\u6570\u636E\u63D2\u5165\u5DE5\u4F5C\u3002</p></li><li><p>redis\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u5B9E\u73B0? \u4EC0\u4E48\u662F RedLock?</p></li><li><p>redis\u7F13\u5B58\u6709\u54EA\u4E9B\u95EE\u9898\uFF0C\u5982\u4F55\u89E3\u51B3</p></li><li><p>redis\u548C\u5176\u5B83\u6570\u636E\u5E93\u4E00\u81F4\u6027\u95EE\u9898\u5982\u4F55\u89E3\u51B3</p></li><li><p>redis\u6027\u80FD\u95EE\u9898\u6709\u54EA\u4E9B\uFF0C\u5982\u4F55\u5206\u6790\u5B9A\u4F4D\u89E3\u51B3</p></li></ul><h2 id="_7-\u65B0\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_7-\u65B0\u7248\u672C" aria-hidden="true">#</a> 7. \u65B0\u7248\u672C</h2><ul><li><p>Redis\u5355\u7EBF\u7A0B\u6A21\u578B\uFF1F \u57286.0\u4E4B\u524D\u5982\u4F55\u63D0\u9AD8\u591A\u6838CPU\u7684\u5229\u7528\u7387\uFF1F</p><p>\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u670D\u52A1\u5668\u90E8\u7F72\u591A\u4E2ARedis\u7684\u5B9E\u4F8B\uFF0C\u5E76\u628A\u4ED6\u4EEC\u5F53\u4F5C\u4E0D\u540C\u7684\u670D\u52A1\u5668\u6765\u4F7F\u7528\uFF0C\u5728\u67D0\u4E9B\u65F6\u5019\uFF0C\u65E0\u8BBA\u5982\u4F55\u4E00\u4E2A\u670D\u52A1\u5668\u662F\u4E0D\u591F\u7684\uFF0C \u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u60F3\u4F7F\u7528\u591A\u4E2ACPU\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u4E00\u4E0B\u5206\u7247\uFF08shard\uFF09\u3002</p></li><li><p>6.0\u7248\u672C\u4E2D\u591A\u7EBF\u7A0B</p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',25),o={href:"https://pdai.tech/md/db/nosql-redis/db-redis-z-mianshi.html",target:"_blank",rel:"noopener noreferrer"},p=i("strong",null,"Redis\u9762\u8BD5 - redis\u95EE\u9898\u603B\u7ED3",-1);function c(u,_){const e=t("ExternalLinkIcon");return d(),a("div",null,[n,i("p",null,[i("a",o,[p,r(e)])])])}const b=l(h,[["render",c],["__file","redis-z-interview-overview.html.vue"]]);export{b as default};
