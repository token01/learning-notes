import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as o,d as p,f as c,r as i}from"./app.da5f94a0.js";const l={},u=c(`<h1 id="\u7EBF\u4E0Aoom-\u8BB0\u4E00\u6B21oom\u6392\u67E5\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u4E0Aoom-\u8BB0\u4E00\u6B21oom\u6392\u67E5\u8FC7\u7A0B" aria-hidden="true">#</a> \u7EBF\u4E0AOOM-\u8BB0\u4E00\u6B21OOM\u6392\u67E5\u8FC7\u7A0B</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u9879\u76EE\u4E2D\u6709\u4E2A\u9700\u6C42\u662F\u5C06\u722C\u866B\u722C\u53D6\u5230\u7684\u7F51\u9875\u6570\u636E\uFF08\u5B58\u653E\u5728mongodb\uFF09, \u505A\u6570\u636E\u6E05\u7406\u540E\u653E\u5165\u641C\u7D22\u5F15\u64CE\uFF08solr\uFF09\u4E2D\u3002\u603B\u5171350w\u7684\u7F51\u9875\u6570\u636E\uFF0C\u5982\u679C\u6309\u6B63\u5E38\u901F\u5EA6\u540C\u6B6510\u4E2A\u5C0F\u65F6\u5373\u53EF\u5B8C\u6210\u3002\u4F46\u6211\u4EEC\u5B9E\u9645\u6D4B\u8BD5\u53D1\u73B0\uFF0C\u968F\u7740\u65F6\u95F4\u63A8\u79FB\uFF0C\u540C\u6B65\u65F6\u95F4\u8D8A\u6765\u8D8A\u957F\uFF0C\u6302\u4E86\u4E00\u5929\u53EA\u540C\u6B65\u4E86100w\u6570\u636E\u3002\u4E14\u540E\u9762\u8D8A\u6765\u8D8A\u6162\u3002\u9886\u5BFC\u627E\u5230\u6211\uFF0C\u8BA9\u6211\u5E2E\u5FD9\u6392\u67E5\u89E3\u51B3</p><h2 id="_2-\u89E3\u51B3\u4E00-mongodb-\u5927\u6570\u636E\u91CF\u5206\u9875\u67E5\u8BE2\u6548\u7387\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u4E00-mongodb-\u5927\u6570\u636E\u91CF\u5206\u9875\u67E5\u8BE2\u6548\u7387\u95EE\u9898" aria-hidden="true">#</a> 2. \u89E3\u51B3\u4E00: mongodb \u5927\u6570\u636E\u91CF\u5206\u9875\u67E5\u8BE2\u6548\u7387\u95EE\u9898</h2><p>\u901A\u8FC7\u67E5\u9605\u8D44\u6599\u4E86\u89E3\u5230</p><p>\u867D\u7136MongoDB\u63D0\u4F9B\u4E86skip()\u548Climit()\u65B9\u6CD5\u3002\u770B\u8D77\u6765\uFF0C\u5206\u9875\u5DF2\u7ECF\u5B9E\u73B0\u4E86\uFF0C\u4F46\u662F\u5B98\u65B9\u6587\u6863\u5E76\u4E0D\u63A8\u8350\uFF0C\u8BF4\u4F1A\u626B\u63CF\u5168\u90E8\u6587\u6863\uFF0C\u7136\u540E\u518D\u8FD4\u56DE\u7ED3\u679C\u3002</p><blockquote><p>The cursor.skip() method requires the server to scan from the beginning of the input results set before beginning to return results. As the offset increases, cursor.skip() will become slower.</p><p>cursor.skip() \u65B9\u6CD5\u8981\u6C42\u670D\u52A1\u5668\u5148\u4ECE\u8F93\u5165\u7ED3\u679C\u96C6\u5F00\u59CB\u626B\u63CF\uFF0C\u7136\u540E\u518D\u5F00\u59CB\u8FD4\u56DE\u7ED3\u679C\u3002\u968F\u7740\u504F\u79FB\u91CF\u7684\u589E\u52A0\uFF0Ccursor.skip() \u4F1A\u53D8\u6162\u3002</p></blockquote><p>\u6240\u4EE5\uFF0C\u9700\u8981\u4E00\u79CD\u66F4\u5FEB\u7684\u65B9\u5F0F\u3002\u5176\u5B9E\u548Cmysql\u6570\u91CF\u5927\u4E4B\u540E\u4E0D\u63A8\u8350\u7528limit m,n\u4E00\u6837\uFF0C\u89E3\u51B3\u65B9\u6848\u662F\u5148\u67E5\u51FA\u5F53\u524D\u9875\u7684\u7B2C\u4E00\u6761\uFF0C\u7136\u540E\u987A\u5E8F\u6570pageSize\u6761\u3002MongoDB\u5B98\u65B9\u4E5F\u662F\u8FD9\u6837\u63A8\u8350\u7684\u3002</p><h3 id="_2-1-\u89E3\u51B3\u65B9\u68481-\u901A\u8FC7-id-\u6BD4\u8F83\u53D6\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_2-1-\u89E3\u51B3\u65B9\u68481-\u901A\u8FC7-id-\u6BD4\u8F83\u53D6\u5206\u9875" aria-hidden="true">#</a> 2.1 \u89E3\u51B3\u65B9\u68481\uFF1A\u901A\u8FC7_id \u6BD4\u8F83\u53D6\u5206\u9875</h3><p>\u6211\u4EEC\u5047\u8BBE\u57FA\u4E8E_id\u7684\u6761\u4EF6\u8FDB\u884C\u67E5\u8BE2\u6BD4\u8F83\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u4E2A\u6BD4\u8F83\u7684\u57FA\u51C6\u5B57\u6BB5\u53EF\u4EE5\u662F\u4EFB\u4F55\u4F60\u60F3\u8981\u7684\u6709\u5E8F\u7684\u5B57\u6BB5\uFF0C\u6BD4\u5982\u65F6\u95F4\u6233\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//Page <span class="token number">1</span>
db.users.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
//Find the <span class="token function">id</span> of the last document <span class="token keyword">in</span> this page
last_id <span class="token operator">=</span> <span class="token punctuation">..</span>.
 
//Page <span class="token number">2</span>
<span class="token function">users</span> <span class="token operator">=</span> db.users.find<span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&#39;_id&#39;</span> :<span class="token punctuation">{</span> <span class="token string">&quot;<span class="token variable">$gt</span>&quot;</span> :ObjectId<span class="token punctuation">(</span><span class="token string">&quot;5b16c194666cd10add402c87&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>.limit<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
//Update the last <span class="token function">id</span> with the <span class="token function">id</span> of the last document <span class="token keyword">in</span> this page
last_id <span class="token operator">=</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u663E\u7136\uFF0C\u7B2C\u4E00\u9875\u548C\u540E\u9762\u7684\u4E0D\u540C\u3002\u5BF9\u4E8E\u6784\u5EFA\u5206\u9875API, \u6211\u4EEC\u53EF\u4EE5\u8981\u6C42\u7528\u6237\u5FC5\u987B\u4F20\u9012pageSize, lastId\u3002</p><ul><li>pageSize \u9875\u9762\u5927\u5C0F</li><li>lastId \u4E0A\u4E00\u9875\u7684\u6700\u540E\u4E00\u6761\u8BB0\u5F55\u7684id\uFF0C\u5982\u679C\u4E0D\u4F20\uFF0C\u5219\u5C06\u5F3A\u5236\u4E3A\u7B2C\u4E00\u9875</li></ul><h3 id="_2-2-\u89E3\u51B3\u65B9\u68482-\u901A\u8FC7\u6E38\u6807\u6765\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-2-\u89E3\u51B3\u65B9\u68482-\u901A\u8FC7\u6E38\u6807\u6765\u67E5\u8BE2" aria-hidden="true">#</a> 2.2 \u89E3\u51B3\u65B9\u68482\uFF1A\u901A\u8FC7\u6E38\u6807\u6765\u67E5\u8BE2</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token class-name">FindIterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> findIterable <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span>mongoTemplate<span class="token punctuation">.</span><span class="token function">getCollectionName</span><span class="token punctuation">(</span>tClass<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">noCursorTimeout</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">batchSize</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MongoCursor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> cursor <span class="token operator">=</span> findIterable<span class="token punctuation">.</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u4F18\u5316\u6210\u679C" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4F18\u5316\u6210\u679C" aria-hidden="true">#</a> 2.3 \u4F18\u5316\u6210\u679C</h3><p>\u6700\u7EC8\u6211\u91C7\u7528\u6E38\u6807\u7684\u65B9\u5F0F\u6765\u67E5\u8BE2\uFF0C\u5728\u505A\u6570\u636E\u6E05\u7406\u7684\u65F6\u5019\uFF0C\u975E\u5E38\u7A33\u5B9A\uFF0C\u4E0D\u4F1A\u968F\u7740\u6DF1\u5EA6\u589E\u52A0\u800C\u8D8A\u6765\u8D8A\u6162\uFF0C\u82B1\u8D399\u5C0F\u65F6\u5DE6\u53F3\u5B8C\u6210\u540C\u6B65</p><h2 id="_3-oom\u5F15\u53D1-\u901A\u8FC7\u591A\u7EBF\u7A0B\u6765\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_3-oom\u5F15\u53D1-\u901A\u8FC7\u591A\u7EBF\u7A0B\u6765\u4F18\u5316" aria-hidden="true">#</a> 3. OOM\u5F15\u53D1\uFF1A\u901A\u8FC7\u591A\u7EBF\u7A0B\u6765\u4F18\u5316</h2><p>\u82B1\u8D399\u4E2A\u5C0F\u65F6\u8FD8\u662F\u592A\u4E45\u4E86\uFF0C\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u6D6A\u8D39\u5728\u6570\u636E\u6E05\u7406\u548C\u4E0A\u4F20\u5230solr \u4E0A\u3002\u6211\u4EEC\u5E0C\u671B\u901A\u8FC7\u591A\u7EBF\u7A0B\u6765\u4F18\u5316</p><p>\u4F46\u6539\u6210\u591A\u7EBF\u7A0B\u7248\u672C\u540E\u53D1\u73B0OOM \u4E86</p><h3 id="_3-1-oom-gc-overhead-limit-exceeded" tabindex="-1"><a class="header-anchor" href="#_3-1-oom-gc-overhead-limit-exceeded" aria-hidden="true">#</a> 3.1 OOM: GC overhead limit exceeded</h3><p>\u6211\u4EEC\u77E5\u9053 OOM: GC overhead limit exceeded \uFF0C\u610F\u5473\u7740\u8D85\u8FC798%\u7684\u65F6\u95F4\u7528\u6765\u505AGC\u5E76\u4E14\u56DE\u6536\u4E86\u4E0D\u52302%\u7684\u5806\u5185\u5B58</p><blockquote><p>\u5E76\u884C/\u5E76\u53D1\u56DE\u6536\u5668\u5728GC\u56DE\u6536\u65F6\u95F4\u8FC7\u957F\u65F6\u4F1A\u629B\u51FAOutOfMemroyError\u3002\u8FC7\u957F\u7684\u5B9A\u4E49\u662F\uFF0C\u8D85\u8FC798%\u7684\u65F6\u95F4\u7528\u6765\u505AGC\u5E76\u4E14\u56DE\u6536\u4E86\u4E0D\u52302%\u7684\u5806\u5185\u5B58\u3002\u7528\u6765\u907F\u514D\u5185\u5B58\u8FC7\u5C0F\u9020\u6210\u5E94\u7528\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002</p></blockquote><p>\u6211\u4EEC\u67E5\u770Bgc\u65E5\u5FD7\u5206\u6790\uFF0C\u540E\u671Fgc\u7279\u522B\u9891\u7E41</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220729133633739.png" alt="image-20220729133633739"></p><h3 id="_3-2-\u67E5\u770B-gc-roots-\u5F15\u7528\u94FE" tabindex="-1"><a class="header-anchor" href="#_3-2-\u67E5\u770B-gc-roots-\u5F15\u7528\u94FE" aria-hidden="true">#</a> 3.2 \u67E5\u770B GC-Roots \u5F15\u7528\u94FE</h3><p>\u6211\u4EEC\u77E5\u9053OOM \u5806\u5185\u5B58\u6EA2\u51FA\uFF0C\u4E3B\u8981\u56E0\u4E3A Java \u5806\u4E2D\u4E0D\u65AD\u7684\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5E76\u4E14 <code>GC-Roots</code> \u5230\u5BF9\u8C61\u4E4B\u95F4\u5B58\u5728\u5F15\u7528\u94FE\uFF0C\u8FD9\u6837 <code>JVM</code> \u5C31\u4E0D\u4F1A\u56DE\u6536\u5BF9\u8C61\u3002\u624D\u5BFC\u81F4\u5185\u5B58\u6EA2\u51FA</p><p>\u6211\u4EEC\u67E5\u770B GC-Roots \u5F15\u7528\u94FE \uFF0C\u67E5\u770B\u5BF9\u8C61\u548C <code>GC-Roots</code> \u662F\u5982\u4F55\u8FDB\u884C\u5173\u8054\u7684\uFF0C\u662F\u5426\u5B58\u5728\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F\u8FC7\u957F\u7B49\u95EE\u9898</p><p>\u6211\u4EEC\u4F7F\u7528JProfiler \u53EF\u4EE5\u770B\u5230 \u5806\u4E2D\u5B58\u5728\u5927\u91CF\u6211\u4EEC\u722C\u53D6\u7684\u7F51\u9875\u5185\u5BB9\uFF0C\u5E76\u4E14\u8FDC\u8D85\u7684\u6211\u4EEC\u7684\u5806\u5185\u5B58\u8303\u56F4</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220827140237927.png" alt="image-20220827140237927"></p><h3 id="_3-3-\u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801-\u67E5\u627E\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801-\u67E5\u627E\u539F\u56E0" aria-hidden="true">#</a> 3.3 \u5206\u6790\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u67E5\u627E\u539F\u56E0</h3><p>\u901A\u8FC7gcroot \u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u662F\u7684\u5BF9\u8C61\u65E0\u6CD5\u56DE\u6536\u3002</p><p>\u6211\u4EEC350w\u7684\u7F51\u9875\u5185\u5BB9\u76F4\u63A5\u653E\u5230\u5806\u4E2D\u5904\u7406\uFF0C\u80AF\u5B9A\u4F1A\u5B58\u5728OOM\u3002\u4F46\u6211\u4EEC\u4F7F\u7528\u4E86\u7EBF\u7A0B\u6C60\uFF0C\u7EBF\u7A0B\u6C60\u4E2D\u5E26\u6709\u963B\u585E\u961F\u5217\uFF0C\u6309\u7406\u5E94\u8BE5\u4F1A\u963B\u585E\u624D\u5BF9\u3002\u6D88\u8D39\u5B8C\u624D\u80FD\u518D\u751F\u4EA7\uFF0C\u73B0\u5728\u4E0D\u751F\u6548\u80AF\u5B9A\u662F\u7EBF\u7A0B\u6C60\u7684\u95EE\u9898</p><p>\u901A\u8FC7\u6392\u67E5\u53D1\u73B0\uFF0C\u6211\u4EEC\u7528spring bean \u5F15\u7684\u5168\u5C40\u7EBF\u7A0B\u6C60\uFF0C\u4ED6\u7684\u963B\u585E\u961F\u5217\u5E76\u6CA1\u6709\u8BBE\u7F6E\u62D2\u7EDD\u7B56\u7565\uFF0C\u91C7\u7528\u4E86\u9ED8\u8BA4\u7684\u62D2\u7EDD\u7B56\u7565</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6784\u5EFA\u4E00\u4E2A10\u6838\u5FC3\u7EBF\u7A0B\uFF0C20\u6700\u5927\u7EBF\u7A0B\uFF0C\u6700\u5927\u961F\u5217\u4E3A1000</span>
<span class="token class-name">ThreadPoolExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u9ED8\u8BA4\u7684\u62D2\u7EDD\u7B56\u7565\u662FThreadPoolExecutor.AbortPolicy:\u4E22\u5F03\u4EFB\u52A1\u5E76\u629B\u51FARejectedExecutionException\u5F02\u5E38</p></blockquote><p>\u6211\u4EEC\u52A0\u4E0A\u4E86\u62D2\u7EDD\u7B56\u7565,<strong>ThreadPoolExecutor.CallerRunsPolicy\uFF1A\u7531\u8C03\u7528\u7EBF\u7A0B\u5904\u7406\u8BE5\u4EFB\u52A1 \u3002</strong></p><blockquote><p>ps: <strong>\u52A0\u4E86CallerRunsPolicy \u963B\u585E\u961F\u5217\u624D\u80FD\u53D1\u6325\u963B\u585E\u4F5C\u7528</strong>\u3002</p></blockquote><h3 id="_3-4-\u4F18\u5316\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_3-4-\u4F18\u5316\u6210\u529F" aria-hidden="true">#</a> 3.4 \u4F18\u5316\u6210\u529F</h3><p>\u6211\u4EEC\u52A0\u5165\u62D2\u7EDD\u7B56\u7565\u540E\uFF0C\u963B\u585E\u961F\u5217\u4EA7\u751F\u4E86\u6548\u679C\u3002\u4EA7\u751F\u548C\u6D88\u8D39\u5904\u4E8E\u5E73\u8861\u72B6\u6001\uFF0C\u751F\u4EA7\u4E00\u6279\uFF0C\u6D88\u8D39\u4E00\u6279\u3002\u5185\u5B58\u7A33\u5B9A\u3002\u6700\u7EC8\u82B1\u8D393\u5C0F\u65F6\u5B8C\u6210\u4E86\u6570\u636E\u6E05\u7406\u5DE5\u4F5C</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,41),r={href:"https://www.cnblogs.com/woshimrf/p/mongodb-pagenation-performance.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=i("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[o("MongoDB\u5206\u9875\u7684Java\u5B9E\u73B0\u548C\u5206\u9875\u9700\u6C42\u7684\u601D\u8003"),p(a)])])])}const g=s(l,[["render",d],["__file","online-oom-thread-oom2.html.vue"]]);export{g as default};
