import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as l,a,b as n,d as e,f as t,r as i}from"./app.74b2ce1e.js";const c={},r=t(`<h1 id="\u8C03\u8BD5\u6392\u9519-java-\u95EE\u9898\u6392\u67E5\u4E4B\u5DE5\u5177\u5355" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5\u6392\u9519-java-\u95EE\u9898\u6392\u67E5\u4E4B\u5DE5\u5177\u5355" aria-hidden="true">#</a> \u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4B\u5DE5\u5177\u5355</h1><blockquote><p>Java \u5728\u7EBF\u95EE\u9898\u6392\u67E5\u4E3B\u8981\u5206\u4E24\u7BC7\uFF1A\u672C\u6587\u662F\u7B2C\u4E8C\u7BC7\uFF0C\u901A\u8FC7java\u8C03\u8BD5/\u6392\u67E5\u5DE5\u5177\u8FDB\u884C\u95EE\u9898\u5B9A\u4F4D\u3002</p></blockquote><h2 id="_1-java-\u8C03\u8BD5\u5165\u95E8\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1-java-\u8C03\u8BD5\u5165\u95E8\u5DE5\u5177" aria-hidden="true">#</a> 1. Java \u8C03\u8BD5\u5165\u95E8\u5DE5\u5177</h2><h3 id="_1-1-jps" tabindex="-1"><a class="header-anchor" href="#_1-1-jps" aria-hidden="true">#</a> 1.1 jps</h3><blockquote><p>jps\u662Fjdk\u63D0\u4F9B\u7684\u4E00\u4E2A\u67E5\u770B\u5F53\u524Djava\u8FDB\u7A0B\u7684\u5C0F\u5DE5\u5177\uFF0C \u53EF\u4EE5\u770B\u505A\u662FJavaVirtual Machine Process Status Tool\u7684\u7F29\u5199\u3002</p></blockquote><p>jps\u5E38\u7528\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jps <span class="token comment"># \u663E\u793A\u8FDB\u7A0B\u7684ID \u548C \u7C7B\u7684\u540D\u79F0</span>
jps \u2013l <span class="token comment"># \u8F93\u51FA\u8F93\u51FA\u5B8C\u5168\u7684\u5305\u540D\uFF0C\u5E94\u7528\u4E3B\u7C7B\u540D\uFF0Cjar\u7684\u5B8C\u5168\u8DEF\u5F84\u540D </span>
jps \u2013v <span class="token comment"># \u8F93\u51FAjvm\u53C2\u6570</span>
jps \u2013q <span class="token comment"># \u663E\u793Ajava\u8FDB\u7A0B\u53F7</span>
jps <span class="token parameter variable">-m</span> <span class="token comment"># main \u65B9\u6CD5</span>
jps <span class="token parameter variable">-l</span> xxx.xxx.xx.xx <span class="token comment"># \u8FDC\u7A0B\u67E5\u770B </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jps\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-q\uFF1A\u4EC5\u8F93\u51FAVM\u6807\u8BC6\u7B26\uFF0C\u4E0D\u5305\u62ECclassname,jar name,arguments <span class="token keyword">in</span> main method 
-m\uFF1A\u8F93\u51FAmain method\u7684\u53C2\u6570 
-l\uFF1A\u8F93\u51FA\u5B8C\u5168\u7684\u5305\u540D\uFF0C\u5E94\u7528\u4E3B\u7C7B\u540D\uFF0Cjar\u7684\u5B8C\u5168\u8DEF\u5F84\u540D 
-v\uFF1A\u8F93\u51FAjvm\u53C2\u6570 
-V\uFF1A\u8F93\u51FA\u901A\u8FC7flag\u6587\u4EF6\u4F20\u9012\u5230JVM\u4E2D\u7684\u53C2\u6570<span class="token punctuation">(</span>.hotspotrc\u6587\u4EF6\u6216-XX:Flags<span class="token operator">=</span>\u6240\u6307\u5B9A\u7684\u6587\u4EF6 
-Joption\uFF1A\u4F20\u9012\u53C2\u6570\u5230vm,\u4F8B\u5982:-J-Xms512m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jps\u539F\u7406</p><blockquote><p>java\u7A0B\u5E8F\u5728\u542F\u52A8\u4EE5\u540E\uFF0C\u4F1A\u5728java.io.tmpdir\u6307\u5B9A\u7684\u76EE\u5F55\u4E0B\uFF0C\u5C31\u662F\u4E34\u65F6\u6587\u4EF6\u5939\u91CC\uFF0C\u751F\u6210\u4E00\u4E2A\u7C7B\u4F3C\u4E8Ehsperfdata_User\u7684\u6587\u4EF6\u5939\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\uFF08\u5728Linux\u4E2D\u4E3A/tmp/hsperfdata_{userName}/\uFF09\uFF0C\u6709\u51E0\u4E2A\u6587\u4EF6\uFF0C\u540D\u5B57\u5C31\u662Fjava\u8FDB\u7A0B\u7684pid\uFF0C\u56E0\u6B64\u5217\u51FA\u5F53\u524D\u8FD0\u884C\u7684java\u8FDB\u7A0B\uFF0C\u53EA\u662F\u628A\u8FD9\u4E2A\u76EE\u5F55\u91CC\u7684\u6587\u4EF6\u540D\u5217\u4E00\u4E0B\u800C\u5DF2\u3002 \u81F3\u4E8E\u7CFB\u7EDF\u7684\u53C2\u6570\u4EC0\u4E48\uFF0C\u5C31\u53EF\u4EE5\u89E3\u6790\u8FD9\u51E0\u4E2A\u6587\u4EF6\u83B7\u5F97\u3002</p></blockquote>`,11),u={href:"https://docs.oracle.com/javase/1.5.0/docs/tooldocs/share/jps.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="_1-2-jstack" tabindex="-1"><a class="header-anchor" href="#_1-2-jstack" aria-hidden="true">#</a> 1.2 jstack</h3><blockquote><p>jstack\u662Fjdk\u81EA\u5E26\u7684\u7EBF\u7A0B\u5806\u6808\u5206\u6790\u5DE5\u5177\uFF0C\u4F7F\u7528\u8BE5\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u6216\u5BFC\u51FA Java \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7EBF\u7A0B\u5806\u6808\u4FE1\u606F\u3002</p></blockquote><p>jstack\u5E38\u7528\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u57FA\u672C</span>
jstack <span class="token number">2815</span>

<span class="token comment"># java\u548Cnative c/c++\u6846\u67B6\u7684\u6240\u6709\u6808\u4FE1\u606F</span>
jstack <span class="token parameter variable">-m</span> <span class="token number">2815</span>

<span class="token comment"># \u989D\u5916\u7684\u9501\u4FE1\u606F\u5217\u8868\uFF0C\u67E5\u770B\u662F\u5426\u6B7B\u9501</span>
jstack <span class="token parameter variable">-l</span> <span class="token number">2815</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jstack\u53C2\u6570\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-l</span> \u957F\u5217\u8868. \u6253\u5370\u5173\u4E8E\u9501\u7684\u9644\u52A0\u4FE1\u606F,\u4F8B\u5982\u5C5E\u4E8Ejava.util.concurrent \u7684 ownable synchronizers\u5217\u8868.

<span class="token parameter variable">-F</span> \u5F53\u2019jstack <span class="token punctuation">[</span>-l<span class="token punctuation">]</span> pid\u2019\u6CA1\u6709\u76F8\u5E94\u7684\u65F6\u5019\u5F3A\u5236\u6253\u5370\u6808\u4FE1\u606F

<span class="token parameter variable">-m</span> \u6253\u5370java\u548Cnative c/c++\u6846\u67B6\u7684\u6240\u6709\u6808\u4FE1\u606F.

<span class="token parameter variable">-h</span> <span class="token operator">|</span> <span class="token parameter variable">-help</span> \u6253\u5370\u5E2E\u52A9\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v={href:"https://www.jianshu.com/p/025cb069cb69",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="_1-3-jinfo" tabindex="-1"><a class="header-anchor" href="#_1-3-jinfo" aria-hidden="true">#</a> 1.3 jinfo</h3><blockquote><p>jinfo \u662F JDK \u81EA\u5E26\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u7528\u6765\u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684 java \u5E94\u7528\u7A0B\u5E8F\u7684\u6269\u5C55\u53C2\u6570\uFF0C\u5305\u62ECJava System\u5C5E\u6027\u548CJVM\u547D\u4EE4\u884C\u53C2\u6570\uFF1B\u4E5F\u53EF\u4EE5\u52A8\u6001\u7684\u4FEE\u6539\u6B63\u5728\u8FD0\u884C\u7684 JVM \u4E00\u4E9B\u53C2\u6570\u3002\u5F53\u7CFB\u7EDF\u5D29\u6E83\u65F6\uFF0Cjinfo\u53EF\u4EE5\u4ECEcore\u6587\u4EF6\u91CC\u9762\u77E5\u9053\u5D29\u6E83\u7684Java\u5E94\u7528\u7A0B\u5E8F\u7684\u914D\u7F6E\u4FE1\u606F</p></blockquote><p>jinfo\u5E38\u7528\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8F93\u51FA\u5F53\u524D jvm \u8FDB\u7A0B\u7684\u5168\u90E8\u53C2\u6570\u548C\u7CFB\u7EDF\u5C5E\u6027</span>
jinfo <span class="token number">2815</span>

<span class="token comment"># \u8F93\u51FA\u6240\u6709\u7684\u53C2\u6570</span>
jinfo <span class="token parameter variable">-flags</span> <span class="token number">2815</span>

<span class="token comment"># \u67E5\u770B\u6307\u5B9A\u7684 jvm \u53C2\u6570\u7684\u503C</span>
jinfo <span class="token parameter variable">-flag</span> PrintGC <span class="token number">2815</span>

<span class="token comment"># \u5F00\u542F/\u5173\u95ED\u6307\u5B9A\u7684JVM\u53C2\u6570</span>
jinfo <span class="token parameter variable">-flag</span> +PrintGC <span class="token number">2815</span>

<span class="token comment"># \u8BBE\u7F6Eflag\u7684\u53C2\u6570</span>
jinfo <span class="token parameter variable">-flag</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>value <span class="token number">2815</span>

<span class="token comment"># \u8F93\u51FA\u5F53\u524D jvm \u8FDB\u884C\u7684\u5168\u90E8\u7684\u7CFB\u7EDF\u5C5E\u6027</span>
jinfo <span class="token parameter variable">-sysprops</span> <span class="token number">2815</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jinfo\u53C2\u6570\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>no option \u8F93\u51FA\u5168\u90E8\u7684\u53C2\u6570\u548C\u7CFB\u7EDF\u5C5E\u6027
<span class="token parameter variable">-flag</span> name \u8F93\u51FA\u5BF9\u5E94\u540D\u79F0\u7684\u53C2\u6570
<span class="token parameter variable">-flag</span> <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>name \u5F00\u542F\u6216\u8005\u5173\u95ED\u5BF9\u5E94\u540D\u79F0\u7684\u53C2\u6570
<span class="token parameter variable">-flag</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>value \u8BBE\u5B9A\u5BF9\u5E94\u540D\u79F0\u7684\u53C2\u6570
<span class="token parameter variable">-flags</span> \u8F93\u51FA\u5168\u90E8\u7684\u53C2\u6570
<span class="token parameter variable">-sysprops</span> \u8F93\u51FA\u7CFB\u7EDF\u5C5E\u6027
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k={href:"https://www.jianshu.com/p/8d8aef212b25",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="_1-4-jmap" tabindex="-1"><a class="header-anchor" href="#_1-4-jmap" aria-hidden="true">#</a> 1.4 jmap</h3><blockquote><p>\u547D\u4EE4jmap\u662F\u4E00\u4E2A\u591A\u529F\u80FD\u7684\u547D\u4EE4\u3002\u5B83\u53EF\u4EE5\u751F\u6210 java \u7A0B\u5E8F\u7684 dump \u6587\u4EF6\uFF0C \u4E5F\u53EF\u4EE5\u67E5\u770B\u5806\u5185\u5BF9\u8C61\u793A\u4F8B\u7684\u7EDF\u8BA1\u4FE1\u606F\u3001\u67E5\u770B ClassLoader \u7684\u4FE1\u606F\u4EE5\u53CA finalizer \u961F\u5217\u3002</p></blockquote><p>\u4E24\u4E2A\u7528\u9014</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5806\u7684\u60C5\u51B5</span>
jmap <span class="token parameter variable">-heap</span> <span class="token number">2815</span>

<span class="token comment"># dump</span>
jmap -dump:live,format<span class="token operator">=</span>b,file<span class="token operator">=</span>/tmp/heap2.bin <span class="token number">2815</span>
jmap <span class="token parameter variable">-dump:format</span><span class="token operator">=</span>b,file<span class="token operator">=</span>/tmp/heap3.bin <span class="token number">2815</span>

<span class="token comment"># \u67E5\u770B\u5806\u7684\u5360\u7528</span>
jmap <span class="token parameter variable">-histo</span> <span class="token number">2815</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jmap\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>no option\uFF1A \u67E5\u770B\u8FDB\u7A0B\u7684\u5185\u5B58\u6620\u50CF\u4FE1\u606F,\u7C7B\u4F3C Solaris pmap \u547D\u4EE4\u3002
heap\uFF1A \u663E\u793AJava\u5806\u8BE6\u7EC6\u4FE1\u606F
histo<span class="token punctuation">[</span>:live<span class="token punctuation">]</span>\uFF1A \u663E\u793A\u5806\u4E2D\u5BF9\u8C61\u7684\u7EDF\u8BA1\u4FE1\u606F
clstats\uFF1A\u6253\u5370\u7C7B\u52A0\u8F7D\u5668\u4FE1\u606F
finalizerinfo\uFF1A \u663E\u793A\u5728F-Queue\u961F\u5217\u7B49\u5F85Finalizer\u7EBF\u7A0B\u6267\u884Cfinalizer\u65B9\u6CD5\u7684\u5BF9\u8C61
dump:<span class="token operator">&lt;</span>dump-options<span class="token operator">&gt;</span>\uFF1A\u751F\u6210\u5806\u8F6C\u50A8\u5FEB\u7167
F\uFF1A \u5F53-dump\u6CA1\u6709\u54CD\u5E94\u65F6\uFF0C\u4F7F\u7528-dump\u6216\u8005-histo\u53C2\u6570. \u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E0B,live\u5B50\u53C2\u6570\u65E0\u6548.
help\uFF1A\u6253\u5370\u5E2E\u52A9\u4FE1\u606F
J<span class="token operator">&lt;</span>flag<span class="token operator">&gt;</span>\uFF1A\u6307\u5B9A\u4F20\u9012\u7ED9\u8FD0\u884Cjmap\u7684JVM\u7684\u53C2\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),h={href:"https://www.jianshu.com/p/a4ad53179df3",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.oracle.com/javase/1.5.0/docs/tooldocs/share/jmap.html",target:"_blank",rel:"noopener noreferrer"},j=t(`<h3 id="_1-5-jdb" tabindex="-1"><a class="header-anchor" href="#_1-5-jdb" aria-hidden="true">#</a> 1.5 jdb</h3><p>jdb\u53EF\u4EE5\u7528\u6765\u9884\u53D1debug,\u5047\u8BBE\u4F60\u9884\u53D1\u7684java_home\u662F/opt/java/\uFF0C\u8FDC\u7A0B\u8C03\u8BD5\u7AEF\u53E3\u662F8000.\u90A3\u4E48</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jdb <span class="token parameter variable">-attach</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u51FA\u73B0\u4EE5\u4E0A\u4EE3\u8868jdb\u542F\u52A8\u6210\u529F\u3002\u540E\u7EED\u53EF\u4EE5\u8FDB\u884C\u8BBE\u7F6E\u65AD\u70B9\u8FDB\u884C\u8C03\u8BD5\u3002</p>`,4),f={href:"http://docs.oracle.com/javase/7/docs/technotes/tools/windows/jdb.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="_1-6-chlsdb" tabindex="-1"><a class="header-anchor" href="#_1-6-chlsdb" aria-hidden="true">#</a> 1.6 CHLSDB</h3><p>CHLSDB\u611F\u89C9\u5F88\u591A\u60C5\u51B5\u4E0B\u53EF\u4EE5\u770B\u5230\u66F4\u597D\u73A9\u7684\u4E1C\u897F\uFF0C\u4E0D\u8BE6\u7EC6\u53D9\u8FF0\u4E86\u3002 \u67E5\u8BE2\u8D44\u6599\u542C\u8BF4jstack\u548Cjmap\u7B49\u5DE5\u5177\u5C31\u662F\u57FA\u4E8E\u5B83\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-classpath</span> /opt/taobao/java/lib/sa-jdi.jar sun.jvm.hotspot.CLHSDB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q={href:"http://rednaxelafx.iteye.com/blog/1847971",target:"_blank",rel:"noopener noreferrer"},x=t(`<h2 id="_2-java-\u8C03\u8BD5\u8FDB\u9636\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_2-java-\u8C03\u8BD5\u8FDB\u9636\u5DE5\u5177" aria-hidden="true">#</a> 2. Java \u8C03\u8BD5\u8FDB\u9636\u5DE5\u5177</h2><h3 id="_2-1-btrace" tabindex="-1"><a class="header-anchor" href="#_2-1-btrace" aria-hidden="true">#</a> 2.1 btrace</h3><p>\u9996\u5F53\u5176\u51B2\u7684\u8981\u8BF4\u7684\u662Fbtrace\u3002\u771F\u662F\u751F\u4EA7\u73AF\u5883&amp;\u9884\u53D1\u7684\u6392\u67E5\u95EE\u9898\u5927\u6740\u5668\u3002 \u7B80\u4ECB\u4EC0\u4E48\u7684\u5C31\u4E0D\u8BF4\u4E86\u3002\u76F4\u63A5\u4E0A\u4EE3\u7801\u5E72</p><ul><li>\u67E5\u770B\u5F53\u524D\u8C01\u8C03\u7528\u4E86ArrayList\u7684add\u65B9\u6CD5\uFF0C\u540C\u65F6\u53EA\u6253\u5370\u5F53\u524DArrayList\u7684size\u5927\u4E8E500\u7684\u7EBF\u7A0B\u8C03\u7528\u6808</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@OnMethod</span><span class="token punctuation">(</span>clazz <span class="token operator">=</span> <span class="token string">&quot;java.util.ArrayList&quot;</span><span class="token punctuation">,</span> method<span class="token operator">=</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> location <span class="token operator">=</span> <span class="token annotation punctuation">@Location</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">Kind</span><span class="token punctuation">.</span><span class="token constant">CALL</span><span class="token punctuation">,</span> clazz <span class="token operator">=</span> <span class="token string">&quot;/./&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&quot;/./&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">m</span><span class="token punctuation">(</span><span class="token annotation punctuation">@ProbeClassName</span> <span class="token class-name">String</span> probeClass<span class="token punctuation">,</span> <span class="token annotation punctuation">@ProbeMethodName</span> <span class="token class-name">String</span> probeMethod<span class="token punctuation">,</span> <span class="token annotation punctuation">@TargetInstance</span> <span class="token class-name">Object</span> instance<span class="token punctuation">,</span> <span class="token annotation punctuation">@TargetMethodOrField</span> <span class="token class-name">String</span> method<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;java.util.ArrayList&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">479</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;check who ArrayList.add method:&quot;</span> <span class="token operator">+</span> probeClass <span class="token operator">+</span> <span class="token string">&quot;#&quot;</span> <span class="token operator">+</span> probeMethod  <span class="token operator">+</span> <span class="token string">&quot;, method:&quot;</span> <span class="token operator">+</span> method <span class="token operator">+</span> <span class="token string">&quot;, size:&quot;</span> <span class="token operator">+</span> <span class="token function">getInt</span><span class="token punctuation">(</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;java.util.ArrayList&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">jstack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u76D1\u63A7\u5F53\u524D\u670D\u52A1\u65B9\u6CD5\u88AB\u8C03\u7528\u65F6\u8FD4\u56DE\u7684\u503C\u4EE5\u53CA\u8BF7\u6C42\u7684\u53C2\u6570</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@OnMethod</span><span class="token punctuation">(</span>clazz <span class="token operator">=</span> <span class="token string">&quot;com.taobao.sellerhome.transfer.biz.impl.C2CApplyerServiceImpl&quot;</span><span class="token punctuation">,</span> method<span class="token operator">=</span><span class="token string">&quot;nav&quot;</span><span class="token punctuation">,</span> location <span class="token operator">=</span> <span class="token annotation punctuation">@Location</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">Kind</span><span class="token punctuation">.</span><span class="token constant">RETURN</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">mt</span><span class="token punctuation">(</span><span class="token keyword">long</span> userId<span class="token punctuation">,</span> <span class="token keyword">int</span> current<span class="token punctuation">,</span> <span class="token keyword">int</span> relation<span class="token punctuation">,</span> <span class="token class-name">String</span> check<span class="token punctuation">,</span> <span class="token class-name">String</span> redirectUrl<span class="token punctuation">,</span> <span class="token annotation punctuation">@Return</span> <span class="token class-name">AnyType</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;parameter# userId:&quot;</span> <span class="token operator">+</span> userId <span class="token operator">+</span> <span class="token string">&quot;, current:&quot;</span> <span class="token operator">+</span> current <span class="token operator">+</span> <span class="token string">&quot;, relation:&quot;</span> <span class="token operator">+</span> relation <span class="token operator">+</span> <span class="token string">&quot;, check:&quot;</span> <span class="token operator">+</span> check <span class="token operator">+</span> <span class="token string">&quot;, redirectUrl:&quot;</span> <span class="token operator">+</span> redirectUrl <span class="token operator">+</span> <span class="token string">&quot;, result:&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),y={href:"https://github.com/btraceio/btrace",target:"_blank",rel:"noopener noreferrer"},w=t('<p>\u6CE8\u610F:</p><ul><li>\u7ECF\u8FC7\u89C2\u5BDF\uFF0C1.3.9\u7684release\u8F93\u51FA\u4E0D\u7A33\u5B9A\uFF0C\u8981\u591A\u89E6\u53D1\u51E0\u6B21\u624D\u80FD\u770B\u5230\u6B63\u786E\u7684\u7ED3\u679C</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914Dtrace\u7C7B\u65F6\u8303\u56F4\u4E00\u5B9A\u8981\u63A7\u5236\uFF0C\u5426\u5219\u6781\u6709\u53EF\u80FD\u51FA\u73B0\u8DD1\u6EE1CPU\u5BFC\u81F4\u5E94\u7528\u5361\u6B7B\u7684\u60C5\u51B5</li><li>\u7531\u4E8E\u662F\u5B57\u8282\u7801\u6CE8\u5165\u7684\u539F\u7406\uFF0C\u60F3\u8981\u5E94\u7528\u6062\u590D\u5230\u6B63\u5E38\u60C5\u51B5\uFF0C\u9700\u8981\u91CD\u542F\u5E94\u7528\u3002</li></ul><h3 id="_2-2-greys" tabindex="-1"><a class="header-anchor" href="#_2-2-greys" aria-hidden="true">#</a> 2.2 Greys</h3><p>Greys\u662F@\u675C\u7428\u7684\u5927\u4F5C\u5427\u3002\u8BF4\u51E0\u4E2A\u633A\u68D2\u7684\u529F\u80FD(\u90E8\u5206\u529F\u80FD\u548Cbtrace\u91CD\u5408):</p><ul><li><code>sc -df xxx</code>: \u8F93\u51FA\u5F53\u524D\u7C7B\u7684\u8BE6\u60C5,\u5305\u62EC\u6E90\u7801\u4F4D\u7F6E\u548Cclassloader\u7ED3\u6784</li><li><code>trace class method</code>: \u6253\u5370\u51FA\u5F53\u524D\u65B9\u6CD5\u8C03\u7528\u7684\u8017\u65F6\u60C5\u51B5\uFF0C\u7EC6\u5206\u5230\u6BCF\u4E2A\u65B9\u6CD5, \u5BF9\u6392\u67E5\u65B9\u6CD5\u6027\u80FD\u65F6\u5F88\u6709\u5E2E\u52A9\u3002</li></ul><h3 id="_2-3-arthas" tabindex="-1"><a class="header-anchor" href="#_2-3-arthas" aria-hidden="true">#</a> 2.3 Arthas</h3><blockquote><p>Arthas\u662F\u57FA\u4E8EGreys\u3002</p></blockquote>',7),J={href:"https://pdai.tech/md/java/jvm/java-jvm-agent-arthas.html",target:"_blank",rel:"noopener noreferrer"},M=a("h3",{id:"_2-4-javosize",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-4-javosize","aria-hidden":"true"},"#"),n(" 2.4 javOSize")],-1),z=a("p",null,"\u5C31\u8BF4\u4E00\u4E2A\u529F\u80FD:",-1),L=a("ul",null,[a("li",null,[a("code",null,"classes"),n("\uFF1A\u901A\u8FC7\u4FEE\u6539\u4E86\u5B57\u8282\u7801\uFF0C\u6539\u53D8\u4E86\u7C7B\u7684\u5185\u5BB9\uFF0C\u5373\u65F6\u751F\u6548\u3002 \u6240\u4EE5\u53EF\u4EE5\u505A\u5230\u5FEB\u901F\u7684\u5728\u67D0\u4E2A\u5730\u65B9\u6253\u4E2A\u65E5\u5FD7\u770B\u770B\u8F93\u51FA\uFF0C\u7F3A\u70B9\u662F\u5BF9\u4EE3\u7801\u7684\u4FB5\u5165\u6027\u592A\u5927\u3002\u4F46\u662F\u5982\u679C\u81EA\u5DF1\u77E5\u9053\u81EA\u5DF1\u5728\u5E72\u561B\uFF0C\u7684\u786E\u662F\u4E0D\u9519\u7684\u73A9\u610F\u513F\u3002")])],-1),C=a("p",null,"\u5176\u4ED6\u529F\u80FDGreys\u548Cbtrace\u90FD\u80FD\u5F88\u8F7B\u6613\u505A\u7684\u5230\uFF0C\u4E0D\u8BF4\u4E86\u3002",-1),S={href:"http://www.javosize.com/",target:"_blank",rel:"noopener noreferrer"},O=a("h3",{id:"_2-5-jprofiler",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-5-jprofiler","aria-hidden":"true"},"#"),n(" 2.5 JProfiler")],-1),V=a("p",null,"\u4E4B\u524D\u5224\u65AD\u8BB8\u591A\u95EE\u9898\u8981\u901A\u8FC7JProfiler\uFF0C\u4F46\u662F\u73B0\u5728Greys\u548Cbtrace\u57FA\u672C\u90FD\u80FD\u641E\u5B9A\u4E86\u3002\u518D\u52A0\u4E0A\u51FA\u95EE\u9898\u7684\u57FA\u672C\u4E0A\u90FD\u662F\u751F\u4EA7\u73AF\u5883(\u7F51\u7EDC\u9694\u79BB)\uFF0C\u6240\u4EE5\u57FA\u672C\u4E0D\u600E\u4E48\u4F7F\u7528\u4E86\uFF0C\u4F46\u662F\u8FD8\u662F\u8981\u6807\u8BB0\u4E00\u4E0B\u3002",-1),A={href:"https://www.ej-technologies.com/products/jprofiler/overview.html",target:"_blank",rel:"noopener noreferrer"},I=t(`<h2 id="_3-\u5176\u5B83\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_3-\u5176\u5B83\u5DE5\u5177" aria-hidden="true">#</a> 3. \u5176\u5B83\u5DE5\u5177</h2><h3 id="_3-1-dmesg" tabindex="-1"><a class="header-anchor" href="#_3-1-dmesg" aria-hidden="true">#</a> 3.1 dmesg</h3><p>\u5982\u679C\u53D1\u73B0\u81EA\u5DF1\u7684java\u8FDB\u7A0B\u6084\u65E0\u58F0\u606F\u7684\u6D88\u5931\u4E86\uFF0C\u51E0\u4E4E\u6CA1\u6709\u7559\u4E0B\u4EFB\u4F55\u7EBF\u7D22\uFF0C\u90A3\u4E48dmesg\u4E00\u53D1\uFF0C\u5F88\u6709\u53EF\u80FD\u6709\u4F60\u60F3\u8981\u7684\u3002</p><p>sudo dmesg|grep -i kill|less \u53BB\u627E\u5173\u952E\u5B57oom_killer\u3002\u627E\u5230\u7684\u7ED3\u679C\u7C7B\u4F3C\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">6710782.021013</span><span class="token punctuation">]</span> <span class="token function">java</span> invoked oom-killer: <span class="token assign-left variable">gfp_mask</span><span class="token operator">=</span>0xd0, <span class="token assign-left variable">order</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">oom_adj</span><span class="token operator">=</span><span class="token number">0</span>, <span class="token assign-left variable">oom_scoe_adj</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">[</span><span class="token number">6710782.070639</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>ffffffff8111889<span class="token operator"><span class="token file-descriptor important">8</span>&gt;</span><span class="token punctuation">]</span> ? oom_kill_process+0x68/0x140 
<span class="token punctuation">[</span><span class="token number">6710782.257588</span><span class="token punctuation">]</span> Task <span class="token keyword">in</span> /LXC011175068174 killed as a result of limit of /LXC011175068174 
<span class="token punctuation">[</span><span class="token number">6710784.698347</span><span class="token punctuation">]</span> Memory cgroup out of memory: Kill process <span class="token number">215701</span> <span class="token punctuation">(</span>java<span class="token punctuation">)</span> score <span class="token number">854</span> or sacrifice child 
<span class="token punctuation">[</span><span class="token number">6710784.707978</span><span class="token punctuation">]</span> Killed process <span class="token number">215701</span>, <span class="token environment constant">UID</span> <span class="token number">679</span>, <span class="token punctuation">(</span>java<span class="token punctuation">)</span> total-vm:11017300kB, anon-rss:7152432kB, file-rss:1232kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u8868\u660E\uFF0C\u5BF9\u5E94\u7684java\u8FDB\u7A0B\u88AB\u7CFB\u7EDF\u7684OOM Killer\u7ED9\u5E72\u6389\u4E86\uFF0C\u5F97\u5206\u4E3A854. \u89E3\u91CA\u4E00\u4E0BOOM killer\uFF08Out-Of-Memory killer\uFF09\uFF0C\u8BE5\u673A\u5236\u4F1A\u76D1\u63A7\u673A\u5668\u7684\u5185\u5B58\u8D44\u6E90\u6D88\u8017\u3002\u5F53\u673A\u5668\u5185\u5B58\u8017\u5C3D\u524D\uFF0C\u8BE5\u673A\u5236\u4F1A\u626B\u63CF\u6240\u6709\u7684\u8FDB\u7A0B\uFF08\u6309\u7167\u4E00\u5B9A\u89C4\u5219\u8BA1\u7B97\uFF0C\u5185\u5B58\u5360\u7528\uFF0C\u65F6\u95F4\u7B49\uFF09\uFF0C\u6311\u9009\u51FA\u5F97\u5206\u6700\u9AD8\u7684\u8FDB\u7A0B\uFF0C\u7136\u540E\u6740\u6B7B\uFF0C\u4ECE\u800C\u4FDD\u62A4\u673A\u5668\u3002</p><p>dmesg\u65E5\u5FD7\u65F6\u95F4\u8F6C\u6362\u516C\u5F0F: log\u5B9E\u9645\u65F6\u95F4=\u683C\u6797\u5A01\u6CBB1970-01-01+(\u5F53\u524D\u65F6\u95F4\u79D2\u6570-\u7CFB\u7EDF\u542F\u52A8\u81F3\u4ECA\u7684\u79D2\u6570+dmesg\u6253\u5370\u7684log\u65F6\u95F4)\u79D2\u6570\uFF1A</p><p>date -d &quot;1970-01-01 UTC <code>echo &quot;$(date +%s)-$(cat /proc/uptime|cut -f 1 -d&#39; &#39;)+12288812.926194&quot;|bc</code> seconds&quot; \u5269\u4E0B\u7684\uFF0C\u5C31\u662F\u770B\u770B\u4E3A\u4EC0\u4E48\u5185\u5B58\u8FD9\u4E48\u5927\uFF0C\u89E6\u53D1\u4E86OOM-Killer\u4E86\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,9),T={href:"https://pdai.tech/md/java/jvm/java-jvm-debug-tools-list.html",target:"_blank",rel:"noopener noreferrer"},B=a("strong",null,"\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4B\u5DE5\u5177\u5355",-1);function P(D,N){const s=i("ExternalLinkIcon");return p(),l("div",null,[r,a("p",null,[n("\u66F4\u591A\u8BF7\u53C2\u8003 "),a("a",u,[n("jps - Java Virtual Machine Process Status Tool"),e(s)])]),d,a("p",null,[n("\u66F4\u591A\u8BF7\u53C2\u8003: "),a("a",v,[n("jvm \u6027\u80FD\u8C03\u4F18\u5DE5\u5177\u4E4B jstack"),e(s)])]),m,a("p",null,[n("\u66F4\u591A\u8BF7\u53C2\u8003\uFF1A"),a("a",k,[n("jvm \u6027\u80FD\u8C03\u4F18\u5DE5\u5177\u4E4B jinfo"),e(s)])]),b,a("p",null,[n("\u66F4\u591A\u8BF7\u53C2\u8003\uFF1A"),a("a",h,[n("jvm \u6027\u80FD\u8C03\u4F18\u5DE5\u5177\u4E4B jmap"),e(s)]),n(" \u548C "),a("a",g,[n("jmap - Memory Map"),e(s)])]),j,a("p",null,[n("\u5177\u4F53\u53C2\u6570\u53EF\u89C1oracle\u5B98\u65B9\u8BF4\u660E"),a("a",f,[n("jdb - The Java Debugger"),e(s)])]),_,a("p",null,[n("\u66F4\u8BE6\u7EC6\u7684\u53EF\u89C1R\u5927\u6B64\u8D34 "),a("a",q,[n("http://rednaxelafx.iteye.com/blog/1847971"),e(s)])]),x,a("p",null,[n("btrace \u5177\u4F53\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\uFF1A"),a("a",y,[n("https://github.com/btraceio/btrace"),e(s)])]),w,a("p",null,[n("\u5177\u4F53\u8BF7\u53C2\u8003\uFF1A"),a("a",J,[n("\u8C03\u8BD5\u6392\u9519 - Java\u5E94\u7528\u5728\u7EBF\u8C03\u8BD5Arthas"),e(s)])]),M,z,L,C,a("p",null,[n("\u66F4\u591A\u8BF7\u53C2\u8003\uFF1A"),a("a",S,[n("\u5B98\u7F51"),e(s)])]),O,V,a("p",null,[n("\u66F4\u591A\u8BF7\u53C2\u8003\uFF1A"),a("a",A,[n("\u5B98\u7F51 (opens new window)"),e(s)])]),I,a("p",null,[a("a",T,[B,e(s)])])])}const K=o(c,[["render",P],["__file","java-jvm-debug-tools-list.html.vue"]]);export{K as default};
