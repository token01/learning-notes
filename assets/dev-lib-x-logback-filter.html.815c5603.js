import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as l,f as c,r as o}from"./app.19c6482c.js";const i={},u=c(`<h1 id="logback\u65E5\u5FD7\u8FC7\u6EE4filter" tabindex="-1"><a class="header-anchor" href="#logback\u65E5\u5FD7\u8FC7\u6EE4filter" aria-hidden="true">#</a> logback\u65E5\u5FD7\u8FC7\u6EE4Filter</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5F53\u6211\u4EEC\u9700\u8981\u5BF9\u65E5\u5FD7\u7684\u6253\u5370\u8981\u505A\u4E00\u4E9B\u8303\u56F4\u7684\u63A7\u5236\u7684\u65F6\u5019\uFF0C\u901A\u5E38\u90FD\u662F\u901A\u8FC7\u4E3A\u5404\u4E2AAppender\u8BBE\u7F6E\u4E0D\u540C\u7684Filter\u914D\u7F6E\u6765\u5B9E\u73B0\u3002\u5728Logback\u4E2D\u81EA\u5E26\u4E86\u4E24\u4E2A\u8FC7\u6EE4\u5668\u5B9E\u73B0\uFF1A</p><ul><li><p><code>ch.qos.logback.classic.filter.LevelFilter</code></p><p>\u901A\u8FC7\u6BD4\u8F83\u65E5\u5FD7\u7EA7\u522B\u6765\u63A7\u5236\u65E5\u5FD7\u8F93\u51FA</p></li><li><p><code>ch.qos.logback.classic.filter.ThresholdFilter</code></p><p>\u5B9E\u73B0\u4E86\u53EA\u8BB0\u5F55\u7279\u5B9A\u7EA7\u522B\u4EE5\u4E0A\u7EA7\u522B\u7684\u63A7\u5236</p></li></ul><h2 id="_2-\u539F\u751F\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u539F\u751F\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 2. \u539F\u751F\u8FC7\u6EE4\u5668</h2><h3 id="_2-1-levelfilter" tabindex="-1"><a class="header-anchor" href="#_2-1-levelfilter" aria-hidden="true">#</a> 2.1 LevelFilter</h3><p><code>ch.qos.logback.classic.filter.LevelFilter</code>\u8FC7\u6EE4\u5668\u7684\u4F5C\u7528\u662F\u901A\u8FC7\u6BD4\u8F83\u65E5\u5FD7\u7EA7\u522B\u6765\u63A7\u5236\u65E5\u5FD7\u8F93\u51FA\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u53EA\u8BB0\u5F55\u65E5\u5FD7\u7EA7\u522B\u4E3AERROR\u7684\u4F8B\u5B50</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ERROR_APPENDER<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.RollingFileAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>logs/error.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>ds
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.filter.LevelFilter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span><span class="token punctuation">&gt;</span></span>ERROR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>level</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>onMatch</span><span class="token punctuation">&gt;</span></span>ACCEPT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>onMatch</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>onMismatch</span><span class="token punctuation">&gt;</span></span>DENY<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>onMismatch</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%-4relative [%thread] %-5level %logger{30} - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>LevelFilter</code>\u901A\u8FC7\u5B9A\u4E49\u65E5\u5FD7\u7EA7\u522B\uFF0C\u5E76\u8BBE\u7F6E\u5339\u914D\u4E0E\u4E0D\u5339\u914D\u7684\u5904\u7406\u7B56\u7565\u6765\u63A7\u5236\u9488\u5BF9\u67D0\u4E2A\u7EA7\u522B\u65E5\u5FD7\u7684\u8F93\u51FA\u7B56\u7565\u3002\u5F53\u6211\u4EEC\u8981\u8BBE\u7F6E\u591A\u4E2A\u4E0D\u540C\u7EA7\u522B\u7684\u65E5\u5FD7\u7B56\u7565\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4EC5\u4F9D\u9760\u8FD9\u4E2A\u8FC7\u6EE4\u5668\uFF0C\u6211\u4EEC\u5C31\u8981\u7EA7\u8054\u7684\u5B9A\u4E49\u591A\u4E2Afilter\u6765\u63A7\u5236\u624D\u80FD\u5B9E\u73B0\uFF0C\u4E0D\u662F\u5F88\u65B9\u4FBF\uFF0C\u6240\u4EE5\u6B64\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528<code>ch.qos.logback.classic.filter.ThresholdFilter</code>\u8FC7\u6EE4\u5668\u6765\u63A7\u5236\u4E86</p><h3 id="_2-2-thresholdfilter" tabindex="-1"><a class="header-anchor" href="#_2-2-thresholdfilter" aria-hidden="true">#</a> 2.2 ThresholdFilter</h3><p>\u5B9E\u73B0\u4E86\u53EA\u8BB0\u5F55WARN\u53CA\u4EE5\u4E0A\u7EA7\u522B\u7684\u63A7\u5236\uFF0C\u6BD4WARN\u7EA7\u522B\u4F4E\uFF08\u5982\uFF1AINFO\u3001DEBUG\u3001TRACE\uFF09\u90FD\u4E0D\u4F1A\u8BB0\u5F55\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WARN_APPENDER<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.RollingFileAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>logs/warn_error.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.filter.ThresholdFilter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span><span class="token punctuation">&gt;</span></span>WARN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>level</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%-4relative [%thread] %-5level %logger{30} - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 3. \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668</h2><p>\u6211\u4EEC\u6709\u4E9B\u9700\u6C42\u66F4\u52A0\u590D\u6742\u3002\u9700\u8981\u81EA\u5B9A\u4E49\u590D\u6742\u7684\u8FC7\u6EE4\u89C4\u5219\uFF0C\u6BD4\u5982\u60F3\u8FC7\u6EE4\u6389\u4E00\u4E9B\u6846\u67B6\u4E2D\u7684\u65E5\u5FD7\uFF0C\u901A\u8FC7\u81EA\u5E26\u7684\u51E0\u4E2A\u8FC7\u6EE4\u5668\u5DF2\u7ECF\u65E0\u6CD5\u5B8C\u5168\u63A7\u5236\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u5E0C\u671B\u4FEE\u6539\u6846\u67B6\u6E90\u7801\u6765\u5B9E\u73B0\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u81EA\u5DF1\u6765\u5B9E\u73B0\u8FC7\u6EE4\u5668\uFF0C\u5E76\u914D\u7F6E\u4F7F\u7528\u3002\u5B9E\u73B0\u7684\u65B9\u5F0F\u4E5F\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5B9E\u73B0Logback\u63D0\u4F9B\u7684<code>ch.qos.logback.core.filter.Filter</code>\u63A5\u53E3\u5373\u53EF\u3002</p><h3 id="_3-1-\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-1-\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u5B9E\u73B0" aria-hidden="true">#</a> 3.1 \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u5B9E\u73B0</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFilter</span> <span class="token keyword">extends</span> <span class="token class-name">Filter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ILoggingEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FilterReply</span> <span class="token function">decide</span><span class="token punctuation">(</span><span class="token class-name">ILoggingEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getLoggerName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&quot;org.springframework.cloud.sleuth.instrument.web.ExceptionLoggingFilter&quot;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> <span class="token class-name">FilterReply</span><span class="token punctuation">.</span><span class="token constant">DENY</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token class-name">FilterReply</span><span class="token punctuation">.</span><span class="token constant">ACCEPT</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">FilterReply</span><span class="token punctuation">.</span><span class="token constant">DENY</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8FC7\u6EE4\u5668\u7684\u529F\u80FD\u4E3B\u8981\u662F\u901A\u8FC7\u91CD\u5199<code>decide</code>\uFF0C\u9650\u5236\u4E86<code>org.springframework.cloud.sleuth.instrument.web.ExceptionLoggingFilter</code>\u7C7B\u8F93\u51FAERROR\u7EA7\u522B\u7684\u65E5\u5FD7\u8BB0\u5F55\u3002\u5728\u7F16\u5199\u597D\u81EA\u5DF1\u7684\u8FC7\u6EE4\u5668\u5B9E\u73B0\u4E4B\u540E\uFF0C\u53EA\u9700\u8981\u5728Appender\u4E2D\u914D\u7F6E\u4F7F\u7528\u5C31\u80FD\u5B9E\u73B0\u81EA\u5DF1\u9700\u8981\u7684\u7075\u6D3B\u8FC7\u6EE4\u89C4\u5219\u4E86</p><h3 id="_3-2-\u8FC7\u6EE4\u5668\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8FC7\u6EE4\u5668\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> 3.2 \u8FC7\u6EE4\u5668\u4E2D\u4F7F\u7528</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WARN_APPENDER<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.RollingFileAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>logs/warn_error.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.didispace.log.filter.ExceptionClassFilter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%-4relative [%thread] %-5level %logger{30} - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,20),r={href:"https://segmentfault.com/a/1190000017055021",target:"_blank",rel:"noopener noreferrer"};function k(d,g){const a=o("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("Logback\u4E2D\u5982\u4F55\u81EA\u5B9A\u4E49\u7075\u6D3B\u7684\u65E5\u5FD7\u8FC7\u6EE4\u89C4\u5219"),l(a)])])])}const h=s(i,[["render",k],["__file","dev-lib-x-logback-filter.html.vue"]]);export{h as default};
