<template>
    <nav>
        <ul>
          <li>
              <router-link
                to="/hello"
                v-slot="{ route, navigate, isActive }"
              >
                <span :class="{'active': isActive}" @click="navigate">{{ $t(route.name) }}</span>
              </router-link>
            </li>
                      <li>
              <router-link
                to="/experince"
                v-slot="{ route, navigate, isActive }"
              >
                <span :class="{'active': isActive}" @click="navigate">{{ $t(route.name) }}</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/skills"
                v-slot="{ route, navigate, isActive }"
              >
                <span :class="{'active': isActive}" @click="navigate">{{ route.name }}</span>
              </router-link>
            </li>
                      <li>
              <router-link
                to="/education"
                v-slot="{ route, navigate, isActive }"
              >
                <span :class="{'active': isActive}" @click="navigate">{{ $t(route.name) }}</span>
              </router-link>
            </li>
            <!--<li><a href="education" class="anchor-link">education</a></li>-->
            <!--<li><a href="#pprojects">personal projects</a>-->
            <li>
              <router-link
                to="/open-source"
                v-slot="{ route, navigate, isActive }"
              >
                <span :class="{'active': isActive}" @click="navigate">{{ route.name }}</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/awards"
                v-slot="{ route, navigate, isActive }"
              >
                <span :class="{'active': isActive}" @click="navigate">{{ route.name }}</span>
              </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Style the list inside the menu */
nav li > span {
  display: inline;
  text-decoration: underline;
  /* text-decoration: none; */
  /* text-transform: uppercase; */
  padding: 0.3rem;
  color: black;
  font-weight: bold;
  font-size: 1.2em;
}

nav li > span:hover {
  color: white;
  background-color: darkblue;
  cursor: pointer;
}

nav li .active {
  color: white;
  background-color: black;
  cursor: default !important;
}

</style>
