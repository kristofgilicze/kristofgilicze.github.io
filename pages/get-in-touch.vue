<template>
  <section id="contact">
    <div
      class="container mx-auto px-8 py-4 md:px-20 md:py-40 items-center max-w-6xl"
    >
      <h1 class="mb-5 md:mb-10 text-3xl md:text-4xl font-bold text-center">
        Get In Touch
      </h1>
      <div class="mx-auto max-w-sm">
        <div
          class="mb-4 font-bold text-center"
          :class="{
            'text-cyan-500': status === 'success',
            'text-red-500': status === 'error'
          }"
        >
          <p v-if="status === 'success'">Message sent successfully.</p>
          <p v-if="status === 'error'">
            There was a error submitting the form.
          </p>
        </div>
        <form
          autocomplete="off"
          name="contact"
          method="POST"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="submitForm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            id="subject"
            value="kristofg.dev - contact form"
            name="subject"
            type="text"
            required
            placeholder=""
            class="hidden"
          />
          <div class="mb-4">
            <label for="email" class="block">Email</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              required
              class="p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-cyan-400 outline-none"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="3"
              required
              class="p-2 block w-full border-b dark:bg-gray-800 border-gray-300 dark:border-gray-700 transition focus:border-blue-500 dark:focus:border-cyan-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            class="mx-auto mt-6 px-6 py-3 block font-sourcecode text-blue-500 dark:text-cyan-400 border-2 border-blue-500 dark:border-cyan-400 rounded-md transition hover:bg-blue-500 dark:hover:bg-cyan-400 hover:bg-opacity-20 dark:hover:bg-opacity-20 focus:bg-blue-500 dark:focus:bg-cyan-400 focus:bg-opacity-20 dark:focus:bg-opacity-20"
            :class="{ 'pointer-events-none': busy }"
          >
            <span v-if="busy">sending...</span>
            <span v-if="!busy">dispatch message</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Contact',
  setup: (props, ctx) => {
    const state = reactive({
      status: null,
      busy: false,
      form: {
        name: null,
        email: null,
        subject: null,
        message: null
      }
    });

    function encode(data) {
      const formData = new FormData();

      state.form.name = state.form.email;

      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }

      return new URLSearchParams(formData).toString();
    }

    async function submitForm() {
      state.status = null;
      state.busy = true;

      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...state.form
          })
        });

        state.status = 'success';
        state.busy = false;

        state.form.name = null;
        state.form.email = null;
        state.form.subject = null;
        state.form.message = null;
      } catch (err) {
        state.status = 'error';
        state.busy = false;

        // eslint-disable-next-line no-console
        console.error(err);
      }
    }

    return {
      submitForm,
      ...state
    };
  }
});
</script>
