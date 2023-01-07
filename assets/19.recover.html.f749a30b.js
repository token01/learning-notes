import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.f386ac8b.js";const t={},p=e(`<h1 id="_19-recover" tabindex="-1"><a class="header-anchor" href="#_19-recover" aria-hidden="true">#</a> 19.recover</h1><p>\u8FD0\u884C\u65F6panic\u5F02\u5E38\u4E00\u65E6\u88AB\u5F15\u53D1\u5C31\u4F1A\u5BFC\u81F4\u7A0B\u5E8F\u5D29\u6E83\u3002\u8FD9\u5F53\u7136\u4E0D\u662F\u6211\u4EEC\u613F\u610F\u770B\u5230\u7684\uFF0C\u56E0\u4E3A\u8C01\u4E5F\u4E0D\u80FD\u4FDD\u8BC1\u7A0B\u5E8F\u4E0D\u4F1A\u53D1\u751F\u4EFB\u4F55\u8FD0\u884C\u65F6\u9519\u8BEF\u3002</p><p>\u4E0D\u8FC7\uFF0CGo\u8BED\u8A00\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E13\u7528\u4E8E\u201C\u62E6\u622A\u201D\u8FD0\u884C\u65F6panic\u7684\u5185\u5EFA\u51FD\u6570--recover\u3002\u4ED6\u53EF\u4EE5\u662F\u5F53\u524D\u7684\u7A0B\u5E8F\u4ECE\u8FD0\u884C\u65F6panic\u7684\u72B6\u6001\u4E2D\u6062\u590D\u5E76\u91CD\u65B0\u83B7\u5F97\u6D41\u7A0B\u63A7\u5236\u6743\u3002</p><p>\u6CE8\u610F\uFF1Arecover\u53EA\u6709\u5728defer\u8C03\u7528\u7684\u51FD\u6570\u4E2D\u6709\u6548\u3002</p><p>\u5982\u679C\u8C03\u7528\u4E86\u5185\u7F6E\u51FD\u6570recover\uFF0C\u5E76\u4E14\u5B9A\u4E49\u8BE5defer\u8BED\u53E5\u7684\u51FD\u6570\u53D1\u751F\u4E86panic\u5F02\u5E38\uFF0Crecover\u4F1A\u4F7F\u7A0B\u5E8F\u4ECEpanic\u4E2D\u6062\u590D\uFF0C\u5E76\u8FD4\u56DEpanic value\u3002\u5BFC\u81F4panic\u5F02\u5E38\u7684\u51FD\u6570\u4E0D\u4F1A\u7EE7\u7EED\u8FD0\u884C\uFF0C\u4F46\u80FD\u6B63\u5E38\u8FD4\u56DE\u3002\u5728\u672A\u53D1\u751Fpanic\u65F6\u8C03\u7528recover\uFF0Crecover\u4F1A\u8FD4\u56DEnic\u3002</p><h2 id="_1-recover\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-recover\u7684\u4F7F\u7528" aria-hidden="true">#</a> 1\uFF0Crecover\u7684\u4F7F\u7528</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;aaaaaa&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testb</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u8BBE\u7F6Erecover</span>
 <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//recover()  //\u53EF\u4EE5\u6253\u5370panic\u7684\u9519\u8BEF\u4FE1\u606F</span>
  <span class="token comment">//fmt.Println(recover())</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span> <span class="token comment">//\u4EA7\u751Fpanic\u5F02\u5E38</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u522B\u5FD8\u4E86\u8FD9\u4E2A\u5706\u62EC\u53F7\uFF0C\u8868\u793A\u8C03\u7528\u6B64\u533F\u540D\u51FD\u6570</span>
 <span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
 a<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">111</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">testc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ccccc&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token function">testa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token function">testb</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
 <span class="token function">testc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","19.recover.html.vue"]]);export{d as default};
