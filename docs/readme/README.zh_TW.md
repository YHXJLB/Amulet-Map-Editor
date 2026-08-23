# Amulet 地圖編輯器


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![文件狀態](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

支援 Java 1.12 及 Bedrock 1.7 以來所有版本的 Minecraft 世界編輯器與轉換器。

![cover](../../resource/img/cover.jpg)

> 更詳細的使用者指南、世界轉換教學與 3D 編輯器教學，請參閱官方文件：[amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)

## 功能概覽

- **世界轉換（Convert）**：將 Minecraft 世界在不同平台（Java ↔ Bedrock）與版本之間互相轉換。
- **3D 編輯器（3D Editor）**：在三維世界中選取、複製、貼上、填滿與刪除方塊。
- **世界資訊（About）**：檢視目前開啟世界的名稱、最後開啟版本、平台類型與檔案路徑等摘要資訊。

## 系統需求

- **Windows**：Windows 10/11，x64 或 ARM64。
- **Linux**：支援 Docker 的任意發行版；或 Debian/Ubuntu 系發行版安裝 `.deb` 套件。
- **macOS**：目前已停止自動建置，舊版建置步驟存檔於 [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml)。

## 安裝

1. 開啟 [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest)。
2. 在 **Assets** 區域找到適合你作業系統與架構的安裝包：
   - Windows (x64)：`Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64)：`Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows 免安裝版：`*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian)：`amulet-map-editor_*.deb`
   - Flatpak：`amulet-map-editor-*.flatpak`
   - Docker：`amulet-editor-*.tar.gz`
3. 下載並執行安裝程式，或按照下方 Docker 說明部署。

> 若從原始碼執行，請參考上游倉庫的 [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) 說明。

## 開啟世界

1. 啟動 Amulet，點擊 **Open World**。
2. 在彈出的世界選擇對話框中：
   - 右側會列出 Amulet 最近開啟過的世界；
   - 點擊 **Open other world** 手動選擇世界目錄，然後點擊 **Select folder**。
3. 載入完成後，左側會顯示 **About / Convert / 3D Editor** 三個標籤頁。

> **注意**：在 Amulet 中開啟世界前，建議先備份該世界，以防資料遺失。

## 使用 Docker 執行（Linux）

Docker 映像檔可在任何支援 Docker 的 Linux 發行版上執行。你可以直接使用 `docker run` 部署，也可以使用倉庫內建的 [`docker-compose.yml`](../../docker-compose.yml)。

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

## 連結

- **發布頁**：[GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **官方文件**：[amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)
- **上游倉庫**：[Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
