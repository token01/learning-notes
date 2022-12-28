import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as s,a as i,b as e,d,f as r,r as l}from"./app.093d1351.js";const c={},o=r(`<h1 id="\u95EE\u9898\u96C6\u9526" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u96C6\u9526" aria-hidden="true">#</a> \u95EE\u9898\u96C6\u9526</h1><h2 id="_1-push-\u63D0\u4EA4\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_1-push-\u63D0\u4EA4\u5F02\u5E38" aria-hidden="true">#</a> 1. push \u63D0\u4EA4\u5F02\u5E38</h2><p>push \u63D0\u4EA4\u65F6\u51FA\u73B0fatal: The remote end hung up unexpectedly\u5F02\u5E38</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>localhost:android zhangshengzhong$ git push --set-upstream http://gitlab.isture.com/zsz/android-gitbook.git master
Counting objects: 245, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (214/214), done.
error: RPC failed; result=22, HTTP code = 41383 MiB/s
fatal: The remote end hung up unexpectedly
Writing objects: 100% (245/245), 15.83 MiB | 6.85 MiB/s, done.
Total 245 (delta 7), reused 0 (delta 0)
fatal: The remote end hung up unexpectedly
Everything up-to-date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_1-1-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 1.1 \u89E3\u51B3\u65B9\u6848</h3><p>\u539F\u56E0\uFF1A\u56E0\u4E3A\u4E0A\u4F20\u6587\u4EF6\u8D85\u8FC7\u4E86nginx \u7684\u6587\u4EF6\u9650\u5236\u6700\u5927\u503C</p><p>\u6CE8\u610F\uFF1A\u81EA\u5DF1\u662F\u8D70\u54EA\u4E2Anginx\uFF0C\u662Fgitlab\u81EA\u5E26\u7684\u8FD8\u662F\u670D\u52A1\u5668\u7684nginx</p><p>\u7ED9nginx \u6DFB\u52A0\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http {
  ...
  client_max_body_size 100M;
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-clone\u8DEF\u5F84\u4E0D\u5BF9" tabindex="-1"><a class="header-anchor" href="#_2-clone\u8DEF\u5F84\u4E0D\u5BF9" aria-hidden="true">#</a> 2. clone\u8DEF\u5F84\u4E0D\u5BF9</h2><h3 id="_2-1-\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> 2.1 \u65B9\u5F0F\u4E00</h3><p>\u76F4\u63A5\u66F4\u6539/etc/gitlab/gitlab.rb\u4E0D\u80FD\u751F\u6548\uFF0C\u66F4\u6539/opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml\u6587\u4EF6</p><hr><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u66F4\u6539<strong>host\u548Cport</strong>\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  ## GitLab settings 
  gitlab:
    ## Web server settings (note: host is the FQDN, do not include http://)
    host: xxx.xxx.xxx.xxx
    port: 8181
    https: fals
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> 2.2 \u65B9\u5F0F\u4E8C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>external_url &#39;http://gitlab.isture.com&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),u={href:"http://gitlab.isture.com",target:"_blank",rel:"noopener noreferrer"};function h(v,b){const n=l("ExternalLinkIcon");return t(),s("div",null,[o,i("p",null,[e("external_url '"),i("a",u,[e("http://gitlab.isture.com"),d(n)]),e("'")])])}const p=a(c,[["render",h],["__file","gitlab-x=problem.html.vue"]]);export{p as default};
