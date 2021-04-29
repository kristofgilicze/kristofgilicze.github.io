<template>
  <section class="flex items-center pb-10">
    <a
      href="tel:+36 70 556 7113"
      class="flex-auto text-center text-sm flex items-center gap-1"
    >
      <tel class="text-cyan-900 h-6 w-6" />
      <span class="font-semibold">+36 70 556 7113</span>
    </a>
    <a
      href="mailto:giliczekristof@gmail.com"
      class="flex-auto text-center text-sm flex items-center gap-1"
    >
      <envelope class="text-cyan-900 h-6 w-6" />
      <span class="font-semibold">{{ about.email }}</span>
    </a>
    <a
      href="https://github.com/kristofgilicze"
      class="flex-auto text-center text-sm flex items-center gap-1"
    >
      <git-hub class="text-cyan-900 h-6 w-6" />
      <span class="font-semibold">github.com/kristofgilicze</span>
    </a>
    <a
      href="https://kristofg.dev"
      class="flex-auto text-center text-sm flex items-center gap-1"
    >
      <globe class="text-cyan-900 h-6 w-6" />
      <span class="font-semibold">{{ about.website }}</span>
    </a>
  </section>
</template>

<script>
import Envelope from '../Icons/Envelope.vue';
import GitHub from '../Icons/GitHub.vue';
import Globe from '../Icons/Globe.vue';
import Tel from '../Icons/Tel.vue';
export default {
  name: 'ContactsRow',
  components: { GitHub, Envelope, Globe, Tel },
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
