---
series: Tutorial For BlogiNote
seriesOrder: 5
tags:
  - English
---

# Setting

BlogiNote is flexible enough to meet your needs, it provides different ways to set the project.

## App Config
You can set some properties for the whole website at the `app.config.ts` file

::TipBox{type="announce"}
all configurations about BlogiNote is under the `bloginote` property
::

the default values of these properties are shown below, you can rewrite some of them at the `app.config.ts` of your project.

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

the sub properties under the **[`bloginote.meta`]{.text-purple-500} property** set the metadata for your project:

* **[`name`]{.text-purple-500} property** sets the name of website (show at the browser tab)

* **[`description`]{.text-purple-500} property** sets the description of the website

* **[`author`]{.text-purple-500} property** sets the author name of the website

  ::TipBox{type="tip"}
  the **[`author`]{.text-purple-500} property** under the **[`bloginote`]{.text-purple-500} property** is the same
  ::

* **[`url`]{.text-purple-500} property** is the domain of your website

---

**[`email`]{.text-purple-500} property** sets the email of the author

**[`avatar`]{.text-purple-500} property** sets the logo at the left side of the header navbar, and **[`favicon`]{.text-purple-500} property** set the icon of your website in the browser tab

---

the sub properties under the **[`bloginote.homePage`]{.text-purple-500} property** set the behavior for home page:

* **[`showBlogPosts`]{.text-purple-500} property** is used to set whether to display blog posts list at home page

* **[`postItemLimit`]{.text-purple-500} property** limit the number of posts shown in each category.

---

**[`subscribePage`]{.text-purple-500} property** is used to set whether to display the `subscribe` button on the header navbar

---

the sub properties under the **[`bloginote.articlePage`]{.text-purple-500} property** set the behavior for **all article pages**:

* **[`showTime`]{.text-purple-500} property** is used to set whether to display the timestamp of an article (the created time and the last updated time)

* **[`outdated.show`]{.text-purple-500} property** and **[`outdated.threshold`]{.text-purple-500} property** are used to set whether to display outdated warning of the article, and the outdated days threshold.

    the default value is `30` that means the outdated warning will show and the article outdated days threshold is 30 days (after it created or the latest updated time).

* **[`showCatalog`]{.text-purple-500} property** is used to set whether to display the catalog of the article by default (when the page open first)

## Front Matter
You can add some metadata for the special article by add some YAML within `---` three dashes at the top of the markdown file, these contents call Front Matter.

::TipBox{type="announce"}
We won't see this metadata after the markdown file convert to the website page. So you shouldn't worry about the "dirty" header will make the article in a mess.

It is written in a special format called [YAML or YML](https://yaml.org/), this format is make up of a list of `key: value` pairs.
::

There are some properties you can use to configure the page interface and interactive behavior:

* **[`title`]{.text-purple-500} property** is used to set the title of article

* **[`cover`]{.text-purple-500} property** is used to set the cover of the article

* **[`nextArticleName`]{.text-purple-500} 和 [`nextArticleUrl`]{.text-purple-500} property** is used to set the **title** and the **file path** of the next relative article (use the relative path, and ignore the file extension `.md`)

* **[`prevArticleName`]{.text-purple-500} and [`prevArticleUrl`]{.text-purple-500} property** is used to set the **title** and the **file path** of the previous relative article (use the relative path, and ignore the file extension `.md`)

* **[`series`]{.text-purple-500} property** is used to set the specific series that the article belongs to

* **[`tags`]{.text-purple-500} property** is used to set the tags for the article, the value is an array, allowing you to add multiple tags to an article.

* **[`showCatalog`]{.text-purple-500} property** is used to set whether the table of contents of the article is displayed by default (when the article page is first opened), the value can be set as `true` or `false`

* **[`created`]{.text-purple-500} property** is used to set the creation time of the article, the value should be a date in the format `YYYY-MM-DD`, for example `2023-02-01`

* **[`updated`]{.text-purple-500} property** is used to set the updated time of the article, the value should be a date in the format `YYYY-MM-DD`, for example `2023-02-01`

* **[`showTime`]{.text-purple-500} property** is used to set whether to display the timestamp of an article (the created time and the last updated time), the value can be set as `true` or `false`

* **[`showOutdatedWarning`]{.text-purple-500} property** is used to set whether to display a warning about the timeliness of the article when it is being viewed, the value can be set as true or false.

::TipBox{type="tip"}
Refer to [this article](./write-article) for specific information and configuration examples of each Front Matter property mentioned above
::