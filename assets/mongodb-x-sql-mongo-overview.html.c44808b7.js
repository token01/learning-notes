import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as t,a as e,b as n,d as i,f as d,r}from"./app.7119a543.js";const o={},u=e("h1",{id:"\u4ECEsql\u5230mongodb\u4E4B\u6982\u5FF5\u7BC7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4ECEsql\u5230mongodb\u4E4B\u6982\u5FF5\u7BC7","aria-hidden":"true"},"#"),n(" \u4ECESQL\u5230MongoDB\u4E4B\u6982\u5FF5\u7BC7")],-1),c=e("h2",{id:"_1-\u6982\u5FF5\u5BF9\u5E94\u5173\u7CFB",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-\u6982\u5FF5\u5BF9\u5E94\u5173\u7CFB","aria-hidden":"true"},"#"),n(" 1. \u6982\u5FF5\u5BF9\u5E94\u5173\u7CFB")],-1),v=e("p",null,"SQL \u672F\u8BED\u548C\u6982\u5FF5\u4EE5\u53CA\u76F8\u5E94\u7684 MongoDB \u672F\u8BED\u548C\u6982\u5FF5.",-1),m=e("p",null,"\u4E0B\u8868\u4ECB\u7ECD\u4E86\u5404\u79CD SQL \u672F\u8BED\u548C\u6982\u5FF5\u4EE5\u53CA\u76F8\u5E94\u7684 MongoDB \u672F\u8BED\u548C\u6982\u5FF5.",-1),p=e("thead",null,[e("tr",null,[e("th",null,"SQL\u672F\u8BED/\u6982\u5FF5"),e("th",null,"MongoDB \u672F\u8BED/\u6982\u5FF5")])],-1),b=e("td",null,"database",-1),h={href:"https://docs.mongodb.com/manual/reference/glossary/#term-database",target:"_blank",rel:"noopener noreferrer"},g=e("td",null,"table",-1),_={href:"https://docs.mongodb.com/manual/reference/glossary/#term-collection",target:"_blank",rel:"noopener noreferrer"},x=e("td",null,"row",-1),f={href:"https://docs.mongodb.com/manual/reference/glossary/#term-document",target:"_blank",rel:"noopener noreferrer"},E={href:"https://docs.mongodb.com/manual/reference/glossary/#term-bson",target:"_blank",rel:"noopener noreferrer"},L=e("td",null,"column",-1),S={href:"https://docs.mongodb.com/manual/reference/glossary/#term-field",target:"_blank",rel:"noopener noreferrer"},M=e("td",null,"index",-1),T={href:"https://docs.mongodb.com/manual/reference/glossary/#term-index",target:"_blank",rel:"noopener noreferrer"},q=e("td",null,"table joins \uFF08\u8868\u8054\u63A5\uFF09",-1),k={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"embedded documents \uFF08\u5D4C\u5165\u5F0F\u6587\u6863\uFF09",-1),A=e("td",null,"primary key \u6307\u5B9A\u4EFB\u4F55\u552F\u4E00\u7684\u5217\u6216\u8005\u5217\u7EC4\u5408\u4F5C\u4E3A\u4E3B\u952E",-1),R={href:"https://docs.mongodb.com/manual/reference/glossary/#term-primary-key",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.mongodb.com/manual/reference/glossary/#term-id",target:"_blank",rel:"noopener noreferrer"},C=e("td",null,"aggregation (\u5982\uFF1Agroup by)",-1),B=e("code",null,"aggregation pipeline \uFF08\u805A\u5408\u7BA1\u9053\uFF09",-1),O={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},I=e("td",null,"SELECT INTO NEW_TABLE",-1),N={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/out/#pipe._S_out",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},$=e("td",null,"MERGE INTO TABLE",-1),j={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge",target:"_blank",rel:"noopener noreferrer"},P={href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"},U=e("td",null,"transactions",-1),W={href:"https://docs.mongodb.com/manual/core/transactions/",target:"_blank",rel:"noopener noreferrer"},F=d(`<blockquote><p>TIP</p><p><em>\u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\uFF0C</em> <code>\u975E\u89C4\u8303\u5316\u6570\u636E\u6A21\u578B\uFF08\u5D4C\u5165\u5F0F\u6587\u6863\u548C\u6570\u7EC4\uFF09 denormalized data model (embedded documents and arrays)</code> <em>\u5C06\u7EE7\u7EED\u662F\u60A8\u6570\u636E\u548C\u7528\u4F8B\u7684\u6700\u4F73\u9009\u62E9\uFF0C\u800C\u4E0D\u662F\u591A\u6587\u6863\u4E8B\u52A1. \u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BF9\u4E8E\u8BB8\u591A\u573A\u666F\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u9002\u5F53\u7684\u5EFA\u6A21\u5C06\u6700\u5927\u9650\u5EA6\u5730\u51CF\u5C11\u5BF9</em> <code>\u591A\u6587\u6863\u4E8B\u52A1\uFF08multi-document transactions\uFF09</code><em>\u7684\u9700\u6C42\u3002</em></p></blockquote><h2 id="_2-\u53EF\u6267\u884C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u53EF\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a> 2. \u53EF\u6267\u884C\u6587\u4EF6</h2><p>\u4E0B\u8868\u663E\u793A\u4E86\u4E00\u4E9B\u6570\u636E\u5E93\u53EF\u6267\u884C\u6587\u4EF6\u548C\u76F8\u5E94\u7684 MongoDB \u53EF\u6267\u884C\u6587\u4EF6\u3002 \u8FD9\u5F20\u8868\u5E76\u4E0D\u662F\u8BE6\u5C3D\u65E0\u9057\u7684\u3002</p><table><thead><tr><th></th><th>MongoDB</th><th>MySQL</th><th>Oracle</th><th>Informix</th><th>DB2</th></tr></thead><tbody><tr><td>Database Server</td><td>mongod</td><td>mysqld</td><td>oracle</td><td>IDS</td><td>DB2 Server</td></tr><tr><td>Database Client</td><td>mongo</td><td>mysql</td><td>sqlplus</td><td>DB-Access</td><td>DB2 Client</td></tr></tbody></table><h2 id="_3-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-\u793A\u4F8B" aria-hidden="true">#</a> 3. \u793A\u4F8B</h2><p>\u4E0B\u8868\u663E\u793A\u4E86\u5404\u79CD SQL \u8BED\u53E5\u548C\u76F8\u5E94\u7684 MongoDB \u8BED\u53E5\u3002 \u8868\u4E2D\u7684\u4F8B\u5B50\u5047\u5B9A\u4EE5\u4E0B\u6761\u4EF6:</p><ul><li>Sql \u793A\u4F8B\u5047\u8BBE\u4E00\u4E2A\u540D\u4E3A people \u7684\u8868\u3002</li><li>MongoDB \u7684\u793A\u4F8B\u5047\u5B9A\u4E00\u4E2A\u540D\u4E3A people \u7684\u96C6\u5408\u5305\u542B\u4EE5\u4E0B\u539F\u578B\u7684\u6587\u6863\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;509a8fb2f3f4948bd2f983a0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user_id</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-create-and-alter" tabindex="-1"><a class="header-anchor" href="#_3-1-create-and-alter" aria-hidden="true">#</a> 3.1 Create and Alter</h3><h4 id="_3-1-1-create-table" tabindex="-1"><a class="header-anchor" href="#_3-1-1-create-table" aria-hidden="true">#</a> 3.1.1 CREATE TABLE</h4><ul><li>SQL \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE TABLE people (
    id MEDIUMINT NOT NULL
        AUTO_INCREMENT,
    user_id Varchar(30),
    age Number,
    status char(1),
    PRIMARY KEY (id)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.insertOne( {
    user_id: &quot;abc123&quot;,
    age: 55,
    status: &quot;A&quot;
 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-alter-table-add" tabindex="-1"><a class="header-anchor" href="#_3-1-2-alter-table-add" aria-hidden="true">#</a> 3.1.2 ALTER TABLE / ADD</h4><ul><li>SQL\u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER TABLE people
ADD join_date DATETIME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.updateMany(
    { },
    { $set: { join_date: new Date() } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u96C6\u5408\u4E0D\u63CF\u8FF0\u6216\u5F3A\u5236\u6267\u884C\u5176\u6587\u6863\u7684\u7ED3\u6784\uFF1B\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u96C6\u5408\u7EA7\u522B\u4E0A\u6CA1\u6709\u7ED3\u6784\u4E0A\u7684\u6539\u53D8\u3002</p>`,20),H={href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set",target:"_blank",rel:"noopener noreferrer"},X=d(`<h4 id="_3-1-3-alter-table-drop-column" tabindex="-1"><a class="header-anchor" href="#_3-1-3-alter-table-drop-column" aria-hidden="true">#</a> 3.1.3 ALTER TABLE / DROP COLUMN</h4><ul><li>SQL\u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER TABLE people
DROP COLUMN join_date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.updateMany(
    { },
    { $unset: { &quot;join_date&quot;: &quot;&quot; } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u96C6\u5408\u4E0D\u63CF\u8FF0\u6216\u5F3A\u5236\u6267\u884C\u5176\u6587\u6863\u7684\u7ED3\u6784\uFF1B\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u96C6\u5408\u7EA7\u522B\u4E0A\u6CA1\u6709\u7ED3\u6784\u4E0A\u7684\u6539\u53D8\u3002</p>`,6),V={href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"},K={href:"https://docs.mongodb.com/manual/reference/operator/update/unset/#up._S_unset",target:"_blank",rel:"noopener noreferrer"},Y=d(`<h4 id="_3-1-4-create-index" tabindex="-1"><a class="header-anchor" href="#_3-1-4-create-index" aria-hidden="true">#</a> 3.1.4 CREATE INDEX</h4><ul><li>SQL \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE INDEX idx_user_id_asc
ON people(user_id)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.createIndex( { user_id: 1 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-1-5-create-index-multi" tabindex="-1"><a class="header-anchor" href="#_3-1-5-create-index-multi" aria-hidden="true">#</a> 3.1.5 CREATE INDEX / Multi</h4><ul><li>SQL\u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE INDEX
       idx_user_id_asc_age_desc
ON people(user_id, age DESC)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MongoDB \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.createIndex( { user_id: 1, age: -1 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-1-6-drop-table" tabindex="-1"><a class="header-anchor" href="#_3-1-6-drop-table" aria-hidden="true">#</a> 3.1.6 DROP TABLE</h4><ul><li>SQL\u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DROP TABLE people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MongoDB \u6A21\u5F0F\u8BED\u53E5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.drop()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-insert" tabindex="-1"><a class="header-anchor" href="#_3-2-insert" aria-hidden="true">#</a> 3.2 Insert</h3><p>\u4E0B\u8868\u663E\u793A\u4E86\u4E0E\u5411\u8868\u4E2D\u63D2\u5165\u8BB0\u5F55\u76F8\u5173\u7684\u5404\u79CD SQL \u8BED\u53E5\u4EE5\u53CA\u76F8\u5E94\u7684 MongoDB \u8BED\u53E5\u3002</p><ul><li>SQL INSERT \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>INSERT INTO people(user_id,
                  age,
                  status)
VALUES (&quot;bcd001&quot;,
        45,
        &quot;A&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb insertOne() \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.insertOne(
   { user_id: &quot;bcd001&quot;, age: 45, status: &quot;A&quot; }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-select" tabindex="-1"><a class="header-anchor" href="#_3-3-select" aria-hidden="true">#</a> 3.3 Select</h3><p>\u4E0B\u8868\u663E\u793A\u4E86\u4E0E\u4ECE\u8868\u4E2D\u8BFB\u53D6\u8BB0\u5F55\u76F8\u5173\u7684\u5404\u79CD SQL \u8BED\u53E5\u4EE5\u53CA\u76F8\u5E94\u7684 MongoDB \u8BED\u53E5\u3002</p>`,23),z=e("p",null,"NOTE\uFF1A",-1),G={href:"https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"},J=e("code",null,"_id",-1),Z={href:"https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/#projection",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"_id",-1),ne={href:"https://docs.mongodb.com/manual/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"},ae=d(`<h4 id="_3-3-1-select-where" tabindex="-1"><a class="header-anchor" href="#_3-3-1-select-where" aria-hidden="true">#</a> 3.3.1 SELECT ... WHERE</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT user_id, status
FROM people
WHERE status = &quot;A&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.find(
    { status: &quot;A&quot; },
    { user_id: 1, status: 1, _id: 0 }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-select-and" tabindex="-1"><a class="header-anchor" href="#_3-3-2-select-and" aria-hidden="true">#</a> 3.3.2 SELECT ... AND</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT *
FROM people
WHERE age &gt; 25
AND   age &lt;= 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.find(
   { age: { $gt: 25, $lte: 50 } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-3-select-or" tabindex="-1"><a class="header-anchor" href="#_3-3-3-select-or" aria-hidden="true">#</a> 3.3.3 SELECT ... OR</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT *
FROM people
WHERE status = &quot;A&quot;
OR age = 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.find(
    { $or: [ { status: &quot;A&quot; } , { age: 50 } ] }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-4-select-like" tabindex="-1"><a class="header-anchor" href="#_3-3-4-select-like" aria-hidden="true">#</a> 3.3.4 SELECT ... LIKE</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM people
WHERE user_id like &quot;%bc%&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.find( { user_id: /bc/ } )

-or-

db.people.find( { user_id: { $regex: /bc/ } } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-5-select-oeder-by" tabindex="-1"><a class="header-anchor" href="#_3-3-5-select-oeder-by" aria-hidden="true">#</a> 3.3.5 SELECT ... OEDER BY</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT *
FROM people
WHERE status = &quot;A&quot;
ORDER BY user_id ASC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.find( { status: &quot;A&quot; } ).sort( { user_id: 1 } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-6-select-count" tabindex="-1"><a class="header-anchor" href="#_3-3-6-select-count" aria-hidden="true">#</a> 3.3.6 SELECT ... COUNT</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT COUNT(user_id)
FROM people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.count( { user_id: { $exists: true } } )

or

db.people.find( { user_id: { $exists: true } } ).count()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-7-select-distinct" tabindex="-1"><a class="header-anchor" href="#_3-3-7-select-distinct" aria-hidden="true">#</a> 3.3.7 SELECT DISTINCT</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT DISTINCT(status)
FROM people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.aggregate( [ { $group : { _id : &quot;$status&quot; } } ] )

\u6216\u8005\uFF0C\u5BF9\u4E8E\u4E0D\u540C\u7684\u4E0D\u8D85\u8FC7 [BSON \u5927\u5C0F\u9650\u5236](https://docs.mongodb.com/manual/reference/limits/#limit-bson-document-size) \u7684\u503C\u96C6

db.people.distinct( &quot;status&quot; )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-8-select-limit-skip" tabindex="-1"><a class="header-anchor" href="#_3-3-8-select-limit-skip" aria-hidden="true">#</a> 3.3.8 SELECT ... LIMIT SKIP</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT *
FROM people
LIMIT 5
SKIP 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.find().limit(5).skip(10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-9-explain-select" tabindex="-1"><a class="header-anchor" href="#_3-3-9-explain-select" aria-hidden="true">#</a> 3.3.9 EXPLAIN SELECT</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>EXPLAIN SELECT *
FROM people
WHERE status = &quot;A&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.find( { status: &quot;A&quot; } ).explain()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-update-records" tabindex="-1"><a class="header-anchor" href="#_3-4-update-records" aria-hidden="true">#</a> 3.4 Update Records</h3><p>\u4E0B\u9762\u663E\u793A\u4E86\u4E0E\u66F4\u65B0\u8868\u4E2D\u73B0\u6709\u8BB0\u5F55\u76F8\u5173\u7684\u5404\u79CD SQL \u8BED\u53E5\u4EE5\u53CA\u76F8\u5E94\u7684 MongoDB \u8BED\u53E5\u3002</p><h4 id="_3-4-1-update-set" tabindex="-1"><a class="header-anchor" href="#_3-4-1-update-set" aria-hidden="true">#</a> 3.4.1 UPDATE ... SET</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>UPDATE people
SET status = &quot;C&quot;
WHERE age &gt; 25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.updateMany(
   { age: { $gt: 25 } },
   { $set: { status: &quot;C&quot; } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-2-update-inc" tabindex="-1"><a class="header-anchor" href="#_3-4-2-update-inc" aria-hidden="true">#</a> 3.4.2 UPDATE ... INC</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>UPDATE people
SET age = age + 3
WHERE status = &quot;A&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.updateMany(
   { status: &quot;A&quot; } ,
   { $inc: { age: 3 } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-delete-records" tabindex="-1"><a class="header-anchor" href="#_3-5-delete-records" aria-hidden="true">#</a> 3.5 Delete Records</h3><p>\u4E0B\u9762\u663E\u793A\u4E86\u4E0E\u4ECE\u8868\u4E2D\u5220\u9664\u8BB0\u5F55\u76F8\u5173\u7684\u5404\u79CD SQL \u8BED\u53E5\u4EE5\u53CA\u76F8\u5E94\u7684 MongoDB \u8BED\u53E5\u3002</p><h4 id="_3-5-1-delete-where" tabindex="-1"><a class="header-anchor" href="#_3-5-1-delete-where" aria-hidden="true">#</a> 3.5.1 DELETE WHERE</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE FROM people
WHERE status = &quot;D&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.deleteMany( { status: &quot;D&quot; } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-5-2-delete" tabindex="-1"><a class="header-anchor" href="#_3-5-2-delete" aria-hidden="true">#</a> 3.5.2 DELETE</h4><ul><li>SQL \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DELETE FROM people
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Mongodb \u8BED\u53E5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.people.deleteMany({})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,70),ie={href:"https://jelly.jd.com/exp/detail?id=5edf432cc27b86015c50187a",target:"_blank",rel:"noopener noreferrer"},de=e("strong",null,"\u4ECE SQL \u5230 MongoDB \u4E4B\u6982\u5FF5\u7BC7",-1);function le(se,te){const a=r("ExternalLinkIcon");return s(),t("div",null,[u,c,v,m,e("table",null,[p,e("tbody",null,[e("tr",null,[b,e("td",null,[e("a",h,[n("database"),i(a)])])]),e("tr",null,[g,e("td",null,[e("a",_,[n("collection"),i(a)])])]),e("tr",null,[x,e("td",null,[e("a",f,[n("document "),i(a)]),n("\u6216 "),e("a",E,[n("BSON "),i(a)]),n("document")])]),e("tr",null,[L,e("td",null,[e("a",S,[n("field"),i(a)])])]),e("tr",null,[M,e("td",null,[e("a",T,[n("index"),i(a)])])]),e("tr",null,[q,e("td",null,[e("a",k,[n("$lookup "),i(a)]),n(", "),D])]),e("tr",null,[A,e("td",null,[e("a",R,[n("primary key "),i(a)]),n("\u5728 MongoDB \u4E2D, \u4E3B\u952E\u81EA\u52A8\u8BBE\u7F6E\u4E3A "),e("a",y,[n("_id "),i(a)]),n("\u5B57\u6BB5")])]),e("tr",null,[C,e("td",null,[B,n("\u53C2\u8003\uFF1A "),e("a",O,[n("SQL to Aggregation Mapping Chart"),i(a)])])]),e("tr",null,[I,e("td",null,[e("a",N,[n("$out "),i(a)]),n("\u53C2\u8003\uFF1A "),e("a",Q,[n("SQL to Aggregation Mapping Chart"),i(a)])])]),e("tr",null,[$,e("td",null,[e("a",j,[n("$merge "),i(a)]),n("\uFF08\u4ECEMongoDB 4.2\u5F00\u59CB\u53EF\u7528\uFF09 \u53C2\u8003\uFF1A "),e("a",P,[n("SQL to Aggregation Mapping Chart"),i(a)])])]),e("tr",null,[U,e("td",null,[e("a",W,[n("transactions"),i(a)])])])])]),F,e("p",null,[n("\u4F46\u662F\uFF0C\u5728\u6587\u6863\u7EA7\u522B\uFF0C "),e("a",H,[n("updateMany() "),i(a)]),n("\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u7528 "),e("a",w,[n("$set "),i(a)]),n("\u64CD\u4F5C\u7B26\u5411\u73B0\u6709\u6587\u6863\u6DFB\u52A0\u5B57\u6BB5\u3002")]),X,e("p",null,[n("\u4F46\u662F\uFF0C\u5728\u6587\u6863\u7EA7\u522B\uFF0C "),e("a",V,[n("updateMany() "),i(a)]),n("\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u7528 "),e("a",K,[n("$unset "),i(a)]),n("\u64CD\u4F5C\u7B26\u4ECE\u6587\u6863\u4E2D\u5220\u9664\u5B57\u6BB5\u3002")]),Y,e("blockquote",null,[z,e("p",null,[e("a",G,[n("find() "),i(a)]),n("\u65B9\u6CD5\u603B\u662F\u5305\u542B\u8FD4\u56DE\u6587\u6863\u4E2D\u7684 "),J,n(" \u5B57\u6BB5\uFF0C\u9664\u975E\u901A\u8FC7 "),e("a",Z,[n("projection "),i(a)]),n("\u7279\u522B\u6392\u9664\u3002 \u4E0B\u9762\u7684\u4E00\u4E9B SQL \u67E5\u8BE2\u53EF\u80FD\u5305\u542B\u4E00\u4E2A "),ee,n(" \u5B57\u6BB5\u6765\u53CD\u6620\u8FD9\u4E00\u70B9\uFF0C\u5373\u4F7F\u8BE5\u5B57\u6BB5\u6CA1\u6709\u5305\u542B\u5728\u76F8\u5E94\u7684 "),e("a",ne,[n("find() "),i(a)]),n("\u67E5\u8BE2\u4E2D\u3002")])]),ae,e("p",null,[e("a",ie,[de,i(a)])])])}const ue=l(o,[["render",le],["__file","mongodb-x-sql-mongo-overview.html.vue"]]);export{ue as default};
