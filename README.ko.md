# Amulet 맵 편집기


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![문서 상태](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Java 1.12 및 Bedrock 1.7 이후 모든 버전을 지원하는 Minecraft 월드 편집기 및 변환기입니다.

![cover](resource/img/cover.jpg)

## 설치

사용 중인 운영체제 및 아키텍처에 맞는 설치 프로그램은 [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest)에서 다운로드하세요.\
설치 프로그램을 실행하고 안내에 따라 진행하세요.

## Docker로 실행하기 (Linux)

Docker 이미지는 Docker를 지원하는 모든 Linux 배포판에서 실행됩니다. `docker run`으로 직접 배포하거나, 저장소에 포함된 `docker-compose.yml`을 사용할 수 있습니다.

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
