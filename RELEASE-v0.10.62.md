# Amulet Map Editor v0.10.62 版本说明

> 本说明由自动构建工作流（`YHXJLB/Amulet-Map-Editor` 仓库 `0.10` 分支）产出，
> 所有安装包均通过 GitHub Actions 自动构建并发布到 `v0.10.62` Release。

| 项目 | 内容 |
|---|---|
| 版本号 | `v0.10.62` |
| 分支 | `0.10` |
| 对应提交 | `95430a1` |
| 发布时间 | 2026-08-23 (UTC) |
| 构建方式 | GitHub Actions 全平台自动构建 |
| 上游基线 | `Amulet-Team/Amulet-Map-Editor` `0.10` 分支 |

---

## 平台支持

| 平台 | 架构 | 安装版 | 免安装版 |
|---|---|---|---|
| Windows | x64 (amd64) | ✅ `*-Windows-x64-installer.exe` | ✅ `*-Windows-x64.zip` |
| Windows | arm64 | ✅ `*-Windows-arm64-installer.exe` | ✅ `*-Windows-arm64.zip` |
| Linux | x86_64 | ✅ `*-Linux-x86_64.deb` | — (Flatpak 见下) |
| Linux | x86_64 (Flatpak) | ✅ `*-flatpak-x64.flatpak` | — |
| Docker | x86_64 | ✅ `*-docker.tar.gz` + `ghcr.io/yhxjlb/amulet-editor` | — |

> macOS 构建已按需求停止，本版本不含 macOS 包。

---

## 下载清单（v0.10.62 Release 资产）

| 文件名 | 大小 | 类型 | 适用平台 |
|---|---|---|---|
| `Amulet-v0.10.62-Windows-x64-installer.exe` | 64.0 MB | NSIS 安装程序 | Windows x64 |
| `Amulet-v0.10.62-Windows-x64.zip` | 83.1 MB | 免安装压缩包 | Windows x64 |
| `Amulet-v0.10.62-Windows-arm64-installer.exe` | 52.0 MB | NSIS 安装程序 | Windows arm64 |
| `Amulet-v0.10.62-Windows-arm64.zip` | 70.7 MB | 免安装压缩包 | Windows arm64 |
| `Amulet-v0.10.62-Linux-x86_64.deb` | 253.0 MB | Debian 软件包 | Linux x86_64 (Debian / Ubuntu 24.04) |
| `Amulet-v0.10.62-flatpak-x64.flatpak` | 45.3 MB | Flatpak 包 | Linux x86_64 |
| `Amulet-v0.10.62-docker.tar.gz` | 445.4 MB | Docker 镜像 tar | Docker (x86_64) |

下载根地址：

```
https://github.com/YHXJLB/Amulet-Map-Editor/releases/tag/v0.10.62
```

---

## 安装与运行

### Windows

- **安装版**：双击 `*-Windows-x64-installer.exe`（或 arm64），按向导完成安装，开始菜单生成快捷方式。
- **免安装版**：解压 `*-Windows-*.zip` 到任意目录，运行其中的 `amulet.exe` 即可。

### Linux (Debian / Ubuntu 24.04)

```bash
sudo apt install ./Amulet-v0.10.62-Linux-x86_64.deb
amulet-map-editor
```

> `.deb` 运行时依赖 `libgtk-3-0`、`libwayland-client0`、`libxkbcommon0` 等桌面库，
> 已在包元数据中声明，使用 `apt` 安装时会自动解析。

### Linux (Flatpak)

```bash
flatpak install ./Amulet-v0.10.62-flatpak-x64.flatpak
```

### Docker

```bash
# 方式一：加载本地 tar 包
docker load -i Amulet-v0.10.62-docker.tar.gz

# 方式二：直接拉取已推送的镜像（需 GitHub 登录 ghcr.io）
docker pull ghcr.io/yhxjlb/amulet-editor:v0.10.62
docker run -it --rm ghcr.io/yhxjlb/amulet-editor:v0.10.62
```

---

## 构建说明

- 构建由 GitHub Actions 工作流驱动，工作流文件位于 `.github/workflows/`：
  - `build-windows.yml` —— Windows x64 / arm64（NSIS 安装版 + PyInstaller 免安装 zip）
  - `build-debian.yml` —— Linux `.deb`（依赖 `libgtk-3-dev` 等开发头文件以编译 `wayland-lock-pointer`）
  - `build-docker.yml` —— Docker 镜像（`ghcr.io/yhxjlb/amulet-editor`，标签 `v0.10.62` 与 `latest`）
  - `build-flatpak.yml` —— Linux Flatpak 包
  - `build-macos.yml` —— 已删除（停止 macOS 构建）
- 版本号取自 git tag：`v0.10.62` → `BUILD_VERSION=0.10.62`。
- 所有发布步骤已设置 `overwrite: true`，以支持标签重跑时幂等覆盖，避免资产同名冲突。

## 已知事项

- Debian 工作流含 `Publish to PyPi` 步骤，但因本仓库未配置 PyPI 凭据，
  该步骤以 `continue-on-error` 运行（失败不阻断整体发布）；`.deb` 仍正常产出并上传。
- 本版本为 `0.10` 线的维护构建，版本号对齐上游最新发布 `0.10.62`。
