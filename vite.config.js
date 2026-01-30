import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  base: '/wanghenan.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia', 'marked']
        }
      },
      // 确保 Vue 被打包进输出
      external: []
    }
  },
  server: {
    port: 5173,
    open: true
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'marked']
  }
})
