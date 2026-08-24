# Amulet Map-Editor


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![Dokumentationsstatus](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/docs-pages.yml/badge.svg)](https://ame-doc.yhxjlb.com/)

Ein Minecraft-Welteditor und -Konverter, der alle Versionen seit Java 1.12 und Bedrock 1.7 unterstützt.

![cover](../../resource/img/cover.jpg)

> Ausführliche Benutzeranleitungen, Tutorials zum Weltkonverter und zum 3D-Editor findest du in der offiziellen Dokumentation: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)

## Funktionsübersicht

- **Convert**: Konvertiere Minecraft-Welten zwischen Plattformen (Java ↔ Bedrock) und Versionen.
- **3D Editor**: Wähle, kopiere, füge ein, fülle und lösche Blöcke in einer 3D-Weltansicht.
- **About**: Zeige eine Zusammenfassung der geöffneten Welt an, einschließlich Name, zuletzt gespielter Version, Plattform und Dateipfad.

## Systemanforderungen

- **Windows**: Windows 10/11, x64 oder ARM64.
- **Linux**: Jede Docker-fähige Distribution; oder Debian/Ubuntu-basierte Systeme für das `.deb`-Paket.
- **macOS**: Automatisierte Builds sind derzeit deaktiviert. Die alten Build-Schritte sind unter [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml) archiviert.

## Installation

1. Öffne die [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest)-Seite.
2. Wähle im Bereich **Assets** das Paket für dein Betriebssystem und deine Architektur:
   - Windows (x64): `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64): `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows portable: `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian): `amulet-map-editor_*.deb`
   - Flatpak: `amulet-map-editor-*.flatpak`
   - Docker: `amulet-editor-*.tar.gz`
3. Lade das Installationsprogramm herunter und führe es aus, oder folge den Docker-Anweisungen unten.

> Um aus dem Quellcode auszuführen, lies bitte die Anleitung [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) im Upstream-Repository.

## Eine Welt öffnen

1. Starte Amulet und klicke auf **Open World**.
2. Im Welt-Auswahl-Dialog:
   - Auf der rechten Seite werden kürzlich geöffnete Welten aufgelistet;
   - Klicke auf **Open other world**, um das Weltverzeichnis auszuwählen, und dann auf **Select folder**.
3. Sobald die Welt geladen ist, werden links die Tabs **About / Convert / 3D Editor** angezeigt.

> **Hinweis**: Wir empfehlen, jede Welt vor dem Öffnen in Amulet zu sichern, um Datenverlust zu vermeiden.

## Mit Docker ausführen (Linux)

Das Docker-Image läuft auf jeder Linux-Distribution mit Docker-Unterstützung. Du kannst es direkt mit `docker run` bereitstellen oder die beigelegte [`docker-compose.yml`](../../docker-compose.yml) verwenden.

### Direkte Bereitstellung

```bash
# Vorgefertigtes Image herunterladen
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

Eine `docker-compose.yml`-Datei liegt im Repository-Root bereit. Stelle sicher, dass [Docker Compose](https://docs.docker.com/compose/) installiert ist, und führe dann aus:

```bash
docker compose up
```

Bei Verwendung des älteren eigenständigen Binärpakets:

```bash
docker-compose up
```

## Links

- **Releases**: [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **Dokumentation**: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)
- **Upstream**: [Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)

## 免责声明

本版本为社区构建，仅供个人学习使用，**严禁商用**。如有能力请获取官方授权：<https://www.amuletmc.com/>

- 上游官方仓库：<https://github.com/Amulet-Team/Amulet-Map-Editor>
- 官方最后支持版本：`0.10.44`；本仓库自 `0.10.62` 起由 **@YHXJLB（逍遥星河）** 提供有限支持。
- 如遇问题**请勿向上游官方仓库提交 Issue**，请直接在本仓库提交，或私信维护者。
- 完整免责声明与联系方式见文档页：<https://ame-doc.yhxjlb.com/disclaimer.html>