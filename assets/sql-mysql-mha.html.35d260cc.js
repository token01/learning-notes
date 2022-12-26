import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,a as e,b as a,d as r,f as n,r as o}from"./app.20466b7d.js";const h={},M=e("h1",{id:"mysql-mysql\u9AD8\u53EF\u7528-mha\u65B9\u6848",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql-mysql\u9AD8\u53EF\u7528-mha\u65B9\u6848","aria-hidden":"true"},"#"),a(" MySQL - MySQL\u9AD8\u53EF\u7528-MHA\u65B9\u6848")],-1),m=e("h2",{id:"_1-\u7B80\u4ECB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u7B80\u4ECB","aria-hidden":"true"},"#"),a(" 1.\u7B80\u4ECB")],-1),d=e("strong",null,"MHA\u662F\u4EC0\u4E48\uFF1F",-1),c={href:"https://code.google.com/p/mysql-master-ha/",target:"_blank",rel:"noopener noreferrer"},g=n('<p>MHA\uFF08Master High Availability\uFF09\u76EE\u524D\u5728MySQL\u9AD8\u53EF\u7528\u65B9\u9762\u662F\u4E00\u4E2A\u76F8\u5BF9\u6210\u719F\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u7531\u65E5\u672CDeNA\u516C\u53F8youshimaton\uFF08\u73B0\u5C31\u804C\u4E8EFacebook\u516C\u53F8\uFF09\u5F00\u53D1\uFF0C\u662F\u4E00\u5957\u4F18\u79C0\u7684\u4F5C\u4E3AMySQL\u9AD8\u53EF\u7528\u6027\u73AF\u5883\u4E0B\u6545\u969C\u5207\u6362\u548C\u4E3B\u4ECE\u63D0\u5347\u7684\u9AD8\u53EF\u7528\u8F6F\u4EF6\u3002\u5728MySQL\u6545\u969C\u5207\u6362\u8FC7\u7A0B\u4E2D\uFF0CMHA\u80FD\u505A\u5230\u572810~30\u79D2\u4E4B\u5185\u81EA\u52A8\u5B8C\u6210\u6570\u636E\u5E93\u7684\u6545\u969C\u5207\u6362\u64CD\u4F5C\uFF0C\u5E76\u4E14\u5728\u8FDB\u884C\u6545\u969C\u5207\u6362\u7684\u8FC7\u7A0B\u4E2D\uFF0CMHA\u80FD\u5728\u8F83\u5927\u7A0B\u5EA6\u4E0A\u4FDD\u8BC1\u6570\u636E\u7684\u4E00\u81F4\u6027\uFF0C\u4EE5\u8FBE\u5230\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u9AD8\u53EF\u7528\u3002</p><p>\u8BE5\u8F6F\u4EF6\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1AMHA Manager\uFF08\u7BA1\u7406\u8282\u70B9\uFF09\u548CMHA Node\uFF08\u6570\u636E\u8282\u70B9\uFF09\u3002MHA Manager\u53EF\u4EE5\u5355\u72EC\u90E8\u7F72\u5728\u4E00\u53F0\u72EC\u7ACB\u7684\u673A\u5668\u4E0A\u7BA1\u7406\u591A\u4E2Amaster-slave\u96C6\u7FA4\uFF0C\u4E5F\u53EF\u4EE5\u90E8\u7F72\u5728\u4E00\u53F0slave\u8282\u70B9\u4E0A\u3002MHA Node\u8FD0\u884C\u5728\u6BCF\u53F0MySQL\u670D\u52A1\u5668\u4E0A\uFF0CMHA Manager\u4F1A\u5B9A\u65F6\u63A2\u6D4B\u96C6\u7FA4\u4E2D\u7684master\u8282\u70B9\uFF0C\u5F53master\u51FA\u73B0\u6545\u969C\u65F6\uFF0C\u5B83\u53EF\u4EE5\u81EA\u52A8\u5C06\u6570\u636E\u7684slave\u63D0\u5347\u4E3A\u65B0\u7684master\uFF0C\u7136\u540E\u5C06\u6240\u6709\u5176\u4ED6\u7684slave\u91CD\u65B0\u6307\u5411\u65B0\u7684master\u3002\u6574\u4E2A\u6545\u969C\u8F6C\u79FB\u8FC7\u7A0B\u5BF9\u5E94\u7528\u7A0B\u5E8F\u5B8C\u5168\u900F\u660E\u3002</p><p>\u5728MHA\u81EA\u52A8\u6545\u969C\u5207\u6362\u8FC7\u7A0B\u4E2D\uFF0CMHA\u8BD5\u56FE\u4ECE\u5B95\u673A\u7684\u4E3B\u670D\u52A1\u5668\u4E0A\u4FDD\u5B58\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0C\u8F83\u5927\u7A0B\u5EA6\u7684\u4FDD\u8BC1\u6570\u636E\u7684\u4E0D\u4E22\u5931\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u603B\u662F\u53EF\u884C\u7684\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4E3B\u670D\u52A1\u5668\u786C\u4EF6\u6545\u969C\u6216\u65E0\u6CD5\u901A\u8FC7ssh\u8BBF\u95EE\uFF0CMHA\u6CA1\u6CD5\u4FDD\u5B58\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0C\u53EA\u8FDB\u884C\u6545\u969C\u8F6C\u79FB\u800C\u4E22\u5931\u4E86\u7684\u6570\u636E\u3002\u4F7F\u7528MySQL 5.5\u7684\u534A\u540C\u6B65\u590D\u5236\uFF0C\u53EF\u4EE5\u5927\u5927\u964D\u4F4E\u6570\u636E\u4E22\u5931\u7684\u98CE\u9669\u3002MHA\u53EF\u4EE5\u4E0E\u534A\u540C\u6B65\u590D\u5236\u7ED3\u5408\u8D77\u6765\u3002\u5982\u679C\u53EA\u6709\u4E00\u4E2Aslave\u5DF2\u7ECF\u6536\u5230\u4E86\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7\uFF0CMHA\u53EF\u4EE5\u5C06\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7\u5E94\u7528\u4E8E\u5176\u4ED6\u6240\u6709\u7684slave\u670D\u52A1\u5668\u4E0A\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4FDD\u8BC1\u6240\u6709\u8282\u70B9\u7684\u6570\u636E\u4E00\u81F4\u6027\u3002</p><h3 id="_1-1-mha\u7EC4\u4EF6\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-1-mha\u7EC4\u4EF6\u4ECB\u7ECD" aria-hidden="true">#</a> 1.1.mha\u7EC4\u4EF6\u4ECB\u7ECD</h3><ul><li><strong>MHA Manager</strong> \u8FD0\u884C\u4E00\u4E9B\u5DE5\u5177\uFF0C\u6BD4\u5982masterha_manager\u5DE5\u5177\u5B9E\u73B0\u81EA\u52A8\u76D1\u63A7MySQL Master\u548C\u5B9E\u73B0master\u6545\u969C\u5207\u6362\uFF0C\u5176\u5B83\u5DE5\u5177\u5B9E\u73B0\u624B\u52A8\u5B9E\u73B0master\u6545\u969C\u5207\u6362\u3001\u5728\u7EBFmater\u8F6C\u79FB\u3001\u8FDE\u63A5\u68C0\u67E5\u7B49\u7B49\u3002\u4E00\u4E2AManager\u53EF\u4EE5\u7BA1\u7406\u591A \u4E2Amaster-slave\u96C6\u7FA4</li><li><strong>MHA Node</strong> \u90E8\u7F72\u5728\u6240\u6709\u8FD0\u884CMySQL\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u65E0\u8BBA\u662Fmaster\u8FD8\u662Fslave\u3002\u4E3B\u8981\u4F5C\u7528\u6709\u4E09\u4E2A\u3002 1.\u4FDD\u5B58\u4E8C\u8FDB\u5236\u65E5\u5FD7 \u5982\u679C\u80FD\u591F\u8BBF\u95EE\u6545\u969Cmaster\uFF0C\u4F1A\u62F7\u8D1Dmaster\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7 2.\u5E94\u7528\u5DEE\u5F02\u4E2D\u7EE7\u65E5\u5FD7 \u4ECE\u62E5\u6709\u6700\u65B0\u6570\u636E\u7684slave\u4E0A\u751F\u6210\u5DEE\u5F02\u4E2D\u7EE7\u65E5\u5FD7\uFF0C\u7136\u540E\u5E94\u7528\u5DEE\u5F02\u65E5\u5FD7\u3002 3.\u6E05\u9664\u4E2D\u7EE7\u65E5\u5FD7 \u5728\u4E0D\u505C\u6B62SQL\u7EBF\u7A0B\u7684\u60C5\u51B5\u4E0B\u5220\u9664\u4E2D\u7EE7\u65E5\u5FD7</li></ul><h3 id="_1-2-\u80CC\u666F\u548C\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#_1-2-\u80CC\u666F\u548C\u76EE\u6807" aria-hidden="true">#</a> 1.2.\u80CC\u666F\u548C\u76EE\u6807</h3><blockquote><p>\u5728\u65E9\u671F\u7684MySQL\u67B6\u6784\u4E2D\u6700\u4E3B\u6D41\u5C31\u5C31\u662FMySQL\u590D\u5236\u7684\u4E3B\u4ECE\u7ED3\u6784\uFF0C\u4F46\u4F34\u968F\u65F6\u95F4\u7684\u63A8\u79FB\u4EE5\u53CA\u6570\u636E\u7684\u81A8\u80C0\u4F1A\u51FA\u73B0\u4E00\u4E0B\u51E0\u7C7B\u95EE\u9898\u3002</p></blockquote><ul><li><p>\u4EE5\u524D\u51E0\u5341\u53F0DB\u670D\u52A1\u5668\uFF0C\u4EBA\u5DE5\u767B\u9646\u670D\u52A1\u5668\u5C31\u80FD\u7EF4\u62A4\u597D\uFF0C\u4E5F\u6CA1\u6709\u9AD8\u53EF\u7528\uFF0C\u5F53master\u6302\u4E86\uFF0C\u901A\u77E5\u4E1A\u52A1\u5C06IP\u5207\u6362\u5230slave\u7136\u540E\u91CD\u542F\u4E5F\u80FD\u57FA\u672C\u6EE1\u8DB3\u4E1A\u52A1\u8981\u6C42\uFF0C\u4F46\u662F\u4E1A\u52A1\u8FC5\u901F\u53D1\u5C55\uFF0C\u5B9E\u4F8B\u6570\u4E0D\u65AD\u589E\u52A0\uFF0C\u590D\u5236\u96C6\u4E0D\u65AD\u589E\u52A0\uFF0C\u6570\u636E\u5E93\u67B6\u6784\u591A\u6837\u5316\uFF0C\u800C\u8FD9\u79CD\u4EBA\u5DE5\u7EF4\u62A4\u65B9\u5F0F\u663E\u7136\u5927\u5927\u589E\u52A0\u4E86DBA\u5DE5\u4F5C\u91CF\uFF0C\u800C\u4E14\u6548\u7387\u4F4E\u4E0B\u3001\u5BB9\u6613\u51FA\u9519\u3002</p></li><li><p>DB\u89C4\u6A21\u7684\u589E\u5927\uFF0C\u673A\u5668\u6545\u969C\u3001SQL\u6545\u969C\u3001\u5B9E\u4F8B\u6545\u969C\u51FA\u73B0\u7684\u6982\u7387\u4E5F\u589E\u52A0\u3001\u8FD8\u6709\u6765\u81EA\u4E1A\u52A1\u65B9\u7684DB\u53D8\u66F4\uFF0C\u6BD4\u5982\u5927\u8868\u589E\u52A0\u5B57\u6BB5\u3001\u589E\u52A0\u7D22\u5F15\u3001\u6279\u91CF\u5220\u9664\u6570\u636E\u7B49\u5F02\u5E38\u7EF4\u62A4\u64CD\u4F5C\uFF0C\u5F53\u7136\u8FD9\u4E9B\u5728\u4E00\u5B9A\u6761\u4EF6\u4E0B\u53EF\u7528\u91C7\u7528\u5728\u7EBF\u53D8\u66F4\uFF0C\u6BD4\u5982\u91C7\u7528pt-online-schema-change\u5DE5\u5177\uFF0C\u4F46\u662F\u5F53\u4E0D\u6EE1\u8DB3\u5728\u7EBF\u53D8\u66F4\u6761\u4EF6\u3001\u6216\u8005\u5728\u7EBF\u53D8\u66F4\u590D\u6742\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u9700\u8981\u91C7\u7528\u6EDA\u52A8\u53D8\u66F4\u7684\u65B9\u5F0F\uFF0C\u5148\u5728\u5404\u4E2Aslave\u4E0A\u53D8\u66F4\u3001\u5728\u7EBF\u5207\u6362\u540E\u518D\u5728master\u4E0A\u53D8\u66F4\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u4E00\u6B21\u5207\u6362\u8FD8\u539F\uFF0C\u800C\u8FD9\u4E9B\u5207\u6362\u64CD\u4F5C\u5982\u679C\u5168\u90E8\u624B\u5DE5\u6572\u547D\u4EE4\u6765\u8FDB\u884C\u663E\u7136\u662F\u4E0D\u53EF\u53D6\u7684\u3002</p></li><li><p>\u968F\u7740\u7528\u6237\u6570\u7684\u4E0D\u65AD\u589E\u52A0\uFF0C\u4E1A\u52A1\u65B9\u5BF9DB\u8FD9\u79CD\u57FA\u7840\u670D\u52A1\u7684\u53EF\u7528\u6027\u4E5F\u5C31\u8D8A\u6765\u8D8A\u9AD8\uFF0C\u5728\u9B45\u65CF\u4E1A\u52A1\u5BF9DB\u7684\u53EF\u7528\u6027\u8981\u6C42\u662F\u6BCF\u4E2A\u6708\u9700\u8981\u8FBE\u5230\u56DB\u4E2A9\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u6BCF\u4E2A\u6708\u7684\u6545\u969C\u65F6\u95F4\u53EA\u6709\u4E0D\u52305\u5206\u949F\uFF0C\u4EE5\u524D\u90A3\u79CD\u901A\u77E5\u4E1A\u52A1\u66F4\u6539IP\u91CD\u542F\u7684\u65B9\u5F0F\u663E\u7136\u662F\u8FBE\u4E0D\u5230\u8FD9\u4E2A\u8981\u6C42\u7684\u3002</p><p><strong>\u5728\u8FD9\u4E9B\u80CC\u666F\u548C\u8981\u6C42\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u6446\u8131\u624B\u5DE5\u64CD\u4F5C\uFF0C\u9700\u8981\u4E00\u5957\u6709\u6548\u7684MySQL\u9AD8\u53EF\u7528\u65B9\u6848\u548C\u4E00\u4E2A\u9AD8\u6548\u7684\u9AD8\u53EF\u7528\u5E73\u53F0\u6765\u652F\u6491DB\u7684\u5FEB\u901F\u589E\u957F\u3002MySQL\u9AD8\u53EF\u7528\u5E73\u53F0\u9700\u8981\u8FBE\u5230\u7684\u76EE\u6807\u6709\u4EE5\u4E0B\u51E0\u70B9\uFF1A</strong></p><p><em>1.\u6570\u636E\u4E00\u81F4\u6027\u4FDD\u8BC1\u8FD9\u4E2A\u662F\u6700\u57FA\u672C\u7684\u540C\u65F6\u4E5F\u662F\u524D\u63D0\uFF0C\u5982\u679C\u4E3B\u5907\u7684\u6570\u636E\u7684\u4E0D\u4E00\u81F4\uFF0C\u90A3\u4E48\u5207\u6362\u5C31\u65E0\u6CD5\u8FDB\u884C\uFF0C\u5F53\u7136\u8FD9\u91CC\u7684\u4E00\u81F4\u6027\u4E5F\u662F\u4E00\u4E2A\u76F8\u5BF9\u7684\uFF0C\u4F46\u662F\u8981\u505A\u5230\u6700\u7EC8\u4E00\u81F4\u6027\u3002 2.\u6545\u969C\u5FEB\u901F\u5207\u6362\uFF0C\u5F53master\u6545\u969C\u65F6\u8FD9\u91CC\u53EF\u4EE5\u662F\u673A\u5668\u6545\u969C\u6216\u8005\u662F\u5B9E\u4F8B\u6545\u969C\uFF0C\u8981\u786E\u4FDD\u4E1A\u52A1\u80FD\u5728\u6700\u77ED\u65F6\u95F4\u5207\u6362\u5230\u5907\u7528\u8282\u70B9\uFF0C\u4F7F\u5F97\u4E1A\u52A1\u53D7\u5F71\u54CD\u65F6\u95F4\u6700\u77ED\u3002\u8FD9\u91CC\u4E5F\u53EF\u4EE5\u6307\u4E1A\u52A1\u4F8B\u884C\u7EF4\u62A4\u64CD\u4F5C\uFF0C\u6BD4\u5982\u524D\u9762\u63D0\u5230\u7684\u65E0\u6CD5\u4F7F\u7528\u5728\u7EBF\u8FDB\u884CDDL\u7684DDL\u64CD\u4F5C\uFF0C\u5F88\u591A\u5206\u8868\u6279\u91CF\u7684DDL\u64CD\u4F5C\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u901A\u8FC7\u5728\u7EBF\u5207\u6362\u65B9\u5F0F\u6765\u6EDA\u52A8\u5B8C\u6210\u3002 3.\u7B80\u5316\u65E5\u5E38\u7EF4\u62A4\uFF0C\u901A\u8FC7\u9AD8\u53EF\u7528\u5E73\u53F0\u6765\u81EA\u52A8\u5B8C\u6210\u9AD8\u53EF\u7528\u7684\u90E8\u7F72\u3001\u7EF4\u62A4\u3001\u76D1\u63A7\u7B49\u4EFB\u52A1\uFF0C\u80FD\u591F\u6700\u5927\u7A0B\u5EA6\u7684\u89E3\u653EDBA\u624B\u52A8\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u65E5\u5E38\u8FD0\u7EF4\u6548\u7387\u3002 4.\u7EDF\u4E00\u7BA1\u7406\uFF0C\u5F53\u590D\u5236\u96C6\u5F88\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u80FD\u591F\u7EDF\u4E00\u7BA1\u7406\u9AD8\u53EF\u7528\u5B9E\u4F8B\u4FE1\u606F\u3001\u5B9E\u4F8B\u4FE1\u606F\u3001\u76D1\u63A7\u4FE1\u606F\u3001\u5207\u6362\u4FE1\u606F\u7B49\u3002 \u9AD8\u53EF\u7528\u7684\u90E8\u7F72\u8981\u5BF9\u73B0\u6709\u7684\u6570\u636E\u5E93\u67B6\u6784\u65E0\u5F71\u54CD\uFF0C\u5982\u679C\u56E0\u4E3A\u90E8\u7F72\u9AD8\u53EF\u7528\uFF0C\u9700\u8981\u66F4\u6539\u6216\u8005\u8C03\u6574\u6570\u636E\u5E93\u67B6\u6784\u5219\u4F1A\u5BFC\u81F4\u6210\u672C\u589E\u52A0\u3002</em></p></li></ul><h2 id="_2-mha\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-mha\u539F\u7406" aria-hidden="true">#</a> 2.MHA\u539F\u7406</h2><h3 id="_2-1-mha\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-1-mha\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> 2.1.MHA\u5DE5\u4F5C\u539F\u7406</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221120232307218.png" alt="image-20221120232307218"></p><p>\u5F53master\u51FA\u73B0\u6545\u969C\u65F6\uFF0C\u901A\u8FC7\u5BF9\u6BD4slave\u4E4B\u95F4I/O\u7EBF\u7A0B\u8BFB\u53D6masterbinlog\u7684\u4F4D\u7F6E\uFF0C\u9009\u53D6\u6700\u63A5\u8FD1\u7684slave\u505A\u4E3Alatestslave\u3002 \u5176\u5B83slave\u901A\u8FC7\u4E0Elatest slave\u5BF9\u6BD4\u751F\u6210\u5DEE\u5F02\u4E2D\u7EE7\u65E5\u5FD7\u3002\u5728latest slave\u4E0A\u5E94\u7528\u4ECEmaster\u4FDD\u5B58\u7684binlog\uFF0C\u540C\u65F6\u5C06latest slave\u63D0\u5347\u4E3Amaster\u3002\u6700\u540E\u5728\u5176\u5B83slave\u4E0A\u5E94\u7528\u76F8\u5E94\u7684\u5DEE\u5F02\u4E2D\u7EE7\u65E5\u5FD7\u5E76\u5F00\u59CB\u4ECE\u65B0\u7684master\u5F00\u59CB\u590D\u5236\u3002</p><p>\u5728MHA\u5B9E\u73B0Master\u6545\u969C\u5207\u6362\u8FC7\u7A0B\u4E2D\uFF0CMHA Node\u4F1A\u8BD5\u56FE\u8BBF\u95EE\u6545\u969C\u7684master\uFF08\u901A\u8FC7SSH\uFF09\uFF0C\u5982\u679C\u53EF\u4EE5\u8BBF\u95EE\uFF08\u4E0D\u662F\u786C\u4EF6\u6545\u969C\uFF0C\u6BD4\u5982InnoDB\u6570\u636E\u6587\u4EF6\u635F\u574F\u7B49\uFF09\uFF0C\u4F1A\u4FDD\u5B58\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u4EE5\u6700\u5927\u7A0B\u5EA6\u4FDD \u8BC1\u6570\u636E\u4E0D\u4E22\u5931\u3002MHA\u548C\u534A\u540C\u6B65\u590D\u5236\u4E00\u8D77\u4F7F\u7528\u4F1A\u5927\u5927\u964D\u4F4E\u6570\u636E\u4E22\u5931\u7684\u5371\u9669\u3002\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u4ECE\u5B95\u673A\u5D29\u6E83\u7684master\u4FDD\u5B58\u4E8C\u8FDB\u5236\u65E5\u5FD7\u4E8B\u4EF6(binlog events)\u3002</li><li>\u8BC6\u522B\u542B\u6709\u6700\u65B0\u66F4\u65B0\u7684slave\u3002</li><li>\u5E94\u7528\u5DEE\u5F02\u7684\u4E2D\u7EE7\u65E5\u5FD7(relay log)\u5230\u5176\u5B83slave\u3002</li><li>\u5E94\u7528\u4ECEmaster\u4FDD\u5B58\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7\u4E8B\u4EF6(binlog events)\u3002</li><li>\u63D0\u5347\u4E00\u4E2Aslave\u4E3A\u65B0master\u5E76\u8BB0\u5F55binlog file\u548Cposition\u3002</li><li>\u4F7F\u5176\u5B83\u7684slave\u8FDE\u63A5\u65B0\u7684master\u8FDB\u884C\u590D\u5236\u3002</li><li>\u5B8C\u6210\u5207\u6362manager\u4E3B\u8FDB\u7A0BOFFLINE</li></ul><h3 id="_2-2-mha\u5DE5\u5177\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-2-mha\u5DE5\u5177\u4ECB\u7ECD" aria-hidden="true">#</a> 2.2.MHA\u5DE5\u5177\u4ECB\u7ECD</h3><p><strong>1.Manager\u5DE5\u5177:</strong></p><ul><li>masterha_check_ssh : \u68C0\u67E5MHA\u7684SSH\u914D\u7F6E\u3002</li><li>masterha_check_repl : \u68C0\u67E5MySQL\u590D\u5236\u3002</li><li>masterha_manager : \u542F\u52A8MHA\u3002</li><li>masterha_check_status : \u68C0\u6D4B\u5F53\u524DMHA\u8FD0\u884C\u72B6\u6001\u3002</li><li>masterha_master_monitor : \u76D1\u6D4Bmaster\u662F\u5426\u5B95\u673A\u3002</li><li>masterha_master_switch : \u63A7\u5236\u6545\u969C\u8F6C\u79FB(\u81EA\u52A8\u6216\u624B\u52A8)\u3002</li><li>masterha_conf_host : \u6DFB\u52A0\u6216\u5220\u9664\u914D\u7F6E\u7684server\u4FE1\u606F\u3002</li></ul><p><strong>2. Node\u5DE5\u5177</strong></p><ul><li>save_binary_logs : \u4FDD\u5B58\u548C\u590D\u5236master\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7\u3002</li><li>apply_diff_relay_logs : \u8BC6\u522B\u5DEE\u5F02\u7684\u4E2D\u7EE7\u65E5\u5FD7\u4E8B\u4EF6\u5E76\u5E94\u7528\u4E8E\u5176\u5B83slave\u3002</li><li>filter_mysqlbinlog : \u53BB\u9664\u4E0D\u5FC5\u8981\u7684ROLLBACK\u4E8B\u4EF6(MHA\u5DF2\u4E0D\u518D\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177)\u3002</li><li>purge_relay_logs : \u6E05\u9664\u4E2D\u7EE7\u65E5\u5FD7(\u4E0D\u4F1A\u963B\u585ESQL\u7EBF\u7A0B)\u3002 <em>\u6CE8\u610F\uFF1ANode\u8FD9\u4E9B\u5DE5\u5177\u901A\u5E38\u7531MHA Manager\u7684\u811A\u672C\u89E6\u53D1,\u65E0\u9700\u4EBA\u624B\u64CD\u4F5C\u3002</em></li></ul><h3 id="_2-3-\u5F53\u524D\u9AD8\u53EF\u7528\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5F53\u524D\u9AD8\u53EF\u7528\u65B9\u6848" aria-hidden="true">#</a> 2.3.\u5F53\u524D\u9AD8\u53EF\u7528\u65B9\u6848</h3><ul><li><strong>keepalived+mysql\u590D\u5236</strong> \u8BE5\u7ED3\u6784\u4E0EMHA\u7C7B\u4F3C\uFF0C\u4F46keepalived\u7684\u4F18\u52BF\u5728\u4E8E\u65E0\u72B6\u6001\u7EC4\u4EF6\u7684\u6545\u969C\u5207\u6362\uFF0C\u5E38\u7528\u4E8Eweb\u524D\u7AEF\u7684\u6545\u969C\u8F6C\u79FB\uFF0C\u5E94\u7528\u4E8E\u6570\u636E\u5E93\u573A\u666F\u4E2D\uFF0C\u6700\u81F4\u547D\u7684\u95EE\u9898\u5C31\u662F\u8111\u88C2\u4EE5\u540E\u6570\u636E\u4E71\u5199\u7684\u98CE\u9669\uFF0C\u4E3A\u4F01\u4E1A\u5E26\u6765\u5DE8\u5927\u56F0\u6270\u3002</li><li><strong>MySQL Cluster</strong> MySQL Cluster\u771F\u6B63\u5B9E\u73B0\u4E86\u9AD8\u53EF\u7528\uFF0C\u4F46\u662F\u4F7F\u7528\u7684\u662FNDB\u5B58\u50A8\u5F15\u64CE\uFF0C\u5E76\u4E14SQL\u8282\u70B9\u6709\u5355\u70B9\u6545\u969C\u95EE\u9898\u3002</li><li><strong>\u534A\u540C\u6B65\u590D\u5236(5.5+)</strong> \u534A\u540C\u6B65\u590D\u5236\u5927\u5927\u51CF\u5C11\u4E86\u201Cbinlog events\u53EA\u5B58\u5728\u6545\u969Cmaster\u4E0A\u201D\u7684\u95EE\u9898\u3002\u5728\u63D0\u4EA4\u65F6\uFF0C\u4FDD\u8BC1\u81F3\u5C11\u4E00\u4E2Aslave\uFF08\u5E76\u4E0D\u662F\u6240\u6709\u7684\uFF09\u63A5\u6536\u5230binlog\uFF0C\u56E0\u6B64\u4E00\u4E9Bslave\u53EF\u80FD\u6CA1\u6709\u63A5\u6536\u5230binlog\u3002</li><li><strong>PXC</strong> PXC\u5B9E\u73B0\u4E86\u670D\u52A1\u9AD8\u53EF\u7528\uFF0C\u6570\u636E\u540C\u6B65\u65F6\u662F\u5E76\u53D1\u590D\u5236\u3002\u4F46\u662F\u4EC5\u652F\u6301InnoDB\u5F15\u64CE\uFF0C\u6240\u6709\u7684\u8868\u90FD\u8981\u6709\u4E3B\u952E\u3002\u9501\u51B2\u7A81\u3001\u6B7B\u9501\u95EE\u9898\u76F8\u5BF9\u8F83\u591A\u7B49\u7B49\u95EE\u9898\u3002</li></ul><h3 id="_2-4-mha\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_2-4-mha\u7684\u4F18\u52BF" aria-hidden="true">#</a> 2.4.MHA\u7684\u4F18\u52BF</h3><ul><li><strong>\u6545\u969C\u5207\u6362\u5FEB</strong> \u5728 \u4E3B\u4ECE\u590D\u5236\u96C6\u7FA4\u4E2D\uFF0C\u53EA\u8981\u4ECE\u5E93\u5728\u590D\u5236\u4E0A\u6CA1\u6709\u5EF6\u8FDF\uFF0CMHA\u901A\u5E38\u53EF\u4EE5\u5728\u6570\u79D2\u5185\u5B9E\u73B0\u6545\u969C\u5207\u6362\u30029-10\u79D2\u5185\u68C0\u67E5\u5230master\u6545\u969C\uFF0C\u53EF\u4EE5\u9009\u62E9\u57287-10\u79D2\u5173\u95ED master\u4EE5\u907F\u514D\u51FA\u73B0\u88C2\u8111\uFF0C\u51E0\u79D2\u949F\u5185\uFF0C\u5C06\u5DEE\u5F02\u4E2D\u7EE7\u65E5\u5FD7\uFF08relay log\uFF09\u5E94\u7528\u5230\u65B0\u7684master\u4E0A\uFF0C\u56E0\u6B64\u603B\u7684\u5B95\u673A\u65F6\u95F4\u901A\u5E38\u4E3A10-30\u79D2\u3002\u6062\u590D\u65B0\u7684master\u540E\uFF0CMHA\u5E76\u884C\u7684\u6062\u590D\u5176\u4F59\u7684slave\u3002\u5373\u4F7F\u5728\u6709\u6570\u4E07\u53F0 slave\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CDmaster\u7684\u6062\u590D\u65F6\u95F4\u3002 DeNA\u5728\u8D85\u8FC7150\u4E2AMySQL\uFF08\u4E3B\u89815.0/5.1\u7248\u672C\uFF09\u4E3B\u4ECE\u73AF\u5883\u4E0B\u4F7F\u7528\u4E86MHA\u3002\u5F53mater\u6545\u969C\u540E\uFF0CMHA\u57284\u79D2\u5185\u5C31\u5B8C\u6210\u4E86\u6545\u969C\u5207\u6362\u3002\u5728\u4F20\u7EDF\u7684\u4E3B\u52A8/\u88AB\u52A8\u96C6\u7FA4\u89E3\u51B3\u65B9\u6848\u4E2D\uFF0C4\u79D2\u5185\u5B8C\u6210\u6545\u969C\u5207\u6362\u662F\u4E0D\u53EF\u80FD\u7684\u3002</li><li><strong>master\u6545\u969C\u4E0D\u4F1A\u5BFC\u81F4\u6570\u636E\u4E0D\u4E00\u81F4</strong> \u5F53 \u76EE\u524D\u7684master\u51FA\u73B0\u6545\u969C\u662F\uFF0CMHA\u81EA\u52A8\u8BC6\u522Bslave\u4E4B\u95F4\u4E2D\u7EE7\u65E5\u5FD7\uFF08relay log\uFF09\u7684\u4E0D\u540C\uFF0C\u5E76\u5E94\u7528\u5230\u6240\u6709\u7684slave\u4E2D\u3002\u8FD9\u6837\u6240\u6709\u7684salve\u80FD\u591F\u4FDD\u6301\u540C\u6B65\uFF0C\u53EA\u8981\u6240\u6709\u7684slave\u5904\u4E8E\u5B58\u6D3B\u72B6\u6001\u3002\u548CSemi- Synchronous Replication\u4E00\u8D77\u4F7F\u7528\uFF0C\uFF08\u51E0\u4E4E\uFF09\u53EF\u4EE5\u4FDD\u8BC1\u6CA1\u6709\u6570\u636E\u4E22\u5931\u3002</li><li><strong>\u9700\u4FEE\u6539\u5F53\u524D\u7684MySQL\u8BBE\u7F6E</strong> MHA\u7684\u8BBE\u8BA1\u7684\u91CD\u8981\u539F\u5219\u4E4B\u4E00\u5C31\u662F\u5C3D\u53EF\u80FD\u5730\u7B80\u5355\u6613\u7528\u3002MHA\u5DE5\u4F5C\u5728\u4F20\u7EDF\u7684MySQL\u7248\u672C5.0\u548C\u4E4B\u540E\u7248\u672C\u7684\u4E3B\u4ECE\u590D\u5236\u73AF\u5883\u4E2D\u3002\u548C\u5176\u5B83\u9AD8\u53EF\u7528\u89E3\u51B3\u65B9\u6CD5\u6BD4\uFF0CMHA\u5E76\u4E0D\u9700\u8981\u6539\u53D8MySQL\u7684\u90E8\u7F72\u73AF\u5883\u3002MHA\u9002\u7528\u4E8E\u5F02\u6B65\u548C\u534A\u540C\u6B65\u7684\u4E3B\u4ECE\u590D\u5236\u3002 \u542F\u52A8/\u505C\u6B62/\u5347\u7EA7/\u964D\u7EA7/\u5B89\u88C5/\u5378\u8F7DMHA\u4E0D\u9700\u8981\u6539\u53D8\uFF08\u5305\u6269\u542F\u52A8/\u505C\u6B62\uFF09MySQL\u590D\u5236\u3002\u5F53\u9700\u8981\u5347\u7EA7MHA\u5230\u65B0\u7684\u7248\u672C\uFF0C\u4E0D\u9700\u8981\u505C\u6B62MySQL\uFF0C\u4EC5\u4EC5\u66FF\u6362\u5230\u65B0\u7248\u672C\u7684MHA\uFF0C\u7136\u540E\u91CD\u542FMHA\u3000Manager\u5C31\u597D\u4E86\u3002 MHA\u8FD0\u884C\u5728MySQL 5.0\u5F00\u59CB\u7684\u539F\u751F\u7248\u672C\u4E0A\u3002\u4E00\u4E9B\u5176\u5B83\u7684MySQL\u9AD8\u53EF\u7528\u89E3\u51B3\u65B9\u6848\u9700\u8981\u7279\u5B9A\u7684\u7248\u672C\uFF08\u6BD4\u5982MySQL\u96C6\u7FA4\u3001\u5E26\u5168\u5C40\u4E8B\u52A1ID\u7684MySQL\u7B49\u7B49\uFF09\uFF0C\u4F46\u5E76\u4E0D\u4EC5\u4EC5\u4E3A\u4E86 master\u7684\u9AD8\u53EF\u7528\u624D\u8FC1\u79FB\u5E94\u7528\u7684\u3002\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5DF2\u7ECF\u90E8\u7F72\u4E86\u6BD4\u8F83\u65E7MySQL\u5E94\u7528\uFF0C\u5E76\u4E14\u4E0D\u60F3\u4EC5\u4EC5\u4E3A\u4E86\u5B9E\u73B0Master\u7684\u9AD8\u53EF\u7528\uFF0C\u82B1\u592A\u591A\u7684\u65F6\u95F4\u8FC1\u79FB\u5230\u4E0D \u540C\u7684\u5B58\u50A8\u5F15\u64CE\u6216\u66F4\u65B0\u7684\u524D\u6CBF\u53D1\u884C\u7248\u3002MHA\u5DE5\u4F5C\u7684\u5305\u62EC5.0/5.1/5.5\u7684\u539F\u751F\u7248\u672C\u7684MySQL\u4E0A\uFF0C\u6240\u4EE5\u5E76\u4E0D\u9700\u8981\u8FC1\u79FB\u3002</li><li><strong>\u65E0\u9700\u589E\u52A0\u5927\u91CF\u7684\u670D\u52A1\u5668</strong> MHA\u7531MHA Manager\u548CMHA Node\u7EC4\u6210\u3002MHA Node\u8FD0\u884C\u5728\u9700\u8981\u6545\u969C\u5207\u6362/\u6062\u590D\u7684MySQL\u670D\u52A1\u5668\u4E0A\uFF0C\u56E0\u6B64\u5E76\u4E0D\u9700\u8981\u989D\u5916\u589E\u52A0\u670D\u52A1\u5668\u3002MHA Manager\u8FD0\u884C\u5728\u7279\u5B9A\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u56E0\u6B64\u9700\u8981\u589E\u52A0\u4E00\u53F0\uFF08\u5B9E\u73B0\u9AD8\u53EF\u7528\u9700\u89812\u53F0\uFF09\uFF0C\u4F46\u662FMHA Manager\u53EF\u4EE5\u76D1\u63A7\u5927\u91CF\uFF08\u751A\u81F3\u4E0A\u767E\u53F0\uFF09\u5355\u72EC\u7684master\uFF0C\u56E0\u6B64\uFF0C\u5E76\u4E0D\u9700\u8981\u589E\u52A0\u5927\u91CF\u7684\u670D\u52A1\u5668\u3002\u5373\u4F7F\u5728\u4E00\u53F0slave\u4E0A\u8FD0\u884CMHA Manager\u4E5F\u662F\u53EF\u4EE5\u7684\u3002\u7EFC\u4E0A\uFF0C\u5B9E\u73B0MHA\u5E76\u6CA1\u7528\u989D\u5916\u589E\u52A0\u5927\u91CF\u7684\u670D\u52A1\u3002</li><li><strong>\u65E0\u6027\u80FD\u4E0B\u964D</strong> MHA\u9002\u7528\u4E0E\u5F02\u6B65\u6216\u534A\u540C\u6B65\u7684MySQL\u590D\u5236\u3002\u76D1\u63A7master\u65F6\uFF0CMHA\u4EC5\u4EC5\u662F\u6BCF\u9694\u51E0\u79D2\uFF08\u9ED8\u8BA4\u662F3\u79D2\uFF09\u53D1\u9001\u4E00\u4E2Aping\u5305\uFF0C\u5E76\u4E0D\u53D1\u9001\u91CD\u67E5\u8BE2\u3002\u53EF\u4EE5\u5F97\u5230\u50CF\u539F\u751FMySQL\u590D\u5236\u4E00\u6837\u5FEB\u7684\u6027\u80FD\u3002</li><li><strong>\u9002\u7528\u4E8E\u4EFB\u4F55\u5B58\u50A8\u5F15\u64CE</strong> MHA\u53EF\u4EE5\u8FD0\u884C\u5728\u53EA\u8981MySQL\u590D\u5236\u8FD0\u884C\u7684\u5B58\u50A8\u5F15\u64CE\u4E0A\uFF0C\u5E76\u4E0D\u4EC5\u9650\u5236\u4E8EInnoDB\uFF0C\u5373\u4F7F\u5728\u4E0D\u6613\u8FC1\u79FB\u7684\u4F20\u7EDF\u7684MyISAM\u5F15\u64CE\u73AF\u5883\uFF0C\u4E00\u6837\u53EF\u4EE5\u4F7F\u7528MHA\u3002</li></ul><h2 id="_3-mha\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#_3-mha\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> 3.MHA\u6700\u4F73\u5B9E\u8DF5</h2>',24),_={href:"https://www.jianshu.com/p/6173dae5ed7a",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,[e("img",{src:"https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221120232743414.png",alt:"image-20221120232743414"})],-1),p=e("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u6587\u7AE0")],-1),H={href:"https://www.jianshu.com/p/6173dae5ed7a",target:"_blank",rel:"noopener noreferrer"};function y(u,v){const s=o("ExternalLinkIcon");return t(),i("div",null,[M,m,e("blockquote",null,[e("p",null,[d,a(" MHA\u662F\u7531\u65E5\u672CMysql yoshinorim\u4E13\u5BB6\uFF08\u539F\u5C31\u804C\u4E8EDeNA\u73B0\u5C31\u804C\u4E8EFaceBook\uFF09\u7528Perl\u5199\u7684\u4E00\u5957Mysql\u6545\u969C\u5207\u6362\u65B9\u6848\uFF0C\u6765\u4FDD\u969C\u6570\u636E\u5E93\u7684\u9AD8\u53EF\u7528\u6027\uFF0C\u5B83\u7684\u529F\u80FD\u662F\u80FD\u572810-30s\u4E4B\u5185\u5B9E\u73B0\u4E3BMysql\u6545\u969C\u8F6C\u79FB\uFF08failover\uFF09\uFF0CMHA\u6545\u969C\u8F6C\u79FB\u53EF\u4EE5\u5F88\u597D\u7684\u5E2E\u6211\u4EEC\u89E3\u51B3\u4ECE\u5E93\u6570\u636E\u7684\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u540C\u65F6\u6700\u5927\u5316\u633D\u56DE\u6545\u969C\u53D1\u751F\u540E\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002 \u5B98\u65B9\u7F51\u7AD9\uFF1A"),e("a",c,[a("https://code.google.com/p/mysql-master-ha/"),r(s)])])]),g,e("p",null,[e("a",_,[a("\u5177\u4F53\u64CD\u4F5C\u6B65\u9AA4"),r(s)])]),A,p,e("p",null,[e("a",H,[a("MHA\u6784\u5EFAMySQL\u9AD8\u53EF\u7528\u5E73\u53F0\u6700\u4F73\u5B9E\u8DF5"),r(s)])])])}const Q=l(h,[["render",y],["__file","sql-mysql-mha.html.vue"]]);export{Q as default};
