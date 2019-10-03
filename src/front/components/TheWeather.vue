<template>
  <div class="weather">
    <canvas class="weather__chart" ref="myChart" :width="800" :height="400"></canvas>
  </div>
</template>

<script lang="ts">
import Chart from 'chart.js';
import {
  Component,
  Prop,
  Vue,
  Watch,
  Ref,
} from 'vue-property-decorator';


@Component
export default class TheWeather extends Vue {
  @Prop() private datasets!: [];

  @Prop() private options!: {};

  @Prop() private labels!: string[];

    @Ref('myChart') readonly chartCanvas!: HTMLCanvasElement

    // The canvas's width.
    height: number = 200;

    // The canvas's height.
    width: number = 200;

    chart: any

    @Watch('datasets')
    onDatasetChange(newDatasets: Object, oldVal: Object) {
      // Replace the datasets and call the update() method on Chart.js
      // instance to re-render the chart.
      this.chart.data.datasets = newDatasets;
      this.chart.update();
    }


    mounted() {
      this.chart = new Chart(this.chartCanvas, {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: this.options,
      });
      this.chart.render();
    }

    beforeDestroy() {
      if (this.chart) {
        (this).chart.destroy();
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.weather__chart {
  max-height: 80vh;
}
</style>
