import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,f as a}from"./app.9ff179fe.js";const t={},d=a(`<h1 id="sql\u591A\u5B57\u6BB5\u805A\u5408\u7EDF\u8BA1\u7684\u601D\u8003" tabindex="-1"><a class="header-anchor" href="#sql\u591A\u5B57\u6BB5\u805A\u5408\u7EDF\u8BA1\u7684\u601D\u8003" aria-hidden="true">#</a> SQL\u591A\u5B57\u6BB5\u805A\u5408\u7EDF\u8BA1\u7684\u601D\u8003</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u9879\u76EE\u4E2D\u6709\u4E2A\u9700\u6C42\uFF0C\u9700\u8981\u7EDF\u8BA1\u5206\u7EC4\u4E2D\u7684\u4E24\u4E2A\u5B57\u6BB5\u7684\u6C47\u603B\u503C\u3002</p><p>\u9700\u6C42\u5927\u4F53\u5982\u4E0B\uFF1A</p><p>\u5047\u8BBE\u8981\u7EDF\u8BA1\u6BCF\u4E2A\u5E74\u6BB5\u7684\u4E3B\u79D1\u6559\u5E08\u4EBA\u6570\uFF0C\u8FD9\u4E9B\u6559\u5E08\u4FE1\u606F\u662F\u5B58\u5728\u6BCF\u4E2A\u73ED\u7EA7\u4E2D</p><blockquote><p>\u53EF\u80FD\u4F8B\u5B50\u4E0D\u591F\u6070\u5F53\uFF0C\u4F46\u662F\u5728\u6211\u7684\u4E1A\u52A1\u4E2D\u662F\u5B58\u5728\u8FD9\u6837\u4E00\u4E2A\u573A\u666F\u7684</p></blockquote><table><thead><tr><th>\u73ED\u7EA7id</th><th>\u5E74\u6BB5</th><th>\u8BED\u6587\u8001\u5E08</th><th>\u6570\u5B66\u8001\u5E08</th></tr></thead><tbody><tr><td>1</td><td>\u4E00\u5E74\u7EA7</td><td>\u5F20\u4E09</td><td>\u674E\u56DB</td></tr><tr><td>2</td><td>\u4E00\u5E74\u7EA7</td><td>\u674E\u56DB</td><td>\u5F20\u4E09</td></tr><tr><td>3</td><td>\u4E8C\u5E74\u7EA7</td><td>\u5F20\u4E09</td><td>\u674E\u56DB</td></tr></tbody></table><h2 id="_2-\u9762\u4E34\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u9762\u4E34\u7684\u95EE\u9898" aria-hidden="true">#</a> 2. \u9762\u4E34\u7684\u95EE\u9898</h2><p>\u6211\u8981\u5F97\u5230\u6BCF\u4E2A\u5E74\u6BB5\u7684\uFF0C\u8BED\u6587\u8001\u5E08\u6570\u548C\u6570\u5B66\u8001\u5E08\u6570\uFF0C\u90FD\u975E\u5E38\u597D\u53D6</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> \u5E74\u7EA7<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> \u8BED\u6587\u8001\u5E08<span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> \u6570\u5B66\u8001\u5E08<span class="token punctuation">)</span> <span class="token punctuation">,</span>
<span class="token keyword">from</span> \u73ED\u7EA7\u8868 
<span class="token keyword">group</span> <span class="token keyword">by</span> \u5E74\u7EA7<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4E5F\u6CA1\u6709\u5EFA\u8868\uFF0C\u53EA\u8BB2\u601D\u8DEF</p><p>\u4F46\u73B0\u5728\u8981\u6C42\u8001\u5E08\u603B\u548C\uFF0C\u6211 <code>count(distinct \u8BED\u6587\u8001\u5E08) , count(distinct \u6570\u5B66\u8001\u5E08)</code> \u5E76\u4E0D\u80FD\u5408\u5728\u4E00\u8D77\u3002</p><ul><li>count(distinct \u8BED\u6587\u8001\u5E08)+ count(distinct \u6570\u5B66\u8001\u5E08) \u4E0D\u7B49\u4E8E\u603B\u8001\u5E08\u6570</li></ul><p>\u56E0\u4E3A\u4ED6\u4EEC\u4F1A\u5B58\u5728\u91CD\u590D\u7684\u60C5\u51B5</p><h2 id="_3-\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3" aria-hidden="true">#</a> 3. \u89E3\u51B3</h2><h3 id="_3-1-\u65B9\u6848\u4E00" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u6848\u4E00" aria-hidden="true">#</a> 3.1 \u65B9\u6848\u4E00\uFF1A</h3><p>\u4F7F\u7528union all \u67E5\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u8001\u5E08\u3002\u518Dgroup by \u51FA\u6765</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select \u5E74\u7EA7,count (distinct \u8001\u5E08)
from (
         select f1.\u5E74\u7EA7 \u5E74\u7EA7,f1.\u8BED\u6587\u8001\u5E08 as \u8001\u5E08
         from \u73ED\u7EA7\u8868 f1
         where f1.KPFAID = &#39;5f67db08f3a848bdb7d1993206c9efff&#39;
         group by f1.\u5E74\u7EA7,f1.\u8BED\u6587\u8001\u5E08
         union all
         select f2.\u5E74\u7EA7  \u5E74\u7EA7, f2.\u6570\u5B66\u8001\u5E08 as \u8001\u5E08
         from \u73ED\u7EA7\u8868 f2
         where f2.KPFAID = &#39;5f67db08f3a848bdb7d1993206c9efff&#39;
        group by f2.\u5E74\u7EA7,f2.\u6570\u5B66\u8001\u5E08
         )
group by \u5E74\u7EA7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u53EF\u80FD\u5B58\u5728\u6027\u80FD\u95EE\u9898\uFF0C\u5982\u679C\u8868\u592A\u5927\u7684\u8BDD</p><h3 id="_3-2-redis" tabindex="-1"><a class="header-anchor" href="#_3-2-redis" aria-hidden="true">#</a> 3.2 redis</h3><p>\u5C06\u8001\u5E08\u653E\u5230redis set\u4E2D</p>`,21),i=[d];function c(l,r){return e(),s("div",null,i)}const u=n(t,[["render",c],["__file","sql-multi-field-aggregation.html.vue"]]);export{u as default};
