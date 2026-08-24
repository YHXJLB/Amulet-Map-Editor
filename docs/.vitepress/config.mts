import { defineConfig } from "vitepress";

const navZh = [
  {
    text: "指南",
    items: [
      { text: "快速上手", link: "/getting-started" },
      { text: "世界转换器", link: "/world-converter" },
      { text: "3D 编辑器", link: "/world-editor" },
    ],
  },
  { text: "下载", link: "https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest" },
];

const navEn = [
  {
    text: "Guide",
    items: [
      { text: "Getting Started", link: "/en/getting-started" },
      { text: "World Converter", link: "/en/world-converter" },
      { text: "World Editor", link: "/en/world-editor" },
    ],
  },
  { text: "Download", link: "https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest" },
];

const sidebarZh = [
  {
    text: "用户指南",
    items: [
      { text: "快速上手", link: "/getting-started" },
      { text: "世界转换器", link: "/world-converter" },
      { text: "3D 编辑器", link: "/world-editor" },
    ],
  },
];

const sidebarEn = [
  {
    text: "User Guide",
    items: [
      { text: "Getting Started", link: "/en/getting-started" },
      { text: "World Converter", link: "/en/world-converter" },
      { text: "World Editor", link: "/en/world-editor" },
    ],
  },
];

export default defineConfig({
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "Amulet 地图编辑器文档",
      description: "Amulet 地图编辑器的中文文档：3D 编辑器、世界转换器与快速上手指南。",
      themeConfig: {
        nav: navZh,
        sidebar: sidebarZh,
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      title: "Amulet Map Editor Docs",
      description: "Documentation for the Amulet Map Editor: 3D editor, world converter and getting started guide.",
      themeConfig: {
        nav: navEn,
        sidebar: sidebarEn,
      },
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Amulet 文档",
    lastUpdated: true,
    docFooter: { prev: "上一页", next: "下一页" },
    outline: { label: "本页目录" },
    lastUpdatedText: "最后更新于",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    searchPlaceholder: "搜索文档",
    notFound: {
      title: "页面未找到",
      quote: "抱歉，我们找不到你要访问的页面。",
      linkText: "返回首页",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/YHXJLB/Amulet-Map-Editor" },
    ],
  },
});
