import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as t}from"./app.20466b7d.js";const e={},p=t(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u5206\u4EAB" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u5206\u4EAB" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F-\u5206\u4EAB</h1><h2 id="_1-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u73B0" aria-hidden="true">#</a> 1. \u5B9E\u73B0</h2><p>\u4F7F\u7528open-type \u7684\u5F00\u653E\u80FD\u529B</p><ul><li>\u70B9\u51FB share \u5206\u4EAB\u6309\u94AE\u65F6\u4F1A\u89E6\u53D1 onShareAppMessage</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>share<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5206\u4EAB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>js\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u53D1\u9001\u7ED9\u670B\u53CB</span>
			<span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u9886\u53D6\u4F60\u7684\u4E13\u5C5E\u798F\u5229&#39;</span><span class="token punctuation">,</span>
					<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/pages/distribution/exchange?code=123&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","wx-mp-share.html.vue"]]);export{d as default};
