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
  if (route.query.tag) {
    articlesStore.setSelectedTag(route.query.tag)
  }
})
</script>
