import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as d,a as e,b as n,d as s,f as i,r as l}from"./app.61aab752.js";const c={},o=i(`<h1 id="mac\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#mac\u5B89\u88C5nginx" aria-hidden="true">#</a> Mac\u5B89\u88C5nginx</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Mac\u5B89\u88C5nginx\uFF0C\u91C7\u7528Mac\u7684\u5305\u7BA1\u7406\u5DE5\u5177 <strong>homebrew</strong> \u5B89\u88C5</p><h2 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h2><h3 id="_2-1-\u6B65\u9AA4\u4E00-\u5148\u66F4\u65B0homebrew" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6B65\u9AA4\u4E00-\u5148\u66F4\u65B0homebrew" aria-hidden="true">#</a> 2.1 <strong>\u6B65\u9AA4\u4E00\uFF1A\u5148\u66F4\u65B0homebrew</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),u={href:"https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/",target:"_blank",rel:"noopener noreferrer"},h=i(`<h3 id="_2-2-\u6B65\u9AA4\u4E8C-\u67E5\u770Bnginx\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6B65\u9AA4\u4E8C-\u67E5\u770Bnginx\u4FE1\u606F" aria-hidden="true">#</a> 2.2 <strong>\u6B65\u9AA4\u4E8C</strong>\uFF1A \u67E5\u770Bnginx\u4FE1\u606F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew search nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210607150955882.png" alt="image-20210607150955882"></p><h3 id="_2-3-\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5B89\u88C5nginx" aria-hidden="true">#</a> 2.3 <strong>\u5B89\u88C5nginx</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>brew install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6BD5</p><ul><li>\u4E3B\u9875\u7684\u6587\u4EF6\u5728/usr/local/var/www \u6587\u4EF6\u5939\u4E0B</li><li>\u5BF9\u5E94\u7684\u914D\u7F6E\u6587\u4EF6\u5730\u5740\u5728/usr/local/etc/nginx/nginx.conf</li></ul><h3 id="_2-4-\u6B65\u9AA4\u56DB-\u8FD0\u884Cnginx" tabindex="-1"><a class="header-anchor" href="#_2-4-\u6B65\u9AA4\u56DB-\u8FD0\u884Cnginx" aria-hidden="true">#</a> <strong>2.4 \u6B65\u9AA4\u56DB\uFF1A\u8FD0\u884Cnginx</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nginx\u9ED8\u8BA4\u4F7F\u75288080\u7AEF\u53E3 \u5982\u679C\u53D1\u73B0\u7AEF\u53E3\u88AB\u5360\u7528\u4E86\uFF0C\u53EF\u4EE5\u6740\u6389\u4F7F\u7528\u4F7F\u7528\u6539\u7AEF\u53E3\u7684\u8FDB\u7A0B\uFF0C\u4E5F\u53EF\u4EE5\u4FEE\u6539/usr/local/etc/nginx/nginx.conf \u4E0B\u7684</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8181</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>  

        <span class="token comment">#charset koi8-r;</span>
        .....
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-\u91CD\u65B0\u542F\u52A8nginx" tabindex="-1"><a class="header-anchor" href="#_2-5-\u91CD\u65B0\u542F\u52A8nginx" aria-hidden="true">#</a> 2.5 <strong>\u91CD\u65B0\u542F\u52A8nginx</strong></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6210\u529F\u770B\u5230\u6B22\u8FCE\u9875\u9762\uFF5E\uFF01\uFF08\u5BF9\u5E94\u7684html\u662F/usr/local/var/www/index.html\uFF09</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210607151153045.png" alt="image-20210607151153045"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,16),p={href:"https://segmentfault.com/a/1190000016020328",target:"_blank",rel:"noopener noreferrer"};function g(m,x){const a=l("ExternalLinkIcon");return t(),d("div",null,[o,e("p",null,[n("\u5982\u679C\u4E0A\u9762\u64CD\u4F5C\u957F\u65F6\u95F4\u6CA1\u4EFB\u4F55\u52A8\u9759\uFF0C\u8BF7\u66F4\u6362\u955C\u50CF\uFF0C\u53C2\u8003\u6E05\u534E\u7684\u955C\u50CF "),e("a",u,[n("https://mirrors.tuna.tsinghua..."),s(a)])]),h,e("p",null,[e("a",p,[n("MAC\u4E0B\u5B89\u88C5nginx"),s(a)])])])}const _=r(c,[["render",g],["__file","nginx-y-mac-install.html.vue"]]);export{_ as default};
