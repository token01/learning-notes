import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as t,d as o,f as c,r as l}from"./app.9e15f9d2.js";const i={},u=c(`<h1 id="cas-\u6BD4\u8F83\u5E76\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#cas-\u6BD4\u8F83\u5E76\u66FF\u6362" aria-hidden="true">#</a> CAS\uFF08\u6BD4\u8F83\u5E76\u66FF\u6362\uFF09</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>CAS\uFF08compare and Swap\uFF09\uFF0C\u65E2\u6BD4\u8F83\u5E76\u66FF\u6362\uFF0C\u5B9E\u73B0\u5E76\u53D1\u7B97\u6CD5\u65F6\u5E38\u7528\u5230\u7684\u4E00\u79CD\u6280\u672F</p><blockquote><p>\u5728java\u540C\u6B65\u5668\u4E2D\u5927\u91CF\u4F7F\u7528\u4E86CAS\u6280\u672F\uFF0C\u9B3C\u65A7\u795E\u5DE5\u7684\u5B9E\u73B0\u4E86\u591A\u7EBF\u7A0B\u6267\u884C\u7684\u5B89\u5168\u6027</p></blockquote><p>CAS\u7684\u601D\u60F3\u5F88\u7B80\u5355: \u4E09\u4E2A\u53C2\u6570\uFF0C\u4E00\u4E2A\u5F53\u524D\u5185\u5B58\u503CV\u3001\u65E7\u7684\u9884\u671F\u503CA\u3001\u5373\u5C06\u66F4\u65B0\u7684\u503CB\u3001<strong>\u5F53\u4E14\u4EC5\u5F53<code>\u9884\u671F\u503CA</code>\u548C<code>\u5185\u5B58\u503CV</code>\u76F8\u540C\u65F6</strong>\uFF0C\u5C06\u5185\u5B58\u503C\u4FEE\u6539\u4E3AB\u5E76\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF0C\u5E76\u8FD4\u56DEfalse</p><h2 id="_2-n-\u7684\u95EE\u9898-\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#_2-n-\u7684\u95EE\u9898-\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027" aria-hidden="true">#</a> 2. n++\u7684\u95EE\u9898(\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027)</h2><p>\u4E00\u4E2A<code>n++</code>\u7684\u95EE\u9898</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Case</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> n<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7<code>javac Case.java</code> \u5C06java\u6587\u4EF6\u5148\u7F16\u8BD1\u6210class</p><p>\u518D\u901A\u8FC7<code>javap -verbose Case</code>\u770B\u770Badd\u65B9\u6CD5\u7684\u5B57\u8282\u7801\u6307\u4EE4</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    descriptor<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">V</span>
    flags<span class="token operator">:</span> <span class="token constant">ACC_PUBLIC</span>
    <span class="token class-name">Code</span><span class="token operator">:</span>
      stack<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> locals<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> args_size<span class="token operator">=</span><span class="token number">1</span>
         <span class="token number">0</span><span class="token operator">:</span> aload_0
         <span class="token number">1</span><span class="token operator">:</span> dup
         <span class="token number">2</span><span class="token operator">:</span> getfield      #<span class="token number">2</span>                  <span class="token comment">// Field n:I</span>
         <span class="token number">5</span><span class="token operator">:</span> iconst_1
         <span class="token number">6</span><span class="token operator">:</span> iadd
         <span class="token number">7</span><span class="token operator">:</span> putfield      #<span class="token number">2</span>                  <span class="token comment">// Field n:I</span>
        <span class="token number">10</span><span class="token operator">:</span> <span class="token keyword">return</span>
      <span class="token class-name">LineNumberTable</span><span class="token operator">:</span>
        line <span class="token number">12</span><span class="token operator">:</span> <span class="token number">0</span>
        line <span class="token number">13</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
<span class="token class-name">SourceFile</span><span class="token operator">:</span> <span class="token string">&quot;Case.java&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>n++ \u88AB\u62C6\u5206\u6210\u4E86\u51E0\u4E2A\u6307\u4EE4</p><ol><li>\u6267\u884C<code>getfield</code>\u62FF\u5230\u539F\u59CBn\uFF1B</li><li>\u6267\u884C<code>iadd</code>\u8FDB\u884C\u52A01\u64CD\u4F5C</li><li>\u6267\u884C<code>putfield</code>\u5199\u628A\u7D2F\u52A0\u540E\u7684\u503C\u5199\u56DEn\uFF1B</li></ol><p>\u901A\u8FC7volatile\u4FEE\u9970\u7684\u53D8\u91CF\u53EF\u4EE5\u4FDD\u8BC1\u7EBF\u7A0B\u4E4B\u95F4\u7684\u53EF\u89C1\u6027\uFF0C\u4F46\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u8FD93\u4E2A\u6307\u4EE4\u7684\u539F\u5B50\u6267\u884C\uFF0C\u5728\u591A\u7EBF\u7A0B\u5E76\u53D1\u6267\u884C\u4E0B\uFF0C\u65E0\u6CD5\u505A\u5230\u7EBF\u7A0B\u5B89\u5168\uFF0C\u5F97\u5230\u6B63\u786E\u7684\u7ED3\u679C\uFF0C\u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u5462\uFF1F</p><h2 id="_3-\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_3-\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> 3. \u5982\u4F55\u89E3\u51B3</h2><h3 id="_3-1-\u65B9\u68481-\u5728add-\u65B9\u6CD5\u52A0\u4E0Asynchrnized\u4FEE\u9970" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u68481-\u5728add-\u65B9\u6CD5\u52A0\u4E0Asynchrnized\u4FEE\u9970" aria-hidden="true">#</a> 3.1 \u65B9\u68481\uFF1A\u5728add \u65B9\u6CD5\u52A0\u4E0Asynchrnized\u4FEE\u9970</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Case</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> n<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        n<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6848\u5F53\u7136\u53EF\u884C\uFF0C\u4F46\u662F\u6027\u80FD\u4E0A\u5DEE\u4E86\u70B9</p><p>\u6211\u4EEC\u518D\u6765\u770B\u4E00\u6BB5\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">=</span> b<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8FD9\u6BB5\u4EE3\u7801\u5728\u5E76\u53D1\u4E0B\u6267\u884C\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</p><p>\u5047\u8BBE\u7EBF\u7A0B1\u548C\u7EBF\u7A0B2 \u90FD\u8FC7\u4E86<code>a==1</code>\u7684\u68C0\u67E5\u3002\u90FD\u51C6\u5907\u6267\u884Ca\u8FDB\u884C\u8D4B\u503C\uFF0C\u7ED3\u679C\u5C31\u662F\u4E24\u4E2A\u7EBF\u7A0B\u540C\u65F6\u4FEE\u6539\u4E86\u53D8\u91CFa\u3002\u663E\u7136\u8FD9\u79CD\u7ED3\u679C\u662F\u65E0\u6CD5\u7B26\u5408\u9884\u671F\u7684\uFF0C\u65E0\u6CD5\u786E\u5B9Aa\u7684\u6700\u7EC8\u503C\u3002</p><p>\u89E3\u51B3\u65B9\u6848\u4E5F\u540C\u6837\u66B4\u529B,\u5728compareAndSwapInt\u65B9\u6CD5\u52A0\u9501\u540C\u6B65\uFF0C\u53D8\u6210\u4E00\u4E2A\u539F\u5B50\u64CD\u4F5C\uFF0C\u540C\u4E00\u65F6\u523B\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u624D\u80FD\u4FEE\u6539\u53D8\u91CFa\u3002</p><h3 id="_3-2-\u65B9\u68482-cas\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65B9\u68482-cas\u65B9\u6848" aria-hidden="true">#</a> 3.2 \u65B9\u68482\uFF1ACAS\u65B9\u6848</h3><p>\u9664\u4E86\u4F4E\u6027\u80FD\u7684\u52A0\u9501\u65B9\u6848\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528JDK\u81EA\u5E26\u7684CAS\u65B9\u6848\uFF0C\u5728CAS\u4E2D\uFF0C\u6BD4\u8F83\u548C\u66FF\u6362\u662F\u4E00\u7EC4\u539F\u5B50\u64CD\u4F5C\uFF0C\u4E0D\u4F1A\u88AB\u5916\u90E8\u6253\u65AD\uFF0C\u4E14\u5728\u6027\u80FD\u4E0A\u66F4\u5360\u4F18\u52BF</p><p>\u4E0B\u9762\u662F<code>AtomicInteger</code>\u7684\u5B9E\u73B0\u4E3A\u4F8B\uFF0C\u5206\u6790\u4E00\u4E0BCAS\u662F\u5982\u4F55\u5B9E\u73B0\u7684</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicInteger</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
    <span class="token comment">// setup to use Unsafe.compareAndSwapInt for updates</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Unsafe</span> unsafe <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> valueOffset<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            valueOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span><span class="token class-name">AtomicInteger</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> value<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Unsafe,\u662FCAS\u7684\u6838\u5FC3\u7C7B\uFF0C\u7531\u4E8EJava\u65B9\u6CD5\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u5E95\u5C42\u7CFB\u7EDF\uFF0C\u9700\u8981\u901A\u8FC7\u672C\u5730\uFF08native\uFF09\u65B9\u6CD5\u6765\u8BBF\u95EE\uFF0CUnsafe\u76F8\u5F53\u4E8E\u4E00\u4E2A\u540E\u95E8\uFF0C\u57FA\u4E8E\u8BE5\u7C7B\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C\u7279\u5B9A\u5185\u5B58\u6570\u636E</li><li>\u53D8\u91CFvalueOffset\uFF0C\u8868\u793A\u8BE5\u53D8\u91CF\u503C\u5728\u5185\u5B58\u4E2D\u7684\u504F\u79FB\u5730\u5740\uFF0C\u56E0\u4E3AUnsafe\u5C31\u662F\u6839\u636E\u5185\u5B58\u504F\u79FB\u5730\u5740\u83B7\u53D6\u6570\u636E\u7684</li><li>\u53D8\u91CFvalue\u548Cvolatile\u4FEE\u9970\uFF0C\u4FDD\u8BC1\u4E86\u591A\u7EBF\u7A0B\u4E4B\u95F4\u5185\u5B58\u7684\u53EF\u89C1\u6027</li></ol><p>\u770B\u770B<code>AtomicInteger</code>\u5982\u4F55\u5B9E\u73B0\u5E76\u53D1\u4E0B\u7684\u7D2F\u52A0\u64CD\u4F5C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//unsafe.getAndAddInt</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">,</span> <span class="token keyword">long</span> var2<span class="token punctuation">,</span> <span class="token keyword">int</span> var4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> var5<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        var5 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getIntVolatile</span><span class="token punctuation">(</span>var1<span class="token punctuation">,</span> var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span>var1<span class="token punctuation">,</span> var2<span class="token punctuation">,</span> var5<span class="token punctuation">,</span> var5 <span class="token operator">+</span> var4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> var5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u8BBE\u7EBF\u7A0BA\u548C\u7EBF\u7A0BB\u540C\u65F6\u6267\u884CgetAndAdd\u64CD\u4F5C\uFF08\u5206\u522B\u8DD1\u5728\u4E0D\u540C\u7684CPU\u4E0A\uFF09</p><ol><li><p>AtomicInteger\u91CC\u9762\u7684value\u539F\u59CB\u503C\u4E3A3\uFF0C\u65E2<strong>\u4E3B\u5185\u5B58\u4E2DAtomicInteger\u7684value\u4E3A3</strong>\uFF0C\u6839\u636Ejava\u5185\u5B58\u6A21\u578B\uFF0C<strong>\u7EBF\u7A0BA\u548C\u7EBF\u7A0BB\u5404\u81EA\u6301\u6709\u4E00\u4EFDvalue\u7684\u526F\u672C\uFF0C\u503C\u4E3A3</strong></p></li><li><p>\u7EBF\u7A0BA\u901A\u8FC7<code>getIntVolatile(var1, var2)</code>\u62FF\u5230value\u503C3\uFF0C\u8FD9\u65F6\u7EBF\u7A0BA\u88AB\u6302\u8D77\u3002</p></li><li><p>\u7EBF\u7A0BB\u4E5F\u901A\u8FC7<code>getIntVolatile(var1, var2)</code>\u65B9\u6CD5\u83B7\u53D6\u5230value\u503C3\uFF0C\u8FD0\u6C14\u597D\uFF0C\u7EBF\u7A0BB\u6CA1\u6709\u88AB\u6302\u8D77\uFF0C\u5E76\u6267\u884C<code>compareAndSwapInt</code>\u65B9\u6CD5\u6BD4\u8F83\u5185\u5B58\u503C\u4E5F\u4E3A3\uFF0C\u6210\u529F\u4FEE\u6539\u5185\u5B58\u503C\u4E3A2\u3002</p></li><li><p>\u8FD9\u65F6\u7EBF\u7A0BA\u6062\u590D\uFF0C\u6267\u884C<code>compareAndSwapInt</code>\u65B9\u6CD5\u6BD4\u8F83\uFF0C\u53D1\u73B0\u81EA\u5DF1\u624B\u91CC\u7684\u503C(3)\u548C\u5185\u5B58\u7684\u503C(2)\u4E0D\u4E00\u81F4\uFF0C\u8BF4\u660E\u8BE5\u503C\u5DF2\u7ECF\u88AB\u5176\u5B83\u7EBF\u7A0B\u63D0\u524D\u4FEE\u6539\u8FC7\u4E86\uFF0C\u90A3\u53EA\u80FD\u91CD\u65B0\u6765\u4E00\u904D\u4E86\u3002</p></li><li><p>\u91CD\u65B0\u83B7\u53D6value\u503C\uFF0C\u56E0\u4E3A\u53D8\u91CFvalue\u88ABvolatile\u4FEE\u9970\uFF0C\u6240\u4EE5\u5176\u5B83\u7EBF\u7A0B\u5BF9\u5B83\u7684\u4FEE\u6539\uFF0C\u7EBF\u7A0BA\u603B\u662F\u80FD\u591F\u770B\u5230\uFF0C\u7EBF\u7A0BA\u7EE7\u7EED\u6267\u884C<code>compareAndSwapInt</code>\u8FDB\u884C\u6BD4\u8F83\u66FF\u6362\uFF0C\u76F4\u5230\u6210\u529F</p></li></ol><p>\u6574\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u5229\u7528CAS\u4FDD\u8BC1\u4E86\u5BF9\u4E8Evalue\u7684\u4FEE\u6539\u7684\u5E76\u53D1\u5B89\u5168\uFF0C\u7EE7\u7EED\u6DF1\u5165\u770B\u770BUnsafe\u7C7B\u4E2D\u7684compareAndSwapInt\u65B9\u6CD5\u5B9E\u73B0\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> paramObject<span class="token punctuation">,</span> lo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unsafe\u7C7B\u4E2D\u7684compareAndSwapInt\uFF0C\u662F\u4E00\u4E2A\u672C\u5730\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u7684\u5B9E\u73B0\u4F4D\u4E8E<code>unsafe.cpp</code>\u4E2D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">UNSAFE_ENTRY</span><span class="token punctuation">(</span>jboolean<span class="token punctuation">,</span> <span class="token class-name">Unsafe_CompareAndSwapInt</span><span class="token punctuation">(</span><span class="token class-name">JNIEnv</span> <span class="token operator">*</span>env<span class="token punctuation">,</span> jobject unsafe<span class="token punctuation">,</span> jobject obj<span class="token punctuation">,</span> jlong offset<span class="token punctuation">,</span> jint e<span class="token punctuation">,</span> jint x<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token class-name">UnsafeWrapper</span><span class="token punctuation">(</span><span class="token string">&quot;Unsafe_CompareAndSwapInt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  oop p <span class="token operator">=</span> <span class="token class-name">JNIHandles</span><span class="token operator">::</span><span class="token function">resolve</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  jint<span class="token operator">*</span> addr <span class="token operator">=</span> <span class="token punctuation">(</span>jint <span class="token operator">*</span><span class="token punctuation">)</span> <span class="token function">index_oop_from_field_offset_long</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>jint<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Atomic</span><span class="token operator">::</span><span class="token function">cmpxchg</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> e<span class="token punctuation">;</span>
<span class="token constant">UNSAFE_END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u5148\u60F3\u529E\u6CD5\u62FF\u5230\u53D8\u91CFvalue\u5728\u5185\u5B58\u4E2D\u7684\u5730\u5740</li><li>\u901A\u8FC7Atomic::cmpxchg\u5B9E\u73B0\u66FF\u6362\uFF0C\u5176\u4E2D\u53C2\u6570x\u662F\u5373\u5C06\u66F4\u65B0\u7684\u503C\uFF0C\u53C2\u6570e\u662F\u539F\u5185\u5B58\u7684\u503C</li></ol><h2 id="_4-cas\u7F3A\u70B9-\u4E09\u5927\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-cas\u7F3A\u70B9-\u4E09\u5927\u95EE\u9898" aria-hidden="true">#</a> 4. CAS\u7F3A\u70B9(\u4E09\u5927\u95EE\u9898)</h2><h3 id="_4-1-aba\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-1-aba\u95EE\u9898" aria-hidden="true">#</a> 4.1 ABA\u95EE\u9898</h3><p>CAS\u5B58\u5728\u4E00\u4E2A\u5F88\u660E\u663E\u7684\u95EE\u9898\uFF0C\u65E2ABA\u95EE\u9898</p><p>\u95EE\u9898\uFF1A\u5982\u679C\u53D8\u91CFV\u521D\u6B21\u8BFB\u53D6\u7684\u65F6\u5019\u662FA\uFF0C\u5E76\u4E14\u5728\u51C6\u5907\u8D4B\u503C\u7684\u65F6\u5019\u68C0\u67E5\u5230\u4ED6\u7684\u4ECD\u7136\u662FA\uFF0C\u90A3\u80FD\u8BF4\u660E\u4ED6\u7684\u503C\u6CA1\u6709\u88AB\u5176\u4ED6\u7EBF\u7A0B\u4FEE\u6539\u4E86\u5417\uFF1F</p><p>\u5982\u679C\u5728\u8FD9\u6BB5\u671F\u95F4\u5C42\u7EA7\u88AB\u6539\u6210B,\u7136\u540E\u53C8\u6539\u56DEA\uFF0C\u90A3\u4E48CAS\u64CD\u4F5C\u5C31\u4F1A\u8BEF\u8BA4\u4E3A\u4ED6\u4ECE\u6765\u6CA1\u6709\u88AB\u4FEE\u6539\u8FC7\u3002\u9488\u5BF9\u8FD9\u79CD\u60C5\u51B5\uFF0Cjava\u5E76\u53D1\u5305\u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5E26\u6709\u6807\u8BB0\u7684\u539F\u5B50\u5F15\u7528\u7C7B<code>AtomicStampedReference</code>,\u5B83\u53EF\u4EE5<strong>\u901A\u8FC7\u63A7\u5236\u53D8\u91CF\u503C\u7684\u7248\u672C\u6765\u4FDD\u8BC1CAS\u7684\u6B63\u786E\u6027</strong></p><h3 id="_4-2-\u5FAA\u73AF\u65F6\u95F4\u957F\u5F00\u9500\u5F88\u5927" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5FAA\u73AF\u65F6\u95F4\u957F\u5F00\u9500\u5F88\u5927" aria-hidden="true">#</a> 4.2 <strong>\u5FAA\u73AF\u65F6\u95F4\u957F\u5F00\u9500\u5F88\u5927</strong></h3><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230getAndAddInt\u65B9\u6CD5\u6267\u884C\u65F6\uFF0C\u5982\u679CCAS\u5931\u8D25\uFF0C\u4F1A\u4E00\u76F4\u8FDB\u884C\u5C1D\u8BD5\u3002\u5982\u679CCAS\u957F\u65F6\u95F4\u4E00\u76F4\u4E0D\u6210\u529F\uFF0C\u53EF\u80FD\u4F1A\u7ED9CPU\u5E26\u6765\u5F88\u5927\u7684\u5F00\u9500\u3002</p><h3 id="_4-3-\u53EA\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u539F\u5B50\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_4-3-\u53EA\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u539F\u5B50\u64CD\u4F5C" aria-hidden="true">#</a> 4.3 <strong>\u53EA\u80FD\u4FDD\u8BC1\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u7684\u539F\u5B50\u64CD\u4F5C</strong></h3><p>\u5F53\u5BF9\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u6267\u884C\u64CD\u4F5C\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5FAA\u73AFCAS\u7684\u65B9\u5F0F\u6765\u4FDD\u8BC1\u539F\u5B50\u64CD\u4F5C\uFF0C\u4F46\u662F\u5BF9\u591A\u4E2A\u5171\u4EAB\u53D8\u91CF\u64CD\u4F5C\u65F6\uFF0C\u5FAA\u73AFCAS\u5C31\u65E0\u6CD5\u4FDD\u8BC1\u64CD\u4F5C\u7684\u539F\u5B50\u6027\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u7528\u9501\u6765\u4FDD\u8BC1\u539F\u5B50\u6027\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,47),d={href:"https://www.jianshu.com/p/fb6e91b013cc",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",d,[t("\u6DF1\u5165\u6D45\u51FACAS"),o(a)])])])}const h=s(i,[["render",r],["__file","java-thread-y-cas.html.vue"]]);export{h as default};
