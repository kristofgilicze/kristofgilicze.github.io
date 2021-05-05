<template>
  <section class="flex">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold pb-5 flex-shrink">
      {{ about.name }}
    </h1>
    <div class="flex-auto flex-row pl-5">
      <div class="flex-auto text-gray-500 font-light">{{ about.title }}</div>
      <div class="flex-auto text-gray-500 font-light">
        {{ about.secondary_title }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderRow',
  data() {
    return {
      about: {
        name: '',
        title: '',
        secondary_title: '',
        email: ''
      }
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      this.about = await this.$content('about').fetch();
    }
  }
};
</script>
