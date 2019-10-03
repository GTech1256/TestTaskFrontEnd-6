<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>
<style>
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;

    color: #444444;
    font-family: Roboto, Arial, sans-serif;

    background-color: #273238;
  }

  .app {
    padding: 50px;
  }
</style>
