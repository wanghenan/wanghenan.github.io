import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { articlesData } from '../articles-data'

export const useArticlesStore = defineStore('articles', () => {
  // 状态 - 使用生成的文章数据
  const articles = ref(articlesData)
  
  const currentArticle = ref(null)
  const loading = ref(false)
  const searchQuery = ref('')
  const selectedTag = ref('')

  // Getters
  const allTags = computed(() => {
    const tags = new Set()
    articles.value.forEach(article => {
      article.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  })

  const filteredArticles = computed(() => {
    let result = articles.value
    
    if (selectedTag.value) {
      result = result.filter(article => 
        article.tags.includes(selectedTag.value)
      )
    }
    
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
      )
    }
    
    return result
  })

  const articlesByDate = computed(() => {
    const groups = {}
    articles.value.forEach(article => {
      const year = article.date.split('-')[0]
      if (!groups[year]) {
        groups[year] = []
      }
      groups[year].push(article)
    })
    return Object.entries(groups).sort((a, b) => b[0] - a[0])
  })

  // Actions
  function getArticleById(id) {
    loading.value = true
    currentArticle.value = articles.value.find(a => a.id === parseInt(id))
    loading.value = false
    return currentArticle.value
  }

  function setSearchQuery(query) {
    searchQuery.value = query
  }

  function setSelectedTag(tag) {
    selectedTag.value = tag
  }

  function clearFilters() {
    searchQuery.value = ''
    selectedTag.value = ''
  }

  return {
    articles,
    currentArticle,
    loading,
    searchQuery,
    selectedTag,
    allTags,
    filteredArticles,
    articlesByDate,
    getArticleById,
    setSearchQuery,
    setSelectedTag,
    clearFilters
  }
})
