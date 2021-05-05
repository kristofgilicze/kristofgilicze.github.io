<template>
  <div
    class="container mx-auto px-8 py-4 md:px-20 md:py-40 items-center max-w-6xl"
  >
    <cv-download-button class="mx-auto w-64" />
    <cv-content class="a4-96PPI border m-24" />
  </div>
</template>

<script>
import CvDownloadButton from '@/components/CV/CvDownloadButton.vue';
import CvContent from '@/components/CV/Layout.vue';

export default {
  name: 'CV',
  components: { CvDownloadButton, CvContent }
};
</script>

<style>
.a4-96PPI {
  background-color: white;
  width: 794px;
  height: 1123px;
}
</style>
