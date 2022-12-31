import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as n,a as e,b as a,d as t,f as d,r as i}from"./app.74b2ce1e.js";const p={},s=d('<blockquote><p>\u6D45\u8C08\u5171\u8BC6\u7B97\u6CD5|Raft\u7B97\u6CD5</p><p>\u914D\u5408\u4EE5\u4E0B\u4EE3\u7801\u8FDB\u884C\u9605\u8BFB\uFF1A&lt; /&gt;</p><p>\u5199\u6587\u4E0D\u6613\uFF0C\u7ED9\u4E2A\u5C0F\u5173\u6CE8\uFF0C\u6709\u4EC0\u4E48\u95EE\u9898\u53EF\u4EE5\u6307\u51FA\uFF0C\u4FBF\u4E8E\u5927\u5BB6\u4EA4\u6D41\u5B66\u4E60\u3002</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv4oqutq9j311x0lcwgh.jpg" alt="a01214b9197eecac0e30d703597788f0"></p><hr><h2 id="raft\u7B97\u6CD5\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#raft\u7B97\u6CD5\u6982\u8FF0" aria-hidden="true">#</a> Raft\u7B97\u6CD5\u6982\u8FF0</h2><p>\u4E0D\u540C\u4E8EPaxos\u7B97\u6CD5\u76F4\u63A5\u4ECE\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898\u51FA\u53D1\u63A8\u5BFC\u51FA\u6765\uFF0CRaft\u7B97\u6CD5\u5219\u662F\u4ECE\u591A\u526F\u672C\u72B6\u6001\u673A\u7684\u89D2\u5EA6\u63D0\u51FA\uFF0C\u7528\u4E8E\u7BA1\u7406\u591A\u526F\u672C\u72B6\u6001\u673A\u7684\u65E5\u5FD7\u590D\u5236\u3002Raft\u5B9E\u73B0\u4E86\u548CPaxos\u76F8\u540C\u7684\u529F\u80FD\uFF0C\u5B83\u5C06\u4E00\u81F4\u6027\u5206\u89E3\u4E3A\u591A\u4E2A\u5B50\u95EE\u9898\uFF1ALeader\u9009\u4E3E\uFF08Leader election\uFF09\u3001\u65E5\u5FD7\u540C\u6B65\uFF08Log replication\uFF09\u3001\u5B89\u5168\u6027\uFF08Safety\uFF09\u3001\u65E5\u5FD7\u538B\u7F29\uFF08Log compaction\uFF09\u3001\u6210\u5458\u53D8\u66F4\uFF08Membership change\uFF09\u7B49\u3002\u540C\u65F6\uFF0CRaft\u7B97\u6CD5\u4F7F\u7528\u4E86\u66F4\u5F3A\u7684\u5047\u8BBE\u6765\u51CF\u5C11\u4E86\u9700\u8981\u8003\u8651\u7684\u72B6\u6001\uFF0C\u4F7F\u4E4B\u53D8\u7684\u6613\u4E8E\u7406\u89E3\u548C\u5B9E\u73B0\u3002</p><h2 id="raft\u7B97\u6CD5\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#raft\u7B97\u6CD5\u89D2\u8272" aria-hidden="true">#</a> Raft\u7B97\u6CD5\u89D2\u8272</h2><p>Raft\u5C06\u7CFB\u7EDF\u4E2D\u7684\u89D2\u8272\u5206\u4E3A\u9886\u5BFC\u8005\uFF08Leader\uFF09\u3001\u8DDF\u4ECE\u8005\uFF08Follower\uFF09\u548C\u5019\u9009\u4EBA\uFF08Candidate\uFF09\uFF1A</p><ul><li><strong>Leader</strong>\uFF1A\u63A5\u53D7\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF0C\u5E76\u5411Follower\u540C\u6B65\u8BF7\u6C42\u65E5\u5FD7\uFF0C\u5F53\u65E5\u5FD7\u540C\u6B65\u5230\u5927\u591A\u6570\u8282\u70B9\u4E0A\u540E\u544A\u8BC9Follower\u63D0\u4EA4\u65E5\u5FD7\u3002</li><li><strong>Follower</strong>\uFF1A\u63A5\u53D7\u5E76\u6301\u4E45\u5316Leader\u540C\u6B65\u7684\u65E5\u5FD7\uFF0C\u5728Leader\u544A\u4E4B\u65E5\u5FD7\u53EF\u4EE5\u63D0\u4EA4\u4E4B\u540E\uFF0C\u63D0\u4EA4\u65E5\u5FD7\u3002</li><li><strong>Candidate</strong>\uFF1ALeader\u9009\u4E3E\u8FC7\u7A0B\u4E2D\u7684\u4E34\u65F6\u89D2\u8272\u3002</li></ul><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv5fibnnwj31bc0jgq4d.jpg" alt="image-20210221144024734"></p><p>Raft\u8981\u6C42\u7CFB\u7EDF\u5728\u4EFB\u610F\u65F6\u523B\u6700\u591A\u53EA\u6709\u4E00\u4E2ALeader\uFF0C\u6B63\u5E38\u5DE5\u4F5C\u671F\u95F4\u53EA\u6709Leader\u548CFollowers\u3002</p><p>Raft\u7B97\u6CD5\u89D2\u8272\u72B6\u6001\u8F6C\u6362\u5982\u4E0B\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv77wcjjrj31fy0i8akh.jpg" alt="image-20210221154232947"></p><p>Follower\u53EA\u54CD\u5E94\u5176\u4ED6\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u3002\u5982\u679CFollower\u8D85\u65F6\u6CA1\u6709\u6536\u5230Leader\u7684\u6D88\u606F\uFF0C\u5B83\u4F1A\u6210\u4E3A\u4E00\u4E2ACandidate\u5E76\u4E14\u5F00\u59CB\u4E00\u6B21Leader\u9009\u4E3E\u3002\u6536\u5230\u5927\u591A\u6570\u670D\u52A1\u5668\u6295\u7968\u7684Candidate\u4F1A\u6210\u4E3A\u65B0\u7684Leader\u3002Leader\u5728\u5B95\u673A\u4E4B\u524D\u4F1A\u4E00\u76F4\u4FDD\u6301Leader\u7684\u72B6\u6001\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv79etskij31c40f4ad7.jpg" alt="image-20210221154400705"></p><p>Raft\u7B97\u6CD5\u5C06\u65F6\u95F4\u5206\u4E3A\u4E00\u4E2A\u4E2A\u7684\u4EFB\u671F\uFF08term\uFF09\uFF0C\u6BCF\u4E00\u4E2Aterm\u7684\u5F00\u59CB\u90FD\u662FLeader\u9009\u4E3E\u3002\u5728\u6210\u529F\u9009\u4E3ELeader\u4E4B\u540E\uFF0CLeader\u4F1A\u5728\u6574\u4E2Aterm\u5185\u7BA1\u7406\u6574\u4E2A\u96C6\u7FA4\u3002\u5982\u679CLeader\u9009\u4E3E\u5931\u8D25\uFF0C\u8BE5term\u5C31\u4F1A\u56E0\u4E3A\u6CA1\u6709Leader\u800C\u7ED3\u675F\u3002</p><h2 id="leader\u9009\u4E3E" tabindex="-1"><a class="header-anchor" href="#leader\u9009\u4E3E" aria-hidden="true">#</a> Leader\u9009\u4E3E</h2><p>Raft \u4F7F\u7528\u5FC3\u8DF3\uFF08heartbeat\uFF09\u89E6\u53D1Leader\u9009\u4E3E\u3002\u5F53\u670D\u52A1\u5668\u542F\u52A8\u65F6\uFF0C\u521D\u59CB\u5316\u4E3AFollower\u3002Leader\u5411\u6240\u6709Followers\u5468\u671F\u6027\u53D1\u9001heartbeat\u3002\u5982\u679CFollower\u5728\u9009\u4E3E\u8D85\u65F6\u65F6\u95F4\u5185\u6CA1\u6709\u6536\u5230Leader\u7684heartbeat\uFF0C\u5C31\u4F1A\u7B49\u5F85\u4E00\u6BB5\u968F\u673A\u7684\u65F6\u95F4\u540E\u53D1\u8D77\u4E00\u6B21Leader\u9009\u4E3E\u3002</p><p>Follower\u5C06\u5176\u5F53\u524Dterm\u52A0\u4E00\u7136\u540E\u8F6C\u6362\u4E3ACandidate\u3002\u5B83\u9996\u5148\u7ED9\u81EA\u5DF1\u6295\u7968\u5E76\u4E14\u7ED9\u96C6\u7FA4\u4E2D\u7684\u5176\u4ED6\u670D\u52A1\u5668\u53D1\u9001 RequestVote RPC \u3002\u7ED3\u679C\u6709\u4EE5\u4E0B\u4E09\u79CD\u60C5\u51B5\uFF1A</p><ul><li>\u8D62\u5F97\u4E86\u591A\u6570\u7684\u9009\u7968\uFF0C\u6210\u529F\u9009\u4E3E\u4E3ALeader\uFF1B</li><li>\u6536\u5230\u4E86Leader\u7684\u6D88\u606F\uFF0C\u8868\u793A\u6709\u5176\u5B83\u670D\u52A1\u5668\u5DF2\u7ECF\u62A2\u5148\u5F53\u9009\u4E86Leader\uFF1B</li><li>\u6CA1\u6709\u670D\u52A1\u5668\u8D62\u5F97\u591A\u6570\u7684\u9009\u7968\uFF0CLeader\u9009\u4E3E\u5931\u8D25\uFF0C\u7B49\u5F85\u9009\u4E3E\u65F6\u95F4\u8D85\u65F6\u540E\u53D1\u8D77\u4E0B\u4E00\u6B21\u9009\u4E3E\u3002</li></ul><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7bruxirj30xi0u0jsy.jpg" alt="v2-0471619d1b78ba6d57326d97825d9495_r"></p><p>\u9009\u4E3E\u51FA<code>Leader</code>\u540E\uFF0C<code>Leader</code>\u901A\u8FC7\u5B9A\u671F\u5411\u6240\u6709<code>Followers</code>\u53D1\u9001\u5FC3\u8DF3\u4FE1\u606F\u7EF4\u6301\u5176\u7EDF\u6CBB\u3002\u82E5<code>Follower</code>\u4E00\u6BB5\u65F6\u95F4\u672A\u6536\u5230Leader\u7684\u5FC3\u8DF3\u5219\u8BA4\u4E3A<code>Leader</code>\u53EF\u80FD\u5DF2\u7ECF\u6302\u4E86\uFF0C\u518D\u6B21\u53D1\u8D77<code>Leader</code>\u9009\u4E3E\u8FC7\u7A0B\u3002</p><p><code>Raft</code>\u4FDD\u8BC1\u9009\u4E3E\u51FA\u7684<code>Leader</code>\u4E0A\u4E00\u5B9A\u5177\u6709\u6700\u65B0\u7684\u5DF2\u63D0\u4EA4\u7684\u65E5\u5FD7\u3002</p><h2 id="\u65E5\u5FD7\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u540C\u6B65" aria-hidden="true">#</a> \u65E5\u5FD7\u540C\u6B65</h2><p>Leader\u9009\u51FA\u540E\uFF0C\u5C31\u5F00\u59CB\u63A5\u6536\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u3002Leader\u628A\u8BF7\u6C42\u4F5C\u4E3A\u65E5\u5FD7\u6761\u76EE\uFF08Log entries\uFF09\u52A0\u5165\u5230\u5B83\u7684\u65E5\u5FD7\u4E2D\uFF0C\u7136\u540E\u5E76\u884C\u7684\u5411\u5176\u4ED6\u670D\u52A1\u5668\u53D1\u8D77 AppendEntries RPC \uFF08RPC\u7EC6\u8282\u53C2\u89C1\u516B\u3001Raft\u7B97\u6CD5\u603B\u7ED3\uFF09\u590D\u5236\u65E5\u5FD7\u6761\u76EE\u3002\u5F53\u8FD9\u6761\u65E5\u5FD7\u88AB\u590D\u5236\u5230\u5927\u591A\u6570\u670D\u52A1\u5668\u4E0A\uFF0CLeader\u5C06\u8FD9\u6761\u65E5\u5FD7\u5E94\u7528\u5230\u5B83\u7684\u72B6\u6001\u673A\u5E76\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u6267\u884C\u7ED3\u679C\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7dki1f3j31e60p6tfm.jpg" alt="image-20210221154800173"></p><p>\u67D0\u4E9BFollowers\u53EF\u80FD\u6CA1\u6709\u6210\u529F\u7684\u590D\u5236\u65E5\u5FD7\uFF0CLeader\u4F1A\u65E0\u9650\u7684\u91CD\u8BD5 AppendEntries RPC\u76F4\u5230\u6240\u6709\u7684Followers\u6700\u7EC8\u5B58\u50A8\u4E86\u6240\u6709\u7684\u65E5\u5FD7\u6761\u76EE\u3002</p><p>\u65E5\u5FD7\u7531\u6709\u5E8F\u7F16\u53F7\uFF08log index\uFF09\u7684\u65E5\u5FD7\u6761\u76EE\u7EC4\u6210\u3002\u6BCF\u4E2A\u65E5\u5FD7\u6761\u76EE\u5305\u542B\u5B83\u88AB\u521B\u5EFA\u65F6\u7684\u4EFB\u671F\u53F7\uFF08term\uFF09\uFF0C\u548C\u7528\u4E8E\u72B6\u6001\u673A\u6267\u884C\u7684\u547D\u4EE4\u3002\u5982\u679C\u4E00\u4E2A\u65E5\u5FD7\u6761\u76EE\u88AB\u590D\u5236\u5230\u5927\u591A\u6570\u670D\u52A1\u5668\u4E0A\uFF0C\u5C31\u88AB\u8BA4\u4E3A\u53EF\u4EE5\u63D0\u4EA4\uFF08commit\uFF09\u4E86\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7e5yoruj31h00skqm1.jpg" alt="image-20210221154824325"></p><p>Raft\u65E5\u5FD7\u540C\u6B65\u4FDD\u8BC1\u5982\u4E0B\u4E24\u70B9\uFF1A</p><ul><li>\u5982\u679C\u4E0D\u540C\u65E5\u5FD7\u4E2D\u7684\u4E24\u4E2A\u6761\u76EE\u6709\u7740\u76F8\u540C\u7684\u7D22\u5F15\u548C\u4EFB\u671F\u53F7\uFF0C\u5219\u5B83\u4EEC\u6240\u5B58\u50A8\u7684\u547D\u4EE4\u662F\u76F8\u540C\u7684\u3002</li><li>\u5982\u679C\u4E0D\u540C\u65E5\u5FD7\u4E2D\u7684\u4E24\u4E2A\u6761\u76EE\u6709\u7740\u76F8\u540C\u7684\u7D22\u5F15\u548C\u4EFB\u671F\u53F7\uFF0C\u5219\u5B83\u4EEC\u4E4B\u524D\u7684\u6240\u6709\u6761\u76EE\u90FD\u662F\u5B8C\u5168\u4E00\u6837\u7684\u3002</li></ul><p>\u7B2C\u4E00\u6761\u7279\u6027\u6E90\u4E8ELeader\u5728\u4E00\u4E2Aterm\u5185\u5728\u7ED9\u5B9A\u7684\u4E00\u4E2Alog index\u6700\u591A\u521B\u5EFA\u4E00\u6761\u65E5\u5FD7\u6761\u76EE\uFF0C\u540C\u65F6\u8BE5\u6761\u76EE\u5728\u65E5\u5FD7\u4E2D\u7684\u4F4D\u7F6E\u4E5F\u4ECE\u6765\u4E0D\u4F1A\u6539\u53D8\u3002</p><p>\u7B2C\u4E8C\u6761\u7279\u6027\u6E90\u4E8E AppendEntries \u7684\u4E00\u4E2A\u7B80\u5355\u7684\u4E00\u81F4\u6027\u68C0\u67E5\u3002\u5F53\u53D1\u9001\u4E00\u4E2A AppendEntries RPC \u65F6\uFF0CLeader\u4F1A\u628A\u65B0\u65E5\u5FD7\u6761\u76EE\u7D27\u63A5\u7740\u4E4B\u524D\u7684\u6761\u76EE\u7684log index\u548Cterm\u90FD\u5305\u542B\u5728\u91CC\u9762\u3002\u5982\u679CFollower\u6CA1\u6709\u5728\u5B83\u7684\u65E5\u5FD7\u4E2D\u627E\u5230log index\u548Cterm\u90FD\u76F8\u540C\u7684\u65E5\u5FD7\uFF0C\u5B83\u5C31\u4F1A\u62D2\u7EDD\u65B0\u7684\u65E5\u5FD7\u6761\u76EE\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0CLeader\u548CFollowers\u7684\u65E5\u5FD7\u4FDD\u6301\u4E00\u81F4\uFF0C\u56E0\u6B64 AppendEntries \u4E00\u81F4\u6027\u68C0\u67E5\u901A\u5E38\u4E0D\u4F1A\u5931\u8D25\u3002\u7136\u800C\uFF0CLeader\u5D29\u6E83\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E5\u5FD7\u4E0D\u4E00\u81F4\uFF1A\u65E7\u7684Leader\u53EF\u80FD\u6CA1\u6709\u5B8C\u5168\u590D\u5236\u5B8C\u65E5\u5FD7\u4E2D\u7684\u6240\u6709\u6761\u76EE\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7ejhdj4j31fu0p64fl.jpg" alt="image-20210221154856229"></p><p>\u4E0A\u56FE\u9610\u8FF0\u4E86\u4E00\u4E9BFollowers\u53EF\u80FD\u548C\u65B0\u7684Leader\u65E5\u5FD7\u4E0D\u540C\u7684\u60C5\u51B5\u3002\u4E00\u4E2AFollower\u53EF\u80FD\u4F1A\u4E22\u5931\u6389Leader\u4E0A\u7684\u4E00\u4E9B\u6761\u76EE\uFF0C\u4E5F\u6709\u53EF\u80FD\u5305\u542B\u4E00\u4E9BLeader\u6CA1\u6709\u7684\u6761\u76EE\uFF0C\u4E5F\u6709\u53EF\u80FD\u4E24\u8005\u90FD\u4F1A\u53D1\u751F\u3002\u4E22\u5931\u7684\u6216\u8005\u591A\u51FA\u6765\u7684\u6761\u76EE\u53EF\u80FD\u4F1A\u6301\u7EED\u591A\u4E2A\u4EFB\u671F\u3002</p><p>Leader\u901A\u8FC7\u5F3A\u5236Followers\u590D\u5236\u5B83\u7684\u65E5\u5FD7\u6765\u5904\u7406\u65E5\u5FD7\u7684\u4E0D\u4E00\u81F4\uFF0CFollowers\u4E0A\u7684\u4E0D\u4E00\u81F4\u7684\u65E5\u5FD7\u4F1A\u88ABLeader\u7684\u65E5\u5FD7\u8986\u76D6\u3002</p><p>Leader\u4E3A\u4E86\u4F7FFollowers\u7684\u65E5\u5FD7\u540C\u81EA\u5DF1\u7684\u4E00\u81F4\uFF0CLeader\u9700\u8981\u627E\u5230Followers\u540C\u5B83\u7684\u65E5\u5FD7\u4E00\u81F4\u7684\u5730\u65B9\uFF0C\u7136\u540E\u8986\u76D6Followers\u5728\u8BE5\u4F4D\u7F6E\u4E4B\u540E\u7684\u6761\u76EE\u3002</p><p>Leader\u4F1A\u4ECE\u540E\u5F80\u524D\u8BD5\uFF0C\u6BCF\u6B21AppendEntries\u5931\u8D25\u540E\u5C1D\u8BD5\u524D\u4E00\u4E2A\u65E5\u5FD7\u6761\u76EE\uFF0C\u76F4\u5230\u6210\u529F\u627E\u5230\u6BCF\u4E2AFollower\u7684\u65E5\u5FD7\u4E00\u81F4\u4F4D\u70B9\uFF0C\u7136\u540E\u5411\u540E\u9010\u6761\u8986\u76D6Followers\u5728\u8BE5\u4F4D\u7F6E\u4E4B\u540E\u7684\u6761\u76EE\u3002</p><h2 id="\u5B89\u5168\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u6027" aria-hidden="true">#</a> \u5B89\u5168\u6027</h2><p>Raft\u589E\u52A0\u4E86\u5982\u4E0B\u4E24\u6761\u9650\u5236\u4EE5\u4FDD\u8BC1\u5B89\u5168\u6027\uFF1A</p><ul><li>\u62E5\u6709\u6700\u65B0\u7684\u5DF2\u63D0\u4EA4\u7684log entry\u7684Follower\u624D\u6709\u8D44\u683C\u6210\u4E3ALeader\u3002</li></ul><p>\u8FD9\u4E2A\u4FDD\u8BC1\u662F\u5728RequestVote RPC\u4E2D\u505A\u7684\uFF0CCandidate\u5728\u53D1\u9001RequestVote RPC\u65F6\uFF0C\u8981\u5E26\u4E0A\u81EA\u5DF1\u7684\u6700\u540E\u4E00\u6761\u65E5\u5FD7\u7684term\u548Clog index\uFF0C\u5176\u4ED6\u8282\u70B9\u6536\u5230\u6D88\u606F\u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u81EA\u5DF1\u7684\u65E5\u5FD7\u6BD4\u8BF7\u6C42\u4E2D\u643A\u5E26\u7684\u66F4\u65B0\uFF0C\u5219\u62D2\u7EDD\u6295\u7968\u3002\u65E5\u5FD7\u6BD4\u8F83\u7684\u539F\u5219\u662F\uFF0C\u5982\u679C\u672C\u5730\u7684\u6700\u540E\u4E00\u6761log entry\u7684term\u66F4\u5927\uFF0C\u5219term\u5927\u7684\u66F4\u65B0\uFF0C\u5982\u679Cterm\u4E00\u6837\u5927\uFF0C\u5219log index\u66F4\u5927\u7684\u66F4\u65B0\u3002</p><ul><li>Leader\u53EA\u80FD\u63A8\u8FDBcommit index\u6765\u63D0\u4EA4\u5F53\u524Dterm\u7684\u5DF2\u7ECF\u590D\u5236\u5230\u5927\u591A\u6570\u670D\u52A1\u5668\u4E0A\u7684\u65E5\u5FD7\uFF0C\u65E7term\u65E5\u5FD7\u7684\u63D0\u4EA4\u8981\u7B49\u5230\u63D0\u4EA4\u5F53\u524Dterm\u7684\u65E5\u5FD7\u6765\u95F4\u63A5\u63D0\u4EA4\uFF08log index \u5C0F\u4E8E commit index\u7684\u65E5\u5FD7\u88AB\u95F4\u63A5\u63D0\u4EA4\uFF09\u3002</li></ul><p>\u4E4B\u6240\u4EE5\u8981\u8FD9\u6837\uFF0C\u662F\u56E0\u4E3A\u53EF\u80FD\u4F1A\u51FA\u73B0\u5DF2\u63D0\u4EA4\u7684\u65E5\u5FD7\u53C8\u88AB\u8986\u76D6\u7684\u60C5\u51B5\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7fah4fcj318k0kaar3.jpg" alt="image-20210221154938685"></p><p>\u5728\u9636\u6BB5a\uFF0Cterm\u4E3A2\uFF0CS1\u662FLeader\uFF0C\u4E14S1\u5199\u5165\u65E5\u5FD7\uFF08term, index\uFF09\u4E3A(2, 2)\uFF0C\u5E76\u4E14\u65E5\u5FD7\u88AB\u540C\u6B65\u5199\u5165\u4E86S2\uFF1B</p><p>\u5728\u9636\u6BB5b\uFF0CS1\u79BB\u7EBF\uFF0C\u89E6\u53D1\u4E00\u6B21\u65B0\u7684\u9009\u4E3B\uFF0C\u6B64\u65F6S5\u88AB\u9009\u4E3A\u65B0\u7684Leader\uFF0C\u6B64\u65F6\u7CFB\u7EDFterm\u4E3A3\uFF0C\u4E14\u5199\u5165\u4E86\u65E5\u5FD7\uFF08term, index\uFF09\u4E3A\uFF083\uFF0C 2\uFF09;</p><p>S5\u5C1A\u672A\u5C06\u65E5\u5FD7\u63A8\u9001\u5230Followers\u5C31\u79BB\u7EBF\u4E86\uFF0C\u8FDB\u800C\u89E6\u53D1\u4E86\u4E00\u6B21\u65B0\u7684\u9009\u4E3B\uFF0C\u800C\u4E4B\u524D\u79BB\u7EBF\u7684S1\u7ECF\u8FC7\u91CD\u65B0\u4E0A\u7EBF\u540E\u88AB\u9009\u4E2D\u53D8\u6210Leader\uFF0C\u6B64\u65F6\u7CFB\u7EDFterm\u4E3A4\uFF0C\u6B64\u65F6S1\u4F1A\u5C06\u81EA\u5DF1\u7684\u65E5\u5FD7\u540C\u6B65\u5230Followers\uFF0C\u6309\u7167\u4E0A\u56FE\u5C31\u662F\u5C06\u65E5\u5FD7\uFF082\uFF0C 2\uFF09\u540C\u6B65\u5230\u4E86S3\uFF0C\u800C\u6B64\u65F6\u7531\u4E8E\u8BE5\u65E5\u5FD7\u5DF2\u7ECF\u88AB\u540C\u6B65\u5230\u4E86\u591A\u6570\u8282\u70B9\uFF08S1, S2, S3\uFF09\uFF0C\u56E0\u6B64\uFF0C\u6B64\u65F6\u65E5\u5FD7\uFF082\uFF0C2\uFF09\u53EF\u4EE5\u88AB\u63D0\u4EA4\u4E86\u3002\uFF1B</p><p>\u5728\u9636\u6BB5d\uFF0CS1\u53C8\u4E0B\u7EBF\u4E86\uFF0C\u89E6\u53D1\u4E00\u6B21\u9009\u4E3B\uFF0C\u800CS5\u6709\u53EF\u80FD\u88AB\u9009\u4E3A\u65B0\u7684Leader\uFF08\u8FD9\u662F\u56E0\u4E3AS5\u53EF\u4EE5\u6EE1\u8DB3\u4F5C\u4E3A\u4E3B\u7684\u4E00\u5207\u6761\u4EF6\uFF1A1. term = 5 &gt; 4\uFF0C2. \u6700\u65B0\u7684\u65E5\u5FD7\u4E3A\uFF083\uFF0C2\uFF09\uFF0C\u6BD4\u5927\u591A\u6570\u8282\u70B9\uFF08\u5982S2/S3/S4\u7684\u65E5\u5FD7\u90FD\u65B0\uFF09\uFF0C\u7136\u540ES5\u4F1A\u5C06\u81EA\u5DF1\u7684\u65E5\u5FD7\u66F4\u65B0\u5230Followers\uFF0C\u4E8E\u662FS2\u3001S3\u4E2D\u5DF2\u7ECF\u88AB\u63D0\u4EA4\u7684\u65E5\u5FD7\uFF082\uFF0C2\uFF09\u88AB\u622A\u65AD\u4E86\u3002</p><p>\u589E\u52A0\u4E0A\u8FF0\u9650\u5236\u540E\uFF0C\u5373\u4F7F\u65E5\u5FD7\uFF082\uFF0C2\uFF09\u5DF2\u7ECF\u88AB\u5927\u591A\u6570\u8282\u70B9\uFF08S1\u3001S2\u3001S3\uFF09\u786E\u8BA4\u4E86\uFF0C\u4F46\u662F\u5B83\u4E0D\u80FD\u88AB\u63D0\u4EA4\uFF0C\u56E0\u4E3A\u5B83\u662F\u6765\u81EA\u4E4B\u524Dterm\uFF082\uFF09\u7684\u65E5\u5FD7\uFF0C\u76F4\u5230S1\u5728\u5F53\u524Dterm\uFF084\uFF09\u4EA7\u751F\u7684\u65E5\u5FD7\uFF084\uFF0C 4\uFF09\u88AB\u5927\u591A\u6570Followers\u786E\u8BA4\uFF0CS1\u65B9\u53EF\u63D0\u4EA4\u65E5\u5FD7\uFF084\uFF0C4\uFF09\u8FD9\u6761\u65E5\u5FD7\uFF0C\u5F53\u7136\uFF0C\u6839\u636ERaft\u5B9A\u4E49\uFF0C\uFF084\uFF0C4\uFF09\u4E4B\u524D\u7684\u6240\u6709\u65E5\u5FD7\u4E5F\u4F1A\u88AB\u63D0\u4EA4\u3002\u6B64\u65F6\u5373\u4F7FS1\u518D\u4E0B\u7EBF\uFF0C\u91CD\u65B0\u9009\u4E3B\u65F6S5\u4E0D\u53EF\u80FD\u6210\u4E3ALeader\uFF0C\u56E0\u4E3A\u5B83\u6CA1\u6709\u5305\u542B\u5927\u591A\u6570\u8282\u70B9\u5DF2\u7ECF\u62E5\u6709\u7684\u65E5\u5FD7\uFF084\uFF0C4\uFF09\u3002</p><h2 id="\u65E5\u5FD7\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u538B\u7F29" aria-hidden="true">#</a> \u65E5\u5FD7\u538B\u7F29</h2><p>\u5728\u5B9E\u9645\u7684\u7CFB\u7EDF\u4E2D\uFF0C\u4E0D\u80FD\u8BA9\u65E5\u5FD7\u65E0\u9650\u589E\u957F\uFF0C\u5426\u5219\u7CFB\u7EDF\u91CD\u542F\u65F6\u9700\u8981\u82B1\u5F88\u957F\u7684\u65F6\u95F4\u8FDB\u884C\u56DE\u653E\uFF0C\u4ECE\u800C\u5F71\u54CD\u53EF\u7528\u6027\u3002Raft\u91C7\u7528\u5BF9\u6574\u4E2A\u7CFB\u7EDF\u8FDB\u884Csnapshot\u6765\u89E3\u51B3\uFF0Csnapshot\u4E4B\u524D\u7684\u65E5\u5FD7\u90FD\u53EF\u4EE5\u4E22\u5F03\u3002</p><p>\u6BCF\u4E2A\u526F\u672C\u72EC\u7ACB\u7684\u5BF9\u81EA\u5DF1\u7684\u7CFB\u7EDF\u72B6\u6001\u8FDB\u884Csnapshot\uFF0C\u5E76\u4E14\u53EA\u80FD\u5BF9\u5DF2\u7ECF\u63D0\u4EA4\u7684\u65E5\u5FD7\u8BB0\u5F55\u8FDB\u884Csnapshot\u3002</p><p>Snapshot\u4E2D\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><ul><li>\u65E5\u5FD7\u5143\u6570\u636E\u3002\u6700\u540E\u4E00\u6761\u5DF2\u63D0\u4EA4\u7684 log entry\u7684 log index\u548Cterm\u3002\u8FD9\u4E24\u4E2A\u503C\u5728snapshot\u4E4B\u540E\u7684\u7B2C\u4E00\u6761log entry\u7684AppendEntries RPC\u7684\u5B8C\u6574\u6027\u68C0\u67E5\u7684\u65F6\u5019\u4F1A\u88AB\u7528\u4E0A\u3002</li><li>\u7CFB\u7EDF\u5F53\u524D\u72B6\u6001\u3002</li></ul><p>\u5F53Leader\u8981\u53D1\u7ED9\u67D0\u4E2A\u65E5\u5FD7\u843D\u540E\u592A\u591A\u7684Follower\u7684log entry\u88AB\u4E22\u5F03\uFF0CLeader\u4F1A\u5C06snapshot\u53D1\u7ED9Follower\u3002\u6216\u8005\u5F53\u65B0\u52A0\u8FDB\u4E00\u53F0\u673A\u5668\u65F6\uFF0C\u4E5F\u4F1A\u53D1\u9001snapshot\u7ED9\u5B83\u3002\u53D1\u9001snapshot\u4F7F\u7528InstalledSnapshot RPC\uFF08RPC\u7EC6\u8282\u53C2\u89C1\u516B\u3001Raft\u7B97\u6CD5\u603B\u7ED3\uFF09\u3002</p><p>\u505Asnapshot\u65E2\u4E0D\u8981\u505A\u7684\u592A\u9891\u7E41\uFF0C\u5426\u5219\u6D88\u8017\u78C1\u76D8\u5E26\u5BBD\uFF0C \u4E5F\u4E0D\u8981\u505A\u7684\u592A\u4E0D\u9891\u7E41\uFF0C\u5426\u5219\u4E00\u65E6\u8282\u70B9\u91CD\u542F\u9700\u8981\u56DE\u653E\u5927\u91CF\u65E5\u5FD7\uFF0C\u5F71\u54CD\u53EF\u7528\u6027\u3002\u63A8\u8350\u5F53\u65E5\u5FD7\u8FBE\u5230\u67D0\u4E2A\u56FA\u5B9A\u7684\u5927\u5C0F\u505A\u4E00\u6B21snapshot\u3002</p><p>\u505A\u4E00\u6B21snapshot\u53EF\u80FD\u8017\u65F6\u8FC7\u957F\uFF0C\u4F1A\u5F71\u54CD\u6B63\u5E38\u65E5\u5FD7\u540C\u6B65\u3002\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528copy-on-write\u6280\u672F\u907F\u514Dsnapshot\u8FC7\u7A0B\u5F71\u54CD\u6B63\u5E38\u65E5\u5FD7\u540C\u6B65\u3002</p><h2 id="\u6210\u5458\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u6210\u5458\u53D8\u66F4" aria-hidden="true">#</a> \u6210\u5458\u53D8\u66F4</h2><p>\u6210\u5458\u53D8\u66F4\u662F\u5728\u96C6\u7FA4\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u526F\u672C\u53D1\u751F\u53D8\u5316\uFF0C\u5982\u589E\u52A0/\u51CF\u5C11\u526F\u672C\u6570\u3001\u8282\u70B9\u66FF\u6362\u7B49\u3002</p><p>\u6210\u5458\u53D8\u66F4\u4E5F\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u65E2\u6240\u6709\u670D\u52A1\u5668\u5BF9\u65B0\u6210\u5458\u8FBE\u6210\u4E00\u81F4\u3002\u4F46\u662F\u6210\u5458\u53D8\u66F4\u53C8\u6709\u5176\u7279\u6B8A\u6027\uFF0C\u56E0\u4E3A\u5728\u6210\u5458\u53D8\u66F4\u7684\u4E00\u81F4\u6027\u8FBE\u6210\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53C2\u4E0E\u6295\u7968\u7684\u8FDB\u7A0B\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><p>\u5982\u679C\u5C06\u6210\u5458\u53D8\u66F4\u5F53\u6210\u4E00\u822C\u7684\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u76F4\u63A5\u5411Leader\u53D1\u9001\u6210\u5458\u53D8\u66F4\u8BF7\u6C42\uFF0CLeader\u590D\u5236\u6210\u5458\u53D8\u66F4\u65E5\u5FD7\uFF0C\u8FBE\u6210\u591A\u6570\u6D3E\u4E4B\u540E\u63D0\u4EA4\uFF0C\u5404\u670D\u52A1\u5668\u63D0\u4EA4\u6210\u5458\u53D8\u66F4\u65E5\u5FD7\u540E\u4ECE\u65E7\u6210\u5458\u914D\u7F6E\uFF08Cold\uFF09\u5207\u6362\u5230\u65B0\u6210\u5458\u914D\u7F6E\uFF08Cnew\uFF09\u3002</p><p>\u56E0\u4E3A\u5404\u4E2A\u670D\u52A1\u5668\u63D0\u4EA4\u6210\u5458\u53D8\u66F4\u65E5\u5FD7\u7684\u65F6\u523B\u53EF\u80FD\u4E0D\u540C\uFF0C\u9020\u6210\u5404\u4E2A\u670D\u52A1\u5668\u4ECE\u65E7\u6210\u5458\u914D\u7F6E\uFF08Cold\uFF09\u5207\u6362\u5230\u65B0\u6210\u5458\u914D\u7F6E\uFF08Cnew\uFF09\u7684\u65F6\u523B\u4E0D\u540C\u3002</p><p>\u6210\u5458\u53D8\u66F4\u4E0D\u80FD\u5F71\u54CD\u670D\u52A1\u7684\u53EF\u7528\u6027\uFF0C\u4F46\u662F\u6210\u5458\u53D8\u66F4\u8FC7\u7A0B\u7684\u67D0\u4E00\u65F6\u523B\uFF0C\u53EF\u80FD\u51FA\u73B0\u5728Cold\u548CCnew\u4E2D\u540C\u65F6\u5B58\u5728\u4E24\u4E2A\u4E0D\u76F8\u4EA4\u7684\u591A\u6570\u6D3E\uFF0C\u8FDB\u800C\u53EF\u80FD\u9009\u51FA\u4E24\u4E2ALeader\uFF0C\u5F62\u6210\u4E0D\u540C\u7684\u51B3\u8BAE\uFF0C\u7834\u574F\u5B89\u5168\u6027\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7gvonaej31dq0teae6.jpg" alt="image-20210221155100462"></p><p>\u7531\u4E8E\u6210\u5458\u53D8\u66F4\u7684\u8FD9\u4E00\u7279\u6B8A\u6027\uFF0C\u6210\u5458\u53D8\u66F4\u4E0D\u80FD\u5F53\u6210\u4E00\u822C\u7684\u4E00\u81F4\u6027\u95EE\u9898\u53BB\u89E3\u51B3\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0CRaft\u63D0\u51FA\u4E86\u4E24\u9636\u6BB5\u7684\u6210\u5458\u53D8\u66F4\u65B9\u6CD5\u3002\u96C6\u7FA4\u5148\u4ECE\u65E7\u6210\u5458\u914D\u7F6ECold\u5207\u6362\u5230\u4E00\u4E2A\u8FC7\u6E21\u6210\u5458\u914D\u7F6E\uFF0C\u79F0\u4E3A\u5171\u540C\u4E00\u81F4\uFF08joint consensus\uFF09\uFF0C\u5171\u540C\u4E00\u81F4\u662F\u65E7\u6210\u5458\u914D\u7F6ECold\u548C\u65B0\u6210\u5458\u914D\u7F6ECnew\u7684\u7EC4\u5408Cold U Cnew\uFF0C\u4E00\u65E6\u5171\u540C\u4E00\u81F4Cold U Cnew\u88AB\u63D0\u4EA4\uFF0C\u7CFB\u7EDF\u518D\u5207\u6362\u5230\u65B0\u6210\u5458\u914D\u7F6ECnew\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7h61euxj319s0m2n1e.jpg" alt="image-20210221155126751"></p><p>Raft\u4E24\u9636\u6BB5\u6210\u5458\u53D8\u66F4\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>Leader\u6536\u5230\u6210\u5458\u53D8\u66F4\u8BF7\u6C42\u4ECECold\u5207\u6210Cnew\uFF1B</li><li>Leader\u5728\u672C\u5730\u751F\u6210\u4E00\u4E2A\u65B0\u7684log entry\uFF0C\u5176\u5185\u5BB9\u662FCold\u222ACnew\uFF0C\u4EE3\u8868\u5F53\u524D\u65F6\u523B\u65B0\u65E7\u6210\u5458\u914D\u7F6E\u5171\u5B58\uFF0C\u5199\u5165\u672C\u5730\u65E5\u5FD7\uFF0C\u540C\u65F6\u5C06\u8BE5log entry\u590D\u5236\u81F3Cold\u222ACnew\u4E2D\u7684\u6240\u6709\u526F\u672C\u3002\u5728\u6B64\u4E4B\u540E\u65B0\u7684\u65E5\u5FD7\u540C\u6B65\u9700\u8981\u4FDD\u8BC1\u5F97\u5230Cold\u548CCnew\u4E24\u4E2A\u591A\u6570\u6D3E\u7684\u786E\u8BA4\uFF1B</li><li>Follower\u6536\u5230Cold\u222ACnew\u7684log entry\u540E\u66F4\u65B0\u672C\u5730\u65E5\u5FD7\uFF0C\u5E76\u4E14\u6B64\u65F6\u5C31\u4EE5\u8BE5\u914D\u7F6E\u4F5C\u4E3A\u81EA\u5DF1\u7684\u6210\u5458\u914D\u7F6E\uFF1B</li><li>\u5982\u679CCold\u548CCnew\u4E2D\u7684\u4E24\u4E2A\u591A\u6570\u6D3E\u786E\u8BA4\u4E86Cold U Cnew\u8FD9\u6761\u65E5\u5FD7\uFF0CLeader\u5C31\u63D0\u4EA4\u8FD9\u6761log entry\uFF1B</li><li>\u63A5\u4E0B\u6765Leader\u751F\u6210\u4E00\u6761\u65B0\u7684log entry\uFF0C\u5176\u5185\u5BB9\u662F\u65B0\u6210\u5458\u914D\u7F6ECnew\uFF0C\u540C\u6837\u5C06\u8BE5log entry\u5199\u5165\u672C\u5730\u65E5\u5FD7\uFF0C\u540C\u65F6\u590D\u5236\u5230Follower\u4E0A\uFF1B</li><li>Follower\u6536\u5230\u65B0\u6210\u5458\u914D\u7F6ECnew\u540E\uFF0C\u5C06\u5176\u5199\u5165\u65E5\u5FD7\uFF0C\u5E76\u4E14\u4ECE\u6B64\u523B\u8D77\uFF0C\u5C31\u4EE5\u8BE5\u914D\u7F6E\u4F5C\u4E3A\u81EA\u5DF1\u7684\u6210\u5458\u914D\u7F6E\uFF0C\u5E76\u4E14\u5982\u679C\u53D1\u73B0\u81EA\u5DF1\u4E0D\u5728Cnew\u8FD9\u4E2A\u6210\u5458\u914D\u7F6E\u4E2D\u4F1A\u81EA\u52A8\u9000\u51FA\uFF1B</li><li>Leader\u6536\u5230Cnew\u7684\u591A\u6570\u6D3E\u786E\u8BA4\u540E\uFF0C\u8868\u793A\u6210\u5458\u53D8\u66F4\u6210\u529F\uFF0C\u540E\u7EED\u7684\u65E5\u5FD7\u53EA\u8981\u5F97\u5230Cnew\u591A\u6570\u6D3E\u786E\u8BA4\u5373\u53EF\u3002Leader\u7ED9\u5BA2\u6237\u7AEF\u56DE\u590D\u6210\u5458\u53D8\u66F4\u6267\u884C\u6210\u529F\u3002</li></ol><p>\u5F02\u5E38\u5206\u6790\uFF1A</p><ul><li>\u5982\u679CLeader\u7684Cold U Cnew\u5C1A\u672A\u63A8\u9001\u5230Follower\uFF0CLeader\u5C31\u6302\u4E86\uFF0C\u6B64\u540E\u9009\u51FA\u7684\u65B0Leader\u5E76\u4E0D\u5305\u542B\u8FD9\u6761\u65E5\u5FD7\uFF0C\u6B64\u65F6\u65B0Leader\u4F9D\u7136\u4F7F\u7528Cold\u4F5C\u4E3A\u81EA\u5DF1\u7684\u6210\u5458\u914D\u7F6E\u3002</li><li>\u5982\u679CLeader\u7684Cold U Cnew\u63A8\u9001\u5230\u5927\u90E8\u5206\u7684Follower\u540E\u5C31\u6302\u4E86\uFF0C\u6B64\u540E\u9009\u51FA\u7684\u65B0Leader\u53EF\u80FD\u662FCold\u4E5F\u53EF\u80FD\u662FCnew\u4E2D\u7684\u67D0\u4E2AFollower\u3002</li><li>\u5982\u679CLeader\u5728\u63A8\u9001Cnew\u914D\u7F6E\u7684\u8FC7\u7A0B\u4E2D\u6302\u4E86\uFF0C\u90A3\u4E48\u540C\u6837\uFF0C\u65B0\u9009\u51FA\u6765\u7684Leader\u53EF\u80FD\u662FCold\u4E5F\u53EF\u80FD\u662FCnew\u4E2D\u7684\u67D0\u4E00\u4E2A\uFF0C\u6B64\u540E\u5BA2\u6237\u7AEF\u7EE7\u7EED\u6267\u884C\u4E00\u6B21\u6539\u53D8\u914D\u7F6E\u7684\u547D\u4EE4\u5373\u53EF\u3002</li><li>\u5982\u679C\u5927\u591A\u6570\u7684Follower\u786E\u8BA4\u4E86Cnew\u8FD9\u4E2A\u6D88\u606F\u540E\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u5373\u4F7FLeader\u6302\u4E86\uFF0C\u65B0\u9009\u51FA\u6765\u7684Leader\u80AF\u5B9A\u4F4D\u4E8ECnew\u4E2D\u3002</li></ul><p>\u4E24\u9636\u6BB5\u6210\u5458\u53D8\u66F4\u6BD4\u8F83\u901A\u7528\u4E14\u5BB9\u6613\u7406\u89E3\uFF0C\u4F46\u662F\u5B9E\u73B0\u6BD4\u8F83\u590D\u6742\uFF0C\u540C\u65F6\u4E24\u9636\u6BB5\u7684\u53D8\u66F4\u534F\u8BAE\u4E5F\u4F1A\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u53D8\u66F4\u8FC7\u7A0B\u4E2D\u7684\u670D\u52A1\u53EF\u7528\u6027\uFF0C\u56E0\u6B64\u6211\u4EEC\u671F\u671B\u589E\u5F3A\u6210\u5458\u53D8\u66F4\u7684\u9650\u5236\uFF0C\u4EE5\u7B80\u5316\u64CD\u4F5C\u6D41\u7A0B\u3002</p><p>\u4E24\u9636\u6BB5\u6210\u5458\u53D8\u66F4\uFF0C\u4E4B\u6240\u4EE5\u5206\u4E3A\u4E24\u4E2A\u9636\u6BB5\uFF0C\u662F\u56E0\u4E3A\u5BF9Cold\u4E0ECnew\u7684\u5173\u7CFB\u6CA1\u6709\u505A\u4EFB\u4F55\u5047\u8BBE\uFF0C\u4E3A\u4E86\u907F\u514DCold\u548CCnew\u5404\u81EA\u5F62\u6210\u4E0D\u76F8\u4EA4\u7684\u591A\u6570\u6D3E\u9009\u51FA\u4E24\u4E2ALeader\uFF0C\u624D\u5F15\u5165\u4E86\u4E24\u9636\u6BB5\u65B9\u6848\u3002</p><p>\u5982\u679C\u589E\u5F3A\u6210\u5458\u53D8\u66F4\u7684\u9650\u5236\uFF0C\u5047\u8BBECold\u4E0ECnew\u4EFB\u610F\u7684\u591A\u6570\u6D3E\u4EA4\u96C6\u4E0D\u4E3A\u7A7A\uFF0C\u8FD9\u4E24\u4E2A\u6210\u5458\u914D\u7F6E\u5C31\u65E0\u6CD5\u5404\u81EA\u5F62\u6210\u591A\u6570\u6D3E\uFF0C\u90A3\u4E48\u6210\u5458\u53D8\u66F4\u65B9\u6848\u5C31\u53EF\u80FD\u7B80\u5316\u4E3A\u4E00\u9636\u6BB5\u3002</p><p>\u90A3\u4E48\u5982\u4F55\u9650\u5236Cold\u4E0ECnew\uFF0C\u4F7F\u4E4B\u4EFB\u610F\u7684\u591A\u6570\u6D3E\u4EA4\u96C6\u4E0D\u4E3A\u7A7A\u5462\uFF1F\u65B9\u6CD5\u5C31\u662F\u6BCF\u6B21\u6210\u5458\u53D8\u66F4\u53EA\u5141\u8BB8\u589E\u52A0\u6216\u5220\u9664\u4E00\u4E2A\u6210\u5458\u3002</p><p>\u53EF\u4ECE\u6570\u5B66\u4E0A\u4E25\u683C\u8BC1\u660E\uFF0C\u53EA\u8981\u6BCF\u6B21\u53EA\u5141\u8BB8\u589E\u52A0\u6216\u5220\u9664\u4E00\u4E2A\u6210\u5458\uFF0CCold\u4E0ECnew\u4E0D\u53EF\u80FD\u5F62\u6210\u4E24\u4E2A\u4E0D\u76F8\u4EA4\u7684\u591A\u6570\u6D3E\u3002</p><p>\u4E00\u9636\u6BB5\u6210\u5458\u53D8\u66F4\uFF1A</p><ul><li>\u6210\u5458\u53D8\u66F4\u9650\u5236\u6BCF\u6B21\u53EA\u80FD\u589E\u52A0\u6216\u5220\u9664\u4E00\u4E2A\u6210\u5458\uFF08\u5982\u679C\u8981\u53D8\u66F4\u591A\u4E2A\u6210\u5458\uFF0C\u8FDE\u7EED\u53D8\u66F4\u591A\u6B21\uFF09\u3002</li><li>\u6210\u5458\u53D8\u66F4\u7531Leader\u53D1\u8D77\uFF0CCnew\u5F97\u5230\u591A\u6570\u6D3E\u786E\u8BA4\u540E\uFF0C\u8FD4\u56DE\u5BA2\u6237\u7AEF\u6210\u5458\u53D8\u66F4\u6210\u529F\u3002</li><li>\u4E00\u6B21\u6210\u5458\u53D8\u66F4\u6210\u529F\u524D\u4E0D\u5141\u8BB8\u5F00\u59CB\u4E0B\u4E00\u6B21\u6210\u5458\u53D8\u66F4\uFF0C\u56E0\u6B64\u65B0\u4EFBLeader\u5728\u5F00\u59CB\u63D0\u4F9B\u670D\u52A1\u524D\u8981\u5C06\u81EA\u5DF1\u672C\u5730\u4FDD\u5B58\u7684\u6700\u65B0\u6210\u5458\u914D\u7F6E\u91CD\u65B0\u6295\u7968\u5F62\u6210\u591A\u6570\u6D3E\u786E\u8BA4\u3002</li><li>Leader\u53EA\u8981\u5F00\u59CB\u540C\u6B65\u65B0\u6210\u5458\u914D\u7F6E\uFF0C\u5373\u53EF\u5F00\u59CB\u4F7F\u7528\u65B0\u7684\u6210\u5458\u914D\u7F6E\u8FDB\u884C\u65E5\u5FD7\u540C\u6B65\u3002</li></ul><h2 id="raft\u4E0Emulti-paxos\u7684\u5F02\u540C" tabindex="-1"><a class="header-anchor" href="#raft\u4E0Emulti-paxos\u7684\u5F02\u540C" aria-hidden="true">#</a> Raft\u4E0EMulti-Paxos\u7684\u5F02\u540C</h2><p>Raft\u4E0EMulti-Paxos\u90FD\u662F\u57FA\u4E8E\u9886\u5BFC\u8005\u7684\u4E00\u81F4\u6027\u7B97\u6CD5\uFF0C\u4E4D\u4E00\u770B\u6709\u5F88\u591A\u5730\u65B9\u76F8\u540C\uFF0C\u4E0B\u9762\u603B\u7ED3\u4E00\u4E0BRaft\u4E0EMulti-Paxos\u7684\u5F02\u540C\u3002</p><p>Raft\u4E0EMulti-Paxos\u4E2D\u76F8\u4F3C\u7684\u6982\u5FF5\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7hzg71cj31600iuq60.jpg" alt="image-20210221155202104"></p><p>Raft\u4E0EMulti-Paxos\u7684\u4E0D\u540C\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7iacddmj31780e2afb.jpg" alt="image-20210221155231875"></p><h2 id="\u5173\u4E8Eraft\u7684\u4E00\u4E9B\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Eraft\u7684\u4E00\u4E9B\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u5173\u4E8ERaft\u7684\u4E00\u4E9B\u9762\u8BD5\u9898</h2><h2 id="raft\u5206\u4E3A\u54EA\u51E0\u4E2A\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#raft\u5206\u4E3A\u54EA\u51E0\u4E2A\u90E8\u5206" aria-hidden="true">#</a> Raft\u5206\u4E3A\u54EA\u51E0\u4E2A\u90E8\u5206\uFF1F</h2><p><strong>\u4E3B\u8981\u662F\u5206\u4E3Aleader\u9009\u4E3E\u3001\u65E5\u5FD7\u590D\u5236\u3001\u65E5\u5FD7\u538B\u7F29\u3001\u6210\u5458\u53D8\u66F4\u7B49</strong>\u3002</p><h2 id="raft\u4E2D\u4EFB\u4F55\u8282\u70B9\u90FD\u53EF\u4EE5\u53D1\u8D77\u9009\u4E3E\u5417" tabindex="-1"><a class="header-anchor" href="#raft\u4E2D\u4EFB\u4F55\u8282\u70B9\u90FD\u53EF\u4EE5\u53D1\u8D77\u9009\u4E3E\u5417" aria-hidden="true">#</a> Raft\u4E2D\u4EFB\u4F55\u8282\u70B9\u90FD\u53EF\u4EE5\u53D1\u8D77\u9009\u4E3E\u5417\uFF1F</h2><p>Raft\u53D1\u8D77\u9009\u4E3E\u7684\u60C5\u51B5\u6709\u5982\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>\u521A\u542F\u52A8\u65F6\uFF0C\u6240\u6709\u8282\u70B9\u90FD\u662Ffollower\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53D1\u8D77\u9009\u4E3E\uFF0C\u9009\u51FA\u4E00\u4E2Aleader\uFF1B</li><li>\u5F53leader\u6302\u6389\u540E\uFF0C<strong>\u65F6\u949F\u6700\u5148\u8DD1\u5B8C\u7684follower\u53D1\u8D77\u91CD\u65B0\u9009\u4E3E\u64CD\u4F5C</strong>\uFF0C\u9009\u51FA\u4E00\u4E2A\u65B0\u7684leader\u3002</li><li>\u6210\u5458\u53D8\u66F4\u7684\u65F6\u5019\u4F1A\u53D1\u8D77\u9009\u4E3E\u64CD\u4F5C\u3002</li></ul><h2 id="raft\u4E2D\u9009\u4E3E\u4E2D\u7ED9\u5019\u9009\u4EBA\u6295\u7968\u7684\u524D\u63D0" tabindex="-1"><a class="header-anchor" href="#raft\u4E2D\u9009\u4E3E\u4E2D\u7ED9\u5019\u9009\u4EBA\u6295\u7968\u7684\u524D\u63D0" aria-hidden="true">#</a> Raft\u4E2D\u9009\u4E3E\u4E2D\u7ED9\u5019\u9009\u4EBA\u6295\u7968\u7684\u524D\u63D0\uFF1F</h2><p><strong>Raft\u786E\u4FDD\u65B0\u5F53\u9009\u7684Leader\u5305\u542B\u6240\u6709\u5DF2\u63D0\u4EA4\uFF08\u96C6\u7FA4\u4E2D\u5927\u591A\u6570\u6210\u5458\u4E2D\u5DF2\u63D0\u4EA4\uFF09\u7684\u65E5\u5FD7\u6761\u76EE</strong>\u3002\u8FD9\u4E2A\u4FDD\u8BC1\u662F\u5728RequestVoteRPC\u9636\u6BB5\u505A\u7684\uFF0Ccandidate\u5728\u53D1\u9001RequestVoteRPC\u65F6\uFF0C\u4F1A\u5E26\u4E0A\u81EA\u5DF1\u7684<strong>last log entry\u7684term_id\u548Cindex</strong>\uFF0Cfollower\u5728\u63A5\u6536\u5230RequestVoteRPC\u6D88\u606F\u65F6\uFF0C<strong>\u5982\u679C\u53D1\u73B0\u81EA\u5DF1\u7684\u65E5\u5FD7\u6BD4RPC\u4E2D\u7684\u66F4\u65B0\uFF0C\u5C31\u62D2\u7EDD\u6295\u7968</strong>\u3002\u65E5\u5FD7\u6BD4\u8F83\u7684\u539F\u5219\u662F\uFF0C\u5982\u679C\u672C\u5730\u7684\u6700\u540E\u4E00\u6761log entry\u7684term id\u66F4\u5927\uFF0C\u5219\u66F4\u65B0\uFF0C\u5982\u679Cterm id\u4E00\u6837\u5927\uFF0C\u5219\u65E5\u5FD7\u66F4\u591A\u7684\u66F4\u5927(index\u66F4\u5927)\u3002</p><h2 id="raft\u7F51\u7EDC\u5206\u533A\u4E0B\u7684\u6570\u636E\u4E00\u81F4\u6027\u600E\u4E48\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#raft\u7F51\u7EDC\u5206\u533A\u4E0B\u7684\u6570\u636E\u4E00\u81F4\u6027\u600E\u4E48\u89E3\u51B3" aria-hidden="true">#</a> Raft\u7F51\u7EDC\u5206\u533A\u4E0B\u7684\u6570\u636E\u4E00\u81F4\u6027\u600E\u4E48\u89E3\u51B3\uFF1F</h2><p>\u53D1\u751F\u4E86\u7F51\u7EDC\u5206\u533A\u6216\u8005\u7F51\u7EDC\u901A\u4FE1\u6545\u969C\uFF0C<strong>\u4F7F\u5F97Leader\u4E0D\u80FD\u8BBF\u95EE\u5927\u591A\u6570Follwer\u4E86\uFF0C\u90A3\u4E48Leader\u53EA\u80FD\u6B63\u5E38\u66F4\u65B0\u5B83\u80FD\u8BBF\u95EE\u7684\u90A3\u4E9BFollower\uFF0C\u800C\u5927\u591A\u6570\u7684Follower\u56E0\u4E3A\u6CA1\u6709\u4E86Leader\uFF0C\u4ED6\u4EEC\u91CD\u65B0\u9009\u51FA\u4E00\u4E2ALeader</strong>\uFF0C\u7136\u540E\u8FD9\u4E2A Leader\u6765\u63A5\u53D7\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u8981\u6C42\u5176\u6DFB\u52A0\u65B0\u7684\u65E5\u5FD7\uFF0C\u8FD9\u4E2A\u65B0\u7684Leader\u4F1A\u901A\u77E5\u5927\u591A\u6570Follower\u3002<strong>\u5982\u679C\u8FD9\u65F6\u7F51\u7EDC\u6545\u969C\u4FEE\u590D \u4E86\uFF0C\u90A3\u4E48\u539F\u5148\u7684Leader\u5C31\u53D8\u6210Follower\uFF0C\u5728\u5931\u8054\u9636\u6BB5\u8FD9\u4E2A\u8001Leader\u7684\u4EFB\u4F55\u66F4\u65B0\u90FD\u4E0D\u80FD\u7B97commit\uFF0C\u90FD\u56DE\u6EDA\uFF0C\u63A5\u53D7\u65B0\u7684Leader\u7684\u65B0\u7684\u66F4\u65B0\uFF08\u9012\u51CF\u67E5\u8BE2\u5339\u914D\u65E5\u5FD7\uFF09</strong>\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv7jwqaoqj31fg0s444e.jpg" alt="image-20210221155356395"></p><h2 id="raft\u6570\u636E\u4E00\u81F4\u6027\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#raft\u6570\u636E\u4E00\u81F4\u6027\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> Raft\u6570\u636E\u4E00\u81F4\u6027\u5982\u4F55\u5B9E\u73B0\uFF1F</h2><p><strong>\u4E3B\u8981\u662F\u901A\u8FC7\u65E5\u5FD7\u590D\u5236\u5B9E\u73B0\u6570\u636E\u4E00\u81F4\u6027\uFF0Cleader\u5C06\u8BF7\u6C42\u6307\u4EE4\u4F5C\u4E3A\u4E00\u6761\u65B0\u7684\u65E5\u5FD7\u6761\u76EE\u6DFB\u52A0\u5230\u65E5\u5FD7\u4E2D\uFF0C\u7136\u540E\u53D1\u8D77RPC \u7ED9\u6240\u6709\u7684follower\uFF0C\u8FDB\u884C\u65E5\u5FD7\u590D\u5236\uFF0C\u8FDB\u800C\u540C\u6B65\u6570\u636E</strong>\u3002</p><h2 id="raft\u7684\u65E5\u5FD7\u6709\u4EC0\u4E48\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#raft\u7684\u65E5\u5FD7\u6709\u4EC0\u4E48\u7279\u70B9" aria-hidden="true">#</a> Raft\u7684\u65E5\u5FD7\u6709\u4EC0\u4E48\u7279\u70B9\uFF1F</h2><p><strong>\u65E5\u5FD7\u7531\u6709\u5E8F\u7F16\u53F7\uFF08log index\uFF09\u7684\u65E5\u5FD7\u6761\u76EE\u7EC4\u6210\uFF0C\u6BCF\u4E2A\u65E5\u5FD7\u6761\u76EE\u5305\u542B\u5B83\u88AB\u521B\u5EFA\u65F6\u7684\u4EFB\u671F\u53F7\uFF08term\uFF09\u548C\u7528\u4E8E\u72B6\u6001\u673A\u6267\u884C\u7684\u547D\u4EE4</strong>\u3002</p><h2 id="raft\u91CC\u9762\u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u88ABcommit-leader\u5B95\u673A\u4E86\u4F1A\u600E\u6837-\u4E4B\u524D\u7684\u6CA1\u63D0\u4EA4\u7684\u6570\u636E\u4F1A\u600E\u6837" tabindex="-1"><a class="header-anchor" href="#raft\u91CC\u9762\u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u88ABcommit-leader\u5B95\u673A\u4E86\u4F1A\u600E\u6837-\u4E4B\u524D\u7684\u6CA1\u63D0\u4EA4\u7684\u6570\u636E\u4F1A\u600E\u6837" aria-hidden="true">#</a> Raft\u91CC\u9762\u600E\u4E48\u4FDD\u8BC1\u6570\u636E\u88ABcommit\uFF0Cleader\u5B95\u673A\u4E86\u4F1A\u600E\u6837\uFF0C\u4E4B\u524D\u7684\u6CA1\u63D0\u4EA4\u7684\u6570\u636E\u4F1A\u600E\u6837\uFF1F</h2><p><strong>leader\u4F1A\u901A\u8FC7RPC\u5411follower\u53D1\u51FA\u65E5\u5FD7\u590D\u5236\uFF0C\u7B49\u5F85\u6240\u6709\u7684follower\u590D\u5236\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u963B\u585E\u7684</strong>\u3002</p><p><strong>\u8001\u7684leader\u91CC\u9762\u6CA1\u63D0\u4EA4\u7684\u6570\u636E\u4F1A\u56DE\u6EDA\uFF0C\u7136\u540E\u540C\u6B65\u65B0leader\u7684\u6570\u636E</strong>\u3002</p><h2 id="raft\u65E5\u5FD7\u538B\u7F29\u662F\u600E\u4E48\u5B9E\u73B0\u7684-\u589E\u52A0\u6216\u5220\u9664\u8282\u70B9\u5462" tabindex="-1"><a class="header-anchor" href="#raft\u65E5\u5FD7\u538B\u7F29\u662F\u600E\u4E48\u5B9E\u73B0\u7684-\u589E\u52A0\u6216\u5220\u9664\u8282\u70B9\u5462" aria-hidden="true">#</a> Raft\u65E5\u5FD7\u538B\u7F29\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F\u589E\u52A0\u6216\u5220\u9664\u8282\u70B9\u5462\uFF1F\uFF1F</h2><p>\u5728\u5B9E\u9645\u7684\u7CFB\u7EDF\u4E2D\uFF0C<strong>\u4E0D\u80FD\u8BA9\u65E5\u5FD7\u65E0\u9650\u589E\u957F</strong>\uFF0C\u5426\u5219<strong>\u7CFB\u7EDF\u91CD\u542F\u65F6\u9700\u8981\u82B1\u5F88\u957F\u7684\u65F6\u95F4\u8FDB\u884C\u56DE\u653E</strong>\uFF0C\u4ECE\u800C\u5F71\u54CD\u53EF\u7528\u6027\u3002<strong>Raft\u91C7\u7528\u5BF9\u6574\u4E2A\u7CFB\u7EDF\u8FDB\u884Csnapshot\u6765\u89E3\u51B3\uFF0Csnapshot\u4E4B\u524D\u7684\u65E5\u5FD7\u90FD\u53EF\u4EE5\u4E22\u5F03\uFF08\u4EE5\u524D\u7684\u6570\u636E\u5DF2\u7ECF\u843D\u76D8\u4E86\uFF09</strong>\u3002</p><p><strong>snapshot\u91CC\u9762\u4E3B\u8981\u8BB0\u5F55\u7684\u662F\u65E5\u5FD7\u5143\u6570\u636E\uFF0C\u5373\u6700\u540E\u4E00\u6761\u5DF2\u63D0\u4EA4\u7684 log entry\u7684 log index\u548Cterm</strong>\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',107),h=e("p",null,"< >",-1),g=e("p",null,"\u516C\u53F7\uFF1AAbel sun \uFF08\u63A8\u8350\uFF09",-1),c={href:"https://raft.github.io/raft.pdf",target:"_blank",rel:"noopener noreferrer"},f={href:"http://thesecretlivesofdata.com/raft/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://raft.github.io/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://zhuanlan.zhihu.com/p/32052223",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/goraft/raft",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/maemual/raft-zh_cn/blob/master/raft-zh_cn.md",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/eliben/raft.git",target:"_blank",rel:"noopener noreferrer"};function R(b,x){const r=i("ExternalLinkIcon");return l(),n("div",null,[s,e("blockquote",null,[h,g,e("p",null,[e("a",c,[a("https://raft.github.io/raft.pdf"),t(r)])]),e("p",null,[e("a",f,[a("http://thesecretlivesofdata.com/raft/"),t(r)]),a(" \uFF08\u52A8\u753B\u6F14\u793A \u63A8\u8350\uFF09")]),e("p",null,[e("a",m,[a("https://raft.github.io/"),t(r)]),a(" \uFF08raft\u8D44\u6E90\uFF09")]),e("p",null,[e("a",L,[a("https://zhuanlan.zhihu.com/p/32052223"),t(r)])]),e("p",null,[e("a",u,[a("https://github.com/goraft/raft"),t(r)]),a(" \uFF08go\u8BED\u8A00\u5B9E\u73B0\uFF09")]),e("p",null,[e("a",w,[a("https://github.com/maemual/raft-zh_cn/blob/master/raft-zh_cn.md"),t(r)]),a("\uFF08\u4E2D\u6587\u7FFB\u8BD1\u5730\u5740\uFF09")]),e("p",null,[e("a",C,[a("https://github.com/eliben/raft.git"),t(r)])])])])}const j=o(p,[["render",R],["__file","6.Raft.html.vue"]]);export{j as default};
