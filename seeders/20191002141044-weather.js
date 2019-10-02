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

  const localDay = new Date(dayOfWeather.setHours(0, 0, 0, 0));
  const smoothRamdomValue = smoothRandomRelativeNumber(randomIntFromInterval(-30, 30));

  for (let i = 0; i < COUNT_OF_WEATHER_DATA; i++) {
    weathers.push({
      city,
      timestamp: new Date(localDay),
      temperature_value: smoothRamdomValue(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    localDay.setHours(i);
  }
  // console.log(weathers);
  return weathers;
}

module.exports = {
  up: async queryInterface => new Promise(async (resolve, reject) => {
    const CITIES = ['Moscow', 'Saint-Petersburg'];

    CITIES.map(async (city, i, arr) => {
      const today = new Date();
      const tomorrow = new Date();

      tomorrow.setDate(today.getDate() + i);

      await queryInterface.bulkInsert(
        'Weather',
        getGeneratedWeathersForEveryHourOfSpecialDay(tomorrow, city),
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
