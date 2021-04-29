<template>
  <section class="pb-5">
    <h2 class="text-xl">Open-source activity</h2>
    <div class="pl-2">
      <div v-for="(project, i) in openSource" :key="i">
        <p class="text-sm font-semibold">
          {{ project.name }}
          <span class="text-sm font-light">{{ project.description }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OpenSourceSection',
  components: {},
  data() {
    return {
      openSource: []
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      this.openSource = await this.$content('cv/open_source')
        .sortBy('order', 'asc')
        .fetch();
    }
  }
};
</script>
