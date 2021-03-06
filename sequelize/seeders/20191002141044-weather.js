/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */

const COUNT_OF_WEATHER_DATA = 24; // every hour

/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * возвращает фунцию,
 * при вызове которой возрващает число
 * на +-2 отличающиеся от предыдущего
 * @param {number} number
 * @return {function(): number}
 */
const smoothRandomRelativeNumber = number => () => {
  // eslint-disable-next-line no-param-reassign
  number = randomIntFromInterval(number - 2, number + 2);
  return number;
};

/**
 *
 *
 * @param {Date} dayOfWeather заполнение дня
 * @param {string} city
 */
function getGeneratedWeathersForEveryHourOfSpecialDay(dayOfWeather, city) {
  const weathers = [];

  const localDay = new Date(dayOfWeather.setHours(3, 0, 0, 0));
  const smoothRamdomValue = smoothRandomRelativeNumber(randomIntFromInterval(-30, 30));

  for (let i = 0; i < COUNT_OF_WEATHER_DATA; i++) {
    const weatherDate = new Date(localDay);
    // 3 часовой сдвиг сервера базы данных
    weatherDate.setHours(i + 3);
    weathers.push({
      city,
      timestamp: weatherDate,
      temperature_value: smoothRamdomValue(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    localDay.setHours(i);
  }
  // console.log(weathers);
  return weathers;
}

/*
* @param {number} coundOfDays
* @param {Date} currentDay
* @param {string} city
* @return weather[]
* */
function getManyNextDaysOfWeayjers(coundOfDays, currentDay, city) {
  let generated = [];

  for (let i = 0; i < coundOfDays; i++) {
    generated = [
      ...generated,
      ...getGeneratedWeathersForEveryHourOfSpecialDay(
        new Date(currentDay.getTime() + i * 24 * 60 * 60 * 1000),
        city,
      ),
    ];
  }

  return generated;
}

module.exports = {
  up: async queryInterface => new Promise(async (resolve) => {
    const CITIES = ['Moscow', 'Saint-Petersburg'];

    CITIES.map(async (city, i, arr) => {
      const today = new Date();
      // const tomorrow = new Date();

      // tomorrow.setDate(today.getDate() + i);

      await queryInterface.bulkInsert(
        'Weather',
        getManyNextDaysOfWeayjers(5, today, city),
      );


      if (arr.length - 1 === i) {
        resolve();
      }
    });
  }),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Weather', null, {});
  },
};
