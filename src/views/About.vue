<template>
  <div class="about">
    <h1>{{ $t('description') }}</h1>
    <hr>
    <github-calendar username="kristofgilicze"><!--GitHubCalendar--></github-calendar>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style lang="scss">
  .about {
    width: 100%;
  }
</style>