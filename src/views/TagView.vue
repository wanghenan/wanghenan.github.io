<template>
  <div class="py-12 animate-fade-in max-w-4xl mx-auto px-4 sm:px-6">
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
