import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c,a as n,b as a,d as t,f as o,r as l}from"./app.b4e87c2d.js";const i={},u=o(`<h1 id="java\u5BFC\u51FA\u751F\u6210word\u4E4Bxml\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#java\u5BFC\u51FA\u751F\u6210word\u4E4Bxml\u65B9\u5F0F" aria-hidden="true">#</a> java\u5BFC\u51FA\u751F\u6210word\u4E4BXML\u65B9\u5F0F</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Word\u4ECE2003\u5F00\u59CB\u652F\u6301XML\u683C\u5F0F\uFF0C\u64CD\u4F5C\u6D41\u7A0B</p><ul><li><p>\u5148\u7528office2003\u6216\u80052007\u7F16\u8F91\u597Dword\u7684\u6837\u5F0F\uFF0C\u7136\u540E\u53E6\u5B58\u4E3Axml\uFF0C</p></li><li><p>\u5C06xml\u7FFB\u8BD1\u4E3AFreeMarker\u6A21\u677F</p><ul><li>\u4F7F\u7528\u4EFB\u4F55\u6A21\u677F\u5F15\u64CE\u90FD\u53EF\u4EE5\uFF0C\u6838\u5FC3\u5C31\u662F\u6E32\u67D3\u66FF\u6362</li></ul></li><li><p>\u6700\u540E\u7528java\u6765\u89E3\u6790FreeMarker\u6A21\u677F\u5E76\u8F93\u51FADoc\u3002</p></li></ul><p>\u7ECF\u6D4B\u8BD5\u8FD9\u6837\u65B9\u5F0F\u751F\u6210\u7684word\u6587\u6863\u5B8C\u5168\u7B26\u5408office\u6807\u51C6\uFF0C\u6837\u5F0F\u3001\u5185\u5BB9\u63A7\u5236\u975E\u5E38\u4FBF\u5229\uFF0C\u6253\u5370\u4E5F\u4E0D\u4F1A\u53D8\u5F62\uFF0C\u751F\u6210\u7684\u6587\u6863\u548Coffice\u4E2D\u7F16\u8F91\u6587\u6863\u5B8C\u5168\u4E00\u6837\u3002</p><h2 id="_2-\u96C6\u6210\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u96C6\u6210\u4F7F\u7528" aria-hidden="true">#</a> 2. \u96C6\u6210\u4F7F\u7528</h2><ol><li><p>\u65B0\u5EFA\u9879\u76EE</p></li><li><p>\u5F15\u5165\u76F8\u5173pom\u4F9D\u8D56 <code>FreeMarker</code></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728application.propertes\u4E2D\u6DFB\u52A0\u76F8\u5E94\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">## Freemarker \u914D\u7F6E</span>
<span class="token comment">##\u6A21\u7248\u5B58\u653E\u8DEF\u5F84\uFF08\u9ED8\u8BA4\u4E3A classpath:/templates/\uFF09</span>
spring.freemarker.template<span class="token punctuation">-</span>loader<span class="token punctuation">-</span>path=classpath<span class="token punctuation">:</span>/templates/
<span class="token comment">##\u662F\u5426\u751F\u6210\u7F13\u5B58\uFF0C\u751F\u6210\u73AF\u5883\u5EFA\u8BAE\u5F00\u542F\uFF08\u9ED8\u8BA4\u4E3Atrue\uFF09</span>
spring.freemarker.cache=false
<span class="token comment">##\u7F16\u7801</span>
spring.freemarker.charset=UTF<span class="token punctuation">-</span><span class="token number">8</span>
spring.freemarker.check<span class="token punctuation">-</span>template<span class="token punctuation">-</span>location=true
<span class="token comment">##content-type\u7C7B\u578B(\u9ED8\u8BA4\u4E3Atest/html)</span>
spring.freemarker.content<span class="token punctuation">-</span>type=text/html
<span class="token comment">## \u8BBE\u5B9A\u6240\u6709request\u7684\u5C5E\u6027\u5728merge\u5230\u6A21\u677F\u7684\u65F6\u5019\uFF0C\u662F\u5426\u8981\u90FD\u6DFB\u52A0\u5230model\u4E2D\uFF08\u9ED8\u8BA4\u4E3Afalse\uFF09</span>
spring.freemarker.expose<span class="token punctuation">-</span>request<span class="token punctuation">-</span>attributes=false
<span class="token comment">##\u8BBE\u5B9A\u6240\u6709HttpSession\u7684\u5C5E\u6027\u5728merge\u5230\u6A21\u677F\u7684\u65F6\u5019\uFF0C\u662F\u5426\u8981\u90FD\u6DFB\u52A0\u5230model\u4E2D.(\u9ED8\u8BA4\u4E3Afalse)</span>
spring.freemarker.expose<span class="token punctuation">-</span>session<span class="token punctuation">-</span>attributes=false
<span class="token comment">##RequestContext\u5C5E\u6027\u7684\u540D\u79F0\uFF08\u9ED8\u8BA4\u4E3A-\uFF09</span>
spring.freemarker.request<span class="token punctuation">-</span>context<span class="token punctuation">-</span>attribute=request
<span class="token comment">##\u6A21\u677F\u540E\u7F00(\u9ED8\u8BA4\u4E3A.ftl)</span>
spring.freemarker.suffix=.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7B80\u5355\u51C6\u5907\u4E00\u4EFDword\u6587\u6863</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200411212120583.png" alt="image-20200411212120583"></p></li><li><p>\u5C06word\u4FDD\u5B58\u4E3Axml\u683C\u5F0F</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200411212343004.png" alt="image-20200411212343004"></p></li><li><p>\u6253\u5F00xml\u5C06\u4F60\u8981\u7684\u6587\u5B57\u7528<code>\${title}</code> \u6765\u66FF\u4EE3\u3002\u5E76\u4FDD\u5B58\u4E3Afreemarker\u6A21\u677F.ftl\u6587\u4EF6</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200411213509998.png" alt="image-20200411213509998"></p><p>\u5982\u679C\u662F\u5217\u8868\u5219\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;#list list as item&gt;
	\${item.title}
 &lt;/#list&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5C06.ftl \u6587\u4EF6\u653E\u5728templates\u76EE\u5F55\u4E0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200411213744258.png" alt="image-20200411213744258"></p></li><li><p>\u4F7F\u7528freemarker\u6A21\u677F\u8BBE\u7F6E\u5BF9\u5E94\u5C5E\u6027\u503C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WordTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Configuration</span> configuration <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WordTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        configuration <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        configuration<span class="token punctuation">.</span><span class="token function">setDefaultEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">WordTest</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WordTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        test<span class="token punctuation">.</span><span class="token function">createWord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createWord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> dataMap<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getData</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            configuration<span class="token punctuation">.</span><span class="token function">setDirectoryForTemplateLoading</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;/Users/zsz/Project/demo/2020year/4yue/operationword/src/main/resources/templates&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Template</span> t<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            t <span class="token operator">=</span> configuration<span class="token punctuation">.</span><span class="token function">getTemplate</span><span class="token punctuation">(</span><span class="token string">&quot;java-operation-word.ftl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u6A21\u677F\u6587\u4EF6</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">File</span> outFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;/Users/zsz/Project/demo/2020year/4yue/operationword/toword+&quot;</span><span class="token operator">+</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.doc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5BFC\u51FA\u6587\u4EF6</span>
        <span class="token class-name">Writer</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>outFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e1<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>dataMap<span class="token punctuation">,</span> out<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5C06\u586B\u5145\u6570\u636E\u586B\u5165\u6A21\u677F\u6587\u4EF6\u5E76\u8F93\u51FA\u5230\u76EE\u6807\u6587\u4EF6</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">TemplateException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> dataMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6807\u9898\u8BBE\u8BA1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;nian&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2016&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;yue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;shenheren&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;xwdd&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8FD9\u662F\u8BE2\u95EE\u5730\u70B9HHHHHHHHHHHH&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;xuehao&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;neirong&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5185\u5BB9&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        dataMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u770Bword</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20200411214311413.png" alt="image-20200411214311413"></p></li></ol><h2 id="_3-\u5C0F\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#_3-\u5C0F\u6280\u5DE7" aria-hidden="true">#</a> 3. \u5C0F\u6280\u5DE7</h2><h3 id="_3-1-\u5982\u4F55\u786E\u5B9Aword\u4E2D\u7684\u4E00\u884C" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5982\u4F55\u786E\u5B9Aword\u4E2D\u7684\u4E00\u884C" aria-hidden="true">#</a> 3.1 \u5982\u4F55\u786E\u5B9Aword\u4E2D\u7684\u4E00\u884C</h3><p><code>&lt;w:tr&gt;&lt;/w:tr&gt;</code>\u6807\u7B7E\u8868\u793Aword\u4E2D\u7684\u8868\u683C\u7684\u4E00\u884C\u8BB0\u5F55\uFF0C\u6211\u4EEC\u627E\u5230<code>&lt;w:tr&gt;&lt;/w:tr&gt;</code>\u6807\u7B7E\uFF0C\u5FAA\u73AF\u5C31\u597D</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220426164319476.png" alt="image-20220426164319476"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,12),r={href:"https://blog.51cto.com/u_15082395/4043560",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/czx2018/article/details/100894959",target:"_blank",rel:"noopener noreferrer"};function d(m,v){const s=l("ExternalLinkIcon");return e(),c("div",null,[u,n("p",null,[n("a",r,[a("java\u751F\u6210word\u7684\u51E0\u79CD\u65B9\u6848"),t(s)])]),n("p",null,[n("a",k,[a("Java\u4F7F\u7528freemarker\u751F\u6210word\u6587\u4EF6"),t(s)])])])}const f=p(i,[["render",d],["__file","office-y-word-pdf-export-xml.html.vue"]]);export{f as default};
