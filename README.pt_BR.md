# Editor de Mapas Amulet


[简体中文](README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build](../../workflows/Build/badge.svg)
![Unittests](../../workflows/Unittests/badge.svg?event=push)
![Stylecheck](../../workflows/Stylecheck/badge.svg?event=push)
[![Status da documentação](https://readthedocs.org/projects/amulet-map-editor/badge)](https://amulet-map-editor.readthedocs.io)

Um editor e conversor de mundos Minecraft compatível com todas as versões desde Java 1.12 e Bedrock 1.7.

![cover](resource/img/cover.jpg)

## Instalação

Baixe o instalador para o seu sistema operacional e arquitetura da [latest release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).\
Execute o instalador e siga as instruções.

## Executar com Docker (Linux)

A imagem Docker roda em qualquer distribuição Linux com suporte ao Docker. Você pode implantá-la diretamente com `docker run` ou usar o `docker-compose.yml` incluído.

### Implantação direta

```bash
# Baixar a imagem pré-construída
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

Um arquivo `docker-compose.yml` é fornecido na raiz do repositório. Certifique-se de que o [Docker Compose](https://docs.docker.com/compose/) está instalado e execute:

```bash
docker compose up
```

Se ainda estiver usando o binário autônomo legado:

```bash
docker-compose up
```
