import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a,b as o,d as p,f as c,r as i}from"./app.74b2ce1e.js";const r={},l=c(`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5BA2\u670D" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5BA2\u670D" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5BA2\u670D</h1><h2 id="_1-\u5728\u9875\u9762\u4F7F\u7528\u5BA2\u670D\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#_1-\u5728\u9875\u9762\u4F7F\u7528\u5BA2\u670D\u6D88\u606F" aria-hidden="true">#</a> 1. \u5728\u9875\u9762\u4F7F\u7528\u5BA2\u670D\u6D88\u606F</h2><ol><li>\u9700\u8981<strong>\u5C06 <code>button</code> \u7EC4\u4EF6 <code>open-type</code> \u7684\u503C\u8BBE\u7F6E\u4E3A <code>contact</code></strong></li><li>\u5F53\u7528\u6237\u70B9\u51FB\u540E\u5C31\u4F1A\u8FDB\u5165\u5BA2\u670D\u4F1A\u8BDD\uFF0C\u5982\u679C\u7528\u6237\u5728\u4F1A\u8BDD\u4E2D\u70B9\u51FB\u4E86\u5C0F\u7A0B\u5E8F\u6D88\u606F\uFF0C\u5219\u4F1A\u8FD4\u56DE\u5230\u5C0F\u7A0B\u5E8F</li><li>\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7 <code>bindcontact</code> \u4E8B\u4EF6\u56DE\u8C03\u83B7\u53D6\u5230<strong>\u7528\u6237\u6240\u70B9\u6D88\u606F\u7684\u9875\u9762\u8DEF\u5F84 <code>path</code> \u548C\u5BF9\u5E94\u7684\u53C2\u6570 <code>query</code>\uFF0C</strong></li><li>\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>session-from</code> \u5C06\u4F1A\u8BDD\u6765\u6E90\u900F\u4F20\u5230\u5BA2\u670D\u3002</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindcontact</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleContact<span class="token punctuation">&quot;</span></span> <span class="token attr-name">session-from</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sessionFrom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u6218" aria-hidden="true">#</a> 2. \u5B9E\u6218</h2><h3 id="_2-1-\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8BBE\u7F6E" aria-hidden="true">#</a> 2.1 \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u8BBE\u7F6E</h3><p>\u8BBE\u7F6E\u7684\u53C2\u6570\u4E3A\uFF1A</p><ul><li>\u6D88\u606F\u6807\u9898</li><li>\u6D88\u606F\u56FE\u7247</li><li>\u6D88\u606F\u6765\u6E90\u7684\u8DEF\u5F84</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token operator">&lt;</span>button open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">&quot;contact&quot;</span> bindcontact<span class="token operator">=</span><span class="token string">&quot;handleContact&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;action bg-white&quot;</span>
          send<span class="token operator">-</span>message<span class="token operator">-</span>title<span class="token operator">=</span><span class="token string">&quot;{{goodsSpu.name}}--\u54A8\u8BE2&quot;</span>
          send<span class="token operator">-</span>message<span class="token operator">-</span>img<span class="token operator">=</span><span class="token string">&quot;{{goodsSpu.picUrls[0] ? goodsSpu.picUrls[0] : &#39;/public/img/no_pic.png&#39;}}&quot;</span>
          show<span class="token operator">-</span>message<span class="token operator">-</span>card<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> 
          send<span class="token operator">-</span>message<span class="token operator">-</span>path<span class="token operator">=</span><span class="token string">&quot;/pages/goods/goods-detail/index?id={{goodsSpu.id}}&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;cuIcon-servicefill&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span> 
    \u5BA2\u670D
  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406210837447.png" alt="image-20220406210837447"></p><h3 id="_2-2-\u5C0F\u7A0B\u5E8F\u540E\u53F0\u7ED1\u5B9A\u5BA2\u670D" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5C0F\u7A0B\u5E8F\u540E\u53F0\u7ED1\u5B9A\u5BA2\u670D" aria-hidden="true">#</a> 2.2 \u5C0F\u7A0B\u5E8F\u540E\u53F0\u7ED1\u5B9A\u5BA2\u670D</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406205927869.png" alt="image-20220406205927869"></p><h3 id="_2-3-\u5BA2\u6237\u56DE\u590D\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5BA2\u6237\u56DE\u590D\u6D88\u606F" aria-hidden="true">#</a> 2.3 \u5BA2\u6237\u56DE\u590D\u6D88\u606F</h3><p>\u7ED1\u5B9A\u5BA2\u670D\u540E\uFF0C\u5BA2\u670D\u7684\u5FAE\u4FE1\u7ED1\u5B9A\u5C0F\u7A0B\u5E8F\u540E\uFF0C\u5373\u53EF\u5728\u670D\u52A1\u901A\u77E5\u4E2D\u6536\u5230\u6D88\u606F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406210347650.png" alt="image-20220406210347650"></p><p>\u901A\u77E5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406210754031.png" alt="image-20220406210754031"></p><p>\u8BE6\u60C5</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406210719777.png" alt="image-20220406210719777"></p><h2 id="_3-\u5C0F\u7A0B\u5E8F\u5BA2\u670D\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_3-\u5C0F\u7A0B\u5E8F\u5BA2\u670D\u529F\u80FD" aria-hidden="true">#</a> 3. \u5C0F\u7A0B\u5E8F\u5BA2\u670D\u529F\u80FD</h2><h3 id="_3-1-\u5BA2\u670D\u4E0A\u4E0B\u7EBF" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5BA2\u670D\u4E0A\u4E0B\u7EBF" aria-hidden="true">#</a> 3.1 \u5BA2\u670D\u4E0A\u4E0B\u7EBF</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406211724267.png" alt="image-20220406211724267"></p><h3 id="_3-2-\u5BA2\u670D\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5BA2\u670D\u6570\u636E" aria-hidden="true">#</a> 3.2 \u5BA2\u670D\u6570\u636E</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406211757025.png" alt="image-20220406211757025"></p><h3 id="_3-3-\u8BBE\u7F6E\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_3-3-\u8BBE\u7F6E\u529F\u80FD" aria-hidden="true">#</a> 3.3 \u8BBE\u7F6E\u529F\u80FD</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220406212003592.png" alt="image-20220406212003592"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,27),d={href:"https://developers.weixin.qq.com/miniprogram/introduction/custom.html#%E5%9C%A8%E9%A1%B5%E9%9D%A2%E4%BD%BF%E7%94%A8%E5%AE%A2%E6%9C%8D%E6%B6%88%E6%81%AF",target:"_blank",rel:"noopener noreferrer"};function u(m,g){const s=i("ExternalLinkIcon");return e(),t("div",null,[l,a("p",null,[a("a",d,[o("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B98\u65B9\u6587\u6863"),p(s)])])])}const b=n(r,[["render",u],["__file","wx-mp-custumer.html.vue"]]);export{b as default};
