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
