import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,f as a}from"./app.7751c0ab.js";const o={},l=a(`<h1 id="jvm-\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#jvm-\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536" aria-hidden="true">#</a> JVM \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536</h1><h2 id="_1-jvm-\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#_1-jvm-\u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536" aria-hidden="true">#</a> 1. JVM \u5185\u5B58\u5206\u914D\u4E0E\u56DE\u6536</h2><p>Java \u7684\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u4E3B\u8981\u662F\u9488\u5BF9\u8C61\u5185\u5B58\u7684\u56DE\u6536\u548C\u5BF9\u8C61\u7684\u5185\u5B58\u7684\u5206\u914D\u3002\u540C\u65F6\uFF0Cjava \u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u6700\u6838\u5FC3\u7684\u529F\u80FD\u662F <strong>\u5806</strong>\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\u5206\u914D\u4E0E\u56DE\u6536</p><p>Java \u5806\u662F\u5783\u573E\u6536\u96C6\u5668\u7BA1\u7406\u7684\u4E3B\u8981\u533A\u57DF\uFF0C\u56E0\u6B64\u4E5F\u88AB\u79F0\u4F5C<strong>GC \u5806\uFF08Garbage Collected Heap\uFF09</strong>.\u4ECE\u5783\u573E\u56DE\u6536\u7684\u89D2\u5EA6\uFF0C\u7531\u4E8E\u73B0\u5728\u6536\u96C6\u5668\u57FA\u672C\u90FD\u91C7\u7528\u5206\u4EE3\u5783\u573E\u6536\u96C6\u7B97\u6CD5\uFF0C\u6240\u4EE5 Java \u5806\u8FD8\u53EF\u4EE5\u7EC6\u5206\u4E3A\uFF1A\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\uFF1A\u518D\u7EC6\u81F4\u4E00\u70B9\u6709\uFF1AEden \u7A7A\u95F4\u3001From Survivor\u3001To Survivor \u7A7A\u95F4\u7B49\u3002<strong>\u8FDB\u4E00\u6B65\u5212\u5206\u7684\u76EE\u7684\u662F\u66F4\u597D\u5730\u56DE\u6536\u5185\u5B58\uFF0C\u6216\u8005\u66F4\u5FEB\u5730\u5206\u914D\u5185\u5B58\u3002</strong></p><p><strong>\u5806\u7A7A\u95F4\u7684\u57FA\u672C\u7ED3\u6784\uFF1A</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190924234527212.png" alt="image-20190924234527212"></p><p>\u4E0A\u56FE\u6240\u793A\u7684 eden\u533A\uFF0Cs0(&quot;From&quot;) \u533A\u3001s1(&quot;To&quot;) \u533A\u90FD\u5C5E\u4E8E\u65B0\u751F\u4EE3\uFF0Ctentired \u533A\u5C5E\u4E8E\u8001\u5E74\u4EE3\u3002\u5927\u90E8\u5206\u60C5\u51B5\uFF0C</p><ul><li><p>\u5BF9\u8C61\u90FD\u4F1A\u9996\u5148\u5728 Eden \u533A\u57DF\u5206\u914D</p></li><li><p>\u5728\u4E00\u6B21\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536\u540E\uFF0C\u5982\u679C\u5BF9\u8C61\u8FD8\u5B58\u6D3B\uFF0C\u5219\u4F1A\u8FDB\u5165 s1(&quot;To&quot;)\uFF0C\u5E76\u4E14\u5BF9\u8C61\u7684\u5E74\u9F84\u8FD8\u4F1A\u52A0 1(Eden \u533A-&gt;Survivor \u533A\u540E\u5BF9\u8C61\u7684\u521D\u59CB\u5E74\u9F84\u53D8\u4E3A 1)</p></li><li><p>\u5F53\u5B83\u7684\u5E74\u9F84\u589E\u52A0\u5230\u4E00\u5B9A\u7A0B\u5EA6\uFF08\u9ED8\u8BA4\u4E3A 15 \u5C81\uFF09\uFF0C\u5C31\u4F1A\u88AB\u664B\u5347\u5230\u8001\u5E74\u4EE3\u4E2D</p><p>\u5BF9\u8C61\u664B\u5347\u5230\u8001\u5E74\u4EE3\u7684\u5E74\u9F84\u9608\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570 <code>-XX:MaxTenuringThreshold</code> \u6765\u8BBE\u7F6E</p></li><li><p>\u7ECF\u8FC7\u8FD9\u6B21GC\u540E\uFF0CEden\u533A\u548C&quot;From&quot;\u533A\u5DF2\u7ECF\u88AB\u6E05\u7A7A\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C&quot;From&quot;\u548C&quot;To&quot;\u4F1A\u4EA4\u6362\u4ED6\u4EEC\u7684\u89D2\u8272\uFF0C\u4E5F\u5C31\u662F\u65B0\u7684&quot;To&quot;\u5C31\u662F\u4E0A\u6B21GC\u524D\u7684\u201CFrom\u201D\uFF0C\u65B0\u7684&quot;From&quot;\u5C31\u662F\u4E0A\u6B21GC\u524D\u7684&quot;To&quot;\u3002\u4E0D\u7BA1\u600E\u6837\uFF0C\u90FD\u4F1A<strong>\u4FDD\u8BC1\u540D\u4E3ATo\u7684Survivor\u533A\u57DF\u662F\u7A7A\u7684</strong></p></li><li><p>Minor GC\u4F1A\u4E00\u76F4\u91CD\u590D\u8FD9\u6837\u7684\u8FC7\u7A0B\uFF0C\u76F4\u5230\u201CTo\u201D\u533A\u88AB\u586B\u6EE1\uFF0C&quot;To&quot;\u533A\u88AB\u586B\u6EE1\u4E4B\u540E\uFF0C\u4F1A\u5C06\u6240\u6709\u5BF9\u8C61\u79FB\u52A8\u5230\u5E74\u8001\u4EE3\u4E2D\u3002</p></li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190924235155859.png" alt="image-20190924235155859"></p><h3 id="_1-1-\u5BF9\u8C61\u4F18\u5148\u5728eden-\u533A\u5206\u914D" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5BF9\u8C61\u4F18\u5148\u5728eden-\u533A\u5206\u914D" aria-hidden="true">#</a> 1.1 \u5BF9\u8C61\u4F18\u5148\u5728eden \u533A\u5206\u914D</h3><p>\u76EE\u524D\u4E3B\u6D41\u7684\u5783\u573E\u6536\u96C6\u5668\u90FD\u4F1A\u91C7\u7528\u5206\u4EE3\u56DE\u6536\u7B97\u6CD5\uFF0C\u56E0\u6B64\u9700\u8981\u5C06\u5806\u5185\u5B58\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u6839\u636E\u5404\u4E2A\u5E74\u4EE3\u7684\u7279\u70B9\u9009\u62E9\u5408\u9002\u7684\u5783\u573E\u6536\u96C6\u7B97\u6CD5\u3002</p><p>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u8C61\u5728\u65B0\u751F\u4EE3\u4E2D eden \u533A\u5206\u914D\u3002\u5F53 eden \u533A\u6CA1\u6709\u8DB3\u591F\u7A7A\u95F4\u8FDB\u884C\u5206\u914D\u65F6\uFF0C\u865A\u62DF\u673A\u5C06\u53D1\u8D77\u4E00\u6B21 Minor GC.\u4E0B\u9762\u6211\u4EEC\u6765\u8FDB\u884C\u5B9E\u9645\u6D4B\u8BD5\u4EE5\u4E0B\u3002</p><p>\u5728\u6D4B\u8BD5\u4E4B\u524D\u6211\u4EEC\u5148\u6765\u770B\u770B <strong>Minor GC \u548C Full GC \u6709\u4EC0\u4E48\u4E0D\u540C\u5462\uFF1F</strong></p><ul><li><strong>\u65B0\u751F\u4EE3 GC\uFF08Minor GC\uFF09</strong>:\u6307\u53D1\u751F\u65B0\u751F\u4EE3\u7684\u7684\u5783\u573E\u6536\u96C6\u52A8\u4F5C\uFF0CMinor GC \u975E\u5E38\u9891\u7E41\uFF0C\u56DE\u6536\u901F\u5EA6\u4E00\u822C\u4E5F\u6BD4\u8F83\u5FEB\u3002</li><li><strong>\u8001\u5E74\u4EE3 GC\uFF08Major GC/Full GC\uFF09</strong>:\u6307\u53D1\u751F\u5728\u8001\u5E74\u4EE3\u7684 GC\uFF0C\u51FA\u73B0\u4E86 Major GC \u7ECF\u5E38\u4F1A\u4F34\u968F\u81F3\u5C11\u4E00\u6B21\u7684 Minor GC\uFF08\u5E76\u975E\u7EDD\u5BF9\uFF09\uFF0CMajor GC \u7684\u901F\u5EA6\u4E00\u822C\u4F1A\u6BD4 Minor GC \u7684\u6162 10 \u500D\u4EE5\u4E0A\u3002</li></ul><p><strong>\u6D4B\u8BD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class GCTest {

    public static void main(String[] args) {
        byte[] allocation1, allocation2;
        allocation1 = new byte[30900*1024];
        //allocation2 = new byte[900*1024];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u7684\u53C2\u6570\uFF1A<code>-XX:+PrintGCDetails</code></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190924235926247.png" alt="image-20190924235926247"></p><p>\u8FD0\u884C\u7ED3\u679C\uFF08JDK 1.8\uFF09</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190925000240877.png" alt="image-20190925000240877"></p><p>\u4ECE\u4E0A\u56FE\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA eden \u533A\u5185\u5B58\u51E0\u4E4E\u5DF2\u7ECF\u88AB\u5206\u914D\u5B8C\u5168\uFF08\u5373\u4F7F\u7A0B\u5E8F\u4EC0\u4E48\u4E5F\u4E0D\u505A\uFF0C\u65B0\u751F\u4EE3\u4E5F\u4F1A\u4F7F\u7528 2000 \u591A k \u5185\u5B58\uFF09\u3002\u5047\u5982\u6211\u4EEC\u518D\u4E3A allocation2 \u5206\u914D\u5185\u5B58\u4F1A\u51FA\u73B0\u4EC0\u4E48\u60C5\u51B5\u5462\uFF1F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>allocation2 = new byte[900*1024];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190925000448570.png" alt="image-20190925000448570"></p><p><strong>\u7B80\u5355\u89E3\u91CA\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF1A</strong> \u56E0\u4E3A\u7ED9 allocation2 \u5206\u914D\u5185\u5B58\u7684\u65F6\u5019 eden \u533A\u5185\u5B58\u51E0\u4E4E\u5DF2\u7ECF\u88AB\u5206\u914D\u5B8C\u4E86\uFF0C\u6211\u4EEC\u521A\u521A\u8BB2\u4E86\u5F53 Eden \u533A\u6CA1\u6709\u8DB3\u591F\u7A7A\u95F4\u8FDB\u884C\u5206\u914D\u65F6\uFF0C\u865A\u62DF\u673A\u5C06\u53D1\u8D77\u4E00\u6B21 Minor GC.GC \u671F\u95F4\u865A\u62DF\u673A\u53C8\u53D1\u73B0 allocation1 \u65E0\u6CD5\u5B58\u5165 Survivor \u7A7A\u95F4\uFF0C\u6240\u4EE5\u53EA\u597D\u901A\u8FC7 <strong>\u5206\u914D\u62C5\u4FDD\u673A\u5236</strong> \u628A\u65B0\u751F\u4EE3\u7684\u5BF9\u8C61\u63D0\u524D\u8F6C\u79FB\u5230\u8001\u5E74\u4EE3\u4E2D\u53BB\uFF0C\u8001\u5E74\u4EE3\u4E0A\u7684\u7A7A\u95F4\u8DB3\u591F\u5B58\u653E allocation1\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u51FA\u73B0 Full GC\u3002\u6267\u884C Minor GC \u540E\uFF0C\u540E\u9762\u5206\u914D\u7684\u5BF9\u8C61\u5982\u679C\u80FD\u591F\u5B58\u5728 eden \u533A\u7684\u8BDD\uFF0C\u8FD8\u662F\u4F1A\u5728 eden \u533A\u5206\u914D\u5185\u5B58\u3002\u53EF\u4EE5\u6267\u884C\u5982\u4E0B\u4EE3\u7801\u9A8C\u8BC1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class GCTest {

	public static void main(String[] args) {
		byte[] allocation1, allocation2,allocation3,allocation4,allocation5;
		allocation1 = new byte[32000*1024];
		allocation2 = new byte[1000*1024];
		allocation3 = new byte[1000*1024];
		allocation4 = new byte[1000*1024];
		allocation5 = new byte[1000*1024];
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3" aria-hidden="true">#</a> 1.2 \u5927\u5BF9\u8C61\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3</h3><p>\u5927\u5BF9\u8C61\u5C31\u662F\u9700\u8981\u5927\u91CF\u8FDE\u7EED\u5185\u5B58\u7A7A\u95F4\u7684\u5BF9\u8C61\uFF08\u6BD4\u5982\uFF1A\u5B57\u7B26\u4E32\u3001\u6570\u7EC4\uFF09\u3002</p><p><strong>\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u6837\u5462\uFF1F</strong></p><p>\u4E3A\u4E86\u907F\u514D\u4E3A\u5927\u5BF9\u8C61\u5206\u914D\u5185\u5B58\u65F6\u7531\u4E8E\u5206\u914D\u62C5\u4FDD\u673A\u5236\u5E26\u6765\u7684\u590D\u5236\u800C\u964D\u4F4E\u6548\u7387</p><h3 id="_1-3-\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3" tabindex="-1"><a class="header-anchor" href="#_1-3-\u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3" aria-hidden="true">#</a> 1.3 \u957F\u671F\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C06\u8FDB\u5165\u8001\u5E74\u4EE3</h3><p>\u65E2\u7136\u865A\u62DF\u673A\u91C7\u7528\u4E86\u5206\u4EE3\u6536\u96C6\u7684\u601D\u60F3\u6765\u7BA1\u7406\u5185\u5B58\uFF0C\u90A3\u4E48\u5185\u5B58\u56DE\u6536\u65F6\u5C31\u5FC5\u987B\u80FD\u8BC6\u522B\u54EA\u4E9B\u5BF9\u8C61\u5E94\u653E\u5728\u65B0\u751F\u4EE3\uFF0C\u54EA\u4E9B\u5BF9\u8C61\u5E94\u653E\u5728\u8001\u5E74\u4EE3\u4E2D\u3002\u4E3A\u4E86\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u865A\u62DF\u673A\u7ED9\u6BCF\u4E2A\u5BF9\u8C61\u4E00\u4E2A\u5BF9\u8C61\u5E74\u9F84\uFF08Age\uFF09\u8BA1\u6570\u5668\u3002</p><ul><li><p>\u5982\u679C\u5BF9\u8C61\u5728 Eden \u51FA\u751F\u5E76\u7ECF\u8FC7\u7B2C\u4E00\u6B21 Minor GC \u540E\u4ECD\u7136\u80FD\u591F\u5B58\u6D3B\uFF0C\u5E76\u4E14\u80FD\u88ABSurvivor\u5BB9\u7EB3\u7684\u8BDD\uFF0C\u5C06\u88AB\u79FB\u52A8\u5230Survivor\u7A7A\u95F4\u4E2D\uFF0C\u5E76\u5C06\u5BF9\u8C61\u5E74\u9F84\u8BBE\u4E3A1\u3002</p></li><li><p>\u5BF9\u8C61\u5728Survivor\u4E2D\u6CA1\u7ECF\u8FC7\u4E00\u6B21MinorGC \u5E74\u9F84\u5C31\u589E\u52A01\u5C81</p></li><li><p>\u5F53\u5B83\u7684\u5E74\u9F84\u589E\u52A0\u5230\u4E00\u5B9A\u7A0B\u5EA6\uFF08\u9ED8\u8BA4\u4E3A15\u5C81\uFF09\uFF0C\u5C31\u4F1A\u88AB\u664B\u5347\u5230\u8001\u5E74\u4EE3\u4E2D</p><p>\u5BF9\u8C61\u664B\u5347\u5230\u8001\u5E74\u4EE3\u7684\u5E74\u9F84\u9608\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570 <code>-XX:MaxTenuringThreshold</code> \u6765\u8BBE\u7F6E\u3002</p></li></ul><h3 id="_1-4-\u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A" tabindex="-1"><a class="header-anchor" href="#_1-4-\u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A" aria-hidden="true">#</a> 1.4 \u52A8\u6001\u5BF9\u8C61\u5E74\u9F84\u5224\u5B9A</h3><p>\u4E3A\u4E86\u66F4\u597D\u7684\u9002\u5E94\u4E0D\u540C\u7A0B\u5E8F\u7684\u5185\u5B58\u60C5\u51B5\uFF0C\u865A\u62DF\u673A\u4E0D\u662F\u6C38\u8FDC\u8981\u6C42\u5BF9\u8C61\u5E74\u9F84\u5FC5\u987B\u8FBE\u5230\u4E86\u67D0\u4E2A\u503C\u624D\u80FD\u8FDB\u5165\u8001\u5E74\u4EE3\uFF0C\u5982\u679C Survivor \u7A7A\u95F4\u4E2D\u76F8\u540C\u5E74\u9F84\u6240\u6709\u5BF9\u8C61\u5927\u5C0F\u7684\u603B\u548C\u5927\u4E8E Survivor \u7A7A\u95F4\u7684\u4E00\u534A\uFF0C\u5E74\u9F84\u5927\u4E8E\u6216\u7B49\u4E8E\u8BE5\u5E74\u9F84\u7684\u5BF9\u8C61\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FDB\u5165\u8001\u5E74\u4EE3\uFF0C\u65E0\u9700\u8FBE\u5230\u8981\u6C42\u7684\u5E74\u9F84\u3002</p>`,34),t=[l];function r(s,d){return i(),n("div",null,t)}const p=e(o,[["render",r],["__file","java-jvm-classload1.html.vue"]]);export{p as default};
