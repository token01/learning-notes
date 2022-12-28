import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as n,b as s,d as e,f as t,r as i}from"./app.047e4de1.js";const l={},u=t('<h1 id="vue\u5B9E\u6218-\u9884\u89C8pdf" tabindex="-1"><a class="header-anchor" href="#vue\u5B9E\u6218-\u9884\u89C8pdf" aria-hidden="true">#</a> vue\u5B9E\u6218 - \u9884\u89C8pdf</h1><h2 id="_0-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_0-\u524D\u8A00" aria-hidden="true">#</a> 0. \u524D\u8A00</h2><ul><li>\u65B9\u5F0F1\uFF1A\u706B\u72D0</li><li>\u65B9\u5F0F2\uFF1Avue-pdf</li></ul><h2 id="_1-\u706B\u72D0\u96C6\u6210\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u706B\u72D0\u96C6\u6210\u4F7F\u7528" aria-hidden="true">#</a> 1. \u706B\u72D0\u96C6\u6210\u4F7F\u7528</h2>',4),r=n("p",null,"\u5C06pdf\u6587\u4EF6\u5939\u653E\u5728public \u76EE\u5F55\u4E0B",-1),d={href:"https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,[n("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210515161010336.png",alt:"image-20210515161010336"})],-1),h=t(`<li><p>\u5C06base64 \u8BBE\u7F6E\u5230sessionStorage, \u6253\u5F00\u65B0\u7A97\u53E3\u5C55\u793A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$post</span><span class="token punctuation">(</span><span class="token string">&quot;getBase64PdfStr&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> base64PdfStr <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
          sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;_imgUrl&quot;</span><span class="token punctuation">,</span> base64PdfStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;/pdf/web/viewer.html&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),_=n("h2",{id:"_2-\u65B9\u5F0F\u4E8C-vue-pdf",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u65B9\u5F0F\u4E8C-vue-pdf","aria-hidden":"true"},"#"),s(" 2. \u65B9\u5F0F\u4E8C\uFF1Avue-pdf")],-1),f={href:"http://www.ycmbcd.com/blog/html/16261748155391.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"\u6709\u4E24\u79CD\u7FFB\u9875\u65B9\u5F0F\uFF1A\u4E00\uFF1A\u6EDA\u52A8\u7FFB\u9875\u3001\u4E8C\uFF1A\u70B9\u51FB\u7FFB\u9875",-1),v=n("p",null,"\u200B",-1);function b(g,x){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,n("ol",null,[n("li",null,[r,n("p",null,[s("\u94FE\u63A5:"),n("a",d,[s("https://pan.baidu.com/s/1RTSb0jGWQdZ3xk4TX9FgaA"),e(a)]),s(" \u5BC6\u7801:g9c5")]),k]),h]),_,n("ul",null,[n("li",null,[n("p",null,[n("a",f,[s("\u597D\u6587\uFF1AVue\u4F7F\u7528vue-pdf.js\u8FDB\u884CPDF\u5206\u9875\u3001\u6EDA\u52A8\u9884\u89C8\u653E\u5927\u7F29\u5C0F\u7F29\u653E\u53CA\u6587\u4EF6\u63D0\u53D6\u7801\u4E0B\u8F7D\u52A0\u5BC6\u4E0B\u8F7D\u7684\u65B9\u6CD5"),e(a)])]),m])]),v])}const j=o(l,[["render",b],["__file","fe-lib-vue-preview-pdf.html.vue"]]);export{j as default};
