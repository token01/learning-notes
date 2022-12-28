import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as p}from"./app.19c6482c.js";const t={},e=p(`<h1 id="python\u5C06\u6570\u636E\u5E93\u6587\u6863\u8F6Cddl\u5EFA\u8868\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#python\u5C06\u6570\u636E\u5E93\u6587\u6863\u8F6Cddl\u5EFA\u8868\u8BED\u53E5" aria-hidden="true">#</a> Python\u5C06\u6570\u636E\u5E93\u6587\u6863\u8F6CDDL\u5EFA\u8868\u8BED\u53E5</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u9879\u76EE\u542F\u52A8\u9636\u6BB5\u5148\u8BBE\u8BA1\u4E86\u6570\u636E\u5E93\u6587\u6863\uFF0C\u518D\u5C06\u6570\u636E\u5E93\u6587\u6863\u8F6C\u5316\u4E3A\u5EFA\u8868\u8BED\u53E5\uFF08DDL\uFF09\u65F6\uFF0C\u65E0\u8BBA\u662F\u624B\u5199sql\u8FD8\u662F\u7528\u5BA2\u6237\u7AEF\u5DE5\u5177\uFF0C\u90FD\u9700\u8981\u6D89\u53CA\u5927\u91CF\u7684\u590D\u5236\u64CD\u4F5C\u3002\u5341\u5206\u52B3\u7D2F</p><h2 id="_2-\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_2-\u601D\u8DEF" aria-hidden="true">#</a> 2. \u601D\u8DEF</h2><p>\u5C06\u6570\u636E\u5E93word\u7684word \u590D\u5236\u5230excel\uFF0C\u8BFB\u53D6excel\u3002\u6839\u636E\u81EA\u5DF1\u7684\u4E1A\u52A1\u89C4\u5219\u8BFB\u53D6</p><blockquote><p>\u8BFB\u53D6\u6574\u4EFD\u6570\u636E\u5E93\u6587\u6863word\uFF0C\u8BFB\u53D6word \u683C\u5F0F\u5F71\u54CD\u8F83\u5927\u3002\u800C\u4E14\u6D89\u53CA\u5230\u7684\u6570\u636E\u8868\u592A\u591A\uFF0C\u6211\u4EEC\u6279\u91CF\u66FF\u6362\u5F88\u5BB9\u6613\u51FA\u95EE\u9898\u3002\u8FD8\u662F\u5355\u8868\u64CD\u4F5C\u66F4\u4FDD\u9669</p></blockquote><p>\u6570\u636E\u5E93word</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210518101735640.png" alt="image-20210518101735640"></p><p>\u590D\u5236\u540E\u7684excel</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20210518101832347.png" alt="image-20210518101832347"></p><h2 id="_3-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 3. \u4EE3\u7801\u5B9E\u73B0</h2><p>\u63D0\u4F9B\u4E00\u4E2A\u601D\u8DEF\uFF0C\u6BCF\u4E2A\u516C\u53F8\u7684\u6570\u636E\u5E93\u6587\u6863\u683C\u5F0F\u5E76\u4E0D\u4E00\u81F4\uFF0C\u9002\u5F53\u6539\u52A8\u5373\u53EF</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> xlrd

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>

    data_file <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">&#39;temp.xls&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># \u67E5\u770B\u5DE5\u4F5C\u8868</span>
    data_file<span class="token punctuation">.</span>sheet_names<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># print(&quot;sheets\uFF1A&quot; + str(data_file.sheet_names()))</span>
    ddlSql <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

    <span class="token comment"># \u904D\u5386\u6240\u6709\u5DE5\u4F5C\u8868\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684\u4E0B\u6807\u4F4D\u7F6E</span>
    <span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>data_file<span class="token punctuation">.</span>sheet_names<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u6309\u7167\u4E0B\u6807\u8BFB\u53D6\u5BF9\u5E94\u5DE5\u4F5C\u8868</span>
        sheet <span class="token operator">=</span> data_file<span class="token punctuation">.</span>sheet_by_index<span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token comment"># \u62FC\u63A5\u5EFA\u8868\u8BED\u53E5</span>
        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;CREATE TABLE &quot;</span>
        count <span class="token operator">=</span> <span class="token number">0</span>
        table_wz_name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
        table_yw_name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
        table_primary_key <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>nrows<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                table_name <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;T_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                table_zw_name <span class="token operator">=</span> table_name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
                table_yw_name <span class="token operator">=</span> <span class="token string">&quot;T_&quot;</span> <span class="token operator">+</span> table_name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                ddlSql <span class="token operator">+=</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot;(\\n&quot;</span>
            <span class="token keyword">elif</span> count <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
                zwm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
                ywm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
                gs <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
                bz <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> ywm<span class="token punctuation">:</span>
                    <span class="token keyword">if</span> zwm <span class="token operator">==</span> <span class="token string">&#39;\u4E3B\u952E&#39;</span><span class="token punctuation">:</span>
                        table_primary_key <span class="token operator">=</span> ywm
                        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> ywm <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> gs <span class="token operator">+</span> <span class="token string">&quot; NOT NULL&quot;</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>
                        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> ywm <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> gs
                <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>nrows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    ddlSql <span class="token operator">+=</span> <span class="token string">&quot;\\n&quot;</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    ddlSql <span class="token operator">+=</span> <span class="token string">&quot;,\\n&quot;</span>
            count <span class="token operator">+=</span> <span class="token number">1</span>

        ddlSql <span class="token operator">+=</span> <span class="token string">&quot;);&quot;</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;DROP TABLE &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>ddlSql<span class="token punctuation">)</span>

        <span class="token keyword">if</span> table_primary_key<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>
                <span class="token string">&quot;ALTER TABLE &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot; ADD CONSTRAINT PK_&quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot; PRIMARY KEY (&quot;</span> <span class="token operator">+</span> table_primary_key <span class="token operator">+</span> <span class="token string">&quot;);&quot;</span><span class="token punctuation">)</span>

        commentSql <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        commentSql <span class="token operator">+=</span> <span class="token string">&quot;COMMENT ON TABLE &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot; IS &#39;&quot;</span> <span class="token operator">+</span> table_zw_name <span class="token operator">+</span> <span class="token string">&quot;&#39;;\\n&quot;</span>
        count2 <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment"># \u62FC\u63A5\u5B57\u6BB5\u6CE8\u91CA\u548C\u8868\u6CE8\u91CA</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>nrows<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> count2 <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
                zwm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
                ywm <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
                gs <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
                bz <span class="token operator">=</span> sheet<span class="token punctuation">.</span>cell_value<span class="token punctuation">(</span>j<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> ywm<span class="token punctuation">:</span>
                    commentSql <span class="token operator">+=</span> <span class="token string">&quot;COMMENT ON COLUMN &quot;</span> <span class="token operator">+</span> table_yw_name <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> ywm <span class="token operator">+</span> <span class="token string">&quot; IS &#39;&quot;</span> <span class="token operator">+</span> zwm
                    <span class="token keyword">if</span> bz<span class="token punctuation">:</span>
                        commentSql <span class="token operator">+=</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> bz <span class="token operator">+</span> <span class="token string">&quot;)&#39;;\\n&quot;</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>
                        commentSql <span class="token operator">+=</span> <span class="token string">&quot;;\\n&quot;</span><span class="token punctuation">;</span>
            count2 <span class="token operator">+=</span> <span class="token number">1</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span>commentSql<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7684\u7ED3\u679C</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> T_SYS_USER<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> T_SYS_USER<span class="token punctuation">(</span>
	USER_ID NUMBER<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	DEPT_ID NUMBER<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	USER_NAME VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	NICK_NAME VARCHAR2<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	USER_TYPE VARCHAR2<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	EMAIL VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	PHONENUMBER VARCHAR2<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	SEX <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	AVATAR VARCHAR2<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	PASSWORD VARCHAR2<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">STATUS</span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	DEL_FLAG <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	LOGIN_IP VARCHAR2<span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	LOGIN_DATE <span class="token keyword">DATE</span><span class="token punctuation">,</span>
	CREATE_BY VARCHAR2<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	CREATE_TIME <span class="token keyword">DATE</span><span class="token punctuation">,</span>
	UPDATE_BY VARCHAR2<span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	UPDATE_TIME <span class="token keyword">DATE</span><span class="token punctuation">,</span>
	REMARK VARCHAR2<span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">TABLE</span> T_SYS_USER <span class="token operator">IS</span> <span class="token string">&#39;\u7528\u6237\u4FE1\u606F\u8868&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>USER_ID <span class="token operator">IS</span> <span class="token string">&#39;\u7528\u6237ID;
COMMENT ON COLUMN T_SYS_USER.DEPT_ID IS &#39;</span>\u90E8\u95E8ID<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>USER_NAME <span class="token operator">IS</span> <span class="token string">&#39;\u7528\u6237\u8D26\u53F7;
COMMENT ON COLUMN T_SYS_USER.NICK_NAME IS &#39;</span>\u7528\u6237\u540D\u5B57<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>USER_TYPE <span class="token operator">IS</span> <span class="token string">&#39;\u7528\u6237\u7C7B\u578B(00\uFF1A\u7CFB\u7EDF\u7528\u6237)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>EMAIL <span class="token operator">IS</span> <span class="token string">&#39;\u7528\u6237\u90AE\u7BB1;
COMMENT ON COLUMN T_SYS_USER.PHONENUMBER IS &#39;</span>\u624B\u673A\u53F7\u7801<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>SEX <span class="token operator">IS</span> <span class="token string">&#39;\u7528\u6237\u6027\u522B(0\uFF1A\u7537\uFF0C1\uFF1A\u5973\uFF0C2\uFF1A\u672A\u77E5)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>AVATAR <span class="token operator">IS</span> <span class="token string">&#39;\u7528\u6237\u5934\u50CF;
COMMENT ON COLUMN T_SYS_USER.PASSWORD IS &#39;</span>\u5BC6\u7801<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span><span class="token keyword">STATUS</span> <span class="token operator">IS</span> <span class="token string">&#39;\u5E10\u53F7\u72B6\u6001(0\uFF1A\u6B63\u5E38\uFF0C1\uFF1A\u505C\u7528)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>DEL_FLAG <span class="token operator">IS</span> <span class="token string">&#39;\u5220\u9664\u6807\u5FD7(0\uFF1A\u4EE3\u8868\u5B58\u5728\uFF0C2\uFF1A\u4EE3\u8868\u5220\u9664)&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>LOGIN_IP <span class="token operator">IS</span> <span class="token string">&#39;\u6700\u540E\u767B\u5F55IP;
COMMENT ON COLUMN T_SYS_USER.LOGIN_DATE IS &#39;</span>\u6700\u540E\u767B\u5F55\u65F6\u95F4<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>CREATE_BY <span class="token operator">IS</span> <span class="token string">&#39;\u521B\u5EFA\u8005;
COMMENT ON COLUMN T_SYS_USER.CREATE_TIME IS &#39;</span>\u521B\u5EFA\u65F6\u95F4<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>UPDATE_BY <span class="token operator">IS</span> <span class="token string">&#39;\u66F4\u65B0\u8005;
COMMENT ON COLUMN T_SYS_USER.UPDATE_TIME IS &#39;</span>\u66F4\u65B0\u65F6\u95F4<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> T_SYS_USER<span class="token punctuation">.</span>REMARK <span class="token operator">IS</span> &#39;\u5907\u6CE8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","python-db-ddl.html.vue"]]);export{k as default};
