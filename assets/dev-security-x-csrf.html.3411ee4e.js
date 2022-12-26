const e=JSON.parse('{"key":"v-2a4571a2","path":"/develop/security/dev-security-x-csrf.html","title":"\u5F00\u53D1\u5B89\u5168 - CSRF\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":20,"category":["\u5F00\u53D1","\u5B89\u5168"],"summary":"\u5F00\u53D1\u5B89\u5168 - CSRF\u8BE6\u89E3 \\" CSRF(Cross-site request forgery\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF0C\u4E5F\u88AB\u79F0\u6210\u4E3A\u201Cone click attack\u201D\u6216\u8005session riding\uFF0C\u901A\u5E38\u7F29\u5199\u4E3ACSRF\u6216\u8005XSRF\uFF0C\u662F\u4E00\u79CD\u5BF9\u7F51\u7AD9\u7684\u6076\u610F\u5229\u7528\u3002\\" \\"\u524D\u7F6E\u77E5\u8BC6\uFF1A\\" \\"\\" \\"\u5982\u679C\u5BA2\u6237\u7AEF\u53D1\u9001\u7684http\u8BF7\u6C42\u662F\u540C\u57DF\u7684\uFF0C\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u5E2E\u6211\u4EEC\u628A\u540C\u57DF\u4E0B\u7684cookie\u6DFB\u52A0\u5230\u8BF7\u6C42","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/develop/security/dev-security-x-csrf.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5F00\u53D1\u5B89\u5168 - CSRF\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T11:01:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T11:01:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. CSRF \u7B80\u4ECB","slug":"_1-csrf-\u7B80\u4ECB","link":"#_1-csrf-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. CSRF \u5982\u4F55\u653B\u51FB","slug":"_2-csrf-\u5982\u4F55\u653B\u51FB","link":"#_2-csrf-\u5982\u4F55\u653B\u51FB","children":[{"level":3,"title":"2.1 \u5177\u4F53\u5230\u94F6\u884C\u8F6C\u8D26\u4E3A\u4F8B\uFF1A","slug":"_2-1-\u5177\u4F53\u5230\u94F6\u884C\u8F6C\u8D26\u4E3A\u4F8B","link":"#_2-1-\u5177\u4F53\u5230\u94F6\u884C\u8F6C\u8D26\u4E3A\u4F8B","children":[]}]},{"level":2,"title":"3. CSRF \u7406\u89E3\u7684\u6CE8\u610F\u70B9","slug":"_3-csrf-\u7406\u89E3\u7684\u6CE8\u610F\u70B9","link":"#_3-csrf-\u7406\u89E3\u7684\u6CE8\u610F\u70B9","children":[{"level":3,"title":"3.1 \u9ED1\u5BA2\u80FD\u62FF\u5230Cookie\u5417?","slug":"_3-1-\u9ED1\u5BA2\u80FD\u62FF\u5230cookie\u5417","link":"#_3-1-\u9ED1\u5BA2\u80FD\u62FF\u5230cookie\u5417","children":[]},{"level":3,"title":"3.2 \u4EC0\u4E48\u6837\u7684\u8BF7\u6C42\u662F\u8981CSRF\u4FDD\u62A4\u7684?","slug":"_3-2-\u4EC0\u4E48\u6837\u7684\u8BF7\u6C42\u662F\u8981csrf\u4FDD\u62A4\u7684","link":"#_3-2-\u4EC0\u4E48\u6837\u7684\u8BF7\u6C42\u662F\u8981csrf\u4FDD\u62A4\u7684","children":[]},{"level":3,"title":"3.3 \u4E3A\u4EC0\u4E48\u5BF9\u8BF7\u6C42\u505A\u4E86CSRF\u62E6\u622A\uFF0C\u4F46\u8FD8\u662F\u4F1A\u62A5CRSF\u6F0F\u6D1E?","slug":"_3-3-\u4E3A\u4EC0\u4E48\u5BF9\u8BF7\u6C42\u505A\u4E86csrf\u62E6\u622A-\u4F46\u8FD8\u662F\u4F1A\u62A5crsf\u6F0F\u6D1E","link":"#_3-3-\u4E3A\u4EC0\u4E48\u5BF9\u8BF7\u6C42\u505A\u4E86csrf\u62E6\u622A-\u4F46\u8FD8\u662F\u4F1A\u62A5crsf\u6F0F\u6D1E","children":[]}]},{"level":2,"title":"4. CSRF \u9632\u5FA1\u5E38\u89C4\u601D\u8DEF","slug":"_4-csrf-\u9632\u5FA1\u5E38\u89C4\u601D\u8DEF","link":"#_4-csrf-\u9632\u5FA1\u5E38\u89C4\u601D\u8DEF","children":[{"level":3,"title":"4.1 \u9A8C\u8BC1 HTTP Referer \u5B57\u6BB5","slug":"_4-1-\u9A8C\u8BC1-http-referer-\u5B57\u6BB5","link":"#_4-1-\u9A8C\u8BC1-http-referer-\u5B57\u6BB5","children":[]},{"level":3,"title":"4.2 \u5728\u8BF7\u6C42\u5730\u5740\u4E2D\u6DFB\u52A0 token \u5E76\u9A8C\u8BC1","slug":"_4-2-\u5728\u8BF7\u6C42\u5730\u5740\u4E2D\u6DFB\u52A0-token-\u5E76\u9A8C\u8BC1","link":"#_4-2-\u5728\u8BF7\u6C42\u5730\u5740\u4E2D\u6DFB\u52A0-token-\u5E76\u9A8C\u8BC1","children":[]},{"level":3,"title":"4.3 \u5728 HTTP \u5934\u4E2D\u81EA\u5B9A\u4E49\u5C5E\u6027\u5E76\u9A8C\u8BC1","slug":"_4-3-\u5728-http-\u5934\u4E2D\u81EA\u5B9A\u4E49\u5C5E\u6027\u5E76\u9A8C\u8BC1","link":"#_4-3-\u5728-http-\u5934\u4E2D\u81EA\u5B9A\u4E49\u5C5E\u6027\u5E76\u9A8C\u8BC1","children":[]}]},{"level":2,"title":"5. CSRF \u9632\u5FA1\u5B9E\u6218","slug":"_5-csrf-\u9632\u5FA1\u5B9E\u6218","link":"#_5-csrf-\u9632\u5FA1\u5B9E\u6218","children":[{"level":3,"title":"5.1 \u975E\u6846\u67B6\u578B - \u81EA\u5B9A\u4E49XXXCsrfFilter","slug":"_5-1-\u975E\u6846\u67B6\u578B-\u81EA\u5B9A\u4E49xxxcsrffilter","link":"#_5-1-\u975E\u6846\u67B6\u578B-\u81EA\u5B9A\u4E49xxxcsrffilter","children":[]},{"level":3,"title":"5.2 Spring Security - \u4EC0\u4E48\u65F6\u5019\u7981\u7528CSRF","slug":"_5-2-spring-security-\u4EC0\u4E48\u65F6\u5019\u7981\u7528csrf","link":"#_5-2-spring-security-\u4EC0\u4E48\u65F6\u5019\u7981\u7528csrf","children":[]},{"level":3,"title":"5.3 Spring Security - CookieCsrfTokenRepository.withHttpOnlyFalse()","slug":"_5-3-spring-security-cookiecsrftokenrepository-withhttponlyfalse","link":"#_5-3-spring-security-cookiecsrftokenrepository-withhttponlyfalse","children":[]},{"level":3,"title":"5.4 Spring Security - new CookieCsrfTokenRepository()","slug":"_5-4-spring-security-new-cookiecsrftokenrepository","link":"#_5-4-spring-security-new-cookiecsrftokenrepository","children":[]},{"level":3,"title":"5.5 Spring Security - CookieCsrfTokenRepository\u5982\u4F55\u5DE5\u4F5C\u7684\u5462?","slug":"_5-5-spring-security-cookiecsrftokenrepository\u5982\u4F55\u5DE5\u4F5C\u7684\u5462","link":"#_5-5-spring-security-cookiecsrftokenrepository\u5982\u4F55\u5DE5\u4F5C\u7684\u5462","children":[]},{"level":3,"title":"5.6 Spring Security - CsrfFilter\u662F\u5982\u4F55\u5B8C\u6210\u62E6\u622A\u548C\u6821\u9A8C\u7684\u5462?","slug":"_5-6-spring-security-csrffilter\u662F\u5982\u4F55\u5B8C\u6210\u62E6\u622A\u548C\u6821\u9A8C\u7684\u5462","link":"#_5-6-spring-security-csrffilter\u662F\u5982\u4F55\u5B8C\u6210\u62E6\u622A\u548C\u6821\u9A8C\u7684\u5462","children":[]},{"level":3,"title":"5.7 Spring Security - \u9ED8\u8BA4\u5BF9\u54EA\u4E9BMethod\u62E6\u622A\u5462?","slug":"_5-7-spring-security-\u9ED8\u8BA4\u5BF9\u54EA\u4E9Bmethod\u62E6\u622A\u5462","link":"#_5-7-spring-security-\u9ED8\u8BA4\u5BF9\u54EA\u4E9Bmethod\u62E6\u622A\u5462","children":[]},{"level":3,"title":"5.8 Spring Security - HttpSessionCsrfTokenRepository","slug":"_5-8-spring-security-httpsessioncsrftokenrepository","link":"#_5-8-spring-security-httpsessioncsrftokenrepository","children":[]},{"level":3,"title":"5.9 Spring Security - \u8BBE\u7F6ECsrf\u4E0D\u5BF9\u4F1A\u9020\u6210\u54EA\u4E9B\u9519\u8BEF\u5462?","slug":"_5-9-spring-security-\u8BBE\u7F6Ecsrf\u4E0D\u5BF9\u4F1A\u9020\u6210\u54EA\u4E9B\u9519\u8BEF\u5462","link":"#_5-9-spring-security-\u8BBE\u7F6Ecsrf\u4E0D\u5BF9\u4F1A\u9020\u6210\u54EA\u4E9B\u9519\u8BEF\u5462","children":[]}]},{"level":2,"title":"6. \u603B\u7ED3\u4E0E\u5C55\u671B","slug":"_6-\u603B\u7ED3\u4E0E\u5C55\u671B","link":"#_6-\u603B\u7ED3\u4E0E\u5C55\u671B","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672052486000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":16.16,"words":4848},"filePathRelative":"develop/security/dev-security-x-csrf.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
