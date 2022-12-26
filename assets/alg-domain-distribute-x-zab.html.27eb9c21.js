import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as e,d as i,f as p,r as d}from"./app.41a23dcf.js";const t={},s=p('<h1 id="\u5206\u5E03\u5F0F\u7B97\u6CD5-zab\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u7B97\u6CD5-zab\u7B97\u6CD5" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u7B97\u6CD5-ZAB\u7B97\u6CD5</h1><blockquote><p>ZAB \u534F\u8BAE\u5168\u79F0\uFF1AZookeeper Atomic Broadcast\uFF08Zookeeper \u539F\u5B50\u5E7F\u64AD\u534F\u8BAE\uFF09, \u5B83\u5E94\u8BE5\u662F\u6240\u6709\u4E00\u81F4\u6027\u534F\u8BAE\u4E2D\u751F\u4EA7\u73AF\u5883\u4E2D\u5E94\u7528\u6700\u591A\u7684\u4E86\u3002\u4E3A\u4EC0\u4E48\u5462\uFF1F\u56E0\u4E3A\u5B83\u662F\u4E3A Zookeeper \u8BBE\u8BA1\u7684\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u534F\u8BAE\uFF01</p></blockquote><h2 id="_1-\u4EC0\u4E48\u662F-zab-\u534F\u8BAE-zab-\u534F\u8BAE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F-zab-\u534F\u8BAE-zab-\u534F\u8BAE\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F ZAB \u534F\u8BAE\uFF1F ZAB \u534F\u8BAE\u4ECB\u7ECD</h2><blockquote><p>ZAB \u534F\u8BAE\u5168\u79F0\uFF1AZookeeper Atomic Broadcast\uFF08Zookeeper \u539F\u5B50\u5E7F\u64AD\u534F\u8BAE\uFF09\u3002</p></blockquote><ol><li>Zookeeper \u662F\u4E00\u4E2A\u4E3A\u5206\u5E03\u5F0F\u5E94\u7528\u63D0\u4F9B\u9AD8\u6548\u4E14\u53EF\u9760\u7684\u5206\u5E03\u5F0F\u534F\u8C03\u670D\u52A1\u3002\u5728\u89E3\u51B3\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u65B9\u9762\uFF0CZookeeper \u5E76\u6CA1\u6709\u4F7F\u7528 Paxos \uFF0C\u800C\u662F\u91C7\u7528\u4E86 ZAB \u534F\u8BAE\u3002</li><li>ZAB \u534F\u8BAE\u5B9A\u4E49\uFF1A<strong>ZAB \u534F\u8BAE\u662F\u4E3A\u5206\u5E03\u5F0F\u534F\u8C03\u670D\u52A1 Zookeeper \u4E13\u95E8\u8BBE\u8BA1\u7684\u4E00\u79CD\u652F\u6301 <code>\u5D29\u6E83\u6062\u590D</code> \u548C <code>\u539F\u5B50\u5E7F\u64AD</code> \u534F\u8BAE</strong>\u3002\u4E0B\u9762\u6211\u4EEC\u4F1A\u91CD\u70B9\u8BB2\u8FD9\u4E24\u4E2A\u4E1C\u897F\u3002</li><li>\u57FA\u4E8E\u8BE5\u534F\u8BAE\uFF0CZookeeper \u5B9E\u73B0\u4E86\u4E00\u79CD \u4E3B\u5907\u6A21\u5F0F \u7684\u7CFB\u7EDF\u67B6\u6784\u6765\u4FDD\u6301\u96C6\u7FA4\u4E2D\u5404\u4E2A\u526F\u672C\u4E4B\u95F4\u6570\u636E\u4E00\u81F4\u6027\u3002\u5177\u4F53\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618230143593.png" alt="image-20220618230143593"></p><p>\u4E0A\u56FE\u663E\u793A\u4E86 Zookeeper \u5982\u4F55\u5904\u7406\u96C6\u7FA4\u4E2D\u7684\u6570\u636E\u3002\u6240\u6709\u5BA2\u6237\u7AEF\u5199\u5165\u6570\u636E\u90FD\u662F\u5199\u5165\u5230 \u4E3B\u8FDB\u7A0B\uFF08\u79F0\u4E3A Leader\uFF09\u4E2D\uFF0C\u7136\u540E\uFF0C\u7531 Leader \u590D\u5236\u5230\u5907\u4EFD\u8FDB\u7A0B\uFF08\u79F0\u4E3A Follower\uFF09\u4E2D\u3002\u4ECE\u800C\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u6027\u3002\u4ECE\u8BBE\u8BA1\u4E0A\u770B\uFF0C\u548C Raft \u7C7B\u4F3C\u3002</p><ol><li>\u90A3\u4E48\u590D\u5236\u8FC7\u7A0B\u53C8\u662F\u5982\u4F55\u7684\u5462\uFF1F\u590D\u5236\u8FC7\u7A0B\u7C7B\u4F3C 2PC\uFF0CZAB \u53EA\u9700\u8981 Follower \u6709\u4E00\u534A\u4EE5\u4E0A\u8FD4\u56DE Ack \u4FE1\u606F\u5C31\u53EF\u4EE5\u6267\u884C\u63D0\u4EA4\uFF0C\u5927\u5927\u51CF\u5C0F\u4E86\u540C\u6B65\u963B\u585E\u3002\u4E5F\u63D0\u9AD8\u4E86\u53EF\u7528\u6027\u3002</li></ol><p>\u7B80\u5355\u4ECB\u7ECD\u5B8C\uFF0C\u5F00\u59CB\u91CD\u70B9\u4ECB\u7ECD <code>\u6D88\u606F\u5E7F\u64AD</code> \u548C <code>\u5D29\u6E83\u6062\u590D</code>\u3002<strong>\u6574\u4E2A Zookeeper \u5C31\u662F\u5728\u8FD9\u4E24\u4E2A\u6A21\u5F0F\u4E4B\u95F4\u5207\u6362</strong>\u3002 \u7B80\u800C\u8A00\u4E4B\uFF0C\u5F53 Leader \u670D\u52A1\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\uFF0C\u5C31\u8FDB\u5165\u6D88\u606F\u5E7F\u64AD\u6A21\u5F0F\uFF0C\u5F53 Leader \u4E0D\u53EF\u7528\u65F6\uFF0C\u5219\u8FDB\u5165\u5D29\u6E83\u6062\u590D\u6A21\u5F0F\u3002</p><h2 id="_2-\u6D88\u606F\u5E7F\u64AD" tabindex="-1"><a class="header-anchor" href="#_2-\u6D88\u606F\u5E7F\u64AD" aria-hidden="true">#</a> 2. \u6D88\u606F\u5E7F\u64AD</h2><p>ZAB \u534F\u8BAE\u7684\u6D88\u606F\u5E7F\u64AD\u8FC7\u7A0B\u4F7F\u7528\u7684\u662F\u4E00\u4E2A\u539F\u5B50\u5E7F\u64AD\u534F\u8BAE\uFF0C\u7C7B\u4F3C\u4E00\u4E2A \u4E8C\u9636\u6BB5\u63D0\u4EA4\u8FC7\u7A0B\u3002\u5BF9\u4E8E\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u5199\u8BF7\u6C42\uFF0C\u5168\u90E8\u7531 Leader \u63A5\u6536\uFF0CLeader \u5C06\u8BF7\u6C42\u5C01\u88C5\u6210\u4E00\u4E2A\u4E8B\u52A1 Proposal\uFF0C\u5C06\u5176\u53D1\u9001\u7ED9\u6240\u6709 Follwer \uFF0C\u7136\u540E\uFF0C\u6839\u636E\u6240\u6709 Follwer \u7684\u53CD\u9988\uFF0C\u5982\u679C\u8D85\u8FC7\u534A\u6570\u6210\u529F\u54CD\u5E94\uFF0C\u5219\u6267\u884C commit \u64CD\u4F5C\uFF08\u5148\u63D0\u4EA4\u81EA\u5DF1\uFF0C\u518D\u53D1\u9001 commit \u7ED9\u6240\u6709 Follwer\uFF09\u3002</p><p>\u57FA\u672C\u4E0A\uFF0C\u6574\u4E2A\u5E7F\u64AD\u6D41\u7A0B\u5206\u4E3A 3 \u6B65\u9AA4\uFF1A</p><p>1.\u5C06\u6570\u636E\u90FD\u590D\u5236\u5230 Follwer \u4E2D</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618230345599.png" alt="image-20220618230345599"></p><p>\u7B49\u5F85 Follwer \u56DE\u5E94 Ack\uFF0C\u6700\u4F4E\u8D85\u8FC7\u534A\u6570\u5373\u6210\u529F</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618230734503.png" alt="image-20220618230734503"></p><p>\u5F53\u8D85\u8FC7\u534A\u6570\u6210\u529F\u56DE\u5E94\uFF0C\u5219\u6267\u884C commit \uFF0C\u540C\u65F6\u63D0\u4EA4\u81EA\u5DF1</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618233345216.png" alt="image-20220618233345216"></p><p>\u901A\u8FC7\u4EE5\u4E0A 3 \u4E2A\u6B65\u9AA4\uFF0C\u5C31\u80FD\u591F\u4FDD\u6301\u96C6\u7FA4\u4E4B\u95F4\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002\u5B9E\u9645\u4E0A\uFF0C\u5728 Leader \u548C Follwer \u4E4B\u95F4\u8FD8\u6709\u4E00\u4E2A\u6D88\u606F\u961F\u5217\uFF0C\u7528\u6765\u89E3\u8026\u4ED6\u4EEC\u4E4B\u95F4\u7684\u8026\u5408\uFF0C\u907F\u514D\u540C\u6B65\uFF0C\u5B9E\u73B0\u5F02\u6B65\u89E3\u8026\u3002</p><p>\u8FD8\u6709\u4E00\u4E9B\u7EC6\u8282\uFF1A</p><ul><li>Leader \u5728\u6536\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E4B\u540E\uFF0C\u4F1A\u5C06\u8FD9\u4E2A\u8BF7\u6C42\u5C01\u88C5\u6210\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u5E76\u7ED9\u8FD9\u4E2A\u4E8B\u52A1\u5206\u914D\u4E00\u4E2A\u5168\u5C40\u9012\u589E\u7684\u552F\u4E00 ID\uFF0C\u79F0\u4E3A\u4E8B\u52A1ID\uFF08ZXID\uFF09\uFF0CZAB \u516E\u534F\u8BAE\u9700\u8981\u4FDD\u8BC1\u4E8B\u52A1\u7684\u987A\u5E8F\uFF0C\u56E0\u6B64\u5FC5\u987B\u5C06\u6BCF\u4E00\u4E2A\u4E8B\u52A1\u6309\u7167 ZXID \u8FDB\u884C\u5148\u540E\u6392\u5E8F\u7136\u540E\u5904\u7406\u3002</li><li>\u5728 Leader \u548C Follwer \u4E4B\u95F4\u8FD8\u6709\u4E00\u4E2A\u6D88\u606F\u961F\u5217\uFF0C\u7528\u6765\u89E3\u8026\u4ED6\u4EEC\u4E4B\u95F4\u7684\u8026\u5408\uFF0C\u89E3\u9664\u540C\u6B65\u963B\u585E\u3002</li><li>zookeeper\u96C6\u7FA4\u4E2D\u4E3A\u4FDD\u8BC1\u4EFB\u4F55\u6240\u6709\u8FDB\u7A0B\u80FD\u591F\u6709\u5E8F\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u53EA\u80FD\u662F Leader \u670D\u52A1\u5668\u63A5\u53D7\u5199\u8BF7\u6C42\uFF0C\u5373\u4F7F\u662F Follower \u670D\u52A1\u5668\u63A5\u53D7\u5230\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u4E5F\u4F1A\u8F6C\u53D1\u5230 Leader \u670D\u52A1\u5668\u8FDB\u884C\u5904\u7406\u3002</li><li>\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u662F\u4E00\u79CD\u7B80\u5316\u7248\u672C\u7684 2PC\uFF0C\u4E0D\u80FD\u89E3\u51B3\u5355\u70B9\u95EE\u9898\u3002\u7B49\u4F1A\u6211\u4EEC\u4F1A\u8BB2\u8FF0 ZAB \u5982\u4F55\u89E3\u51B3\u5355\u70B9\u95EE\u9898\uFF08\u5373 Leader \u5D29\u6E83\u95EE\u9898\uFF09\u3002</li></ul><h2 id="_3-\u5D29\u6E83\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#_3-\u5D29\u6E83\u6062\u590D" aria-hidden="true">#</a> 3. \u5D29\u6E83\u6062\u590D</h2><p>\u521A\u521A\u6211\u4EEC\u8BF4\u6D88\u606F\u5E7F\u64AD\u8FC7\u7A0B\u4E2D\uFF0CLeader \u5D29\u6E83\u600E\u4E48\u529E\uFF1F\u8FD8\u80FD\u4FDD\u8BC1\u6570\u636E\u4E00\u81F4\u5417\uFF1F\u5982\u679C Leader \u5148\u672C\u5730\u63D0\u4EA4\u4E86\uFF0C\u7136\u540E commit \u8BF7\u6C42\u6CA1\u6709\u53D1\u9001\u51FA\u53BB\uFF0C\u600E\u4E48\u529E\uFF1F</p><p>\u5B9E\u9645\u4E0A\uFF0C\u5F53 Leader \u5D29\u6E83\uFF0C\u5373\u8FDB\u5165\u6211\u4EEC\u5F00\u5934\u6240\u8BF4\u7684\u5D29\u6E83\u6062\u590D\u6A21\u5F0F\uFF08\u5D29\u6E83\u5373\uFF1ALeader \u5931\u53BB\u4E0E\u8FC7\u534A Follwer \u7684\u8054\u7CFB\uFF09\u3002\u4E0B\u9762\u6765\u8BE6\u7EC6\u8BB2\u8FF0\u3002</p><ul><li>\u5047\u8BBE1\uFF1ALeader \u5728\u590D\u5236\u6570\u636E\u7ED9\u6240\u6709 Follwer \u4E4B\u540E\u5D29\u6E83\uFF0C\u600E\u4E48\u529E\uFF1F</li><li>\u5047\u8BBE2\uFF1ALeader \u5728\u6536\u5230 Ack \u5E76\u63D0\u4EA4\u4E86\u81EA\u5DF1\uFF0C\u540C\u65F6\u53D1\u9001\u4E86\u90E8\u5206 commit \u51FA\u53BB\u4E4B\u540E\u5D29\u6E83\u600E\u4E48\u529E\uFF1F</li></ul><p>\u9488\u5BF9\u8FD9\u4E9B\u95EE\u9898\uFF0CZAB \u5B9A\u4E49\u4E86 2 \u4E2A\u539F\u5219\uFF1A</p><ul><li>ZAB \u534F\u8BAE\u786E\u4FDD\u90A3\u4E9B\u5DF2\u7ECF\u5728 Leader \u63D0\u4EA4\u7684\u4E8B\u52A1\u6700\u7EC8\u4F1A\u88AB\u6240\u6709\u670D\u52A1\u5668\u63D0\u4EA4\u3002</li><li>ZAB \u534F\u8BAE\u786E\u4FDD\u4E22\u5F03\u90A3\u4E9B\u53EA\u5728 Leader \u63D0\u51FA/\u590D\u5236\uFF0C\u4F46\u6CA1\u6709\u63D0\u4EA4\u7684\u4E8B\u52A1\u3002</li></ul><p>\u6240\u4EE5\uFF0CZAB \u8BBE\u8BA1\u4E86\u4E0B\u9762\u8FD9\u6837\u4E00\u4E2A\u9009\u4E3E\u7B97\u6CD5\uFF1A<strong>\u80FD\u591F\u786E\u4FDD\u63D0\u4EA4\u5DF2\u7ECF\u88AB Leader \u63D0\u4EA4\u7684\u4E8B\u52A1\uFF0C\u540C\u65F6\u4E22\u5F03\u5DF2\u7ECF\u88AB\u8DF3\u8FC7\u7684\u4E8B\u52A1</strong>\u3002</p><p>\u9488\u5BF9\u8FD9\u4E2A\u8981\u6C42\uFF0C\u5982\u679C\u8BA9 Leader \u9009\u4E3E\u7B97\u6CD5\u80FD\u591F\u4FDD\u8BC1\u65B0\u9009\u4E3E\u51FA\u6765\u7684 Leader \u670D\u52A1\u5668\u62E5\u6709\u96C6\u7FA4\u603B\u6240\u6709\u673A\u5668\u7F16\u53F7\uFF08\u5373 ZXID \u6700\u5927\uFF09\u7684\u4E8B\u52A1\uFF0C\u90A3\u4E48\u5C31\u80FD\u591F\u4FDD\u8BC1\u8FD9\u4E2A\u65B0\u9009\u4E3E\u51FA\u6765\u7684 Leader \u4E00\u5B9A\u5177\u6709\u6240\u6709\u5DF2\u7ECF\u63D0\u4EA4\u7684\u63D0\u6848\u3002</p><p>\u800C\u4E14\u8FD9\u4E48\u505A\u6709\u4E00\u4E2A\u597D\u5904\u662F\uFF1A<strong>\u53EF\u4EE5\u7701\u53BB Leader \u670D\u52A1\u5668\u68C0\u67E5\u4E8B\u52A1\u7684\u63D0\u4EA4\u548C\u4E22\u5F03\u5DE5\u4F5C\u7684\u8FD9\u4E00\u6B65\u64CD\u4F5C</strong>\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618233525983.png" alt="image-20220618233525983"></p><p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u521A\u521A\u5047\u8BBE\u7684\u4E24\u4E2A\u95EE\u9898\u4FBF\u80FD\u591F\u89E3\u51B3\u3002\u5047\u8BBE 1 \u6700\u7EC8\u4F1A\u4E22\u5F03\u8C03\u7528\u6CA1\u6709\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u5047\u8BBE 2 \u6700\u7EC8\u4F1A\u540C\u6B65\u6240\u6709\u670D\u52A1\u5668\u7684\u6570\u636E\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u5C31\u5F15\u51FA\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u4F55\u540C\u6B65\uFF1F</p><h2 id="_4-\u6570\u636E\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#_4-\u6570\u636E\u540C\u6B65" aria-hidden="true">#</a> 4. \u6570\u636E\u540C\u6B65</h2><p>\u5F53\u5D29\u6E83\u6062\u590D\u4E4B\u540E\uFF0C\u9700\u8981\u5728\u6B63\u5F0F\u5DE5\u4F5C\u4E4B\u524D\uFF08\u63A5\u6536\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF09\uFF0CLeader \u670D\u52A1\u5668\u9996\u5148\u786E\u8BA4\u4E8B\u52A1\u662F\u5426\u90FD\u5DF2\u7ECF\u88AB\u8FC7\u534A\u7684 Follwer \u63D0\u4EA4\u4E86\uFF0C\u5373\u662F\u5426\u5B8C\u6210\u4E86\u6570\u636E\u540C\u6B65\u3002\u76EE\u7684\u662F\u4E3A\u4E86\u4FDD\u6301\u6570\u636E\u4E00\u81F4\u3002</p><p>\u5F53\u6240\u6709\u7684 Follwer \u670D\u52A1\u5668\u90FD\u6210\u529F\u540C\u6B65\u4E4B\u540E\uFF0CLeader \u4F1A\u5C06\u8FD9\u4E9B\u670D\u52A1\u5668\u52A0\u5165\u5230\u53EF\u7528\u670D\u52A1\u5668\u5217\u8868\u4E2D\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0CLeader \u670D\u52A1\u5668\u5904\u7406\u6216\u4E22\u5F03\u4E8B\u52A1\u90FD\u662F\u4F9D\u8D56\u7740 ZXID \u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A ZXID \u5982\u4F55\u751F\u6210\u5462\uFF1F</p><p>\u7B54\uFF1A\u5728 ZAB \u534F\u8BAE\u7684\u4E8B\u52A1\u7F16\u53F7 ZXID \u8BBE\u8BA1\u4E2D\uFF0CZXID \u662F\u4E00\u4E2A 64 \u4F4D\u7684\u6570\u5B57\uFF0C\u5176\u4E2D\u4F4E 32 \u4F4D\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u9012\u589E\u7684\u8BA1\u6570\u5668\uFF0C\u9488\u5BF9\u5BA2\u6237\u7AEF\u7684\u6BCF\u4E00\u4E2A\u4E8B\u52A1\u8BF7\u6C42\uFF0CLeader \u90FD\u4F1A\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u4E8B\u52A1 Proposal \u5E76\u5BF9\u8BE5\u8BA1\u6570\u5668\u8FDB\u884C + 1 \u64CD\u4F5C\u3002</p><p>\u800C\u9AD8 32 \u4F4D\u5219\u4EE3\u8868\u4E86 Leader \u670D\u52A1\u5668\u4E0A\u53D6\u51FA\u672C\u5730\u65E5\u5FD7\u4E2D\u6700\u5927\u4E8B\u52A1 Proposal \u7684 ZXID\uFF0C\u5E76\u4ECE\u8BE5 ZXID \u4E2D\u89E3\u6790\u51FA\u5BF9\u5E94\u7684 epoch \u503C\uFF0C\u7136\u540E\u518D\u5BF9\u8FD9\u4E2A\u503C\u52A0\u4E00\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618233559405.png" alt="image-20220618233559405"></p><p>\u9AD8 32 \u4F4D\u4EE3\u8868\u4E86\u6BCF\u4EE3 Leader \u7684\u552F\u4E00\u6027\uFF0C\u4F4E 32 \u4EE3\u8868\u4E86\u6BCF\u4EE3 Leader \u4E2D\u4E8B\u52A1\u7684\u552F\u4E00\u6027\u3002\u540C\u65F6\uFF0C\u4E5F\u80FD\u8BA9 Follwer \u901A\u8FC7\u9AD8 32 \u4F4D\u8BC6\u522B\u4E0D\u540C\u7684 Leader\u3002\u7B80\u5316\u4E86\u6570\u636E\u6062\u590D\u6D41\u7A0B\u3002</p><p>\u57FA\u4E8E\u8FD9\u6837\u7684\u7B56\u7565\uFF1A\u5F53 Follower \u94FE\u63A5\u4E0A Leader \u4E4B\u540E\uFF0CLeader \u670D\u52A1\u5668\u4F1A\u6839\u636E\u81EA\u5DF1\u670D\u52A1\u5668\u4E0A\u6700\u540E\u88AB\u63D0\u4EA4\u7684 ZXID \u548C Follower \u4E0A\u7684 ZXID \u8FDB\u884C\u6BD4\u5BF9\uFF0C\u6BD4\u5BF9\u7ED3\u679C\u8981\u4E48\u56DE\u6EDA\uFF0C\u8981\u4E48\u548C Leader \u540C\u6B65\u3002</p><h2 id="_5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u603B\u7ED3" aria-hidden="true">#</a> 5. \u603B\u7ED3</h2><p>ZAB \u534F\u8BAE\u548C\u6211\u4EEC\u4E4B\u524D\u770B\u7684 Raft \u534F\u8BAE\u5B9E\u9645\u4E0A\u662F\u6709\u76F8\u4F3C\u4E4B\u5904\u7684\uFF0C\u6BD4\u5982\u90FD\u6709\u4E00\u4E2A Leader\uFF0C\u7528\u6765\u4FDD\u8BC1\u4E00\u81F4\u6027\uFF08Paxos \u5E76\u6CA1\u6709\u4F7F\u7528 Leader \u673A\u5236\u4FDD\u8BC1\u4E00\u81F4\u6027\uFF09\u3002\u518D\u6709\u91C7\u53D6\u8FC7\u534A\u5373\u6210\u529F\u7684\u673A\u5236\u4FDD\u8BC1\u670D\u52A1\u53EF\u7528\uFF08\u5B9E\u9645\u4E0A Paxos \u548C Raft \u90FD\u662F\u8FD9\u4E48\u505A\u7684\uFF09\u3002</p><p>ZAB \u8BA9\u6574\u4E2A Zookeeper \u96C6\u7FA4\u5728\u4E24\u4E2A\u6A21\u5F0F\u4E4B\u95F4\u8F6C\u6362\uFF0C\u6D88\u606F\u5E7F\u64AD\u548C\u5D29\u6E83\u6062\u590D\uFF0C\u6D88\u606F\u5E7F\u64AD\u53EF\u4EE5\u8BF4\u662F\u4E00\u4E2A\u7B80\u5316\u7248\u672C\u7684 2PC\uFF0C\u901A\u8FC7\u5D29\u6E83\u6062\u590D\u89E3\u51B3\u4E86 2PC \u7684\u5355\u70B9\u95EE\u9898\uFF0C\u901A\u8FC7\u961F\u5217\u89E3\u51B3\u4E86 2PC \u7684\u540C\u6B65\u963B\u585E\u95EE\u9898\u3002</p><p>\u800C\u652F\u6301\u5D29\u6E83\u6062\u590D\u540E\u6570\u636E\u51C6\u786E\u6027\u7684\u5C31\u662F\u6570\u636E\u540C\u6B65\u4E86\uFF0C\u6570\u636E\u540C\u6B65\u57FA\u4E8E\u4E8B\u52A1\u7684 ZXID \u7684\u552F\u4E00\u6027\u6765\u4FDD\u8BC1\u3002\u901A\u8FC7 + 1 \u64CD\u4F5C\u53EF\u4EE5\u8FA8\u522B\u4E8B\u52A1\u7684\u5148\u540E\u987A\u5E8F\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',46),c={href:"https://pdai.tech/md/algorithm/alg-domain-distribute-x-zab.html",target:"_blank",rel:"noopener noreferrer"},n=e("strong",null,"\u5206\u5E03\u5F0F\u7B97\u6CD5 - ZAB\u7B97\u6CD5",-1);function h(g,m){const a=d("ExternalLinkIcon");return r(),l("div",null,[s,e("p",null,[e("a",c,[n,i(a)])])])}const L=o(t,[["render",h],["__file","alg-domain-distribute-x-zab.html.vue"]]);export{L as default};
