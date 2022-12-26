import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,f as d}from"./app.605999cc.js";const r={},p=d('<blockquote><p>\u6D45\u8C08hyperledger fabric\u6E90\u7801|Order\u8282\u70B9\u6982\u8FF0</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gn15th0ollj31c00u0qcl.jpg" alt="bcc633a6c26528720cf16ed170f6a141"></p><h2 id="\u524D\u8A00\u53CA\u6E90\u7801\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00\u53CA\u6E90\u7801\u76EE\u5F55" aria-hidden="true">#</a> \u524D\u8A00\u53CA\u6E90\u7801\u76EE\u5F55</h2><p><code>Orderer</code>\u6392\u5E8F\u8282\u70B9\u8FD9\u5757\u5185\u5BB9\u4E3B\u8981\u5305\u62EC\u4E86\u8282\u70B9\u542F\u52A8\u6D41\u7A0B\u3001<code>Broadcast</code>\u5E7F\u64AD\u4EA4\u6613\u670D\u52A1\u3001<code>Orderer</code>\u5171\u8BC6\u6392\u5E8F\u670D\u52A1\u4EE5\u53CA<code>Deliver</code>\u533A\u5757\u5206\u53D1\u670D\u52A1\u3002\u5176\u76F8\u5173\u6E90\u7801\u76EE\u5F55\u6587\u4EF6\u5982\u4E0B\uFF1A</p><blockquote><p>/orderer</p><p>|-common</p><p>\u200B |-blockcutter:\u4EA4\u6613\u5207\u5272\u6253\u5305\u6A21\u5757 \u2728\u2728\u2728\u2728\u2728\u2728</p><p>\u200B |-bootstrap:\u5F15\u5BFC\u542F\u52A8\u6A21\u5757\uFF0C\u751F\u6210\u521B\u4E16\u5757 \u2728\u2728\u2728\u2728\u2728\u2728</p><p>\u200B |-broadcast:\u4EA4\u6613\u5E7F\u64AD\u670D\u52A1\u6A21\u5757 \u2728\u2728\u2728\u2728\u2728\u2728</p><p>\u200B |-localconfig:\u672C\u5730\u914D\u7F6E\u6A21\u5757</p><p>\u200B |-metadata\uFF1A\u83B7\u53D6\u5143\u6570\u636E\u6A21\u5757</p><p>\u200B |-msgprocessor:\u6D88\u606F\u5904\u7406\u5668\u6A21\u5757</p><p>\u200B |-multichannel\uFF1A\u591A\u7BA1\u9053\u6CE8\u518C\u7BA1\u7406\u5668\u6A21\u5757</p><p>\u200B |-performance\uFF1A\u6027\u80FD\u6D4B\u91CF\u6A21\u5757</p><p>\u200B |-server\uFF1AOrder\u6392\u5E8F\u670D\u52A1\u5668\u6A21\u5757 \u2728\u2728\u2728\u2728\u2728\u2728</p><p>|-consensus</p><p>\u200B |-kafka:kafka\u5171\u8BC6\u7EC4\u4EF6\u6A21\u5757 \u2728\u2728\u2728\u2728\u2728\u2728</p><p>\u200B |-solo:solo\u5171\u8BC6\u7EC4\u4EF6\u6A21\u5757</p><p>\u200B |-consensus.go:\u5B9A\u4E49\u5171\u8BC6\u7EC4\u4EF6\u76F8\u5173\u63A5\u53E3</p><p>|-main.go:orderer\u4E3B\u7A0B\u5E8F</p></blockquote><blockquote><p>/common</p><p>|-deliver:\u5B9A\u4E49Deliver\u670D\u52A1\u5668\u53CA\u5904\u7406\u5668\u63A5\u53E3 \u2728\u2728\u2728\u2728\u2728\u2728</p></blockquote><blockquote><p>/core</p><p>|-deliverservice</p><p>\u200B |-blocksprovider:\u533A\u5757\u63D0\u4F9B\u8005\u6A21\u5757 \u2728\u2728\u2728\u2728\u2728\u2728</p><p>\u200B |-client.go:\u63D0\u4F9BbroadcastClient\u5BA2\u6237\u7AEF \u2728\u2728\u2728\u2728\u2728\u2728</p><p>\u200B |-deliveryClient\uFF1ADeliver\u670D\u52A1\u5BA2\u6237\u7AEF \u2728\u2728\u2728\u2728\u2728\u2728</p><p>\u200B |-requester.go:\u8BF7\u6C42\u533A\u5757\u6570\u636E \u2728\u2728\u2728\u2728\u2728\u2728</p></blockquote><blockquote><p>/protos</p><p>|-orderer:protobuf\u6D88\u606F\u5B9A\u4E49\u6A21\u5757</p></blockquote><h2 id="\u4E3B\u8981\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u529F\u80FD" aria-hidden="true">#</a> \u4E3B\u8981\u529F\u80FD</h2><p><code>Orderer</code>\u6392\u5E8F\u8282\u70B9\u5728<code>Hyperledger Fabric</code>\u7CFB\u7EDF\u67B6\u6784\u4E2D\u5904\u4E8E\u6838\u5FC3\u89D2\u8272\u5730\u4F4D\uFF0C\u7BA1\u7406\u7740\u7CFB\u7EDF\u901A\u9053\u4E0E\u6240\u6709\u5E94\u7528\u901A\u9053\uFF0C\u8D1F\u8D23\u901A\u9053\u521B\u5EFA\u3001\u901A\u9053\u914D\u7F6E\u66F4\u65B0\u7B49\u64CD\u4F5C\uFF0C\u5E76\u5904\u7406\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u4EA4\u6613\u6D88\u606F\u8BF7\u6C42\uFF0C\u5BF9\u4EA4\u6613\u8FDB\u884C\u6392\u5E8F\u5E76\u6309\u89C4\u5219\u6253\u5305\u6210\u65B0\u533A\u5757\uFF0C\u63D0\u4EA4\u8D26\u672C\u5E76\u7EF4\u62A4\u901A\u9053\u8D26\u672C\u6570\u636E\uFF0C\u4E3A\u5168\u7F51\u8282\u70B9\u63D0\u4F9B<code>Broadcast</code>\u4EA4\u6613\u5E7F\u64AD\u670D\u52A1\u3001<code>Orderer</code>\u5171\u8BC6\u6392\u5E8F\u670D\u52A1\u3001<code>Deliver</code>\u533A\u5757\u5206\u53D1\u670D\u52A1\u7B49\u3002\u901A\u5E38\uFF0CHyperledger Fabric\u542F\u52A8\u65F6\u9700\u8981\u5148\u542F\u52A8Orderer\u6392\u5E8F\u8282\u70B9\uFF0C\u521B\u5EFA\u7CFB\u7EDF\u901A\u9053\u63D0\u4F9B\u6B63\u5E38\u670D\u52A1\u540E\uFF0C\u518D\u542F\u52A8\u5176\u4ED6\u89D2\u8272\u7684<code>Peer</code>\u8282\u70B9\u8FDB\u5165\u6B63\u5E38\u5DE5\u4F5C\u72B6\u6001\u3002\u5176\u670D\u52A1\u6A21\u5757\u5173\u7CFB\u4E0E\u67B6\u6784\u793A\u5982\u56FE\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gn16qf76aaj31ev0u0top.jpg" alt="image-20210126163847049"></p><p><code>Orderer</code>\u8282\u70B9\u542F\u52A8\u540E\u57FA\u4E8E\u521B\u4E16\u533A\u5757\u521D\u59CB\u5316\u7CFB\u7EDF\u901A\u9053\uFF0C\u521B\u5EFA<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\uFF0C\u5C01\u88C5\u4E86<code>Broadcast</code>\u670D\u52A1\u5904\u7406\u53E5\u67C4\u3001<code>Deliver</code>\u670D\u52A1\u5904\u7406\u53E5\u67C4\u4E0E\u591A\u901A\u9053\u6CE8\u518C\u7BA1\u7406\u5668\u5BF9\u8C61\uFF0C\u5E76\u63D0\u4F9B<code>Broadcast</code>()\u4EA4\u6613\u5E7F\u64AD\u670D\u52A1\u63A5\u53E3\u4E0E <code>Deliver</code>()\u533A\u5757\u5206\u53D1\u670D\u52A1\u63A5\u53E3\u3002</p><p>\u5176\u4E2D\uFF0C<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\u57FA\u4E8E<code>Broadcast</code>()\u63A5\u53E3\u63A5\u6536\u4EA4\u6613\u5E7F\u64AD\u670D\u52A1\u8BF7\u6C42\uFF0C\u8C03\u7528<code>Broadcast</code>\u670D\u52A1\u5904\u7406\u53E5\u67C4\u7684<code>Handle</code>()\u65B9\u6CD5\u8FDB\u884C\u5904\u7406\uFF0C\u5EFA\u7ACB\u6D88\u606F\u5904\u7406\u5FAA\u73AF\uFF0C\u63A5\u6536\u4E0E\u5904\u7406\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u666E\u901A\u4EA4\u6613\u6D88\u606F\u3001\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u7B49\u8BF7\u6C42\u6D88\u606F\uFF0C\u7ECF\u8FC7\u6EE4\u540E\u53D1\u9001\u81F3\u901A\u9053\u7ED1\u5B9A\u7684\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\uFF08<code>Solo</code>\u7C7B\u578B\u3001<code>Kafka</code>\u7C7B\u578B\u7B49\uFF09\u8FDB\u884C\u6392\u5E8F\u3002\u63A5\u7740\uFF0C\u518D\u5C06\u6392\u5E8F\u540E\u7684\u4EA4\u6613\u6DFB\u52A0\u5230\u672C\u5730\u5F85\u5904\u7406\u7684\u7F13\u5B58\u4EA4\u6613\u6D88\u606F\u5217\u8868\uFF0C\u5E76\u6309\u7167\u4EA4\u6613\u51FA\u5757\u89C4\u5219\u6784\u9020\u65B0\u533A\u5757\uFF0C\u63D0\u4EA4\u5230<code>Orderer</code>\u8282\u70B9\u6307\u5B9A\u901A\u9053\u8D26\u672C\u7684\u533A\u5757\u6570\u636E\u6587\u4EF6\u4E2D\uFF0C\u540C\u65F6\u8D1F\u8D23\u521B\u5EFA\u65B0\u7684\u5E94\u7528\u901A\u9053\u3001\u66F4\u65B0\u901A\u9053\u914D\u7F6E\u7B49\u901A\u9053\u7BA1\u7406\u5DE5\u4F5C\u3002\u76EE\u524D\uFF0C<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\u8D1F\u8D23\u63A5\u6536\u4E0E\u5904\u7406\u4E24\u7C7B\u4EA4\u6613\u6D88\u606F\uFF0C\u5177\u4F53\u5982\u4E0B\u3002</p><ul><li><p>\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF08ConfigMsg\uFF09\uFF1A\u901A\u9053\u5934\u90E8\u7C7B\u578B\u662F<code>CONFIG_UPDATE</code>\u7684\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF0C\u542B\u6709\u6700\u65B0\u7684\u901A\u9053\u914D\u7F6E\u4FE1\u606F\uFF0C\u7ECF\u8FC7\u901A\u9053\u6D88\u606F\u5904\u7406\u5668\u8FC7\u6EE4\u540E\uFF0C\u8F6C\u6362\u4E3A\u901A\u9053\u5934\u90E8\u7C7B\u578B\u4E3A <code>ORDERER_TRANSACTION</code>\u6216<code>CONFIG</code>\u7684\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF08<code>Envelope</code>\u7C7B\u578B\uFF09\uFF0C\u5206\u522B\u7528\u4E8E\u521B\u5EFA\u65B0\u7684\u5E94\u7528\u901A\u9053\u6216\u66F4\u65B0\u901A\u9053\u914D\u7F6E\uFF0C\u540C\u65F6\uFF0C\u5C06\u901A\u9053\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u5355\u72EC\u6253\u5305\u6210\u65B0\u533A\u5757\uFF0C\u5E76\u63D0\u4EA4\u5230\u7CFB\u7EDF\u901A\u9053\u8D26\u672C\u4E0E\u5E94\u7528\u901A\u9053\u8D26\u672C\u3002</p></li><li><p>\u666E\u901A\u4EA4\u6613\u6D88\u606F\uFF08NormalMsg\uFF09\uFF1A\u901A\u9053\u5934\u90E8\u7C7B\u578B\u662F<code>ENDORSER_TRANSACTION</code>\u7B49\u7684\u6807\u51C6\u4EA4\u6613\u6D88\u606F\uFF08\u7ECF\u8FC7<code>Endorser</code>\u80CC\u4E66\u7684\u4EA4\u6613\u6D88\u606F\u6216\u5176\u4ED6\u975E\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\uFF09\uFF0C\u542B\u6709\u6539\u53D8\u4E16\u754C\u72B6\u6001\u7684\u6A21\u62DF\u6267\u884C\u7ED3\u679C\u8BFB\u5199\u96C6\uFF0C\u7ECF\u8FC7<code>Endorser</code>\u8282\u70B9\u7B7E\u540D\u80CC\u4E66\u540E\u6253\u5305\u53D1\u9001\u5230<code>Orderer</code>\u8282\u70B9\u8BF7\u6C42\u5904</p><p>\u7406\uFF0C\u7ECF\u8FC7\u901A\u9053\u6D88\u606F\u5904\u7406\u5668\u8FC7\u6EE4\u540E\uFF0C\u5C06\u5408\u6CD5\u4EA4\u6613\u63D0\u4EA4\u5230\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u8FDB\u884C\u6392\u5E8F\uFF0C\u518D\u6309\u7167\u4EA4\u6613\u51FA\u5757\u89C4\u5219\uFF08\u51FA\u5757\u65F6\u95F4\u5468\u671F\u3001\u6253\u5305\u6700\u5927\u4EA4\u6613\u6570\u91CF\u3001\u533A\u5757\u5B57\u8282\u6570\u9650\u5236\u7B49\uFF09\u751F\u6210\u65B0\u533A\u5757\uFF0C\u5E76\u63D0\u4EA4\u5230\u901A\u9053\u8D26\u672C\u3002</p></li></ul><p>\u540C\u65F6\uFF0C<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\u63D0\u4F9B<code>Deliver</code>()\u533A\u5757\u5206\u53D1\u670D\u52A1\u63A5\u53E3\uFF0C\u5C06\u63A5\u6536\u7684\u670D\u52A1\u8BF7\u6C42\u4EA4\u7531Deliver\u670D\u52A1\u5904\u7406\u53E5\u67C4\u7684<code>Handle</code>()\u65B9\u6CD5\u5904\u7406\uFF0C\u5EFA\u7ACB\u6D88\u606F\u5904\u7406\u5FAA\u73AF\uFF0C\u8D1F\u8D23\u63A5\u6536\u4E0E\u5904\u7406\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u533A\u5757\u8BF7\u6C42\u6D88\u606F\uFF0C\u5C01\u88C5\u4E86\u6307\u5B9A\u533A\u5757\u8BF7\u6C42\u8303\u56F4\u7684\u533A\u5757\u641C\u7D22\u4FE1\u606F\uFF08SeekInfo\u7C7B\u578B\uFF09\u3002\u63A5\u7740\uFF0CDeliver\u670D\u52A1\u5904\u7406\u53E5\u67C4\u5FAA\u73AF\u4ECE\u672C\u5730\u8D26\u672C\u83B7\u53D6\u533A\u5757\u6570\u636E\uFF0C\u4F9D\u6B21\u53D1\u9001\u7ED9\u8BF7\u6C42\u8282\u70B9\uFF08\u5982<code>Leader</code>\u4E3B\u8282\u70B9\uFF09\u3002\u5982\u679C\u8D26\u672C\u4E2D\u8FD8\u672A\u751F\u6210\u6307\u5B9A\u533A\u5757\uFF0C\u5219Deliver\u670D\u52A1\u5904\u7406\u53E5\u67C4\u9ED8\u8BA4\u4E00\u76F4\u963B\u585E\u7B49\u5F85\uFF0C\u76F4\u5230\u8BE5\u533A\u5757\u521B\u5EFA\u5B8C\u6210\u5E76\u63D0\u4EA4\u8D26\u672C\u540E\u518D\u56DE\u590D\u7ED9\u8BF7\u6C42\u8282\u70B9\u3002</p><p>\u53E6\u5916\uFF0C<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\u8FD8\u63D0\u4F9B\u4E86\u591A\u901A\u9053\u6CE8\u518C\u7BA1\u7406\u5668<code>Registrar</code>\u5BF9\u8C61\uFF0C\u8D1F\u8D23\u7BA1\u7406\u7CFB\u7EDF\u901A\u9053\u4E0E\u6240\u6709\u5E94\u7528\u901A\u9053\uFF0C\u5C01\u88C5\u4E86\u6240\u6709\u901A\u9053\u7684\u94FE\u652F\u6301\u5BF9\u8C61\u5B57\u5178\u3001\u5171\u8BC6\u7EC4\u4EF6\u5B57\u5178\u3001\u533A\u5757\u8D26\u672C\u5DE5\u5382\u5BF9\u8C61\u7B49\u7EC4\u4EF6\uFF0C\u7EF4\u62A4\u6240\u6709\u901A\u9053\u4E0A\u7684\u901A\u9053\u914D\u7F6E\u3001\u533A\u5757\u8D26\u672C\u5BF9\u8C61\u3001\u5171\u8BC6\u7EC4\u4EF6\u7B49\u6838\u5FC3\u8D44\u6E90\uFF0C\u521B\u5EFA\u901A\u9053\u4E0A\u7684\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u63D0\u4F9B<code>Orderer</code>\u5171\u8BC6\u6392\u5E8F\u670D\u52A1\uFF0C\u8D1F\u8D23\u5BF9\u4EA4\u6613\u6D88\u606F\u6392\u5E8F\uFF0C\u5207\u5272\u6253\u5305\u6784\u9020\u65B0\u533A\u5757\u5E76\u63D0\u4EA4\u8D26\u672C\uFF0C\u540C\u65F6\u8D1F\u8D23\u521B\u5EFA\u65B0\u7684\u5E94\u7528\u901A\u9053\u4E0E\u66F4\u65B0\u901A\u9053\u914D\u7F6E\uFF0C\u5176\u76F8\u5F53\u4E8E<code>Orderer</code>\u8282\u70B9\u4E0A\u7684\u201C\u8D44\u6E90\u7BA1\u7406\u5668\u201D\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C<code>Orderer</code>\u6392\u5E8F\u670D\u52A1\u5668\u4E0A\u7684\u901A\u9053\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\u5229\u7528<code>Golang</code>\u901A\u9053\uFF08<code>Solo</code>\u5171\u8BC6\u7EC4\u4EF6\uFF09\u6216<code>Kafka</code>\u96C6\u7FA4\uFF08<code>Kafka</code>\u5171\u8BC6\u7EC4\u4EF6\uFF09\u4F5C\u4E3A\u5171\u8BC6\u6392\u5E8F\u540E\u7AEF\uFF0C\u5BF9\u7ECF\u8FC7\u901A\u9053\u6D88\u606F\u5904\u7406\u5668\u8FC7\u6EE4\u7684\u5408\u6CD5\u4EA4\u6613\u6D88\u606F\u8FDB\u884C\u6392\u5E8F\uFF0C\u5BF9\u4EA4\u6613\u987A\u5E8F\u7B49\u8FBE\u6210\u4E00\u81F4\u6027\u89C2\u70B9\u3002\u540C\u65F6\uFF0C\u5728\u65B0\u901A\u9053\u521B\u5EFA\u65F6\u6216\u542F\u52A8\u6062\u590D\u73B0\u6709\u901A\u9053\u65F6\uFF0C\u542F\u52A8\u901A\u9053\u7ED1\u5B9A\u7684\u94FE\u652F\u6301\u5BF9\u8C61\u4EE5\u53CA\u5171\u8BC6\u7EC4\u4EF6\u94FE\u5BF9\u8C61\uFF0C\u6784\u5EFA\u4EA4\u6613\u6D88\u606F\u5904\u7406\u5FAA\u73AF\uFF0C\u63A5\u6536\u5171\u8BC6\u7EC4\u4EF6\u5DF2\u7ECF\u5B8C\u6210\u6392\u5E8F\u7684\u4EA4\u6613\u6D88\u606F\uFF0C\u5E76\u6DFB\u52A0\u5230\u672C\u5730\u5F85\u5904\u7406\u7684\u7F13\u5B58\u4EA4\u6613\u6D88\u606F\u5217\u8868\u4E2D\uFF0C\u5305\u62EC\u914D\u7F6E\u4EA4\u6613\u6D88\u606F\u3001\u666E\u901A\u4EA4\u6613\u6D88\u606F\u7B49\uFF0C\u91C7\u7528\u76F8\u4E92\u72EC\u7ACB\u7684\u6D88\u606F\u5904\u7406\u6D41\u7A0B\u5206\u522B\u5904\u7406 \u3002</p><p>\u6CE8\u610F\uFF0C\u76EE\u524D<code>Orderer</code>\u8282\u70B9\u8D26\u672C\u53EA\u5305\u62EC\u533A\u5757\u6570\u636E\u6587\u4EF6\u4E0E\u533A\u5757\u7D22\u5F15\u6570\u636E\u5E93\uFF0C\u8D1F\u8D23\u4FDD\u5B58\u533A\u5757\u6570\u636E\u5373\u516C\u6709\u6570\u636E\uFF08\u5305\u542B\u516C\u5171\u6570\u636E\u4E0E\u9690\u79C1\u6570\u636E\u54C8\u5E0C\u503C\uFF09\uFF0C\u4E0D\u5B58\u5728\u72B6\u6001\u6570\u636E\u5E93\u3001\u5386\u53F2\u6570\u636E\u5E93\u3001\u9690\u79C1\u6570\u636E\u5E93\u7B49\u3002\u4E0D\u540C\u4E8E<code>Peer</code>\u8282\u70B9\uFF0C<code>Orderer</code>\u8282\u70B9\u5728\u63D0\u4EA4\u533A\u5757\u5230\u672C\u5730\u8D26\u672C\u524D\u4E0D\u9700\u8981\u9A8C\u8BC1\u4EA4\u6613\u80CC\u4E66\u7B56\u7565\u4E0E\u6267\u884C<code>MVCC</code>\u68C0\u67E5\uFF0C\u4E5F\u4E0D\u4FDD\u5B58\u4EFB\u4F55\u9690\u79C1\u6570\u636E\uFF08\u660E\u6587\uFF09\uFF0C\u53EA\u8D1F\u8D23\u5B58\u50A8\u6240\u6709\u901A\u9053\u8D26\u672C\u4E0A\u7684\u533A\u5757\u6570\u636E\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><blockquote><p>/</p></blockquote>',20),a=[p];function l(t,i){return o(),c("div",null,a)}const u=e(r,[["render",l],["__file","1.hyperledger_overview_fabric_source_Order_node.html.vue"]]);export{u as default};
