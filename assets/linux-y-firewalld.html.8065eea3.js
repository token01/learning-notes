import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,a as e,b as r,d as s,f as c,r as d}from"./app.7119a543.js";const n={},o=c('<h1 id="centos\u9632\u706B\u5899firewalld\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#centos\u9632\u706B\u5899firewalld\u64CD\u4F5C" aria-hidden="true">#</a> Centos\u9632\u706B\u5899firewalld\u64CD\u4F5C</h1><h2 id="_1-firewalld\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-firewalld\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 1. firewalld\u7684\u57FA\u672C\u4F7F\u7528</h2><ul><li><p>\u542F\u52A8\uFF1A systemctl start firewalld</p></li><li><p>\u5173\u95ED\uFF1A systemctl stop firewalld</p></li><li><p>\u67E5\u770B\u72B6\u6001\uFF1A systemctl status firewalld</p></li><li><p>\u5F00\u673A\u7981\u7528 \uFF1A systemctl disable firewalld</p></li><li><p>\u5F00\u673A\u542F\u7528 \uFF1A systemctl enable firewalld</p></li></ul><h2 id="_2-systemctl-\u8001\u7248\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-systemctl-\u8001\u7248\u672C\u64CD\u4F5C" aria-hidden="true">#</a> 2. systemctl \u8001\u7248\u672C\u64CD\u4F5C</h2><p>systemctl\u662FCentOS7\u7684\u670D\u52A1\u7BA1\u7406\u5DE5\u5177\u4E2D\u4E3B\u8981\u7684\u5DE5\u5177\uFF0C\u5B83\u878D\u5408\u4E4B\u524Dservice\u548Cchkconfig\u7684\u529F\u80FD\u4E8E\u4E00\u4F53\u3002</p><ul><li>\u542F\u52A8\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl start firewalld.service</li><li>\u5173\u95ED\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl stop firewalld.service</li><li>\u91CD\u542F\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl restart firewalld.service</li><li>\u663E\u793A\u4E00\u4E2A\u670D\u52A1\u7684\u72B6\u6001\uFF1Asystemctl status firewalld.service</li><li>\u5728\u5F00\u673A\u65F6\u542F\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl enable firewalld.service</li><li>\u5728\u5F00\u673A\u65F6\u7981\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl disable firewalld.service</li><li>\u67E5\u770B\u670D\u52A1\u662F\u5426\u5F00\u673A\u542F\u52A8\uFF1Asystemctl is-enabled firewalld.service</li><li>\u67E5\u770B\u5DF2\u542F\u52A8\u7684\u670D\u52A1\u5217\u8868\uFF1Asystemctl list-unit-files|grep enabled</li><li>\u67E5\u770B\u542F\u52A8\u5931\u8D25\u7684\u670D\u52A1\u5217\u8868\uFF1Asystemctl --failed</li></ul><h2 id="_3-\u914D\u7F6Efirewalld-cmd" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6Efirewalld-cmd" aria-hidden="true">#</a> 3. \u914D\u7F6Efirewalld-cmd</h2><ul><li>\u67E5\u770B\u7248\u672C\uFF1A firewall-cmd --version</li><li>\u67E5\u770B\u5E2E\u52A9\uFF1A firewall-cmd --help</li><li>\u663E\u793A\u72B6\u6001\uFF1A firewall-cmd --state</li><li>\u67E5\u770B\u6240\u6709\u6253\u5F00\u7684\u7AEF\u53E3\uFF1A firewall-cmd --zone=public --list-ports</li><li>\u66F4\u65B0\u9632\u706B\u5899\u89C4\u5219\uFF1A firewall-cmd --reload</li><li>\u67E5\u770B\u533A\u57DF\u4FE1\u606F: firewall-cmd --get-active-zones</li><li>\u67E5\u770B\u6307\u5B9A\u63A5\u53E3\u6240\u5C5E\u533A\u57DF\uFF1A firewall-cmd --get-zone-of-interface=eth0</li><li>\u62D2\u7EDD\u6240\u6709\u5305\uFF1Afirewall-cmd --panic-on</li><li>\u53D6\u6D88\u62D2\u7EDD\u72B6\u6001\uFF1A firewall-cmd --panic-off</li><li>\u67E5\u770B\u662F\u5426\u62D2\u7EDD\uFF1A firewall-cmd --query-panic</li></ul><h2 id="_4-\u5F00\u542F\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_4-\u5F00\u542F\u7AEF\u53E3" aria-hidden="true">#</a> 4. \u5F00\u542F\u7AEF\u53E3</h2><ol><li><p>\u6DFB\u52A0</p><p>firewall-cmd --zone=public --add-port=80/tcp --permanent \uFF08--permanent\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548\uFF09</p></li><li><p>\u91CD\u65B0\u8F7D\u5165</p><p>firewall-cmd --reload</p></li><li><p>\u67E5\u770B</p><p>firewall-cmd --zone= public --query-port=80/tcp</p></li><li><p>\u5220\u9664</p><p>firewall-cmd --zone= public --remove-port=80/tcp --permanent</p></li></ol><h2 id="_5-centos6-x-\u9632\u706B\u5899\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_5-centos6-x-\u9632\u706B\u5899\u64CD\u4F5C" aria-hidden="true">#</a> 5. Centos6.X \u9632\u706B\u5899\u64CD\u4F5C</h2><ul><li><p>\u5F00\u542F\u547D\u4EE4\uFF1Aservice iptables start</p></li><li><p>\u5173\u95ED\u547D\u4EE4\uFF1Aservice iptables stop</p></li><li><p>\u6C38\u4E45\u5173\u95ED\u9632\u706B\u5899\uFF1Achkconfig iptables off</p></li><li><p>\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001\uFF1Aservice iptables status</p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',13),p={href:"https://www.cnblogs.com/moxiaoan/p/5683743.html",target:"_blank",rel:"noopener noreferrer"};function f(h,m){const l=d("ExternalLinkIcon");return a(),t("div",null,[o,e("p",null,[e("a",p,[r("CentOS7\u4F7F\u7528firewalld\u6253\u5F00\u5173\u95ED\u9632\u706B\u5899\u4E0E\u7AEF\u53E3"),s(l)])])])}const _=i(n,[["render",f],["__file","linux-y-firewalld.html.vue"]]);export{_ as default};
