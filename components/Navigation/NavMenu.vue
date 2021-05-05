<template>
  <ul
    class="hidden static font-sourcecode text-xl md:flex justify-start items-center"
  >
    <!--
    <li>
      <nuxt-link
        to="/#about"
        class="px-4 py-2 text-center block w-full transition transform hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
        >About</nuxt-link
      >
    </li>
    -->
    <li>
      <nuxt-link
        to="/"
        class="item px-4 py-2 text-center block w-full transition transform hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
        >Hello!</nuxt-link
      >
    </li>
    <!--
    <li>
      <nuxt-link
        to="/#toolbelt"
        class="item px-4 py-2 text-center block w-full transition transform hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
        >Toolbelt</nuxt-link
      >
    </li>
    
    <li>
      <nuxt-link
        to="/projects"
        class="item px-4 py-2 text-center block w-full transition transform hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
        >Projects</nuxt-link
      >
    </li>
    -->
    <li>
      <nuxt-link
        to="/curriculum-vitae"
        class="item px-4 py-2 text-center block w-full transition transform hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
        >CV</nuxt-link
      >
    </li>
    <li>
      <nuxt-link
        to="/get-in-touch"
        class="item px-4 py-2 text-center block w-full transition transform hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
        >Get in touch</nuxt-link
      >
    </li>
    <li>
      <a
        href="https://medium.com/@kristofgilicze"
        target="_blank"
        class="item px-4 py-2 text-center flex w-full transition transform hover:scale-110 hover:text-blue-500 dark:hover:text-cyan-400 focus:text-blue-500 dark:focus:text-cyan-400"
      >
        Blog <external-link class="pl-2 w-6 h-6" />
      </a>
    </li>
  </ul>
</template>

<script>
import ExternalLink from '../Icons/ExternalLink.vue';
export default {
  name: 'NavMenu',
  components: { ExternalLink }
};
</script>

<style>
.item::before {
  content: '_';
  color: transparent;
}

.item::after {
  content: '_';
  color: transparent;
}

.nuxt-link-exact-active::before,
.item:hover::before,
.item:focus::before {
  content: '{';
  color: inherit;
  font-weight: bold;
}

.nuxt-link-exact-active::after,
.item:hover::after,
.item:focus::after {
  content: '}';
  color: inherit;
  font-weight: bold;
}
</style>
