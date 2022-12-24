import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/home",
  { 
         text: "博客",
         icon: "gaishu",
         link: "/blog.md" 
     },
  {
    text: "Java",
    icon: "creative",
    prefix: "/java/",
    children: [
      
      {
        text: "Java基础",
        link: "base/Java-basis-oop"
      },
      {
        text: "Java IO",
        link: "io/java-io-overview"
      },
      {
        text: "Java集合",
        link: "collection/java-collection-overview"
      },
      {
        text: "Java并发",
        link: "thread/java-thread-x-theorty"
      },
     
      {
        text: "Java8",
        link: "java8/java8-lambda"
      },
      {
        text: "JVM",
        link: "jvm/jvm-overview"
      },
    ]
  },
  
  {
    text: "数据库",
    icon: "creative",
    prefix: "/db/",
    children: [
      
      {
        text: "数据库基础/SQL基础",
        link: "sql/sql-x-basic"
      },
      {
        text: "Sql数据库",
        children: [
          { text: "Mysql", link: "mysql/sql-mysql-overview" },
          { text: "Oracle", link: "oracle/oracle-b-sequence" },
        ],
      },
      {
        text: "NoSql数据库",
        children: [
          { text: "Redis", link: "redis/db-redis-introduce" },
          { text: "MongoDb", link: "mongodb/mongodb-started" },
          { text: "Elasticsearch", link: "es/elasticsearch-x-introduce-1" },
        ],
      },
    ]

  },
  {
    text: "框架|依赖",
    icon: "creative",
    prefix: "/dependencies/",
    children:[
      {
        text: "Spring",
        children: [
          { text: "Spring", link: "spring/spring-overview" },
          { text: "SpringBoot", link: "spring-boot/springboot-x-overview" }
        ],
      },
      {
        text: "ORM",
        children: [
          { text: "Mybatis", link: "mybatis/mybatis-y-arch" },
          { text: "Mybatis-Plus", link: "mybatis-plus/mybatis-plus-x-gen-code" }
        ],
      },
      { text: "Office文档操作", link: "office/office-x-aspose" },
      
    ]
  },
  
  {
    text: "开发|测试",
    icon: "creative",
    prefix: "/develop/",
    children: [
      {
        text: "开发-常用类库",
        icon: "creative",
        link: "devlibrary/dev-lib-lombok"
      },
      {
        text: "开发-安全",
        icon: "creative",
        link: "security/dev-security-x-injection"
      },
      {
        text: "开发 - 优化",
        icon: "creative",
        link: "optimization/optimization-x-interface-optimization"
      },
      {
        text: "开发 - 规范/风格",
        icon: "creative",
        link: "style/dev-qt-code-style"
      },
      {
        text: "测试",
        icon: "creative",
        link: "test/ut-overview"
      },
    ]

  },

  {
    text: "软件|部署",
    icon: "creative",
    prefix: "/deploy/",
    children: [
      {
        text: "Docker",
        icon: "creative",
        link: "docker/docker-basic-overview"
      },
      
      {
        text: "消息队列",
        children: [
          { text: "消息队列", link: "mq/mq-a-overview" },
          { text: "RabbitMQ", link: "mq-rabbitmq/rabbitmq-x-overview" },
          { text: "Kafka", link: "mq-kafka/kafka-x-overview" }
        ],
      },
      {
        text: "Skywalking",
        icon: "creative",
        link: "skywalking/skywalking-x-principle"
      },
      {
        text: "Linux",
        icon: "creative",
        link: "linux/linux-j-monitor-overview"
      },
      {
        text: "Jenkins",
        icon: "creative",
        link: "jenkins/jenkins-overview"
      },
      {
        text: "Nginx",
        icon: "creative",
        link: "nginx/nginx-x-overview"
      },

      {
        text: "部署",
        icon: "creative",
        link: "deploy/docker-basic-overview"
      },
      
    ]
  },
  {
    text: "架构|系统",
    icon: "creative",
    prefix: "/arch/",
    children: [
      {
        text: "架构基础",
        icon: "creative",
        link: "base/arch-basic"
      },
      {
        text: "分布式系统",
        icon: "creative",
        link: "distributed/arch-id"
      },
      {
        text: "微服务",
        icon: "creative",
        link: "microservices/ms-overview"
      },
      {
        text: "对象存储-Minio",
        icon: "creative",
        link: "minio/minio-concept"
      },
      {
        text: "后台管理系统",
        icon: "creative",
        link: "manage-system/manage-system-technical-selection"
      },
      {
        text: "商城设计",
        icon: "creative",
        link: "mall/mall-sku"
      },
    ]

  },
  {
    text: "语言|平台",
    icon: "creative",
    prefix: "/language/",
    children:[
      {
        text: "Android",
        icon: "creative",
        link: "android/android-call-js"
      },
      {
        text: "python",
        icon: "creative",
        link: "python/python-advantage"
      },
      {
        text: "微信",
        icon: "creative",
        link: "weixin/wx-package-Optimization"
      },
    ]
  },
  {
    text: "杂项|思考",
    icon: "creative",
    prefix: "/think/",
    children:[
      {
        text: "印象深刻bug",
        icon: "creative",
        link: "deepImpression/redis-bigdata-slow-problem"
      },
      {
        text: "优化",
        icon: "creative",
        link: "optimization/optimization-x-frequent-operation-db"
      },
      {
        text: "杂项",
        icon: "creative",
        link: "misc/misc-x-middleware"
      },
      
    ]
  }
]);

// import { navbar } from "vuepress-theme-hope";
// export default navbar([
//   { 
//     text: "博客",
//     icon: "gaishu",
//     link: "/blog.md" 
//   },
//   { 
//     text: "Web2.0进阶之路", 
//     icon: "lujing", 
//     link: "/home.md" 
//   },
//   { 
//     text: "Web3.0进阶之路", 
//     icon: "lujing", 
//     link: "/blockchain/" 
//   },
//   // { 
//   //   text: "知识星球", 
//   //   icon: "Artboard", 
//   //   link: "/zhishixingqiu/" 
//   // },
//   {
//     text: "学习路线",
//     icon: "luxian",
//     link: "/learningPath/"
//   },
//   {
//     text: "珍藏资源",
//     icon: "youzhi",
//     children: [
//       { 
//         text: "面试逆袭", 
//         icon: "zhunbei", 
//         link: "/sidebar/sanfene/README.md" 
//       },
//       // { 
//       //   text: "破解合集",
//       //   icon: "zhongyaotishi",
//       //   link: "/nice-article/itmind/" 
//       // },
//     ],
//   },
//   // {
//   //   text: "B站视频",
//   //   icon: "bzhan", 
//   //   link: "https://space.bilibili.com/513340480"
//   // },
// ]);
