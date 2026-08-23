# Éditeur de carte Amulet


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![Statut de la documentation](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Un éditeur et convertisseur de mondes Minecraft prenant en charge toutes les versions depuis Java 1.12 et Bedrock 1.7.

![cover](resource/img/cover.jpg)

## Installation

Téléchargez le programme d'installation correspondant à votre système d'exploitation et à votre architecture depuis la [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).\
Exécutez le programme d'installation et suivez les instructions.

## Exécution avec Docker (Linux)

L'image Docker fonctionne sur n'importe quelle distribution Linux prenant en charge Docker. Vous pouvez la déployer directement avec `docker run` ou utiliser le `docker-compose.yml` fourni.

### Déploiement direct

```bash
# Récupérer l'image préconstruite
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

Un fichier `docker-compose.yml` est fourni à la racine du dépôt. Assurez-vous que [Docker Compose](https://docs.docker.com/compose/) est installé, puis exécutez :

```bash
docker compose up
```

Si vous utilisez l'ancien binaire autonome :

```bash
docker-compose up
```
