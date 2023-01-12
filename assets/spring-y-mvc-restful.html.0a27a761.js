import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as s,a as e,b as n,d as i,f as h,r as p}from"./app.a0a3f66a.js";const d={},l=h('<h1 id="restful" tabindex="-1"><a class="header-anchor" href="#restful" aria-hidden="true">#</a> RESTful</h1><h2 id="_1-rest-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-rest-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. REST \u662F\u4EC0\u4E48</h2><p>REST\uFF08REpresentational State Transfer\uFF09 \u76F4\u8BD1\u5C31\u662F\uFF1A\u62BD\u8C61\u72B6\u6001\u8F6C\u79FB\u3002</p><p>\u4ED6\u901A\u8FC7 <strong>URL\u5B9A\u4F4D\u8D44\u6E90\uFF0C\u7528HTTP\u52A8\u8BCD\uFF08GET,POST,DELETE,DETC\uFF09\u63CF\u8FF0\u64CD\u4F5C</strong>\u3002</p><ul><li>\u770BUrl\u5C31\u77E5\u9053\u8981\u4EC0\u4E48</li><li>\u770Bhttp method\u5C31\u77E5\u9053\u5E72\u4EC0\u4E48</li><li>\u770Bhttp status code\u5C31\u77E5\u9053\u7ED3\u679C\u5982\u4F55</li></ul><h2 id="_2-\u8D44\u6E90\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-\u8D44\u6E90\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 2. \u8D44\u6E90\u662F\u4EC0\u4E48</h2><p>\u8D44\u6E90\u662F\u6307\u6570\u636E\u5728 REST \u67B6\u6784\u4E2D\u5982\u4F55\u663E\u793A\u7684\u3002\u5C06\u5B9E\u4F53\u4F5C\u4E3A\u8D44\u6E90\u516C\u5F00\uFF0C\u4ED6\u5141\u8BB8\u5BA2\u6237\u7AEF\u901A\u8FC7HTTP \u65B9\u6CD5\u5982\uFF1AGET\u3001POST\u3001PUT\u3001DELETE \u7B49\u8BFB\u3001\u5199\u3001\u4FEE\u6539\u548C\u521B\u5EFA\u8D44\u6E90</p><h2 id="_3-\u4EC0\u4E48\u662F\u5B89\u5168\u7684-rest-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-\u4EC0\u4E48\u662F\u5B89\u5168\u7684-rest-\u64CD\u4F5C" aria-hidden="true">#</a> 3. \u4EC0\u4E48\u662F\u5B89\u5168\u7684 REST \u64CD\u4F5C</h2><p>REST \u63A5\u53E3\u662F\u901A\u8FC7 HTTP \u65B9\u6CD5\u5B8C\u6210\u64CD\u4F5C</p><ul><li>\u4E00\u4E9BHTTP\u64CD\u4F5C\u662F\u5B89\u5168\u7684\uFF0C\u5982GET \u548C HEAD, \u4ED6\u4E0D\u80FD\u5728\u670D\u52A1\u7AEF\u4FEE\u6539\u8D44\u6E90</li><li>PUT\u3001POST\u3001\u548C DELETE \u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u80FD\u4FEE\u6539\u670D\u52A1\u7AEF\u7684\u8D44\u6E90</li></ul><p>\u6240\u4EE5\uFF0C\u662F\u5426\u5B89\u5168\u7684\u754C\u9650\uFF0C\u5728\u4E8E<strong>\u662F\u5426\u4FEE\u6539\u670D\u52A1\u7AEF\u7684\u8D44\u6E90</strong></p><h2 id="_4-\u4EC0\u4E48\u662F\u5E42\u7B49\u64CD\u4F5C-\u4E3A\u4EC0\u4E48\u5E42\u7B49\u64CD\u4F5C\u5982\u6B64\u91CD\u8981" tabindex="-1"><a class="header-anchor" href="#_4-\u4EC0\u4E48\u662F\u5E42\u7B49\u64CD\u4F5C-\u4E3A\u4EC0\u4E48\u5E42\u7B49\u64CD\u4F5C\u5982\u6B64\u91CD\u8981" aria-hidden="true">#</a> 4. \u4EC0\u4E48\u662F\u5E42\u7B49\u64CD\u4F5C\uFF1F\u4E3A\u4EC0\u4E48\u5E42\u7B49\u64CD\u4F5C\u5982\u6B64\u91CD\u8981\uFF1F</h2><p>\u6709\u4E00\u4E9BHTTP\u65B9\u6CD5\uFF0C\u5982\uFF1AGET,\u4E0D\u7BA1\u4F60\u4F7F\u7528\u591A\u5C11\u6B21\u4ED6\u90FD\u80FD\u4EA7\u751F\u76F8\u540C\u7684\u7ED3\u679C\uFF0C\u5728\u6CA1\u6709\u4EFB\u4F55\u4E00\u8FB9\u5F71\u54CD\u7684\u60C5\u51B5\u4E0B\uFF0C\u53D1\u9001\u591A\u4E2AGET \u8BF7\u6C42\u5230\u76F8\u540C\u7684 URI \u5C06\u4F1A<strong>\u4EA7\u751F\u76F8\u540C\u7684\u54CD\u5E94\u7ED3\u679C</strong>\u3002\u56E0\u6B64\u3002\u8FD9\u5C31\u662F\u6240\u8C13\u5E42\u7B49\u64CD\u4F5C</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0C<strong>POST \u65B9\u6CD5\u4E0D\u662F\u5E42\u7B49\u64CD\u4F5C</strong>\uFF0C\u56E0\u4E3A\u5982\u679C\u53D1\u9001\u591A\u4E2A POST \u8BF7\u6C42\uFF0C\u4ED6\u5C06\u5728\u670D\u52A1\u7AEF\u521B\u5EFA\u4E0D\u540C\u8D44\u6E90\u3002\u4F46\u662F\uFF0C\u5047\u5982\u4F60\u7528PUT \u66F4\u65B0\u8D44\u6E90\uFF0C\u5B83\u5C06\u662F\u5E42\u7B49\u64CD\u4F5C</p><h2 id="_5-rest-\u662F\u53EF\u6269\u5C55\u7684\u6216\u8BF4\u662F\u534F\u540C\u7684\u5417" tabindex="-1"><a class="header-anchor" href="#_5-rest-\u662F\u53EF\u6269\u5C55\u7684\u6216\u8BF4\u662F\u534F\u540C\u7684\u5417" aria-hidden="true">#</a> 5. REST \u662F\u53EF\u6269\u5C55\u7684\u6216\u8BF4\u662F\u534F\u540C\u7684\u5417\uFF1F</h2><p>\u662F\u7684\uFF0CREST \u662F\u53EF\u6269\u5C55\u7684\u548C\u53EF\u534F\u4F5C\u7684\uFF0C\u4ED6\u65E2\u4E0D\u6258\u7BA1\u4E00\u79CD\u7279\u5B9A\u7684\u6280\u672F\u9009\u62E9\uFF0C\u4E5F\u4E0D\u5B9A\u5728\u5BA2\u6237\u7AEF\u6216\u8005\u670D\u52A1\u7AEF\u3002\u4F60\u53EF\u4EE5\u7528JAVA,C++\u3001Python \u6765\u521B\u5EFA RESTful WEB \u670D\u52A1\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u4ED6\u4EEC</p><h2 id="_6-rest-\u7528\u54EA\u79CD-http-\u65B9\u6CD5\u5462" tabindex="-1"><a class="header-anchor" href="#_6-rest-\u7528\u54EA\u79CD-http-\u65B9\u6CD5\u5462" aria-hidden="true">#</a> 6. REST \u7528\u54EA\u79CD HTTP \u65B9\u6CD5\u5462\uFF1F</h2><p>REST \u80FD\u7528\u4EFB\u4F55\u7684 HTTP \u65B9\u6CD5\uFF0C\u4F46\u662F\u6BD4\u8F83\u53D7\u6B22\u8FCE\u7684\u662F</p><ul><li>\u7528 GET \u6765\u68C0\u7D22\u670D\u52A1\u7AEF\u8D44\u6E90</li><li>\u7528 POST \u6765\u521B\u5EFA\u670D\u52A1\u7AEF\u8D44\u6E90</li><li>\u7528 PUT \u6765\u66F4\u65B0\u670D\u52A1\u7AEF\u8D44\u6E90</li><li>\u7528 DELETE \u6765\u5220\u9664\u670D\u52A1\u7AEF\u8D44\u6E90</li></ul><p>\u4EE5\u4E0A\u56DB\u4E2A\u64CD\u4F5C\uFF0C\u5206\u522B\u5BF9\u5E94\u65E5\u5E38\u7684 CRUD \u64CD\u4F5C</p><h2 id="_7-\u5220\u9664\u7684-http-\u72B6\u6001\u8FD4\u56DE\u7801\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_7-\u5220\u9664\u7684-http-\u72B6\u6001\u8FD4\u56DE\u7801\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 7. \u5220\u9664\u7684 HTTP \u72B6\u6001\u8FD4\u56DE\u7801\u662F\u4EC0\u4E48\uFF1F</h2><p>\u5728\u5220\u9664\u6210\u529F\u4E4B\u540E\uFF0C\u60A8\u7684 REST API \u5E94\u8BE5\u8FD4\u56DE\u4EC0\u4E48\u72B6\u6001\u4EE3\u7801\uFF0C\u5E76\u6CA1\u6709\u4E25\u683C\u7684\u89C4\u5219\uFF0C\u4ED6\u53EF\u4EE5\u8FD4\u56DE200 \u6216204 \u6CA1\u6709\u5185\u5BB9</p><ul><li>\u4E00\u822C\u6765\u8BF4\uFF0C\u5982\u679C\u5220\u9664\u64CD\u4F5C\u6210\u529F\uFF0C\u54CD\u5E94\u4E3B\u4F53\u4E3A\u7A7A\uFF0C\u8FD4\u56DE204</li><li>\u5982\u679C\u5220\u9664\u8BF7\u6C42\u6210\u529F\u4E14\u54CD\u5E94\u4F53\u4E0D\u662F\u7A7A\u7684\uFF0C\u5219\u8FD4\u56DE 200\u3002</li></ul><h2 id="_8-rest-api-\u662F\u65E0\u72B6\u6001\u7684\u5417" tabindex="-1"><a class="header-anchor" href="#_8-rest-api-\u662F\u65E0\u72B6\u6001\u7684\u5417" aria-hidden="true">#</a> 8. REST API \u662F\u65E0\u72B6\u6001\u7684\u5417?</h2><p>\u662F\u7684\uFF0C REST API \u5E94\u8BE5\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u56E0\u4E3A\u4ED6\u662F\u57FA\u4E8E HTTP \u7684\uFF0C\u4ED6\u4E5F\u662F\u65E0\u72B6\u6001\u7684</p><h2 id="_9-rest-\u5B89\u5168\u7801-\u4F60\u80FD\u505A\u4EC0\u4E48\u6765\u4FDD\u62A4\u4ED6" tabindex="-1"><a class="header-anchor" href="#_9-rest-\u5B89\u5168\u7801-\u4F60\u80FD\u505A\u4EC0\u4E48\u6765\u4FDD\u62A4\u4ED6" aria-hidden="true">#</a> 9. REST \u5B89\u5168\u7801\uFF1F\u4F60\u80FD\u505A\u4EC0\u4E48\u6765\u4FDD\u62A4\u4ED6</h2><p>\u5B89\u5168\u662F\u4E00\u4E2A\u5BBD\u6CDB\u7684\u672F\u8BED\uFF0C\u4ED6\u53EF\u80FD\u610F\u5473\u7740\u6D88\u606F\u7684\u5B89\u5168\u6027\uFF0C\u8FD9\u662F\u901A\u8FC7<strong>\u8BA4\u8BC1\u548C\u6388\u6743\u63D0\u4F9B\u7684\u52A0\u5BC6\u548C\u8BBF\u95EE\u9650\u5236\u63D0\u4F9B</strong>\u7684</p><blockquote><p>REST \u901A\u5E38\u4E0D\u662F\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u60A8\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 Spring Security \u6216\u8005Shiro \u6765\u4FDD\u62A4\u5B83</p></blockquote><h2 id="_10-resttemplate-\u7684\u4F18\u52BF\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_10-resttemplate-\u7684\u4F18\u52BF\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 10. RestTemplate \u7684\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F</h2><p>\u5728Spring Framework \u4E2D\uFF0CRestTemplate \u7C7B\u662F \u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F \u7684\u5B9E\u73B0\u3002\u8DDF\u5176\u4ED6\u4E3B\u6D41\u7684\u6A21\u677F\u7C7B\u76F8\u4F3C\uFF0C\u5982 JdbcTemplate \u6216 JmsTempalte \uFF0C\u5B83\u5C06\u5728\u5BA2\u6237\u7AEF\u7B80\u5316\u8DDF RESTful Web \u670D\u52A1\u7684\u96C6\u6210\u3002\u6B63\u5982\u5728 RestTemplate \u4F8B\u5B50\u4E2D\u663E\u793A\u7684\u4E00\u6837\uFF0C<strong>\u4F60\u80FD\u975E\u5E38\u5BB9\u6613\u5730\u7528\u5B83\u6765\u8C03\u7528 RESTful Web \u670D\u52A1</strong>\u3002</p><h2 id="_11-httpmessageconverter-\u5728-spring-rest-\u4E2D\u4EE3\u8868\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_11-httpmessageconverter-\u5728-spring-rest-\u4E2D\u4EE3\u8868\u4EC0\u4E48" aria-hidden="true">#</a> 11. HttpMessageConverter \u5728 Spring REST \u4E2D\u4EE3\u8868\u4EC0\u4E48\uFF1F</h2><p>HttpMessageConverter \u662F\u4E00\u79CD <strong>\u7B56\u7565\u63A5\u53E3</strong>\uFF0C\u4ED6\u6307\u5B9A\u4E86\u4E00\u4E2A\u8F6C\u6362\u5668\uFF0C\u4ED6\u53EF\u4EE5\u8F6C\u6362 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002Spring REST \u7528\u8FD9\u4E2A\u63A5\u53E3\u8F6C\u6362 HTTP \u54CD\u5E94\u5230\u591A\u79CD\u683C\u5F0F\uFF0C\u4F8B\u5982\uFF1AJSON \u6216 XML\u3002</p><p>\u6BCF\u4E2A HttpMessageconverter \u5B9E\u73B0\u90FD\u6709\u4E00\u79CD\u6216\u51E0\u79CD\u76F8\u5173\u8054\u7684 MIME \u534F\u8BAE\u3002Spring \u4F7F\u7528 \u201DAccept\u201C\u7684\u6807\u5934\u6765\u786E\u5B9A\u5BA2\u6237\u7AEF\u6240\u671F\u5F85\u7684\u5185\u5BB9\u7C7B\u578B</p><p>\u7136\u540E\uFF0C\u4ED6\u5C06\u5C1D\u8BD5\u627E\u5230\u4E00\u4E2A\u6CE8\u518C\u7684 HTTPMessageConverter\uFF0C\u4ED6\u80FD\u591F\u5904\u7406\u7279\u5B9A\u7684\u5185\u5BB9\u7C7B\u578B\uFF0C\u5E76\u4F7F\u7528\u5B83\u5C06\u54CD\u5E94\u8F6C\u6362\u6210\u8FD9\u79CD\u683C\u5F0F\uFF0C\u7136\u540E\u518D\u5C06\u5176\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF</p><h2 id="_12-\u5982\u4F55\u521B\u5EFA-httpmessageconverter-\u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\u6765\u652F\u6301\u4E00\u79CD\u65B0\u7684\u8BF7\u6C42-\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#_12-\u5982\u4F55\u521B\u5EFA-httpmessageconverter-\u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\u6765\u652F\u6301\u4E00\u79CD\u65B0\u7684\u8BF7\u6C42-\u54CD\u5E94" aria-hidden="true">#</a> 12. \u5982\u4F55\u521B\u5EFA HttpMessageConverter \u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\u6765\u652F\u6301\u4E00\u79CD\u65B0\u7684\u8BF7\u6C42/\u54CD\u5E94\uFF1F</h2><p>\u6211\u4EEC\u4EC5\u9700\u8981\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684 AbstractHttpMessageConverter \u7684\u5B9E\u73B0\u3001\u5E76\u4F7F\u7528 WebMvcConfigurerAdaper \u7684 <code>#extendMessageConverters(List&gt; converters)</code> \u65B9\u6CD5\u6CE8\u4E2D\u518C\u5B83\uFF0C\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u751F\u6210\u4E00\u79CD\u65B0\u7684\u8BF7\u6C42/ \u54CD\u5E94\u7C7B\u578B</p><h2 id="_13-pathvariable-\u6CE8\u89E3-\u5728spring-mvc-\u505A\u4E86\u4EC0\u4E48-\u4E3A\u4EC0\u4E48-rest-\u5728-spring-\u4E2D\u5982\u6B64\u6709\u7528" tabindex="-1"><a class="header-anchor" href="#_13-pathvariable-\u6CE8\u89E3-\u5728spring-mvc-\u505A\u4E86\u4EC0\u4E48-\u4E3A\u4EC0\u4E48-rest-\u5728-spring-\u4E2D\u5982\u6B64\u6709\u7528" aria-hidden="true">#</a> 13. @PathVariable \u6CE8\u89E3\uFF0C\u5728Spring MVC \u505A\u4E86\u4EC0\u4E48\uFF1F\u4E3A\u4EC0\u4E48 REST \u5728 Spring \u4E2D\u5982\u6B64\u6709\u7528\uFF1F</h2><p>@PathVariable \u6CE8\u89E3\uFF0C\u662FSpring MVC \u4E2D\u5E38\u7528\u7684\u6CE8\u89E3\u4E4B\u4E00\uFF0C\u5B83\u5141\u8BB8\u60A8\u4ECE URI \u8BFB\u53D6\u503C\uFF0C\u6BD4\u5982\u67E5\u8BE2\u53C2\u6570\u3002\u5B83\u4F7F\u7528 Spring \u521B\u5EFA RESTful Web \u670D\u52A1\u65F6\u7279\u522B\u6709\u7528\uFF0C\u56E0\u4E3A\u5728 REST \u4E2D\uFF0C\u8D44\u6E90\u6807\u8BC6\u7B26\u662FURI \u7684\u4E00\u90E8\u5206</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',39),o={href:"http://www.spring4all.com/article/1445",target:"_blank",rel:"noopener noreferrer"};function c(T,E){const r=p("ExternalLinkIcon");return t(),s("div",null,[l,e("p",null,[e("a",o,[n("\u6392\u540D\u524D20\u7684REST\u548CSpring MVC\u9762\u8BD5\u9898"),i(r)])])])}const _=a(d,[["render",c],["__file","spring-y-mvc-restful.html.vue"]]);export{_ as default};
