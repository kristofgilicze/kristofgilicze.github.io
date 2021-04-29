<template>
  <div class="pb-5">
    <div class="mb-2 md:mb-2 flex items-center">
      <h1 class="text-md md:text-md whitespace-nowrap flex-shrink">
        {{ label }}
      </h1>
      <span
        class="flex-auto ml-4 h-px w-32 bg-gray-300 dark:bg-gray-600"
      ></span>
    </div>
    <ul>
      <li
        v-for="(cert, i) in certs"
        :key="i"
        class="grid grid-cols-12 gap-3 font-light text-sm pb-2"
      >
        <span class="col-span-4 font-semibold mr-3">{{ cert.code }}</span>
        <span class="col-span-8">{{ cert.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CertList',
  props: {
    certs: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: () => ''
    }
  }
};
</script>
