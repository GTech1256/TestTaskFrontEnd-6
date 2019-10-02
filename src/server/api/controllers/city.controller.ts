import Weather from '../models/Weather.model';
import { Response, Request, NextFunction } from 'express';

/**
 * Получить всю погоду
 * @public
 */
export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {

      const normalizeWeatherData: Record<string, Weather[]> = {

      }

      const weathers = await Weather.findAll({})

      for (const weather of weathers) {
        if (normalizeWeatherData[weather.city]) {
          normalizeWeatherData[weather.city].push(weather)
        } else {
          normalizeWeatherData[weather.city] = [weather];
        }
      }
      
      res.json(normalizeWeatherData)

    } catch (err) {
      return next(err)
    }
  }
}
