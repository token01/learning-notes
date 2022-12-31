import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as t,a as e,b as a,d as r,f as n,r as h}from"./app.e7bdeba6.js";const s={},c=n('<h1 id="minio\u57FA\u7840-minio\u7EA0\u5220\u7801" tabindex="-1"><a class="header-anchor" href="#minio\u57FA\u7840-minio\u7EA0\u5220\u7801" aria-hidden="true">#</a> Minio\u57FA\u7840 - Minio\u7EA0\u5220\u7801</h1><blockquote><p>Minio\u4F7F\u7528\u7EA0\u5220\u7801<code>erasure code</code>\u548C\u6821\u9A8C\u548C<code>checksum</code>\u6765\u4FDD\u62A4\u6570\u636E\u514D\u53D7\u786C\u4EF6\u6545\u969C\u548C\u65E0\u58F0\u6570\u636E\u635F\u574F\u3002 \u5373\u4FBF\u60A8\u4E22\u5931\u4E00\u534A\u6570\u91CF\uFF08N/2\uFF09\u7684\u786C\u76D8\uFF0C\u60A8\u4ECD\u7136\u53EF\u4EE5\u6062\u590D\u6570\u636E\u3002</p></blockquote><h2 id="_1-\u4EC0\u4E48\u662F\u7EA0\u5220\u7801erasure-code" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u7EA0\u5220\u7801erasure-code" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u7EA0\u5220\u7801<code>erasure code</code>\uFF1F</h2><p><strong>\u7EA0\u5220\u7801\u662F\u4E00\u79CD\u6062\u590D\u4E22\u5931\u548C\u635F\u574F\u6570\u636E\u7684\u6570\u5B66\u7B97\u6CD5\uFF0C Minio\u91C7\u7528Reed-Solomon code\u5C06\u5BF9\u8C61\u62C6\u5206\u6210N/2\u6570\u636E\u548CN/2 \u5947\u5076\u6821\u9A8C\u5757</strong>\u3002 \u8FD9\u5C31\u610F\u5473\u7740\u5982\u679C\u662F12\u5757\u76D8\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u4F1A\u88AB\u5206\u62106\u4E2A\u6570\u636E\u5757\u30016\u4E2A\u5947\u5076\u6821\u9A8C\u5757\uFF0C\u4F60\u53EF\u4EE5\u4E22\u5931\u4EFB\u610F6\u5757\u76D8\uFF08\u4E0D\u7BA1\u5176\u662F\u5B58\u653E\u7684\u6570\u636E\u5757\u8FD8\u662F\u5947\u5076\u6821\u9A8C\u5757\uFF09\uFF0C\u4F60\u4ECD\u53EF\u4EE5\u4ECE\u5269\u4E0B\u7684\u76D8\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u6062\u590D</p><h2 id="_2-\u4E3A\u4EC0\u4E48\u7EA0\u5220\u7801\u6709\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u7EA0\u5220\u7801\u6709\u7528" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u7EA0\u5220\u7801\u6709\u7528?</h2><p>\u7EA0\u5220\u7801\u7684\u5DE5\u4F5C\u539F\u7406\u548CRAID\u6216\u8005\u590D\u5236\u4E0D\u540C\uFF0C\u50CFRAID6\u53EF\u4EE5\u5728\u635F\u5931\u4E24\u5757\u76D8\u7684\u60C5\u51B5\u4E0B\u4E0D\u4E22\u6570\u636E</p><ul><li><p>\u800CMinio\u7EA0\u5220\u7801\u53EF\u4EE5\u5728\u4E22\u5931\u4E00\u534A\u7684\u76D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4ECD\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u5B89\u5168\u3002</p></li><li><p>\u800C\u4E14Minio\u7EA0\u5220\u7801\u662F\u4F5C\u7528\u5728\u5BF9\u8C61\u7EA7\u522B\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6062\u590D\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800CRAID\u662F\u4F5C\u7528\u5728\u5377\u7EA7\u522B\uFF0C\u6570\u636E\u6062\u590D\u65F6\u95F4\u5F88\u957F\u3002</p><p>Minio\u5BF9\u6BCF\u4E2A\u5BF9\u8C61\u5355\u72EC\u7F16\u7801\uFF0C\u5B58\u50A8\u670D\u52A1\u4E00\u7ECF\u90E8\u7F72\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u662F\u4E0D\u9700\u8981\u66F4\u6362\u786C\u76D8\u6216\u8005\u4FEE\u590D\u3002Minio\u7EA0\u5220\u7801\u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u4E3A\u4E86\u6027\u80FD\u548C\u5C3D\u53EF\u80FD\u7684\u4F7F\u7528\u786C\u4EF6\u52A0\u901F\u3002</p></li></ul><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220715111328603.png" alt="image-20220715111328603"></p><h2 id="_3-\u4EC0\u4E48\u662F\u4F4D\u8870\u51CFbit-rot\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#_3-\u4EC0\u4E48\u662F\u4F4D\u8870\u51CFbit-rot\u4FDD\u62A4" aria-hidden="true">#</a> 3. \u4EC0\u4E48\u662F\u4F4D\u8870\u51CF<code>bit rot</code>\u4FDD\u62A4?</h2>',9),l=e("code",null,"Data Rot",-1),p=e("code",null,"Silent Data Corruption",-1),m={href:"https://github.com/minio/highwayhash",target:"_blank",rel:"noopener noreferrer"},u=n('<h2 id="_4-\u66F4\u6DF1\u5165\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_4-\u66F4\u6DF1\u5165\u7684\u7406\u89E3" aria-hidden="true">#</a> 4. \u66F4\u6DF1\u5165\u7684\u7406\u89E3</h2><h3 id="_4-1-\u6570\u636E\u5197\u4F59\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6570\u636E\u5197\u4F59\u6280\u672F" aria-hidden="true">#</a> 4.1 \u6570\u636E\u5197\u4F59\u6280\u672F</h3><p><strong>\u526F\u672C\u7B56\u7565</strong>\u548C<strong>\u7EA0\u5220\u7801</strong>\u662F\u5B58\u50A8\u9886\u57DF\u5E38\u89C1\u7684\u4E24\u79CD\u6570\u636E\u5197\u4F59\u6280\u672F\u3002\u76F8\u6BD4\u4E8E\u526F\u672C\u7B56\u7565\uFF0C\u7EA0\u5220\u7801\u5177\u6709\u66F4\u9AD8\u7684\u78C1\u76D8\u5229\u7528\u7387\u3002 Reed-Solomon\u7801\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u7EA0\u5220\u7801\u3002</p><h4 id="_4-1-1-\u7EA0\u5220\u7801-erasure-code" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u7EA0\u5220\u7801-erasure-code" aria-hidden="true">#</a> 4.1.1 \u7EA0\u5220\u7801 Erasure Code</h4><p>Erasure Code\u662F\u4E00\u79CD\u7F16\u7801\u6280\u672F\uFF0C\u5B83\u53EF\u4EE5\u5C06n\u4EFD\u539F\u59CB\u6570\u636E\uFF0C\u589E\u52A0m\u4EFD\u6570\u636E\uFF0C\u5E76\u80FD\u901A\u8FC7n+m\u4EFD\u4E2D\u7684\u4EFB\u610Fn\u4EFD\u6570\u636E\uFF0C\u8FD8\u539F\u4E3A\u539F\u59CB\u6570\u636E\u3002\u5373\u5982\u679C\u6709\u4EFB\u610F\u5C0F\u4E8E\u7B49\u4E8Em\u4EFD\u7684\u6570\u636E\u5931\u6548\uFF0C\u4ECD\u7136\u80FD\u901A\u8FC7\u5269\u4E0B\u7684\u6570\u636E\u8FD8\u539F\u51FA\u6765\u3002</p><p>\u7EA0\u5220\u7801\u6280\u672F\u5728\u5206\u5E03\u5F0F\u5B58\u50A8 \u7CFB\u7EDF\u4E2D\u7684\u5E94\u7528\u4E3B\u8981\u6709\u4E09\u7C7B\uFF0C</p><ul><li>\u9635\u5217\u7EA0\u5220\u7801\uFF08Array Code: RAID5\u3001RAID6\u7B49\uFF09</li><li><strong>RS(Reed-Solomon)\u91CC\u5FB7-\u6240\u7F57\u95E8\u7C7B\u7EA0\u5220\u7801</strong></li><li>LDPC(LowDensity Parity Check Code)\u4F4E\u5BC6\u5EA6\u5947\u5076\u6821\u9A8C\u7EA0\u5220\u7801\u3002 LDPC\u7801\u76EE\u524D\u4E3B\u8981\u7528\u4E8E\u901A\u4FE1\u3001\u89C6\u9891\u548C\u97F3\u9891\u7F16\u7801\u7B49\u9886\u57DF\u3002</li></ul><p>\u7EA0\u5220\u7801\u6280\u672F\u4E3B\u8981\u662F\u901A\u8FC7\u7EA0\u5220\u7801\u7B97\u6CD5\u5C06\u539F\u59CB\u7684\u6570\u636E\u8FDB\u884C\u7F16\u7801\u5F97\u5230\u5197\u4F59\uFF0C\u5E76\u5C06\u6570\u636E\u548C\u5197\u4F59\u4E00\u5E76\u5B58\u50A8\u8D77\u6765\uFF0C\u4EE5\u8FBE\u5230\u5BB9\u9519\u7684\u76EE\u7684\u3002<strong>\u5176\u57FA\u672C\u601D\u60F3\u662F\u5C06n\u5757\u539F\u59CB\u7684\u6570\u636E\u5143\u7D20\u901A\u8FC7\u4E00\u5B9A\u7684\u8BA1\u7B97\uFF0C\u5F97\u5230m\u5757\u5197\u4F59\u5143\u7D20\uFF08\u6821\u9A8C\u5757\uFF09\u3002\u5BF9\u4E8E\u8FD9n+m\u5757\u7684\u5143\u7D20\uFF0C\u5F53\u5176\u4E2D\u4EFB\u610F\u7684m\u5757\u5143\u7D20\u51FA\u9519\uFF08\u5305\u62EC\u539F\u59CB\u6570\u636E\u548C\u5197\u4F59\u6570\u636E\uFF09\u65F6\uFF0C\u5747\u53EF\u4EE5\u901A\u8FC7\u5BF9\u5E94\u7684\u91CD\u6784\u7B97\u6CD5\u6062\u590D\u51FA\u539F\u6765\u7684n\u5757\u6570\u636E</strong>\u3002</p><ul><li>\u751F\u6210\u6821\u9A8C\u7684\u8FC7\u7A0B\u88AB\u6210\u4E3A\u7F16\u7801\uFF08encoding\uFF09</li><li>\u6062\u590D\u4E22\u5931\u6570\u636E\u5757\u7684\u8FC7\u7A0B\u88AB\u79F0\u4E3A\u89E3\u7801\uFF08decoding\uFF09\u3002\u78C1\u76D8\u5229\u7528\u7387\u4E3An/(n+m)\u3002</li></ul><p>\u57FA\u4E8E\u7EA0\u5220\u7801\u7684\u65B9\u6CD5\u4E0E\u591A\u526F\u672C\u65B9\u6CD5\u76F8\u6BD4\u5177\u6709\u5197\u4F59\u5EA6\u4F4E\u3001\u78C1\u76D8\u5229\u7528\u7387\u9AD8\u7B49\u4F18\u70B9\u3002</p><h4 id="_4-1-2-\u591A\u526F\u672C\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u591A\u526F\u672C\u7B56\u7565" aria-hidden="true">#</a> 4.1.2 \u591A\u526F\u672C\u7B56\u7565</h4><p>\u591A\u526F\u672C\u7B56\u7565\u5373\u5C06\u6570\u636E\u5B58\u50A8\u591A\u4E2A\u526F\u672C\uFF08\u4E00\u822C\u662F\u4E09\u526F\u672C\uFF0C\u6BD4\u5982HDFS\uFF09\uFF0C\u5F53\u67D0\u4E2A\u526F\u672C\u4E22\u5931\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5176\u4ED6\u526F\u672C\u590D\u5236\u56DE\u6765\u3002\u4E09\u526F\u672C\u7684\u78C1\u76D8\u5229\u7528\u7387\u4E3A1/3\u3002</p><h4 id="_4-1-3-\u4E24\u79CD\u5197\u4F59\u6280\u672F\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u4E24\u79CD\u5197\u4F59\u6280\u672F\u5BF9\u6BD4" aria-hidden="true">#</a> 4.1.3 \u4E24\u79CD\u5197\u4F59\u6280\u672F\u5BF9\u6BD4</h4><table><thead><tr><th>\u4E24\u79CD\u6280\u672F</th><th>\u78C1\u76D8\u5229\u7528\u7387</th><th>\u8BA1\u7B97\u5F00\u9500</th><th>\u7F51\u7EDC\u6D88\u8017</th><th>\u6062\u590D\u6548\u7387</th></tr></thead><tbody><tr><td>\u591A\u526F\u672C(3\u526F\u672C)</td><td>1/3</td><td>\u51E0\u4E4E\u6CA1\u6709</td><td>\u8F83\u4F4E</td><td>\u8F83\u9AD8</td></tr><tr><td>\u7EA0\u5220\u7801(n+m)</td><td>n/(n+m)</td><td>\u9AD8</td><td>\u8F83\u9AD8</td><td>\u8F83\u4F4E</td></tr></tbody></table><blockquote><p>\u5DE5\u7A0B\u5B9E\u8DF5\u4E2D\uFF0C<strong>\u4E00\u822C\u5BF9\u4E8E\u70ED\u6570\u636E\u8FD8\u662F\u4F1A\u4F7F\u7528\u591A\u526F\u672C\u7B56\u7565\u6765\u5197\u4F59\uFF0C\u51B7\u6570\u636E\u4F7F\u7528\u7EA0\u5220\u7801</strong>\u3002</p></blockquote><h3 id="_4-2-reed-solomon-rs-\u7801" tabindex="-1"><a class="header-anchor" href="#_4-2-reed-solomon-rs-\u7801" aria-hidden="true">#</a> 4.2 Reed-Solomon(RS)\u7801</h3><p>Reed-Solomon\uFF08RS\uFF09\u7801\u662F\u5B58\u50A8\u7CFB\u7EDF\u8F83\u4E3A\u5E38\u7528\u7684\u4E00\u79CD\u7EA0\u5220\u7801\uFF0C\u5B83\u6709\u4E24\u4E2A\u53C2\u6570n\u548Cm\uFF0C\u8BB0\u4E3ARS(n,m)\u3002n\u4EE3\u8868\u539F\u59CB\u6570\u636E\u5757\u4E2A\u6570\u3002m\u4EE3\u8868\u6821\u9A8C\u5757\u4E2A\u6570\u3002\u63A5\u4E0B\u6765\u4ECB\u7ECDRS\u7801\u7684\u539F\u7406\u3002</p><h4 id="_4-2-1-rs\u7801\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_4-2-1-rs\u7801\u539F\u7406" aria-hidden="true">#</a> 4.2.1 RS\u7801\u539F\u7406</h4><p>\u4EE5n=5\uFF0Cm=3\u4E3A\u4F8B\u3002\u53735\u4E2A\u539F\u59CB\u6570\u636E\u5757\uFF0C\u4E58\u4E0A\u4E00\u4E2A(n+m)*n\u7684\u77E9\u9635\uFF0C\u7136\u540E\u5F97\u51FA\u4E00\u4E2A(n+m)*1\u7684\u77E9\u9635\u3002\u6839\u636E\u77E9\u9635\u7279\u70B9\u53EF\u4EE5\u5F97\u77E5\u7ED3\u679C\u77E9\u9635\u4E2D\u524D\u97625\u4E2A\u503C\u4E0E\u539F\u6765\u76845\u4E2A\u6570\u636E\u5757\u7684\u503C\u76F8\u7B49\uFF0C\u800C\u6700\u540E3\u4E2A\u5219\u662F\u8BA1\u7B97\u51FA\u6765\u7684\u6821\u9A8C\u5757\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220715143632700.png" alt="image-20220715143632700"></p><p>\u4EE5\u4E0A\u8FC7\u7A0B\u4E3A\u7F16\u7801\u8FC7\u7A0B\u3002D\u662F\u539F\u59CB\u6570\u636E\u5757\uFF0C\u5F97\u5230\u7684C\u4E3A\u6821\u9A8C\u5757\u3002</p><h4 id="_4-2-2-\u4E22\u5931\u4E86m\u5757\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-2-2-\u4E22\u5931\u4E86m\u5757\u6570\u636E" aria-hidden="true">#</a> 4.2.2 \u4E22\u5931\u4E86m\u5757\u6570\u636E</h4><p>\u5047\u8BBE\u4E22\u5931\u4E86m\u5757\u6570\u636E\u3002\u5982\u4E0B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220715143811177.png" alt="image-20220715143811177"></p><p>\u90A3\u6211\u4EEC\u5982\u4F55\u4ECE\u5269\u4F59\u7684n\u4E2A\u6570\u636E\u5757\uFF08\u6CE8\u610F\uFF0C\u8FD9\u91CC\u5269\u4F59\u7684n\u5757\u53EF\u80FD\u5305\u542B\u51E0\u4E2A\u539F\u59CB\u6570\u636E\u5757+\u51E0\u4E2A\u6821\u9A8C\u5757\uFF09\u6062\u590D\u51FA\u6765\u539F\u59CB\u7684n\u4E2A\u6570\u636E\u5757\u5462\uFF0C\u5C31\u9700\u8981\u901A\u8FC7\u4E0B\u9762\u7684decoding\uFF08\u89E3\u7801\uFF09\u8FC7\u7A0B\u6765\u5B9E\u73B0\u3002</p><h5 id="_4-2-2-1-\u7B2C\u4E00\u6B65-\u5220\u9664\u4E22\u5931\u7684\u884C" tabindex="-1"><a class="header-anchor" href="#_4-2-2-1-\u7B2C\u4E00\u6B65-\u5220\u9664\u4E22\u5931\u7684\u884C" aria-hidden="true">#</a> 4.2.2.1 \u7B2C\u4E00\u6B65\uFF1A\u5220\u9664\u4E22\u5931\u7684\u884C</h5><p>\u7B2C\u4E00\u6B65\uFF1A\u4ECE\u7F16\u7801\u77E9\u9635\u4E2D\u5220\u53BB\u4E22\u5931\u6570\u636E\u5757\u548C\u4E22\u5931\u7F16\u7801\u5757\u5BF9\u5E94\u884C\u3002 \u5C06\u5220\u6389m\u4E2A\u5757\u7684(n+m)<em>1\u4E2A\u77E9\u9635\u53D8\u5F62\u4E3An</em>1\u77E9\u9635\uFF0C\u540C\u65F6B\u77E9\u9635\u4E5F\u9700\u8981\u5220\u6389\u5BF9\u5E94\u7684m\u4E2A\u884C\u5F97\u51FA\u4E00\u4E2AB&#39;\u7684\u53D8\u5F62\u77E9\u9635\uFF0C\u8FD9\u4E2AB&#39;\u5C31\u662Fn*n\u77E9\u9635\u3002\u5982\u4E0B\uFF1A\u5047\u8BBED1\u3001D4\u3001C2\u4E22\u5931\uFF0C\u6211\u4EEC\u5F97\u5230\u5982\u4E0BB\u2019\u77E9\u9635\u53CA\u7B49\u5F0F\u3002</p><h5 id="_4-2-2-2-\u7B2C\u4E8C\u6B65-\u6C42\u51FAb-\u7684\u9006\u77E9\u9635\u3002" tabindex="-1"><a class="header-anchor" href="#_4-2-2-2-\u7B2C\u4E8C\u6B65-\u6C42\u51FAb-\u7684\u9006\u77E9\u9635\u3002" aria-hidden="true">#</a> 4.2.2.2 \u7B2C\u4E8C\u6B65\uFF1A\u6C42\u51FAB\u2019\u7684\u9006\u77E9\u9635\u3002</h5><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220715144222171.png" alt="image-20220715144222171"></p><h5 id="_4-2-2-3-\u7B2C\u4E09\u6B65-\u7B49\u5F0F\u4E24\u8FB9\u5206\u522B\u4E58\u4E0Ab-\u7684\u9006\u77E9\u9635\u3002" tabindex="-1"><a class="header-anchor" href="#_4-2-2-3-\u7B2C\u4E09\u6B65-\u7B49\u5F0F\u4E24\u8FB9\u5206\u522B\u4E58\u4E0Ab-\u7684\u9006\u77E9\u9635\u3002" aria-hidden="true">#</a> 4.2.2.3 \u7B2C\u4E09\u6B65\uFF1A\u7B49\u5F0F\u4E24\u8FB9\u5206\u522B\u4E58\u4E0AB\u2019\u7684\u9006\u77E9\u9635\u3002</h5><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220715144253191.png" alt="image-20220715144253191"></p><p>B\u2019\u548C\u5B83\u7684\u9006\u77E9\u9635\u76F8\u4E58\u5F97\u5230\u5355\u4F4D\u77E9\u9635I\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220715144311947.png" alt="image-20220715144311947"></p><p>\u5DE6\u8FB9\u53EA\u5269\u4E0B\u539F\u59CB\u6570\u636E\u77E9\u9635D\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220715144327852.png" alt="image-20220715144327852"></p><p>\u81F3\u6B64\u5B8C\u6210\u89E3\u7801\u8FC7\u7A0B\u3002</p><p>\u6CE8\uFF1A\u56FE\u4E2D\u9EC4\u8272\u90E8\u5206\u4E3A\u8303\u5FB7\u8499\u77E9\u9635\u3002\u81F3\u4E8E\u5982\u4F55\u751F\u6210B\u77E9\u9635\uFF0C\u4EE5\u53CA\u5982\u4F55\u6C42B\u2019\u7684\u9006\u77E9\u9635\uFF0C\u8BF7\u67E5\u770B\u5176\u4ED6\u76F8\u5173\u6587\u732E\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0\u3002</p><h4 id="_4-2-3-rs\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-2-3-rs\u7684\u7279\u70B9" aria-hidden="true">#</a> 4.2.3 RS\u7684\u7279\u70B9</h4><ul><li>\u4F4E\u5197\u4F59\u5EA6\uFF0C\u9AD8\u78C1\u76D8\u5229\u7528\u7387\u3002</li><li>\u6570\u636E\u6062\u590D\u4EE3\u4EF7\u9AD8\u3002 \u4E22\u5931\u6570\u636E\u5757\u6216\u8005\u7F16\u7801\u5757\u65F6\uFF0C RS\u9700\u8981\u8BFB\u53D6n\u4E2A\u6570\u636E\u5757\u548C\u6821\u9A8C\u5757\u624D\u80FD\u6062\u590D\u6570\u636E\uFF0C \u6570\u636E\u6062\u590D\u6548\u7387\u4E5F\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5236\u7EA6\u4E86RS\u7684\u53EF\u9760\u6027\u3002</li><li>\u6570\u636E\u66F4\u65B0\u4EE3\u4EF7\u9AD8\u3002 \u6570\u636E\u66F4\u65B0\u76F8\u5F53\u4E8E\u91CD\u65B0\u7F16\u7801\uFF0C \u4EE3\u4EF7\u5F88\u9AD8\uFF0C \u56E0\u6B64\u5E38\u5E38\u9488\u5BF9\u53EA\u8BFB\u6570\u636E\uFF0C\u6216\u8005\u51B7\u6570\u636E\u3002</li></ul><h3 id="_4-3-\u7EA0\u5220\u7801\u4F18-\u52A3\u52BF" tabindex="-1"><a class="header-anchor" href="#_4-3-\u7EA0\u5220\u7801\u4F18-\u52A3\u52BF" aria-hidden="true">#</a> 4.3 \u7EA0\u5220\u7801\u4F18/\u52A3\u52BF</h3><h4 id="_4-3-1-\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_4-3-1-\u4F18\u52BF" aria-hidden="true">#</a> 4.3.1 \u4F18\u52BF</h4><p>\u7EA0\u5220\u7801\u6280\u672F\u4F5C\u4E3A\u4E00\u95E8\u6570\u636E\u4FDD\u62A4\u6280\u672F\uFF0C\u81EA\u7136\u6709\u8BB8\u591A\u7684\u4F18\u52BF\uFF0C\u9996\u5148\u53EF\u4EE5\u89E3\u51B3\u7684\u5C31\u662F\u76EE\u524D\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u4E91\u8BA1\u7B97\u4E2D\u91C7\u7528\u526F\u672C\u6765\u9632\u6B62\u6570\u636E\u7684\u4E22\u5931\u3002\u526F\u672C\u673A\u5236\u786E\u5B9E\u53EF\u4EE5\u89E3\u51B3\u6570\u636E\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u7FFB\u500D\u7684\u6570\u636E\u5B58\u50A8\u7A7A\u95F4\u4E5F\u5FC5\u7136\u8981\u88AB\u6D88\u8017\uFF0C\u8FD9\u4E00\u70B9\u5374\u662F\u975E\u5E38\u81F4\u547D\u7684\u3002EC\u6280\u672F\u7684\u8FD0\u7528\u5C31\u53EF\u4EE5\u76F4\u63A5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><h4 id="_4-3-2-\u52A3\u52BF" tabindex="-1"><a class="header-anchor" href="#_4-3-2-\u52A3\u52BF" aria-hidden="true">#</a> 4.3.2 \u52A3\u52BF</h4><p>EC\u6280\u672F\u7684\u4F18\u52BF\u786E\u5B9E\u660E\u663E\uFF0C\u4F46\u662F\u4ED6\u7684\u4F7F\u7528\u4E5F\u662F\u9700\u8981\u4E00\u4E9B\u4EE3\u4EF7\u7684\uFF0C\u4E00\u65E6\u6570\u636E\u9700\u8981\u6062\u590D\uFF0C\u4ED6\u4F1A\u9020\u62102\u5927\u8D44\u6E90\u7684\u6D88\u8017:</p><ol><li>\u7F51\u7EDC\u5E26\u5BBD\u7684\u6D88\u8017\uFF0C\u56E0\u4E3A\u6570\u636E\u6062\u590D\u9700\u8981\u53BB\u8BFB\u5176\u4ED6\u7684\u6570\u636E\u5757\u548C\u6821\u9A8C\u5757</li><li>\u8FDB\u884C\u7F16\u7801\uFF0C\u89E3\u7801\u8BA1\u7B97\u9700\u8981\u6D88\u8017CPU\u8D44\u6E90</li></ol><p>\u5C31\u662F\u65E2\u8017\u7F51\u7EDC\u53C8\u8017CPU</p><h3 id="_4-3-3-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-3-3-\u603B\u7ED3" aria-hidden="true">#</a> 4.3.3 \u603B\u7ED3</h3><p>\u6700\u597D\u7684\u9009\u62E9\u662F\u7528\u4E8E\u51B7\u6570\u636E\u96C6\u7FA4\uFF0C\u6709\u4E0B\u97622\u70B9\u539F\u56E0\u53EF\u4EE5\u652F\u6301\u8FD9\u79CD\u9009\u62E9</p><ol><li>\u51B7\u6570\u636E\u96C6\u7FA4\u5F80\u5F80\u6709\u5927\u91CF\u7684\u957F\u671F\u6CA1\u6709\u88AB\u8BBF\u95EE\u7684\u6570\u636E\uFF0C\u4F53\u91CF\u786E\u5B9E\u5F88\u5927\uFF0C\u91C7\u7528EC\u6280\u672F\uFF0C\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u526F\u672C\u6570</li><li>\u51B7\u6570\u636E\u96C6\u7FA4\u57FA\u672C\u7A33\u5B9A\uFF0C\u8017\u8D44\u6E90\u91CF\u5C11\uFF0C\u6240\u4EE5\u4E00\u65E6\u8FDB\u884C\u6570\u636E\u6062\u590D\uFF0C\u5C06\u4E0D\u4F1A\u5BF9\u96C6\u7FA4\u9020\u6210\u5927\u7684\u5F71\u54CD</li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',50),_={href:"http://docs.minio.org.cn/docs/master/minio-erasure-code-quickstart-guide",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.jianshu.com/p/acf0f392bac9",target:"_blank",rel:"noopener noreferrer"};function b(f,x){const i=h("ExternalLinkIcon");return d(),t("div",null,[c,e("p",null,[a("\u4F4D\u8870\u51CF\u53C8\u88AB\u79F0\u4E3A\u6570\u636E\u8150\u5316"),l,a("\u3001\u65E0\u58F0\u6570\u636E\u635F\u574F"),p,a(",\u662F\u76EE\u524D\u786C\u76D8\u6570\u636E\u7684\u4E00\u79CD\u4E25\u91CD\u6570\u636E\u4E22\u5931\u95EE\u9898\u3002\u786C\u76D8\u4E0A\u7684\u6570\u636E\u53EF\u80FD\u4F1A\u795E\u4E0D\u77E5\u9B3C\u4E0D\u89C9\u5C31\u635F\u574F\u4E86\uFF0C\u4E5F\u6CA1\u6709\u4EC0\u4E48\u9519\u8BEF\u65E5\u5FD7\u3002\u6B63\u6240\u8C13\u660E\u67AA\u6613\u8EB2\uFF0C\u6697\u7BAD\u96BE\u9632\uFF0C\u8FD9\u79CD\u80CC\u5730\u91CC\u72AF\u7684\u9519\u6BD4\u786C\u76D8\u76F4\u63A5\u5494\u5494\u5B95\u4E86\u8FD8\u5371\u9669\u3002 \u4E0D\u8FC7\u4E0D\u7528\u6015\uFF0CMinio\u7EA0\u5220\u7801\u91C7\u7528\u4E86\u9AD8\u901F "),e("a",m,[a("HighwayHash"),r(i)]),a(" \u57FA\u4E8E\u54C8\u5E0C\u7684\u6821\u9A8C\u548C\u6765\u9632\u8303\u4F4D\u8870\u51CF\u3002")]),u,e("p",null,[e("a",_,[a("Minio\u7EA0\u5220\u7801\u5FEB\u901F\u5165\u95E8"),r(i)])]),e("p",null,[e("a",g,[a("\u7EA0\u5220\u7801Erasure Coding \uFF08\u5206\u5E03\u5F0F\u5B58\u50A8\u7CFB\u7EDF\uFF09"),r(i)])])])}const S=o(s,[["render",b],["__file","minio-erasure-code.html.vue"]]);export{S as default};
