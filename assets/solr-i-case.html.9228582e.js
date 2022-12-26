import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as t}from"./app.c8d9b7d0.js";const p={},e=t(`<h1 id="solr\u641C\u7D22\u5927\u5C0F\u5199\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#solr\u641C\u7D22\u5927\u5C0F\u5199\u95EE\u9898" aria-hidden="true">#</a> Solr\u641C\u7D22\u5927\u5C0F\u5199\u95EE\u9898</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5728ik\u5206\u8BCD\u4E2D\u9ED8\u8BA4\u662F\u533A\u5206\u5927\u5C0F\u5199\u7684\u3002\u4E5F\u5C31\u662F\u65E0\u8BBA\u539F\u59CB\u5B57\u7B26\u662F\u5927\u5199\u8FD8\u662F\u5C0F\u5199\u3002\u4F60\u641C\u7D22\u65F6\u8DDF\u5927\u5C0F\u5199\u4E5F\u65E0\u5173</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220414100303196.png" alt="image-20220414100303196"></p><p>\u4F46\u6709\u4E9B\u573A\u666F\u6211\u4EEC\u4E0D\u5E0C\u671B\u4F7F\u7528ik\u5206\u8BCD\uFF0C\u5E0C\u671B\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u5B57\u7B26\u4E32\u3002\u4F8B\u5982\u6211\u4EEC\u8FD9\u91CC\u6307\u5B9A\u7C7B\u578B\u4E3Astring</p><p>\u90A3\u4E48\u56E0\u4E3A\u5927\u5C0F\u5199\u7684\u5173\u7CFB\u5C31\u4F1A\u5BFC\u81F4\u641C\u7D22\u4E0D\u51FA\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220414100339862.png" alt="image-20220414100339862"></p><h2 id="_2-\u95EE\u9898\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_2-\u95EE\u9898\u5206\u6790" aria-hidden="true">#</a> 2. \u95EE\u9898\u5206\u6790</h2><p>\u6211\u4EEC\u5728schema.xml \u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u914D\u7F6E</p><h3 id="_2-1-ik\u5206\u8BCD\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-ik\u5206\u8BCD\u7684\u914D\u7F6E" aria-hidden="true">#</a> 2.1 ik\u5206\u8BCD\u7684\u914D\u7F6E</h3><p>ik\u5206\u8BCD\u9ED8\u8BA4\u5C06\u641C\u7D22\u7ED3\u679C\u90FD\u8F6C\u4E3A\u4E86\u5C0F\u5199</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text_ik<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.TextField<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.wltea.analyzer.lucene.IKTokenizerFactory<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">useSmart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>query<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.wltea.analyzer.lucene.IKTokenizerFactory<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">useSmart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.SynonymFilterFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">synonyms</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>synonyms.txt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ignoreCase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">expand</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldType</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-string-\u7C7B\u578B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-string-\u7C7B\u578B\u914D\u7F6E" aria-hidden="true">#</a> 2.2 string \u7C7B\u578B\u914D\u7F6E</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>string<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.StrField<span class="token punctuation">&quot;</span></span> <span class="token attr-name">sortMissingLast</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5F3A\u5236\u7ED9string\u52A0\u4E0A\u8FC7\u6EE4\u5668</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F1A\u5BFC\u81F4\u9879\u76EE\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8</p><h2 id="_3-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 3. \u89E3\u51B3\u65B9\u6848</h2><p>\u5BFB\u627E\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B: lowercase</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token comment">&lt;!-- lowercases the entire field value, keeping it as a single token.  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldType</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lowercase<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.TextField<span class="token punctuation">&quot;</span></span> <span class="token attr-name">positionIncrementGap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>analyzer</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tokenizer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.KeywordTokenizerFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>solr.LowerCaseFilterFactory<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>analyzer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldType</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65E2\u4E0D\u5206\u8BCD\uFF0C\u540C\u65F6\u4E0D\u5206\u533A\u5927\u5C0F\u5199</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220414100839262.png" alt="image-20220414100839262"></p>`,22),o=[e];function l(c,u){return n(),s("div",null,o)}const k=a(p,[["render",l],["__file","solr-i-case.html.vue"]]);export{k as default};
