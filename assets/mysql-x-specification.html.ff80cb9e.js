import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as i,a as e,b as r,d,f as l,r as t}from"./app.047e4de1.js";const o={},c=l(`<h1 id="mysql-mysql\u4F7F\u7528\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#mysql-mysql\u4F7F\u7528\u89C4\u8303" aria-hidden="true">#</a> MySQL - MySQL\u4F7F\u7528\u89C4\u8303</h1><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221014231941357.png" alt="image-20221014231941357"></p><blockquote><p>16\u6761MySQL\u4F7F\u7528\u89C4\u8303\uFF0C\u51CF\u5C1180%\u95EE\u9898.</p><p>\u5408\u7406\u89C4\u8303\u7684\u4F7F\u7528MySQL\uFF0C\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u5F00\u53D1\u5DE5\u4F5C\u91CF\u548C\u7EBF\u4E0A\u95EE\u9898\uFF0C\u5E76\u63D0\u5347SQL\u67E5\u8BE2\u6027\u80FD\u3002</p></blockquote><h2 id="_1-\u7981\u6B62\u4F7F\u7528select" tabindex="-1"><a class="header-anchor" href="#_1-\u7981\u6B62\u4F7F\u7528select" aria-hidden="true">#</a> <strong>1. \u7981\u6B62\u4F7F\u7528select *</strong></h2><p>\u963F\u91CC\u5F00\u53D1\u89C4\u8303\u4E2D\uFF0C\u6709\u8FD9\u4E48\u4E00\u53E5\u8BDD\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221014230752999.png" alt="image-20221014230752999"></p><p><strong>select *</strong> \u4F1A\u67E5\u8BE2\u8868\u4E2D\u6240\u6709\u5B57\u6BB5\uFF0C\u5982\u679C\u8868\u4E2D\u7684\u5B57\u6BB5\u6709\u66F4\u6539\uFF0C\u5FC5\u987B\u4FEE\u6539SQL\u8BED\u53E5\uFF0C\u4E0D\u7136\u5C31\u4F1A\u6267\u884C\u9519\u8BEF\u3002</p><p>\u67E5\u8BE2\u51FA\u975E\u5FC5\u8981\u7684\u5B57\u6BB5\uFF0C\u5F92\u589E\u78C1\u76D8IO\u548C\u7F51\u7EDC\u5EF6\u8FDF\u3002</p><h2 id="_2-\u7528\u5C0F\u8868\u9A71\u52A8\u5927\u8868" tabindex="-1"><a class="header-anchor" href="#_2-\u7528\u5C0F\u8868\u9A71\u52A8\u5927\u8868" aria-hidden="true">#</a> <strong>2. \u7528\u5C0F\u8868\u9A71\u52A8\u5927\u8868</strong></h2><p>\u5173\u8054\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u5148\u7528\u5C0F\u8868\u67E5\u5230\u7ED3\u679C\uFF0C\u518D\u7528\u7ED3\u679C\u53BB\u5927\u8868\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u8FDE\u63A5\u6B21\u6570\u3002</p><p>\u6BD4\u5982\u6211\u4EEC\u8981\u67E5\u8BE2\u67D0\u4E2A\u90E8\u95E8\u4E0B\u7684\u5458\u5DE5\uFF0C\u7531\u4E8E\u90E8\u95E8\u6570\u91CF\u8FDC\u8FDC\u5C0F\u4E8E\u5458\u5DE5\u6570\u91CF\u3002\u6211\u4EEC\u53EF\u4EE5\u628A\u90E8\u95E8\u8868\u5F53\u4F5C\u9A71\u52A8\u8868\uFF0C\u5458\u5DE5\u8868\u5F53\u4F5C\u88AB\u9A71\u52A8\u8868\u3002</p><p>\u67E5\u8BE2SQL\u7C7B\u4F3C\u8FD9\u6837\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from department
inner join employee
on department.id=employee.department_id
where department_name=&#39;\u90E8\u95E81&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-join\u5173\u8054\u8868\u4E0D\u5B9C\u8FC7\u591A" tabindex="-1"><a class="header-anchor" href="#_3-join\u5173\u8054\u8868\u4E0D\u5B9C\u8FC7\u591A" aria-hidden="true">#</a> <strong>3. join\u5173\u8054\u8868\u4E0D\u5B9C\u8FC7\u591A</strong></h2><p>join\u5173\u8054\u8868\u7981\u6B62\u8D85\u8FC73\u5F20\uFF0Cjoin\u5173\u8054\u8FC7\u591A\uFF0C\u4E0D\u4F46\u4F1A\u589E\u52A0\u67E5\u8BE2\u65F6\u95F4\uFF0C\u964D\u4F4E\u67E5\u8BE2\u6027\u80FD\uFF0C\u8FD8\u4F1A\u4EA7\u751F\u4E34\u65F6\u8868\u7F13\u5B58\u7ED3\u679C\u6570\u636E\uFF0C\u63A8\u8350\u62C6\u6210\u591A\u6761\u5C0FSQL\u6267\u884C\u3002</p><p>\u53E6\u5916\u5173\u8054\u5B57\u6BB5\u7684\u7C7B\u578B\u4E00\u5B9A\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5E76\u4E14\u5728\u6BCF\u5F20\u8868\u90FD\u8981\u5EFA\u7ACB\u5173\u8054\u5B57\u6BB5\u7684\u7D22\u5F15\u3002</p><h2 id="_4-\u7981\u6B62\u4F7F\u7528\u5DE6\u6A21\u7CCA\u6216\u8005\u5168\u6A21\u7CCA\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_4-\u7981\u6B62\u4F7F\u7528\u5DE6\u6A21\u7CCA\u6216\u8005\u5168\u6A21\u7CCA\u67E5\u8BE2" aria-hidden="true">#</a> <strong>4. \u7981\u6B62\u4F7F\u7528\u5DE6\u6A21\u7CCA\u6216\u8005\u5168\u6A21\u7CCA\u67E5\u8BE2</strong></h2><p>\u5F53\u6211\u4EEC\u5728SQL\u67E5\u8BE2\u4F7F\u7528\u5DE6\u6A21\u7CCA\u6216\u8005\u5168\u6A21\u7CCA\u5339\u914D\u7684\u65F6\u5019\uFF0C\u7C7B\u4F3C\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># \u5DE6\u6A21\u7CCA\u67E5\u8BE2
select * from user where name=&#39;%\u4E00\u706F&#39;;
# \u5168\u6A21\u7CCA\u67E5\u8BE2
select * from user where name=&#39;%\u4E00\u706F%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6839\u636EB+\u6811\u7684\u7279\u6027\uFF0C\u5373\u4F7F\u6211\u4EEC\u5728name\u5B57\u6BB5\u4E0A\u5EFA\u7ACB\u4E86\u7D22\u5F15\uFF0C\u67E5\u8BE2\u7684\u65F6\u5019\u4E5F\u662F\u65E0\u6CD5\u7528\u5230\u7D22\u5F15\u7684\u3002</p><h2 id="_5-\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B\u81F3\u5C11\u8FBE\u5230range\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#_5-\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B\u81F3\u5C11\u8FBE\u5230range\u7EA7\u522B" aria-hidden="true">#</a> <strong>5. \u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B\u81F3\u5C11\u8FBE\u5230range\u7EA7\u522B</strong></h2><p>\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B\u5E38\u89C1\u7684\u6709\u8FD9\u51E0\u4E2A\u7EA7\u522B\uFF0C\u4ECE\u4E0A\u5230\u4E0B\uFF0C\u6027\u80FD\u7531\u597D\u5230\u5DEE\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221014231245873.png" alt="image-20221014231245873" style="zoom:50%;"><p>\u8981\u6C42SQL\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B\u81F3\u5C11\u8981\u8FBE\u5230<strong>range</strong>\u7EA7\u522B\uFF0C\u6700\u597D\u5230<strong>const</strong>\u7EA7\u522B\u3002</p><h2 id="_6-\u66F4\u4F18\u96C5\u7684\u4F7F\u7528\u8054\u5408\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_6-\u66F4\u4F18\u96C5\u7684\u4F7F\u7528\u8054\u5408\u7D22\u5F15" aria-hidden="true">#</a> <strong>6. \u66F4\u4F18\u96C5\u7684\u4F7F\u7528\u8054\u5408\u7D22\u5F15</strong></h2><p>\u7531\u4E8E\u8054\u5408\u7D22\u5F15\u6709\u6700\u5DE6\u5339\u914D\u539F\u5219\uFF0C\u6240\u4EE5\u9700\u8981\u4F18\u5148\u628A\u533A\u5206\u5EA6\u9AD8\u7684\u5B57\u6BB5\u653E\u5728\u6700\u5DE6\u8FB9\u7B2C\u4E00\u5217\u3002</p><p>\u6BD4\u5982\u8981\u7EDF\u8BA1\u7528\u6237\u8868\u4E2D\u751F\u65E5\u5B57\u6BB5\u548C\u6027\u522B\u5B57\u6BB5\u533A\u5206\u5EA6\uFF0C\u53EF\u4EE5\u8FD9\u6837\u7EDF\u8BA1\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select 
    count(distinct birthday)/count(*), 
    count(distinct gender)/count(*) 
from user;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20221014231410497.png" alt="image-20221014231410497"></p><p>\u503C\u8D8A\u5927\uFF0C\u533A\u5206\u5EA6\u8D8A\u9AD8\u3002</p><p>\u51FA\u9053\u9762\u8BD5\u9898\uFF0C\u4E0B\u9762\u8FD9\u6761SQL\u8BE5\u600E\u4E48\u521B\u5EFA\u8054\u5408\u7D22\u5F15\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select a from table_name where b=1 order by c;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>SQL\u4E2D\u7528\u5230abc\u4E09\u4E2A\u5B57\u6BB5\uFF0C\u521B\u5EFA\u8054\u5408\u7D22\u5F15\u7684\u987A\u5E8F\u662F**\uFF08b,c,a\uFF09**\u3002</p><p>\u8FD9\u9053\u9898\u8FD8\u6D89\u53CA\u5230\u53E6\u4E00\u4E2A\u77E5\u8BC6\u70B9\uFF0CSQL\u6267\u884C\u7684\u987A\u5E8F\uFF1A</p><blockquote><p>from &gt; on &gt; join &gt; where &gt; group by &gt; having &gt; select &gt; distinct &gt; order by &gt; limit</p></blockquote><h2 id="_7-\u6CE8\u610F\u907F\u514D\u6DF1\u5206\u9875" tabindex="-1"><a class="header-anchor" href="#_7-\u6CE8\u610F\u907F\u514D\u6DF1\u5206\u9875" aria-hidden="true">#</a> <strong>7. \u6CE8\u610F\u907F\u514D\u6DF1\u5206\u9875</strong></h2><p>MySQL\u6DF1\u5206\u9875\u7684\u65F6\u5019\uFF0C\u67E5\u8BE2\u6027\u80FD\u8F83\u5DEE\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from user where name=&#39;\u4E00\u706F&#39; limit 10000,10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u5B50\u67E5\u8BE2\u7684\u65B9\u5F0F\u8FDB\u884C\u4F18\u5316\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select * from user 
where id in (
  select id from user 
  where name=&#39;\u4E00\u706F&#39;
  limit 10000,10
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u975E\u805A\u7C07\u7D22\u5F15\u56DE\u8868\u67E5\u8BE2\u7684\u6B21\u6570\u3002</p><h2 id="_8-\u5355\u8868\u5B57\u6BB5\u4E0D\u8981\u8D85\u8FC730\u4E2A" tabindex="-1"><a class="header-anchor" href="#_8-\u5355\u8868\u5B57\u6BB5\u4E0D\u8981\u8D85\u8FC730\u4E2A" aria-hidden="true">#</a> <strong>8. \u5355\u8868\u5B57\u6BB5\u4E0D\u8981\u8D85\u8FC730\u4E2A</strong></h2><p>\u5F53\u5355\u8868\u5B57\u6BB5\u6570\u91CF\u8FC7\u591A\u7684\u65F6\u5019\uFF0C\u52A0\u8F7D\u5927\u91CF\u6570\u636E\u4E5F\u4F1A\u62D6\u6162\u67E5\u8BE2\u6027\u80FD\u3002</p><p>\u5982\u679C\u5B57\u6BB5\u8D85\u8FC730\u4E2A\uFF0C\u4E0D\u7528\u770B\uFF0C\u80AF\u5B9A\u662F\u8868\u8BBE\u8BA1\u7684\u4E0D\u5408\u7406\u3002</p><p>\u8FD9\u65F6\u5019\uFF0C\u53EF\u4EE5\u62C6\u6210\u591A\u5F20\u8868\uFF0C\u7528\u5782\u76F4\u5206\u8868\u7684\u65B9\u5F0F\uFF0C\u8FDB\u884C\u51B7\u70ED\u5B57\u6BB5\u5206\u79BB\u3002</p><h2 id="_9-\u679A\u4E3E\u5B57\u6BB5\u4E0D\u8981\u4F7F\u7528\u5B57\u7B26\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_9-\u679A\u4E3E\u5B57\u6BB5\u4E0D\u8981\u4F7F\u7528\u5B57\u7B26\u7C7B\u578B" aria-hidden="true">#</a> <strong>9. \u679A\u4E3E\u5B57\u6BB5\u4E0D\u8981\u4F7F\u7528\u5B57\u7B26\u7C7B\u578B</strong></h2><p>\u5B57\u7B26\u7C7B\u578B\u4F1A\u5360\u7528\u66F4\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u5B58\u50A8\u679A\u4E3E\u503C\u6216\u8005\u8868\u793A\u662F\u5426\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u91C7\u7528<strong>tinyint</strong>\u6570\u503C\u7C7B\u578B\uFF0C\u6700\u597D\u91C7\u7528\u65E0\u7B26\u53F7\u6574\u6570<strong>unsigned tinyint</strong>\u3002</p><h2 id="_10-\u5C0F\u6570\u7C7B\u578B\u7981\u6B62\u4F7F\u7528float\u548Cdouble" tabindex="-1"><a class="header-anchor" href="#_10-\u5C0F\u6570\u7C7B\u578B\u7981\u6B62\u4F7F\u7528float\u548Cdouble" aria-hidden="true">#</a> <strong>10. \u5C0F\u6570\u7C7B\u578B\u7981\u6B62\u4F7F\u7528float\u548Cdouble</strong></h2><p>\u5728\u5B58\u50A8\u548C\u8BA1\u7B97\u7684\u65F6\u5019\uFF0C<strong>float</strong> \u548C <strong>double</strong> \u90FD\u5B58\u5728\u7CBE\u5EA6\u635F\u5931\u7684\u95EE\u9898\uFF0C\u65E0\u6CD5\u5F97\u5230\u6B63\u786E\u7684\u7ED3\u679C\u3002</p><p>\u6240\u4EE5\u5728\u6D89\u53CA\u5230\u5B58\u50A8\u5C0F\u6570\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u4F7F\u7528<strong>decimal</strong>\u7C7B\u578B\u3002</p><h2 id="_11-\u6240\u6709\u5B57\u6BB5\u5FC5\u987B\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u4E14\u4E0D\u5141\u8BB8\u4E3Anull" tabindex="-1"><a class="header-anchor" href="#_11-\u6240\u6709\u5B57\u6BB5\u5FC5\u987B\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u4E14\u4E0D\u5141\u8BB8\u4E3Anull" aria-hidden="true">#</a> <strong>11. \u6240\u6709\u5B57\u6BB5\u5FC5\u987B\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u4E14\u4E0D\u5141\u8BB8\u4E3Anull</strong></h2><p>\u5B57\u6BB5\u5141\u8BB8\u4E3Anull\uFF0C\u4F1A\u5360\u7528\u989D\u5916\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><p>\u7D22\u5F15\u5E76\u4E0D\u4F1A\u7D22\u5F15null\u503C\uFF0C\u6240\u4EE5\u67E5\u8BE2null\u503C\u7684\u65F6\u5019\u65E0\u6CD5\u7528\u5230\u7D22\u5F15\u3002</p><p>\u5F53\u6570\u503C\u7C7B\u578B\u5141\u8BB8\u4E3Anull\uFF0C\u8FD4\u56DE\u7ED9\u6620\u5C04\u5B9E\u4F53\u7C7B\u7684\u65F6\u5019\u8FD8\u53EF\u80FD\u4F1A\u62A5\u7A7A\u6307\u9488\u5F02\u5E38\u3002</p><h2 id="_12-\u5FC5\u987B\u521B\u5EFA\u4E3B\u952E-\u6700\u597D\u662F\u6709\u5E8F\u6570\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_12-\u5FC5\u987B\u521B\u5EFA\u4E3B\u952E-\u6700\u597D\u662F\u6709\u5E8F\u6570\u503C\u7C7B\u578B" aria-hidden="true">#</a> <strong>12. \u5FC5\u987B\u521B\u5EFA\u4E3B\u952E\uFF0C\u6700\u597D\u662F\u6709\u5E8F\u6570\u503C\u7C7B\u578B</strong></h2><p>\u5982\u679C\u6211\u4EEC\u81EA\u5DF1\u6CA1\u6709\u7ED9\u8868\u8BBE\u7F6E\u4E3B\u952E\uFF0CInnoDB\u4F1A\u81EA\u52A8\u589E\u52A0\u4E00\u5217\u9690\u85CF\u7684\u4E3B\u952E\uFF0C\u6211\u4EEC\u65E0\u6CD5\u4F7F\u7528\u5230\uFF0C\u5E76\u4E14\u4E5F\u5360\u7528\u7684\u66F4\u591A\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u6240\u4EE5\u5EFA\u8868\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u8BBE\u7F6E\u4E3B\u952E\u3002</p><p>\u6709\u5E8F\u6570\u503C\u66F4\u9002\u5408\u505A\u4E3B\u952E\uFF0C\u63D2\u5165\u6570\u636E\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u662F\u6709\u5E8F\u7684\uFF0C\u4E0D\u4F1A\u9891\u7E41\u8C03\u6574B+\u6811\u7ED3\u6784\uFF0C\u6027\u80FD\u66F4\u597D\u3002</p><h2 id="_13-\u5FEB\u901F\u5224\u65AD\u662F\u5426\u5B58\u5728\u67D0\u6761\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_13-\u5FEB\u901F\u5224\u65AD\u662F\u5426\u5B58\u5728\u67D0\u6761\u8BB0\u5F55" aria-hidden="true">#</a> <strong>13. \u5FEB\u901F\u5224\u65AD\u662F\u5426\u5B58\u5728\u67D0\u6761\u8BB0\u5F55</strong></h2><p>\u4E00\u822C\u6211\u4EEC\u5224\u65AD\u8868\u4E2D\u662F\u5426\u5B58\u5728\u67D0\u6761\u8BB0\u5F55\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528count\u51FD\u6570\uFF0C\u7136\u540E\u5224\u65AD\u8FD4\u56DE\u503C\u662F\u5426\u5927\u4E8E1\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select count(*) from user where name=&#39;\u4E00\u706F&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>InnoDB\u5B58\u50A8\u5F15\u64CE\u5E76\u6CA1\u6709\u50CFMyIsAm\u90A3\u6837\u7F13\u5B58\u8868\u7684\u603B\u884C\u6570\uFF0C\u6BCF\u6B21\u67E5\u8BE2\u90FD\u662F\u5B9E\u65F6\u8BA1\u7B97\u7684\uFF0C\u8017\u65F6\u8F83\u957F\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528limit\u52A0\u5FEB\u67E5\u8BE2\u6548\u7387\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select id from user where name=&#39;\u4E00\u706F&#39; limit 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>limit 1</strong>\u8868\u793A\u5339\u914D\u5230\u4E00\u6761\u5C31\u8FD4\u56DE\uFF0C\u67E5\u8BE2\u6548\u7387\u66F4\u597D\uFF0C\u7ED3\u679C\u96C6\u53EA\u8FD4\u56DEid\uFF0C\u8FD8\u53EF\u4EE5\u7528\u5230\u8986\u76D6\u7D22\u5F15\u3002</p><h2 id="_14-in\u6761\u4EF6\u4E2D\u6570\u91CF\u4E0D\u5B9C\u8FC7\u591A" tabindex="-1"><a class="header-anchor" href="#_14-in\u6761\u4EF6\u4E2D\u6570\u91CF\u4E0D\u5B9C\u8FC7\u591A" aria-hidden="true">#</a> <strong>14. in\u6761\u4EF6\u4E2D\u6570\u91CF\u4E0D\u5B9C\u8FC7\u591A</strong></h2><p>in\u6761\u4EF6\u4E2D\u6570\u91CF\u4E0D\u8981\u8D85\u8FC71000\u4E2A\uFF0C\u4E0D\u7136\u8017\u65F6\u4F1A\u975E\u5E38\u957F\uFF0C\u53EF\u4EE5\u62C6\u6210\u591A\u6279\u6B21\u67E5\u8BE2\u3002</p><h2 id="_15-\u7981\u6B62\u521B\u5EFA\u9884\u7559\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_15-\u7981\u6B62\u521B\u5EFA\u9884\u7559\u5B57\u6BB5" aria-hidden="true">#</a> <strong>15. \u7981\u6B62\u521B\u5EFA\u9884\u7559\u5B57\u6BB5</strong></h2><p>\u65E0\u6CD5\u901A\u8FC7\u9884\u7559\u5B57\u6BB5\u7684\u540D\u79F0\u5224\u65AD\u8FD9\u4E2A\u5B57\u6BB5\u662F\u5E72\u561B\u7528\u7684\u3002</p><p>\u9884\u7559\u5B57\u6BB5\u7684\u7C7B\u578B\u4E0D\u4E00\u5B9A\u5408\u9002\u3002</p><p>\u65E0\u6CD5\u4E3A\u9884\u7559\u5B57\u6BB5\u521B\u5EFA\u5408\u9002\u7684\u7D22\u5F15\u3002</p><h2 id="_16-\u5355\u8868\u7D22\u5F15\u6570\u4E0D\u8981\u8D85\u8FC75\u4E2A" tabindex="-1"><a class="header-anchor" href="#_16-\u5355\u8868\u7D22\u5F15\u6570\u4E0D\u8981\u8D85\u8FC75\u4E2A" aria-hidden="true">#</a> <strong>16. \u5355\u8868\u7D22\u5F15\u6570\u4E0D\u8981\u8D85\u8FC75\u4E2A</strong></h2><p>\u521B\u5EFA\u9002\u5F53\u7684\u7D22\u5F15\u53EF\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u4F46\u662F\u8FC7\u591A\u7684\u7D22\u5F15\uFF0C\u4E0D\u4F46\u5360\u7528\u66F4\u591A\u5B58\u50A8\u7A7A\u95F4\uFF0C\u8FD8\u4F1A\u62D6\u6162\u66F4\u65B0SQL\u7684\u6027\u80FD\u3002</p><p>\u6240\u4EE5\uFF0C\u7D22\u5F15\u597D\u7528\uFF0C\u9002\u5EA6\u5373\u53EF\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,74),m={href:"https://zhuanlan.zhihu.com/p/550146428",target:"_blank",rel:"noopener noreferrer"};function p(h,u){const n=t("ExternalLinkIcon");return s(),i("div",null,[c,e("p",null,[e("a",m,[r("\u7CBE\u5FC3\u6574\u740616\u6761MySQL\u4F7F\u7528\u89C4\u8303\uFF0C\u51CF\u5C1180%\u95EE\u9898\uFF0C\u63A8\u8350\u5206\u4EAB\u7ED9\u56E2\u961F"),d(n)])])])}const v=a(o,[["render",p],["__file","mysql-x-specification.html.vue"]]);export{v as default};
