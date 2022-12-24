import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,f as d}from"./app.206d958e.js";const c={},l=d(`<h1 id="linux-cpu\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#linux-cpu\u76D1\u63A7" aria-hidden="true">#</a> Linux CPU\u76D1\u63A7</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5E38\u7528\u547D\u4EE4\u6709top \u548Cmpstat</p><h2 id="_2-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u547D\u4EE4" aria-hidden="true">#</a> 2.\u547D\u4EE4</h2><h3 id="_2-1-top" tabindex="-1"><a class="header-anchor" href="#_2-1-top" aria-hidden="true">#</a> 2.1 top</h3><h4 id="_2-1-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u7B80\u4ECB" aria-hidden="true">#</a> 2.1.1 \u7B80\u4ECB</h4><p>top\u547D\u4EE4 \u53EF\u4EE5\u5B9E\u65F6\u52A8\u6001\u5730\u67E5\u770B\u7CFB\u7EDF\u7684\u6574\u4F53\u8FD0\u884C\u60C5\u51B5\u3002</p><h4 id="_2-1-2-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u8BED\u6CD5" aria-hidden="true">#</a> 2.1.2 \u8BED\u6CD5\uFF1A</h4><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>top <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9009\u9879\uFF1A <code>-b</code>\uFF1A\u4EE5\u6279\u5904\u7406\u6A21\u5F0F\u64CD\u4F5C\uFF1B <code>-c</code>\uFF1A\u663E\u793A\u5B8C\u6574\u7684\u6CBB\u547D\u4EE4\uFF1B <code>-d</code>\uFF1A\u5C4F\u5E55\u5237\u65B0\u95F4\u9694\u65F6\u95F4\uFF1B <code>-I</code>\uFF1A\u5FFD\u7565\u5931\u6548\u8FC7\u7A0B\uFF1B <code>-s</code>\uFF1A\u4FDD\u5BC6\u6A21\u5F0F\uFF1B <code>-S</code>\uFF1A\u7D2F\u79EF\u6A21\u5F0F\uFF1B <code>-i&lt;\u65F6\u95F4&gt;</code>\uFF1A\u8BBE\u7F6E\u95F4\u9694\u65F6\u95F4\uFF1B <code>-u&lt;\u7528\u6237\u540D&gt;</code>\uFF1A\u6307\u5B9A\u7528\u6237\u540D\uFF1B <code>-p&lt;\u8FDB\u7A0B\u53F7&gt;</code>\uFF1A\u6307\u5B9A\u8FDB\u7A0B\uFF1B <code>-n&lt;\u6B21\u6570&gt;</code>\uFF1A\u5FAA\u73AF\u663E\u793A\u7684\u6B21\u6570</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220401142646239.png" alt="image-20220401142646239"></p><h4 id="_2-1-3-\u5B57\u6BB5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5B57\u6BB5\u8BF4\u660E" aria-hidden="true">#</a> 2.1.3 \u5B57\u6BB5\u8BF4\u660E</h4><ul><li><code>top</code>\uFF1A\u7CFB\u7EDF\u5F53\u524D\u65F6\u95F4</li><li><code>up xxx days</code>\uFF1A\u7CFB\u7EDF\u8FD0\u884C\u65F6\u95F4</li><li><code>1 users</code>\uFF1A\u5F53\u524D\u767B\u5F55\u7528\u6237\u4E2A\u6570</li><li><code>load average</code>\uFF1A\u7CFB\u7EDF\u8D1F\u8F7D\u3002\u5373\u4EFB\u52A1\u961F\u5217\u7684\u5E73\u5747\u957F\u5EA6\u3002\u4E09\u4E2A\u6570\u503C\u5206\u522B\u4E3A\u6700\u8FD11\u5206\u949F\u3001\u6700\u8FD15\u5206\u949F\u3001\u6700\u8FD115\u5206\u949F\u7684\u5E73\u5747\u8D1F\u8F7D\u3002\u2014\u2014\u8D85\u8FC7N\uFF08CPU\u6838\u6570\uFF09\u8BF4\u660E\u7CFB\u7EDF\u6EE1\u8D1F\u8377\u8FD0\u884C\u3002</li><li>Tasks <ul><li><code>total</code>\uFF1A\u603B\u8FDB\u7A0B\u6570</li><li><code>running</code>\uFF1A\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u6570</li><li><code>sleeping</code>\uFF1A\u7761\u7720\u7684\u8FDB\u7A0B\u6570</li><li><code>stopped</code>\uFF1A\u505C\u6B62\u7684\u8FDB\u7A0B\u6570</li><li><code>zombie</code>\uFF1A\u51BB\u7ED3\u7684\u8FDB\u7A0B\u6570</li></ul></li><li>%Cpu(s) <ul><li><code>us</code>\uFF1A\u7528\u6237\u8FDB\u7A0B\u6D88\u8017\u7684CPU\u767E\u5206\u6BD4</li><li><code>sy</code>\uFF1A\u5185\u6838\u8FDB\u7A0B\u6D88\u8017\u7684CPU\u767E\u5206\u6BD4</li><li><code>ni</code>\uFF1A\u6539\u53D8\u8FC7\u4F18\u5148\u7EA7\u7684\u8FDB\u7A0B\u5360\u7528CPU\u7684\u767E\u5206\u6BD4</li><li><code>id</code>\uFF1A\u7A7A\u95F2CPU\u7684\u767E\u5206\u6BD4</li><li><code>wa</code>\uFF1AIO\u7B49\u5F85\u6D88\u8017\u7684CPU\u767E\u5206\u6BD4</li></ul></li><li>Mem <ul><li><code>total</code>\uFF1A\u7269\u7406\u5185\u5B58\u603B\u91CF</li><li><code>free</code>\uFF1A\u7A7A\u95F2\u7269\u7406\u5185\u5B58\u603B\u91CF</li><li><code>used</code>\uFF1A\u5DF2\u7528\u7269\u7406\u5185\u5B58\u603B\u91CF</li><li><code>buff</code>\uFF1A\u7528\u4F5C\u5185\u6838\u7F13\u5B58\u5185\u5B58\u603B\u91CF</li></ul></li><li>Swap <ul><li><code>total</code>\uFF1A\u865A\u62DF\u5185\u5B58\u603B\u91CF</li><li><code>free</code>\uFF1A\u7A7A\u95F2\u865A\u62DF\u5185\u5B58\u603B\u91CF</li><li><code>used</code>\uFF1A\u5DF2\u7528\u865A\u62DF\u5185\u5B58\u603B\u91CF</li></ul></li></ul><h4 id="_2-1-4-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-4-\u5B9E\u4F8B" aria-hidden="true">#</a> 2.1.4 \u5B9E\u4F8B</h4><h5 id="_2-1-4-1-\u9ED8\u8BA4top" tabindex="-1"><a class="header-anchor" href="#_2-1-4-1-\u9ED8\u8BA4top" aria-hidden="true">#</a> 2.1.4.1 \u9ED8\u8BA4top</h5><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220401142646239.png" alt="image-20220401142646239"></p><h3 id="_2-2-mpstat" tabindex="-1"><a class="header-anchor" href="#_2-2-mpstat" aria-hidden="true">#</a> 2.2 mpstat</h3><h4 id="_2-2-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u7B80\u4ECB" aria-hidden="true">#</a> 2.2.1 \u7B80\u4ECB</h4><p>mpstat\u547D\u4EE4 \u6307\u4EE4\u4E3B\u8981\u7528\u4E8E\u591ACPU\u73AF\u5883\u4E0B\uFF0C\u5B83\u663E\u793A\u5404\u4E2A\u53EF\u7528CPU\u7684\u72B6\u6001\u7CFB\u4F60\u60F3\u3002</p><h4 id="_2-2-2-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u8BED\u6CD5" aria-hidden="true">#</a> 2.2.2 \u8BED\u6CD5\uFF1A</h4><div class="language-erlang ext-erlang line-numbers-mode"><pre class="language-erlang"><code><span class="token atom">mpstat</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9009\u9879\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>-P\uFF1A\u6307\u5B9ACPU\u7F16\u53F7\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\uFF1A</p><ul><li>\u95F4\u9694\u65F6\u95F4\uFF1A\u6BCF\u6B21\u62A5\u544A\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u79D2\uFF09\uFF1B</li><li>\u6B21\u6570\uFF1A\u663E\u793A\u62A5\u544A\u7684\u6B21\u6570\u3002</li></ul><h4 id="_2-2-3-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u793A\u4F8B" aria-hidden="true">#</a> 2.2.3 \u793A\u4F8B</h4><p>ALL\u8868\u793A\u663E\u793A\u6240\u6709CPUs\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u67D0\u4E2ACPU\uFF1B2\u8868\u793A\u5237\u65B0\u95F4\u9694\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220401143304219.png" alt="image-20220401143304219"></p>`,28),s=[l];function o(n,t){return a(),i("div",null,s)}const p=e(c,[["render",o],["__file","linux-j-cpu.html.vue"]]);export{p as default};
