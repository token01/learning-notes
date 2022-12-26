import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as o}from"./app.da5f94a0.js";const t={},e=o(`<h1 id="mongodb\u5927\u6570\u636E\u91CF\u67E5\u8BE2\u6162\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#mongodb\u5927\u6570\u636E\u91CF\u67E5\u8BE2\u6162\u95EE\u9898" aria-hidden="true">#</a> mongodb\u5927\u6570\u636E\u91CF\u67E5\u8BE2\u6162\u95EE\u9898</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u5355\u4E2Acollection \u6709100\u591A\u4E07\u6570\u636E\uFF0C\u5355\u5355\u4E00\u4E2Acount\u67E5\u8BE2\u5C31\u89811\u5206\u591A\u949F\uFF0C\u5176\u4ED6\u5206\u9875\u67E5\u6570\u636E\u4E5F\u662F\u6162\u6210\u72D7\u4E86\u3002\u751A\u81F3\u6709\u65F6\u5019\u670D\u52A1\u5668\u76F4\u63A5\u6302\u6389</p><p>\u4F46\u662F\u8FD9\u4E2A\u6570\u636E\u91CF\u5728robo 3t \u5F88\u5FEB\uFF0C\u4F46\u5728\u6211\u7684\u4EE3\u7801\u548Cidea \u7684datagrid \u4E2D\u5C31\u7279\u522B\u6162\u3002</p><p>\u7ECF\u8FC7\u4E00\u7CFB\u5217\u7684\u6392\u67E5\u5927\u81F4\u53EF\u4EE5\u4ECE\u51E0\u4E2A\u65B9\u9762\u5165\u624B</p><h2 id="_2-\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3" aria-hidden="true">#</a> 2. \u89E3\u51B3</h2><h3 id="_2-1-\u964D\u4F4Emongodb-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-1-\u964D\u4F4Emongodb-\u7248\u672C" aria-hidden="true">#</a> 2.1 \u964D\u4F4Emongodb \u7248\u672C</h3><p>\u539F\u672Cspring-boot\u7248\u672C\u4E3A2.5.x \u5173\u8054\u7684mongo\u7248\u672C\u4E3A4.x</p><blockquote><p>4.x\u7248\u672C\u6539\u52A8\u6BD4\u8F83\u5927\uFF0C\u67E5\u8BE2\u7684\u4F18\u5316\u53EF\u80FD\u6CA1\u505A\u597D\u5BFC\u81F4</p></blockquote><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220126164949424.png" alt="image-20220126164949424"></p><p>\u964D\u4F4Espring-boot\u7248\u672C\u4E3A2.2.x \u5173\u8054\u7684mongo\u7248\u672C\u4E3A3.x</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220126164746396.png" alt="image-20220126164746396"></p><p>\u901F\u5EA6\u5FEB\u4E86\u597D\u591A</p><h3 id="_2-2-mongorepository-\u66FF\u6362\u4E3Amongotemplate-cursor-\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-2-mongorepository-\u66FF\u6362\u4E3Amongotemplate-cursor-\u5F62\u5F0F" aria-hidden="true">#</a> 2.2 MongoRepository \u66FF\u6362\u4E3AMongoTemplate.cursor \u5F62\u5F0F</h3><p>\u4F7F\u7528MongoTemplate.cursor\u5F62\u5F0F\u4F1A\u5FEB\u5F88\u591A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>     <span class="token class-name">FindIterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> findIterable <span class="token operator">=</span> mongoTemplate<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        findIterable<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span>pageable<span class="token punctuation">.</span><span class="token function">getPageSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> pageable<span class="token punctuation">.</span><span class="token function">getOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MongoCursor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> cursor <span class="token operator">=</span> findIterable<span class="token punctuation">.</span><span class="token function">cursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[e];function c(i,l){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","mongodb-problem-slow.html.vue"]]);export{d as default};
