<template>
  <div class="app">
    jtpp
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    ...mapGetters([
      'messageInUpperCase'
    ])
  }
})
export default class App extends Vue {
  setMessageToGetter(message: string) {
    //
  }
}
</script>
