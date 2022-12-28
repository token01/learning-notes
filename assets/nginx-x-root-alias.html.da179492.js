import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,a as e,b as r,d as o,f as s,r as l}from"./app.093d1351.js";const c={},d=s(`<h1 id="nginx\u7684root\u548Calias\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#nginx\u7684root\u548Calias\u7684\u533A\u522B" aria-hidden="true">#</a> nginx\u7684root\u548Calias\u7684\u533A\u522B</h1><h2 id="_1-root-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-root-\u7528\u6CD5" aria-hidden="true">#</a> 1. root \u7528\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location /request_path/image/ {
    root /local_path/image/;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u914D\u7F6E\u7684\u7ED3\u679C\u5C31\u662F\u5F53\u5BA2\u6237\u7AEF\u8BF7\u6C42/request_path/image/cat.png \u7684\u65F6\u5019\uFF0C Nginx\u628A\u8BF7\u6C42\u6620\u5C04\u4E3A**/local_path/image/request_path/image/cat.png**</p><blockquote><p>\u6CE8\u610F\u8FD9\u65F6\u5019\u9664\u4E86root \u7684\u8DEF\u5F84\uFF0C\u8FD8\u4F1A\u5E26\u4E0A\u8BF7\u6C42\u8DEF\u5F84\uFF08\u4F8B\u5982\u8FD9\u91CC\uFF1A/request_path/image/\uFF09</p></blockquote><h2 id="_2-alias\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-alias\u7528\u6CD5" aria-hidden="true">#</a> 2.alias\u7528\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location /request_path/image/ {
    alias /local_path/image/;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\uFF0C\u5F53\u5BA2\u6237\u7AEF\u8BF7\u6C42 /request_path/image/cat.png \u7684\u65F6\u5019\uFF0C Nginx\u628A\u8BF7\u6C42\u6620\u5C04\u4E3A**/local_path/image/cat.png**</p><p>\u6CE8\u610F\uFF1Aalias\u4E2D\u7684\u8DEF\u5F84\u6700\u540E\u5FC5\u987B\u8DDF\u4E0A/ root\u7684\u8DEF\u5F84\u6700\u540E\u53EF\u8DDF\u53EF\u4E0D\u8DDF\uFF0Calias\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u8DEF\u5F84root\u4E0D\u652F\u6301**</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,10),h={href:"http://www.leftso.com/blog/171.html",target:"_blank",rel:"noopener noreferrer"};function p(m,u){const a=l("ExternalLinkIcon");return i(),n("div",null,[d,e("p",null,[e("a",h,[r("nginx \u9759\u6001\u6587\u4EF6\u888B\u91CC\u914D\u7F6E,\u5C06\u672C\u5730\u6587\u4EF6/\u5939\u53CD\u5411\u4EE3\u7406\u4EE5\u53CAroot\u4E0Ealias\u7684\u533A\u522B"),o(a)])])])}const x=t(c,[["render",p],["__file","nginx-x-root-alias.html.vue"]]);export{x as default};
