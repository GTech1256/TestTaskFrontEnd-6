
import {
  Column, CreatedAt, Model, Table, UpdatedAt,
} from 'sequelize-typescript';
// WeatherModel
// WeatherModels
@Table
export default class Weather extends Model<Weather> {
  @Column
  city!: string;

  @Column
  timestamp!: string;

  @Column
    // eslint-disable-next-line camelcase
  temperature_unit!: string;

  @Column
    // eslint-disable-next-line camelcase
  temperature_value!: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
