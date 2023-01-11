import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,b as s,d as e,f as c,r as i}from"./app.9e15f9d2.js";const u={},l=c(`<h1 id="_08-mongodb\u81EA\u589Eid\u5728golang\u4E2D\u7684\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#_08-mongodb\u81EA\u589Eid\u5728golang\u4E2D\u7684\u5B9E\u8DF5" aria-hidden="true">#</a> 08.MongoDB\u81EA\u589EID\u5728golang\u4E2D\u7684\u5B9E\u8DF5</h1><p>MongoDB\u9ED8\u8BA4\u7684ID\u4E0D\u50CFMySQL\u90A3\u6837\u7684\u81EA\u589EID\uFF0C\u5982\u679C\u60F3\u8981\u5B9E\u73B0\u81EA\u589EID\uFF0C\u5219\u9700\u8981\u501F\u52A9\u4E8E\u53E6\u4E00\u5F20\u8868\u5B58\u653E\u8BE5\u8868\u7684ID\uFF0C\u6BCF\u6B21\u5B58\u6570\u636E\u7684\u65F6\u5019\uFF0C\u9700\u8981\u901A\u8FC7findAndModify\u65B9\u6CD5\u5BF9\u8FD9\u4E2AID\u8FDB\u884C\u83B7\u53D6\u5E76\u52A01\u3002</p><h2 id="\u539F\u751Fmongodb\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u539F\u751Fmongodb\u8BED\u53E5" aria-hidden="true">#</a> \u539F\u751FMongoDB\u8BED\u53E5</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>db<span class="token punctuation">.</span>ids<span class="token punctuation">.</span><span class="token keyword">save</span><span class="token punctuation">(</span>{name:<span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> next_id:NumberInt<span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>}<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u4E00\u4E2A\u96C6\u5408\uFF0C\u4E13\u95E8\u5B58\u50A8\u5176\u4ED6\u8868\u7684\u81EA\u589E\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u6570\u5B57\u7C7B\u578B\u662F<code>int64</code>\uFF0C\u8FD9\u91CC\u901A\u8FC7<code>NumberInt()</code>\u65B9\u6CD5\u5C06\u5176\u6307\u5B9A\u4E3A<code>int32</code>\u3002</p><p>\u67E5\u8BE2\u8BE5\u6761\u8BB0\u5F55\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span>getCollection<span class="token punctuation">(</span><span class="token string">&#39;ids&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span>{}<span class="token punctuation">)</span>
{
    <span class="token string">&quot;_id&quot;</span> : ObjectId<span class="token punctuation">(</span><span class="token string">&quot;6234313fb503f6bf2433f4e4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&quot;name&quot;</span> : <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;next_id&quot;</span> : <span class="token number">0</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u589E\u7528\u6237\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u8C03\u7528\u83B7\u53D6ID\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span><span class="token keyword">user</span><span class="token punctuation">.</span><span class="token keyword">save</span><span class="token punctuation">(</span>{
    _id: NumberInt<span class="token punctuation">(</span>db<span class="token punctuation">.</span>ids<span class="token punctuation">.</span>findAndModify<span class="token punctuation">(</span>{
        <span class="token keyword">update</span>:{$inc:{<span class="token string">&#39;next_id&#39;</span>:NumberInt<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>}}<span class="token punctuation">,</span>
        query:{<span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;user&quot;</span>}<span class="token punctuation">,</span>
        new:<span class="token boolean">true</span>
    }<span class="token punctuation">)</span><span class="token punctuation">.</span>next_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
    username: <span class="token string">&quot;eryajf&quot;</span><span class="token punctuation">,</span>
    site:<span class="token string">&quot;https://wiki.eryajf.net&quot;</span>
}<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u6CE8\uFF1A</code>\u56E0\u4E3AfindAndModify\u662F\u4E00\u4E2A\u65B9\u6CD5\u5B8C\u6210\u66F4\u65B0\u67E5\u627E\u4E24\u4E2A\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5177\u6709\u539F\u5B50\u6027\uFF0C\u591A\u7EBF\u7A0B\u4E0D\u4F1A\u51B2\u7A81\u3002</p><p>\u7136\u540E\u67E5\u8BE2\u8BE5\u6761\u8BB0\u5F55\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>$ db<span class="token punctuation">.</span>getCollection<span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find<span class="token punctuation">(</span>{}<span class="token punctuation">)</span>
{
    <span class="token string">&quot;_id&quot;</span> : <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;username&quot;</span> : <span class="token string">&quot;eryajf&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;site&quot;</span> : <span class="token string">&quot;https://wiki.eryajf.net&quot;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="golang\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#golang\u7684\u5B9E\u73B0" aria-hidden="true">#</a> golang\u7684\u5B9E\u73B0</h2><p>golang\u7684\u5B9E\u73B0\u4E0E\u8BED\u53E5\u5DEE\u4E0D\u591A\uFF0C\u8FD9\u91CC\u53EA\u662F\u505A\u793A\u4F8B\u5C55\u793A\uFF0C\u5176\u4E2D\u7684<code>GetDataID(&quot;user&quot;)</code>\u5728\u5B9E\u9645\u751F\u4EA7\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u786E\u4FDD\u5BF9\u5176\u9519\u8BEF\u8FDB\u884C\u5904\u7406\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;context&quot;</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;learnmongo/public&quot;</span>
 <span class="token string">&quot;log&quot;</span>
 <span class="token string">&quot;math/rand&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>

 <span class="token string">&quot;go.mongodb.org/mongo-driver/bson&quot;</span>
 <span class="token string">&quot;go.mongodb.org/mongo-driver/mongo&quot;</span>
 <span class="token string">&quot;go.mongodb.org/mongo-driver/mongo/options&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> DB <span class="token operator">*</span>mongo<span class="token punctuation">.</span>Database

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 uri <span class="token operator">:=</span> <span class="token string">&quot;mongodb://root:123456@10.1.1.3:27017&quot;</span>
 <span class="token keyword">if</span> uri <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;You must set your &#39;MONGODB_URI&#39; environmental variable. See\\n\\t https://docs.mongodb.com/drivers/go/current/usage-examples/#environment-variable&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 client<span class="token punctuation">,</span> err <span class="token operator">:=</span> mongo<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span><span class="token function">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ApplyURI</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 DB <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Database</span><span class="token punctuation">(</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> UserMongo <span class="token keyword">struct</span> <span class="token punctuation">{</span>
 ID    <span class="token builtin">int32</span>  <span class="token string">\`bson:&quot;_id&quot;\`</span>
 Name  <span class="token builtin">string</span> <span class="token string">\`bson:&quot;name&quot;\`</span>
 Phone <span class="token builtin">string</span> <span class="token string">\`bson:&quot;phone&quot;\`</span>
 Email <span class="token builtin">string</span> <span class="token string">\`bson:&quot;email&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> public<span class="token punctuation">.</span><span class="token function">InitDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Disconnect</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">)</span>
 table <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Collection</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u6307\u5B9A\u8868\u540D\u4E3Auser</span>

 <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> table<span class="token punctuation">.</span><span class="token function">InsertMany</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
  UserMongo<span class="token punctuation">{</span>
   ID<span class="token punctuation">:</span>    <span class="token function">GetDataID</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   Name<span class="token punctuation">:</span>  <span class="token string">&quot;eryajf&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   Phone<span class="token punctuation">:</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   Email<span class="token punctuation">:</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;@qq.com&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  UserMongo<span class="token punctuation">{</span>
   ID<span class="token punctuation">:</span>    <span class="token function">GetDataID</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   Name<span class="token punctuation">:</span>  <span class="token string">&quot;liql&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   Phone<span class="token punctuation">:</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
   Email<span class="token punctuation">:</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;@qq.com&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;end\u300C\u{1F44B}\u300D&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetDataID</span><span class="token punctuation">(</span>collname <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int32</span> <span class="token punctuation">{</span>
 table <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Collection</span><span class="token punctuation">(</span><span class="token string">&quot;ids&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u6307\u5B9A\u8868\u540D\u4E3Aids\u8868</span>
 <span class="token keyword">var</span> result <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Name   <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot; bson:&quot;name&quot;\`</span>
  NextID <span class="token builtin">int32</span>  <span class="token string">\`json:&quot;next_id&quot; bson:&quot;next_id&quot;\`</span>
 <span class="token punctuation">}</span>
 table<span class="token punctuation">.</span><span class="token function">FindOneAndUpdate</span><span class="token punctuation">(</span>
  context<span class="token punctuation">.</span><span class="token function">TODO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  bson<span class="token punctuation">.</span>M<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> collname<span class="token punctuation">}</span><span class="token punctuation">,</span>
  bson<span class="token punctuation">.</span>M<span class="token punctuation">{</span><span class="token string">&quot;$inc&quot;</span><span class="token punctuation">:</span> bson<span class="token punctuation">.</span>M<span class="token punctuation">{</span><span class="token string">&quot;next_id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>result<span class="token punctuation">)</span>
 <span class="token keyword">return</span> result<span class="token punctuation">.</span>NextID
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u589EID\u4ECE\u89C6\u89C9\u4E0A\u66F4\u52A0\u76F4\u89C2\uFF0C\u4E0EDB\u4EA4\u4E92\u67E5\u8BE2\u7684\u65F6\u5019\u4E5F\u66F4\u52A0\u7B80\u4FBF\uFF0C\u67D0\u4E9B\u573A\u666F\u4E2D\u662F\u53EF\u53D6\u7684\u65B9\u6848\u3002</p>`,16),k={href:"http://www.dotcoo.com/post-39.html",target:"_blank",rel:"noopener noreferrer"};function r(d,v){const a=i("ExternalLinkIcon");return p(),o("div",null,[l,n("ul",null,[n("li",null,[s("\u53C2\u8003\uFF1A"),n("a",k,[s("Mongodb \u81EA\u52A8\u589E\u957F \u81EA\u589Eid \u5B9E\u73B0"),e(a)])])])])}const g=t(u,[["render",r],["__file","08.MongoDB\u81EA\u589EID\u5728golang\u4E2D\u7684\u5B9E\u8DF5.html.vue"]]);export{g as default};
