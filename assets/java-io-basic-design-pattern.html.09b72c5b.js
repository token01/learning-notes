import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as o,a,b as e,d as t,f as i,r as p}from"./app.002b82c0.js";const c={},l=a("h1",{id:"java-io-\u8BBE\u8BA1\u6A21\u5F0F-\u88C5\u9970\u8005\u6A21\u5F0F",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java-io-\u8BBE\u8BA1\u6A21\u5F0F-\u88C5\u9970\u8005\u6A21\u5F0F","aria-hidden":"true"},"#"),e(" Java IO - \u8BBE\u8BA1\u6A21\u5F0F(\u88C5\u9970\u8005\u6A21\u5F0F)")],-1),d=a("blockquote",null,[a("p",null,"Java I/O \u4F7F\u7528\u4E86\u88C5\u9970\u8005\u6A21\u5F0F\u6765\u5B9E\u73B0\u3002")],-1),u=a("h2",{id:"_1-\u88C5\u9970\u8005\u6A21\u5F0F",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-\u88C5\u9970\u8005\u6A21\u5F0F","aria-hidden":"true"},"#"),e(" 1. \u88C5\u9970\u8005\u6A21\u5F0F")],-1),m={href:"https://pdai.tech/md/dev-spec/pattern/12_decorator.html",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>\u88C5\u9970\u8005(Decorator)\u548C\u5177\u4F53\u7EC4\u4EF6(ConcreteComponent)\u90FD\u7EE7\u627F\u81EA\u7EC4\u4EF6(Component)\uFF0C\u5177\u4F53\u7EC4\u4EF6\u7684\u65B9\u6CD5\u5B9E\u73B0\u4E0D\u9700\u8981\u4F9D\u8D56\u4E8E\u5176\u5B83\u5BF9\u8C61\uFF0C\u800C\u88C5\u9970\u8005\u7EC4\u5408\u4E86\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u8FD9\u6837\u5B83\u53EF\u4EE5\u88C5\u9970\u5176\u5B83\u88C5\u9970\u8005\u6216\u8005\u5177\u4F53\u7EC4\u4EF6\u3002\u6240\u8C13\u88C5\u9970\uFF0C\u5C31\u662F\u628A\u8FD9\u4E2A\u88C5\u9970\u8005\u5957\u5728\u88AB\u88C5\u9970\u8005\u4E4B\u4E0A\uFF0C\u4ECE\u800C\u52A8\u6001\u6269\u5C55\u88AB\u88C5\u9970\u8005\u7684\u529F\u80FD\u3002\u88C5\u9970\u8005\u7684\u65B9\u6CD5\u6709\u4E00\u90E8\u5206\u662F\u81EA\u5DF1\u7684\uFF0C\u8FD9\u5C5E\u4E8E\u5B83\u7684\u529F\u80FD\uFF0C\u7136\u540E\u8C03\u7528\u88AB\u88C5\u9970\u8005\u7684\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u4ECE\u800C\u4E5F\u4FDD\u7559\u4E86\u88AB\u88C5\u9970\u8005\u7684\u529F\u80FD\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u5177\u4F53\u7EC4\u4EF6\u5E94\u5F53\u662F\u88C5\u9970\u5C42\u6B21\u7684\u6700\u4F4E\u5C42\uFF0C\u56E0\u4E3A\u53EA\u6709\u5177\u4F53\u7EC4\u4EF6\u7684\u65B9\u6CD5\u5B9E\u73B0\u4E0D\u9700\u8981\u4F9D\u8D56\u4E8E\u5176\u5B83\u5BF9\u8C61\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830203657281.png" alt="image-20220830203657281"></p><h2 id="_2-io-\u88C5\u9970\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-io-\u88C5\u9970\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 2. IO \u88C5\u9970\u8005\u6A21\u5F0F</h2><p>\u4EE5 InputStream \u4E3A\u4F8B\uFF0C</p><ul><li>InputStream \u662F\u62BD\u8C61\u7EC4\u4EF6\uFF1B</li><li>FileInputStream \u662F InputStream \u7684\u5B50\u7C7B\uFF0C\u5C5E\u4E8E\u5177\u4F53\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u5B57\u8282\u6D41\u7684\u8F93\u5165\u64CD\u4F5C\uFF1B</li><li>FilterInputStream \u5C5E\u4E8E\u62BD\u8C61\u88C5\u9970\u8005\uFF0C\u88C5\u9970\u8005\u7528\u4E8E\u88C5\u9970\u7EC4\u4EF6\uFF0C\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u989D\u5916\u7684\u529F\u80FD\u3002\u4F8B\u5982 BufferedInputStream \u4E3A FileInputStream \u63D0\u4F9B\u7F13\u5B58\u7684\u529F\u80FD\u3002</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220830203804788.png" alt="image-20220830203804788"></p><p>\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5177\u6709\u7F13\u5B58\u529F\u80FD\u7684\u5B57\u8282\u6D41\u5BF9\u8C61\u65F6\uFF0C\u53EA\u9700\u8981\u5728 FileInputStream \u5BF9\u8C61\u4E0A\u518D\u5957\u4E00\u5C42 BufferedInputStream \u5BF9\u8C61\u5373\u53EF\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">FileInputStream</span> fileInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BufferedInputStream</span> bufferedInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>fileInputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>DataInputStream \u88C5\u9970\u8005\u63D0\u4F9B\u4E86\u5BF9\u66F4\u591A\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u8F93\u5165\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982 int\u3001double \u7B49\u57FA\u672C\u7C7B\u578B\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,10),_={href:"https://pdai.tech/md/java/io/java-io-basic-design-pattern.html",target:"_blank",rel:"noopener noreferrer"},f=a("strong",null,"Java IO - \u8BBE\u8BA1\u6A21\u5F0F(\u88C5\u9970\u8005\u6A21\u5F0F)",-1);function v(I,k){const n=p("ExternalLinkIcon");return r(),o("div",null,[l,d,u,a("p",null,[e("\u8BF7\u53C2\u8003"),a("a",m,[e("\u88C5\u9970\u8005\u6A21\u5F0F\u8BE6\u89E3"),t(n)])]),h,a("p",null,[a("a",_,[f,t(n)])])])}const S=s(c,[["render",v],["__file","java-io-basic-design-pattern.html.vue"]]);export{S as default};
