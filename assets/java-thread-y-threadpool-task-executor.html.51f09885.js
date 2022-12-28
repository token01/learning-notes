import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.9ff179fe.js";const t={},o=e(`<h1 id="threadpooltaskexecutor\u548Cthreadpoolexecutor\u6709\u4F55\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#threadpooltaskexecutor\u548Cthreadpoolexecutor\u6709\u4F55\u533A\u522B" aria-hidden="true">#</a> ThreadPoolTaskExecutor\u548CThreadPoolExecutor\u6709\u4F55\u533A\u522B?</h1><h2 id="_1-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-\u533A\u522B" aria-hidden="true">#</a> 1. \u533A\u522B</h2><ol><li>\u6240\u5C5E\u5305\u4E0D\u540C\uFF1A <ul><li>ThreadPoolTaskExecutor \u5728 spring core\u5305\u4E2D</li><li>ThreadPoolExecutor \u662FJDK\u4E2D\u7684JUC</li></ul></li><li><strong>ThreadPoolTaskExecutor \u662F\u5BF9ThreadPoolExecutor\u8FDB\u884C\u4E86\u5C01\u88C5\u5904\u7406</strong></li><li>\u76F8\u6BD4 ThreadPoolExecutor\uFF0CThreadPoolTaskExecutor \u589E\u52A0\u4E86 submitListenable \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE ListenableFuture \u63A5\u53E3\u5BF9\u8C61\u3002 <ul><li>ListenableFuture \u63A5\u53E3\u5BF9\u8C61\uFF0C\u589E\u52A0\u4E86\u7EBF\u7A0B\u6267\u884C\u5B8C\u6BD5\u540E\u6210\u529F\u548C\u5931\u8D25\u7684\u56DE\u8C03\u65B9\u6CD5\u3002\u4ECE\u800C\u907F\u514D\u4E86 Future \u9700\u8981\u4EE5\u963B\u585E\u7684\u65B9\u5F0F\u8C03\u7528 get\uFF0C\u7136\u540E\u518D\u6267\u884C\u6210\u529F\u548C\u5931\u8D25\u7684\u65B9\u6CD5\u3002</li></ul></li></ol><h2 id="_2-threadpooltaskexecutor-\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_2-threadpooltaskexecutor-\u6E90\u7801" aria-hidden="true">#</a> 2. ThreadPoolTaskExecutor \u6E90\u7801</h2><ol><li>\u6210\u5458\u53D8\u91CF\u4E0E\u6784\u9020\u51FD\u6570</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolTaskExecutor</span> <span class="token keyword">extends</span> <span class="token class-name">ExecutorConfigurationSupport</span> <span class="token keyword">implements</span> <span class="token class-name">AsyncListenableTaskExecutor</span><span class="token punctuation">,</span> <span class="token class-name">SchedulingTaskExecutor</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> poolSizeMonitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> corePoolSize <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxPoolSize <span class="token operator">=</span> <span class="token number">2147483647</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> keepAliveSeconds <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> queueCapacity <span class="token operator">=</span> <span class="token number">2147483647</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> allowCoreThreadTimeOut <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token keyword">private</span> <span class="token class-name">TaskDecorator</span> taskDecorator<span class="token punctuation">;</span> 
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token keyword">private</span> <span class="token class-name">ThreadPoolExecutor</span> threadPoolExecutor<span class="token punctuation">;</span><span class="token comment">//\u8FD9\u91CC\u5C31\u7528\u5230\u4E86ThreadPoolExecutor</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> decoratedTaskMap<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>decoratedTaskMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentReferenceHashMap</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token class-name">ReferenceType</span><span class="token punctuation">.</span><span class="token constant">WEAK</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>\u8BBE\u7F6E\u5B8C\u914D\u7F6E\u9700\u8981\u8C03\u7528initialize\u65B9\u6CD5\u521D\u59CB\u5316\u3002\u6700\u7EC8\u5B9E\u4F8B\u5316\u4E86ThreadPoolExecutor</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">protected</span> <span class="token class-name">ExecutorService</span> <span class="token function">initializeExecutor</span><span class="token punctuation">(</span><span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span> <span class="token class-name">RejectedExecutionHandler</span> rejectedExecutionHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createQueue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queueCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadPoolExecutor</span> executor<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>taskDecorator <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>corePoolSize<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxPoolSize<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token keyword">this</span><span class="token punctuation">.</span>keepAliveSeconds<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span> queue<span class="token punctuation">,</span> threadFactory<span class="token punctuation">,</span> rejectedExecutionHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Runnable</span> decorated <span class="token operator">=</span> <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>taskDecorator<span class="token punctuation">.</span><span class="token function">decorate</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>decorated <span class="token operator">!=</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>decoratedTaskMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>decorated<span class="token punctuation">,</span> command<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>decorated<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>corePoolSize<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxPoolSize<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token keyword">this</span><span class="token punctuation">.</span>keepAliveSeconds<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">,</span> queue<span class="token punctuation">,</span> threadFactory<span class="token punctuation">,</span> rejectedExecutionHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>allowCoreThreadTimeOut<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            executor<span class="token punctuation">.</span><span class="token function">allowCoreThreadTimeOut</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>threadPoolExecutor <span class="token operator">=</span> executor<span class="token punctuation">;</span>
        <span class="token keyword">return</span> executor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_3-\u63A8\u8350" aria-hidden="true">#</a> 3. \u63A8\u8350</h2><p>\u63A8\u8350\u76F4\u63A5\u4F7F\u7528spring\u5C01\u88C5\u597D\u7684 ThreadPoolTaskExecutor \uFF0C\u66F4\u52A0\u7B80\u6D01\u65B9\u4FBF\u4E00\u4E9B</p></li></ol>`,7),p=[o];function c(l,u){return s(),a("div",null,p)}const k=n(t,[["render",c],["__file","java-thread-y-threadpool-task-executor.html.vue"]]);export{k as default};
