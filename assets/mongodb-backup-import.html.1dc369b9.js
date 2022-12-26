import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as s,a as t,b as l,d as n,f as o,r}from"./app.c8d9b7d0.js";const i={},g=o(`<h1 id="mongodb\u6570\u636E\u5BFC\u5165\u4E0E\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#mongodb\u6570\u636E\u5BFC\u5165\u4E0E\u5BFC\u51FA" aria-hidden="true">#</a> MongoDB\u6570\u636E\u5BFC\u5165\u4E0E\u5BFC\u51FA</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>MongoDB\u5B98\u65B9\u63D0\u4F9B\u4E86\u4E24\u5957\u6570\u636E\u5BFC\u5165\u5BFC\u51FA\u5DE5\u5177\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C</p><ul><li>mongodump\u548Cmongorestore <ul><li>\u8FDB\u884C\u6574\u5E93\u5BFC\u51FA\u5BFC\u5165\u65F6\u4F7F\u7528</li><li>\u64CD\u4F5C\u7684\u6570\u636E\u662FBSON\u683C\u5F0F\uFF0C\u8FDB\u884C\u5927\u91CFdump\u548Crestore\u65F6\u6548\u7387\u8F83\u9AD8\u3002</li></ul></li><li>mongoexport\u548Cmongoimport <ul><li>\u8FDB\u884C\u5355\u4E2A\u96C6\u5408\u5BFC\u51FA\u5BFC\u5165\u65F6\u4F7F\u7528</li><li>\u64CD\u4F5C\u7684\u6570\u636E\u662FJSON\u683C\u5F0F\uFF0C\u53EF\u8BFB\u6027\u8F83\u9AD8</li></ul></li></ul><h2 id="_2-mongoexport-\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#_2-mongoexport-\u5BFC\u51FA" aria-hidden="true">#</a> 2. mongoexport\uFF08\u5BFC\u51FA\uFF09</h2><h3 id="_2-1-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-1-\u53C2\u6570" aria-hidden="true">#</a> 2.1 \u53C2\u6570</h3><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u5168\u79F0</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u53C2\u8003\u91CA\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;"></td><td style="text-align:left;">--help</td><td style="text-align:left;"></td><td style="text-align:left;">\u67E5\u770Bmongoexport\u7684\u4F7F\u7528\u5E2E\u52A9</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--version</td><td style="text-align:left;"></td><td style="text-align:left;">\u67E5\u770Bmongoexport\u7684\u7248\u672C\u53F7</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;"><code>--db &lt;database&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">\u6307\u5B9A\u8981\u5728\u54EA\u4E2A\u6570\u636E\u5E93\u4E0A\u8FD0\u884C\u8BE5\u547D\u4EE4</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;"><code>--collection &lt;collection&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">\u6307\u5B9A\u8981\u5BFC\u51FA\u7684\u96C6\u5408</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">--fields &lt;field1[,field2]&gt;</td><td style="text-align:left;"></td><td style="text-align:left;">\u6307\u5B9A\u5BFC\u51FA\u65F6\u53EA\u5BFC\u51FA\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u6BB5\uFF0C\u5BFC\u51FA\u591A\u4E2A\u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u9017\u53F7\u5206\u9694; \u5F53\u5B57\u6BB5\u4E2D\u6709\u7A7A\u683C\u65F6\uFF0C\u9700\u8981\u7528\u82F1\u6587\u5F15\u53F7\u62EC\u8D77\u6765\u3002</td></tr><tr><td style="text-align:left;">-q</td><td style="text-align:left;"><code>--query &lt;JSON&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">\u5BFC\u51FA\u6307\u5B9A\u67E5\u8BE2\u6761\u4EF6\u7684\u6570\u636E</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;"><code>--type &lt;string&gt;</code></td><td style="text-align:left;">json</td><td style="text-align:left;">\u6307\u5B9A\u8981\u5BFC\u51FA\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\uFF1Ajson\uFF0Ccsv</td></tr><tr><td style="text-align:left;">-o</td><td style="text-align:left;"><code>--out &lt;file&gt;</code></td><td style="text-align:left;"></td><td style="text-align:left;">\u6307\u5B9A\u8981\u5BFC\u51FA\u7684\u6587\u4EF6\u8DEF\u5F84\uFF08\u542B\u6587\u4EF6\u540D\uFF09\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u4F1A\u5BFC\u51FA\u4E3A\u6807\u51C6\u8F93\u51FA\uFF08\u4F8B\u5982stdout\uFF09</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--limit</td><td style="text-align:left;"></td><td style="text-align:left;">\u67E5\u8BE2\u51E0\u6761\u6570\u636E</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--skip</td><td style="text-align:left;"></td><td style="text-align:left;">\u8DF3\u8FC7\u6307\u5B9A\u6570\u91CF\u7684\u6570\u636E</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">--sort</td><td style="text-align:left;"></td><td style="text-align:left;">\u6392\u5E8F\u89C4\u5219</td></tr></tbody></table><h3 id="_2-2-\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E3E\u4F8B" aria-hidden="true">#</a> 2.2 \u4E3E\u4F8B</h3><p>\u5BFC\u51FAmytest\u6570\u636E\u5E93\u4E2D\u7684user\u96C6\u5408\u5230user.json\u6587\u4EF6\u4E2D</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>D<span class="token punctuation">:</span>\\tool\\mongodb<span class="token operator">-</span>server\\bin\\mongoexport<span class="token punctuation">.</span>exe <span class="token operator">--</span>collection myCollection <span class="token operator">--</span>db myDB <span class="token operator">-</span>o D<span class="token punctuation">:</span>\\data\\myCollection<span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210104144117228.png" alt="image-20210104144117228"></p><h2 id="_3-mongoimport-\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_3-mongoimport-\u5BFC\u5165" aria-hidden="true">#</a> 3. mongoimport\uFF08\u5BFC\u5165\uFF09</h2><h3 id="_3-1-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-1-\u53C2\u6570" aria-hidden="true">#</a> 3.1 \u53C2\u6570</h3><table><thead><tr><th style="text-align:left;">\u547D\u4EE4</th><th style="text-align:left;">\u53EF\u9009\u503C</th><th style="text-align:left;">\u53C2\u8003\u91CA\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">--ignoreBlanks</td><td style="text-align:left;"></td><td style="text-align:left;">\u5FFD\u7565\u8981\u5BFC\u5165\u6587\u4EF6\u4E2D\u7684\u7A7A\u5B57\u6BB5\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u8BE5\u53C2\u6570\uFF0C\u5219\u9ED8\u8BA4\u4F1A\u8BFB\u53D6\u7A7A\u5B57\u6BB5\u5E76\u521B\u5EFA</td></tr><tr><td style="text-align:left;">--type &lt;json|csv|tsv&gt;</td><td style="text-align:left;">json\uFF0Ccsv\uFF0Ctsv</td><td style="text-align:left;">\u8981\u5BFC\u5165\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u53E6\u5916\u652F\u6301tsv</td></tr><tr><td style="text-align:left;">--headerline</td><td style="text-align:left;"></td><td style="text-align:left;">\u4F7F\u7528\u7B2C\u4E00\u884C\u4F5C\u4E3A\u5B57\u6BB5\u540D\u79F0</td></tr><tr><td style="text-align:left;">--mode &lt;insert|upsert|merge&gt;</td><td style="text-align:left;">insert\uFF08\u63D2\u5165\uFF09\uFF0C upsert\uFF08\u66FF\u6362\u6570\u636E\u5E93\u4E2D\u7684\u6587\u6863\uFF09\uFF0C merge\uFF08\u5408\u5E76\uFF09</td><td style="text-align:left;">\u6307\u5B9A\u5BFC\u5165\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u4F55\u5E94\u5BF9\u6570\u636E\u5E93\u6587\u6863\u4E0E\u5BFC\u5165\u6587\u4EF6\u4E2D\u7684\u6587\u6863\u5339\u914D \uFF08\u9ED8\u8BA4\u4F1A\u4F7F\u7528_id\u5B57\u6BB5\u5BF9\u6BD4\uFF09\u7684\u60C5\u51B5</td></tr><tr><td style="text-align:left;">--drop</td><td style="text-align:left;"></td><td style="text-align:left;">\u5BFC\u5165\u4E4B\u524Ddrop\u96C6\u5408</td></tr><tr><td style="text-align:left;">--stopOnError</td><td style="text-align:left;"></td><td style="text-align:left;">\u9009\u9879\u6307\u5B9A\u5728mongorestore<strong>\u8FD8\u539F\u5BFC\u5165\u65F6\u4E00\u51FA\u9519\u5C31\u4E2D\u6B62</strong>\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C \u5F53mongorestore\u9047\u5230\u4E3B\u952E\u91CD\u590D\u6216\u6587\u6863\u8F83\u9A8C\u5931\u8D25\u7B49\u9519\u8BEF\u65F6\uFF0C\u5BFC\u5165\u8FDB\u7A0B\u5E76\u4E0D\u4F1A\u4E2D\u6B62\u3002</td></tr><tr><td style="text-align:left;">--maintainInsertionOrder</td><td style="text-align:left;"></td><td style="text-align:left;">\u9009\u9879\u4ECE\u7248\u672C4.2\u5F00\u59CB\u5F15\u5165\uFF0C\u5982\u679C\u6307\u5B9A\u8BE5\u9009\u9879\uFF0C<strong>mongorestore\u5728\u8FD8\u539F\u5BFC\u5165\u6587\u6863\u65F6\u4EE5\u5B9E\u9645\u5BFC\u51FA\u65F6\u7684\u63D2\u5165\u987A\u5E8F\u4E00\u81F4</strong>\uFF0C\u8FD9\u5176\u4E2D\u5305\u62EC\u6279\u91CF\u5199\u6587\u6863\u7684\u987A\u5E8F\u4EE5\u53CA\u5728\u6279\u91CF\u4E2D\u6587\u6863\u7684\u63D2\u5165\u987A\u5E8F\uFF0C\u5728\u65E9\u671F\u7248\u672C\u4E2D\u53EA\u80FD\u4FDD\u8BC1\u6279\u91CF\u5199\u6587\u6863\u7684\u987A\u5E8F\u3002\u5982\u679C\u6307\u5B9A\u8BE5\u9009\u9879\u540C\u65F6\u4E5F\u6307\u5B9A\u4E86\u9009\u9879</td></tr></tbody></table><p>\u5176\u4ED6\u53C2\u6570\u4E0Emongoexport\u57FA\u672C\u4E00\u81F4</p><h3 id="_3-2-\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4E3E\u4F8B" aria-hidden="true">#</a> 3.2 \u4E3E\u4F8B</h3><p>\u4ECEuser.json\u6587\u4EF6\u5BFC\u5165\u5230mytest\u6570\u636E\u5E93\u4E2D\u7684user\u96C6\u5408\uFF0C\u5E76\u5728\u4E4B\u524D\u8FDB\u884C\u5220\u9664</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>mongoimport <span class="token comment">--drop -d mytest -c user --file F:\\bk\\user.json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210104144243185.png" alt="image-20210104144243185"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,20),c={href:"https://www.cnblogs.com/dbabd/p/13259147.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/qq_16313365/article/details/56494522",target:"_blank",rel:"noopener noreferrer"},x={href:"https://segmentfault.com/a/1190000012330284",target:"_blank",rel:"noopener noreferrer"};function h(p,y){const e=r("ExternalLinkIcon");return d(),s("div",null,[g,t("p",null,[t("a",c,[l("MongoDB \u903B\u8F91\u8FD8\u539F\u5DE5\u5177mongorestore "),n(e)])]),t("p",null,[t("a",f,[l("MongoDB\u5B66\u4E60\uFF08\u516D\uFF09\u6570\u636E\u5E93\u7684\u5907\u4EFD\u3001\u8FD8\u539F\u3001\u5BFC\u5165\u53CA\u5BFC\u51FA"),n(e)])]),t("p",null,[t("a",x,[l("Docker MongoDB \u6570\u636E\u5E93\u5907\u4EFD \u5E76\u590D\u5236\u5230\u5BBF\u4E3B \u6062\u590D"),n(e)])])])}const b=a(i,[["render",h],["__file","mongodb-backup-import.html.vue"]]);export{b as default};
