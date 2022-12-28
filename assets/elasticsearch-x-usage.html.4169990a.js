import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,a as n,b as s,d as e,f as t,r as o}from"./app.19c6482c.js";const c={},u=t(`<h1 id="es\u8BE6\u89E3-\u5165\u95E8-\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#es\u8BE6\u89E3-\u5165\u95E8-\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> ES\u8BE6\u89E3 - \u5165\u95E8\uFF1A\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528</h1><blockquote><p>\u5B89\u88C5\u5B8CElasticSearch \u548C Kibana\u540E\uFF0C\u4E3A\u4E86\u5FEB\u901F\u4E0A\u624B\uFF0C\u6211\u4EEC\u901A\u8FC7\u5B98\u7F51GitHub\u63D0\u4F9B\u7684\u4E00\u4E2A\u6570\u636E\u8FDB\u884C\u5165\u95E8\u5B66\u4E60\uFF0C\u4E3B\u8981\u5305\u62EC<strong>\u67E5\u8BE2\u6570\u636E</strong>\u548C<strong>\u805A\u5408\u6570\u636E</strong>\u3002</p></blockquote><h2 id="_1-\u5165\u95E8-\u4ECE\u7D22\u5F15\u6587\u6863\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#_1-\u5165\u95E8-\u4ECE\u7D22\u5F15\u6587\u6863\u5F00\u59CB" aria-hidden="true">#</a> 1. \u5165\u95E8\uFF1A\u4ECE\u7D22\u5F15\u6587\u6863\u5F00\u59CB</h2><ul><li>\u7D22\u5F15\u4E00\u4E2A\u6587\u6863</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PUT /customer/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;John Doe&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u65B9\u4FBF\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u4F7F\u7528kibana\u7684dev tool\u6765\u8FDB\u884C\u5B66\u4E60\u6D4B\u8BD5\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803213004882.png" alt="image-20220803213004882"></p><p>\u67E5\u8BE2\u521A\u624D\u63D2\u5165\u7684\u6587\u6863</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803213228322.png" alt="image-20220803213228322"></p><h2 id="_2-\u5B66\u4E60\u51C6\u5907-\u6279\u91CF\u7D22\u5F15\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_2-\u5B66\u4E60\u51C6\u5907-\u6279\u91CF\u7D22\u5F15\u6587\u6863" aria-hidden="true">#</a> 2. \u5B66\u4E60\u51C6\u5907\uFF1A\u6279\u91CF\u7D22\u5F15\u6587\u6863</h2><blockquote><p>ES \u8FD8\u63D0\u4F9B\u4E86\u6279\u91CF\u64CD\u4F5C\uFF0C\u6BD4\u5982\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6279\u91CF\u64CD\u4F5C\u6765\u63D2\u5165\u4E00\u4E9B\u6570\u636E\uFF0C\u4F9B\u6211\u4EEC\u5728\u540E\u9762\u5B66\u4E60\u4F7F\u7528\u3002</p></blockquote><p>\u4F7F\u7528\u6279\u91CF\u6765\u6279\u5904\u7406\u6587\u6863\u64CD\u4F5C\u6BD4\u5355\u72EC\u63D0\u4EA4\u8BF7\u6C42\u8981\u5FEB\u5F97\u591A\uFF0C\u56E0\u4E3A\u5B83\u51CF\u5C11\u4E86\u7F51\u7EDC\u5F80\u8FD4\u3002</p><ul><li><strong>\u4E0B\u8F7D\u6D4B\u8BD5\u6570\u636E</strong></li></ul>`,13),r={href:"https://raw.githubusercontent.com/elastic/elasticsearch/master/docs/src/test/resources/accounts.json",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/elastic/elasticsearch",target:"_blank",rel:"noopener noreferrer"},m=t(`<blockquote><p>\u6700\u65B0\u7248\u672C\u5DF2\u7ECF\u6539\u4E86\uFF0C\u53EF\u4EE5\u57287.11\u4EE5\u524D\u7684 \u7248\u672C\u4E0A\u4E0B\u8F7D</p></blockquote><p>\u6570\u636E\u7684\u683C\u5F0F\u5982\u4E0B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token number">16623</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firstname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bradshaw&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mckenzie&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;244 Columbus Place&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;employer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Euron&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bradshawmckenzie@euron.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hobucken&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CO&quot;</span>
<span class="token punctuation">}</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u6279\u91CF\u63D2\u5165\u6570\u636E</strong></li></ul><p>\u5C06accounts.json\u62F7\u8D1D\u81F3\u6307\u5B9A\u76EE\u5F55\uFF0C\u6211\u8FD9\u91CC\u653E\u5728<code>/opt/</code>\u4E0B\u9762,</p><p>\u7136\u540E\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-XPOST</span> <span class="token string">&quot;localhost:9200/bank/_bulk?pretty&amp;refresh&quot;</span> --data-binary <span class="token string">&quot;@/opt/accounts.json&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u67E5\u770B\u72B6\u6001</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>elasticsearch@pdai-centos root<span class="token punctuation">]</span>$ <span class="token function">curl</span> <span class="token string">&quot;localhost:9200/_cat/indices?v=true&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> bank
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
<span class="token number">100</span>  <span class="token number">1524</span>  <span class="token number">100</span>  <span class="token number">1524</span>    <span class="token number">0</span>     <span class="token number">0</span>   119k      <span class="token number">0</span> --:--:-- --:--:-- --:--:--  124k
yellow <span class="token function">open</span>   bank                            yq3eSlAWRMO2Td0Sl769rQ   <span class="token number">1</span>   <span class="token number">1</span>       <span class="token number">1000</span>            <span class="token number">0</span>    <span class="token number">379</span>.2kb        <span class="token number">379</span>.2kb
<span class="token punctuation">[</span>elasticsearch@pdai-centos root<span class="token punctuation">]</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> 3. \u67E5\u8BE2\u6570\u636E</h2><blockquote><p>\u6211\u4EEC\u901A\u8FC7kibana\u6765\u8FDB\u884C\u67E5\u8BE2\u6D4B\u8BD5\u3002</p></blockquote><h3 id="_3-1-\u67E5\u8BE2\u6240\u6709" tabindex="-1"><a class="header-anchor" href="#_3-1-\u67E5\u8BE2\u6240\u6709" aria-hidden="true">#</a> 3.1 \u67E5\u8BE2\u6240\u6709</h3><p><code>match_all</code>\u8868\u793A\u67E5\u8BE2\u6240\u6709\u7684\u6570\u636E\uFF0C<code>sort</code>\u5373\u6309\u7167\u4EC0\u4E48\u5B57\u6BB5\u6392\u5E8F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token string">&quot;account_number&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803215859516.png" alt="image-20220803215859516"></p><p>\u76F8\u5173\u5B57\u6BB5\u89E3\u91CA</p><ul><li><code>took</code> \u2013 Elasticsearch\u8FD0\u884C\u67E5\u8BE2\u6240\u82B1\u8D39\u7684\u65F6\u95F4\uFF08\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF09</li><li><code>timed_out</code> \u2013\u641C\u7D22\u8BF7\u6C42\u662F\u5426\u8D85\u65F6</li><li><code>_shards</code> - \u641C\u7D22\u4E86\u591A\u5C11\u4E2A\u788E\u7247\uFF0C\u4EE5\u53CA\u6210\u529F\uFF0C\u5931\u8D25\u6216\u8DF3\u8FC7\u4E86\u591A\u5C11\u4E2A\u788E\u7247\u7684\u7EC6\u76EE\u5206\u7C7B\u3002</li><li><code>max_score</code> \u2013 \u627E\u5230\u7684\u6700\u76F8\u5173\u6587\u6863\u7684\u5206\u6570</li><li><code>hits.total.value</code> - \u627E\u5230\u4E86\u591A\u5C11\u4E2A\u5339\u914D\u7684\u6587\u6863</li><li><code>hits.sort</code> - \u6587\u6863\u7684\u6392\u5E8F\u4F4D\u7F6E\uFF08\u4E0D\u6309\u76F8\u5173\u6027\u5F97\u5206\u6392\u5E8F\u65F6\uFF09</li><li><code>hits._score</code> - \u6587\u6863\u7684\u76F8\u5173\u6027\u5F97\u5206\uFF08\u4F7F\u7528match_all\u65F6\u4E0D\u9002\u7528\uFF09</li></ul><h3 id="_3-2-\u5206\u9875\u67E5\u8BE2-from-size" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5206\u9875\u67E5\u8BE2-from-size" aria-hidden="true">#</a> 3.2 \u5206\u9875\u67E5\u8BE2(from+size)</h3><p>\u672C\u8D28\u4E0A\u5C31\u662Ffrom\u548Csize\u4E24\u4E2A\u5B57\u6BB5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token string">&quot;account_number&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;asc&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803220845044.png" alt="image-20220803220845044"></p><h3 id="_3-3-\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2-match" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2-match" aria-hidden="true">#</a> 3.3 \u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2\uFF1Amatch</h3><p>\u5982\u679C\u8981\u5728\u5B57\u6BB5\u4E2D\u641C\u7D22\u7279\u5B9A\u5B57\u8BCD\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>match</code>; \u5982\u4E0B\u8BED\u53E5\u5C06\u67E5\u8BE2address \u5B57\u6BB5\u4E2D\u5305\u542B mill \u6216\u8005 lane\u7684\u6570\u636E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mill lane&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803221133118.png" alt="image-20220803221133118"></p><p>\uFF08\u7531\u4E8EES\u5E95\u5C42\u662F\u6309\u7167\u5206\u8BCD\u7D22\u5F15\u7684\uFF0C\u6240\u4EE5\u4E0A\u8FF0\u67E5\u8BE2\u7ED3\u679C\u662Faddress \u5B57\u6BB5\u4E2D\u5305\u542B mill \u6216\u8005 lane\u7684\u6570\u636E\uFF09</p><h3 id="_3-4-\u67E5\u8BE2\u6BB5\u843D\u5339\u914D-match-phrase" tabindex="-1"><a class="header-anchor" href="#_3-4-\u67E5\u8BE2\u6BB5\u843D\u5339\u914D-match-phrase" aria-hidden="true">#</a> 3.4 \u67E5\u8BE2\u6BB5\u843D\u5339\u914D\uFF1Amatch_phrase</h3><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u67E5\u8BE2\u7684\u6761\u4EF6\u662F address\u5B57\u6BB5\u4E2D\u5305\u542B &quot;mill lane&quot;\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528<code>match_phrase</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;match_phrase&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mill lane&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803221339869.png" alt="image-20220803221339869"></p><h3 id="_3-5-\u591A\u6761\u4EF6\u67E5\u8BE2-bool" tabindex="-1"><a class="header-anchor" href="#_3-5-\u591A\u6761\u4EF6\u67E5\u8BE2-bool" aria-hidden="true">#</a> 3.5 \u591A\u6761\u4EF6\u67E5\u8BE2: bool</h3><p>\u5982\u679C\u8981\u6784\u9020\u66F4\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>bool</code>\u67E5\u8BE2\u6765\u7EC4\u5408\u591A\u4E2A\u67E5\u8BE2\u6761\u4EF6\u3002</p><p>\u4F8B\u5982\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5728bank\u7D22\u5F15\u4E2D\u641C\u7D2240\u5C81\u5BA2\u6237\u7684\u5E10\u6237\uFF0C\u4F46\u4E0D\u5305\u62EC\u5C45\u4F4F\u5728\u7231\u8FBE\u8377\u5DDE\uFF08ID\uFF09\u7684\u4EFB\u4F55\u4EBA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;40&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;must_not&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;state&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ID&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803221459333.png" alt="image-20220803221459333"></p><p><code>must</code>, <code>should</code>, <code>must_not</code> \u548C <code>filter</code> \u90FD\u662F<code>bool</code>\u67E5\u8BE2\u7684\u5B50\u53E5\u3002\u90A3\u4E48<code>filter</code>\u548C\u4E0A\u8FF0<code>query</code>\u5B50\u53E5\u6709\u5565\u533A\u522B\u5462\uFF1F</p><h3 id="_3-6-\u67E5\u8BE2\u6761\u4EF6-query-or-filter" tabindex="-1"><a class="header-anchor" href="#_3-6-\u67E5\u8BE2\u6761\u4EF6-query-or-filter" aria-hidden="true">#</a> 3.6 \u67E5\u8BE2\u6761\u4EF6\uFF1Aquery or filter</h3><p>\u5148\u770B\u4E0B\u5982\u4E0B\u67E5\u8BE2, \u5728<code>bool</code>\u67E5\u8BE2\u7684\u5B50\u53E5\u4E2D\u540C\u65F6\u5177\u5907query/must \u548C filter</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;state&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ND&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;40&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803221713932.png" alt="image-20220803221713932"></p><p>\u4E24\u8005\u90FD\u53EF\u4EE5\u5199\u67E5\u8BE2\u6761\u4EF6\uFF0C\u800C\u4E14\u8BED\u6CD5\u4E5F\u7C7B\u4F3C\u3002\u533A\u522B\u5728\u4E8E\uFF0C<strong>query \u4E0A\u4E0B\u6587\u7684\u6761\u4EF6\u662F\u7528\u6765\u7ED9\u6587\u6863\u6253\u5206\u7684\uFF0C\u5339\u914D\u8D8A\u597D _score \u8D8A\u9AD8\uFF1Bfilter \u7684\u6761\u4EF6\u53EA\u4EA7\u751F\u4E24\u79CD\u7ED3\u679C\uFF1A\u7B26\u5408\u4E0E\u4E0D\u7B26\u5408\uFF0C\u540E\u8005\u88AB\u8FC7\u6EE4\u6389</strong>\u3002</p><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u8FDB\u4E00\u6B65\u770B\u53EA\u5305\u542Bfilter\u7684\u67E5\u8BE2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;filter&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;40&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">20000</span>,
              <span class="token string">&quot;lte&quot;</span><span class="token builtin class-name">:</span> <span class="token number">30000</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF0C\u663E\u7136\u65E0_score</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803221901642.png" alt="image-20220803221901642"></p><h2 id="_4-\u805A\u5408\u67E5\u8BE2-aggregation" tabindex="-1"><a class="header-anchor" href="#_4-\u805A\u5408\u67E5\u8BE2-aggregation" aria-hidden="true">#</a> 4. \u805A\u5408\u67E5\u8BE2\uFF1AAggregation</h2><blockquote><p>\u6211\u4EEC\u77E5\u9053SQL\u4E2D\u6709group by\uFF0C\u5728ES\u4E2D\u5B83\u53EBAggregation\uFF0C\u5373\u805A\u5408\u8FD0\u7B97\u3002</p></blockquote><h3 id="_4-1-\u7B80\u5355\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7B80\u5355\u805A\u5408" aria-hidden="true">#</a> 4.1 \u7B80\u5355\u805A\u5408</h3><p>\u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u8BA1\u7B97\u51FAaccount\u6BCF\u4E2A\u5DDE\u7684\u7EDF\u8BA1\u6570\u91CF\uFF0C \u4F7F\u7528<code>aggs</code>\u5173\u952E\u5B57\u5BF9<code>state</code>\u5B57\u6BB5\u805A\u5408\uFF0C\u88AB\u805A\u5408\u7684\u5B57\u6BB5\u65E0\u9700\u5BF9\u5206\u8BCD\u7EDF\u8BA1\uFF0C\u6240\u4EE5\u4F7F\u7528<code>state.keyword</code>\u5BF9\u6574\u4E2A\u5B57\u6BB5\u7EDF\u8BA1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group_by_state&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;state.keyword&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803222042785.png" alt="image-20220803222042785"></p><p>\u56E0\u4E3A\u65E0\u9700\u8FD4\u56DE\u6761\u4EF6\u7684\u5177\u4F53\u6570\u636E, \u6240\u4EE5\u8BBE\u7F6Esize=0\uFF0C\u8FD4\u56DEhits\u4E3A\u7A7A\u3002</p><p><code>doc_count</code>\u8868\u793Abucket\u4E2D\u6BCF\u4E2A\u5DDE\u7684\u6570\u636E\u6761\u6570\u3002</p><h3 id="_4-2-\u5D4C\u5957\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5D4C\u5957\u805A\u5408" aria-hidden="true">#</a> 4.2 \u5D4C\u5957\u805A\u5408</h3><p>ES\u8FD8\u53EF\u4EE5\u5904\u7406\u4E2A\u805A\u5408\u6761\u4EF6\u7684\u5D4C\u5957\u3002</p><p>\u6BD4\u5982\u627F\u63A5\u4E0A\u4E2A\u4F8B\u5B50\uFF0C \u8BA1\u7B97\u6BCF\u4E2A\u5DDE\u7684\u5E73\u5747\u7ED3\u4F59\u3002\u6D89\u53CA\u5230\u7684\u5C31\u662F\u5728\u5BF9state\u5206\u7EC4\u7684\u57FA\u7840\u4E0A\uFF0C\u5D4C\u5957\u8BA1\u7B97avg(balance):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group_by_state&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;state.keyword&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;average_balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803222301927.png" alt="image-20220803222301927"></p><h3 id="_4-3-\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F" aria-hidden="true">#</a> 4.3 \u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F</h3><p>\u53EF\u4EE5\u901A\u8FC7\u5728aggs\u4E2D\u5BF9\u5D4C\u5957\u805A\u5408\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F</p><p>\u6BD4\u5982\u627F\u63A5\u4E0A\u4E2A\u4F8B\u5B50\uFF0C \u5BF9\u5D4C\u5957\u8BA1\u7B97\u51FA\u7684avg(balance)\uFF0C\u8FD9\u91CC\u662Faverage_balance\uFF0C\u8FDB\u884C\u6392\u5E8F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>GET /bank/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group_by_state&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;state.keyword&quot;</span>,
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;average_balance&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;average_balance&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220803222408317.png" alt="image-20220803222408317"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,73),b={href:"https://pdai.tech/md/db/nosql-es/elasticsearch-x-usage.html",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"ES\u8BE6\u89E3 - \u5165\u95E8\uFF1A\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528",-1);function v(g,q){const a=o("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[s("\u6570\u636E\u662Findex\u4E3Abank\uFF0Caccounts.json "),n("a",r,[s("\u4E0B\u8F7D\u5730\u5740"),e(a)]),s("\uFF08\u5982\u679C\u4F60\u65E0\u6CD5\u4E0B\u8F7D\uFF0C\u4E5F\u53EF\u4EE5clone ES\u7684"),n("a",d,[s("\u5B98\u65B9\u4ED3\u5E93 "),e(a)]),s("\uFF0C\u7136\u540E\u8FDB\u5165/docs/src/test/resources/accounts.json\u76EE\u5F55\u83B7\u53D6\uFF09")]),m,n("p",null,[n("a",b,[k,e(a)])])])}const f=i(c,[["render",v],["__file","elasticsearch-x-usage.html.vue"]]);export{f as default};
