<template>
  <div>
    <outlined-button :loading="loading" @click="generateCV">
      Grab my CV
    </outlined-button>
    <client-only>
      <vue-html2pdf
        ref="html2Pdf"
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        :manual-pagination="false"
        :html-to-pdf-options="pdfOptions"
        pdf-content-width="794px"
        @progress="onProgress"
      >
        <section slot="pdf-content"><resume-content /></section>
      </vue-html2pdf>
    </client-only>
  </div>
</template>

<script>
import {
  defineComponent,
  toRefs,
  ref,
  reactive
} from '@nuxtjs/composition-api';
import ResumeContent from '@/components/CV/Layout.vue';
import Loader from '../Icons/Loader.vue';
import OutlinedButton from '../Controls/OutlinedButton.vue';

export default defineComponent({
  name: 'CvDownloadButton',
  components: { ResumeContent, Loader, OutlinedButton },
  setup: () => {
    const html2Pdf = ref(null);
    const state = reactive({
      loading: false,
      pdfOptions: {
        filename: 'cv_kristof_gilicze.pdf',

        margin: 0,

        image: {
          type: 'jpeg',
          quality: 1
        },

        enableLinks: true,

        html2canvas: {
          scale: 2,
          useCORS: true,
          scrollX: 0,
          scrollY: 0,
          onclone: (element) => {
            const svgElements = Array.from(element.querySelectorAll('svg'));
            svgElements.forEach((s) => {
              const bBox = s.getBBox();
              s.setAttribute('x', bBox.x);
              s.setAttribute('y', bBox.y);
              s.setAttribute('width', bBox.width);
              s.setAttribute('height', bBox.height);
            });
          }
        },

        jsPDF: {
          unit: 'in',
          format: 'a4',
          orientation: 'portrait'
        }
      }
    });

    function onProgress(event) {
      if (event === 100) state.loading = false;
    }

    function generateCV() {
      state.loading = true;
      html2Pdf.value.generatePdf();
    }

    return {
      html2Pdf,
      ...toRefs(state),
      onProgress,
      generateCV
    };
  }
});
</script>
