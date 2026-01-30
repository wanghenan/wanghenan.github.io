# Vue.js 极简现代风格高级博客重开发

## 简明概述

**快速总结**：删除现有React代码，使用Vue.js重新开发极简现代风格的高级博客网站，包含标签系统、搜索、归档等完整功能。

**技术栈**：
- **前端框架**: Vue.js 3 + Vite
- **状态管理**: Pinia
- **路由**: Vue Router 4
- **样式**: Tailwind CSS（用于极简现代风格）
- **部署**: GitHub Pages（wanghenan.github.io）

**核心功能**：
- 首页（个人介绍 + 精选文章）
- 文章列表（分页、筛选）
- 文章详情（标签、目录、代码高亮）
- 标签系统（按标签筛选）
- 搜索功能（标题+内容搜索）
- 归档（按时间线展示）
- 关于页面

**项目结构**：
```
wanghenan.github.io/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 通用组件
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── ArticleCard.vue
│   │   ├── TagList.vue
│   │   ├── SearchBar.vue
│   │   └── Pagination.vue
│   ├── views/           # 页面组件
│   │   ├── HomeView.vue
│   │   ├── ArticlesView.vue
│   │   ├── ArticleView.vue
│   │   ├── TagsView.vue
│   │   ├── TagView.vue
│   │   ├── ArchiveView.vue
│   │   └── AboutView.vue
│   ├── stores/          # Pinia状态管理
│   │   └── articles.js
│   ├── router/          # Vue Router配置
│   │   └── index.js
│   ├── App.vue          # 根组件
│   └── main.js          # 应用入口
├── public/              # 静态文件
├── index.html           # HTML模板
├── package.json
├── vite.config.js
├── tailwind.config.js   # Tailwind配置
└── postcss.config.js
```

**设计风格**：
- **极简现代**：大量留白、清晰排版、微妙阴影
- **颜色系统**：主色 #1a1a2e（深蓝黑），强调色 #16213e（中蓝），辅助色 #0f3460（深蓝）
- **字体**：中文思源黑体，英文Inter
- **圆角**：8px-12px圆角卡片
- **动画**：300ms平滑过渡效果

---

## 工作目标

### 核心目标
使用Vue.js重新开发一个极简现代风格的高级博客网站，替换现有的React项目。

### 具体交付物
1. **完整的Vue.js项目结构**
2. **极简现代设计系统**
3. **高级博客功能**
4. **优化的用户体验**
5. **部署到GitHub Pages**

### 完成标准
- [ ] Vue.js项目结构完整
- [ ] 所有页面组件可访问
- [ ] 标签系统正常工作
- [ ] 搜索功能可用
- [ ] 归档页面显示正确
- [ ] 构建无错误
- [ ] 成功部署到GitHub Pages

---

## 执行策略

### 阶段划分

**阶段1：项目初始化（10分钟）**
- 清理现有React代码
- 初始化Vue.js + Vite项目
- 安装依赖（Vue Router, Pinia, Tailwind CSS）
- 配置Tailwind CSS

**阶段2：基础架构（15分钟）**
- 创建项目目录结构
- 配置Vue Router
- 配置Pinia状态管理
- 创建基础布局组件

**阶段3：核心组件（20分钟）**
- Header和Footer组件
- ArticleCard组件
- TagList组件
- SearchBar组件
- Pagination组件

**阶段4：页面开发（25分钟）**
- HomeView（首页）
- ArticlesView（文章列表）
- ArticleView（文章详情）
- TagsView（标签页）
- TagView（标签筛选页）
- ArchiveView（归档页）
- AboutView（关于页）

**阶段5：样式完善（15分钟）**
- 应用极简现代设计
- 响应式布局
- 动画效果
- 深色模式支持

**阶段6：构建部署（10分钟）**
- 运行构建测试
- 部署到GitHub Pages
- 验证部署结果

### 依赖关系

| 阶段 | 依赖前序 | 阻塞后续 | 可以并行 |
|------|----------|----------|----------|
| 1 | 无 | 2 | 无（基础环境） |
| 2 | 1 | 3 | 无（架构基础） |
| 3 | 2 | 4 | 无（组件基础） |
| 4 | 3 | 5 | 无（页面依赖组件） |
| 5 | 4 | 6 | 无（样式依赖页面） |
| 6 | 5 | 无 | 无（最终部署） |

**关键路径**：阶段1 → 2 → 3 → 4 → 5 → 6
**预估时间**：约95分钟

---

## 详细任务清单

### 阶段1：项目初始化

#### 任务 1.1: 清理现有React代码

**任务说明**：
删除现有React项目代码，为Vue.js项目腾出空间。

**具体操作**：
1. 删除src目录下的所有React组件文件
2. 删除src/styles目录
3. 删除src/index.css
4. 保留必要的配置文件

**删除的文件**：
- src/components/Navbar.jsx
- src/components/Navbar.css
- src/pages/HomePage.jsx
- src/pages/HomePage.css
- src/pages/ArticlesPage.jsx
- src/pages/ArticlesPage.css
- src/pages/NotFoundPage.jsx
- src/styles/main.css
- src/App.jsx
- src/main.jsx
- src/index.css

**保留的文件**：
- package.json（将更新依赖）
- vite.config.js
- index.html
- .gitignore
- public目录

**验收标准**：
- [ ] src目录结构精简
- [ ] 保留必要的配置文件

---

#### 任务 1.2: 初始化Vue.js + Vite项目

**任务说明**：
创建新的Vue.js项目，配置Vite构建工具。

**具体操作**：
1. 更新package.json添加Vue.js依赖
2. 安装Vue Router、Pinia、Tailwind CSS
3. 配置Vite

**package.json依赖**：
```json
{
  "name": "wanghenan-blog",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.2.0",
    "pinia": "^2.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0"
  }
}
```

**vite.config.js配置**：
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

**验收标准**：
- [ ] package.json包含Vue.js依赖
- [ ] node_modules已安装
- [ ] vite.config.js配置正确

---

#### 任务 1.3: 配置Tailwind CSS

**任务说明**：
配置Tailwind CSS实现极简现代设计风格。

**具体操作**：
1. 创建tailwind.config.js
2. 创建postcss.config.js
3. 创建src/style.css（Tailwind入口）

**tailwind.config.js**：
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#0f3460',
        highlight: '#e94560',
        light: '#f8f9fa',
        dark: '#1a1a2e'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        chinese: ['Noto Sans SC', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
```

**src/style.css**：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-light text-dark antialiased;
    font-family: 'Inter', 'Noto Sans SC', system-ui, sans-serif;
  }
}

@layer components {
  .container-custom {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-card p-6 transition-all duration-300;
  }
  
  .card-hover {
    @apply hover:shadow-hover hover:-translate-y-1;
  }
  
  .btn-primary {
    @apply px-6 py-2 bg-primary text-white rounded-lg font-medium 
           transition-all duration-300 hover:bg-secondary;
  }
  
  .tag {
    @apply px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm 
           transition-all duration-300 hover:bg-primary hover:text-white;
  }
  
  .link-underline {
    @apply relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
           after:bg-primary after:transition-all after:duration-300
           hover:after:w-full;
  }
}
```

**验收标准**：
- [ ] tailwind.config.js存在且配置正确
- [ ] src/style.css包含Tailwind指令
- [ ] 构建时正确应用Tailwind样式

---

### 阶段2：基础架构

#### 任务 2.1: 创建项目目录结构

**任务说明**：
创建Vue.js项目的标准目录结构。

**具体操作**：
1. 创建src/components目录
2. 创建src/views目录
3. 创建src/stores目录
4. 创建src/router目录
5. 创建src/assets目录

**目录结构**：
```
src/
├── assets/
│   └── logo.svg
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── ArticleCard.vue
│   ├── TagList.vue
│   ├── SearchBar.vue
│   └── Pagination.vue
├── views/
│   ├── HomeView.vue
│   ├── ArticlesView.vue
│   ├── ArticleView.vue
│   ├── TagsView.vue
│   ├── TagView.vue
│   ├── ArchiveView.vue
│   └── AboutView.vue
├── stores/
│   └── articles.js
├── router/
│   └── index.js
├── App.vue
├── main.js
└── style.css
```

**验收标准**：
- [ ] 所有目录已创建
- [ ] 目录结构符合Vue.js最佳实践

---

#### 任务 2.2: 配置Vue Router

**任务说明**：
配置Vue Router实现页面导航。

**具体操作**：
1. 创建src/router/index.js
2. 配置路由规则
3. 设置路由守卫

**src/router/index.js**：
```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/ArticlesView.vue'),
    meta: { title: '文章' }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('@/views/ArticleView.vue'),
    meta: { title: '文章详情' }
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import('@/views/TagsView.vue'),
    meta: { title: '标签' }
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: () => import('@/views/TagView.vue'),
    meta: { title: '标签文章' }
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('@/views/ArchiveView.vue'),
    meta: { title: '归档' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '关于' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '404' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || '页面'} | 王贺南的博客`
  next()
})

export default router
```

**验收标准**：
- [ ] router目录存在
- [ ] 路由配置包含所有页面
- [ ] 路由守卫正常工作

---

#### 任务 2.3: 配置Pinia状态管理

**任务说明**：
配置Pinia状态管理，管理文章数据。

**具体操作**：
1. 创建src/stores/articles.js
2. 定义文章状态和actions
3. 实现Getters

**src/stores/articles.js**：
```javascript
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useArticlesStore = defineStore('articles', () => {
  // 状态
  const articles = ref([
    {
      id: 1,
      title: 'Vue 3 组合式API最佳实践',
      description: '深入探索Vue 3组合式API的使用模式和最佳实践...',
      content: `
# Vue 3 组合式API最佳实践

Vue 3的组合式API为组件开发提供了更灵活的代码组织方式。

## 为什么使用组合式API？

1. **更好的逻辑复用**
2. **更灵活的代码组织**
3. **更好的TypeScript支持**

## 最佳实践

### 1. 使用setup函数

\`\`\`javascript
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>
\`\`\`

### 2. 组合式函数命名

使用use前缀命名组合式函数：

- useCounter()
- useFetch()
- useLocalStorage()
      `,
      tags: ['Vue.js', '前端开发', 'JavaScript'],
      date: '2024-01-15',
      readTime: '8分钟',
      views: 1234
    },
    {
      id: 2,
      title: 'TypeScript 类型系统详解',
      description: '全面了解TypeScript的类型系统和高级用法...',
      content: `
# TypeScript 类型系统详解

TypeScript的类型系统是其核心特性之一。

## 基本类型

\`\`\`typescript
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let list: number[] = [1, 2, 3];
      `,
      tags: ['TypeScript', '前端开发', '编程语言'],
      date: '2024-01-10',
      readTime: '12分钟',
      views: 2345
    },
    {
      id: 3,
      title: 'CSS架构设计原则',
      description: '探索可维护的CSS架构设计和组织方式...',
      content: `
# CSS架构设计原则

良好的CSS架构对于项目的可维护性至关重要。

## 原则

1. **模块化**
2. **可预测性**
3. **可维护性**
4. **可扩展性**
      `,
      tags: ['CSS', '前端开发', '架构设计'],
      date: '2024-01-05',
      readTime: '10分钟',
      views: 3456
    }
  ])
  
  const currentArticle = ref(null)
  const loading = ref(false)
  const searchQuery = ref('')
  const selectedTag = ref('')

  // Getters
  const allTags = computed(() => {
    const tags = new Set()
    articles.value.forEach(article => {
      article.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  })

  const filteredArticles = computed(() => {
    let result = articles.value
    
    // 标签筛选
    if (selectedTag.value) {
      result = result.filter(article => 
        article.tags.includes(selectedTag.value)
      )
    }
    
    // 搜索筛选
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
      )
    }
    
    return result
  })

  const articlesByDate = computed(() => {
    const groups = {}
    articles.value.forEach(article => {
      const year = article.date.split('-')[0]
      if (!groups[year]) {
        groups[year] = []
      }
      groups[year].push(article)
    })
    return Object.entries(groups).sort((a, b) => b[0] - a[0])
  })

  // Actions
  function getArticleById(id) {
    loading.value = true
    currentArticle.value = articles.value.find(a => a.id === parseInt(id))
    loading.value = false
    return currentArticle.value
  }

  function setSearchQuery(query) {
    searchQuery.value = query
  }

  function setSelectedTag(tag) {
    selectedTag.value = tag
  }

  function clearFilters() {
    searchQuery.value = ''
    selectedTag.value = ''
  }

  return {
    articles,
    currentArticle,
    loading,
    searchQuery,
    selectedTag,
    allTags,
    filteredArticles,
    articlesByDate,
    getArticleById,
    setSearchQuery,
    setSelectedTag,
    clearFilters
  }
})
```

**验收标准**：
- [ ] stores目录存在
- [ ] articles.js包含完整的状态管理
- [ ] Getters和Actions正常工作

---

#### 任务 2.4: 创建根组件和入口文件

**任务说明**：
创建Vue.js应用的根组件和入口文件。

**具体操作**：
1. 创建src/App.vue
2. 创建src/main.js

**src/App.vue**：
```vue
<template>
  <div class="min-h-screen flex flex-col bg-light">
    <AppHeader />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

**src/main.js**：
```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
```

**index.html更新**：
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>王贺南的博客</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

**验收标准**：
- [ ] App.vue存在且包含基础布局
- [ ] main.js正确配置Vue应用
- [ ] index.html包含必要的字体链接

---

### 阶段3：核心组件

#### 任务 3.1: 创建AppHeader组件

**任务说明**：
创建网站头部组件，包含导航菜单和搜索功能。

**具体操作**：
1. 创建src/components/AppHeader.vue
2. 实现响应式导航
3. 添加移动端菜单

**src/components/AppHeader.vue**：
```vue
<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">W</span>
          </div>
          <span class="font-semibold text-lg text-dark hover:text-primary transition-colors">
            王贺南
          </span>
        </router-link>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary transition-colors link-underline"
            active-class="text-primary"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- 搜索和移动端菜单按钮 -->
        <div class="flex items-center space-x-4">
          <button 
            @click="toggleSearch"
            class="p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="搜索"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- 移动端菜单按钮 -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="菜单"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 搜索框 -->
      <transition name="slide-down">
        <div v-if="searchOpen" class="py-4 border-t border-gray-100">
          <SearchBar @close="toggleSearch" />
        </div>
      </transition>

      <!-- 移动端菜单 -->
      <transition name="slide-down">
        <nav v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
          <div class="flex flex-col space-y-4">
            <router-link 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="text-gray-600 hover:text-primary transition-colors py-2"
              active-class="text-primary"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'

const searchOpen = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/articles' },
  { name: '标签', path: '/tags' },
  { name: '归档', path: '/archive' },
  { name: '关于', path: '/about' }
]

function toggleSearch() {
  searchOpen.value = !searchOpen.value
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
```

**验收标准**：
- [ ] AppHeader.vue存在
- [ ] 桌面导航正常工作
- [ ] 移动端菜单正常工作
- [ ] 搜索功能可用

---

#### 任务 3.2: 创建AppFooter组件

**任务说明**：
创建网站底部组件。

**具体操作**：
1. 创建src/components/AppFooter.vue
2. 添加版权信息和社交链接

**src/components/AppFooter.vue**：
```vue
<template>
  <footer class="bg-white border-t border-gray-100 mt-auto">
    <div class="container-custom py-8">
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <!-- 版权信息 -->
        <div class="text-sm text-gray-500">
          © {{ currentYear }} 王贺南. All rights reserved.
        </div>

        <!-- 社交链接 -->
        <div class="flex items-center space-x-6">
          <a 
            href="https://github.com/wanghenan" 
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="mailto:wanghenan@example.com" 
            class="text-gray-400 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- 技术栈信息 -->
      <div class="mt-4 text-center text-xs text-gray-400">
        Built with Vue.js 3 + Vite + Tailwind CSS
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
```

**验收标准**：
- [ ] AppFooter.vue存在
- [ ] 版权信息正确显示当前年份
- [ ] 社交链接可用

---

#### 任务 3.3: 创建ArticleCard组件

**任务说明**：
创建文章卡片组件，用于列表展示。

**具体操作**：
1. 创建src/components/ArticleCard.vue
2. 实现文章信息展示
3. 添加标签显示

**src/components/ArticleCard.vue**：
```vue
<template>
  <article class="card card-hover group cursor-pointer" @click="goToArticle">
    <!-- 文章标题 -->
    <h3 class="text-xl font-semibold text-dark group-hover:text-primary transition-colors mb-2">
      {{ article.title }}
    </h3>

    <!-- 文章描述 -->
    <p class="text-gray-600 text-sm line-clamp-2 mb-4">
      {{ article.description }}
    </p>

    <!-- 文章元信息 -->
    <div class="flex flex-wrap items-center gap-4 text-xs text-gray-500">
      <!-- 日期 -->
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{{ article.date }}</span>
      </div>

      <!-- 阅读时间 -->
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ article.readTime }}</span>
      </div>

      <!-- 阅读量 -->
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>{{ article.views }}</span>
      </div>
    </div>

    <!-- 标签 -->
    <div class="mt-4 flex flex-wrap gap-2">
      <span 
        v-for="tag in article.tags.slice(0, 3)" 
        :key="tag"
        class="tag"
        @click.stop="goToTag(tag)"
      >
        {{ tag }}
      </span>
      <span v-if="article.tags.length > 3" class="text-xs text-gray-400">
        +{{ article.tags.length - 3 }} more
      </span>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function goToArticle() {
  router.push(`/article/${props.article.id}`)
}

function goToTag(tag) {
  router.push(`/tag/${tag}`)
}
</script>
```

**验收标准**：
- [ ] ArticleCard.vue存在
- [ ] 文章信息正确显示
- [ ] 点击卡片跳转到文章详情
- [ ] 点击标签跳转到标签页

---

#### 任务 3.4: 创建SearchBar组件

**任务说明**：
创建搜索组件，支持实时搜索。

**具体操作**：
1. 创建src/components/SearchBar.vue
2. 实现搜索功能
3. 添加搜索结果展示

**src/components/SearchBar.vue**：
```vue
<template>
  <div class="relative">
    <!-- 搜索输入框 -->
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索文章..."
        class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
               transition-all duration-300"
        @input="handleSearch"
        ref="searchInput"
      />
      
      <!-- 搜索图标 -->
      <svg 
        class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>

      <!-- 清空按钮 -->
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 搜索结果 -->
    <transition name="fade">
      <div 
        v-if="searchResults.length > 0 && searchQuery"
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg 
               border border-gray-100 max-h-96 overflow-y-auto z-50"
      >
        <div class="p-2">
          <div class="text-xs text-gray-500 px-3 py-2">
            找到 {{ searchResults.length }} 篇文章
          </div>
          
          <button
            v-for="article in searchResults"
            :key="article.id"
            @click="goToArticle(article.id)"
            class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 
                   transition-colors duration-200"
          >
            <div class="font-medium text-dark text-sm">
              {{ article.title }}
            </div>
            <div class="text-xs text-gray-500 mt-1 line-clamp-1">
              {{ article.description }}
            </div>
          </button>
        </div>
      </div>
    </transition>

    <!-- 无结果提示 -->
    <transition name="fade">
      <div 
        v-if="searchQuery && searchResults.length === 0"
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg 
               border border-gray-100 p-4 text-center text-gray-500 z-50"
      >
        没有找到相关文章
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useArticlesStore } from '@/stores/articles'

const emit = defineEmits(['close'])
const router = useRouter()
const articlesStore = useArticlesStore()

const searchQuery = ref('')
const searchInput = ref(null)

const searchResults = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase()
  return articlesStore.articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.description.toLowerCase().includes(query) ||
    article.content.toLowerCase().includes(query)
  ).slice(0, 5)
})

function handleSearch() {
  // 实时搜索已在computed中处理
}

function clearSearch() {
  searchQuery.value = ''
  searchInput.value?.focus()
}

function goToArticle(id) {
  router.push(`/article/${id}`)
  emit('close')
}

onMounted(() => {
  searchInput.value?.focus()
})
</script>
```

**验收标准**：
- [ ] SearchBar.vue存在
- [ ] 搜索功能正常工作
- [ ] 搜索结果正确显示
- [ ] 无结果时有提示

---

#### 任务 3.5: 创建TagList组件

**任务说明**：
创建标签列表组件。

**具体操作**：
1. 创建src/components/TagList.vue
2. 实现标签展示和筛选

**src/components/TagList.vue**：
```vue
<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="tag in tags"
      :key="tag"
      :class="[
        'tag cursor-pointer',
        selectedTag === tag ? 'bg-primary text-white' : ''
      ]"
      @click="$emit('select', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true
  },
  selectedTag: {
    type: String,
    default: ''
  }
})

defineEmits(['select'])
</script>
```

**验收标准**：
- [ ] TagList.vue存在
- [ ] 标签正确显示
- [ ] 点击标签触发select事件

---

#### 任务 3.6: 创建Pagination组件

**任务说明**：
创建分页组件。

**具体操作**：
1. 创建src/components/Pagination.vue
2. 实现分页逻辑

**src/components/Pagination.vue**：
```vue
<template>
  <div v-if="totalPages > 1" class="flex items-center justify-center space-x-2">
    <!-- 上一页按钮 -->
    <button
      :disabled="currentPage === 1"
      @click="$emit('page-change', currentPage - 1)"
      class="p-2 rounded-lg border border-gray-200 text-gray-600 
             hover:border-primary hover:text-primary disabled:opacity-50 
             disabled:cursor-not-allowed transition-all duration-300"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- 页码按钮 -->
    <button
      v-for="page in displayedPages"
      :key="page"
      :class="[
        'w-10 h-10 rounded-lg font-medium transition-all duration-300',
        currentPage === page
          ? 'bg-primary text-white'
          : 'text-gray-600 hover:bg-gray-100'
      ]"
      @click="$emit('page-change', page)"
    >
      {{ page }}
    </button>

    <!-- 下一页按钮 -->
    <button
      :disabled="currentPage === totalPages"
      @click="$emit('page-change', currentPage + 1)"
      class="p-2 rounded-lg border border-gray-200 text-gray-600 
             hover:border-primary hover:text-primary disabled:opacity-50 
             disabled:cursor-not-allowed transition-all duration-300"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

defineEmits(['page-change'])

const displayedPages = computed(() => {
  const pages = []
  const total = props.totalPages
  const current = props.currentPage
  
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})
</script>
```

**验收标准**：
- [ ] Pagination.vue存在
- [ ] 分页正确显示
- [ ] 点击页码触发事件

---

### 阶段4：页面开发

#### 任务 4.1: 创建HomeView（首页）

**任务说明**：
创建首页，展示个人介绍和精选文章。

**具体操作**：
1. 创建src/views/HomeView.vue
2. 实现首页布局
3. 添加精选文章列表

**src/views/HomeView.vue**：
```vue
<template>
  <div class="animate-fade-in">
    <!-- Hero Section -->
    <section class="py-16 md:py-24">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-bold text-dark mb-6">
          你好，我是<span class="text-primary">王贺南</span>
        </h1>
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          我是一名全栈开发者，热爱技术和开源。
          在这里分享我的学习笔记、项目经验和思考。
        </p>
        
        <!-- 技能标签 -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="skill in skills" :key="skill" class="tag">
            {{ skill }}
          </span>
        </div>

        <!-- CTA按钮 -->
        <div class="flex flex-wrap gap-4">
          <router-link to="/articles" class="btn-primary">
            阅读文章
          </router-link>
          <router-link to="/about" class="px-6 py-2 border border-gray-200 rounded-lg 
                                          text-gray-600 hover:border-primary hover:text-primary 
                                          transition-all duration-300">
            了解更多
          </router-link>
        </div>
      </div>
    </section>

    <!-- 精选文章 -->
    <section class="py-12 border-t border-gray-100">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-dark">精选文章</h2>
        <router-link to="/articles" class="text-primary hover:text-secondary 
                                           transition-colors link-underline">
          查看全部
        </router-link>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard 
          v-for="article in featuredArticles" 
          :key="article.id" 
          :article="article" 
        />
      </div>
    </section>

    <!-- 最新文章 -->
    <section class="py-12 border-t border-gray-100">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-dark">最新文章</h2>
        <router-link to="/articles" class="text-primary hover:text-secondary 
                                           transition-colors link-underline">
          查看全部
        </router-link>
      </div>

      <div class="space-y-4">
        <ArticleCard 
          v-for="article in latestArticles" 
          :key="article.id" 
          :article="article" 
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useArticlesStore } from '@/stores/articles'
import ArticleCard from '@/components/ArticleCard.vue'

const articlesStore = useArticlesStore()

const skills = [
  'Vue.js', 'TypeScript', 'Node.js', 'Python', 
  'AWS', 'Docker', 'Git', 'UI/UX Design'
]

const featuredArticles = computed(() => {
  return articlesStore.articles.slice(0, 3)
})

const latestArticles = computed(() => {
  return [...articlesStore.articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
})
</script>
```

**验收标准**：
- [ ] HomeView.vue存在
- [ ] Hero Section正确显示
- [ ] 精选文章和最新文章正确显示
- [ ] 导航链接正常工作

---

#### 任务 4.2: 创建ArticlesView（文章列表）

**任务说明**：
创建文章列表页面，支持筛选和分页。

**具体操作**：
1. 创建src/views/ArticlesView.vue
2. 实现文章列表展示
3. 添加筛选和分页功能

**src/views/ArticlesView.vue**：
```vue
<template>
  <div class="py-12 animate-fade-in">
    <h1 class="text-3xl font-bold text-dark mb-8">所有文章</h1>

    <!-- 筛选栏 -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <!-- 标签筛选 -->
      <TagList 
        :tags="allTags" 
        :selectedTag="selectedTag"
        @select="handleTagSelect"
      />

      <!-- 文章统计 -->
      <div class="text-sm text-gray-500">
        共 {{ filteredArticles.length }} 篇文章
      </div>
    </div>

    <!-- 文章列表 -->
    <div v-if="filteredArticles.length > 0" class="space-y-4">
      <ArticleCard 
        v-for="article in paginatedArticles" 
        :key="article.id" 
        :article="article" 
      />
    </div>

    <!-- 空状态 -->
    <div v-else class="text-center py-16">
      <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <p class="text-gray-500">暂无文章</p>
    </div>

    <!-- 分页 -->
    <div v-if="totalPages > 1" class="mt-12">
      <Pagination 
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useArticlesStore } from '@/stores/articles'
import ArticleCard from '@/components/ArticleCard.vue'
import TagList from '@/components/TagList.vue'
import Pagination from '@/components/Pagination.vue'

const route = useRoute()
const router = useRouter()
const articlesStore = useArticlesStore()

const currentPage = ref(1)
const itemsPerPage = 10

const allTags = computed(() => articlesStore.allTags)
const selectedTag = computed(() => articlesStore.selectedTag)
const filteredArticles = computed(() => articlesStore.filteredArticles)

const totalPages = computed(() => 
  Math.ceil(filteredArticles.value.length / itemsPerPage)
)

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredArticles.value.slice(start, end)
})

function handleTagSelect(tag) {
  articlesStore.setSelectedTag(tag === selectedTag.value ? '' : tag)
  currentPage.value = 1
}

function handlePageChange(page) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  // 检查URL参数中的标签
  if (route.query.tag) {
    articlesStore.setSelectedTag(route.query.tag)
  }
})
</script>
```

**验收标准**：
- [ ] ArticlesView.vue存在
- [ ] 文章列表正确显示
- [ ] 标签筛选正常工作
- [ ] 分页功能正常

---

#### 任务 4.3: 创建ArticleView（文章详情）

**任务说明**：
创建文章详情页面。

**具体操作**：
1. 创建src/views/ArticleView.vue
2. 实现文章内容展示
3. 添加标签和目录

**src/views/ArticleView.vue**：
```vue
<template>
  <div class="py-12 animate-fade-in">
    <article v-if="article" class="max-w-3xl mx-auto">
      <!-- 文章头部 -->
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-dark mb-4">
          {{ article.title }}
        </h1>
        
        <!-- 文章元信息 -->
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{{ article.date }}</span>
          </div>
          
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ article.readTime }} 阅读</span>
          </div>
          
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{{ article.views }} 阅读</span>
          </div>
        </div>

        <!-- 标签 -->
        <div class="flex flex-wrap gap-2">
          <router-link 
            v-for="tag in article.tags" 
            :key="tag"
            :to="`/tag/${tag}`"
            class="tag"
          >
            {{ tag }}
          </router-link>
        </div>
      </header>

      <!-- 文章内容 -->
      <div class="prose prose-lg max-w-none">
        <div v-html="renderedContent"></div>
      </div>

      <!-- 返回链接 -->
      <div class="mt-12 pt-8 border-t border-gray-100">
        <router-link to="/articles" class="text-primary hover:text-secondary 
                                           transition-colors link-underline">
          ← 返回文章列表
        </router-link>
      </div>
    </article>

    <!-- 加载状态 -->
    <div v-else class="flex justify-center py-16">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticlesStore } from '@/stores/articles'
import { marked } from 'marked'

const route = useRoute()
const articlesStore = useArticlesStore()

const article = computed(() => articlesStore.currentArticle)

const renderedContent = computed(() => {
  if (!article.value) return ''
  return marked(article.value.content)
})

onMounted(() => {
  const id = route.params.id
  if (id) {
    articlesStore.getArticleById(id)
  }
})
</script>

<style>
.prose h1 {
  @apply text-2xl font-bold text-dark mt-8 mb-4;
}

.prose h2 {
  @apply text-xl font-semibold text-dark mt-6 mb-3;
}

.prose h3 {
  @apply text-lg font-semibold text-dark mt-4 mb-2;
}

.prose p {
  @apply text-gray-600 leading-relaxed mb-4;
}

.prose ul, .prose ol {
  @apply ml-6 mb-4;
}

.prose li {
  @apply text-gray-600 mb-2;
}

.prose code {
  @apply bg-gray-100 px-1.5 py-0.5 rounded text-sm text-primary;
}

.prose pre {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
}

.prose pre code {
  @apply bg-transparent p-0 text-gray-100;
}

.prose blockquote {
  @apply border-l-4 border-primary pl-4 italic text-gray-500 my-4;
}

.prose a {
  @apply text-primary hover:text-secondary transition-colors link-underline;
}

.prose img {
  @apply rounded-lg shadow-md my-6;
}
</style>
```

**验收标准**：
- [ ] ArticleView.vue存在
- [ ] 文章内容正确渲染
- [ ] Markdown解析正常工作
- [ ] 标签链接可用

---

#### 任务 4.4: 创建TagsView（标签页）

**任务说明**：
创建标签总览页面。

**具体操作**：
1. 创建src/views/TagsView.vue
2. 实现所有标签展示

**src/views/TagsView.vue**：
```vue
<template>
  <div class="py-12 animate-fade-in">
    <h1 class="text-3xl font-bold text-dark mb-8">所有标签</h1>
    
    <div class="flex flex-wrap gap-4">
      <router-link 
        v-for="tag in tagsWithCount" 
        :key="tag.name"
        :to="`/tag/${tag.name}`"
        class="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg 
               shadow-card hover:shadow-hover transition-all duration-300"
      >
        <span class="text-dark font-medium">{{ tag.name }}</span>
        <span class="px-2 py-0.5 bg-primary text-white text-xs rounded-full">
          {{ tag.count }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useArticlesStore } from '@/stores/articles'

const articlesStore = useArticlesStore()

const tagsWithCount = computed(() => {
  const tagCounts = {}
  
  articlesStore.articles.forEach(article => {
    article.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  
  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
})
</script>
```

**验收标准**：
- [ ] TagsView.vue存在
- [ ] 所有标签正确显示
- [ ] 标签数量正确
- [ ] 点击跳转到标签页

---

#### 任务 4.5: 创建TagView（标签筛选页）

**任务说明**：
创建按标签筛选的文章列表页面。

**具体操作**：
1. 创建src/views/TagView.vue
2. 实现标签文章筛选

**src/views/TagView.vue**：
```vue
<template>
  <div class="py-12 animate-fade-in">
    <div class="flex items-center space-x-2 mb-8">
      <span class="text-gray-500">标签：</span>
      <span class="px-3 py-1 bg-primary text-white rounded-full">
        {{ tag }}
      </span>
    </div>

    <h1 class="text-3xl font-bold text-dark mb-8">
      {{ tag }} 相关的文章
    </h1>

    <div v-if="tagArticles.length > 0" class="space-y-4">
      <ArticleCard 
        v-for="article in tagArticles" 
        :key="article.id" 
        :article="article" 
      />
    </div>

    <div v-else class="text-center py-16">
      <p class="text-gray-500">该标签下暂无文章</p>
      <router-link to="/articles" class="text-primary hover:text-secondary 
                                         transition-colors link-underline mt-4 inline-block">
        浏览所有文章
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticlesStore } from '@/stores/articles'
import ArticleCard from '@/components/ArticleCard.vue'

const route = useRoute()
const articlesStore = useArticlesStore()

const tag = computed(() => route.params.tag)

const tagArticles = computed(() => {
  return articlesStore.articles.filter(article => 
    article.tags.includes(tag.value)
  )
})

onMounted(() => {
  articlesStore.setSelectedTag(tag.value)
})
</script>
```

**验收标准**：
- [ ] TagView.vue存在
- [ ] 标签文章正确筛选
- [ ] 无文章时有提示

---

#### 任务 4.6: 创建ArchiveView（归档页）

**任务说明**：
创建文章归档页面，按时间线展示。

**具体操作**：
1. 创建src/views/ArchiveView.vue
2. 实现时间线展示

**src/views/ArchiveView.vue**：
```vue
<template>
  <div class="py-12 animate-fade-in">
    <h1 class="text-3xl font-bold text-dark mb-8">文章归档</h1>

    <div class="space-y-12">
      <div v-for="[year, articles] in articlesByDate" :key="year">
        <!-- 年份标题 -->
        <div class="flex items-center space-x-4 mb-6">
          <h2 class="text-2xl font-bold text-primary">{{ year }}</h2>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            {{ articles.length }} 篇
          </span>
        </div>

        <!-- 时间线 -->
        <div class="relative border-l-2 border-gray-200 ml-4 space-y-6">
          <div 
            v-for="article in articles" 
            :key="article.id"
            class="ml-6"
          >
            <!-- 时间点 -->
            <div class="absolute -left-[31px] w-4 h-4 bg-white border-2 border-primary rounded-full"></div>
            
            <!-- 文章信息 -->
            <router-link 
              :to="`/article/${article.id}`"
              class="block p-4 bg-white rounded-lg shadow-card 
                     hover:shadow-hover transition-all duration-300"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500">{{ article.date }}</span>
                <span class="text-xs text-gray-400">{{ article.readTime }}</span>
              </div>
              <h3 class="text-lg font-semibold text-dark hover:text-primary transition-colors">
                {{ article.title }}
              </h3>
              <p class="text-sm text-gray-500 mt-2 line-clamp-2">
                {{ article.description }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useArticlesStore } from '@/stores/articles'

const articlesStore = useArticlesStore()
const articlesByDate = computed(() => articlesStore.articlesByDate)
</script>
```

**验收标准**：
- [ ] ArchiveView.vue存在
- [ ] 按年份正确分组
- [ ] 时间线展示正确
- [ ] 链接可用

---

#### 任务 4.7: 创建AboutView（关于页）

**任务说明**：
创建关于页面。

**具体操作**：
1. 创建src/views/AboutView.vue
2. 实现关于内容展示

**src/views/AboutView.vue**：
```vue
<template>
  <div class="py-12 animate-fade-in">
    <div class="max-w-3xl">
      <h1 class="text-3xl font-bold text-dark mb-8">关于我</h1>

      <!-- 个人信息 -->
      <section class="mb-12">
        <div class="card mb-6">
          <div class="flex items-center space-x-6">
            <div class="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <span class="text-white text-3xl font-bold">W</span>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-dark">王贺南</h2>
              <p class="text-gray-500">全栈开发者 & 技术博主</p>
            </div>
          </div>
        </div>

        <p class="text-gray-600 leading-relaxed mb-4">
          你好！我是一名热爱技术的全栈开发者，专注于Web开发和用户体验设计。
          我喜欢学习新技术，分享知识，并致力于构建更好的软件产品。
        </p>
      </section>

      <!-- 技术栈 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-dark mb-4">技术栈</h2>
        <div class="card">
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <h3 class="font-semibold text-dark mb-2">前端</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in frontendTech" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-dark mb-2">后端</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in backendTech" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-dark mb-2">工具</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in tools" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-dark mb-2">其他</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in otherTech" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系信息 -->
      <section>
        <h2 class="text-2xl font-bold text-dark mb-4">联系我</h2>
        <div class="card">
          <div class="space-y-4">
            <a 
              href="https://github.com/wanghenan" 
              target="_blank"
              class="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:wanghenan@example.com"
              class="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>wanghenan@example.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const frontendTech = ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux']
const backendTech = ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL']
const tools = ['Git', 'Docker', 'AWS', 'Figma', 'VS Code']
const otherTech = ['RESTful API', 'GraphQL', 'TDD', 'CI/CD']
</script>
```

**验收标准**：
- [ ] AboutView.vue存在
- [ ] 个人信息正确显示
- [ ] 技术栈分类展示
- [ ] 联系链接可用

---

#### 任务 4.8: 创建NotFoundView（404页面）

**任务说明**：
创建404页面。

**具体操作**：
1. 创建src/views/NotFoundView.vue

**src/views/NotFoundView.vue**：
```vue
<template>
  <div class="flex flex-col items-center justify-center py-24 animate-fade-in">
    <h1 class="text-9xl font-bold text-gray-200">404</h1>
    <p class="text-2xl font-semibold text-dark mt-4">页面未找到</p>
    <p class="text-gray-500 mt-2 mb-8">抱歉，您访问的页面不存在</p>
    <router-link to="/" class="btn-primary">
      返回首页
    </router-link>
  </div>
</template>
```

**验收标准**：
- [ ] NotFoundView.vue存在
- [ ] 页面正确显示404

---

### 阶段5：样式完善

#### 任务 5.1: 响应式布局优化

**任务说明**：
确保所有组件和页面在不同屏幕尺寸下正确显示。

**具体操作**：
1. 检查并优化移动端布局
2. 确保响应式断点正确
3. 测试触摸交互

**验收标准**：
- [ ] 移动端布局正确
- [ ] 平板布局正确
- [ ] 桌面布局正确

---

#### 任务 5.2: 动画效果优化

**任务说明**：
添加流畅的动画效果。

**具体操作**：
1. 页面切换动画
2. 悬停效果
3. 过渡动画

**验收标准**：
- [ ] 页面切换有动画
- [ ] 悬停效果流畅
- [ ] 过渡动画不卡顿

---

### 阶段6：构建部署

#### 任务 6.1: 运行构建测试

**任务说明**：
运行构建命令，确保无错误。

**具体操作**：
1. 运行 `npm run build`
2. 检查构建产物
3. 验证CSS和JS文件

**验收标准**：
- [ ] 构建成功
- [ ] 构建产物包含所有必要文件
- [ ] 无错误或警告

---

#### 任务 6.2: 部署到GitHub Pages

**任务说明**：
部署到GitHub Pages。

**具体操作**：
1. 安装gh-pages依赖（如果需要）
2. 配置部署脚本
3. 推送到远程仓库

**package.json部署脚本**：
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

**vite.config.js配置**：
```javascript
export default defineConfig({
  base: '/', // 或 '/wanghenan.github.io/'
  // ...
})
```

**验收标准**：
- [ ] 部署成功
- [ ] 访问https://wanghenan.github.io可看到网站
- [ ] 所有页面可访问

---

## 依赖安装

在开始之前，需要安装额外的依赖：

```bash
# 安装marked（用于Markdown解析）
npm install marked

# 安装gh-pages（用于部署）
npm install -D gh-pages
```

---

## 验证清单

### 构建验证
```bash
# 1. 安装依赖
npm install

# 2. 运行开发服务器
npm run dev

# 3. 构建生产版本
npm run build

# 4. 预览构建结果
npm run preview
```

### 功能验证
- [ ] 首页正常显示
- [ ] 文章列表可滚动
- [ ] 标签筛选可用
- [ ] 搜索功能可用
- [ ] 文章详情可访问
- [ ] 归档页面显示正确
- [ ] 移动端布局正确

### GitHub Pages验证
- [ ] 成功部署到GitHub Pages
- [ ] 所有页面可访问
- [ ] 资源加载正确

---

## 风险和注意事项

### 潜在风险

1. **依赖冲突**：新依赖可能与现有配置冲突
   - **缓解**：使用最新稳定版本
   - **恢复**：查看错误信息并修复

2. **构建错误**：Tailwind CSS配置可能有问题
   - **缓解**：参考Tailwind文档
   - **恢复**：检查配置文件

3. **GitHub Pages部署问题**：
   - **缓解**：使用正确的base路径
   - **恢复**：检查部署脚本和权限

### 注意事项

1. **备份**：在删除React代码前确认Git已提交
2. **测试**：每个阶段完成后进行验证
3. **提交**：频繁提交以便回滚

---

## 附录

### 相关文件路径

```
wanghenan.github.io/
├── src/
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── ArticleCard.vue
│   │   ├── TagList.vue
│   │   ├── SearchBar.vue
│   │   └── Pagination.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── ArticlesView.vue
│   │   ├── ArticleView.vue
│   │   ├── TagsView.vue
│   │   ├── TagView.vue
│   │   ├── ArchiveView.vue
│   │   ├── AboutView.vue
│   │   └── NotFoundView.vue
│   ├── stores/
│   │   └── articles.js
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### 命令速查表

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览
npm run preview

# 部署
npm run deploy

# 安装依赖
npm install

# 添加依赖
npm install <package-name>
```

---

**计划创建时间**：2026年1月30日
**计划版本**：2.0
**状态**：待执行
