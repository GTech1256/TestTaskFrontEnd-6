<template>
  <div class="index">
    <h1 class="index__title">Погода</h1>
    <div
      class="index__loader"
      v-if="!isLoaded"
    >
      Загрузка
    </div>
    <div
      class="index__error"
      v-else-if="isError"
    >
      <b>Ошибка.</b> подробнее в консоли
    </div>
    <div class="index__main" v-else>
      <TheWeather :datasets="datasets" :labels="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]" :options="options" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getAllWeather } from '@/api/weather';
import TheWeather from '@/components/TheWeather.vue';
import Weather from '../../server/api/models/Weather.model';


const options = {
  // scales: {
  //   yAxes: [{
  //     ticks: {
  //       beginAtZero: true,
  //       callback: (value: number) => value,
  //     },
  //   }],
  // },
  tooltips: {
    mode: 'index',
    callbacks: {
      label(tooltipItem: any, data: any) {
        const { label } = data.datasets[tooltipItem.datasetIndex];
        const value = tooltipItem.yLabel;
        return `${label}: ${value}`;
      },
    },
  },
};

@Component<IndexView>({
  components: {
    TheWeather,
  },
})
export default class IndexView extends Vue {
    isLoaded: boolean = false;

    isError: boolean = false;

    weather: Record<string, {data: Weather[] }> = {};

    options: Object = options;

    // eslint-disable-next-line class-methods-use-this
    mounted() {
      getAllWeather()
        .then(({ data }) => {
          this.weather = data;
          this.isLoaded = true;
          console.log(this.weather);
        })
        .catch((e) => {
          this.isError = true;
          this.isLoaded = true;
          console.log(e);
        });
    }

    get datasets() {
      // const res = { ...this.weather };
      return Object.keys(this.weather).map(cityName => ({
        label: cityName,
        data: this.weather[cityName].data,
      }));
    }
}
</script>
<style>
  .index {
    max-width: 70vw;
    min-height: 50vh;
    padding: 25px;
    margin: auto;
    background-color: #ffffff;
    border-radius: 10px;
    min-width: 50%;
  }

  .index__title {
    margin: 0;
    padding: 0;
  }

  .index__loader,
  .index__error {
    display: flex;
    height: 100%;
    margin: auto;

    justify-content: center;
    align-items: center;

  }
</style>
