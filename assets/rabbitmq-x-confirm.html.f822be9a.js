import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,b as e,d as c,f as o,r as i}from"./app.c8d9b7d0.js";const u={},l=o(`<h1 id="rabbitmq\u8FDB\u9636-\u6D88\u606F\u786E\u8BA4\u673A\u5236-\u4E8B\u52A1-confirm" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u8FDB\u9636-\u6D88\u606F\u786E\u8BA4\u673A\u5236-\u4E8B\u52A1-confirm" aria-hidden="true">#</a> RabbitMQ\u8FDB\u9636 - \u6D88\u606F\u786E\u8BA4\u673A\u5236\uFF08\u4E8B\u52A1+Confirm\uFF09</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u751F\u4EA7\u8005\u5C06\u6D88\u606F\u53D1\u9001\u51FA\u53BB\u4E4B\u540E\uFF0C\u6D88\u606F\u5230\u5E95\u6709\u6CA1\u6709\u6B63\u786E\u5230\u8FBE\u670D\u52A1\u5668\uFF1F\u5982\u679C\u4E0D\u8FDB\u884C\u7279\u6B8A\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53D1\u9001\u6D88\u606F\u7684\u64CD\u4F5C\u662F\u4E0D\u4F1A\u8FD4\u56DE\u4EFB\u4F55\u4FE1\u606F\u7ED9\u751F\u4EA7\u8005\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u751F\u4EA7\u8005\u4E0D\u77E5\u9053\u6D88\u606F\u662F\u5426\u6B63\u786E\u5230\u8FBE\u670D\u52A1\u5668\u3002</p><p>RabbitMQ \u9488\u5BF9\u8FD9\u4E2A\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E86\u4E24\u79CD\u89E3\u51B3\u65B9\u5F0F\uFF1A</p><ul><li>\u4E8B\u7269\u673A\u5236</li><li>\u53D1\u9001\u65B9\u786E\u8BA4\uFF08publisher confirm\uFF09\u673A\u5236</li></ul><h2 id="_2-\u4E8B\u7269\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8B\u7269\u673A\u5236" aria-hidden="true">#</a> 2. \u4E8B\u7269\u673A\u5236</h2><p>RabbitMQ \u5BA2\u6237\u7AEF\u4E2D\u4E0E\u4E8B\u7269\u673A\u5236\u76F8\u5173\u7684\u65B9\u6CD5\u6709\u4E09\u4E2A\uFF1A</p><ul><li><code>channel.txSelect</code>\uFF1A\u5C06\u5F53\u524D\u7684\u4FE1\u9053\u8BBE\u7F6E\u4E3A <strong>\u4E8B\u7269\u6A21\u5F0F</strong></li><li><code>channel.txCommit</code>\uFF1A\u63D0\u4EA4\u4E8B\u7269</li><li><code>channel.txRollback</code>\uFF1A\u56DE\u6EDA\u4E8B\u7269</li></ul><p>\u5F00\u542F\u4E8B\u7269\uFF08\u8BBE\u7F6E\u4E3A\u4E8B\u7269\u6A21\u5F0F\uFF09\u540E\uFF0C\u53EF\u4EE5\u53D1\u9001\u6D88\u606F\uFF0C\u7136\u540E\u63D0\u4EA4\u4E8B\u7269\uFF0C\u5982\u679C\u5728\u63D0\u4EA4\u4E8B\u7269\u524D RabbitMQ \u5F02\u5E38\u5D29\u6E83\u6216\u5219\u5176\u4ED6\u539F\u56E0\u629B\u51FA\u5F02\u5E38\uFF0C\u53EF\u4EE5\u5C06\u5176\u6355\u83B7\uFF0C\u7136\u540E\u518D\u6267\u884C\u56DE\u6EDA\u4E8B\u7269\u3002</p><p>\u8FD9\u91CC\u4E8B\u7269\u4E0E\u6570\u636E\u5E93\u4E2D\u7684\u4E8B\u7269\u6982\u5FF5\u5E76\u4E0D\u540C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5F00\u542F\u4E8B\u7269</span>
channel<span class="token punctuation">.</span><span class="token function">txSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u53D1\u9001\u6D88\u606F</span>
channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u63D0\u4EA4\u4E8B\u7269</span>
channel<span class="token punctuation">.</span><span class="token function">txCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AMQP \u534F\u8BAE\u6D41\u8F6C\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210514144523551.png" alt="image-20210514144523551"></p><ol><li>\u5BA2\u6237\u7AEF\u53D1\u9001 Tx.Select \u5F00\u542F\u4E8B\u7269</li><li>Broker \u56DE\u590D Tx.Select-Ok\uFF0C\u786E\u8BA4\u4E8B\u7269\u5F00\u542F</li><li>\u53D1\u9001\u6D88\u606F\u540E\uFF0C\u5BA2\u6237\u7AEF Tx.Commit \u63D0\u4EA4\u4E8B\u7269</li><li>Broker \u56DE\u590D Tx.Commit-Ok \uFF0C\u786E\u8BA4\u4E8B\u7269\u63D0\u4EA4</li></ol><p>\u4E8B\u7269\u56DE\u6EDA\u7684\u4EE3\u7801\u5219\u5982\u4E0B\u6240\u793A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>

        channel<span class="token punctuation">.</span><span class="token function">txSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u6545\u610F\u5236\u9020\u5F02\u5E38</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">txCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">// \u56DE\u6EDA\u4E8B\u72691</span>
        channel<span class="token punctuation">.</span><span class="token function">txRollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EA4\u4E92\u6D41\u7A0B\u5982\u4E0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210514144758771.png" alt="image-20210514144758771"></p><p>\u5982\u679C\u8981\u53D1\u9001\u591A\u6761\u6D88\u606F\uFF0C\u5219\u5982\u4E0B\u505A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>channel<span class="token punctuation">.</span><span class="token function">txSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        channel<span class="token punctuation">.</span><span class="token function">txCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        channel<span class="token punctuation">.</span><span class="token function">txRollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8B\u7269\u673A\u5236\u89E3\u51B3\u4E86 <strong>\u6D88\u606F\u53D1\u9001\u65B9</strong> \u548C RabbitMQ \u4E4B\u95F4\u6D88\u606F\u786E\u8BA4\u7684\u95EE\u9898\uFF0C\u53EA\u6709\u6D88\u606F\u6210\u529F\u88AB RabbitMQ \u63A5\u6536\uFF0C\u4E8B\u7269\u624D\u80FD\u63D0\u4EA4\u6210\u529F\u3002\u4F46\u662F\u4E8B\u7269\u673A\u5236\u5BF9 RabbitMQ \u7684\u6027\u80FD\u5F71\u54CD\u5F88\u5927\u3002\u6240\u4EE5\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6539\u8FDB\u673A\u5236\uFF1A\u53D1\u9001\u65B9\u786E\u8BA4\u673A\u5236</p><h2 id="_3-confirm-\u53D1\u9001\u65B9\u786E\u8BA4\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_3-confirm-\u53D1\u9001\u65B9\u786E\u8BA4\u673A\u5236" aria-hidden="true">#</a> 3. Confirm \u53D1\u9001\u65B9\u786E\u8BA4\u673A\u5236</h2><p>\u5728 AMQP \u534F\u8BAE\u5C42\u9762\u63D0\u4F9B\u4E86\u4E8B\u7269\u673A\u5236\u89E3\u51B3\u6D88\u606F\u662F\u5426\u6709\u6B63\u786E\u5230\u8FBE RabbitMQ \u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F46\u662F\u4E8B\u7269\u673A\u5236\u4F1A\u4E25\u91CD\u964D\u4F4E RabbitMQ \u7684\u6D88\u606F\u541E\u5410\u91CF\u3002</p><p>\u53D1\u9001\u65B9\u786E\u8BA4\u673A\u5236\uFF08publisher confirm\uFF09\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u65B9\u5F0F\u3002</p><p><strong>\u751F\u4EA7\u8005\u5C06\u4FE1\u9053\u8BBE\u7F6E\u4E3A confirm\uFF08\u786E\u8BA4\uFF09\u6A21\u5F0F</strong>\uFF0C\u6240\u6709\u518D\u8BE5\u4FE1\u9053\u4E0A <strong>\u53D1\u5E03\u7684\u6D88\u606F</strong> \u90FD\u4F1A\u88AB <strong>\u6307\u6D3E\u4E00\u4E2A\u552F\u4E00\u7684 ID</strong>\uFF08\u4ECE 1 \u5F00\u59CB\uFF09\uFF0C\u5F53\u6D88\u606F\u88AB\u5339\u914D\u5230\u961F\u5217\u540E\uFF0CRabbitMQ \u4F1A <strong>\u53D1\u9001\u4E00\u4E2A\u786E\u8BA4\uFF08Basic.ack\uFF09\u7ED9\u751F\u4EA7\u8005</strong>\uFF08\u5305\u542B\u6D88\u606F\u7684\u552F\u4E00 ID\uFF09\uFF0C\u8FD9\u5C31\u4F7F\u5F97\u751F\u4EA7\u8005\u77E5\u9053\u6D88\u606F\u5DF2\u7ECF\u6B63\u786E\u5230\u8FBE\u4E86\u76EE\u7684\u5730\u4E86\u3002\u5982\u679C\u6D88\u606F\u548C\u961F\u5217\u662F <strong>\u53EF\u6301\u4E45\u5316</strong>\u7684\uFF0C\u90A3\u4E48\u786E\u8BA4\u6D88\u606F\u4F1A\u5728 <strong>\u6D88\u606F\u5199\u5165\u78C1\u76D8</strong>\u540E \u53D1\u51FA\u3002</p><p>RabbitMQ \u56DE\u4F20\u7ED9\u751F\u4EA7\u8005\u7684\u786E\u8BA4\u6D88\u606F\u4E2D\u7684 deliveryTag \u5305\u542B\u4E86\u786E\u8BA4\u6D88\u606F\u7684\u5E8F\u53F7\uFF0C\u6B64\u5916\u8FD8\u53EF\u4EE5\u8BBE\u7F6E <code>channel.basicAck \u65B9\u6CD5\u4E2D\u7684 multple \u53C2\u6570</code>\uFF0C\u8868\u793A\u5728\u8FD9\u4E2A\u5E8F\u53F7\u4E4B\u524D\u7684\u6240\u6709\u6D88\u606F\u90FD\u5DF2\u7ECF\u5F97\u5230\u4E86\u5904\u7406\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210514145114090.png" alt="image-20210514145114090"></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF1A\u751F\u4EA7\u8005\u53D1\u9001\u4E86 3 \u6761\u6D88\u606F\uFF0C\u5F00\u542F\u4E86 mutilple\uFF0C\u90A3\u4E48 RabbitMQ \u56DE\u8C03\u786E\u8BA4\u65F6\uFF0CdeliveryTag = 3\uFF0C\u8868\u793A\u524D\u9762\u7684 2 \u6761\u6D88\u606F\uFF0C\u5305\u542B\u81EA\u5DF1\u90FD\u5DF2\u7ECF\u6B63\u786E\u5230\u8FBE RabbitMQ \u4E86\u3002</p><ul><li><p>\u4E8B\u7269\u673A\u5236\uFF1A\u53D1\u9001\u65B9\u662F\u540C\u6B65\u7684</p><p>\u53D1\u9001\u4E00\u6761\u6D88\u606F\u540E\uFF0C\u53D1\u9001\u7AEF\u963B\u585E\uFF0C\u7B49\u5F85 RabbitMQ \u56DE\u5E94\u540E\uFF0C\u624D\u80FD\u7EE7\u7EED\u4E0B\u4E00\u6761\u6D88\u606F\u7684\u53D1\u9001</p></li><li><p>\u53D1\u9001\u65B9\u786E\u8BA4\u673A\u5236\uFF1A\u53EF\u4EE5\u662F\u5F02\u6B65\u7684</p></li></ul><p>\u53D1\u9001\u65B9\u786E\u8BA4\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u540C\u6B65\u65B9\u5F0F\uFF1A\u53D1\u9001\u6D88\u606F\u540E\uFF0C\u8C03\u7528 channel.waitForConfirms \u65B9\u6CD5\uFF0C\u7B49\u5F85\u670D\u52A1\u5668\u7684\u786E\u8BA4\u8FD4\u56DE</li><li>\u5F02\u6B65\u65B9\u5F0F\uFF1A\u63D0\u4F9B\u4E00\u4E2A\u56DE\u8C03\u65B9\u6CD5\uFF0C\u670D\u52A1\u7AEF\u786E\u8BA4\u4E86\u4E00\u6761\u6216\u591A\u6761\u6D88\u606F\u540E\u5BA2\u6237\u7AEF\u4F1A\u6536\u5230\u56DE\u8C03\u4E8B\u4EF6</li></ul><h3 id="_3-1-\u540C\u6B65\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-\u540C\u6B65\u65B9\u5F0F" aria-hidden="true">#</a> 3.1 \u540C\u6B65\u65B9\u5F0F</h3><p>\u4E0E\u4E8B\u7269\u673A\u5236\u4F7F\u7528\u7C7B\u4F3C\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u53D1\u5E03\u591A\u6761\u6D88\u606F\uFF0C\u518D\u7B49\u5F85\u786E\u8BA4</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5C06\u4FE1\u9053\u8BBE\u7F6E\u4E3A\u751F\u4EA7\u8005\u786E\u8BA4\u6A21\u5F0F</span>
channel<span class="token punctuation">.</span><span class="token function">confirmSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D1\u5E03\u6D88\u606F</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>channel<span class="token punctuation">.</span><span class="token function">waitForConfirms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53D1\u9001\u7684 5 \u6761\u6D88\u606F\u6210\u529F</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53D1\u9001\u5931\u8D25\uFF0C\u8FD9\u4E00\u6279\u6D88\u606F\u90FD\u9700\u8981\u91CD\u53D1\uFF1F</span>
            <span class="token comment">// \u4E0D\u6E05\u695A\u4ED6\u7684\u673A\u5236\uFF0C\u5168\u90E8\u5931\u8D25\uFF1F</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u53D1\u9001\u5931\u8D25\uFF0C\u8FD9\u4E00\u6279\u6D88\u606F\u90FD\u9700\u8981\u91CD\u53D1\uFF1F</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u5982\u4E0A\u7684\u4EE3\u7801\uFF0C\u6279\u91CF\u53D1\u9001\u540E\u518D\u7B49\u5F85\u5E76\u786E\u8BA4\u53D1\u9001\u6210\u529F\u3002\u4F46\u662F\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5F53\u5931\u8D25\u65F6\uFF08Basic.Nack \u6216 \u8D85\u65F6\uFF09\u65F6\uFF0C\u5C31\u9700\u8981\u5C06\u8FD9\u4E00\u6279\u6D88\u606F\u91CD\u65B0\u53D1\u9001\uFF1B\u8FD9\u79CD\u60C5\u51B5\u8FC7\u591A\u7684\u65F6\u5019\uFF0C\u6027\u80FD\u4E0D\u5347\u8FD4\u964D</p><h3 id="_3-2-\u5F02\u6B65\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5F02\u6B65\u65B9\u5F0F" aria-hidden="true">#</a> 3.2 \u5F02\u6B65\u65B9\u5F0F</h3><p>\u901A\u8FC7\u6DFB\u52A0 ConfirmListener \u7684\u65B9\u5F0F\uFF0C\u6765\u77E5\u6653\u662F\u5426\u6210\u529F\u8FD8\u662F\u5931\u8D25</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06\u4FE1\u9053\u8BBE\u7F6E\u4E3A\u751F\u4EA7\u8005\u786E\u8BA4\u6A21\u5F0F</span>
channel<span class="token punctuation">.</span><span class="token function">confirmSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">addConfirmListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConfirmListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
             * \u5904\u7406 RabbitMQ \u7684 Basic.Ack \u6307\u4EE4
             * <span class="token keyword">@param</span> <span class="token parameter">deliveryTag</span> \u90A3\u4E00\u6761\u6D88\u606F
             * <span class="token keyword">@param</span> <span class="token parameter">multiple</span>
             * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
             */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleAck</span><span class="token punctuation">(</span><span class="token keyword">long</span> deliveryTag<span class="token punctuation">,</span> <span class="token keyword">boolean</span> multiple<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D1\u9001\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
             * \u5904\u7406 RabbitMQ \u7684 Basic.Nack \u6307\u4EE4
             * <span class="token keyword">@param</span> <span class="token parameter">deliveryTag</span>
             * <span class="token keyword">@param</span> <span class="token parameter">multiple</span>
             * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
             */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleNack</span><span class="token punctuation">(</span><span class="token keyword">long</span> deliveryTag<span class="token punctuation">,</span> <span class="token keyword">boolean</span> multiple<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D1\u9001\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u53EF\u8FDB\u884C\u6D88\u606F\u7684\u91CD\u53D1\u5904\u7406</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D1\u5E03\u6D88\u606F</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> reqestQueue<span class="token punctuation">,</span> properties<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6027\u80FD\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_4-\u6027\u80FD\u5BF9\u6BD4" aria-hidden="true">#</a> 4. \u6027\u80FD\u5BF9\u6BD4</h2><p>\u5728\u6027\u80FD\u65B9\u9762\uFF0CQPS \u5BF9\u6BD4\u5982\u4E0B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210514145538216.png" alt="image-20210514145538216"></p><p>\u666E\u901A confirm \u5C31\u662F\u53D1\u9001\u4E00\u6761\u5C31 waitForConfirms \u4E00\u6B21\u3002\u53EF\u89C1\u5F02\u6B65\u65B9\u5F0F\u6548\u7387\u662F\u6700\u9AD8\u7684</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,43),k={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/08.html#%E4%BA%8B%E7%89%A9%E6%9C%BA%E5%88%B6",target:"_blank",rel:"noopener noreferrer"};function r(d,m){const s=i("ExternalLinkIcon");return t(),p("div",null,[l,n("p",null,[n("a",k,[e("\u751F\u4EA7\u8005\u786E\u8BA4"),c(s)])])])}const g=a(u,[["render",r],["__file","rabbitmq-x-confirm.html.vue"]]);export{g as default};
