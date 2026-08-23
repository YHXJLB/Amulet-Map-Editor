# Amulet 地图编辑器


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![文档状态](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

支持 Java 1.12 及 Bedrock 1.7 以来全部版本的 Minecraft 世界编辑器与转换器。

![cover](resource/img/cover.jpg)

## 安装

从 [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest) 下载适合你操作系统与架构的安装程序。\
运行安装程序并按提示操作。

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

仓库根目录提供了 `docker-compose.yml` 文件。确保你已安装 [Docker Compose](https://docs.docker.com/compose/)，然后运行：

```bash
docker compose up
```

如果你仍在使用旧版独立二进制：

```bash
docker-compose up
```
