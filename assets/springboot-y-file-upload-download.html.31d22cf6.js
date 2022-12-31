import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,d as p,f as o,r as c}from"./app.74b2ce1e.js";const l={},i=o(`<h1 id="springboot\u96C6\u6210\u6587\u4EF6-\u57FA\u7840\u7684\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#springboot\u96C6\u6210\u6587\u4EF6-\u57FA\u7840\u7684\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D" aria-hidden="true">#</a> SpringBoot\u96C6\u6210\u6587\u4EF6 - \u57FA\u7840\u7684\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D</h1><blockquote><p>\u9879\u76EE\u4E2D\u5E38\u89C1\u7684\u529F\u80FD\u662F\u9700\u8981\u5C06\u6570\u636E\u6587\u4EF6\uFF08\u6BD4\u5982Excel,csv)\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u7AEF\u8FDB\u884C\u5904\u7406\uFF0C\u4EA6\u6216\u662F\u5C06\u670D\u52A1\u5668\u7AEF\u7684\u6570\u636E\u4EE5\u67D0\u79CD\u6587\u4EF6\u5F62\u5F0F\uFF08\u6BD4\u5982excel,pdf,csv,word)\u4E0B\u8F7D\u5230\u5BA2\u6237\u7AEF\u3002\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u57FA\u4E8ESpringBoot\u7684\u5BF9\u5E38\u89C4\u6587\u4EF6\u7684\u4E0A\u4F20\u548C\u4E0B\u8F7D\uFF0C\u4EE5\u53CA\u5E38\u89C1\u7684\u95EE\u9898\u7B49\u3002</p></blockquote><h2 id="_1-\u77E5\u8BC6\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1-\u77E5\u8BC6\u51C6\u5907" aria-hidden="true">#</a> 1. \u77E5\u8BC6\u51C6\u5907</h2><blockquote><p>\u9700\u8981\u7406\u89E3\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D\u7684\u5E38\u89C1\u573A\u666F\u548C\u6280\u672F\u624B\u6BB5\u3002</p></blockquote><h3 id="_1-1-\u54EA\u4E9B\u573A\u666F\u9700\u8981\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-1-\u54EA\u4E9B\u573A\u666F\u9700\u8981\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D" aria-hidden="true">#</a> 1.1 \u54EA\u4E9B\u573A\u666F\u9700\u8981\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D</h3><p>\u9879\u76EE\u4E2D\u5E38\u89C1\u7684\u529F\u80FD\u662F\u9700\u8981\u5C06\u6570\u636E\u6587\u4EF6\uFF08\u6BD4\u5982Excel,csv)\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u7AEF\u8FDB\u884C\u5904\u7406\uFF0C\u4EA6\u6216\u662F\u5C06\u670D\u52A1\u5668\u7AEF\u7684\u6570\u636E\u4EE5\u67D0\u79CD\u6587\u4EF6\u5F62\u5F0F\uFF08\u6BD4\u5982excel,pdf,csv,word)\u4E0B\u8F7D\u5230\u5BA2\u6237\u7AEF\u3002</p><h2 id="_2-\u5B9E\u73B0\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u6848\u4F8B" aria-hidden="true">#</a> 2. \u5B9E\u73B0\u6848\u4F8B</h2><blockquote><p>\u672C\u4F8B\u5B50\u4E3B\u8981\u5C55\u793A\u6587\u4EF6\u7684\u4E0A\u4F20\u548C\u6587\u4EF6\u7684\u4E0B\u8F7D\u3002</p></blockquote><h3 id="_2-1-pom\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_2-1-pom\u4F9D\u8D56" aria-hidden="true">#</a> 2.1 Pom\u4F9D\u8D56</h3><p>\u5F15\u5165spring-boot-starter-web\u5373\u53EF</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> 2.2 \u6587\u4EF6\u4E0A\u4F20</h3><p>\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5E76\u4FDD\u5B58\u5230\u672C\u5730\u6587\u4EF6\u5939\u4E2D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u672C\u5730\u6587\u4EF6\u4FDD\u5B58\u4F4D\u7F6E</span>
        <span class="token class-name">String</span> uploadPath <span class="token operator">=</span> <span class="token string">&quot;/Users/pdai/uploadFile&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u6539\u8FD9\u91CC</span>
        <span class="token class-name">File</span> uploadDir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>uploadPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>uploadDir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            uploadDir<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>uploadDir<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u672C\u5730\u6587\u4EF6</span>
        <span class="token class-name">File</span> localFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>uploadPath <span class="token operator">+</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// transfer to local</span>
        file<span class="token punctuation">.</span><span class="token function">transferTo</span><span class="token punctuation">(</span>localFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7postman\uFF0C\u6A21\u62DF\u4E0A\u4F20\u7684\u8BF7\u6C42</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220719221741423.png" alt="image-20220719221741423"></p><h3 id="_2-3-\u6587\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6587\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> 2.3 \u6587\u4EF6\u4E0B\u8F7D</h3><p>\u4ECE\u672C\u5730\u6587\u4EF6\u5939\u4E2D\u8BFB\u53D6\u6587\u4EF6\uFF0C\u5E76\u901A\u8FC7http\u4E0B\u8F7D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/download&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-disposition&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;attachment;filename=file_&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.hprof&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u4ECE\u6587\u4EF6\u8BFB\u5230servlet response\u8F93\u51FA\u6D41\u4E2D</span>
    <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;/Users/pdai/pdai_heap_dump_test.hprof&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6539\u8FD9\u91CC</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileInputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// try-with-resources</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> inputStream<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u8F7D\u6587\u4EF6</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220719221833046.png" alt="image-20220719221833046"><p>\u6CE8\uFF1A</p><p>\u5982\u679C\u4F7F\u7528postman\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u7684response\u5927\u5C0F\u662F50MB\uFF0C\u4E0B\u8F7D\u5927\u4E8E50MB\u7684\u6587\u4EF6\u9700\u8981\u5728\u8FD9\u91CC\u81EA\u884C\u8BBE\u7F6E\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220719221858304.png" alt="image-20220719221858304"></p><h2 id="_3-\u8FDB\u4E00\u6B65\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_3-\u8FDB\u4E00\u6B65\u7406\u89E3" aria-hidden="true">#</a> 3. \u8FDB\u4E00\u6B65\u7406\u89E3</h2><blockquote><p>\u901A\u8FC7\u5982\u4E0B\u51E0\u4E2A\u95EE\u9898\u8FDB\u4E00\u6B65\u7406\u89E3\u3002</p></blockquote><h3 id="_3-1-springboot\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_3-1-springboot\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F\u53C2\u6570" aria-hidden="true">#</a> 3.1 SpringBoot\u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F\u53C2\u6570\uFF1F</h3><p>SpringBoot\u5BF9\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F\u6709\u9650\u5236\uFF0C\u9ED8\u8BA4\u7684\u6700\u5927\u6BCF\u4E2A\u6587\u4EF6\u914D\u7F6E\u6700\u5927\u4E3A1MB\uFF0C\u9ED8\u8BA4\u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u76EE\u6807\u6587\u4EF6\u5939\uFF09\u603B\u5927\u5C0F\u662F10MB\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">servlet</span><span class="token punctuation">:</span>
    <span class="token key atrule">multipart</span><span class="token punctuation">:</span>
      <span class="token key atrule">max-file-size</span><span class="token punctuation">:</span> 1024MB <span class="token comment"># \u5355\u4E2A\u6587\u4EF6\u5927\u5C0F</span>
      <span class="token key atrule">max-request-size</span><span class="token punctuation">:</span> 10240MB <span class="token comment"># \u603B\u6587\u4EF6\u5927\u5C0F\uFF08\u5141\u8BB8\u5B58\u50A8\u6587\u4EF6\u7684\u6587\u4EF6\u5939\u5927\u5C0F\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u66F4\u591A\u5176\u5B83\u7684\u53C2\u6570\u53EF\u4EE5\u53C2\u770BMultipartProperties\u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.servlet.multipart&quot;</span><span class="token punctuation">,</span> ignoreUnknownFields <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MultipartProperties</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * Whether to enable support of multipart uploads.
	 */</span>
	<span class="token keyword">private</span> <span class="token keyword">boolean</span> enabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Intermediate location of uploaded files.
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> location<span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Max file size.
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">DataSize</span> maxFileSize <span class="token operator">=</span> <span class="token class-name">DataSize</span><span class="token punctuation">.</span><span class="token function">ofMegabytes</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Max request size.
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">DataSize</span> maxRequestSize <span class="token operator">=</span> <span class="token class-name">DataSize</span><span class="token punctuation">.</span><span class="token function">ofMegabytes</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Threshold after which files are written to disk.
	 */</span>
	<span class="token keyword">private</span> <span class="token class-name">DataSize</span> fileSizeThreshold <span class="token operator">=</span> <span class="token class-name">DataSize</span><span class="token punctuation">.</span><span class="token function">ofBytes</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * Whether to resolve the multipart request lazily at the time of file or parameter
	 * access.
	 */</span>
	<span class="token keyword">private</span> <span class="token keyword">boolean</span> resolveLazily <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#_3-2-\u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> 3.2 \u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20\uFF1F</h3><p>Spring\u652F\u6301\u63A5\u6536\u591A\u4E2A\u6587\u4EF6\u7684\uFF0C\u53EA\u9700\u8981\u7528MultipartFile\u63A5\u6536\u5373\u53EF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,35),u={href:"https://pdai.tech/md/spring/springboot/springboot-x-file-upload-download.html",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"SpringBoot\u96C6\u6210\u6587\u4EF6 - \u57FA\u7840\u7684\u6587\u4EF6\u4E0A\u4F20\u548C\u4E0B\u8F7D",-1);function d(k,m){const s=c("ExternalLinkIcon");return t(),e("div",null,[i,n("p",null,[n("a",u,[r,p(s)])])])}const g=a(l,[["render",d],["__file","springboot-y-file-upload-download.html.vue"]]);export{g as default};
