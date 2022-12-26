import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as p,f as o}from"./app.da5f94a0.js";const a={},r=o('<h1 id="springaop" tabindex="-1"><a class="header-anchor" href="#springaop" aria-hidden="true">#</a> SpringAOP</h1><h2 id="_1-\u4EC0\u4E48\u662Faop" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Faop" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662FAOP</h2><p>AOP\u65E2\u9762\u5411\u5207\u9762\u7F16\u7A0B\uFF0C\u5B98\u65B9\u5B9A\u4E49</p><blockquote><p>\u9762\u5411\u5207\u9762\u2014\u2014 Spring\u63D0\u4F9B\u4E86\u9762\u5411\u5207\u9762\u7F16\u7A0B\u7684\u4E30\u5BCC\u652F\u6301\uFF0C\u5141\u8BB8\u901A\u8FC7\u5206\u79BB\u5E94\u7528\u7684\u4E1A\u52A1\u903B\u8F91\u4E0E\u7CFB\u7EDF\u7EA7\u670D\u52A1\uFF08\u4F8B\u5982\u5BA1\u8BA1\uFF08auditing\uFF09\u548C\u4E8B\u52A1\uFF08transaction\uFF09\u7BA1\u7406\uFF09\u8FDB\u884C\u5185\u805A\u6027\u7684\u5F00\u53D1\u3002\u5E94\u7528\u5BF9\u8C61\u53EA\u5B9E\u73B0\u5B83\u4EEC\u5E94\u8BE5\u505A\u7684\u2014\u2014\u5B8C\u6210\u4E1A\u52A1\u903B\u8F91\u2014\u2014\u4EC5\u6B64\u800C\u5DF2\u3002\u5B83\u4EEC\u5E76\u4E0D\u8D1F\u8D23\uFF08\u751A\u81F3\u662F\u610F\u8BC6\uFF09\u5176\u5B83\u7684\u7CFB\u7EDF\u7EA7\u5173\u6CE8\u70B9\uFF0C\u4F8B\u5982\u65E5\u5FD7\u6216\u4E8B\u52A1\u652F\u6301\u3002</p></blockquote><p>AOP\u53EF\u4EE5\u5206\u79BB\u7CFB\u7EDF\u7684\u4E1A\u52A1\u903B\u8F91\u548C\u7CFB\u7EDF\u670D\u52A1(\u65E5\u5FD7\uFF0C\u5B89\u5168\u7B49)\uFF0C\u8FD9\u4E2A\u529F\u80FD\u6211\u60F3\u662F\u4E0D\u96BE\u660E\u767D\uFF08\u539F\u7406\u662F\u4F7F\u7528\u4E86<code>\u4EE3\u7406\u6A21\u5F0F</code>\uFF09\uFF0C\u4F46\u5173\u952E\u662F\u4E3A\u4EC0\u4E48\u8981\u5C06\u8FD9\u4E24\u79CD\u8FDB\u884C\u5206\u79BB\u5462\uFF1F\u6216\u8005\u8BF4\u8FD9\u6837\u505A\u6709\u4EC0\u4E48\u597D\u5904\uFF1F</p><h3 id="_1-1-\u9762\u5411\u5207\u9762\u7684\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_1-1-\u9762\u5411\u5207\u9762\u7684\u597D\u5904" aria-hidden="true">#</a> 1.1 \u9762\u5411\u5207\u9762\u7684\u597D\u5904</h3><p>\u5728\u65E5\u5E38\u7684\u8F6F\u4EF6\u5F00\u53D1\u4E2D\uFF0C\u62FF\u65E5\u5FD7\u6765\u8BF4\uFF0C\u4E00\u4E2A\u7CFB\u7EDF\u8F6F\u4EF6\u7684\u5F00\u53D1\u90FD\u662F\u5FC5\u987B\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55\u7684\uFF0C\u4E0D\u7136\u4E07\u4E00\u7CFB\u7EDF\u51FA\u73B0\u4EC0\u4E48bug\uFF0C\u4F60\u90FD\u4E0D\u77E5\u9053\u662F\u54EA\u91CC\u51FA\u4E86\u95EE\u9898\u3002\u4E3E\u4E2A\u5C0F\u6817\u5B50\uFF0C\u5F53\u4F60\u5F00\u53D1\u4E00\u4E2A\u767B\u9646\u529F\u80FD\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u7528\u6237\u767B\u9646\u524D\u540E\u8FDB\u884C\u6743\u9650\u6821\u9A8C\u5E76\u5C06\u6821\u9A8C\u4FE1\u606F\uFF08<code>\u7528\u6237\u540D</code>,<code>\u5BC6\u7801</code>,<code>\u8BF7\u6C42\u767B\u9646\u65F6\u95F4\uFF0Cip\u5730\u5740</code>\u7B49\uFF09\u8BB0\u5F55\u5728\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF0C\u5F53\u7528\u6237\u767B\u5F55\u8FDB\u6765\u4E4B\u540E\uFF0C\u5F53\u4ED6\u8BBF\u95EE\u67D0\u4E2A\u5176\u4ED6\u529F\u80FD\u65F6\uFF0C\u4E5F\u9700\u8981\u8FDB\u884C\u5408\u6CD5\u6027\u6821\u9A8C\u3002\u60F3\u60F3\u770B\uFF0C\u5F53\u7CFB\u7EDF\u975E\u5E38\u5730\u5E9E\u5927\uFF0C\u7CFB\u7EDF\u4E2D\u4E13\u95E8\u8FDB\u884C\u6743\u9650\u9A8C\u8BC1\u7684\u4EE3\u7801\u662F\u975E\u5E38\u591A\u7684\uFF0C\u800C\u4E14\u975E\u5E38\u5730\u6563\u4E71\uFF0C\u6211\u4EEC\u5C31\u60F3\u80FD\u4E0D\u80FD\u5C06\u8FD9\u4E9B\u6743\u9650\u6821\u9A8C\u3001\u65E5\u5FD7\u8BB0\u5F55\u7B49\u975E\u4E1A\u52A1\u903B\u8F91\u529F\u80FD\u7684\u90E8\u5206\u72EC\u7ACB\u62C6\u5206\u5F00\uFF0C\u5E76\u4E14\u5728\u7CFB\u7EDF\u8FD0\u884C\u65F6\u9700\u8981\u7684\u5730\u65B9\uFF08<code>\u8FDE\u63A5\u70B9</code>\uFF09\u8FDB\u884C\u52A8\u6001\u63D2\u5165\u8FD0\u884C\uFF0C\u4E0D\u9700\u8981\u7684\u65F6\u5019\u5C31\u4E0D\u7406\uFF0C\u56E0\u6B64AOP\u662F\u80FD\u591F\u89E3\u51B3\u8FD9\u79CD\u72B6\u51B5\u7684\u601D\u60F3\u5427\uFF01</p><p>\u4E0B\u56FE\u5C31\u5F88\u76F4\u89C2\u5730\u5C55\u793A\u8FD9\u4E2A\u8FC7\u7A0B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20191011214543898.png" alt="image-20191011214543898"></p><h2 id="_2-aop\u4E2D\u7684\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-aop\u4E2D\u7684\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> 2. AOP\u4E2D\u7684\u57FA\u672C\u6982\u5FF5</h2><ul><li><p>\u901A\u77E5\uFF08Adivce\uFF09</p><p>\u901A\u77E5\u67095\u79CD\u7C7B\u578B:</p><ul><li><code>Before</code> \u5728\u65B9\u6CD5\u88AB\u8C03\u7528\u4E4B\u524D\u8C03\u7528</li><li><code>After</code> \u5728\u65B9\u6CD5\u5B8C\u6210\u540E\u8C03\u7528\u901A\u77E5\uFF0C\u65E0\u8BBA\u65B9\u6CD5\u662F\u5426\u6267\u884C\u6210\u529F</li><li><code>After-returning</code> \u5728\u65B9\u6CD5\u6210\u529F\u6267\u884C\u4E4B\u540E\u8C03\u7528\u901A\u77E5</li><li><code>After-throwing</code> \u5728\u65B9\u6CD5\u629B\u51FA\u5F02\u5E38\u540E\u8C03\u7528\u901A\u77E5</li><li><code>Around</code> \u901A\u77E5\u4E86\u597D\u3001\u5305\u542B\u4E86\u88AB\u901A\u77E5\u7684\u65B9\u6CD5\uFF0C\u5728\u88AB\u901A\u77E5\u7684\u65B9\u6CD5\u8C03\u7528\u4E4B\u524D\u540E\u8C03\u7528\u4E4B\u540E\u6267\u884C\u81EA\u5B9A\u4E49\u7684\u884C\u4E3A</li></ul></li><li><p>\u5207\u70B9\uFF08Pointcut\uFF09</p><p>\u5207\u70B9\u5728Spring AOP\u4E2D\u786E\u5B9E\u662F\u5BF9\u5E94\u7CFB\u7EDF\u4E2D\u7684\u65B9\u6CD5\u3002\u4F46\u662F\u8FD9\u4E2A\u65B9\u6CD5\u662F\u5B9A\u4E49\u5728\u5207\u9762\u4E2D\u7684\u65B9\u6CD5\uFF0C\u4E00\u822C\u548C\u901A\u77E5\u4E00\u8D77\u4F7F\u7528\uFF0C\u4E00\u8D77\u7EC4\u6210\u4E86\u5207\u9762\u3002</p></li><li><p>\u8FDE\u63A5\u70B9\uFF08Join point\uFF09</p><p>\u6BD4\u5982\uFF1A\u65B9\u6CD5\u8C03\u7528\u3001\u65B9\u6CD5\u6267\u884C\u3001\u5B57\u6BB5\u8BBE\u7F6E/\u83B7\u53D6\u3001\u5F02\u5E38\u5904\u7406\u6267\u884C\u3001\u7C7B\u521D\u59CB\u5316\u3001\u751A\u81F3\u662F for \u5FAA\u73AF\u4E2D\u7684\u67D0\u4E2A\u70B9</p><p>\u7406\u8BBA\u4E0A, \u7A0B\u5E8F\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u4EFB\u4F55\u65F6\u70B9\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u4F5C\u4E3A\u7EC7\u5165\u70B9, \u800C\u6240\u6709\u8FD9\u4E9B\u6267\u884C\u65F6\u70B9\u90FD\u662F Joint point</p><p>\u4F46 Spring AOP \u76EE\u524D\u4EC5\u652F\u6301\u65B9\u6CD5\u6267\u884C (method execution) \u4E5F\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\uFF0C\u8FDE\u63A5\u70B9\u5C31\u662F\u4F60\u51C6\u5907\u5728\u7CFB\u7EDF\u4E2D\u6267\u884C\u5207\u70B9\u548C\u5207\u5165\u901A\u77E5\u7684\u5730\u65B9\uFF08\u4E00\u822C\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u4E00\u4E2A\u5B57\u6BB5\uFF09</p></li><li><p>\u5207\u9762\uFF08Aspect\uFF09</p><p>\u5207\u9762\u662F\u5207\u70B9\u548C\u901A\u77E5\u7684\u96C6\u5408\uFF0C\u4E00\u822C\u5355\u72EC\u4F5C\u4E3A\u4E00\u4E2A\u7C7B\u3002\u901A\u77E5\u548C\u5207\u70B9\u5171\u540C\u5B9A\u4E49\u4E86\u5173\u4E8E\u5207\u9762\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u5B83\u662F\u4EC0\u4E48\u65F6\u5019\uFF0C\u5728\u4F55\u65F6\u548C\u4F55\u5904\u5B8C\u6210\u529F\u80FD\u3002</p></li><li><p>\u5F15\u5165\uFF08Introduction\uFF09</p><p>\u5F15\u7528\u5141\u8BB8\u6211\u4EEC\u5411\u73B0\u6709\u7684\u7C7B\u6DFB\u52A0\u65B0\u7684\u65B9\u6CD5\u6216\u8005\u5C5E\u6027</p></li><li><p>\u7EC7\u5165\uFF08Weaving\uFF09</p><p>\u7EC4\u88C5\u65B9\u9762\u6765\u521B\u5EFA\u4E00\u4E2A\u88AB\u901A\u77E5\u5BF9\u8C61\u3002\u8FD9\u53EF\u4EE5\u5728\u7F16\u8BD1\u65F6\u5B8C\u6210\uFF08\u4F8B\u5982\u4F7F\u7528AspectJ\u7F16\u8BD1\u5668\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u5B8C\u6210\u3002Spring\u548C\u5176\u4ED6\u7EAFJava AOP\u6846\u67B6\u4E00\u6837\uFF0C\u5728\u8FD0\u884C\u65F6\u5B8C\u6210\u7EC7\u5165\u3002</p></li></ul><h2 id="_3-spring-\u4E2D\u5BF9aop\u7684\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#_3-spring-\u4E2D\u5BF9aop\u7684\u652F\u6301" aria-hidden="true">#</a> 3. Spring \u4E2D\u5BF9AOP\u7684\u652F\u6301</h2><p>\u9996\u5148AOP\u601D\u60F3\u7684\u5B9E\u73B0\u4E00\u822C\u90FD\u662F\u57FA\u4E8E\u4EE3\u7406\u6A21\u5F0F\uFF0C\u5728JAVA\u4E2D\u4E00\u822C\u91C7\u7528JDK\u52A8\u6001\u4EE3\u7406\u6A21\u5F0F\uFF0C\u4F46\u662F\u6211\u4EEC\u90FD\u77E5\u9053\uFF0CJDK\u52A8\u6001\u4EE3\u7406\u6A21\u5F0F\u53EA\u80FD\u4EE3\u7406\u63A5\u53E3\uFF0C\u5982\u679C\u8981\u4EE3\u7406\u7C7B\u90A3\u4E48\u5C31\u4E0D\u884C\u4E86</p><p>Spring AOP \u540C\u65F6\u652F\u6301 CGLIB\u3001ASPECTJ\u3001JDK\u52A8\u6001\u4EE3\u7406\uFF0C\u5F53\u4F60\u7684\u771F\u5B9E\u5BF9\u8C61\u6709\u5B9E\u73B0\u63A5\u53E3\u65F6\uFF0CSpring AOP\u4F1A\u9ED8\u8BA4\u91C7\u7528JDK\u52A8\u6001\u4EE3\u7406\uFF0C\u5426\u5219\u91C7\u7528cglib\u4EE3\u7406\u3002</p><ul><li>\u5982\u679C\u76EE\u6807\u5BF9\u8C61\u7684\u5B9E\u73B0\u7C7B\u5B9E\u73B0\u4E86\u63A5\u53E3\uFF0CSpring AOP \u5C06\u4F1A\u91C7\u7528 JDK \u52A8\u6001\u4EE3\u7406\u6765\u751F\u6210 AOP \u4EE3\u7406\u7C7B\uFF1B</li><li>\u5982\u679C\u76EE\u6807\u5BF9\u8C61\u7684\u5B9E\u73B0\u7C7B\u6CA1\u6709\u5B9E\u73B0\u63A5\u53E3\uFF0CSpring AOP \u5C06\u4F1A\u91C7\u7528 CGLIB \u6765\u751F\u6210 AOP \u4EE3\u7406\u7C7B\u2014\u2014\u4E0D\u8FC7\u8FD9\u4E2A\u9009\u62E9\u8FC7\u7A0B\u5BF9\u5F00\u53D1\u8005\u5B8C\u5168\u900F\u660E\u3001\u5F00\u53D1\u8005\u4E5F\u65E0\u9700\u5173\u5FC3\u3002</li></ul>',15),n=[r];function c(d,t){return i(),p("div",null,n)}const s=e(a,[["render",c],["__file","spring-y-aop-overview.html.vue"]]);export{s as default};
