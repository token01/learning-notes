import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,a as e,b as r,d,f as l,r as c}from"./app.20466b7d.js";const p={},o=l('<h1 id="mybatis\u8BE6\u89E3-\u603B\u4F53\u6846\u67B6\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#mybatis\u8BE6\u89E3-\u603B\u4F53\u6846\u67B6\u8BBE\u8BA1" aria-hidden="true">#</a> MyBatis\u8BE6\u89E3 - \u603B\u4F53\u6846\u67B6\u8BBE\u8BA1</h1><blockquote><p>MyBatis\u6574\u4F53\u67B6\u6784\u5305\u542B\u54EA\u4E9B\u5C42\u5462\uFF1F\u8FD9\u4E9B\u5C42\u6B21\u662F\u5982\u4F55\u8BBE\u8BA1\u7684\u5462\uFF1F</p></blockquote><h2 id="_1-mybatis\u67B6\u6784\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#_1-mybatis\u67B6\u6784\u6982\u89C8" aria-hidden="true">#</a> 1. MyBatis\u67B6\u6784\u6982\u89C8</h2><p>MyBatis\u6846\u67B6\u6574\u4F53\u8BBE\u8BA1\u5982\u4E0B:</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220727202556295.png" alt="image-20220727202556295"></p><h3 id="_1-1-\u63A5\u53E3\u5C42-\u548C\u6570\u636E\u5E93\u4EA4\u4E92\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-\u63A5\u53E3\u5C42-\u548C\u6570\u636E\u5E93\u4EA4\u4E92\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 1.1 \u63A5\u53E3\u5C42-\u548C\u6570\u636E\u5E93\u4EA4\u4E92\u7684\u65B9\u5F0F</h3><p>MyBatis\u548C\u6570\u636E\u5E93\u7684\u4EA4\u4E92\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u4F7F\u7528\u4F20\u7EDF\u7684MyBatis\u63D0\u4F9B\u7684API\uFF1B</li><li>\u4F7F\u7528Mapper\u63A5\u53E3\uFF1B</li></ul><h4 id="_1-1-1-\u4F7F\u7528\u4F20\u7EDF\u7684mybatis\u63D0\u4F9B\u7684api" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u4F7F\u7528\u4F20\u7EDF\u7684mybatis\u63D0\u4F9B\u7684api" aria-hidden="true">#</a> 1.1.1 \u4F7F\u7528\u4F20\u7EDF\u7684MyBatis\u63D0\u4F9B\u7684API</h4><p>\u8FD9\u662F\u4F20\u7EDF\u7684\u4F20\u9012Statement Id \u548C\u67E5\u8BE2\u53C2\u6570\u7ED9 SqlSession \u5BF9\u8C61\uFF0C\u4F7F\u7528 SqlSession\u5BF9\u8C61\u5B8C\u6210\u548C\u6570\u636E\u5E93\u7684\u4EA4\u4E92\uFF1BMyBatis \u63D0\u4F9B\u4E86\u975E\u5E38\u65B9\u4FBF\u548C\u7B80\u5355\u7684API\uFF0C\u4F9B\u7528\u6237\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7684\u589E\u5220\u6539\u67E5\u6570\u636E\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u5BF9\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\u548CMyBatis \u81EA\u8EAB\u914D\u7F6E\u4FE1\u606F\u7684\u7EF4\u62A4\u64CD\u4F5C\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220727202754413.png" alt="image-20220727202754413"></p><p>\u4E0A\u8FF0\u4F7F\u7528MyBatis \u7684\u65B9\u6CD5\uFF0C\u662F\u521B\u5EFA\u4E00\u4E2A\u548C\u6570\u636E\u5E93\u6253\u4EA4\u9053\u7684SqlSession\u5BF9\u8C61\uFF0C\u7136\u540E\u6839\u636EStatement Id \u548C\u53C2\u6570\u6765\u64CD\u4F5C\u6570\u636E\u5E93\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u56FA\u7136\u5F88\u7B80\u5355\u548C\u5B9E\u7528\uFF0C\u4F46\u662F\u5B83\u4E0D\u7B26\u5408\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u7684\u6982\u5FF5\u548C\u9762\u5411\u63A5\u53E3\u7F16\u7A0B\u7684\u7F16\u7A0B\u4E60\u60EF\u3002\u7531\u4E8E\u9762\u5411\u63A5\u53E3\u7684\u7F16\u7A0B\u662F\u9762\u5411\u5BF9\u8C61\u7684\u5927\u8D8B\u52BF\uFF0CMyBatis \u4E3A\u4E86\u9002\u5E94\u8FD9\u4E00\u8D8B\u52BF\uFF0C\u589E\u52A0\u4E86\u7B2C\u4E8C\u79CD\u4F7F\u7528MyBatis \u652F\u6301\u63A5\u53E3\uFF08Interface\uFF09\u8C03\u7528\u65B9\u5F0F\u3002</p><h4 id="_1-1-2-\u4F7F\u7528mapper\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u4F7F\u7528mapper\u63A5\u53E3" aria-hidden="true">#</a> 1.1.2 \u4F7F\u7528Mapper\u63A5\u53E3</h4><p>MyBatis \u5C06\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E00\u4E2A<code>&lt;mapper&gt;</code> \u8282\u70B9\u62BD\u8C61\u4E3A\u4E00\u4E2A Mapper \u63A5\u53E3\uFF0C\u800C\u8FD9\u4E2A\u63A5\u53E3\u4E2D\u58F0\u660E\u7684\u65B9\u6CD5\u548C\u8DDF<code>&lt;mapper&gt;</code> \u8282\u70B9\u4E2D\u7684<code>&lt;select|update|delete|insert&gt;</code> \u8282\u70B9\u9879\u5BF9\u5E94\uFF0C\u5373<code>&lt;select|update|delete|insert&gt;</code> \u8282\u70B9\u7684id\u503C\u4E3AMapper \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\u540D\u79F0\uFF0CparameterType \u503C\u8868\u793AMapper \u5BF9\u5E94\u65B9\u6CD5\u7684\u5165\u53C2\u7C7B\u578B\uFF0C\u800CresultMap \u503C\u5219\u5BF9\u5E94\u4E86Mapper \u63A5\u53E3\u8868\u793A\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u6216\u8005\u8FD4\u56DE\u7ED3\u679C\u96C6\u7684\u5143\u7D20\u7C7B\u578B\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220727203127027.png" alt="image-20220727203127027"></p><p>\u6839\u636EMyBatis \u7684\u914D\u7F6E\u89C4\u8303\u914D\u7F6E\u597D\u540E\uFF0C\u901A\u8FC7SqlSession.getMapper(XXXMapper.class)\u65B9\u6CD5\uFF0CMyBatis \u4F1A\u6839\u636E\u76F8\u5E94\u7684\u63A5\u53E3\u58F0\u660E\u7684\u65B9\u6CD5\u4FE1\u606F\uFF0C\u901A\u8FC7\u52A8\u6001\u4EE3\u7406\u673A\u5236\u751F\u6210\u4E00\u4E2AMapper \u5B9E\u4F8B\uFF0C\u6211\u4EEC\u4F7F\u7528Mapper \u63A5\u53E3\u7684\u67D0\u4E00\u4E2A\u65B9\u6CD5\u65F6\uFF0CMyBatis \u4F1A\u6839\u636E\u8FD9\u4E2A\u65B9\u6CD5\u7684\u65B9\u6CD5\u540D\u548C\u53C2\u6570\u7C7B\u578B\uFF0C\u786E\u5B9AStatement Id\uFF0C\u5E95\u5C42\u8FD8\u662F\u901A\u8FC7SqlSession.select(&quot;statementId&quot;,parameterObject);\u6216\u8005SqlSession.update(&quot;statementId&quot;,parameterObject); \u7B49\u7B49\u6765\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7684\u64CD\u4F5C\uFF0C MyBatis \u5F15\u7528Mapper \u63A5\u53E3\u8FD9\u79CD\u8C03\u7528\u65B9\u5F0F\uFF0C\u7EAF\u7CB9\u662F\u4E3A\u4E86\u6EE1\u8DB3\u9762\u5411\u63A5\u53E3\u7F16\u7A0B\u7684\u9700\u8981\u3002\uFF08\u5176\u5B9E\u8FD8\u6709\u4E00\u4E2A\u539F\u56E0\u662F\u5728\u4E8E\uFF0C\u9762\u5411\u63A5\u53E3\u7684\u7F16\u7A0B\uFF0C\u4F7F\u5F97\u7528\u6237\u5728\u63A5\u53E3\u4E0A\u53EF\u4EE5\u4F7F\u7528\u6CE8\u89E3\u6765\u914D\u7F6ESQL\u8BED\u53E5\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u8131\u79BBXML\u914D\u7F6E\u6587\u4EF6\uFF0C\u5B9E\u73B0\u201C0\u914D\u7F6E\u201D\uFF09\u3002</p><h3 id="_1-2-\u6570\u636E\u5904\u7406\u5C42" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6570\u636E\u5904\u7406\u5C42" aria-hidden="true">#</a> 1.2 \u6570\u636E\u5904\u7406\u5C42</h3><p>\u6570\u636E\u5904\u7406\u5C42\u53EF\u4EE5\u8BF4\u662FMyBatis \u7684\u6838\u5FC3\uFF0C\u4ECE\u5927\u7684\u65B9\u9762\u4E0A\u8BB2\uFF0C\u5B83\u8981\u5B8C\u6210\u4E24\u4E2A\u529F\u80FD\uFF1A</p><ul><li>\u901A\u8FC7\u4F20\u5165\u53C2\u6570\u6784\u5EFA\u52A8\u6001SQL\u8BED\u53E5\uFF1B</li><li>SQL\u8BED\u53E5\u7684\u6267\u884C\u4EE5\u53CA\u5C01\u88C5\u67E5\u8BE2\u7ED3\u679C\u96C6\u6210<code>List&lt;E&gt;</code></li></ul><h4 id="_1-2-1-\u53C2\u6570\u6620\u5C04\u548C\u52A8\u6001sql\u8BED\u53E5\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u53C2\u6570\u6620\u5C04\u548C\u52A8\u6001sql\u8BED\u53E5\u751F\u6210" aria-hidden="true">#</a> 1.2.1 \u53C2\u6570\u6620\u5C04\u548C\u52A8\u6001SQL\u8BED\u53E5\u751F\u6210</h4><p>\u52A8\u6001\u8BED\u53E5\u751F\u6210\u53EF\u4EE5\u8BF4\u662FMyBatis\u6846\u67B6\u975E\u5E38\u4F18\u96C5\u7684\u4E00\u4E2A\u8BBE\u8BA1\uFF0CMyBatis \u901A\u8FC7\u4F20\u5165\u7684\u53C2\u6570\u503C\uFF0C\u4F7F\u7528 Ognl \u6765\u52A8\u6001\u5730\u6784\u9020SQL\u8BED\u53E5\uFF0C\u4F7F\u5F97MyBatis \u6709\u5F88\u5F3A\u7684\u7075\u6D3B\u6027\u548C\u6269\u5C55\u6027\u3002</p><p>\u53C2\u6570\u6620\u5C04\u6307\u7684\u662F\u5BF9\u4E8Ejava \u6570\u636E\u7C7B\u578B\u548Cjdbc\u6570\u636E\u7C7B\u578B\u4E4B\u95F4\u7684\u8F6C\u6362\uFF1A\u8FD9\u91CC\u6709\u5305\u62EC\u4E24\u4E2A\u8FC7\u7A0B\uFF1A\u67E5\u8BE2\u9636\u6BB5\uFF0C\u6211\u4EEC\u8981\u5C06java\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u8F6C\u6362\u6210jdbc\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u901A\u8FC7 preparedStatement.setXXX() \u6765\u8BBE\u503C\uFF1B\u53E6\u4E00\u4E2A\u5C31\u662F\u5BF9resultset\u67E5\u8BE2\u7ED3\u679C\u96C6\u7684jdbcType \u6570\u636E\u8F6C\u6362\u6210java \u6570\u636E\u7C7B\u578B\u3002</p><h4 id="_1-2-2-sql\u8BED\u53E5\u7684\u6267\u884C\u4EE5\u53CA\u5C01\u88C5\u67E5\u8BE2\u7ED3\u679C\u96C6\u6210list" tabindex="-1"><a class="header-anchor" href="#_1-2-2-sql\u8BED\u53E5\u7684\u6267\u884C\u4EE5\u53CA\u5C01\u88C5\u67E5\u8BE2\u7ED3\u679C\u96C6\u6210list" aria-hidden="true">#</a> 1.2.2 SQL\u8BED\u53E5\u7684\u6267\u884C\u4EE5\u53CA\u5C01\u88C5\u67E5\u8BE2\u7ED3\u679C\u96C6\u6210List</h4><p>\u52A8\u6001SQL\u8BED\u53E5\u751F\u6210\u4E4B\u540E\uFF0CMyBatis \u5C06\u6267\u884CSQL\u8BED\u53E5\uFF0C\u5E76\u5C06\u53EF\u80FD\u8FD4\u56DE\u7684\u7ED3\u679C\u96C6\u8F6C\u6362\u6210<code>List&lt;E&gt;</code> \u5217\u8868\u3002MyBatis \u5728\u5BF9\u7ED3\u679C\u96C6\u7684\u5904\u7406\u4E2D\uFF0C\u652F\u6301\u7ED3\u679C\u96C6\u5173\u7CFB\u4E00\u5BF9\u591A\u548C\u591A\u5BF9\u4E00\u7684\u8F6C\u6362\uFF0C\u5E76\u4E14\u6709\u4E24\u79CD\u652F\u6301\u65B9\u5F0F\uFF0C\u4E00\u79CD\u4E3A\u5D4C\u5957\u67E5\u8BE2\u8BED\u53E5\u7684\u67E5\u8BE2\uFF0C\u8FD8\u6709\u4E00\u79CD\u662F\u5D4C\u5957\u7ED3\u679C\u96C6\u7684\u67E5\u8BE2\u3002</p><h3 id="_1-3-\u6846\u67B6\u652F\u6491\u5C42" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6846\u67B6\u652F\u6491\u5C42" aria-hidden="true">#</a> 1.3 \u6846\u67B6\u652F\u6491\u5C42</h3><ul><li>\u4E8B\u52A1\u7BA1\u7406\u673A\u5236</li></ul><p>\u4E8B\u52A1\u7BA1\u7406\u673A\u5236\u5BF9\u4E8EORM\u6846\u67B6\u800C\u8A00\u662F\u4E0D\u53EF\u7F3A\u5C11\u7684\u4E00\u90E8\u5206\uFF0C\u4E8B\u52A1\u7BA1\u7406\u673A\u5236\u7684\u8D28\u91CF\u4E5F\u662F\u8003\u91CF\u4E00\u4E2AORM\u6846\u67B6\u662F\u5426\u4F18\u79C0\u7684\u4E00\u4E2A\u6807\u51C6\u3002</p><ul><li>\u8FDE\u63A5\u6C60\u7BA1\u7406\u673A\u5236</li></ul><p>\u7531\u4E8E\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93\u8FDE\u63A5\u6240\u5360\u7528\u7684\u8D44\u6E90\u6BD4\u8F83\u5927\uFF0C \u5BF9\u4E8E\u6570\u636E\u541E\u5410\u91CF\u5927\u548C\u8BBF\u95EE\u91CF\u975E\u5E38\u5927\u7684\u5E94\u7528\u800C\u8A00\uFF0C\u8FDE\u63A5\u6C60\u7684\u8BBE\u8BA1\u5C31\u663E\u5F97\u975E\u5E38\u91CD\u8981\u3002</p><ul><li>\u7F13\u5B58\u673A\u5236</li></ul><p>\u4E3A\u4E86\u63D0\u9AD8\u6570\u636E\u5229\u7528\u7387\u548C\u51CF\u5C0F\u670D\u52A1\u5668\u548C\u6570\u636E\u5E93\u7684\u538B\u529B\uFF0CMyBatis \u4F1A\u5BF9\u4E8E\u4E00\u4E9B\u67E5\u8BE2\u63D0\u4F9B\u4F1A\u8BDD\u7EA7\u522B\u7684\u6570\u636E\u7F13\u5B58\uFF0C\u4F1A\u5C06\u5BF9\u67D0\u4E00\u6B21\u67E5\u8BE2\uFF0C\u653E\u7F6E\u5230SqlSession \u4E2D\uFF0C\u5728\u5141\u8BB8\u7684\u65F6\u95F4\u95F4\u9694\u5185\uFF0C\u5BF9\u4E8E\u5B8C\u5168\u76F8\u540C\u7684\u67E5\u8BE2\uFF0CMyBatis \u4F1A\u76F4\u63A5\u5C06\u7F13\u5B58\u7ED3\u679C\u8FD4\u56DE\u7ED9\u7528\u6237\uFF0C\u800C\u4E0D\u7528\u518D\u5230\u6570\u636E\u5E93\u4E2D\u67E5\u627E\u3002</p><ul><li>SQL\u8BED\u53E5\u7684\u914D\u7F6E\u65B9\u5F0F</li></ul><p>\u4F20\u7EDF\u7684MyBatis \u914D\u7F6ESQL \u8BED\u53E5\u65B9\u5F0F\u5C31\u662F\u4F7F\u7528XML\u6587\u4EF6\u8FDB\u884C\u914D\u7F6E\u7684\uFF0C\u4F46\u662F\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u80FD\u5F88\u597D\u5730\u652F\u6301\u9762\u5411\u63A5\u53E3\u7F16\u7A0B\u7684\u7406\u5FF5\uFF0C\u4E3A\u4E86\u652F\u6301\u9762\u5411\u63A5\u53E3\u7684\u7F16\u7A0B\uFF0CMyBatis \u5F15\u5165\u4E86Mapper\u63A5\u53E3\u7684\u6982\u5FF5\uFF0C\u9762\u5411\u63A5\u53E3\u7684\u5F15\u5165\uFF0C\u5BF9\u4F7F\u7528\u6CE8\u89E3\u6765\u914D\u7F6ESQL \u8BED\u53E5\u6210\u4E3A\u53EF\u80FD\uFF0C\u7528\u6237\u53EA\u9700\u8981\u5728\u63A5\u53E3\u4E0A\u6DFB\u52A0\u5FC5\u8981\u7684\u6CE8\u89E3\u5373\u53EF\uFF0C\u4E0D\u7528\u518D\u53BB\u914D\u7F6EXML\u6587\u4EF6\u4E86\uFF0C\u4F46\u662F\uFF0C\u76EE\u524D\u7684MyBatis \u53EA\u662F\u5BF9\u6CE8\u89E3\u914D\u7F6ESQL \u8BED\u53E5\u63D0\u4F9B\u4E86\u6709\u9650\u7684\u652F\u6301\uFF0C\u67D0\u4E9B\u9AD8\u7EA7\u529F\u80FD\u8FD8\u662F\u8981\u4F9D\u8D56XML\u914D\u7F6E\u6587\u4EF6\u914D\u7F6ESQL \u8BED\u53E5\u3002</p><h3 id="_1-4-\u5F15\u5BFC\u5C42" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5F15\u5BFC\u5C42" aria-hidden="true">#</a> 1.4 \u5F15\u5BFC\u5C42</h3><p>\u5F15\u5BFC\u5C42\u662F\u914D\u7F6E\u548C\u542F\u52A8MyBatis\u914D\u7F6E\u4FE1\u606F\u7684\u65B9\u5F0F\u3002MyBatis \u63D0\u4F9B\u4E24\u79CD\u65B9\u5F0F\u6765\u5F15\u5BFCMyBatis \uFF1A\u57FA\u4E8EXML\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u548C\u57FA\u4E8EJava API \u7684\u65B9\u5F0F\u3002</p><h2 id="_2-\u4E3B\u8981\u6784\u4EF6\u53CA\u5176\u76F8\u4E92\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3B\u8981\u6784\u4EF6\u53CA\u5176\u76F8\u4E92\u5173\u7CFB" aria-hidden="true">#</a> 2. \u4E3B\u8981\u6784\u4EF6\u53CA\u5176\u76F8\u4E92\u5173\u7CFB</h2><p>\u4ECEMyBatis\u4EE3\u7801\u5B9E\u73B0\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u4E3B\u4F53\u6784\u4EF6\u548C\u5173\u7CFB\u5982\u4E0B\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20220727204256217.png" alt="image-20220727204256217"></p><p>\u4E3B\u8981\u7684\u6838\u5FC3\u90E8\u4EF6\u89E3\u91CA\u5982\u4E0B\uFF1A</p><ul><li><code>SqlSession</code> \u4F5C\u4E3AMyBatis\u5DE5\u4F5C\u7684\u4E3B\u8981\u9876\u5C42API\uFF0C\u8868\u793A\u548C\u6570\u636E\u5E93\u4EA4\u4E92\u7684\u4F1A\u8BDD\uFF0C\u5B8C\u6210\u5FC5\u8981\u6570\u636E\u5E93\u589E\u5220\u6539\u67E5\u529F\u80FD</li><li><code>Executor</code> MyBatis\u6267\u884C\u5668\uFF0C\u662FMyBatis \u8C03\u5EA6\u7684\u6838\u5FC3\uFF0C\u8D1F\u8D23SQL\u8BED\u53E5\u7684\u751F\u6210\u548C\u67E5\u8BE2\u7F13\u5B58\u7684\u7EF4\u62A4</li><li><code>StatementHandler</code> \u5C01\u88C5\u4E86JDBC Statement\u64CD\u4F5C\uFF0C\u8D1F\u8D23\u5BF9JDBC statement \u7684\u64CD\u4F5C\uFF0C\u5982\u8BBE\u7F6E\u53C2\u6570\u3001\u5C06Statement\u7ED3\u679C\u96C6\u8F6C\u6362\u6210List\u96C6\u5408\u3002</li><li><code>ParameterHandler</code> \u8D1F\u8D23\u5BF9\u7528\u6237\u4F20\u9012\u7684\u53C2\u6570\u8F6C\u6362\u6210JDBC Statement \u6240\u9700\u8981\u7684\u53C2\u6570\uFF0C</li><li><code>ResultSetHandler</code> \u8D1F\u8D23\u5C06JDBC\u8FD4\u56DE\u7684ResultSet\u7ED3\u679C\u96C6\u5BF9\u8C61\u8F6C\u6362\u6210List\u7C7B\u578B\u7684\u96C6\u5408\uFF1B</li><li><code>TypeHandler</code> \u8D1F\u8D23java\u6570\u636E\u7C7B\u578B\u548Cjdbc\u6570\u636E\u7C7B\u578B\u4E4B\u95F4\u7684\u6620\u5C04\u548C\u8F6C\u6362</li><li><code>MappedStatement</code> MappedStatement\u7EF4\u62A4\u4E86\u4E00\u6761<code>&lt;select|update|delete|insert&gt;</code>\u8282\u70B9\u7684\u5C01\u88C5\uFF0C</li><li><code>SqlSource</code> \u8D1F\u8D23\u6839\u636E\u7528\u6237\u4F20\u9012\u7684parameterObject\uFF0C\u52A8\u6001\u5730\u751F\u6210SQL\u8BED\u53E5\uFF0C\u5C06\u4FE1\u606F\u5C01\u88C5\u5230BoundSql\u5BF9\u8C61\u4E2D\uFF0C\u5E76\u8FD4\u56DE</li><li><code>BoundSql</code> \u8868\u793A\u52A8\u6001\u751F\u6210\u7684SQL\u8BED\u53E5\u4EE5\u53CA\u76F8\u5E94\u7684\u53C2\u6570\u4FE1\u606F</li><li><code>Configuration</code> MyBatis\u6240\u6709\u7684\u914D\u7F6E\u4FE1\u606F\u90FD\u7EF4\u6301\u5728Configuration\u5BF9\u8C61\u4E4B\u4E2D\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',41),n={href:"https://pdai.tech/md/framework/orm-mybatis/mybatis-y-arch.html",target:"_blank",rel:"noopener noreferrer"};function h(m,u){const a=c("ExternalLinkIcon");return i(),s("div",null,[o,e("p",null,[e("a",n,[r("MyBatis\u8BE6\u89E3 - \u603B\u4F53\u6846\u67B6\u8BBE\u8BA1"),d(a)])])])}const S=t(p,[["render",h],["__file","mybatis-y-arch.html.vue"]]);export{S as default};
