---
series: BlogiNote 使用教程
seriesOrder: 4
cover: ./images/interaction.jpg
tags:
  - Chinese
---

# 神奇的交互

该教程会向你介绍 BlogiNote 中神奇的交互。

## 改变模式
你可以通过 [:IconCustom{name="majesticons:cursor-click"} 点击]{.text-purple-500} 首页右上角（或在移动端的右下角）一个按钮，将首页在**列表模式**和**文件夹模式**之间来回切换

如果首页处于 **列表模式** 就会显示文章列表。

如果首页处于 **文件夹模式**，页面就会基于网格来显示所有的文章，就像你平时在电脑上看到的文件系统一样的层级结构。

![改变模式](./images/change-mode.gif)

在 note 模式下，你可以[:IconCustom{name="majesticons:cursor-click"} 点击]{.text-purple-500}子文件夹进行原地的下钻操作，查看子文件夹里内容

![note 模式](./images/note-mode.gif)

:IconCustom{name="noto:magic-wand"} 很神奇~对吧 :v: 快切换到 node 模式尝试一下吧 :yum:

## 代码块

[:IconCustom{name="majesticons:cursor-click"} 点击]{.text-purple-500}代码块左上角的 :IconCustom{name="material-symbols:keyboard-arrow-down-rounded"} 按钮以**展开或收起** :page_with_curl: 长长的代码块。

[:IconCustom{name="majesticons:cursor-click"} 点击]{.text-purple-500} :IconCustom{name="uil:copy"} 按钮来一键复制代码块

```js
const languageColorMap = {
  theme: '#a855f7',
  bash: '#89e051',
  shell: '#89e051',
  html: '#e34c26',
  javascript: '#f1e05a',
}
```

## 图片

![交互](./images/interaction.jpg)

你可以[:IconCustom{name="ic:round-ads-click"} 双击]{.text-purple-500}文章中的图片，然后一个称为 LightBox 的组件就会弹出，它会将图片放大到和屏幕一样大。

你可以和 LightBox 进行多种交互：

* 在图片上[:IconCustom{name="iconoir:mouse-scroll-wheel"} 滚动]{.text-purple-500}鼠标的滚轮，或（在触控屏）[:IconCustom{name="material-symbols:pinch-outline-rounded"} 捏合双指]{.text-purple-500}以缩放图片

* [:IconCustom{name="tabler:arrows-move"} 拖拽]{.text-purple-500}可以将图片四处移动

* 有多个按钮悬浮在图片上，你可以[:IconCustom{name="majesticons:cursor-click"} 单击]{.text-purple-500}图片以显示或隐藏这些按钮

* 如果你想关闭 LightBox，你可以[:IconCustom{name="majesticons:cursor-click"} 点击]{.text-purple-500}模糊的背景，或是[:IconCustom{name="majesticons:cursor-click"} 点击]{.text-purple-500}右上角的 [Esc :IconCustom{name="ic:round-close"}]{.p-1 .text-sm .text-red-500 .bg-red-100 .border .border-red-300 .rounded} 按钮，或是按下键盘上的 `Esc` 键

* 在左上角的紫色按钮 [percent%]{.p-1 .text-sm .text-purple-500 .bg-purple-100 .border .border-purple-300 .rounded} 显示图片当前的缩放比例，你可以[:IconCustom{name="majesticons:cursor-click"} 点击]{.text-purple-500}它，或[:IconCustom{name="ic:round-ads-click"} 双击]{.text-purple-500}图片以重置缩放值（到 100%）和位置（移回居中位置）