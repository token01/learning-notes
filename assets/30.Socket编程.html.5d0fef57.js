import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.61aab752.js";const p={},e=t(`<h1 id="_30-socket\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#_30-socket\u7F16\u7A0B" aria-hidden="true">#</a> 30.Socket\u7F16\u7A0B</h1><h2 id="_1-\u4EC0\u4E48\u662Fsocket" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fsocket" aria-hidden="true">#</a> 1\uFF0C\u4EC0\u4E48\u662FSocket</h2><p>Socket\u8D77\u6E90\u4E8EUnix\uFF0C\u800CUnix\u57FA\u672C\u54F2\u5B66\u4E4B\u4E00\u5C31\u662F\u201C\u4E00\u5207\u7686\u6587\u4EF6\u201D\uFF0C\u90FD\u53EF\u4EE5\u7528\u201C\u6253\u5F00open \u2013&gt; \u8BFB\u5199write/read \u2013&gt; \u5173\u95EDclose\u201D\u6A21\u5F0F\u6765\u64CD\u4F5C\u3002Socket\u5C31\u662F\u8BE5\u6A21\u5F0F\u7684\u4E00\u4E2A\u5B9E\u73B0\uFF0C\u7F51\u7EDC\u7684Socket\u6570\u636E\u4F20\u8F93\u662F\u4E00\u79CD\u7279\u6B8A\u7684I/O\uFF0CSocket\u4E5F\u662F\u4E00\u79CD\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002Socket\u4E5F\u5177\u6709\u4E00\u4E2A\u7C7B\u4F3C\u4E8E\u6253\u5F00\u6587\u4EF6\u7684\u51FD\u6570\u8C03\u7528\uFF1ASocket()\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6574\u578B\u7684Socket\u63CF\u8FF0\u7B26\uFF0C\u968F\u540E\u7684\u8FDE\u63A5\u5EFA\u7ACB\u3001\u6570\u636E\u4F20\u8F93\u7B49\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7\u8BE5Socket\u5B9E\u73B0\u7684\u3002</p><p>\u5E38\u7528\u7684Socket\u7C7B\u578B\u6709\u4E24\u79CD\uFF1A\u6D41\u5F0FSocket\uFF08SOCK_STREAM\uFF09\u548C\u6570\u636E\u62A5\u5F0FSocket\uFF08SOCK_DGRAM\uFF09\u3002\u6D41\u5F0F\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684Socket\uFF0C\u9488\u5BF9\u4E8E\u9762\u5411\u8FDE\u63A5\u7684TCP\u670D\u52A1\u5E94\u7528\uFF1B\u6570\u636E\u62A5\u5F0FSocket\u662F\u4E00\u79CD\u65E0\u8FDE\u63A5\u7684Socket\uFF0C\u5BF9\u5E94\u4E8E\u65E0\u8FDE\u63A5\u7684UDP\u670D\u52A1\u5E94\u7528\u3002</p><h2 id="_2-tcp\u7684c-s\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#_2-tcp\u7684c-s\u67B6\u6784" aria-hidden="true">#</a> 2\uFF0CTCP\u7684C/S\u67B6\u6784</h2><p><img src="http://t.eryajf.net/imgs/2021/09/f7f1ac997ed8b962.jpg" alt="1560678262840"></p><h2 id="_3-\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> 3\uFF0C\u793A\u4F8B\u4EE3\u7801</h2><h3 id="_1-\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#_1-\u670D\u52A1\u7AEF" aria-hidden="true">#</a> 1\uFF0C\u670D\u52A1\u7AEF</h3><p>\u901A\u8FC7\u5982\u4E0B\u4EE3\u7801\uFF0C\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u63D0\u4F9B\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u7A0B\u5E8F\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u76D1\u542C</span>
 listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> listener<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">//\u963B\u585E\u7B49\u5F85\u7528\u6237\u94FE\u63A5</span>
 conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u63A5\u6536\u7528\u6237\u7684\u8BF7\u6C42</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
 n<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
 <span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err1 = &quot;</span><span class="token punctuation">,</span> err1<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;buf = &quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5173\u95ED\u5F53\u524D\u7528\u6237\u94FE\u63A5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\uFF0C\u5F00\u4E24\u4E2A\u7A97\u53E3\uFF0C\u4E00\u4E2A\u8FD0\u884C\u7A0B\u5E8F\u63D0\u4F9B\u670D\u52A1\uFF0C\u4E00\u4E2A\u8FDE\u63A5\u670D\u52A1\u6A21\u62DF\u5BA2\u6237\u7AEF\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/3dbee9c30c2a0019.jpg" alt="1560678486753"></p><p>\u8FD9\u4E2A\u5730\u65B9\u5728\u4F7F\u7528natcat\u5DE5\u5177\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u4E86\u7EDD\u5BF9\u8DEF\u5F84\u8C03\u7528\u7684\u65B9\u5F0F\uFF0C\u5982\u679C\u60F3\u8981\u5168\u5C40\u5F15\u7528\uFF0C\u9700\u8981\u5148\u52A0\u5165\u5230\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\uFF0C\u4E0D\u7136\u7B49\u4F1A\u513F\u4F1A\u6709\u4E00\u4E2A\u5751\u3002</p><h3 id="_2-\u7528\u4EE3\u7801\u5199\u4E00\u4E2A\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#_2-\u7528\u4EE3\u7801\u5199\u4E00\u4E2A\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> 2\uFF0C\u7528\u4EE3\u7801\u5199\u4E00\u4E2A\u5BA2\u6237\u7AEF</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u4E3B\u52A8\u8FDE\u63A5\u670D\u52A1\u5668</span>
 conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u53D1\u9001\u6570\u636E</span>
 conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;are u ok?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://t.eryajf.net/imgs/2021/09/8712e512cd591e60.jpg" alt="1560678947848"></p><h3 id="_3-\u7B80\u5355\u7248\u5E76\u53D1\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_3-\u7B80\u5355\u7248\u5E76\u53D1\u670D\u52A1\u5668" aria-hidden="true">#</a> 3\uFF0C\u7B80\u5355\u7248\u5E76\u53D1\u670D\u52A1\u5668</h3><p>\u57FA\u672C\u4E0A\u5C31\u662F\u521B\u5EFA\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u63A5\u6536\u591A\u4E2A\u8BF7\u6C42\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net&quot;</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">HandleConn</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u51FD\u6570\u8C03\u7528\u5B8C\u6BD5\uFF0C\u81EA\u52A8\u5173\u95EDconn</span>
 <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token comment">//\u83B7\u53D6\u5BA2\u6237\u7AEF\u7684\u7F51\u7EDC\u5730\u5740\u4FE1\u606F</span>
 addr <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">RemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> <span class="token string">&quot;connect successful&quot;</span><span class="token punctuation">)</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">2048</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u8BFB\u53D6\u7528\u6237\u6570\u636E</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;[%s]: %s\\n&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">//fmt.Println(&quot;len = &quot;, len(string(buf[:n])))</span>
  <span class="token keyword">if</span> <span class="token string">&quot;exit&quot;</span> <span class="token operator">==</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> <span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//\u628A\u6570\u636E\u8F6C\u6362\u4E3A\u5927\u5199\uFF0C\u5728\u53D1\u9001\u7ED9\u7528\u6237</span>
  conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D1\u9001\u6210\u529F&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u76D1\u542C</span>
 listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">defer</span> listener<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u63A5\u6536\u591A\u4E2A\u7528\u6237</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//\u5904\u7406\u7528\u6237\u8BF7\u6C42\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u534F\u7A0B</span>
  <span class="token keyword">go</span> <span class="token function">HandleConn</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\uFF0C\u540C\u6837\u662F\u5728\u4E00\u4E2A\u7A97\u53E3\u8FD0\u884C\u7A0B\u5E8F\uFF0C\u7136\u540E\u4F7F\u7528\u5DE5\u5177\u8FDB\u884C\u8FDE\u63A5\u6D4B\u8BD5\uFF0C\u4F46\u662F\u521A\u521A\u8E29\u4E86\u4E00\u4E2A\u5751\uFF0C\u6211\u4F9D\u65E7\u4F7F\u7528\u7684\u662F\u4E0A\u8FB9\u7EDD\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\uFF0C\u7ED3\u679C\u53D1\u73B0\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/30af9b4f64c42902.jpg" alt="1560685149931"></p><p>\u53EF\u4EE5\u6CE8\u610F\u5230\u4E00\u4E2A\u7EC6\u8282\u5C31\u662F\uFF0C\u539F\u672C\u5E94\u8BE5\u662F\u6211\u8F93\u5165\u4E00\u4E2A\u5185\u5BB9\u5C31\u76F4\u63A5\u8FD4\u56DE\u7684\uFF0C\u7ED3\u679C\u5374\u662F\u5728\u7B2C\u4E8C\u6B21\u53D1\u9001\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u4E86\u7B2C\u4E00\u6B21\u7684\u5185\u5BB9\uFF0C\u597D\u5947\u602A\uFF0C\u4E0D\u77E5\u9053\u5565\u539F\u56E0\u3002\u6700\u540E\u4F7F\u7528\u52A0\u5165\u73AF\u5883\u53D8\u91CF\uFF0C\u76F8\u5BF9\u8DEF\u5F84\u8C03\u7528\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u3002</p><p><img src="http://t.eryajf.net/imgs/2021/09/30cbc2fa68f3a260.jpg" alt="1560685314638"></p><p>\u521A\u521A\u662F\u901A\u8FC7nc\u6765\u6A21\u62DF\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF0C\u73B0\u5728\u5199\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u6765\u8FDB\u884C\u6D4B\u8BD5\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;net&quot;</span>
 <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//\u4E3B\u52A8\u8FDE\u63A5\u670D\u52A1\u5668</span>
 conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;net.Dial err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token keyword">return</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//\u8C03\u7528\u5B8C\u6BD5\uFF0C\u5173\u95ED\u8FDE\u63A5</span>
 <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u4ECE\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0C\u7ED9\u670D\u52A1\u5668\u53D1\u9001\u5185\u5BB9</span>
  str <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">{</span>
   n<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span>Stdin<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">//\u4ECE\u952E\u76D8\u8BFB\u53D6\u5185\u5BB9</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;os.Stdin err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">//\u63A5\u6536\u670D\u52A1\u5668\u56DE\u590D\u7684\u6570\u636E</span>
 <span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u5207\u7247</span>
 buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
 <span class="token keyword">for</span> <span class="token punctuation">{</span>
  n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span> <span class="token comment">//\u63A5\u6536\u670D\u52A1\u5668\u7684\u8BF7\u6C42</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;conn.Read err = &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
   <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//\u6253\u5370\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u7ED3\u679C</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5206\u522B\u8FD0\u884C\u4E24\u8FB9\u6765\u770B\u6548\u679C\uFF1A</p><p><img src="http://t.eryajf.net/imgs/2021/09/ffc05eb6e4698130.jpg" alt="1561000904926"></p>`,27),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","30.Socket\u7F16\u7A0B.html.vue"]]);export{r as default};
