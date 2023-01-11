import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,a as n,b as s,d as t,f as c,r as u}from"./app.98b6d306.js";const i={},l=c(`<h1 id="_07-\u518D\u63A2-\u5229\u7528gorm\u81EA\u8EAB\u63D0\u4F9B\u7684\u65B9\u6CD5\u5B9E\u73B0mysql\u4E2D\u6570\u636E\u5173\u8054\u7684\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#_07-\u518D\u63A2-\u5229\u7528gorm\u81EA\u8EAB\u63D0\u4F9B\u7684\u65B9\u6CD5\u5B9E\u73B0mysql\u4E2D\u6570\u636E\u5173\u8054\u7684\u80FD\u529B" aria-hidden="true">#</a> 07.\u518D\u63A2-\u5229\u7528gorm\u81EA\u8EAB\u63D0\u4F9B\u7684\u65B9\u6CD5\u5B9E\u73B0MySQL\u4E2D\u6570\u636E\u5173\u8054\u7684\u80FD\u529B</h1><p>\u4E4B\u524D\u5728\u4F7F\u7528gorm\u5BF9\u63A5MySQL\u7684\u65F6\u5019\uFF0C\u5173\u8054\u7684\u65B9\u6848\u4F7F\u7528\u7684\u662F\u81EA\u5DF1\u7EF4\u62A4\u7684\u5916\u952E\u65B9\u5F0F\uFF0C\u6700\u8FD1\u91CD\u65B0\u63A5\u89E6gorm\uFF0C\u53D1\u73B0\u5176\u5185\u90E8\u652F\u6301\u5173\u8054\u7684\u66F4\u597D\u5B9E\u73B0\uFF0C\u8FD9\u91CC\u6574\u7406\u8BB0\u5F55\u4E00\u4E0B\u3002</p><p>\u4EE3\u7801\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>

 <span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
 <span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB

<span class="token comment">// User \u7528\u6237\u6A21\u578B</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 gorm<span class="token punctuation">.</span>Model
 UserName <span class="token builtin">string</span> <span class="token string">\`gorm:&quot;type:varchar(128)&quot; json:&quot;userName&quot;\`</span> <span class="token comment">// \u7528\u6237\u540D</span>
 NickName <span class="token builtin">string</span> <span class="token string">\`gorm:&quot;type:varchar(128)&quot; json:&quot;nickName&quot;\`</span> <span class="token comment">// \u6635\u79F0</span>
<span class="token punctuation">}</span>

<span class="token comment">// Group \u5206\u7EC4</span>
<span class="token keyword">type</span> Group <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 gorm<span class="token punctuation">.</span>Model
 GroupName <span class="token builtin">string</span>  <span class="token string">\`json:&quot;groupName&quot;  gorm:&quot;type:varchar(128);&quot;\`</span> <span class="token comment">//\u90E8\u95E8\u540D\u79F0</span>
 Users     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>User <span class="token string">\`gorm:&quot;many2many:group_users&quot; json:&quot;users&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token comment">// InitDB \u521D\u59CB\u5316DB</span>
<span class="token keyword">func</span> <span class="token function">InitDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 dsn <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%s@tcp(%s:%d)/%s?charset=%s&amp;collation=%s&amp;%s&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;123465&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  <span class="token number">3306</span><span class="token punctuation">,</span>
  <span class="token string">&quot;test-gorm&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;utf8mb4&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;utf8mb4_general_ci&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;parseTime=true&quot;</span><span class="token punctuation">,</span>
 <span class="token punctuation">)</span>
 <span class="token keyword">var</span> err <span class="token builtin">error</span>
 db<span class="token punctuation">,</span> err <span class="token operator">=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
  <span class="token comment">// \u7981\u7528\u5916\u952E(\u6307\u5B9A\u5916\u952E\u65F6\u4E0D\u4F1A\u5728mysql\u521B\u5EFA\u771F\u5B9E\u7684\u5916\u952E\u7EA6\u675F)</span>
  DisableForeignKeyConstraintWhenMigrating<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//// \u6307\u5B9A\u8868\u524D\u7F00</span>
  <span class="token comment">//NamingStrategy: schema.NamingStrategy{</span>
  <span class="token comment">// TablePrefix: config.Conf.Mysql.TablePrefix + &quot;_&quot;,</span>
  <span class="token comment">//},</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u5316mysql\u6570\u636E\u5E93\u5F02\u5E38: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 2, \u628A\u6A21\u578B\u4E0E\u6570\u636E\u5E93\u4E2D\u7684\u8868\u5BF9\u5E94\u8D77\u6765</span>
 <span class="token function">dbAutoMigrate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u81EA\u52A8\u8FC1\u79FB\u8868\u7ED3\u6784</span>
<span class="token keyword">func</span> <span class="token function">dbAutoMigrate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>
  <span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">&amp;</span>Group<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// 1,\u521D\u59CB\u5316</span>
 <span class="token function">InitDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">// 2,\u521B\u5EFA\u6D4B\u8BD5\u6570\u636E</span>
 <span class="token function">CreateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token function">CreateGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">// \u65B0\u589E\u5173\u8054</span>
 <span class="token function">AddRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">// \u67E5\u8BE2\u5173\u8054</span>
 <span class="token function">SelectRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">// \u66FF\u6362\u5173\u8054</span>
 <span class="token function">ReplaceRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">// \u6E05\u7A7A\u5173\u8054</span>
 <span class="token function">ClearRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">// \u5220\u9664\u5173\u8054</span>
 <span class="token function">RemoveRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">// \u8BA1\u6570\u5173\u8054</span>
 <span class="token function">CountRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">SelectRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> data Group
 id <span class="token operator">:=</span> <span class="token number">1</span>
 err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id = ?&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">&quot;Users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>Error
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;err: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> users <span class="token operator">:=</span> <span class="token keyword">range</span> data<span class="token punctuation">.</span>Users <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">AddRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> group Group
 <span class="token keyword">var</span> users <span class="token punctuation">[</span><span class="token punctuation">]</span>User
 ids <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
 err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id IN (?)&quot;</span><span class="token punctuation">,</span> ids<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span><span class="token punctuation">.</span>Error <span class="token comment">// \u67E5\u8BE2ID\u4E3A1\u548C2\u7684\u7528\u6237</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;err: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

 <span class="token comment">// \u5C06\u521A\u521A\u67E5\u8BE2\u5230\u7684\u7528\u6237\u6DFB\u52A0\u5230\u5206\u7EC4\u4E2D</span>
 db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ReplaceRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> group Group
 <span class="token keyword">var</span> users <span class="token punctuation">[</span><span class="token punctuation">]</span>User
 <span class="token comment">// \u5168\u91CF\u66FF\u6362\u5173\u8054</span>
 ids1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 err1 <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id IN (?)&quot;</span><span class="token punctuation">,</span> ids1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span><span class="token punctuation">.</span>Error <span class="token comment">// \u67E5\u8BE2ID\u4E3A1\u548C2\u7684\u7528\u6237</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;err: %v\\n&quot;</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span> <span class="token comment">// \u5168\u91CF\u66FF\u6362\u5173\u8054</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ClearRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> group Group
 db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
 db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">RemoveRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">var</span> group Group
 <span class="token keyword">var</span> users <span class="token punctuation">[</span><span class="token punctuation">]</span>User
 ids1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
 err1 <span class="token operator">:=</span> public<span class="token punctuation">.</span>DB<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id IN (?)&quot;</span><span class="token punctuation">,</span> ids1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>users<span class="token punctuation">)</span><span class="token punctuation">.</span>Error <span class="token comment">// \u67E5\u8BE2ID\u4E3A1\u548C2\u7684\u7528\u6237</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;err: %v\\n&quot;</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// \u5148\u67E5\u8BE2\u5230\u5C06\u8981\u89E3\u9664\u5173\u8054\u7684group</span>
 err <span class="token operator">:=</span> public<span class="token punctuation">.</span>DB<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get group data failed:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 err <span class="token operator">=</span> public<span class="token punctuation">.</span>DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;delete relation failed:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CountRelation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// \u5173\u8054\u8BA1\u6570</span>
 <span class="token keyword">var</span> group Group
 db<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
 i <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>group<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;i: %v\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// CreateUser \u521B\u5EFA\u7528\u6237</span>
<span class="token keyword">func</span> <span class="token function">CreateUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 User1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>UserName<span class="token punctuation">:</span> <span class="token string">&quot;eryajf1&quot;</span><span class="token punctuation">,</span> NickName<span class="token punctuation">:</span> <span class="token string">&quot;\u4E8C\u4E2B\u8BB2\u68B51&quot;</span><span class="token punctuation">}</span>
 User2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>UserName<span class="token punctuation">:</span> <span class="token string">&quot;eryajf2&quot;</span><span class="token punctuation">,</span> NickName<span class="token punctuation">:</span> <span class="token string">&quot;\u4E8C\u4E2B\u8BB2\u68B52&quot;</span><span class="token punctuation">}</span>
 User3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>UserName<span class="token punctuation">:</span> <span class="token string">&quot;eryajf3&quot;</span><span class="token punctuation">,</span> NickName<span class="token punctuation">:</span> <span class="token string">&quot;\u4E8C\u4E2B\u8BB2\u68B53&quot;</span><span class="token punctuation">}</span>
 User4 <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>UserName<span class="token punctuation">:</span> <span class="token string">&quot;eryajf4&quot;</span><span class="token punctuation">,</span> NickName<span class="token punctuation">:</span> <span class="token string">&quot;\u4E8C\u4E2B\u8BB2\u68B54&quot;</span><span class="token punctuation">}</span>
 User5 <span class="token operator">:=</span> <span class="token operator">&amp;</span>User<span class="token punctuation">{</span>UserName<span class="token punctuation">:</span> <span class="token string">&quot;eryajf5&quot;</span><span class="token punctuation">,</span> NickName<span class="token punctuation">:</span> <span class="token string">&quot;\u4E8C\u4E2B\u8BB2\u68B55&quot;</span><span class="token punctuation">}</span>
 db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User1<span class="token punctuation">)</span>
 db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User2<span class="token punctuation">)</span>
 db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User3<span class="token punctuation">)</span>
 db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User4<span class="token punctuation">)</span>
 db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>User5<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">CreateGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 g1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Group<span class="token punctuation">{</span>GroupName<span class="token punctuation">:</span> <span class="token string">&quot;ops&quot;</span><span class="token punctuation">}</span>
 g2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Group<span class="token punctuation">{</span>GroupName<span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">}</span>
 db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Group<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g1<span class="token punctuation">)</span>
 db<span class="token punctuation">.</span><span class="token function">Debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Group<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={href:"https://gorm.io/zh_CN/docs/many_to_many.html",target:"_blank",rel:"noopener noreferrer"},r={href:"https://blog.csdn.net/qq_39337886/article/details/123475650",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const a=u("ExternalLinkIcon");return o(),e("div",null,[l,n("ul",null,[n("li",null,[s("\u53C2\u8003\uFF1A "),n("ul",null,[n("li",null,[n("a",k,[s("Many To Many"),t(a)])]),n("li",null,[n("a",r,[s("ORM\u6846\u67B6-\u5B9E\u4F53\u5173\u8054"),t(a)])])])])])])}const g=p(i,[["render",d],["__file","07.\u518D\u63A2-\u5229\u7528gorm\u81EA\u8EAB\u63D0\u4F9B\u7684\u65B9\u6CD5\u5B9E\u73B0MySQL\u4E2D\u6570\u636E\u5173\u8054\u7684\u80FD\u529B.html.vue"]]);export{g as default};
