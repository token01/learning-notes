import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a,b as e,d as n,f as s,r as p}from"./app.a0a3f66a.js";const c={},l=a("h1",{id:"docker\u7BA1\u7406-\u53EF\u89C6\u5316\u5DE5\u5177portainer",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#docker\u7BA1\u7406-\u53EF\u89C6\u5316\u5DE5\u5177portainer","aria-hidden":"true"},"#"),e(" docker\u7BA1\u7406 - \u53EF\u89C6\u5316\u5DE5\u5177Portainer")],-1),d=a("h2",{id:"_1-\u7B80\u4ECB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-\u7B80\u4ECB","aria-hidden":"true"},"#"),e(" 1. \u7B80\u4ECB")],-1),h={href:"https://github.com/portainer/portainer",target:"_blank",rel:"noopener noreferrer"},k=s(`<h3 id="_1-1-\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F18\u70B9" aria-hidden="true">#</a> 1.1 \u4F18\u70B9</h3><ol><li><p>\u652F\u6301\u5BB9\u5668\u7BA1\u7406\u3001\u955C\u50CF\u7BA1\u7406(\u5BFC\u5165\u3001\u5BFC\u51FA)</p></li><li><p>\u8F7B\u91CF\u7EA7\uFF0C\u6D88\u8017\u8D44\u6E90\u5C11</p></li><li><p>\u57FA\u4E8Edocker api\uFF0C\u5B89\u5168\u6027\u9AD8\uFF0C\u53EF\u6307\u5B9Adocker api\u7AEF\u53E3\uFF0C\u652F\u6301TLS\u8BC1\u4E66\u8BA4\u8BC1</p></li><li><p>\u652F\u6301\u6743\u9650\u5206\u914D</p></li><li><p>\u652F\u6301\u96C6\u7FA4</p></li><li><p>github\u4E0A\u76EE\u524D\u6301\u7EED\u7EF4\u62A4\u66F4\u65B0</p></li></ol><h2 id="_2-\u4E0B\u8F7Dportainer\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0B\u8F7Dportainer\u955C\u50CF" aria-hidden="true">#</a> 2. \u4E0B\u8F7DPortainer\u955C\u50CF</h2><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>docker search portainer   <span class="token comment">#\u641C\u7D22\u5F53\u524D\u6709\u54EA\u4E9BPortainer\u7684\u955C\u50CF</span>
docker pull portainer/portainer   <span class="token comment">#pull \u6807\u661F\u6700\u591A\u7684\u955C\u50CF\uFF08STARS\u6570\u6700\u591A\u7684\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u8FD0\u884Cportainer\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_3-\u8FD0\u884Cportainer\u955C\u50CF" aria-hidden="true">#</a> 3. \u8FD0\u884CPortainer\u955C\u50CF</h2><p>\u8FD0\u884C\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u5355\u673A\u8FD0\u884C \u548C \u96C6\u7FA4\u8FD0\u884C</p><h3 id="_3-1-\u5355\u673A\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5355\u673A\u8FD0\u884C" aria-hidden="true">#</a> 3.1 \u5355\u673A\u8FD0\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token parameter variable">-v</span> portainer_data:/data <span class="token parameter variable">--name</span> prtainer portainer/portainer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570\u8BF4\u660E\uFF1A -d\uFF1A\u5BB9\u5668\u5728\u540E\u53F0\u8FD0\u884C\uFF1B -p 9000:9000 \uFF1A\u5BBF\u4E3B\u673A9000\u7AEF\u53E3\u6620\u5C04\u5BB9\u5668\u4E2D\u76849000\u7AEF\u53E3\uFF08\u524D\u9762\u7684\u662F\u5BBF\u4E3B\u673A\u7AEF\u53E3\uFF0C\u540E\u9762\u7684\u662F\u5BB9\u5668\u7AEF\u53E3\uFF09\uFF1B \u2013restart \u6807\u5FD7\u4F1A\u68C0\u67E5\u5BB9\u5668\u7684\u9000\u51FA\u4EE3\u7801\uFF0C\u5E76\u636E\u6B64\u6765\u51B3\u5B9A\u662F\u5426\u8981\u91CD\u542F\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E0D\u4F1A\u91CD\u542F\uFF1B \u2013restart=always\uFF1A\u81EA\u52A8\u91CD\u542F\u8BE5\u5BB9\u5668\uFF1B -v /var/run/docker.sock:/var/run/docker.sock \uFF1A\u628A\u5BBF\u4E3B\u673A\u7684Docker\u5B88\u62A4\u8FDB\u7A0B(Docker daemon)\u9ED8\u8BA4\u76D1\u542C\u7684Unix\u57DF\u5957\u63A5\u5B57\u6302\u8F7D\u5230\u5BB9\u5668\u4E2D\uFF1B -v portainer_data:/data \uFF1A\u628A\u5BBF\u4E3B\u673Aportainer_data\u6570\u636E\u5377\u6302\u8F7D\u5230\u5BB9\u5668/data\u76EE\u5F55\uFF1B \u2013name prtainer-test \uFF1A \u7ED9\u5BB9\u5668\u8D77\u540D\u4E3Aportainer-libai\uFF1B</p><h3 id="_3-2-\u6C49\u5316\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6C49\u5316\u5B89\u88C5" aria-hidden="true">#</a> 3.2 \u6C49\u5316\u5B89\u88C5\uFF1A</h3>`,10),u={href:"https://pan.baidu.com/s/1ksUzbf9jkoWiCOSKBH6kEQ",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>\u5C06\u89E3\u538B\u540E\u7684public\u6587\u4EF6\u5939\u4E0A\u4F20\u5230centos\u7CFB\u7EDF\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u8BF7\u6CE8\u610F\uFF0C\u662Fcentos\u7CFB\u7EDF\u7684\u6839\u76EE\u5F55\u3002</p><p>\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token parameter variable">-v</span> portainer_data:/data <span class="token parameter variable">-v</span> /public:/public <span class="token parameter variable">--name</span> prtainer-test portainer/portainer\uFF08\u5982\u679C\u5DF2\u90E8\u7F72\uFF0C\u9700\u8981\u5C06\u5DF2\u90E8\u7F72\u7684\u5BB9\u5668\u5220\u9664\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>docker ps #\u67E5\u770B\u4E0B\u8FDB\u7A0B</p><h2 id="_3-3-\u4F7F\u7528portainer" tabindex="-1"><a class="header-anchor" href="#_3-3-\u4F7F\u7528portainer" aria-hidden="true">#</a> 3.3 \u4F7F\u7528Portainer</h2>`,5),_={href:"http://ip:9000",target:"_blank",rel:"noopener noreferrer"},b=a("p",null,[a("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221118133933435.png",alt:"image-20221118133933435"})],-1),v=a("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),e(" \u53C2\u8003\u6587\u7AE0")],-1),f={href:"https://blog.csdn.net/qq_34528463/article/details/106687234",target:"_blank",rel:"noopener noreferrer"};function g(x,P){const r=p("ExternalLinkIcon");return o(),i("div",null,[l,d,a("p",null,[a("a",h,[e("https://github.com/portainer/portainer"),n(r)]),e(" Portainer\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u7BA1\u7406UI\uFF0C\u53EF\u8BA9\u60A8\u8F7B\u677E\u7BA1\u7406\u4E0D\u540C\u7684Docker\u73AF\u5883\uFF08Docker\u4E3B\u673A\u6216Swarm\u96C6\u7FA4\uFF09\u3002 Portainer\u7684\u610F\u56FE\u662F\u6613\u4E8E\u90E8\u7F72\u548C\u4F7F\u7528\u3002\u5B83\u7531\u4E00\u4E2A\u53EF\u4EE5\u5728\u4EFB\u4F55Docker\u5F15\u64CE\u4E0A\u8FD0\u884C\u7684\u5BB9\u5668\u7EC4\u6210\uFF08\u53EF\u4EE5\u90E8\u7F72\u4E3ALinux\u5BB9\u5668\u6216Windows\u672C\u673A\u5BB9\u5668\uFF0C\u4E5F\u652F\u6301\u5176\u4ED6\u5E73\u53F0\uFF09\u3002 Portainer\u5141\u8BB8\u60A8\u7BA1\u7406\u6240\u6709Docker\u8D44\u6E90\uFF08\u5BB9\u5668\uFF0C\u6620\u50CF\uFF0C\u5377\uFF0C\u7F51\u7EDC\u7B49\uFF09\uFF01\u5B83\u4E0E\u72EC\u7ACB\u7684Docker\u5F15\u64CE\u548C Docker Swarm\u6A21\u5F0F\u517C\u5BB9\u3002")]),k,a("p",null,[e("\u9ED8\u8BA4\u5B89\u88C5\u7684\u662F\u82F1\u6587\u7248\u7684\uFF0C\u6709\u9700\u8981\u4E2D\u6587\u6C49\u5316\u7684\u53EF\u4EE5\u4E0A\u4F20\u6C49\u5316\u5305\u8FDB\u884C\u6C49\u5316\u3002\uFF08"),a("a",u,[e("\u6C49\u5316\u7248\u70B9\u51FB\u4E0B\u8F7D"),n(r)]),e("\uFF09\u63D0\u53D6\u7801\uFF1A6chp")]),m,a("p",null,[e("\u5730\u5740\uFF1A"),a("a",_,[e("http://ip:9000"),n(r)]),e("\uFF0C\u9996\u6B21\u8BBF\u95EE\u9700\u8981\u5148\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7\u548C\u5BC6\u7801\uFF0C\u8BBE\u7F6E\u4E0B")]),b,v,a("p",null,[a("a",f,[e("docker\u53EF\u89C6\u5316\u7BA1\u7406\u2014\u2014Portainer\u5B89\u88C5\u6559\u7A0B"),n(r)])])])}const S=t(c,[["render",g],["__file","docker-y-manage-portainer.html.vue"]]);export{S as default};
