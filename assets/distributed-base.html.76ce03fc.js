import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,f as s}from"./app.206d958e.js";const n={},i=s('<h1 id="\u5206\u5E03\u5F0F\u7406\u8BBA-base" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u7406\u8BBA-base" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u7406\u8BBA-BASE</h1><blockquote><p>BASE\u662F\u201CBasically Available, Soft state, Eventually consistent(\u57FA\u672C\u53EF\u7528\u3001\u8F6F\u72B6\u6001\u3001\u6700\u7EC8\u4E00\u81F4\u6027)\u201D\u7684\u9996\u5B57\u6BCD\u7F29\u5199\u3002\u5176\u4E2D\u7684\u8F6F\u72B6\u6001\u548C\u6700\u7EC8\u4E00\u81F4\u6027\u8FD9\u4E24\u79CD\u6280\u5DE7\u64C5\u4E8E\u5BF9\u4ED8\u5B58\u5728\u5206\u533A\u7684\u573A\u5408\uFF0C\u5E76\u56E0\u6B64\u63D0\u9AD8\u4E86\u53EF\u7528\u6027</p></blockquote><h2 id="_1-\u4EC0\u4E48\u662Fbase" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fbase" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662FBASE</h2><blockquote><p>eBay \u7684\u67B6\u6784\u5E08 Dan Pritchett \u6E90\u4E8E\u5BF9\u5927\u89C4\u6A21\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u5B9E\u8DF5\u603B\u7ED3\uFF0C\u5728 ACM \u4E0A\u53D1\u8868\u6587\u7AE0\u63D0\u51FA BASE \u7406\u8BBA\uFF0CBASE \u7406\u8BBA\u662F\u5BF9 CAP \u7406\u8BBA\u7684\u5EF6\u4F38\uFF0C<strong>\u6838\u5FC3\u601D\u60F3\u662F\u5373\u4F7F\u65E0\u6CD5\u505A\u5230\u5F3A\u4E00\u81F4\u6027\uFF08Strong Consistency\uFF0CCAP \u7684\u4E00\u81F4\u6027\u5C31\u662F\u5F3A\u4E00\u81F4\u6027\uFF09\uFF0C\u4F46\u5E94\u7528\u53EF\u4EE5\u91C7\u7528\u9002\u5408\u7684\u65B9\u5F0F\u8FBE\u5230\u6700\u7EC8\u4E00\u81F4\u6027\uFF08Eventual Consitency\uFF09\u3002</strong></p></blockquote><ol><li><strong>Basically Available</strong>\uFF08\u57FA\u672C\u53EF\u7528\uFF09\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5728\u51FA\u73B0\u4E0D\u53EF\u9884\u77E5\u6545\u969C\u7684\u65F6\u5019\uFF0C\u5141\u8BB8\u635F\u5931\u90E8\u5206\u53EF\u7528\u6027</li><li><strong>Soft state</strong>\uFF08\u8F6F\u72B6\u6001\uFF09\u8F6F\u72B6\u6001\u4E5F\u79F0\u4E3A\u5F31\u72B6\u6001\uFF0C\u548C\u786C\u72B6\u6001\u76F8\u5BF9\uFF0C\u662F\u6307\u5141\u8BB8\u7CFB\u7EDF\u4E2D\u7684\u6570\u636E\u5B58\u5728\u4E2D\u95F4\u72B6\u6001\uFF0C\u5E76\u8BA4\u4E3A\u8BE5\u4E2D\u95F4\u72B6\u6001\u7684\u5B58\u5728\u4E0D\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u7684\u6574\u4F53\u53EF\u7528\u6027\uFF0C\u5373\u5141\u8BB8\u7CFB\u7EDF\u5728\u4E0D\u540C\u8282\u70B9\u7684\u6570\u636E\u526F\u672C\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u540C\u6B65\u7684\u8FC7\u7A0B\u5B58\u5728\u5EF6\u65F6\u3002</li><li><strong>Eventually consistent</strong>\uFF08\u6700\u7EC8\u4E00\u81F4\u6027\uFF09\u6700\u7EC8\u4E00\u81F4\u6027\u5F3A\u8C03\u7684\u662F\u7CFB\u7EDF\u4E2D\u6240\u6709\u7684\u6570\u636E\u526F\u672C\uFF0C\u5728\u7ECF\u8FC7\u4E00\u6BB5\u65F6\u95F4\u7684\u540C\u6B65\u540E\uFF0C\u6700\u7EC8\u80FD\u591F\u8FBE\u5230\u4E00\u4E2A\u4E00\u81F4\u7684\u72B6\u6001\u3002\u56E0\u6B64\uFF0C\u6700\u7EC8\u4E00\u81F4\u6027\u7684\u672C\u8D28\u662F\u9700\u8981\u7CFB\u7EDF\u4FDD\u8BC1\u6700\u7EC8\u6570\u636E\u80FD\u591F\u8FBE\u5230\u4E00\u81F4\uFF0C\u800C\u4E0D\u9700\u8981\u5B9E\u65F6\u4FDD\u8BC1\u7CFB\u7EDF\u6570\u636E\u7684\u5F3A\u4E00\u81F4\u6027</li></ol><h2 id="_2-cap-\u4E0E-base-\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-cap-\u4E0E-base-\u5173\u7CFB" aria-hidden="true">#</a> 2. CAP \u4E0E BASE \u5173\u7CFB</h2><p>BASE\u662F\u5BF9CAP\u4E2D\u4E00\u81F4\u6027\u548C\u53EF\u7528\u6027\u6743\u8861\u7684\u7ED3\u679C\uFF0C\u5176\u6765\u6E90\u4E8E\u5BF9\u5927\u89C4\u6A21\u4E92\u8054\u7F51\u7CFB\u7EDF\u5206\u5E03\u5F0F\u5B9E\u8DF5\u7684\u7ED3\u8BBA\uFF0C\u662F\u57FA\u4E8ECAP\u5B9A\u7406\u9010\u6B65\u6F14\u5316\u800C\u6765\u7684\uFF0C\u5176\u6838\u5FC3\u601D\u60F3\u662F\u5373\u4F7F\u65E0\u6CD5\u505A\u5230\u5F3A\u4E00\u81F4\u6027\uFF08Strong consistency\uFF09\uFF0C\u66F4\u5177\u4F53\u5730\u8BF4\uFF0C\u662F\u5BF9 CAP \u4E2D AP \u65B9\u6848\u7684\u4E00\u4E2A\u8865\u5145\u3002\u5176\u57FA\u672C\u601D\u8DEF\u5C31\u662F\uFF1A\u901A\u8FC7\u4E1A\u52A1\uFF0C\u727A\u7272\u5F3A\u4E00\u81F4\u6027\u800C\u83B7\u5F97\u53EF\u7528\u6027\uFF0C\u5E76\u5141\u8BB8\u6570\u636E\u5728\u4E00\u6BB5\u65F6\u95F4\u5185\u662F\u4E0D\u4E00\u81F4\u7684\uFF0C\u4F46\u662F\u6700\u7EC8\u8FBE\u5230\u4E00\u81F4\u6027\u72B6\u6001\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202212241415602.png" alt="image.png"></p><h2 id="_3-cap-\u4E0E-acid-\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_3-cap-\u4E0E-acid-\u5173\u7CFB" aria-hidden="true">#</a> 3. CAP \u4E0E ACID \u5173\u7CFB</h2><p>ACID \u662F\u4F20\u7EDF\u6570\u636E\u5E93\u5E38\u7528\u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u8FFD\u6C42\u5F3A\u4E00\u81F4\u6027\u6A21\u578B\u3002BASE \u652F\u6301\u7684\u662F\u5927\u578B\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u63D0\u51FA\u901A\u8FC7\u727A\u7272\u5F3A\u4E00\u81F4\u6027\u83B7\u5F97\u9AD8\u53EF\u7528\u6027\u3002</p><p>ACID \u548C BASE \u4EE3\u8868\u4E86\u4E24\u79CD\u622A\u7136\u76F8\u53CD\u7684\u8BBE\u8BA1\u54F2\u5B66\uFF0C\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u8BBE\u8BA1\u7684\u573A\u666F\u4E2D\uFF0C\u7CFB\u7EDF\u7EC4\u4EF6\u5BF9\u4E00\u81F4\u6027\u8981\u6C42\u662F\u4E0D\u540C\u7684\uFF0C\u56E0\u6B64 ACID \u548C BASE \u53C8\u4F1A\u7ED3\u5408\u4F7F\u7528\u3002</p>',11),o=[i];function c(r,l){return e(),t("div",null,o)}const p=a(n,[["render",c],["__file","distributed-base.html.vue"]]);export{p as default};
