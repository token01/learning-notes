import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as n,a as e,b as s,d as r,f as a,r as l}from"./app.76228b4d.js";const t={},c=a(`<h1 id="js\u5BFC\u51FA-exports\u3001module-exports-\u548C-export\u3001export-default" tabindex="-1"><a class="header-anchor" href="#js\u5BFC\u51FA-exports\u3001module-exports-\u548C-export\u3001export-default" aria-hidden="true">#</a> js\u5BFC\u51FA\uFF1Aexports\u3001module.exports \u548C export\u3001export default</h1><h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1. \u524D\u8A00</h2><p>js\u5BFC\u5165\u5BFC\u51FA\u6709\u591A\u79CD\u65B9\u5F0F\uFF0C\u65B0\u624B\u5E38\u5E38\u88AB\u7ED5\u5F97\u6655\u5934\u8F6C\u5411</p><p>\u5B83\u4EEC\u7684\u4F7F\u7528\u8303\u56F4</p><ul><li><p><code>require</code>: node \u652F\u6301\u7684\u5F15\u5165</p></li><li><p><code>module.exports / exports</code>: \u53EA\u6709 node \u652F\u6301\u7684\u5BFC\u51FA</p></li><li><p><code>export / import</code> : \u53EA\u6709es6 \u652F\u6301\u7684\u5BFC\u51FA\u5F15\u5165\`</p></li></ul><blockquote><p>\u6211\u4EEC\u5927\u90E8\u5206\u5728vue\u4E2D\u4F7F\u7528\u7684\u662Fes6 <code>export / import</code> \u7684\u5BFC\u5165\u5BFC\u51FA\uFF0C</p><p>\u5982\u5BFC\u51FAapi:</p><p>\u200B let api{</p><p>\u200B // \u7F51\u7EDC\u8BF7\u6C42</p><p>\u200B }</p><p>export default api;</p><p>\u5BFC\u5165\uFF1A</p><p>import api from &#39;../api/myapi&#39;;</p></blockquote><h2 id="_2-node\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2-node\u6A21\u5757" aria-hidden="true">#</a> 2.node\u6A21\u5757</h2><p><code>Node</code>\u91CC\u9762\u7684\u6A21\u5757\u7CFB\u7EDF\u9075\u5FAA\u7684\u662F<code>CommonJS</code>\u89C4\u8303\u3002 \u90A3\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u4EC0\u4E48\u662F<code>CommonJS</code>\u89C4\u8303\u5462\uFF1F \u7531\u4E8E<code>js</code>\u4EE5\u524D\u6BD4\u8F83\u6DF7\u4E71\uFF0C\u5404\u5199\u5404\u7684\u4EE3\u7801\uFF0C\u6CA1\u6709\u4E00\u4E2A\u6A21\u5757\u7684\u6982\u5FF5\uFF0C\u800C\u8FD9\u4E2A\u89C4\u8303\u51FA\u6765\u5176\u5B9E\u5C31\u662F\u5BF9\u6A21\u5757\u7684\u4E00\u4E2A\u5B9A\u4E49\u3002</p><blockquote><p><code>CommonJS</code>\u5B9A\u4E49\u7684\u6A21\u5757\u5206\u4E3A: \u6A21\u5757\u6807\u8BC6(<code>module</code>)\u3001\u6A21\u5757\u5B9A\u4E49(<code>exports</code>) \u3001\u6A21\u5757\u5F15\u7528(<code>require</code>)</p></blockquote><p>\u5148\u89E3\u91CA <code>exports</code> \u548C <code>module.exports</code> \u5728\u4E00\u4E2Anode\u6267\u884C\u4E00\u4E2A\u6587\u4EF6\u65F6\uFF0C\u4F1A\u7ED9\u8FD9\u4E2A\u6587\u4EF6\u5185\u751F\u6210\u4E00\u4E2A <code>exports</code>\u548C<code>module</code>\u5BF9\u8C61\uFF0C \u800C<code>module</code>\u53C8\u6709\u4E00\u4E2A<code>exports</code>\u5C5E\u6027\u3002\u4ED6\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u5982\u4E0B\u56FE\uFF0C\u90FD\u6307\u5411\u4E00\u5757{}\u5185\u5B58\u533A\u57DF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>exports = module.exports = {};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210207165709128.png" alt="image-20210207165709128"></p><p>\u90A3\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u770B\u4EE3\u7801\u7684\u5427\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//utils.js
let a = 100;
console.log(module.exports); //\u80FD\u6253\u5370\u51FA\u7ED3\u679C\u4E3A\uFF1A{}
console.log(exports); //\u80FD\u6253\u5370\u51FA\u7ED3\u679C\u4E3A\uFF1A{}

exports.a = 200; //\u8FD9\u91CC\u8F9B\u82E6\u52B3\u4F5C\u5E2E module.exports \u7684\u5185\u5BB9\u7ED9\u6539\u6210 {a : 200}

exports = &#39;\u6307\u5411\u5176\u4ED6\u5185\u5B58\u533A&#39;; //\u8FD9\u91CC\u628Aexports\u7684\u6307\u5411\u6307\u8D70

//test.js

var a = require(&#39;/utils&#39;);
console.log(a) // \u6253\u5370\u4E3A {a : 200} 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u51FA\uFF0C\u5176\u5B9E<code>require</code>\u5BFC\u51FA\u7684\u5185\u5BB9\u662F<code>module.exports</code>\u7684\u6307\u5411\u7684\u5185\u5B58\u5757\u5185\u5BB9\uFF0C\u5E76\u4E0D\u662F<code>exports</code>\u7684\u3002 \u7B80\u800C\u8A00\u4E4B\uFF0C<strong>\u533A\u5206\u4ED6\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u5C31\u662F <code>exports</code> \u53EA\u662F <code>module.exports</code>\u7684\u5F15\u7528\uFF0C\u8F85\u52A9\u540E\u8005\u6DFB\u52A0\u5185\u5BB9\u7528\u7684</strong>\u3002</p></blockquote><p>\u7528\u767D\u8BDD\u8BB2\u5C31\u662F\uFF0C<code>exports</code>\u53EA\u8F85\u52A9<code>module.exports</code>\u64CD\u4F5C\u5185\u5B58\u4E2D\u7684\u6570\u636E\uFF0C\u8F9B\u8F9B\u82E6\u82E6\u5404\u79CD\u64CD\u4F5C\u6570\u636E\u5B8C\uFF0C\u7D2F\u5F97\u8981\u6B7B\uFF0C\u7ED3\u679C\u5230\u6700\u540E\u771F\u6B63\u88AB<code>require</code>\u51FA\u53BB\u7684\u5185\u5BB9\u8FD8\u662F<code>module.exports</code>\u7684\uFF0C\u771F\u662F\u597D\u82E6\u903C\u554A\u3002</p><p>\u5176\u5B9E\u5927\u5BB6\u7528\u5185\u5B58\u5757\u7684\u6982\u5FF5\u53BB\u7406\u89E3\uFF0C\u5C31\u4F1A\u5F88\u6E05\u695A\u4E86\u3002</p><p>\u7136\u540E\u5462\uFF0C\u4E3A\u4E86\u907F\u514D\u7CCA\u6D82\uFF0C<strong>\u5C3D\u91CF\u90FD\u7528 <code>module.exports</code> \u5BFC\u51FA\uFF0C\u7136\u540E\u7528<code>require</code>\u5BFC\u5165\u3002</strong></p><h2 id="_3-es\u4E2D\u7684\u6A21\u5757\u5BFC\u51FA\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_3-es\u4E2D\u7684\u6A21\u5757\u5BFC\u51FA\u5BFC\u5165" aria-hidden="true">#</a> 3. ES\u4E2D\u7684\u6A21\u5757\u5BFC\u51FA\u5BFC\u5165</h2><p>\u5728es\u4E2D\u7684\u6A21\u5757\uFF0C\u5C31\u975E\u5E38\u6E05\u6670\u4E86\u3002\u4E0D\u8FC7\u4E5F\u6709\u4E00\u4E9B\u7EC6\u8282\u7684\u4E1C\u897F\u9700\u8981\u641E\u6E05\u695A\u3002 \u6BD4\u5982 <code>export</code> \u548C <code>export default</code>\uFF0C\u8FD8\u6709 \u5BFC\u5165\u7684\u65F6\u5019\uFF0C<code>import a from ..</code>,<code>import {a} from ..</code>\uFF0C\u603B\u4E4B\u4E5F\u6709\u70B9\u4E71\uFF0C\u90A3\u4E48\u4E0B\u9762\u6211\u4EEC\u5C31\u5F00\u59CB\u628A\u5B83\u4EEC\u634B\u6E05\u695A\u5427\u3002</p><h3 id="_3-1-export-\u548C-export-default" tabindex="-1"><a class="header-anchor" href="#_3-1-export-\u548C-export-default" aria-hidden="true">#</a> 3.1 export \u548C export default</h3><p>\u9996\u5148\u6211\u4EEC\u8BB2\u8FD9\u4E24\u4E2A\u5BFC\u51FA\uFF0C\u4E0B\u9762\u6211\u4EEC\u8BB2\u8BB2\u5B83\u4EEC\u7684\u533A\u522B</p><ol><li>export\u4E0Eexport default\u5747\u53EF\u7528\u4E8E\u5BFC\u51FA\u5E38\u91CF\u3001\u51FD\u6570\u3001\u6587\u4EF6\u3001\u6A21\u5757\u7B49</li><li>\u5728\u4E00\u4E2A\u6587\u4EF6\u6216\u6A21\u5757\u4E2D\uFF0Cexport\u3001import\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0Cexport default\u4EC5\u6709\u4E00\u4E2A</li><li>\u901A\u8FC7export\u65B9\u5F0F\u5BFC\u51FA\uFF0C\u5728\u5BFC\u5165\u65F6\u8981\u52A0{ }\uFF0Cexport default\u5219\u4E0D\u9700\u8981</li><li>export\u80FD\u76F4\u63A5\u5BFC\u51FA\u53D8\u91CF\u8868\u8FBE\u5F0F\uFF0Cexport default\u4E0D\u884C\u3002</li></ol><p>\u4E0B\u9762\u54B1\u4EEC\u770B\u770B\u4EE3\u7801\u53BB\u9A8C\u8BC1\u4E00\u4E0B</p><h3 id="_3-2-es6\u5BFC\u51FA\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_3-2-es6\u5BFC\u51FA\u9A8C\u8BC1" aria-hidden="true">#</a> 3.2 ES6\u5BFC\u51FA\u9A8C\u8BC1</h3><h4 id="testes6export-js" tabindex="-1"><a class="header-anchor" href="#testes6export-js" aria-hidden="true">#</a> testEs6Export.js</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;use strict&#39;
//\u5BFC\u51FA\u53D8\u91CF
export const a = &#39;100&#39;;  

 //\u5BFC\u51FA\u65B9\u6CD5
export const dogSay = function(){ 
    console.log(&#39;wang wang&#39;);
}

 //\u5BFC\u51FA\u65B9\u6CD5\u7B2C\u4E8C\u79CD
function catSay(){
   console.log(&#39;miao miao&#39;); 
}
export { catSay };

//export default\u5BFC\u51FA
const m = 100;
export default m; 
//export defult const m = 100;// \u8FD9\u91CC\u4E0D\u80FD\u5199\u8FD9\u79CD\u683C\u5F0F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-es6\u5BFC\u5165\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#_3-3-es6\u5BFC\u5165\u9A8C\u8BC1" aria-hidden="true">#</a> 3.3 ES6\u5BFC\u5165\u9A8C\u8BC1</h3><h4 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//index.js
&#39;use strict&#39;
var express = require(&#39;express&#39;);
var router = express.Router();

import { dogSay, catSay } from &#39;./testEs6Export&#39;; //\u5BFC\u51FA\u4E86 export \u65B9\u6CD5 
import m from &#39;./testEs6Export&#39;;  //\u5BFC\u51FA\u4E86 export default 

import * as testModule from &#39;./testEs6Export&#39;;//as \u96C6\u5408\u6210\u5BF9\u8C61\u5BFC\u51FA



/* GET home page. */
router.get(&#39;/&#39;, function(req, res, next) {
  dogSay();
  catSay();
  console.log(m);
  testModule.dogSay();
  console.log(testModule.m); // undefined , \u56E0\u4E3A  as \u5BFC\u51FA\u662F \u628A \u96F6\u6563\u7684 export \u805A\u96C6\u5728\u4E00\u8D77\u4F5C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800Cexport default \u662F\u5BFC\u51FA\u4E3A default\u5C5E\u6027\u3002
  console.log(testModule.default); // 100
  res.send(&#39;\u606D\u559C\u4F60\uFF0C\u6210\u529F\u9A8C\u8BC1&#39;);
});

module.exports = router;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u51FA\uFF0C\u786E\u5B9E\u611F\u89C9 <code>ES6</code>\u7684\u6A21\u5757\u7CFB\u7EDF\u975E\u5E38\u7075\u6D3B\u7684\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,32),p={href:"https://juejin.im/post/6844903489257095181",target:"_blank",rel:"noopener noreferrer"};function u(v,m){const d=l("ExternalLinkIcon");return o(),n("div",null,[c,e("p",null,[e("a",p,[s("exports\u3001module.exports \u548C export\u3001export default \u5230\u5E95\u662F\u548B\u56DE\u4E8B"),r(d)])])])}const h=i(t,[["render",u],["__file","fe-js-export.html.vue"]]);export{h as default};
