---
series: BlogiNote 使用教程
seriesOrder: 6
tags:
  - Chinese
---

# 订阅

该教程会向你介绍如何为你的网站设置 RSS 订阅和网站地图 sitemap。

RSS feed 和 sitemap 都会自动生成，你只需要在 `nuxt.config.ts` 文件中进行相应的配置，提供相关的信息，以生成正确的 RSS feed。

例如在

```ts [nuxt.config.ts]
// some metadata about this website
export default defineNuxtConfig({
  runtimeConfig: {
    rss: {
      title: 'BlogiNote',
      description: 'BlogiNote is a website for showing your blogs and notes with flexible layouts and multiple optimizations.',
      image: 'https://bloginote.benbinbin.com/default-avatar.png',
      favicon: 'https://bloginote.benbinbin.com/default-favicon.ico',
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Benbinbin`
    },
    public: {
      hostname: 'https://bloginote.benbinbin.com'
    }
  },
})
```