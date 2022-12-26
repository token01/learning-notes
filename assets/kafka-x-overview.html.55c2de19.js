import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,a,b as o,d as n,f as h,r as p}from"./app.20466b7d.js";const d={},c=h('<h1 id="kafka-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#kafka-\u7B80\u4ECB" aria-hidden="true">#</a> Kafka - \u7B80\u4ECB</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><h3 id="_1-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6982\u8FF0" aria-hidden="true">#</a> 1.1 \u6982\u8FF0</h3><p>Kafka\u662F\u6700\u521D\u7531Linkedin\u516C\u53F8\u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u3001\u5206\u533A\u7684\u3001\u591A\u526F\u672C\u7684\u3001\u591A\u8BA2\u9605\u8005\uFF0C\u57FA\u4E8Ezookeeper\u534F\u8C03\u7684\u5206\u5E03\u5F0F\u65E5\u5FD7\u7CFB\u7EDF\uFF08\u4E5F\u53EF\u4EE5\u5F53\u505AMQ\u7CFB\u7EDF\uFF09\uFF0C\u5E38\u89C1\u53EF\u4EE5\u7528\u4E8Eweb/nginx\u65E5\u5FD7\u3001\u8BBF\u95EE\u65E5\u5FD7\uFF0C\u6D88\u606F\u670D\u52A1\u7B49\u7B49\uFF0CLinkedin\u4E8E2010\u5E74\u8D21\u732E\u7ED9\u4E86Apache\u57FA\u91D1\u4F1A\u5E76\u6210\u4E3A\u9876\u7EA7\u5F00\u6E90\u9879\u76EE\u3002</p><p>\u4E3B\u8981\u5E94\u7528\u573A\u666F\u662F\uFF1A\u89E3\u51B3\u5E94\u7528\u8026\u5408\u3001\u5F02\u6B65\u6D88\u606F\u3001\u6D41\u91CF\u524A\u950B\u3002</p><p>Kafka\u4E3B\u8981\u8BBE\u8BA1\u76EE\u6807\u5982\u4E0B\uFF1A</p><ul><li>\u4EE5\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(1)\u7684\u65B9\u5F0F\u63D0\u4F9B\u6D88\u606F\u6301\u4E45\u5316\u80FD\u529B\uFF0C\u5373\u4F7F\u5BF9TB\u7EA7\u4EE5\u4E0A\u6570\u636E\u4E5F\u80FD\u4FDD\u8BC1\u5E38\u6570\u65F6\u95F4\u7684\u8BBF\u95EE\u6027\u80FD\u3002</li><li>\u9AD8\u541E\u5410\u7387\u3002\u5373\u4F7F\u5728\u975E\u5E38\u5EC9\u4EF7\u7684\u5546\u7528\u673A\u5668\u4E0A\u4E5F\u80FD\u505A\u5230\u5355\u673A\u652F\u6301\u6BCF\u79D2100K\u6761\u6D88\u606F\u7684\u4F20\u8F93\u3002</li><li>\u652F\u6301Kafka Server\u95F4\u7684\u6D88\u606F\u5206\u533A\uFF0C\u53CA\u5206\u5E03\u5F0F\u6D88\u8D39\uFF0C\u540C\u65F6\u4FDD\u8BC1\u6BCF\u4E2Apartition\u5185\u7684\u6D88\u606F\u987A\u5E8F\u4F20\u8F93\u3002</li><li>\u540C\u65F6\u652F\u6301\u79BB\u7EBF\u6570\u636E\u5904\u7406\u548C\u5B9E\u65F6\u6570\u636E\u5904\u7406\u3002</li><li>Scale out:\u652F\u6301\u5728\u7EBF\u6C34\u5E73\u6269\u5C55</li></ul><h3 id="_1-2-\u6D88\u606F\u7CFB\u7EDF\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6D88\u606F\u7CFB\u7EDF\u4ECB\u7ECD" aria-hidden="true">#</a> 1.2 \u6D88\u606F\u7CFB\u7EDF\u4ECB\u7ECD</h3><p>\u4E00\u4E2A\u6D88\u606F\u7CFB\u7EDF\u8D1F\u8D23\u5C06\u6570\u636E\u4ECE\u4E00\u4E2A\u5E94\u7528\u4F20\u9012\u5230\u53E6\u5916\u4E00\u4E2A\u5E94\u7528\uFF0C\u5E94\u7528\u53EA\u9700\u5173\u6CE8\u4E8E\u6570\u636E\uFF0C\u65E0\u9700\u5173\u6CE8\u6570\u636E\u5728\u4E24\u4E2A\u6216\u591A\u4E2A\u5E94\u7528\u95F4\u662F\u5982\u4F55\u4F20\u9012\u7684\u3002\u5206\u5E03\u5F0F\u6D88\u606F\u4F20\u9012\u57FA\u4E8E\u53EF\u9760\u7684\u6D88\u606F\u961F\u5217\uFF0C\u5728\u5BA2\u6237\u7AEF\u5E94\u7528\u548C\u6D88\u606F\u7CFB\u7EDF\u4E4B\u95F4\u5F02\u6B65\u4F20\u9012\u6D88\u606F\u3002\u6709\u4E24\u79CD\u4E3B\u8981\u7684\u6D88\u606F\u4F20\u9012\u6A21\u5F0F\uFF1A<strong>\u70B9\u5BF9\u70B9\u4F20\u9012\u6A21\u5F0F\u3001\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</strong>\u3002\u5927\u90E8\u5206\u7684\u6D88\u606F\u7CFB\u7EDF\u9009\u7528\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u3002<strong>Kafka\u5C31\u662F\u4E00\u79CD\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</strong>\u3002</p><h3 id="_1-3-\u70B9\u5BF9\u70B9\u6D88\u606F\u4F20\u9012\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-3-\u70B9\u5BF9\u70B9\u6D88\u606F\u4F20\u9012\u6A21\u5F0F" aria-hidden="true">#</a> 1.3 \u70B9\u5BF9\u70B9\u6D88\u606F\u4F20\u9012\u6A21\u5F0F</h3><p>\u5728\u70B9\u5BF9\u70B9\u6D88\u606F\u7CFB\u7EDF\u4E2D\uFF0C\u6D88\u606F\u6301\u4E45\u5316\u5230\u4E00\u4E2A\u961F\u5217\u4E2D\u3002\u6B64\u65F6\uFF0C\u5C06\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u6D88\u8D39\u8005\u6D88\u8D39\u961F\u5217\u4E2D\u7684\u6570\u636E\u3002\u4F46\u662F\u4E00\u6761\u6D88\u606F\u53EA\u80FD\u88AB\u6D88\u8D39\u4E00\u6B21\u3002\u5F53\u4E00\u4E2A\u6D88\u8D39\u8005\u6D88\u8D39\u4E86\u961F\u5217\u4E2D\u7684\u67D0\u6761\u6570\u636E\u4E4B\u540E\uFF0C\u8BE5\u6761\u6570\u636E\u5219\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u5220\u9664\u3002\u8BE5\u6A21\u5F0F\u5373\u4F7F\u6709\u591A\u4E2A\u6D88\u8D39\u8005\u540C\u65F6\u6D88\u8D39\u6570\u636E\uFF0C\u4E5F\u80FD\u4FDD\u8BC1\u6570\u636E\u5904\u7406\u7684\u987A\u5E8F\u3002\u8FD9\u79CD\u67B6\u6784\u63CF\u8FF0\u793A\u610F\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220920221833661.png" alt="image-20220920221833661"></p><p><strong>\u751F\u4EA7\u8005\u53D1\u9001\u4E00\u6761\u6D88\u606F\u5230queue\uFF0C\u53EA\u6709\u4E00\u4E2A\u6D88\u8D39\u8005\u80FD\u6536\u5230</strong>\u3002</p><h3 id="_1-4-\u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u4F20\u9012\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-4-\u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u4F20\u9012\u6A21\u5F0F" aria-hidden="true">#</a> 1.4 \u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u4F20\u9012\u6A21\u5F0F</h3><p>\u5728\u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u7CFB\u7EDF\u4E2D\uFF0C\u6D88\u606F\u88AB\u6301\u4E45\u5316\u5230\u4E00\u4E2Atopic\u4E2D\u3002\u4E0E\u70B9\u5BF9\u70B9\u6D88\u606F\u7CFB\u7EDF\u4E0D\u540C\u7684\u662F\uFF0C\u6D88\u8D39\u8005\u53EF\u4EE5\u8BA2\u9605\u4E00\u4E2A\u6216\u591A\u4E2Atopic\uFF0C\u6D88\u8D39\u8005\u53EF\u4EE5\u6D88\u8D39\u8BE5topic\u4E2D\u6240\u6709\u7684\u6570\u636E\uFF0C\u540C\u4E00\u6761\u6570\u636E\u53EF\u4EE5\u88AB\u591A\u4E2A\u6D88\u8D39\u8005\u6D88\u8D39\uFF0C\u6570\u636E\u88AB\u6D88\u8D39\u540E\u4E0D\u4F1A\u7ACB\u9A6C\u5220\u9664\u3002\u5728\u53D1\u5E03-\u8BA2\u9605\u6D88\u606F\u7CFB\u7EDF\u4E2D\uFF0C\u6D88\u606F\u7684\u751F\u4EA7\u8005\u79F0\u4E3A\u53D1\u5E03\u8005\uFF0C\u6D88\u8D39\u8005\u79F0\u4E3A\u8BA2\u9605\u8005\u3002\u8BE5\u6A21\u5F0F\u7684\u793A\u4F8B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220920222015034.png" alt="image-20220920222015034"></p><p><strong>\u53D1\u5E03\u8005\u53D1\u9001\u5230topic\u7684\u6D88\u606F\uFF0C\u53EA\u6709\u8BA2\u9605\u4E86topic\u7684\u8BA2\u9605\u8005\u624D\u4F1A\u6536\u5230\u6D88\u606F</strong>\u3002</p><h2 id="_2-kafka\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-kafka\u7684\u4F18\u70B9" aria-hidden="true">#</a> 2. Kafka\u7684\u4F18\u70B9</h2><h3 id="_2-1-\u89E3\u8026" tabindex="-1"><a class="header-anchor" href="#_2-1-\u89E3\u8026" aria-hidden="true">#</a> 2.1 \u89E3\u8026</h3><p>\u5728\u9879\u76EE\u542F\u52A8\u4E4B\u521D\u6765\u9884\u6D4B\u5C06\u6765\u9879\u76EE\u4F1A\u78B0\u5230\u4EC0\u4E48\u9700\u6C42\uFF0C\u662F\u6781\u5176\u56F0\u96BE\u7684\u3002\u6D88\u606F\u7CFB\u7EDF\u5728\u5904\u7406\u8FC7\u7A0B\u4E2D\u95F4\u63D2\u5165\u4E86\u4E00\u4E2A\u9690\u542B\u7684\u3001\u57FA\u4E8E\u6570\u636E\u7684\u63A5\u53E3\u5C42\uFF0C\u4E24\u8FB9\u7684\u5904\u7406\u8FC7\u7A0B\u90FD\u8981\u5B9E\u73B0\u8FD9\u4E00\u63A5\u53E3\u3002\u8FD9\u5141\u8BB8\u4F60\u72EC\u7ACB\u7684\u6269\u5C55\u6216\u4FEE\u6539\u4E24\u8FB9\u7684\u5904\u7406\u8FC7\u7A0B\uFF0C\u53EA\u8981\u786E\u4FDD\u5B83\u4EEC\u9075\u5B88\u540C\u6837\u7684\u63A5\u53E3\u7EA6\u675F\u3002</p><h3 id="_2-2-\u5197\u4F59-\u526F\u672C" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5197\u4F59-\u526F\u672C" aria-hidden="true">#</a> 2.2 \u5197\u4F59\uFF08\u526F\u672C\uFF09</h3><p>\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5904\u7406\u6570\u636E\u7684\u8FC7\u7A0B\u4F1A\u5931\u8D25\u3002\u9664\u975E\u6570\u636E\u88AB\u6301\u4E45\u5316\uFF0C\u5426\u5219\u5C06\u9020\u6210\u4E22\u5931\u3002\u6D88\u606F\u961F\u5217\u628A\u6570\u636E\u8FDB\u884C\u6301\u4E45\u5316\u76F4\u5230\u5B83\u4EEC\u5DF2\u7ECF\u88AB\u5B8C\u5168\u5904\u7406\uFF0C\u901A\u8FC7\u8FD9\u4E00\u65B9\u5F0F\u89C4\u907F\u4E86\u6570\u636E\u4E22\u5931\u98CE\u9669\u3002\u8BB8\u591A\u6D88\u606F\u961F\u5217\u6240\u91C7\u7528\u7684&quot;\u63D2\u5165-\u83B7\u53D6-\u5220\u9664&quot;\u8303\u5F0F\u4E2D\uFF0C\u5728\u628A\u4E00\u4E2A\u6D88\u606F\u4ECE\u961F\u5217\u4E2D\u5220\u9664\u4E4B\u524D\uFF0C\u9700\u8981\u4F60\u7684\u5904\u7406\u7CFB\u7EDF\u660E\u786E\u7684\u6307\u51FA\u8BE5\u6D88\u606F\u5DF2\u7ECF\u88AB\u5904\u7406\u5B8C\u6BD5\uFF0C\u4ECE\u800C\u786E\u4FDD\u4F60\u7684\u6570\u636E\u88AB\u5B89\u5168\u7684\u4FDD\u5B58\u76F4\u5230\u4F60\u4F7F\u7528\u5B8C\u6BD5\u3002</p><h3 id="_2-3-\u6269\u5C55\u6027" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6269\u5C55\u6027" aria-hidden="true">#</a> 2.3 \u6269\u5C55\u6027</h3><p>\u56E0\u4E3A\u6D88\u606F\u961F\u5217\u89E3\u8026\u4E86\u4F60\u7684\u5904\u7406\u8FC7\u7A0B\uFF0C\u6240\u4EE5\u589E\u5927\u6D88\u606F\u5165\u961F\u548C\u5904\u7406\u7684\u9891\u7387\u662F\u5F88\u5BB9\u6613\u7684\uFF0C\u53EA\u8981\u53E6\u5916\u589E\u52A0\u5904\u7406\u8FC7\u7A0B\u5373\u53EF\u3002\u4E0D\u9700\u8981\u6539\u53D8\u4EE3\u7801\u3001\u4E0D\u9700\u8981\u8C03\u8282\u53C2\u6570\u3002\u6269\u5C55\u5C31\u50CF\u8C03\u5927\u7535\u529B\u6309\u94AE\u4E00\u6837\u7B80\u5355\u3002</p><h3 id="_2-4-\u7075\u6D3B\u6027-\u5CF0\u503C\u5904\u7406\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u7075\u6D3B\u6027-\u5CF0\u503C\u5904\u7406\u80FD\u529B" aria-hidden="true">#</a> 2.4 \u7075\u6D3B\u6027&amp;\u5CF0\u503C\u5904\u7406\u80FD\u529B</h3><p>\u5728\u8BBF\u95EE\u91CF\u5267\u589E\u7684\u60C5\u51B5\u4E0B\uFF0C\u5E94\u7528\u4ECD\u7136\u9700\u8981\u7EE7\u7EED\u53D1\u6325\u4F5C\u7528\uFF0C\u4F46\u662F\u8FD9\u6837\u7684\u7A81\u53D1\u6D41\u91CF\u5E76\u4E0D\u5E38\u89C1\uFF1B\u5982\u679C\u4E3A\u4EE5\u80FD\u5904\u7406\u8FD9\u7C7B\u5CF0\u503C\u8BBF\u95EE\u4E3A\u6807\u51C6\u6765\u6295\u5165\u8D44\u6E90\u968F\u65F6\u5F85\u547D\u65E0\u7591\u662F\u5DE8\u5927\u7684\u6D6A\u8D39\u3002\u4F7F\u7528\u6D88\u606F\u961F\u5217\u80FD\u591F\u4F7F\u5173\u952E\u7EC4\u4EF6\u9876\u4F4F\u7A81\u53D1\u7684\u8BBF\u95EE\u538B\u529B\uFF0C\u800C\u4E0D\u4F1A\u56E0\u4E3A\u7A81\u53D1\u7684\u8D85\u8D1F\u8377\u7684\u8BF7\u6C42\u800C\u5B8C\u5168\u5D29\u6E83\u3002</p><h3 id="_2-5-\u53EF\u6062\u590D\u6027" tabindex="-1"><a class="header-anchor" href="#_2-5-\u53EF\u6062\u590D\u6027" aria-hidden="true">#</a> 2.5 \u53EF\u6062\u590D\u6027</h3><p>\u7CFB\u7EDF\u7684\u4E00\u90E8\u5206\u7EC4\u4EF6\u5931\u6548\u65F6\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u6574\u4E2A\u7CFB\u7EDF\u3002\u6D88\u606F\u961F\u5217\u964D\u4F4E\u4E86\u8FDB\u7A0B\u95F4\u7684\u8026\u5408\u5EA6\uFF0C\u6240\u4EE5\u5373\u4F7F\u4E00\u4E2A\u5904\u7406\u6D88\u606F\u7684\u8FDB\u7A0B\u6302\u6389\uFF0C\u52A0\u5165\u961F\u5217\u4E2D\u7684\u6D88\u606F\u4ECD\u7136\u53EF\u4EE5\u5728\u7CFB\u7EDF\u6062\u590D\u540E\u88AB\u5904\u7406\u3002</p><h3 id="_2-6-\u987A\u5E8F\u4FDD\u8BC1" tabindex="-1"><a class="header-anchor" href="#_2-6-\u987A\u5E8F\u4FDD\u8BC1" aria-hidden="true">#</a> 2.6 \u987A\u5E8F\u4FDD\u8BC1</h3><p>\u5728\u5927\u591A\u4F7F\u7528\u573A\u666F\u4E0B\uFF0C\u6570\u636E\u5904\u7406\u7684\u987A\u5E8F\u90FD\u5F88\u91CD\u8981\u3002\u5927\u90E8\u5206\u6D88\u606F\u961F\u5217\u672C\u6765\u5C31\u662F\u6392\u5E8F\u7684\uFF0C\u5E76\u4E14\u80FD\u4FDD\u8BC1\u6570\u636E\u4F1A\u6309\u7167\u7279\u5B9A\u7684\u987A\u5E8F\u6765\u5904\u7406\u3002Kafka\u4FDD\u8BC1\u4E00\u4E2APartition\u5185\u7684\u6D88\u606F\u7684\u6709\u5E8F\u6027\u3002</p><h3 id="_2-7-\u7F13\u51B2" tabindex="-1"><a class="header-anchor" href="#_2-7-\u7F13\u51B2" aria-hidden="true">#</a> 2.7 \u7F13\u51B2</h3><p>\u5728\u4EFB\u4F55\u91CD\u8981\u7684\u7CFB\u7EDF\u4E2D\uFF0C\u90FD\u4F1A\u6709\u9700\u8981\u4E0D\u540C\u7684\u5904\u7406\u65F6\u95F4\u7684\u5143\u7D20\u3002\u4F8B\u5982\uFF0C\u52A0\u8F7D\u4E00\u5F20\u56FE\u7247\u6BD4\u5E94\u7528\u8FC7\u6EE4\u5668\u82B1\u8D39\u66F4\u5C11\u7684\u65F6\u95F4\u3002\u6D88\u606F\u961F\u5217\u901A\u8FC7\u4E00\u4E2A\u7F13\u51B2\u5C42\u6765\u5E2E\u52A9\u4EFB\u52A1\u6700\u9AD8\u6548\u7387\u7684\u6267\u884C\u2014\u2014\u2014\u5199\u5165\u961F\u5217\u7684\u5904\u7406\u4F1A\u5C3D\u53EF\u80FD\u7684\u5FEB\u901F\u3002\u8BE5\u7F13\u51B2\u6709\u52A9\u4E8E\u63A7\u5236\u548C\u4F18\u5316\u6570\u636E\u6D41\u7ECF\u8FC7\u7CFB\u7EDF\u7684\u901F\u5EA6\u3002</p><h3 id="_2-8-\u5F02\u6B65\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#_2-8-\u5F02\u6B65\u901A\u4FE1" aria-hidden="true">#</a> 2.8 \u5F02\u6B65\u901A\u4FE1</h3><p>\u5F88\u591A\u65F6\u5019\uFF0C\u7528\u6237\u4E0D\u60F3\u4E5F\u4E0D\u9700\u8981\u7ACB\u5373\u5904\u7406\u6D88\u606F\u3002\u6D88\u606F\u961F\u5217\u63D0\u4F9B\u4E86\u5F02\u6B65\u5904\u7406\u673A\u5236\uFF0C\u5141\u8BB8\u7528\u6237\u628A\u4E00\u4E2A\u6D88\u606F\u653E\u5165\u961F\u5217\uFF0C\u4F46\u5E76\u4E0D\u7ACB\u5373\u5904\u7406\u5B83\u3002\u60F3\u5411\u961F\u5217\u4E2D\u653E\u5165\u591A\u5C11\u6D88\u606F\u5C31\u653E\u591A\u5C11\uFF0C\u7136\u540E\u5728\u9700\u8981\u7684\u65F6\u5019\u518D\u53BB\u5904\u7406\u5B83\u4EEC\u3002</p><h2 id="_3-kafka\u4E2D\u7684\u672F\u8BED\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#_3-kafka\u4E2D\u7684\u672F\u8BED\u89E3\u91CA" aria-hidden="true">#</a> 3. Kafka\u4E2D\u7684\u672F\u8BED\u89E3\u91CA</h2><h3 id="_3-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6982\u8FF0" aria-hidden="true">#</a> 3.1 \u6982\u8FF0</h3><p>\u5728\u6DF1\u5165\u7406\u89E3Kafka\u4E4B\u524D\uFF0C\u5148\u4ECB\u7ECD\u4E00\u4E0BKafka\u4E2D\u7684\u672F\u8BED\u3002\u4E0B\u56FE\u5C55\u793A\u4E86Kafka\u7684\u76F8\u5173\u672F\u8BED\u4EE5\u53CA\u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220920223233429.png" alt="image-20220920223233429"></p><p>\u4E0A\u56FE\u4E2D\u4E00\u4E2Atopic\u914D\u7F6E\u4E863\u4E2Apartition\u3002Partition1\u6709\u4E24\u4E2Aoffset\uFF1A0\u548C1\u3002Partition2\u67094\u4E2Aoffset\u3002Partition3\u67091\u4E2Aoffset\u3002\u526F\u672C\u7684id\u548C\u526F\u672C\u6240\u5728\u7684\u673A\u5668\u7684id\u6070\u597D\u76F8\u540C\u3002</p><p>\u5982\u679C\u4E00\u4E2Atopic\u7684\u526F\u672C\u6570\u4E3A3\uFF0C\u90A3\u4E48Kafka\u5C06\u5728\u96C6\u7FA4\u4E2D\u4E3A\u6BCF\u4E2Apartition\u521B\u5EFA3\u4E2A\u76F8\u540C\u7684\u526F\u672C\u3002\u96C6\u7FA4\u4E2D\u7684\u6BCF\u4E2Abroker\u5B58\u50A8\u4E00\u4E2A\u6216\u591A\u4E2Apartition\u3002\u591A\u4E2Aproducer\u548Cconsumer\u53EF\u540C\u65F6\u751F\u4EA7\u548C\u6D88\u8D39\u6570\u636E\u3002</p><h3 id="_3-2-broker" tabindex="-1"><a class="header-anchor" href="#_3-2-broker" aria-hidden="true">#</a> 3.2 broker</h3><p>Kafka \u96C6\u7FA4\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u8282\u70B9\u79F0\u4E3Abroker\u3002</p><p>broker\u5B58\u50A8topic\u7684\u6570\u636E\u3002\u5982\u679C\u67D0topic\u6709N\u4E2Apartition\uFF0C\u96C6\u7FA4\u6709N\u4E2Abroker\uFF0C\u90A3\u4E48\u6BCF\u4E2Abroker\u5B58\u50A8\u8BE5topic\u7684\u4E00\u4E2Apartition\u3002</p><p>\u5982\u679C\u67D0topic\u6709N\u4E2Apartition\uFF0C\u96C6\u7FA4\u6709(N+M)\u4E2Abroker\uFF0C\u90A3\u4E48\u5176\u4E2D\u6709N\u4E2Abroker\u5B58\u50A8\u8BE5topic\u7684\u4E00\u4E2Apartition\uFF0C\u5269\u4E0B\u7684M\u4E2Abroker\u4E0D\u5B58\u50A8\u8BE5topic\u7684partition\u6570\u636E\u3002</p><p>\u5982\u679C\u67D0topic\u6709N\u4E2Apartition\uFF0C\u96C6\u7FA4\u4E2Dbroker\u6570\u76EE\u5C11\u4E8EN\u4E2A\uFF0C\u90A3\u4E48\u4E00\u4E2Abroker\u5B58\u50A8\u8BE5topic\u7684\u4E00\u4E2A\u6216\u591A\u4E2Apartition\u3002\u5728\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5C3D\u91CF\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5BB9\u6613\u5BFC\u81F4Kafka\u96C6\u7FA4\u6570\u636E\u4E0D\u5747\u8861\u3002</p><h3 id="_3-3-topic" tabindex="-1"><a class="header-anchor" href="#_3-3-topic" aria-hidden="true">#</a> 3.3 Topic</h3><p>\u6BCF\u6761\u53D1\u5E03\u5230Kafka\u96C6\u7FA4\u7684\u6D88\u606F\u90FD\u6709\u4E00\u4E2A\u7C7B\u522B\uFF0C\u8FD9\u4E2A\u7C7B\u522B\u88AB\u79F0\u4E3ATopic\u3002\uFF08\u7269\u7406\u4E0A\u4E0D\u540CTopic\u7684\u6D88\u606F\u5206\u5F00\u5B58\u50A8\uFF0C\u903B\u8F91\u4E0A\u4E00\u4E2ATopic\u7684\u6D88\u606F\u867D\u7136\u4FDD\u5B58\u4E8E\u4E00\u4E2A\u6216\u591A\u4E2Abroker\u4E0A\u4F46\u7528\u6237\u53EA\u9700\u6307\u5B9A\u6D88\u606F\u7684Topic\u5373\u53EF\u751F\u4EA7\u6216\u6D88\u8D39\u6570\u636E\u800C\u4E0D\u5FC5\u5173\u5FC3\u6570\u636E\u5B58\u4E8E\u4F55\u5904\uFF09</p><p>\u7C7B\u4F3C\u4E8E\u6570\u636E\u5E93\u7684\u8868\u540D</p><h3 id="_3-4-partition" tabindex="-1"><a class="header-anchor" href="#_3-4-partition" aria-hidden="true">#</a> 3.4 Partition</h3><p>topic\u4E2D\u7684\u6570\u636E\u5206\u5272\u4E3A\u4E00\u4E2A\u6216\u591A\u4E2Apartition\u3002\u6BCF\u4E2Atopic\u81F3\u5C11\u6709\u4E00\u4E2Apartition\u3002\u6BCF\u4E2Apartition\u4E2D\u7684\u6570\u636E\u4F7F\u7528\u591A\u4E2Asegment\u6587\u4EF6\u5B58\u50A8\u3002partition\u4E2D\u7684\u6570\u636E\u662F\u6709\u5E8F\u7684\uFF0C\u4E0D\u540Cpartition\u95F4\u7684\u6570\u636E\u4E22\u5931\u4E86\u6570\u636E\u7684\u987A\u5E8F\u3002\u5982\u679Ctopic\u6709\u591A\u4E2Apartition\uFF0C\u6D88\u8D39\u6570\u636E\u65F6\u5C31\u4E0D\u80FD\u4FDD\u8BC1\u6570\u636E\u7684\u987A\u5E8F\u3002\u5728\u9700\u8981\u4E25\u683C\u4FDD\u8BC1\u6D88\u606F\u7684\u6D88\u8D39\u987A\u5E8F\u7684\u573A\u666F\u4E0B\uFF0C\u9700\u8981\u5C06partition\u6570\u76EE\u8BBE\u4E3A1\u3002</p><h3 id="_3-5-producer" tabindex="-1"><a class="header-anchor" href="#_3-5-producer" aria-hidden="true">#</a> 3.5 Producer</h3><p>\u751F\u4EA7\u8005\u5373\u6570\u636E\u7684\u53D1\u5E03\u8005\uFF0C\u8BE5\u89D2\u8272\u5C06\u6D88\u606F\u53D1\u5E03\u5230Kafka\u7684topic\u4E2D\u3002broker\u63A5\u6536\u5230\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\u540E\uFF0Cbroker\u5C06\u8BE5\u6D88\u606F<strong>\u8FFD\u52A0</strong>\u5230\u5F53\u524D\u7528\u4E8E\u8FFD\u52A0\u6570\u636E\u7684segment\u6587\u4EF6\u4E2D\u3002\u751F\u4EA7\u8005\u53D1\u9001\u7684\u6D88\u606F\uFF0C\u5B58\u50A8\u5230\u4E00\u4E2Apartition\u4E2D\uFF0C\u751F\u4EA7\u8005\u4E5F\u53EF\u4EE5\u6307\u5B9A\u6570\u636E\u5B58\u50A8\u7684partition\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',53),s={href:"https://www.cnblogs.com/qingyunzong/p/9004509.html",target:"_blank",rel:"noopener noreferrer"};function f(l,_){const e=p("ExternalLinkIcon");return i(),t("div",null,[c,a("p",null,[a("a",s,[o("Kafka\u5B66\u4E60\u4E4B\u8DEF \uFF08\u4E00\uFF09Kafka\u7684\u7B80\u4ECB"),n(e)])])])}const u=r(d,[["render",f],["__file","kafka-x-overview.html.vue"]]);export{u as default};
