import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as o,f as t}from"./app.19c6482c.js";const r={},l=t('<h1 id="\u7EBF\u7A0B\u6C60" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60</h1><h2 id="_1-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7EBF\u7A0B\u6C60" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7EBF\u7A0B\u6C60</h2><ul><li><strong>\u964D\u4F4E\u8D44\u6E90\u6D88\u8017</strong>\uFF1A\u901A\u8FC7\u91CD\u590D\u5229\u7528\u5DF2\u521B\u5EFA\u7684\u7EBF\u7A0B\u964D\u4F4E\u7EBF\u7A0B\u521B\u5EFA\u548C\u9500\u6BC1\u9020\u6210\u7684\u6D88\u8017\u3002</li><li><strong>\u63D0\u9AD8\u54CD\u5E94\u901F\u5EA6</strong>\uFF1A\u5F53\u4EFB\u52A1\u5230\u8FBE\u65F6\uFF0C\u4EFB\u52A1\u53EF\u4EE5\u4E0D\u9700\u8981\u7684\u7B49\u5230\u7EBF\u7A0B\u521B\u5EFA\u5C31\u80FD\u7ACB\u5373\u6267\u884C\u3002</li><li><strong>\u63D0\u9AD8\u7EBF\u7A0B\u7684\u53EF\u7BA1\u7406\u884C\u6027</strong>\uFF1A\u7EBF\u7A0B\u662F\u7A00\u7F3A\u8D44\u6E90\uFF0C\u5982\u679C\u65E0\u9650\u5236\u7684\u521B\u5EFA\uFF0C\u4E0D\u4EC5\u4F1A\u6D88\u8017\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u8FD8\u4F1A\u964D\u4F4E\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\uFF0C\u4F7F\u7528\u7EBF\u7A0B\u6C60\u53EF\u4EE5\u8FDB\u884C\u7EDF\u4E00\u7684\u5206\u914D\uFF0C\u8C03\u4F18\u548C\u76D1\u63A7\u3002</li></ul><h2 id="_2-\u5B9E\u73B0runnable\u63A5\u53E3\u548Ccallable\u63A5\u53E3\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0runnable\u63A5\u53E3\u548Ccallable\u63A5\u53E3\u7684\u533A\u522B" aria-hidden="true">#</a> 2. \u5B9E\u73B0Runnable\u63A5\u53E3\u548CCallable\u63A5\u53E3\u7684\u533A\u522B</h2><p>\u4E24\u8005\u7684\u533A\u522B\u5728\u4E8E Runnable \u63A5\u53E3\u4E0D\u4F1A\u8FD4\u56DE\u7ED3\u679C\u4F46\u662F Callable \u63A5\u53E3\u53EF\u4EE5\u8FD4\u56DE\u7ED3\u679C\u3002</p><blockquote><p><strong>\u5907\u6CE8\uFF1A</strong> \u5DE5\u5177\u7C7B<code>Executors</code>\u53EF\u4EE5\u5B9E\u73B0<code>Runnable</code>\u5BF9\u8C61\u548C<code>Callable</code>\u5BF9\u8C61\u4E4B\u95F4\u7684\u76F8\u4E92\u8F6C\u6362\u3002\uFF08<code>Executors.callable\uFF08Runnable task\uFF09</code>\u6216<code>Executors.callable\uFF08Runnable task\uFF0CObject resule\uFF09</code>\uFF09</p></blockquote><h2 id="_3-\u6267\u884Cexecute-\u65B9\u6CD5\u548Csubmit-\u65B9\u6CD5\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462" tabindex="-1"><a class="header-anchor" href="#_3-\u6267\u884Cexecute-\u65B9\u6CD5\u548Csubmit-\u65B9\u6CD5\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462" aria-hidden="true">#</a> 3. \u6267\u884Cexecute()\u65B9\u6CD5\u548Csubmit()\u65B9\u6CD5\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462\uFF1F</h2><p>1)<strong>execute() \u65B9\u6CD5\u7528\u4E8E\u63D0\u4EA4\u4E0D\u9700\u8981\u8FD4\u56DE\u503C\u7684\u4EFB\u52A1\uFF0C\u6240\u4EE5\u65E0\u6CD5\u5224\u65AD\u4EFB\u52A1\u662F\u5426\u88AB\u7EBF\u7A0B\u6C60\u6267\u884C\u6210\u529F\u4E0E\u5426\uFF1B</strong></p><p>2)<strong>submit() \u65B9\u6CD5\u7528\u4E8E\u63D0\u4EA4\u9700\u8981\u8FD4\u56DE\u503C\u7684\u4EFB\u52A1\u3002\u7EBF\u7A0B\u6C60\u4F1A\u8FD4\u56DE\u4E00\u4E2AFuture\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u901A\u8FC7\u8FD9\u4E2AFuture\u5BF9\u8C61\u53EF\u4EE5\u5224\u65AD\u4EFB\u52A1\u662F\u5426\u6267\u884C\u6210\u529F</strong>\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7future\u7684get()\u65B9\u6CD5\u6765\u83B7\u53D6\u8FD4\u56DE\u503C\uFF0Cget()\u65B9\u6CD5\u4F1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u76F4\u5230\u4EFB\u52A1\u5B8C\u6210\uFF0C\u800C\u4F7F\u7528 <code>get\uFF08long timeout\uFF0CTimeUnit unit\uFF09</code>\u65B9\u6CD5\u5219\u4F1A\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u4E00\u6BB5\u65F6\u95F4\u540E\u7ACB\u5373\u8FD4\u56DE\uFF0C\u8FD9\u65F6\u5019\u6709\u53EF\u80FD\u4EFB\u52A1\u6CA1\u6709\u6267\u884C\u5B8C\u3002</p><h2 id="_4-\u5982\u4F55\u521B\u5EFA\u7EBF\u7A0B\u6C60" tabindex="-1"><a class="header-anchor" href="#_4-\u5982\u4F55\u521B\u5EFA\u7EBF\u7A0B\u6C60" aria-hidden="true">#</a> 4. \u5982\u4F55\u521B\u5EFA\u7EBF\u7A0B\u6C60</h2><p>\u300A\u963F\u91CC\u5DF4\u5DF4Java\u5F00\u53D1\u624B\u518C\u300B\u4E2D\u5F3A\u5236\u7EBF\u7A0B\u6C60\u4E0D\u5141\u8BB8\u4F7F\u7528 Executors \u53BB\u521B\u5EFA\uFF0C\u800C\u662F\u901A\u8FC7 ThreadPoolExecutor \u7684\u65B9\u5F0F\uFF0C\u8FD9\u6837\u7684\u5904\u7406\u65B9\u5F0F\u8BA9\u5199\u7684\u540C\u5B66\u66F4\u52A0\u660E\u786E\u7EBF\u7A0B\u6C60\u7684\u8FD0\u884C\u89C4\u5219\uFF0C\u89C4\u907F\u8D44\u6E90\u8017\u5C3D\u7684\u98CE\u9669</p><blockquote><p>Executors \u8FD4\u56DE\u7EBF\u7A0B\u6C60\u5BF9\u8C61\u7684\u5F0A\u7AEF\u5982\u4E0B\uFF1A</p><ul><li><strong>FixedThreadPool \u548C SingleThreadExecutor</strong> \uFF1A \u5141\u8BB8<strong>\u8BF7\u6C42\u7684\u961F\u5217</strong>\u957F\u5EA6\u4E3A Integer.MAX_VALUE \uFF0C\u53EF\u80FD\u5806\u79EF\u5927\u91CF\u7684\u8BF7\u6C42\uFF0C\u4ECE\u800C\u5BFC\u81F4OOM\u3002 <ul><li>\u8BF7\u6C42\u961F\u5217\uFF08LinkedBlockingQueue\uFF09\u4E0D\u662F\u6307\u9ED8\u8BA4\u662F Integer.MAX_VALUE</li></ul></li><li><strong>CachedThreadPool \u548C ScheduledThreadPool</strong> \uFF1A \u5141\u8BB8\u521B\u5EFA\u7684\u7EBF\u7A0B\u6570\u91CF\u4E3A Integer.MAX_VALUE \uFF0C\u53EF\u80FD\u4F1A\u521B\u5EFA\u5927\u91CF\u7EBF\u7A0B\uFF0C\u4ECE\u800C\u5BFC\u81F4OOM\u3002 <ul><li>\u4ED6\u4EEC\u9ED8\u8BA4\u6700\u5927\u7EBF\u7A0B\u90FD\u662FMAX</li></ul></li></ul></blockquote><p><strong>\u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u5B9E\u73B0</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190915224722981.png" alt="image-20190915224722981"></p><p><strong>\u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7Executor \u6846\u67B6\u7684\u5DE5\u5177\u7C7BExecutors\u6765\u5B9E\u73B0</strong> \u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E09\u79CD\u7C7B\u578B\u7684ThreadPoolExecutor\uFF1A</p><ul><li><strong>FixedThreadPool</strong> \uFF1A \u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u56FA\u5B9A\u7EBF\u7A0B\u6570\u91CF\u7684\u7EBF\u7A0B\u6C60\u3002\u8BE5\u7EBF\u7A0B\u6C60\u4E2D\u7684\u7EBF\u7A0B\u6570\u91CF\u59CB\u7EC8\u4E0D\u53D8\u3002\u5F53\u6709\u4E00\u4E2A\u65B0\u7684\u4EFB\u52A1\u63D0\u4EA4\u65F6\uFF0C\u7EBF\u7A0B\u6C60\u4E2D\u82E5\u6709\u7A7A\u95F2\u7EBF\u7A0B\uFF0C\u5219\u7ACB\u5373\u6267\u884C\u3002\u82E5\u6CA1\u6709\uFF0C\u5219\u65B0\u7684\u4EFB\u52A1\u4F1A\u88AB\u6682\u5B58\u5728\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u5F85\u6709\u7EBF\u7A0B\u7A7A\u95F2\u65F6\uFF0C\u4FBF\u5904\u7406\u5728\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u3002</li><li><strong>SingleThreadExecutor\uFF1A</strong> \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u7684\u7EBF\u7A0B\u6C60\u3002\u82E5\u591A\u4F59\u4E00\u4E2A\u4EFB\u52A1\u88AB\u63D0\u4EA4\u5230\u8BE5\u7EBF\u7A0B\u6C60\uFF0C\u4EFB\u52A1\u4F1A\u88AB\u4FDD\u5B58\u5728\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u5F85\u7EBF\u7A0B\u7A7A\u95F2\uFF0C\u6309\u5148\u5165\u5148\u51FA\u7684\u987A\u5E8F\u6267\u884C\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u3002</li><li><strong>CachedThreadPool\uFF1A</strong> \u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u53EF\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u7EBF\u7A0B\u6570\u91CF\u7684\u7EBF\u7A0B\u6C60\u3002\u7EBF\u7A0B\u6C60\u7684\u7EBF\u7A0B\u6570\u91CF\u4E0D\u786E\u5B9A\uFF0C\u4F46\u82E5\u6709\u7A7A\u95F2\u7EBF\u7A0B\u53EF\u4EE5\u590D\u7528\uFF0C\u5219\u4F1A\u4F18\u5148\u4F7F\u7528\u53EF\u590D\u7528\u7684\u7EBF\u7A0B\u3002\u82E5\u6240\u6709\u7EBF\u7A0B\u5747\u5728\u5DE5\u4F5C\uFF0C\u53C8\u6709\u65B0\u7684\u4EFB\u52A1\u63D0\u4EA4\uFF0C\u5219\u4F1A\u521B\u5EFA\u65B0\u7684\u7EBF\u7A0B\u5904\u7406\u4EFB\u52A1\u3002\u6240\u6709\u7EBF\u7A0B\u5728\u5F53\u524D\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u5C06\u8FD4\u56DE\u7EBF\u7A0B\u6C60\u8FDB\u884C\u590D\u7528\u3002</li></ul><p>\u5BF9\u5E94Executors\u5DE5\u5177\u7C7B\u4E2D\u7684\u65B9\u6CD5\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20190915224747235.png" alt="image-20190915224747235"></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',19),n=[l];function i(c,s){return a(),o("div",null,n)}const h=e(r,[["render",i],["__file","java-thread-y-threadpool.html.vue"]]);export{h as default};
