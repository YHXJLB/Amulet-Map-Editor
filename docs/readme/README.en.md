# Amulet Map Editor


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![Documentation Status](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

A Minecraft world editor and converter that supports all versions since Java 1.12 and Bedrock 1.7.

![cover](../../resource/img/cover.jpg)

> For the full user guide, world converter tutorial, and 3D editor tutorial, visit the official documentation: [amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)

## Feature Overview

- **Convert**: Convert Minecraft worlds between platforms (Java ↔ Bedrock) and versions.
- **3D Editor**: Select, copy, paste, fill, and delete blocks in a 3D world view.
- **About**: View a summary of the opened world, including name, last played version, platform, and file path.

## System Requirements

- **Windows**: Windows 10/11, x64 or ARM64.
- **Linux**: Any Docker-capable distro; or Debian/Ubuntu-based systems for the `.deb` package.
- **macOS**: Automated builds are currently disabled. The legacy build steps are archived at [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml).

## Installation

1. Go to the [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).
2. In the **Assets** section, pick the package for your OS and architecture:
   - Windows (x64): `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64): `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows portable: `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian): `amulet-map-editor_*.deb`
   - Flatpak: `amulet-map-editor-*.flatpak`
   - Docker: `amulet-editor-*.tar.gz`
3. Download and run the installer, or follow the Docker instructions below.

> To run from source, please refer to the upstream [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) guide.

## Opening a World

1. Launch Amulet and click **Open World**.
2. In the world selection dialog:
   - The right side lists worlds recently opened by Amulet;
   - Click **Open other world** to browse to the world directory, then click **Select folder**.
3. Once loaded, the left panel shows the **About / Convert / 3D Editor** tabs.

> **Note**: We recommend backing up any world before opening it in Amulet to avoid data loss.

## Running with Docker (Linux)

The Docker image runs on any Linux distro with Docker support. You can deploy it directly with `docker run` or use the included [`docker-compose.yml`](../../docker-compose.yml).

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

## Links

- **Releases**: [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **Documentation**: [amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)
- **Upstream**: [Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
