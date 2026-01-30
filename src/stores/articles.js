import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useArticlesStore = defineStore('articles', () => {
  // 状态
  const articles = ref([
    {
      id: 1,
      title: 'Vue 3 组合式API最佳实践',
      description: '深入探索Vue 3组合式API的使用模式和最佳实践，提升代码质量和可维护性。',
      content: `# Vue 3 组合式API最佳实践

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

### 3. 关注点分离

将相关逻辑组织在一起：

\`\`\`javascript
// 用户相关逻辑
function useUser() {
  const user = ref(null)
  function login() { /* ... */ }
  function logout() { /* ... */ }
  
  return { user, login, logout }
}

// 购物车逻辑
function useCart() {
  const items = ref([])
  function addItem() { /* ... */ }
  function removeItem() { /* ... */ }
  
  return { items, addItem, removeItem }
}
\`\`\`
`,
      tags: ['Vue.js', '前端开发', 'JavaScript'],
      date: '2024-01-15',
      readTime: '8分钟',
      views: 1234
    },
    {
      id: 2,
      title: 'TypeScript 类型系统详解',
      description: '全面了解TypeScript的类型系统和高级用法，写出更安全的代码。',
      content: `# TypeScript 类型系统详解

TypeScript的类型系统是其核心特性之一，提供了静态类型检查和优秀的开发体验。

## 基本类型

\`\`\`typescript
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;
let list: number[] = [1, 2, 3];

// 联合类型
let id: string | number;
id = "abc123";
id = 123;

// 字面量类型
type Status = 'pending' | 'active' | 'inactive';
let currentStatus: Status = 'pending';
\`\`\`

## 接口和类型别名

\`\`\`typescript
// 接口
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // 可选属性
}

// 类型别名
type Point = {
  x: number;
  y: number;
};

type Shape = Circle | Rectangle;
\`\`\`

## 泛型

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

// 使用泛型
const num = identity<number>(42);
const str = identity<string>("hello");

// 泛型约束
interface HasLength {
  length: number;
}
function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}
\`\`\`
`,
      tags: ['TypeScript', '前端开发', '编程语言'],
      date: '2024-01-10',
      readTime: '12分钟',
      views: 2345
    },
    {
      id: 3,
      title: 'CSS架构设计原则',
      description: '探索可维护的CSS架构设计和组织方式，构建可扩展的样式系统。',
      content: `# CSS架构设计原则

良好的CSS架构对于项目的可维护性至关重要。随着项目增长，CSS代码往往会变得混乱和难以维护。

## 原则

### 1. 模块化

将CSS组织成独立的模块：

\`\`\`css
/* Button.css */
.btn { /* ... */ }
.btn-primary { /* ... */ }
.btn-secondary { /* ... */ }

/* Card.css */
.card { /* ... */ }
.card-header { /* ... */ }
.card-body { /* ... */ }
\`\`\`

### 2. 使用CSS自定义属性

\`\`\`css
:root {
  --primary-color: #1a1a2e;
  --secondary-color: #16213e;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
}
\`\`\`

### 3. 组件级样式

使用CSS Modules或CSS-in-JS避免全局污染：

\`\`\`css
/* Button.module.css */
.button {
  /* 仅作用于该组件 */
}
\`\`\`

## 推荐实践

1. **BEM命名规范**：Block Element Modifier
2. **使用预处理器**：Sass或Less
3. **工具类库**：Tailwind CSS
4. **CSS-in-JS**：Styled Components
`,
      tags: ['CSS', '前端开发', '架构设计'],
      date: '2024-01-05',
      readTime: '10分钟',
      views: 3456
    },
    {
      id: 4,
      title: 'Node.js性能优化实战',
      description: '学习如何优化Node.js应用的性能，提升吞吐量和响应速度。',
      content: `# Node.js性能优化实战

Node.js以其高性能和低资源消耗著称，但不当的使用方式可能导致性能问题。

## 性能优化策略

### 1. 异步非阻塞

充分利用Node.js的异步特性：

\`\`\`javascript
// 避免同步阻塞操作
const data = fs.readFileSync('file.txt'); // ❌ 阻塞
const data = await fs.readFile('file.txt'); // ✅ 非阻塞
\`\`\`

### 2. 集群模式

利用多核CPU：

\`\`\`javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // 工作进程
  require('./app');
}
\`\`\`

### 3. 缓存策略

使用内存缓存热点数据：

\`\`\`javascript
const cache = new Map();

function getData(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  
  const data = fetchFromDatabase(key);
  cache.set(key, data);
  return data;
}
\`\`\`
`,
      tags: ['Node.js', '后端开发', '性能优化'],
      date: '2024-01-01',
      readTime: '15分钟',
      views: 4567
    },
    {
      id: 5,
      title: '微服务架构设计与实践',
      description: '从单体应用到微服务的演进之路，探讨微服务的设计原则和最佳实践。',
      content: `# 微服务架构设计与实践

微服务架构是一种将单体应用拆分为多个小型服务的架构风格，每个服务独立部署、独立扩展。

## 核心原则

### 1. 单一职责

每个服务只负责一个业务功能：

- 用户服务：处理用户注册、登录、信息管理
- 订单服务：处理订单创建、支付、查询
- 通知服务：发送邮件、短信、推送通知

### 2. 独立部署

每个服务可以独立部署和扩展：

\`\`\`yaml
# docker-compose.yml
version: '3.8'
services:
  user-service:
    build: ./user-service
    ports:
      - "3001:3000"
    
  order-service:
    build: ./order-service
    ports:
      - "3002:3000"
\`\`\`

### 3. 服务通信

选择合适的通信方式：

- **同步调用**：HTTP/REST、gRPC
- **异步通信**：消息队列（RabbitMQ、Kafka）

## 挑战与解决方案

1. **服务发现**：使用Consul、etcd
2. **负载均衡**：Nginx、Kubernetes
3. **熔断降级**：Hystrix、Resilience4j
4. **分布式追踪**：Jaeger、Zipkin
`,
      tags: ['架构设计', '微服务', '后端开发'],
      date: '2023-12-28',
      readTime: '20分钟',
      views: 5678
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
    
    if (selectedTag.value) {
      result = result.filter(article => 
        article.tags.includes(selectedTag.value)
      )
    }
    
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
