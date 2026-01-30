<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">W</span>
          </div>
          <span class="font-semibold text-lg text-dark hover:text-primary transition-colors">
            王贺南
          </span>
        </router-link>

        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary transition-colors link-underline"
            active-class="text-primary"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- 搜索和移动端菜单按钮 -->
        <div class="flex items-center space-x-4">
          <button 
            @click="toggleSearch"
            class="p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="搜索"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <!-- 移动端菜单按钮 -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="菜单"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 搜索框 -->
      <transition name="slide-down">
        <div v-if="searchOpen" class="py-4 border-t border-gray-100">
          <SearchBar @close="toggleSearch" />
        </div>
      </transition>

      <!-- 移动端菜单 -->
      <transition name="slide-down">
        <nav v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
          <div class="flex flex-col space-y-4">
            <router-link 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="text-gray-600 hover:text-primary transition-colors py-2"
              active-class="text-primary"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'

const searchOpen = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/articles' },
  { name: '标签', path: '/tags' },
  { name: '归档', path: '/archive' },
  { name: '关于', path: '/about' }
]

function toggleSearch() {
  searchOpen.value = !searchOpen.value
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
