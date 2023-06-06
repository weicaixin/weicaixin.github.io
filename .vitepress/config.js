import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'

export default {
  title: '游生若梦',
  description: '',
  srcDir: './docs',
  outDir: './dist',
  cleanUrls: true,
  themeConfig: {
    nav: navList(),
    sidebar: sidebarList()
  }
}

function navList() {
  return [
    { text: '技能书', link: '/技能书/前言' },
    { text: '烹饪书', link: '/烹饪书/前言' }
  ]
}

function sidebarList() {
  return {
    '/技能书/': getSidebar({ contentRoot: '/docs', contentDirs: ['技能书'], collapsible: true, collapsed: true }),
    '/烹饪书/': getSidebar({ contentRoot: '/docs', contentDirs: ['烹饪书'], collapsible: true, collapsed: true }),
  }
}

// function toSidebarOption(tree = []) {
//   if (!Array.isArray(tree)) return [];

//   return tree.map((v) => {
//     if (v.children !== undefined) {
//       return {
//         text: v.name,
//         collapsible: true,
//         collapsed: true,
//         items: toSidebarOption(v.children),
//       };
//     } else {
//       return {
//         text: v.name.replace(".md", ""),
//         link: v.path.split("docs")[1].replace(".md", ""),
//       };
//     }
//   });
// }

// function getSiderbar(srcPath, title) {
//   const srcDir = dirTree(srcPath, {
//     extensions: /\.md$/,
//     normalizePath: true,
//   });

//   return [
//     {
//       text: title == undefined ? srcDir.name : title,
//       collapsible: true,
//       collapsed: true,
//       items: toSidebarOption(srcDir.children),
//     },
//   ];
// }
