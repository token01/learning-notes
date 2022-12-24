import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as n,b as s,d as e,f as t,r as p}from"./app.7751c0ab.js";const l={},u=t('<blockquote><p>\u6D45\u8C08\u4EE5\u592A\u574A\u6E90\u7801\u5206\u6790\u4E4B\u6316\u77FF\u6D41\u7A0B</p></blockquote><h2 id="\u57FA\u672C\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u67B6\u6784" aria-hidden="true">#</a> \u57FA\u672C\u67B6\u6784</h2><p>\u4EE5\u592A\u574A\u6316\u77FF\u7684\u4E3B\u8981\u6D41\u7A0B\u662F\u7531<code>miner</code>\u5305\u8D1F\u8D23\u7684\uFF0C\u4E0B\u9762\u662F\u57FA\u672C\u7684\u4E00\u4E2A\u67B6\u6784\uFF1A</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1glkzcyd6xhj31am0u0qe0.jpg" alt="image-20201212125409326"></p><p>\u9996\u5148\u5916\u90E8\u662F\u901A\u8FC7<code>miner</code>\u5BF9\u8C61\u8FDB\u884C\u4E86\u64CD\u4F5C\uFF0C<code>miner</code>\u91CC\u9762\u5219\u662F\u5B9E\u7528<code>worker</code>\u5BF9\u8C61\u6765\u5B9E\u73B0\u6316\u77FF\u7684\u6574\u4F53\u529F\u80FD\u3002miner\u51B3\u5B9A\u7740\u662F\u5426\u505C\u6B62\u6316\u77FF\u6216\u8005\u662F\u5426\u53EF\u4EE5\u5F00\u59CB\u6316\u77FF\uFF0C\u540C\u65F6\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u77FF\u5DE5\u7684\u5730\u5740\u6765\u83B7\u53D6\u5956\u52B1\u3002</p><p>\u771F\u6B63\u8C03\u5EA6\u5904\u7406\u6316\u77FF\u76F8\u5173\u7EC6\u8282\u7684\u5219\u662F\u5728worker.go\u91CC\u9762\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E00\u5F20\u603B\u4F53\u7684\u56FE\u3002</p><p><img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gllc2fgu1gj31cw0rwdlc.jpg" alt="image-20201212201358073"></p><p>\u4E0A\u56FE\u6211\u4EEC\u770B\u5230\u6709\u56DB\u4E2A\u5FAA\u73AF\uFF0C\u5206\u522B\u901A\u8FC7\u51E0\u4E2A<code>channel</code>\u8D1F\u8D23\u4E0D\u540C\u7684\u4E8B\uFF1A</p><h3 id="newworkloop" tabindex="-1"><a class="header-anchor" href="#newworkloop" aria-hidden="true">#</a> newWorkLoop</h3><ol><li><code>startCh</code>\uFF1A\u63A5\u6536<code>startCh</code>\u4FE1\u53F7\uFF0C\u5F00\u59CB\u6316\u77FF</li><li><code>chainHeadCh</code>\uFF1A\u8868\u793A\u63A5\u6536\u5230\u65B0\u533A\u5757\uFF0C\u9700\u8981\u7EC8\u6B62\u5F53\u524D\u7684\u6316\u77FF\u5DE5\u4F5C\uFF0C\u5F00\u59CB\u65B0\u7684\u6316\u77FF\u3002</li><li><code>timer.C</code>\uFF1A\u9ED8\u8BA4\u6BCF\u4E09\u79D2\u68C0\u67E5\u4E00\u6B21\u662F\u5426\u6709\u65B0\u4EA4\u6613\u9700\u8981\u5904\u7406\u3002\u5982\u679C\u6709\u5219\u9700\u8981\u91CD\u65B0\u5F00\u59CB\u6316\u77FF\u3002\u4EE5\u4FBF\u5C06\u52A0\u9AD8\u7684\u4EA4\u6613\u4F18\u5148\u6253\u5305\u5230\u533A\u5757\u4E2D\u3002</li></ol><p>\u5728 <code>newWorkLoop</code> \u4E2D\u8FD8\u6709\u4E00\u4E2A\u8F85\u52A9\u4FE1\u53F7\uFF0C<code>resubmitAdjustCh</code> \u548C <code>resubmitIntervalCh</code>\u3002\u8FD0\u884C\u5916\u90E8\u4FEE\u6539timer\u8BA1\u65F6\u5668\u7684\u65F6\u949F\u3002<code>resubmitAdjustCh</code>\u662F\u6839\u636E\u5386\u53F2\u60C5\u51B5\u91CD\u65B0\u8BA1\u7B97\u4E00\u4E2A\u5408\u7406\u7684\u95F4\u9694\u65F6\u95F4\u3002\u800C<code>resubmitIntervalCh</code>\u5219\u5141\u8BB8\u5916\u90E8\uFF0C\u5B9E\u65F6\u901A\u8FC7 <code>Miner</code> \u5B9E\u4F8B\u65B9\u6CD5 <code>SetRecommitInterval</code> \u4FEE\u6539\u95F4\u9694\u65F6\u95F4\u3002</p><h3 id="mainloop" tabindex="-1"><a class="header-anchor" href="#mainloop" aria-hidden="true">#</a> mainLoop</h3><ol><li><code>newWorkCh</code>:\u63A5\u6536\u751F\u6210\u65B0\u7684\u6316\u77FF\u4EFB\u52A1\u4FE1\u53F7</li><li><code>chainSideCh</code>:\u63A5\u6536\u533A\u5757\u94FE\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u65B0\u533A\u5757\u4F5C\u4E3A\u5F53\u524D\u94FE\u5934\u7684\u65C1\u652F\u7684\u4FE1\u53F7</li><li><code>txsCh</code>:\u63A5\u6536\u4EA4\u6613\u6C60\u7684Pending\u4E2D\u65B0\u52A0\u5165\u4E86\u4EA4\u6613\u4E8B\u4EF6\u7684\u4FE1\u53F7</li></ol><p><code>TaskLoop</code>\u5219\u662F\u63D0\u4EA4\u65B0\u7684\u6316\u77FF\u4EFB\u52A1\uFF0C\u800C<code>resultLoop</code>\u5219\u662F\u6210\u529F\u51FA\u5757\u4E4B\u540E\u505A\u7684\u4E00\u4E9B\u5904\u7406\u3002</p><hr><h2 id="\u542F\u52A8\u6316\u77FF" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u6316\u77FF" aria-hidden="true">#</a> \u542F\u52A8\u6316\u77FF</h2><h3 id="\u6316\u77FF\u7684\u53C2\u6570\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6316\u77FF\u7684\u53C2\u6570\u8BBE\u7F6E" aria-hidden="true">#</a> \u6316\u77FF\u7684\u53C2\u6570\u8BBE\u7F6E</h3><p><code>geth</code>\u6316\u77FF\u7684\u53C2\u6570\u8BBE\u7F6E\u5B9A\u4E49\u5728 <code>cmd/utils/flags.go</code> \u6587\u4EF6\u4E2D</p>',18),d=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"\u53C2\u6570"),n("th",{style:{"text-align":"left"}},"\u9ED8\u8BA4\u503C"),n("th",{style:{"text-align":"center"}},"\u7528\u9014")])],-1),r=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013mine"),n("td",{style:{"text-align":"left"}},"false"),n("td",{style:{"text-align":"center"}},"\u662F\u5426\u5F00\u542F\u81EA\u52A8\u6316\u77FF")],-1),k=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.threads"),n("td",{style:{"text-align":"left"}},"0"),n("td",{style:{"text-align":"center"}},"\u6316\u77FF\u65F6\u53EF\u7528\u5E76\u884CPoW\u8BA1\u7B97\u7684\u534F\u7A0B\uFF08\u8F7B\u91CF\u7EA7\u7EBF\u7A0B\uFF09\u6570\u3002 \u517C\u5BB9\u8FC7\u65F6\u53C2\u6570 \u2014minerthreads\u3002")],-1),m=n("td",{style:{"text-align":"left"}},"\u2013miner.notify",-1),v=n("td",{style:{"text-align":"left"}},"\u7A7A",-1),g={style:{"text-align":"center"}},h=n("code",null,",",-1),b={href:"http://api.miner.com%2Chttp//api2.miner.com%E2%80%9C",target:"_blank",rel:"noopener noreferrer"},f=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.noverify"),n("td",{style:{"text-align":"left"}},"false"),n("td",{style:{"text-align":"center"}},"\u662F\u5426\u7981\u7528\u533A\u5757\u7684PoW\u5DE5\u4F5C\u91CF\u6821\u9A8C\u3002")],-1),x=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.gasprice"),n("td",{style:{"text-align":"left"}},"1000000000 wei"),n("td",{style:{"text-align":"center"}},"\u77FF\u5DE5\u53EF\u63A5\u53D7\u7684\u4EA4\u6613Gas\u4EF7\u683C\uFF0C \u4F4E\u4E8E\u6B64GasPrice\u7684\u4EA4\u6613\u5C06\u88AB\u62D2\u7EDD\u5199\u5165\u4EA4\u6613\u6C60\u548C\u4E0D\u4F1A\u88AB\u77FF\u5DE5\u6253\u5305\u5230\u533A\u5757\u3002")],-1),w=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.gastarget"),n("td",{style:{"text-align":"left"}},"8000000 gas"),n("td",{style:{"text-align":"center"}},"\u52A8\u6001\u8BA1\u7B97\u65B0\u533A\u5757\u71C3\u6599\u4E0A\u9650\uFF08gaslimit\uFF09\u7684\u4E0B\u9650\u503C\u3002 \u517C\u5BB9\u8FC7\u65F6\u53C2\u6570 \u2014targetgaslimit\u3002")],-1),y=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.gaslimit"),n("td",{style:{"text-align":"left"}},"8000000 gas"),n("td",{style:{"text-align":"center"}},"\u52A8\u6001\u6280\u672F\u65B0\u533A\u5757\u71C3\u6599\u4E0A\u9650\u7684\u4E0A\u9650\u503C\u3002")],-1),_=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.etherbase"),n("td",{style:{"text-align":"left"}},"\u7B2C\u4E00\u4E2A\u8D26\u6237"),n("td",{style:{"text-align":"center"}},"\u7528\u4E8E\u63A5\u6536\u6316\u77FF\u5956\u52B1\u7684\u8D26\u6237\u5730\u5740\uFF0C \u9ED8\u8BA4\u662F\u672C\u5730\u94B1\u5305\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8D26\u6237\u5730\u5740\u3002")],-1),G=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.extradata"),n("td",{style:{"text-align":"left"}},"geth\u7248\u672C\u53F7"),n("td",{style:{"text-align":"center"}},"\u5141\u8BB8\u77FF\u5DE5\u81EA\u5B9A\u4E49\u5199\u5165\u533A\u5757\u5934\u7684\u989D\u5916\u6570\u636E\u3002")],-1),C=n("tr",null,[n("td",{style:{"text-align":"left"}},"\u2013miner.recommit"),n("td",{style:{"text-align":"left"}},"3s"),n("td",{style:{"text-align":"center"}},"\u91CD\u65B0\u5F00\u59CB\u6316\u6398\u65B0\u533A\u5757\u7684\u65F6\u95F4\u95F4\u9694\u3002 \u5C06\u81EA\u52A8\u653E\u5F03\u8FDB\u884C\u4E2D\u7684\u6316\u77FF\u540E\uFF0C\u91CD\u65B0\u5F00\u59CB\u4E00\u6B21\u65B0\u533A\u5757\u6316\u77FF\u3002")],-1),O=t(`<h3 id="\u5E38\u89C1\u7684\u542F\u52A8\u6316\u77FF\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u542F\u52A8\u6316\u77FF\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u542F\u52A8\u6316\u77FF\u7684\u65B9\u5F0F</h3><h4 id="\u53C2\u6570\u8BBE\u7F6E\u6316\u77FF" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E\u6316\u77FF" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E\u6316\u77FF</h4><blockquote><p>dgeth --dev --mine</p></blockquote><h4 id="\u63A7\u5236\u53F0\u542F\u52A8\u6316\u77FF" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53F0\u542F\u52A8\u6316\u77FF" aria-hidden="true">#</a> \u63A7\u5236\u53F0\u542F\u52A8\u6316\u77FF</h4><blockquote><p>miner.start(1)</p></blockquote><h4 id="rpc-\u542F\u52A8\u6316\u77FF" tabindex="-1"><a class="header-anchor" href="#rpc-\u542F\u52A8\u6316\u77FF" aria-hidden="true">#</a> rpc \u542F\u52A8\u6316\u77FF</h4><p>\u8FD9\u662F\u90E8\u7F72\u8282\u70B9\u4F7F\u7528\u7684\u65B9\u5F0F\uFF0C\u4E00\u822C\u8BBE\u7F6E\u5982\u4E0B\uFF1A</p><blockquote><p>/geth --datadir &quot;/data0&quot; --nodekeyhex &quot;27aa615f5fa5430845e4e99229def5f23e9525a20640cc49304f40f3b43824dc&quot; --bootnodes $enodeid --mine --debug --metrics --syncmode=&quot;full&quot; --gcmode=archive --istanbul.blockperiod 5 --gasprice 0 --port 30303 --rpc --rpcaddr &quot;0.0.0.0&quot; --rpcport 8545 --rpcapi &quot;db,eth,net,web3,personal&quot; --nat any --allow-insecure-unlock</p></blockquote><hr><p>\u5F00\u59CB\u6E90\u7801\u5206\u6790\uFF0C\u8FDB\u5165\u5230<code>miner.go</code>\u7684<code>New</code>\u51FD\u6570\u4E2D\uFF1A</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>func New(eth Backend, config *Config, chainConfig *params.ChainConfig, mux *event.TypeMux, engine consensus.Engine, isLocalBlock func(block *types.Block) bool) *Miner {
 miner := &amp;Miner{
  ...
 }
 go miner.update()
 return miner
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>func (miner *Miner) update() {
  switch ev.Data.(type) {
   case downloader.StartEvent:
    atomic.StoreInt32(&amp;miner.canStart, 0)
    if miner.Mining() {
     miner.Stop()
     atomic.StoreInt32(&amp;miner.shouldStart, 1)
     log.Info(&quot;Mining aborted due to sync&quot;)
    }
   case downloader.DoneEvent, downloader.FailedEvent:
    shouldStart := atomic.LoadInt32(&amp;miner.shouldStart) == 1

    atomic.StoreInt32(&amp;miner.canStart, 1)
    atomic.StoreInt32(&amp;miner.shouldStart, 0)
    if shouldStart {
     miner.Start(miner.coinbase)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u5F00\u59CB\u6211\u4EEC\u521D\u59CB\u5316\u7684<code>canStart=1</code> \uFF0C \u5982\u679C<code>Downloader</code>\u6A21\u5757\u6B63\u5728\u540C\u6B65\uFF0C\u5219<code>canStart=0</code>,\u5E76\u4E14\u505C\u6B62\u6316\u77FF\uFF0C\u5982\u679C<code>Downloader</code>\u6A21\u5757<code>Done</code>\u6216\u8005<code>Failed</code>\uFF0C\u5219<code>canStart=1</code>,\u4E14\u540C\u65F6<code>shouldStart=0</code>,miner\u5C06\u542F\u52A8\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>miner<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span>miner<span class="token punctuation">.</span>coinbase<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>miner <span class="token operator">*</span>Miner<span class="token punctuation">)</span> <span class="token function">Start</span><span class="token punctuation">(</span>coinbase common<span class="token punctuation">.</span>Address<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
 miner<span class="token punctuation">.</span>worker<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>w <span class="token operator">*</span>worker<span class="token punctuation">)</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
 w<span class="token punctuation">.</span>startCh <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u5C06\u4F1A\u8FDB\u5165\u5230<code>mainLoop</code>\u4E2D\u53BB\u5904\u7406<code>startCh</code>\uFF1A</p><p>\u2460\uFF1A\u6E05\u9664\u8FC7\u65E7\u7684\u6316\u77FF\u4EFB\u52A1</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token function">clearPending</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>chain<span class="token punctuation">.</span><span class="token function">CurrentBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">NumberU64</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2461\uFF1A\u63D0\u4EA4\u65B0\u7684\u6316\u77FF\u4EFB\u52A1</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>commit <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>noempty <span class="token builtin">bool</span><span class="token punctuation">,</span> s <span class="token builtin">int32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
  w<span class="token punctuation">.</span>newWorkCh <span class="token operator">&lt;-</span> <span class="token operator">&amp;</span>newWorkReq<span class="token punctuation">{</span>interrupt<span class="token punctuation">:</span> interrupt<span class="token punctuation">,</span> noempty<span class="token punctuation">:</span> noempty<span class="token punctuation">,</span> timestamp<span class="token punctuation">:</span> timestamp<span class="token punctuation">}</span>
<span class="token operator">...</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u65B0\u7684\u6316\u77FF\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u65B0\u7684\u6316\u77FF\u4EFB\u52A1" aria-hidden="true">#</a> \u751F\u6210\u65B0\u7684\u6316\u77FF\u4EFB\u52A1</h2><p>\u6839\u636E<code>newWorkCh</code>\u751F\u6210\u65B0\u7684\u6316\u77FF\u4EFB\u52A1\uFF0C\u8FDB\u5165\u5230<code>CommitNewWork</code>\u4E2D\uFF1A</p><p>\u2460\uFF1A\u7EC4\u88C5<code>header</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>header <span class="token operator">:=</span> <span class="token operator">&amp;</span>types<span class="token punctuation">.</span>Header<span class="token punctuation">{</span> <span class="token comment">//\u7EC4\u88C5header</span>
  ParentHash<span class="token punctuation">:</span> parent<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  Number<span class="token punctuation">:</span>     num<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> common<span class="token punctuation">.</span>Big1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//num+1</span>
  GasLimit<span class="token punctuation">:</span>   core<span class="token punctuation">.</span><span class="token function">CalcGasLimit</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> w<span class="token punctuation">.</span>config<span class="token punctuation">.</span>GasFloor<span class="token punctuation">,</span> w<span class="token punctuation">.</span>config<span class="token punctuation">.</span>GasCeil<span class="token punctuation">)</span><span class="token punctuation">,</span>
  Extra<span class="token punctuation">:</span>      w<span class="token punctuation">.</span>extra<span class="token punctuation">,</span>
  Time<span class="token punctuation">:</span>       <span class="token function">uint64</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2461\uFF1A\u6839\u636E\u5171\u8BC6\u5F15\u64CE\u5403\u521D\u59CB\u5316header\u7684\u5171\u8BC6\u5B57\u6BB5</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>w.engine.Prepare(w.chain, header); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2462\uFF1A\u4E3A\u5F53\u524D\u6316\u77FF\u65B0\u4EFB\u52A1\u521B\u5EFA\u73AF\u5883</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> w<span class="token punctuation">.</span><span class="token function">makeCurrent</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> header<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2463\uFF1A\u6DFB\u52A0\u53D4\u5757</p><p>\u53D4\u5757\u96C6\u5206\u672C\u5730\u77FF\u5DE5\u6253\u5305\u533A\u5757\u548C\u5176\u4ED6\u6316\u77FF\u6253\u5305\u7684\u533A\u5757\u3002\u4F18\u5148\u9009\u62E9\u81EA\u5DF1\u6316\u51FA\u7684\u533A\u5757\u3002\u9009\u62E9\u65F6\uFF0C\u5C06\u5148\u5220\u9664\u592A\u65E7\u7684\u533A\u5757\uFF0C\u53EA\u4ECE\u6700\u8FD1\u76847(staleThreshold)\u4E2A\u9AD8\u5EA6\u4E2D\u9009\u62E9\uFF0C\u6700\u591A<strong>\u9009\u62E9\u4E24\u4E2A\u53D4\u5757</strong>\u653E\u5165\u65B0\u533A\u5757\u4E2D.\u5728\u771F\u6B63\u6DFB\u52A0\u53D4\u5757\u7684\u540C\u65F6\u4F1A\u8FDB\u884C\u6821\u9A8C\uFF0C\u5305\u62EC\u5982\u4E0B\uFF1A</p><ul><li>\u53D4\u5757\u5B58\u5728\u62A5\u9519</li><li>\u6DFB\u52A0\u7684uncle\u662F\u7236\u5757\u7684\u5144\u5F1F\u62A5\u9519</li><li>\u53D4\u5757\u7684\u7236\u5757\u672A\u77E5\u62A5\u9519</li></ul><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>commitUncles(w.localUncles)
commitUncles(w.remoteUncles)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2464\uFF1A\u5982\u679Cnoempty\u4E3Afalse\uFF0C\u5219\u63D0\u4EA4\u7A7A\u5757\uFF0C\u4E0D\u586B\u5145\u4EA4\u6613\u8FDB\u5165\u5230\u533A\u5757\u4E2D,\u8868\u793A\u63D0\u524D\u6316\u77FF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> <span class="token operator">!</span>noempty <span class="token punctuation">{</span>
  w<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>uncles<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> tstart<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2465\uFF1A\u586B\u5145\u4EA4\u6613\u5230\u65B0\u533A\u5757\u4E2D</p><p>6.1 \u4ECE\u4EA4\u6613\u6C60\u4E2D\u83B7\u53D6\u4EA4\u6613\uFF0C\u5E76\u628A\u4EA4\u6613\u5206\u4E3A\u672C\u5730\u4EA4\u6613\u548C\u8FDC\u7A0B\u4EA4\u6613\uFF0C\u672C\u5730\u4EA4\u6613\u4F18\u5148\uFF0C\u5148\u5C06\u672C\u5730\u4EA4\u6613\u63D0\u4EA4\uFF0C\u518D\u5C06\u5916\u90E8\u4EA4\u6613\u63D0\u4EA4\u3002</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>localTxs, remoteTxs := make(map[common.Address]types.Transactions), pending
 for _, account := range w.eth.TxPool().Locals() {
  if txs := remoteTxs[account]; len(txs) &gt; 0 {
   delete(remoteTxs, account)
   localTxs[account] = txs
  }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>localTxs<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   txs <span class="token operator">:=</span> types<span class="token punctuation">.</span><span class="token function">NewTransactionsByPriceAndNonce</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>signer<span class="token punctuation">,</span> localTxs<span class="token punctuation">)</span>
   <span class="token keyword">if</span> w<span class="token punctuation">.</span><span class="token function">commitTransactions</span><span class="token punctuation">(</span>txs<span class="token punctuation">,</span> w<span class="token punctuation">.</span>coinbase<span class="token punctuation">,</span> interrupt<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>remoteTxs<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.2\u63D0\u4EA4\u4EA4\u6613</p><ul><li>\u9996\u5148\u6821\u9A8C\u6709\u6CA1\u6709\u53EF\u7528\u7684<code>Gas</code></li><li>\u5982\u679C\u78B0\u5230\u4EE5\u4E0B\u60C5\u51B5\u8981\u8FDB\u884C\u4EA4\u6613\u6267\u884C\u7684\u4E2D\u65AD <ul><li>\u65B0\u7684\u5934\u5757\u4E8B\u4EF6\u5230\u8FBE\uFF0C\u4E2D\u65AD\u4FE1\u53F7\u4E3A 1 (\u6574\u4E2A\u4EFB\u52A1\u4F1A\u88AB\u4E22\u5F03)</li><li><code>worker</code> \u5F00\u542F\u6216\u8005\u91CD\u542F\uFF0C\u4E2D\u65AD\u4FE1\u53F7\u4E3A 1 \uFF08\u6574\u4E2A\u4EFB\u52A1\u4F1A\u88AB\u4E22\u5F03\uFF09</li><li><code>worker</code>\u91CD\u65B0\u521B\u5EFA\u6316\u77FF\u4EFB\u52A1\u6839\u636E\u65B0\u7684\u4EA4\u6613\uFF0C\u4E2D\u65AD\u4FE1\u53F7\u4E3A 2 \uFF08\u4EFB\u52A1\u8FD8\u662F\u4F1A\u88AB\u9001\u5165\u5230\u5171\u8BC6\u5F15\u64CE\uFF09</li></ul></li></ul><p>6.3\u5F00\u59CB\u6267\u884C\u4EA4\u6613</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>logs, err := w.commitTransaction(tx, coinbase)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.4\u6267\u884C\u4EA4\u6613\u83B7\u53D6\u6536\u636E</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>receipt<span class="token punctuation">,</span> err <span class="token operator">:=</span> core<span class="token punctuation">.</span><span class="token function">ApplyTransaction</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>chainConfig<span class="token punctuation">,</span> w<span class="token punctuation">.</span>chain<span class="token punctuation">,</span> <span class="token operator">&amp;</span>coinbase<span class="token punctuation">,</span> w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>gasPool<span class="token punctuation">,</span> w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>state<span class="token punctuation">,</span> w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>header<span class="token punctuation">,</span> tx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>header<span class="token punctuation">.</span>GasUsed<span class="token punctuation">,</span> <span class="token operator">*</span>w<span class="token punctuation">.</span>chain<span class="token punctuation">.</span><span class="token function">GetVMConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6267\u884C\u51FA\u9519\uFF0C\u76F4\u63A5\u56DE\u9000\u4E0A\u4E00\u4E2A\u5FEB\u7167</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
  w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">RevertToSnapshot</span><span class="token punctuation">(</span>snap<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FA\u9519\u7684\u539F\u56E0\u5927\u6982\u6709\u4EE5\u4E0B\u51E0\u4E2A\uFF1A</p><ul><li>\u8D85\u51FA\u5F53\u524D\u5757\u7684<code>gas limit</code></li><li><code>Nonce</code> \u592A\u4F4E</li><li><code>Nonce</code> \u592A\u9AD8</li></ul><p>\u6267\u884C\u6210\u529F\u7684\u8BDD\u8BB2\u4EA4\u6613\u548C\u6536\u636E\u5B58\u5165\u5230<code>w.current</code>\u4E2D\u3002</p><p>\u2466\uFF1A\u6267\u884C\u4EA4\u6613\u7684\u72B6\u6001\u66F4\u6539\uFF0C\u5E76\u7EC4\u88C5\u6210\u6700\u7EC8\u5757</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>w<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>uncles<span class="token punctuation">,</span> w<span class="token punctuation">.</span>fullTaskHook<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> tstart<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u4EA4\u6613\u7684\u72B6\u6001\u66F4\u6539\uFF0C\u5E76\u7EC4\u88C5\u6210\u6700\u7EC8\u5757\u662F\u7531\u4E0B\u9762\u7684\u5171\u8BC6\u5F15\u64CE\u6240\u5B8C\u6210\u7684\u4E8B\u60C5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>block<span class="token punctuation">,</span> err <span class="token operator">:=</span> w<span class="token punctuation">.</span>engine<span class="token punctuation">.</span><span class="token function">FinalizeAndAssemble</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>chain<span class="token punctuation">,</span> w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>header<span class="token punctuation">,</span> s<span class="token punctuation">,</span> w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>txs<span class="token punctuation">,</span> uncles<span class="token punctuation">,</span> w<span class="token punctuation">.</span>current<span class="token punctuation">.</span>receipts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E95\u5C42\u4F1A\u8C03\u7528 <code>state.IntermediateRoot</code>\u6267\u884C\u72B6\u6001\u66F4\u6539\u3002\u7EC4\u88C5\u6210\u6700\u7EC8\u5757\u610F\u5473\u7740\u5230\u8FD9\u6253\u5305\u4EFB\u52A1\u5B8C\u6210\u3002\u63A5\u7740\u5C31\u662F\u8981\u63D0\u4EA4\u65B0\u7684\u6316\u77FF\u4EFB\u52A1\u3002</p><hr><h2 id="\u63D0\u4EA4\u65B0\u7684\u6316\u77FF\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u65B0\u7684\u6316\u77FF\u4EFB\u52A1" aria-hidden="true">#</a> \u63D0\u4EA4\u65B0\u7684\u6316\u77FF\u4EFB\u52A1</h2><p>\u2460\uFF1A\u83B7\u53D6<code>sealHash</code>\uFF08\u6316\u77FF\u524D\u7684\u533A\u5757\u54C8\u5E0C\uFF09\uFF0C\u91CD\u590D\u63D0\u4EA4\u5219\u8DF3\u8FC7</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>sealHash <span class="token operator">:=</span> w<span class="token punctuation">.</span>engine<span class="token punctuation">.</span><span class="token function">SealHash</span><span class="token punctuation">(</span>task<span class="token punctuation">.</span>block<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE\u6316\u77FF\u524D\u7684\u5757\u7684\u54C8\u5E0C</span>
   <span class="token keyword">if</span> sealHash <span class="token operator">==</span> prev <span class="token punctuation">{</span>
    <span class="token keyword">continue</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2461:\u751F\u6210\u65B0\u7684\u6316\u77FF\u8BF7\u6C42\uFF0C\u7ED3\u679C\u8FD4\u56DE\u5230<code>reultCh</code>\u6216\u8005<code>StopCh</code>\u4E2D</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>w<span class="token punctuation">.</span>engine<span class="token punctuation">.</span><span class="token function">Seal</span><span class="token punctuation">(</span>w<span class="token punctuation">.</span>chain<span class="token punctuation">,</span> task<span class="token punctuation">.</span>block<span class="token punctuation">,</span> w<span class="token punctuation">.</span>resultCh<span class="token punctuation">,</span> stopCh<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6316\u77FF\u7684\u7ED3\u679C\u4F1A\u8FD4\u56DE\u5230<code>resultCh</code>\u4E2D\u6216\u8005<code>stopCh</code>\u4E2D\uFF0C<code>resultCh</code>\u6709\u6570\u636E\u6210\u529F\u51FA\u5757\uFF0C<code>stopCh</code>\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u4E2D\u65AD\u6316\u77FF\u7EBF\u7A0B\u3002</p><hr><h2 id="\u6210\u529F\u51FA\u5757" tabindex="-1"><a class="header-anchor" href="#\u6210\u529F\u51FA\u5757" aria-hidden="true">#</a> \u6210\u529F\u51FA\u5757</h2><p><code>resultCh</code>\u6709\u533A\u5757\u6570\u636E\uFF0C\u5219\u6210\u529F\u6316\u51FA\u4E86\u5757\uFF0C\u5230\u6700\u540E\u7684\u6210\u529F\u51FA\u5757\u6211\u4EEC\u8FD8\u9700\u8981\u8FDB\u884C\u76F8\u5E94\u7684\u9A8C\u8BC1\u5224\u65AD\u3002</p><p>\u2460\uFF1A\u5757\u4E3A\u7A7A\u6216\u8005\u94FE\u4E0A\u5DF2\u7ECF\u6709\u5757\u6216\u8005<code>pendingTasks</code>\u4E0D\u5B58\u5728\u76F8\u5173\u7684<code>sealhash</code>,\u8DF3\u8FC7\u5904\u7406</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> block <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> w<span class="token punctuation">.</span>chain<span class="token punctuation">.</span><span class="token function">HasBlock</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> block<span class="token punctuation">.</span><span class="token function">NumberU64</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
task<span class="token punctuation">,</span> exist <span class="token operator">:=</span> w<span class="token punctuation">.</span>pendingTasks<span class="token punctuation">[</span>sealhash<span class="token punctuation">]</span> <span class="token keyword">if</span> <span class="token operator">!</span>exist <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2461\uFF1A\u66F4\u65B0<code>receipts</code></p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>for i, receipt := range task.receipts {
  receipt.BlockHash = hash
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2462\uFF1A\u63D0\u4EA4\u5757\u548C\u72B6\u6001\u5230\u6570\u636E\u5E93</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>_, err := w.chain.WriteBlockWithState(block, receipts, logs, task.state, true) // \u4E92\u65A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2463\uFF1A\u5E7F\u64AD\u533A\u5757\u5E76\u5BA3\u5E03\u94FE\u63D2\u5165\u4E8B\u4EF6</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>w.mux.Post(core.NewMinedBlockEvent{Block: block})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u2464\uFF1A\u7B49\u5F85\u89C4\u8303\u786E\u8BA4\u672C\u5730\u6316\u51FA\u7684\u5757</p><p>\u65B0\u533A\u5757\u5E76\u975E\u7ACB\u5373\u7A33\u5B9A\uFF0C\u6682\u65F6\u5B58\u5165\u5230\u672A\u786E\u8BA4\u533A\u5757\u96C6\u4E2D\u3002</p><div class="language-GO ext-GO line-numbers-mode"><pre class="language-GO"><code>w.unconfirmed.Insert(block.NumberU64(), block.Hash())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h2 id="\u603B\u7ED3-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-\u53C2\u8003" aria-hidden="true">#</a> \u603B\u7ED3&amp;\u53C2\u8003</h2><p>\u6574\u4E2A\u6316\u77FF\u6D41\u7A0B\u8FD8\u662F\u6BD4\u8F83\u7684\u7B80\u5355\uFF0C\u901A\u8FC7 4 \u4E2A<code>Loop</code>\u4E92\u76F8\u5DE5\u4F5C\uFF0C\u4ECE\u5F00\u542F\u6316\u77FF\u5230\u751F\u6210\u65B0\u7684\u6316\u77FF\u4EFB\u52A1\u5230\u63D0\u4EA4\u65B0\u7684\u6316\u77FF\u4EFB\u52A1\u5230\u6700\u540E\u7684\u6210\u529F\u51FA\u5757\uFF0C\u8FD9\u91CC\u9762\u7684\u5171\u8BC6\u5904\u7406\u7EC6\u8282\u4E0D\u4F1A\u63D0\u5230\uFF0C\u63A5\u4E0B\u6765\u7684\u6587\u7AE0\u4F1A\u8BF4\u5230\u3002</p>`,79),S={href:"https://mindcarver.cn",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"< >",-1),T={href:"https://learnblockchain.cn/books/geth/part2/mine/design.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://yangzhe.me/2019/02/25/ethereum-miner/#%E5%8A%A8%E6%80%81%E8%B0%83%E6%95%B4%E5%87%BA%E5%9D%97%E9%A2%91%E7%8E%258",target:"_blank",rel:"noopener noreferrer"};function B(N,H){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,n("table",null,[d,n("tbody",null,[r,k,n("tr",null,[m,v,n("td",g,[s("\u6316\u51FA\u65B0\u5757\u65F6\u7528\u4E8E\u901A\u77E5\u8FDC\u7A0B\u670D\u52A1\u7684\u4EFB\u610F\u6570\u91CF\u7684\u8FDC\u7A0B\u670D\u52A1\u5730\u5740\u3002 \u662F\u7528 "),h,s("\u5206\u5272\u7684\u591A\u4E2A\u8FDC\u7A0B\u670D\u52A1\u5668\u5730\u5740\u3002 \u5982\uFF1A\u201D"),n("a",b,[s("http://api.miner.com,http://api2.miner.com\u201C"),e(a)])])]),f,x,w,y,_,G,C])]),O,n("blockquote",null,[n("p",null,[n("a",S,[s("https://mindcarver.cn"),e(a)])]),q,n("p",null,[n("a",T,[s("https://learnblockchain.cn/books/geth/part2/mine/design.html"),e(a)])]),n("p",null,[n("a",E,[s("https://yangzhe.me/2019/02/25/ethereum-miner/#\u52A8\u6001\u8C03\u6574\u51FA\u5757\u9891\uFFFD\uFFFD%8"),e(a)])])])])}const I=o(l,[["render",B],["__file","8.etheric_fang_source_analysis_of_mining_process.html.vue"]]);export{I as default};
