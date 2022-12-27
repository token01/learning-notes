import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.70325d6b.js";const t={},p=e(`<h1 id="spring-boot\u96C6\u6210redis\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#spring-boot\u96C6\u6210redis\u4F7F\u7528" aria-hidden="true">#</a> Spring Boot\u96C6\u6210redis\u4F7F\u7528</h1><h2 id="_1-\u57FA\u672C\u96C6\u6210\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u96C6\u6210\u4F7F\u7528" aria-hidden="true">#</a> 1. \u57FA\u672C\u96C6\u6210\u4F7F\u7528</h2><h3 id="_1-1-\u5F15\u5165\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5F15\u5165\u4F9D\u8D56" aria-hidden="true">#</a> 1.1 \u5F15\u5165\u4F9D\u8D56</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
   <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
   <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>data<span class="token operator">-</span>redis<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-2-\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> 1.2 \u914D\u7F6E\u53C2\u6570</h3><p>\u5728<code>application.yml</code>\u4E2D\u52A0\u5165redis\u670D\u52A1\u7AEF\u7684\u76F8\u5173\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring:
  redis:
    host: 120.79.200.111
    port: 6379
    password:
    timeout: 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-\u8BBF\u95EE\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_1-3-\u8BBF\u95EE\u6D4B\u8BD5" aria-hidden="true">#</a> 1.3 \u8BBF\u95EE\u6D4B\u8BD5</h3><p>\u7F16\u5199\u6D4B\u8BD5\u7528\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@RunWith(SpringRunner.class)
@SpringBootTest
public class RedisdemoApplicationTests {

   @Test
   public void contextLoads() {
   }

   @Autowired
   private StringRedisTemplate stringRedisTemplate;

   @Test
   public void test() throws Exception {
      // \u4FDD\u5B58\u5B57\u7B26\u4E32
      stringRedisTemplate.opsForValue().set(&quot;aaa&quot;, &quot;111&quot;);
      Assert.assertEquals(&quot;111&quot;, stringRedisTemplate.opsForValue().get(&quot;aaa&quot;));
   }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E0A\u9762\u8FD9\u6BB5\u6781\u4E3A\u7B80\u5355\u7684\u6D4B\u8BD5\u6848\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u901A\u8FC7\u81EA\u52A8\u914D\u7F6E\u7684<code>StringRedisTemplate</code>\u5BF9\u8C61\u8FDB\u884CRedis\u7684\u8BFB\u5199\u64CD\u4F5C\uFF0C\u8BE5\u5BF9\u8C61\u4ECE\u547D\u540D\u4E2D\u5C31\u53EF\u6CE8\u610F\u5230\u652F\u6301\u7684\u662FString\u7C7B\u578B\u3002\u5982\u679C\u6709\u4F7F\u7528\u8FC7spring-data-redis\u7684\u5F00\u53D1\u8005\u4E00\u5B9A\u719F\u6089<code>RedisTemplate&lt;K, V&gt;</code>\u63A5\u53E3\uFF0C<code>StringRedisTemplate</code>\u5C31\u76F8\u5F53\u4E8E<code>RedisTemplate&lt;String, String&gt;</code>\u7684\u5B9E\u73B0\u3002</p><h2 id="_2-\u4F7F\u7528jedis\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528jedis\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> 2. \u4F7F\u7528jedis\u5BA2\u6237\u7AEF</h2><p>\u5728<code>spring-boot-starter-data-redis</code> \u4E2D\u9ED8\u8BA4\u4F7F\u7528<code>lettuce</code>\u5BA2\u6237\u7AEF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6539\u6210\u4F7F\u7528jedis\u5BA2\u6237\u7AEF</p><h3 id="_2-1-\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> 2.1 \u6DFB\u52A0\u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
   &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
   &lt;!-- \u6392\u9664lettuce\u5305\uFF0C\u4F7F\u7528jedis\u4EE3\u66FF--&gt;
   &lt;exclusions&gt;
      &lt;exclusion&gt;
         &lt;groupId&gt;io.lettuce&lt;/groupId&gt;
         &lt;artifactId&gt;lettuce-core&lt;/artifactId&gt;
      &lt;/exclusion&gt;
   &lt;/exclusions&gt;
&lt;/dependency&gt;

&lt;!-- fastjson --&gt;
&lt;dependency&gt;
   &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
   &lt;artifactId&gt;fastjson&lt;/artifactId&gt;
   &lt;version&gt;1.2.31&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
	&lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
	&lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;
	&lt;optional&gt;true&lt;/optional&gt;
&lt;/dependency&gt;


&lt;dependency&gt;
   &lt;groupId&gt;redis.clients&lt;/groupId&gt;
   &lt;artifactId&gt;jedis&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-application-yml\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-application-yml\u914D\u7F6E" aria-hidden="true">#</a> 2.2 application.yml\u914D\u7F6E</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">host</span><span class="token punctuation">:</span> 120.79.200.111
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span>
    <span class="token key atrule">jedis</span><span class="token punctuation">:</span>
      <span class="token key atrule">pool</span><span class="token punctuation">:</span>
        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">8</span>
        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">500</span>
        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">2000</span>
        <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token number">10000</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-redis\u914D\u7F6E\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-3-redis\u914D\u7F6E\u5B9E\u4F8B" aria-hidden="true">#</a> 2.3 Redis\u914D\u7F6E\u5B9E\u4F8B</h3><p>\u4F7F\u7528Jackson2JsonRedisSerialize \u66FF\u6362\u9ED8\u8BA4\u5E8F\u5217\u5316\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u76F4\u63A5\u5B58\u50A8\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zszdevelop<span class="token punctuation">.</span>redisdemo02</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonAutoDetect</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertyAccessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>condition<span class="token punctuation">.</span></span><span class="token class-name">ConditionalOnMissingBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisPassword</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisStandaloneConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>jedis<span class="token punctuation">.</span></span><span class="token class-name">JedisClientConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>jedis<span class="token punctuation">.</span></span><span class="token class-name">JedisConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">redis<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>jedis<span class="token punctuation">.</span></span><span class="token class-name">JedisPool</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">redis<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>jedis<span class="token punctuation">.</span></span><span class="token class-name">JedisPoolConfig</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">Duration</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> zhangshengzhong
 * <span class="token keyword">@date</span> 2019/10/5
 */</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.redis.host}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> host<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.redis.port}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> port<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.redis.password}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.redis.timeout}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> timeout<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.redis.jedis.pool.max-idle}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxIdle<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.redis.jedis.pool.max-wait}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> maxWaitMillis<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JedisPool</span> <span class="token function">redisPoolFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JedisPoolConfig</span> jedisPoolConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPoolConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMaxIdle</span><span class="token punctuation">(</span>maxIdle<span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMaxWaitMillis</span><span class="token punctuation">(</span>maxWaitMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JedisPool</span><span class="token punctuation">(</span>jedisPoolConfig<span class="token punctuation">,</span> host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JedisPool</span><span class="token punctuation">(</span>jedisPoolConfig<span class="token punctuation">,</span> host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">JedisConnectionFactory</span> <span class="token function">jedisConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisStandaloneConfiguration</span> redisStandaloneConfiguration <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisStandaloneConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisStandaloneConfiguration<span class="token punctuation">.</span><span class="token function">setHostName</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisStandaloneConfiguration<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisStandaloneConfiguration<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">RedisPassword</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">JedisClientConfiguration<span class="token punctuation">.</span>JedisClientConfigurationBuilder</span> jedisClientConfiguration <span class="token operator">=</span> <span class="token class-name">JedisClientConfiguration</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedisClientConfiguration<span class="token punctuation">.</span><span class="token function">connectTimeout</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMillis</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedisClientConfiguration<span class="token punctuation">.</span><span class="token function">usePooling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JedisConnectionFactory</span><span class="token punctuation">(</span>redisStandaloneConfiguration<span class="token punctuation">,</span> jedisClientConfiguration<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;redisTemplate&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u4F7F\u7528Jackson2JsonRedisSerialize \u66FF\u6362\u9ED8\u8BA4\u5E8F\u5217\u5316</span>
        <span class="token class-name">Jackson2JsonRedisSerializer</span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ObjectMapper</span> objectMapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objectMapper<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>objectMapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u8BBE\u7F6Evalue\u7684\u5E8F\u5217\u5316\u89C4\u5219\u548C key\u7684\u5E8F\u5217\u5316\u89C4\u5219</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u5B9A\u4E49\u6D4B\u8BD5\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5B9A\u4E49\u6D4B\u8BD5\u7C7B" aria-hidden="true">#</a> 2.4 \u5B9A\u4E49\u6D4B\u8BD5\u7C7B</h3><p>\u9700\u8981\u5B9E\u73B0Serializable \u548C \u5B9E\u73B0\u9ED8\u8BA4\u6784\u9020\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class User implements Serializable{
    private static final long serialVersionUID = -1L;

    private String username;
    private Integer age;

    public User() {
    }

    public User(String username, Integer age) {
        this.username = username;
        this.age = age;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-5-\u6D4B\u8BD5" aria-hidden="true">#</a> 2.5 \u6D4B\u8BD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@RunWith(SpringRunner.class)
@SpringBootTest
public class Redisdemo02ApplicationTests {

   @Test
   public void contextLoads() {
   }

   @Autowired
   private RedisTemplate&lt;Object, Object&gt; template;

   @Test
   public void tests() {
      User user = new User(&quot;\u8C61\u62D4\u868Cceside&quot;,1);
      template.opsForValue().set(user.getUsername(),user);
      //\u539F\u672CopsForValue()\u662F\u53EA\u80FD\u64CD\u4F5C\u5B57\u7B26\u4E32\u7684.\u73B0\u5728\u5C31\u53EF\u4EE5\u64CD\u4F5C\u5BF9\u8C61\u4E86
      User result = (User) template.opsForValue().get(user.getUsername());
      System.out.println(result.toString());
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[p];function o(c,l){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","redis-y-action-springboot.html.vue"]]);export{r as default};
