<template>
  <div>
    <headr />
    <!--<about />-->
    <!--<experience />
    <skill />
    <modal />
    <project />
    <contact />-->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Headr from '@/components/Sections/Headr.vue';

export default {
  components: {
    Headr
  },
  mounted() {
    this.closeMenu();
  },
  methods: mapActions({
    closeMenu: 'closeMenu'
  })
};
</script>
