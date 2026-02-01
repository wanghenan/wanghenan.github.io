<template>
  <div class="animate-fade-in max-w-4xl mx-auto px-4 sm:px-6">
    <!-- Hero Section -->
    <section class="py-16 md:py-24">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-dark mb-6">
          你好，我是<span class="text-primary">Hernon</span>
        </h1>

        <!-- 按钮栏在最上面 -->
        <div class="flex flex-wrap gap-3 justify-center mb-6 mt-12">
          <router-link to="/articles" class="btn-primary">
            阅读文章
          </router-link>
          <a 
            href="https://blog.csdn.net/qq_33618717?type=blog" 
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.015 7.338c4.734-.622 7.676 2.044 8.503 5.365.471 1.895.272 3.712-.535 4.936-1.016 1.543-2.779 2.674-4.836 2.549-2.711-.165-3.683-2.373-5.303-4.045-1.03-1.063-1.94-1.148-2.378-.105-.628 1.494-1.127 3.131-1.913 4.563-1.336 2.436-4.043 2.765-5.666 1.118-1.437-1.46-1.378-4.478.108-5.893 3.027-2.882 7.688-5.17 12.02-5.888z"/>
            </svg>
            博客
          </a>
          <a 
            href="https://www.xiaohongshu.com/user/profile/6471d187000000002a03561e" 
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.987 2.194c-3.05-.09-5.787 1.847-6.833 4.792a6.085 6.085 0 00-1.27 4.147c.14.65.49 1.263.987 1.76a5.7 5.7 0 013.15 3.867c.39 1.244.18 2.608-.56 3.679-.75 1.084-1.91 1.72-3.19 1.72-1.02 0-2.03-.34-2.9-.98-1.15-.85-1.84-2.08-1.92-3.43-.11-1.93.55-3.79 1.8-5.1a9.21 9.21 0 013.84-2.49c2.05-.67 4.22-.33 6.03.93 1.14.79 2.01 1.86 2.52 3.09.12.28.08.6-.1.84-.2.27-.52.4-.84.35-.32-.05-.56-.33-.61-.65a6.83 6.83 0 00-2.3-3.12 7.16 7.16 0 00-3.65-1.43c-.96-.13-1.93.11-2.75.67a4.67 4.67 0 00-1.54 1.83c-.14.35-.54.55-.91.46-.37-.1-.56-.49-.45-.84.34-1.1 1.05-2.05 2.01-2.7.95-.65 2.11-.92 3.21-.77.55.08 1.08.26 1.57.54.2.12.45.14.67.05.22-.08.37-.29.38-.52.02-.56.05-1.12.05-1.68 0-.38-.26-.71-.62-.79-.36-.08-.75.06-.94.38-.44.75-.85 1.52-1.22 2.32-.18.38-.63.58-1.04.47-.41-.1-.64-.52-.53-.93.34-1.26.82-2.44 1.43-3.52A7.28 7.28 0 0012.987 2.194z"/>
            </svg>
            小红书
          </a>
          <a 
            href="https://mindspace-ashy.vercel.app/" 
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-colors text-sm font-medium"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            AI产品
          </a>
        </div>
        
        <!-- 三个条目放入一个白色容器 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-100 text-left max-w-2xl mx-auto mb-6">
          <div class="p-4 border-b border-gray-100">
            <span class="text-primary font-semibold">核心理念</span>
            <p class="mt-1 text-sm text-gray-600">像管理"聪明人"一样驱动 AI。通过精确表达需求、量化交付标准、主导核心判断，将 AI 从工具进化为深度合作伙伴。</p>
          </div>
          <div class="p-4 border-b border-gray-100">
            <span class="text-primary font-semibold">专业擅长</span>
            <p class="mt-1 text-sm text-gray-600">复杂需求梳理 · 标准化流程建立 · 跨团队技术管理</p>
          </div>
          <div class="p-4">
            <span class="text-primary font-semibold">实战沉淀</span>
            <p class="mt-1 text-sm text-gray-600">聚焦技术选型、流程优化与生产力工具集成的深度思考。</p>
          </div>
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

const featuredArticles = computed(() => {
  return articlesStore.articles.slice(0, 3)
})

const latestArticles = computed(() => {
  return [...articlesStore.articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
})
</script>
