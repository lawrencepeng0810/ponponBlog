import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "澎澎的生活日記",
  description: "生活點滴",
  base: "/ponponBlog/",
  srcDir:'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav:[
      {text:'首頁',link:'/'},
      {
        text:'致自己',
        items:[{
                text:'致自己',
                link:'/myself/index'
            }]
      }
     ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
