# Редактор карт Amulet


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![Статус документации](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Редактор и конвертер миров Minecraft, поддерживающий все версии, начиная с Java 1.12 и Bedrock 1.7.

![cover](resource/img/cover.jpg)

## Установка

Скачайте установщик для своей операционной системы и архитектуры из [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).\
Запустите установщик и следуйте инструкциям.

## Запуск через Docker (Linux)

Образ Docker работает на любом дистрибутиве Linux с поддержкой Docker. Можно развернуть его напрямую через `docker run` или использовать прилагаемый `docker-compose.yml`.

### Прямое развёртывание

```bash
# Загрузить готовый образ
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

Файл `docker-compose.yml` находится в корне репозитория. Убедитесь, что установлен [Docker Compose](https://docs.docker.com/compose/), и выполните:

```bash
docker compose up
```

Если вы используете старый автономный бинарник:

```bash
docker-compose up
```
