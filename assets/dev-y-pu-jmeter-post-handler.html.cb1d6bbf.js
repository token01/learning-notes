import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as d,a as e,b as a,d as s,f as r,r as h}from"./app.7119a543.js";const c={},l=r('<h1 id="jmeter\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#jmeter\u7684\u5B89\u88C5" aria-hidden="true">#</a> JMeter\u7684\u5B89\u88C5</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Apache JMeter \u662F\u4E00\u500B Apache \u5C08\u6848\uFF0C\u76EE\u7684\u662F\u7528\u4F86\u4F5C load test \u5DE5\u5177\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u65BC\u5206\u6790\u548C\u6E2C\u91CF\u5404\u7A2E\u670D\u52D9\u7684\u6027\u80FD\uFF0C\u4E3B\u8981\u76EE\u6A19\u662F Web application\u3002 JMeter \u4E5F\u53EF\u4EE5\u7528\u4F86\u9032\u884C JDBC\u6578\u64DA\u5EAB\u9023\u63A5\uFF0CFTP\uFF0CLDAP\uFF0CWebService\uFF0CJMS\uFF0CHTTP\uFF0C\u4E00\u822C TCP \u9023\u7DDA\u548C OSnative processes \u7684\u55AE\u5143\u6E2C\u8A66\u5DE5\u5177\u3002</p><h2 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h2><p>\u5B89\u88C5\u65B9\u5F0F\u6709\u4E24\u79CD</p><h3 id="_2-1-\u624B\u52A8\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u624B\u52A8\u5B89\u88C5" aria-hidden="true">#</a> 2.1 \u624B\u52A8\u5B89\u88C5</h3>',6),o={href:"https://jmeter.apache.org/download_jmeter.cgi",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,[a("\u57F7\u884C "),e("code",null,"apache-jmeter-5.1.1/bin/jmeter.sh")],-1),m=r(`<h3 id="_2-2-\u4F7F\u7528-homebrew" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4F7F\u7528-homebrew" aria-hidden="true">#</a> 2.2 \u4F7F\u7528 homebrew</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> jmeter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F1A\u81EA\u52A8\u52A0\u5165\u73AF\u5883\u53D8\u91CF\uFF0C\u4E0D\u7528\u6307\u5B9A\u6267\u884C\u8DEF\u5F84</p><h2 id="_3-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-\u542F\u52A8" aria-hidden="true">#</a> 3. \u542F\u52A8</h2><h3 id="_3-1-\u7EC8\u7AEF\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7EC8\u7AEF\u542F\u52A8" aria-hidden="true">#</a> 3.1 \u7EC8\u7AEF\u542F\u52A8</h3><p>\u76F4\u63A5\u5728\u7EC8\u7AEF\uFF08\u4EFB\u610F\u76EE\u5F55\uFF09\u8F93\u5165<code>jmeter</code>\uFF0C\u5373\u53EF\u542F\u52A8JMeter\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200102181112165.png" alt="image-20200102181112165"></p><h3 id="_3-2\u5B89\u88C5\u8DEF\u5F84\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_3-2\u5B89\u88C5\u8DEF\u5F84\u542F\u52A8" aria-hidden="true">#</a> 3.2\u5B89\u88C5\u8DEF\u5F84\u542F\u52A8</h3><p>\u5B89\u88C5\u5B8C\u6210\u540E\u63D0\u793A\u7684\u5B89\u88C5\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/Cellar/jmeter/5.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u70B9\u51FBbin\u4E0B\u7684</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200102104226244.png" alt="image-20200102104226244"></p><p>\u53EF\u4EE5\u770B\u5230\u542F\u52A8\u540E\u7684\u9875\u9762\u4E3A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200102104300100.png" alt="image-20200102104300100"></p><h2 id="_4-\u8BBE\u7F6E\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#_4-\u8BBE\u7F6E\u4E2D\u6587" aria-hidden="true">#</a> 4. \u8BBE\u7F6E\u4E2D\u6587</h2><h3 id="_4-1-\u4E34\u65F6\u8BBE\u7F6E\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4E34\u65F6\u8BBE\u7F6E\u4E2D\u6587" aria-hidden="true">#</a> 4.1 \u4E34\u65F6\u8BBE\u7F6E\u4E2D\u6587</h3><p>Options-Choose Language-Chinese(S)</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220621140727177.png" alt="image-20220621140727177"></p><h3 id="_4-2-\u6C38\u4E45\u8BBE\u7F6E\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6C38\u4E45\u8BBE\u7F6E\u4E2D\u6587" aria-hidden="true">#</a> 4.2 \u6C38\u4E45\u8BBE\u7F6E\u4E2D\u6587</h3><p>\u5728jmeter\u5B89\u88C5\u8DEF\u5F84<code>/usr/local/Cellar/jmeter/5.2.1/libexec/bin/</code>\u4E2D\u7684jmeter.properties\uFF0C</p><ol><li>\u6253\u5F00\u8BE5\u6587\u4EF6</li><li>\u641C\u7D22#language=en\uFF0C\u5C06#language=en\u4FEE\u6539\u4E3Alanguage=zh_CN\u3002</li></ol>`,21);function u(_,g){const i=h("ExternalLinkIcon");return t(),d("div",null,[l,e("ol",null,[e("li",null,[a("\u4E0B\u8F09\u4E26\u89E3\u58D3 \b"),e("a",o,[a("Apache JMeter"),s(i)])]),p]),m])}const x=n(c,[["render",u],["__file","dev-y-pu-jmeter-post-handler.html.vue"]]);export{x as default};
