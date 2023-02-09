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
