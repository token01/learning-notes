const e=JSON.parse('{"key":"v-4c535c63","path":"/develop/maven/maven-x-nexus-config.html","title":"Maven\u914D\u7F6Enexus\u79C1\u670D","lang":"zh-CN","frontmatter":{"summary":"Maven\u914D\u7F6Enexus\u79C1\u670D 1. \u7B80\u4ECB Maven\u914D\u7F6Enexus\u79C1\u670D\uFF0C\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u8BBE\u7F6E\u6210\u672C\u5730\u642D\u5EFA\u7684Nexus\u79C1\u670D maven \u9ED8\u8BA4\u7684settings.xml\u5730\u5740\u3002\u53EF\u4EE5\u901A\u8FC7idea\u67E5\u770B 2. \u4FEE\u6539maven\u7684settings.xml \u7F16\u8F91\u5185\u5BB9\u5982\u4E0B 3. maven\u9879\u76EE\u6D4B\u8BD5 1. \u521B\u5EFA\u9879\u76EE \u6784\u5EFA\u9879\u76EE\uFF0C\u53EF\u4EE5\u770B\u5230\u5728\u6784\u5EFA\u7684\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u662Fnexus\u79C1\u670D\u5730\u5740\u3002 2. \u67E5\u770B","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/develop/maven/maven-x-nexus-config.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Maven\u914D\u7F6Enexus\u79C1\u670D"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T11:01:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T11:01:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u4FEE\u6539maven\u7684settings.xml","slug":"_2-\u4FEE\u6539maven\u7684settings-xml","link":"#_2-\u4FEE\u6539maven\u7684settings-xml","children":[]},{"level":2,"title":"3. maven\u9879\u76EE\u6D4B\u8BD5","slug":"_3-maven\u9879\u76EE\u6D4B\u8BD5","link":"#_3-maven\u9879\u76EE\u6D4B\u8BD5","children":[]},{"level":2,"title":"4. \u914D\u7F6E\u8BA4\u8BC1\uFF0C\u5C06\u6253\u5305\u597D\u7684\u9879\u76EE\u4E0A\u4F20\u5230nexus\u4E2D","slug":"_4-\u914D\u7F6E\u8BA4\u8BC1-\u5C06\u6253\u5305\u597D\u7684\u9879\u76EE\u4E0A\u4F20\u5230nexus\u4E2D","link":"#_4-\u914D\u7F6E\u8BA4\u8BC1-\u5C06\u6253\u5305\u597D\u7684\u9879\u76EE\u4E0A\u4F20\u5230nexus\u4E2D","children":[{"level":3,"title":"4.1 \u5728setting.xml\u4E2D\u6DFB\u52A0server","slug":"_4-1-\u5728setting-xml\u4E2D\u6DFB\u52A0server","link":"#_4-1-\u5728setting-xml\u4E2D\u6DFB\u52A0server","children":[]},{"level":3,"title":"4.2 \u4FEE\u6539\u9879\u76EE\u7684pom.xml\u6587\u4EF6\uFF1A","slug":"_4-2-\u4FEE\u6539\u9879\u76EE\u7684pom-xml\u6587\u4EF6","link":"#_4-2-\u4FEE\u6539\u9879\u76EE\u7684pom-xml\u6587\u4EF6","children":[]},{"level":3,"title":"4.3 \u4E0A\u4F20\u5230\u79C1\u670D","slug":"_4-3-\u4E0A\u4F20\u5230\u79C1\u670D","link":"#_4-3-\u4E0A\u4F20\u5230\u79C1\u670D","children":[]},{"level":3,"title":"4.4 \u5728web\u754C\u9762\u786E\u8BA4\u4E0A\u4F20\u6210\u529F\uFF1A","slug":"_4-4-\u5728web\u754C\u9762\u786E\u8BA4\u4E0A\u4F20\u6210\u529F","link":"#_4-4-\u5728web\u754C\u9762\u786E\u8BA4\u4E0A\u4F20\u6210\u529F","children":[]}]},{"level":2,"title":"5. \u4E0A\u4F20\u5230maven-release\u4ED3\u5E93","slug":"_5-\u4E0A\u4F20\u5230maven-release\u4ED3\u5E93","link":"#_5-\u4E0A\u4F20\u5230maven-release\u4ED3\u5E93","children":[{"level":3,"title":"5.1 \u4FEE\u6539 pom.xml","slug":"_5-1-\u4FEE\u6539-pom-xml","link":"#_5-1-\u4FEE\u6539-pom-xml","children":[]},{"level":3,"title":"5.2 \u7EE7\u7EED mvn deploy","slug":"_5-2-\u7EE7\u7EED-mvn-deploy","link":"#_5-2-\u7EE7\u7EED-mvn-deploy","children":[]},{"level":3,"title":"5.3 \u5728web\u754C\u9762\u4E2D\u67E5\u770B\uFF0C\u5982\u4E0B\uFF1A","slug":"_5-3-\u5728web\u754C\u9762\u4E2D\u67E5\u770B-\u5982\u4E0B","link":"#_5-3-\u5728web\u754C\u9762\u4E2D\u67E5\u770B-\u5982\u4E0B","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672052486000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":3}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"develop/maven/maven-x-nexus-config.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
