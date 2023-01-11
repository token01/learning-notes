import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as s,d as o,f as i,r as c}from"./app.9e15f9d2.js";const l={},u=i(`<h1 id="_04-golang\u4EE5\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_04-golang\u4EE5\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F" aria-hidden="true">#</a> 04.golang\u4EE5\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F</h1><p>\u6211\u5199\u4E86\u4E00\u4E2A\u811A\u672C\u83B7\u53D6\u9879\u76EE\u5728harbor\u4E2D\u7684tag\u5217\u8868\uFF0C\u7ECF\u8FC7\u4E00\u4E9Bcurl\u6D4B\u8BD5\u4E4B\u540E\uFF0C\u5F88\u5FEB\u5C31\u5B8C\u6210\u4E86\u8FD9\u4E2A\u811A\u672C\u7684\u7F16\u5199\u3002</p><p>\u63A5\u4E0B\u6765\u9700\u8981\u505A\u4E00\u4E9B\u4F18\u5316\u65B9\u9762\u7684\u8003\u91CF\u3002</p><p>\u9996\u5148\u4E00\u4E2A\u95EE\u9898\u662F\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u7684\u987A\u5E8F\u597D\u50CF\u662F\u968F\u673A\u7684\uFF0C\u8FD9\u4E0D\u662F\u6211\u60F3\u8981\u7684\uFF0C\u901A\u5E38\uFF0C\u5F53\u6211\u5229\u7528\u6B64\u811A\u672C\u67E5\u9879\u76EE\u53EF\u7528\u7684tag\u65F6\uFF0C\u6211\u7684\u8BC9\u6C42\u53EF\u80FD\u66F4\u503E\u5411\u4E8E\u83B7\u53D6\u5B83\u6700\u65B0push\u7684tag\uFF0C\u4E8E\u662F\uFF0C\u5C31\u6709\u4E86\u4E00\u4E2A\u5728\u5185\u5B58\u4E2D\u5BF9\u5217\u8868\u6392\u5E8F\u7684\u9700\u6C42\u3002</p><p>\u7ECF\u8FC7\u4E00\u756A\u641C\u7D22\uFF0C\u53D1\u73B0\u5B98\u65B9\u63D0\u4F9B\u7684sort\u5305\uFF0C\u76F4\u63A5\u4F7F\u7528\u80FD\u591F\u5BF9\u7B80\u5355\u7684\u5217\u8868\u8FDB\u884C\u6392\u5E8F\uFF0C\u5982\u679C\u662F\u7ED3\u6784\u4F53\u4E2D\u7684\u67D0\u4E2A\u5B57\u6BB5\uFF0C\u5219\u53EF\u4EE5\u7528\u5982\u4E0B\u65B9\u5F0F\u5B9A\u4E49\u65B9\u6CD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Tags harbor\u9879\u76EEtag\u7684\u5BF9\u8C61</span>
<span class="token keyword">type</span> Tags <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 Digest        <span class="token builtin">string</span>    <span class="token string">\`json:&quot;digest&quot;\`</span>
 Name          <span class="token builtin">string</span>    <span class="token string">\`json:&quot;name&quot;\`</span>
 Size          <span class="token builtin">int</span>       <span class="token string">\`json:&quot;size&quot;\`</span>
 Architecture  <span class="token builtin">string</span>    <span class="token string">\`json:&quot;architecture&quot;\`</span>
 Os            <span class="token builtin">string</span>    <span class="token string">\`json:&quot;os&quot;\`</span>
 OsVersion     <span class="token builtin">string</span>    <span class="token string">\`json:&quot;os.version&quot;\`</span>
 DockerVersion <span class="token builtin">string</span>    <span class="token string">\`json:&quot;docker_version&quot;\`</span>
 Author        <span class="token builtin">string</span>    <span class="token string">\`json:&quot;author&quot;\`</span>
 Created       time<span class="token punctuation">.</span>Time <span class="token string">\`json:&quot;created&quot;\`</span>
 Config        <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Labels <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;labels&quot;\`</span>
 <span class="token punctuation">}</span> <span class="token string">\`json:&quot;config&quot;\`</span>
 Signature <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token string">\`json:&quot;signature&quot;\`</span>
 Labels    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;labels&quot;\`</span>
 PushTime  time<span class="token punctuation">.</span>Time     <span class="token string">\`json:&quot;push_time&quot;\`</span>
 PullTime  time<span class="token punctuation">.</span>Time     <span class="token string">\`json:&quot;pull_time&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u57FA\u4E8E\u65F6\u95F4\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F\u529F\u80FD</span>
<span class="token keyword">type</span> tags <span class="token punctuation">[</span><span class="token punctuation">]</span>Tags

<span class="token keyword">func</span> <span class="token punctuation">(</span>s tags<span class="token punctuation">)</span> <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s tags<span class="token punctuation">)</span> <span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ByTime <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 tags
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b ByTime<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> b<span class="token punctuation">.</span>tags<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Created<span class="token punctuation">.</span><span class="token function">Before</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>tags<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>Created<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u7ED3\u679C\u8FD4\u56DE\u7684\u5730\u65B9\uFF0C\u76F4\u63A5\u8C03\u7528\u6B64\u65B9\u6CD5\u5373\u53EF\u5B9E\u73B0\u6309\u65F6\u95F4\u6392\u5E8F\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>ByTime<span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u57FA\u4E8E\u521B\u5EFA\u65F6\u95F4\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),r={href:"https://segmentfault.com/a/1190000008062661",target:"_blank",rel:"noopener noreferrer"};function k(d,v){const a=c("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[s("\u7F51\u4E0A\u7684\u6587\u7AE0\uFF0C\u5982\u679C\u5B57\u6BB5\u662Fint\u7C7B\u578B\u65F6\u7684\u6392\u5E8F\u65B9\u5F0F\uFF1A"),n("a",r,[s("golang\u5BF9\u81EA\u5B9A\u4E49\u7C7B\u578B\u6392\u5E8F"),o(a)])])])}const b=t(l,[["render",k],["__file","04.golang\u4EE5\u7ED3\u6784\u4F53\u4E2D\u67D0\u4E2A\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F.html.vue"]]);export{b as default};
