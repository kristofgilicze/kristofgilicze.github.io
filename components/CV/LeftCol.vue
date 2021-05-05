<template>
  <div class="col-span-8">
    <h2 class="text-xl pb-3">Projects that I have worked on</h2>
    <!--
        <ul>
          <li
            v-for="(project, index) in projects"
            :key="(index + 1) * Math.random()"
          >
            {{ project.name }}
          </li>
        </ul>
        -->
    <ul>
      <li
        v-for="(project, index) in experinces"
        :key="(index + 1) * Math.random()"
      >
        <div class="mb-2 md:mb-2 flex items-center">
          <h1 class="text-sm md:text-md whitespace-nowrap flex-shrink">
            {{ project.role }}
            <a
              :href="project.company_website"
              target="_blank"
              class="font-bold"
            >
              {{ project.company }}
            </a>
          </h1>
          <span
            class="flex-auto ml-4 h-px w-32 bg-gray-300 dark:bg-gray-600"
          ></span>
        </div>
        <div class="m-2 pb-3">
          <div class="flex justify-between">
            <!--eslint-disable-next-line-->
            <p
              class="w-32 text-sm font-light mb-2"
              v-html="project.duration"
            ></p>
            <tags class="items-start" :items="project.tags" />
          </div>

          <p class="text-sm">
            <nuxt-content
              :document="
                project.excerpt
                  ? { body: project.excerpt }
                  : { body: project.body }
              "
            />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Tags from './Tags.vue';

export default {
  name: 'LeftCol',
  components: { Tags },
  data() {
    return {
      projects: null,
      experinces: null,
      certs: [],
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

      this.projects = await this.$content('projects/featured')
        .sortBy('order', 'asc')
        .fetch();

      this.experinces = await this.$content('experience')
        .sortBy('order', 'asc')
        .fetch();
    }
  }
};
</script>
