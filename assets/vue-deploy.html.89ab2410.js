import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.002b82c0.js";const i={},t=e(`<h1 id="vue\u524D\u7AEF\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#vue\u524D\u7AEF\u90E8\u7F72" aria-hidden="true">#</a> Vue\u524D\u7AEF\u90E8\u7F72</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1.\u7B80\u4ECB</h2><h2 id="_2-vue\u90E8\u7F72\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-vue\u90E8\u7F72\u914D\u7F6E" aria-hidden="true">#</a> 2.Vue\u90E8\u7F72\u914D\u7F6E</h2><h3 id="_2-1-\u4FEE\u6539vue-config-js-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4FEE\u6539vue-config-js-\u6587\u4EF6" aria-hidden="true">#</a> 2.1 \u4FEE\u6539vue.config.js \u6587\u4EF6</h3><p>\u4E3B\u8981\u4FEE\u6539module.exports</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  publicPath: &quot;./&quot;,
  outputDir: &#39;dist&#39;,
  assetsDir: &#39;assets&#39;
  ...
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>publicPath</strong>: \u90E8\u7F72\u5E94\u7528\u5305\u65F6\u7684\u57FA\u672C URL</p><p><strong>\u5982\u679C\u4E3A\u914D\u7F6E\uFF0C\u4F1A\u5BFC\u81F4\u8D44\u6E90\u65E0\u6CD5\u6B63\u5E38\u52A0\u8F7D</strong></p><ul><li>\u90E8\u7F72\u5728\u57DF\u540D\u7684\u6839\u8DEF\u5F84 <code>https://www.my-app.com/</code>\uFF0C\u5219\u8BBE\u7F6E <code>publicPath</code> \u4E3A <code>/</code>\u5373\u53EF</li><li>\u90E8\u7F72\u5728 <code>https://www.my-app.com/my-app/</code>\uFF0C\u5219\u8BBE\u7F6E <code>publicPath</code> \u4E3A <code>/my-app/</code></li><li>\u76F4\u63A5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84 (<code>&#39;./&#39;</code>)\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u8D44\u6E90\u90FD\u4F1A\u88AB\u94FE\u63A5\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u8FD9\u6837\u6253\u51FA\u6765\u7684\u5305\u53EF\u4EE5\u88AB\u90E8\u7F72\u5728\u4EFB\u610F\u8DEF\u5F84</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
    <span class="token operator">?</span> <span class="token string">&#39;./&#39;</span>
    <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>outputDir</strong>: \u6253\u5305\u8F93\u51FA\u76EE\u5F55\u540D\u79F0</p><p>\u9ED8\u8BA4\u4E3Adist\u3002\u53EF\u6539\u4E3A\u9879\u76EE\u6253\u5305\u540D\u79F0\uFF0C\u4EE5\u514D\u6BCF\u6B21\u6253\u5305\u66F4\u6539</p></li></ul><h2 id="_3-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_3-\u90E8\u7F72" aria-hidden="true">#</a> 3. \u90E8\u7F72</h2><h3 id="_3-1-\u90E8\u7F72\u5728nginx" tabindex="-1"><a class="header-anchor" href="#_3-1-\u90E8\u7F72\u5728nginx" aria-hidden="true">#</a> 3.1 \u90E8\u7F72\u5728nginx</h3><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># \u8FB9\u68C0\u6267\u6CD5\u529E\u6848\u7BA1\u7406\u7CFB\u7EDF</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>          <span class="token number">9802</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   /home/my_app</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679Cvue \u4EE5history\u6A21\u5F0F\u9700\u8981\u589E\u52A0try_files $uri $uri/ /index.html; ,has \u6A21\u5F0F\u5219\u4E0D\u9700\u8981</p>`,11),c=[t];function o(p,l){return s(),a("div",null,c)}const u=n(i,[["render",o],["__file","vue-deploy.html.vue"]]);export{u as default};
