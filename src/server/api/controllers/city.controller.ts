import { Response, Request, NextFunction } from 'express';
import { Op } from 'sequelize';
import Weather from '../models/Weather.model';

/**
 * Отдает последние 5 городов по текущей дате | <120 записей
 * @public
 */
export default {
  async getTodayFiveCities(req: Request, res: Response, next: NextFunction) {
    try {
      const normalizeWeatherData: Record<string, { data: number[] } > = { };

      const startDay = new Date();
      const endDay = new Date();
      // 3 часовой сдвиг сервера базы данных
      startDay.setHours(3, 0, 0, 0);
      endDay.setHours(26, 0, 0, 0);

      const weathers = await Weather.findAll({
        where: {
          timestamp: { [Op.between]: [startDay, endDay] },
        },
      });


      // eslint-disable-next-line no-restricted-syntax
      for (const weather of weathers) {
        if (normalizeWeatherData[weather.city]) {
          normalizeWeatherData[weather.city].data.push(weather.temperature_value);
        } else {
          normalizeWeatherData[weather.city] = { data: [weather.temperature_value] };
        }
      }

      return res.json(normalizeWeatherData);
    } catch (err) {
      return next(err);
    }
  },
};
