# Editor de mapas Amulet


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![Estado de la documentación](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/docs-pages.yml/badge.svg)](https://ame-doc.yhxjlb.com/)

Un editor y conversor de mundos Minecraft compatible con todas las versiones desde Java 1.12 y Bedrock 1.7.

![cover](../../resource/img/cover.jpg)

> Para guías de usuario completas, tutoriales del conversor de mundos y del editor 3D, visita la documentación oficial: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)

## Resumen de funciones

- **Convert**: Convierte mundos Minecraft entre plataformas (Java ↔ Bedrock) y versiones.
- **3D Editor**: Selecciona, copia, pega, rellena y elimina bloques en una vista 3D.
- **About**: Muestra un resumen del mundo abierto, incluyendo nombre, última versión jugada, plataforma y ruta de archivo.

## Requisitos del sistema

- **Windows**: Windows 10/11, x64 o ARM64.
- **Linux**: Cualquier distribución compatible con Docker; o sistemas basados en Debian/Ubuntu para el paquete `.deb`.
- **macOS**: Las compilaciones automáticas están desactivadas actualmente. Los pasos de compilación antiguos están archivados en [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml).

## Instalación

1. Ve a la [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).
2. En la sección **Assets**, elige el paquete para tu sistema operativo y arquitectura:
   - Windows (x64): `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64): `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows portable: `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian): `amulet-map-editor_*.deb`
   - Flatpak: `amulet-map-editor-*.flatpak`
   - Docker: `amulet-editor-*.tar.gz`
3. Descarga y ejecuta el instalador, o sigue las instrucciones de Docker a continuación.

> Para ejecutar desde el código fuente, consulta la guía [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) del repositorio ascendente.

## Abrir un mundo

1. Inicia Amulet y haz clic en **Open World**.
2. En el diálogo de selección de mundo:
   - El lado derecho lista los mundos abiertos recientemente por Amulet;
   - Haz clic en **Open other world** para buscar el directorio del mundo, luego en **Select folder**.
3. Una vez cargado, el panel izquierdo muestra las pestañas **About / Convert / 3D Editor**.

> **Nota**: Recomendamos hacer una copia de seguridad de cualquier mundo antes de abrirlo en Amulet para evitar pérdida de datos.

## Ejecutar con Docker (Linux)

La imagen Docker se ejecuta en cualquier distribución Linux con soporte para Docker. Puedes desplegarla directamente con `docker run` o usar el [`docker-compose.yml`](../../docker-compose.yml) incluido.

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

## Enlaces

- **Lanzamientos**: [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **Documentación**: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)
- **Repositorio ascendente**: [Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
