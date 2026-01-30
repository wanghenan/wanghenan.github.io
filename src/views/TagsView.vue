<template>
  <div class="py-12 animate-fade-in max-w-4xl mx-auto px-4 sm:px-6">
    <h1 class="text-3xl font-bold text-dark mb-8 text-center">所有标签</h1>
    
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
