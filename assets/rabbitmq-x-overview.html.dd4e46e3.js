import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as e,b as t,d as i,f as c,r as s}from"./app.9e15f9d2.js";const g={},h=c('<h1 id="rabbitmq\u5165\u95E8-\u5F00\u7BC7" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u5165\u95E8-\u5F00\u7BC7" aria-hidden="true">#</a> RabbitMQ\u5165\u95E8 - \u5F00\u7BC7</h1><h2 id="_1-\u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u6D88\u606F\u961F\u5217</h2><p><strong>\u6D88\u606F</strong>\u6307\u7684\u662F\u4E24\u4E2A\u5E94\u7528\u95F4\u4F20\u9012\u7684\u6570\u636E\u3002\u6570\u636E\u7684\u7C7B\u578B\u6709\u5F88\u591A\u79CD\u5F62\u5F0F\uFF0C\u53EF\u80FD\u53EA\u5305\u542B\u6587\u672C\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u80FD\u5305\u542B\u5D4C\u5165\u5BF9\u8C61\u3002</p><p><strong>\u201C\u6D88\u606F\u961F\u5217(Message Queue)\u201D\u662F\u5728\u6D88\u606F\u7684\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4FDD\u5B58\u6D88\u606F\u7684\u5BB9\u5668</strong>\u3002\u5728\u6D88\u606F\u961F\u5217\u4E2D\uFF0C\u901A\u5E38\u6709\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u4E24\u4E2A\u89D2\u8272\u3002\u751F\u4EA7\u8005\u53EA\u8D1F\u8D23\u53D1\u9001\u6570\u636E\u5230\u6D88\u606F\u961F\u5217\uFF0C\u8C01\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u53D6\u51FA\u6570\u636E\u5904\u7406\uFF0C\u4ED6\u4E0D\u7BA1\u3002\u6D88\u8D39\u8005\u53EA\u8D1F\u8D23\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u53D6\u51FA\u6570\u636E\u5904\u7406\uFF0C\u4ED6\u4E0D\u7BA1\u8FD9\u662F\u8C01\u53D1\u9001\u7684\u6570\u636E\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922195726878.png" alt="image-20220922195726878"></p><h2 id="_2-\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u4F7F\u7528\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u4F7F\u7528\u6D88\u606F\u961F\u5217</h2><p>\u4E3B\u8981\u6709\u4E09\u4E2A\u4F5C\u7528\uFF1A</p><ul><li><strong>\u89E3\u8026</strong>\u3002\u5982\u56FE\u6240\u793A\u3002\u5047\u8BBE\u6709\u7CFB\u7EDFB\u3001C\u3001D\u90FD\u9700\u8981\u7CFB\u7EDFA\u7684\u6570\u636E\uFF0C\u4E8E\u662F\u7CFB\u7EDFA\u8C03\u7528\u4E09\u4E2A\u65B9\u6CD5\u53D1\u9001\u6570\u636E\u5230B\u3001C\u3001D\u3002\u8FD9\u65F6\uFF0C\u7CFB\u7EDFD\u4E0D\u9700\u8981\u4E86\uFF0C\u90A3\u5C31\u9700\u8981\u5728\u7CFB\u7EDFA\u628A\u76F8\u5173\u7684\u4EE3\u7801\u5220\u6389\u3002\u5047\u8BBE\u8FD9\u65F6\u6709\u4E2A\u65B0\u7684\u7CFB\u7EDFE\u9700\u8981\u6570\u636E\uFF0C\u8FD9\u65F6\u7CFB\u7EDFA\u53C8\u8981\u589E\u52A0\u8C03\u7528\u7CFB\u7EDFE\u7684\u4EE3\u7801\u3002\u4E3A\u4E86\u964D\u4F4E\u8FD9\u79CD\u5F3A\u8026\u5408\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528MQ\uFF0C<strong>\u7CFB\u7EDFA\u53EA\u9700\u8981\u628A\u6570\u636E\u53D1\u9001\u5230MQ\uFF0C\u5176\u4ED6\u7CFB\u7EDF\u5982\u679C\u9700\u8981\u6570\u636E\uFF0C\u5219\u4ECEMQ\u4E2D\u83B7\u53D6\u5373\u53EF</strong>\u3002</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922195842827.png" alt="image-20220922195842827"></p><ul><li>\u5F02\u6B65\u3002\u5982\u56FE\u6240\u793A\u3002\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u53D1\u9001\u8FDB\u6765\uFF0C\u7CFB\u7EDFA\u4F1A\u8C03\u7528\u7CFB\u7EDFB\u3001C\u3001D\u4E09\u4E2A\u7CFB\u7EDF\uFF0C\u540C\u6B65\u8BF7\u6C42\u7684\u8BDD\uFF0C\u54CD\u5E94\u65F6\u95F4\u5C31\u662F\u7CFB\u7EDFA\u3001B\u3001C\u3001D\u7684\u603B\u548C\uFF0C\u4E5F\u5C31\u662F800ms\u3002<strong>\u5982\u679C\u4F7F\u7528MQ\uFF0C\u7CFB\u7EDFA\u53D1\u9001\u6570\u636E\u5230MQ\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u8FD4\u56DE\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u4E0D\u9700\u8981\u518D\u7B49\u5F85\u7CFB\u7EDFB\u3001C\u3001D\u7684\u54CD\u5E94\uFF0C\u53EF\u4EE5\u5927\u5927\u5730\u63D0\u9AD8\u6027\u80FD</strong>\u3002\u5BF9\u4E8E\u4E00\u4E9B\u975E\u5FC5\u8981\u7684\u4E1A\u52A1\uFF0C\u6BD4\u5982\u53D1\u9001\u77ED\u4FE1\uFF0C\u53D1\u9001\u90AE\u4EF6\u7B49\u7B49\uFF0C\u5C31\u53EF\u4EE5\u91C7\u7528MQ\u3002</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922200103149.png" alt="image-20220922200103149"></p><ul><li>\u524A\u5CF0\u3002\u5982\u56FE\u6240\u793A\u3002\u8FD9\u5176\u5B9E\u662FMQ\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u5E94\u7528\u3002\u5047\u8BBE\u7CFB\u7EDFA\u5728\u67D0\u4E00\u6BB5\u65F6\u95F4\u8BF7\u6C42\u6570\u66B4\u589E\uFF0C\u67095000\u4E2A\u8BF7\u6C42\u53D1\u9001\u8FC7\u6765\uFF0C\u7CFB\u7EDFA\u8FD9\u65F6\u5C31\u4F1A\u53D1\u90015000\u6761SQL\u8FDB\u5165MySQL\u8FDB\u884C\u6267\u884C\uFF0CMySQL\u5BF9\u4E8E\u5982\u6B64\u5E9E\u5927\u7684\u8BF7\u6C42\u5F53\u7136\u5904\u7406\u4E0D\u8FC7\u6765\uFF0CMySQL\u5C31\u4F1A\u5D29\u6E83\uFF0C\u5BFC\u81F4\u7CFB\u7EDF\u762B\u75EA\u3002<strong>\u5982\u679C\u4F7F\u7528MQ\uFF0C\u7CFB\u7EDFA\u4E0D\u518D\u662F\u76F4\u63A5\u53D1\u9001SQL\u5230\u6570\u636E\u5E93\uFF0C\u800C\u662F\u628A\u6570\u636E\u53D1\u9001\u5230MQ\uFF0CMQ\u77ED\u65F6\u95F4\u79EF\u538B\u6570\u636E\u662F\u53EF\u4EE5\u63A5\u53D7\u7684\uFF0C\u7136\u540E\u7531\u6D88\u8D39\u8005\u6BCF\u6B21\u62C9\u53D62000\u6761\u8FDB\u884C\u5904\u7406\uFF0C\u9632\u6B62\u5728\u8BF7\u6C42\u5CF0\u503C\u65F6\u671F\u5927\u91CF\u7684\u8BF7\u6C42\u76F4\u63A5\u53D1\u9001\u5230MySQL\u5BFC\u81F4\u7CFB\u7EDF\u5D29\u6E83</strong>\u3002</li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922200337872.png" alt="image-20220922200337872"></p><h2 id="_3-rabbitmq-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_3-rabbitmq-\u7B80\u4ECB" aria-hidden="true">#</a> 3. RabbitMQ \u7B80\u4ECB</h2><p>RabbitMQ\u662F\u4E00\u6B3E\u4F7F\u7528Erlang\u8BED\u8A00\u5F00\u53D1\u7684\uFF0C\u5B9E\u73B0AMQP(Advanced Message Queuing Protocol\uFF0C\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE)\u7684\u5F00\u6E90\u6D88\u606F\u4E2D\u95F4\u4EF6\uFF0C\u6700\u521D\u8D77\u6E90\u4E8E\u91D1\u878D\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5B58\u50A8\u8F6C\u53D1\u6D88\u606F\u3002</p><h3 id="_3-1-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7279\u70B9" aria-hidden="true">#</a> 3.1 \u7279\u70B9</h3><ul><li><strong>\u53EF\u9760\u6027</strong>\uFF1A\u652F\u6301\u6301\u4E45\u5316\uFF0C\u4F20\u8F93\u786E\u8BA4\uFF0C\u53D1\u5E03\u786E\u8BA4\u7B49\u4FDD\u8BC1\u4E86MQ\u7684\u53EF\u9760\u6027\u3002</li><li><strong>\u7075\u6D3B\u7684\u5206\u53D1\u6D88\u606F\u7B56\u7565(\u8DEF\u7531)</strong>\uFF1A\u8FD9\u5E94\u8BE5\u662FRabbitMQ\u7684\u4E00\u5927\u7279\u70B9\u3002\u5728\u6D88\u606F\u8FDB\u5165MQ\u524D\u7531Exchange(\u4EA4\u6362\u673A)\u8FDB\u884C\u8DEF\u7531\u6D88\u606F\u3002\u5206\u53D1\u6D88\u606F\u7B56\u7565\u6709\uFF1A\u7B80\u5355\u6A21\u5F0F\u3001\u5DE5\u4F5C\u961F\u5217\u6A21\u5F0F\u3001\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u3001\u8DEF\u7531\u6A21\u5F0F\u3001\u901A\u914D\u7B26\u6A21\u5F0F\u3002</li><li><strong>\u652F\u6301\u96C6\u7FA4</strong>\uFF1A\u591A\u53F0RabbitMQ\u670D\u52A1\u5668\u53EF\u4EE5\u7EC4\u6210\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u5F62\u6210\u4E00\u4E2A\u903B\u8F91Broker\u3002</li><li><strong>\u591A\u79CD\u534F\u8BAE</strong>\uFF1ARabbitMQ\u652F\u6301\u591A\u79CD\u6D88\u606F\u961F\u5217\u534F\u8BAE\uFF0C\u6BD4\u5982 STOMP\u3001MQTT \u7B49\u7B49\u3002</li><li><strong>\u652F\u6301\u591A\u79CD\u8BED\u8A00\u5BA2\u6237\u7AEF</strong>\uFF1ARabbitMQ\u51E0\u4E4E\u652F\u6301\u6240\u6709\u5E38\u7528\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5305\u62EC Java\u3001.NET\u3001Ruby \u7B49\u7B49\u3002</li><li><strong>\u53EF\u89C6\u5316\u7BA1\u7406\u754C\u9762</strong>\uFF1ARabbitMQ\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6613\u7528\u7684\u7528\u6237\u754C\u9762\uFF0C\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u76D1\u63A7\u548C\u7BA1\u7406\u6D88\u606F Broker\u3002</li><li><strong>\u63D2\u4EF6\u673A\u5236</strong>\uFF1ARabbitMQ\u63D0\u4F9B\u4E86\u8BB8\u591A\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u8FDB\u884C\u6269\u5C55\uFF0C\u4E5F\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u63D2\u4EF6\u3002</li></ul><h2 id="_4-rabbitmq\u4E2D\u7684\u7EC4\u6210\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_4-rabbitmq\u4E2D\u7684\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a> 4. RabbitMQ\u4E2D\u7684\u7EC4\u6210\u90E8\u5206</h2><ul><li>Broker\uFF1A\u6D88\u606F\u961F\u5217\u670D\u52A1\u8FDB\u7A0B\u3002\u6B64\u8FDB\u7A0B\u5305\u62EC\u4E24\u4E2A\u90E8\u5206\uFF1AExchange\u548CQueue\u3002</li><li>Exchange\uFF1A\u6D88\u606F\u961F\u5217\u4EA4\u6362\u673A\u3002<strong>\u6309\u4E00\u5B9A\u7684\u89C4\u5219\u5C06\u6D88\u606F\u8DEF\u7531\u8F6C\u53D1\u5230\u67D0\u4E2A\u961F\u5217</strong>\u3002</li><li>Queue\uFF1A\u6D88\u606F\u961F\u5217\uFF0C\u5B58\u50A8\u6D88\u606F\u7684\u961F\u5217\u3002</li><li>Producer\uFF1A\u6D88\u606F\u751F\u4EA7\u8005\u3002\u751F\u4EA7\u65B9\u5BA2\u6237\u7AEF\u5C06\u6D88\u606F\u540C\u4EA4\u6362\u673A\u8DEF\u7531\u53D1\u9001\u5230\u961F\u5217\u4E2D\u3002</li><li>Consumer\uFF1A\u6D88\u606F\u6D88\u8D39\u8005\u3002\u6D88\u8D39\u961F\u5217\u4E2D\u5B58\u50A8\u7684\u6D88\u606F\u3002</li></ul><p>\u8FD9\u4E9B\u7EC4\u6210\u90E8\u5206\u662F\u5982\u4F55\u534F\u540C\u5DE5\u4F5C\u7684\u5462\uFF0C\u5927\u6982\u7684\u6D41\u7A0B\u5982\u4E0B\uFF0C\u8BF7\u770B\u4E0B\u56FE\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922203245154.png" alt="image-20220922203245154"></p><ul><li>\u6D88\u606F\u751F\u4EA7\u8005\u8FDE\u63A5\u5230RabbitMQ Broker\uFF0C\u521B\u5EFAconnection\uFF0C\u5F00\u542Fchannel\u3002</li><li>\u751F\u4EA7\u8005\u58F0\u660E\u4EA4\u6362\u673A\u7C7B\u578B\u3001\u540D\u79F0\u3001\u662F\u5426\u6301\u4E45\u5316\u7B49\u3002</li><li>\u751F\u4EA7\u8005\u53D1\u9001\u6D88\u606F\uFF0C\u5E76\u6307\u5B9A\u6D88\u606F\u662F\u5426\u6301\u4E45\u5316\u7B49\u5C5E\u6027\u548Crouting key\u3002</li><li>exchange\u6536\u5230\u6D88\u606F\u4E4B\u540E\uFF0C<strong>\u6839\u636Erouting key\u8DEF\u7531\u5230\u8DDF\u5F53\u524D\u4EA4\u6362\u673A\u7ED1\u5B9A\u7684\u76F8\u5339\u914D\u7684\u961F\u5217</strong>\u91CC\u9762\u3002</li><li>\u6D88\u8D39\u8005\u76D1\u542C\u63A5\u6536\u5230\u6D88\u606F\u4E4B\u540E\u5F00\u59CB\u4E1A\u52A1\u5904\u7406\u3002</li></ul><h2 id="_5-exchange\u7684\u56DB\u79CD\u7C7B\u578B\u4EE5\u53CA\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-exchange\u7684\u56DB\u79CD\u7C7B\u578B\u4EE5\u53CA\u7528\u6CD5" aria-hidden="true">#</a> 5. Exchange\u7684\u56DB\u79CD\u7C7B\u578B\u4EE5\u53CA\u7528\u6CD5</h2><p>\u4ECE\u4E0A\u9762\u7684\u5DE5\u4F5C\u6D41\u7A0B\u53EF\u4EE5\u770B\u51FA\uFF0C\u5B9E\u9645\u4E0A\u6709\u4E2A\u5173\u952E\u7684\u7EC4\u4EF6Exchange\uFF0C\u56E0\u4E3A<strong>\u6D88\u606F\u53D1\u9001\u5230RabbitMQ\u540E\u9996\u5148\u8981\u7ECF\u8FC7Exchange\u8DEF\u7531\u624D\u80FD\u627E\u5230\u5BF9\u5E94\u7684Queue</strong>\u3002</p><p>\u5B9E\u9645\u4E0AExchange\u7C7B\u578B\u6709\u56DB\u79CD\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u7C7B\u578B\u5DE5\u4F5C\u7684\u65B9\u5F0F\u4E5F\u6709\u6240\u4E0D\u540C\u3002\u5728HelloWord\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5C31\u4F7F\u7528\u4E86\u6BD4\u8F83\u7B80\u5355\u7684<strong>Direct Exchange</strong>\uFF0C\u7FFB\u8BD1\u5C31\u662F\u76F4\u8FDE\u4EA4\u6362\u673A\u3002\u5176\u4F59\u4E09\u79CD\u5206\u522B\u662F\uFF1A<strong>Fanout exchange\u3001Topic exchange\u3001Headers exchange</strong>\u3002</p><h3 id="_5-1-direct-exchange-\u76F4\u8FDE" tabindex="-1"><a class="header-anchor" href="#_5-1-direct-exchange-\u76F4\u8FDE" aria-hidden="true">#</a> 5.1 Direct Exchange(\u76F4\u8FDE)</h3><p>\u89C1\u6587\u77E5\u610F\uFF0C\u76F4\u8FDE\u4EA4\u6362\u673A\u610F\u601D\u662F\u6B64\u4EA4\u6362\u673A\u9700\u8981\u7ED1\u5B9A\u4E00\u4E2A\u961F\u5217\uFF0C\u8981\u6C42<strong>\u8BE5\u6D88\u606F\u4E0E\u4E00\u4E2A\u7279\u5B9A\u7684\u8DEF\u7531\u952E\u5B8C\u5168\u5339\u914D</strong>\u3002\u7B80\u5355\u70B9\u8BF4\u5C31\u662F\u4E00\u5BF9\u4E00\u7684\uFF0C\u70B9\u5BF9\u70B9\u7684\u53D1\u9001\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922203746317.png" alt="image-20220922203746317"></p><h3 id="_5-2-fanout-exchange-\u53D1\u5E03\u8BA2\u9605" tabindex="-1"><a class="header-anchor" href="#_5-2-fanout-exchange-\u53D1\u5E03\u8BA2\u9605" aria-hidden="true">#</a> 5.2 Fanout exchange(\u53D1\u5E03\u8BA2\u9605)</h3><p>\u8FD9\u79CD\u7C7B\u578B\u7684\u4EA4\u6362\u673A\u9700\u8981\u5C06\u961F\u5217\u7ED1\u5B9A\u5230\u4EA4\u6362\u673A\u4E0A\u3002<strong>\u4E00\u4E2A\u53D1\u9001\u5230\u4EA4\u6362\u673A\u7684\u6D88\u606F\u90FD\u4F1A\u88AB\u8F6C\u53D1\u5230\u4E0E\u8BE5\u4EA4\u6362\u673A\u7ED1\u5B9A\u7684\u6240\u6709\u961F\u5217\u4E0A</strong>\u3002\u5F88\u50CF\u5B50\u7F51\u5E7F\u64AD\uFF0C\u6BCF\u53F0\u5B50\u7F51\u5185\u7684\u4E3B\u673A\u90FD\u83B7\u5F97\u4E86\u4E00\u4EFD\u590D\u5236\u7684\u6D88\u606F\u3002\u7B80\u5355\u70B9\u8BF4\u5C31\u662F\u53D1\u5E03\u8BA2\u9605\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922204506785.png" alt="image-20220922204506785"></p><h3 id="_5-3-topic-exchange-\u901A\u914D\u7B26" tabindex="-1"><a class="header-anchor" href="#_5-3-topic-exchange-\u901A\u914D\u7B26" aria-hidden="true">#</a> 5.3 Topic Exchange(\u901A\u914D\u7B26)</h3><p>\u76F4\u63A5\u7FFB\u8BD1\u7684\u8BDD\u53EB\u505A\u4E3B\u9898\u4EA4\u6362\u673A\uFF0C\u5982\u679C\u4ECE\u7528\u6CD5\u4E0A\u9762\u7FFB\u8BD1\u53EF\u80FD\u53EB\u901A\u914D\u7B26\u4EA4\u6362\u673A\u4F1A\u66F4\u52A0\u8D34\u5207\u3002\u8FD9\u79CD\u4EA4\u6362\u673A\u662F\u4F7F\u7528\u901A\u914D\u7B26\u53BB\u5339\u914D\uFF0C\u8DEF\u7531\u5230\u5BF9\u5E94\u7684\u961F\u5217\u3002\u901A\u914D\u7B26\u6709\u4E24\u79CD\uFF1A&quot;*&quot; \u3001 &quot;#&quot;\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\u901A\u914D\u7B26\u524D\u9762\u5FC5\u987B\u8981\u52A0\u4E0A&quot;.&quot;\u7B26\u53F7\u3002</p><p><code>*</code> \u7B26\u53F7\uFF1A\u6709\u4E14\u53EA\u5339\u914D\u4E00\u4E2A\u8BCD\u3002\u6BD4\u5982 <code>a.*</code>\u53EF\u4EE5\u5339\u914D\u5230&quot;a.b&quot;\u3001&quot;a.c&quot;\uFF0C\u4F46\u662F\u5339\u914D\u4E0D\u4E86&quot;a.b.c&quot;\u3002</p><p><code>#</code> \u7B26\u53F7\uFF1A\u5339\u914D\u4E00\u4E2A\u6216\u591A\u4E2A\u8BCD\u3002\u6BD4\u5982&quot;rabbit.#&quot;\u65E2\u53EF\u4EE5\u5339\u914D\u5230&quot;rabbit.a.b&quot;\u3001&quot;rabbit.a&quot;\uFF0C\u4E5F\u53EF\u4EE5\u5339\u914D\u5230&quot;rabbit.a.b.c&quot;\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922204704979.png" alt="image-20220922204704979"></p><p>\u6BD4\u8F83\u5E38\u7528\u7684\u5C31\u662F\u4EE5\u4E0A\u4E09\u79CD\uFF1A\u76F4\u8FDE(DirectExchange)\uFF0C\u53D1\u5E03\u8BA2\u9605(FanoutExchange)\uFF0C\u901A\u914D\u7B26(TopicExchange)\u3002\u719F\u7EC3\u8FD0\u7528\u8FD9\u4E09\u79CD\u4EA4\u6362\u673A\u7C7B\u578B\uFF0C\u57FA\u672C\u4E0A\u53EF\u4EE5\u89E3\u51B3\u5927\u90E8\u5206\u7684\u4E1A\u52A1\u573A\u666F\u3002</p><p>\u5B9E\u9645\u4E0A\u7A0D\u5FAE\u601D\u8003\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u53D1\u73B0\u901A\u914D\u7B26(TopicExchange)\u8FD9\u79CD\u6A21\u5F0F\u5176\u5B9E\u662F\u53EF\u4EE5\u8FBE\u5230\u76F4\u8FDE(DirectExchange)\u548C\u53D1\u5E03\u8BA2\u9605(FanoutExchange)\u8FD9\u4E24\u79CD\u7684\u6548\u679C\u7684\u3002</p><p>FanoutExchange\u4E0D\u9700\u8981\u7ED1\u5B9AroutingKey\uFF0C\u6240\u4EE5\u6027\u80FD\u76F8\u5BF9TopicExchange\u4F1A\u597D\u4E00\u70B9\u3002</p><h3 id="_5-4-headers-exchange-\u8BF7\u6C42\u5934\u5339\u914D-\u4E0D\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#_5-4-headers-exchange-\u8BF7\u6C42\u5934\u5339\u914D-\u4E0D\u63A8\u8350" aria-hidden="true">#</a> 5.4 Headers Exchange(\u8BF7\u6C42\u5934\u5339\u914D\uFF0C\u4E0D\u63A8\u8350)</h3><p>\u8FD9\u79CD\u4EA4\u6362\u673A\u7528\u7684\u76F8\u5BF9\u6CA1\u8FD9\u4E48\u591A\u3002<strong>\u5B83\u8DDF\u4E0A\u9762\u4E09\u79CD\u6709\u70B9\u533A\u522B\uFF0C\u5B83\u7684\u8DEF\u7531\u4E0D\u662F\u7528routingKey\u8FDB\u884C\u8DEF\u7531\u5339\u914D\uFF0C\u800C\u662F\u5728\u5339\u914D\u8BF7\u6C42\u5934\u4E2D\u6240\u5E26\u7684\u952E\u503C\u8FDB\u884C\u8DEF\u7531</strong>\u3002\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220922204955736.png" alt="image-20220922204955736"></p><p>\u521B\u5EFA\u961F\u5217\u9700\u8981\u8BBE\u7F6E\u7ED1\u5B9A\u7684\u5934\u90E8\u4FE1\u606F\uFF0C\u6709\u4E24\u79CD\u6A21\u5F0F\uFF1A<strong>\u5168\u90E8\u5339\u914D\u548C\u90E8\u5206\u5339\u914D</strong>\u3002\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u4EA4\u6362\u673A\u4F1A\u6839\u636E\u751F\u4EA7\u8005\u53D1\u9001\u8FC7\u6765\u7684\u5934\u90E8\u4FE1\u606F\u643A\u5E26\u7684\u952E\u503C\u53BB\u5339\u914D\u961F\u5217\u7ED1\u5B9A\u7684\u952E\u503C\uFF0C\u8DEF\u7531\u5230\u5BF9\u5E94\u7684\u961F\u5217\u3002</p><h2 id="_6-\u4EA4\u6362\u5668\u65E0\u6CD5\u6839\u636E\u81EA\u8EAB\u7C7B\u578B\u548C\u8DEF\u7531\u952E\u627E\u5230\u7B26\u5408\u6761\u4EF6\u961F\u5217\u65F6-\u6709\u54EA\u4E9B\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_6-\u4EA4\u6362\u5668\u65E0\u6CD5\u6839\u636E\u81EA\u8EAB\u7C7B\u578B\u548C\u8DEF\u7531\u952E\u627E\u5230\u7B26\u5408\u6761\u4EF6\u961F\u5217\u65F6-\u6709\u54EA\u4E9B\u5904\u7406" aria-hidden="true">#</a> 6. \u4EA4\u6362\u5668\u65E0\u6CD5\u6839\u636E\u81EA\u8EAB\u7C7B\u578B\u548C\u8DEF\u7531\u952E\u627E\u5230\u7B26\u5408\u6761\u4EF6\u961F\u5217\u65F6\uFF0C\u6709\u54EA\u4E9B\u5904\u7406\uFF1F</h2><p>mandatory \uFF1Atrue \u8FD4\u56DE\u6D88\u606F\u7ED9\u751F\u4EA7\u8005\u3002</p><p>mandatory: false \u76F4\u63A5\u4E22\u5F03\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',47),l={href:"https://developer.aliyun.com/article/769883",target:"_blank",rel:"noopener noreferrer"},p={href:"https://medium.com/@zamhuang/rabbitmq-%E4%BA%94%E5%88%86%E9%90%98%E8%BC%95%E9%AC%86%E4%BA%86%E8%A7%A3-rabbitmq-%E9%81%8B%E4%BD%9C-fcaecbaa69d4",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.cnblogs.com/vipstone/p/9275256.html",target:"_blank",rel:"noopener noreferrer"};function b(u,m){const a=s("ExternalLinkIcon");return n(),o("div",null,[h,e("p",null,[e("a",l,[t("\u8D85\u8BE6\u7EC6\u7684RabbitMQ\u5165\u95E8\uFF0C\u770B\u8FD9\u7BC7\u5C31\u591F\u4E86\uFF01"),i(a)])]),e("p",null,[e("a",p,[t("\u3010RabbitMQ\u3011\u4E94\u5206\u9418\u8F15\u9B06\u4E86\u89E3 RabbitMQ \u904B\u4F5C"),i(a)])]),e("p",null,[e("a",d,[t("RabbitMQ\u7CFB\u5217\uFF08\u4E8C\uFF09\u6DF1\u5165\u4E86\u89E3RabbitMQ\u5DE5\u4F5C\u539F\u7406\u53CA\u7B80\u5355\u4F7F\u7528"),i(a)])])])}const Q=r(g,[["render",b],["__file","rabbitmq-x-overview.html.vue"]]);export{Q as default};
