import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,d as t,f as p,r as i}from"./app.7751c0ab.js";const l={},r=p('<h1 id="python\u722C\u53D612306\u57CE\u5E02\u7F16\u7801\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#python\u722C\u53D612306\u57CE\u5E02\u7F16\u7801\u8F6C\u6362" aria-hidden="true">#</a> python\u722C\u53D612306\u57CE\u5E02\u7F16\u7801\u8F6C\u6362</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5728\u505A\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u9047\u5230\u94C1\u8DEF\u57CE\u5E02\u7F16\u7801\u95EE\u9898\u3002\u5176\u4E2D\uFF1ABJP\u4E3A\u5317\u4EAC\u7AD9\u7F16\u7801\uFF1BTJP\u4E3A\u5929\u6D25\u7AD9\u7F16\u7801\u3002</p><p>\u6211\u4EEC\u5728\u4FE1\u606F\u67E5\u8BE2-&gt;\u6B63\u665A\u70B9-&gt;\u53EF\u4EE5\u770B\u5230station_name.js\u8FD4\u56DE\u4E86\u57CE\u5E02\u7F16\u7801\u4FE1\u606F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210202094628947.png" alt="image-20210202094628947"></p>',5),u=n("strong",null,"\u8BF7\u6C42\u5730\u5740",-1),d={href:"https://kyfw.12306.cn/otn/resources/js/framework/station_name.js",target:"_blank",rel:"noopener noreferrer"},k=p(`<p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210202095058660.png" alt="image-20210202095058660"></p><h2 id="_2-\u722C\u866B" tabindex="-1"><a class="header-anchor" href="#_2-\u722C\u866B" aria-hidden="true">#</a> 2. \u722C\u866B</h2><p>\u722C\u866B\u76EE\u7684\uFF1A \u4ECE\u5982\u4E0A\u94FE\u63A5\u83B7\u53D6\u57CE\u5E02\u5BF9\u5E94\u7684\u4E09\u5B57\u7801</p><ol><li>\u83B7\u53D6\u94FE\u63A5\u5185\u5BB9</li><li>\u53BB\u6389\u524D20\u4E2A\u65E0\u7528\u5B57\u7B26</li><li>\u4EE5|\u5206\u9694\uFF0C\u6BCF5\u4E2A\u662F\u4E00\u7EC4\u57CE\u5E02</li><li>\u53D6\u6BCF\u7EC4\u7B2C\u4E8C\u4E09\u4E2A\uFF0C\u8FD4\u56DEdict</li></ol><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> requests

<span class="token comment"># \u7531\u4E8E\u706B\u8F66\u7AD9\u4F7F\u7528\u4E09\u5B57\u7801\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5148\u83B7\u53D6\u7AD9\u70B9\u5BF9\u5E94\u7684\u4E09\u5B57\u7801</span>
code_data <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://kyfw.12306.cn/otn/resources/js/framework/station_name.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>code_data<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token comment"># \u5904\u7406\u83B7\u5F97\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u5B57\u5178\u7C7B\u578B</span>
<span class="token keyword">def</span> <span class="token function">zip_dic</span><span class="token punctuation">(</span>code_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u53BB\u9664\u524D20\u4E2A\u5B57\u7B26</span>
    code_data <span class="token operator">=</span> code_data<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token comment"># print(code_data)</span>
    <span class="token comment"># \u4EE5\u7AD6\u7EBF\u5212\u5206\u5B57\u7B26\uFF0C\u6BCF5\u4E2A\u662F\u4E00\u7EC4\u57CE\u5E02\u4FE1\u606F\uFF0C\u6BCF\u7EC4\u7B2C\u4E8C\u4E09\u4E2A\u662F\u57CE\u5E02\u7F16\u7801\u548C\u57CE\u5E02\u540D\u79F0</span>
    list_code <span class="token operator">=</span> code_data<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>list_code<span class="token punctuation">)</span>
    a<span class="token operator">=</span><span class="token number">1</span>
    b<span class="token operator">=</span><span class="token number">2</span>
    t1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    t2<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>list_code<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        t1<span class="token punctuation">.</span>append<span class="token punctuation">(</span>list_code<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span>
        t2<span class="token punctuation">.</span>append<span class="token punctuation">(</span>list_code<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>
        a <span class="token operator">=</span> a<span class="token operator">+</span><span class="token number">5</span>
        b <span class="token operator">=</span> b<span class="token operator">+</span><span class="token number">5</span>
    dic <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token builtin">zip</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span>t2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> dic

code_dic <span class="token operator">=</span> zip_dic<span class="token punctuation">(</span>code_data<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>code_dic<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u9644\u5F55" tabindex="-1"><a class="header-anchor" href="#_3-\u9644\u5F55" aria-hidden="true">#</a> 3. \u9644\u5F55</h2><p>\u57CE\u5E02\u7F16\u7801\u548C\u57CE\u5E02\u8F6C\u6362json\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string-property property">&quot;\u5317\u4EAC\u5317&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VAP&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u5317\u4EAC\u4E1C&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BOP&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u5317\u4EAC&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BJP&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u5317\u4EAC\u5357&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VNP&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u5317\u4EAC\u897F&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BXP&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u5E7F\u5DDE\u5357&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IZQ&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u91CD\u5E86\u5317&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CUW&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u91CD\u5E86&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CQW&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u91CD\u5E86\u5357&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CRW&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u91CD\u5E86\u897F&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CXW&quot;</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;\u5E7F\u5DDE\u4E1C&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GGQ&quot;</span><span class="token punctuation">,</span>
	<span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v={href:"https://pan.baidu.com/s/1QYZnGQP7BadfvccHZq6ASA",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u6587\u7AE0")],-1),b={href:"https://blog.csdn.net/kcyxws/article/details/105823767",target:"_blank",rel:"noopener noreferrer"};function h(_,g){const a=i("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[u,s("\uFF1A"),n("a",d,[s("https://kyfw.12306.cn/otn/resources/js/framework/station_name.js"),t(a)])]),k,n("p",null,[s("\u94FE\u63A5\uFF1A"),n("a",v,[s("https://pan.baidu.com/s/1QYZnGQP7BadfvccHZq6ASA"),t(a)]),s(" \u63D0\u53D6\u7801\uFF1Av8cf \u590D\u5236\u8FD9\u6BB5\u5185\u5BB9\u540E\u6253\u5F00\u767E\u5EA6\u7F51\u76D8\u624B\u673AApp\uFF0C\u64CD\u4F5C\u66F4\u65B9\u4FBF\u54E6")]),m,n("p",null,[n("a",b,[s("python\u722C\u866B\uFF1A\u83B7\u53D612306\u7F51\u7AD9\u706B\u8F66\u7AD9\u5BF9\u5E94\u4E09\u5B57\u7801"),t(a)])])])}const f=e(l,[["render",h],["__file","python-12306-coty-code.html.vue"]]);export{f as default};
