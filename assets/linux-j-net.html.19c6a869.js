import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as e,b as l,d as t,f as c,r as p}from"./app.e7bdeba6.js";const n={},d=c(`<h1 id="kafka-\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#kafka-\u9AD8\u53EF\u7528" aria-hidden="true">#</a> Kafka - \u9AD8\u53EF\u7528</h1><h2 id="_1-\u9AD8\u53EF\u7528\u7684\u7531\u6765" tabindex="-1"><a class="header-anchor" href="#_1-\u9AD8\u53EF\u7528\u7684\u7531\u6765" aria-hidden="true">#</a> 1. \u9AD8\u53EF\u7528\u7684\u7531\u6765</h2><h3 id="_1-1-\u4E3A\u4F55\u9700\u8981replication" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E3A\u4F55\u9700\u8981replication" aria-hidden="true">#</a> 1.1 \u4E3A\u4F55\u9700\u8981Replication</h3><p>\u5728Kafka\u57280.8\u4EE5\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u662F\u6CA1\u6709Replication\u7684\uFF0C\u4E00\u65E6\u67D0\u4E00\u4E2ABroker\u5B95\u673A\uFF0C\u5219\u5176\u4E0A\u6240\u6709\u7684Partition\u6570\u636E\u90FD\u4E0D\u53EF\u88AB\u6D88\u8D39\uFF0C\u8FD9\u4E0EKafka\u6570\u636E\u6301\u4E45\u6027\u53CADelivery Guarantee\u7684\u8BBE\u8BA1\u76EE\u6807\u76F8\u6096\u3002\u540C\u65F6Producer\u90FD\u4E0D\u80FD\u518D\u5C06\u6570\u636E\u5B58\u4E8E\u8FD9\u4E9BPartition\u4E2D\u3002</p><p>\u5982\u679CProducer\u4F7F\u7528\u540C\u6B65\u6A21\u5F0F\u5219Producer\u4F1A\u5728\u5C1D\u8BD5\u91CD\u65B0\u53D1\u9001message.send.max.retries\uFF08\u9ED8\u8BA4\u503C\u4E3A3\uFF09\u6B21\u540E\u629B\u51FAException\uFF0C\u7528\u6237\u53EF\u4EE5\u9009\u62E9\u505C\u6B62\u53D1\u9001\u540E\u7EED\u6570\u636E\u4E5F\u53EF\u9009\u62E9\u7EE7\u7EED\u9009\u62E9\u53D1\u9001\u3002\u800C\u524D\u8005\u4F1A\u9020\u6210\u6570\u636E\u7684\u963B\u585E\uFF0C\u540E\u8005\u4F1A\u9020\u6210\u672C\u5E94\u53D1\u5F80\u8BE5Broker\u7684\u6570\u636E\u7684\u4E22\u5931\u3002</p><p>\u5982\u679CProducer\u4F7F\u7528\u5F02\u6B65\u6A21\u5F0F\uFF0C\u5219Producer\u4F1A\u5C1D\u8BD5\u91CD\u65B0\u53D1\u9001message.send.max.retries\uFF08\u9ED8\u8BA4\u503C\u4E3A3\uFF09\u6B21\u540E\u8BB0\u5F55\u8BE5\u5F02\u5E38\u5E76\u7EE7\u7EED\u53D1\u9001\u540E\u7EED\u6570\u636E\uFF0C\u8FD9\u4F1A\u9020\u6210\u6570\u636E\u4E22\u5931\u5E76\u4E14\u7528\u6237\u53EA\u80FD\u901A\u8FC7\u65E5\u5FD7\u53D1\u73B0\u8BE5\u95EE\u9898\u3002\u540C\u65F6\uFF0CKafka\u7684Producer\u5E76\u672A\u5BF9\u5F02\u6B65\u6A21\u5F0F\u63D0\u4F9Bcallback\u63A5\u53E3\u3002</p><p>\u7531\u6B64\u53EF\u89C1\uFF0C\u5728\u6CA1\u6709Replication\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E00\u65E6\u67D0\u673A\u5668\u5B95\u673A\u6216\u8005\u67D0\u4E2ABroker\u505C\u6B62\u5DE5\u4F5C\u5219\u4F1A\u9020\u6210\u6574\u4E2A\u7CFB\u7EDF\u7684\u53EF\u7528\u6027\u964D\u4F4E\u3002\u968F\u7740\u96C6\u7FA4\u89C4\u6A21\u7684\u589E\u52A0\uFF0C\u6574\u4E2A\u96C6\u7FA4\u4E2D\u51FA\u73B0\u8BE5\u7C7B\u5F02\u5E38\u7684\u51E0\u7387\u5927\u5927\u589E\u52A0\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u751F\u4EA7\u7CFB\u7EDF\u800C\u8A00Replication\u673A\u5236\u7684\u5F15\u5165\u975E\u5E38\u91CD\u8981\u3002</p><h3 id="_1-2-leader-election" tabindex="-1"><a class="header-anchor" href="#_1-2-leader-election" aria-hidden="true">#</a> 1.2 Leader Election</h3><p>\u5F15\u5165Replication\u4E4B\u540E\uFF0C\u540C\u4E00\u4E2APartition\u53EF\u80FD\u4F1A\u6709\u591A\u4E2AReplica\uFF0C\u800C\u8FD9\u65F6\u9700\u8981\u5728\u8FD9\u4E9BReplication\u4E4B\u95F4\u9009\u51FA\u4E00\u4E2ALeader\uFF0CProducer\u548CConsumer\u53EA\u4E0E\u8FD9\u4E2ALeader\u4EA4\u4E92\uFF0C\u5176\u5B83Replica\u4F5C\u4E3AFollower\u4ECELeader\u4E2D\u590D\u5236\u6570\u636E\u3002</p><p>\u56E0\u4E3A\u9700\u8981\u4FDD\u8BC1\u540C\u4E00\u4E2APartition\u7684\u591A\u4E2AReplica\u4E4B\u95F4\u7684\u6570\u636E\u4E00\u81F4\u6027\uFF08\u5176\u4E2D\u4E00\u4E2A\u5B95\u673A\u540E\u5176\u5B83Replica\u5FC5\u987B\u8981\u80FD\u7EE7\u7EED\u670D\u52A1\u5E76\u4E14\u5373\u4E0D\u80FD\u9020\u6210\u6570\u636E\u91CD\u590D\u4E5F\u4E0D\u80FD\u9020\u6210\u6570\u636E\u4E22\u5931\uFF09\u3002\u5982\u679C\u6CA1\u6709\u4E00\u4E2ALeader\uFF0C\u6240\u6709Replica\u90FD\u53EF\u540C\u65F6\u8BFB/\u5199\u6570\u636E\uFF0C\u90A3\u5C31\u9700\u8981\u4FDD\u8BC1\u591A\u4E2AReplica\u4E4B\u95F4\u4E92\u76F8\uFF08N\xD7N\u6761\u901A\u8DEF\uFF09\u540C\u6B65\u6570\u636E\uFF0C\u6570\u636E\u7684\u4E00\u81F4\u6027\u548C\u6709\u5E8F\u6027\u975E\u5E38\u96BE\u4FDD\u8BC1\uFF0C\u5927\u5927\u589E\u52A0\u4E86Replication\u5B9E\u73B0\u7684\u590D\u6742\u6027\uFF0C\u540C\u65F6\u4E5F\u589E\u52A0\u4E86\u51FA\u73B0\u5F02\u5E38\u7684\u51E0\u7387\u3002\u800C\u5F15\u5165Leader\u540E\uFF0C\u53EA\u6709Leader\u8D1F\u8D23\u6570\u636E\u8BFB\u5199\uFF0CFollower\u53EA\u5411Leader\u987A\u5E8FFetch\u6570\u636E\uFF08N\u6761\u901A\u8DEF\uFF09\uFF0C\u7CFB\u7EDF\u66F4\u52A0\u7B80\u5355\u4E14\u9AD8\u6548\u3002</p><h2 id="_2-kafka-ha\u8BBE\u8BA1\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_2-kafka-ha\u8BBE\u8BA1\u89E3\u6790" aria-hidden="true">#</a> 2. Kafka HA\u8BBE\u8BA1\u89E3\u6790</h2><h3 id="_2-1-\u5982\u4F55\u5C06\u6240\u6709replica\u5747\u5300\u5206\u5E03\u5230\u6574\u4E2A\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5982\u4F55\u5C06\u6240\u6709replica\u5747\u5300\u5206\u5E03\u5230\u6574\u4E2A\u96C6\u7FA4" aria-hidden="true">#</a> 2.1 \u5982\u4F55\u5C06\u6240\u6709Replica\u5747\u5300\u5206\u5E03\u5230\u6574\u4E2A\u96C6\u7FA4</h3><p>\u4E3A\u4E86\u66F4\u597D\u7684\u505A\u8D1F\u8F7D\u5747\u8861\uFF0CKafka\u5C3D\u91CF\u5C06\u6240\u6709\u7684Partition\u5747\u5300\u5206\u914D\u5230\u6574\u4E2A\u96C6\u7FA4\u4E0A\u3002\u4E00\u4E2A\u5178\u578B\u7684\u90E8\u7F72\u65B9\u5F0F\u662F\u4E00\u4E2ATopic\u7684Partition\u6570\u91CF\u5927\u4E8EBroker\u7684\u6570\u91CF\u3002\u540C\u65F6\u4E3A\u4E86\u63D0\u9AD8Kafka\u7684\u5BB9\u9519\u80FD\u529B\uFF0C\u4E5F\u9700\u8981\u5C06\u540C\u4E00\u4E2APartition\u7684Replica\u5C3D\u91CF\u5206\u6563\u5230\u4E0D\u540C\u7684\u673A\u5668\u3002\u5B9E\u9645\u4E0A\uFF0C\u5982\u679C\u6240\u6709\u7684Replica\u90FD\u5728\u540C\u4E00\u4E2ABroker\u4E0A\uFF0C\u90A3\u4E00\u65E6\u8BE5Broker\u5B95\u673A\uFF0C\u8BE5Partition\u7684\u6240\u6709Replica\u90FD\u65E0\u6CD5\u5DE5\u4F5C\uFF0C\u4E5F\u5C31\u8FBE\u4E0D\u5230HA\u7684\u6548\u679C\u3002\u540C\u65F6\uFF0C\u5982\u679C\u67D0\u4E2ABroker\u5B95\u673A\u4E86\uFF0C\u9700\u8981\u4FDD\u8BC1\u5B83\u4E0A\u9762\u7684\u8D1F\u8F7D\u53EF\u4EE5\u88AB\u5747\u5300\u7684\u5206\u914D\u5230\u5176\u5B83\u5E78\u5B58\u7684\u6240\u6709Broker\u4E0A\u3002</p><p>Kafka\u5206\u914DReplica\u7684\u7B97\u6CD5\u5982\u4E0B\uFF1A</p><p>1.\u5C06\u6240\u6709Broker\uFF08\u5047\u8BBE\u5171n\u4E2ABroker\uFF09\u548C\u5F85\u5206\u914D\u7684Partition\u6392\u5E8F</p><p>2.\u5C06\u7B2Ci\u4E2APartition\u5206\u914D\u5230\u7B2C\uFF08i mod n\uFF09\u4E2ABroker\u4E0A</p><p>3.\u5C06\u7B2Ci\u4E2APartition\u7684\u7B2Cj\u4E2AReplica\u5206\u914D\u5230\u7B2C\uFF08(i + j) mode n\uFF09\u4E2ABroker\u4E0A</p><h3 id="_2-2-data-replication-\u526F\u672C\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_2-2-data-replication-\u526F\u672C\u7B56\u7565" aria-hidden="true">#</a> 2.2 Data Replication\uFF08\u526F\u672C\u7B56\u7565\uFF09</h3><p>Kafka\u7684\u9AD8\u53EF\u9760\u6027\u7684\u4FDD\u969C\u6765\u6E90\u4E8E\u5176\u5065\u58EE\u7684\u526F\u672C\uFF08replication\uFF09\u7B56\u7565\u3002</p><h4 id="_2-2-1-\u6D88\u606F\u4F20\u9012\u540C\u6B65\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u6D88\u606F\u4F20\u9012\u540C\u6B65\u7B56\u7565" aria-hidden="true">#</a> 2.2.1 \u6D88\u606F\u4F20\u9012\u540C\u6B65\u7B56\u7565</h4><p>Producer\u5728\u53D1\u5E03\u6D88\u606F\u5230\u67D0\u4E2APartition\u65F6\uFF0C\u5148\u901A\u8FC7ZooKeeper\u627E\u5230\u8BE5Partition\u7684Leader\uFF0C\u7136\u540E\u65E0\u8BBA\u8BE5Topic\u7684Replication Factor\u4E3A\u591A\u5C11\uFF0CProducer\u53EA\u5C06\u8BE5\u6D88\u606F\u53D1\u9001\u5230\u8BE5Partition\u7684Leader\u3002Leader\u4F1A\u5C06\u8BE5\u6D88\u606F\u5199\u5165\u5176\u672C\u5730Log\u3002\u6BCF\u4E2AFollower\u90FD\u4ECELeader pull\u6570\u636E\u3002\u8FD9\u79CD\u65B9\u5F0F\u4E0A\uFF0CFollower\u5B58\u50A8\u7684\u6570\u636E\u987A\u5E8F\u4E0ELeader\u4FDD\u6301\u4E00\u81F4\u3002Follower\u5728\u6536\u5230\u8BE5\u6D88\u606F\u5E76\u5199\u5165\u5176Log\u540E\uFF0C\u5411Leader\u53D1\u9001ACK\u3002\u4E00\u65E6Leader\u6536\u5230\u4E86ISR\u4E2D\u7684\u6240\u6709Replica\u7684ACK\uFF0C\u8BE5\u6D88\u606F\u5C31\u88AB\u8BA4\u4E3A\u5DF2\u7ECFcommit\u4E86\uFF0CLeader\u5C06\u589E\u52A0HW\u5E76\u4E14\u5411Producer\u53D1\u9001ACK\u3002</p><p>\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\uFF0C\u6BCF\u4E2AFollower\u5728\u63A5\u6536\u5230\u6570\u636E\u540E\u5C31\u7ACB\u9A6C\u5411Leader\u53D1\u9001ACK\uFF0C\u800C\u975E\u7B49\u5230\u6570\u636E\u5199\u5165Log\u4E2D\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u5DF2\u7ECFcommit\u7684\u6D88\u606F\uFF0CKafka\u53EA\u80FD\u4FDD\u8BC1\u5B83\u88AB\u5B58\u4E8E\u591A\u4E2AReplica\u7684\u5185\u5B58\u4E2D\uFF0C\u800C\u4E0D\u80FD\u4FDD\u8BC1\u5B83\u4EEC\u88AB\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E2D\uFF0C\u4E5F\u5C31\u4E0D\u80FD\u5B8C\u5168\u4FDD\u8BC1\u5F02\u5E38\u53D1\u751F\u540E\u8BE5\u6761\u6D88\u606F\u4E00\u5B9A\u80FD\u88ABConsumer\u6D88\u8D39\u3002</p><p>Consumer\u8BFB\u6D88\u606F\u4E5F\u662F\u4ECELeader\u8BFB\u53D6\uFF0C\u53EA\u6709\u88ABcommit\u8FC7\u7684\u6D88\u606F\u624D\u4F1A\u66B4\u9732\u7ED9Consumer\u3002</p><p>Kafka Replication\u7684\u6570\u636E\u6D41\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220921211446700.png" alt="image-20220921211446700"></p><h4 id="_2-2-2-ack\u524D\u9700\u8981\u4FDD\u8BC1\u6709\u591A\u5C11\u4E2A\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#_2-2-2-ack\u524D\u9700\u8981\u4FDD\u8BC1\u6709\u591A\u5C11\u4E2A\u5907\u4EFD" aria-hidden="true">#</a> 2.2.2 ACK\u524D\u9700\u8981\u4FDD\u8BC1\u6709\u591A\u5C11\u4E2A\u5907\u4EFD</h4><p>\u5BF9\u4E8EKafka\u800C\u8A00\uFF0C\u5B9A\u4E49\u4E00\u4E2ABroker\u662F\u5426\u201C\u6D3B\u7740\u201D\u5305\u542B\u4E24\u4E2A\u6761\u4EF6\uFF1A</p><ul><li>\u4E00\u662F\u5B83\u5FC5\u987B\u7EF4\u62A4\u4E0EZooKeeper\u7684session\uFF08\u8FD9\u4E2A\u901A\u8FC7ZooKeeper\u7684Heartbeat\u673A\u5236\u6765\u5B9E\u73B0\uFF09\u3002</li><li>\u4E8C\u662FFollower\u5FC5\u987B\u80FD\u591F\u53CA\u65F6\u5C06Leader\u7684\u6D88\u606F\u590D\u5236\u8FC7\u6765\uFF0C\u4E0D\u80FD\u201C\u843D\u540E\u592A\u591A\u201D\u3002</li></ul><p>Leader\u4F1A\u8DDF\u8E2A\u4E0E\u5176\u4FDD\u6301\u540C\u6B65\u7684Replica\u5217\u8868\uFF0C\u8BE5\u5217\u8868\u79F0\u4E3AISR\uFF08\u5373in-sync Replica\uFF09\u3002\u5982\u679C\u4E00\u4E2AFollower\u5B95\u673A\uFF0C\u6216\u8005\u843D\u540E\u592A\u591A\uFF0CLeader\u5C06\u628A\u5B83\u4ECEISR\u4E2D\u79FB\u9664\u3002\u8FD9\u91CC\u6240\u63CF\u8FF0\u7684\u201C\u843D\u540E\u592A\u591A\u201D\u6307Follower\u590D\u5236\u7684\u6D88\u606F\u843D\u540E\u4E8ELeader\u540E\u7684\u6761\u6570\u8D85\u8FC7\u9884\u5B9A\u503C\uFF08\u8BE5\u503C\u53EF\u5728$KAFKA_HOME/config/server.properties\u4E2D\u901A\u8FC7replica.lag.max.messages\u914D\u7F6E\uFF0C\u5176\u9ED8\u8BA4\u503C\u662F4000\uFF09\u6216\u8005Follower\u8D85\u8FC7\u4E00\u5B9A\u65F6\u95F4\uFF08\u8BE5\u503C\u53EF\u5728$KAFKA_HOME/config/server.properties\u4E2D\u901A\u8FC7replica.lag.time.max.ms\u6765\u914D\u7F6E\uFF0C\u5176\u9ED8\u8BA4\u503C\u662F10000\uFF09\u672A\u5411Leader\u53D1\u9001fetch\u8BF7\u6C42\u3002</p><p>Kafka\u7684\u590D\u5236\u673A\u5236\u65E2\u4E0D\u662F\u5B8C\u5168\u7684\u540C\u6B65\u590D\u5236\uFF0C\u4E5F\u4E0D\u662F\u5355\u7EAF\u7684\u5F02\u6B65\u590D\u5236\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5B8C\u5168\u540C\u6B65\u590D\u5236\u8981\u6C42\u6240\u6709\u80FD\u5DE5\u4F5C\u7684Follower\u90FD\u590D\u5236\u5B8C\uFF0C\u8FD9\u6761\u6D88\u606F\u624D\u4F1A\u88AB\u8BA4\u4E3Acommit\uFF0C\u8FD9\u79CD\u590D\u5236\u65B9\u5F0F\u6781\u5927\u7684\u5F71\u54CD\u4E86\u541E\u5410\u7387\uFF08\u9AD8\u541E\u5410\u7387\u662FKafka\u975E\u5E38\u91CD\u8981\u7684\u4E00\u4E2A\u7279\u6027\uFF09\u3002\u800C\u5F02\u6B65\u590D\u5236\u65B9\u5F0F\u4E0B\uFF0CFollower\u5F02\u6B65\u7684\u4ECELeader\u590D\u5236\u6570\u636E\uFF0C\u6570\u636E\u53EA\u8981\u88ABLeader\u5199\u5165log\u5C31\u88AB\u8BA4\u4E3A\u5DF2\u7ECFcommit\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5982\u679CFollower\u90FD\u590D\u5236\u5B8C\u90FD\u843D\u540E\u4E8ELeader\uFF0C\u800C\u5982\u679CLeader\u7A81\u7136\u5B95\u673A\uFF0C\u5219\u4F1A\u4E22\u5931\u6570\u636E\u3002\u800CKafka\u7684\u8FD9\u79CD\u4F7F\u7528ISR\u7684\u65B9\u5F0F\u5219\u5F88\u597D\u7684\u5747\u8861\u4E86\u786E\u4FDD\u6570\u636E\u4E0D\u4E22\u5931\u4EE5\u53CA\u541E\u5410\u7387\u3002Follower\u53EF\u4EE5\u6279\u91CF\u7684\u4ECELeader\u590D\u5236\u6570\u636E\uFF0C\u8FD9\u6837\u6781\u5927\u7684\u63D0\u9AD8\u590D\u5236\u6027\u80FD\uFF08\u6279\u91CF\u5199\u78C1\u76D8\uFF09\uFF0C\u6781\u5927\u51CF\u5C11\u4E86Follower\u4E0ELeader\u7684\u5DEE\u8DDD\u3002</p><p>\u9700\u8981\u8BF4\u660E\u7684\u662F\uFF0CKafka\u53EA\u89E3\u51B3fail/recover\uFF0C\u4E0D\u5904\u7406\u201CByzantine\u201D\uFF08\u201C\u62DC\u5360\u5EAD\u201D\uFF09\u95EE\u9898\u3002\u4E00\u6761\u6D88\u606F\u53EA\u6709\u88ABISR\u91CC\u7684\u6240\u6709Follower\u90FD\u4ECELeader\u590D\u5236\u8FC7\u53BB\u624D\u4F1A\u88AB\u8BA4\u4E3A\u5DF2\u63D0\u4EA4\u3002\u8FD9\u6837\u5C31\u907F\u514D\u4E86\u90E8\u5206\u6570\u636E\u88AB\u5199\u8FDB\u4E86Leader\uFF0C\u8FD8\u6CA1\u6765\u5F97\u53CA\u88AB\u4EFB\u4F55Follower\u590D\u5236\u5C31\u5B95\u673A\u4E86\uFF0C\u800C\u9020\u6210\u6570\u636E\u4E22\u5931\uFF08Consumer\u65E0\u6CD5\u6D88\u8D39\u8FD9\u4E9B\u6570\u636E\uFF09\u3002\u800C\u5BF9\u4E8EProducer\u800C\u8A00\uFF0C\u5B83\u53EF\u4EE5\u9009\u62E9\u662F\u5426\u7B49\u5F85\u6D88\u606Fcommit\uFF0C\u8FD9\u53EF\u4EE5\u901A\u8FC7request.required.acks\u6765\u8BBE\u7F6E\u3002\u8FD9\u79CD\u673A\u5236\u786E\u4FDD\u4E86\u53EA\u8981ISR\u6709\u4E00\u4E2A\u6216\u4EE5\u4E0A\u7684Follower\uFF0C\u4E00\u6761\u88ABcommit\u7684\u6D88\u606F\u5C31\u4E0D\u4F1A\u4E22\u5931\u3002</p><h4 id="_2-2-3-leader-election\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-2-3-leader-election\u7B97\u6CD5" aria-hidden="true">#</a> 2.2.3 Leader Election\u7B97\u6CD5</h4><p>Leader\u9009\u4E3E\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u9501\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\u5B9E\u73B0\u57FA\u4E8EZooKeeper\u7684\u5206\u5E03\u5F0F\u9501\uFF1A</p><ul><li>\u8282\u70B9\u540D\u79F0\u552F\u4E00\u6027\uFF1A\u591A\u4E2A\u5BA2\u6237\u7AEF\u521B\u5EFA\u4E00\u4E2A\u8282\u70B9\uFF0C\u53EA\u6709\u6210\u529F\u521B\u5EFA\u8282\u70B9\u7684\u5BA2\u6237\u7AEF\u624D\u80FD\u83B7\u5F97\u9501</li><li>\u4E34\u65F6\u987A\u5E8F\u8282\u70B9\uFF1A\u6240\u6709\u5BA2\u6237\u7AEF\u5728\u67D0\u4E2A\u76EE\u5F55\u4E0B\u521B\u5EFA\u81EA\u5DF1\u7684\u4E34\u65F6\u987A\u5E8F\u8282\u70B9\uFF0C\u53EA\u6709\u5E8F\u53F7\u6700\u5C0F\u7684\u624D\u83B7\u5F97\u9501</li></ul><p>\u4E00\u79CD\u975E\u5E38\u5E38\u7528\u7684\u9009\u4E3Eleader\u7684\u65B9\u5F0F\u662F\u201CMajority Vote\u201D\uFF08\u201C\u5C11\u6570\u670D\u4ECE\u591A\u6570\u201D\uFF09\uFF0C\u4F46Kafka\u5E76\u672A\u91C7\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u6211\u4EEC\u67092f+1\u4E2AReplica\uFF08\u5305\u542BLeader\u548CFollower\uFF09\uFF0C\u90A3\u5728commit\u4E4B\u524D\u5FC5\u987B\u4FDD\u8BC1\u6709f+1\u4E2AReplica\u590D\u5236\u5B8C\u6D88\u606F\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u6B63\u786E\u9009\u51FA\u65B0\u7684Leader\uFF0Cfail\u7684Replica\u4E0D\u80FD\u8D85\u8FC7f\u4E2A\u3002\u56E0\u4E3A\u5728\u5269\u4E0B\u7684\u4EFB\u610Ff+1\u4E2AReplica\u91CC\uFF0C\u81F3\u5C11\u6709\u4E00\u4E2AReplica\u5305\u542B\u6709\u6700\u65B0\u7684\u6240\u6709\u6D88\u606F\u3002\u8FD9\u79CD\u65B9\u5F0F\u6709\u4E2A\u5F88\u5927\u7684\u4F18\u52BF\uFF0C\u7CFB\u7EDF\u7684latency\u53EA\u53D6\u51B3\u4E8E\u6700\u5FEB\u7684\u51E0\u4E2ABroker\uFF0C\u800C\u975E\u6700\u6162\u90A3\u4E2A\u3002Majority Vote\u4E5F\u6709\u4E00\u4E9B\u52A3\u52BF\uFF0C\u4E3A\u4E86\u4FDD\u8BC1Leader Election\u7684\u6B63\u5E38\u8FDB\u884C\uFF0C\u5B83\u6240\u80FD\u5BB9\u5FCD\u7684fail\u7684follower\u4E2A\u6570\u6BD4\u8F83\u5C11\u3002\u5982\u679C\u8981\u5BB9\u5FCD1\u4E2Afollower\u6302\u6389\uFF0C\u5FC5\u987B\u8981\u67093\u4E2A\u4EE5\u4E0A\u7684Replica\uFF0C\u5982\u679C\u8981\u5BB9\u5FCD2\u4E2AFollower\u6302\u6389\uFF0C\u5FC5\u987B\u8981\u67095\u4E2A\u4EE5\u4E0A\u7684Replica\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4E3A\u4E86\u4FDD\u8BC1\u8F83\u9AD8\u7684\u5BB9\u9519\u7A0B\u5EA6\uFF0C\u5FC5\u987B\u8981\u6709\u5927\u91CF\u7684Replica\uFF0C\u800C\u5927\u91CF\u7684Replica\u53C8\u4F1A\u5728\u5927\u6570\u636E\u91CF\u4E0B\u5BFC\u81F4\u6027\u80FD\u7684\u6025\u5267\u4E0B\u964D\u3002\u8FD9\u5C31\u662F\u8FD9\u79CD\u7B97\u6CD5\u66F4\u591A\u7528\u5728ZooKeeper\u8FD9\u79CD\u5171\u4EAB\u96C6\u7FA4\u914D\u7F6E\u7684\u7CFB\u7EDF\u4E2D\u800C\u5F88\u5C11\u5728\u9700\u8981\u5B58\u50A8\u5927\u91CF\u6570\u636E\u7684\u7CFB\u7EDF\u4E2D\u4F7F\u7528\u7684\u539F\u56E0\u3002\u4F8B\u5982HDFS\u7684HA Feature\u662F\u57FA\u4E8Emajority-vote-based journal\uFF0C\u4F46\u662F\u5B83\u7684\u6570\u636E\u5B58\u50A8\u5E76\u6CA1\u6709\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002</p><p>Kafka\u5728ZooKeeper\u4E2D\u52A8\u6001\u7EF4\u62A4\u4E86\u4E00\u4E2AISR\uFF08in-sync replicas\uFF09\uFF0C\u8FD9\u4E2AISR\u91CC\u7684\u6240\u6709Replica\u90FD\u8DDF\u4E0A\u4E86leader\uFF0C\u53EA\u6709ISR\u91CC\u7684\u6210\u5458\u624D\u6709\u88AB\u9009\u4E3ALeader\u7684\u53EF\u80FD\u3002\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u5BF9\u4E8Ef+1\u4E2AReplica\uFF0C\u4E00\u4E2APartition\u80FD\u5728\u4FDD\u8BC1\u4E0D\u4E22\u5931\u5DF2\u7ECFcommit\u7684\u6D88\u606F\u7684\u524D\u63D0\u4E0B\u5BB9\u5FCDf\u4E2AReplica\u7684\u5931\u8D25\u3002\u5728\u5927\u591A\u6570\u4F7F\u7528\u573A\u666F\u4E2D\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u662F\u975E\u5E38\u6709\u5229\u7684\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u4E3A\u4E86\u5BB9\u5FCDf\u4E2AReplica\u7684\u5931\u8D25\uFF0CMajority Vote\u548CISR\u5728commit\u524D\u9700\u8981\u7B49\u5F85\u7684Replica\u6570\u91CF\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662FISR\u9700\u8981\u7684\u603B\u7684Replica\u7684\u4E2A\u6570\u51E0\u4E4E\u662FMajority Vote\u7684\u4E00\u534A\u3002</p><p>\u867D\u7136Majority Vote\u4E0EISR\u76F8\u6BD4\u6709\u4E0D\u9700\u7B49\u5F85\u6700\u6162\u7684Broker\u8FD9\u4E00\u4F18\u52BF\uFF0C\u4F46\u662FKafka\u4F5C\u8005\u8BA4\u4E3AKafka\u53EF\u4EE5\u901A\u8FC7Producer\u9009\u62E9\u662F\u5426\u88ABcommit\u963B\u585E\u6765\u6539\u5584\u8FD9\u4E00\u95EE\u9898\uFF0C\u5E76\u4E14\u8282\u7701\u4E0B\u6765\u7684Replica\u548C\u78C1\u76D8\u4F7F\u5F97ISR\u6A21\u5F0F\u4ECD\u7136\u503C\u5F97\u3002</p><h4 id="_2-2-4-\u5982\u4F55\u5904\u7406\u6240\u6709replica\u90FD\u4E0D\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-2-4-\u5982\u4F55\u5904\u7406\u6240\u6709replica\u90FD\u4E0D\u5DE5\u4F5C" aria-hidden="true">#</a> 2.2.4 \u5982\u4F55\u5904\u7406\u6240\u6709Replica\u90FD\u4E0D\u5DE5\u4F5C</h4><p>\u5728ISR\u4E2D\u81F3\u5C11\u6709\u4E00\u4E2Afollower\u65F6\uFF0CKafka\u53EF\u4EE5\u786E\u4FDD\u5DF2\u7ECFcommit\u7684\u6570\u636E\u4E0D\u4E22\u5931\uFF0C\u4F46\u5982\u679C\u67D0\u4E2APartition\u7684\u6240\u6709Replica\u90FD\u5B95\u673A\u4E86\uFF0C\u5C31\u65E0\u6CD5\u4FDD\u8BC1\u6570\u636E\u4E0D\u4E22\u5931\u4E86\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6709\u4E24\u79CD\u53EF\u884C\u7684\u65B9\u6848\uFF1A</p><p>1.\u7B49\u5F85ISR\u4E2D\u7684\u4EFB\u4E00\u4E2AReplica\u201C\u6D3B\u201D\u8FC7\u6765\uFF0C\u5E76\u4E14\u9009\u5B83\u4F5C\u4E3ALeader</p><p>2.\u9009\u62E9\u7B2C\u4E00\u4E2A\u201C\u6D3B\u201D\u8FC7\u6765\u7684Replica\uFF08\u4E0D\u4E00\u5B9A\u662FISR\u4E2D\u7684\uFF09\u4F5C\u4E3ALeader</p><p>\u8FD9\u5C31\u9700\u8981\u5728\u53EF\u7528\u6027\u548C\u4E00\u81F4\u6027\u5F53\u4E2D\u4F5C\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u6298\u8877\u3002\u5982\u679C\u4E00\u5B9A\u8981\u7B49\u5F85ISR\u4E2D\u7684Replica\u201C\u6D3B\u201D\u8FC7\u6765\uFF0C\u90A3\u4E0D\u53EF\u7528\u7684\u65F6\u95F4\u5C31\u53EF\u80FD\u4F1A\u76F8\u5BF9\u8F83\u957F\u3002\u800C\u4E14\u5982\u679CISR\u4E2D\u7684\u6240\u6709Replica\u90FD\u65E0\u6CD5\u201C\u6D3B\u201D\u8FC7\u6765\u4E86\uFF0C\u6216\u8005\u6570\u636E\u90FD\u4E22\u5931\u4E86\uFF0C\u8FD9\u4E2APartition\u5C06\u6C38\u8FDC\u4E0D\u53EF\u7528\u3002\u9009\u62E9\u7B2C\u4E00\u4E2A\u201C\u6D3B\u201D\u8FC7\u6765\u7684Replica\u4F5C\u4E3ALeader\uFF0C\u800C\u8FD9\u4E2AReplica\u4E0D\u662FISR\u4E2D\u7684Replica\uFF0C\u90A3\u5373\u4F7F\u5B83\u5E76\u4E0D\u4FDD\u8BC1\u5DF2\u7ECF\u5305\u542B\u4E86\u6240\u6709\u5DF2commit\u7684\u6D88\u606F\uFF0C\u5B83\u4E5F\u4F1A\u6210\u4E3ALeader\u800C\u4F5C\u4E3Aconsumer\u7684\u6570\u636E\u6E90\uFF08\u524D\u6587\u6709\u8BF4\u660E\uFF0C\u6240\u6709\u8BFB\u5199\u90FD\u7531Leader\u5B8C\u6210\uFF09\u3002Kafka0.8.*\u4F7F\u7528\u4E86\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u3002\u6839\u636EKafka\u7684\u6587\u6863\uFF0C\u5728\u4EE5\u540E\u7684\u7248\u672C\u4E2D\uFF0CKafka\u652F\u6301\u7528\u6237\u901A\u8FC7\u914D\u7F6E\u9009\u62E9\u8FD9\u4E24\u79CD\u65B9\u5F0F\u4E2D\u7684\u4E00\u79CD\uFF0C\u4ECE\u800C\u6839\u636E\u4E0D\u540C\u7684\u4F7F\u7528\u573A\u666F\u9009\u62E9\u9AD8\u53EF\u7528\u6027\u8FD8\u662F\u5F3A\u4E00\u81F4\u6027\u3002</p><h4 id="_2-2-5-\u9009\u4E3Eleader" tabindex="-1"><a class="header-anchor" href="#_2-2-5-\u9009\u4E3Eleader" aria-hidden="true">#</a> 2.2.5 \u9009\u4E3ELeader</h4><p>\u6700\u7B80\u5355\u6700\u76F4\u89C2\u7684\u65B9\u6848\u662F\uFF0C\u6240\u6709Follower\u90FD\u5728ZooKeeper\u4E0A\u8BBE\u7F6E\u4E00\u4E2AWatch\uFF0C\u4E00\u65E6Leader\u5B95\u673A\uFF0C\u5176\u5BF9\u5E94\u7684ephemeral znode\u4F1A\u81EA\u52A8\u5220\u9664\uFF0C\u6B64\u65F6\u6240\u6709Follower\u90FD\u5C1D\u8BD5\u521B\u5EFA\u8BE5\u8282\u70B9\uFF0C\u800C\u521B\u5EFA\u6210\u529F\u8005\uFF08ZooKeeper\u4FDD\u8BC1\u53EA\u6709\u4E00\u4E2A\u80FD\u521B\u5EFA\u6210\u529F\uFF09\u5373\u662F\u65B0\u7684Leader\uFF0C\u5176\u5B83Replica\u5373\u4E3AFollower\u3002</p><p>\u4F46\u662F\u8BE5\u65B9\u6CD5\u4F1A\u67093\u4E2A\u95EE\u9898\uFF1A</p><p>1.split-brain \u8FD9\u662F\u7531ZooKeeper\u7684\u7279\u6027\u5F15\u8D77\u7684\uFF0C\u867D\u7136ZooKeeper\u80FD\u4FDD\u8BC1\u6240\u6709Watch\u6309\u987A\u5E8F\u89E6\u53D1\uFF0C\u4F46\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u540C\u4E00\u65F6\u523B\u6240\u6709Replica\u201C\u770B\u201D\u5230\u7684\u72B6\u6001\u662F\u4E00\u6837\u7684\uFF0C\u8FD9\u5C31\u53EF\u80FD\u9020\u6210\u4E0D\u540CReplica\u7684\u54CD\u5E94\u4E0D\u4E00\u81F4</p><p>2.herd effect \u5982\u679C\u5B95\u673A\u7684\u90A3\u4E2ABroker\u4E0A\u7684Partition\u6BD4\u8F83\u591A\uFF0C\u4F1A\u9020\u6210\u591A\u4E2AWatch\u88AB\u89E6\u53D1\uFF0C\u9020\u6210\u96C6\u7FA4\u5185\u5927\u91CF\u7684\u8C03\u6574</p><p>3.ZooKeeper\u8D1F\u8F7D\u8FC7\u91CD \u6BCF\u4E2AReplica\u90FD\u8981\u4E3A\u6B64\u5728ZooKeeper\u4E0A\u6CE8\u518C\u4E00\u4E2AWatch\uFF0C\u5F53\u96C6\u7FA4\u89C4\u6A21\u589E\u52A0\u5230\u51E0\u5343\u4E2APartition\u65F6ZooKeeper\u8D1F\u8F7D\u4F1A\u8FC7\u91CD\u3002</p><p>Kafka 0.8.*\u7684Leader Election\u65B9\u6848\u89E3\u51B3\u4E86\u4E0A\u8FF0\u95EE\u9898\uFF0C\u5B83\u5728\u6240\u6709broker\u4E2D\u9009\u51FA\u4E00\u4E2Acontroller\uFF0C\u6240\u6709Partition\u7684Leader\u9009\u4E3E\u90FD\u7531controller\u51B3\u5B9A\u3002controller\u4F1A\u5C06Leader\u7684\u6539\u53D8\u76F4\u63A5\u901A\u8FC7RPC\u7684\u65B9\u5F0F\uFF08\u6BD4ZooKeeper Queue\u7684\u65B9\u5F0F\u66F4\u9AD8\u6548\uFF09\u901A\u77E5\u9700\u4E3A\u4E3A\u6B64\u4F5C\u4E3A\u54CD\u5E94\u7684Broker\u3002\u540C\u65F6controller\u4E5F\u8D1F\u8D23\u589E\u5220Topic\u4EE5\u53CAReplica\u7684\u91CD\u65B0\u5206\u914D\u3002</p><h2 id="_3-ha\u76F8\u5173zookeeper\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-ha\u76F8\u5173zookeeper\u7ED3\u6784" aria-hidden="true">#</a> 3. HA\u76F8\u5173ZooKeeper\u7ED3\u6784</h2><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220921213028381.png" alt="image-20220921213028381"></p><h3 id="_3-1-admin" tabindex="-1"><a class="header-anchor" href="#_3-1-admin" aria-hidden="true">#</a> 3.1 admin</h3><p>\u8BE5\u76EE\u5F55\u4E0Bznode\u53EA\u6709\u5728\u6709\u76F8\u5173\u64CD\u4F5C\u65F6\u624D\u4F1A\u5B58\u5728\uFF0C\u64CD\u4F5C\u7ED3\u675F\u65F6\u4F1A\u5C06\u5176\u5220\u9664</p><p>/admin/reassign_partitions\u7528\u4E8E\u5C06\u4E00\u4E9BPartition\u5206\u914D\u5230\u4E0D\u540C\u7684broker\u96C6\u5408\u4E0A\u3002\u5BF9\u4E8E\u6BCF\u4E2A\u5F85\u91CD\u65B0\u5206\u914D\u7684Partition\uFF0CKafka\u4F1A\u5728\u8BE5znode\u4E0A\u5B58\u50A8\u5176\u6240\u6709\u7684Replica\u548C\u76F8\u5E94\u7684Broker id\u3002\u8BE5znode\u7531\u7BA1\u7406\u8FDB\u7A0B\u521B\u5EFA\u5E76\u4E14\u4E00\u65E6\u91CD\u65B0\u5206\u914D\u6210\u529F\u5B83\u5C06\u4F1A\u88AB\u81EA\u52A8\u79FB\u9664\u3002</p><h3 id="_3-2-broker" tabindex="-1"><a class="header-anchor" href="#_3-2-broker" aria-hidden="true">#</a> 3.2\u3000broker</h3><p>\u5373/brokers/ids/[brokerId]\uFF09\u5B58\u50A8\u201C\u6D3B\u7740\u201D\u7684broker\u4FE1\u606F\u3002</p><p>topic\u6CE8\u518C\u4FE1\u606F\uFF08/brokers/topics/[topic]\uFF09\uFF0C\u5B58\u50A8\u8BE5topic\u7684\u6240\u6709partition\u7684\u6240\u6709replica\u6240\u5728\u7684broker id\uFF0C\u7B2C\u4E00\u4E2Areplica\u5373\u4E3Apreferred replica\uFF0C\u5BF9\u4E00\u4E2A\u7ED9\u5B9A\u7684partition\uFF0C\u5B83\u5728\u540C\u4E00\u4E2Abroker\u4E0A\u6700\u591A\u53EA\u6709\u4E00\u4E2Areplica,\u56E0\u6B64broker id\u53EF\u4F5C\u4E3Areplica id\u3002</p><h3 id="_3-3-controller" tabindex="-1"><a class="header-anchor" href="#_3-3-controller" aria-hidden="true">#</a> 3.3\u3000controller</h3><p>/controller -&gt; int (broker id of the controller)\u5B58\u50A8\u5F53\u524Dcontroller\u7684\u4FE1\u606F</p><p>/controller_epoch -&gt; int (epoch)\u76F4\u63A5\u4EE5\u6574\u6570\u5F62\u5F0F\u5B58\u50A8controller epoch\uFF0C\u800C\u975E\u50CF\u5176\u5B83znode\u4E00\u6837\u4EE5JSON\u5B57\u7B26\u4E32\u5F62\u5F0F\u5B58\u50A8\u3002</p><h2 id="_4-producer\u53D1\u5E03\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#_4-producer\u53D1\u5E03\u6D88\u606F" aria-hidden="true">#</a> 4. producer\u53D1\u5E03\u6D88\u606F</h2><h3 id="_4-1-\u5199\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5199\u5165\u65B9\u5F0F" aria-hidden="true">#</a> 4.1\u3000\u5199\u5165\u65B9\u5F0F</h3><p>producer \u91C7\u7528 push \u6A21\u5F0F\u5C06\u6D88\u606F\u53D1\u5E03\u5230 broker\uFF0C\u6BCF\u6761\u6D88\u606F\u90FD\u88AB append \u5230 patition \u4E2D\uFF0C\u5C5E\u4E8E\u987A\u5E8F\u5199\u78C1\u76D8\uFF08\u987A\u5E8F\u5199\u78C1\u76D8\u6548\u7387\u6BD4\u968F\u673A\u5199\u5185\u5B58\u8981\u9AD8\uFF0C\u4FDD\u969C kafka \u541E\u5410\u7387\uFF09\u3002</p><h3 id="_4-2-\u6D88\u606F\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6D88\u606F\u8DEF\u7531" aria-hidden="true">#</a> 4.2\u3000\u6D88\u606F\u8DEF\u7531</h3><p>producer \u53D1\u9001\u6D88\u606F\u5230 broker \u65F6\uFF0C\u4F1A\u6839\u636E\u5206\u533A\u7B97\u6CD5\u9009\u62E9\u5C06\u5176\u5B58\u50A8\u5230\u54EA\u4E00\u4E2A partition\u3002\u5176\u8DEF\u7531\u673A\u5236\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\u3001 \u6307\u5B9A\u4E86 patition\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528\uFF1B
2\u3001 \u672A\u6307\u5B9A patition \u4F46\u6307\u5B9A key\uFF0C\u901A\u8FC7\u5BF9 key \u7684 value \u8FDB\u884Chash \u9009\u51FA\u4E00\u4E2A patition
3\u3001 patition \u548C key \u90FD\u672A\u6307\u5B9A\uFF0C\u4F7F\u7528\u8F6E\u8BE2\u9009\u51FA\u4E00\u4E2A patition\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u5199\u5165\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5199\u5165\u6D41\u7A0B" aria-hidden="true">#</a> 4.3\u3000\u5199\u5165\u6D41\u7A0B</h3><p>producer \u5199\u5165\u6D88\u606F\u5E8F\u5217\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220921213507928.png" alt="image-20220921213507928"></p><p>\u6D41\u7A0B\u8BF4\u660E\uFF1A</p><ol><li>producer \u5148\u4ECE zookeeper \u7684 &quot;/brokers/.../state&quot; \u8282\u70B9\u627E\u5230\u8BE5 partition \u7684 leader</li><li>producer \u5C06\u6D88\u606F\u53D1\u9001\u7ED9\u8BE5 leader</li><li>leader \u5C06\u6D88\u606F\u5199\u5165\u672C\u5730 log</li><li>followers \u4ECE leader pull \u6D88\u606F\uFF0C\u5199\u5165\u672C\u5730 log \u540E leader \u53D1\u9001 ACK</li><li>leader \u6536\u5230\u6240\u6709 ISR \u4E2D\u7684 replica \u7684 ACK \u540E\uFF0C\u589E\u52A0 HW\uFF08high watermark\uFF0C\u6700\u540E commit \u7684 offset\uFF09 \u5E76\u5411 producer \u53D1\u9001 ACK</li></ol><h2 id="_5-broker\u4FDD\u5B58\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#_5-broker\u4FDD\u5B58\u6D88\u606F" aria-hidden="true">#</a> 5. broker\u4FDD\u5B58\u6D88\u606F</h2><h3 id="_5-1-\u5B58\u50A8\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-1-\u5B58\u50A8\u65B9\u5F0F" aria-hidden="true">#</a> 5.1 \u5B58\u50A8\u65B9\u5F0F</h3><p>\u7269\u7406\u4E0A\u628A topic \u5206\u6210\u4E00\u4E2A\u6216\u591A\u4E2A patition\uFF08\u5BF9\u5E94 server.properties \u4E2D\u7684 num.partitions=3 \u914D\u7F6E\uFF09\uFF0C\u6BCF\u4E2A patition \u7269\u7406\u4E0A\u5BF9\u5E94\u4E00\u4E2A\u6587\u4EF6\u5939\uFF08\u8BE5\u6587\u4EF6\u5939\u5B58\u50A8\u8BE5 patition \u7684\u6240\u6709\u6D88\u606F\u548C\u7D22\u5F15\u6587\u4EF6\uFF09\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220921213843987.png" alt="image-20220921213843987"></p><h3 id="_5-2-\u5B58\u50A8\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_5-2-\u5B58\u50A8\u7B56\u7565" aria-hidden="true">#</a> 5.2 \u5B58\u50A8\u7B56\u7565</h3><p>\u65E0\u8BBA\u6D88\u606F\u662F\u5426\u88AB\u6D88\u8D39\uFF0Ckafka \u90FD\u4F1A\u4FDD\u7559\u6240\u6709\u6D88\u606F\u3002\u6709\u4E24\u79CD\u7B56\u7565\u53EF\u4EE5\u5220\u9664\u65E7\u6570\u636E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1\u3001 \u57FA\u4E8E\u65F6\u95F4\uFF1Alog.retention.hours=168 
2\u3001 \u57FA\u4E8E\u5927\u5C0F\uFF1Alog.retention.bytes=1073741824
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-topic\u7684\u521B\u5EFA\u548C\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_6-topic\u7684\u521B\u5EFA\u548C\u5220\u9664" aria-hidden="true">#</a> 6. Topic\u7684\u521B\u5EFA\u548C\u5220\u9664</h2><h3 id="_6-1-\u521B\u5EFAtopic" tabindex="-1"><a class="header-anchor" href="#_6-1-\u521B\u5EFAtopic" aria-hidden="true">#</a> 6.1\u3000\u521B\u5EFAtopic</h3><p>\u521B\u5EFA topic \u7684\u5E8F\u5217\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220921213937603.png" alt="image-20220921213937603"></p><p>\u6D41\u7A0B\u8BF4\u660E\uFF1A</p><ol><li>controller \u5728 ZooKeeper \u7684 /brokers/topics \u8282\u70B9\u4E0A\u6CE8\u518C watcher\uFF0C\u5F53 topic \u88AB\u521B\u5EFA\uFF0C\u5219 controller \u4F1A\u901A\u8FC7 watch \u5F97\u5230\u8BE5 topic \u7684 partition/replica \u5206\u914D\u3002</li><li>controller\u4ECE /brokers/ids \u8BFB\u53D6\u5F53\u524D\u6240\u6709\u53EF\u7528\u7684 broker \u5217\u8868\uFF0C\u5BF9\u4E8E set_p \u4E2D\u7684\u6BCF\u4E00\u4E2A partition\uFF1A <ol><li>\u4ECE\u5206\u914D\u7ED9\u8BE5 partition \u7684\u6240\u6709 replica\uFF08\u79F0\u4E3AAR\uFF09\u4E2D\u4EFB\u9009\u4E00\u4E2A\u53EF\u7528\u7684 broker \u4F5C\u4E3A\u65B0\u7684 leader\uFF0C\u5E76\u5C06AR\u8BBE\u7F6E\u4E3A\u65B0\u7684 ISR</li><li>\u5C06\u65B0\u7684 leader \u548C ISR \u5199\u5165 /brokers/topics/[topic]/partitions/[partition]/state</li></ol></li><li>controller \u901A\u8FC7 RPC \u5411\u76F8\u5173\u7684 broker \u53D1\u9001 LeaderAndISRRequest\u3002</li></ol><h3 id="_6-2-\u5220\u9664topic" tabindex="-1"><a class="header-anchor" href="#_6-2-\u5220\u9664topic" aria-hidden="true">#</a> 6.2 \u5220\u9664topic</h3><p>\u5220\u9664 topic \u7684\u5E8F\u5217\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220921214124368.png" alt="image-20220921214124368"></p><p>\u6D41\u7A0B\u8BF4\u660E\uFF1A</p><ol><li>controller \u5728 zooKeeper \u7684 /brokers/topics \u8282\u70B9\u4E0A\u6CE8\u518C watcher\uFF0C\u5F53 topic \u88AB\u5220\u9664\uFF0C\u5219 controller \u4F1A\u901A\u8FC7 watch \u5F97\u5230\u8BE5 topic \u7684 partition/replica \u5206\u914D\u3002</li><li>\u82E5 delete.topic.enable=false\uFF0C\u7ED3\u675F\uFF1B\u5426\u5219 controller \u6CE8\u518C\u5728 /admin/delete_topics \u4E0A\u7684 watch \u88AB fire\uFF0Ccontroller \u901A\u8FC7\u56DE\u8C03\u5411\u5BF9\u5E94\u7684 broker \u53D1\u9001 StopReplicaRequest\u3002</li></ol><h2 id="_7-broker-failover" tabindex="-1"><a class="header-anchor" href="#_7-broker-failover" aria-hidden="true">#</a> 7. broker failover</h2><p>kafka broker failover \u5E8F\u5217\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220921214230563.png" alt="image-20220921214230563"></p><p>\u6D41\u7A0B\u8BF4\u660E\uFF1A</p><ol><li>controller \u5728 zookeeper \u7684 /brokers/ids/[brokerId] \u8282\u70B9\u6CE8\u518C Watcher\uFF0C\u5F53 broker \u5B95\u673A\u65F6 zookeeper \u4F1A fire watch</li><li>controller \u4ECE /brokers/ids \u8282\u70B9\u8BFB\u53D6\u53EF\u7528broker</li><li>controller\u51B3\u5B9Aset_p\uFF0C\u8BE5\u96C6\u5408\u5305\u542B\u5B95\u673A broker \u4E0A\u7684\u6240\u6709 partition</li><li>\u5BF9 set_p \u4E2D\u7684\u6BCF\u4E00\u4E2A partition <ol><li>\u4ECE/brokers/topics/[topic]/partitions/[partition]/state \u8282\u70B9\u8BFB\u53D6 ISR</li><li>\u51B3\u5B9A\u65B0 leader</li><li>\u5C06\u65B0 leader\u3001ISR\u3001controller_epoch \u548C leader_epoch \u7B49\u4FE1\u606F\u5199\u5165 state \u8282\u70B9</li></ol></li><li>\u901A\u8FC7 RPC \u5411\u76F8\u5173 broker \u53D1\u9001 leaderAndISRRequest \u547D\u4EE4</li></ol><h2 id="_8-controller-failover" tabindex="-1"><a class="header-anchor" href="#_8-controller-failover" aria-hidden="true">#</a> 8. controller failover</h2><p>\u5F53 controller \u5B95\u673A\u65F6\u4F1A\u89E6\u53D1 controller failover\u3002\u6BCF\u4E2A broker \u90FD\u4F1A\u5728 zookeeper \u7684 &quot;/controller&quot; \u8282\u70B9\u6CE8\u518C watcher\uFF0C\u5F53 controller \u5B95\u673A\u65F6 zookeeper \u4E2D\u7684\u4E34\u65F6\u8282\u70B9\u6D88\u5931\uFF0C\u6240\u6709\u5B58\u6D3B\u7684 broker \u6536\u5230 fire \u7684\u901A\u77E5\uFF0C\u6BCF\u4E2A broker \u90FD\u5C1D\u8BD5\u521B\u5EFA\u65B0\u7684 controller path\uFF0C\u53EA\u6709\u4E00\u4E2A\u7ADE\u9009\u6210\u529F\u5E76\u5F53\u9009\u4E3A controller\u3002</p><p>\u5F53\u65B0\u7684 controller \u5F53\u9009\u65F6\uFF0C\u4F1A\u89E6\u53D1 KafkaController.onControllerFailover \u65B9\u6CD5\uFF0C\u5728\u8BE5\u65B9\u6CD5\u4E2D\u5B8C\u6210\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li>\u8BFB\u53D6\u5E76\u589E\u52A0 Controller Epoch\u3002</li><li>\u5728 reassignedPartitions Patch(/admin/reassign_partitions) \u4E0A\u6CE8\u518C watcher\u3002</li><li>\u5728 preferredReplicaElection Path(/admin/preferred_replica_election) \u4E0A\u6CE8\u518C watcher\u3002</li><li>\u901A\u8FC7 partitionStateMachine \u5728 broker Topics Patch(/brokers/topics) \u4E0A\u6CE8\u518C watcher\u3002</li><li>\u82E5 delete.topic.enable=true\uFF08\u9ED8\u8BA4\u503C\u662F false\uFF09\uFF0C\u5219 partitionStateMachine \u5728 Delete Topic Patch(/admin/delete_topics) \u4E0A\u6CE8\u518C watcher\u3002</li><li>\u901A\u8FC7 replicaStateMachine\u5728 Broker Ids Patch(/brokers/ids)\u4E0A\u6CE8\u518CWatch\u3002</li><li>\u521D\u59CB\u5316 ControllerContext \u5BF9\u8C61\uFF0C\u8BBE\u7F6E\u5F53\u524D\u6240\u6709 topic\uFF0C\u201C\u6D3B\u201D\u7740\u7684 broker \u5217\u8868\uFF0C\u6240\u6709 partition \u7684 leader \u53CA ISR\u7B49\u3002</li><li>\u542F\u52A8 replicaStateMachine \u548C partitionStateMachine\u3002</li><li>\u5C06 brokerState \u72B6\u6001\u8BBE\u7F6E\u4E3A RunningAsController\u3002</li><li>\u5C06\u6BCF\u4E2A partition \u7684 Leadership \u4FE1\u606F\u53D1\u9001\u7ED9\u6240\u6709\u201C\u6D3B\u201D\u7740\u7684 broker\u3002</li><li>\u82E5 auto.leader.rebalance.enable=true\uFF08\u9ED8\u8BA4\u503C\u662Ftrue\uFF09\uFF0C\u5219\u542F\u52A8 partition-rebalance \u7EBF\u7A0B\u3002</li><li>\u82E5 delete.topic.enable=true \u4E14Delete Topic Patch(/admin/delete_topics)\u4E2D\u6709\u503C\uFF0C\u5219\u5220\u9664\u76F8\u5E94\u7684Topic\u3002</li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,99),h={href:"https://www.cnblogs.com/qingyunzong/p/9004703.html",target:"_blank",rel:"noopener noreferrer"};function s(k,u){const r=p("ExternalLinkIcon");return i(),o("div",null,[d,e("p",null,[e("a",h,[l("Kafka\u5B66\u4E60\u4E4B\u8DEF \uFF08\u4E09\uFF09Kafka\u7684\u9AD8\u53EF\u7528"),t(r)])])])}const f=a(n,[["render",s],["__file","linux-j-net.html.vue"]]);export{f as default};
