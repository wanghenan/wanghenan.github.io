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
.prose h1 { @apply text-2xl font-bold text-dark mt-8 mb-4; }
.prose h2 { @apply text-xl font-semibold text-dark mt-6 mb-3; }
.prose h3 { @apply text-lg font-semibold text-dark mt-4 mb-2; }
.prose p { @apply text-gray-600 leading-relaxed mb-4; }
.prose ul, .prose ol { @apply ml-6 mb-4; }
.prose li { @apply text-gray-600 mb-2; }
.prose code { @apply bg-gray-100 px-1.5 py-0.5 rounded text-sm text-primary; }
.prose pre { @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4; }
.prose pre code { @apply bg-transparent p-0 text-gray-100; }
.prose blockquote { @apply border-l-4 border-primary pl-4 italic text-gray-500 my-4; }
.prose a { @apply text-primary hover:text-secondary transition-colors link-underline; }
.prose img { @apply rounded-lg shadow-md my-6; }
</style>
