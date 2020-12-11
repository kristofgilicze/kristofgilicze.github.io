<template>
  <div id="app">
    <div class="container flex-wrapper">
      <header-row />
      <div class="content">
        <navigation />

        <main>
          <section><router-view /></section>
        </main>
      </div>

      <footer>
        <ul>
          <li>
            <a
              href="https://stackoverflow.com/users/10434783/kristof-gilicze"
              target="_blank"
            >
              <span class="fa-stack">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-stack-overflow fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/krist%C3%B3f-gilicze-427228153/"
              target="_blank"
            >
              <span class="fa-stack">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:giliczekristof@gmail.com" target="_blank">
              <span class="fa-stack">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
        <a href="./resources/cv.pdf" download class="font-weight-bold">
          <i class="fa fa-file-pdf-o"></i> download my CV
        </a>
        <p>Copyright © {{ cp }}</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderRow from "./layout/HeaderRow/index.vue";
import Navigation from "./layout/Navigation.vue";

export default Vue.extend({
  name: "App",
  components: { Navigation, HeaderRow },
  data() {
    return {
      cp: new Date().getFullYear(),
    };
  },
});
</script>

<style lang="scss">
@import url("assets/vendor/font-awesome/css/font-awesome.min.css");
@import url("assets/vendor/ndevicons/devicon.min.css");
@import url("assets/vendor/simple-line-icons/css/simple-line-icons.css");

#app {
  margin: 0;
}

.flex-wrapper {
  height: 95vh;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

:root {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;

  background-color: white;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}

hr {
  border: 0.2px dashed black;
}

nav {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.6rem;
}
/* Style the content */
main {
  -webkit-flex: 5;
  -ms-flex: 5;
  flex: 5;
  padding: 10px;
}

.avatar {
  vertical-align: middle;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}

small {
  color: darkgray;
}

/* Container for flexboxes */
section {
  display: -webkit-flex;
  display: flex;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

nav ul {
  list-style-type: none;
}

nav li {
  text-align: right;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}

/* Style the footer */
footer {
  text-align: center;
  padding-bottom: 2rem;
  text-align: center;

  ul {
    list-style: none;
    padding-inline-start: 0;

    li {
      display: inline-block;
      a {
        color: black;
      }
    }
  }
}

.list-inline ul {
  list-style: none;
  padding-inline-start: 0;
}

.list-inline li {
  display: inline-block;
}

.icons a {
  color: black;
}

.dev-icons {
  font-size: 2.5em;
}

a {
  color: darkblue;
}

a:hover {
  color: darkblue;
}

.yellow i {
  color: gold;
}

/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */
@media (max-width: 600px) {
  section {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}

.flex {
  display: flex;
}

.flex-1 {
  flex-grow: 1;
}

.flex-2 {
  flex-grow: 2;
}

.flex-3 {
  flex-grow: 3;
}

.flex-4 {
  flex-grow: 4;
}

.container {
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.font-weight-bold {
  font-weight: bold;
}

.mb-0 {
  margin-bottom: 0;
}

.tag {
  color: white;
  background-color: black;
  padding: 0.3rem;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 0em;
}

.content {
  display: flex;
  flex-direction: row;
  flex: 1;
}

@media (max-width: 768px) {
  nav li {
    display: inline-block;
  }
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}

.intro-text {
  width: 15rem;
}
</style>
