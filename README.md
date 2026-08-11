# 《第17层》——多网页中文悬疑游戏

这是一个纯静态 HTML/CSS/JavaScript 游戏，不需要数据库或服务器程序。

## 上传到 GitHub Pages

1. 在 GitHub 新建一个公开 repository，例如 `the-17th-floor`。
2. 把这个文件夹里的**所有文件和文件夹**上传到 repository 根目录。
3. 打开 GitHub 的 `Settings` → `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，文件夹选择 `/ (root)`，点击 Save。
6. 等待部署完成，GitHub 会给你一个 `github.io` 网站地址。
7. 打开网站地址即可开始游戏。

不要只上传 `index.html`；必须把 `assets`、`sites`、`people`、`archive` 等文件夹一起上传。

## 游戏结构

这是多网页游戏，不是单页模拟：
- `index.html`：调查入口
- `sites/evan/`：林逸个人网站
- `sites/chronicle/`：灰港日报
- `sites/harbor/`：Harbor Tower官网
- `sites/voss/`：记者Mara Voss的网站
- `people/`：人物档案
- `archive/`：隐藏档案
- `search.html`：关键词搜索

所有页面都是独立 HTML 文件，页面之间通过真实链接跳转。
