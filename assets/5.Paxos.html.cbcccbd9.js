import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as s,a as e,b as r,d as p,f as c,r as n}from"./app.c8e02ec4.js";const l={},i=c('<blockquote><p>\u914D\u5408\u4EE5\u4E0B\u4EE3\u7801\u8FDB\u884C\u9605\u8BFB\uFF1A&lt; /&gt;</p><p>\u5199\u6587\u4E0D\u6613\uFF0C\u7ED9\u4E2A\u5C0F\u5173\u6CE8\uFF0C\u6709\u4EC0\u4E48\u95EE\u9898\u53EF\u4EE5\u6307\u51FA\uFF0C\u4FBF\u4E8E\u5927\u5BB6\u4EA4\u6D41\u5B66\u4E60\u3002</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnuvfqrojoj312w0m8119.jpg" alt="b9a24d7b935c61ba4555b1ddc8159413"></p><h2 id="paxos\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#paxos\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Paxos\u662F\u4EC0\u4E48</h2><blockquote><p>Paxos\u7B97\u6CD5\u662F\u57FA\u4E8E<strong>\u6D88\u606F\u4F20\u9012</strong>\u4E14\u5177\u6709<strong>\u9AD8\u5EA6\u5BB9\u9519\u7279\u6027</strong>\u7684<strong>\u4E00\u81F4\u6027\u7B97\u6CD5</strong>\uFF0C\u662F\u76EE\u524D\u516C\u8BA4\u7684\u89E3\u51B3<strong>\u5206\u5E03\u5F0F\u4E00\u81F4\u6027</strong>\u95EE\u9898<strong>\u6700\u6709\u6548</strong>\u7684\u7B97\u6CD5\u4E4B\u4E00\u3002</p></blockquote><p><code>Paxos</code>\u7531<code>Lamport</code>\u4E8E1998\u5E74\u5728\u300AThe Part-Time Parliament\u300B\u8BBA\u6587\u4E2D\u9996\u6B21\u516C\u5F00\uFF0C\u6700\u521D\u7684\u63CF\u8FF0\u4F7F\u7528\u5E0C\u814A\u7684\u4E00\u4E2A\u5C0F\u5C9B<code>Paxos</code>\u4F5C\u4E3A\u6BD4\u55BB\uFF0C\u63CF\u8FF0\u4E86<code>Paxos</code>\u5C0F\u5C9B\u4E2D\u901A\u8FC7\u51B3\u8BAE\u7684\u6D41\u7A0B\uFF0C\u5E76\u4EE5\u6B64\u547D\u540D\u8FD9\u4E2A\u7B97\u6CD5\uFF0C\u4F46\u662F\u8FD9\u4E2A\u63CF\u8FF0\u7406\u89E3\u8D77\u6765\u6BD4\u8F83\u6709\u6311\u6218\u6027\u3002\u540E\u6765\u57282001\u5E74\uFF0C<code>Lamport</code>\u89C9\u5F97\u540C\u884C\u4E0D\u80FD\u7406\u89E3\u4ED6\u7684\u5E7D\u9ED8\u611F\uFF0C\u4E8E\u662F\u91CD\u65B0\u53D1\u8868\u4E86\u6734\u5B9E\u7684\u7B97\u6CD5\u63CF\u8FF0\u7248\u672C\u300APaxos Made Simple\u300B\u3002</p><p>\u81EA<code>Paxos</code>\u95EE\u4E16\u4EE5\u6765\u5C31\u6301\u7EED\u5784\u65AD\u4E86\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u7B97\u6CD5\uFF0C<code>Paxos</code>\u8FD9\u4E2A\u540D\u8BCD\u51E0\u4E4E\u7B49\u540C\u4E8E\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u3002<code>Google</code>\u7684\u5F88\u591A\u5927\u578B\u5206\u5E03\u5F0F\u7CFB\u7EDF\u90FD\u91C7\u7528\u4E86<code>Paxos</code>\u7B97\u6CD5\u6765\u89E3\u51B3\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898\u3002</p><h2 id="paxos\u76F8\u5173\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#paxos\u76F8\u5173\u6982\u5FF5" aria-hidden="true">#</a> Paxos\u76F8\u5173\u6982\u5FF5</h2><p>Paxos\u7B97\u6CD5\u8FD0\u884C\u5728\u5141\u8BB8\u5B95\u673A\u6545\u969C\u7684\u5F02\u6B65\u7CFB\u7EDF\u4E2D\uFF0C\u4E0D\u8981\u6C42\u53EF\u9760\u7684\u6D88\u606F\u4F20\u9012\uFF0C\u53EF\u5BB9\u5FCD\u6D88\u606F\u4E22\u5931\u3001\u5EF6\u8FDF\u3001\u4E71\u5E8F\u4EE5\u53CA\u91CD\u590D\u3002\u5B83\u5229\u7528\u5927\u591A\u6570 (Majority) \u673A\u5236\u4FDD\u8BC1\u4E862F+1\u7684\u5BB9\u9519\u80FD\u529B\uFF0C\u5373<strong>2F+1</strong>\u4E2A\u8282\u70B9\u7684\u7CFB\u7EDF\u6700\u591A\u5141\u8BB8<strong>F</strong>\u4E2A\u8282\u70B9\u540C\u65F6\u51FA\u73B0\u6545\u969C\u3002</p><p>\u4E00\u4E2A\u6216\u591A\u4E2A\u63D0\u8BAE\u8FDB\u7A0B (Proposer) \u53EF\u4EE5\u53D1\u8D77\u63D0\u6848 (Proposal)\uFF0CPaxos\u7B97\u6CD5\u4F7F\u6240\u6709\u63D0\u6848\u4E2D\u7684\u67D0\u4E00\u4E2A\u63D0\u6848\uFF0C\u5728\u6240\u6709\u8FDB\u7A0B\u4E2D\u8FBE\u6210\u4E00\u81F4\u3002\u7CFB\u7EDF\u4E2D\u7684\u591A\u6570\u6D3E\u540C\u65F6\u8BA4\u53EF\u8BE5\u63D0\u6848\uFF0C\u5373\u8FBE\u6210\u4E86\u4E00\u81F4\u3002\u6700\u591A\u53EA\u9488\u5BF9\u4E00\u4E2A\u786E\u5B9A\u7684\u63D0\u6848\u8FBE\u6210\u4E00\u81F4\u3002</p><p>Paxos\u5C06\u7CFB\u7EDF\u4E2D\u7684\u89D2\u8272\u5206\u4E3A\u63D0\u8BAE\u8005 (Proposer)\uFF0C\u51B3\u7B56\u8005 (Acceptor)\uFF0C\u548C\u6700\u7EC8\u51B3\u7B56\u5B66\u4E60\u8005 (Learner):</p><ul><li><strong>Proposer</strong>: \u63D0\u51FA\u63D0\u6848 (Proposal)\u3002Proposal\u4FE1\u606F\u5305\u62EC\u63D0\u6848\u7F16\u53F7 (Proposal ID) \u548C\u63D0\u8BAE\u7684\u503C (Value)\u3002</li><li><strong>Acceptor</strong>\uFF1A\u53C2\u4E0E\u51B3\u7B56\uFF0C\u56DE\u5E94Proposers\u7684\u63D0\u6848\u3002\u6536\u5230Proposal\u540E\u53EF\u4EE5\u63A5\u53D7\u63D0\u6848\uFF0C\u82E5Proposal\u83B7\u5F97\u591A\u6570Acceptors\u7684\u63A5\u53D7\uFF0C\u5219\u79F0\u8BE5Proposal\u88AB\u6279\u51C6\u3002</li><li><strong>Learner</strong>\uFF1A\u4E0D\u53C2\u4E0E\u51B3\u7B56\uFF0C\u4ECEProposers/Acceptors\u5B66\u4E60\u6700\u65B0\u8FBE\u6210\u4E00\u81F4\u7684\u63D0\u6848\uFF08Value\uFF09\u3002</li></ul><p>\u5728\u591A\u526F\u672C\u72B6\u6001\u673A\u4E2D\uFF0C\u6BCF\u4E2A\u526F\u672C\u540C\u65F6\u5177\u6709Proposer\u3001Acceptor\u3001Learner\u4E09\u79CD\u89D2\u8272\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnuydua826j31gg0i6q5j.jpg" alt="image-20210221103652296"></p><h2 id="paxos\u7B97\u6CD5\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#paxos\u7B97\u6CD5\u6D41\u7A0B" aria-hidden="true">#</a> paxos\u7B97\u6CD5\u6D41\u7A0B</h2><p>Paxos\u7B97\u6CD5\u901A\u8FC7\u4E00\u4E2A\u51B3\u8BAE\u5206\u4E3A\u4E24\u4E2A\u9636\u6BB5\uFF08Learn\u9636\u6BB5\u4E4B\u524D\u51B3\u8BAE\u5DF2\u7ECF\u5F62\u6210\uFF09\uFF1A</p><ol><li>\u7B2C\u4E00\u9636\u6BB5\uFF1APrepare\u9636\u6BB5\u3002Proposer\u5411Acceptors\u53D1\u51FAPrepare\u8BF7\u6C42\uFF0CAcceptors\u9488\u5BF9\u6536\u5230\u7684Prepare\u8BF7\u6C42\u8FDB\u884CPromise\u627F\u8BFA\u3002</li><li>\u7B2C\u4E8C\u9636\u6BB5\uFF1AAccept\u9636\u6BB5\u3002Proposer\u6536\u5230\u591A\u6570Acceptors\u627F\u8BFA\u7684Promise\u540E\uFF0C\u5411Acceptors\u53D1\u51FAPropose\u8BF7\u6C42\uFF0CAcceptors\u9488\u5BF9\u6536\u5230\u7684Propose\u8BF7\u6C42\u8FDB\u884CAccept\u5904\u7406\u3002</li><li>\u7B2C\u4E09\u9636\u6BB5\uFF1ALearn\u9636\u6BB5\u3002Proposer\u5728\u6536\u5230\u591A\u6570Acceptors\u7684Accept\u4E4B\u540E\uFF0C\u6807\u5FD7\u7740\u672C\u6B21Accept\u6210\u529F\uFF0C\u51B3\u8BAE\u5F62\u6210\uFF0C\u5C06\u5F62\u6210\u7684\u51B3\u8BAE\u53D1\u9001\u7ED9\u6240\u6709Learners\u3002</li></ol><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnuyoi6keij318e0isady.jpg" alt="image-20210221104706981"></p><p>Paxos\u7B97\u6CD5\u6D41\u7A0B\u4E2D\u7684\u6BCF\u6761\u6D88\u606F\u63CF\u8FF0\u5982\u4E0B\uFF1A</p><ul><li><strong>Prepare</strong>: Proposer\u751F\u6210\u5168\u5C40\u552F\u4E00\u4E14\u9012\u589E\u7684Proposal ID (\u53EF\u4F7F\u7528\u65F6\u95F4\u6233\u52A0Server ID)\uFF0C\u5411\u6240\u6709Acceptors\u53D1\u9001Prepare\u8BF7\u6C42\uFF0C\u8FD9\u91CC\u65E0\u9700\u643A\u5E26\u63D0\u6848\u5185\u5BB9\uFF0C\u53EA\u643A\u5E26Proposal ID\u5373\u53EF\u3002</li><li><strong>Promise</strong>: Acceptors\u6536\u5230Prepare\u8BF7\u6C42\u540E\uFF0C\u505A\u51FA\u201C\u4E24\u4E2A\u627F\u8BFA\uFF0C\u4E00\u4E2A\u5E94\u7B54\u201D\u3002</li></ul><p><strong>\u4E24\u4E2A\u627F\u8BFA\uFF1A</strong></p><ol><li><p>\u4E0D\u518D\u63A5\u53D7Proposal ID\u5C0F\u4E8E\u7B49\u4E8E\uFF08\u6CE8\u610F\uFF1A\u8FD9\u91CC\u662F&lt;= \uFF09\u5F53\u524D\u8BF7\u6C42\u7684Prepare\u8BF7\u6C42\u3002</p></li><li><p>\u4E0D\u518D\u63A5\u53D7Proposal ID\u5C0F\u4E8E\uFF08\u6CE8\u610F\uFF1A\u8FD9\u91CC\u662F&lt; \uFF09\u5F53\u524D\u8BF7\u6C42\u7684Propose\u8BF7\u6C42\u3002</p></li></ol><p><strong>\u4E00\u4E2A\u5E94\u7B54\uFF1A</strong></p><p>\u4E0D\u8FDD\u80CC\u4EE5\u524D\u4F5C\u51FA\u7684\u627F\u8BFA\u4E0B\uFF0C\u56DE\u590D\u5DF2\u7ECFAccept\u8FC7\u7684\u63D0\u6848\u4E2DProposal ID\u6700\u5927\u7684\u90A3\u4E2A\u63D0\u6848\u7684Value\u548CProposal ID\uFF0C\u6CA1\u6709\u5219\u8FD4\u56DE\u7A7A\u503C\u3002</p><ul><li><strong>Propose</strong>: Proposer \u6536\u5230\u591A\u6570Acceptors\u7684Promise\u5E94\u7B54\u540E\uFF0C\u4ECE\u5E94\u7B54\u4E2D\u9009\u62E9Proposal ID\u6700\u5927\u7684\u63D0\u6848\u7684Value\uFF0C\u4F5C\u4E3A\u672C\u6B21\u8981\u53D1\u8D77\u7684\u63D0\u6848\u3002\u5982\u679C\u6240\u6709\u5E94\u7B54\u7684\u63D0\u6848Value\u5747\u4E3A\u7A7A\u503C\uFF0C\u5219\u53EF\u4EE5\u81EA\u5DF1\u968F\u610F\u51B3\u5B9A\u63D0\u6848Value\u3002\u7136\u540E\u643A\u5E26\u5F53\u524DProposal ID\uFF0C\u5411\u6240\u6709Acceptors\u53D1\u9001Propose\u8BF7\u6C42\u3002</li><li><strong>Accept</strong>: Acceptor\u6536\u5230Propose\u8BF7\u6C42\u540E\uFF0C\u5728\u4E0D\u8FDD\u80CC\u81EA\u5DF1\u4E4B\u524D\u4F5C\u51FA\u7684\u627F\u8BFA\u4E0B\uFF0C\u63A5\u53D7\u5E76\u6301\u4E45\u5316\u5F53\u524DProposal ID\u548C\u63D0\u6848Value\u3002</li><li><strong>Learn</strong>: Proposer\u6536\u5230\u591A\u6570Acceptors\u7684Accept\u540E\uFF0C\u51B3\u8BAE\u5F62\u6210\uFF0C\u5C06\u5F62\u6210\u7684\u51B3\u8BAE\u53D1\u9001\u7ED9\u6240\u6709Learners\u3002</li></ul><p>\u4F2A\u4EE3\u7801\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u83B7\u53D6\u4E00\u4E2AProposal ID n\uFF0C\u4E3A\u4E86<strong>\u4FDD\u8BC1Proposal ID\u552F\u4E00</strong>\uFF0C\u53EF\u91C7\u7528\u65F6\u95F4\u6233+Server ID\u751F\u6210\uFF1B</li><li>Proposer\u5411\u6240\u6709Acceptors\u5E7F\u64ADPrepare(n)\u8BF7\u6C42\uFF1B</li><li>Acceptor\u6BD4\u8F83n\u548CminProposal\uFF0C\u5982\u679Cn&gt;minProposal\uFF0CminProposal=n\uFF0C\u5E76\u4E14\u5C06 acceptedProposal \u548C acceptedValue \u8FD4\u56DE\uFF1B</li><li>Proposer\u63A5\u6536\u5230\u8FC7\u534A\u6570\u56DE\u590D\u540E\uFF0C\u5982\u679C\u53D1\u73B0\u6709acceptedValue\u8FD4\u56DE\uFF0C\u5C06\u6240\u6709\u56DE\u590D\u4E2DacceptedProposal\u6700\u5927\u7684acceptedValue\u4F5C\u4E3A\u672C\u6B21\u63D0\u6848\u7684value\uFF0C\u5426\u5219\u53EF\u4EE5\u4EFB\u610F\u51B3\u5B9A\u672C\u6B21\u63D0\u6848\u7684value\uFF1B</li><li>\u5230\u8FD9\u91CC\u53EF\u4EE5\u8FDB\u5165\u7B2C\u4E8C\u9636\u6BB5\uFF0C\u5E7F\u64ADAccept (n,value) \u5230\u6240\u6709\u8282\u70B9\uFF1B</li><li>Acceptor\u6BD4\u8F83n\u548CminProposal\uFF0C\u5982\u679Cn&gt;=minProposal\uFF0C\u5219acceptedProposal=minProposal=n\uFF0CacceptedValue=value\uFF0C\u672C\u5730\u6301\u4E45\u5316\u540E\uFF0C\u8FD4\u56DE\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DEminProposal\u3002</li><li>\u63D0\u8BAE\u8005\u63A5\u6536\u5230\u8FC7\u534A\u6570\u8BF7\u6C42\u540E\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u8FD4\u56DE\u503Cresult &gt;n\uFF0C\u8868\u793A\u6709\u66F4\u65B0\u7684\u63D0\u8BAE\uFF0C\u8DF3\u8F6C\u52301\uFF1B\u5426\u5219value\u8FBE\u6210\u4E00\u81F4\u3002</li></ol><h2 id="\u6848\u4F8B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u5206\u6790" aria-hidden="true">#</a> \u6848\u4F8B\u5206\u6790</h2><p><strong>\u6848\u4F8B\u2460\uFF1A</strong></p><p>\u56FE\u4E2DP\u4EE3\u8868Prepare\u9636\u6BB5\uFF0CA\u4EE3\u8868Accept\u9636\u6BB5\u30023.1\u4EE3\u8868Proposal ID\u4E3A3.1\uFF0C\u5176\u4E2D3\u4E3A\u65F6\u95F4\u6233\uFF0C1\u4E3AServer ID\u3002X\u548CY\u4EE3\u8868\u63D0\u8BAEValue\u3002</p><p>\u5B9E\u4F8B1\u4E2DP 3.1\u8FBE\u6210\u591A\u6570\u6D3E\uFF0C\u5176Value(X)\u88ABAccept\uFF0C\u7136\u540EP 4.5\u5B66\u4E60\u5230Value(X)\uFF0C\u5E76Accept\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv264l27aj31ce0l4jy9.jpg" alt="image-20210221124740017"></p><p><strong>\u6848\u4F8B\u2461\uFF1A</strong></p><p>\u5B9E\u4F8B2\u4E2DP 3.1\u6CA1\u6709\u88AB\u591A\u6570\u6D3EAccept\uFF08\u53EA\u6709S3 Accept\uFF09\uFF0C\u4F46\u662F\u88ABP 4.5\u5B66\u4E60\u5230\uFF0CP 4.5\u5C06\u81EA\u5DF1\u7684Value\u7531Y\u66FF\u6362\u4E3AX\uFF0CAccept\uFF08X\uFF09\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv283ux5xj31bi0gydkn.jpg" alt="image-20210221124945254"></p><p><strong>\u6848\u4F8B\u2462\uFF1A</strong></p><p>\u5B9E\u4F8B3\u4E2DP 3.1\u6CA1\u6709\u88AB\u591A\u6570\u6D3EAccept\uFF08\u53EA\u6709S1 Accept\uFF09\uFF0C\u540C\u65F6\u4E5F\u6CA1\u6709\u88ABP 4.5\u5B66\u4E60\u5230\u3002\u7531\u4E8EP 4.5 Propose\u7684\u6240\u6709\u5E94\u7B54\uFF0C\u5747\u672A\u8FD4\u56DEValue\uFF0C\u5219P 4.5\u53EF\u4EE5Accept\u81EA\u5DF1\u7684Value (Y)\u3002\u540E\u7EEDP 3.1\u7684Accept (X) \u4F1A\u5931\u8D25\uFF0C\u5DF2\u7ECFAccept\u7684S1\uFF0C\u4F1A\u88AB\u8986\u76D6\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv28vsafmj318q0fsjw8.jpg" alt="image-20210221125030450"></p><p>Paxos\u7B97\u6CD5\u53EF\u80FD\u5F62\u6210\u6D3B\u9501\u800C\u6C38\u8FDC\u4E0D\u4F1A\u7ED3\u675F\uFF0C\u5982\u4E0B\u56FE\u5B9E\u4F8B\u6240\u793A\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv29ol30oj319y0fyafm.jpg" alt="image-20210221125102677"></p><p>\u56DE\u987E\u4E24\u4E2A\u627F\u8BFA\u4E4B\u4E00\uFF0CAcceptor\u4E0D\u518D\u5E94\u7B54Proposal ID\u5C0F\u4E8E\u7B49\u4E8E\u5F53\u524D\u8BF7\u6C42\u7684Prepare\u8BF7\u6C42\u3002\u610F\u5473\u7740\u9700\u8981\u5E94\u7B54Proposal ID\u5927\u4E8E\u5F53\u524D\u8BF7\u6C42\u7684Prepare\u8BF7\u6C42\u3002</p><p>\u4E24\u4E2AProposers\u4EA4\u66FFPrepare\u6210\u529F\uFF0C\u800CAccept\u5931\u8D25\uFF0C\u5F62\u6210\u6D3B\u9501\uFF08Livelock\uFF09\u3002</p><h2 id="multi-paxos\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#multi-paxos\u7B97\u6CD5" aria-hidden="true">#</a> Multi-Paxos\u7B97\u6CD5</h2><p>\u539F\u59CB\u7684Paxos\u7B97\u6CD5\uFF08Basic Paxos\uFF09<strong>\u53EA\u80FD\u5BF9\u4E00\u4E2A\u503C\u5F62\u6210\u51B3\u8BAE</strong>\uFF0C\u51B3\u8BAE\u7684\u5F62\u6210\u81F3\u5C11\u9700\u8981\u4E24\u6B21\u7F51\u7EDC\u6765\u56DE\uFF0C\u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u53EF\u80FD\u9700\u8981\u66F4\u591A\u7684\u7F51\u7EDC\u6765\u56DE\uFF0C\u6781\u7AEF\u60C5\u51B5\u4E0B\u751A\u81F3\u53EF\u80FD\u5F62\u6210\u6D3B\u9501\u3002\u5982\u679C\u60F3\u8FDE\u7EED\u786E\u5B9A\u591A\u4E2A\u503C\uFF0CBasic Paxos\u641E\u4E0D\u5B9A\u4E86\u3002\u56E0\u6B64Basic Paxos\u51E0\u4E4E\u53EA\u662F\u7528\u6765\u505A\u7406\u8BBA\u7814\u7A76\uFF0C\u5E76\u4E0D\u76F4\u63A5\u5E94\u7528\u5728\u5B9E\u9645\u5DE5\u7A0B\u4E2D\u3002</p><p><strong>\u5B9E\u9645\u5E94\u7528\u4E2D\u51E0\u4E4E\u90FD\u9700\u8981\u8FDE\u7EED\u786E\u5B9A\u591A\u4E2A\u503C\uFF0C\u800C\u4E14\u5E0C\u671B\u80FD\u6709\u66F4\u9AD8\u7684\u6548\u7387\u3002Multi-Paxos\u6B63\u662F\u4E3A\u89E3\u51B3\u6B64\u95EE\u9898\u800C\u63D0\u51FA</strong>\u3002Multi-Paxos\u57FA\u4E8EBasic Paxos\u505A\u4E86\u4E24\u70B9\u6539\u8FDB\uFF1A</p><ol><li>\u9488\u5BF9\u6BCF\u4E00\u4E2A\u8981\u786E\u5B9A\u7684\u503C\uFF0C\u8FD0\u884C\u4E00\u6B21Paxos\u7B97\u6CD5\u5B9E\u4F8B\uFF08Instance\uFF09\uFF0C\u5F62\u6210\u51B3\u8BAE\u3002\u6BCF\u4E00\u4E2APaxos\u5B9E\u4F8B\u4F7F\u7528\u552F\u4E00\u7684Instance ID\u6807\u8BC6\u3002</li><li>\u5728\u6240\u6709Proposers\u4E2D\u9009\u4E3E\u4E00\u4E2ALeader\uFF0C\u7531Leader\u552F\u4E00\u5730\u63D0\u4EA4Proposal\u7ED9Acceptors\u8FDB\u884C\u8868\u51B3\u3002\u8FD9\u6837<strong>\u6CA1\u6709Proposer\u7ADE\u4E89</strong>\uFF0C\u89E3\u51B3\u4E86\u6D3B\u9501\u95EE\u9898\u3002\u5728\u7CFB\u7EDF\u4E2D\u4EC5\u6709\u4E00\u4E2ALeader\u8FDB\u884CValue\u63D0\u4EA4\u7684\u60C5\u51B5\u4E0B\uFF0CPrepare\u9636\u6BB5\u5C31\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4ECE\u800C\u5C06\u4E24\u9636\u6BB5\u53D8\u4E3A\u4E00\u9636\u6BB5\uFF0C\u63D0\u9AD8\u6548\u7387\u3002</li></ol><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv2e0hvd4j31bs0i00wn.jpg" alt="image-20210221125526065"></p><p>Multi-Paxos\u9996\u5148\u9700\u8981\u9009\u4E3ELeader\uFF0CLeader\u7684\u786E\u5B9A\u4E5F\u662F\u4E00\u6B21\u51B3\u8BAE\u7684\u5F62\u6210\uFF0C\u6240\u4EE5\u53EF\u6267\u884C\u4E00\u6B21Basic Paxos\u5B9E\u4F8B\u6765\u9009\u4E3E\u51FA\u4E00\u4E2ALeader\u3002\u9009\u51FALeader\u4E4B\u540E\u53EA\u80FD\u7531Leader\u63D0\u4EA4Proposal\uFF0C\u5728Leader\u5B95\u673A\u4E4B\u540E\u670D\u52A1\u4E34\u65F6\u4E0D\u53EF\u7528\uFF0C\u9700\u8981\u91CD\u65B0\u9009\u4E3ELeader\u7EE7\u7EED\u670D\u52A1\u3002\u5728\u7CFB\u7EDF\u4E2D\u4EC5\u6709\u4E00\u4E2ALeader\u8FDB\u884CProposal\u63D0\u4EA4\u7684\u60C5\u51B5\u4E0B\uFF0CPrepare\u9636\u6BB5\u53EF\u4EE5\u8DF3\u8FC7\u3002</p><p>Multi-Paxos\u901A\u8FC7\u6539\u53D8Prepare\u9636\u6BB5\u7684\u4F5C\u7528\u8303\u56F4\u81F3\u540E\u9762Leader\u63D0\u4EA4\u7684\u6240\u6709\u5B9E\u4F8B\uFF0C\u4ECE\u800C\u4F7F\u5F97Leader\u7684\u8FDE\u7EED\u63D0\u4EA4\u53EA\u9700\u8981\u6267\u884C\u4E00\u6B21Prepare\u9636\u6BB5\uFF0C\u540E\u7EED\u53EA\u9700\u8981\u6267\u884CAccept\u9636\u6BB5\uFF0C\u5C06\u4E24\u9636\u6BB5\u53D8\u4E3A\u4E00\u9636\u6BB5\uFF0C\u63D0\u9AD8\u4E86\u6548\u7387\u3002\u4E3A\u4E86\u533A\u5206\u8FDE\u7EED\u63D0\u4EA4\u7684\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u6BCF\u4E2A\u5B9E\u4F8B\u4F7F\u7528\u4E00\u4E2AInstance ID\u6807\u8BC6\uFF0CInstance ID\u7531Leader\u672C\u5730\u9012\u589E\u751F\u6210\u5373\u53EF\u3002</p><p>Multi-Paxos\u5141\u8BB8\u6709\u591A\u4E2A\u81EA\u8BA4\u4E3A\u662FLeader\u7684\u8282\u70B9\u5E76\u53D1\u63D0\u4EA4Proposal\u800C\u4E0D\u5F71\u54CD\u5176\u5B89\u5168\u6027\uFF0C\u8FD9\u6837\u7684\u573A\u666F\u5373\u9000\u5316\u4E3ABasic Paxos\u3002</p><h2 id="paxos\u63A8\u5BFC\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#paxos\u63A8\u5BFC\u8FC7\u7A0B" aria-hidden="true">#</a> Paxos\u63A8\u5BFC\u8FC7\u7A0B</h2><h2 id="\u53EA\u6709\u4E00\u4E2Aacceptor" tabindex="-1"><a class="header-anchor" href="#\u53EA\u6709\u4E00\u4E2Aacceptor" aria-hidden="true">#</a> \u53EA\u6709\u4E00\u4E2AAcceptor</h2><p>\u5047\u8BBE\u53EA\u6709\u4E00\u4E2AAcceptor\uFF08\u53EF\u4EE5\u6709\u591A\u4E2AProposer\uFF09\uFF0C\u53EA\u8981Acceptor\u63A5\u53D7\u5B83\u6536\u5230\u7684\u7B2C\u4E00\u4E2A\u63D0\u6848\uFF0C\u5219\u8BE5\u63D0\u6848\u88AB\u9009\u5B9A\uFF0C\u8BE5\u63D0\u6848\u91CC\u7684value\u5C31\u662F\u88AB\u9009\u5B9A\u7684value\u3002\u8FD9\u6837\u5C31\u4FDD\u8BC1\u53EA\u6709\u4E00\u4E2Avalue\u4F1A\u88AB\u9009\u5B9A\u3002</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u8FD9\u4E2A\u552F\u4E00\u7684Acceptor\u5B95\u673A\u4E86\uFF0C\u90A3\u4E48\u6574\u4E2A\u7CFB\u7EDF\u5C31<strong>\u65E0\u6CD5\u5DE5\u4F5C</strong>\u4E86\uFF01</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv2lac3xej313w0gowge.jpg" alt="image-20210221130224968"></p><h2 id="\u591A\u4E2Aacceptor" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2Aacceptor" aria-hidden="true">#</a> \u591A\u4E2AAcceptor</h2><p>\u591A\u4E2A<code>Acceptor</code>\u9700\u8981\u4FDD\u8BC1\u5728\u591A\u4E2A<code>Proposer</code>\u548C\u591A\u4E2A<code>Acceptor</code>\u7684\u60C5\u51B5\u4E0B\u9009\u5B9A\u4E00\u4E2A<code>value</code>\u3002</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv2q6ctcqj31b80i8415.jpg" alt="image-20210221130706677"></p><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u5373\u4F7F\u53EA\u6709\u4E00\u4E2AProposer\u63D0\u51FA\u4E86\u4E00\u4E2Avalue\uFF0C\u8BE5value\u4E5F\u6700\u7EC8\u88AB\u9009\u5B9A\u3002</p><p>\u90A3\u4E48\uFF0C\u5C31\u5F97\u5230\u4E0B\u9762\u7684\u7EA6\u675F\uFF1A</p><blockquote><p>P1\uFF1A\u4E00\u4E2AAcceptor\u5FC5\u987B\u63A5\u53D7\u5B83\u6536\u5230\u7684\u7B2C\u4E00\u4E2A\u63D0\u6848\u3002</p></blockquote><p>\u4F46\u662F\uFF0C\u8FD9\u53C8\u4F1A\u5F15\u51FA\u53E6\u4E00\u4E2A\u95EE\u9898\uFF1A\u5982\u679C\u6BCF\u4E2AProposer\u5206\u522B\u63D0\u51FA\u4E0D\u540C\u7684value\uFF0C\u53D1\u7ED9\u4E0D\u540C\u7684Acceptor\u3002\u6839\u636EP1\uFF0CAcceptor\u5206\u522B\u63A5\u53D7\u81EA\u5DF1\u6536\u5230\u7684value\uFF0C\u5C31\u5BFC\u81F4\u4E0D\u540C\u7684value\u88AB\u9009\u5B9A\u3002\u51FA\u73B0\u4E86\u4E0D\u4E00\u81F4\u3002\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv30tvh7ij31dy0pcju7.jpg" alt="image-20210221131721430"></p><p>\u521A\u521A\u662F\u56E0\u4E3A\u300E\u4E00\u4E2A\u63D0\u6848\u53EA\u8981\u88AB\u4E00\u4E2AAcceptor\u63A5\u53D7\uFF0C\u5219\u8BE5\u63D0\u6848\u7684value\u5C31\u88AB\u9009\u5B9A\u4E86\u300F\u624D\u5BFC\u81F4\u4E86\u51FA\u73B0\u4E0A\u9762\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u52A0\u4E00\u4E2A\u89C4\u5B9A\uFF1A</p><blockquote><p>\u89C4\u5B9A\uFF1A\u4E00\u4E2A\u63D0\u6848\u88AB\u9009\u5B9A\u9700\u8981\u88AB<strong>\u534A\u6570\u4EE5\u4E0A</strong>\u7684Acceptor\u63A5\u53D7</p></blockquote><p>\u8FD9\u4E2A\u89C4\u5B9A\u53C8\u6697\u793A\u4E86\uFF1A\u300E\u4E00\u4E2AAcceptor\u5FC5\u987B\u80FD\u591F\u63A5\u53D7\u4E0D\u6B62\u4E00\u4E2A\u63D0\u6848\uFF01\u300F\u4E0D\u7136\u53EF\u80FD\u5BFC\u81F4\u6700\u7EC8\u6CA1\u6709value\u88AB\u9009\u5B9A\u3002\u6BD4\u5982\u4E0A\u56FE\u7684\u60C5\u51B5\u3002v1\u3001v2\u3001v3\u90FD\u6CA1\u6709\u88AB\u9009\u5B9A\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u53EA\u88AB\u4E00\u4E2AAcceptor\u7684\u63A5\u53D7\u3002</p><p>\u6700\u5F00\u59CB\u8BB2\u7684\u300E<strong>\u63D0\u6848=value</strong>\u300F\u5DF2\u7ECF\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\u4E86\uFF0C\u4E8E\u662F\u91CD\u65B0\u8BBE\u8BA1\u63D0\u6848\uFF0C\u7ED9\u6BCF\u4E2A\u63D0\u6848\u52A0\u4E0A\u4E00\u4E2A\u63D0\u6848\u7F16\u53F7\uFF0C\u8868\u793A\u63D0\u6848\u88AB\u63D0\u51FA\u7684\u987A\u5E8F\u3002\u4EE4\u300E<strong>\u63D0\u6848=\u63D0\u6848\u7F16\u53F7+value</strong>\u300F\u3002</p><p>\u867D\u7136\u5141\u8BB8\u591A\u4E2A\u63D0\u6848\u88AB\u9009\u5B9A\uFF0C\u4F46\u5FC5\u987B\u4FDD\u8BC1\u6240\u6709\u88AB\u9009\u5B9A\u7684\u63D0\u6848\u90FD\u5177\u6709\u76F8\u540C\u7684value\u503C\u3002\u5426\u5219\u53C8\u4F1A\u51FA\u73B0\u4E0D\u4E00\u81F4\u3002</p><p>\u4E8E\u662F\u6709\u4E86\u4E0B\u9762\u7684\u7EA6\u675F\uFF1A</p><blockquote><p>P2\uFF1A\u5982\u679C\u67D0\u4E2Avalue\u4E3Av\u7684\u63D0\u6848\u88AB\u9009\u5B9A\u4E86\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u7F16\u53F7\u66F4\u9AD8\u7684\u88AB\u9009\u5B9A\u63D0\u6848\u7684value\u5FC5\u987B\u4E5F\u662Fv\u3002</p></blockquote><p>\u4E00\u4E2A\u63D0\u6848\u53EA\u6709\u88ABAcceptor\u63A5\u53D7\u624D\u53EF\u80FD\u88AB\u9009\u5B9A\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u628AP2\u7EA6\u675F\u6539\u5199\u6210\u5BF9Acceptor\u63A5\u53D7\u7684\u63D0\u6848\u7684\u7EA6\u675FP2a\u3002</p><blockquote><p>P2a\uFF1A\u5982\u679C\u67D0\u4E2Avalue\u4E3Av\u7684\u63D0\u6848\u88AB\u9009\u5B9A\u4E86\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u7F16\u53F7\u66F4\u9AD8\u7684\u88ABAcceptor\u63A5\u53D7\u7684\u63D0\u6848\u7684value\u5FC5\u987B\u4E5F\u662Fv\u3002</p></blockquote><p>\u53EA\u8981\u6EE1\u8DB3\u4E86P2a\uFF0C\u5C31\u80FD\u6EE1\u8DB3P2\u3002</p><p>\u4F46\u662F\uFF0C\u8003\u8651\u5982\u4E0B\u7684\u60C5\u51B5\uFF1A\u5047\u8BBE\u603B\u7684\u67095\u4E2AAcceptor\u3002Proposer2\u63D0\u51FA[M1,V1]\u7684\u63D0\u6848\uFF0CAcceptor25\uFF08\u534A\u6570\u4EE5\u4E0A\uFF09\u5747\u63A5\u53D7\u4E86\u8BE5\u63D0\u6848\uFF0C\u4E8E\u662F\u5BF9\u4E8EAcceptor25\u548CProposer2\u6765\u8BB2\uFF0C\u5B83\u4EEC\u90FD\u8BA4\u4E3AV1\u88AB\u9009\u5B9A\u3002Acceptor1\u521A\u521A\u4ECE\u5B95\u673A\u72B6\u6001\u6062\u590D\u8FC7\u6765\uFF08\u4E4B\u524DAcceptor1\u6CA1\u6709\u6536\u5230\u8FC7\u4EFB\u4F55\u63D0\u6848\uFF09\uFF0C\u6B64\u65F6Proposer1\u5411Acceptor1\u53D1\u9001\u4E86[M2,V2]\u7684\u63D0\u6848\uFF08V2\u2260V1\u4E14M2&gt;M1\uFF09\uFF0C\u5BF9\u4E8EAcceptor1\u6765\u8BB2\uFF0C\u8FD9\u662F\u5B83\u6536\u5230\u7684\u7B2C\u4E00\u4E2A\u63D0\u6848\u3002\u6839\u636EP1\uFF08\u4E00\u4E2AAcceptor\u5FC5\u987B\u63A5\u53D7\u5B83\u6536\u5230\u7684\u7B2C\u4E00\u4E2A\u63D0\u6848\u3002\uFF09,Acceptor1\u5FC5\u987B\u63A5\u53D7\u8BE5\u63D0\u6848\uFF01\u540C\u65F6Acceptor1\u8BA4\u4E3AV2\u88AB\u9009\u5B9A\u3002\u8FD9\u5C31\u51FA\u73B0\u4E86\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ol><li>Acceptor1\u8BA4\u4E3AV2\u88AB\u9009\u5B9A\uFF0CAcceptor2~5\u548CProposer2\u8BA4\u4E3AV1\u88AB\u9009\u5B9A\u3002\u51FA\u73B0\u4E86\u4E0D\u4E00\u81F4\u3002</li><li>V1\u88AB\u9009\u5B9A\u4E86\uFF0C\u4F46\u662F\u7F16\u53F7\u66F4\u9AD8\u7684\u88ABAcceptor1\u63A5\u53D7\u7684\u63D0\u6848[M2,V2]\u7684value\u4E3AV2\uFF0C\u4E14V2\u2260V1\u3002\u8FD9\u5C31\u8DDFP2a\uFF08\u5982\u679C\u67D0\u4E2Avalue\u4E3Av\u7684\u63D0\u6848\u88AB\u9009\u5B9A\u4E86\uFF0C\u90A3\u4E48\u6BCF\u4E2A\u7F16\u53F7\u66F4\u9AD8\u7684\u88ABAcceptor\u63A5\u53D7\u7684\u63D0\u6848\u7684value\u5FC5\u987B\u4E5F\u662Fv\uFF09\u77DB\u76FE\u4E86\u3002</li></ol><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gnv3f3co1cj31gs0pk77y.jpg" alt="image-20210221133102803"></p><p>P2a\u662F\u5BF9Acceptor\u63A5\u53D7\u7684\u63D0\u6848\u7EA6\u675F\uFF0C\u4F46\u5176\u5B9E\u63D0\u6848\u662FProposer\u63D0\u51FA\u6765\u7684\uFF0C\u6240\u6709\u6211\u4EEC\u53EF\u4EE5\u5BF9Proposer\u63D0\u51FA\u7684\u63D0\u6848\u8FDB\u884C\u7EA6\u675F\u3002\u5F97\u5230P2b\uFF1A</p><blockquote><p>P2b\uFF1A\u5982\u679C\u67D0\u4E2Avalue\u4E3Av\u7684\u63D0\u6848\u88AB\u9009\u5B9A\u4E86\uFF0C\u90A3\u4E48\u4E4B\u540E\u4EFB\u4F55Proposer\u63D0\u51FA\u7684\u7F16\u53F7\u66F4\u9AD8\u7684\u63D0\u6848\u7684value\u5FC5\u987B\u4E5F\u662Fv\u3002</p></blockquote><p>\u7531P2b\u53EF\u4EE5\u63A8\u51FAP2a\u8FDB\u800C\u63A8\u51FAP2\u3002</p><p>\u90A3\u4E48\uFF0C\u5982\u4F55\u786E\u4FDD\u5728\u67D0\u4E2Avalue\u4E3Av\u7684\u63D0\u6848\u88AB\u9009\u5B9A\u540E\uFF0CProposer\u63D0\u51FA\u7684\u7F16\u53F7\u66F4\u9AD8\u7684\u63D0\u6848\u7684value\u90FD\u662Fv\u5462\uFF1F</p><p>\u53EA\u8981\u6EE1\u8DB3P2c\u5373\u53EF\uFF1A</p><blockquote><p>P2c\uFF1A\u5BF9\u4E8E\u4EFB\u610F\u7684N\u548CV\uFF0C\u5982\u679C\u63D0\u6848[N, V]\u88AB\u63D0\u51FA\uFF0C\u90A3\u4E48\u5B58\u5728\u4E00\u4E2A\u534A\u6570\u4EE5\u4E0A\u7684Acceptor\u7EC4\u6210\u7684\u96C6\u5408S\uFF0C\u6EE1\u8DB3\u4EE5\u4E0B\u4E24\u4E2A\u6761\u4EF6\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\uFF1A</p></blockquote><ul><li>S\u4E2D\u6BCF\u4E2AAcceptor\u90FD\u6CA1\u6709\u63A5\u53D7\u8FC7\u7F16\u53F7\u5C0F\u4E8EN\u7684\u63D0\u6848\u3002</li><li>S\u4E2DAcceptor\u63A5\u53D7\u8FC7\u7684\u6700\u5927\u7F16\u53F7\u7684\u63D0\u6848\u7684value\u4E3AV\u3002</li></ul><h2 id="proposer\u751F\u6210\u63D0\u6848" tabindex="-1"><a class="header-anchor" href="#proposer\u751F\u6210\u63D0\u6848" aria-hidden="true">#</a> Proposer\u751F\u6210\u63D0\u6848</h2><p>\u4E3A\u4E86\u6EE1\u8DB3P2b\uFF0C\u8FD9\u91CC\u6709\u4E2A\u6BD4\u8F83\u91CD\u8981\u7684\u601D\u60F3\uFF1AProposer\u751F\u6210\u63D0\u6848\u4E4B\u524D\uFF0C\u5E94\u8BE5\u5148\u53BB**\u300E\u5B66\u4E60\u300F<strong>\u5DF2\u7ECF\u88AB\u9009\u5B9A\u6216\u8005\u53EF\u80FD\u88AB\u9009\u5B9A\u7684value\uFF0C\u7136\u540E\u4EE5\u8BE5value\u4F5C\u4E3A\u81EA\u5DF1\u63D0\u51FA\u7684\u63D0\u6848\u7684value\u3002\u5982\u679C\u6CA1\u6709value\u88AB\u9009\u5B9A\uFF0CProposer\u624D\u53EF\u4EE5\u81EA\u5DF1\u51B3\u5B9Avalue\u7684\u503C\u3002\u8FD9\u6837\u624D\u80FD\u8FBE\u6210\u4E00\u81F4\u3002\u8FD9\u4E2A\u5B66\u4E60\u7684\u9636\u6BB5\u662F\u901A\u8FC7\u4E00\u4E2A</strong>\u300EPrepare\u8BF7\u6C42\u300F**\u5B9E\u73B0\u7684\u3002</p><p>\u4E8E\u662F\u6211\u4EEC\u5F97\u5230\u4E86\u5982\u4E0B\u7684<strong>\u63D0\u6848\u751F\u6210\u7B97\u6CD5</strong>\uFF1A</p><ol><li><p>Proposer\u9009\u62E9\u4E00\u4E2A<strong>\u65B0\u7684\u63D0\u6848\u7F16\u53F7N</strong>\uFF0C\u7136\u540E\u5411<strong>\u67D0\u4E2AAcceptor\u96C6\u5408</strong>\uFF08\u534A\u6570\u4EE5\u4E0A\uFF09\u53D1\u9001\u8BF7\u6C42\uFF0C\u8981\u6C42\u8BE5\u96C6\u5408\u4E2D\u7684\u6BCF\u4E2AAcceptor\u505A\u51FA\u5982\u4E0B\u54CD\u5E94\uFF08response\uFF09\u3002 (a) \u5411Proposer\u627F\u8BFA\u4FDD\u8BC1<strong>\u4E0D\u518D\u63A5\u53D7</strong>\u4EFB\u4F55\u7F16\u53F7<strong>\u5C0F\u4E8EN\u7684\u63D0\u6848</strong>\u3002 (b) \u5982\u679CAcceptor\u5DF2\u7ECF\u63A5\u53D7\u8FC7\u63D0\u6848\uFF0C\u90A3\u4E48\u5C31\u5411Proposer\u54CD\u5E94<strong>\u5DF2\u7ECF\u63A5\u53D7\u8FC7</strong>\u7684\u7F16\u53F7\u5C0F\u4E8EN\u7684<strong>\u6700\u5927\u7F16\u53F7\u7684\u63D0\u6848</strong>\u3002</p><p>\u6211\u4EEC\u5C06\u8BE5\u8BF7\u6C42\u79F0\u4E3A<strong>\u7F16\u53F7\u4E3AN</strong>\u7684<strong>Prepare\u8BF7\u6C42</strong>\u3002</p></li><li><p>\u5982\u679CProposer\u6536\u5230\u4E86<strong>\u534A\u6570\u4EE5\u4E0A</strong>\u7684Acceptor\u7684<strong>\u54CD\u5E94</strong>\uFF0C\u90A3\u4E48\u5B83\u5C31\u53EF\u4EE5\u751F\u6210\u7F16\u53F7\u4E3AN\uFF0CValue\u4E3AV\u7684<strong>\u63D0\u6848[N,V]</strong>\u3002\u8FD9\u91CC\u7684V\u662F\u6240\u6709\u7684\u54CD\u5E94\u4E2D<strong>\u7F16\u53F7\u6700\u5927\u7684\u63D0\u6848\u7684Value</strong>\u3002\u5982\u679C\u6240\u6709\u7684\u54CD\u5E94\u4E2D<strong>\u90FD\u6CA1\u6709\u63D0\u6848</strong>\uFF0C\u90A3 \u4E48\u6B64\u65F6V\u5C31\u53EF\u4EE5\u7531Proposer<strong>\u81EA\u5DF1\u9009\u62E9</strong>\u3002 \u751F\u6210\u63D0\u6848\u540E\uFF0CProposer\u5C06\u8BE5<strong>\u63D0\u6848</strong>\u53D1\u9001\u7ED9<strong>\u534A\u6570\u4EE5\u4E0A</strong>\u7684Acceptor\u96C6\u5408\uFF0C\u5E76\u671F\u671B\u8FD9\u4E9BAcceptor\u80FD\u63A5\u53D7\u8BE5\u63D0\u6848\u3002\u6211\u4EEC\u79F0\u8BE5\u8BF7\u6C42\u4E3A<strong>Accept\u8BF7\u6C42</strong>\u3002\uFF08\u6CE8\u610F\uFF1A\u6B64\u65F6\u63A5\u53D7Accept\u8BF7\u6C42\u7684Acceptor\u96C6\u5408<strong>\u4E0D\u4E00\u5B9A</strong>\u662F\u4E4B\u524D\u54CD\u5E94Prepare\u8BF7\u6C42\u7684Acceptor\u96C6\u5408\uFF09</p></li></ol><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981-propose-\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981-propose-\u9636\u6BB5" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9700\u8981 Propose \u9636\u6BB5</h2><p>\u56E0\u4E3A\u5BF9 paxos \u6765\u8BF4\uFF0C\u662F\u5047\u5B9A\u4E00\u4E2A\u96C6\u7FA4\u4E2D\u4F1A\u6709\u591A\u4E2Apaxos instance\uFF08\u4E5F\u5C31\u662F\u591A\u4E2A\u63D0\u6848\uFF09\u540C\u65F6\u5B58\u5728\u7ADE\u4E89\u7684\uFF08\u5E76\u53D1\u51B2\u7A81\uFF09\u3002\u90A3\u4E48 propose \u9636\u6BB5\u5C31\u662F\u9009\u62E9\u51FA\u9700\u8981\u8FDB\u884C\u6295\u7968\u7684paxos instance\u3002\u5982\u679C\u80FD\u591F\u4FDD\u8BC1\u53EA\u6709\u4E00\u4E2Apaxos instance\uFF0C\u90A3\u4E48\u5C31\u65E0\u9700 propose \u9636\u6BB5\u4E86\uFF0C\u76F4\u63A5\u8FDB\u884Caccept\u5373\u53EF\u3002\u6240\u4EE5\u5BF9\u4E8Emulti-paxos\u4E2D\uFF0C\u5B58\u5728\u4E00\u4E2Aleader\uFF0C\u53EF\u4EE5\u63A7\u5236\u6BCF\u4E2A\u65F6\u523B\u53EA\u6709\u4E00\u4E2Apaxos instance\u5728\u96C6\u7FA4\u4E2D\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981propose\u9636\u6BB5\uFF0C\u53EA\u9700\u8981\u6267\u884Caccept\u9636\u6BB5\u5373\u53EF\u3002</p><p>\u8FD9\u91CC\u5C31\u76F8\u5F53\u4E8E\u4E00\u4E2Aadd 1 \u7684paxos instance\uFF0C\u4E00\u4E2A delete key \u7684paxos instance\u3002\u53EA\u6709\u5F53\u6574\u4E2A\u96C6\u7FA4\u6307\u5B9A\u7684 paxos instance \u7684\u987A\u5E8F\u662F\u76F8\u540C\u7684\uFF0C\u4E5F\u5C31\u662F\uFF0C\u4E5F\u5C31\u662F\u6BCF\u4E2A\u8282\u70B9\u90FD\u662F\u5148add 1\uFF0C\u7136\u540E\u5728 delete key\uFF0C\u6216\u8005\u5148delete key\uFF0C\u518Dadd 1\uFF0C\u6700\u540E\u7684\u6570\u636E\u624D\u4F1A\u4E00\u81F4\u3002\u5B83\u672C\u8D28\u4E0A\u89E3\u51B3\u7684\u5C31\u662F\u6709\u591A\u4E2A\u8BAE\u6848\u7684\u60C5\u51B5\u4E0B\uFF0C \u8FBE\u6210\u4E00\u4E2A\u4E00\u81F4\u7684\u8BAE\u6848\uFF0C\u4F8B\u5982\uFF0C\u4E00\u7FA4\u4EBA\u51B3\u5B9A\u805A\u9910\uFF0C\u6709\u60F3\u5403\u9C7C\u7684\uFF0C\u60F3\u5403\u706B\u9505\u7684\uFF0C\u8FD9\u6837\u591A\u4E2A\u51B3\u8BAE\u8FDB\u884C paxos \u63D0\u6848\u6295\u7968\uFF0C\u5C31\u4F1A\u5F97\u5230\u4E00\u4E2A\u4E00\u81F4\u7684\u805A\u9910\u7ED3\u679C\u3002\u5982\u679C\u6CA1\u6709\u591A\u4E2A\u51B3\u8BAE\uFF0C\u53EA\u6709\u4E00\u4E2A\u51B3\u8BAE\uFF0C\u90A3\u5C31\u4E0D\u4F1A\u51B2\u7A81\uFF0C\u76F4\u63A5accept\u6295\u7968\u5373\u53EF\u3002</p><h3 id="paxos-propose-\u7684\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#paxos-propose-\u7684\u610F\u4E49" aria-hidden="true">#</a> Paxos Propose \u7684\u610F\u4E49</h3><ol><li><strong>Block old proposals</strong></li><li><strong>Find out about (possibly) accepted values</strong></li></ol><h2 id="acceptor\u63A5\u53D7\u63D0\u6848" tabindex="-1"><a class="header-anchor" href="#acceptor\u63A5\u53D7\u63D0\u6848" aria-hidden="true">#</a> Acceptor\u63A5\u53D7\u63D0\u6848</h2><p>Acceptor<strong>\u53EF\u4EE5\u5FFD\u7565\u4EFB\u4F55\u8BF7\u6C42</strong>\uFF08\u5305\u62ECPrepare\u8BF7\u6C42\u548CAccept\u8BF7\u6C42\uFF09\u800C\u4E0D\u7528\u62C5\u5FC3\u7834\u574F\u7B97\u6CD5\u7684<strong>\u5B89\u5168\u6027</strong>\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u8FD9\u91CC\u8981\u8BA8\u8BBA\u7684\u662F\u4EC0\u4E48\u65F6\u5019Acceptor\u53EF\u4EE5\u54CD\u5E94\u4E00\u4E2A\u8BF7\u6C42\u3002</p><p>\u6211\u4EEC\u5BF9Acceptor\u63A5\u53D7\u63D0\u6848\u7ED9\u51FA\u5982\u4E0B\u7EA6\u675F\uFF1A</p><blockquote><p>P1a\uFF1A\u4E00\u4E2AAcceptor\u53EA\u8981\u5C1A<strong>\u672A\u54CD\u5E94\u8FC7</strong>\u4EFB\u4F55<strong>\u7F16\u53F7\u5927\u4E8EN</strong>\u7684<strong>Prepare\u8BF7\u6C42</strong>\uFF0C\u90A3\u4E48\u4ED6\u5C31\u53EF\u4EE5<strong>\u63A5\u53D7</strong>\u8FD9\u4E2A<strong>\u7F16\u53F7\u4E3AN\u7684\u63D0\u6848</strong>\u3002</p></blockquote><p>\u5982\u679CAcceptor\u6536\u5230\u4E00\u4E2A\u7F16\u53F7\u4E3AN\u7684Prepare\u8BF7\u6C42\uFF0C\u5728\u6B64\u4E4B\u524D\u5B83\u5DF2\u7ECF\u54CD\u5E94\u8FC7\u7F16\u53F7\u5927\u4E8EN\u7684Prepare\u8BF7\u6C42\u3002\u6839\u636EP1a\uFF0C\u8BE5Acceptor\u4E0D\u53EF\u80FD\u63A5\u53D7\u7F16\u53F7\u4E3AN\u7684\u63D0\u6848\u3002\u56E0\u6B64\uFF0C\u8BE5Acceptor\u53EF\u4EE5\u5FFD\u7565\u7F16\u53F7\u4E3AN\u7684Prepare\u8BF7\u6C42\u3002\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u56DE\u590D\u4E00\u4E2Aerror\uFF0C\u8BA9Proposer\u5C3D\u65E9\u77E5\u9053\u81EA\u5DF1\u7684\u63D0\u6848\u4E0D\u4F1A\u88AB\u63A5\u53D7\u3002</p><p>\u56E0\u6B64\uFF0C\u4E00\u4E2AAcceptor<strong>\u53EA\u9700\u8BB0\u4F4F</strong>\uFF1A1. \u5DF2\u63A5\u53D7\u7684\u7F16\u53F7\u6700\u5927\u7684\u63D0\u6848 2. \u5DF2\u54CD\u5E94\u7684\u8BF7\u6C42\u7684\u6700\u5927\u7F16\u53F7\u3002</p><hr><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',99),g=e("p",null,"< >",-1),P=e("p",null,"\u516C\u53F7\uFF1AAbel sun",-1),d={href:"http://zh.wikipedia.org/zh-cn/Paxos%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.cnblogs.com/linbingdong/p/6253479.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/31780743",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.jianshu.com/go-wild?ac=2&url=https%3A%2F%2Fblog.csdn.net%2Fsparkliang%2Farticle%2Fdetails%2F5740882",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.jianshu.com/go-wild?ac=2&url=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Flamport%2Fpubs%2Fpaxos-simple.pdf",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.jianshu.com/go-wild?ac=2&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPaxos_%28computer_science%29",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.jianshu.com/p/06a477a576bf",target:"_blank",rel:"noopener noreferrer"};function b(f,w){const o=n("ExternalLinkIcon");return t(),s("div",null,[i,e("blockquote",null,[g,P,e("p",null,[e("a",d,[r("http://zh.wikipedia.org/zh-cn/Paxos%E7%AE%97%E6%B3%95"),p(o)])]),e("p",null,[e("a",u,[r("https://www.cnblogs.com/linbingdong/p/6253479.html"),p(o)])]),e("p",null,[e("a",h,[r("https://zhuanlan.zhihu.com/p/31780743"),p(o)])]),e("p",null,[e("a",A,[r("https://www.jianshu.com/go-wild?ac=2&url=https%3A%2F%2Fblog.csdn.net%2Fsparkliang%2Farticle%2Fdetails%2F5740882"),p(o)])]),e("p",null,[e("a",m,[r("https://www.jianshu.com/go-wild?ac=2&url=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Flamport%2Fpubs%2Fpaxos-simple.pdf"),p(o)])]),e("p",null,[e("a",x,[r("https://www.jianshu.com/go-wild?ac=2&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPaxos_(computer_science)"),p(o)])]),e("p",null,[e("a",v,[r("https://www.jianshu.com/p/06a477a576bf"),p(o)])])])])}const V=a(l,[["render",b],["__file","5.Paxos.html.vue"]]);export{V as default};
