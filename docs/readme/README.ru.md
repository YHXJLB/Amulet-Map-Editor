# Редактор карт Amulet


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![Статус документации](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/docs-pages.yml/badge.svg)](https://ame-doc.yhxjlb.com/)

Редактор и конвертер миров Minecraft, поддерживающий все версии, начиная с Java 1.12 и Bedrock 1.7.

![cover](../../resource/img/cover.jpg)

> Подробные руководства пользователя, уроки по конвертеру миров и 3D-редактору см. в официальной документации: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)

## Обзор возможностей

- **Convert**: конвертируйте миры Minecraft между платформами (Java ↔ Bedrock) и версиями.
- **3D Editor**: выделяйте, копируйте, вставляйте, заполняйте и удаляйте блоки в 3D-виде.
- **About**: просматривайте сводку об открытом мире: название, последняя версия игры, платформа и путь к файлу.

## Системные требования

- **Windows**: Windows 10/11, x64 или ARM64.
- **Linux**: любой дистрибутив с поддержкой Docker; либо Debian/Ubuntu для установки `.deb`.
- **macOS**: автоматическая сборка в настоящее время отключена. Старые шаги сборки заархивированы в [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml).

## Установка

1. Откройте страницу [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).
2. В разделе **Assets** выберите пакет для своей операционной системы и архитектуры:
   - Windows (x64): `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64): `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows портативная версия: `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian): `amulet-map-editor_*.deb`
   - Flatpak: `amulet-map-editor-*.flatpak`
   - Docker: `amulet-editor-*.tar.gz`
3. Скачайте и запустите установщик, либо следуйте инструкциям по Docker ниже.

> Для запуска из исходников см. руководство [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) в исходном репозитории.

## Открытие мира

1. Запустите Amulet и нажмите **Open World**.
2. В диалоге выбора мира:
   - Справа отображаются миры, недавно открытые в Amulet;
   - Нажмите **Open other world**, чтобы выбрать каталог мира, затем нажмите **Select folder**.
3. После загрузки в левой панели появятся вкладки **About / Convert / 3D Editor**.

> **Внимание**: перед открытием мира в Amulet рекомендуется сделать его резервную копию, чтобы избежать потери данных.

## Запуск через Docker (Linux)

Образ Docker работает на любом дистрибутиве Linux с поддержкой Docker. Можно развернуть его напрямую через `docker run` или использовать прилагаемый [`docker-compose.yml`](../../docker-compose.yml).

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

## Ссылки

- **Страница релизов**: [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **Официальная документация**: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)
- **Исходный репозиторий**: [Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
