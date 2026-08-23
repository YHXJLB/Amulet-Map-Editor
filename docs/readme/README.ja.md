# Amulet マップエディタ


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![ドキュメント状態](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Java 1.12 および Bedrock 1.7 以降のすべてのバージョンに対応した Minecraft ワールドエディタ・コンバーターです。

![cover](../../resource/img/cover.jpg)

> 詳しいユーザーガイド、ワールドコンバーターチュートリアル、3D エディターチュートリアルは、公式ドキュメントをご覧ください：[amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)

## 機能概要

- **Convert**：Minecraft ワールドを異なるプラットフォーム（Java ↔ Bedrock）やバージョン間で相互変換します。
- **3D Editor**：3D ワールドビューでブロックを選択・コピー・貼り付け・塗りつぶし・削除できます。
- **About**：開いたワールドの名前、最後に開いたバージョン、プラットフォーム、ファイルパスなどの概要を表示します。

## システム要件

- **Windows**：Windows 10/11、x64 または ARM64。
- **Linux**：Docker が動作する任意のディストリビューション、または Debian/Ubuntu 系で `.deb` パッケージを利用。
- **macOS**：現在自動ビルドは停止しています。旧ビルド手順は [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml) にアーカイブされています。

## インストール

1. [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest) を開きます。
2. **Assets** セクションから、お使いの OS とアーキテクチャに合ったパッケージを選択してください：
   - Windows (x64): `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64): `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows ポータブル版: `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian): `amulet-map-editor_*.deb`
   - Flatpak: `amulet-map-editor-*.flatpak`
   - Docker: `amulet-editor-*.tar.gz`
3. インストーラーをダウンロードして実行するか、以下の Docker の手順に従ってください。

> ソースから実行する場合は、上流リポジトリの [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) を参照してください。

## ワールドを開く

1. Amulet を起動し、**Open World** をクリックします。
2. ワールド選択ダイアログで：
   - 右側には Amulet で最近開いたワールドが一覧表示されます；
   - **Open other world** をクリックしてワールドディレクトリを選択し、**Select folder** をクリックします。
3. 読み込みが完了すると、左側に **About / Convert / 3D Editor** のタブが表示されます。

> **注意**：Amulet でワールドを開く前に、そのワールドをバックアップすることをお勧めします。データ消失を防ぐためです。

## Docker で実行する（Linux）

Docker イメージは、Docker に対応した任意の Linux ディストリビューションで動作します。`docker run` で直接実行するか、同梱の [`docker-compose.yml`](../../docker-compose.yml) を使うことができます。

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

## リンク

- **リリースページ**：[GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **公式ドキュメント**：[amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)
- **上流リポジトリ**：[Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
