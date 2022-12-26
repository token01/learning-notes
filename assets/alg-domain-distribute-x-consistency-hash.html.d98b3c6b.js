const e=JSON.parse('{"key":"v-42e67ce2","path":"/develop/algorithm/alg-domain-distribute-x-consistency-hash.html","title":"\u5206\u5E03\u5F0F\u7B97\u6CD5-\u4E00\u81F4\u6027Hash\u7B97\u6CD5","lang":"zh-CN","frontmatter":{"summary":"\u5206\u5E03\u5F0F\u7B97\u6CD5-\u4E00\u81F4\u6027Hash\u7B97\u6CD5 \\"\u4E00\u81F4\u6027Hash\u7B97\u6CD5\u662F\u4E2A\u7ECF\u5178\u7B97\u6CD5\uFF0CHash\u73AF\u7684\u5F15\u5165\u662F\u4E3A\u89E3\u51B3\u5355\u8C03\u6027(Monotonicity)\u7684\u95EE\u9898\uFF1B\u865A\u62DF\u8282\u70B9\u7684\u5F15\u5165\u662F\u4E3A\u4E86\u89E3\u51B3\u5E73\u8861\u6027(Balance)\u95EE\u9898\u3002\\" 1. \u4E00\u81F4\u6027Hash\u7B97\u6CD5\u5F15\u5165 \u5728\u5206\u5E03\u5F0F\u96C6\u7FA4\u4E2D\uFF0C\u5BF9\u673A\u5668\u7684\u6DFB\u52A0\u5220\u9664\uFF0C\u6216\u8005\u673A\u5668\u6545\u969C\u540E\u81EA\u52A8\u8131\u79BB\u96C6\u7FA4\u8FD9\u4E9B\u64CD\u4F5C\u662F\u5206\u5E03\u5F0F\u96C6\u7FA4\u7BA1\u7406\u6700\u57FA\u672C\u7684\u529F\u80FD\u3002\u5982\u679C\u91C7\u7528\u5E38\u7528\u7684hash(object)%N","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/develop/algorithm/alg-domain-distribute-x-consistency-hash.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5206\u5E03\u5F0F\u7B97\u6CD5-\u4E00\u81F4\u6027Hash\u7B97\u6CD5"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T12:17:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T12:17:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E00\u81F4\u6027Hash\u7B97\u6CD5\u5F15\u5165","slug":"_1-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u5F15\u5165","link":"#_1-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u5F15\u5165","children":[]},{"level":2,"title":"2.\u4E00\u81F4\u6027Hash\u7B97\u6CD5\u7B80\u4ECB","slug":"_2-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u7B80\u4ECB","link":"#_2-\u4E00\u81F4\u6027hash\u7B97\u6CD5\u7B80\u4ECB","children":[]},{"level":2,"title":"3. \u4E00\u81F4\u6027Hash\u7B97\u6CD5","slug":"_3-\u4E00\u81F4\u6027hash\u7B97\u6CD5","link":"#_3-\u4E00\u81F4\u6027hash\u7B97\u6CD5","children":[{"level":3,"title":"3.1 Hash\u73AF","slug":"_3-1-hash\u73AF","link":"#_3-1-hash\u73AF","children":[]},{"level":3,"title":"3.2 \u5220\u9664\u8282\u70B9","slug":"_3-2-\u5220\u9664\u8282\u70B9","link":"#_3-2-\u5220\u9664\u8282\u70B9","children":[]},{"level":3,"title":"3.3 \u589E\u52A0\u8282\u70B9","slug":"_3-3-\u589E\u52A0\u8282\u70B9","link":"#_3-3-\u589E\u52A0\u8282\u70B9","children":[]},{"level":3,"title":"3.4 \u4E0D\u5E73\u8861\u7684\u95EE\u9898","slug":"_3-4-\u4E0D\u5E73\u8861\u7684\u95EE\u9898","link":"#_3-4-\u4E0D\u5E73\u8861\u7684\u95EE\u9898","children":[]},{"level":3,"title":"3.5 \u865A\u62DF\u8282\u70B9","slug":"_3-5-\u865A\u62DF\u8282\u70B9","link":"#_3-5-\u865A\u62DF\u8282\u70B9","children":[]}]},{"level":2,"title":"4. \u4E00\u81F4\u6027Hash\u7684\u5E94\u7528","slug":"_4-\u4E00\u81F4\u6027hash\u7684\u5E94\u7528","link":"#_4-\u4E00\u81F4\u6027hash\u7684\u5E94\u7528","children":[{"level":3,"title":"4.1 nginx\u8D1F\u8F7D\u5747\u8861","slug":"_4-1-nginx\u8D1F\u8F7D\u5747\u8861","link":"#_4-1-nginx\u8D1F\u8F7D\u5747\u8861","children":[]},{"level":3,"title":"4.2 Redis\u96C6\u7FA4\u6A21\u5F0F","slug":"_4-2-redis\u96C6\u7FA4\u6A21\u5F0F","link":"#_4-2-redis\u96C6\u7FA4\u6A21\u5F0F","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672057027000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":4}]},"readingTime":{"minutes":7.77,"words":2330},"filePathRelative":"develop/algorithm/alg-domain-distribute-x-consistency-hash.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
