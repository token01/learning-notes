import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,b as e,d as o,f as c,r as l}from"./app.7751c0ab.js";const i={},u=c(`<h1 id="rabbitmq\u6D88\u8D39\u7AEF\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u6D88\u8D39\u7AEF\u9650\u6D41" aria-hidden="true">#</a> RabbitMQ\u6D88\u8D39\u7AEF\u9650\u6D41</h1><h2 id="_1-\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u6D88\u8D39\u8005\u7AEF\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u6D88\u8D39\u8005\u7AEF\u9650\u6D41" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u6D88\u8D39\u8005\u7AEF\u9650\u6D41</h2><p>\u5047\u8BBE\u6709\u4E2A\u573A\u666F\uFF0CRabbitMQ\u670D\u52A1\u5668\u4E0A\u5806\u79EF\u4E0A\u4E07\u6761\u672A\u5904\u7406\u7684\u6D88\u606F\uFF0C\u6211\u4EEC\u968F\u4FBF\u6253\u5F00\u4E00\u4E2A\u6D88\u8D39\u8005\u5BA2\u6237\u7AEF\u4F1A\u51FA\u73B0\u4E0B\u9762\u60C5\u51B5\uFF1A\u5DE8\u91CF\u7684\u6D88\u606F\u540C\u65F6\u63A8\u9001\u8FC7\u6765\uFF0C\u4F46\u662F\u6211\u4EEC\u5355\u4E2A\u6D88\u8D39\u8005\u5BA2\u6237\u7AEF\u65E0\u6CD5\u540C\u65F6\u5904\u7406\u8FD9\u4E48\u591A\u6570\u636E\uFF0C\u670D\u52A1\u5668\u53EF\u80FD\u5361\u6B7B</p><h2 id="_2-\u4EC0\u4E48\u662F\u6D88\u8D39\u7AEF\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662F\u6D88\u8D39\u7AEF\u9650\u6D41" aria-hidden="true">#</a> 2. \u4EC0\u4E48\u662F\u6D88\u8D39\u7AEF\u9650\u6D41</h2><p>RabbitMQ\u63D0\u4F9B\u4E86\u4E00\u79CDqos(\u670D\u52A1\u8D28\u91CF\u4FDD\u8BC1)\u529F\u80FD\uFF0C\u5373\u5728\u975E\u81EA\u52A8\u786E\u8BA4\u6D88\u606F\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E00\u5B9A\u6570\u91CF\u7684\u6D88\u606F(\u901A\u8FC7\u57FA\u4E8Econsumer\u6216\u8005channel\u8BBE\u7F6Eqos\u503C)\u672A\u88AB\u786E\u8BA4\u524D\uFF0C\u4E0D\u6D88\u8D39\u65B0\u7684\u6D88\u606F</p><h2 id="_3-\u6D88\u8D39\u7AEF\u9650\u6D41\u7684\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_3-\u6D88\u8D39\u7AEF\u9650\u6D41\u7684\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> 3. \u6D88\u8D39\u7AEF\u9650\u6D41\u7684\u5B9E\u73B0\u601D\u8DEF</h2><p>\u5728\u6D88\u8D39\u7AEF:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5355\u6761\u6D88\u606F\u7684\u5927\u5C0F\u9650\u5236\uFF0C\u4E00\u822C\u8BBE\u4E3A0\u6216\u4E0D\u8BBE\u7F6E\uFF0C\u4E0D\u9650\u5236\u5927\u5C0F</span>
<span class="token keyword">int</span> prefecthSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">// \u544A\u8BC9RabbitMQ\u4E0D\u8981\u540C\u65F6\u7ED9\u6D88\u8D39\u7AEF\u63A8\u9001n\u6761\u6D88\u606F\uFF0C\u4E00\u65E6\u6709n\u4E2A\u6D88\u606F\u8FD8\u6CA1ack\uFF0C\u5219\u8BE5consumer\u5C06block\u6389\uFF0C\u76F4\u5230\u6709ack\uFF1B\u6CE8\u610F\u5728\u81EA\u52A8\u5E94\u7B54\u4E0B\u4E0D\u751F\u6548</span>
<span class="token keyword">int</span> prefecthCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u8868\u793A\u662F\u5426\u5E94\u7528\u4E8Echannel\u4E0A\uFF0C\u5373\u662Fchannel\u7EA7\u522B\u8FD8\u662Fconsumer\u7EA7\u522B</span>
<span class="token keyword">boolean</span> global <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span>prefecthSize<span class="token punctuation">,</span> prefecthCount<span class="token punctuation">,</span> global<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5177\u4F53\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-\u5177\u4F53\u5B9E\u73B0" aria-hidden="true">#</a> 4. \u5177\u4F53\u5B9E\u73B0</h2><p>producer</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyg<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>javaclient<span class="token punctuation">.</span>consumer_limit</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Channel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">ConnectionFactory</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u6D88\u8D39\u7AEF\u9650\u6D41
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">HOST</span> <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">5672</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">USERNAME</span> <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">PASSWORD</span> <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token constant">HOST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token constant">USERNAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token constant">PASSWORD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> exchangeName <span class="token operator">=</span> <span class="token string">&quot;test_qos_exchange&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> routingKey <span class="token operator">=</span> <span class="token string">&quot;qos.abc&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">// \u7533\u660Eexchange</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u53D1\u9001\u5341\u6761\u6D88\u606F</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;\u8FD9\u662F\u4E00\u6761 \u6D88\u8D39\u7AEF\u9650\u6D41\u6D88\u606F,&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
            channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>consumer</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyg<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>javaclient<span class="token punctuation">.</span>consumer_limit</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u6D88\u8D39\u7AEF\u9650\u6D41
 * 
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">HOST</span> <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PORT</span> <span class="token operator">=</span> <span class="token number">5672</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">USERNAME</span> <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">PASSWORD</span> <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token constant">HOST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token constant">USERNAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token constant">PASSWORD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">String</span> queueName <span class="token operator">=</span> <span class="token string">&quot;test_qos_queue&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> exchangeName <span class="token operator">=</span> <span class="token string">&quot;test_qos_exchange&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> routingKey <span class="token operator">=</span> <span class="token string">&quot;qos.#&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// \u7533\u660Eexchange</span>
        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u7533\u660E\u961F\u5217</span>
        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u961F\u5217\u7ED1\u5B9A\u5230exchange</span>
        channel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5355\u6761\u6D88\u606F\u7684\u5927\u5C0F\u9650\u5236\uFF0C\u4E00\u822C\u8BBE\u4E3A0\u6216\u4E0D\u8BBE\u7F6E\uFF0C\u4E0D\u9650\u5236\u5927\u5C0F</span>
        <span class="token keyword">int</span> prefecthSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// \u544A\u8BC9RabbitMQ\u4E0D\u8981\u540C\u65F6\u7ED9\u6D88\u8D39\u7AEF\u63A8\u9001n\u6761\u6D88\u606F\uFF0C\u4E00\u65E6\u6709n\u4E2A\u6D88\u606F\u8FD8\u6CA1ack\uFF0C\u5219\u8BE5consumer\u5C06block\u6389\uFF0C\u76F4\u5230\u6709ack\uFF1B\u6CE8\u610F\u5728\u81EA\u52A8\u5E94\u7B54\u4E0B\u4E0D\u751F\u6548</span>
        <span class="token keyword">int</span> prefecthCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8868\u793A\u662F\u5426\u5E94\u7528\u4E8Echannel\u4E0A\uFF0C\u5373\u662Fchannel\u7EA7\u522B\u8FD8\u662Fconsumer\u7EA7\u522B</span>
        <span class="token keyword">boolean</span> global <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span>prefecthSize<span class="token punctuation">,</span> prefecthCount<span class="token punctuation">,</span> global<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DeliverCallback</span> deliverCallback <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DeliverCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Delivery</span> message<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---\u6D88\u8D39\u8005---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                    <span class="token comment">// consumer\u624B\u52A8 ack \u7ED9broker</span>
                    channel<span class="token punctuation">.</span><span class="token function">basicAck</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getEnvelope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeliveryTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">CancelCallback</span> cancelCallback <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CancelCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;---\u6D88\u8D39\u8005\uFF1AcancelCallback&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// \u6D88\u8D39\u6D88\u606F,autoAck\u4E00\u5B9A\u8981\u8BBE\u7F6E\u4E3Afalse</span>
        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queueName<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> deliverCallback<span class="token punctuation">,</span> cancelCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_5-\u6D4B\u8BD5" aria-hidden="true">#</a> 5. \u6D4B\u8BD5</h2><ol><li><p>\u7B2C\u4E00\u6B21\u6211\u4EEC\u6CE8\u91CA\u6389 \u624B\u52A8 ack\u7ED9RabbitMQ\u5E94\u7B54</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210519164040329.png" alt="image-20210519164040329"></p><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><blockquote><p>\u53D1\u73B0\u4E00\u76F4\u5361\u5728\u7B2C\u4E00\u6761\u6D88\u606F\uFF0C\u56E0\u4E3A\u672A\u7ED9RabbitMQ\u624B\u52A8\u5E94\u7B54\uFF0C\u6240\u4EE5RabbitMQ\u8BA4\u4E3A\u6D88\u8D39\u7AEF\u8FD8\u672A\u6D88\u8D39\u5B8C\uFF0C\u4E0D\u63A8\u9001\u65B0\u7684\u6D88\u606F</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210519164133230.png" alt="image-20210519164133230"></p></li><li><p>\u7B2C\u4E8C\u6B21\u5F00\u542F\u624B\u52A8\u5E94\u7B54</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210519164152556.png" alt="image-20210519164152556"></p><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><blockquote><p>\u6240\u6709\u6D88\u606F\u4F9D\u6B21\u6D88\u8D39</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210519164211391.png" alt="image-20210519164211391"></p></li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,16),k={href:"https://juejin.cn/post/6844904002996404237",target:"_blank",rel:"noopener noreferrer"};function r(d,m){const s=l("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",k,[e("RabbitMQ\u9AD8\u7EA7\u7279\u6027-\u6D88\u8D39\u7AEF\u9650\u6D41"),o(s)])])])}const g=a(i,[["render",r],["__file","rabbitmq-i-limit.html.vue"]]);export{g as default};
