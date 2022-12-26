const e=JSON.parse('{"key":"v-6aa9f02c","path":"/blockchain/male-chain-research/ethereum/Etheric_fang_clique_algorithm.html","title":"\u4EE5\u592A\u574Aclique\u7B97\u6CD5","lang":"zh-CN","frontmatter":{"title":"\u4EE5\u592A\u574Aclique\u7B97\u6CD5","shortTitle":"\u4EE5\u592A\u574Aclique\u7B97\u6CD5","category":["\u533A\u5757\u94FE"],"tag":["\u6D45\u8C08\u4EE5\u592A\u574A\u6E90\u7801\u5206\u6790"],"description":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF web3.0 \u533A\u5757\u94FE \u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6","head":[["meta",{"name":"keywords","content":"web3.0 \u533A\u5757\u94FE \u57FA\u7840\u77E5\u8BC6 P2P\u7F51\u7EDC"}],["meta",{"property":"og:url","content":"https://bytecodes.tech/blockchain/male-chain-research/ethereum/Etheric_fang_clique_algorithm.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u4EE5\u592A\u574Aclique\u7B97\u6CD5"}],["meta",{"property":"og:description","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF web3.0 \u533A\u5757\u94FE \u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-25T02:12:30.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"\u6D45\u8C08\u4EE5\u592A\u574A\u6E90\u7801\u5206\u6790"}],["meta",{"property":"article:modified_time","content":"2022-12-25T02:12:30.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"clique","slug":"clique","link":"#clique","children":[]},{"level":2,"title":"\u6E90\u7801\u5206\u6790","slug":"\u6E90\u7801\u5206\u6790","link":"#\u6E90\u7801\u5206\u6790","children":[]},{"level":2,"title":"Clique\u5E95\u5C42\u673A\u5236","slug":"clique\u5E95\u5C42\u673A\u5236","link":"#clique\u5E95\u5C42\u673A\u5236","children":[{"level":3,"title":"\u4E00\uFF1Aclique\u662F\u5982\u4F55\u786E\u5B9A\u7B7E\u540D\u8005\u4EE5\u53CA\u7B7E\u540D\u65B9\u6CD5\u7684\uFF1F","slug":"\u4E00-clique\u662F\u5982\u4F55\u786E\u5B9A\u7B7E\u540D\u8005\u4EE5\u53CA\u7B7E\u540D\u65B9\u6CD5\u7684","link":"#\u4E00-clique\u662F\u5982\u4F55\u786E\u5B9A\u7B7E\u540D\u8005\u4EE5\u53CA\u7B7E\u540D\u65B9\u6CD5\u7684","children":[]},{"level":3,"title":"Go\u8BED\u6CD5\u8865\u5145\uFF1AComma-ok\u65AD\u8A00","slug":"go\u8BED\u6CD5\u8865\u5145-comma-ok\u65AD\u8A00","link":"#go\u8BED\u6CD5\u8865\u5145-comma-ok\u65AD\u8A00","children":[]},{"level":3,"title":"\u4E8C\uFF1ASnapshot\u8D77\u5230\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F","slug":"\u4E8C-snapshot\u8D77\u5230\u7684\u4F5C\u7528\u662F\u4EC0\u4E48","link":"#\u4E8C-snapshot\u8D77\u5230\u7684\u4F5C\u7528\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"\u4E09\uFF1A\u8BA4\u8BC1\u7ED3\u70B9\u7684\u51FA\u5757\u673A\u4F1A\u5747\u7B49","slug":"\u4E09-\u8BA4\u8BC1\u7ED3\u70B9\u7684\u51FA\u5757\u673A\u4F1A\u5747\u7B49","link":"#\u4E09-\u8BA4\u8BC1\u7ED3\u70B9\u7684\u51FA\u5757\u673A\u4F1A\u5747\u7B49","children":[]},{"level":3,"title":"\u56DB\uFF1A\u51FA\u5757\u96BE\u5EA6","slug":"\u56DB-\u51FA\u5757\u96BE\u5EA6","link":"#\u56DB-\u51FA\u5757\u96BE\u5EA6","children":[]},{"level":3,"title":"\u4E94\uFF1A\u533A\u5757\u6821\u9A8C","slug":"\u4E94-\u533A\u5757\u6821\u9A8C","link":"#\u4E94-\u533A\u5757\u6821\u9A8C","children":[]},{"level":3,"title":"\u516D\uFF1A \u57FA\u4E8E\u6295\u7968\u7684\u8BA4\u8BC1\u7ED3\u70B9\u7684\u8FD0\u884C\u673A\u5236","slug":"\u516D-\u57FA\u4E8E\u6295\u7968\u7684\u8BA4\u8BC1\u7ED3\u70B9\u7684\u8FD0\u884C\u673A\u5236","link":"#\u516D-\u57FA\u4E8E\u6295\u7968\u7684\u8BA4\u8BC1\u7ED3\u70B9\u7684\u8FD0\u884C\u673A\u5236","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u603B\u7ED3&\u53C2\u8003","slug":"\u603B\u7ED3-\u53C2\u8003","link":"#\u603B\u7ED3-\u53C2\u8003","children":[]}],"git":{"createdTime":1671934350000,"updatedTime":1671934350000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":22.5,"words":6750},"filePathRelative":"blockchain/male-chain-research/ethereum/Etheric_fang_clique_algorithm.md","localizedDate":"2022\u5E7412\u670825\u65E5"}');export{e as data};
