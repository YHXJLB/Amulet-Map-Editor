# Amulet マップエディタ


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![ドキュメント状態](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Java 1.12 および Bedrock 1.7 以降のすべてのバージョンに対応した Minecraft ワールドエディタ・コンバーターです。

![cover](resource/img/cover.jpg)

## インストール

お使いの OS とアーキテクチャに合わせたインストーラーは [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest) からダウンロードしてください。\
インストーラーを実行し、指示に従ってください。

## Docker で実行する（Linux）

Docker イメージは、Docker に対応した任意の Linux ディストリビューションで動作します。`docker run` で直接実行するか、同梱の `docker-compose.yml` を使うことができます。

### 直接デプロイ

```bash
# 事前ビルド済みイメージを取得
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

リポジトリのルートに `docker-compose.yml` が用意されています。[Docker Compose](https://docs.docker.com/compose/) がインストールされていることを確認してから実行してください：

```bash
docker compose up
```

旧版のスタンドアロンバイナリを使用している場合：

```bash
docker-compose up
```
