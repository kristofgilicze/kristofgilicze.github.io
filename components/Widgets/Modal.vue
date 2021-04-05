<template>
  <div
    class="fixed inset-0 bg-blur bg-gray-900 bg-opacity-50 transition-all duration-300 z-30"
    :class="{
      'opacity-0 invisible': !modal.active,
      'opacity-100 visible': modal.active
    }"
  >
    <article
      v-if="modal.active"
      class="bg-white dark:bg-gray-800 w-full max-w-4xl absolute top-0 md:top-1/2 left-0 md:left-1/2 bottom-0 md:bottom-auto md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl shadow-xl overflow-x-hidden overflow-y-auto"
    >
      <div
        class="px-8 py-4 bg-blur bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 sticky top-0 w-full flex items-center justify-between z-10"
      >
        <h2 class="text-3xl font-bold">{{ modal.content.name }}</h2>
        <button
          class="h-8 w-8 grid place-items-center rounded-full transform transition text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-700 focus:bg-blue-100 dark:focus:bg-gray-700 outline-none"
          @click="closeModal"
        >
          <times class="h-2/3 w-2/3" />
        </button>
      </div>
      <div class="px-8 py-4 md:pb-8 md:grid md:gap-8 md:grid-cols-2">
        <div class="md:mb-0 h-60 md:h-80 rounded-xl overflow-hidden">
          <img
            :src="modal.content.cover_image"
            alt="Project Name"
            class="h-full w-full object-cover"
          />
        </div>
        <div
          class="py-4 md:py-0 relative md:max-h-96 overflow-x-hidden overflow-y-auto"
        >
          <p class="leading-6">
            <nuxt-content :document="modal.content" />
          </p>
          <div
            class="mt-6 sticky top-full text-lg text-gray-600 dark:text-gray-400 flex items-center"
          >
            <a
              v-if="modal.content.github_link"
              :href="modal.content.github_link"
              target="_blank"
              rel="noreferrer"
              class="flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
            >
              <div class="flex-shrink-0 h-8 w-8 grid place-items-center">
                <git-hub class="h-2/3 w-2/3" />
              </div>
              GitHub
            </a>
            <a
              v-if="modal.content.live_link"
              :href="modal.content.live_link"
              target="_blank"
              rel="noreferrer"
              class="ml-6 flex items-center transition hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
            >
              <div class="flex-shrink-0 h-8 w-8 grid place-items-center">
                <external-link class="h-2/3 w-2/3" />
              </div>
              Live
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Times from '../Icons/Times.vue';
import ExternalLink from '../Icons/ExternalLink.vue';
import GitHub from '../Icons/GitHub.vue';

export default {
  name: 'Modal',
  components: { Times, GitHub, ExternalLink },
  computed: mapGetters({
    modal: 'modal'
  }),
  methods: mapActions({
    closeModal: 'closeModal'
  })
};
</script>
