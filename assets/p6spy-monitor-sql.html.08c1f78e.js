import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as p,a as n,b as a,d as e,f as i,r as c}from"./app.e7bdeba6.js";const o={},r=i(`<h1 id="p6spy\u76D1\u63A7\u4F60\u7684sql\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#p6spy\u76D1\u63A7\u4F60\u7684sql\u8F93\u51FA" aria-hidden="true">#</a> P6Spy\u76D1\u63A7\u4F60\u7684SQL\u8F93\u51FA</h1><blockquote><p>mybatis \u7684\u65E5\u5FD7\u53EA\u6709\u57FA\u7840sql\u8BED\u53E5\uFF0C\u5E76\u6CA1\u6709\u5B8C\u6574\u7684sql\u65E5\u5FD7\uFF0C\u5728\u5F00\u53D1\u73AF\u5883\u4E0A\u6392\u67E5\u95EE\u9898\u5B9E\u5728\u592A\u9EBB\u70E6\u4E86</p></blockquote><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>P6Spy\u662F\u4E00\u4E2A\u53EF\u4EE5\u7528\u6765\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u62E6\u622A\u548C\u4FEE\u6539\u6570\u636E\u64CD\u4F5C\u8BED\u53E5\u7684\u5F00\u6E90\u6846\u67B6\u3002\u901A\u8FC7P6Spy\u6211\u4EEC\u53EF\u4EE5\u5BF9SQL\u8BED\u53E5\u8FDB\u884C\u62E6\u622A\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2ASQL\u8BED\u53E5\u7684\u8BB0\u5F55\u5668\uFF0C\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u7528\u5B83\u6765\u4F5C\u76F8\u5173\u7684\u5206\u6790\uFF0C\u6BD4\u5982\u6027\u80FD\u5206\u6790\u3002</p><p>P6SPY\u63D0\u4F9B\u4E86\u5982\u4E0B\u51E0\u4E2A\u529F\u80FD\uFF1A</p><ul><li><p>\u8BB0\u5F55SQL\u8BED\u53E5\u7684\u6267\u884C\u65F6\u95F4\u6233\u3002</p></li><li><p>\u8BB0\u5F55SQL\u8BED\u53E5\u7C7B\u578B\u3002</p></li><li><p>\u8BB0\u5F55SQL\u586B\u5165\u53C2\u6570\u7684\u548C\u6CA1\u6709\u586B\u5165\u53C2\u6570\u7684SQL\u8BED\u53E5\u3002</p></li><li><p>\u6839\u636E\u914D\u7F6E\u7684\u65F6\u95F4\u63A7\u5236SQL\u8BED\u53E5\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u5BF9\u8D85\u51FA\u65F6\u95F4\u7684SQL\u8BED\u53E5\u8F93\u51FA\u5230\u65E5\u5FD7\u6587\u4EF6\u4E2D\u3002</p></li></ul><h2 id="_2-\u96C6\u6210\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u96C6\u6210\u914D\u7F6E" aria-hidden="true">#</a> 2. \u96C6\u6210\u914D\u7F6E</h2><p>\u914D\u7F6E\u6B65\u9AA4\uFF1A</p><h3 id="_2-1-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4F9D\u8D56" aria-hidden="true">#</a> 2.1 \u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>p6spy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>p6spy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.9.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u66FF\u6362jdbc\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#_2-2-\u66FF\u6362jdbc\u9A71\u52A8" aria-hidden="true">#</a> 2.2 \u66FF\u6362JDBC\u9A71\u52A8</h3><p>\u5C06\u4F60\u7684JDBC\u9A71\u52A8\u66FF\u6362\u4E3A</p><div class="language-applescript ext-applescript line-numbers-mode"><pre class="language-applescript"><code><span class="token comment"># \u4FEE\u6539 JDBC \u9A71\u52A8\u4E3A\u5982\u4E0B P6SpyDriver \u914D\u7F6E</span>
<span class="token comment"># \u4E4B\u524D\u4E3A\uFF1A</span>
<span class="token comment"># spring.datasource.driver-class-name=com.mysql.jdbc.Driver</span>
spring.datasource.driver<span class="token operator">-</span><span class="token class-name">class</span><span class="token operator">-</span>name<span class="token operator">=</span>com.p6spy.engine.spy.P6SpyDriver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u4FEE\u6539\u6570\u636E\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4FEE\u6539\u6570\u636E\u5E93\u5730\u5740" aria-hidden="true">#</a> 2.3 \u4FEE\u6539\u6570\u636E\u5E93\u5730\u5740</h3><p>\u4FEE\u6539spring.datasource.url</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u6CE8\u610F\u662F jdbc:p6spy:mysql</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:p6spy:mysql://127.0.0.1:3306/test?useUnicode=true&amp;characterEncoding=UTF-8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6-spy-properties" tabindex="-1"><a class="header-anchor" href="#_2-4-\u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6-spy-properties" aria-hidden="true">#</a> 2.4 \u6DFB\u52A0\u914D\u7F6E\u6587\u4EF6 spy.properties</h3><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">module.log</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory</span>
<span class="token comment"># \u81EA\u5B9A\u4E49\u65E5\u5FD7\u6253\u5370,\u6539\u6210\u4F60\u81EA\u5B9A\u4E49\u914D\u7F6E\u7C7B\u7684\u5168\u7C7B\u540D</span>
<span class="token key attr-name">logMessageFormat</span><span class="token punctuation">=</span><span class="token value attr-value">com.zszdevelop.test.aop.P6SpyLogger</span>
<span class="token comment"># \u4F7F\u7528\u65E5\u5FD7\u7CFB\u7EDF\u8BB0\u5F55sql</span>
<span class="token key attr-name">appender</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.Slf4JLogger</span>
<span class="token comment">## \u914D\u7F6E\u8BB0\u5F55Log\u4F8B\u5916</span>
<span class="token key attr-name">excludecategories</span><span class="token punctuation">=</span><span class="token value attr-value">info,debug,result,commit,resultset</span>
<span class="token comment"># \u8BBE\u7F6E\u4F7F\u7528p6spy driver\u6765\u505A\u4EE3\u7406</span>
<span class="token key attr-name">deregisterdrivers</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># \u65E5\u671F\u683C\u5F0F</span>
<span class="token key attr-name">dateformat</span><span class="token punctuation">=</span><span class="token value attr-value">yyyy-MM-dd HH:mm:ss</span>
<span class="token comment"># \u5B9E\u9645\u9A71\u52A8</span>
<span class="token key attr-name">driverlist</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token comment"># \u662F\u5426\u5F00\u542F\u6162SQL\u8BB0\u5F55</span>
<span class="token comment">#outagedetection=true</span>
<span class="token comment"># \u6162SQL\u8BB0\u5F55\u6807\u51C6 \u79D2</span>
<span class="token comment">#outagedetectioninterval=2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u81EA\u5B9A\u4E49\u65E5\u5FD7\u6253\u5370,\u6539\u6210\u4F60\u81EA\u5B9A\u4E49\u914D\u7F6E\u7C7B\u7684\u5168\u7C7B\u540D</span>
<span class="token key attr-name">logMessageFormat</span><span class="token punctuation">=</span><span class="token value attr-value">com.zszdevelop.test.aop.P6SpyLogger</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-\u81EA\u5B9A\u4E49\u65E5\u5FD7\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#_2-5-\u81EA\u5B9A\u4E49\u65E5\u5FD7\u6253\u5370" aria-hidden="true">#</a> 2.5 \u81EA\u5B9A\u4E49\u65E5\u5FD7\u6253\u5370</h3><p>\u53EF\u4EE5\u628A mybatis \u5360\u4F4D\u7B26\u586B\u8FDB\u53BB\uFF0C\u8F93\u5165\u5B8C\u6574\u7684sql\u65E5\u5FD7</p><blockquote><p>\u81EA\u5DF1\u60F3\u600E\u4E48\u6253\u65E5\u5FD7\u5C31\u600E\u4E48\u6253</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token doc-comment comment">/**
 * \u81EA\u5B9A\u4E49\u65E5\u5FD7
 * \u9ED8\u8BA4com.p6spy.engine.spy.appender.SingleLineFormat
 *
 * <span class="token keyword">@author</span> zsz
 * <span class="token keyword">@date</span> 2022-06-16
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">P6SpyLogger</span> <span class="token keyword">implements</span> <span class="token class-name">MessageFormattingStrategy</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u65E5\u5FD7\u683C\u5F0F
     *
     * <span class="token keyword">@param</span> <span class="token parameter">connectionId</span> \u8FDE\u63A5id
     * <span class="token keyword">@param</span> <span class="token parameter">now</span>          \u5F53\u524D\u65F6\u95F4
     * <span class="token keyword">@param</span> <span class="token parameter">elapsed</span>      \u8017\u65F6\u591A\u4E45
     * <span class="token keyword">@param</span> <span class="token parameter">category</span>     \u7C7B\u522B
     * <span class="token keyword">@param</span> <span class="token parameter">prepared</span>     mybatis\u5E26\u5360\u4F4D\u7B26\u7684sql
     * <span class="token keyword">@param</span> <span class="token parameter">sql</span>          \u5360\u4F4D\u7B26\u6362\u6210\u53C2\u6570\u7684sql
     * <span class="token keyword">@param</span> <span class="token parameter">url</span>          sql\u8FDE\u63A5\u7684 url
     * <span class="token keyword">@return</span> \u81EA\u5B9A\u4E49\u683C\u5F0F\u65E5\u5FD7
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">formatMessage</span><span class="token punctuation">(</span><span class="token keyword">int</span> connectionId<span class="token punctuation">,</span> <span class="token class-name">String</span> now<span class="token punctuation">,</span> <span class="token keyword">long</span> elapsed<span class="token punctuation">,</span> <span class="token class-name">String</span> category<span class="token punctuation">,</span> <span class="token class-name">String</span> prepared<span class="token punctuation">,</span> <span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">String</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> log <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;\\n-----------  SQL\u6267\u884C\u65F6\u95F4\uFF1A%s   SQL\u6267\u884C\u8017\u65F6\uFF1A%s ms  -----------\\n \u6267\u884C\u7684 SQL\u8BED\u53E5\uFF1A%s\\n&quot;</span><span class="token punctuation">,</span> now<span class="token punctuation">,</span> elapsed<span class="token punctuation">,</span> sql<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&quot;[\\\\s]+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            log <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> log<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-spy-properties\u8BE6\u7EC6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_3-spy-properties\u8BE6\u7EC6\u8BF4\u660E" aria-hidden="true">#</a> 3. spy.properties\u8BE6\u7EC6\u8BF4\u660E</h2><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u6307\u5B9A\u5E94\u7528\u7684\u65E5\u5FD7\u62E6\u622A\u6A21\u5757,\u9ED8\u8BA4\u4E3Acom.p6spy.engine.spy.P6SpyFactory</span>
<span class="token key attr-name">modulelist</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.P6SpyFactory,com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory</span>
<span class="token comment"># \u771F\u5B9EJDBC driver , \u591A\u4E2A\u4EE5 \u9017\u53F7 \u5206\u5272 \u9ED8\u8BA4\u4E3A\u7A7A</span>
<span class="token key attr-name">driverlist</span><span class="token punctuation">=</span>
<span class="token comment"># \u662F\u5426\u81EA\u52A8\u5237\u65B0 \u9ED8\u8BA4 flase</span>
<span class="token key attr-name">autoflush</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># \u914D\u7F6ESimpleDateFormat\u65E5\u671F\u683C\u5F0F \u9ED8\u8BA4\u4E3A\u7A7A</span>
<span class="token key attr-name">dateformat</span><span class="token punctuation">=</span>
<span class="token comment"># \u6253\u5370\u5806\u6808\u8DDF\u8E2A\u4FE1\u606F \u9ED8\u8BA4flase</span>
<span class="token key attr-name">stacktrace</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># \u5982\u679C stacktrace=true\uFF0C\u5219\u53EF\u4EE5\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u540D\u6765\u8FDB\u884C\u8FC7\u6EE4\u3002</span>
<span class="token key attr-name">stacktraceclass</span><span class="token punctuation">=</span>
<span class="token comment"># \u76D1\u6D4B\u5C5E\u6027\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u8FDB\u884C\u91CD\u65B0\u52A0\u8F7D</span>
<span class="token key attr-name">reloadproperties</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># \u5C5E\u6027\u914D\u7F6E\u6587\u4EF6\u91CD\u65B0\u52A0\u8F7D\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D:\u79D2 \u9ED8\u8BA460s</span>
<span class="token key attr-name">reloadpropertiesinterval</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
<span class="token comment"># \u6307\u5B9A Log \u7684 appender\uFF0C\u53D6\u503C\uFF1A</span>
<span class="token key attr-name">appender</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.Slf4JLogger</span>
<span class="token key attr-name">appender</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.StdoutLogger</span>
<span class="token key attr-name">appender</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.FileLogger</span>
<span class="token comment"># \u6307\u5B9A Log \u7684\u6587\u4EF6\u540D \u9ED8\u8BA4 spy.log</span>
<span class="token key attr-name">logfile</span><span class="token punctuation">=</span><span class="token value attr-value">spy.log</span>
<span class="token comment"># \u6307\u5B9A\u662F\u5426\u6BCF\u6B21\u662F\u589E\u52A0 Log\uFF0C\u8BBE\u7F6E\u4E3A false \u5219\u6BCF\u6B21\u90FD\u4F1A\u5148\u8FDB\u884C\u6E05\u7A7A \u9ED8\u8BA4true</span>
<span class="token key attr-name">append</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># \u6307\u5B9A\u65E5\u5FD7\u8F93\u51FA\u6837\u5F0F \u9ED8\u8BA4\u4E3Acom.p6spy.engine.spy.appender.SingleLineFormat , \u5355\u884C\u8F93\u51FA \u4E0D\u683C\u5F0F\u5316\u8BED\u53E5</span>
<span class="token key attr-name">logMessageFormat</span><span class="token punctuation">=</span><span class="token value attr-value">com.p6spy.engine.spy.appender.SingleLineFormat</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u91C7\u7528 com.p6spy.engine.spy.appender.CustomLineFormat \u6765\u81EA\u5B9A\u4E49\u8F93\u51FA\u6837\u5F0F, \u9ED8\u8BA4\u503C\u662F%(currentTime)|%(executionTime)|%(category)|connection%(connectionId)|%(sqlSingleLine)</span>
<span class="token comment"># \u53EF\u7528\u7684\u53D8\u91CF\u4E3A:</span>
<span class="token comment"># %(connectionId) connection id</span>
<span class="token comment"># %(currentTime) \u5F53\u524D\u65F6\u95F4</span>
<span class="token comment"># %(executionTime) \u6267\u884C\u8017\u65F6</span>
<span class="token comment"># %(category) \u6267\u884C\u5206\u7EC4</span>
<span class="token comment"># %(effectiveSql) \u63D0\u4EA4\u7684SQL \u6362\u884C</span>
<span class="token comment"># %(effectiveSqlSingleLine) \u63D0\u4EA4\u7684SQL \u4E0D\u6362\u884C\u663E\u793A</span>
<span class="token comment"># %(sql) \u6267\u884C\u7684\u771F\u5B9ESQL\u8BED\u53E5\uFF0C\u5DF2\u66FF\u6362\u5360\u4F4D</span>
<span class="token comment"># %(sqlSingleLine) \u6267\u884C\u7684\u771F\u5B9ESQL\u8BED\u53E5\uFF0C\u5DF2\u66FF\u6362\u5360\u4F4D \u4E0D\u6362\u884C\u663E\u793A</span>
<span class="token key attr-name">customLogMessageFormat</span><span class="token punctuation">=</span><span class="token value attr-value">%(currentTime)|%(executionTime)|%(category)|connection%(connectionId)|%(sqlSingleLine)</span>
<span class="token comment"># date\u7C7B\u578B\u5B57\u6BB5\u8BB0\u5F55\u65E5\u5FD7\u65F6\u4F7F\u7528\u7684\u65E5\u671F\u683C\u5F0F \u9ED8\u8BA4dd-MMM-yy</span>
<span class="token key attr-name">databaseDialectDateFormat</span><span class="token punctuation">=</span><span class="token value attr-value">dd-MMM-yy</span>
<span class="token comment"># boolean\u7C7B\u578B\u5B57\u6BB5\u8BB0\u5F55\u65E5\u5FD7\u65F6\u4F7F\u7528\u7684\u65E5\u671F\u683C\u5F0F \u9ED8\u8BA4boolean \u53EF\u9009\u503Cnumeric</span>
<span class="token key attr-name">databaseDialectBooleanFormat</span><span class="token punctuation">=</span><span class="token value attr-value">boolean</span>
<span class="token comment"># \u662F\u5426\u901A\u8FC7jmx\u66B4\u9732\u5C5E\u6027 \u9ED8\u8BA4true</span>
<span class="token key attr-name">jmx</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># \u5982\u679Cjmx\u8BBE\u7F6E\u4E3Atrue \u6307\u5B9A\u901A\u8FC7jmx\u66B4\u9732\u5C5E\u6027\u65F6\u7684\u524D\u7F00 \u9ED8\u8BA4\u4E3A\u7A7A</span>
<span class="token comment"># com.p6spy(.&lt;jmxPrefix&gt;)?:name=&lt;optionsClassName&gt;</span>
<span class="token key attr-name">jmxPrefix</span><span class="token punctuation">=</span>
<span class="token comment"># \u662F\u5426\u663E\u793A\u7EB3\u79D2 \u9ED8\u8BA4false</span>
<span class="token key attr-name">useNanoTime</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># \u5B9E\u9645\u6570\u636E\u6E90 JNDI</span>
<span class="token key attr-name">realdatasource</span><span class="token punctuation">=</span><span class="token value attr-value">/RealMySqlDS</span>
<span class="token comment"># \u5B9E\u9645\u6570\u636E\u6E90 datasource class</span>
<span class="token key attr-name">realdatasourceclass</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.jdbc2.optional.MysqlDataSource</span>
<span class="token comment"># \u5B9E\u9645\u6570\u636E\u6E90\u6240\u643A\u5E26\u7684\u914D\u7F6E\u53C2\u6570 \u4EE5 k=v \u65B9\u5F0F\u6307\u5B9A \u4EE5 \u5206\u53F7 \u5206\u5272</span>
<span class="token key attr-name">realdatasourceproperties</span><span class="token punctuation">=</span><span class="token value attr-value">port;3306,serverName;myhost,databaseName;jbossdb,foo;bar</span>
<span class="token comment"># jndi\u6570\u636E\u6E90\u914D\u7F6E</span>
<span class="token comment"># \u8BBE\u7F6E JNDI \u6570\u636E\u6E90\u7684 NamingContextFactory\u3002</span>
<span class="token key attr-name">jndicontextfactory</span><span class="token punctuation">=</span><span class="token value attr-value">org.jnp.interfaces.NamingContextFactory</span>
<span class="token comment"># \u8BBE\u7F6E JNDI \u6570\u636E\u6E90\u7684\u63D0\u4F9B\u8005\u7684 URL\u3002</span>
<span class="token key attr-name">jndicontextproviderurl</span><span class="token punctuation">=</span><span class="token value attr-value">localhost:1099</span>
<span class="token comment"># \u8BBE\u7F6E JNDI \u6570\u636E\u6E90\u7684\u4E00\u4E9B\u5B9A\u5236\u4FE1\u606F\uFF0C\u4EE5\u5206\u53F7\u5206\u9694\u3002</span>
<span class="token key attr-name">jndicontextcustom</span><span class="token punctuation">=</span><span class="token value attr-value">java.naming.factory.url.pkgs;org.jboss.naming:org.jnp.interfaces</span>
<span class="token comment"># \u662F\u5426\u5F00\u542F\u65E5\u5FD7\u8FC7\u6EE4 \u9ED8\u8BA4false\uFF0C \u8FD9\u9879\u914D\u7F6E\u662F\u5426\u751F\u6548\u524D\u63D0\u662F\u914D\u7F6E\u4E86 include/exclude/sqlexpression</span>
<span class="token key attr-name">filter</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># \u8FC7\u6EE4 Log \u65F6\u6240\u5305\u542B\u7684\u8868\u540D\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694 \u9ED8\u8BA4\u4E3A\u7A7A</span>
<span class="token key attr-name">include</span><span class="token punctuation">=</span>
<span class="token comment"># \u8FC7\u6EE4 Log \u65F6\u6240\u6392\u9664\u7684\u8868\u540D\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694 \u9ED8\u8BA4\u4E3A\u7A7A</span>
<span class="token key attr-name">exclude</span><span class="token punctuation">=</span>
<span class="token comment"># \u8FC7\u6EE4 Log \u65F6\u7684 SQL \u6B63\u5219\u8868\u8FBE\u5F0F\u540D\u79F0 \u9ED8\u8BA4\u4E3A\u7A7A</span>
<span class="token key attr-name">sqlexpression</span><span class="token punctuation">=</span>
<span class="token comment">#\u663E\u793A\u6307\u5B9A\u8FC7\u6EE4 Log \u65F6\u6392\u961F\u7684\u5206\u7C7B\u5217\u8868\uFF0C\u53D6\u503C: error, info, batch, debug, statement,</span>
<span class="token comment">#commit, rollback, result and resultset are valid values</span>
<span class="token comment"># (\u9ED8\u8BA4 info,debug,result,resultset,batch)</span>
<span class="token key attr-name">excludecategories</span><span class="token punctuation">=</span><span class="token value attr-value">info,debug,result,resultset,batch</span>
<span class="token comment"># \u662F\u5426\u8FC7\u6EE4\u4E8C\u8FDB\u5236\u5B57\u6BB5</span>
<span class="token comment"># (default is false)</span>
<span class="token key attr-name">excludebinary</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># P6Log \u6A21\u5757\u6267\u884C\u65F6\u95F4\u8BBE\u7F6E\uFF0C\u6574\u6570\u503C (\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D)\uFF0C\u53EA\u6709\u5F53\u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\u624D\u8FDB\u884C\u8BB0\u5F55 Log\u3002\u9ED8\u8BA4\u4E3A0</span>
<span class="token key attr-name">executionThreshold</span><span class="token punctuation">=</span>
<span class="token comment"># P6Outage \u6A21\u5757\u662F\u5426\u8BB0\u5F55\u8F83\u957F\u65F6\u95F4\u8FD0\u884C\u7684\u8BED\u53E5 \u9ED8\u8BA4false</span>
<span class="token key attr-name">outagedetection</span><span class="token punctuation">=</span><span class="token value attr-value">true|false</span>
<span class="token comment"># P6Outage \u6A21\u5757\u6267\u884C\u65F6\u95F4\u8BBE\u7F6E\uFF0C\u6574\u6570\u503C \uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D)\uFF09\uFF0C\u53EA\u6709\u5F53\u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\u624D\u8FDB\u884C\u8BB0\u5F55 Log\u3002\u9ED8\u8BA430s</span>
<span class="token key attr-name">outagedetectioninterval</span><span class="token punctuation">=</span><span class="token value attr-value">integer time (seconds)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> 4. \u76F8\u5173\u95EE\u9898</h2><h3 id="_4-1-\u914D\u7F6E\u4E86exclude-\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_4-1-\u914D\u7F6E\u4E86exclude-\u4E0D\u751F\u6548" aria-hidden="true">#</a> 4.1 \u914D\u7F6E\u4E86exclude \u4E0D\u751F\u6548</h3><p>\u5207\u8BB0\u8981\u5148\u5F00\u542F\u8FC7\u6EE4\uFF1Afilter=true</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u662F\u5426\u5F00\u542F\u65E5\u5FD7\u8FC7\u6EE4 \u9ED8\u8BA4false\uFF0C \u8FD9\u9879\u914D\u7F6E\u662F\u5426\u751F\u6548\u524D\u63D0\u662F\u914D\u7F6E\u4E86 include/exclude/sqlexpression</span>
<span class="token key attr-name">filter</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token comment"># \u8FC7\u6EE4 Log \u65F6\u6240\u6392\u9664\u7684\u8868\u540D\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694 \u9ED8\u8BA4\u4E3A\u7A7A</span>
<span class="token key attr-name">exclude</span><span class="token punctuation">=</span><span class="token value attr-value">QRTZ_*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u603B\u662F\u6253\u5370\u7A7A\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_4-2-\u603B\u662F\u6253\u5370\u7A7A\u65E5\u5FD7" aria-hidden="true">#</a> 4.2 \u603B\u662F\u6253\u5370\u7A7A\u65E5\u5FD7</h3><p>\u6211\u4EECdebug \u53EF\u4EE5\u770B\u5230\u6253\u5370\u7A7A\u65E5\u5FD7\u7684\u65F6\u5019\u3002\u4ED6\u7684category \u4E3Acommit,\u6240\u4EE5\u6211\u4EEC\u8981\u6392\u9664commit \u5373\u53EF</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment">## \u914D\u7F6E\u8BB0\u5F55Log\u4F8B\u5916</span>
<span class="token key attr-name">excludecategories</span><span class="token punctuation">=</span><span class="token value attr-value">info,debug,result,commit,resultset</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220622092110715.png" alt="image-20220622092110715"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,35),u={href:"https://segmentfault.com/a/1190000038714503",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/li521wang/article/details/104002897",target:"_blank",rel:"noopener noreferrer"};function m(v,k){const s=c("ExternalLinkIcon");return l(),p("div",null,[r,n("p",null,[n("a",u,[a("\u4F7F\u7528P6Spy\u76D1\u63A7\u4F60\u7684SQL\u8F93\u51FA"),e(s)])]),n("p",null,[n("a",d,[a("p6spy\u914D\u7F6E\u8BE6\u89E3"),e(s)])])])}const y=t(o,[["render",m],["__file","p6spy-monitor-sql.html.vue"]]);export{y as default};
