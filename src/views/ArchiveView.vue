<template>
  <div class="py-12 animate-fade-in max-w-4xl mx-auto px-4 sm:px-6">
    <h1 class="text-3xl font-bold text-dark mb-8 text-center">文章归档</h1>

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
