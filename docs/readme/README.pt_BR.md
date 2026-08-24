# Editor de Mapas Amulet


[简体中文](../../README.md) · [繁體中文](README.zh_TW.md) · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Português (Brasil)](README.pt_BR.md) · [Русский](README.ru.md)

![Build Windows](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-windows.yml/badge.svg)
![Build Debian](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-debian.yml/badge.svg)
![Build Docker](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-docker.yml/badge.svg)
![Build Flatpak](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/build-flatpak.yml/badge.svg)
![Unittests](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/unittests.yml/badge.svg)
![Stylecheck](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/stylecheck.yml/badge.svg)
[![Status da documentação](https://github.com/YHXJLB/Amulet-Map-Editor/actions/workflows/docs-pages.yml/badge.svg)](https://ame-doc.yhxjlb.com/)

Um editor e conversor de mundos Minecraft compatível com todas as versões desde Java 1.12 e Bedrock 1.7.

![cover](../../resource/img/cover.jpg)

> Para guias completos do usuário, tutoriais do conversor de mundos e do editor 3D, visite a documentação oficial: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)

## Visão geral dos recursos

- **Convert**: Converta mundos Minecraft entre plataformas (Java ↔ Bedrock) e versões.
- **3D Editor**: Selecione, copie, cole, preencha e exclua blocos em uma visualização 3D.
- **About**: Exiba um resumo do mundo aberto, incluindo nome, última versão jogada, plataforma e caminho do arquivo.

## Requisitos do sistema

- **Windows**: Windows 10/11, x64 ou ARM64.
- **Linux**: Qualquer distribuição compatível com Docker; ou sistemas baseados em Debian/Ubuntu para o pacote `.deb`.
- **macOS**: Os builds automáticos estão desativados atualmente. As etapas antigas de build estão arquivadas em [`.github/workflows/archived/build-macos.yml`](../../.github/workflows/archived/build-macos.yml).

## Instalação

1. Acesse a [Latest Release](https://github.com/YHXJLB/Amulet-Map-Editor/releases/latest).
2. Na seção **Assets**, escolha o pacote para o seu sistema operacional e arquitetura:
   - Windows (x64): `Amulet-Map-Editor-v*-Windows-x64-Setup.exe`
   - Windows (ARM64): `Amulet-Map-Editor-v*-Windows-arm64-Setup.exe`
   - Windows portátil: `*-Windows-x64.zip` / `*-Windows-arm64.zip`
   - Linux (Debian): `amulet-map-editor_*.deb`
   - Flatpak: `amulet-map-editor-*.flatpak`
   - Docker: `amulet-editor-*.tar.gz`
3. Baixe e execute o instalador, ou siga as instruções do Docker abaixo.

> Para executar a partir do código-fonte, consulte o guia [Running from Source](https://github.com/Amulet-Team/Amulet-Map-Editor#running-from-source) do repositório upstream.

## Abrir um mundo

1. Inicie o Amulet e clique em **Open World**.
2. Na caixa de diálogo de seleção de mundo:
   - O lado direito lista mundos abertos recentemente pelo Amulet;
   - Clique em **Open other world** para procurar o diretório do mundo e depois em **Select folder**.
3. Após o carregamento, o painel esquerdo mostra as abas **About / Convert / 3D Editor**.

> **Nota**: Recomendamos fazer backup de qualquer mundo antes de abri-lo no Amulet para evitar perda de dados.

## Executar com Docker (Linux)

A imagem Docker roda em qualquer distribuição Linux com suporte ao Docker. Você pode implantá-la diretamente com `docker run` ou usar o [`docker-compose.yml`](../../docker-compose.yml) incluído.

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

## Links

- **Lançamentos**: [GitHub Releases](https://github.com/YHXJLB/Amulet-Map-Editor/releases)
- **Documentação**: [amulet-map-editor.readthedocs.io](https://ame-doc.yhxjlb.com/)
- **Repositório upstream**: [Amulet-Team/Amulet-Map-Editor](https://github.com/Amulet-Team/Amulet-Map-Editor)
