# 项目重构：HTML → React + Vite 多页面应用

## TL;DR

> **快速摘要**：将现有的单页面 `index.html` 重构为 React + Vite 多页面 SPA，参考 pipweb 项目风格，推送到个人 GitHub Pages（wanghenan.github.io）
>
> **交付物**：
> - 完整的 React + Vite 项目结构
> - 5 个页面：HomePage、AboutPage、ArticlesPage、VideosPage、AIProductsPage
> - 响应式导航栏和一致的视觉风格
> - GitHub Pages 部署配置
>
> **预估工作量**：Medium
> **并行执行**：是（2个阶段）
> **关键路径**：项目初始化 → 核心页面 → 路由配置 → 部署配置

---

## 背景

### 原始需求
将当前项目转换为 pipweb 风格的 React + Vite 应用，并推送到用户的个人 GitHub 仓库（wanghenan.github.io）

### 当前状态
- 单文件：`index.html`（84行）
- 技术栈：原生 HTML + CSS
- 内容：头像、名称、标签、3个链接
- Git 配置：公司账号（需要切换到个人）

### 目标状态（参考 pipweb）
- React 18 + Vite 5
- 5 个页面：HomePage、AboutPage、ArticlesPage、VideosPage、AIProductsPage
- React Router 路由管理
- 导航栏组件
- GitHub Pages 部署

---

## 工作目标

### 核心目标
将现有个人主页转换为现代化、可扩展的 React 应用，同时保留所有现有内容和视觉风格。

### 具体交付物
1. **项目结构**：
   - React + Vite 项目
   - 组件目录：`src/components/`（Navbar 等）
   - 页面目录：`src/pages/`（5个页面）
   - 样式目录：`src/styles/`
   - 静态资源：`public/`

2. **页面内容**：
   - **HomePage**：现有内容（头像、名称、标签、链接）
   - **AboutPage**：个人介绍（从现有信息扩展）
   - **ArticlesPage**：文章列表（占位，后续可添加）
   - **VideosPage**：视频列表（占位，后续可添加）
   - **AIProductsPage**：AI 产品展示（占位，后续可添加）

3. **技术配置**：
   - Vite 构建配置（GitHub Pages 兼容性）
   - React Router 配置（basename 设置）
   - 404 页面（SPA fallback）

4. **部署配置**：
   - GitHub Actions 自动化部署（可选）
   - 或手动构建部署脚本

### 完成定义
- [ ] `npm run build` 成功执行，无错误
- [ ] 所有 5 个页面可访问（路由正常）
- [ ] 现有内容（头像、标签、链接）完全保留
- [ ] GitHub Pages 部署成功，URL 可访问
- [ ] 导航栏在所有页面正常显示

### 必须有
- 所有现有内容保留
- 响应式导航栏
- 5 个页面框架
- GitHub Pages 兼容的构建配置

### 必须没有（护栏）
- 后端/服务器要求
- 用户认证系统
- 数据库
- 复杂状态管理（Redux/MobX）
- 超出合理范围的 bundle 大小

---

## 验证策略

### 测试决策
- **基础设施存在**：NO
- **用户想要测试**：NO
- **QA 方式**：手动验证 + 自动化构建验证

### 验证命令

```bash
# 1. 安装依赖
npm install

# 2. 开发模式测试
npm run dev
# 预期：开发服务器启动，无报错

# 3. 构建测试
npm run build
# 预期：构建成功，生成 dist/ 目录

# 4. 预览构建结果
npm run preview
# 预期：预览服务器启动，所有页面可访问

# 5. GitHub Pages 部署验证
# 构建产物部署后，检查：
# - https://wanghenan.github.io/ → HomePage
# - https://wanghenan.github.io/about → AboutPage
# - https://wanghenan.github.io/articles → ArticlesPage
# - https://wanghenan.github.io/videos → VideosPage
# - https://wanghenan.github.io/ai-products → AIProductsPage
# - https://wanghenan.github.io/404 → 404 页面
```

### 最终检查清单
- [ ] 所有页面路由返回 200
- [ ] 导航栏在所有页面显示
- [ ] 头像、标签、链接显示正确
- [ ] 构建产物大小合理（< 1MB）
- [ ] GitHub Pages URL 可正常访问

---

## 执行策略

### 并行执行阶段

**阶段 1：项目初始化（可以并行）**
- 任务 1：创建项目结构（Vite 配置、目录结构）
- 任务 2：创建导航栏组件
- 任务 3：创建 404 页面

**阶段 2：页面开发（可以并行）**
- 任务 4：创建 HomePage（提取现有内容）
- 任务 5：创建 AboutPage
- 任务 6：创建 ArticlesPage
- 任务 7：创建 VideosPage
- 任务 8：创建 AIProductsPage

**阶段 3：路由和配置（顺序）**
- 任务 9：配置 React Router
- 任务 10：配置 Vite（GitHub Pages 兼容性）
- 任务 11：配置 Git 认证（个人 token）

**阶段 4：部署**
- 任务 12：推送代码到 GitHub
- 任务 13：部署到 GitHub Pages

### 依赖矩阵

| 任务 | 依赖 | 阻塞 | 可并行 |
|------|------|------|--------|
| 1. 创建项目结构 | 无 | 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 | - |
| 2. 创建导航栏 | 1 | 9 | 3, 4, 5, 6, 7, 8 |
| 3. 创建 404 页面 | 1 | 无 | 2, 4, 5, 6, 7, 8 |
| 4. 创建 HomePage | 1, 2 | 9 | 3, 5, 6, 7, 8 |
| 5. 创建 AboutPage | 1, 2 | 9 | 3, 4, 6, 7, 8 |
| 6. 创建 ArticlesPage | 1, 2 | 9 | 3, 4, 5, 7, 8 |
| 7. 创建 VideosPage | 1, 2 | 9 | 3, 4, 5, 6, 8 |
| 8. 创建 AIProductsPage | 1, 2 | 9 | 3, 4, 5, 6, 7 |
| 9. 配置 React Router | 2, 3, 4, 5, 6, 7, 8 | 10, 11, 12, 13 | - |
| 10. 配置 Vite | 9 | 11, 12, 13 | - |
| 11. 配置 Git 认证 | 9, 10 | 12, 13 | - |
| 12. 推送代码 | 11 | 13 | - |
| 13. 部署 GitHub Pages | 12 | 无 | - |

**关键路径**：1 → 2 → 4 → 9 → 10 → 11 → 12 → 13
**并行加速**：约 50% 更快的整体进度

---

## 任务清单

- [ ] 1. 创建项目结构和基础配置

  **做什么**：
  - 初始化 Vite + React 项目（如果不存在则创建 package.json）
  - 安装依赖：react、react-dom、react-router-dom
  - 创建目录结构：src/components/、src/pages/、src/styles/、public/
  - 创建基础配置文件

  **必须不做**：
  - 不添加额外的 UI 库（保持简洁）

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无特殊技能需求
  - **原因**：基础配置任务，简单直接

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 1（与任务 2、3 并行）
  - **阻塞**：任务 2、3、4、5、6、7、8、9、10、11、12、13
  - **被阻塞**：无（可立即开始）

  **引用**：
  - Vite 官方配置：https://vitejs.dev/config/
  - React Router 官方文档：https://reactrouter.com/en/main
  - pipweb 项目结构：参考 github.com/gl15121004754-hue/pipweb

  **验收标准**：
  - [ ] package.json 包含 react、react-dom、react-router-dom
  - [ ] 目录结构创建完成：src/components/、src/pages/、src/styles/、public/
  - [ ] vite.config.js 创建完成
  - [ ] index.html 引用 /src/main.jsx

- [ ] 2. 创建导航栏组件

  **做什么**：
  - 在 `src/components/Navbar.jsx` 创建导航栏
  - 包含 5 个页面链接：Home、About、Articles、Videos、AI Products
  - 响应式设计（移动端折叠菜单）
  - 与 pipweb 风格一致

  **必须不做**：
  - 不添加复杂动画效果

  **推荐代理配置**：
  - **类别**：visual-engineering
  - **技能**：frontend-ui-ux
  - **原因**：需要设计和实现导航栏的视觉效果和交互

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 1（与任务 1、3 并行）
  - **阻塞**：任务 9（路由配置）
  - **被阻塞**：任务 1（项目结构）

  **引用**：
  - pipweb Navbar 风格：参考 github.com/gl15121004754-hue/pipweb/src/components/Navbar
  - React Router Link 组件：https://reactrouter.com/en/main/components/link

  **验收标准**：
  - [ ] Navbar 组件存在：`src/components/Navbar.jsx`
  - [ ] 导航栏显示 5 个链接
  - [ ] 链接点击可正确导航
  - [ ] 响应式设计（移动端适配）

- [ ] 3. 创建 404 页面

  **做什么**：
  - 在 `src/pages/NotFoundPage.jsx` 创建 404 页面
  - 显示"页面未找到"提示
  - 提供返回首页的链接

  **必须不做**：
  - 不添加复杂的错误追踪功能

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：简单页面，无需特殊技能

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 1（与任务 1、2 并行）
  - **阻塞**：无
  - **被阻塞**：任务 1（项目结构）

  **引用**：
  - 无特殊引用

  **验收标准**：
  - [ ] 404 页面组件存在：`src/pages/NotFoundPage.jsx`
  - [ ] 页面显示"页面未找到"信息
  - [ ] 提供返回首页的链接

- [ ] 4. 创建 HomePage

  **做什么**：
  - 在 `src/pages/HomePage.jsx` 创建首页
  - 提取现有 index.html 的所有内容：
    - 头像：`https://ui-avatars.com/api/?name=Hernon&background=667eea&color=fff&size=256`
    - 名称："HERNON"
    - 标签：AI智能体、微服务架构、AI绘画
    - 链接：CSDN、小红书、GitHub
  - 保持原有的渐变背景和视觉风格

  **必须不做**：
  - 不修改任何现有内容

  **推荐代理配置**：
  - **类别**：visual-engineering
  - **技能**：frontend-ui-ux
  - **原因**：需要精确还原现有视觉设计

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 2（与任务 5、6、7、8 并行）
  - **阻塞**：任务 9（路由配置）
  - **被阻塞**：任务 1（项目结构）、任务 2（导航栏）

  **引用**：
  - 现有 index.html：/Users/lu.gao/workspace/opencode/wanghenan-fixit/index.html
  - pipweb HomePage 风格：参考 github.com/gl15121004754-hue/pipweb/src/pages/HomePage

  **验收标准**：
  - [ ] HomePage 组件存在：`src/pages/HomePage.jsx`
  - [ ] 头像显示正确
  - [ ] 名称显示正确："HERNON"
  - [ ] 3 个标签显示正确
  - [ ] 3 个链接显示正确且可点击
  - [ ] 渐变背景保持一致

- [ ] 5. 创建 AboutPage

  **做什么**：
  - 在 `src/pages/AboutPage.jsx` 创建关于页面
  - 内容基于现有信息扩展：
    - 保留标签信息（AI智能体、微服务架构、AI绘画）
    - 添加个人介绍（从现有身份推断）
  - 与 HomePage 风格一致

  **必须不做**：
  - 不添加虚假信息

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：内容创作，简单实现

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 2（与任务 4、6、7、8 并行）
  - **阻塞**：任务 9（路由配置）
  - **被阻塞**：任务 1（项目结构）、任务 2（导航栏）

  **引用**：
  - HomePage 样式：任务 4 的实现
  - pipweb AboutPage 风格：参考 github.com/gl15121004754-hue/pipweb/src/pages/AboutPage

  **验收标准**：
  - [ ] AboutPage 组件存在：`src/pages/AboutPage.jsx`
  - [ ] 页面可访问
  - [ ] 显示个人介绍内容
  - [ ] 样式与 HomePage 一致

- [ ] 6. 创建 ArticlesPage

  **做什么**：
  - 在 `src/pages/ArticlesPage.jsx` 创建文章页面
  - 初始状态：空列表或占位内容
  - 后续可添加文章数据

  **必须不做**：
  - 不添加真实文章数据（除非用户提供）

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：框架页面，简单实现

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 2（与任务 4、5、7、8 并行）
  - **阻塞**：任务 9（路由配置）
  - **被阻塞**：任务 1（项目结构）、任务 2（导航栏）

  **引用**：
  - pipweb ArticlesPage 风格：参考 github.com/gl15121004754-hue/pipweb/src/pages/ArticlesPage

  **验收标准**：
  - [ ] ArticlesPage 组件存在：`src/pages/ArticlesPage.jsx`
  - [ ] 页面可访问
  - [ ] 显示文章列表框架或占位内容

- [ ] 7. 创建 VideosPage

  **做什么**：
  - 在 `src/pages/VideosPage.jsx` 创建视频页面
  - 初始状态：空列表或占位内容
  - 后续可添加视频数据

  **必须不做**：
  - 不添加真实视频数据（除非用户提供）

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：框架页面，简单实现

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 2（与任务 4、5、6、8 并行）
  - **阻塞**：任务 9（路由配置）
  - **被阻塞**：任务 1（项目结构）、任务 2（导航栏）

  **引用**：
  - pipweb VideosPage 风格：参考 github.com/gl15121004754-hue/pipweb/src/pages/VideosPage

  **验收标准**：
  - [ ] VideosPage 组件存在：`src/pages/VideosPage.jsx`
  - [ ] 页面可访问
  - [ ] 显示视频列表框架或占位内容

- [ ] 8. 创建 AIProductsPage

  **做什么**：
  - 在 `src/pages/AIProductsPage.jsx` 创建 AI 产品页面
  - 初始状态：空列表或占位内容
  - 后续可添加产品数据

  **必须不做**：
  - 不添加真实产品数据（除非用户提供）

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：框架页面，简单实现

  **并行化**：
  - **可并行运行**：是
  - **并行组**：阶段 2（与任务 4、5、6、7 并行）
  - **阻塞**：任务 9（路由配置）
  - **被阻塞**：任务 1（项目结构）、任务 2（导航栏）

  **引用**：
  - pipweb AIProductsPage 风格：参考 github.com/gl15121004754-hue/pipweb/src/pages/AIProductsPage

  **验收标准**：
  - [ ] AIProductsPage 组件存在：`src/pages/AIProductsPage.jsx`
  - [ ] 页面可访问
  - [ ] 显示产品列表框架或占位内容

- [ ] 9. 配置 React Router

  **做什么**：
  - 在 `src/App.jsx` 配置路由
  - 设置所有页面的路由：
    - `/` → HomePage
    - `/about` → AboutPage
    - `/articles` → ArticlesPage
    - `/videos` → VideosPage
    - `/ai-products` → AIProductsPage
    - `*` → NotFoundPage（404）
  - 将 Navbar 包裹在 Router 中

  **必须不做**：
  - 不修改页面组件内容

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：标准路由配置，简单任务

  **并行化**：
  - **可并行运行**：否
  - **并行组**：无（顺序任务）
  - **阻塞**：任务 10、11、12、13
  - **被阻塞**：任务 2、3、4、5、6、7、8

  **引用**：
  - React Router 官方文档：https://reactrouter.com/en/main/route/route
  - pipweb App.jsx：参考 github.com/gl15121004754-hue/pipweb/src/App.jsx

  **验收标准**：
  - [ ] App.jsx 配置所有路由
  - [ ] 所有页面可通过 URL 访问
  - [ ] 刷新页面保持当前路由
  - [ ] 404 路由正常工作

- [ ] 10. 配置 Vite（GitHub Pages 兼容性）

  **做什么**：
  - 修改 `vite.config.js`：
    - 设置 `base: '/'` 或 `'./'`（确保相对路径）
    - 配置构建选项
  - 确保 SPA fallback：创建 `404.html` 作为入口的副本
  - 配置静态资源处理

  **必须不做**：
  - 不添加不必要的插件

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：标准配置，简单任务

  **并行化**：
  - **可并行运行**：否
  - **并行组**：无（顺序任务）
  - **阻塞**：任务 11、12、13
  - **被阻塞**：任务 9（路由配置）

  **引用**：
  - Vite GitHub Pages 部署指南：https://vitejs.dev/guide/static-deploy.html#github-pages
  - pipweb vite.config.js：参考 github.com/gl15121004754-hue/pipweb/vite.config.js

  **验收标准**：
  - [ ] vite.config.js 正确配置 base
  - [ ] `npm run build` 成功
  - [ ] 构建产物在 GitHub Pages 可正常访问

- [ ] 11. 配置 Git 认证（个人 token）

  **做什么**：
  - 配置 Git 使用用户的个人 GitHub token
  - 环境变量：`GITHUB_TOKEN`（由用户提供）
  - 修改 git remote URL 为个人仓库：https://wanghenan@github.com/wanghenan/wanghenan.github.io
  - 或者更新 git config user.name 和 user.email

  **必须不做**：
  - 不在代码中硬编码 token

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：git-master
  - **原因**：需要 Git 操作，git-master 技能推荐

  **并行化**：
  - **可并行运行**：否
  - **并行组**：无（顺序任务）
  - **阻塞**：任务 12、13
  - **被阻塞**：任务 9（路由配置）、任务 10（Vite 配置）

  **引用**：
  - GitHub Personal Access Token 文档：https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

  **验收标准**：
  - [ ] Git config 显示正确的用户信息
  - [ ] Git remote 设置为个人仓库 URL
  - [ ] 推送时使用 token 认证
  - [ ] 可以成功推送到 GitHub

- [ ] 12. 推送代码到 GitHub

  **做什么**：
  - 初始化 git 仓库（如果需要）
  - 添加所有文件：`git add .`
  - 提交代码：`git commit -m "feat: initial React + Vite refactor"`
  - 推送到 GitHub：`git push origin main`

  **必须不做**：
  - 不强制推送

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：git-master
  - **原因**：Git 操作，git-master 技能推荐

  **并行化**：
  - **可并行运行**：否
  - **并行组**：无（顺序任务）
  - **阻塞**：任务 13（部署）
  - **被阻塞**：任务 11（Git 认证）

  **引用**：
  - 无特殊引用

  **验收标准**：
  - [ ] 代码成功推送到 GitHub
  - [ ] GitHub 仓库包含所有文件
  - [ ] 提交历史包含初始提交

- [ ] 13. 部署到 GitHub Pages

  **做什么**：
  - 配置 GitHub Pages：
    - Settings → Pages → Source: "Deploy from a branch"
    - Branch: "gh-pages" 或 "main" + "/(root)"
  - 或使用 GitHub Actions 自动部署
  - 验证部署成功

  **必须不做**：
  - 不修改仓库设置以外的配置

  **推荐代理配置**：
  - **类别**：unspecified-low
  - **技能**：无
  - **原因**：GitHub 配置，简单任务

  **并行化**：
  - **可并行运行**：否
  - **并行组**：无（最终任务）
  - **阻塞**：无
  - **被阻塞**：任务 12（代码推送）

  **引用**：
  - GitHub Pages 文档：https://docs.github.com/en/pages

  **验收标准**：
  - [ ] GitHub Pages 启用
  - [ ] 构建产物部署成功
  - [ ] URL https://wanghenan.github.io 可访问
  - [ ] 所有页面可正常访问

---

## 提交策略

| 任务后 | 消息 | 文件 | 验证 |
|--------|------|------|------|
| 12 | `feat: initial React + Vite refactor` | 所有文件 | git log |

---

## 成功标准

### 验证命令
```bash
# 本地验证
npm install && npm run dev
# 预期：开发服务器启动，所有页面可访问

npm run build
# 预期：构建成功

# GitHub 验证
curl -I https://wanghenan.github.io/
# 预期：HTTP 200

curl -I https://wanghenan.github.io/about
# 预期：HTTP 200
```

### 最终检查清单
- [ ] 所有 5 个页面组件存在且可访问
- [ ] 导航栏在所有页面显示
- [ ] 现有内容（头像、标签、链接）完全保留
- [ ] GitHub Pages 部署成功
- [ ] 构建产物大小合理
- [ ] 无控制台错误
