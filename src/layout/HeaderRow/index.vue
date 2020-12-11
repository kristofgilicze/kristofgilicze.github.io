<template>
    <header>
        <h2>{{ $t('fullName') }} <small>{{ $t('title') }}</small></h2>
        <locale-selector/>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import LocaleSelector from './LocaleSelector.vue';

export default Vue.extend({
  components: {LocaleSelector}
});
</script>

<style lang="scss">
  header {
    padding-left: 3.0rem;
    padding-top: 2.0rem;
    padding-bottom: 2.0rem;
    text-align: left;
    font-size: 1.2em;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
  }
</style>
