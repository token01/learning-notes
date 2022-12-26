const e=JSON.parse('{"key":"v-5593e4a8","path":"/blockchain/technical-discussion/zero_knowledge_proof/Into_zero_knowledge_proof_data_collection.html","title":"\u6D45\u8C08\u96F6\u77E5\u8BC1\u660E","lang":"zh-CN","frontmatter":{"title":"\u6D45\u8C08\u96F6\u77E5\u8BC1\u660E","shortTitle":"\u6D45\u8C08\u96F6\u77E5\u8BC1\u660E","category":["\u533A\u5757\u94FE"],"tag":["\u6D45\u8C08\u96F6\u77E5\u8BC1\u660E"],"description":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF web3.0 \u533A\u5757\u94FE \u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6","head":[["meta",{"name":"keywords","content":"web3.0 \u533A\u5757\u94FE \u57FA\u7840\u77E5\u8BC6 P2P\u7F51\u7EDC"}],["meta",{"property":"og:url","content":"https://bytecodes.tech/blockchain/technical-discussion/zero_knowledge_proof/Into_zero_knowledge_proof_data_collection.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u6D45\u8C08\u96F6\u77E5\u8BC1\u660E"}],["meta",{"property":"og:description","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF web3.0 \u533A\u5757\u94FE \u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-25T02:12:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"\u6D45\u8C08\u96F6\u77E5\u8BC1\u660E"}],["meta",{"property":"article:modified_time","content":"2022-12-25T02:12:30.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6545\u4E8B\u4E2D\u7684\u96F6\u77E5\u8BC6\u8BC1\u660E","slug":"_1-\u6545\u4E8B\u4E2D\u7684\u96F6\u77E5\u8BC6\u8BC1\u660E","link":"#_1-\u6545\u4E8B\u4E2D\u7684\u96F6\u77E5\u8BC6\u8BC1\u660E","children":[]},{"level":2,"title":"2. \u6DF1\u5165\u7406\u89E3\u96F6\u77E5\u8BC6\u8BC1\u660E","slug":"_2-\u6DF1\u5165\u7406\u89E3\u96F6\u77E5\u8BC6\u8BC1\u660E","link":"#_2-\u6DF1\u5165\u7406\u89E3\u96F6\u77E5\u8BC6\u8BC1\u660E","children":[]},{"level":2,"title":"3. \u96F6\u77E5\u8BC6\u8BC1\u660E\u7684\u53D1\u5C55","slug":"_3-\u96F6\u77E5\u8BC6\u8BC1\u660E\u7684\u53D1\u5C55","link":"#_3-\u96F6\u77E5\u8BC6\u8BC1\u660E\u7684\u53D1\u5C55","children":[]},{"level":2,"title":"4. zk-SNARKs \u539F\u7406","slug":"_4-zk-snarks-\u539F\u7406","link":"#_4-zk-snarks-\u539F\u7406","children":[]},{"level":2,"title":"5. \u96F6\u77E5\u8BC6\u8BC1\u660E\u534F\u8BAE","slug":"_5-\u96F6\u77E5\u8BC6\u8BC1\u660E\u534F\u8BAE","link":"#_5-\u96F6\u77E5\u8BC6\u8BC1\u660E\u534F\u8BAE","children":[]},{"level":2,"title":"6. \u96F6\u77E5\u8BC6\u8BC1\u660E\u5728\u533A\u5757\u94FE\u9886\u57DF\u7684\u5E94\u7528","slug":"_6-\u96F6\u77E5\u8BC6\u8BC1\u660E\u5728\u533A\u5757\u94FE\u9886\u57DF\u7684\u5E94\u7528","link":"#_6-\u96F6\u77E5\u8BC6\u8BC1\u660E\u5728\u533A\u5757\u94FE\u9886\u57DF\u7684\u5E94\u7528","children":[]},{"level":2,"title":"7. \u96F6\u77E5\u8BC6\u8BC1\u660E\u76F8\u5173\u7684\u6280\u672F\u548C\u6F0F\u6D1E\u5206\u6790\u6587\u7AE0","slug":"_7-\u96F6\u77E5\u8BC6\u8BC1\u660E\u76F8\u5173\u7684\u6280\u672F\u548C\u6F0F\u6D1E\u5206\u6790\u6587\u7AE0","link":"#_7-\u96F6\u77E5\u8BC6\u8BC1\u660E\u76F8\u5173\u7684\u6280\u672F\u548C\u6F0F\u6D1E\u5206\u6790\u6587\u7AE0","children":[]},{"level":2,"title":"8. \u96F6\u77E5\u8BC6\u8BC1\u660E\u5F00\u6E90\u4ED3\u5E93\u53CA\u4ECB\u7ECD","slug":"_8-\u96F6\u77E5\u8BC6\u8BC1\u660E\u5F00\u6E90\u4ED3\u5E93\u53CA\u4ECB\u7ECD","link":"#_8-\u96F6\u77E5\u8BC6\u8BC1\u660E\u5F00\u6E90\u4ED3\u5E93\u53CA\u4ECB\u7ECD","children":[]},{"level":2,"title":"9. \u96F6\u77E5\u8BC6\u8BC1\u660E\u76F8\u5173\u8BBA\u6587","slug":"_9-\u96F6\u77E5\u8BC6\u8BC1\u660E\u76F8\u5173\u8BBA\u6587","link":"#_9-\u96F6\u77E5\u8BC6\u8BC1\u660E\u76F8\u5173\u8BBA\u6587","children":[]},{"level":2,"title":"10. \u96F6\u77E5\u8BC6\u8BC1\u660E\u5B66\u4E60\u8D44\u6599\u63A8\u8350\u7F51\u7AD9","slug":"_10-\u96F6\u77E5\u8BC6\u8BC1\u660E\u5B66\u4E60\u8D44\u6599\u63A8\u8350\u7F51\u7AD9","link":"#_10-\u96F6\u77E5\u8BC6\u8BC1\u660E\u5B66\u4E60\u8D44\u6599\u63A8\u8350\u7F51\u7AD9","children":[]}],"git":{"createdTime":1671934350000,"updatedTime":1671934350000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":22.05,"words":6615},"filePathRelative":"blockchain/technical-discussion/zero_knowledge_proof/Into_zero_knowledge_proof_data_collection.md","localizedDate":"2022\u5E7412\u670825\u65E5"}');export{e as data};
