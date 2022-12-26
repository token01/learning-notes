const e=JSON.parse('{"key":"v-b2e052e0","path":"/dependencies/shardingsphere/sharding-jdbc-x-jpa-read-write.html","title":"SpringBoot\u96C6\u6210ShardingJDBC-\u57FA\u4E8EJPA\u7684\u8BFB\u5199\u5206\u79BB","lang":"zh-CN","frontmatter":{"summary":"SpringBoot\u96C6\u6210ShardingJDBC-\u57FA\u4E8EJPA\u7684\u8BFB\u5199\u5206\u79BB \\"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u5206\u8868\u5206\u5E93\uFF0C\u4EE5\u53CASpringBoot\u96C6\u6210\u57FA\u4E8EShardingJDBC\u7684\u8BFB\u5199\u5206\u79BB\u5B9E\u8DF5\u3002\\" 1. \u77E5\u8BC6\u51C6\u5907 \\" \u4E3B\u8981\u7406\u89E3ShardingJDBC\u9488\u5BF9\u8BFB\u5199\u5206\u79BB\u5E93\u7684\u573A\u666F\u548C\u8BBE\u8BA1\u76EE\u6807\u7B49\u3002\\" 1.1 \u8BFB\u5199\u5206\u79BB\u5E93\u7684\u573A\u666F\u548C\u8BBE\u8BA1\u76EE\u6807\uFF1F \\" \u900F\u660E\u5316\u8BFB\u5199\u5206\u79BB\u6240\u5E26\u6765\u7684\u5F71\u54CD\uFF0C\u8BA9\u4F7F\u7528\u65B9\u5C3D\u91CF\u50CF\u4F7F\u7528\u4E00\u4E2A\u6570\u636E\u5E93","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/shardingsphere/sharding-jdbc-x-jpa-read-write.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"SpringBoot\u96C6\u6210ShardingJDBC-\u57FA\u4E8EJPA\u7684\u8BFB\u5199\u5206\u79BB"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T12:17:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T12:17:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u77E5\u8BC6\u51C6\u5907","slug":"_1-\u77E5\u8BC6\u51C6\u5907","link":"#_1-\u77E5\u8BC6\u51C6\u5907","children":[{"level":3,"title":"1.1 \u8BFB\u5199\u5206\u79BB\u5E93\u7684\u573A\u666F\u548C\u8BBE\u8BA1\u76EE\u6807\uFF1F","slug":"_1-1-\u8BFB\u5199\u5206\u79BB\u5E93\u7684\u573A\u666F\u548C\u8BBE\u8BA1\u76EE\u6807","link":"#_1-1-\u8BFB\u5199\u5206\u79BB\u5E93\u7684\u573A\u666F\u548C\u8BBE\u8BA1\u76EE\u6807","children":[]},{"level":3,"title":"1.2 \u6838\u5FC3\u529F\u80FD","slug":"_1-2-\u6838\u5FC3\u529F\u80FD","link":"#_1-2-\u6838\u5FC3\u529F\u80FD","children":[]}]},{"level":2,"title":"2. \u7B80\u5355\u793A\u4F8B","slug":"_2-\u7B80\u5355\u793A\u4F8B","link":"#_2-\u7B80\u5355\u793A\u4F8B","children":[{"level":3,"title":"2.1 \u51C6\u5907DB\u548C\u4F9D\u8D56\u914D\u7F6E","slug":"_2-1-\u51C6\u5907db\u548C\u4F9D\u8D56\u914D\u7F6E","link":"#_2-1-\u51C6\u5907db\u548C\u4F9D\u8D56\u914D\u7F6E","children":[]},{"level":3,"title":"2.2 Entity","slug":"_2-2-entity","link":"#_2-2-entity","children":[]},{"level":3,"title":"2.3 DAO","slug":"_2-3-dao","link":"#_2-3-dao","children":[]},{"level":3,"title":"2.4 Service","slug":"_2-4-service","link":"#_2-4-service","children":[]},{"level":3,"title":"2.5 Controller","slug":"_2-5-controller","link":"#_2-5-controller","children":[]},{"level":3,"title":"2.6 \u7B80\u5355\u6D4B\u8BD5","slug":"_2-6-\u7B80\u5355\u6D4B\u8BD5","link":"#_2-6-\u7B80\u5355\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"3. \u8FDB\u4E00\u6B65\u7406\u89E3","slug":"_3-\u8FDB\u4E00\u6B65\u7406\u89E3","link":"#_3-\u8FDB\u4E00\u6B65\u7406\u89E3","children":[{"level":3,"title":"3.1 shardingJDBC\u7684\u4E3B\u4ECE\u5206\u79BB\u89E3\u51B3\u4E0D\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F","slug":"_3-1-shardingjdbc\u7684\u4E3B\u4ECE\u5206\u79BB\u89E3\u51B3\u4E0D\u4E86\u4EC0\u4E48\u95EE\u9898","link":"#_3-1-shardingjdbc\u7684\u4E3B\u4ECE\u5206\u79BB\u89E3\u51B3\u4E0D\u4E86\u4EC0\u4E48\u95EE\u9898","children":[]},{"level":3,"title":"3.2 \u8BFB\u5199\u5206\u79BB\u52A0\u6570\u636E\u5206\u7247\uFF1F","slug":"_3-2-\u8BFB\u5199\u5206\u79BB\u52A0\u6570\u636E\u5206\u7247","link":"#_3-2-\u8BFB\u5199\u5206\u79BB\u52A0\u6570\u636E\u5206\u7247","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672057027000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":4}]},"readingTime":{"minutes":12.73,"words":3819},"filePathRelative":"dependencies/shardingsphere/sharding-jdbc-x-jpa-read-write.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
