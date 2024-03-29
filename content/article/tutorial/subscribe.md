---
series: Tutorial For BlogiNote
seriesOrder: 6
tags:
  - English
---

# Subscribe

This tutorial will show you how to set up RSS feed and sitemap for your website.

The RSS feed and sitemap will generate automatically, the only things you need to do is providing some metadata of your website at `nuxt.config.ts` file for generating the correct RSS feed.

For example

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