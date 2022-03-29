module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "LittleKnife Javascript",
  description: "The blog of LittleKnife",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.png",
    navbar: [
      {
        text: "前端基础",
        children:[
          {
            text:'HTML',
            link:'/frontend/html'
          }
        ]
      },
    ],
  },
};
