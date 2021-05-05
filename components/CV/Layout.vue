<template>
  <div class="p-6">
    <header-row />
    <contacts-row />
    <section class="grid grid-cols-12 gap-5">
      <left-col class="col-span-8" />
      <right-col class="col-span-4" />
    </section>
  </div>
</template>

<script>
import HeaderRow from './HeaderRow.vue';
import ContactsRow from './ContactsRow.vue';
import LeftCol from './LeftCol.vue';
import RightCol from './RightCol/index.vue';
export default {
  name: 'CvContent',
  components: { HeaderRow, ContactsRow, LeftCol, RightCol },
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
