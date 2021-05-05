<template>
  <section id="toolbelt">
    <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
      <h1
        class="mb-2 md:mb-10 text-3xl md:text-4xl font-bold text-center whitespace-nowrap"
      >
        Toolbelt
      </h1>
      <div v-if="toolbelt" class="grid grid-cols-4 gap-5 pb-10">
        <div v-for="(col, i) in cols" :key="(i + 1) * Math.random()">
          <h2
            class="text-xl text-gray-500 dark:text-gray-400 md:text-xl font-light text-center"
          >
            {{ col.label }}
          </h2>
          <ul
            class="mx-auto flex items-center justify-center flex-wrap max-w-3xl gap-1"
          >
            <li
              v-for="(skill, index) in toolbelt[col.key]"
              :key="(index + 1) * Math.random()"
              class="m-2 md:m-2 flex border border-transparent items-center rounded-xl overflow-hidden text-gray-400 dark:bg-gray-800 dark:hover:border-cyan-500 hover:border-cyan-500 dark:hover:text-cyan-500 hover:text-cyan-500"
            >
              <a
                class="flex items-center"
                :href="skill.url"
                target="_blank"
                rel="noreferrer"
              >
                <div class="p-2 h-10 w-10 overflow-hidden">
                  <img
                    :src="`/images/skills/${skill.icon}`"
                    :alt="skill.name"
                    class="w-full h-full object-contain"
                  />
                </div>
                <p class="px-1 text-sm md:text-base">
                  {{ skill.name }}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2 class="mb-2 md:mb-10 text-2xl md:text-2xl text-center">
        Always open to pick up new technologies, these are just some of my
        favorites.
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      toolbelt: null,
      cols: [
        {
          label: 'Programming Languages',
          key: 'languages'
        },
        {
          label: 'Libraries & Frameworks',
          key: 'libsAndFrameworks'
        },
        {
          label: 'Frontend',
          key: 'frontend'
        },
        {
          label: 'Transfer protocols',
          key: 'transferProtocols'
        },
        {
          label: 'Persistence',
          key: 'persistance'
        },
        {
          label: 'Tools & Platforms',
          key: 'skills'
        }
      ]
    };
  },
  created() {
    this.getToolbelt();
  },
  methods: {
    async getToolbelt() {
      this.toolbelt = await this.$content('toolbelt').fetch();
    }
  }
};
</script>
