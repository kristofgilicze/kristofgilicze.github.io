<template>
  <div class="flex justify-end flex-wrap">
    <span
      v-for="(tag, i) in items"
      :key="i"
      class="text-sm bg-gray-200 rounded px-1 mx-2 mb-2 font-sourcesans text-cyan-900"
      >{{ tag.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
