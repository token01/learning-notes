import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as t}from"./app.002b82c0.js";const e={},p=t(`<h1 id="spring-ioc\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#spring-ioc\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> Spring IoC\u5E38\u89C1\u95EE\u9898</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1. \u6982\u8FF0</h2><p>Spring \u6846\u67B6\u7684\u6838\u5FC3\u662FSpring IoC \u5BB9\u5668\u3002\u5BB9\u5668\u521B\u5EFA Bean \u5BF9\u8C61\uFF0C\u5C06\u5B83\u4EEC\u88C5\u914D\u5728\u4E00\u8D77\uFF0C\u914D\u7F6E\u5B83\u4EEC\u5E76\u7BA1\u7406\u5B83\u4EEC\u7684\u5B8C\u6574\u751F\u547D\u5468\u671F</p><ul><li>Spring \u5BB9\u5668\u4F7F\u7528<strong>\u4F9D\u8D56\u6CE8\u5165</strong>\u6765\u7BA1\u7406\u7EC4\u6210\u5E94\u7528\u7A0B\u5E8F\u7684 Bean \u5BF9\u8C61\u3002</li><li>\u5BB9\u5668\u901A\u8FC7\u8BFB\u53D6\u63D0\u4F9B\u7684<strong>\u914D\u7F6E\u5143\u6570\u636E</strong> Bean Definition\u6765\u63A5\u6536\u5BF9\u8C61\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF0C\u914D\u7F6E\u548C\u7EC4\u88C5\u7684\u6307\u4EE4</li><li>\u8BE5\u914D\u7F6E\u5143\u6570\u636EBean Definition \u53EF\u4EE5<strong>\u901A\u8FC7XML\uFF0CJava \u6CE8\u89E3\u6216Java Config\u4EE3\u7801\u63D0\u4F9B</strong></li></ul><h2 id="_2-\u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> 2. \u4EC0\u4E48\u662F\u4F9D\u8D56\u6CE8\u5165\uFF1F</h2><p>\u5728\u4F9D\u8D56\u6CE8\u5165\u4E2D\uFF0C\u4F60\u4E0D\u5FC5\u4E3B\u52A8\uFF0C\u624B\u52A8\u521B\u5EFA\u5BF9\u8C61\uFF0C\u4F46\u5FC5\u987B\u63CF\u8FF0\u5982\u4F55\u521B\u5EFA\u5B83\u4EEC\u3002</p><ul><li>\u4F60\u4E0D\u662F\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u5C06\u7EC4\u4EF6\u548C\u670D\u52A1\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u800C\u662F\u63CF\u8FF0\u914D\u7F6E\u6587\u4EF6\u4E2D\u54EA\u4E9B\u7EC4\u4EF6\u9700\u8981\u54EA\u4E9B\u670D\u52A1</li><li>\u7136\u540E\uFF0C\u518D\u7531IoC\u5BB9\u5668\u5C06\u4ED6\u4EEC\u88C5\u914D\u5728\u4E00\u8D77</li></ul><p>\u4F9D\u8D56\u6CE8\u5165\u7684\u82F1\u6587\u7F29\u5199\u662F Dependency Injection \uFF0C\u7B80\u79F0 DI \u3002</p><h2 id="_3-ioc-\u548C-di-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-ioc-\u548C-di-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 3. IoC \u548C DI \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h2><p>IoC \u662F\u4E2A\u66F4\u5BBD\u6CDB\u7684\u6982\u5FF5\uFF0CDI \u662F\u66F4\u5177\u4F53\u7684\u3002</p><h2 id="_4-\u53EF\u4EE5\u901A\u8FC7\u591A\u5C11\u79CD\u65B9\u5F0F\u5B8C\u6210\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_4-\u53EF\u4EE5\u901A\u8FC7\u591A\u5C11\u79CD\u65B9\u5F0F\u5B8C\u6210\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> 4. \u53EF\u4EE5\u901A\u8FC7\u591A\u5C11\u79CD\u65B9\u5F0F\u5B8C\u6210\u4F9D\u8D56\u6CE8\u5165\uFF1F</h2><p>\u901A\u5E38\uFF0C\u4F9D\u8D56\u6CE8\u5165\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u5B8C\u6210</p><ul><li>\u63A5\u53E3\u6CE8\u5165</li><li>\u6784\u9020\u51FD\u6570\u6CE8\u5165</li><li>setter \u6CE8\u5165</li></ul><p>\u76EE\u524D\uFF0C\u5728Spring Framework\u4E2D\uFF0C\u4EC5\u4F7F\u7528<strong>\u6784\u9020\u51FD\u6570\u548Csetter \u6CE8\u5165</strong>\u8FD9\u4E24\u79CD\u65B9\u5F0F</p><h3 id="_4-1-\u6784\u9020\u51FD\u6570\u548Csetter-\u6CE8\u5165\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6784\u9020\u51FD\u6570\u548Csetter-\u6CE8\u5165\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 4.1 \u6784\u9020\u51FD\u6570\u548Csetter \u6CE8\u5165\u7684\u4F18\u7F3A\u70B9</h3><table><thead><tr><th>\u6784\u9020\u51FD\u6570\u6CE8\u5165</th><th>setter\u6CE8\u5165</th></tr></thead><tbody><tr><td>\u6CA1\u6709\u90E8\u5206\u6CE8\u5165</td><td>\u6709\u90E8\u5206\u6CE8\u5165</td></tr><tr><td>\u4E0D\u4F1A\u8986\u76D6setter \u5C5E\u6027</td><td>\u4F1A\u8986\u76D6setter\u5C5E\u6027</td></tr><tr><td>\u4EFB\u610F\u4FEE\u6539\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B9E\u4F8B</td><td>\u4EFB\u610F\u4FEE\u6539\u4E0D\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u5B9E\u4F8B</td></tr><tr><td>\u9002\u7528\u4E8E\u8BBE\u7F6E\u5F88\u591A\u5C5E\u6027</td><td>\u9002\u7528\u4E8E\u8BBE\u7F6E\u5C11\u91CF\u5C5E\u6027</td></tr></tbody></table><p>\u5B9E\u9645\u573A\u666F\u4E0B\uFF0Csetter \u6CE8\u5165\u4F7F\u7528\u7684\u66F4\u591A</p><h2 id="_5-spring-\u4E2D\u6709\u591A\u5C11\u79CDioc-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_5-spring-\u4E2D\u6709\u591A\u5C11\u79CDioc-\u5BB9\u5668" aria-hidden="true">#</a> 5. Spring \u4E2D\u6709\u591A\u5C11\u79CDIoC \u5BB9\u5668</h2><p>Spring \u63D0\u4F9B\u4E86\u4E24\u79CD\uFF08\u4E0D\u662F\u201D\u4E2A\u201C\uFF09IoC \u5BB9\u5668\uFF0C\u5206\u522B\u662FBeanFactory\u3001ApplicationContext</p><ul><li><p>BeanFactory</p><blockquote><p>BeanFactory \u5728Spring-beans \u9879\u76EE\u63D0\u4F9B</p></blockquote><p>BeanFactory\uFF0C\u5C31\u50CF\u4E00\u4E2A\u5305\u542BBean \u96C6\u5408\u7684\u5DE5\u5382\u7C7B\u3002\u4ED6\u4F1A\u5728\u5BA2\u6237\u7AEF\u8981\u6C42\u65F6\u5B9E\u4F8B\u5316 Bean \u5BF9\u8C61\u3002</p></li><li><p>ApplicationContext</p><blockquote><p>ApplicationContext \u5728 spring-context \u9879\u76EE\u63D0\u4F9B</p></blockquote><p>ApplicationContext\u63A5\u53E3\u6269\u5C55\u4E86BeanFactory\u63A5\u53E3\uFF0C\u4ED6\u5728BeanFactory\u57FA\u7840\u4E0A\u63D0\u4F9B\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u529F\u80FD\u3002\u5185\u7F6E\u5982\u4E0B\u529F\u80FD\uFF1A</p><ul><li>MesssageSource\uFF1A\u7BA1\u7406message\uFF0C\u5B9E\u73B0\u56FD\u9645\u5316\u7B49\u529F\u80FD</li><li>ApplicationEventPublisher\uFF1A\u4E8B\u4EF6\u53D1\u5E03\u3002</li><li>ResourcePatternResolver\uFF1A\u591A\u8D44\u6E90\u52A0\u8F7D</li><li>EnvironmentCapable\uFF1A\u7CFB\u7EDFEnvironment\uFF08profile+Properties\uFF09\u76F8\u5173</li><li>Lifecycle\uFF1A\u7BA1\u7406\u751F\u547D\u5468\u671F</li><li>Closable\uFF1A\u5173\u95ED\uFF0C\u91CA\u653E\u8D44\u6E90</li><li>initalizingBean\uFF1A\u81EA\u5B9A\u4E49\u521D\u59CB\u5316</li><li>BeanNameAware : \u8BBE\u7F6EbeanName\u7684Aware\u63A5\u53E3</li></ul><p>\u53E6\u5916\uFF0CApplicationContext \u4F1A\u81EA\u52A8\u521D\u59CB\u5316\u975E\u61D2\u52A0\u8F7D\u7684Bean \u5BF9\u8C61\u4EEC</p><h3 id="_5-1-beanfactory-\u4E0E-applicationcontext-\u7684\u4E24\u79CD\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#_5-1-beanfactory-\u4E0E-applicationcontext-\u7684\u4E24\u79CD\u5DEE\u5F02" aria-hidden="true">#</a> 5.1 BeanFactory \u4E0E ApplicationContext \u7684\u4E24\u79CD\u5DEE\u5F02</h3><table><thead><tr><th>BeanFactory</th><th>ApplicationContext</th></tr></thead><tbody><tr><td>\u4F7F\u7528\u61D2\u52A0\u8F7D</td><td>\u4F7F\u7528\u5373\u65F6\u52A0\u8F7D</td></tr><tr><td>\u5B83\u4F7F\u7528\u8BED\u6CD5\u663E\u5F0F\u63D0\u4F9B\u8D44\u6E90\u5BF9\u8C61</td><td>\u5B83\u81EA\u5DF1\u521B\u5EFA\u548C\u7BA1\u7406\u8D44\u6E90\u5BF9\u8C61</td></tr><tr><td>\u4E0D\u652F\u6301\u56FD\u9645\u5316</td><td>\u652F\u6301\u56FD\u9645\u5316</td></tr><tr><td>\u4E0D\u652F\u6301\u57FA\u4E8E\u4F9D\u8D56\u7684\u6CE8\u89E3</td><td>\u652F\u6301\u57FA\u4E8E\u4F9D\u8D56\u7684\u6CE8\u89E3</td></tr></tbody></table><p>\u53E6\u5916\u3001BeanFactory \u4E5F\u88AB\u79F0\u4E3A<strong>\u4F4E\u7EA7</strong>\u5BB9\u5668\uFF0C\u800CApplicationContext \u88AB\u79F0\u4E3A<strong>\u9AD8\u7EA7</strong>\u5BB9\u5668</p></li></ul><h2 id="_6-\u8BF7\u4ECB\u7ECD\u4E0B\u5E38\u7528\u7684beanfactory-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_6-\u8BF7\u4ECB\u7ECD\u4E0B\u5E38\u7528\u7684beanfactory-\u5BB9\u5668" aria-hidden="true">#</a> 6. \u8BF7\u4ECB\u7ECD\u4E0B\u5E38\u7528\u7684BeanFactory \u5BB9\u5668\uFF1F</h2><p>BeanFactory \u6700\u5E38\u7528\u7684\u662FXmlBeanFactory\uFF0C\u5B83\u53EF\u4EE5\u6839\u636EXML\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u5185\u5BB9\uFF0C\u521B\u5EFA\u76F8\u5E94\u7684Bean</p><h2 id="_7-\u8BF7\u4ECB\u7ECD\u4E0B\u5E38\u7528\u7684-applicationcontext-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_7-\u8BF7\u4ECB\u7ECD\u4E0B\u5E38\u7528\u7684-applicationcontext-\u5BB9\u5668" aria-hidden="true">#</a> 7.\u8BF7\u4ECB\u7ECD\u4E0B\u5E38\u7528\u7684 ApplicationContext \u5BB9\u5668\uFF1F</h2><p>\u4EE5\u4E0B\u662F\u4E09\u79CD\u8F83\u5E38\u89C1\u7684ApplicationContext \u5B9E\u73B0\u65B9\u5F0F</p><ul><li><p>ClassPathXmlApplicationContext\uFF1A\u4ECEClassPath\u7684XML \u914D\u7F6E\u6587\u4EF6\u4E2D\u8BFB\u53D6\u4E0A\u4E0B\u6587\uFF0C\u5E76\u751F\u6210\u4E0A\u4E0B\u6587\u5B9A\u4E49\u3002\u5E94\u7528\u7A0B\u5E8F\u4E0A\u4E0B\u6587\u4ECE\u7A0B\u5E8F\u73AF\u5883\u53D8\u91CF\u4E2D\u53D6\u5F97</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathXmlApplicationContext</span><span class="token punctuation">(</span>\u201Cbean<span class="token punctuation">.</span>xml\u201D<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>FileSystemXmlApplicationContext: \u7531\u6587\u4EF6\u7CFB\u7EDF\u7684XML\u914D\u7F6E\u6587\u4EF6\u8BFB\u53D6\u4E0A\u4E0B\u6587\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSytemXmlApplicationContext</span><span class="token punctuation">(</span><span class="token string">&quot;bean.xml&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>XmlWebApplicationContext: \u7531Web \u5E94\u7528\u7684XML\u6587\u4EF6\u8BFB\u53D6\u4E0A\u4E0B\u6587\u3002\u4F8B\u5982\u6211\u4EEC\u5728Spring MVC \u4F7F\u7528\u60C5\u51B5</p></li></ul><p><strong>ConfigServletWebServerApplicationContext</strong>\uFF08Spring Boot\uFF09\uFF1A</p><p>\u76EE\u524D\u6211\u4EEC\u66F4\u591A\u4F7F\u7528\u7684\u662FSpring Boot \u4E3A\u4E3B\uFF0C\u6240\u4EE5\u4F7F\u7528\u7684\u662F\u7B2C\u56DB\u79CDApplicationContext\u5BB9\u5668\u3002ConfigServletWebServerApplicationContext\u3002</p><h2 id="_8-\u5217\u4E3E\u4E00\u4E9B-ioc-\u7684\u4E00\u4E9B\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_8-\u5217\u4E3E\u4E00\u4E9B-ioc-\u7684\u4E00\u4E9B\u597D\u5904" aria-hidden="true">#</a> 8. \u5217\u4E3E\u4E00\u4E9B IoC \u7684\u4E00\u4E9B\u597D\u5904\uFF1F</h2><ul><li>\u5B83\u5C06\u6700\u5C0F\u5316\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u4EE3\u7801</li><li>\u5B83\u4EE5\u6700\u5C0F\u7684\u5F71\u54CD\u548C\u6700\u5C11\u7684\u4FB5\u5165\u673A\u5236\u4FC3\u8FDB\u677E\u8026\u5408</li><li>\u5B83\u652F\u6301\u5373\u65F6\u7684\u5B9E\u4F8B\u5316\u548C\u5EF6\u8FDF\u52A0\u8F7DBean\u5BF9\u8C61</li><li>\u5B83\u5C06\u4F7F\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u6613\u4E8E\u6D4B\u8BD5\uFF0C\u56E0\u4E3A\u4ED6\u4E0D\u9700\u8981\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u4E2D\u7684\u4EFB\u4F55\u5355\u4F8B\u6216JNDI\u67E5\u627E\u673A\u5236</li></ul><h2 id="_9-\u7B80\u8FF0spring-ioc-\u7684\u5B9E\u73B0\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_9-\u7B80\u8FF0spring-ioc-\u7684\u5B9E\u73B0\u673A\u5236" aria-hidden="true">#</a> 9. \u7B80\u8FF0Spring IoC \u7684\u5B9E\u73B0\u673A\u5236\uFF1F</h2><p>\u7B80\u5355\u6765\u8BF4\uFF0CSpring \u4E2D\u7684IoC\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u5C31\u662F<strong>\u5DE5\u5382\u6A21\u5F0F</strong>\u52A0<strong>\u53CD\u5C04\u673A\u5236</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>

     <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Apple</span> <span class="token keyword">implements</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Apple&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Orange</span> <span class="token keyword">implements</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Orange&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Fruit</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">String</span> className<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Fruit</span> f <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            f <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Fruit</span><span class="token punctuation">)</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>className<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> f<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Fruit</span> f <span class="token operator">=</span> <span class="token class-name">Factory</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;io.github.dunwu.spring.Apple&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>f <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            f<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fruit\u63A5\u53E3\uFF0C\u6709Apple \u548COrange\u4E24\u4E2A\u5B9E\u73B0\u7C7B</li><li>Factory\u5DE5\u5382\uFF0C\u901A\u8FC7\u53CD\u5C04\u673A\u5236\uFF0C\u521B\u5EFAclassName \u5BF9\u5E94\u7684Fruit \u5BF9\u8C61</li><li>Client \u901A\u8FC7Factory \u5DE5\u5382\uFF0C\u83B7\u5F97\u5BF9\u5E94\u7684Fruit \u5BF9\u8C61</li><li>\u5B9E\u9645\u60C5\u51B5\u4E0B\uFF0CSpring IoC \u6BD4\u8FD9\u4E2A\u590D\u6742\u5F88\u591A\u5F88\u591A\uFF0C\u4F8B\u5982\u5355\u4F8BBean \u5BF9\u8C61\uFF0CBean \u7684\u5C5E\u6027\u6CE8\u5165\uFF0C\u76F8\u4E92\u4F9D\u8D56\u7684Bean \u7684\u5904\u7406</li></ul><h2 id="_10-spring-\u6846\u67B6\u4E2D\u6709\u54EA\u4E9B\u4E0D\u540C\u7C7B\u578B\u7684\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_10-spring-\u6846\u67B6\u4E2D\u6709\u54EA\u4E9B\u4E0D\u540C\u7C7B\u578B\u7684\u4E8B\u4EF6" aria-hidden="true">#</a> 10. Spring \u6846\u67B6\u4E2D\u6709\u54EA\u4E9B\u4E0D\u540C\u7C7B\u578B\u7684\u4E8B\u4EF6\uFF1F</h2><p>Spring \u7684ApplicationContext \u63D0\u4F9B\u4E86\u652F\u6301\u4E8B\u4EF6\u548C\u4EE3\u7801\u4E2D\u76D1\u542C\u5668\u7684\u529F\u80FD\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA Bean \u7528\u6765\u76D1\u542C\u5728 ApplicationContext \u4E2D\u53D1\u5E03\u7684\u4E8B\u4EF6\u3002\u5982\u679C\u4E00\u4E2A Bean \u5B9E\u73B0\u4E86 ApplicationListener \u63A5\u53E3\uFF0C\u5F53\u4E00\u4E2AApplicationEvent \u88AB\u53D1\u5E03\u4EE5\u540E\uFF0CBean \u4F1A\u81EA\u52A8\u88AB\u901A\u77E5\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AllApplicationEventListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApplicationEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>  
    
    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">ApplicationEvent</span> applicationEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">// process event  </span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Spring \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u4E94\u79CD\u6807\u51C6\u7684\u4E8B\u4EF6</strong></p><ol><li>\u4E0A\u4E0B\u6587\u66F4\u65B0\u4E8B\u4EF6\uFF08ContextRefreshedEvent\uFF09\uFF1A\u8BE5\u4E8B\u4EF6\u4F1A\u5728ApplicationContext \u88AB\u521D\u59CB\u5316\u6216\u8005\u66F4\u65B0\u65F6\u53D1\u5E03\u3002\u4E5F\u53EF\u4EE5\u5728\u8C03\u7528ConfigurableApplicationContext \u63A5\u53E3\u4E2D\u7684<code>#refresh\uFF08\uFF09</code>\u65B9\u6CD5\u65F6\u88AB\u89E6\u53D1</li><li>\u4E0A\u4E0B\u6587\u5F00\u59CB\u4E8B\u4EF6\uFF08ContextStartedEvent\uFF09\uFF1A\u5F53\u5BB9\u5668\u8C03\u7528ConfigurableApplicationContext\u7684<code>#start\uFF08\uFF09</code>\u65B9\u6CD5\u5F00\u59CB/\u91CD\u65B0\u5F00\u59CB\u5BB9\u5668\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6\u3002</li><li>\u4E0A\u4E0B\u6587\u505C\u6B62\u4E8B\u4EF6\uFF08ContextStoppedEvent\uFF09\uFF1A\u5F53\u5BB9\u5668\u8C03\u7528ConfigurableApplicationContext \u7684<code>#stop()</code>\u65B9\u6CD5\u505C\u6B62\u5BB9\u5668\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6</li><li>\u4E0A\u4E0B\u6587\u5173\u95ED\u4E8B\u4EF6\uFF08ContextCloseEvent\uFF09\uFF1A\u5F53ApplicationContext \u88AB\u5173\u95ED\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6\u3002\u5BB9\u5668\u88AB\u5173\u95ED\u65F6\uFF0C\u5176\u7BA1\u7406\u7684\u6240\u6709\u5355\u4F8B Bean \u90FD\u88AB\u9500\u6BC1</li><li>\u8BF7\u6C42\u5904\u7406\u4E8B\u4EF6\uFF08RequestHandledEvent\uFF09\uFF1A\u5728Web\u5E94\u7528\u4E2D\uFF0C\u5F53\u4E00\u4E2AHttp \u8BF7\u6C42\uFF08request\uFF09\u7ED3\u675F\u89E6\u53D1\u8BE5\u4E8B\u4EF6</li></ol><h3 id="_10-1-\u81EA\u5B9A\u4E49\u6269\u5C55\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_10-1-\u81EA\u5B9A\u4E49\u6269\u5C55\u4E8B\u4EF6" aria-hidden="true">#</a> 10.1 \u81EA\u5B9A\u4E49\u6269\u5C55\u4E8B\u4EF6</h3><p>\u9664\u4E86\u4EE5\u4E0A\u4E8B\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u6269\u5C55 ApplicationEvent \u7C7B\u6765\u5F00\u53D1<strong>\u81EA\u5B9A\u4E49</strong>\u7684\u4E8B\u4EF6</p><ol><li><p>\u5B9E\u4F8B\u81EA\u5B9A\u4E49\u7684\u4E8B\u4EF6\u7684\u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomApplicationEvent</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationEvent</span><span class="token punctuation">{</span>  

    <span class="token keyword">public</span> <span class="token class-name">CustomApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> source<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>  

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E3A\u4E86\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u8FD8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u76D1\u542C\u5668</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomEventListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CustomApplicationEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">CustomApplicationEvent</span> applicationEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token comment">// handle event  </span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E4B\u540E\u901A\u8FC7ApplicationContext \u63A5\u53E3\u7684<code>#publishEvent(Object event)</code>\u65B9\u6CD5\uFF0C\u6765\u53D1\u5E03\u81EA\u5B9A\u4E49\u4E8B\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u521B\u5EFA CustomApplicationEvent \u4E8B\u4EF6
CustomApplicationEvent customEvent = new CustomApplicationEvent(applicationContext, &quot;Test message&quot;);
// \u53D1\u5E03\u4E8B\u4EF6
applicationContext.publishEvent(customEvent);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,42),i=[p];function o(l,c){return a(),s("div",null,i)}const d=n(e,[["render",o],["__file","spring-y-ioc-problem.html.vue"]]);export{d as default};
