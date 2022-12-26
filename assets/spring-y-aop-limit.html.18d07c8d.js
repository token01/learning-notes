import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.605999cc.js";const p={},e=t(`<h1 id="limit\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#limit\u9650\u6D41" aria-hidden="true">#</a> Limit\u9650\u6D41</h1><h2 id="_1-\u5B9A\u4E49-limit-\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9A\u4E49-limit-\u6CE8\u89E3" aria-hidden="true">#</a> 1. \u5B9A\u4E49 Limit \u6CE8\u89E3</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Limit</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u8D44\u6E90\u540D\u79F0\uFF0C\u7528\u4E8E\u63CF\u8FF0\u63A5\u53E3\u529F\u80FD</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8D44\u6E90 key</span>
    <span class="token class-name">String</span> <span class="token function">key</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// key prefix</span>
    <span class="token class-name">String</span> <span class="token function">prefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u65F6\u95F4\u7684\uFF0C\u5355\u4F4D\u79D2</span>
    <span class="token keyword">int</span> <span class="token function">period</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u9650\u5236\u8BBF\u95EE\u6B21\u6570</span>
    <span class="token keyword">int</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u9650\u5236\u7C7B\u578B</span>
    <span class="token class-name">LimitType</span> <span class="token function">limitType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">LimitType</span><span class="token punctuation">.</span><span class="token constant">CUSTOMER</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5B9A\u4E49\u5207\u9762" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9A\u4E49\u5207\u9762" aria-hidden="true">#</a> 2. \u5B9A\u4E49\u5207\u9762</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u63A5\u53E3\u9650\u6D41
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LimitAspect</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> limitRedisTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">LimitAspect</span><span class="token punctuation">(</span><span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> limitRedisTemplate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>limitRedisTemplate <span class="token operator">=</span> limitRedisTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(com.ylzinfo.common.annotation.Limit)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do nothing</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;pointcut()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">around</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> point<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span><span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">MethodSignature</span> signature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span> point<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span> method <span class="token operator">=</span> signature<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Limit</span> limitAnnotation <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Limit</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LimitType</span> limitType <span class="token operator">=</span> limitAnnotation<span class="token punctuation">.</span><span class="token function">limitType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> limitAnnotation<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> key<span class="token punctuation">;</span>
        <span class="token class-name">String</span> ip <span class="token operator">=</span> <span class="token class-name">IPUtil</span><span class="token punctuation">.</span><span class="token function">getIpAddr</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> limitPeriod <span class="token operator">=</span> limitAnnotation<span class="token punctuation">.</span><span class="token function">period</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> limitCount <span class="token operator">=</span> limitAnnotation<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>limitType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token constant">IP</span><span class="token operator">:</span>
                key <span class="token operator">=</span> ip<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">CUSTOMER</span><span class="token operator">:</span>
                key <span class="token operator">=</span> limitAnnotation<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                key <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">upperCase</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ImmutableList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keys <span class="token operator">=</span> <span class="token class-name">ImmutableList</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>limitAnnotation<span class="token punctuation">.</span><span class="token function">prefix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> ip<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> luaScript <span class="token operator">=</span> <span class="token function">buildLuaScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> redisScript <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>luaScript<span class="token punctuation">,</span> <span class="token class-name">Number</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Number</span> count <span class="token operator">=</span> limitRedisTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>redisScript<span class="token punctuation">,</span> keys<span class="token punctuation">,</span> limitCount<span class="token punctuation">,</span> limitPeriod<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;IP:{} \u7B2C {} \u6B21\u8BBF\u95EEkey\u4E3A {}\uFF0C\u63CF\u8FF0\u4E3A [{}] \u7684\u63A5\u53E3&quot;</span><span class="token punctuation">,</span> ip<span class="token punctuation">,</span> count<span class="token punctuation">,</span> keys<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> count<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> limitCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> point<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">LimitAccessException</span><span class="token punctuation">(</span><span class="token string">&quot;\u63A5\u53E3\u8BBF\u95EE\u8D85\u51FA\u9891\u7387\u9650\u5236&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u9650\u6D41\u811A\u672C
     * \u8C03\u7528\u7684\u65F6\u5019\u4E0D\u8D85\u8FC7\u9608\u503C\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u5E76\u6267\u884C\u8BA1\u7B97\u5668\u81EA\u52A0\u3002
     *
     * <span class="token keyword">@return</span> lua\u811A\u672C
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">buildLuaScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;local c&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nc = redis.call(&#39;get&#39;,KEYS[1])&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nif c and tonumber(c) &gt; tonumber(ARGV[1]) then&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nreturn c;&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nend&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nc = redis.call(&#39;incr&#39;,KEYS[1])&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nif tonumber(c) == 1 then&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nredis.call(&#39;expire&#39;,KEYS[1],ARGV[2])&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nend&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;\\nreturn c;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4F7F\u7528\u5207\u9762" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u5207\u9762" aria-hidden="true">#</a> 3. \u4F7F\u7528\u5207\u9762</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Limit</span><span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">,</span> period <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">&quot;\u767B\u5F55\u63A5\u53E3&quot;</span><span class="token punctuation">,</span> prefix <span class="token operator">=</span> <span class="token string">&quot;limit&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">FebsResponse</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","spring-y-aop-limit.html.vue"]]);export{r as default};
