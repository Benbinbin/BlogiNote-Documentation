---
series: BlogiNote 使用教程
seriesOrder: 2
cover: ./images/write.jpg
tags:
  - Chinese
---

# 写一篇文章

该教程会介绍如何写一篇文章。

## 写作所用的编辑器

可以选择任何喜欢的一个款 [Markdown 编辑器](https://github.com/mundimark/awesome-markdown-editors)用于写文章。

::TipBox{type="tip" name="提示"}
如果已经在电脑上配置好开发环境，也可以使用 VS Code 作为写作编辑器。

可以安装一些 VS Code 插件，用于优化书写 markdown 文件的体验：

* [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
* [MDC](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc)
::

## 在哪里写

::TipBox{type="tldr" name="概要"}
* 在 :file_folder: `/content/article` 文件夹中写文章
* 每一个 markdown 文件就是一篇文章，它们会自动解析生成相应的网页页面
* :page_facing_up: `/content/index.md` 文件用于设置首页的内容
* :page_facing_up: `/content/about.md` 文件用于设置关于页面的内容
* 请跟随规则来为文件和文件夹命名
::

可以会被项目文件夹中众多文件弄得晕头转向 :dizzy_face: 但是不必惊慌，**大部分时间只需要和 :file_folder: `/content` 文件夹打交道**，它是存放文章的容器。

打开 :file_folder: `/content` 文件夹，会发现里面 `*.md` 文件。是的，这就是文章，使用一种被称为 Markdown 的语法书写的。

::TipBox{type="tip" name="提示"}
可以阅读本文的下一个章节 *[如何书写](#如何书写)* 来了解更多。
::

首先可以在 :file_folder: `/content` 文件夹里创建两个特殊的文件：

* :page_facing_up: `/content/index.md` 文件用于设置[首页](/)的内容

* :page_facing_up: `/content/about.md` 文件用于设置[关于页面](/about)的内容

文件夹 :file_folder: `/content/article` 它会包含所有的文章。

例如该网页也是使用 BlogiNote 来创建，可以在 [Github](https://github.com/Benbinbin/BlogiNote) 里查看该项目的文件结构，在 :file_folder: `/content/article/tutorial` 这个子文件夹中找到这一篇文章。

::TipBox{type="warning" name="注意"}
项目的编译引擎会自动基于文件目录结构生成相应的网页页面（以及相应的链接路径）

必须遵循以下这些关于文件夹和文件命名的规则：

* 文件夹和文件的名称应该只由数字和英文字母构成

* 文件夹和文件的名称里的英文字母都采用小写形式，因为 URL 链接并不会区分大小写

* 使用连字符 `-` 来连接单词（而不是空格），因为 URL 链接会将空格转换为 `%20`
::

## 如何书写

BlogiNote 可以解析三种类型的文件内容生成网页页面，它们分别是 **Markdown** 文件，**JSON** 文件，**CSV** 文件。

* [:IconCustom{name='bi:markdown'} **Markdown 文件**]{.text-purple-500}

    该文件类型的拓展名是 `.md`。打开一个这种类型的文件，可以看到一些带有奇怪标注的纯文本，譬如 `###` 表示第 3 级标题。通过一些简单的规则，该类型的文件可以将纯文本转换为富文本。

    ::TipBox{type="tip" name="提示"}
    可以在以下两个网站中学习 Markdown 的基本语法：

    * [CommonMark](https://commonmark.org/) 该网站展示一些 Markdown 的基本语法，譬如如何标注标题、链接、图片等

    * [GitHub Flavored Markdown Spec (GFM)](https://github.github.com/gfm/) 该网站展示 GFM 语法，这是一种由 Github 提出的 Markdown 拓展语法，譬如支持脚注 footnote
    ::

* [:IconCustom{name='bi:filetype-json'} **JSON 文件**]{.text-orange-500}

    该文件类型的拓展名是 `.json`。打开一个这种类型的文件，可以看到像树一样的结构，这种文件的内容通过一层一层的嵌套方式来展示数据之间的层级结构。

* [:IconCustom{name='bi:filetype-csv'} **CSV 文件**]{.text-green-500}

    该文件类型的拓展名是 `.csv`。打开一个这种类型的文件，可以看到大量的逗号，因为 `CSV` 是 Comma-Separated Values 的缩写，即以逗号作为分隔符。它是最为常见的电子数据表类型之一，你可能在 Microsoft Excel 中看到过这种类型的文件。

### Markdown

因为 Markdown 提供一些有用的语法以标记纯文本，所以可以很容易地使用它来写一篇带有富文本的文章，带有标题、列表、引用等内容。

很多时候，都会使用 markdown 文件来书写文章，BlogiNote 支持基础的 Markdown 语法，以及 Markdown Components extended syntax（也简称为 [MDC](https://content.nuxtjs.org/guide/writing/mdc/)）Markdown 组件拓展语法。

::TipBox{type="tip" name="提示"}
除了 Markdown 的基础语法，还需要了解一个相关的概念 Front Matter

它是指位于 markdown 文件的顶部，并用两条 `---`（三横线）包裹的内容，这些内容使用 YAML 语法编写，可以为文章添加一些元信息

[YAML 或 YML](https://yaml.org/) 是一种特殊的语法，它的内容使用一系列的 `key: value` 键值对，例如在本文所对应的 markdown 文件就有一个 `cover: ./images/write.jpg` 键值对用于设置文章的封面。

在 markdown 文件解析生成网页后，这些 metadata 信息并不像显示在网页上，所以不需要担心添加在顶部的 Front Matter 将文章「弄乱」

具体介绍可以查看[另一篇文章](./setting-cn#front-matter)
::

以下部分将会介绍一些在书写 markdown 文件时值得注意的细节：

#### 链接

链接在 markdown 中的语法是 `[Google](www.google.com)`，在方括号 `[]` 中的内容会显示在页面上，在小括号 `()` 中的就是链接。

如果希望链接到项目中的其他页面，可以使用**相对链接**，它以 `.` 或 `..` 开头

* 相对链接开头的 `.` 表示当前文件所在的**文件夹**

* 相对链接开头的 `..` 表示当前文件的**上一级文件夹**

例如 `content/article/tutorial/example.md` 这个文件是在 :file_folder: `tutorial` 文件夹中，如果希望在文件中添加一个链接指向另一个文件 `content/article/tutorial/setting.md` 所生成的页面，那么链接形式应该是 `[setting page](./setting)`

::TipBox{type="tip" name="提示"}
请留意链接指向的是文件所生成的页面，所以链接中并不需要 `.md` 拓展名
::

另一个例子是在 `example.md` 文件中添加一个链接指向另一个文件 `content/article/setting.md` 所生成的页面，那么链接形式应该是 `[setting page](../setting)`

如果希望添加一个链接指向该页面内的标题，可以使用**锚链接**，它以 `#` 开头

例如在 markdown 文件中有一个标题 `How to Write` 那么锚链接的形式应该是 `[link](#how-to-write)`

::TipBox{type="tip" name="提示"}
请留意链接中的所有英文字母都是小写，且使用连字符 `-` 连接单词。
::

也可以将相对链接和锚链接结合起来使用，这样就可以创建一个指向项目中某个页面的特定标题的链接，例如 `[link](./setting#front-matter)`

#### 代码

::TipBox{type="announce" name="说明"}
首先需要了解 **highlight theme 高亮主题**和 **preload program languages 预载编程语言**这两个概念。

**highlight theme 高亮主题**是一种基于编程语言装饰代码文本的颜色规则。

**preload program languages 预载编程语言**是一组编程语言，它们会被高亮引擎识别并对其代码文本进行正确的高亮标注。

这两个参数都会在 :page_facing_up: `nuxt.config.ts` 文件中进行配置。

可以查阅教程[常见问题]里的 *[选择代码高亮主题](./faq-cn#选择代码高亮主题)* 和 *[添加预载编程语言](./faq-cn#添加预载编程语言)* 这两部分。
::

Markdown 支持两种类型的代码：

* 行内代码：代码嵌入到段落中，它们使用**反引号**包裹

    例如下面 :point_down: 在 `Markdown` 标签下的是原始内容，在 `Result` 标签下的是编译生成的网页会得到的结果

    ::TabGroup
        ::TabItem{name="Markdown"}
        ![行内代码](./images/inline-code.png)
        ::

        ::TabItem{name="Result"}
        Markdown file extension name is `.md`
        ::
    ::

    ::TipBox{type="tip" name="提示"}
    反引号一般在键盘的 `Esc` 键下方那一个键
    ::

* 代码块：以独立的块展示的代码内容，它们使用**三个反引号**包裹

    ::TabGroup
        ::TabItem{name="Markdown"}
        ![代码块](./images/block-code.png)
        ::

        ::TabItem{name="Result"}
        ```javascript
        console.log('hello world!')
        ```
        ::
    ::

    ::TipBox{type="warning" name="注意"}
    为了让代码可以正确地进行高亮显示，**必须**在代码块的三个反引号之后，指定代码内容属于哪一种编程语言的

    代码块的高亮引擎是 Shiki，它支持高亮上百种编程语言

    但是为了更准确，请先查看这个[页面](https://github.com/shikijs/shiki/blob/main/docs/languages.md)确保所指定的编程语言是 Shiki 所支持的

    如果代码块所属的编程语言并没有在 Shiki 的支持列表中，或不知道代码块属于那种编程语言，**一个次选通用的解决方法是先将编程语言设定为 `md` 或 `markdown`**
    ::

    还可以为代码块提供更多的信息：

    * **添加文件名称** 到方括号中，例如 `[filename]`，以指定代码块的来源

        ::TipBox{type="tip" name="提示"}
        也可以在方括号中添加一个链接，以表示代码来源于线上，链接应该以 `https`、`http` 或 `www` 开头
        ::

    * **高亮某些行** 在花括号中指定，例如 `{2-4, 6}` 高亮第二至第四行，以及第六行

        ::TabGroup
            ::TabItem{name="Markdown"}
            ![添加更多信息的代码块](./images/block-code-with-more-info.png)
            ::

            ::TabItem{name="Result"}
            ```javascript [/components/content/ProseCode.vue] {2-4, 6}
            const languageColorMap = {
            theme: '#a855f7',
            bash: '#89e051',
            shell: '#89e051',
            html: '#e34c26',
            javascript: '#f1e05a',
            }
            ```
            ::
        ::

#### mdc
MDC 是 Markdown Components extended syntax 的缩写，表示 Markdown 组件拓展语法，它将 Vue 组件内嵌到 markdown 文件中，拓展了这种文件的能力边界。

可以查看另一篇教程 ***[MDC](./mdc-cn)*** 以了解 BlogiNote 所提供的内置 mdc

## 设定标题

有多种方式去设定文章的标题：

* markdown 文件的名称

* 文章的第一级标题（以 `#` 开头的文本，而且这个标题必须是除了文章 Front Matter 后的第一个元素）

* 在 Front Matter 中设置的 `title` 属性

这些方式的优先级顺序是 Front Matter 的 `title` 属性 > 第一级标题 > 文件名称

::TipBox{type="tip" name="提示"}
关于 Front Matter 的具体介绍可以查看[另一篇文章](./setting-cn#front-matter)
::

一般推荐使用文章的第一级标题作为文章的标题，这也是符合直觉的。

::TipBox{type="warning" name="注意"}
请不要在 Front Matter 中提供 `title` 属性又同时在文章设置第一级标题，因为 `title` 会作为文章的标题，所以第一级标题**总是**会被隐藏掉。
::

::TipBox{type="announce" name="说明"}
文章所对应的链接总是基于文件目录结构的，所以会以 markdown 文件的名称（而**不是**文章标题）作为 URL 的一部分
::

## 添加封面
在 Front Matter 中设置 `cover: image_file_path` 属性为文章添加封面

文章的封面会显示在文章页面的顶部，以及首页的文章列表条目的右下角

::TipBox{type="tip" name="提示"}
关于 Front Matter 的具体介绍可以查看[另一篇文章](./setting-cn#front-matter)
::

按照以下步骤为文章设置封面，可以使用项目中的本地图片或在线的图片：

* 如果希望以项目中的图片作为封面，需要使用**相对链接**（以 `.` 作为开头的路径）

    1. 首先将图片下载

        例如我从 [Unsplash](https://unsplash.com/) 下载一张（由 [Aaron Burden](https://unsplash.com/@aaronburden) 拍摄的）[图片](https://unsplash.com/photos/xG8IQMqMITM)，然后将其重命名为 `write.jpg`

    2. 然后将图片放置在项目的文件夹中

        例如我将图片放置在 :file_folder: `/content/article/tutorial/images` 文件夹内，因为这里和 `/content/article/tutorial/write-article.md` 文件比较近

    3. 现在就可以在 markdown 文件中使用**相对路径**

        所以将 `cover: ./images/write.jpg` 添加到文章的顶部，并用 `---` 三条横线包裹

        ::TipBox{type="tip" name="提示"}
        **相对路径**开头中的 `.` 表示当前文件所在的文件夹。

        在该例子中，当前文件是 :page_facing_up: `write-article.md` 所以 `.` 就表示 :file_folder: `tutorial` 文件夹
        ::

* 如果希望使用在线的图片作为封面，只需要将图片的链接 url 作为路径即可

    例如我希望使用该[图片](https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ)作为文章的封面，其链接是 `https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ`

    所以我只需要将 `cover: https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ` 添加到文章的顶部，并用 `---` 三条横线包裹即可

## 文章分类
可以为文章添加标签或指定所属的系列，它们会显示在文章页面的标题下面，并且可以进行交互。

例如设置了系列归属的文章，在文章页面的标题下面会显示一个按钮，它的名称就是系列的名称，点击它会弹出一个窗口，里面罗列了属于该系列的所有文章。

另外在文章列表页面 `https://your.domain.com/list` 也可以根据标签和系列对文章进行快速的分类检索

### 添加标签
在 Front Matter 中设置 `tags` 属性为文章添加标签，它的值是数组，所以可以为一篇文章添加多个标签

在 YAML 语法中如果一个属性的值是一个数组，则需要另起一行再罗列出其中的各个元素。而且在每个元素前需要带有缩进（即段落的首部至少有两个空格），并 `-` 短横线作为开始标识，与后随的具体的值之间用空格间隔

例如添加 `笔记`、`博客` 两个标签，则在文章顶部的 Front Matter 中进行如下设置

```md
---
tags:
  - 笔记
  - 博客
---
```

::TipBox{type="tip" name="提示"}
关于 Front Matter 的具体介绍可以查看[另一篇文章](./setting-cn#front-matter)
::

### 指定系列
在 Front Matter 中设置 `series` 属性为文章指定所属的系列

还可以在 Front Matter 中设置 `seriesOrder` 属性指定当前文章在系列中的排序

例如将文章指定为 `BlogiNote 使用教程` 系列，且排序为 `2`，则在文章顶部的 Front Matter 中进行如下设置

```md
---
series: BlogiNote 使用教程
seriesOrder: 2
---
```

## 关联文章
支持为当前文章设置两篇关联文章，它们会在当前文章的页首和页尾展示，点击相应的按钮可以进行跳转查看关联文章

* 在 Front Matter 中设置 `nextArticleName` 和 `nextArticleUrl` 属性为文章指定下一篇**文章的名称**和**文件路径**（使用相对路径，省略文件后缀 `.md`）

* 在 Front Matter 中设置 `prevArticleName` 和 `prevArticleUrl` 属性为文章指定上一篇**文章的名称**和**文件路径**（（使用相对路径，省略文件后缀 `.md`）

例如要为当前文章指定上一篇文章，文章名称为 `简介`，该文章所对应的 markdown 文件是 `introduction-cn.md`

由于当前文章的绝对路径是 `项目根目录/content/article/tutorial/write-article-cn.md` 而上一篇文章的绝对路径是 `项目根目录/content/article/introduction-cn.md`，所以上一篇文章相对于当前文章的**相对路径**是 `../introduction-cn`

则在文章顶部的 Front Matter 中进行如下设置

```md
---
prevArticleName: 简介
prevArticleUrl: ../introduction-cn
---
```

::TipBox{type="announce" name="说明"}
对于设置了所属系列的文章，程序会根据系列文章的次序，自动为当前文章设置好上一篇和下一篇文章

也可以手动在当前文章设置以上提到的 Front Matter 属性，以覆盖自动生成的关联文章
::

## 设置时间
在 Front Matter 中设置 `created` 或 `updated` 属性分别为文章指定创建时间和更新时间，其中时间格式为 `年-月-日` 例如 `2023-02-01`

在 Front Matter 中设置 `showTime` 属性，其值为 `true` 或 `false`，以表示是否在该文章页面显示时间戳

还可以在 Front Matter 中设置 `showOutdatedWarning` 属性，其值为 `true` 或 `false`，以表示是否开启文章过期提醒，以便让用户注意文章内容**时效性**

::TipBox{type="tip" name="提示"}
文章的「过期」阈值默认值是 `30` 天，可以在 `app.config.ts` 项目配置文件中进行修改

关于使用文件 `app.config.ts` 配置项目的介绍可以参考这一篇[文章](./setting-cn#app-config)
::