import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as s,b as o,d as p,f as c,r as l}from"./app.20466b7d.js";const i={},d=c(`<h1 id="oracle\u51FD\u6570\u65E5\u671F\u683C\u5F0F\u8F6C\u6362-to-date" tabindex="-1"><a class="header-anchor" href="#oracle\u51FD\u6570\u65E5\u671F\u683C\u5F0F\u8F6C\u6362-to-date" aria-hidden="true">#</a> Oracle\u51FD\u6570\u65E5\u671F\u683C\u5F0F\u8F6C\u6362 to_date</h1><h2 id="_1-\u6BD4\u8F83\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#_1-\u6BD4\u8F83\u65E5\u671F" aria-hidden="true">#</a> 1. \u6BD4\u8F83\u65E5\u671F</h2><p>\u67E5\u627E\u51FA\u5927\u4E8E\u6307\u5B9A\u65E5\u671F\u7684\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT EMP_NAME, DEPT
FROM EMPLOYEE
WHERE TIME_CREATED &gt;= TO_DATE(&#39;2020/11/11&#39;,&#39;yyyy/MM/dd&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u5B57\u7B26\u4E32\u548C\u65F6\u95F4\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32\u548C\u65F6\u95F4\u8F6C\u6362" aria-hidden="true">#</a> 1. \u5B57\u7B26\u4E32\u548C\u65F6\u95F4\u8F6C\u6362</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> to_date<span class="token punctuation">(</span><span class="token string">&#39;2004-05-07 13:23:44&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;yyyy-mm-dd hh24:mi:ss&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span> to_date<span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">,</span><span class="token string">&#39;J&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;Jsp&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual <span class="token comment">//\u663E\u793ATwo Hundred Twenty-Two</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u65E5\u671F\u548C\u5B57\u7B26\u8F6C\u6362\u51FD\u6570\u7528\u6CD5-to-date-to-char" tabindex="-1"><a class="header-anchor" href="#_2-\u65E5\u671F\u548C\u5B57\u7B26\u8F6C\u6362\u51FD\u6570\u7528\u6CD5-to-date-to-char" aria-hidden="true">#</a> 2. \u65E5\u671F\u548C\u5B57\u7B26\u8F6C\u6362\u51FD\u6570\u7528\u6CD5\uFF08to_date,to_char)</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;yyyy-mm-dd hh24:mi:ss&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> nowTime <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u65E5\u671F\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;yyyy&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> nowYear <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u65F6\u95F4\u7684\u5E74</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;mm&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> nowMonth <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u65F6\u95F4\u7684\u6708</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;dd&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> nowDay <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u65F6\u95F4\u7684\u65E5</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;hh24&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> nowHour <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u65F6\u95F4\u7684\u65F6</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;mi&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> nowMinute <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u65F6\u95F4\u7684\u5206</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>sysdate<span class="token punctuation">,</span><span class="token string">&#39;ss&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> nowSecond <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u65F6\u95F4\u7684\u79D2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6C42\u67D0\u5929\u662F\u661F\u671F\u51E0" tabindex="-1"><a class="header-anchor" href="#_3-\u6C42\u67D0\u5929\u662F\u661F\u671F\u51E0" aria-hidden="true">#</a> 3. \u6C42\u67D0\u5929\u662F\u661F\u671F\u51E0</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> to_char<span class="token punctuation">(</span>to_date<span class="token punctuation">(</span><span class="token string">&#39;2002-08-26&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;day&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">//\u661F\u671F\u4E00</span>
<span class="token keyword">select</span> to_char<span class="token punctuation">(</span>to_date<span class="token punctuation">(</span><span class="token string">&#39;2002-08-26&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;day&#39;</span><span class="token punctuation">,</span>
<span class="token string">&#39;NLS_DATE_LANGUAGE = American&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span> <span class="token comment">// monday</span>
<span class="token comment">//\u8BBE\u7F6E\u65E5\u671F\u8BED\u8A00</span>
<span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> NLS_DATE_LANGUAGE<span class="token operator">=</span><span class="token string">&#39;AMERICAN&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//\u4E5F\u53EF\u4EE5\u8FD9\u6837</span>
TO_DATE <span class="token punctuation">(</span><span class="token string">&#39;2002-08-26&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;YYYY-mm-dd&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;NLS_DATE_LANGUAGE = American&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u4E24\u4E2A\u65E5\u671F\u95F4\u7684\u5929\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u4E24\u4E2A\u65E5\u671F\u95F4\u7684\u5929\u6570" aria-hidden="true">#</a> 4. \u4E24\u4E2A\u65E5\u671F\u95F4\u7684\u5929\u6570</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> floor<span class="token punctuation">(</span>sysdate <span class="token operator">-</span> to_date<span class="token punctuation">(</span><span class="token string">&#39;20200405&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;yyyymmdd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,13),r={href:"https://www.jb51.cc/oracle/65401.html",target:"_blank",rel:"noopener noreferrer"};function u(k,m){const n=l("ExternalLinkIcon");return e(),t("div",null,[d,s("p",null,[s("a",r,[o("oracle\u4E2Dto_date\u8BE6\u7EC6\u7528\u6CD5\u793A\u4F8B(oracle\u65E5\u671F\u683C\u5F0F\u8F6C\u6362)"),p(n)])])])}const v=a(i,[["render",u],["__file","oracle-c-function-to-date.html.vue"]]);export{v as default};
