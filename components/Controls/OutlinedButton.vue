<template>
  <button
    class="inline-flex items-center px-6 py-3 font-sourcecode text-blue-500 dark:text-cyan-400 border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
    :class="{ 'border-red-200': loading, 'cursor-not-allowed': loading }"
    @click="onClick"
  >
    <loader :loading="loading" /> <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import Loader from '../Icons/Loader.vue';

export default defineComponent({
  name: 'OutlinedButton',
  components: { Loader },
  props: {
    loading: Boolean
  },
  setup: (props, { emit }) => {
    function onClick(event) {
      emit('click');
    }

    return {
      onClick
    };
  }
});
</script>
