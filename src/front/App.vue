<template>
  <div class="app">
    {{ messageInUpperCase }}
    <button @click="setMessageToGetter()">click</button>
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
    console.log(this.messageInUpperCase, ': before');
    this.messageInUpperCase = 'newMsg';
    console.log(this.messageInUpperCase, 'after mapGetter set');
    console.log(this.$store.getters.messageInUpperCase, ': from store getter');
    this.$store.state.getters.messageInUpperCase = 'newMsgInStore'
    console.log(this.$store.state.getters.messageInUpperCase, 'after $store set');
  }
}
</script>
