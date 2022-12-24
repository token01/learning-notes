import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as l,f as c,r as o}from"./app.206d958e.js";const i={},u=c(`<h1 id="maven\u914D\u7F6Enexus\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#maven\u914D\u7F6Enexus\u79C1\u670D" aria-hidden="true">#</a> Maven\u914D\u7F6Enexus\u79C1\u670D</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><strong>Maven\u914D\u7F6Enexus\u79C1\u670D\uFF0C\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u8BBE\u7F6E\u6210\u672C\u5730\u642D\u5EFA\u7684Nexus\u79C1\u670D</strong></p><p>maven \u9ED8\u8BA4\u7684settings.xml\u5730\u5740\u3002\u53EF\u4EE5\u901A\u8FC7idea\u67E5\u770B</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004220055672.png" alt="image-20211004220055672"></p><h2 id="_2-\u4FEE\u6539maven\u7684settings-xml" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539maven\u7684settings-xml" aria-hidden="true">#</a> 2. \u4FEE\u6539maven\u7684settings.xml</h2><p>\u7F16\u8F91\u5185\u5BB9\u5982\u4E0B</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
 	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-zsz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>nexus testconf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.0.1:8081/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
#\u4E0A\u9762\u7684URL\u5C31\u662F\u5728nexus\u4E0A\u67E5\u770B\u5230\u7684URL
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-zsz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.0.1:8081/repository/maven-public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enable</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enable</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enable</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enable</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepositories</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginRepository</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.0.1:8081/repository/maven-public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enable</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enable</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enable</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enable</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepository</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginRepositories</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeProfiles</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeProfile</span><span class="token punctuation">&gt;</span></span>nexus-zsz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeProfile</span><span class="token punctuation">&gt;</span></span>    
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeProfiles</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-maven\u9879\u76EE\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-maven\u9879\u76EE\u6D4B\u8BD5" aria-hidden="true">#</a> 3. maven\u9879\u76EE\u6D4B\u8BD5</h2><ol><li><p>\u521B\u5EFA\u9879\u76EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn archetype:generate <span class="token parameter variable">-DgroupId</span><span class="token operator">=</span>com.zszdevelop <span class="token parameter variable">-DartifactId</span><span class="token operator">=</span>nexusdemo <span class="token parameter variable">-DarchetypeArtifactId</span><span class="token operator">=</span>maven-archetype-webapp <span class="token parameter variable">-DinteractiveMode</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6784\u5EFA\u9879\u76EE\uFF0C\u53EF\u4EE5\u770B\u5230\u5728\u6784\u5EFA\u7684\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u662Fnexus\u79C1\u670D\u5730\u5740\u3002</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004221548862.png" alt="image-20211004221548862"></p></li><li><p>\u67E5\u770B\u9879\u76EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> nexusdemo
pom.xml src
mvn package                  <span class="token comment">#\u5C06\u9879\u76EE\u6253\u5305</span>
<span class="token function">ls</span>						 <span class="token comment">#\u6253\u5305\u540E\uFF0C\u4F1A\u751F\u6210target\u76EE\u5F55</span>
pom.xml src     target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u67E5\u770Bnexus\u4E2D\u7F13\u5B58\u7684\u6587\u4EF6</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004221850526.png" alt="image-20211004221850526"></p><p><strong>\u82E5\u6CA1\u6709\u7F13\u5B58\u6587\u4EF6\uFF0C\u4E0B\u9762\u6709\u89E3\u51B3\u529E\u6CD5</strong></p><p><strong>\u5982\u679C\u5728\u4EE5\u4E0A\u9875\u9762\u4E2D\uFF0C\u5E76\u6CA1\u6709\u770B\u5230\u7F13\u5B58\u7684\u6587\u4EF6\uFF0C\u662F\u56E0\u4E3A\u5F53\u524D\u6CA1\u6709\u5199\u5165nexus\u7684\u6743\u9650\uFF0C\u53EF\u4EE5\u8FDB\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004222018328.png" alt="image-20211004222018328"></p><p>\u8FDB\u884C\u4EE5\u4E0A\u8BBE\u7F6E\u540E\uFF0C\u518D\u6B21\u5220\u9664\u672C\u5730\u5BBF\u4E3B\u76EE\u5F55\u4E0B\u7684\u7F13\u5B58\u6587\u4EF6\uFF0C\u91CD\u65B0\u6784\u5EFA\u9879\u76EE\u5E76\u6253\u5305\uFF0C\u5373\u53EF\u770B\u5230nexus\u4E0A\u7684\u7F13\u5B58\u6587\u4EF6\u4E86\u3002</p></li></ol><h2 id="_4-\u914D\u7F6E\u8BA4\u8BC1-\u5C06\u6253\u5305\u597D\u7684\u9879\u76EE\u4E0A\u4F20\u5230nexus\u4E2D" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E\u8BA4\u8BC1-\u5C06\u6253\u5305\u597D\u7684\u9879\u76EE\u4E0A\u4F20\u5230nexus\u4E2D" aria-hidden="true">#</a> 4. \u914D\u7F6E\u8BA4\u8BC1\uFF0C\u5C06\u6253\u5305\u597D\u7684\u9879\u76EE\u4E0A\u4F20\u5230nexus\u4E2D</h2><h3 id="_4-1-\u5728setting-xml\u4E2D\u6DFB\u52A0server" tabindex="-1"><a class="header-anchor" href="#_4-1-\u5728setting-xml\u4E2D\u6DFB\u52A0server" aria-hidden="true">#</a> 4.1 \u5728setting.xml\u4E2D\u6DFB\u52A0server</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servers</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-zsz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>123456<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servers</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u4FEE\u6539\u9879\u76EE\u7684pom-xml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4FEE\u6539\u9879\u76EE\u7684pom-xml\u6587\u4EF6" aria-hidden="true">#</a> 4.2 \u4FEE\u6539\u9879\u76EE\u7684pom.xml\u6587\u4EF6\uFF1A</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>distributionManagement</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshotRepository</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-zsz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>           #\u8FD9\u91CC\u7684ID\u5FC5\u987B\u548C\u4E0A\u9762settings\u6587\u4EF6\u4E2D\u914D\u7F6E\u8BA4\u8BC1\u7684ID\u4E00\u81F4
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus Snapshot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.0.1:8081/repository/maven-snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
                        #\u4E0A\u9762\u662F\u4FEE\u8BA2\u7248\u672C\u7684URL\uFF0C\u53EF\u5728nexus\u7684web\u754C\u9762\u67E5\u770B
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshotRepository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-zsz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus releases<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.0.1:8081/repository/maven-releases/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
                       #\u4E0A\u9762\u662F\u53D1\u884C\u7248\u672C\u7684URL\uFF0C\u540C\u6837\u5728web\u754C\u9762\u7684Repositories\u4E2D\u53EF\u4EE5\u67E5\u770B\u5230
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>distributionManagement</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u4E0A\u4F20\u5230\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4E0A\u4F20\u5230\u79C1\u670D" aria-hidden="true">#</a> 4.3 \u4E0A\u4F20\u5230\u79C1\u670D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn deploy   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-\u5728web\u754C\u9762\u786E\u8BA4\u4E0A\u4F20\u6210\u529F" tabindex="-1"><a class="header-anchor" href="#_4-4-\u5728web\u754C\u9762\u786E\u8BA4\u4E0A\u4F20\u6210\u529F" aria-hidden="true">#</a> 4.4 <strong>\u5728web\u754C\u9762\u786E\u8BA4\u4E0A\u4F20\u6210\u529F\uFF1A</strong></h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004224041615.png" alt="image-20211004224041615"></p><p>\u5C06\u6240\u6709\u7684\u5185\u5BB9\u5C55\u5F00\uFF0C\u5373\u53EF\u770B\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004223948837.png" alt="image-20211004223948837"></p><p>\u5982\u679C\u5728\u90E8\u7F72\u8FC7\u7A0B\u4E2D\uFF0C\u51FA\u73B0\u4E86\u9519\u8BEF\uFF0C\u9996\u5148\u5148\u68C0\u67E5\u4E00\u4E0B\u914D\u7F6E\u6587\u4EF6setting.xml\u7684\u8D26\u53F7\u5BC6\u7801\u6709\u6CA1\u6709\u4E0Enexus\u521B\u5EFA\u7684\u7528\u6237\u5BC6\u7801\u76F8\u540C\uFF0C\u5176\u6B21\u518D\u68C0\u67E5setting.xml\u91CC\u7684id\u6807\u7B7E\u548Cpom.xml\u6587\u4EF6\u4E2D\u7684id\u6807\u7B7E\u662F\u5426\u76F8\u540C\uFF0C\u4E0D\u540C\u4F1A\u62A5401\uFF08\u6CA1\u6709\u6743\u9650\uFF09\u7684\u9519\u8BEF\u3002</p><h2 id="_5-\u4E0A\u4F20\u5230maven-release\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_5-\u4E0A\u4F20\u5230maven-release\u4ED3\u5E93" aria-hidden="true">#</a> 5. <strong>\u4E0A\u4F20\u5230maven-release\u4ED3\u5E93</strong></h2><h3 id="_5-1-\u4FEE\u6539-pom-xml" tabindex="-1"><a class="header-anchor" href="#_5-1-\u4FEE\u6539-pom-xml" aria-hidden="true">#</a> 5.1 \u4FEE\u6539 pom.xml</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;   
    #\u5C06\u4E0A\u9762\u8FD9\u884C\u7684\u201CSNAPSHOT\u201D\u53BB\u6389\uFF0C\u66F4\u6539\u540E\u5982\u4E0B\uFF1A
  &lt;version&gt;1.0&lt;/version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-\u7EE7\u7EED-mvn-deploy" tabindex="-1"><a class="header-anchor" href="#_5-2-\u7EE7\u7EED-mvn-deploy" aria-hidden="true">#</a> 5.2 \u7EE7\u7EED mvn deploy</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mvn deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3-\u5728web\u754C\u9762\u4E2D\u67E5\u770B-\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_5-3-\u5728web\u754C\u9762\u4E2D\u67E5\u770B-\u5982\u4E0B" aria-hidden="true">#</a> 5.3 \u5728web\u754C\u9762\u4E2D\u67E5\u770B\uFF0C\u5982\u4E0B\uFF1A</h3><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004224615718.png" alt="image-20211004224615718"></p><p><strong>\u5C55\u5F00\u6240\u6709\u8282\u70B9\uFF0C\u5373\u53EF\u770B\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A</strong></p><p><img src="https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/image-20211004224646522.png" alt="image-20211004224646522"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,32),r={href:"https://cloud.tencent.com/developer/article/1623922",target:"_blank",rel:"noopener noreferrer"};function g(d,k){const s=o("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[p("\u90E8\u7F72maven\u53CANexus\u79C1\u670D"),l(s)])])])}const b=a(i,[["render",g],["__file","maven-x-nexus-deploy.html.vue"]]);export{b as default};
