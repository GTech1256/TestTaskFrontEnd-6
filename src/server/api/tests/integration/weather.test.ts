import request from 'supertest';
import app from '../../../index';
// import MockAdapter from 'axios-mock-adapter';
// import axios from 'axios';

import Weather from '../../models/Weather.model';
import sequelize from '../../../config/sequelize';

const weatherMock = {
  city: 'Moscow',
  timestamp: 5555555555,
  temperature_value: 20,
};

// const mock = new MockAdapter(axios);
// const fakeRate = {
//   USD: { Value: 70 },
//   EUR: { Value: 64 },
// };
// mock.onGet(/daily_json/).reply(200, {
//   Valute: fakeRate,
// });

describe('Conversion api', async () => {
  beforeAll(async () => {
    await Weather.destroy({
      where: {},
      truncate: true,
    });

    await Weather.create(weatherMock);
  });

  afterAll(() => {
    // sequelize.close()
  });

  it('should return correct Weather model from API', async () => {
    const weather = await Weather.findOne({});

    return request(app)
      .get('/api/v1/weather')
      .then((res) => {
        expect(res).not.toBeNull();
        console.log(res);
        if (!res) {
          throw new Error('Weather null');
        }


        // expect(res.body[0]).toEqual({
        //   city: weather.city,
        //   timestamp: weather.timestamp,
        //   temperature_value: weather.temperature_value,
        // });
      });
  });
});
