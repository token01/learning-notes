import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as a,a as r,b as d,d as l,f as h,r as n}from"./app.41a23dcf.js";const o={},g=h('<h1 id="\u5B9A\u65F6\u4EFB\u52A1-quartz\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u4EFB\u52A1-quartz\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u5B9A\u65F6\u4EFB\u52A1 - Quartz\u539F\u7406\u5206\u6790</h1><h2 id="_1-quartz\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-quartz\u6982\u5FF5" aria-hidden="true">#</a> 1. Quartz\u6982\u5FF5</h2><p>Quartz\u662F\u4E00\u4E2A\u4F18\u79C0\u7684\u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\uFF0C \u5177\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A</p><ul><li>\u5F3A\u5927\u7684\u8C03\u5EA6\u529F\u80FD\uFF0C\u4F8B\u5982\u652F\u6301\u4E30\u5BCC\u591A\u6837\u7684\u8C03\u5EA6\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u5404\u79CD\u5E38\u89C4\u53CA\u7279\u6B8A\u9700\u6C42\uFF1B</li><li>\u8D1F\u8F7D\u5747\u8861</li><li>\u9AD8\u53EF\u7528</li></ul><h3 id="_1-1-\u8C03\u5EA6\u5668-scheduler" tabindex="-1"><a class="header-anchor" href="#_1-1-\u8C03\u5EA6\u5668-scheduler" aria-hidden="true">#</a> 1.1 \u8C03\u5EA6\u5668\uFF1Ascheduler</h3><p>\u4EFB\u52A1\u8C03\u5EA6\u7684\u63A7\u5236\u5668\uFF0C\u8D1F\u8D23\u5B9A\u65F6\u4EFB\u52A1\u7684\u8C03\u5EA6\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4EFB\u52A1\u548C\u89E6\u53D1\u5668\u7684\u589E\u5220\u6539\u67E5\u7B49api\u65B9\u6CD5\u3002</p><h3 id="_1-2-\u4EFB\u52A1-job" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4EFB\u52A1-job" aria-hidden="true">#</a> 1.2 \u4EFB\u52A1\uFF1Ajob</h3><p>job\u662F\u5B9E\u9645\u88AB\u8C03\u5EA6\u7684\u4EFB\u52A1\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u5FC5\u987B\u6307\u5B9A\u5177\u4F53\u6267\u884C\u4EFB\u52A1\u7684\u5B9E\u73B0\u7C7B\uFF0C\u5B9E\u73B0\u7C7B\u9700\u8981\u7EE7\u627FQuartzJobBean\u6216\u8005\u5B9E\u73B0org.quartz.Job\u63A5\u53E3\uFF0C\u5177\u4F53\u7684\u4E1A\u52A1\u903B\u8F91\u5199\u5728execute\u65B9\u6CD5\u91CC\u9762\u3002 \u662F\u5426\u652F\u6301\u5E76\u53D1\u7684\u6CE8\u89E3\uFF1A@DisallowConcurrentExecution</p><h3 id="_1-3-\u89E6\u53D1\u5668-trigger" tabindex="-1"><a class="header-anchor" href="#_1-3-\u89E6\u53D1\u5668-trigger" aria-hidden="true">#</a> 1.3 \u89E6\u53D1\u5668\uFF1Atrigger</h3><p>trigger\u7528\u6765\u5B9A\u4E49\u8C03\u5EA6\u65F6\u95F4\u7684\u6982\u5FF5\uFF0C\u5373\u6309\u4EC0\u4E48\u6837\u65F6\u95F4\u89C4\u5219\u53BB\u89E6\u53D1\u4EFB\u52A1\u3002\u4E3B\u8981\u51E0\u79CD\u7C7B\u578B\uFF1A</p><ul><li><strong>SimpleTrigger</strong>\uFF1A\u7B80\u5355\u89E6\u53D1\u5668\uFF0C\u4ECE\u67D0\u4E2A\u65F6\u95F4\u5F00\u59CB\uFF0C\u6BCF\u9694\u591A\u5C11\u65F6\u95F4\u89E6\u53D1\uFF0C\u91CD\u590D\u591A\u5C11\u6B21\u3002</li><li><strong>CronTrigger</strong>\uFF1A\u4F7F\u7528cron\u8868\u8FBE\u5F0F\u5B9A\u4E49\u89E6\u53D1\u7684\u65F6\u95F4\u89C4\u5219\uFF0C\u5982&quot;0 0 0,2,4 1/1 * ? *&quot; \u8868\u793A\u6BCF\u5929\u76840\uFF0C2\uFF0C4\u70B9\u89E6\u53D1\u3002</li><li><strong>DailyTimeIntervalTrigger</strong>\uFF1A\u6BCF\u5929\u4E2D\u7684\u4E00\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u6BCFN\u4E2A\u65F6\u95F4\u5355\u5143\u89E6\u53D1\uFF0C\u65F6\u95F4\u5355\u5143\u53EF\u4EE5\u662F\u6BEB\u79D2\uFF0C\u79D2\uFF0C\u5206\uFF0C\u5C0F\u65F6</li><li><strong>CalendarIntervalTrigger</strong>\uFF1A\u6BCFN\u4E2A\u65F6\u95F4\u5355\u5143\u89E6\u53D1\uFF0C\u65F6\u95F4\u5355\u5143\u53EF\u4EE5\u662F\u6BEB\u79D2\uFF0C\u79D2\uFF0C\u5206\uFF0C\u5C0F\u65F6\uFF0C\u65E5\uFF0C\u6708\uFF0C\u5E74\u3002</li></ul><h4 id="_1-3-1-trigger\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_1-3-1-trigger\u72B6\u6001" aria-hidden="true">#</a> 1.3.1 trigger\u72B6\u6001\uFF1A</h4><ul><li><p>WAITING</p></li><li><p>ACQUIRED\uFF0C</p></li><li><p>EXECUTING\uFF0C</p></li><li><p>COMPLETE\uFF0C</p></li><li><p>BLOCKED\uFF0C</p></li><li><p>ERROR\uFF0C</p></li><li><p>PAUSED\uFF0C</p></li><li><p>PAUSED_BLOCKED\uFF0C</p></li><li><p>DELETED</p></li></ul><h3 id="_1-4-\u6838\u5FC3\u5143\u7D20\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_1-4-\u6838\u5FC3\u5143\u7D20\u5173\u7CFB" aria-hidden="true">#</a> 1.4 \u6838\u5FC3\u5143\u7D20\u5173\u7CFB</h3><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220719211631532.png" alt="image-20220719211631532"><h2 id="_2-scheduler-\u8C03\u5EA6\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-scheduler-\u8C03\u5EA6\u7EBF\u7A0B" aria-hidden="true">#</a> 2. Scheduler \u8C03\u5EA6\u7EBF\u7A0B</h2><p>Scheduler \u8C03\u5EA6\u7EBF\u7A0B\u4E3B\u8981\u6709\u4E24\u4E2A\uFF1A</p><ul><li><p>\u6267\u884C\u5E38\u89C4\u8C03\u5EA6\u7684\u7EBF\u7A0B</p><p>\u5E38\u89C4\u8C03\u5EA6\u7EBF\u7A0B\u8F6E\u8BE2\u5B58\u50A8\u7684\u6240\u6709 trigger\uFF0C\u5982\u679C\u6709\u9700\u8981\u89E6\u53D1\u7684 trigger\uFF0C\u5373\u5230\u8FBE\u4E86\u4E0B\u4E00\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\uFF0C\u5219\u4ECE\u4EFB\u52A1\u6267\u884C\u7EBF\u7A0B\u6C60\u83B7\u53D6\u4E00\u4E2A\u7A7A\u95F2\u7EBF\u7A0B\uFF0C\u6267\u884C\u4E0E\u8BE5 trigger \u5173\u8054\u7684\u4EFB\u52A1</p></li><li><p>\u6267\u884C misfired trigger \u7684\u7EBF\u7A0B\u3002</p><p>Misfire \u7EBF\u7A0B\u662F\u626B\u63CF\u6240\u6709\u7684 trigger\uFF0C\u67E5\u770B\u662F\u5426\u6709 misfired trigger\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u6839\u636E misfire \u7684\u7B56\u7565\u5206\u522B\u5904\u7406\u3002</p></li></ul><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220719212131722.png" alt="image-20220719212131722"><h3 id="_2-1-quartz-\u8C03\u5EA6\u7EBF\u7A0B\u6D41\u7A0B\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-1-quartz-\u8C03\u5EA6\u7EBF\u7A0B\u6D41\u7A0B\u56FE" aria-hidden="true">#</a> 2.1 Quartz \u8C03\u5EA6\u7EBF\u7A0B\u6D41\u7A0B\u56FE</h3><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220719212254193.png" alt="image-20220719212254193"><h2 id="_3-\u672A\u6B63\u5E38\u89E6\u53D1\u7684\u4EFB\u52A1-misfire-job" tabindex="-1"><a class="header-anchor" href="#_3-\u672A\u6B63\u5E38\u89E6\u53D1\u7684\u4EFB\u52A1-misfire-job" aria-hidden="true">#</a> 3. \u672A\u6B63\u5E38\u89E6\u53D1\u7684\u4EFB\u52A1\uFF1Amisfire job</h2><p>\u6CA1\u6709\u5728\u6B63\u5E38\u89E6\u53D1\u65F6\u95F4\u70B9\u89E6\u53D1\u7684\u4EFB\u52A1\u3002\u4E3B\u8981\u7531\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u5BFC\u81F4\uFF1A</p><ul><li>\u89E6\u53D1\u65F6\u95F4\u5728\u5E94\u7528\u4E0D\u53EF\u7528\u7684\u65F6\u95F4\u5185\uFF0C\u6BD4\u5982\u91CD\u542F</li><li>\u4E0A\u6B21\u7684\u6267\u884C\u65F6\u95F4\u8FC7\u957F\uFF0C\u8D85\u8FC7\u4E86\u4E0B\u6B21\u89E6\u53D1\u7684\u65F6\u95F4</li><li>\u4EFB\u52A1\u88AB\u6682\u505C\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u91CD\u65B0\u88AB\u8C03\u5EA6\u7684\u65F6\u95F4\u5728\u4E0B\u6B21\u89E6\u53D1\u65F6\u95F4\u4E4B\u540E</li></ul><p>\u5904\u7406misfire job\u7684\u7B56\u7565\uFF0C\u9700\u8981\u5728\u521B\u5EFAtrigger\u7684\u65F6\u5019\u914D\u7F6E\uFF0C\u6BCF\u79CDtrigger\u5BF9\u5E94\u7684\u679A\u4E3E\u503C\u90FD\u4E0D\u540C\uFF0C\u5177\u4F53\u5728\u63A5\u53E3\u91CC\u9762\u6709\u5B9A\u4E49\u3002CronTrigger\u67092\u79CD\u5904\u7406misfire\u7684\u7B56\u7565\uFF1A</p><table><thead><tr><th>\u5904\u7406\u7B56\u7565</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>MISFIRE_INSTRUCTION_FIRE_ONCE_NOW</td><td>\u7ACB\u5373\u89E6\u53D1\u4E00\u6B21</td></tr><tr><td>MISFIRE_INSTRUCTION_DO_NOTHING</td><td>\u5FFD\u7565\uFF0C\u4E0D\u5904\u7406\uFF0C\u7B49\u5F85\u4E0B\u6B21\u89E6\u53D1</td></tr></tbody></table><p>\u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A</p><p>scheduler\u7531\u5DE5\u5382\u7C7BSchedulerFactory\u521B\u5EFA\uFF0C\u4E3B\u8981\u8D1F\u8D23job\u548Ctrigger\u7684\u6301\u4E45\u5316\u7BA1\u7406\uFF0C\u5305\u62EC\u65B0\u589E\u3001\u5220\u9664\u3001\u4FEE\u6539\u3001\u89E6\u53D1\u3001\u6682\u505C\u3001\u6062\u590D\u8C03\u5EA6\u3001\u505C\u6B62\u8C03\u5EA6\u7B49\uFF1B</p><p>\u4E00\u4E2Ajob\u53EF\u4EE5\u5173\u8054\u591A\u4E2Atrigger\uFF0C\u4F46\u662F\u4E00\u4E2Atrigger\u53EA\u80FD\u5173\u8054\u4E00\u4E2Ajob\u3002</p><h2 id="_4-quzrtz\u5355\u673A\u6A21\u5F0F-\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_4-quzrtz\u5355\u673A\u6A21\u5F0F-\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> 4. Quzrtz\u5355\u673A\u6A21\u5F0F \u539F\u7406\u5206\u6790</h2><ol><li>scheduler\u662F\u4E00\u4E2A\u8BA1\u5212\u8C03\u5EA6\u5668\u5BB9\u5668\uFF08\u603B\u90E8\uFF09\uFF0C\u5BB9\u5668\u91CC\u9762\u53EF\u4EE5\u76DB\u653E\u4F17\u591A\u7684JobDetail\u548Ctrigger\uFF0C\u5F53\u5BB9\u5668\u542F\u52A8\u540E\uFF0C\u91CC\u9762\u7684\u6BCF\u4E2AJobDetail\u90FD\u4F1A\u6839\u636Etrigger\u6309\u90E8\u5C31\u73ED\u81EA\u52A8\u53BB\u6267\u884C\u3002</li><li>JobDetail\u662F\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u5DE5\u4F5C\uFF0C\u5B83\u672C\u8EAB\u53EF\u80FD\u662F\u6709\u72B6\u6001\u7684\u3002</li><li>Trigger\u4EE3\u8868\u4E00\u4E2A\u8C03\u5EA6\u53C2\u6570\u7684\u914D\u7F6E\uFF0C\u4EC0\u4E48\u65F6\u5019\u53BB\u8C03\u3002</li><li>\u5F53JobDetail\u548CTrigger\u5728scheduler\u5BB9\u5668\u4E0A\u6CE8\u518C\u540E\uFF0C\u5F62\u6210\u4E86\u88C5\u914D\u597D\u7684\u4F5C\u4E1A\uFF08JobDetail\u548CTrigger\u6240\u7EC4\u6210\u7684\u4E00\u5BF9\u513F\uFF09\uFF0C\u5C31\u53EF\u4EE5\u4F34\u968F\u5BB9\u5668\u542F\u52A8\u800C\u8C03\u5EA6\u6267\u884C\u4E86\u3002</li><li>scheduler\u662F\u4E2A\u5BB9\u5668\uFF0C\u5BB9\u5668\u4E2D\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6C60\uFF0C\u7528\u6765\u5E76\u884C\u8C03\u5EA6\u6267\u884C\u6BCF\u4E2A\u4F5C\u4E1A\uFF0C\u8FD9\u6837\u53EF\u4EE5\u63D0\u9AD8\u5BB9\u5668\u6548\u7387\u3002</li></ol><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220719212814763.png" alt="image-20220719212814763"><h2 id="_5-\u96C6\u7FA4\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u96C6\u7FA4\u6A21\u5F0F" aria-hidden="true">#</a> 5. \u96C6\u7FA4\u6A21\u5F0F</h2><p>Quartz\u7684\u96C6\u7FA4\u6A21\u5F0F\u6307\u7684\u662F<strong>\u4E00\u4E2A\u96C6\u7FA4\u4E0B\u591A\u4E2A\u8282\u70B9\u7BA1\u7406\u540C\u4E00\u6279\u4EFB\u52A1\u7684\u8C03\u5EA6</strong>\uFF0C<strong>\u901A\u8FC7\u5171\u4EAB\u6570\u636E\u5E93\u7684\u65B9\u5F0F\u5B9E\u73B0</strong>\uFF0C\u4FDD\u8BC1\u540C\u4E00\u4E2A\u4EFB\u52A1\u5230\u8FBE\u89E6\u53D1\u65F6\u95F4\u7684\u65F6\u5019\uFF0C<strong>\u53EA\u6709\u4E00\u53F0\u673A\u5668\u53BB\u6267\u884C\u8BE5\u4EFB\u52A1</strong>\u3002<strong>\u6BCF\u4E2A\u8282\u70B9\u90E8\u7F72\u4E00\u4E2A\u5355\u72EC\u7684quartz\u5B9E\u4F8B\uFF0C\u76F8\u4E92\u4E4B\u95F4\u6CA1\u6709\u76F4\u63A5\u6570\u636E\u901A\u4FE1\u3002</strong></p><h3 id="_5-1-quartz\u96C6\u7FA4\u6A21\u5F0F\u90E8\u7F72\u56FE" tabindex="-1"><a class="header-anchor" href="#_5-1-quartz\u96C6\u7FA4\u6A21\u5F0F\u90E8\u7F72\u56FE" aria-hidden="true">#</a> 5.1 Quartz\u96C6\u7FA4\u6A21\u5F0F\u90E8\u7F72\u56FE</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220719213026199.png" alt="image-20220719213026199"></p><h3 id="_5-2-\u96C6\u7FA4\u6A21\u5F0F\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_5-2-\u96C6\u7FA4\u6A21\u5F0F\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> 5.2 \u96C6\u7FA4\u6A21\u5F0F\u539F\u7406\u5206\u6790</h3><p>quartz\u96C6\u7FA4\u662F\u901A\u8FC7\u6570\u636E\u5E93\u8868\u6765\u611F\u77E5\u5176\u4ED6\u7684\u5E94\u7528\u7684\uFF0C\u5404\u4E2A\u8282\u70B9\u4E4B\u95F4\u5E76\u6CA1\u6709\u76F4\u63A5\u7684\u901A\u4FE1\u3002<strong>\u53EA\u6709\u4F7F\u7528\u6301\u4E45\u7684JobStore\u624D\u80FD\u5B8C\u6210Quartz\u96C6\u7FA4</strong>\u3002 \u6570\u636E\u5E93\u8868\uFF1A\u4EE5\u524D\u670912\u5F20\u8868\uFF0C\u73B0\u5728\u53EA\u670911\u5F20\u8868\uFF0C\u73B0\u5728\u6CA1\u6709\u5B58\u50A8listener\u76F8\u5173\u7684\u8868\uFF0C\u591A\u4E86QRTZ_SIMPROP_TRIGGERS\u8868\uFF1A</p><table><thead><tr><th>Table name</th><th>Description</th></tr></thead><tbody><tr><td>QRTZ_CALENDARS</td><td>\u5B58\u50A8Quartz\u7684Calendar\u4FE1\u606F</td></tr><tr><td>QRTZ_CRON_TRIGGERS</td><td>\u5B58\u50A8CronTrigger\uFF0C\u5305\u62ECCron\u8868\u8FBE\u5F0F\u548C\u65F6\u533A\u4FE1\u606F</td></tr><tr><td>QRTZ_FIRED_TRIGGERS</td><td>\u5B58\u50A8\u4E0E\u5DF2\u89E6\u53D1\u7684Trigger\u76F8\u5173\u7684\u72B6\u6001\u4FE1\u606F\uFF0C\u4EE5\u53CA\u76F8\u8054Job\u7684\u6267\u884C\u4FE1\u606F</td></tr><tr><td>QRTZ_PAUSED_TRIGGER_GRPS</td><td>\u5B58\u50A8\u5DF2\u6682\u505C\u7684Trigger\u7EC4\u7684\u4FE1\u606F</td></tr><tr><td>QRTZ_SCHEDULER_STATE</td><td>\u5B58\u50A8\u5C11\u91CF\u7684\u6709\u5173Scheduler\u7684\u72B6\u6001\u4FE1\u606F\uFF0C\u548C\u522B\u7684Scheduler\u5B9E\u4F8B</td></tr><tr><td><strong>QRTZ_LOCKS</strong></td><td><strong>\u5B58\u50A8\u7A0B\u5E8F\u7684\u60B2\u89C2\u9501\u7684\u4FE1\u606F</strong></td></tr><tr><td>QRTZ_JOB_DETAILS</td><td>\u5B58\u50A8\u6BCF\u4E00\u4E2A\u5DF2\u914D\u7F6E\u7684Job\u7684\u8BE6\u7EC6\u4FE1\u606F</td></tr><tr><td>QRTZ_SIMPLE_TRIGGERS</td><td>\u5B58\u50A8\u7B80\u5355\u7684Trigger\uFF0C\u5305\u62EC\u91CD\u590D\u6B21\u6570\u3001\u95F4\u9694\u3001\u4EE5\u53CA\u5DF2\u89E6\u7684\u6B21\u6570</td></tr><tr><td>QRTZ_BLOG_TRIGGERS</td><td>Trigger\u4F5C\u4E3ABlob\u7C7B\u578B\u5B58\u50A8</td></tr><tr><td>QRTZ_TRIGGERS</td><td>\u5B58\u50A8\u5DF2\u914D\u7F6E\u7684Trigger\u7684\u4FE1\u606F</td></tr><tr><td>QRTZ_SIMPROP_TRIGGERS</td><td></td></tr></tbody></table><h4 id="_5-2-1-qrtz-locks\u884C\u9501\u8868" tabindex="-1"><a class="header-anchor" href="#_5-2-1-qrtz-locks\u884C\u9501\u8868" aria-hidden="true">#</a> 5.2.1 QRTZ_LOCKS\u884C\u9501\u8868</h4><p>QRTZ_LOCKS\u5C31\u662FQuartz\u96C6\u7FA4\u5B9E\u73B0\u540C\u6B65\u673A\u5236\u7684\u884C\u9501\u8868,\u5305\u62EC\u4EE5\u4E0B\u51E0\u4E2A\u9501\uFF1A</p><ul><li>CALENDAR_ACCESS</li><li>JOB_ACCESS</li><li>MISFIRE_ACCESS</li><li>STATE_ACCESS</li><li>TRIGGER_ACCESS</li></ul><h4 id="_5-2-2-\u8D1F\u8D23\u4EFB\u52A1\u8C03\u5EA6\u7684\u51E0\u4E2A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-2-2-\u8D1F\u8D23\u4EFB\u52A1\u8C03\u5EA6\u7684\u51E0\u4E2A\u7EBF\u7A0B" aria-hidden="true">#</a> 5.2.2 \u8D1F\u8D23\u4EFB\u52A1\u8C03\u5EA6\u7684\u51E0\u4E2A\u7EBF\u7A0B</h4><p>\u8D1F\u8D23\u4EFB\u52A1\u8C03\u5EA6\u7684\u51E0\u4E2A\u7EBF\u7A0B\uFF1A</p><ol><li>\u4EFB\u52A1\u6267\u884C\u7EBF\u7A0B\uFF1A\u901A\u5E38\u4F7F\u7528\u4E00\u4E2A\u7EBF\u7A0B\u6C60(SimpleThreadPool)\u7EF4\u62A4\u4E00\u7EC4\u7EBF\u7A0B\uFF0C\u8D1F\u8D23\u5B9E\u9645\u6BCF\u4E2Ajob\u7684\u6267\u884C\u3002</li><li>Scheduler\u8C03\u5EA6\u7EBF\u7A0BQuartzSchedulerThread \uFF1A\u8F6E\u8BE2\u5B58\u50A8\u7684\u6240\u6709 trigger\uFF0C\u5982\u679C\u6709\u9700\u8981\u89E6\u53D1\u7684 trigger\uFF0C\u5373\u5230\u8FBE\u4E86\u4E0B\u4E00\u6B21\u89E6\u53D1\u7684\u65F6\u95F4\uFF0C\u5219\u4ECE\u4EFB\u52A1\u6267\u884C\u7EBF\u7A0B\u6C60\u83B7\u53D6\u4E00\u4E2A\u7A7A\u95F2\u7EBF\u7A0B\uFF0C\u6267\u884C\u4E0E\u8BE5 trigger \u5173\u8054\u7684\u4EFB\u52A1\u3002</li><li>\u5904\u7406misfire job\u7684\u7EBF\u7A0BMisfireHandler\uFF1A\u8F6E\u8BAD\u6240\u6709misfire\u7684trigger\uFF0C\u539F\u7406\u5C31\u662F\u4ECE\u6570\u636E\u5E93\u4E2D\u67E5\u8BE2\u6240\u6709\u4E0B\u6B21\u89E6\u53D1\u65F6\u95F4\u5C0F\u4E8E\u5F53\u524D\u65F6\u95F4\u7684trigger\uFF0C\u6309\u7167\u6BCF\u4E2Atrigger\u8BBE\u5B9A\u7684misfire\u7B56\u7565\u5904\u7406\u8FD9\u4E9Btrigger\u3002</li></ol><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',46),s={href:"https://www.jianshu.com/p/e95d6764b4d9",target:"_blank",rel:"noopener noreferrer"};function c(u,_){const e=n("ExternalLinkIcon");return i(),a("div",null,[g,r("p",null,[r("a",s,[d("Quartz\u539F\u7406\u5206\u6790"),l(e)])])])}const T=t(o,[["render",c],["__file","quartz-x-principle.html.vue"]]);export{T as default};
