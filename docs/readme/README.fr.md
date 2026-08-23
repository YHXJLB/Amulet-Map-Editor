# Éditeur de carte Amulet


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![Statut de la documentation](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Un éditeur et convertisseur de mondes Minecraft prenant en charge toutes les versions depuis Java 1.12 et Bedrock 1.7.

![cover](../../resource/img/cover.jpg)

> Pour des guides utilisateur complets, des tutoriels sur le convertisseur de mondes et l'éditeur 3D, consultez la documentation officielle : [amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)

## Aperçu des fonctionnalités

- **Convert** : Convertissez des mondes Minecraft entre plateformes (Java ↔ Bedrock) et versions.
- **3D Editor** : Sélectionnez, copiez, collez, remplissez et supprimez des blocs dans une vue 3D.
- **About** : Affichez un résumé du monde ouvert, notamment son nom, sa dernière version jouée, sa plateforme et son chemin de fichier.

## Configuration requise

- **Windows** : Windows 10/11, x64 ou ARM64.
- **Linux** : Toute distribution compatible Docker ; ou systèmes basés sur Debian/Ubuntu pour le paquet `.deb`.
- **macOS** : Les builds automatiques sont actuellement désactivées. Les anciennes étapes de build sont archivées dans [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml).

## Installation

1. Accédez à la [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).
2. Dans la section **Assets**, choisissez le paquet correspondant à votre système d'exploitation et à votre architecture :
   - Windows (x64) : `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64) : `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows portable : `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian) : `amulet-map-editor_*.deb`
   - Flatpak : `amulet-map-editor-*.flatpak`
   - Docker : `amulet-editor-*.tar.gz`
3. Téléchargez et exécutez le programme d'installation, ou suivez les instructions Docker ci-dessous.

> Pour exécuter depuis les sources, veuillez consulter le guide [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) du dépôt amont.

## Ouvrir un monde

1. Lancez Amulet et cliquez sur **Open World**.
2. Dans la boîte de dialogue de sélection du monde :
   - La partie droite liste les mondes récemment ouverts par Amulet ;
   - Cliquez sur **Open other world** pour parcourir le répertoire du monde, puis cliquez sur **Select folder**.
3. Une fois chargé, le panneau de gauche affiche les onglets **About / Convert / 3D Editor**.

> **Remarque** : Nous recommandons de sauvegarder tout monde avant de l'ouvrir dans Amulet pour éviter toute perte de données.

## Exécution avec Docker (Linux)

L'image Docker fonctionne sur n'importe quelle distribution Linux prenant en charge Docker. Vous pouvez la déployer directement avec `docker run` ou utiliser le [`docker-compose.yml`](../../docker-compose.yml) fourni.

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

## Liens

- **Releases** : [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **Documentation** : [amulet-map-editor.readthedocs.io](https://amulet-map-editor.readthedocs.io)
- **Amont** : [Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
