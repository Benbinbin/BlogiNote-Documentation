---
tags:
  - Chinese
---

# 常见问题

这是常见问题的集合。

## 在哪些写文章
将文章都写在 :file_folder: `/content/article` 文件夹中。

## 选择代码高亮主题
代码块的高亮引擎是 Shiki，它提供了大量的高亮主题。

::TipBox{type="announce" name="说明"}
每一个高亮主题会有不同的颜色规则用于高亮代码内容。

这些主题都可以在[这个页面](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme)里查看，你可以在其中选择一个。

你可以通过[这个页面](https://vscodethemes.com/)预览这些高亮主题。
::

BlogiNote 代码块的默认高亮主题是 `one-dark-pro`，你可以在 `nuxt.config.ts` 文件中**设置 `theme` 属性**以更改它。

例如我希望将高亮主题更改为 `github-dark`：

```ts [nuxt.config.ts] {4}
export default defineNuxtConfig({
  content: {
    highlight: {
      theme: 'github-dark'
    }
  }
})
```

## 添加预载编程语言

代码块的高亮引擎是 Shiki，它支持对上百种编程语言进行代码高亮。

BlogiNote 已经预载支持了一些常用的编程语言，使用这些编程语言书写的代码块可以被正确高亮标注。

默认预载支持 11 中编程语言：

* `'diff'`
* `'json'`
* `'js'`
* `'ts'`
* `'css'`
* `'shell'`
* `'html'`
* `'md'`
* `'yaml'`
* `'vue'`
* `'python'`

如果你希望代码块支持高亮更多类型的编程语言，可以在 :page_facing_up `nuxt.config.ts` 文件中**设置 `preload` 属性**

::TipBox{type="announce" name="说明"}
可以在[该页面](https://github.com/shikijs/shiki/blob/main/docs/languages.md)查看所有支持的编程语言。

在设置 `preload` 属性前，你应该先查看以上页面，以确保 Shiki 支持这种编程语言。
::

例如我想用 `ssh-config` 编程语言书写代码块。

首先，我应该查看[该页面](https://github.com/shikijs/shiki/blob/main/docs/languages.md)确保 Shiki 支持这种编程语言。

然后在 :page_facing_up `nuxt.config.ts` 文件中进行配置：

```ts [nuxt.config.ts] {4}
export default defineNuxtConfig({
  content: {
    highlight: {
      preload: ['ssh-config']
    }
  }
})
```

如果你想用 Shiki 并不支持的编程语言书写代码块，你可以**将代码块的编程语言设置为 `md` 或 `markdown` 作为次级解决方案**。

但是这个方法有一个小缺陷，就是 `md` 或 `markdown` 标签会出现在代码块的右上角，这可能会让读者感到疑惑。

你可以通过一个较为取巧的方法来解决这个小缺陷，通过同时**提供代码来源文件的信息**，这个信息里需要包含文件拓展名。

::TipBox{type="tip" name="提示"}
因为 BlogiNote 会自动分析代码来源文件的信息，并从中提取文件拓展名，用来覆盖所设置的编程语言的值，这样就可以将正确的编程语言（文件的拓展名）展示着代码块右上角。
::

例如我想在代码块中写一些纯文本，但是我必须将编程语言设置为 `md` 因为 Shiki 并不支持高亮类型为 `.txt` 的内容。

但是我可以同时提供来源文件信息 `[introduction.txt]`

以下显示的代码块可以正确高亮，而且「编程语言」信息也是正确的：

```md [introduction.txt]
Thanks a lot to use BlogiNote
```

## 改变头像和图标

你可以更改顶部导航栏左侧的 Logo，以及在浏览器标签栏上网站的图标。

将 logo 图片放置在 :file_folder: `/public` 文件夹中，并在 `app.config.ts` 文件中设置 `avatar` 属性。

将图标文件放置在 :file_folder: `/public` 文件夹中，并在 `app.config.ts` 文件中设置 `favicon` 属性。

```ts [app.config.ts] {4, 6}
export default defineAppConfig({
  theme: {
    // for example you add a image named avatar.png to public folder as the logo
    avatar: 'avatar.png',
    // add a image named favicon.ico to public folder as the icon of your webpage
    favicon: 'favicon.ico',
  }
})
```

## 哪里存放我的数据

如果你想迁移你的部落格，你应该先备份你的数据。

你所创建的数据在以下文件夹中：

* 你写的所有文章都在 :file_folder: `/content/article` 文件夹中。

* :file_folder: `/public` 文件夹中有一些你上传的图片。

## 升级 bloginote

请持续关注 [BlogiNote 项目在 npm 主页](https://www.npmjs.com/package/bloginote)的**版本变更**。

如果有新的版本发布，你可以在 `package.json` 文件中作出相应的修改，以升级 BlogiNote

```json [package.json] {3}
{
  "devDependencies": {
    "bloginote": "3.0.0",
    "nuxt": "3.0.0-rc.11"
  }
}
```

::TipBox{type="warning" name="注意"}
如果你的项目是从 `3.0.0` 之前的版本进行升级，升级到 `3.0.0`（包含）之后的版本。

在 `package.json` 文件中，除了需要修改 `bloginote` 的版本号，**还需要对 `script` 属性里的相关代码进行修改（高亮部分）**，修改为以下内容：

```json [package.json] {5}
{
  "scripts": {
    "dev": "nuxi dev",
    "build": "nuxi build",
    "generate": "nuxt generate && npx pagefind --source dist",
    "preview": "nuxi preview",
    "lint": "eslint ."
  },
}
```

如果你的项目升级到了 `3.1.0` 版本（包含），请注意在 `app.config.ts` 文件里的变化

现在所有关于 BlogiNote 的配置项都位于 `bloginote` 字段下（**而不是**原来的 `theme` 字段）

```ts [app.config.ts] {2}
export default defineAppConfig({
  bloginote: {
    // ...
  }
})
```

请查看另一篇文章《[设置](./setting-cn#app-config)》了解更多
::