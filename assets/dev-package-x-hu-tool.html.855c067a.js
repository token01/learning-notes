import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as l,a as t,b as n,d as e,f as o,r}from"./app.e7bdeba6.js";const c={},p=o('<h1 id="\u5E38\u7528\u5F00\u53D1\u5E93-hutool\u5305" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5F00\u53D1\u5E93-hutool\u5305" aria-hidden="true">#</a> \u5E38\u7528\u5F00\u53D1\u5E93 - Hutool\u5305</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Hutool\u662F\u4E00\u4E2A\u5C0F\u800C\u5168\u7684Java\u5DE5\u5177\u7C7B\u5E93\uFF0C\u901A\u8FC7\u9759\u6001\u65B9\u6CD5\u5C01\u88C5\uFF0C\u964D\u4F4E\u76F8\u5173API\u7684\u5B66\u4E60\u6210\u672C\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\uFF0C\u4F7FJava\u62E5\u6709\u51FD\u6570\u5F0F\u8BED\u8A00\u822C\u7684\u4F18\u96C5\uFF0C\u8BA9Java\u8BED\u8A00\u4E5F\u53EF\u4EE5\u201C\u751C\u751C\u7684\u201D\u3002</p><p>Hutool\u4E2D\u7684\u5DE5\u5177\u65B9\u6CD5\u6765\u81EA\u4E8E\u6BCF\u4E2A\u7528\u6237\u7684\u7CBE\u96D5\u7EC6\u7422\uFF0C\u5B83\u6DB5\u76D6\u4E86Java\u5F00\u53D1\u5E95\u5C42\u4EE3\u7801\u4E2D\u7684\u65B9\u65B9\u9762\u9762\uFF0C\u5B83\u65E2\u662F\u5927\u578B\u9879\u76EE\u5F00\u53D1\u4E2D\u89E3\u51B3\u5C0F\u95EE\u9898\u7684\u5229\u5668\uFF0C\u4E5F\u662F\u5C0F\u578B\u9879\u76EE\u4E2D\u7684\u6548\u7387\u62C5\u5F53\uFF1B</p><p>Hutool\u662F\u9879\u76EE\u4E2D\u201Cutil\u201D\u5305\u53CB\u597D\u7684\u66FF\u4EE3\uFF0C\u5B83\u8282\u7701\u4E86\u5F00\u53D1\u4EBA\u5458\u5BF9\u9879\u76EE\u4E2D\u516C\u7528\u7C7B\u548C\u516C\u7528\u5DE5\u5177\u65B9\u6CD5\u7684\u5C01\u88C5\u65F6\u95F4\uFF0C\u4F7F\u5F00\u53D1\u4E13\u6CE8\u4E8E\u4E1A\u52A1\uFF0C\u540C\u65F6\u53EF\u4EE5\u6700\u5927\u9650\u5EA6\u7684\u907F\u514D\u5C01\u88C5\u4E0D\u5B8C\u5584\u5E26\u6765\u7684bug\u3002</p><h3 id="_2-hutool\u540D\u79F0\u7684\u7531\u6765" tabindex="-1"><a class="header-anchor" href="#_2-hutool\u540D\u79F0\u7684\u7531\u6765" aria-hidden="true">#</a> 2. Hutool\u540D\u79F0\u7684\u7531\u6765</h3><p>Hutool = Hu + tool\uFF0C\u662F\u539F\u516C\u53F8\u9879\u76EE\u5E95\u5C42\u4EE3\u7801\u5265\u79BB\u540E\u7684\u5F00\u6E90\u5E93\uFF0C\u201CHu\u201D\u662F\u516C\u53F8\u540D\u79F0\u7684\u8868\u793A\uFF0Ctool\u8868\u793A\u5DE5\u5177\u3002Hutool\u8C10\u97F3\u201C\u7CCA\u6D82\u201D\uFF0C\u4E00\u65B9\u9762\u7B80\u6D01\u6613\u61C2\uFF0C\u4E00\u65B9\u9762\u5BD3\u610F\u201C\u96BE\u5F97\u7CCA\u6D82\u201D\u3002</p><h3 id="_3-hutool\u5982\u4F55\u6539\u53D8\u6211\u4EEC\u7684coding\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-hutool\u5982\u4F55\u6539\u53D8\u6211\u4EEC\u7684coding\u65B9\u5F0F" aria-hidden="true">#</a> 3. Hutool\u5982\u4F55\u6539\u53D8\u6211\u4EEC\u7684coding\u65B9\u5F0F</h3><p>Hutool\u7684\u76EE\u6807\u662F\u4F7F\u7528\u4E00\u4E2A\u5DE5\u5177\u65B9\u6CD5\u4EE3\u66FF\u4E00\u6BB5\u590D\u6742\u4EE3\u7801\uFF0C\u4ECE\u800C\u6700\u5927\u9650\u5EA6\u7684\u907F\u514D\u201C\u590D\u5236\u7C98\u8D34\u201D\u4EE3\u7801\u7684\u95EE\u9898\uFF0C\u5F7B\u5E95\u6539\u53D8\u6211\u4EEC\u5199\u4EE3\u7801\u7684\u65B9\u5F0F\u3002</p><p>\u4EE5\u8BA1\u7B97MD5\u4E3A\u4F8B\uFF1A</p><ul><li>\u3010\u4EE5\u524D\u3011\u6253\u5F00\u641C\u7D22\u5F15\u64CE -&gt; \u641C\u201CJava MD5\u52A0\u5BC6\u201D -&gt; \u6253\u5F00\u67D0\u7BC7\u535A\u5BA2-&gt; \u590D\u5236\u7C98\u8D34 -&gt; \u6539\u6539\u597D\u7528</li><li>\u3010\u73B0\u5728\u3011\u5F15\u5165Hutool -&gt; SecureUtil.md5()</li></ul><p>Hutool\u7684\u5B58\u5728\u5C31\u662F\u4E3A\u4E86\u51CF\u5C11\u4EE3\u7801\u641C\u7D22\u6210\u672C\uFF0C\u907F\u514D\u7F51\u7EDC\u4E0A\u53C2\u5DEE\u4E0D\u9F50\u7684\u4EE3\u7801\u51FA\u73B0\u5BFC\u81F4\u7684bug\u3002</p><h2 id="_4-\u5305\u542B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5305\u542B\u7EC4\u4EF6" aria-hidden="true">#</a> 4. \u5305\u542B\u7EC4\u4EF6</h2><p>\u4E00\u4E2AJava\u57FA\u7840\u5DE5\u5177\u7C7B\uFF0C\u5BF9\u6587\u4EF6\u3001\u6D41\u3001\u52A0\u5BC6\u89E3\u5BC6\u3001\u8F6C\u7801\u3001\u6B63\u5219\u3001\u7EBF\u7A0B\u3001XML\u7B49JDK\u65B9\u6CD5\u8FDB\u884C\u5C01\u88C5\uFF0C\u7EC4\u6210\u5404\u79CDUtil\u5DE5\u5177\u7C7B\uFF0C\u540C\u65F6\u63D0\u4F9B\u4EE5\u4E0B\u7EC4\u4EF6\uFF1A</p><table><thead><tr><th>\u6A21\u5757</th><th>\u4ECB\u7ECD</th></tr></thead><tbody><tr><td>hutool-aop</td><td>JDK\u52A8\u6001\u4EE3\u7406\u5C01\u88C5\uFF0C\u63D0\u4F9B\u975EIOC\u4E0B\u7684\u5207\u9762\u652F\u6301</td></tr><tr><td>hutool-bloomFilter</td><td>\u5E03\u9686\u8FC7\u6EE4\uFF0C\u63D0\u4F9B\u4E00\u4E9BHash\u7B97\u6CD5\u7684\u5E03\u9686\u8FC7\u6EE4</td></tr><tr><td>hutool-cache</td><td>\u7B80\u5355\u7F13\u5B58\u5B9E\u73B0</td></tr><tr><td>hutool-core</td><td>\u6838\u5FC3\uFF0C\u5305\u62ECBean\u64CD\u4F5C\u3001\u65E5\u671F\u3001\u5404\u79CDUtil\u7B49</td></tr><tr><td>hutool-cron</td><td>\u5B9A\u65F6\u4EFB\u52A1\u6A21\u5757\uFF0C\u63D0\u4F9B\u7C7BCrontab\u8868\u8FBE\u5F0F\u7684\u5B9A\u65F6\u4EFB\u52A1</td></tr><tr><td>hutool-crypto</td><td>\u52A0\u5BC6\u89E3\u5BC6\u6A21\u5757\uFF0C\u63D0\u4F9B\u5BF9\u79F0\u3001\u975E\u5BF9\u79F0\u548C\u6458\u8981\u7B97\u6CD5\u5C01\u88C5</td></tr><tr><td>hutool-db</td><td>JDBC\u5C01\u88C5\u540E\u7684\u6570\u636E\u64CD\u4F5C\uFF0C\u57FA\u4E8EActiveRecord\u601D\u60F3</td></tr><tr><td>hutool-dfa</td><td>\u57FA\u4E8EDFA\u6A21\u578B\u7684\u591A\u5173\u952E\u5B57\u67E5\u627E</td></tr><tr><td>hutool-extra</td><td>\u6269\u5C55\u6A21\u5757\uFF0C\u5BF9\u7B2C\u4E09\u65B9\u5C01\u88C5\uFF08\u6A21\u677F\u5F15\u64CE\u3001\u90AE\u4EF6\u3001Servlet\u3001\u4E8C\u7EF4\u7801\u3001Emoji\u3001FTP\u3001\u5206\u8BCD\u7B49\uFF09</td></tr><tr><td>hutool-http</td><td>\u57FA\u4E8EHttpUrlConnection\u7684Http\u5BA2\u6237\u7AEF\u5C01\u88C5</td></tr><tr><td>hutool-log</td><td>\u81EA\u52A8\u8BC6\u522B\u65E5\u5FD7\u5B9E\u73B0\u7684\u65E5\u5FD7\u95E8\u9762</td></tr><tr><td>hutool-script</td><td>\u811A\u672C\u6267\u884C\u5C01\u88C5\uFF0C\u4F8B\u5982Javascript</td></tr><tr><td>hutool-setting</td><td>\u529F\u80FD\u66F4\u5F3A\u5927\u7684Setting\u914D\u7F6E\u6587\u4EF6\u548CProperties\u5C01\u88C5</td></tr><tr><td>hutool-system</td><td>\u7CFB\u7EDF\u53C2\u6570\u8C03\u7528\u5C01\u88C5\uFF08JVM\u4FE1\u606F\u7B49\uFF09</td></tr><tr><td>hutool-json</td><td>JSON\u5B9E\u73B0</td></tr><tr><td>hutool-captcha</td><td>\u56FE\u7247\u9A8C\u8BC1\u7801\u5B9E\u73B0</td></tr><tr><td>hutool-poi</td><td>\u9488\u5BF9POI\u4E2DExcel\u7684\u5C01\u88C5</td></tr><tr><td>hutool-socket</td><td>\u57FA\u4E8EJava\u7684NIO\u548CAIO\u7684Socket\u5C01\u88C5</td></tr></tbody></table><p>\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u5BF9\u6BCF\u4E2A\u6A21\u5757\u5355\u72EC\u5F15\u5165\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5F15\u5165<code>hutool-all</code>\u65B9\u5F0F\u5F15\u5165\u6240\u6709\u6A21\u5757\u3002</p><h2 id="_5-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_5-\u6587\u6863" aria-hidden="true">#</a> 5. \u6587\u6863</h2>',17),i={href:"https://www.hutool.cn/docs/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://apidoc.gitee.com/loolly/hutool/",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="_6-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_6-\u5B89\u88C5" aria-hidden="true">#</a> 6. \u5B89\u88C5</h2><h3 id="_6-1-maven" tabindex="-1"><a class="header-anchor" href="#_6-1-maven" aria-hidden="true">#</a> 6.1 Maven</h3><p>\u5728\u9879\u76EE\u7684pom.xml\u7684dependencies\u4E2D\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-gradle" tabindex="-1"><a class="header-anchor" href="#_6-2-gradle" aria-hidden="true">#</a> 6.2 Gradle</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>compile &#39;cn.hutool:hutool-all:5.1.0&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,7),g={href:"https://pdai.tech/md/develop/package/dev-package-x-hu-tool.html",target:"_blank",rel:"noopener noreferrer"},k=t("strong",null,"\u5E38\u7528\u5F00\u53D1\u5E93 - Hutool\u5305",-1);function _(v,m){const a=r("ExternalLinkIcon");return d(),l("div",null,[p,t("ul",null,[t("li",null,[t("a",i,[n("\u4E2D\u6587\u6587\u6863"),e(a)]),n(" \u770B\u8FD9\u91CC")]),t("li",null,[t("a",u,[n("\u53C2\u8003API"),e(a)])])]),h,t("p",null,[t("a",g,[k,e(a)])])])}const f=s(c,[["render",_],["__file","dev-package-x-hu-tool.html.vue"]]);export{f as default};
