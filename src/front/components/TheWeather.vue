<template>
  <div class="weather">
   
  </div>
</template>

<script lang="ts">
import Chart, { Line } from 'vue-chartjs-typescript'
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component<HelloWorld>({
  extends: Line,
})
export default class HelloWorld extends Vue {
  @Prop() private chartdata!: {};
  @Prop() private options!: {};

  private chartType: string = 'Line';
  plugins: Array<any>;
  _chart: Chart | null = null;
  _plugins = this.plugins;

  renderChart(data: any, options: any) {
    let canvas: any = this.$refs.canvas;
    this._chart = new Chart(
      canvas.getContext("2d"), {
        type: this.chartType,
        data: data,
        options: options,
        plugins: this._plugins
      }
    );
  }

  mounted() {
    this.renderChart(this.chartdata, this.options)
  }

  beforeDestroy() {
    if (this._chart) {
      this._chart.destroy();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
