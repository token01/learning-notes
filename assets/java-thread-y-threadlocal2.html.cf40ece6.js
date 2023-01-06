import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as c,f as o,r as l}from"./app.c8e02ec4.js";const i={},u=o(`<h1 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h1><h2 id="_1-\u4EC0\u4E48\u662Fthreadlocal" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fthreadlocal" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662FThreadLocal</h2><p>\u6211\u4EEC\u5148\u6765\u770B\u4E0BJDK \u7684\u6587\u6863\u4ECB\u7ECD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * This class provides thread-local variables.  These variables differ from
 * their normal counterparts in that each thread that accesses one (via its
 * {@code get} or {@code set} method) has its own, independently initialized
 * copy of the variable.  {@code ThreadLocal} instances are typically private
 * static fields in classes that wish to associate state with a thread (e.g.,
 * a user ID or Transaction ID).
 * 
 * &lt;p&gt;For example, the class below generates unique identifiers local to each
 * thread.
 * A thread&#39;s id is assigned the first time it invokes {@code ThreadId.get()}
 * and remains unchanged on subsequent calls.
 */  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ThreadLocal\u63D0\u4F9B\u4E86\u7EBF\u7A0B\u7684\u5C40\u90E8\u53D8\u91CF\u3002\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u53EF\u4EE5\u901A\u8FC7<code>set()</code>\u548C<code>get()</code>\u6765\u5BF9\u8FD9\u4E2A \u5C40\u90E8\u53D8\u91CF\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4F46\u4E0D\u4F1A\u548C\u5176\u4ED6\u7EBF\u7A0B\u7684\u5C40\u90E8\u53D8\u91CF\u8FDB\u884C\u51B2\u7A81\u3002<strong>\u5B9E\u73B0\u4E86\u7EBF\u7A0B\u7684\u6570\u636E\u9694\u79BB</strong></p><p>\u7B80\u8981\u8A00\u4E4B\uFF1A\u5F80ThreadLocal\u4E2D\u586B\u5145\u7684\u53D8\u91CF\u5C5E\u4E8E<strong>\u5F53\u524D</strong>\u7EBF\u7A0B\uFF0C\u8BE5\u53D8\u91CF\u5BF9\u5176\u4ED6\u7EBF\u7A0B\u800C\u8A00\u662F\u9694\u79BB\u7684\u3002</p><h2 id="_2-\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60threadlocal" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60threadlocal" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60ThreadLocal</h2><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u5F97\u51FA\uFF1AThreadLocal\u53EF\u4EE5\u8BA9\u6211\u4EEC\u62E5\u6709\u5F53\u524D\u7EBF\u7A0B\u7684\u53D8\u91CF\uFF0C\u90A3\u8FD9\u4E2A\u4F5C\u7528\u6709\u4EC0\u4E48\u7528\u5462\uFF1F\uFF1F\uFF1F</p><h3 id="_2-1-\u7BA1\u7406connection" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7BA1\u7406connection" aria-hidden="true">#</a> 2.1 \u7BA1\u7406Connection</h3><p><strong>\u6700\u5178\u578B\u7684\u662F\u7BA1\u7406\u6570\u636E\u5E93\u7684Connection</strong>\uFF1A</p><p>\u5F53\u65F6\u5728\u5B66JDBC\u7684\u65F6\u5019\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u64CD\u4F5C\u5199\u4E86\u4E00\u4E2A\u7B80\u5355\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\uFF0C\u9700\u8981\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7684\u7406\u7531\u4E5F\u5F88\u7B80\u5355\uFF0C\u9891\u7E41\u521B\u5EFA\u548C\u5173\u95EDConnection\u662F\u4E00\u4EF6\u975E\u5E38\u8017\u8D39\u8D44\u6E90\u7684\u64CD\u4F5C\uFF0C\u56E0\u6B64\u9700\u8981\u521B\u5EFA\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\uFF5E</p><p>\u90A3\u4E48\uFF0C\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u7684\u8FDE\u63A5\u600E\u4E48\u7BA1\u7406\u5462\uFF1F\uFF1F\u6211\u4EEC\u4EA4\u7531ThreadLocal\u6765\u8FDB\u884C\u7BA1\u7406\u3002\u4E3A\u4EC0\u4E48\u4EA4\u7ED9\u5B83\u6765\u7BA1\u7406\u5462\uFF1F\uFF1FThreadLocal\u80FD\u591F\u5B9E\u73B0<strong>\u5F53\u524D\u7EBF\u7A0B\u7684\u64CD\u4F5C\u90FD\u662F\u7528\u540C\u4E00\u4E2AConnection\uFF0C\u4FDD\u8BC1\u4E86\u4E8B\u52A1\uFF01</strong></p><p>\u5F53\u65F6\u5019\u5199\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DBUtil</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u6570\u636E\u5E93\u8FDE\u63A5\u6C60</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">BasicDataSource</span> source<span class="token punctuation">;</span>

    <span class="token comment">//\u4E3A\u4E0D\u540C\u7684\u7EBF\u7A0B\u7BA1\u7406\u8FDE\u63A5</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Connection</span><span class="token punctuation">&gt;</span></span> local<span class="token punctuation">;</span>


    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</span>
            <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u83B7\u53D6\u8BFB\u53D6\u6D41</span>
            <span class="token class-name">InputStream</span> stream <span class="token operator">=</span> <span class="token class-name">DBUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6C60/config.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u4ECE\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BFB\u53D6\u6570\u636E</span>
            properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>stream<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u5173\u95ED\u6D41</span>
            stream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u521D\u59CB\u5316\u8FDE\u63A5\u6C60</span>
            source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasicDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6E\u9A71\u52A8</span>
            source<span class="token punctuation">.</span><span class="token function">setDriverClassName</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6Eurl</span>
            source<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6E\u7528\u6237\u540D</span>
            source<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6E\u5BC6\u7801</span>
            source<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6E\u521D\u59CB\u8FDE\u63A5\u6570\u91CF</span>
            source<span class="token punctuation">.</span><span class="token function">setInitialSize</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;initsize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6E\u6700\u5927\u7684\u8FDE\u63A5\u6570\u91CF</span>
            source<span class="token punctuation">.</span><span class="token function">setMaxActive</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;maxactive&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6E\u6700\u957F\u7684\u7B49\u5F85\u65F6\u95F4</span>
            source<span class="token punctuation">.</span><span class="token function">setMaxWait</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;maxwait&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u8BBE\u7F6E\u6700\u5C0F\u7A7A\u95F2\u6570</span>
            source<span class="token punctuation">.</span><span class="token function">setMinIdle</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;minidle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u521D\u59CB\u5316\u7EBF\u7A0B\u672C\u5730</span>
            local <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        
            <span class="token comment">//\u83B7\u53D6Connection\u5BF9\u8C61</span>
            <span class="token class-name">Connection</span> connection <span class="token operator">=</span> source<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
            <span class="token comment">//\u628AConnection\u653E\u8FDBThreadLocal\u91CC\u9762</span>
            local<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
            <span class="token comment">//\u8FD4\u56DEConnection\u5BF9\u8C61</span>
            <span class="token keyword">return</span> connection<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token comment">//\u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">closeConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u4ECE\u7EBF\u7A0B\u4E2D\u62FF\u5230Connection\u5BF9\u8C61</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> local<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u6062\u590D\u8FDE\u63A5\u4E3A\u81EA\u52A8\u63D0\u4EA4</span>
                connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//\u8FD9\u91CC\u4E0D\u662F\u771F\u7684\u628A\u8FDE\u63A5\u5173\u4E86,\u53EA\u662F\u5C06\u8BE5\u8FDE\u63A5\u5F52\u8FD8\u7ED9\u8FDE\u63A5\u6C60</span>
                connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//\u65E2\u7136\u8FDE\u63A5\u5DF2\u7ECF\u5F52\u8FD8\u7ED9\u8FDE\u63A5\u6C60\u4E86,ThreadLocal\u4FDD\u5B58\u7684Connction\u5BF9\u8C61\u4E5F\u5DF2\u7ECF\u6CA1\u7528\u4E86</span>
                local<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u7684\uFF0CHibernate\u5BF9Connection\u7684\u7BA1\u7406\u4E5F\u662F\u91C7\u7528\u4E86\u76F8\u540C\u7684\u624B\u6CD5(\u4F7F\u7528ThreadLocal\uFF0C\u5F53\u7136\u4E86Hibernate\u7684\u5B9E\u73B0\u662F\u66F4\u5F3A\u5927\u7684)\uFF5E</p><h2 id="_2-2-\u907F\u514D\u4E00\u4E9B\u53C2\u6570\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_2-2-\u907F\u514D\u4E00\u4E9B\u53C2\u6570\u4F20\u9012" aria-hidden="true">#</a> 2.2 \u907F\u514D\u4E00\u4E9B\u53C2\u6570\u4F20\u9012</h2><p><strong>\u907F\u514D\u4E00\u4E9B\u53C2\u6570\u7684\u4F20\u9012\u7684\u7406\u89E3</strong>\u53EF\u4EE5\u53C2\u8003\u4E00\u4E0BCookie\u548CSession\uFF1A</p><h2 id="_3-threadlocal-\u5B9E\u73B0\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-threadlocal-\u5B9E\u73B0\u7684\u539F\u7406" aria-hidden="true">#</a> 3. ThreadLocal \u5B9E\u73B0\u7684\u539F\u7406</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// \u5F97\u5230\u5F53\u524D\u7EBF\u7A0B\u5BF9\u8C61</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// \u8FD9\u91CC\u83B7\u53D6ThreadLocalMap</span>
        <span class="token class-name">ThreadLocalMap</span> map <span class="token operator">=</span> <span class="token function">getMap</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// \u5982\u679Cmap\u5B58\u5728\uFF0C\u5219\u5C06\u5F53\u524D\u7EBF\u7A0B\u5BF9\u8C61t\u4F5C\u4E3Akey\uFF0C\u8981\u5B58\u50A8\u7684\u5BF9\u8C61\u4F5C\u4E3Avalue\u5B58\u5230map\u91CC\u9762\u53BB</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token function">createMap</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u6709\u4E2AThreadLocalMap\uFF0C\u6211\u4EEC\u53BB\u770B\u770B\u8FD9\u662F\u4EC0\u4E48\uFF1F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ThreadLocalMap</span> <span class="token punctuation">{</span>

        <span class="token doc-comment comment">/**
         * The entries in this hash map extend WeakReference, using
         * its main ref field as the key (which is always a
         * ThreadLocal object).  Note that null keys (i.e. entry.get()
         * == null) mean that the key is no longer referenced, so the
         * entry can be expunged from table.  Such entries are referred to
         * as &quot;stale entries&quot; in the code that follows.
         */</span>
        <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span> <span class="token keyword">extends</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ThreadLocal</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
            <span class="token doc-comment comment">/** The value associated with this ThreadLocal. */</span>
            <span class="token class-name">Object</span> value<span class="token punctuation">;</span>

            <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> k<span class="token punctuation">,</span> <span class="token class-name">Object</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">super</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
                value <span class="token operator">=</span> v<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
		<span class="token comment">//....\u5F88\u957F</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u7684\u662F<strong>ThreadLocalMap\u662FThreadLocal\u7684\u4E00\u4E2A\u5185\u90E8\u7C7B\u3002\u7528Entry\u7C7B\u6765\u8FDB\u884C\u5B58\u50A8</strong></p><p>\u6211\u4EEC\u7684<strong>\u503C\u90FD\u662F\u5B58\u50A8\u5230\u8FD9\u4E2AMap\u4E0A\u7684\uFF0Ckey\u662F\u5F53\u524DThreadLocal\u5BF9\u8C61</strong>\uFF01</p><p>\u5982\u679C\u8BE5Map\u4E0D\u5B58\u5728\uFF0C\u5219\u521D\u59CB\u5316\u4E00\u4E2A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>void createMap(Thread t, T firstValue) {
        t.threadLocals = new ThreadLocalMap(this, firstValue);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8BE5Map\u5B58\u5728\uFF0C\u5219<strong>\u4ECEThread\u4E2D\u83B7\u53D6</strong>\uFF01</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token doc-comment comment">/**
     * Get the map associated with a ThreadLocal. Overridden in
     * InheritableThreadLocal.
     *
     * <span class="token keyword">@param</span>  <span class="token parameter">t</span> the current thread
     * <span class="token keyword">@return</span> the map
     */</span>
    <span class="token class-name">ThreadLocalMap</span> <span class="token function">getMap</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> t<span class="token punctuation">.</span>threadLocals<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Thread\u7EF4\u62A4\u4E86ThreadLocalMap\u53D8\u91CF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token comment">/* ThreadLocal values pertaining to this thread. This map is maintained
     * by the ThreadLocal class. */</span>
    <span class="token class-name">ThreadLocal<span class="token punctuation">.</span>ThreadLocalMap</span> threadLocals <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u53C8\u53EF\u4EE5\u770B\u51FA\uFF0C<strong>ThreadLocalMap\u662F\u5728ThreadLocal\u4E2D\u4F7F\u7528\u5185\u90E8\u7C7B\u6765\u7F16\u5199\u7684\uFF0C\u4F46\u5BF9\u8C61\u7684\u5F15\u7528\u662F\u5728Thread\u4E2D</strong>\uFF01</p><p>\u4E8E\u662F\u6211\u4EEC\u53EF\u4EE5\u603B\u7ED3\u51FA\uFF1A<strong>Thread\u4E3A\u6BCF\u4E2A\u7EBF\u7A0B\u7EF4\u62A4\u4E86ThreadLocalMap\u8FD9\u4E48\u4E00\u4E2AMap\uFF0C\u800CThreadLocalMap\u7684key\u662FLocalThread\u5BF9\u8C61\u672C\u8EAB\uFF0Cvalue\u5219\u662F\u8981\u5B58\u50A8\u7684\u5BF9\u8C61</strong></p><p>\u6709\u4E86\u4E0A\u9762\u7684\u57FA\u7840\uFF0C\u6211\u4EEC\u770Bget()\u65B9\u6CD5\u5C31\u4E00\u70B9\u90FD\u4E0D\u96BE\u7406\u89E3\u4E86</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadLocalMap</span> map <span class="token operator">=</span> <span class="token function">getMap</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ThreadLocalMap<span class="token punctuation">.</span>Entry</span> e <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
                <span class="token class-name">T</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span>e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">setInitialValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-threadlocal-\u539F\u7406\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-1-threadlocal-\u539F\u7406\u603B\u7ED3" aria-hidden="true">#</a> 3.1 ThreadLocal \u539F\u7406\u603B\u7ED3</h3><ol><li>\u6BCF\u4E2AThread\u7EF4\u62A4\u7740\u4E00\u4E2AThreadLocalMap\u7684\u5F15\u7528</li><li>ThreadLocalMap \u662FThreadLocal\u7684\u5185\u90E8\u7C7B\uFF0C\u7528Entry\u6765\u8FDB\u884C\u5B58\u50A8</li><li>\u8C03\u7528ThreadLocal\u7684set()\u65B9\u6CD5\u65F6\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5F80ThreadLocalMap\u8BBE\u7F6E\u503C\uFF0Ckey\u662FThreadLocal\u5BF9\u8C61\uFF0C\u503C\u662F\u4F20\u9012\u8FDB\u6765\u7684\u5BF9\u8C61</li><li>\u8C03\u7528ThreadLocal\u7684get()\u65B9\u6CD5\u65F6\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5F80ThreadLocalMap\u83B7\u53D6\u503C\uFF0Ckey\u662FThreadLocal\u5BF9\u8C61</li><li><strong>ThreadLocal\u672C\u8EAB\u5E76\u4E0D\u5B58\u50A8\u503C</strong>\uFF0C\u5B83\u53EA\u662F<strong>\u4F5C\u4E3A\u4E00\u4E2Akey\u6765\u8BA9\u7EBF\u7A0B\u4ECEThreadLocalMap\u83B7\u53D6value</strong>\u3002</li></ol><h2 id="_4-\u907F\u514D\u5185\u5B58\u6CC4\u6F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u907F\u514D\u5185\u5B58\u6CC4\u6F0F" aria-hidden="true">#</a> 4. \u907F\u514D\u5185\u5B58\u6CC4\u6F0F</h2><p>\u6211\u4EEC\u6765\u770B\u4E00\u4E0BThreadLocal\u7684\u5BF9\u8C61\u5173\u7CFB\u5F15\u7528\u56FE\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190917002342817.png" alt="image-20190917002342817"></p><p>ThreadLocal\u5185\u5B58\u6CC4\u6F0F\u7684\u6839\u6E90\u662F\uFF1A<strong>\u7531\u4E8EThreadLocalMap\u7684\u751F\u547D\u5468\u671F\u8DDFThread\u4E00\u6837\u957F\uFF0C\u5982\u679C\u6CA1\u6709\u624B\u52A8\u5220\u9664\u5BF9\u5E94key\u5C31\u4F1A\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\uFF0C\u800C\u4E0D\u662F\u56E0\u4E3A\u5F31\u5F15\u7528</strong>\u3002</p><p>\u60F3\u8981\u907F\u514D\u5185\u5B58\u6CC4\u9732\u5C31\u8981<strong>\u624B\u52A8remove()\u6389</strong>\uFF01</p><h2 id="_5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u603B\u7ED3" aria-hidden="true">#</a> 5. \u603B\u7ED3</h2><p><strong>ThreadLocal\u8BBE\u8BA1\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u80FD\u591F\u5728\u5F53\u524D\u7EBF\u7A0B\u4E2D\u6709\u5C5E\u4E8E\u81EA\u5DF1\u7684\u53D8\u91CF\uFF0C\u5E76\u4E0D\u662F\u4E3A\u4E86\u89E3\u51B3\u5E76\u53D1\u6216\u8005\u5171\u4EAB\u53D8\u91CF\u7684\u95EE\u9898</strong></p><h3 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h3>`,43),r={href:"https://juejin.im/post/5ac2eb52518825555e5e06ee#comment",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=l("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[p("ThreadLocal\u5C31\u662F\u8FD9\u4E48\u7B80\u5355"),c(s)])])])}const h=a(i,[["render",d],["__file","java-thread-y-threadlocal2.html.vue"]]);export{h as default};
