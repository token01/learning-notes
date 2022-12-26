import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as s,d as t,f as p,r as i}from"./app.e9ea989c.js";const l={},u=p('<blockquote><p>\u6D45\u8C08\u5BC6\u7801\u5B66|ECDSA\u7B97\u6CD5</p></blockquote><p><img src="https://tva1.sinaimg.cn/large/008eGmZEgy1gn80yxj5d7j30et08cjrr.jpg" alt="u=1020757406,2710278676&amp;fm=26&amp;gp=0"></p><h2 id="\u751F\u6210\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u7B7E\u540D" aria-hidden="true">#</a> \u751F\u6210\u7B7E\u540D</h2><p>\u5047\u8BBE Alice \u5E0C\u671B\u5BF9\u6D88\u606F$m$\u8FDB\u884C\u7B7E\u540D\uFF0C\u6240\u91C7\u7528\u7684\u692D\u5706\u66F2\u7EBF\u53C2\u6570\u4E3A$D=(p,a,b,G,n,h)$\uFF0C\u5BF9\u5E94\u7684\u5BC6\u94A5\u5BF9\u4E3A$(k,Q)$\uFF0C\u5176\u4E2D\u4E3A\u516C\u94A5$Q$\uFF0C$k$\u4E3A\u79C1\u94A5\u3002</p><p>Alice \u5C06\u6309\u5982\u4E0B\u6B65\u9AA4\u8FDB\u884C\u7B7E\u540D\uFF1A</p><ol><li>\u4EA7\u751F\u4E00\u4E2A\u968F\u673A\u6570$d$\uFF0C$1 \\leq d \\leq n-1$. \uFF08\u7B7E\u540D\u7B97\u6CD5\u9996\u5148\u751F\u6210\u4E00\u4E2A\u4E34\u65F6\u79C1\u516C\u94A5\u5BF9\uFF0C\u8BE5\u4E34\u65F6\u5BC6\u94A5\u5BF9\u7528\u4E8E\u8BA1\u7B97 r \u548C s \u503C\u3002\uFF09</li><li>\u8BA1\u7B97$dG=(x_1,y_1)$\uFF0C\u5C06$x_1$\u5316\u4E3A\u6574\u6570$\\overline{x_1}$.</li><li>\u8BA1\u7B97$r=\\overline{x_1} \\ mod \\ n$\uFF0C\u82E5$r=0$\uFF0C\u5219\u8F6C\u5411\u7B2C1\u6B65. \uFF08r \u503C\u4E3A\u4E34\u65F6\u516C\u94A5\u7684\u5750\u6807 x \u503C\uFF09</li><li>\u8BA1\u7B97 $d^{-1} \\ mod \\ n$</li><li>\u8BA1\u7B97\u54C8\u5E0C\u503C$H(m)$\uFF0C\u5E76\u5C06\u5F97\u5230\u7684\u6BD4\u7279\u4E32\u8F6C\u5316\u4E3A\u6574\u6570 e</li><li>\u8BA1\u7B97$s=d^{-1}(e+kr) \\ mod \\ n$\uFF0C\u82E5$s=0$\uFF0C\u5219\u8F6C\u5411\u7B2C1\u6B65.</li><li>$(r,s)$\u5373\u4E3A Alice \u5BF9\u6D88\u606F\u7684\u7B7E\u540D.</li></ol><h2 id="\u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u9A8C\u8BC1" aria-hidden="true">#</a> \u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u9A8C\u8BC1</h2><p>\u4E3A\u9A8C\u8BC1 Alice \u5BF9\u6D88\u606F m \u7684\u7B7E\u540D$(r,s)$\uFF0CBob \u9700\u8981\u5F97\u5230 Alice \u6240\u7528\u7684\u692D\u5706\u66F2\u7EBF\u53C2\u6570$D=(p,a,b,G,n,h)$\u4EE5\u53CA Alice \u7684\u516C\u94A5 Q\u3002</p><p>\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u9A8C\u8BC1 r \u548C s \u662F\u533A\u95F4$[1,n-1]$\u4E0A\u7684\u6574\u6570.</li><li>\u8BA1\u7B97$H(m)$\u5E76\u5C06\u5176\u8F6C\u5316\u4E3A\u6574\u6570 e.</li><li>\u8BA1\u7B97$w=s^{-1} \\ mod \\ n$</li><li>\u8BA1\u7B97$u_1=ew \\ mod \\ n$\u4EE5\u53CA$u_2=rw \\ mod \\ n$</li><li>\u8BA1\u7B97$X=(x_1,y_1)=u_1G+u_2Q$</li><li>\u82E5$X=O$\uFF0C\u5219\u62D2\u7EDD\u7B7E\u540D\uFF0C\u5426\u5219\u5C06 X \u7684$x$\u5750\u6807$x_1$\u8F6C\u5316\u4E3A\u6574\u6570\uFF0C\u5E76\u8BA1$\\overline{x_1}$\u7B97$v=\\overline{x_1} \\ mod \\ n$</li><li>\u5F53\u4E14\u4EC5\u5F53$v=r$\u65F6\uFF0C\u7B7E\u540D\u901A\u8FC7\u9A8C\u8BC1.</li></ol><h2 id="\u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u6B63\u786E\u6027" tabindex="-1"><a class="header-anchor" href="#\u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u6B63\u786E\u6027" aria-hidden="true">#</a> \u692D\u5706\u66F2\u7EBF\u7B7E\u540D\u6B63\u786E\u6027</h2><p>\u8981\u8BC1\u660E$v=r$\uFF0C\u53EA\u9700\u8981\u8BC1\u660E$X=dG$\u5373\u53EF\u3002</p><p>\u8BC1\u660E\u6B65\u9AA4\uFF1A</p><p>\u4EE4\uFF1A$C=u_1G + u_2Q = u_1G+u_2kG=(u_1+u_2k)G$</p><p>\u5C06$u_1$\u3001$u_2$\u5E26\u5165\uFF1A$C=(ew+rwk)G=(e+rk)wG=(e+rk)s^{-1}G$</p>',15),r=n("p",null,[s("\u7531$s=d^{-1}(e+kr) \\mod n$\u5F97\u51FA$s"),n("sup",{"-1":""},"{-1}=d(e+kr)"),s(" \\mod n$\uFF0C\u5E26\u5165\uFF1A $C=(e+kr)d(d+kr)^{-1}G = dG$")],-1),k=p(`<h2 id="\u4F7F\u7528\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6848\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u6848\u4F8B</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u751F\u6210\u7B7E\u540D----</span>
	<span class="token comment">//\u58F0\u660E\u660E\u6587</span>
	message <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//\u751F\u6210\u79C1\u94A5</span>
	privateKey<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ecdsa<span class="token punctuation">.</span><span class="token function">GenerateKey</span><span class="token punctuation">(</span>elliptic<span class="token punctuation">.</span><span class="token function">P256</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rand<span class="token punctuation">.</span>Reader<span class="token punctuation">)</span>
	<span class="token comment">//\u751F\u6210\u516C\u94A5</span>
	pub <span class="token operator">:=</span> privateKey<span class="token punctuation">.</span>PublicKey
	<span class="token comment">//\u5C06\u660E\u6587\u6563\u5217</span>
	digest <span class="token operator">:=</span> sha256<span class="token punctuation">.</span><span class="token function">Sum256</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
	<span class="token comment">//\u751F\u6210\u7B7E\u540D</span>
	r<span class="token punctuation">,</span> s<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ecdsa<span class="token punctuation">.</span><span class="token function">Sign</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span>Reader<span class="token punctuation">,</span> privateKey<span class="token punctuation">,</span> digest<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token comment">//\u8BBE\u7F6E\u79C1\u94A5\u7684\u53C2\u6570\u7C7B\u578B\u4E3A\u66F2\u7EBF\u7C7B\u578B</span>
	param <span class="token operator">:=</span> privateKey<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span><span class="token function">Params</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//\u83B7\u5F97\u79C1\u94A5byte\u957F\u5EA6</span>
	curveOrderByteSize <span class="token operator">:=</span> param<span class="token punctuation">.</span>P<span class="token punctuation">.</span><span class="token function">BitLen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">8</span>
	<span class="token comment">//\u83B7\u5F97\u7B7E\u540D\u8FD4\u56DE\u503C\u7684\u5B57\u8282</span>
	rByte<span class="token punctuation">,</span> sByte <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//\u521B\u5EFA\u6570\u7EC4</span>
	signature <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> curveOrderByteSize<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token comment">//\u901A\u8FC7\u6570\u7EC4\u4FDD\u5B58\u4E86\u7B7E\u540D\u7ED3\u679C\u7684\u8FD4\u56DE\u503C</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>signature<span class="token punctuation">[</span>curveOrderByteSize<span class="token operator">-</span><span class="token function">len</span><span class="token punctuation">(</span>rByte<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rByte<span class="token punctuation">)</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>signature<span class="token punctuation">[</span>curveOrderByteSize<span class="token operator">*</span><span class="token number">2</span><span class="token operator">-</span><span class="token function">len</span><span class="token punctuation">(</span>sByte<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> sByte<span class="token punctuation">)</span>

	<span class="token comment">//\u9A8C\u8BC1----</span>
	<span class="token comment">//\u5C06\u660E\u6587\u505Ahash\u6563\u5217\uFF0C\u4E3A\u4E86\u9A8C\u8BC1\u7684\u5185\u5BB9\u5BF9\u6BD4</span>
	digest <span class="token operator">=</span> sha256<span class="token punctuation">.</span><span class="token function">Sum256</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
	curveOrderByteSize <span class="token operator">=</span> pub<span class="token punctuation">.</span>Curve<span class="token punctuation">.</span><span class="token function">Params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>P<span class="token punctuation">.</span><span class="token function">BitLen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">8</span>
	<span class="token comment">//\u521B\u5EFA\u4E24\u4E2A\u6574\u5F62\u5BF9\u8C61</span>
	r<span class="token punctuation">,</span> s <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>big<span class="token punctuation">.</span>Int<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">new</span><span class="token punctuation">(</span>big<span class="token punctuation">.</span>Int<span class="token punctuation">)</span>
	<span class="token comment">//\u8BBE\u7F6E\u8BC1\u4E66\u503C</span>
	r<span class="token punctuation">.</span><span class="token function">SetBytes</span><span class="token punctuation">(</span>signature<span class="token punctuation">[</span><span class="token punctuation">:</span>curveOrderByteSize<span class="token punctuation">]</span><span class="token punctuation">)</span>
	s<span class="token punctuation">.</span><span class="token function">SetBytes</span><span class="token punctuation">(</span>signature<span class="token punctuation">[</span>curveOrderByteSize<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

	<span class="token comment">//\u9A8C\u8BC1</span>
	e <span class="token operator">:=</span> ecdsa<span class="token punctuation">.</span><span class="token function">Verify</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>pub<span class="token punctuation">,</span> digest<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	<span class="token keyword">if</span> e <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;failed&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,3),d={href:"https://mindcarver.cn",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/6844903671411671047",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.cn/post/6844903882343071758",target:"_blank",rel:"noopener noreferrer"},$={href:"http://read.pudn.com/downloads54/sourcecode/windows/188357/ECDSA%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0%E5%8F%8A%E5%85%B6%E5%AE%89%E5%85%A8%E6%80%A7%E5%88%86%E6%9E%90.pdf",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhuanlan.zhihu.com/p/94852431",target:"_blank",rel:"noopener noreferrer"};function h(_,f){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,r,k,n("blockquote",null,[n("p",null,[n("a",d,[s("https://mindcarver.cn"),t(a)])]),n("p",null,[n("a",m,[s("https://juejin.cn/post/6844903671411671047"),t(a)])]),n("p",null,[n("a",v,[s("https://juejin.cn/post/6844903882343071758"),t(a)])]),n("p",null,[n("a",$,[s("http://read.pudn.com/downloads54/sourcecode/windows/188357/ECDSA\u7B97\u6CD5\u5B9E\u73B0\u53CA\u5176\u5B89\u5168\u6027\u5206\u6790.pdf"),t(a)])]),n("p",null,[n("a",b,[s("https://zhuanlan.zhihu.com/p/94852431"),t(a)])])])])}const B=e(l,[["render",h],["__file","2.ECDSA.html.vue"]]);export{B as default};
