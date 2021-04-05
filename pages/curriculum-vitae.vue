<template>
  <div class="p-10">
    <cv-download-button />
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
  width: 794px;
  height: 1123px;
}
</style>
