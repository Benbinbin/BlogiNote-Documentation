---
series: BlogiNote 使用教程
seriesOrder: 3
tags:
  - Chinese
---

# MDC

MDC 是 MarkDown Components extended syntax 的缩写，表示 MarkDown 组件拓展语法，它将 Vue 组件内嵌到 markdown 文件中，拓展了这种文件的能力边界。

MDC 有两种类型：

* **行内 MDC**：它以 `:` 标识符开始，之后紧跟着 MDC 的名称。行内 MDC 并不会包含内容。

* **块状 MDC**：它会被 `::` 标识符包裹，在第一个 `::` 标识符后紧跟着 MDC 的名称。块状 MDC 可以在标识符之间包含内容。

这两种 MDC 都是可以接收一些属性对其进行设置，这些属性是在花括号内，其形式就像这样 **[`{key="value"}`]{.text-purple-500}**

::TipBox{type="tip" name="提示"}
请注意属性值的数据类型只能是字符串。

你可以查看 Nuxt Content 的[文档](https://content.nuxtjs.org/guide/writing/mdc) 了解更多关于 MDC 的语法信息。
::

BlogiNote 提供了一些内置的 MDC，这个教程会向你介绍如何使用它们。

## TabGroup
这是一个块状 MDC 用于生成一个包含多标签页的容器。

例如

::TabGroup
::::TabItem{name="标签组1"}
这是第一个标签组
::::

::::TabItem{name="标签组2"}
这是第二个标签组
::::

::::TabItem{name="标签组3"}
这是第三个标签组
::::
::

这个 MDC 需要和另一个名为 `TabItem` 的块状 MDC 配合使用（在内部）。

以上示例在 markdown 文件中的写法如下

```md
::TabGroup
::::TabItem{name="标签组1"}
这是第一个标签组
::::

::::TabItem{name="标签组2"}
这是第二个标签组
::::

::::TabItem{name="标签组3"}
这是第三个标签组
::::
::
```

每一个块状 MDC `TabItem` 所包含的就是包含一个标签页，它有一个可选的 **[`name`]{.text-purple-500} 属性**用于设置标签的名称（默认值为 `Tab`），会展示在组件的顶部。

这个 MDC 是为了可以并排显示不同的内容而设计的，我将会用它来演示如何书写 markdown（在 `Markdown` 标签里）以及解析的结果（在 `Tab` 标签里），就是这样：

::TabGroup
::::TabItem{name="Result"}
Markdown 文件的拓展名为 `.md`
::::

::::TabItem{name="Markdown"}
```md
Markdown 文件的拓展名为 `.md`
```
::::
::

## IconCustom
这个一个行内 MDC 用于生成一个图标

::TabGroup
::::TabItem{name="Result"}
:IconCustom{name="bi:emoji-smile-fill"}
::::

::::TabItem{name="Markdown"}
```md
:IconCustom{name="bi:emoji-smile-fill"}
```
::::
::

IconCustom 必须具有 **[`name`]{.text-purple-500} 属性** 以设定需要显示哪一个图标，该属性值是一个字符串代表着一个图标，你可以在 [Icônes](https://icones.js.org/) 这个网站内找多所有可用的图标。

![寻找图标并获取名称](./images/icon-custom.gif)

还有一个可选的**属性 [`iconClass`]{.text-purple-500}** 用于为图标添加 CSS 类，因此你可以添加一些 [Tailwind CSS 基础类](https://tailwindcss.com/docs/utility-first)来设置图标的外观。

例如将图标大小设置为 `24px` x `24px`，并将颜色设置为紫色

::TabGroup
::::TabItem{name="Result"}
:IconCustom{name="bi:emoji-smile-fill" iconClass="w-6 h-6 text-purple-400"}
::::

::::TabItem{name="Markdown"}
```md
:IconCustom{name="bi:emoji-smile-fill" iconClass="w-6 h-6 text-purple-400"}
```
::::
::

## TipBox
这是一个块状 MDC 用于生成一个彩色的提示框，以展示一些提示信息。

例如

::TabGroup
::::TabItem{name="Result"}
::::::TipBox{type="tip"}
这是一个 TipBox 例子
::::::
::::

::::TabItem{name="Markdown"}
```md
::TipBox{type="tip"}
这是一个 TipBox 例子
::
```
::::
::

TipBox 支持一些（可选的）属性：

* **[`type`]{.text-purple-500} 属性**：有一些具有特定用途的内置类型

    * `tip`
    * `announce`
    * `warning`
    * `fun`
    * `achieve`
    * `question`
    * `good`
    * `bad`

    例如 `warning` 类型会显示一个红色的提示框

    ::TabGroup
    ::::TabItem{name="Result"}
    ::::::TipBox{type="warning"}
    这是一个警告类型
    ::::::
    ::::

    ::::TabItem{name="Markdown"}
    ```md
    ::TipBox{type="warning"}
    这是一个警告类型
    ::
    ```
    ::::
    ::

    ::TabGroup
    ::::TabItem{name="tip"}
    ::::::TipBox{type="tip"}
    这是一个提示
    ::::::
    ::::

    ::::TabItem{name="announce"}
    ::::::TipBox{type="announce"}
    这是一个说明
    ::::::
    ::::

    ::::TabItem{name="warning"}
    ::::::TipBox{type="warning"}
    这是一个注意
    ::::::
    ::::

    ::::TabItem{name="fun"}
    ::::::TipBox{type="fun"}
    这是一个想法
    ::::::
    ::::

    ::::TabItem{name="achieve"}
    ::::::TipBox{type="achieve"}
    这是一个达成的成就
    ::::::
    ::::

    ::::TabItem{name="question"}
    ::::::TipBox{type="question"}
    这是一个问题
    ::::::
    ::::

    ::::TabItem{name="good"}
    ::::::TipBox{type="good"}
    这是一个推荐的好习惯
    ::::::
    ::::

    ::::TabItem{name="bad"}
    ::::::TipBox{type="bad"}
    这是一个不推荐的坏习惯
    ::::::
    ::::

    ::::TabItem{name="tldr"}
    ::::::TipBox{type="tldr"}
    这是一个总结
    ::::::
    ::::
    ::

* **[`icon`]{.text-purple-500} 属性**：设置提示图标

    你可以在 [Icônes](https://icones.js.org/) 该网站找到所有支持的图标的名称

    例如设置一个笑脸图标

    ::TabGroup
    ::::TabItem{name="Result"}
    ::::::TipBox{icon="bi:emoji-smile-fill"}
    这个 TipBox 具有一个笑脸图标
    ::::::
    ::::

    ::::TabItem{name="Markdown"}
    ```md
    ::TipBox{icon="bi:emoji-smile-fill"}
    这个 TipBox 具有一个笑脸图标
    ::
    ```
    ::::
    ::

* **[`name`]{.text-purple-500} 属性**：设置标题

    例如将提示框的标题设置为 `示例`

    ::TabGroup
    ::::TabItem{name="Result"}
    ::::::TipBox{name="示例"}
    这个 TipBox 的标题称为示例
    ::::::
    ::::

    ::::TabItem{name="Markdown"}
    ```md
    ::TipBox{name="示例"}
    这个 TipBox 的标题称为示例
    ::
    ```
    ::::
    ::

* **[`boxStyle`]{.text-purple-500} 属性**：为提示框的容器添加 CSS Style 行内样式

    例如将 TipBox 的背景色设置为橙色（采用 hex 模式）`background-color: #ffa500`，字体颜色设置为白色（采用颜色的名称）`color: white`，边框颜色设置为蓝色（采用 rgba 模式）`border-color: rgba(0, 0, 255, 1)`

    ::TabGroup
    ::::TabItem{name="Result"}
    ::::::TipBox{boxStyle="background-color: #ffa500; color: whit; border-color: rgba(0, 0, 255, 1)"}
    这是一个彩色 TipBox
    ::::::
    ::::

    ::::TabItem{name="Markdown"}
    ```md
    ::TipBox{boxStyle="background-color: #ffa500; color: whit; border-color: rgba(0, 0, 255, 1)"}
    这是一个彩色 TipBox
    ::
    ```
    ::::
    ::

* **[`boxClass`]{.text-purple-500} 属性**：为提示框的容器添加 CSS Class 类名

    BlogiNote 支持 [Tailwind CSS](https://tailwindcss.com)，所以可以用它来设置提示框的样式

    例如设置一个类似上一个例子的 TipBox

    ::TabGroup
    ::::TabItem{name="Result"}
    ::::::TipBox{boxClass="bg-orange-400 text-white border-blue-500"}
    这是一个彩色 TipBox
    ::::::
    ::::

    ::::TabItem{name="Markdown"}
    ```md
    ::TipBox{boxClass="bg-orange-400 text-white border-blue-500"}
    这是一个彩色 TipBox
    ::
    ```
    ::::
    ::

* **[`open`]{.text-purple-500} 属性**：设置提示框初始状态是展开还是收起（这里设置的只是初始化，即页面首次加载时，提示框的状态，可以点击提示框的左上角的图标或标题手动展开或收起提示框的内容）

    默认的初始状态是展开，即将属性设置为 `open="true"`，以下的提示框将初始状态设置为收起

    ::TabGroup
    ::::TabItem{name="Result"}
    ::::::TipBox{type="tip" open="false"}
    这个提示框的初始状态为「收起」
    ::::::
    ::::

    ::::TabItem{name="Markdown"}
    ```md
    ::TipBox{type="tip" open="false"}
    这个提示框的初始状态为「收起」
    ::
    ```
    ::::
    ::

## ImageList

这是一个块状 MDC，它会生成一个容器用以包裹一系列的图片，并提供一个缩略图侧栏。

使用这个 MDC 可以更方便地展示和浏览大量的图片集合。

例如以下的 markdown 内容会渲染为一个图片集容器

```md
::ImageList{height='500px'}
![cat1](http://placekitten.com/200)
![cat2](http://placekitten.com/600)
![cat3](http://placekitten.com/400)
![cat4](http://placekitten.com/500)
![cat5](http://placekitten.com/800)
![cat6](http://placekitten.com/1080)
![cat7](http://placekitten.com/800/1000)
![cat8](http://placekitten.com/600/800)
![cat9](http://placekitten.com/1000)
::
```

::ImageList{height='500px'}
![cat1](http://placekitten.com/200)
![cat2](http://placekitten.com/600)
![cat3](http://placekitten.com/400)
![cat4](http://placekitten.com/500)
![cat5](http://placekitten.com/800)
![cat6](http://placekitten.com/1080)
![cat7](http://placekitten.com/800/1000)
![cat8](http://placekitten.com/600/800)
![cat9](http://placekitten.com/1000)
::

ImageList 有一个可选的 **属性 [`height`]{.text-purple-500}** 用于设置容器的高度，默认值是 `400px`