<template>
  <div>
    <h2 class="text-xl pb-5">Professional skillset</h2>
    <h2 class="text-xl pb-5">Open-source contributions</h2>
    <h2 class="text-xl pb-5">Certificates</h2>

    <cert-list label="Google" :certs="certs.google" />
    <cert-list label="Microsoft" :certs="certs.microsoft" />
    <cert-list label="Other" :certs="certs.other" />

    <h2 class="text-xl pt-5 pb-5">Education</h2>
  </div>
</template>

<script>
import CertList from './CertList.vue';
export default {
  name: 'RightCol',
  components: { CertList },
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
