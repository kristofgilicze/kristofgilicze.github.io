<template>
  <section class="pb-5">
    <h2 class="text-xl">Certificates</h2>
    <div class="pl-2">
      <cert-list label="Google" :certs="certs.google" />
      <cert-list label="Microsoft" :certs="certs.microsoft" />
      <cert-list label="Other" :certs="certs.other" />
    </div>
  </section>
</template>

<script>
import CertList from './CertList.vue';
export default {
  name: 'CertificatesSection',
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
