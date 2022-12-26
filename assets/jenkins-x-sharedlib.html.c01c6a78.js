import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as n,b as s,d as a,f as i,r as c}from"./app.7119a543.js";const t={},d=i(`<h1 id="jenkins\u5171\u4EAB\u5E93\u7F16\u5199\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#jenkins\u5171\u4EAB\u5E93\u7F16\u5199\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> Jenkins\u5171\u4EAB\u5E93\u7F16\u5199\u4E0E\u4F7F\u7528</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u5982\u679C\u4F60\u7ECF\u5E38\u4F7F\u7528 Jenkins Pipeline \u4E00\u5B9A\u4F1A\u9047\u5230\u591A\u4E2A\u4E0D\u540C\u6D41\u6C34\u7EBF\u4E2D\u6709\u5927\u91CF\u91CD\u590D\u4EE3\u7801\u7684\u60C5\u51B5\uFF0C\u5F88\u591A\u65F6\u5019\u4E3A\u4E86\u65B9\u4FBF\u6211\u4EEC\u90FD\u662F\u76F4\u63A5\u590D\u5236\u7C98\u8D34\u5230\u4E0D\u540C\u7684\u7BA1\u9053\u4E2D\u53BB\u7684\uFF0C\u4F46\u662F\u957F\u671F\u4E0B\u53BB\u8FD9\u4E9B\u4EE3\u7801\u7684\u7EF4\u62A4\u5C31\u4F1A\u8D8A\u6765\u8D8A\u9EBB\u70E6\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CJenkins \u4E2D\u63D0\u4F9B\u4E86\u5171\u4EAB\u5E93\u7684\u6982\u5FF5\u6765\u89E3\u51B3\u91CD\u590D\u4EE3\u7801\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u516C\u5171\u90E8\u5206\u63D0\u53D6\u51FA\u6765\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5728\u6240\u6709\u7684 Pipeline \u4E2D\u5F15\u7528\u8FD9\u4E9B\u5171\u4EAB\u5E93\u4E0B\u9762\u7684\u4EE3\u7801\u4E86\u3002</p><h2 id="_2-\u5171\u4EAB\u5E93\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-\u5171\u4EAB\u5E93\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 2. \u5171\u4EAB\u5E93\u662F\u4EC0\u4E48\uFF1F</h2><p>\u5171\u4EAB\u5E93\uFF08shared library\uFF09\u662F\u4E00\u4E9B<strong>\u72EC\u7ACB\u7684 Groovy \u811A\u672C\u7684\u96C6\u5408</strong>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD0\u884C Pipeline \u7684\u65F6\u5019\u53BB\u83B7\u53D6\u8FD9\u4E9B\u5171\u4EAB\u5E93\u4EE3\u7801\u3002\u4F7F\u7528\u5171\u4EAB\u5E93\u6700\u597D\u7684\u65B9\u5F0F\u540C\u6837\u662F\u628A\u4EE3\u7801\u4F7F\u7528 Git \u4ED3\u5E93\u8FDB\u884C\u6258\u7BA1\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u8FDB\u884C\u7248\u672C\u5316\u7BA1\u7406\u4E86\u3002</p><p>\u4F7F\u7528\u5171\u4EAB\u5E93\u4E00\u822C\u53EA\u9700\u89813\u4E2A\u6B65\u9AA4\u5373\u53EF\uFF1A</p><ul><li>\u9996\u5148\u521B\u5EFA Groovy \u811A\u672C\uFF0C\u6DFB\u52A0\u5230 Git \u4ED3\u5E93\u4E2D</li><li>\u7136\u540E\u5728 Jenkins \u4E2D\u914D\u7F6E\u5C06\u5171\u4EAB\u5E93\u6DFB\u52A0\u5230 Jenkins \u4E2D\u6765</li><li>\u6700\u540E\uFF0C\u5728\u6211\u4EEC\u7684\u6D41\u6C34\u7EBF\u4E2D\u5BFC\u5165\u9700\u8981\u4F7F\u7528\u7684\u5171\u4EAB\u5E93\uFF1A<code>@Library(&#39;your-shared-library&#39;)</code>\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4F7F\u7528\u5171\u4EAB\u5E93\u4E2D\u7684\u4EE3\u7801\u4E86\u3002</li></ul><h2 id="_3-\u5171\u4EAB\u5E93\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_3-\u5171\u4EAB\u5E93\u5185\u5BB9" aria-hidden="true">#</a> 3. \u5171\u4EAB\u5E93\u5185\u5BB9</h2><p>\u5728\u5171\u4EAB\u5E93\u4E2D\u4E00\u822C\u4F1A\u6709\u4E24\u79CD\u901A\u7528\u7684\u4EE3\u7801\uFF1A</p><h3 id="_3-1-vars-\u4E0B\u7684steps" tabindex="-1"><a class="header-anchor" href="#_3-1-vars-\u4E0B\u7684steps" aria-hidden="true">#</a> 3.1 vars \u4E0B\u7684steps</h3><blockquote><p><strong>Steps</strong>\uFF1A\u8FD9\u4E9B Steps \u5728 Jenkins \u4E2D\u88AB\u79F0\u4E3A<strong>\u5168\u5C40\u53D8\u91CF</strong>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u6240\u6709\u7684 Jenkins Pipeline \u4E2D\u4F7F\u7528\u8FD9\u4E9B\u81EA\u5B9A\u4E49\u7684 Steps\u3002</p></blockquote><p>\u6BD4\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7F16\u5199\u4E00\u4E2A\u6807\u51C6\u7684 Step \u6765\u90E8\u7F72\u5E94\u7528\u6216\u8005\u53D1\u9001\u6D88\u606F\u901A\u77E5\u7B49\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u4EE3\u7801\u6DFB\u52A0\u5230 <code>vars/YourStepName.groovy</code> \u6587\u4EF6\u4E2D\uFF0C\u7136\u540E\u5B9E\u73B0\u4E00\u4E2A <code>call</code> \u51FD\u6570\u5373\u53EF\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token shebang comment">#!/usr/bin/env groovy</span>
<span class="token comment">// vars/YourStepName.groovy</span>

<span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something here...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-src\u4E0B\u7684\u901A\u7528\u4EE3\u7801-\u901A\u5E38\u653E\u5E2E\u52A9\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-2-src\u4E0B\u7684\u901A\u7528\u4EE3\u7801-\u901A\u5E38\u653E\u5E2E\u52A9\u7C7B" aria-hidden="true">#</a> 3.2 src\u4E0B\u7684\u901A\u7528\u4EE3\u7801\uFF08\u901A\u5E38\u653E\u5E2E\u52A9\u7C7B\uFF09</h3><p>\u8FD9\u4E9B\u4EE3\u7801\u9700\u8981\u653E\u5728 <code>src/your/package/name</code> \u76EE\u5F55\u4E0B\u9762\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u5E38\u89C4\u7684 Groovy \u8BED\u6CD5\u4E86\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env groovy
// com/qikqiak/GlobalVars.groovy
package com.qikqiak

class GlobalVars {
   static String foo = &quot;bar&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u5728 Jenkins Pipeline \u4E2D\u4F7F\u7528 <code>import</code> \u5BFC\u5165\u4E0A\u9762\u7684\u7C7B\uFF0C\u5E76\u5F15\u7528\u5176\u4E2D\u7684\u9759\u6001\u53D8\u91CF\uFF0C\u6BD4\u5982 <code>GlobalVars.foo</code>\u3002</p><h2 id="_4-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-\u793A\u4F8B" aria-hidden="true">#</a> 4. \u793A\u4F8B</h2><h3 id="_4-1-\u6B65\u9AA41-vars\u7684steps\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6B65\u9AA41-vars\u7684steps\u793A\u4F8B" aria-hidden="true">#</a> 4.1 \u6B65\u9AA41\uFF1Avars\u7684steps\u793A\u4F8B</h3><p>\u65B0\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>pipeline-library-demo</code> \u7684\u6587\u4EF6\u5939\uFF0C\u5C06\u8BE5\u9879\u76EE\u52A0\u5165\u5230 Git \u4ED3\u5E93\u4E2D\u3002\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>vars</code> \u7684\u76EE\u5F55\uFF0C\u81EA\u5B9A\u4E49\u4E00\u4E2A step \u5C31\u662F\u5728 <code>vars</code> \u76EE\u5F55\u4E0B\u9762\u7684\u4E00\u4E2A <code>.groovy</code> \u6587\u4EF6\uFF0C\u8FD9\u4E9B\u88AB\u79F0\u4E3A\u5168\u5C40\u53D8\u91CF\uFF0C\u6BD4\u5982\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A <code>sayHi.groovy</code> \u7684\u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token shebang comment">#!/usr/bin/env groovy</span>

<span class="token keyword">def</span> <span class="token function">call</span><span class="token punctuation">(</span>String name<span class="token operator">=</span><span class="token string">&#39;zsz&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  echo <span class="token interpolation-string"><span class="token string">&quot;Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">name</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.&quot;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u9700\u8981\u5B9E\u73B0 call \u65B9\u6CD5\uFF0C\u6DFB\u52A0\u4E86\u4E00\u4E2A\u540D\u4E3A name \u7684\u53C2\u6570\uFF0C\u5177\u6709\u9ED8\u8BA4\u503C <code>zsz</code>\uFF0C\u53EF\u4EE5\u7528 <code>\${name}</code> \u6765\u8FDB\u884C\u8BBF\u95EE\u3002</p><h3 id="_4-2-\u6B65\u9AA42-src-\u7684\u901A\u7528\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6B65\u9AA42-src-\u7684\u901A\u7528\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> 4.2 \u6B65\u9AA42\uFF1Asrc \u7684\u901A\u7528\u4EE3\u7801\u793A\u4F8B</h3><p>\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>src/com/zsz/GlobalVars.groovy</code> \u7684\u6587\u4EF6\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token shebang comment">#!/usr/bin/env groovy</span>
<span class="token keyword">package</span> com<span class="token punctuation">.</span>qikqiak

<span class="token keyword">class</span> <span class="token class-name">GlobalVars</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> String foo <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;bar&quot;</span></span>

  <span class="token comment">// \u5728 Pipeline \u4E2D\u53EF\u4EE5\u5F15\u7528\u8FD9\u91CC\u7684\u9759\u6001\u53D8\u91CF\uFF1A</span>
  <span class="token comment">// </span>
  <span class="token comment">// import com.zsz.GlobalVars</span>
  <span class="token comment">// println GlobalVars.foo</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u5B8C\u6574\u7684\u4EE3\u7801\u76EE\u5F55\u5982\u4E0B\u6240\u793A" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5B8C\u6574\u7684\u4EE3\u7801\u76EE\u5F55\u5982\u4E0B\u6240\u793A" aria-hidden="true">#</a> 4.3 \u5B8C\u6574\u7684\u4EE3\u7801\u76EE\u5F55\u5982\u4E0B\u6240\u793A\uFF1A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ tree .
.
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 src
\u2502   \u2514\u2500\u2500 com
\u2502       \u2514\u2500\u2500 zsz
\u2502           \u2514\u2500\u2500 GlobalVars.groovy
\u2514\u2500\u2500 vars
    \u2514\u2500\u2500 sayHi.groovy

4 directories, 3 files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-\u4E0A\u4F20\u4EE3\u7801\u5230git" tabindex="-1"><a class="header-anchor" href="#_4-4-\u4E0A\u4F20\u4EE3\u7801\u5230git" aria-hidden="true">#</a> 4.4 \u4E0A\u4F20\u4EE3\u7801\u5230git</h3>`,28),p={href:"https://gitee.com/zszdevelop/pipeline-library-demo",target:"_blank",rel:"noopener noreferrer"},u=i(`<h3 id="_4-5-jenkins-\u6DFB\u52A0\u5171\u4EAB\u5E93" tabindex="-1"><a class="header-anchor" href="#_4-5-jenkins-\u6DFB\u52A0\u5171\u4EAB\u5E93" aria-hidden="true">#</a> 4.5 Jenkins \u6DFB\u52A0\u5171\u4EAB\u5E93</h3><p>\u5171\u4EAB\u5E93\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u8BA9 Jenkins \u77E5\u9053\u8FD9\u4E2A\u5171\u4EAB\u5E93\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE Jenkins \u7684 Web \u9875\u9762\u8FDB\u884C\u6DFB\u52A0\u3002\u5728 Jenkins \u9996\u9875 -&gt; \u7CFB\u7EDF\u7BA1\u7406 -&gt; \u7CFB\u7EDF\u914D\u7F6E\uFF0C\u5728 <code>Global Pipeline Libraries</code> \u533A\u57DF\u914D\u7F6E\u5171\u4EAB\u5E93\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211001182353785.png" alt="image-20211001182353785"></p><h3 id="_4-6-\u65B0\u5EFA\u6D41\u6C34\u7EBF\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_4-6-\u65B0\u5EFA\u6D41\u6C34\u7EBF\u9879\u76EE" aria-hidden="true">#</a> 4.6 \u65B0\u5EFA\u6D41\u6C34\u7EBF\u9879\u76EE</h3><p>\u4FDD\u5B58\u540E\u5373\u53EF\u4F7F\u7528\u914D\u7F6E\u5171\u4EAB\u5E93\u3002\u63A5\u4E0B\u6765\u65B0\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>share-lib-demo</code> \u7684\u6D41\u6C34\u7EBF\u9879\u76EE\uFF0C\u5728 <code>Pipeline script</code> \u533A\u57DF\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token annotation punctuation">@Library</span><span class="token punctuation">(</span><span class="token string">&#39;pipeline-library-demo&#39;</span><span class="token punctuation">)</span><span class="token number">_</span>

<span class="token keyword">import</span> com<span class="token punctuation">.</span>qikqiak<span class="token punctuation">.</span>GlobalVars

<span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Demo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    echo <span class="token string">&#39;Hello world&#39;</span>
    sayHi <span class="token string">&#39;\u5F20\u4E09&#39;</span>
    println GlobalVars<span class="token punctuation">.</span>foo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211001182543979.png" alt="image-20211001182543979"></p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F <code>@Library(&#39;pipeline-library-demo&#39;)_</code> \u6700\u540E\u6709\u4E00\u4E2A\u4E0B\u5212\u7EBF <code>_</code>\uFF0C\u8FD9\u4E2A\u4E0B\u5212\u7EBF\u5E76\u4E0D\u662F\u5199\u9519\u4E86\uFF0C\u5982\u679C <code>@Libray</code> \u540E\u9762\u7D27\u63A5\u7684\u4E00\u884C\u4E0D\u662F <code>import</code> \u8BED\u53E5\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u8FD9\u4E2A\u4E0B\u5212\u7EBF\uFF0C\u6211\u4EEC\u8FD9\u91CC\u540E\u9762\u5C31\u662F\u4E00\u6761 <code>import</code> \u8BED\u53E5\uFF0C\u6240\u4EE5\u8FD9\u91CC\u53EF\u4EE5\u7701\u7565\u8FD9\u4E2A\u4E0B\u5212\u7EBF\u3002</p><h3 id="_4-7-\u6784\u5EFA\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#_4-7-\u6784\u5EFA\u8F93\u51FA" aria-hidden="true">#</a> 4.7 \u6784\u5EFA\u8F93\u51FA</h3><p>\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u6784\u5EFA\u8FD9\u4E2A Pipeline\uFF0C\u6B63\u5E38\u5C31\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u6240\u793A\u7684\u6784\u5EFA\u7ED3\u679C</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211001182654054.png" alt="image-20211001182654054"></p><h2 id="_5-\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_5-\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> 5. \u53C2\u8003\u6587\u7AE0</h2>`,12),v={href:"https://www.jenkins.io/zh/doc/book/pipeline/shared-libraries/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.qikqiak.com/post/jenkins-shared-library-demo/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/zszdevelop/jenkinslibrary",target:"_blank",rel:"noopener noreferrer"};function b(k,g){const e=c("ExternalLinkIcon");return r(),l("div",null,[d,n("p",null,[n("a",p,[s("https://gitee.com/zszdevelop/pipeline-library-demo"),a(e)])]),u,n("p",null,[n("a",v,[s("jenkins\u5B98\u7F51"),a(e)])]),n("p",null,[n("a",m,[s("Jenkins \u5171\u4EAB\u5E93\u793A\u4F8B"),a(e)])]),n("p",null,[n("a",h,[s("DevOps\u6D41\u6C34\u7EBF\u6700\u4F73\u5B9E\u8DF5"),a(e)])])])}const f=o(t,[["render",b],["__file","jenkins-x-sharedlib.html.vue"]]);export{f as default};
