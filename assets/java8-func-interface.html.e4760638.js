import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,d as a,b as c,f as o,r as l}from"./app.e173e6f3.js";const i={},u=o(`<h1 id="java8-\u51FD\u6570\u5F0F\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#java8-\u51FD\u6570\u5F0F\u63A5\u53E3" aria-hidden="true">#</a> Java8-\u51FD\u6570\u5F0F\u63A5\u53E3</h1><h2 id="_1-\u7406\u89E3\u6CE8\u89E3-functioninterface" tabindex="-1"><a class="header-anchor" href="#_1-\u7406\u89E3\u6CE8\u89E3-functioninterface" aria-hidden="true">#</a> 1. \u7406\u89E3\u6CE8\u89E3 @FunctionInterface</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * An informative annotation type used to indicate that an interface
 * type declaration is intended to be a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>functional interface<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> as
 * defined by the Java Language Specification.
 *
 * Conceptually, a functional interface has exactly one abstract
 * method.  Since <span class="token punctuation">{</span><span class="token keyword">@linkplain</span> <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span><span class="token punctuation">#</span><span class="token function">isDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
 * default methods<span class="token punctuation">}</span> have an implementation, they are not abstract.  If
 * an interface declares an abstract method overriding one of the
 * public methods of <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Object</span></span></span><span class="token punctuation">}</span>, that also does
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>not<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> count toward the interface&#39;s abstract method count
 * since any implementation of the interface will have an
 * implementation from <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Object</span></span></span><span class="token punctuation">}</span> or elsewhere.
 *
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Note that instances of functional interfaces can be created with
 * lambda expressions, method references, or constructor references.
 *
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>If a type is annotated with this annotation type, compilers are
 * required to generate an error message unless:
 *
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> The type is an interface type and not an annotation type, enum, or class.
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> The annotated type satisfies the requirements of a functional interface.
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
 *
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>However, the compiler will treat any interface meeting the
 * definition of a functional interface as a functional interface
 * regardless of whether or not a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">FunctionalInterface</span></span></span><span class="token punctuation">}</span>
 * annotation is present on the interface declaration.
 *
 * <span class="token keyword">@jls</span> 4.3.2. The Class Object
 * <span class="token keyword">@jls</span> 9.8 Functional Interfaces
 * <span class="token keyword">@jls</span> 9.4.3 Interface Method Body
 * <span class="token keyword">@since</span> 1.8
 */</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">FunctionalInterface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>interface\u505A\u6CE8\u89E3\u7684\u6CE8\u89E3\u7C7B\u578B\uFF0C\u88AB\u5B9A\u4E49\u6210java\u8BED\u8A00\u89C4\u8303</li><li>\u4E00\u4E2A\u88AB\u5B83\u6CE8\u89E3\u7684\u63A5\u53E3\u53EA\u80FD\u6709\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5\uFF0C\u6709\u4E24\u79CD\u4F8B\u5916 <ul><li>\u7B2C\u4E00\u662F\u63A5\u53E3\u5141\u8BB8\u6709\u5B9E\u73B0\u7684\u65B9\u6CD5\uFF0C\u8FD9\u79CD\u5B9E\u73B0\u7684\u65B9\u6CD5\u662F\u7528default\u5173\u952E\u5B57\u6765\u6807\u8BB0\u7684(java\u53CD\u5C04\u4E2Djava.lang.reflect.Method#isDefault()\u65B9\u6CD5\u7528\u6765\u5224\u65AD\u662F\u5426\u662Fdefault\u65B9\u6CD5)</li><li>\u7B2C\u4E8C\u5982\u679C\u58F0\u660E\u7684\u65B9\u6CD5\u548Cjava.lang.Object\u4E2D\u7684\u67D0\u4E2A\u65B9\u6CD5\u4E00\u6837\uFF0C\u5B83\u53EF\u4EE5\u4E0D\u5F53\u505A\u672A\u5B9E\u73B0\u7684\u65B9\u6CD5\uFF0C\u4E0D\u8FDD\u80CC\u8FD9\u4E2A\u539F\u5219: \u4E00\u4E2A\u88AB\u5B83\u6CE8\u89E3\u7684\u63A5\u53E3\u53EA\u80FD\u6709\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5, \u6BD4\u5982: <code>java public interface Comparator&lt;T&gt; { int compare(T o1, T o2); boolean equals(Object obj); }</code></li></ul></li><li>\u5982\u679C\u4E00\u4E2A\u7C7B\u578B\u88AB\u8FD9\u4E2A\u6CE8\u89E3\u4FEE\u9970\uFF0C\u90A3\u4E48\u7F16\u8BD1\u5668\u4F1A\u8981\u6C42\u8FD9\u4E2A\u7C7B\u578B\u5FC5\u987B\u6EE1\u8DB3\u5982\u4E0B\u6761\u4EF6: <ul><li>\u8FD9\u4E2A\u7C7B\u578B\u5FC5\u987B\u662F\u4E00\u4E2Ainterface\uFF0C\u800C\u4E0D\u662F\u5176\u4ED6\u7684\u6CE8\u89E3\u7C7B\u578B\u3001\u679A\u4E3Eenum\u6216\u8005\u7C7Bclass</li><li>\u8FD9\u4E2A\u7C7B\u578B\u5FC5\u987B\u6EE1\u8DB3function interface\u7684\u6240\u6709\u8981\u6C42\uFF0C\u5982\u4F60\u4E2A\u5305\u542B\u4E24\u4E2A\u62BD\u8C61\u65B9\u6CD5\u7684\u63A5\u53E3\u589E\u52A0\u8FD9\u4E2A\u6CE8\u89E3\uFF0C\u4F1A\u6709\u7F16\u8BD1\u9519\u8BEF\u3002</li></ul></li><li>\u7F16\u8BD1\u5668\u4F1A\u81EA\u52A8\u628A\u6EE1\u8DB3function interface\u8981\u6C42\u7684\u63A5\u53E3\u81EA\u52A8\u8BC6\u522B\u4E3Afunction interface\uFF0C\u6240\u4EE5\u4F60\u624D\u4E0D\u9700\u8981\u5BF9\u4E0A\u9762\u793A\u4F8B\u4E2D\u7684 ITest\u63A5\u53E3\u589E\u52A0@FunctionInterface\u6CE8\u89E3\u3002</li></ul><h2 id="_2-\u81EA\u5B9A\u4E49\u51FD\u6570\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u5B9A\u4E49\u51FD\u6570\u63A5\u53E3" aria-hidden="true">#</a> 2. \u81EA\u5B9A\u4E49\u51FD\u6570\u63A5\u53E3</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IMyInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>isea<span class="token punctuation">.</span>java</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestIMyInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">IMyInterface</span> iMyInterface <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;I like study&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        iMyInterface<span class="token punctuation">.</span><span class="token function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u5185\u7F6E\u56DB\u5927\u51FD\u6570\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_3-\u5185\u7F6E\u56DB\u5927\u51FD\u6570\u63A5\u53E3" aria-hidden="true">#</a> 3. \u5185\u7F6E\u56DB\u5927\u51FD\u6570\u63A5\u53E3</h2><p>Java 8 \u5728 java.util.function \u5305\u4E0B\u5B9A\u4E49\u4E86\u5F88\u591A\u6807\u51C6\u51FD\u6570\u5F0F\u63A5\u53E3\uFF0C\u4E3B\u8981\u5206\u4E3A\u4EE5\u4E0B\u51E0\u7C7B\uFF1A</p><table><thead><tr><th>\u63A5\u53E3</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th><th>\u7C7B\u522B</th></tr></thead><tbody><tr><td>Consumer</td><td>T</td><td>void</td><td>\u6D88\u8D39\u578B\u63A5\u53E3</td></tr><tr><td>Supplier</td><td>None</td><td>T</td><td>\u4F9B\u7ED9\u578B\u63A5\u53E3</td></tr><tr><td>Function</td><td>T</td><td>R</td><td>\u51FD\u6570\u578B\u63A5\u53E3</td></tr><tr><td>Predicate</td><td>T</td><td>boolean</td><td>\u65AD\u8A00\u578B\u63A5\u53E3</td></tr></tbody></table><h3 id="_3-1-\u6D88\u8D39\u578B\u63A5\u53E3-consumer" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6D88\u8D39\u578B\u63A5\u53E3-consumer" aria-hidden="true">#</a> 3.1 \u6D88\u8D39\u578B\u63A5\u53E3: Consumer</h3><p>Consumer \u63A5\u53E3\u53EA\u6709\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5 accept\uFF0C\u53C2\u6570\u5217\u8868\u53EA\u6709\u4E00\u4E2A\u6CDB\u578Bt\uFF0C\u65E0\u8FD4\u56DE\u503C\uFF0C\u91CD\u70B9\u5728\u4E8E\u5185\u90E8\u6D88\u8D39</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConsumerTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> x <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> consumer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        consumer<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u591A\u4E2A\u53C2\u6570\u5217\u8868\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 ObjLongConsumer</p><h3 id="_3-2-\u4F9B\u7ED9\u578B\u63A5\u53E3-supplier" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4F9B\u7ED9\u578B\u63A5\u53E3-supplier" aria-hidden="true">#</a> 3.2 \u4F9B\u7ED9\u578B\u63A5\u53E3: Supplier</h3><p>Supplier \u53EA\u6709\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5 get\uFF0C\u53C2\u6570\u5217\u8868\u4E3A\u7A7A\uFF0C\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u503C\u5F97\u6570\u636E\u7C7B\u578B\u4E3AT\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SupplerTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">supply</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> num<span class="token punctuation">,</span> <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> supplier<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>supplier<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token function">supply</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u8FD4\u56DE\u5F97\u6570\u636E\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 LongSupplier</p><h3 id="_3-3-\u65AD\u5B9A\u578B\u63A5\u53E3-predicate" tabindex="-1"><a class="header-anchor" href="#_3-3-\u65AD\u5B9A\u578B\u63A5\u53E3-predicate" aria-hidden="true">#</a> 3.3 \u65AD\u5B9A\u578B\u63A5\u53E3: Predicate</h3><p>\u65AD\u8A00\u578B\u53C8\u540D\u5224\u65AD\u578B\u3002 Predicate \u53EA\u6709\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5 test\uFF0C\u53C2\u6570\u5217\u8868\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u4E3A T\uFF0C\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A boolean\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PredicateTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fruit<span class="token punctuation">,</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> predicate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> fruit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>predicate<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                f<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fruit <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;\u9999\u8549&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u54C8\u5BC6\u74DC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u69B4\u83B2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u706B\u9F99\u679C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6C34\u871C\u6843&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> newFruit <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span>fruit<span class="token punctuation">,</span> <span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>newFruit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u51FD\u6570\u578B\u63A5\u53E3-function" tabindex="-1"><a class="header-anchor" href="#_3-4-\u51FD\u6570\u578B\u63A5\u53E3-function" aria-hidden="true">#</a> 3.4 \u51FD\u6570\u578B\u63A5\u53E3: Function</h3><p>Function&lt;T, R&gt; \u53EA\u6709\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5\u540D\u4E3A apply\uFF0C\u53C2\u6570\u5217\u8868\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u4E3AT\uFF0C\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD4\u56DE\u503C\u7684\u6570\u636E\u7C7B\u578B\u4E3AR\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FunctionTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> test <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> x <span class="token operator">-&gt;</span> x<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> function<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> function<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u9700\u8981\u591A\u4E2A\u5165\u53C2\uFF0C\u7136\u540E\u53C8\u8FD4\u56DE\u503C\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8003\u8651 BiFunction</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,25),k={href:"https://pdai.tech/md/java/java8/java8-stream.html",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"Java 8 - \u51FD\u6570\u7F16\u7A0B(lambda\u8868\u8FBE\u5F0F)",-1),d={href:"https://blog.csdn.net/ThinkWon/article/details/113764085",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",k,[r,a(s)])]),n("p",null,[n("a",d,[c("Java8\u65B0\u7279\u6027-Lambda\u8868\u8FBE\u5F0F"),a(s)])])])}const h=t(i,[["render",v],["__file","java8-func-interface.html.vue"]]);export{h as default};
