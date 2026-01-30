<template>
  <div class="relative w-full max-w-md mx-auto">
    <!-- 搜索输入框 -->
    <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索文章..."
        class="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
               transition-all duration-300 text-base"
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
