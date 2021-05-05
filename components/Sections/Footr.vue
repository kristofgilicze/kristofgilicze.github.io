<template>
  <footer>
    <div class="container mx-auto py-4">
      <ul
        class="mx-auto p-4 max-w-sm lg:hidden flex items-center justify-between text-gray-500 dark:text-gray-400"
      >
        <li>
          <a
            href="mailto:giliczekristof@gmail.com"
            target="_blank"
            rel="noreferrer"
            class="h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
          >
            <envelope class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kristofgilicze"
            target="_blank"
            rel="noreferrer"
            class="h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
          >
            <git-hub class="h-2/3 w-2/3" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kristofgilicze/"
            target="_blank"
            rel="noreferrer"
            class="h-8 w-8 grid place-items-center hover:text-blue-500 focus:text-blue-500 dark:hover:text-cyan-400 dark:focus:text-cyan-400 rounded-full transform transition duration-300 hover:-translate-y-1 focus:-translate-y-1"
          >
            <linked-in class="h-2/3 w-2/3" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Envelope from '../Icons/Envelope.vue';
import GitHub from '../Icons/GitHub.vue';
import LinkedIn from '../Icons/LinkedIn.vue';

export default {
  name: 'Footr',
  components: {
    Envelope,
    GitHub,
    LinkedIn
  }
};
</script>
