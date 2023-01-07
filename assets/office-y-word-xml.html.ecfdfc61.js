import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,a as n,b as a,d as t,f as i,r as o}from"./app.f386ac8b.js";const c={},u=i(`<h1 id="word\u7684xml\u683C\u5F0F\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#word\u7684xml\u683C\u5F0F\u89E3\u6790" aria-hidden="true">#</a> Word\u7684XML\u683C\u5F0F\u89E3\u6790</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Office2003\u4EE5\u4E0A\uFF0CWord\u53EF\u4EE5\u4EE5 XML \u6587\u672C\u683C\u5F0F\u5B58\u50A8\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4F7F\u7528\u5916\u90E8\u7A0B\u5E8F\u521B\u5EFAWord\u6587\u4EF6\uFF0C\u800C\u4E0D\u9700\u8981\u4F7F\u7528Word\u7684\u5BF9\u8C61\u3002</p><p>\u5E38\u89C1\u7684\u5E94\u7528\u573A\u666F\u5C31\u662F\uFF1A</p><ul><li>\u7A0B\u5E8F\u9700\u8981\u751F\u6210word\uFF0C\u6211\u4EEC\u901A\u8FC7\u52A8\u6001\u66FF\u6362xml\u4E2D\u7684\u5185\u5BB9\u5B9E\u73B0\u52A8\u6001\u751F\u6210word</li></ul><h2 id="_2-\u6700\u7B80\u5355\u7684word" tabindex="-1"><a class="header-anchor" href="#_2-\u6700\u7B80\u5355\u7684word" aria-hidden="true">#</a> 2. \u6700\u7B80\u5355\u7684word</h2><h3 id="_2-1-\u65B9\u5F0F\u4E00-word\u5BFC\u51FAxml\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F\u4E00-word\u5BFC\u51FAxml\u683C\u5F0F" aria-hidden="true">#</a> 2.1 \u65B9\u5F0F\u4E00\uFF1Aword\u5BFC\u51FAxml\u683C\u5F0F</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220428103850569.png" alt="image-20220428103850569"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220428104427628.png" alt="image-20220428104427628"></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u4E00\u4E2A\u6700\u7B80\u5355\u7684word\u5BFC\u51FAxml\u683C\u5F0F\u7684\u65F6\u5019\uFF0C\u4E5F\u662F\u5305\u542B\u4E86200\u591A\u884C\u7684\u4EE3\u7801\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u5404\u79CD\u5B57\u4F53\u6837\u5F0F\u7B49\u6807\u8BC6\u3002\u5982\u679C\u4E0D\u719F\u6089word xml \u5176\u5B9E\u5F88\u96BE\u53BB\u89E3\u6790\u5185\u5BB9\uFF0C\u8981\u5B9E\u73B0\u8D1F\u8D23\u70B9\u7684\u52A8\u6001\u6E32\u67D3\u662F\u5F88\u56F0\u96BE\u7684\u3002</p><h3 id="_2-2-\u65B9\u5F0F\u4E00-xml\u683C\u5F0F\u7528word\u6253\u5F00" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F\u4E00-xml\u683C\u5F0F\u7528word\u6253\u5F00" aria-hidden="true">#</a> 2.2 \u65B9\u5F0F\u4E00\uFF1Axml\u683C\u5F0F\u7528word\u6253\u5F00</h3><p>\u7528\u8BB0\u4E8B\u672C\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5C06\u4E0A\u9762\u7684XML\u5185\u5BB9\u7C98\u8D34\uFF0C\u5E76\u4FDD\u5B58\u4E3Amytest.xml\uFF0C\u5728Office Word\u4E2D\u6253\u5F00\u5B83</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>wordDocument</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>w</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/office/word/2003/wordml<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>body</span><span class="token punctuation">&gt;</span></span>
&lt; /w:wordDocument&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220428105113178.png" alt="image-20220428105113178"></p><p>\u4E24\u79CD\u65B9\u6848\u90FD\u80FD\u6B63\u5E38\u663E\u793A\u6D4B\u8BD5\u4E24\u4E2A\u5B57\u3002</p><p>\u4F46\u6211\u4EEC\u62C6\u5206\u540Exml \u683C\u5F0F\u5C31\u6E05\u723D\u591A\u4E86\u3002</p><h2 id="_3-xml-\u5E38\u7528\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-xml-\u5E38\u7528\u7ED3\u6784" aria-hidden="true">#</a> 3. xml \u5E38\u7528\u7ED3\u6784</h2><ul><li>\u6574\u4F53\u7ED3\u6784\uFF1Abody\u3001styles\u3001setting\u7B49</li><li>\u6BB5\u843DParagraph\u7ED3\u70B9\uFF1A&lt;w:p&gt;</li><li>\u57FA\u672C\u683C\u5F0F\u5355\u4F4DRun\u7ED3\u70B9\uFF1A&lt;w:r&gt;</li><li>\u683C\u5F0FProperties\u7ED3\u70B9\uFF1A&lt;w:pPr&gt;\u4E0E&lt;w:rPr&gt; <ul><li>\u5B57\u4F53&lt;w:rFonts&gt;</li><li>\u5B57\u53F7&lt;w:sz&gt;\u3001&lt;w:szCs&gt;</li></ul></li><li>\u770B\u7684\u89C1\u7684\u6587\u5B57Text\uFF1A&lt;w:t&gt;</li><li>\u4FEE\u8BA2\u7248\u672C\u53F7rsid</li><li>\u6CE8\u97F3\u7CFB\u7EDFRuby\uFF1A&lt;w:ruby&gt;</li></ul><h2 id="_4-xml-\u8BED\u6CD5\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_4-xml-\u8BED\u6CD5\u89E3\u6790" aria-hidden="true">#</a> 4 xml \u8BED\u6CD5\u89E3\u6790</h2><h3 id="_4-1-xml\u7684\u58F0\u660E\u548C\u540D\u79F0\u7A7A\u95F4\u7684\u6307\u660E" tabindex="-1"><a class="header-anchor" href="#_4-1-xml\u7684\u58F0\u660E\u548C\u540D\u79F0\u7A7A\u95F4\u7684\u6307\u660E" aria-hidden="true">#</a> 4.1 XML\u7684\u58F0\u660E\u548C\u540D\u79F0\u7A7A\u95F4\u7684\u6307\u660E\uFF1A</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>wordDocument</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>w</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.microsoft.com/office/word/2003/wordml<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u6587\u6863\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6587\u6863\u5185\u5BB9" aria-hidden="true">#</a> 3.2 \u6587\u6863\u5185\u5BB9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;w:body&gt;\u2026&lt;/w:body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-\u57FA\u672C\u8282\u70B9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u57FA\u672C\u8282\u70B9\u7C7B\u578B" aria-hidden="true">#</a> 3.3 \u57FA\u672C\u8282\u70B9\u7C7B\u578B</h3><p>\u4ECEbody\u5185\u53EF\u4EE5\u770B\u51FA\uFF0C\u6784\u6210\u5B9E\u9645\u6587\u672C\u5185\u5BB9\u7684\u67093\u79CD\u7C7B\u578B\u8282\u70B9\uFF1A</p><ul><li><p>&lt;w:p&gt; \u8868\u793A\u4E00\u4E2A\u6BB5\u843D</p></li><li><p>&lt;w:r&gt; \u8868\u793A\u4E00\u4E2A\u6837\u5F0F\u4E32\uFF0C\u6307\u660E\u5B83\u5305\u62EC\u7684\u6587\u672C\u7684\u663E\u793A\u6837\u5F0F</p></li><li><p>&lt;w:t&gt; \u8868\u793A\u771F\u6B63\u7684\u6587\u672C\u5185\u5BB9</p></li></ul><p>\u5982\u679C\u6211\u4EEC\u9700\u8981\u6307\u660E\u4E00\u4E2A\u6587\u672C\u4E3A\u7C97\u4F53\uFF0C\u9700\u8981\u600E\u4E48\u529E\u5462\uFF1F</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>rPr</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>b</span> <span class="token attr-name"><span class="token namespace">w:</span>val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>rPr</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span> 2.0C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>
&lt; /w:r&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&lt;w:b w:val=\u201Don\u201D&gt; \u8868\u793A\u8BE5\u683C\u5F0F\u4E32\u79CD\u7684\u6587\u672C\u4E3A\u7C97\u4F53\u3002</p><p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u77E5\u9053&lt;w:r&gt;\u8868\u793A\u4E00\u4E2A\u7279\u5B9A\u7684\u6587\u672C\u683C\u5F0F\uFF0C\u7A0D\u5FAE\u590D\u6742\u70B9\u7684\u683C\u5F0F\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>r</span><span class="token punctuation">&gt;</span></span>
&lt; w:rPr&gt; 
&lt; w:b w:val=&quot;on&quot;/&gt;
&lt; w:sz w:val=&quot;40&quot;/&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>szCs</span> <span class="token attr-name"><span class="token namespace">w:</span>val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
&lt; w:rFonts w:ascii=&quot;Arial&quot; w:eastAsia=&quot;Arial&quot; w:hAnsi=&quot;Arial&quot; /&gt;
&lt; /w:rPr&gt; 
&lt; w:t xml:space=&quot;preserve&quot;&gt;2.0C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>
&lt; /w:r&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B57\u4F53\u4E3A\u7C97\u4F53\uFF0C\u5C3A\u5BF8\u4E3A\u662F40\u96642\u7B49\u4E8E20\u76F8\u5F53\u4E8E\u51E0\u53F7\u5B57\u4F53\uFF1F\uFF0C\u5B57\u4F53\u540D\u79F0\u201CArial\u201D</p><p>&lt;w:t xml:space=&quot;preserve&quot;&gt; 2.0C&lt;/w:t&gt;</p><p>\u4E2D\u7684xml:space=&quot;preserve&quot;\u4ECE\u5B57\u9762\u4E0A\u7406\u89E3\u662F\u4FDD\u6301\u7A7A\u683C\u3002</p><p>\u5982\u679C\u6CA1\u6709\u8FD9\u5185\u5BB9\u7684\u8BDD\u6587\u672C\u7684\u524D\u540E\u7A7A\u683C\u5C06\u4F1A\u88ABWord\u5FFD\u7565\u3002</p><p>\u8FD9\u5C31\u8981\u8BBE\u7F6E&lt;w:p&gt;\u7684\u5C5E\u6027\u4E86\u3002\u7C7B\u4F3C\u4E8E\u8FD9\u6837\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>p</span><span class="token punctuation">&gt;</span></span>
&lt; w:pPr&gt;
&lt; w:jc w:val=&quot;right&quot;/&gt;
&lt; w:spacing w:line=&quot;600&quot; w:lineRule=&quot;auto&quot;/&gt;
&lt; /w:pPr&gt;

\u2026

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u9F50\u65B9\u5411\uFF1A&lt;w:jc w:val=\u201Dright\u201D/&gt; \u8FD9\u513F\u662F\u53F3\u5BF9\u9F50\u3002</p><p>\u884C\u8DDD:&lt;w:spacing w:line=\u201D600\u201D w:lineRule=&quot;auto&quot;/&gt; 600\u662F\u7528\u884C\u8DDD\u7684\u500D\u6570\u4E58240\u5F97\u51FA\uFF0C\u5982\u679C\u662F\u4E24\u500D\u884C\u8DDD\uFF0C\u5219\u662F480\u3002\u8FD9\u513F\u5E94\u8BE5\u662F2.5\u500D\u884C\u8DDD\u3002</p><p>\u7531\u6B64\u53EF\u89C1\uFF0C\u7EC4\u88C5\u4E00\u4E2AWordXML\u683C\u5F0F\u7684\u6587\u4EF6\u662F\u4E00\u4EF6\u6BD4\u8F83\u7B80\u5355\u7684\u4E8B\u60C5\u3002</p><p>\u5C06\u6BB5\u5C5E\u6027\u5305\u542B\u5728&lt;w:pPr&gt;&lt;/w:pPr&gt;\u4E2D</p><p>\u5C06\u6587\u672C\u683C\u5F0F\u5305\u542B\u5728&lt;w:rPr&gt;&lt;/w:rPr&gt;\u4E2D</p><p>\u8FD9\u513F\u7684Pr\u662Fproperty\u7684\u610F\u601D\uFF0C\u8868\u793A\u8FD9\u4E2A\u5757\u4E2D\u662Fr(run)\u6216p(paragraph)\u7684\u683C\u5F0F\u8BBE\u7F6E\u3002</p><h3 id="_3-4-\u9875\u9762\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-4-\u9875\u9762\u8BBE\u7F6E" aria-hidden="true">#</a> 3.4 \u9875\u9762\u8BBE\u7F6E</h3><p>\u4E0B\u9762\u5185\u5BB9\u8BBE\u7F6E\u4E86\u9875\u7684\u5BBD\uFF0C\u9AD8\uFF0C\u548C\u9875\u7684\u5404\u8FB9\u8DDD\u3002\u5404\u9879\u7684\u503C\u5747\u662F\u82F1\u5BF8\u4E581440\u5F97\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;w:body&gt;\u2026
&lt;w:sectPr&gt;
&lt;w:pgSz w:w=&quot;12240&quot; w:h=&quot;15840&quot;/&gt;
&lt;w:pgMar w:top=&quot;1440&quot; w:right=&quot;1800&quot; w:bottom=&quot;1440&quot; w:left=&quot;1800&quot; w:header=&quot;720&quot; w:footer=&quot;720&quot; w:gutter=&quot;0&quot;/&gt;
&lt; /w:sectPr&gt;

&lt;/w:body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u5185\u5BB9\u8BBE\u7F6E\u4E86\u9875\u7684\u9875\u7709\u9875\u811A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>w:sectPr wsp:rsidR=&quot;002C452C&quot;&gt;
&lt;w:hdr w:type=&quot;odd&quot; &gt;
&lt;w:p&gt;
&lt;w:pPr&gt;
&lt;w:pStyle w:val=&quot;Header&quot;/&gt;
&lt;/w:pPr&gt;
&lt;w:r&gt;
&lt;w:t&gt;My Header&lt;/w:t&gt;
&lt;/w:r&gt;
&lt;/w:p&gt;
&lt;/w:hdr&gt;
&lt;w:ftr w:type=&quot;odd&quot;&gt;
&lt;w:p&gt;
&lt;w:pPr&gt;
&lt;w:pStyle w:val=&quot;Footer&quot;/&gt;
&lt;/w:pPr&gt;
&lt;w:r&gt;
&lt;w:t&gt;My Footer&lt;/w:t&gt;
&lt;/w:r&gt;
&lt;/w:p&gt;
&lt;/w:ftr&gt;

&lt;/w:sectPr&gt;
&lt; /w:body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-\u6587\u6863\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-5-\u6587\u6863\u8BBE\u7F6E" aria-hidden="true">#</a> 3.5 \u6587\u6863\u8BBE\u7F6E</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>docPr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>view</span> <span class="token attr-name"><span class="token namespace">w:</span>val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>print<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>zoom</span> <span class="token attr-name"><span class="token namespace">w:</span>percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
&lt; /w:docPr&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>wordDocument</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docPr\uFF0C\u5C31\u662Fdocument property\u7684\u610F\u601D\u4E86\u3002</p><p>\u8868\u793A\u6587\u6863\u7684\u89C6\u56FE\u662F\u201Cprint\u201D\uFF0C\u89C6\u56FE\u6BD4\u4F8B100%</p><h2 id="_4-\u5B8C\u6574\u7684xml\u6587\u4EF6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-\u5B8C\u6574\u7684xml\u6587\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a> 4. \u5B8C\u6574\u7684XML\u6587\u4EF6\u5B9E\u4F8B</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt;</span>
&lt; ?mso-application progid=&quot;Word.Document&quot;?&gt;
&lt; w:wordDocument xmlns:aml=&quot;http://schemas.microsoft.com/aml/2001/core&quot;
xmlns:dt=&quot;uuid:C2F41010-65B3-11d1-A29F-00AA00C14882&quot;
xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot;
xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot;
xmlns:w10=&quot;urn:schemas-microsoft-com:office:word&quot;
xmlns:w=&quot;http://schemas.microsoft.com/office/word/2003/wordml&quot;
xmlns:wx=&quot;http://schemas.microsoft.com/office/word/2003/auxHint&quot;
xmlns:wsp=&quot;http://schemas.microsoft.com/office/word/2003/wordml/sp2&quot;
xmlns:sl=&quot;http://schemas.microsoft.com/schemaLibrary/2003/core&quot;
w:macrosPresent=&quot;no&quot; w:embeddedObjPresent=&quot;no&quot; w:ocxPresent=&quot;no&quot;
xml:space=&quot;preserve&quot;&gt;

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>body</span><span class="token punctuation">&gt;</span></span>
&lt; w:p&gt;
&lt; w:pPr&gt;
&lt; w:jc w:val=&quot;left&quot;/&gt;
&lt; w:spacing w:line=&quot;240&quot; w:lineRule=&quot;auto&quot;/&gt;
&lt; /w:pPr&gt;
&lt; w:r&gt;
&lt; w:rPr&gt; 
&lt; w:sz w:val=&quot;24&quot;/&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>szCs</span> <span class="token attr-name"><span class="token namespace">w:</span>val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
&lt; w:rFonts w:ascii=&quot;Arial&quot; w:eastAsia=&quot;Arial&quot; w:hAnsi=&quot;Arial&quot; /&gt;
&lt; /w:rPr&gt; 
&lt; w:t&gt;Niu don&#39;t like Red or Blue! It seems that <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>
&lt; /w:r&gt;
&lt; w:r&gt;
&lt; w:rPr&gt; 
&lt; w:sz w:val=&quot;48&quot;/&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>szCs</span> <span class="token attr-name"><span class="token namespace">w:</span>val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>48<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
&lt; w:rFonts w:ascii=&quot;Arial&quot; w:eastAsia=&quot;Arial&quot; w:hAnsi=&quot;Arial&quot; /&gt;
&lt; /w:rPr&gt; 
&lt; w:t&gt;Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>
&lt; /w:r&gt;
&lt; /w:p&gt;
&lt; w:p&gt;

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>sectPr</span> <span class="token attr-name"><span class="token namespace">wsp:</span>rsidR</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>002C452C<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
&lt; w:pgSz w:w=&quot;12240&quot; w:h=&quot;15840&quot;/&gt;
&lt; w:pgMar w:top=&quot;1526.4&quot; w:right=&quot;3254.4&quot; w:bottom=&quot;2966.4&quot; w:left=&quot;1670.4&quot; w:header=&quot;720&quot; w:footer=&quot;720&quot; w:gutter=&quot;0&quot;/&gt;
&lt; w:hdr w:type=&quot;odd&quot; &gt;
&lt; w:p&gt;
&lt; w:pPr&gt;
&lt; w:pStyle w:val=&quot;Header&quot;/&gt;
&lt; /w:pPr&gt;
&lt; w:r&gt;
&lt; w:t&gt;Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>
&lt; /w:r&gt;
&lt; /w:p&gt;
&lt; /w:hdr&gt;
&lt; w:ftr w:type=&quot;odd&quot;&gt;
&lt; w:p&gt;
&lt; w:pPr&gt;
&lt; w:pStyle w:val=&quot;Footer&quot;/&gt;
&lt; /w:pPr&gt;
&lt; w:r&gt;
&lt; w:t&gt;Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">w:</span>t</span><span class="token punctuation">&gt;</span></span>
&lt; /w:r&gt;
&lt; /w:p&gt;
&lt; /w:ftr&gt;
&lt; /w:sectPr&gt;
&lt; /w:body&gt;

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>docPr</span><span class="token punctuation">&gt;</span></span>
&lt; w:view w:val=&quot;print&quot;/&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">w:</span>zoom</span> <span class="token attr-name"><span class="token namespace">w:</span>percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
&lt; /w:docPr&gt;
&lt; /w:wordDocument&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,55),r={href:"https://blog.csdn.net/lmhuanying1012/article/details/78764041",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/liuqixuan1994/article/details/104486600",target:"_blank",rel:"noopener noreferrer"};function m(v,g){const s=o("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[n("a",r,[a("WordXML\u683C\u5F0F\u89E3\u6790"),t(s)])]),n("p",null,[n("a",d,[a("Word\u6587\u4EF6\u7684OpenXML\u89E3\u6790\uFF08\u4EE5Python3\u4E3A\u4F8B\uFF09"),t(s)])])])}const b=e(c,[["render",m],["__file","office-y-word-xml.html.vue"]]);export{b as default};
