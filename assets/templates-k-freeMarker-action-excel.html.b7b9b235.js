import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as p,a as n,b as a,d as e,f as l,r as c}from"./app.7751c0ab.js";const o={},d=l(`<h1 id="springboot\u96C6\u6210jsp" tabindex="-1"><a class="header-anchor" href="#springboot\u96C6\u6210jsp" aria-hidden="true">#</a> SpringBoot\u96C6\u6210JSP</h1><h2 id="_1-\u9879\u76EE\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_1-\u9879\u76EE\u96C6\u6210" aria-hidden="true">#</a> 1. \u9879\u76EE\u96C6\u6210</h2><ol><li><p>\u6DFB\u52A0\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>   <span class="token comment">&lt;!-- jsp --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jstl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.tomcat.embed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>tomcat-embed-jasper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--            &lt;scope&gt;provided&lt;/scope&gt;--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5207\u8BB0\u8981\u6CE8\u91CA\u6389<code>&lt;scope&gt;provided&lt;/scope&gt;</code>\uFF0C\u7F51\u4E0A\u5F88\u591A\u6559\u7A0B\u90FD\u6DFB\u52A0\u4E86\u8BE5\u5B57\u6BB5\uFF0C\u6700\u7EC8\u5BFC\u81F4\u7528springboot main\u65B9\u6CD5\u542F\u52A8\uFF0C\u8BBF\u95EE\u4E00\u76F4404\u3002</p></li><li><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</p><p>\u5728<code>application.properties</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0jsp\u76F8\u5173\u914D\u7F6E:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFAjsp\u6587\u4EF6</p><ol><li><p>\u5728<code>src/main</code>\u4E0B\u521B\u5EFA<code>webapp/WEB-INF/jsp</code>\u6587\u4EF6\u5939\u3002</p><p>\u521B\u5EFA\u7684webapp\u4F1A\u6709\u4E2A\u5C0F\u84DD\u70B9\u7684\u7279\u6B8A\u6807\u8BC6\u3002\u5982\u6CA1\u6709\u8BF7\u914D\u7F6E</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20201012095417642.png" alt="image-20201012095417642"></p></li></ol></li><li><p>\u5728<code>jsp</code>\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA<code>index.jsp</code></p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>
&lt;!DOCTYPE html&gt;

&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Hello&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
Hello,\${name}
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20201012100215862.png" alt="image-20201012100215862"></p><ol start="4"><li><p>\u521B\u5EFAcontroller</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Controller
@RequestMapping(&quot;/&quot;)
public class IndexController {
    
    @GetMapping(&quot;/&quot;)
    public String index(Model model){
        model.addAttribute(&quot;name&quot;, &quot;jsp\u6D4B\u8BD5&quot;);
        return &quot;index&quot;;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8\u670D\u52A1</p><ul><li><p>\u4EE5SpringBoot \u7684\u65B9\u5F0F\u542F\u52A8\uFF08\u5927\u90E8\u5206\u9879\u76EE\u90FD\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u542F\u52A8\uFF0C\u6240\u4EE5\u79FB\u9664 <code>&lt;scope&gt;provided&lt;/scope&gt;</code>\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JspDemoApplication</span>  <span class="token keyword">extends</span> <span class="token class-name">SpringBootServletInitializer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">SpringApplicationBuilder</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">SpringApplicationBuilder</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u8981\u6307\u5411\u539F\u5148\u7528main\u65B9\u6CD5\u6267\u884C\u7684Application\u542F\u52A8\u7C7B</span>
        <span class="token keyword">return</span> builder<span class="token punctuation">.</span><span class="token function">sources</span><span class="token punctuation">(</span><span class="token class-name">JspDemoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">JspDemoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u901A\u8FC7spring-boot:run\u542F\u52A8\u670D\u52A1,idea\u91CC\u76F4\u63A5\u53CC\u51FB\u5373\u53EF:</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20201012100720902.png" alt="image-20201012100720902"></p></li></ul></li></ol><h2 id="_2-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> 2. \u5E38\u89C1\u95EE\u9898</h2><h3 id="_2-1-webapp-\u6CA1\u6709\u6807\u8BC6" tabindex="-1"><a class="header-anchor" href="#_2-1-webapp-\u6CA1\u6709\u6807\u8BC6" aria-hidden="true">#</a> 2.1 webapp \u6CA1\u6709\u6807\u8BC6</h3><p>\u53C2\u8003\u5982\u4E0B\u56FE\u914D\u7F6E</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20201012095417642.png" alt="image-20201012095417642"></p><h3 id="_2-2-jsp\u8BBF\u95EE404" tabindex="-1"><a class="header-anchor" href="#_2-2-jsp\u8BBF\u95EE404" aria-hidden="true">#</a> 2.2 JSP\u8BBF\u95EE404</h3><p>\u5F15\u5165\u4F9D\u8D56\u65F6 <code>&lt;scope&gt;provided&lt;/scope&gt;</code> \u6CA1\u6709\u6CE8\u91CA\u6389\uFF0CIntelliJ IDEA\u4E0D\u4F1A\u5C06\u7684\u4F9D\u8D56\u6CE8\u5165\u5230\u7C7B\u8DEF\u5F84\u4E2D,</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;dependency&gt;
 &lt;groupId&gt;org.apache.tomcat.embed&lt;/groupId&gt;
            &lt;artifactId&gt;tomcat-embed-jasper&lt;/artifactId&gt;
&lt;!--            &lt;scope&gt;provided&lt;/scope&gt;--&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,13),r={href:"https://blog.csdn.net/gnail_oug/article/details/80237871",target:"_blank",rel:"noopener noreferrer"},u={href:"https://my.oschina.net/u/2382040/blog/1799102",target:"_blank",rel:"noopener noreferrer"};function v(g,m){const s=c("ExternalLinkIcon");return i(),p("div",null,[d,n("p",null,[n("a",r,[a("Spring Boot\u6559\u7A0B(\u5341)\uFF1ASpring Boot\u96C6\u6210jsp"),e(s)])]),n("p",null,[n("a",u,[a("SpringBoot\u96C6\u6210Jsp\u51FA\u9519\uFF08404\uFF09"),e(s)])])])}const h=t(o,[["render",v],["__file","templates-k-freeMarker-action-excel.html.vue"]]);export{h as default};
