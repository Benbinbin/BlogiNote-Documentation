---
series: BlogiNote 使用教程
seriesOrder: 5
tags:
  - Chinese
---

# 设置

BlogiNote 是灵活多变的，可满足你多种需求，它提供多种方式对项目进行配置。

## App config
你可以在 `app.config.ts` 文件设置一些属性以对整个网站进行配置。

::TipBox{type="announce" name="说明"}
所有关于 BlogiNote 的配置都位于 `bloginote` 字段下
::

这些属性的默认值如下所示，你可以在项目的 `app.config.ts` 文件中创建同名的属性，以覆盖默认值

```ts [app.config.ts]
export default defineAppConfig({
  bloginote: {
    meta: {
      name: 'BlogiNote',
      description: 'A Nuxt theme for showing blog posts and snippet notes with flexible layouts and multiple optimizations.',
      author: 'Benbinbin',
      url: 'https://bloginote.benbinbin.com/'
    },
    author: 'Benbinbin',
    email: 'benthomsonbin@gmail.com',
    avatar: '/default-avatar.png',
    favicon: '/default-favicon.ico',
    homePage: {
      showBlogPosts: true,
      postItemLimit: 5
    },
    subscribePage: true,
    articlePage: {
      showTime: true,
      outdated: {
        show: true,
        threshold: 30
      },
      showCatalog: true
    }
  }
})
```

在 **[`bloginote.meta`]{.text-purple-500} 属性**下的一些子属性是用于设置项目的元信息 metadata：

* **[`name`]{.text-purple-500} 属性**用于设置网站的名称（显示在浏览器的标签栏中）

* **[`description`]{.text-purple-500} 属性**用于设置网站的描述信息

* **[`author`]{.text-purple-500} 属性**用于指明网站的创作者

  ::TipBox{type="tip" name="提示"}
  在 **[`bloginote`]{.text-purple-500} 属性**下的 **[`author`]{.text-purple-500} 属性**作用一样
  ::

* **[`url`]{.text-purple-500} 属性**用于指明网站的域名

---

**[`email`]{.text-purple-500} 属性**用于设置网站创作者的联系邮箱

**[`avatar`]{.text-purple-500} 属性**用于设置网站的 Logo 标志，它会显示在顶部导航栏的左侧，而 **[`favicon`]{.text-purple-500} 属性**用于设置网站在浏览器标签栏所显示的图标

---

在 **[`bloginote.homePage`]{.text-purple-500} 属性**下的一些子属性是用于设置首页的：

* **[`showBlogPosts`]{.text-purple-500} 属性**用于设置在首页是否显示文章列表

* **[`postItemLimit`]{.text-purple-500} 属性**用于限制首页所每个主题下所显示的文章的数量

---

**[`subscribePage`]{.text-purple-500} 属性**用于设置是否要在顶部导航栏显示 `subscribe` 按钮

---

在 **[`bloginote.articlePage`]{.text-purple-500} 属性**下的一些子属性是用于设置**所有文章页面**的：

* **[`showTime`]{.text-purple-500} 属性**用于设置是否在文章页面显示时间戳（包括文章创建时间和最后更新的时间）

* **[`outdated.show`]{.text-purple-500} 属性** 和 **[`outdated.threshold`]{.text-purple-500} 属性**用于设置是否显示文章时效性警告，以及触发警告的时间间隔的阈值

    默认的时间间隔阈值是 `30` 天，也就是说如果当前时间距离文章的时间戳（文章的创建时间或最后更新的时间）超过 30 天时，就认为文章的内容可能过时了，这时候会显示时效性警告

* **[`showCatalog`]{.text-purple-500} 属性**用于设置是否默认显示文章的目录（在第一次打开网站时）

## Front Matter

你可以在 markdown 文件的顶部的 `---` 三条横线之间使用 YAML 语法为该文章添加一些元信息，这些内容也成为 Front Matter。

::TipBox{type="announce" name="说明"}
当 markdown 文件被解析生成网页时，Front Matter 并不会显示在页面上。所以你不必担心这些额外的元信息会将文章「弄乱」。

Front Matter 使用一种称为 [YAML 或 YML](https://yaml.org/) 的语法来书写，它由一系列的 `key: value` 键值对组成。
::

有一些特殊的属性可用于配置文章界面和交互行为：

* **[`title`]{.text-purple-500} 属性**用于设置文章的标题

* **[`cover`]{.text-purple-500} 属性**用于设置文章的封面

* **[`nextArticleName`]{.text-purple-500} 和 [`nextArticleUrl`]{.text-purple-500} 属性**用于设置当前文章的下一篇关联文章的**标题**和**文件路径**（使用相对路径，省略文件后缀 `.md`）

*  **[`prevArticleName`]{.text-purple-500} 和 [`prevArticleUrl`]{.text-purple-500} 属性**则用于设置当前文章的上一篇关联文章的**文章**和**文件路径**（使用相对路径，省略文件后缀 `.md`）

* **[`series`]{.text-purple-500} 属性**用于设置文章指定所属的系列

* **[`tags`]{.text-purple-500} 属性**用于设置文章的标签，它的值是数组，所以可以为一篇文章添加多个标签

* **[`showCatalog`]{.text-purple-500} 属性**用于设置是否默认显示文章的目录（在第一次打开该文章页面时），其值为 `true` 或 `false`

* **[`created`]{.text-purple-500} 属性**用于设置文章的创建时间，其值为时间，格式为 `年-月-日` 例如 `2023-02-01`

* **[`updated`]{.text-purple-500} 属性**用于设置文章的更新时间，其值为时间，格式为 `年-月-日` 例如 `2023-02-01`

* **[`showTime`]{.text-purple-500} 属性**用于设置是否在该文章页面显示时间戳（包括文章创建时间和最后更新的时间），其值为 `true` 或 `false`

* **[`showOutdatedWarning`]{.text-purple-500} 属性**用于设置是否显示文章时效性警告，其值为 `true` 或 `false`

::TipBox{type="tip" name="提示"}
以上各个 Front Matter 属性的作用和配置具体可以参考这一篇[文章](./write-article-cn)
::