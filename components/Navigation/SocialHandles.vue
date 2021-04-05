<template>
  <article
    class="hidden text-gray-500 dark:text-gray-400 lg:block fixed left-8 bottom-0 z-10"
  >
    <ul class="p-4">
      <li>
        <a
          href="https://github.com/kristofgilicze"
          target="_blank"
          rel="noreferrer"
          class="mb-2 h-12 w-12 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
        >
          <git-hub class="h-2/3 w-2/3" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/kristofgilicze/"
          target="_blank"
          rel="noreferrer"
          class="mb-2 h-12 w-12 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
        >
          <linked-in class="h-2/3 w-2/3" />
        </a>
      </li>
      <li>
        <a
          href="https://stackoverflow.com/users/10434783/kristof-gilicze"
          target="_blank"
          rel="noreferrer"
          class="mb-2 h-12 w-12 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
        >
          <stackoverflow class="h-2/3 w-2/3" />
        </a>
      </li>
      <li>
        <a
          href="https://dev.to/kristofg"
          target="_blank"
          rel="noreferrer"
          class="mb-2 h-12 w-12 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
        >
          <dev-to class="h-2/3 w-2/3" />
        </a>
      </li>
      <!--
      <li>
        <a
          href="https://medium.com/@kristofgilicze"
          target="_blank"
          rel="noreferrer"
          class="mb-2 h-12 w-12 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
        >
          <medium class="h-2/3 w-2/3" />
        </a>
      </li>
      -->
    </ul>
    <div class="mx-auto h-24 w-px bg-gray-400 dark:bg-gray-500"></div>
  </article>
</template>

<script>
import GitHub from '../Icons/GitHub.vue';
import LinkedIn from '../Icons/LinkedIn.vue';
import Stackoverflow from '../Icons/Stackoverflow.vue';
import DevTo from '../Icons/DevTo.vue';

export default {
  name: 'SocialHandles',
  components: {
    GitHub,
    LinkedIn,
    DevTo,
    Stackoverflow
  }
};
</script>
