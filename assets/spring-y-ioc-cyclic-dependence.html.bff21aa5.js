import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,f as a}from"./app.e7bdeba6.js";const o={},c=a('<h1 id="\u5FAA\u73AF\u4F9D\u8D56\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u4F9D\u8D56\u95EE\u9898" aria-hidden="true">#</a> \u5FAA\u73AF\u4F9D\u8D56\u95EE\u9898</h1><h2 id="_1-\u4EC0\u4E48\u662F\u5FAA\u73AF\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u5FAA\u73AF\u4F9D\u8D56" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u5FAA\u73AF\u4F9D\u8D56</h2><p>\u5FAA\u73AF\u4F9D\u8D56\uFF0C\u5176\u5B9E\u5C31\u662F\u5FAA\u73AF\u5F15\u7528\uFF0C\u5C31\u662F\u4E24\u4E2A\u6216\u8005\u4E24\u4E2A\u4EE5\u4E0A\u7684bean \u4E92\u76F8\u5F15\u7528\u5BF9\u65B9\uFF0C\u6700\u7EC8\u5F62\u6210\u4E00\u4E2A\u95ED\u73AF\uFF0C\u5982A \u4F9D\u8D56B,B\u4F9D\u8D56C\uFF0CC\u4F9D\u8D56A\u3002\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20191103124214967.png" alt="image-20191103124214967"></p><p>\u5FAA\u73AF\u4F9D\u8D56\uFF0C\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A<strong>\u6B7B\u5FAA\u73AF</strong>\u7684\u8FC7\u7A0B\uFF0C\u5728\u521D\u59CB\u5316A\u7684\u65F6\u5019\u53D1\u73B0\u5F15\u7528\u4E86B\uFF0C\u8FD9\u65F6\u5019\u5C31\u4F1A\u53BB\u521D\u59CB\u5316B\uFF0C\u7136\u540E\u53C8\u5F00\u53D1B\u5F15\u7528\u4E86A\uFF0C\u5219\u53C8\u4F1A\u51FA\u521D\u59CB\u5316A\uFF0C\u4F9D\u6B21\u5FAA\u73AF\u7528\u4E0D\u9000\u51FA\uFF0C\u9664\u975E\u6709\u7EC8\u7ED3\u6761\u4EF6</p><h2 id="_2-\u5FAA\u73AF\u4F9D\u8D56\u7684\u4E24\u79CD\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-\u5FAA\u73AF\u4F9D\u8D56\u7684\u4E24\u79CD\u573A\u666F" aria-hidden="true">#</a> 2. \u5FAA\u73AF\u4F9D\u8D56\u7684\u4E24\u79CD\u573A\u666F</h2><ol><li>\u6784\u9020\u5668\u7684\u5FAA\u73AF\u4F9D\u8D56</li><li>field \u5C5E\u6027\u7684\u5FAA\u73AF\u4F9D\u8D56</li></ol><blockquote><p>\u5BF9\u4E8E\u6784\u9020\u5668\u7684\u5FAA\u73AF\u4F9D\u8D56\uFF0CSpring \u662F\u65E0\u6CD5\u89E3\u51B3\u7684\uFF0C\u53EA\u80FD\u629B\u51FA BeanCurrentlyInCreationException \u5F02\u5E38\u8868\u793A\u5FAA\u73AF\u4F9D\u8D56\uFF0C<strong>\u6240\u4EE5\u4E0B\u9762\u6211\u4EEC\u5206\u6790\u7684\u90FD\u662F\u57FA\u4E8E field \u5C5E\u6027\u7684\u5FAA\u73AF\u4F9D\u8D56</strong>\u3002</p></blockquote><blockquote><p>Spring \u53EA\u89E3\u51B3 scope \u4E3A singleton \u7684\u5FAA\u73AF\u4F9D\u8D56\u3002\u5BF9\u4E8Escope \u4E3A prototype \u7684 bean \uFF0CSpring \u65E0\u6CD5\u89E3\u51B3\uFF0C\u76F4\u63A5\u629B\u51FA BeanCurrentlyInCreationException \u5F02\u5E38\u3002</p></blockquote><h2 id="_3-\u89E3\u51B3\u6D41\u7A0B\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u6D41\u7A0B\u603B\u7ED3" aria-hidden="true">#</a> 3. \u89E3\u51B3\u6D41\u7A0B\u603B\u7ED3</h2><ul><li>\u9996\u5148 A \u5B8C\u6210\u521D\u59CB\u5316\u7B2C\u4E00\u6B65\u5E76\u5C06\u81EA\u5DF1\u63D0\u524D\u66DD\u5149\u51FA\u6765\uFF08\u901A\u8FC7 ObjectFactory \u5C06\u81EA\u5DF1\u63D0\u524D\u66DD\u5149\uFF09\uFF0C\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u81EA\u5DF1\u4F9D\u8D56\u5BF9\u8C61 B\uFF0C\u6B64\u65F6\u5C31\u4F1A\u53BB\u5C1D\u8BD5 get(B)\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53D1\u73B0 B \u8FD8\u6CA1\u6709\u88AB\u521B\u5EFA\u51FA\u6765</li><li>\u7136\u540E B \u5C31\u8D70\u521B\u5EFA\u6D41\u7A0B\uFF0C\u5728 B \u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u540C\u6837\u53D1\u73B0\u81EA\u5DF1\u4F9D\u8D56 C\uFF0CC \u4E5F\u6CA1\u6709\u88AB\u521B\u5EFA\u51FA\u6765</li><li>\u8FD9\u4E2A\u65F6\u5019 C \u53C8\u5F00\u59CB\u521D\u59CB\u5316\u8FDB\u7A0B\uFF0C\u4F46\u662F\u5728\u521D\u59CB\u5316\u7684\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u81EA\u5DF1\u4F9D\u8D56 A\uFF0C\u4E8E\u662F\u5C1D\u8BD5 get(A)\uFF0C\u8FD9\u4E2A\u65F6\u5019\u7531\u4E8E A \u5DF2\u7ECF\u6DFB\u52A0\u81F3\u7F13\u5B58\u4E2D\uFF08\u4E00\u822C\u90FD\u662F\u6DFB\u52A0\u81F3\u4E09\u7EA7\u7F13\u5B58 <code>singletonFactories</code> \uFF09\uFF0C\u901A\u8FC7 ObjectFactory \u63D0\u524D\u66DD\u5149\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7 <code>ObjectFactory#getObject()</code> \u65B9\u6CD5\u6765\u62FF\u5230 A \u5BF9\u8C61\uFF0CC \u62FF\u5230 A \u5BF9\u8C61\u540E\u987A\u5229\u5B8C\u6210\u521D\u59CB\u5316\uFF0C\u7136\u540E\u5C06\u81EA\u5DF1\u6DFB\u52A0\u5230\u4E00\u7EA7\u7F13\u5B58\u4E2D</li><li>\u56DE\u5230 B \uFF0CB \u4E5F\u53EF\u4EE5\u62FF\u5230 C \u5BF9\u8C61\uFF0C\u5B8C\u6210\u521D\u59CB\u5316\uFF0CA \u53EF\u4EE5\u987A\u5229\u62FF\u5230 B \u5B8C\u6210\u521D\u59CB\u5316\u3002\u5230\u8FD9\u91CC\u6574\u4E2A\u94FE\u8DEF\u5C31\u5DF2\u7ECF\u5B8C\u6210\u4E86\u521D\u59CB\u5316\u8FC7\u7A0B\u4E86</li></ul>',11),n=[c];function r(l,d){return t(),i("div",null,n)}const h=e(o,[["render",r],["__file","spring-y-ioc-cyclic-dependence.html.vue"]]);export{h as default};
