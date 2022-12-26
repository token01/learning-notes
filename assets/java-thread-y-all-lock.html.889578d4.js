import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as o,f as c,r as i}from"./app.605999cc.js";const l={},u=c(`<h1 id="java\u5E76\u53D1-java\u4E2D\u6240\u6709\u7684\u9501" tabindex="-1"><a class="header-anchor" href="#java\u5E76\u53D1-java\u4E2D\u6240\u6709\u7684\u9501" aria-hidden="true">#</a> Java\u5E76\u53D1 - Java\u4E2D\u6240\u6709\u7684\u9501</h1><h2 id="_0-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_0-\u7B80\u4ECB" aria-hidden="true">#</a> 0. \u7B80\u4ECB</h2><p>Java\u63D0\u4F9B\u4E86\u79CD\u7C7B\u4E30\u5BCC\u7684\u9501\uFF0C\u6BCF\u79CD\u9501\u56E0\u5176\u7279\u6027\u7684\u4E0D\u540C\uFF0C\u5728\u9002\u5F53\u7684\u573A\u666F\u4E0B\u80FD\u591F\u5C55\u73B0\u51FA\u975E\u5E38\u9AD8\u7684\u6548\u7387\u3002\u672C\u6587\u65E8\u5728\u5BF9\u9501\u76F8\u5173\u6E90\u7801\uFF08\u672C\u6587\u4E2D\u7684\u6E90\u7801\u6765\u81EAJDK 8\u548CNetty 3.10.6\uFF09\u3001\u4F7F\u7528\u573A\u666F\u8FDB\u884C\u4E3E\u4F8B\uFF0C\u4E3A\u8BFB\u8005\u4ECB\u7ECD\u4E3B\u6D41\u9501\u7684\u77E5\u8BC6\u70B9\uFF0C\u4EE5\u53CA\u4E0D\u540C\u7684\u9501\u7684\u9002\u7528\u573A\u666F\u3002</p><p>Java\u4E2D\u5F80\u5F80\u662F\u6309\u7167\u662F\u5426\u542B\u6709\u67D0\u4E00\u7279\u6027\u6765\u5B9A\u4E49\u9501\uFF0C\u6211\u4EEC\u901A\u8FC7\u7279\u6027\u5C06\u9501\u8FDB\u884C\u5206\u7EC4\u5F52\u7C7B\uFF0C\u518D\u4F7F\u7528\u5BF9\u6BD4\u7684\u65B9\u5F0F\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u5E2E\u52A9\u5927\u5BB6\u66F4\u5FEB\u6377\u7684\u7406\u89E3\u76F8\u5173\u77E5\u8BC6\u3002\u4E0B\u9762\u7ED9\u51FA\u672C\u6587\u5185\u5BB9\u7684\u603B\u4F53\u5206\u7C7B\u76EE\u5F55\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525212721156.png" alt="image-20220525212721156"></p><h2 id="_1-\u4E50\u89C2\u9501-vs-\u60B2\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#_1-\u4E50\u89C2\u9501-vs-\u60B2\u89C2\u9501" aria-hidden="true">#</a> 1. \u4E50\u89C2\u9501 VS \u60B2\u89C2\u9501</h2><blockquote><p>\u4E50\u89C2\u9501\u4E0E\u60B2\u89C2\u9501\u662F\u4E00\u79CD\u5E7F\u4E49\u4E0A\u7684\u6982\u5FF5\uFF0C\u4F53\u73B0\u4E86\u770B\u5F85\u7EBF\u7A0B\u540C\u6B65\u7684\u4E0D\u540C\u89D2\u5EA6\u3002\u5728Java\u548C\u6570\u636E\u5E93\u4E2D\u90FD\u6709\u6B64\u6982\u5FF5\u5BF9\u5E94\u7684\u5B9E\u9645\u5E94\u7528\u3002</p></blockquote><p>\u5148\u8BF4\u6982\u5FF5\u3002\u5BF9\u4E8E\u540C\u4E00\u4E2A\u6570\u636E\u7684\u5E76\u53D1\u64CD\u4F5C\uFF0C\u60B2\u89C2\u9501\u8BA4\u4E3A\u81EA\u5DF1\u5728\u4F7F\u7528\u6570\u636E\u7684\u65F6\u5019\u4E00\u5B9A\u6709\u522B\u7684\u7EBF\u7A0B\u6765\u4FEE\u6539\u6570\u636E\uFF0C\u56E0\u6B64\u5728\u83B7\u53D6\u6570\u636E\u7684\u65F6\u5019\u4F1A\u5148\u52A0\u9501\uFF0C\u786E\u4FDD\u6570\u636E\u4E0D\u4F1A\u88AB\u522B\u7684\u7EBF\u7A0B\u4FEE\u6539\u3002Java\u4E2D\uFF0Csynchronized\u5173\u952E\u5B57\u548CLock\u7684\u5B9E\u73B0\u7C7B\u90FD\u662F\u60B2\u89C2\u9501\u3002</p><p>\u800C\u4E50\u89C2\u9501\u8BA4\u4E3A\u81EA\u5DF1\u5728\u4F7F\u7528\u6570\u636E\u65F6\u4E0D\u4F1A\u6709\u522B\u7684\u7EBF\u7A0B\u4FEE\u6539\u6570\u636E\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u6DFB\u52A0\u9501\uFF0C\u53EA\u662F\u5728\u66F4\u65B0\u6570\u636E\u7684\u65F6\u5019\u53BB\u5224\u65AD\u4E4B\u524D\u6709\u6CA1\u6709\u522B\u7684\u7EBF\u7A0B\u66F4\u65B0\u4E86\u8FD9\u4E2A\u6570\u636E\u3002\u5982\u679C\u8FD9\u4E2A\u6570\u636E\u6CA1\u6709\u88AB\u66F4\u65B0\uFF0C\u5F53\u524D\u7EBF\u7A0B\u5C06\u81EA\u5DF1\u4FEE\u6539\u7684\u6570\u636E\u6210\u529F\u5199\u5165\u3002\u5982\u679C\u6570\u636E\u5DF2\u7ECF\u88AB\u5176\u4ED6\u7EBF\u7A0B\u66F4\u65B0\uFF0C\u5219\u6839\u636E\u4E0D\u540C\u7684\u5B9E\u73B0\u65B9\u5F0F\u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\uFF08\u4F8B\u5982\u62A5\u9519\u6216\u8005\u81EA\u52A8\u91CD\u8BD5\uFF09\u3002</p><p>\u4E50\u89C2\u9501\u5728Java\u4E2D\u662F\u901A\u8FC7\u4F7F\u7528\u65E0\u9501\u7F16\u7A0B\u6765\u5B9E\u73B0\uFF0C\u6700\u5E38\u91C7\u7528\u7684\u662FCAS\u7B97\u6CD5\uFF0CJava\u539F\u5B50\u7C7B\u4E2D\u7684\u9012\u589E\u64CD\u4F5C\u5C31\u901A\u8FC7CAS\u81EA\u65CB\u5B9E\u73B0\u7684\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525212947017.png" alt="image-20220525212947017"></p><p>\u6839\u636E\u4ECE\u4E0A\u9762\u7684\u6982\u5FF5\u63CF\u8FF0\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF1A</p><ul><li><strong>\u60B2\u89C2\u9501\u9002\u5408\u5199\u64CD\u4F5C\u591A\u7684\u573A\u666F</strong>\uFF0C\u5148\u52A0\u9501\u53EF\u4EE5\u4FDD\u8BC1\u5199\u64CD\u4F5C\u65F6\u6570\u636E\u6B63\u786E\u3002</li><li><strong>\u4E50\u89C2\u9501\u9002\u5408\u8BFB\u64CD\u4F5C\u591A\u7684\u573A\u666F</strong>\uFF0C\u4E0D\u52A0\u9501\u7684\u7279\u70B9\u80FD\u591F\u4F7F\u5176\u8BFB\u64CD\u4F5C\u7684\u6027\u80FD\u5927\u5E45\u63D0\u5347\u3002</li></ul><p>\u5149\u8BF4\u6982\u5FF5\u6709\u4E9B\u62BD\u8C61\uFF0C\u6211\u4EEC\u6765\u770B\u4E0B\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u8C03\u7528\u65B9\u5F0F\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// ------------------------- \u60B2\u89C2\u9501\u7684\u8C03\u7528\u65B9\u5F0F -------------------------</span>
<span class="token comment">// synchronized</span>
<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">testMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u64CD\u4F5C\u540C\u6B65\u8D44\u6E90</span>
<span class="token punctuation">}</span>
<span class="token comment">// ReentrantLock</span>
<span class="token keyword">private</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u4FDD\u8BC1\u591A\u4E2A\u7EBF\u7A0B\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A\u9501</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">modifyPublicResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u64CD\u4F5C\u540C\u6B65\u8D44\u6E90</span>
	lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ------------------------- \u4E50\u89C2\u9501\u7684\u8C03\u7528\u65B9\u5F0F -------------------------</span>
<span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> atomicInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u9700\u8981\u4FDD\u8BC1\u591A\u4E2A\u7EBF\u7A0B\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2AAtomicInteger</span>
atomicInteger<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6267\u884C\u81EA\u589E1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8C03\u7528\u65B9\u5F0F\u793A\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u60B2\u89C2\u9501\u57FA\u672C\u90FD\u662F\u5728\u663E\u5F0F\u7684\u9501\u5B9A\u4E4B\u540E\u518D\u64CD\u4F5C\u540C\u6B65\u8D44\u6E90\uFF0C\u800C\u4E50\u89C2\u9501\u5219\u76F4\u63A5\u53BB\u64CD\u4F5C\u540C\u6B65\u8D44\u6E90\u3002</p><h2 id="_2-\u81EA\u65CB\u9501-vs-\u9002\u5E94\u6027\u81EA\u65CB\u9501" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u65CB\u9501-vs-\u9002\u5E94\u6027\u81EA\u65CB\u9501" aria-hidden="true">#</a> 2. \u81EA\u65CB\u9501 VS \u9002\u5E94\u6027\u81EA\u65CB\u9501</h2><blockquote><p>\u5728\u4ECB\u7ECD\u81EA\u65CB\u9501\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u4ECB\u7ECD\u4E00\u4E9B\u524D\u63D0\u77E5\u8BC6\u6765\u5E2E\u52A9\u5927\u5BB6\u660E\u767D\u81EA\u65CB\u9501\u7684\u6982\u5FF5\u3002</p></blockquote><p><strong>\u963B\u585E\u6216\u5524\u9192\u4E00\u4E2AJava\u7EBF\u7A0B\u9700\u8981\u64CD\u4F5C\u7CFB\u7EDF\u5207\u6362CPU\u72B6\u6001\u6765\u5B8C\u6210</strong>\uFF0C\u8FD9\u79CD\u72B6\u6001\u8F6C\u6362\u9700\u8981\u8017\u8D39\u5904\u7406\u5668\u65F6\u95F4\u3002\u5982\u679C\u540C\u6B65\u4EE3\u7801\u5757\u4E2D\u7684\u5185\u5BB9\u8FC7\u4E8E\u7B80\u5355\uFF0C\u72B6\u6001\u8F6C\u6362\u6D88\u8017\u7684\u65F6\u95F4\u6709\u53EF\u80FD\u6BD4\u7528\u6237\u4EE3\u7801\u6267\u884C\u7684\u65F6\u95F4\u8FD8\u8981\u957F\u3002</p><p>\u5728\u8BB8\u591A\u573A\u666F\u4E2D\uFF0C\u540C\u6B65\u8D44\u6E90\u7684\u9501\u5B9A\u65F6\u95F4\u5F88\u77ED\uFF0C\u4E3A\u4E86\u8FD9\u4E00\u5C0F\u6BB5\u65F6\u95F4\u53BB\u5207\u6362\u7EBF\u7A0B\uFF0C\u7EBF\u7A0B\u6302\u8D77\u548C\u6062\u590D\u73B0\u573A\u7684\u82B1\u8D39\u53EF\u80FD\u4F1A\u8BA9\u7CFB\u7EDF\u5F97\u4E0D\u507F\u5931\u3002\u5982\u679C\u7269\u7406\u673A\u5668\u6709\u591A\u4E2A\u5904\u7406\u5668\uFF0C\u80FD\u591F\u8BA9\u4E24\u4E2A\u6216\u4EE5\u4E0A\u7684\u7EBF\u7A0B\u540C\u65F6\u5E76\u884C\u6267\u884C\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u8BA9\u540E\u9762\u90A3\u4E2A\u8BF7\u6C42\u9501\u7684\u7EBF\u7A0B\u4E0D\u653E\u5F03CPU\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u770B\u770B\u6301\u6709\u9501\u7684\u7EBF\u7A0B\u662F\u5426\u5F88\u5FEB\u5C31\u4F1A\u91CA\u653E\u9501\u3002</p><p>\u800C\u4E3A\u4E86\u8BA9\u5F53\u524D\u7EBF\u7A0B\u201C\u7A0D\u7B49\u4E00\u4E0B\u201D\uFF0C\u6211\u4EEC\u9700\u8BA9\u5F53\u524D\u7EBF\u7A0B\u8FDB\u884C\u81EA\u65CB\uFF0C\u5982\u679C\u5728\u81EA\u65CB\u5B8C\u6210\u540E\u524D\u9762\u9501\u5B9A\u540C\u6B65\u8D44\u6E90\u7684\u7EBF\u7A0B\u5DF2\u7ECF\u91CA\u653E\u4E86\u9501\uFF0C\u90A3\u4E48\u5F53\u524D\u7EBF\u7A0B\u5C31\u53EF\u4EE5\u4E0D\u5FC5\u963B\u585E\u800C\u662F\u76F4\u63A5\u83B7\u53D6\u540C\u6B65\u8D44\u6E90\uFF0C\u4ECE\u800C\u907F\u514D\u5207\u6362\u7EBF\u7A0B\u7684\u5F00\u9500\u3002\u8FD9\u5C31\u662F\u81EA\u65CB\u9501\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525213859276.png" alt="image-20220525213859276"></p><p>\u81EA\u65CB\u9501\u672C\u8EAB\u662F\u6709\u7F3A\u70B9\u7684\uFF0C\u5B83\u4E0D\u80FD\u4EE3\u66FF\u963B\u585E\u3002\u81EA\u65CB\u7B49\u5F85\u867D\u7136\u907F\u514D\u4E86\u7EBF\u7A0B\u5207\u6362\u7684\u5F00\u9500\uFF0C\u4F46\u5B83\u8981\u5360\u7528\u5904\u7406\u5668\u65F6\u95F4\u3002\u5982\u679C\u9501\u88AB\u5360\u7528\u7684\u65F6\u95F4\u5F88\u77ED\uFF0C\u81EA\u65CB\u7B49\u5F85\u7684\u6548\u679C\u5C31\u4F1A\u975E\u5E38\u597D\u3002\u53CD\u4E4B\uFF0C\u5982\u679C\u9501\u88AB\u5360\u7528\u7684\u65F6\u95F4\u5F88\u957F\uFF0C\u90A3\u4E48\u81EA\u65CB\u7684\u7EBF\u7A0B\u53EA\u4F1A\u767D\u6D6A\u8D39\u5904\u7406\u5668\u8D44\u6E90\u3002\u6240\u4EE5\uFF0C\u81EA\u65CB\u7B49\u5F85\u7684\u65F6\u95F4\u5FC5\u987B\u8981\u6709\u4E00\u5B9A\u7684\u9650\u5EA6\uFF0C\u5982\u679C\u81EA\u65CB\u8D85\u8FC7\u4E86\u9650\u5B9A\u6B21\u6570\uFF08\u9ED8\u8BA4\u662F10\u6B21\uFF0C\u53EF\u4EE5\u4F7F\u7528-XX:PreBlockSpin\u6765\u66F4\u6539\uFF09\u6CA1\u6709\u6210\u529F\u83B7\u5F97\u9501\uFF0C\u5C31\u5E94\u5F53\u6302\u8D77\u7EBF\u7A0B\u3002</p><p>\u81EA\u65CB\u9501\u7684\u5B9E\u73B0\u539F\u7406\u540C\u6837\u4E5F\u662FCAS\uFF0CAtomicInteger\u4E2D\u8C03\u7528unsafe\u8FDB\u884C\u81EA\u589E\u64CD\u4F5C\u7684\u6E90\u7801\u4E2D\u7684do-while\u5FAA\u73AF\u5C31\u662F\u4E00\u4E2A\u81EA\u65CB\u64CD\u4F5C\uFF0C\u5982\u679C\u4FEE\u6539\u6570\u503C\u5931\u8D25\u5219\u901A\u8FC7\u5FAA\u73AF\u6765\u6267\u884C\u81EA\u65CB\uFF0C\u76F4\u81F3\u4FEE\u6539\u6210\u529F\u3002</p><h2 id="_3-\u65E0\u9501-vs-\u504F\u5411\u9501-vs-\u8F7B\u91CF\u7EA7\u9501-vs-\u91CD\u91CF\u7EA7\u9501" tabindex="-1"><a class="header-anchor" href="#_3-\u65E0\u9501-vs-\u504F\u5411\u9501-vs-\u8F7B\u91CF\u7EA7\u9501-vs-\u91CD\u91CF\u7EA7\u9501" aria-hidden="true">#</a> 3. \u65E0\u9501 VS \u504F\u5411\u9501 VS \u8F7B\u91CF\u7EA7\u9501 VS \u91CD\u91CF\u7EA7\u9501</h2><blockquote><p>\u8FD9\u56DB\u79CD\u9501\u662F\u6307\u9501\u7684\u72B6\u6001\uFF0C\u4E13\u95E8\u9488\u5BF9synchronized\u7684\u3002\u5728\u4ECB\u7ECD\u8FD9\u56DB\u79CD\u9501\u72B6\u6001\u4E4B\u524D\u8FD8\u9700\u8981\u4ECB\u7ECD\u4E00\u4E9B\u989D\u5916\u7684\u77E5\u8BC6\u3002</p></blockquote><p>\u603B\u7ED3\u800C\u8A00\uFF1A \u504F\u5411\u9501\u901A\u8FC7\u5BF9\u6BD4Mark Word\u89E3\u51B3\u52A0\u9501\u95EE\u9898\uFF0C\u907F\u514D\u6267\u884CCAS\u64CD\u4F5C\u3002\u800C\u8F7B\u91CF\u7EA7\u9501\u662F\u901A\u8FC7\u7528CAS\u64CD\u4F5C\u548C\u81EA\u65CB\u6765\u89E3\u51B3\u52A0\u9501\u95EE\u9898\uFF0C\u907F\u514D\u7EBF\u7A0B\u963B\u585E\u548C\u5524\u9192\u800C\u5F71\u54CD\u6027\u80FD\u3002\u91CD\u91CF\u7EA7\u9501\u662F\u5C06\u9664\u4E86\u62E5\u6709\u9501\u7684\u7EBF\u7A0B\u4EE5\u5916\u7684\u7EBF\u7A0B\u90FD\u963B\u585E\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525214145459.png" alt="image-20220525214145459"></p><h2 id="_4-\u516C\u5E73\u9501-vs-\u975E\u516C\u5E73\u9501" tabindex="-1"><a class="header-anchor" href="#_4-\u516C\u5E73\u9501-vs-\u975E\u516C\u5E73\u9501" aria-hidden="true">#</a> 4. \u516C\u5E73\u9501 VS \u975E\u516C\u5E73\u9501</h2><p>\u516C\u5E73\u9501\u662F\u6307\u591A\u4E2A\u7EBF\u7A0B\u6309\u7167\u7533\u8BF7\u9501\u7684\u987A\u5E8F\u6765\u83B7\u53D6\u9501\uFF0C\u7EBF\u7A0B\u76F4\u63A5\u8FDB\u5165\u961F\u5217\u4E2D\u6392\u961F\uFF0C\u961F\u5217\u4E2D\u7684\u7B2C\u4E00\u4E2A\u7EBF\u7A0B\u624D\u80FD\u83B7\u5F97\u9501\u3002\u516C\u5E73\u9501\u7684\u4F18\u70B9\u662F\u7B49\u5F85\u9501\u7684\u7EBF\u7A0B\u4E0D\u4F1A\u997F\u6B7B\u3002\u7F3A\u70B9\u662F\u6574\u4F53\u541E\u5410\u6548\u7387\u76F8\u5BF9\u975E\u516C\u5E73\u9501\u8981\u4F4E\uFF0C\u7B49\u5F85\u961F\u5217\u4E2D\u9664\u7B2C\u4E00\u4E2A\u7EBF\u7A0B\u4EE5\u5916\u7684\u6240\u6709\u7EBF\u7A0B\u90FD\u4F1A\u963B\u585E\uFF0CCPU\u5524\u9192\u963B\u585E\u7EBF\u7A0B\u7684\u5F00\u9500\u6BD4\u975E\u516C\u5E73\u9501\u5927\u3002</p><p>\u975E\u516C\u5E73\u9501\u662F\u591A\u4E2A\u7EBF\u7A0B\u52A0\u9501\u65F6\u76F4\u63A5\u5C1D\u8BD5\u83B7\u53D6\u9501\uFF0C\u83B7\u53D6\u4E0D\u5230\u624D\u4F1A\u5230\u7B49\u5F85\u961F\u5217\u7684\u961F\u5C3E\u7B49\u5F85\u3002\u4F46\u5982\u679C\u6B64\u65F6\u9501\u521A\u597D\u53EF\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u65E0\u9700\u963B\u585E\u76F4\u63A5\u83B7\u53D6\u5230\u9501\uFF0C\u6240\u4EE5\u975E\u516C\u5E73\u9501\u6709\u53EF\u80FD\u51FA\u73B0\u540E\u7533\u8BF7\u9501\u7684\u7EBF\u7A0B\u5148\u83B7\u53D6\u9501\u7684\u573A\u666F\u3002\u975E\u516C\u5E73\u9501\u7684\u4F18\u70B9\u662F\u53EF\u4EE5\u51CF\u5C11\u5524\u8D77\u7EBF\u7A0B\u7684\u5F00\u9500\uFF0C\u6574\u4F53\u7684\u541E\u5410\u6548\u7387\u9AD8\uFF0C\u56E0\u4E3A\u7EBF\u7A0B\u6709\u51E0\u7387\u4E0D\u963B\u585E\u76F4\u63A5\u83B7\u5F97\u9501\uFF0CCPU\u4E0D\u5FC5\u5524\u9192\u6240\u6709\u7EBF\u7A0B\u3002\u7F3A\u70B9\u662F\u5904\u4E8E\u7B49\u5F85\u961F\u5217\u4E2D\u7684\u7EBF\u7A0B\u53EF\u80FD\u4F1A\u997F\u6B7B\uFF0C\u6216\u8005\u7B49\u5F88\u4E45\u624D\u4F1A\u83B7\u5F97\u9501\u3002</p><p>\u76F4\u63A5\u7528\u8BED\u8A00\u63CF\u8FF0\u53EF\u80FD\u6709\u70B9\u62BD\u8C61\uFF0C\u8FD9\u91CC\u4F5C\u8005\u7528\u4ECE\u522B\u5904\u770B\u5230\u7684\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BB2\u8FF0\u4E00\u4E0B\u516C\u5E73\u9501\u548C\u975E\u516C\u5E73\u9501\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525214407781.png" alt="image-20220525214407781"></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5047\u8BBE\u6709\u4E00\u53E3\u6C34\u4E95\uFF0C\u6709\u7BA1\u7406\u5458\u770B\u5B88\uFF0C\u7BA1\u7406\u5458\u6709\u4E00\u628A\u9501\uFF0C\u53EA\u6709\u62FF\u5230\u9501\u7684\u4EBA\u624D\u80FD\u591F\u6253\u6C34\uFF0C\u6253\u5B8C\u6C34\u8981\u628A\u9501\u8FD8\u7ED9\u7BA1\u7406\u5458\u3002\u6BCF\u4E2A\u8FC7\u6765\u6253\u6C34\u7684\u4EBA\u90FD\u8981\u7BA1\u7406\u5458\u7684\u5141\u8BB8\u5E76\u62FF\u5230\u9501\u4E4B\u540E\u624D\u80FD\u53BB\u6253\u6C34\uFF0C\u5982\u679C\u524D\u9762\u6709\u4EBA\u6B63\u5728\u6253\u6C34\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u60F3\u8981\u6253\u6C34\u7684\u4EBA\u5C31\u5FC5\u987B\u6392\u961F\u3002\u7BA1\u7406\u5458\u4F1A\u67E5\u770B\u4E0B\u4E00\u4E2A\u8981\u53BB\u6253\u6C34\u7684\u4EBA\u662F\u4E0D\u662F\u961F\u4F0D\u91CC\u6392\u6700\u524D\u9762\u7684\u4EBA\uFF0C\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u624D\u4F1A\u7ED9\u4F60\u9501\u8BA9\u4F60\u53BB\u6253\u6C34\uFF1B\u5982\u679C\u4F60\u4E0D\u662F\u6392\u7B2C\u4E00\u7684\u4EBA\uFF0C\u5C31\u5FC5\u987B\u53BB\u961F\u5C3E\u6392\u961F\uFF0C\u8FD9\u5C31\u662F\u516C\u5E73\u9501\u3002</p><p>\u4F46\u662F\u5BF9\u4E8E\u975E\u516C\u5E73\u9501\uFF0C\u7BA1\u7406\u5458\u5BF9\u6253\u6C34\u7684\u4EBA\u6CA1\u6709\u8981\u6C42\u3002\u5373\u4F7F\u7B49\u5F85\u961F\u4F0D\u91CC\u6709\u6392\u961F\u7B49\u5F85\u7684\u4EBA\uFF0C\u4F46\u5982\u679C\u5728\u4E0A\u4E00\u4E2A\u4EBA\u521A\u6253\u5B8C\u6C34\u628A\u9501\u8FD8\u7ED9\u7BA1\u7406\u5458\u800C\u4E14\u7BA1\u7406\u5458\u8FD8\u6CA1\u6709\u5141\u8BB8\u7B49\u5F85\u961F\u4F0D\u91CC\u4E0B\u4E00\u4E2A\u4EBA\u53BB\u6253\u6C34\u65F6\uFF0C\u521A\u597D\u6765\u4E86\u4E00\u4E2A\u63D2\u961F\u7684\u4EBA\uFF0C\u8FD9\u4E2A\u63D2\u961F\u7684\u4EBA\u662F\u53EF\u4EE5\u76F4\u63A5\u4ECE\u7BA1\u7406\u5458\u90A3\u91CC\u62FF\u5230\u9501\u53BB\u6253\u6C34\uFF0C\u4E0D\u9700\u8981\u6392\u961F\uFF0C\u539F\u672C\u6392\u961F\u7B49\u5F85\u7684\u4EBA\u53EA\u80FD\u7EE7\u7EED\u7B49\u5F85\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525214702064.png" alt="image-20220525214702064"></p><h2 id="_5-\u53EF\u91CD\u5165\u9501-vs-\u975E\u53EF\u91CD\u5165\u9501" tabindex="-1"><a class="header-anchor" href="#_5-\u53EF\u91CD\u5165\u9501-vs-\u975E\u53EF\u91CD\u5165\u9501" aria-hidden="true">#</a> 5. \u53EF\u91CD\u5165\u9501 VS \u975E\u53EF\u91CD\u5165\u9501</h2><p>\u53EF\u91CD\u5165\u9501\u53C8\u540D\u9012\u5F52\u9501\uFF0C\u662F\u6307\u5728\u540C\u4E00\u4E2A\u7EBF\u7A0B\u5728\u5916\u5C42\u65B9\u6CD5\u83B7\u53D6\u9501\u7684\u65F6\u5019\uFF0C\u518D\u8FDB\u5165\u8BE5\u7EBF\u7A0B\u7684\u5185\u5C42\u65B9\u6CD5\u4F1A\u81EA\u52A8\u83B7\u53D6\u9501\uFF08\u524D\u63D0\u9501\u5BF9\u8C61\u5F97\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005class\uFF09\uFF0C\u4E0D\u4F1A\u56E0\u4E3A\u4E4B\u524D\u5DF2\u7ECF\u83B7\u53D6\u8FC7\u8FD8\u6CA1\u91CA\u653E\u800C\u963B\u585E\u3002Java\u4E2DReentrantLock\u548Csynchronized\u90FD\u662F\u53EF\u91CD\u5165\u9501\uFF0C\u53EF\u91CD\u5165\u9501\u7684\u4E00\u4E2A\u4F18\u70B9\u662F\u53EF\u4E00\u5B9A\u7A0B\u5EA6\u907F\u514D\u6B7B\u9501\u3002\u4E0B\u9762\u7528\u793A\u4F8B\u4EE3\u7801\u6765\u8FDB\u884C\u5206\u6790\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Widget</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u65B9\u6CD51\u6267\u884C...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">doOthers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">doOthers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u65B9\u6CD52\u6267\u884C...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u7C7B\u4E2D\u7684\u4E24\u4E2A\u65B9\u6CD5\u90FD\u662F\u88AB\u5185\u7F6E\u9501synchronized\u4FEE\u9970\u7684\uFF0CdoSomething()\u65B9\u6CD5\u4E2D\u8C03\u7528doOthers()\u65B9\u6CD5\u3002\u56E0\u4E3A\u5185\u7F6E\u9501\u662F\u53EF\u91CD\u5165\u7684\uFF0C\u6240\u4EE5\u540C\u4E00\u4E2A\u7EBF\u7A0B\u5728\u8C03\u7528doOthers()\u65F6\u53EF\u4EE5\u76F4\u63A5\u83B7\u5F97\u5F53\u524D\u5BF9\u8C61\u7684\u9501\uFF0C\u8FDB\u5165doOthers()\u8FDB\u884C\u64CD\u4F5C\u3002</p><p>\u5982\u679C\u662F\u4E00\u4E2A\u4E0D\u53EF\u91CD\u5165\u9501\uFF0C\u90A3\u4E48\u5F53\u524D\u7EBF\u7A0B\u5728\u8C03\u7528doOthers()\u4E4B\u524D\u9700\u8981\u5C06\u6267\u884CdoSomething()\u65F6\u83B7\u53D6\u5F53\u524D\u5BF9\u8C61\u7684\u9501\u91CA\u653E\u6389\uFF0C\u5B9E\u9645\u4E0A\u8BE5\u5BF9\u8C61\u9501\u5DF2\u88AB\u5F53\u524D\u7EBF\u7A0B\u6240\u6301\u6709\uFF0C\u4E14\u65E0\u6CD5\u91CA\u653E\u3002\u6240\u4EE5\u6B64\u65F6\u4F1A\u51FA\u73B0\u6B7B\u9501\u3002</p><p>\u800C\u4E3A\u4EC0\u4E48\u53EF\u91CD\u5165\u9501\u5C31\u53EF\u4EE5\u5728\u5D4C\u5957\u8C03\u7528\u65F6\u53EF\u4EE5\u81EA\u52A8\u83B7\u5F97\u9501\u5462\uFF1F\u6211\u4EEC\u901A\u8FC7\u56FE\u793A\u548C\u6E90\u7801\u6765\u5206\u522B\u89E3\u6790\u4E00\u4E0B\u3002</p><p>\u8FD8\u662F\u6253\u6C34\u7684\u4F8B\u5B50\uFF0C\u6709\u591A\u4E2A\u4EBA\u5728\u6392\u961F\u6253\u6C34\uFF0C\u6B64\u65F6\u7BA1\u7406\u5458\u5141\u8BB8\u9501\u548C\u540C\u4E00\u4E2A\u4EBA\u7684\u591A\u4E2A\u6C34\u6876\u7ED1\u5B9A\u3002\u8FD9\u4E2A\u4EBA\u7528\u591A\u4E2A\u6C34\u6876\u6253\u6C34\u65F6\uFF0C\u7B2C\u4E00\u4E2A\u6C34\u6876\u548C\u9501\u7ED1\u5B9A\u5E76\u6253\u5B8C\u6C34\u4E4B\u540E\uFF0C\u7B2C\u4E8C\u4E2A\u6C34\u6876\u4E5F\u53EF\u4EE5\u76F4\u63A5\u548C\u9501\u7ED1\u5B9A\u5E76\u5F00\u59CB\u6253\u6C34\uFF0C\u6240\u6709\u7684\u6C34\u6876\u90FD\u6253\u5B8C\u6C34\u4E4B\u540E\u6253\u6C34\u4EBA\u624D\u4F1A\u5C06\u9501\u8FD8\u7ED9\u7BA1\u7406\u5458\u3002\u8FD9\u4E2A\u4EBA\u7684\u6240\u6709\u6253\u6C34\u6D41\u7A0B\u90FD\u80FD\u591F\u6210\u529F\u6267\u884C\uFF0C\u540E\u7EED\u7B49\u5F85\u7684\u4EBA\u4E5F\u80FD\u591F\u6253\u5230\u6C34\u3002\u8FD9\u5C31\u662F\u53EF\u91CD\u5165\u9501\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525214920016.png" alt="image-20220525214920016"></p><p>\u4F46\u5982\u679C\u662F\u975E\u53EF\u91CD\u5165\u9501\u7684\u8BDD\uFF0C\u6B64\u65F6\u7BA1\u7406\u5458\u53EA\u5141\u8BB8\u9501\u548C\u540C\u4E00\u4E2A\u4EBA\u7684\u4E00\u4E2A\u6C34\u6876\u7ED1\u5B9A\u3002\u7B2C\u4E00\u4E2A\u6C34\u6876\u548C\u9501\u7ED1\u5B9A\u6253\u5B8C\u6C34\u4E4B\u540E\u5E76\u4E0D\u4F1A\u91CA\u653E\u9501\uFF0C\u5BFC\u81F4\u7B2C\u4E8C\u4E2A\u6C34\u6876\u4E0D\u80FD\u548C\u9501\u7ED1\u5B9A\u4E5F\u65E0\u6CD5\u6253\u6C34\u3002\u5F53\u524D\u7EBF\u7A0B\u51FA\u73B0\u6B7B\u9501\uFF0C\u6574\u4E2A\u7B49\u5F85\u961F\u5217\u4E2D\u7684\u6240\u6709\u7EBF\u7A0B\u90FD\u65E0\u6CD5\u88AB\u5524\u9192\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525215010238.png" alt="image-20220525215010238"></p><p>\u4E4B\u524D\u6211\u4EEC\u8BF4\u8FC7ReentrantLock\u548Csynchronized\u90FD\u662F\u91CD\u5165\u9501\uFF0C\u90A3\u4E48\u6211\u4EEC\u901A\u8FC7\u91CD\u5165\u9501ReentrantLock\u4EE5\u53CA\u975E\u53EF\u91CD\u5165\u9501NonReentrantLock\u7684\u6E90\u7801\u6765\u5BF9\u6BD4\u5206\u6790\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u975E\u53EF\u91CD\u5165\u9501\u5728\u91CD\u590D\u8C03\u7528\u540C\u6B65\u8D44\u6E90\u65F6\u4F1A\u51FA\u73B0\u6B7B\u9501\u3002</p><p>\u9996\u5148ReentrantLock\u548CNonReentrantLock\u90FD\u7EE7\u627F\u7236\u7C7BAQS\uFF0C\u5176\u7236\u7C7BAQS\u4E2D\u7EF4\u62A4\u4E86\u4E00\u4E2A\u540C\u6B65\u72B6\u6001status\u6765\u8BA1\u6570\u91CD\u5165\u6B21\u6570\uFF0Cstatus\u521D\u59CB\u503C\u4E3A0\u3002</p><p>\u5F53\u7EBF\u7A0B\u5C1D\u8BD5\u83B7\u53D6\u9501\u65F6\uFF0C\u53EF\u91CD\u5165\u9501\u5148\u5C1D\u8BD5\u83B7\u53D6\u5E76\u66F4\u65B0status\u503C\uFF0C\u5982\u679Cstatus == 0\u8868\u793A\u6CA1\u6709\u5176\u4ED6\u7EBF\u7A0B\u5728\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u5219\u628Astatus\u7F6E\u4E3A1\uFF0C\u5F53\u524D\u7EBF\u7A0B\u5F00\u59CB\u6267\u884C\u3002\u5982\u679Cstatus != 0\uFF0C\u5219\u5224\u65AD\u5F53\u524D\u7EBF\u7A0B\u662F\u5426\u662F\u83B7\u53D6\u5230\u8FD9\u4E2A\u9501\u7684\u7EBF\u7A0B\uFF0C\u5982\u679C\u662F\u7684\u8BDD\u6267\u884Cstatus+1\uFF0C\u4E14\u5F53\u524D\u7EBF\u7A0B\u53EF\u4EE5\u518D\u6B21\u83B7\u53D6\u9501\u3002\u800C\u975E\u53EF\u91CD\u5165\u9501\u662F\u76F4\u63A5\u53BB\u83B7\u53D6\u5E76\u5C1D\u8BD5\u66F4\u65B0\u5F53\u524Dstatus\u7684\u503C\uFF0C\u5982\u679Cstatus != 0\u7684\u8BDD\u4F1A\u5BFC\u81F4\u5176\u83B7\u53D6\u9501\u5931\u8D25\uFF0C\u5F53\u524D\u7EBF\u7A0B\u963B\u585E\u3002</p><p>\u91CA\u653E\u9501\u65F6\uFF0C\u53EF\u91CD\u5165\u9501\u540C\u6837\u5148\u83B7\u53D6\u5F53\u524Dstatus\u7684\u503C\uFF0C\u5728\u5F53\u524D\u7EBF\u7A0B\u662F\u6301\u6709\u9501\u7684\u7EBF\u7A0B\u7684\u524D\u63D0\u4E0B\u3002\u5982\u679Cstatus-1 == 0\uFF0C\u5219\u8868\u793A\u5F53\u524D\u7EBF\u7A0B\u6240\u6709\u91CD\u590D\u83B7\u53D6\u9501\u7684\u64CD\u4F5C\u90FD\u5DF2\u7ECF\u6267\u884C\u5B8C\u6BD5\uFF0C\u7136\u540E\u8BE5\u7EBF\u7A0B\u624D\u4F1A\u771F\u6B63\u91CA\u653E\u9501\u3002\u800C\u975E\u53EF\u91CD\u5165\u9501\u5219\u662F\u5728\u786E\u5B9A\u5F53\u524D\u7EBF\u7A0B\u662F\u6301\u6709\u9501\u7684\u7EBF\u7A0B\u4E4B\u540E\uFF0C\u76F4\u63A5\u5C06status\u7F6E\u4E3A0\uFF0C\u5C06\u9501\u91CA\u653E\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525215154882.png" alt="image-20220525215154882"></p><h2 id="_6-\u72EC\u4EAB\u9501-\u6392\u4ED6\u9501-vs-\u5171\u4EAB\u9501" tabindex="-1"><a class="header-anchor" href="#_6-\u72EC\u4EAB\u9501-\u6392\u4ED6\u9501-vs-\u5171\u4EAB\u9501" aria-hidden="true">#</a> 6. \u72EC\u4EAB\u9501(\u6392\u4ED6\u9501) VS \u5171\u4EAB\u9501</h2><blockquote><p>\u72EC\u4EAB\u9501\u548C\u5171\u4EAB\u9501\u540C\u6837\u662F\u4E00\u79CD\u6982\u5FF5\u3002\u6211\u4EEC\u5148\u4ECB\u7ECD\u4E00\u4E0B\u5177\u4F53\u7684\u6982\u5FF5\uFF0C\u7136\u540E\u901A\u8FC7ReentrantLock\u548CReentrantReadWriteLock\u7684\u6E90\u7801\u6765\u4ECB\u7ECD\u72EC\u4EAB\u9501\u548C\u5171\u4EAB\u9501\u3002</p></blockquote><p><strong>\u72EC\u4EAB\u9501\u4E5F\u53EB\u6392\u4ED6\u9501</strong>\uFF0C\u662F\u6307\u8BE5\u9501\u4E00\u6B21\u53EA\u80FD\u88AB\u4E00\u4E2A\u7EBF\u7A0B\u6240\u6301\u6709\u3002\u5982\u679C\u7EBF\u7A0BT\u5BF9\u6570\u636EA\u52A0\u4E0A\u6392\u5B83\u9501\u540E\uFF0C\u5219\u5176\u4ED6\u7EBF\u7A0B\u4E0D\u80FD\u518D\u5BF9A\u52A0\u4EFB\u4F55\u7C7B\u578B\u7684\u9501\u3002\u83B7\u5F97\u6392\u5B83\u9501\u7684\u7EBF\u7A0B\u5373\u80FD\u8BFB\u6570\u636E\u53C8\u80FD\u4FEE\u6539\u6570\u636E\u3002JDK\u4E2D\u7684synchronized\u548CJUC\u4E2DLock\u7684\u5B9E\u73B0\u7C7B\u5C31\u662F\u4E92\u65A5\u9501\u3002</p><p><strong>\u5171\u4EAB\u9501</strong>\u662F\u6307\u8BE5\u9501\u53EF\u88AB\u591A\u4E2A\u7EBF\u7A0B\u6240\u6301\u6709\u3002\u5982\u679C\u7EBF\u7A0BT\u5BF9\u6570\u636EA\u52A0\u4E0A\u5171\u4EAB\u9501\u540E\uFF0C\u5219\u5176\u4ED6\u7EBF\u7A0B\u53EA\u80FD\u5BF9A\u518D\u52A0\u5171\u4EAB\u9501\uFF0C\u4E0D\u80FD\u52A0\u6392\u5B83\u9501\u3002\u83B7\u5F97\u5171\u4EAB\u9501\u7684\u7EBF\u7A0B\u53EA\u80FD\u8BFB\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539\u6570\u636E\u3002</p><p>\u72EC\u4EAB\u9501\u4E0E\u5171\u4EAB\u9501\u4E5F\u662F\u901A\u8FC7AQS\u6765\u5B9E\u73B0\u7684\uFF0C\u901A\u8FC7\u5B9E\u73B0\u4E0D\u540C\u7684\u65B9\u6CD5\uFF0C\u6765\u5B9E\u73B0\u72EC\u4EAB\u6216\u8005\u5171\u4EAB\u3002</p><p>\u4E0B\u56FE\u4E3AReentrantReadWriteLock\u7684\u90E8\u5206\u6E90\u7801\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220525215327629.png" alt="image-20220525215327629"></p><p>\u6211\u4EEC\u770B\u5230ReentrantReadWriteLock\u6709\u4E24\u628A\u9501\uFF1AReadLock\u548CWriteLock\uFF0C\u7531\u8BCD\u77E5\u610F\uFF0C\u4E00\u4E2A\u8BFB\u9501\u4E00\u4E2A\u5199\u9501\uFF0C\u5408\u79F0\u201C\u8BFB\u5199\u9501\u201D\u3002\u518D\u8FDB\u4E00\u6B65\u89C2\u5BDF\u53EF\u4EE5\u53D1\u73B0ReadLock\u548CWriteLock\u662F\u9760\u5185\u90E8\u7C7BSync\u5B9E\u73B0\u7684\u9501\u3002Sync\u662FAQS\u7684\u4E00\u4E2A\u5B50\u7C7B\uFF0C\u8FD9\u79CD\u7ED3\u6784\u5728CountDownLatch\u3001ReentrantLock\u3001Semaphore\u91CC\u9762\u4E5F\u90FD\u5B58\u5728\u3002</p><p>\u5728ReentrantReadWriteLock\u91CC\u9762\uFF0C\u8BFB\u9501\u548C\u5199\u9501\u7684\u9501\u4E3B\u4F53\u90FD\u662FSync\uFF0C\u4F46\u8BFB\u9501\u548C\u5199\u9501\u7684\u52A0\u9501\u65B9\u5F0F\u4E0D\u4E00\u6837\u3002\u8BFB\u9501\u662F\u5171\u4EAB\u9501\uFF0C\u5199\u9501\u662F\u72EC\u4EAB\u9501\u3002\u8BFB\u9501\u7684\u5171\u4EAB\u9501\u53EF\u4FDD\u8BC1\u5E76\u53D1\u8BFB\u975E\u5E38\u9AD8\u6548\uFF0C\u800C\u8BFB\u5199\u3001\u5199\u8BFB\u3001\u5199\u5199\u7684\u8FC7\u7A0B\u4E92\u65A5\uFF0C\u56E0\u4E3A\u8BFB\u9501\u548C\u5199\u9501\u662F\u5206\u79BB\u7684\u3002\u6240\u4EE5ReentrantReadWriteLock\u7684\u5E76\u53D1\u6027\u76F8\u6BD4\u4E00\u822C\u7684\u4E92\u65A5\u9501\u6709\u4E86\u5F88\u5927\u63D0\u5347\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,61),r={href:"https://pdai.tech/md/java/thread/java-thread-x-lock-all.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const a=i("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[p("Java\u5E76\u53D1 - Java\u4E2D\u6240\u6709\u7684\u9501"),o(a)])])])}const g=s(l,[["render",d],["__file","java-thread-y-all-lock.html.vue"]]);export{g as default};
