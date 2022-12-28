import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as o,f as r,r as c}from"./app.093d1351.js";const u={},l=r(`<h1 id="vue-router\u8DEF\u7531\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#vue-router\u8DEF\u7531\u8DF3\u8F6C" aria-hidden="true">#</a> Vue Router\u8DEF\u7531\u8DF3\u8F6C</h1><h2 id="_1-\u7B80\u5355\u7684\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u7684\u8DF3\u8F6C" aria-hidden="true">#</a> 1. \u7B80\u5355\u7684\u8DF3\u8F6C</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-router-push-\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#_2-router-push-\u8DF3\u8F6C" aria-hidden="true">#</a> 2. Router.push() \u8DF3\u8F6C</h2><p>\u60F3\u8981\u5BFC\u822A\u5230\u4E0D\u540C\u7684 URL\uFF0C\u5219\u4F7F\u7528 <code>router.push</code> \u65B9\u6CD5\u3002\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5411 history \u6808\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u8BB0\u5F55\uFF0C\u6240\u4EE5\uFF0C\u5F53\u7528\u6237\u70B9\u51FB\u6D4F\u89C8\u5668\u540E\u9000\u6309\u94AE\u65F6\uFF0C\u5219\u56DE\u5230\u4E4B\u524D\u7684 URL\u3002</p><blockquote><p>\u975Ehistory\uFF0C\u5C31\u65E0\u6CD5\u7528go()</p></blockquote><table><thead><tr><th>\u58F0\u660E\u5F0F</th><th>\u7F16\u7A0B\u5F0F</th></tr></thead><tbody><tr><td><code>&lt;router-link :to=&quot;...&quot;&gt;</code></td><td><code>router.push(...)</code></td></tr></tbody></table><h3 id="_2-1-\u5E38\u7528push-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5E38\u7528push-\u65B9\u6CD5" aria-hidden="true">#</a> 2.1 \u5E38\u7528push()\u65B9\u6CD5</h3><p>\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u53EF\u4EE5\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u8DEF\u5F84\uFF0C\u6216\u8005\u4E00\u4E2A\u63CF\u8FF0\u5730\u5740\u7684\u5BF9\u8C61\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B57\u7B26\u4E32</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5BF9\u8C61</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u547D\u540D\u7684\u8DEF\u7531</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5E26\u67E5\u8BE2\u53C2\u6570\uFF0C\u53D8\u6210 /register?plan=private</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;register&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">plan</span><span class="token operator">:</span> <span class="token string">&#39;private&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-params-\u88AB\u5FFD\u7565\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-2-params-\u88AB\u5FFD\u7565\u7684\u95EE\u9898" aria-hidden="true">#</a> 2.2 params \u88AB\u5FFD\u7565\u7684\u95EE\u9898</h2><p><strong>\u5982\u679C\u63D0\u4F9B\u4E86 <code>path</code>\uFF0C<code>params</code> \u4F1A\u88AB\u5FFD\u7565\uFF0C</strong></p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u9700\u8981\u63D0\u4F9B\u8DEF\u7531\u7684 <code>name</code> \u6216\u624B\u5199\u5B8C\u6574\u7684\u5E26\u6709\u53C2\u6570\u7684 <code>path</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token string">&#39;123&#39;</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> userId <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; /user/123</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/user/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; /user/123</span>
<span class="token comment">// \u8FD9\u91CC\u7684 params \u4E0D\u751F\u6548</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> userId <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// -&gt; /user</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-router-replace-\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#_3-router-replace-\u8DF3\u8F6C" aria-hidden="true">#</a> 3. router.replace() \u8DF3\u8F6C</h2><p>\u8DDF <code>router.push</code> \u5F88\u50CF\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u5C31\u662F\uFF0C<strong>\u5B83\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55</strong>\uFF0C\u800C\u662F\u8DDF\u5B83\u7684\u65B9\u6CD5\u540D\u4E00\u6837 \u2014\u2014 \u66FF\u6362\u6389\u5F53\u524D\u7684 history \u8BB0\u5F55\u3002</p><table><thead><tr><th>\u58F0\u660E\u5F0F</th><th>\u7F16\u7A0B\u5F0F</th></tr></thead><tbody><tr><td><code>&lt;router-link :to=&quot;...&quot; replace&gt;</code></td><td><code>router.replace(...)</code></td></tr></tbody></table><h2 id="_4-router-go-n" tabindex="-1"><a class="header-anchor" href="#_4-router-go-n" aria-hidden="true">#</a> 4. router.go(n)</h2><p>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u610F\u601D\u662F\u5728 <strong>history \u8BB0\u5F55</strong>\u4E2D\u5411\u524D\u6216\u8005\u540E\u9000\u591A\u5C11\u6B65\uFF0C\u7C7B\u4F3C <code>window.history.go(n)</code>\u3002</p><p>\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5728\u6D4F\u89C8\u5668\u8BB0\u5F55\u4E2D\u524D\u8FDB\u4E00\u6B65\uFF0C\u7B49\u540C\u4E8E history.forward()</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// \u540E\u9000\u4E00\u6B65\u8BB0\u5F55\uFF0C\u7B49\u540C\u4E8E history.back()</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// \u524D\u8FDB 3 \u6B65\u8BB0\u5F55</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// \u5982\u679C history \u8BB0\u5F55\u4E0D\u591F\u7528\uFF0C\u90A3\u5C31\u9ED8\u9ED8\u5730\u5931\u8D25\u5457</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,22),i={href:"https://router.vuejs.org/zh/guide/essentials/navigation.html",target:"_blank",rel:"noopener noreferrer"};function d(k,h){const s=c("ExternalLinkIcon");return t(),e("div",null,[l,n("p",null,[n("a",i,[p("\u7F16\u7A0B\u5F0F\u7684\u5BFC\u822A"),o(s)])])])}const b=a(u,[["render",d],["__file","vuerouter-route-jump.html.vue"]]);export{b as default};
