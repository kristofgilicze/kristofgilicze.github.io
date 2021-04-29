<template>
  <section id="projects">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-40 max-w-6xl">
      <h1
        class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Projects that I have worked on
      </h1>
      <div
        v-for="(project, index) in projects"
        :key="(index + 1) * Math.random()"
        class="mx-auto mb-10 md:mb-16 relative lg:flex lg:items-center rounded-xl overflow-hidden"
        :class="{
          'text-right flex-row': index % 2 === 0,
          'text-left flex-row-reverse': index % 2 !== 0
        }"
      >
        <div
          class="h-100 lg:max-w-xl relative rounded-xl overflow-hidden shadow-xl"
        >
          <div
            class="hidden lg:block absolute inset-0 bg-blue-500 dark:bg-cyan-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0"
          ></div>
          <img
            :src="project.cover_image"
            :alt="project.name"
            loading="lazy"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="p-4 md:p-6 lg:p-0 flex items-center absolute text-gray-200 lg:text-gray-900 lg:dark:text-gray-200 bg-blue-900 bg-opacity-80 dark:bg-green-900 dark:bg-opacity-80 inset-0 lg:relative lg:bg-transparent lg:dark:bg-transparent z-10"
          :class="{
            'lg:-ml-12 lg:-mr-0': index % 2 === 0,
            'lg:-ml-0 lg:-mr-12': index % 2 !== 0
          }"
        >
          <div>
            <p class="font-sourcecode text-blue-400 dark:text-cyan-400 rounded">
              {{ project.category }}
            </p>
            <h2
              class="mb-2 md:mb-4 font-bold text-xl md:text-3xl tracking-tight"
            >
              {{ project.name }}
            </h2>
            <div
              class="lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-800 lg:shadow-xl lg:rounded-lg"
            >
              <nuxt-content :document="{ body: project.excerpt }" />
              <button
                v-if="project.description"
                class="font-bold text-white dark:text-cyan-400 bg-cyan-600 border-0 py-0.5 px-2 focus:outline-none hover:bg-blue-600 rounded"
                @click="openModal(project)"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                more
              </button>
            </div>
            <p
              class="mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"
            >
              <a
                v-for="(tech, i) in project.technologies"
                :key="(i + 1) * Math.random()"
                :href="tech.link"
                target="_blank"
                rel="noreferrer"
                class="mb-2 h-8 w-8 hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
              >
                {{ tech.label }}
              </a>
            </p>
            <p
              class="mt-2 md:mt-4 font-sourcecode text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 rounded"
            >
              <span
                v-for="(lang, i) in project.languages"
                :key="(i + 1) * Math.random()"
              >
                {{ lang }}
              </span>
            </p>
            <div
              class="mt-2 md:mt-4 text-lg text-gray-200 lg:text-gray-500 lg:dark:text-gray-400 flex items-center"
              :class="{
                'justify-end': index % 2 === 0
              }"
            >
              <a
                v-if="project.github_link"
                :href="project.github_link"
                target="_blank"
                rel="noreferrer"
                class="h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full"
              >
                <git-hub class="h-2/3 w-2/3" />
              </a>
              <a
                v-if="project.live_link"
                :href="project.live_link"
                target="_blank"
                rel="noreferrer"
                class="ml-4 h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full"
              >
                <external-link class="h-2/3 w-2/3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import ExternalLink from '../components/Icons/ExternalLink.vue';
import GitHub from '../components/Icons/GitHub.vue';

export default {
  name: 'Projects',
  components: { GitHub, ExternalLink },
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    ...mapActions({
      openModal: 'openModal'
    }),
    async getProjects() {
      const projects = await this.$content('projects/featured')
        .sortBy('order', 'asc')
        .fetch();

      this.projects = projects;
    },
    trimDescription(description) {
      const maxLength = 250;
      let trimmedDesc;

      if (description.length > maxLength) {
        trimmedDesc = `${description.substring(0, maxLength)}...`;
      } else {
        trimmedDesc = description;
      }

      return trimmedDesc;
    }
  }
};
</script>
