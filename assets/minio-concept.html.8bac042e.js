import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as r,a as e,b as a,d as n,f as s,r as p}from"./app.61aab752.js";const l={},d=s('<h1 id="minio\u57FA\u7840-minio\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#minio\u57FA\u7840-minio\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> Minio\u57FA\u7840 - Minio\u57FA\u7840\u6982\u5FF5</h1><blockquote><p><strong>\u6587\u4EF6\u3001\u5757\u548C\u5BF9\u8C61\u662F\u4E09\u79CD\u4EE5\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u4FDD\u5B58\u3001\u6574\u7406\u548C\u5448\u73B0\u6570\u636E\u7684\u5B58\u50A8\u683C\u5F0F</strong>\u3002\u8FD9\u4E9B\u683C\u5F0F\u5404\u6709\u5404\u7684\u529F\u80FD\u548C\u9650\u5236\u3002</p><ul><li><p>\u6587\u4EF6\u5B58\u50A8\u4F1A\u4EE5<strong>\u6587\u4EF6\u548C\u6587\u4EF6\u5939</strong>\u7684\u5C42\u6B21\u7ED3\u6784\u6765\u6574\u7406\u548C\u5448\u73B0\u6570\u636E\uFF1B</p></li><li><p>\u5757\u5B58\u50A8\u4F1A<strong>\u5C06\u6570\u636E\u62C6\u5206\u5230\u4EFB\u610F\u5212\u5206\u4E14\u5927\u5C0F\u76F8\u540C</strong>\u7684\u5377\u4E2D\uFF1B</p></li><li><p>\u5BF9\u8C61\u5B58\u50A8\u4F1A\u7BA1\u7406\u6570\u636E\u5E76\u5C06\u5176\u94FE\u63A5\u81F3<strong>\u5173\u8054\u7684\u5143\u6570\u636E</strong>\u3002</p></li></ul><p>\u5143\u6570\u636E\u5305\u62EC account\uFF08\u7528\u6237\uFF09\uFF0C bucket\uFF0C bucket index\u7B49\u4FE1\u606F</p></blockquote><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>Minio \u662F\u4E2A\u57FA\u4E8E Golang \u7F16\u5199\u7684\u5F00\u6E90\u5BF9\u8C61\u5B58\u50A8\u5957\u4EF6\uFF0C\u867D\u7136\u8F7B\u91CF\uFF0C\u5374\u62E5\u6709\u7740\u4E0D\u9519\u7684\u6027\u80FD\u3002</p>',4),c={href:"https://min.io/",target:"_blank",rel:"noopener noreferrer"},h=s(`<h3 id="_1-1-\u4F55\u4E3A\u5BF9\u8C61\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F55\u4E3A\u5BF9\u8C61\u5B58\u50A8" aria-hidden="true">#</a> 1.1 \u4F55\u4E3A\u5BF9\u8C61\u5B58\u50A8\uFF1F</h3><p>\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\uFF08Object Storage Service\uFF0COSS\uFF09\u662F\u4E00\u79CD\u6D77\u91CF\u3001\u5B89\u5168\u3001\u4F4E\u6210\u672C\u3001\u9AD8\u53EF\u9760\u7684\u4E91\u5B58\u50A8\u670D\u52A1\uFF0C\u9002\u5408\u5B58\u653E\u4EFB\u610F\u7C7B\u578B\u7684\u6587\u4EF6\u3002\u5BB9\u91CF\u548C\u5904\u7406\u80FD\u529B\u5F39\u6027\u6269\u5C55\uFF0C\u591A\u79CD\u5B58\u50A8\u7C7B\u578B\u4F9B\u9009\u62E9\uFF0C\u5168\u9762\u4F18\u5316\u5B58\u50A8\u6210\u672C\u3002</p><h3 id="_1-2-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7279\u70B9" aria-hidden="true">#</a> 1.2 \u7279\u70B9</h3><ul><li><p>MinIO \u662F\u4E00\u4E2A\u57FA\u4E8EApache License v2.0\u5F00\u6E90\u534F\u8BAE\u7684\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u3002</p></li><li><p>\u5B83\u517C\u5BB9\u4E9A\u9A6C\u900AS3\u4E91\u5B58\u50A8\u670D\u52A1\u63A5\u53E3\uFF0C\u975E\u5E38\u9002\u5408\u4E8E\u5B58\u50A8\u5927\u5BB9\u91CF\u975E\u7ED3\u6784\u5316\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u56FE\u7247\u3001\u89C6\u9891\u3001\u65E5\u5FD7\u6587\u4EF6\u3001\u5907\u4EFD\u6570\u636E\u548C\u5BB9\u5668/\u865A\u62DF\u673A\u955C\u50CF\u7B49\uFF0C\u800C\u4E00\u4E2A\u5BF9\u8C61\u6587\u4EF6\u53EF\u4EE5\u662F\u4EFB\u610F\u5927\u5C0F\uFF0C\u4ECE\u51E0kb\u5230\u6700\u59275T\u4E0D\u7B49\u3002</p></li><li><p>MinIO\u662F\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7684\u670D\u52A1,\u53EF\u4EE5\u5F88\u7B80\u5355\u7684\u548C\u5176\u4ED6\u5E94\u7528\u7684\u7ED3\u5408\uFF0C\u7C7B\u4F3C NodeJS, Redis \u6216\u8005 MySQL\u3002</p></li><li><p>\u5BF9\u4E8E\u4E2D\u5C0F\u578B\u4F01\u4E1A\uFF0C\u5982\u679C\u4E0D\u9009\u62E9\u5B58\u50A8\u4E0A\u4E91\uFF0C\u90A3\u4E48 Minio \u662F\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\uFF0C\u9EBB\u96C0\u867D\u5C0F\uFF0C\u4E94\u810F\u4FF1\u5168\u3002</p></li><li><p>\u5F53\u7136 Minio \u9664\u4E86\u76F4\u63A5\u4F5C\u4E3A\u5BF9\u8C61\u5B58\u50A8\u4F7F\u7528\uFF0C\u8FD8\u53EF\u4EE5\u4F5C\u4E3A\u4E91\u4E0A\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u7684\u7F51\u5173\u5C42\uFF0C\u65E0\u7F1D\u5BF9\u63A5\u5230 Amazon S3\u3001MicroSoft Azure\u3002</p></li></ul><blockquote><p>\u4E9A\u9A6C\u900A\u4E91\u7684 S3 API\uFF08\u63A5\u53E3\u534F\u8BAE\uFF09 \u662F\u5728\u5168\u7403\u8303\u56F4\u5185\u8FBE\u5230\u5171\u8BC6\u7684\u5BF9\u8C61\u5B58\u50A8\u7684\u534F\u8BAE\uFF0C\u662F\u5168\u4E16\u754C\u5185\u5927\u5BB6\u90FD\u8BA4\u53EF\u7684\u6807\u51C6\u3002MinIO \u5728\u5F88\u65E9\u7684\u65F6\u5019\u5C31\u91C7\u7528\u4E86 S3 \u517C\u5BB9\u534F\u8BAE\uFF0C\u5E76\u4E14MinIO \u662F\u7B2C\u4E00\u4E2A\u652F\u6301 S3 Select \u7684\u4EA7\u54C1.</p></blockquote><h2 id="_2-minio-\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_2-minio-\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> 2. MINIO \u57FA\u7840\u6982\u5FF5</h2><p>MINIO \u6709\u51E0\u4E2A\u6982\u5FF5\u6BD4\u8F83\u91CD\u8981:</p><ul><li><p>Object\uFF1A\u5B58\u50A8\u5230 Minio \u7684\u57FA\u672C\u5BF9\u8C61\uFF0C\u5982\u6587\u4EF6\u3001\u5B57\u8282\u6D41\uFF0CAnything\u2026</p></li><li><p>Bucket\uFF1A\u7528\u6765\u5B58\u50A8 Object \u7684\u903B\u8F91\u7A7A\u95F4\u3002\u6BCF\u4E2A Bucket \u4E4B\u95F4\u7684\u6570\u636E\u662F\u76F8\u4E92\u9694\u79BB\u7684\u3002\u5BF9\u4E8E\u5BA2\u6237\u7AEF\u800C\u8A00\uFF0C\u5C31\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5B58\u653E\u6587\u4EF6\u7684\u9876\u5C42\u6587\u4EF6\u5939\u3002</p></li><li><p>Drive\uFF1A\u5373\u5B58\u50A8\u6570\u636E\u7684\u78C1\u76D8\uFF0C\u5728 MinIO \u542F\u52A8\u65F6\uFF0C\u4EE5\u53C2\u6570\u7684\u65B9\u5F0F\u4F20\u5165\u3002Minio \u4E2D\u6240\u6709\u7684\u5BF9\u8C61\u6570\u636E\u90FD\u4F1A\u5B58\u50A8\u5728 Drive \u91CC\u3002</p></li><li><p>Set</p><p>\u5373\u4E00\u7EC4 Drive \u7684\u96C6\u5408\uFF0C\u5206\u5E03\u5F0F\u90E8\u7F72\u6839\u636E\u96C6\u7FA4\u89C4\u6A21\u81EA\u52A8\u5212\u5206\u4E00\u4E2A\u6216\u591A\u4E2A Set \uFF0C\u6BCF\u4E2A Set \u4E2D\u7684 Drive \u5206\u5E03\u5728\u4E0D\u540C\u4F4D\u7F6E\u3002\u4E00\u4E2A\u5BF9\u8C61\u5B58\u50A8\u5728\u4E00\u4E2A Set \u4E0A\u3002\uFF08For example: {1\u202664} is divided into 4 sets each of size 16.\uFF09</p><ul><li><p>\u4E00\u4E2A\u5BF9\u8C61\u5B58\u50A8\u5728\u4E00\u4E2ASet\u4E0A</p></li><li><p>\u4E00\u4E2A\u96C6\u7FA4\u5212\u5206\u4E3A\u591A\u4E2ASet</p></li><li><p>\u4E00\u4E2ASet\u5305\u542B\u7684Drive\u6570\u91CF\u662F\u56FA\u5B9A\u7684\uFF0C\u9ED8\u8BA4\u7531\u7CFB\u7EDF\u6839\u636E\u96C6\u7FA4\u89C4\u6A21\u81EA\u52A8\u8BA1\u7B97\u5F97\u51FA</p></li><li><p>\u4E00\u4E2ASET\u4E2D\u7684Drive\u5C3D\u53EF\u80FD\u5206\u5E03\u5728\u4E0D\u540C\u7684\u8282\u70B9\u4E0A</p></li></ul><blockquote><p>\u4E00\u4E2A\u5BF9\u8C61\u5B58\u50A8\u5728\u4E00\u4E2A Set \u4E0A\u3002</p><p><strong>\u5982\u679C\u67093\u4E2Aset\uFF0C\u90A3\u4E48\u6211\u4EEC\u5B58\u5165\u4E00\u4E2A\u5BF9\u8C61\u3002\u53EF\u80FD\u5728\u67D0\u4E9Bdrive \u78C1\u76D8\u4E0A\u6CA1\u6709\u5B58</strong></p></blockquote></li></ul><h3 id="_2-1-set-drive-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-1-set-drive-\u7684\u5173\u7CFB" aria-hidden="true">#</a> 2.1 Set /Drive \u7684\u5173\u7CFB</h3><p>Set /Drive \u8FD9\u4E24\u4E2A\u6982\u5FF5\u662F MINIO \u91CC\u9762\u6700\u91CD\u8981\u7684\u4E24\u4E2A\u6982\u5FF5\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u6700\u7EC8\u662F\u5B58\u50A8\u5728 Set \u4E0A\u9762\u7684\u3002</p><p>\u6211\u4EEC\u6765\u770B\u4E0B\u8FB9 MINIO \u96C6\u7FA4\u5B58\u50A8\u793A\u610F\u56FE\uFF0C\u6BCF\u4E00\u884C\u662F\u4E00\u4E2A\u8282\u70B9\u673A\u5668\uFF0C\u8FD9\u6709 32 \u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B9\u91CC\u6709\u4E00\u4E2A\u5C0F\u65B9\u5757\u6211\u4EEC\u79F0\u4E4B Drive\uFF0CDrive \u53EF\u4EE5\u7B80\u5355\u5730\u7406\u89E3\u4E3A\u4E00\u4E2A\u786C\u76D8\u3002</p><p>\u56FE\u4E2D\uFF0C\u4E00\u4E2A\u8282\u70B9\u6709 32 \u4E2A Drive\uFF0C\u76F8\u5F53\u4E8E 32 \u5757\u786C\u76D8\u3002</p><p>Set \u662F\u53E6\u5916\u4E00\u4E2A\u6982\u5FF5\uFF0CSet \u662F\u4E00\u7EC4 Drive \u7684\u96C6\u5408\uFF0C\u56FE\u4E2D\uFF0C\u6240\u6709\u84DD\u8272\u3001\u6A59\u8272\u80CC\u666F\u7684Drive\uFF08\u786C\u76D8\uFF09\u7684\u5C31\u7EC4\u6210\u4E86\u4E00\u4E2A Set.</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721211109769.png" alt="image-20220721211109769"></p><h3 id="_2-2-miino\u5982\u4F55\u5199\u5165\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2-2-miino\u5982\u4F55\u5199\u5165\u5BF9\u8C61" aria-hidden="true">#</a> 2.2 MIINO\u5982\u4F55\u5199\u5165\u5BF9\u8C61\uFF1F</h3><p>MINIO \u662F\u901A\u8FC7\u6570\u636E\u7F16\u7801\uFF0C\u5C06\u539F\u6765\u7684\u6570\u636E\u7F16\u7801\u6210 N \u4EFD\uFF0CN \u5C31\u662F\u4E00\u4E2A Set \u4E0A\u9762 Drive \u7684\u6570\u91CF\uFF0C\u540E\u9762\u591A\u6B21\u63D0\u5230\u7684 N \u90FD\u662F\u6307\u8FD9\u4E2A\u610F\u601D\u3002</p><blockquote><p>\u4E0A\u56FE\u4E2D\uFF0C\u4E00\u4E2A Set \u4E0A\u9762 Drive \u7684\u6570\u91CF\uFF0C\u662F3.</p></blockquote><p>\u5BF9\u8C61\u88AB\u7F16\u7801\u6210N\u4EFD\u4E4B\u540E\uFF0C\u628A\u6BCF\u4E00\u4EFD\uFF0C\u5199\u5230\u5BF9\u5E94\u7684 Drive \u4E0A\u9762\uFF0C\u8FD9\u5C31\u662F\u628A\u4E00\u4E2A\u5BF9\u8C61\u5B58\u50A8\u5728\u6574\u4E2A Set \u4E0A\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721211712213.png" alt="image-20220721211712213"></p><p>\u4E00\u4E2A\u96C6\u7FA4\u5305\u542B\u591A\u4E2A Set\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u6700\u7EC8\u5B58\u50A8\u5728\u54EA\u4E2A Set \u4E0A\u662F\u6839\u636E\u5BF9\u8C61\u7684\u540D\u79F0\u8FDB\u884C\u54C8\u5E0C\uFF0C\u7136\u540E\u5F71\u5C04\u5230\u552F\u4E00\u7684 Set \u4E0A\u9762\uFF0C\u8FD9\u4E2A\u65B9\u5F0F\u4ECE\u7406\u8BBA\u4E0A\u4FDD\u8BC1\u6570\u636E\u53EF\u4EE5\u5747\u5300\u7684\u5206\u5E03\u5230\u6240\u6709\u7684 Set \u4E0A\u3002</p><p>\u6839\u636E\u7684\u89C2\u6D4B\uFF0C\u6570\u636E\u5206\u5E03\u7684\u4E5F\u975E\u5E38\u5747\u5300\uFF0C\u4E00\u4E2A Set \u4E0A\u5305\u542B\u591A\u5C11\u4E2A Drive \u662F\u7531\u7CFB\u7EDF\u81EA\u52A8\u6839\u636E\u96C6\u7FA4\u89C4\u6A21\u7B97\u51FA\u6765\u7684\uFF0C\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u53BB\u914D\u7F6E\u3002</p><p>\u4E00\u4E2A Set \u7684 Drive \u7CFB\u7EDF\u4F1A\u8003\u8651\u5C3D\u53EF\u80FD\u628A\u5B83\u653E\u5728\u591A\u7684\u8282\u70B9\u4E0A\u9762\uFF0C\u4FDD\u8BC1\u5B83\u7684\u53EF\u9760\u6027\u3002</p><h2 id="_3-minio\u5B58\u50A8\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_3-minio\u5B58\u50A8\u67B6\u6784" aria-hidden="true">#</a> 3. Minio\u5B58\u50A8\u67B6\u6784</h2><p>Minio\u9488\u5BF9\u4E0D\u540C\u5E94\u7528\u573A\u666F\u4E5F\u8BBE\u7F6E\u4E86\u5BF9\u5E94\u7684\u5B58\u50A8\u67B6\u6784\uFF1A</p><h3 id="_3-1-\u5355\u4E3B\u673A-\u5355\u786C\u76D8\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5355\u4E3B\u673A-\u5355\u786C\u76D8\u6A21\u5F0F" aria-hidden="true">#</a> 3.1 \u5355\u4E3B\u673A\uFF0C\u5355\u786C\u76D8\u6A21\u5F0F</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721212134078.png" alt="image-20220721212134078"></p><p>\u8BE5\u6A21\u5F0F\u4E0B\uFF0CMinio\u53EA\u5728\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u642D\u5EFA\u670D\u52A1\uFF0C\u4E14\u6570\u636E\u90FD\u5B58\u5728\u5355\u5757\u78C1\u76D8\u4E0A\uFF0C\u8BE5\u6A21\u5F0F\u5B58\u5728\u5355\u70B9\u98CE\u9669\uFF0C\u4E3B\u8981\u7528\u4F5C\u5F00\u53D1\u3001\u6D4B\u8BD5\u7B49\u4F7F\u7528</p><h4 id="_3-1-1-\u542F\u52A8\u7684\u547D\u4EE4\u4E3A" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u542F\u52A8\u7684\u547D\u4EE4\u4E3A" aria-hidden="true">#</a> 3.1.1 \u542F\u52A8\u7684\u547D\u4EE4\u4E3A\uFF1A</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>minio --config-dir ~/tenant1 server <span class="token parameter variable">--address</span> :9001 /disk1/data/tenant1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-\u5355\u4E3B\u673A-\u591A\u786C\u76D8\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5355\u4E3B\u673A-\u591A\u786C\u76D8\u6A21\u5F0F" aria-hidden="true">#</a> 3.2 \u5355\u4E3B\u673A\uFF0C\u591A\u786C\u76D8\u6A21\u5F0F</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721212316800.png" alt="image-20220721212316800"></p><p>\u8BE5\u6A21\u5F0F\u4E0B\uFF0CMinio\u5728\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u642D\u5EFA\u670D\u52A1\uFF0C\u4F46\u6570\u636E\u5206\u6563\u5728\u591A\u5757\uFF08\u5927\u4E8E4\u5757\uFF09\u78C1\u76D8\u4E0A\uFF0C\u63D0\u4F9B\u4E86\u6570\u636E\u4E0A\u7684\u5B89\u5168\u4FDD\u969C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>minio --config-dir ~/tenant1 server <span class="token parameter variable">--address</span> :9001 /disk1/data/tenant1 /disk2/data/tenant1 /disk3/data/tenant1 /disk4/data/enant1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-\u591A\u4E3B\u673A\u3001\u591A\u786C\u76D8\u6A21\u5F0F-\u5206\u5E03\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-3-\u591A\u4E3B\u673A\u3001\u591A\u786C\u76D8\u6A21\u5F0F-\u5206\u5E03\u5F0F" aria-hidden="true">#</a> 3.3 \u591A\u4E3B\u673A\u3001\u591A\u786C\u76D8\u6A21\u5F0F\uFF08\u5206\u5E03\u5F0F\uFF09</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721212406208.png" alt="image-20220721212406208"></p><p>\u8BE5\u6A21\u5F0F\u662FMinio\u670D\u52A1\u6700\u5E38\u7528\u7684\u67B6\u6784\uFF0C\u901A\u8FC7\u5171\u4EAB\u4E00\u4E2Aaccess_key\u548Csecret_key,\u5728\u591A\u53F0\uFF082-32\uFF09\u670D\u52A1\u5668\u4E0A\u642D\u5EFA\u670D\u52A1\uFF0C\u4E14\u6570\u636E\u5206\u6563\u5728\u591A\u5757\uFF08\u5927\u4E8E4\u5757\uFF0C\u65E0\u4E0A\u9650\uFF09\u78C1\u76D8\u4E0A\uFF0C\u63D0\u4F9B\u4E86\u8F83\u4E3A\u5F3A\u5927\u7684\u6570\u636E\u5197\u4F59\u673A\u5236\uFF08Reed-Solomon\u7EA0\u5220\u7801\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_ACCESS_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>TENANT1_ACCESS_KEY<span class="token operator">&gt;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_SECRET_KEY</span><span class="token operator">=</span><span class="token operator">&lt;</span>TENANT1_SECRET_KEY<span class="token operator">&gt;</span>
minio --config-dir ~/tenant1 server <span class="token parameter variable">--address</span> :9001 http://192.168.10.11/data/tenant1 http://192.168.10.12/data/tenant1 http://192.168.10.13/data/tenant1 http://192.168.10.14/data/tenant1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5206\u5E03\u5F0Fminio\u6709\u4EC0\u4E48\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_4-\u5206\u5E03\u5F0Fminio\u6709\u4EC0\u4E48\u597D\u5904" aria-hidden="true">#</a> 4. \u5206\u5E03\u5F0FMinio\u6709\u4EC0\u4E48\u597D\u5904?</h2><p>\u5728\u5927\u6570\u636E\u9886\u57DF\uFF0C\u901A\u5E38\u7684\u8BBE\u8BA1\u7406\u5FF5\u90FD\u662F\u65E0\u4E2D\u5FC3\u548C\u5206\u5E03\u5F0F\u3002Minio\u5206\u5E03\u5F0F\u6A21\u5F0F\u53EF\u4EE5\u5E2E\u52A9\u4F60\u642D\u5EFA\u4E00\u4E2A\u9AD8\u53EF\u7528\u7684\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u5B58\u50A8\u8BBE\u5907\uFF0C\u800C\u4E0D\u7528\u8003\u8651\u5176\u771F\u5B9E\u7269\u7406\u4F4D\u7F6E\u3002</p><h3 id="_4-1-\u6570\u636E\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6570\u636E\u4FDD\u62A4" aria-hidden="true">#</a> 4.1 \u6570\u636E\u4FDD\u62A4</h3><p>\u5206\u5E03\u5F0FMinio\u91C7\u7528 \u7EA0\u5220\u7801\u6765\u9632\u8303\u591A\u4E2A\u8282\u70B9\u5B95\u673A\u548C\u4F4D\u8870\u51CFbit rot\u3002</p><p>\u5206\u5E03\u5F0FMinio\u81F3\u5C11\u9700\u89814\u4E2A\u786C\u76D8\uFF0C\u4F7F\u7528\u5206\u5E03\u5F0FMinio\u81EA\u52A8\u5F15\u5165\u4E86\u7EA0\u5220\u7801\u529F\u80FD\u3002</p><h3 id="_4-2-\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#_4-2-\u9AD8\u53EF\u7528" aria-hidden="true">#</a> 4.2 \u9AD8\u53EF\u7528</h3><p>\u5355\u673AMinio\u670D\u52A1\u5B58\u5728\u5355\u70B9\u6545\u969C\uFF0C\u76F8\u53CD\uFF0C\u5982\u679C\u662F\u4E00\u4E2A\u6709N\u5757\u786C\u76D8\u7684\u5206\u5E03\u5F0FMinio, \u53EA\u8981\u6709N/2\u786C\u76D8\u5728\u7EBF\uFF0C\u4F60\u7684\u6570\u636E\u5C31\u662F\u5B89\u5168\u7684\u3002</p><p>\u4E0D\u8FC7\u4F60\u9700\u8981\u81F3\u5C11\u6709N/2+1\u4E2A\u786C\u76D8\u6765\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\u3002</p><p>\u4F8B\u5982\uFF0C\u4E00\u4E2A16\u8282\u70B9\u7684Minio\u96C6\u7FA4\uFF0C\u6BCF\u4E2A\u8282\u70B916\u5757\u786C\u76D8\uFF0C\u5C31\u7B978\u53F0\u670D\u52D9\u5668\u5B95\u673A\uFF0C\u8FD9\u4E2A\u96C6\u7FA4\u4ECD\u7136\u662F\u53EF\u8BFB\u7684\uFF0C\u4E0D\u8FC7\u4F60\u9700\u89819\u53F0\u670D\u52D9\u5668\u624D\u80FD\u5199\u6570\u636E\u3002</p><p>\u6CE8\u610F\uFF0C\u53EA\u8981\u9075\u5B88\u5206\u5E03\u5F0FMinio\u7684\u9650\u5236\uFF0C\u4F60\u53EF\u4EE5\u7EC4\u5408\u4E0D\u540C\u7684\u8282\u70B9\u548C\u6BCF\u4E2A\u8282\u70B9\u51E0\u5757\u786C\u76D8\u3002</p><p>\u6BD4\u5982\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u75282\u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B94\u5757\u786C\u76D8\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u75284\u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B9\u4E24\u5757\u786C\u76D8\uFF0C\u8BF8\u5982\u6B64\u7C7B\u3002</p><h3 id="_4-3-\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4E00\u81F4\u6027" aria-hidden="true">#</a> 4.3 \u4E00\u81F4\u6027</h3><p>Minio\u5728\u5206\u5E03\u5F0F\u548C\u5355\u673A\u6A21\u5F0F\u4E0B\uFF0C\u6240\u6709\u8BFB\u5199\u64CD\u4F5C\u90FD\u4E25\u683C\u9075\u5B88<strong>read-after-write</strong>\u4E00\u81F4\u6027\u6A21\u578B\u3002</p><h2 id="_5-minio\u7684\u6570\u636E\u9AD8\u53EF\u9760" tabindex="-1"><a class="header-anchor" href="#_5-minio\u7684\u6570\u636E\u9AD8\u53EF\u9760" aria-hidden="true">#</a> 5. MinIO\u7684\u6570\u636E\u9AD8\u53EF\u9760</h2><p>Minio\u4F7F\u7528\u4E86<strong>Erasure Code \u7EA0\u5220\u7801</strong>\u548C <strong>Bit Rot Protection \u6570\u636E\u8150\u5316\u4FDD\u62A4</strong>\u8FD9\u4E24\u4E2A\u7279\u6027\uFF0C\u6240\u4EE5MinIO\u7684\u6570\u636E\u53EF\u9760\u6027\u505A\u7684\u9AD8\u3002</p><h3 id="_5-1-erasure-code\u7EA0\u5220\u7801" tabindex="-1"><a class="header-anchor" href="#_5-1-erasure-code\u7EA0\u5220\u7801" aria-hidden="true">#</a> 5.1 Erasure Code\u7EA0\u5220\u7801</h3><p><strong>\u7EA0\u5220\u7801\uFF08Erasure Code\uFF09\u7B80\u79F0EC\uFF0C\u662F\u4E00\u79CD\u6570\u636E\u4FDD\u62A4\u65B9\u6CD5\uFF0C\u5B83\u5C06\u6570\u636E\u5206\u5272\u6210\u7247\u6BB5\uFF0C\u628A\u5197\u4F59\u6570\u636E\u5757\u6269\u5C55\u3001\u7F16\u7801\uFF0C\u5E76\u5C06\u5176\u5B58\u50A8\u5728\u4E0D\u540C\u7684\u4F4D\u7F6E\uFF0C\u6BD4\u5982\u78C1\u76D8\u3001\u5B58\u50A8\u8282\u70B9\u6216\u8005\u5176\u5B83\u5730\u7406\u4F4D\u7F6E</strong>\u3002</p><p>\u4ECE\u6570\u636E\u51FD\u6570\u89D2\u5EA6\u6765\u8BF4\uFF0C\u7EA0\u5220\u7801\u63D0\u4F9B\u7684\u4FDD\u62A4\u53EF\u4EE5\u7528\u4E0B\u9762\u8FD9\u4E2A\u7B80\u5355\u7684\u516C\u5F0F\u6765\u8868\u793A\uFF1An = k + m\u3002</p><ul><li>\u53D8\u91CF\u201Ck\u201D\u4EE3\u8868\u539F\u59CB\u6570\u636E\u6216\u7B26\u53F7\u7684\u503C</li><li>\u53D8\u91CF\u201Cm\u201D\u4EE3\u8868\u6545\u969C\u540E\u6DFB\u52A0\u7684\u63D0\u4F9B\u4FDD\u62A4\u7684\u989D\u5916\u6216\u5197\u4F59\u7B26\u53F7\u7684\u503C\u3002</li><li>\u53D8\u91CF\u201Cn\u201D\u4EE3\u8868\u7EA0\u5220\u7801\u8FC7\u7A0B\u540E\u521B\u5EFA\u7684\u7B26\u53F7\u7684\u603B\u503C\u3002</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBEn=16\uFF0C\u4EE3\u8868\u670916\u5757\u78C1\u76D8\uFF0C\u53E6\u5916\uFF0C\u670910\u4EFD\u539F\u59CB\u6587\u4EF6\u4E00\u6A21\u4E00\u6837\uFF0C\u79F0\u4E3Ak\uFF0C16 = 10 +m\uFF0C\u8FD9\u4E2Am\u5C31\u662F\u53EF\u4EE5\u6062\u590D\u7684\u6821\u9A8C\u5757\u4E2A\u6570\uFF0C\u6240\u4EE5m\u662F6\uFF0C\u4EFB\u610F6\u4E2A\u4E0D\u53EF\u7528\uFF0C\u539F\u59CB\u6587\u4EF6\u90FD\u53EF\u4EE5\u6062\u590D\uFF0C\u6781\u7AEF\u60C5\u51B5\uFF0C10\u4E2A\u539F\u59CB\u6587\u4EF6\u574F\u63896\u4E2A\uFF0C\u97604\u4E2A\u539F\u59CB\u7684\u52A0\u4E0A6\u4E2A\u6821\u9A8C\u5757\uFF0C\u53EF\u4EE5\u628A\u574F\u6389\u76846\u4E2A\u539F\u59CB\u6587\u4EF6\u6062\u590D\uFF0C\u8FD9\u4E2A\u7528\u5230\u6570\u5B66\u884C\u5217\u5F0F\u77E9\u9635\u77E5\u8BC6\uFF0C\u4E0D\u505A\u5C55\u5F00\u3002</p><blockquote><p>MinIO\u7684\u7F16\u7801\u65B9\u5F0F\uFF0C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u7F16\u7801\u6210\u82E5\u5E72\u4E2A\u6570\u636E\u5757\u548C\u6821\u9A8C\u5757\uFF0C\u6211\u4EEC\u7B80\u79F0\u4E3AErasure Code\u7801\uFF0C\u8FD9\u4E2A\u662F\u7F16\u7801\u7684\u7C7B\u578B\uFF0C\u8FD9\u79CD\u7F16\u7801\u7684\u7C7B\u578B\uFF0C\u8FD8\u9700\u8981\u7B97\u6CD5\u6765\u5B9E\u73B0\uFF0Cminio \u91C7\u7528\u7684\u662F Reed-Solomon\u7B97\u6CD5\u3002</p></blockquote><p>MinIO\u4F7F\u7528Reed-Solomon\u7B97\u6CD5\uFF0C\u8BE5\u7B97\u6CD5\u628A\u5BF9\u8C61\u7F16\u7801\u6210\u82E5\u5E72\u4E2A\u6570\u636E\u5757\u548C\u6821\u9A8C\u5757\u3002</p><p>Reed-Solomon\u7B97\u6CD5\u7684\u7279\u70B9\uFF1A</p><ul><li><p>\u4F4E\u5197\u4F59</p></li><li><p>\u9AD8\u53EF\u9760</p></li></ul><p>\u4E3A\u4E86\u8868\u8FF0\u65B9\u4FBF\uFF0C\u628A\u6570\u636E\u5757\u548C\u6821\u9A8C\u5757\u7EDF\u79F0\u4E3A\u7F16\u7801\u5757\uFF0C\u4E4B\u540E\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7F16\u7801\u5757\u7684\u4E00\u90E8\u5206\u5C31\u80FD\u8FD8\u539F\u51FA\u6574\u4E2A\u5BF9\u8C61\u3002</p><h3 id="_5-2-reed-solomon-code" tabindex="-1"><a class="header-anchor" href="#_5-2-reed-solomon-code" aria-hidden="true">#</a> 5.2 Reed-Solomon code</h3><p>Reed-Solomon \u662F\u7EA0\u5220\u7801\u7684\u5B9E\u73B0\u7B97\u6CD5\u7684\u4E00\u79CD\uFF0C\u5F53\u7136\uFF0C\u4E5F\u662F\u4E00\u79CD\u6062\u590D\u4E22\u5931\u548C\u635F\u574F\u6570\u636E\u7684\u6570\u5B66\u7B97\u6CD5\uFF0C</p><p><strong>Minio\u9ED8\u8BA4\u91C7\u7528Reed-Solomon code\u5C06\u6570\u636E\u62C6\u5206\u6210N/2\u4E2A\u6570\u636E\u5757\u548CN/2\u4E2A\u5947\u5076\u6821\u9A8C\u5757\u3002</strong></p><p>\u8FD9\u5C31\u610F\u5473\u7740\u5982\u679C\u662F16\u5757\u76D8\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u4F1A\u88AB\u5206\u62108\u4E2A\u6570\u636E\u5757\u30018\u4E2A\u5947\u5076\u6821\u9A8C\u5757\uFF0C\u4F60\u53EF\u4EE5\u4E22\u5931\u4EFB\u610F8\u5757\u76D8\uFF08\u4E0D\u7BA1\u5176\u662F\u5B58\u653E\u7684\u6570\u636E\u5757\u8FD8\u662F\u6821\u9A8C\u5757\uFF09\uFF0C\u4F60\u4ECD\u53EF\u4EE5\u4ECE\u5269\u4E0B\u7684\u76D8\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u6062\u590D\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721213946979.png" alt="image-20220721213946979"></p><p>\u5982\u4E0A\u56FE\uFF0C\u5982\u6211\u4EEC\u6240\u77E5\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u5B58\u50A8\u5728\u4E00\u4E2ASet\u4E0A\u9762\uFF0C\u8FD9\u4E2ASet\u5305\u542B16\u4E2ADrive\uFF0C\u5176\u4E2D\u7070\u8272\u7684\u4E00\u534A\u662F\u6570\u636E\u5757\uFF0C\u6A59\u8272\u7684\u4E00\u534A\u662F\u6821\u9A8C\u5757\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u6700\u591A\u80FD\u5FCD\u53D7\u4E00\u534A\u7684\u7F16\u7801\u4E22\u5931\u6216\u635F\u574F\u3002</p><p><strong>\u6240\u6709\u7F16\u7801\u5757\u7684\u5927\u5C0F\u662F\u539F\u5BF9\u8C61\u76842\u500D\uFF0C\u8DDF\u4F20\u7EDF\u591A\u526F\u672C\u5B58\u50A8\u65B9\u6848\u76F8\u6BD4\uFF0C\u4ED6\u53EA\u5197\u4F59\u5B58\u4E86\u4E00\u4EFD\uFF0C\u4F46\u53EF\u9760\u6027\u66F4\u9AD8\u3002</strong></p><h4 id="_5-2-1-\u53EF\u9760\u6027\u4F53\u73B0" tabindex="-1"><a class="header-anchor" href="#_5-2-1-\u53EF\u9760\u6027\u4F53\u73B0" aria-hidden="true">#</a> 5.2.1 \u53EF\u9760\u6027\u4F53\u73B0</h4><ul><li><p>\u7EA0\u5220\u7801\u7684\u5DE5\u4F5C\u539F\u7406\u548CRAID\u6216\u8005\u526F\u672C\u4E0D\u540C\uFF0C\u50CFRAID6\u53EA\u80FD\u5728\u635F\u5931\u4E24\u5757\u76D8\uFF0C\u6216\u8005\u4EE5\u4E0B\u7684\u60C5\u51B5\u4E0B\u4E0D\u4E22\u6570\u636E\uFF0C\u800C<strong>Minio\u7EA0\u5220\u7801\u53EF\u4EE5\u5728\u4E22\u5931\u4E00\u534A\u7684\u76D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4ECD\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u5B89\u5168</strong>\u3002</p></li><li><p>\u800C\u4E14<strong>Minio\u7EA0\u5220\u7801\u662F\u4F5C\u7528\u5728\u5BF9\u8C61\u7EA7\u522B\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6062\u590D\u4E00\u4E2A\u5BF9\u8C61</strong>\uFF0C\u800CRAID\u662F\u4F5C\u7528\u5728\u5377\u7EA7\u522B\uFF0C\u6570\u636E\u6062\u590D\u65F6\u95F4\u5F88\u957F\u3002</p></li><li><p>Minio\u5BF9\u6BCF\u4E2A\u5BF9\u8C61\u5355\u72EC\u7F16\u7801\uFF0C\u5B58\u50A8\u670D\u52A1\u4E00\u7ECF\u90E8\u7F72\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u662F\u4E0D\u9700\u8981\u66F4\u6362\u786C\u76D8\u6216\u8005\u4FEE\u590D\u3002</p></li><li><p>\u6B64\u5916\uFF0C\u9488\u5BF9\u4E0D\u540C\u5E94\u7528\u6240\u9700\u7684\u6570\u636E\u5B89\u5168\u7EA7\u522B\u4E0D\u540C\uFF0CMinio\u8FD8\u63D0\u4F9B\u4E86\u5B58\u50A8\u7EA7\u522B\uFF08Storage Class\uFF09\u7684\u914D\u7F6E\uFF0C\u8C03\u6574\u6570\u636E\u5757\u548C\u6821\u9A8C\u5757\u7684\u6BD4\u4F8B\uFF0C\u505A\u5230\u5BF9\u7A7A\u95F4\u7684\u6700\u4F73\u4F7F\u7528\u3002</p></li></ul><h4 id="_5-2-2-\u5B58\u50A8\u7A7A\u95F4\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#_5-2-2-\u5B58\u50A8\u7A7A\u95F4\u8BA1\u7B97" aria-hidden="true">#</a> 5.2.2 \u5B58\u50A8\u7A7A\u95F4\u8BA1\u7B97</h4><blockquote><p>\u6821\u9A8C\u5757\u7684\u6570\u91CF\u51B3\u5B9A\u53EF\u635F\u574F\u7684\u78C1\u76D8\u6570\uFF0C\u53EF\u4EE5\u635F\u574F\u66F4\u591A\u7684\u78C1\u76D8\uFF0C\u90A3\u4E48\u610F\u5473\u7740\u8981\u66F4\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><p>\u6700\u591A\u4E00\u534A\u7684\u6821\u9A8C\u7801\uFF0C\u75282\u500D\u5B58\u50A8</p></blockquote><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721214657092.png" alt="image-20220721214657092"></p><p>\u6BD4\u5982\u5728\u5C06\u6BD4\u4F8B\u8C03\u6574\u4E3A14:2\u540E\uFF0C\u5B58\u50A8100M\u7684\u6570\u636E\u5360\u7528\u7684\u7A7A\u95F4\u4EC5\u4E3A114M\u3002</p><h3 id="_5-3-bit-rot-protection" tabindex="-1"><a class="header-anchor" href="#_5-3-bit-rot-protection" aria-hidden="true">#</a> 5.3 Bit Rot Protection\uFF1A</h3><p>\u63A5\u4E0B\u6765\u8BB2Bit Rot Protection\uFF0C\u76F4\u8BD1\u5C31\u662F\u8150\u70C2\u3002</p><p>\u5B83\u53EA\u662F\u7269\u7406\u8BBE\u5907\u4E0A\u7684\u4E00\u4E9B\u6587\u4EF6\u7EC6\u5FAE\u7684\u635F\u574F\uFF0C\u8FD8\u6CA1\u6709\u88AB\u64CD\u4F5C\u7CFB\u7EDF\u6240\u786C\u4EF6\u6240\u5BDF\u89C9\uFF0C\u4F46\u662F\u4ED6\u5DF2\u7ECF\u635F\u574F\u4E86\u3002</p><p>Bit Rot \u4F4D\u8870\u51CF\u53C8\u88AB\u79F0\u4E3A<strong>\u6570\u636E\u8150\u5316Data Rot</strong>\u3001<strong>\u65E0\u58F0\u6570\u636E\u635F\u574FSilent Data Corruption</strong>,</p><blockquote><p>\u4F4D\u8870\u51CF\u53EF\u4EE5\u7406\u89E3\u4E3A\u65E0\u5F62\u4E2D\u7684\u6570\u636E\u4E22\u5931\u2014\u2014\u6216\u8005\u79F0\u4E3A\u201CBit rot\u201D, \u662F\u6307\u7269\u7406\u5B58\u50A8\u4ECB\u8D28\u7684\u8870\u51CF\u6240\u5E26\u6765\u7684\u9690\u60A3\u5C06\u51F8\u663E\u51FA\u6765\u3002</p></blockquote><p>\u4F4D\u8870\u51CF\u662F\u76EE\u524D\u786C\u76D8\u6570\u636E\u7684\u4E00\u79CD\u4E25\u91CD\u6570\u636E\u4E22\u5931\u95EE\u9898\u3002</p><p>\u786C\u76D8\u4E0A\u7684\u6570\u636E\u53EF\u80FD\u4F1A\u795E\u4E0D\u77E5\u9B3C\u4E0D\u89C9\u5C31\u635F\u574F\u4E86\uFF0C\u4E5F\u6CA1\u6709\u4EC0\u4E48\u9519\u8BEF\u65E5\u5FD7\u3002</p><p>\u4E00\u9879\u5BF9150\u4E07\u5757\u786C\u76D8\u7684\u7814\u7A76\u8868\u660E\uFF0C\u6BCF90\u5757\u786C\u76D8\u5C31\u67091\u5757\u6709\u8FD9\u79CD\u201C\u8F6F\u9519\u8BEF\u201D\uFF0C\u8FD9\u4E2A\u9519\u8BEF\u4E0D\u4F46\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\uFF0C\u8FD8\u4F1A\u5BFC\u81F4RAID\u9519\u8BEF\u3002</p><p>\u9488\u5BF9\u8FD9\u4E00\u95EE\u9898\uFF0C\u6700\u65B0\u7684Minio\u91C7\u7528\u4E86HighwayHash\u7B97\u6CD5\u8BA1\u7B97\u6821\u9A8C\u548C\u6765\u9632\u8303\u4F4D\u8870\u51CF\uFF0C\u6839\u636E\u6D4B\u8BD5\u7ED3\u679C\uFF0C\u5176\u53EF\u4EE5\u5B9E\u73B010GB/s\u7684\u5904\u7406\u901F\u5EA6\u3002</p><p><strong>\u5927\u81F4\u7684\u505A\u6CD5\u662F\uFF1A</strong></p><blockquote><p>MinIO\u628A\u4E4B\u524D\u7684\u7F16\u7801\u5757\u8FDB\u884C HighwayHash \u7F16\u7801\uFF0C\u6700\u540E\u8981\u6821\u9A8C\u8FD9\u4E2A\u7F16\u7801\uFF0C\u4EE5\u786E\u4FDD\u6BCF\u4E2A\u7F16\u7801\u662F\u6B63\u786E\u7684\u3002</p></blockquote><h3 id="_5-4-\u6587\u4EF6\u7684\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#_5-4-\u6587\u4EF6\u7684\u4FEE\u590D" aria-hidden="true">#</a> 5.4 \u6587\u4EF6\u7684\u4FEE\u590D</h3><p>\u53E6\u5916\uFF0CMinIO\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5BF9\u6240\u6709\u7F16\u7801\u5757\u8FDB\u884C\u6821\u9A8C\uFF0C\u5982\u679C\u53D1\u73B0\u7F16\u7801\u5757\u6709\u95EE\u9898\uFF0C\u518D\u53BB\u4FEE\u590D\u5B83\u3002</p><p>\u5F97\u76CA\u4E8EReed-Solomon\u7EA0\u5220\u7801\uFF0CMinio\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\u7684\u5BF9\u6587\u4EF6\u8FDB\u884C\u4FEE\u590D\u3002</p><p>\u76EE\u524D\uFF0CMinio\u63D0\u4F9B\u4E86\u5168\u91CF\u3001bucket\u3001\u6587\u4EF6\u5939\u3001\u6587\u4EF6\u7B49\u5404\u4E2A\u7C92\u5EA6\u7684\u4FEE\u590D\u64CD\u4F5C\uFF1A</p><p>\u9012\u5F52\u4FEE\u590D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mc</span> admin heal <span class="token parameter variable">-r</span> myminio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6307\u5B9A\u6876\u4FEE\u590D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mc</span> admin heal <span class="token parameter variable">-r</span> myminio/dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u51E0\u4E2A\u4F8B\u5B50\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721215704818.png" alt="image-20220721215704818"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721215724700.png" alt="image-20220721215724700"></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220721215753800.png" alt="image-20220721215753800"></p><p>\u76F8\u6BD4\u4E00\u822C\u7684RAID\u65B9\u5F0F\uFF0CMinio\u53EF\u4EE5\u5728\u975E\u5E38\u5C0F\u7684\u7C92\u5EA6\u4E0B\u5BF9\u6587\u4EF6\u8FDB\u884C\u4FEE\u590D\u64CD\u4F5C\uFF0C\u7075\u6D3B\u6027\u6709\u4E86\u5F88\u5927\u63D0\u9AD8\u3002</p><p>\u4FEE\u590D\u540E\uFF0C\u53EF\u4EE5JSON\u683C\u5F0F\u5217\u51FA\u6307\u5B9A\u8DEF\u5F84\uFF08\u6587\u4EF6\u3001\u5927\u5C0F\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mc</span> <span class="token function">ls</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--json</span> myminio/dev

<span class="token punctuation">{</span>
 <span class="token string">&quot;status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;success&quot;</span>,
 <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;file&quot;</span>,
 <span class="token string">&quot;lastModified&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2019-05-30T09:43:07.763-04:00&quot;</span>,
 <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">44996289</span>,
 <span class="token string">&quot;key&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;myFile&quot;</span>,
 <span class="token string">&quot;etag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bae58dc18zzzzz54c14e233b520e0a&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,102),u={href:"https://blog.csdn.net/crazymakercircle/article/details/120855464",target:"_blank",rel:"noopener noreferrer"};function m(g,b){const i=p("ExternalLinkIcon");return o(),r("div",null,[d,e("p",null,[a("\u5B98\u7F51\u5730\u5740\uFF1A"),e("a",c,[a("MinIO | High Performance, Kubernetes Native Object Storage"),n(i)])]),h,e("p",null,[e("a",u,[a("minio \u9AD8\u53EF\u7528 \uFF08\u539F\u7406+\u79D2\u61C2+\u53F2\u4E0A\u6700\u5168\uFF09"),n(i)])])])}const _=t(l,[["render",m],["__file","minio-concept.html.vue"]]);export{_ as default};
