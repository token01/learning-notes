import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as c,f as o,r as l}from"./app.31f1281d.js";const i={},u=o(`<h1 id="\u539F\u5B50\u7C7Batomicinteger\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u5B50\u7C7Batomicinteger\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> \u539F\u5B50\u7C7BAtomicInteger\u6E90\u7801\u89E3\u6790</h1><h2 id="_1-\u6838\u5FC3\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_1-\u6838\u5FC3\u539F\u7406" aria-hidden="true">#</a> 1. \u6838\u5FC3\u539F\u7406</h2><h3 id="_1-1-\u64CD\u4F5C\u5BF9\u8C61value" tabindex="-1"><a class="header-anchor" href="#_1-1-\u64CD\u4F5C\u5BF9\u8C61value" aria-hidden="true">#</a> 1.1 \u64CD\u4F5C\u5BF9\u8C61value</h3><p>AtomicInteger\u7528\u4E8E\u5B9E\u73B0\u901A\u8FC7\u539F\u5B50\u7684\u65B9\u5F0F\u66F4\u65B0\u5355\u4E2A\u53D8\u91CF\u3002AtomicInteger \u4E2D\u4FDD\u5B58\u4E86\u4E00\u4E2A\u6838\u5FC3\u5B57\u6BB5value\uFF0C\u5B83\u5C31\u4EE3\u8868\u4E86Atomiclnteger \u7684\u5F53\u524D\u5B9E\u9645\u53D6\u503C\uFF0C\u6240\u6709\u7684\u65B9\u6CD5\u90FD\u662F\u56F4\u7ED5\u8BE5\u503C\u8FDB\u884C\u7684\u3002</p><h3 id="_1-2-\u504F\u79FB\u91CFvalueoffset" tabindex="-1"><a class="header-anchor" href="#_1-2-\u504F\u79FB\u91CFvalueoffset" aria-hidden="true">#</a> 1.2 <strong>\u504F\u79FB\u91CF</strong>valueOffset</h3><p><strong>\u5C5E\u6027valueOffset\uFF0C\u5B83\u4FDD\u5B58\u7740value \u5B57\u6BB5\u5728Atomiclnteger \u5BF9\u8C61\u4E2D\u7684\u504F\u79FB\u91CF\u3002Unsafe\u4E2D\u7684CAS\u65B9\u6CD5\u90FD\u662F\u901A\u8FC7\u5B57\u6BB5\u7684\u504F\u79FB\u91CF\u6765\u64CD\u4F5C\u5B57\u6BB5\u7684\u3002</strong></p><h2 id="_2-\u521D\u59CB\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u59CB\u4EE3\u7801" aria-hidden="true">#</a> 2. \u521D\u59CB\u4EE3\u7801</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u5185\u90E8\u7684value\u5C5E\u6027\uFF0C\u5B83\u5C31\u4EE3\u8868\u4E86Atomiclnteger \u7684\u5F53\u524D\u5B9E\u9645\u53D6\u503C\u3002
 * \u6240\u6709\u7684\u65B9\u6CD5\u90FD\u662F\u56F4\u7ED5\u8BE5\u503C\u8FDB\u884C\u7684
 */</span>
<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4F7F\u7528\u7ED9\u5B9A\u503C\u521D\u59CB\u5316value
 *
 * <span class="token keyword">@param</span> <span class="token parameter">initialValue</span> \u7ED9\u5B9A\u503C
 */</span>
<span class="token keyword">public</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> initialValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u521D\u59CB\u5316value\u503C\u4E3A0
 */</span>
<span class="token keyword">public</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5185\u90E8\u5B9E\u9645\u4E0A\u4F9D\u8D56\u4E8EUnsafe\u7C7B\u7684\u65B9\u6CD5\uFF0C\u5BF9value\u503C\u8FDB\u884C\u64CD\u4F5C
 */</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Unsafe</span> unsafe <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * value\u5B57\u6BB5\u7684\u504F\u79FB\u91CF
 */</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> valueOffset<span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u521D\u59CB\u5316value\u5B57\u6BB5\u7684\u504F\u79FB\u91CF</span>
        valueOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span>objectFieldOffset
                <span class="token punctuation">(</span><span class="token class-name">AtomicInteger</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u91CD\u8981\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u8981\u65B9\u6CD5" aria-hidden="true">#</a> 3. \u91CD\u8981\u65B9\u6CD5</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u83B7\u53D6\u5F53\u524D\u6700\u65B0\u503C
 *
 * <span class="token keyword">@return</span> \u5F53\u524D\u6700\u65B0\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u8BBE\u7F6E\u7ED9\u5B9A\u65B0\u503C
 *
 * <span class="token keyword">@param</span> <span class="token parameter">newValue</span> \u65B0\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u539F\u5B50\u6027\u7684\u5C06\u5F53\u524D\u503C\u8BBE\u4E3A\u7ED9\u5B9A\u65B0\u503C\uFF0C\u8FD4\u56DE\u65E7\u503C
 *
 * <span class="token keyword">@param</span> <span class="token parameter">newValue</span> \u65B0\u503C
 * <span class="token keyword">@return</span> \u65E7\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndSetInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u5982\u679C\u5F53\u524D\u503C\u7B49\u4E8E\u9884\u671F\u503C\uFF0C\u5219\u4EE5\u539F\u5B50\u65B9\u5F0F\u5C06\u8BE5\u503C\u8BBE\u7F6E\u4E3A\u7ED9\u5B9A\u7684\u65B0\u503C
 *
 * <span class="token keyword">@param</span> <span class="token parameter">expect</span> \u9884\u671F\u503C
 * <span class="token keyword">@param</span> <span class="token parameter">update</span> the new value
 * <span class="token keyword">@return</span> true \u66F4\u65B0\u6210\u529F false \u66F4\u65B0\u5931\u8D25
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> expect<span class="token punctuation">,</span> <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u539F\u5B50\u6027\u7684\u5C06\u5F53\u524D\u503C\u52A01\uFF0C\u8FD4\u56DE\u65E7\u503C
 *
 * <span class="token keyword">@return</span> \u65E7\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u539F\u5B50\u6027\u7684\u5C06\u5F53\u524D\u503C\u51CF1\uFF0C\u8FD4\u56DE\u65E7\u503C
 *
 * <span class="token keyword">@return</span> \u8FD4\u56DE\u65E7\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndDecrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u539F\u5B50\u6027\u7684\u5C06\u5F53\u524D\u503C\u589E\u52A0delta,\u8FD4\u56DE\u65E7\u503C
 *
 * <span class="token keyword">@param</span> <span class="token parameter">delta</span> \u589E\u52A0\u7684\u503C
 * <span class="token keyword">@return</span> \u65E7\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u539F\u5B50\u6027\u7684\u5C06\u5F53\u524D\u503C\u52A01\uFF0C\u8FD4\u56DE\u65B0\u503C
 *
 * <span class="token keyword">@return</span> \u66F4\u65B0\u540E\u7684\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u539F\u5B50\u6027\u7684\u5C06\u5F53\u524D\u503C\u51CF1\uFF0C\u8FD4\u56DE\u65B0\u503C
 *
 * <span class="token keyword">@return</span> \u66F4\u65B0\u540E\u7684\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">decrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * \u539F\u5B50\u6027\u7684\u5C06\u5F53\u524D\u503C\u589E\u52A0delta\uFF0C\u8FD4\u56DE\u65B0\u503C
 *
 * <span class="token keyword">@param</span> <span class="token parameter">delta</span> \u589E\u52A0\u7684\u503C
 * <span class="token keyword">@return</span> \u66F4\u65B0\u540E\u7684\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">addAndGet</span><span class="token punctuation">(</span><span class="token keyword">int</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> delta<span class="token punctuation">)</span> <span class="token operator">+</span> delta<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 1. \u6700\u7EC8\u4F1A\u8BBE\u7F6E\u6210newValue\uFF0C\u4F7F\u7528lazySet\u8BBE\u7F6E\u503C\u540E\uFF0C\u53EF\u80FD\u5BFC\u81F4\u5176\u4ED6\u7EBF\u7A0B\u5728\u4E4B\u540E\u7684\u4E00\u5C0F\u6BB5\u65F6\u95F4\u5185\u8FD8\u662F\u53EF\u4EE5\u8BFB\u5230\u65E7\u7684\u503C\u3002
 2. \u5173\u4E8E\u8BE5\u65B9\u6CD5\u7684\u66F4\u591A\u4FE1\u606F\u53EF\u4EE5\u53C2\u8003\u5E76\u53D1\u7F16\u7A0B\u7F51\u7FFB\u8BD1\u7684\u4E00\u7BC7\u6587\u7AE0\u300AAtomicLong.lazySet\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1F\u300B\uFF0C\u6587\u7AE0\u5730\u5740\u662F\u201Chttp://ifeve.com/how-does-atomiclong-lazyset-work/\u201D\u3002
 3.  4. @param newValue \u65B0\u503C
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">lazySet</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    unsafe<span class="token punctuation">.</span><span class="token function">putOrderedInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53EF\u4EE5\u770B\u5230\uFF0C\u91CC\u9762\u7684\u65B9\u6CD5\u90FD\u662F\u8C03\u7528\u7684Unsafe\u7C7B\u65B9\u6CD5\uFF0C\u8FDB\u884C\u7684CAS\u64CD\u4F5C\u3002</strong></p><h2 id="_4-char\u3001float\u548Cdouble\u7B49\u7684cas\u64CD\u4F5C\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#_4-char\u3001float\u548Cdouble\u7B49\u7684cas\u64CD\u4F5C\u600E\u4E48\u529E" aria-hidden="true">#</a> 4. char\u3001float\u548Cdouble\u7B49\u7684CAS\u64CD\u4F5C\u600E\u4E48\u529E</h2><p>Atomic\u5305\u5B9E\u9645\u4E0A\u53EA\u63D0\u4F9B\u4E863\u79CD\u57FA\u672C\u7C7B\u578B\u7684\u539F\u5B50\u66F4\u65B0\uFF1Aint\u3001long\u3001boolean\uFF0C\u5176\u4E2Dboolean\u4E5F\u662F\u8F6C\u6362\u4E3Aint\u76840\u30011\u8FDB\u884C\u66F4\u65B0\u7684\uFF0C\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709char\u3001float\u548Cdouble\u7B49\u7684CAS\u64CD\u4F5C\uFF0C\u5B9E\u9645\u4E0Achar\u3001 float\u3001double\u90FD\u53EF\u4EE5\u8F6C\u6362\u4E3Aint\u6216\u8005long\u5728\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5982\u679CDoubleAdder\u5C31\u662F\u91C7\u7528Double.doubleToRawLongBits\u5C06double\u8F6C\u6362\u4E3Along\u7C7B\u578B\u7684\u503C\u5728\u8FDB\u884C\u64CD\u4F5C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/*Unsafe\u53EA\u63D0\u4F9B\u4E863\u79CDCAS\u65B9\u6CD5.*/</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">,</span> <span class="token keyword">long</span> var2<span class="token punctuation">,</span> <span class="token class-name">Object</span> var4<span class="token punctuation">,</span> <span class="token class-name">Object</span> var5<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">,</span> <span class="token keyword">long</span> var2<span class="token punctuation">,</span> <span class="token keyword">int</span> var4<span class="token punctuation">,</span> <span class="token keyword">int</span> var5<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">,</span> <span class="token keyword">long</span> var2<span class="token punctuation">,</span> <span class="token keyword">long</span> var4<span class="token punctuation">,</span> <span class="token keyword">long</span> var6<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*AtomicBoolean\u6E90\u7801\u4E2D\uFF0C\u5B83\u662F\u5148\u628ABoolean\u8F6C\u6362\u6210int\u7C7B\u578B\uFF0C\u518D\u4F7F\u7528compareAndSwapInt\u8FDB\u884CCAS\u64CD\u4F5C*/</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> expect<span class="token punctuation">,</span> <span class="token keyword">boolean</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> e <span class="token operator">=</span> expect <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> u <span class="token operator">=</span> update <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> e<span class="token punctuation">,</span> u<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,15),d={href:"https://blog.csdn.net/weixin_43767015/article/details/124447418",target:"_blank",rel:"noopener noreferrer"};function r(k,v){const s=l("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",d,[p("Java AtomicInteger\u548CAtomicStampedReference\u6E90\u7801\u6DF1\u5EA6\u89E3\u6790"),c(s)])])])}const w=a(i,[["render",r],["__file","java-thread-y-atomicinteger-source.html.vue"]]);export{w as default};
