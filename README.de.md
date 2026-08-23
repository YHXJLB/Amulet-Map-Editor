# Amulet Map-Editor


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![Dokumentationsstatus](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Ein Minecraft-Welteditor und -Konverter, der alle Versionen seit Java 1.12 und Bedrock 1.7 unterstützt.

![cover](resource/img/cover.jpg)

## Installation

Lade das Installationsprogramm für dein Betriebssystem und deine Architektur von der [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest) herunter.\
Führe das Installationsprogramm aus und folge den Anweisungen.

## Mit Docker ausführen (Linux)

Das Docker-Image läuft auf jeder Linux-Distribution mit Docker-Unterstützung. Du kannst es direkt mit `docker run` bereitstellen oder die beigelegte `docker-compose.yml` verwenden.

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
