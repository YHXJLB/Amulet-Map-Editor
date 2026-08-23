# Amulet 地圖編輯器


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![文件狀態](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

支援 Java 1.12 及 Bedrock 1.7 以來所有版本的 Minecraft 世界編輯器與轉換器。

![cover](resource/img/cover.jpg)

## 安裝

從 [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest) 下載適合你作業系統與架構的安裝程式。\
執行安裝程式並依照指示操作。

## 使用 Docker 執行（Linux）

Docker 映像檔可在任何支援 Docker 的 Linux 發行版上執行。你可以直接使用 `docker run` 部署，也可以使用倉庫內建的 `docker-compose.yml`。

### 直接部署

```bash
# 拉取預建映像檔
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

倉庫根目錄提供了 `docker-compose.yml` 檔案。請確認已安裝 [Docker Compose](https://docs.docker.com/compose/)，然後執行：

```bash
docker compose up
```

若你仍在使用舊版獨立二進位：

```bash
docker-compose up
```
