const { navbar } = require('./routes/navbarConfig');
const { sidebar } = require('./routes/sidebarConfig');

module.exports = {
  base: '/blog/',
  // 站点配置
  lang: "zh-CN",
  title: "LittleKnife's JavaScript",
  description: "路漫漫其修远兮，吾将上下而求索。",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.png",
    repo: 'careyke/blog',
    contributors: false,
    backToHome: '返回首页',
    navbar: navbar,
    sidebar: sidebar,
  },
  plugins:[
    [
      "@vuepress/docsearch",
      {
        apiKey: "f04be3a2f45bdf7185bb6e80b91fef2e",
        indexName: "careyke",
        appId: "7HYVRLWMRC",
        locales: {
          '/': {
            placeholder: 'Search Documentation',
            translations: {
              button: {
                buttonText: 'Search Documentation',
              },
            },
          },
          '/zh/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
              },
            },
          },
        },
      },
    ],
  ]
};
