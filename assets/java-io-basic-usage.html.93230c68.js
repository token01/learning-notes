import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as n,b as e,d as a,f as o,r as l}from"./app.9e15f9d2.js";const i={},u=o(`<h1 id="java-io-\u5E38\u89C1\u7C7B\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#java-io-\u5E38\u89C1\u7C7B\u4F7F\u7528" aria-hidden="true">#</a> Java IO - \u5E38\u89C1\u7C7B\u4F7F\u7528</h1><blockquote><p>\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDJava IO\u5E38\u89C1\u7C7B\u7684\u4F7F\u7528\uFF0C\u5305\u62EC\uFF1A\u78C1\u76D8\u64CD\u4F5C\uFF0C\u5B57\u8282\u64CD\u4F5C\uFF0C\u5B57\u7B26\u64CD\u4F5C\uFF0C\u5BF9\u8C61\u64CD\u4F5C\u548C\u7F51\u7EDC\u64CD\u4F5C\u3002</p></blockquote><h2 id="_1-io\u5E38\u89C1\u7C7B\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-io\u5E38\u89C1\u7C7B\u7684\u4F7F\u7528" aria-hidden="true">#</a> 1. IO\u5E38\u89C1\u7C7B\u7684\u4F7F\u7528</h2><p>Java \u7684 I/O \u5927\u6982\u53EF\u4EE5\u5206\u6210\u4EE5\u4E0B\u51E0\u7C7B:</p><ul><li>\u78C1\u76D8\u64CD\u4F5C: File</li><li>\u5B57\u8282\u64CD\u4F5C: InputStream \u548C OutputStream</li><li>\u5B57\u7B26\u64CD\u4F5C: Reader \u548C Writer</li><li>\u5BF9\u8C61\u64CD\u4F5C: Serializable</li><li>\u7F51\u7EDC\u64CD\u4F5C: Socket</li></ul><h3 id="_1-1-file\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_1-1-file\u76F8\u5173" aria-hidden="true">#</a> 1.1 File\u76F8\u5173</h3><p>File \u7C7B\u53EF\u4EE5\u7528\u4E8E\u8868\u793A\u6587\u4EF6\u548C\u76EE\u5F55\u7684\u4FE1\u606F\uFF0C\u4F46\u662F\u5B83\u4E0D\u8868\u793A\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><p>\u9012\u5F52\u5730\u5217\u51FA\u4E00\u4E2A\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">listAllFiles</span><span class="token punctuation">(</span><span class="token class-name">File</span> dir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span>dir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> dir<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">listAllFiles</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u5B57\u8282\u6D41\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5B57\u8282\u6D41\u76F8\u5173" aria-hidden="true">#</a> 1.2 \u5B57\u8282\u6D41\u76F8\u5173</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">copyFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> src<span class="token punctuation">,</span> <span class="token class-name">String</span> dist<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token class-name">FileInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">FileOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>dist<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">20</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// read() \u6700\u591A\u8BFB\u53D6 buffer.length \u4E2A\u5B57\u8282</span>
    <span class="token comment">// \u8FD4\u56DE\u7684\u662F\u5B9E\u9645\u8BFB\u53D6\u7684\u4E2A\u6570</span>
    <span class="token comment">// \u8FD4\u56DE -1 \u7684\u65F6\u5019\u8868\u793A\u8BFB\u5230 eof\uFF0C\u5373\u6587\u4EF6\u5C3E</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> buffer<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u5B9E\u73B0\u9010\u884C\u8F93\u51FA\u6587\u672C\u6587\u4EF6\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B9E\u73B0\u9010\u884C\u8F93\u51FA\u6587\u672C\u6587\u4EF6\u7684\u5185\u5BB9" aria-hidden="true">#</a> 1.3 \u5B9E\u73B0\u9010\u884C\u8F93\u51FA\u6587\u672C\u6587\u4EF6\u7684\u5185\u5BB9</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">readFileContent</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token class-name">FileReader</span> fileReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BufferedReader</span> bufferedReader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>fileReader<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> line<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u88C5\u9970\u8005\u6A21\u5F0F\u4F7F\u5F97 BufferedReader \u7EC4\u5408\u4E86\u4E00\u4E2A Reader \u5BF9\u8C61</span>
    <span class="token comment">// \u5728\u8C03\u7528 BufferedReader \u7684 close() \u65B9\u6CD5\u65F6\u4F1A\u53BB\u8C03\u7528 Reader \u7684 close() \u65B9\u6CD5</span>
    <span class="token comment">// \u56E0\u6B64\u53EA\u8981\u4E00\u4E2A close() \u8C03\u7528\u5373\u53EF</span>
    bufferedReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u5E8F\u5217\u5316-serializable-transient" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5E8F\u5217\u5316-serializable-transient" aria-hidden="true">#</a> 1.4 \u5E8F\u5217\u5316 &amp; Serializable &amp; transient</h3><p>\u5E8F\u5217\u5316\u5C31\u662F\u5C06\u4E00\u4E2A\u5BF9\u8C61\u8F6C\u6362\u6210\u5B57\u8282\u5E8F\u5217\uFF0C\u65B9\u4FBF\u5B58\u50A8\u548C\u4F20\u8F93\u3002</p><ul><li>\u5E8F\u5217\u5316: ObjectOutputStream.writeObject()</li><li>\u53CD\u5E8F\u5217\u5316: ObjectInputStream.readObject()</li></ul><p>\u4E0D\u4F1A\u5BF9\u9759\u6001\u53D8\u91CF\u8FDB\u884C\u5E8F\u5217\u5316\uFF0C\u56E0\u4E3A\u5E8F\u5217\u5316\u53EA\u662F\u4FDD\u5B58\u5BF9\u8C61\u7684\u72B6\u6001\uFF0C\u9759\u6001\u53D8\u91CF\u5C5E\u4E8E\u7C7B\u7684\u72B6\u6001\u3002</p><p><strong>Serializable</strong></p><p>\u5E8F\u5217\u5316\u7684\u7C7B\u9700\u8981\u5B9E\u73B0 Serializable \u63A5\u53E3\uFF0C\u5B83\u53EA\u662F\u4E00\u4E2A\u6807\u51C6\uFF0C\u6CA1\u6709\u4EFB\u4F55\u65B9\u6CD5\u9700\u8981\u5B9E\u73B0\uFF0C\u4F46\u662F\u5982\u679C\u4E0D\u53BB\u5B9E\u73B0\u5B83\u7684\u8BDD\u800C\u8FDB\u884C\u5E8F\u5217\u5316\uFF0C\u4F1A\u629B\u51FA\u5F02\u5E38\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
    <span class="token class-name">A</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> objectFile <span class="token operator">=</span> <span class="token string">&quot;file/a1&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">ObjectOutputStream</span> objectOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>objectFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    objectOutputStream<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    objectOutputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ObjectInputStream</span> objectInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>objectFile<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">A</span> a2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">)</span> objectInputStream<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    objectInputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> y<span class="token punctuation">;</span>

    <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token class-name">String</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;x = &quot;</span> <span class="token operator">+</span> x <span class="token operator">+</span> <span class="token string">&quot;  &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;y = &quot;</span> <span class="token operator">+</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>transient</strong></p><p>transient \u5173\u952E\u5B57\u53EF\u4EE5\u4F7F\u4E00\u4E9B\u5C5E\u6027\u4E0D\u4F1A\u88AB\u5E8F\u5217\u5316\u3002</p><p>ArrayList \u4E2D\u5B58\u50A8\u6570\u636E\u7684\u6570\u7EC4 elementData \u662F\u7528 transient \u4FEE\u9970\u7684\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u6570\u7EC4\u662F\u52A8\u6001\u6269\u5C55\u7684\uFF0C\u5E76\u4E0D\u662F\u6240\u6709\u7684\u7A7A\u95F4\u90FD\u88AB\u4F7F\u7528\uFF0C\u56E0\u6B64\u5C31\u4E0D\u9700\u8981\u6240\u6709\u7684\u5185\u5BB9\u90FD\u88AB\u5E8F\u5217\u5316\u3002\u901A\u8FC7\u91CD\u5199\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u65B9\u6CD5\uFF0C\u4F7F\u5F97\u53EF\u4EE5\u53EA\u5E8F\u5217\u5316\u6570\u7EC4\u4E2D\u6709\u5185\u5BB9\u7684\u90A3\u90E8\u5206\u6570\u636E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elementData<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5-java-\u4E2D\u7684\u7F51\u7EDC\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#_1-5-java-\u4E2D\u7684\u7F51\u7EDC\u652F\u6301" aria-hidden="true">#</a> 1.5 Java \u4E2D\u7684\u7F51\u7EDC\u652F\u6301:</h3><ul><li>InetAddress: \u7528\u4E8E\u8868\u793A\u7F51\u7EDC\u4E0A\u7684\u786C\u4EF6\u8D44\u6E90\uFF0C\u5373 IP \u5730\u5740\uFF1B</li><li>URL: \u7EDF\u4E00\u8D44\u6E90\u5B9A\u4F4D\u7B26\uFF1B</li><li>Sockets: \u4F7F\u7528 TCP \u534F\u8BAE\u5B9E\u73B0\u7F51\u7EDC\u901A\u4FE1\uFF1B</li><li>Datagram: \u4F7F\u7528 UDP \u534F\u8BAE\u5B9E\u73B0\u7F51\u7EDC\u901A\u4FE1\u3002</li></ul><h4 id="_1-5-1-inetaddress" tabindex="-1"><a class="header-anchor" href="#_1-5-1-inetaddress" aria-hidden="true">#</a> 1.5.1 InetAddress</h4><p>\u6CA1\u6709\u516C\u6709\u7684\u6784\u9020\u51FD\u6570\uFF0C\u53EA\u80FD\u901A\u8FC7\u9759\u6001\u65B9\u6CD5\u6765\u521B\u5EFA\u5B9E\u4F8B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByName</span><span class="token punctuation">(</span><span class="token class-name">String</span> host<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getByAddress</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> address<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-2-url" tabindex="-1"><a class="header-anchor" href="#_1-5-2-url" aria-hidden="true">#</a> 1.5.2 URL</h4><p>\u53EF\u4EE5\u76F4\u63A5\u4ECE URL \u4E2D\u8BFB\u53D6\u5B57\u8282\u6D41\u6570\u636E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* \u5B57\u8282\u6D41 */</span>
    <span class="token class-name">InputStream</span> is <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">openStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* \u5B57\u7B26\u6D41 */</span>
    <span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>is<span class="token punctuation">,</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* \u63D0\u4F9B\u7F13\u5B58\u529F\u80FD */</span>
    <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span>isr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> line<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5-3-sockets" tabindex="-1"><a class="header-anchor" href="#_1-5-3-sockets" aria-hidden="true">#</a> 1.5.3 Sockets</h4><ul><li>ServerSocket: \u670D\u52A1\u5668\u7AEF\u7C7B</li><li>Socket: \u5BA2\u6237\u7AEF\u7C7B</li><li>\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u901A\u8FC7 InputStream \u548C OutputStream \u8FDB\u884C\u8F93\u5165\u8F93\u51FA\u3002</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830211459015.png" alt="image-20220830211459015"></p><h4 id="_1-5-4-datagram" tabindex="-1"><a class="header-anchor" href="#_1-5-4-datagram" aria-hidden="true">#</a> 1.5.4 Datagram</h4><ul><li>DatagramSocket: \u901A\u4FE1\u7C7B</li><li>DatagramPacket: \u6570\u636E\u5305\u7C7B</li></ul><h2 id="_2-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 2. \u5E38\u89C1\u95EE\u9898</h2><ul><li>Java \u5B57\u8282\u8BFB\u53D6\u6D41\u7684read\u65B9\u6CD5\u8FD4\u56DEint\u7684\u539F\u56E0</li></ul>`,39),r={href:"https://blog.csdn.net/congwiny/article/details/18922847",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u6587\u7AE0")],-1),d={href:"https://pdai.tech/md/java/io/java-io-basic-usage.html",target:"_blank",rel:"noopener noreferrer"},v=n("strong",null,"Java IO - \u5E38\u89C1\u7C7B\u4F7F\u7528",-1);function m(b,h){const s=l("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[n("a",r,[e("https://blog.csdn.net/congwiny/article/details/18922847"),a(s)])]),k,n("p",null,[n("a",d,[v,a(s)])])])}const g=t(i,[["render",m],["__file","java-io-basic-usage.html.vue"]]);export{g as default};
