---
tags:
  - English
---

# FAQ

A collection of frequent ask questions.

## Where to write
write all your blog posts and notes inside the :file_folder: `/content/article` folder

## Choose your code highlight Theme
The block code highlight engine is Shiki, and it provides a lot of themes to highlight code.

::TipBox{type="announce"}
Each themes has its different color rules to highlight code block.

All available themes list in [this page](https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme), you can select any one list here.

You can check out [this page](https://vscodethemes.com/) to preview them.
::

The default highlight theme in BlogiNote is `one-dark-pro`, you can change it at the :page_facing_up `nuxt.config.ts` file, by **setting the `theme` property**.

For example I want to set the highlight theme to `github-dark`:

```ts [nuxt.config.ts] {4}
export default defineNuxtConfig({
  content: {
    highlight: {
      theme: 'github-dark'
    }
  }
})
```

## Add some preload program languages
The block code highlight engine is Shiki, it supports to highlight hundreds of program languages.

BlogiNote has preload some common program languages in advance, to make the relative block code highlight correctly.

The 11 preload program languages by default:

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

If you want to write a code block **which doesn't belong to any default program languages list above**, you should add these program languages to the :page_facing_up `nuxt.config.ts` file first, **by setting the `preload` property**.

::TipBox{type="announce"}
All supported program languages list in [this page](https://github.com/shikijs/shiki/blob/main/docs/languages.md).

Before setting the `preload` property, you should check out the page first, to make sure that Shiki support the program language your block code belongs to.
::

For example I want to write a code block by using the `ssh-config` program language.

Firstly, I should make sure that Shiki support this program language in [this page](https://github.com/shikijs/shiki/blob/main/docs/languages.md).

Then I the configuration file as below:

```ts [nuxt.config.ts] {4}
export default defineNuxtConfig({
  content: {
    highlight: {
      preload: ['ssh-config']
    }
  }
})
```


If you want to write block code using the program language which don't support by Shiki, you can **set the block code program language to `md` or `markdown` as a fallback solution**.

But this solution has a little flaw, the `md` or `markdown` tag will show at the top-right corner of the code block, it maybe confuse your readers.

But you can fix it in a trick way, by **providing the source message** of the code at the same time, and the value contains the file extension information.

::TipBox{type="tip"}
Because the BlogiNote will auto analyze the source value, and extract the file extension to overwrite the program language value, then you can get the right program language tag at the top-right corner of the code block.
::

For example I want to write some plain text in the code block, but I have to set the program language as `md` because the Shiki don't support to highlight the `.txt` content.

But I can provide the source message `[introduction.txt]` at the same time

The code block show below with highlight and correct program language information:

```md [introduction.txt]
Thanks a lot to use BlogiNote
```

## Change avatar and favicon
You can change the logo at the left side of the header navbar, and the icon of your webpage in the browser tab.

Add you logo image file to the :file_folder: `/public` folder, and configure the `avatar` property in the `app.config.ts` file.

Add you icon image file to the :file_folder: `/public` folder, and configure the `favicon` property in the `app.config.ts` file.

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

## Where is my data
If you want to update or migrate your blog, you should backup your data first.

Your data created by yourself are inside the follow folders:

* all of the articles you write is inside the :file_folder: `/content/article` folder.

* the :file_folder: `/public` folder may be contain some images you uploaded.

## Upgrade BlogiNote
Stay tuned for the **version change** of [the BlogiNote homepage at npm](https://www.npmjs.com/package/bloginote).

If there's any new version released, you can change the version of `bloginote` at the `package.json` file in your project to make an update.

```json [package.json] {3}
{
  "devDependencies": {
    "bloginote": "3.1.0",
    "nuxt": "3.3.2"
  }
}
```

::TipBox{type="warning"}
If you want to upgrade from the version before `3.0.0` to the version above `3.0.0` (include)

besides changing the `bloginote` version at the `package.json` file, **you should also change the code inside the `script` property**, change to the following content

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

If you want to upgrade to version `3.1.0` (include) please notice the change in the `app.config.ts` file.

Now all configurations about BlogiNote is under the `bloginote` property, **not** the `theme` property

```ts [app.config.ts] {2}
export default defineAppConfig({
  bloginote: {
    // ...
  }
})
```

Please checkout the article about [setting](./setting#app-config) for more information
::