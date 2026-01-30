<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="tag in tags"
      :key="tag"
      :class="[
        'tag cursor-pointer',
        selectedTag === tag ? 'bg-primary text-white' : ''
      ]"
      @click="$emit('select', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true
  },
  selectedTag: {
    type: String,
    default: ''
  }
})

defineEmits(['select'])
</script>
