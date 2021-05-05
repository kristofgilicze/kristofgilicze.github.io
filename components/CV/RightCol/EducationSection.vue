<template>
  <section>
    <h2 class="text-xl pb-3">Education</h2>
    <div class="pl-2">
      <div v-for="(project, i) in openSource" :key="i">
        <p class="text-sm font-semibold">
          {{ project.name }}
          <br />
          <span class="text-sm font-light">{{ project.subject }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
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
      this.openSource = await this.$content('cv/education')
        .sortBy('order', 'asc')
        .fetch();
    }
  }
};
</script>
