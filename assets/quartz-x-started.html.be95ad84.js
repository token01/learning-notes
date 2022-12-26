const e=JSON.parse('{"key":"v-0f557468","path":"/dependencies/timer/quartz-x-started.html","title":"\u5B9A\u65F6\u4EFB\u52A1 - quartz\u5B9A\u65F6\u5668\u5165\u95E8","lang":"zh-CN","frontmatter":{"order":51,"category":["\u5B9A\u65F6\u4EFB\u52A1"],"summary":"\u5B9A\u65F6\u4EFB\u52A1 - quartz\u5B9A\u65F6\u5668\u5165\u95E8 0. Cron\u8868\u8FBE\u5F0F \u5728\u7EBF\u751F\u6210Cron\u8868\u8FBE\u5F0F\u7684\u5DE5\u5177 1. Qaurtz\u7B80\u4ECB Quartz\u662F\u4E00\u4E2A\u5B8C\u5168\u7531java\u7F16\u5199\u7684\u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\u3002 \u90A3\u4E48\u4EC0\u4E48\u662F\u4EFB\u52A1\u8C03\u5EA6\u5462\uFF1F\u5F88\u591A\u65F6\u5019\u4F60\u53EF\u80FD\u4F1A\u6536\u5230\u67D0\u4E2A\u9700\u6C42\uFF0C\u8981\u6C42\u7A0B\u5E8F \u201C \u9694\u67D0\u4E2A\u7279\u5B9A\u7684\u65F6\u95F4\u6BB5 \u5728\u67D0\u4E2A\u7279\u5B9A\u7684\u65F6\u95F4 \u505A\u67D0\u4E2A\u7279\u5B9A\u7684\u4E8B\u60C5 \u201D\uFF0C\u6BD4\u5982\uFF1A \u6BCF\u4E2A\u6708\u76849\u53F7\u81EA\u52A8\u8FD8\u6B3E\u8682\u8681\u82B1\u5457; \u6BCF\u5E7412\u67081\u65E50\u70B9\u53D1\u9001\u751F\u65E5","head":[["meta",{"property":"og:url","content":"https://bytecodes.tech/dependencies/timer/quartz-x-started.html"}],["meta",{"property":"og:site_name","content":"\u51E4\u51F0\u6D85\u69C3\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{"property":"og:title","content":"\u5B9A\u65F6\u4EFB\u52A1 - quartz\u5B9A\u65F6\u5668\u5165\u95E8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T12:17:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T12:17:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"0. Cron\u8868\u8FBE\u5F0F","slug":"_0-cron\u8868\u8FBE\u5F0F","link":"#_0-cron\u8868\u8FBE\u5F0F","children":[]},{"level":2,"title":"1. Qaurtz\u7B80\u4ECB","slug":"_1-qaurtz\u7B80\u4ECB","link":"#_1-qaurtz\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u6838\u5FC3\u6982\u5FF5","slug":"_2-\u6838\u5FC3\u6982\u5FF5","link":"#_2-\u6838\u5FC3\u6982\u5FF5","children":[{"level":3,"title":"2.1 \u4EFB\u52A1Job","slug":"_2-1-\u4EFB\u52A1job","link":"#_2-1-\u4EFB\u52A1job","children":[]},{"level":3,"title":"2.2 \u89E6\u53D1\u5668Trigger","slug":"_2-2-\u89E6\u53D1\u5668trigger","link":"#_2-2-\u89E6\u53D1\u5668trigger","children":[]},{"level":3,"title":"2.3 \u8C03\u5EA6\u5668 Schedule","slug":"_2-3-\u8C03\u5EA6\u5668-schedule","link":"#_2-3-\u8C03\u5EA6\u5668-schedule","children":[]}]},{"level":2,"title":"3. \u4E3B\u8981API","slug":"_3-\u4E3B\u8981api","link":"#_3-\u4E3B\u8981api","children":[]},{"level":2,"title":"4. \u5B9E\u4F8B\u4ECB\u7ECD","slug":"_4-\u5B9E\u4F8B\u4ECB\u7ECD","link":"#_4-\u5B9E\u4F8B\u4ECB\u7ECD","children":[{"level":3,"title":"4.1 \u5B9E\u73B0job\u63A5\u53E3","slug":"_4-1-\u5B9E\u73B0job\u63A5\u53E3","link":"#_4-1-\u5B9E\u73B0job\u63A5\u53E3","children":[]},{"level":3,"title":"4.2 \u521B\u5EFASchedule\uFF0C\u6267\u884C\u4EFB\u52A1\uFF1A","slug":"_4-2-\u521B\u5EFAschedule-\u6267\u884C\u4EFB\u52A1","link":"#_4-2-\u521B\u5EFAschedule-\u6267\u884C\u4EFB\u52A1","children":[]},{"level":3,"title":"4.3 \u8FD0\u884C\u6D4B\u8BD5","slug":"_4-3-\u8FD0\u884C\u6D4B\u8BD5","link":"#_4-3-\u8FD0\u884C\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"5. Job \u8BE6\u89E3","slug":"_5-job-\u8BE6\u89E3","link":"#_5-job-\u8BE6\u89E3","children":[{"level":3,"title":"5.1 Job","slug":"_5-1-job","link":"#_5-1-job","children":[]},{"level":3,"title":"5.2 JobDetail","slug":"_5-2-jobdetail","link":"#_5-2-jobdetail","children":[]},{"level":3,"title":"5.3 JobExecutionContext","slug":"_5-3-jobexecutioncontext","link":"#_5-3-jobexecutioncontext","children":[]},{"level":3,"title":"5.4 JobDataMap","slug":"_5-4-jobdatamap","link":"#_5-4-jobdatamap","children":[]}]},{"level":2,"title":"6. Trigger \u8BE6\u89E3","slug":"_6-trigger-\u8BE6\u89E3","link":"#_6-trigger-\u8BE6\u89E3","children":[{"level":3,"title":"6.1 Trigger","slug":"_6-1-trigger","link":"#_6-1-trigger","children":[]},{"level":3,"title":"6.2 SimpleTrigger","slug":"_6-2-simpletrigger","link":"#_6-2-simpletrigger","children":[]},{"level":3,"title":"6.3 CronTrigger","slug":"_6-3-crontrigger","link":"#_6-3-crontrigger","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1671866946000,"updatedTime":1672057027000,"contributors":[{"name":"Kong Ming(\u7A7A\u660E)","email":"token01@126.com","commits":4}]},"readingTime":{"minutes":6.46,"words":1938},"filePathRelative":"dependencies/timer/quartz-x-started.md","localizedDate":"2022\u5E7412\u670824\u65E5"}');export{e as data};
