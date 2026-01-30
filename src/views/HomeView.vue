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
