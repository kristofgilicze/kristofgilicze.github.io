<template>
  <div class="locale-changer">
    <span 
      @click="$i18n.locale = 'en'"
      :class="{active: $i18n.locale == 'en'}">en</span> / 
    <span
     @click="$i18n.locale = 'hu'"
     :class="{active: $i18n.locale == 'hu'}">hu</span>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['hu', 'en'] }
  }
}
</script>


<style lang="scss" scoped>
  .locale-changer {
    margin: 1.5rem;
  }

  .active {
    font-weight: bold;
    color: darkblue;
  }

  span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
