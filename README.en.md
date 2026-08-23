# Amulet Map Editor


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![Documentation Status](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

A Minecraft world editor and converter that supports all versions since Java 1.12 and Bedrock 1.7.

![cover](resource/img/cover.jpg)

## Installation

Download the installer for your operating system and architecture from the [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).\
Run the installer and follow the instructions.

## Running with Docker (Linux)

The Docker image runs on any Linux distro with Docker support. You can deploy it directly with `docker run` or use the included `docker-compose.yml`.

### Direct deployment

```bash
# Pull the prebuilt image
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

A `docker-compose.yml` file is provided in the repository root. Make sure you have [Docker Compose](https://docs.docker.com/compose/) installed, then run:

```bash
docker compose up
```

Or, if you are using the older standalone binary:

```bash
docker-compose up
```
