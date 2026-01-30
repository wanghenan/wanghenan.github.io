import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('@/views/ArticlesView.vue'),
    meta: { title: '文章' }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('@/views/ArticleView.vue'),
    meta: { title: '文章详情' }
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import('@/views/TagsView.vue'),
    meta: { title: '标签' }
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: () => import('@/views/TagView.vue'),
    meta: { title: '标签文章' }
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('@/views/ArchiveView.vue'),
    meta: { title: '归档' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '关于' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '404' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || '页面'} | 王贺南的博客`
  next()
})

export default router
