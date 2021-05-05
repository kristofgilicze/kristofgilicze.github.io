<template>
  <section>
    <h2 class="text-xl pb-3">Professional skillset</h2>
    <div v-if="toolbelt" class="grid grid-cols-1 gap-5 pb-4">
      <div v-for="(col, i) in cols" :key="(i + 1) * Math.random()">
        <p class="text-sm font-semibold text-green-600"># {{ col.label }}</p>
        <ul
          class="border-l border-gray-300 mx-auto flex items-center justify-center pt-2 flex-wrap max-w-3xl gap-0.5"
        >
          <li
            v-for="(skill, index) in toolbelt[col.key]"
            :key="(index + 1) * Math.random()"
            class="text-sm rounded px-1 mx-1 mb-1 font-sourcesans text-cyan-900"
          >
            <a
              class="flex items-center"
              :href="skill.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ skill.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="font-light text-center pb-3">
      Always looking to pick up new technologies.
    </p>
  </section>
</template>

<script>
export default {
  name: 'ProfessionalSkillsSection',
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
