<template>
  <div v-if="totalPages > 1" class="flex items-center justify-center space-x-2">
    <!-- 上一页按钮 -->
    <button
      :disabled="currentPage === 1"
      @click="$emit('page-change', currentPage - 1)"
      class="p-2 rounded-lg border border-gray-200 text-gray-600 
             hover:border-primary hover:text-primary disabled:opacity-50 
             disabled:cursor-not-allowed transition-all duration-300"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- 页码按钮 -->
    <button
      v-for="page in displayedPages"
      :key="page"
      :class="[
        'w-10 h-10 rounded-lg font-medium transition-all duration-300',
        currentPage === page
          ? 'bg-primary text-white'
          : 'text-gray-600 hover:bg-gray-100'
      ]"
      @click="$emit('page-change', page)"
    >
      {{ page }}
    </button>

    <!-- 下一页按钮 -->
    <button
      :disabled="currentPage === totalPages"
      @click="$emit('page-change', currentPage + 1)"
      class="p-2 rounded-lg border border-gray-200 text-gray-600 
             hover:border-primary hover:text-primary disabled:opacity-50 
             disabled:cursor-not-allowed transition-all duration-300"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

defineEmits(['page-change'])

const displayedPages = computed(() => {
  const pages = []
  const total = props.totalPages
  const current = props.currentPage
  
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})
</script>
