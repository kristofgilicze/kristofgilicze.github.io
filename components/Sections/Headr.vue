<template>
  <header>
    <div
      class="container mx-auto px-8 py-4 md:px-12 md:py-10 flex items-center header-h max-w-6xl"
    >
      <main v-if="about">
        <p class="mb-4 font-sourcecode text-blue-500 dark:text-cyan-400">
          Hello, my name is
        </p>
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-light">
          {{ about.name }}.
        </h1>
        <h2
          class="terminal-line-cursor-effect text-4xl md:text-4xl lg:text-7xl font-bold text-gray-500 dark:text-gray-400"
        >
          {{ about.title }}
        </h2>
        <h2
          class="text-4xl md:text-4xl lg:text-5xl font-light text-gray-500 dark:text-gray-400"
        >
          {{ about.secondary_title }}
        </h2>
        <nuxt-content
          class="mt-4 max-w-lg text-gray-500 dark:text-gray-400 leading-7"
          :document="bio"
        />
        <div class="mt-8 flex items-center">
          <nuxt-link
            to="/get-in-touch"
            class="px-6 py-3 font-sourcecode text-blue-500 dark:text-cyan-400 inline-block border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
          >
            Get In Touch
          </nuxt-link>
          <span class="px-10">or</span>
          <nuxt-link
            to="/curriculum-vitae"
            class="px-6 py-3 font-sourcecode text-blue-500 dark:text-cyan-400 inline-block border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
          >
            Grab my CV
          </nuxt-link>
        </div>
      </main>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Headr',
  components: {},
  async fetch() {
    this.about = await this.$content('about').fetch();
    this.bio = await this.$content('bio').fetch();
  },
  data() {
    return {
      about: {},
      bio: {}
    };
  }
};
</script>

<style scoped>
.terminal-line-cursor-effect::after {
  content: ' _';
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
}

.header-h {
  min-height: 95vh;
}
</style>
