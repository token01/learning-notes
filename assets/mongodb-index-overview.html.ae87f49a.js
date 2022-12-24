const e=JSON.parse('{"key":"v-464ea675","path":"/db/mongodb/mongodb-index-overview.html","title":"mongoDB\u7D22\u5F15\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"summary":"mongoDB\u7D22\u5F15\u8BE6\u89E3 1. \u6982\u8FF0 \u6211\u4EEC\u4F7F\u7528\u7D22\u5F15\u7684\u76EE\u7684\u662F\u4EC0\u4E48\u5462\uFF1F \u7EC8\u6781\u76EE\u7684\uFF1A\u501F\u52A9\u7D22\u5F15\u5FEB\u901F\u641C\u7D22\uFF0C\u6709\u6548\u51CF\u5C11\u4E86\u626B\u63CF\u7684\u884C\u6570 \u7CBE\u9AD3\uFF1A\u4E0D\u6B62\u8981\u6709\u7D22\u5F15\uFF0C\u7D22\u5F15\u7684\u8FC7\u6EE4\u6027\u8FD8\u8981\u597D\uFF0C\u533A\u5206\u5EA6\u8981\u8DB3\u591F\u9AD8\uFF0C\u8FD9\u624D\u662F\u597D\u7684\u8BBE\u8BA1 2. \u7D22\u5F15\u7684\u7C7B\u578B 2.1 \u552F\u4E00\u7D22\u5F15 \u552F\u4E00\u7D22\u5F15\u662F\u7D22\u5F15\u5177\u6709\u7684\u4E00\u79CD\u5C5E\u6027\uFF0C\u8BA9\u7D22\u5F15\u5177\u5907\u552F\u4E00\u6027\uFF0C\u786E\u4FDD\u8FD9\u5F20\u8868\u4E2D\uFF0C\u8BE5\u6761\u7D22\u5F15\u6570\u636E\u4E0D\u4F1A\u91CD\u590D\u51FA\u73B0\u3002\u5728\u6BCF\u4E00\u6B21insert\u548Cupdate\u64CD\u4F5C\u65F6\uFF0C\u90FD\u4F1A\u8FDB","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/db/mongodb/mongodb-index-overview.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"mongoDB\u7D22\u5F15\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-24T09:23:15.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-24T09:23:15.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6982\u8FF0","slug":"_1-\u6982\u8FF0","link":"#_1-\u6982\u8FF0","children":[]},{"level":2,"title":"2. \u7D22\u5F15\u7684\u7C7B\u578B","slug":"_2-\u7D22\u5F15\u7684\u7C7B\u578B","link":"#_2-\u7D22\u5F15\u7684\u7C7B\u578B","children":[{"level":3,"title":"2.1 \u552F\u4E00\u7D22\u5F15","slug":"_2-1-\u552F\u4E00\u7D22\u5F15","link":"#_2-1-\u552F\u4E00\u7D22\u5F15","children":[]},{"level":3,"title":"2.2 \u590D\u5408\u7D22\u5F15","slug":"_2-2-\u590D\u5408\u7D22\u5F15","link":"#_2-2-\u590D\u5408\u7D22\u5F15","children":[]},{"level":3,"title":"2.3 \u5185\u5D4C\u7D22\u5F15","slug":"_2-3-\u5185\u5D4C\u7D22\u5F15","link":"#_2-3-\u5185\u5D4C\u7D22\u5F15","children":[]},{"level":3,"title":"2.4 \u6570\u7EC4\u7D22\u5F15","slug":"_2-4-\u6570\u7EC4\u7D22\u5F15","link":"#_2-4-\u6570\u7EC4\u7D22\u5F15","children":[]},{"level":3,"title":"2.5 \u8FC7\u671F\u7D22\u5F15\uFF08TTL\uFF09","slug":"_2-5-\u8FC7\u671F\u7D22\u5F15-ttl","link":"#_2-5-\u8FC7\u671F\u7D22\u5F15-ttl","children":[]},{"level":3,"title":"2.6 \u54C8\u5E0C\u7D22\u5F15\uFF08Hashed Index\uFF09","slug":"_2-6-\u54C8\u5E0C\u7D22\u5F15-hashed-index","link":"#_2-6-\u54C8\u5E0C\u7D22\u5F15-hashed-index","children":[]},{"level":3,"title":"2.7 \u5730\u7406\u4F4D\u7F6E\u7D22\u5F15\uFF08Geospatial Index\uFF09","slug":"_2-7-\u5730\u7406\u4F4D\u7F6E\u7D22\u5F15-geospatial-index","link":"#_2-7-\u5730\u7406\u4F4D\u7F6E\u7D22\u5F15-geospatial-index","children":[]},{"level":3,"title":"2.8 \u6587\u672C\u7D22\u5F15\uFF08Text Index\uFF09","slug":"_2-8-\u6587\u672C\u7D22\u5F15-text-index","link":"#_2-8-\u6587\u672C\u7D22\u5F15-text-index","children":[]}]},{"level":2,"title":"3. \u7D22\u5F15\u4F18\u7F3A\u70B9","slug":"_3-\u7D22\u5F15\u4F18\u7F3A\u70B9","link":"#_3-\u7D22\u5F15\u4F18\u7F3A\u70B9","children":[{"level":3,"title":"3.1 \u6709\u70B9","slug":"_3-1-\u6709\u70B9","link":"#_3-1-\u6709\u70B9","children":[]},{"level":3,"title":"3.2 \u7D22\u5F15\u7684\u7F3A\u70B9","slug":"_3-2-\u7D22\u5F15\u7684\u7F3A\u70B9","link":"#_3-2-\u7D22\u5F15\u7684\u7F3A\u70B9","children":[]}]},{"level":2,"title":"4. \u4F55\u65F6\u4E0D\u5E94\u8BE5\u4F7F\u7528\u7D22\u5F15","slug":"_4-\u4F55\u65F6\u4E0D\u5E94\u8BE5\u4F7F\u7528\u7D22\u5F15","link":"#_4-\u4F55\u65F6\u4E0D\u5E94\u8BE5\u4F7F\u7528\u7D22\u5F15","children":[]},{"level":2,"title":"5. \u67E5\u8BE2\u4F18\u5316\u5668","slug":"_5-\u67E5\u8BE2\u4F18\u5316\u5668","link":"#_5-\u67E5\u8BE2\u4F18\u5316\u5668","children":[{"level":3,"title":"5.1 \u4F55\u65F6\u67E5\u8BE2\u8BA1\u5212\u7F13\u5B58\u624D\u4F1A\u53D8\u5462\uFF1F","slug":"_5-1-\u4F55\u65F6\u67E5\u8BE2\u8BA1\u5212\u7F13\u5B58\u624D\u4F1A\u53D8\u5462","link":"#_5-1-\u4F55\u65F6\u67E5\u8BE2\u8BA1\u5212\u7F13\u5B58\u624D\u4F1A\u53D8\u5462","children":[]},{"level":3,"title":"5.2 \u8054\u5408\u7D22\u5F15\u7684\u4F18\u5316","slug":"_5-2-\u8054\u5408\u7D22\u5F15\u7684\u4F18\u5316","link":"#_5-2-\u8054\u5408\u7D22\u5F15\u7684\u4F18\u5316","children":[]},{"level":3,"title":"5.3 \u805A\u5408\u7BA1\u9053\u7684\u4F18\u5316","slug":"_5-3-\u805A\u5408\u7BA1\u9053\u7684\u4F18\u5316","link":"#_5-3-\u805A\u5408\u7BA1\u9053\u7684\u4F18\u5316","children":[]}]},{"level":2,"title":"6. Explain\u67E5\u8BE2\u8BA1\u5212","slug":"_6-explain\u67E5\u8BE2\u8BA1\u5212","link":"#_6-explain\u67E5\u8BE2\u8BA1\u5212","children":[]},{"level":2,"title":"7. \u6700\u671F\u671B\u770B\u5230\u7684\u67E5\u8BE2\u7EC4\u5408","slug":"_7-\u6700\u671F\u671B\u770B\u5230\u7684\u67E5\u8BE2\u7EC4\u5408","link":"#_7-\u6700\u671F\u671B\u770B\u5230\u7684\u67E5\u8BE2\u7EC4\u5408","children":[]},{"level":2,"title":"8. \u6700\u4E0D\u671F\u671B\u770B\u5230\u7684\u67E5\u8BE2\u7EC4\u5408","slug":"_8-\u6700\u4E0D\u671F\u671B\u770B\u5230\u7684\u67E5\u8BE2\u7EC4\u5408","link":"#_8-\u6700\u4E0D\u671F\u671B\u770B\u5230\u7684\u67E5\u8BE2\u7EC4\u5408","children":[]},{"level":2,"title":"9. \u6700\u5DE6\u524D\u7F00\u539F\u5219","slug":"_9-\u6700\u5DE6\u524D\u7F00\u539F\u5219","link":"#_9-\u6700\u5DE6\u524D\u7F00\u539F\u5219","children":[]},{"level":2,"title":"10. \u6548\u7387\u6781\u4F4E\u7684\u64CD\u4F5C\u7B26","slug":"_10-\u6548\u7387\u6781\u4F4E\u7684\u64CD\u4F5C\u7B26","link":"#_10-\u6548\u7387\u6781\u4F4E\u7684\u64CD\u4F5C\u7B26","children":[]},{"level":2,"title":"11. \u7D22\u5F15\u8BBE\u8BA1\u548C\u4F18\u5316\u539F\u5219","slug":"_11-\u7D22\u5F15\u8BBE\u8BA1\u548C\u4F18\u5316\u539F\u5219","link":"#_11-\u7D22\u5F15\u8BBE\u8BA1\u548C\u4F18\u5316\u539F\u5219","children":[]},{"level":2,"title":"12. \u4F18\u5316\u539F\u5219","slug":"_12-\u4F18\u5316\u539F\u5219","link":"#_12-\u4F18\u5316\u539F\u5219","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1671873795000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":2}]},"readingTime":{"minutes":12.88,"words":3863},"filePathRelative":"db/mongodb/mongodb-index-overview.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
