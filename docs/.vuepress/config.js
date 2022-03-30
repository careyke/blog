const { navbar } = require('./routes/navbarConfig');
const { sidebar } = require('./routes/sidebarConfig');

module.exports = {
  base:'/blog/',
  // 站点配置
  lang: "zh-CN",
  title: "LittleKnife JavaScript",
  description: "The blog of LittleKnife",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.png",
    repo: 'careyke/blog',
    contributors: false,
    backToHome: '返回首页',
    navbar: navbar,
    sidebar: sidebar
  },
};
