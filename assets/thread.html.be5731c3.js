const e=JSON.parse('{"key":"v-48ae0916","path":"/learning-path/java/thread.html","title":"Java\u5E76\u53D1\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF\uFF08\u5EFA\u8BAE\u6536\u85CF\u{1F525}\uFF09","lang":"zh-CN","frontmatter":{"star":true,"title":"Java\u5E76\u53D1\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF\uFF08\u5EFA\u8BAE\u6536\u85CF\u{1F525}\uFF09","shortTitle":"Java\u5E76\u53D1\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF","category":["\u5B66\u4E60\u8DEF\u7EBF"],"tag":["\u5B66\u4E60\u8DEF\u7EBF"],"description":"\u8FD9\u7BC7\u6587\u7AE0\u5C31\u6765\u7ED9\u5927\u5BB6\u76D8\u70B9\u4E00\u4E0B Java \u5E76\u53D1\u5230\u5E95\u8BE5\u5982\u4F55\u4ECE\u5165\u95E8\u5230\u7CBE\u901A\uFF0CJava \u5E76\u53D1\u662F Java \u7A0B\u5E8F\u5458\u5FC5\u987B\u61C2\u4F46\u53C8\u5F88\u96BE\u61C2\u7684\u4E00\u5757\u77E5\u8BC6\u70B9\u3002","head":[["meta",{"name":"keywords","content":"Java,\u5E76\u53D1\u7F16\u7A0B,\u5E76\u53D1\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF,Java\u591A\u7EBF\u7A0B,\u5B66\u4E60\u8DEF\u7EBF,Java\u5B66\u4E60\u8DEF\u7EBF,Java\u6559\u7A0B,Java\u5F00\u53D1,Java\u5165\u95E8"}],["meta",{"property":"og:url","content":"https://bytecodes.tech/learning-path/java/thread.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"Java\u5E76\u53D1\u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF\uFF08\u5EFA\u8BAE\u6536\u85CF\u{1F525}\uFF09"}],["meta",{"property":"og:description","content":"\u8FD9\u7BC7\u6587\u7AE0\u5C31\u6765\u7ED9\u5927\u5BB6\u76D8\u70B9\u4E00\u4E0B Java \u5E76\u53D1\u5230\u5E95\u8BE5\u5982\u4F55\u4ECE\u5165\u95E8\u5230\u7CBE\u901A\uFF0CJava \u5E76\u53D1\u662F Java \u7A0B\u5E8F\u5458\u5FC5\u987B\u61C2\u4F46\u53C8\u5F88\u96BE\u61C2\u7684\u4E00\u5757\u77E5\u8BC6\u70B9\u3002"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T09:47:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"\u5B66\u4E60\u8DEF\u7EBF"}],["meta",{"property":"article:modified_time","content":"2022-12-26T09:47:33.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66 Java \u5E76\u53D1\uFF1F","slug":"\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66-java-\u5E76\u53D1","link":"#\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u5B66-java-\u5E76\u53D1","children":[]},{"level":2,"title":"\u4E8C\u3001Java \u5E76\u53D1\u5B66\u4E60\u8DEF\u7EBF\u56FE","slug":"\u4E8C\u3001java-\u5E76\u53D1\u5B66\u4E60\u8DEF\u7EBF\u56FE","link":"#\u4E8C\u3001java-\u5E76\u53D1\u5B66\u4E60\u8DEF\u7EBF\u56FE","children":[]},{"level":2,"title":"\u4E09\u3001\u786C\u6838 Java \u5E76\u53D1\u5B66\u4E60\u8D44\u6599","slug":"\u4E09\u3001\u786C\u6838-java-\u5E76\u53D1\u5B66\u4E60\u8D44\u6599","link":"#\u4E09\u3001\u786C\u6838-java-\u5E76\u53D1\u5B66\u4E60\u8D44\u6599","children":[{"level":3,"title":"1\uFF09Java \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF","slug":"_1-java-\u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF","link":"#_1-java-\u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF","children":[]},{"level":3,"title":"2\uFF09\u89C6\u9891","slug":"_2-\u89C6\u9891","link":"#_2-\u89C6\u9891","children":[]},{"level":3,"title":"3\uFF09\u4E66\u7C4D","slug":"_3-\u4E66\u7C4D","link":"#_3-\u4E66\u7C4D","children":[]},{"level":3,"title":"4\uFF09\u5F00\u6E90\u7535\u5B50\u4E66","slug":"_4-\u5F00\u6E90\u7535\u5B50\u4E66","link":"#_4-\u5F00\u6E90\u7535\u5B50\u4E66","children":[]},{"level":3,"title":"5\uFF09\u4ED8\u8D39\u4E13\u680F","slug":"_5-\u4ED8\u8D39\u4E13\u680F","link":"#_5-\u4ED8\u8D39\u4E13\u680F","children":[]}]},{"level":2,"title":"\u56DB\u3001\u4F18\u8D28\u516B\u80A1\u6587","slug":"\u56DB\u3001\u4F18\u8D28\u516B\u80A1\u6587","link":"#\u56DB\u3001\u4F18\u8D28\u516B\u80A1\u6587","children":[]},{"level":2,"title":"\u4E94\u3001Java \u5E76\u53D1\u5B66\u4E60\u5FC3\u5F97","slug":"\u4E94\u3001java-\u5E76\u53D1\u5B66\u4E60\u5FC3\u5F97","link":"#\u4E94\u3001java-\u5E76\u53D1\u5B66\u4E60\u5FC3\u5F97","children":[]}],"git":{"createdTime":1672048053000,"updatedTime":1672048053000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":11.06,"words":3318},"filePathRelative":"learning-path/java/thread.md","localizedDate":"2022\u5E7412\u670826\u65E5"}');export{e as data};
