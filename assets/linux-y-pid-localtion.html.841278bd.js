import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as i,f as n}from"./app.da5f94a0.js";const r={},s=n(`<h1 id="\u6839\u636E\u7AEF\u53E3\u53F7-\u8FDB\u7A0B\u53F7\u67E5\u9879\u76EE\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u7AEF\u53E3\u53F7-\u8FDB\u7A0B\u53F7\u67E5\u9879\u76EE\u4F4D\u7F6E" aria-hidden="true">#</a> \u6839\u636E\u7AEF\u53E3\u53F7/\u8FDB\u7A0B\u53F7\u67E5\u9879\u76EE\u4F4D\u7F6E</h1><h2 id="_1-\u6839\u636E\u7AEF\u53E3\u53F7\u67E5pid" tabindex="-1"><a class="header-anchor" href="#_1-\u6839\u636E\u7AEF\u53E3\u53F7\u67E5pid" aria-hidden="true">#</a> 1. \u6839\u636E\u7AEF\u53E3\u53F7\u67E5pid</h2><p>\u4EC5\u6709\u7AEF\u53E3\u53F7\u65F6\uFF0C\u9700\u8981\u6839\u636E\u7AEF\u53E3\u53F7\u5148\u67E5\u51FA\u8FDB\u7A0B\u53F7</p><ul><li><p>\u65B9\u5F0F\u4E00\uFF1Alosf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>losf -i:{port}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![image-20191023093133400](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093133400.png)</p></li><li><p>\u65B9\u5F0F\u4E8C\uFF1Anetstat</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>netstat -tunlp|grep {port}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![image-20191023093229618](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093229618.png)</p></li></ul><h2 id="_2-\u6839\u636Epid\u67E5\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#_2-\u6839\u636Epid\u67E5\u8DEF\u5F84" aria-hidden="true">#</a> 2. \u6839\u636Epid\u67E5\u8DEF\u5F84</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ll /proc/9293
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u67E5\u5230\u6240\u6709pid\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u5176\u4E2Dcwd\u5C31\u662F\u8FDB\u7A0B\u6240\u5728\u4F4D\u7F6E</p><p>![image-20191023093453433](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093453433.png)</p><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u76F4\u63A5\u52A0\u4E0Acwd\u67E5\u8BE2\u4F4D\u7F6E</p><p>![image-20191023093531560](/Users/zhangshengzhong/Library/Application Support/typora-user-images/image-20191023093531560.png)</p>`,10),t=[s];function d(p,l){return a(),i("div",null,t)}const g=e(r,[["render",d],["__file","linux-y-pid-localtion.html.vue"]]);export{g as default};
