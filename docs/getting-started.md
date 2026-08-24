# 快速上手

本教程仅介绍如何通过我们预构建 / 编译的发行版安装 Amulet。如需从源码安装，请参阅我们的 [README](https://github.com/YHXJLB/Amulet-Map-Editor/blob/0.10/README.md)。

您可以在我们的 [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest) 页面找到最新版本，最新发布始终位于页面顶部。在该页面下方有一个名为 `Assets`（资产）的区域，如下所示：

![Assets 区域](/images/installation_assets.png)

## 安装 Amulet

在该区域中，下载与您操作系统对应的安装包或压缩包。下载完成后：

- **Windows**：运行安装程序（`.exe`），或解压免安装版压缩包后运行 `amulet_app.exe`
- **macOS**：解压 `.zip` 文件后运行 `amulet_app.app`
- **Linux**：安装 `.deb` 包（Debian/Ubuntu），或参考 Docker 镜像运行

## 打开一个世界

::: warning
我们建议对任何将要被 Amulet 打开的世界提前备份，以避免数据丢失。
:::

启动 Amulet 后，您将看到类似下面的界面：

![Amulet 启动界面](/images/start_screen.png)

点击 `Open World`（打开世界）按钮后，会弹出如下对话框：

![世界选择弹窗](/images/world_select.png)

对话框右侧列表显示的是之前被 Amulet 打开过的世界；点击 `Open other world`（打开其他世界）按钮会弹出目录选择对话框。使用该对话框选中您要打开的世界目录，然后点击 `Select folder`（选择文件夹）。

世界成功加载后，将显示如下界面：

![世界界面](/images/world_screen.png)

该界面会显示世界的概要信息，例如世界名称、该世界最后一次打开时所用的 Minecraft 版本与平台，以及世界所在文件路径的末尾部分。

界面左侧有 3 个标签页，当前显示的是 `About`（关于）标签页。通过这些标签页可以访问并使用 Amulet 的各个子程序：

- `About`（关于）—— 已打开世界的信息概要
- `Convert`（转换）—— Amulet 世界转换器，见 [世界转换器](/world-converter.html)
- `3D Editor`（3D 编辑器）—— Amulet 3D 编辑器，见 [3D 编辑器](/world-editor.html)
