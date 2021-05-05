<template>
  <div>
    <professional-skills-section />
    <!--<open-source-section />-->
    <!--<certificates-section />-->
    <education-section />
  </div>
</template>

<script>
import EducationSection from './EducationSection.vue';
import ProfessionalSkillsSection from './ProfessionalSkillsSection.vue';
export default {
  name: 'RightCol',
  components: { EducationSection, ProfessionalSkillsSection },
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
