# Editor de mapas Amulet


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![Estado de la documentación](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Un editor y conversor de mundos Minecraft compatible con todas las versiones desde Java 1.12 y Bedrock 1.7.

![cover](resource/img/cover.jpg)

## Instalación

Descarga el instalador para tu sistema operativo y arquitectura desde la [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).\
Ejecuta el instalador y sigue las instrucciones.

## Ejecutar con Docker (Linux)

La imagen Docker se ejecuta en cualquier distribución Linux con soporte para Docker. Puedes desplegarla directamente con `docker run` o usar el `docker-compose.yml` incluido.

### Despliegue directo

```bash
# Descargar la imagen precompilada
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

Se proporciona un archivo `docker-compose.yml` en la raíz del repositorio. Asegúrate de tener instalado [Docker Compose](https://docs.docker.com/compose/) y luego ejecuta:

```bash
docker compose up
```

Si usas el binario independiente antiguo:

```bash
docker-compose up
```
