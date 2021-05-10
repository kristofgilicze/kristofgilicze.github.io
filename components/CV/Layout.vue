<template>
  <div class="p-4">
    <header-row />
    <contacts-row />
    <section class="grid grid-cols-12 gap-5">
      <left-col class="col-span-8" />
      <right-col class="col-span-4" />
    </section>
  </div>
</template>

<script>
import HeaderRow from './HeaderRow.vue';
import ContactsRow from './ContactsRow.vue';
import LeftCol from './LeftCol.vue';
import RightCol from './RightCol/index.vue';
export default {
  name: 'CvContent',
  components: { HeaderRow, ContactsRow, LeftCol, RightCol }
};
</script>
