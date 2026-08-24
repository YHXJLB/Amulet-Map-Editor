# Amulet 맵 편집기


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![문서 상태](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/docs-pages.yml/badge.svg)](https://ame-doc.yhxjlb.com/)

Java 1.12 및 Bedrock 1.7 이후 모든 버전을 지원하는 Minecraft 월드 편집기 및 변환기입니다.

![cover](../../resource/img/cover.jpg)

> 자세한 사용자 가이드, 월드 변환 튜토리얼 및 3D 편집기 튜토리얼은 공식 문서를 참조하세요: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)

## 기능 개요

- **Convert**: Minecraft 월드를 플랫폼(Java ↔ Bedrock) 및 버전 간에 변환합니다.
- **3D Editor**: 3D 월드 보기에서 블록을 선택, 복사, 붙여넣기, 채우기 및 삭제합니다.
- **About**: 열린 월드의 이름, 마지막 실행 버전, 플랫폼, 파일 경로 등 요약 정보를 확인합니다.

## 시스템 요구 사항

- **Windows**: Windows 10/11, x64 또는 ARM64.
- **Linux**: Docker를 지원하는 모든 배포판; 또는 Debian/Ubuntu 기반 배포판에서 `.deb` 패키지 사용.
- **macOS**: 현재 자동 빌드가 중지되었습니다. 이전 빌드 단계는 [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml)에 보관되어 있습니다.

## 설치

1. [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest)를 엽니다.
2. **Assets** 영역에서 사용 중인 운영체제 및 아키텍처에 맞는 패키지를 찾으세요:
   - Windows (x64): `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64): `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows 포터블: `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian): `amulet-map-editor_*.deb`
   - Flatpak: `amulet-map-editor-*.flatpak`
   - Docker: `amulet-editor-*.tar.gz`
3. 설치 프로그램을 다운로드하여 실행하거나, 아래 Docker 안내에 따라 배포하세요.

> 소스에서 실행하려면 상위 저장소의 [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) 가이드를 참조하세요.

## 월드 열기

1. Amulet을 실행하고 **Open World**를 클릭하세요.
2. 월드 선택 대화 상자에서:
   - 오른쪽에 Amulet에서 최근에 연 월드 목록이 표시됩니다;
   - **Open other world**를 클릭하여 월드 디렉터리를 선택한 후 **Select folder**를 클릭하세요.
3. 로드가 완료되면 왼쪽에 **About / Convert / 3D Editor** 탭이 표시됩니다.

> **주의**: Amulet에서 월드를 열기 전 해당 월드를 백업하여 데이터 손실을 방지하시기 바랍니다.

## Docker로 실행하기 (Linux)

Docker 이미지는 Docker를 지원하는 모든 Linux 배포판에서 실행됩니다. `docker run`으로 직접 배포하거나, 저장소에 포함된 [`docker-compose.yml`](../../docker-compose.yml)을 사용할 수 있습니다.

### 직접 배포

```bash
# 사전 빌드된 이미지 가져오기
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

저장소 루트에 `docker-compose.yml` 파일이 제공됩니다. [Docker Compose](https://docs.docker.com/compose/)가 설치되어 있는지 확인한 후 실행하세요:

```bash
docker compose up
```

구식 독립형 바이너리를 사용하는 경우:

```bash
docker-compose up
```

## 링크

- **릴리스 페이지**: [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **공식 문서**: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)
- **상위 저장소**: [Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
