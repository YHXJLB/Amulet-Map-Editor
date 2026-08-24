# Amulet 地图编辑器


[简体中文](README.md) · [繁體中文](docs/readme/README.zh_TW.md) · [English](docs/readme/README.en.md) · [日本語](docs/readme/README.ja.md) · [한국어](docs/readme/README.ko.md) · [Deutsch](docs/readme/README.de.md) · [Français](docs/readme/README.fr.md) · [Español](docs/readme/README.es.md) · [Português (Brasil)](docs/readme/README.pt_BR.md) · [Русский](docs/readme/README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![Docs](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/docs-pages.yml/badge.svg)](https://ame-doc.yhxjlb.com/)

Amulet 是一款支持 Java 版 1.12+ 与 Bedrock 版 1.7+ 全版本的 Minecraft 世界编辑器与转换器。

![cover](resource/img/cover.jpg)

> 更详细的用户指南、世界转换教程与 3D 编辑器教程，请访问官方文档：[ame-doc.yhxjlb.com](https://ame-doc.yhxjlb.com/)

## 功能概览

- **世界转换（Convert）**：将 Minecraft 世界在不同平台（Java ↔ Bedrock）以及不同版本之间互相转换。
- **3D 编辑器（3D Editor）**：在三维世界中选中、复制、粘贴、填充与删除方块。
- **世界信息（About）**：查看当前打开世界的名称、最后打开版本、平台类型与文件路径等摘要信息。

## 系统要求

- **Windows**：Windows 10/11，x64 或 ARM64。
- **Linux**：支持 Docker 的任意发行版；或 Debian/Ubuntu 系发行版安装 `.deb` 包。
- **macOS**：当前已停止自动构建，旧版构建步骤存档于 [`.github/workflows/archived/build-macos.yml`](.github/workflows/archived/build-macos.yml)。

## 安装

1. 打开 [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest)。
2. 在 **Assets** 区域找到适合你操作系统与架构的安装包：
   - Windows (x64)：`Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64)：`Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows 免安装版：`*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian)：`amulet-map-editor_*.deb`
   - Flatpak：`amulet-map-editor-*.flatpak`
   - Docker：`amulet-editor-*.tar.gz`
3. 下载并运行安装程序，或按下方 Docker 说明部署。

> 若你从源码运行，请参考官方文档 [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source)（上游仓库）。

## 打开世界

1. 启动 Amulet，点击 **Open World**。
2. 在弹出的世界选择对话框中：
   - 右侧会列出 Amulet 最近打开过的世界；
   - 点击 **Open other world** 手动选择世界目录，然后点击 **Select folder**。
3. 加载完成后，左侧会显示 **About / Convert / 3D Editor** 三个标签页。

> **注意**：在 Amulet 中打开世界前，建议先备份该世界，以防数据丢失。

## 使用 Docker 运行（Linux）

Docker 镜像可在任何支持 Docker 的 Linux 发行版上运行。你可以直接使用 `docker run` 部署，也可以使用仓库自带的 `docker-compose.yml`。

### 直接部署

```bash
# 拉取预构建镜像
xhost +local:docker

docker run -it --rm \
  -e DISPLAY=$DISPLAY \
  -v /tmp/.X11-unix:/tmp/.X11-unix:rw \
  --device /dev/dri \
  --network=host \
  ghcr.io/yhxjlb/amulet-editor:latest

xhost -local:docker
```

### Docker Compose

仓库根目录提供了 [`docker-compose.yml`](docker-compose.yml) 文件。确保你已安装 [Docker Compose](https://docs.docker.com/compose/)，然后运行：

```bash
docker compose up
```

如果你仍在使用旧版独立二进制：

```bash
docker-compose up
```

## 链接

- **发布页**：[GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **官方文档**：[ame-doc.yhxjlb.com](https://ame-doc.yhxjlb.com/)
- **上游仓库**：[Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
