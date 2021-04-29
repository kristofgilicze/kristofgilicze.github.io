<template>
  <div>
    <h2 class="text-xl pb-5">Professional skillset</h2>
    <open-source-section />
    <!--<certificates-section />-->

    <h2 class="text-xl pt-5 pb-5">Education</h2>
  </div>
</template>

<script>
import OpenSourceSection from './OpenSourceSection.vue';
export default {
  name: 'RightCol',
  components: { OpenSourceSection },
  data() {
    return {
      certs: []
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      this.certs = await this.$content('cv/certificates').fetch();
    }
  }
};
</script>
