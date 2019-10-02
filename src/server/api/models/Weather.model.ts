import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';
// WeatherModel
// WeatherModels
@Table
export default class Weather extends Model<Weather> {

  @Column
  city!: string;

  @Column
  timestamp!: string;

  @Column
  temperature_unit!: string;

  @Column
  temperature_value!: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
