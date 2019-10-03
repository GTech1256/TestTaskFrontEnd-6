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
      <TheWeather :datasets="datasets" :labels="labels" :options="options" />
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

    weather: Record<string, {data: number[] }> = {};

    options: Object = options;

    // eslint-disable-next-line class-methods-use-this
    mounted() {
      getAllWeather()
        .then(({ data }) => {
          this.weather = data;
          this.isLoaded = true;
        })
        .catch((e) => {
          this.isError = true;
          this.isLoaded = true;
        });
    }

    get datasets() {
      // const res = { ...this.weather };
      return this.weatherKeys.map(cityName => ({
        label: cityName,
        data: this.weather[cityName].data,
      }));
    }

    get weatherKeys() {
      return Object.keys(this.weather);
    }

    // eslint-disable-next-line class-methods-use-this
    get labels() {
      return [
        '1 час',
        '2 час',
        '3 час',
        '4 час',
        '5 час',
        '6 час',
        '7 час',
        '8 час',
        '9 час',
        '10 час',
        '11 час',
        '12 час',
        '13 час',
        '14 час',
        '15 час',
        '16 час',
        '17 час',
        '18 час',
        '19 час',
        '20 час',
        '21 час',
        '22 час',
        '23 час',
        '24 час',
      ];
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
