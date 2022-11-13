const e=JSON.parse('{"key":"v-2a02e2eb","path":"/_posts/2022-09-05-stable_diffusion_ai_painting.html","title":"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑","lang":"zh-CN","frontmatter":{"title":"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑","date":"2022-09-05T00:00:00.000Z","category":["工具"],"tag":["AI","Docker","Stable Diffusion"],"order":-49,"summary":"我从小特别羡慕会画画的伙伴，他们能绘出心中所想，而本人水平最高的肖像画是丁老头。接触 Stable Diffusion 后，我脱胎换骨，给自己贴上了「会画画」的新标签。 Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具，可以在 6GB 显存显卡或无显卡（只依赖 CP","head":[["meta",{"property":"og:url","content":"https://abelsun.tech/_posts/2022-09-05-stable_diffusion_ai_painting.html"}],["meta",{"property":"og:site_name","content":"LearnNotes-浅谈技术"}],["meta",{"property":"og:title","content":"零基础入门 Stable Diffusion - 无需显卡把 AI 绘画引擎搬进家用电脑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-13T06:09:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:tag","content":"Stable Diffusion"}],["meta",{"property":"article:published_time","content":"2022-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-13T06:09:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Docker 环境配置","slug":"docker-环境配置","link":"#docker-环境配置","children":[{"level":3,"title":"安装 WSL","slug":"安装-wsl","link":"#安装-wsl","children":[]},{"level":3,"title":"启用 Hyper-V","slug":"启用-hyper-v","link":"#启用-hyper-v","children":[]}]},{"level":2,"title":"配置 Stable Diffusion","slug":"配置-stable-diffusion","link":"#配置-stable-diffusion","children":[{"level":3,"title":"选择工具分支","slug":"选择工具分支","link":"#选择工具分支","children":[]},{"level":3,"title":"准备 Linux 路径","slug":"准备-linux-路径","link":"#准备-linux-路径","children":[]}]},{"level":2,"title":"启动 Stable Diffusion","slug":"启动-stable-diffusion","link":"#启动-stable-diffusion","children":[]},{"level":2,"title":"界面说明","slug":"界面说明","link":"#界面说明","children":[{"level":3,"title":"Text-to-Image","slug":"text-to-image","link":"#text-to-image","children":[]},{"level":3,"title":"Image-to-Image","slug":"image-to-image","link":"#image-to-image","children":[]},{"level":3,"title":"Image Lab","slug":"image-lab","link":"#image-lab","children":[]}]},{"level":2,"title":"文字描述图像","slug":"文字描述图像","link":"#文字描述图像","children":[{"level":3,"title":"常规描述","slug":"常规描述","link":"#常规描述","children":[]},{"level":3,"title":"特征描述","slug":"特征描述","link":"#特征描述","children":[]},{"level":3,"title":"反向描述","slug":"反向描述","link":"#反向描述","children":[]},{"level":3,"title":"prompt 参考","slug":"prompt-参考","link":"#prompt-参考","children":[]}]},{"level":2,"title":"Prompt matrix","slug":"prompt-matrix","link":"#prompt-matrix","children":[]},{"level":2,"title":"Textual Inversion","slug":"textual-inversion","link":"#textual-inversion","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"Docker Desktop failed","slug":"docker-desktop-failed","link":"#docker-desktop-failed","children":[]},{"level":3,"title":"Docker Desktop cannot start","slug":"docker-desktop-cannot-start","link":"#docker-desktop-cannot-start","children":[]},{"level":3,"title":"docker 命令失败","slug":"docker-命令失败","link":"#docker-命令失败","children":[]},{"level":3,"title":"端口访问被拒","slug":"端口访问被拒","link":"#端口访问被拒","children":[]},{"level":3,"title":"FileNotFoundError","slug":"filenotfounderror","link":"#filenotfounderror","children":[]},{"level":3,"title":"采样模型","slug":"采样模型","link":"#采样模型","children":[]}]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"git":{"createdTime":1668319781000,"updatedTime":1668319781000,"contributors":[{"name":"Kong Ming(空明)","email":"token01@126.com","commits":1}]},"readingTime":{"minutes":12.78,"words":3834},"filePathRelative":"_posts/2022-09-05-stable_diffusion_ai_painting.md","localizedDate":"2022年9月5日"}');export{e as data};
