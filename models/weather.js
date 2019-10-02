

module.exports = (sequelize, DataTypes) => {
  const weather = sequelize.define('Weather', {
    city: DataTypes.STRING,
    timestamp: DataTypes.STRING,
    temperature_unit: DataTypes.STRING,
    temperature_value: DataTypes.NUMBER,
  }, {});
  // weather.associate = function (models) {
  //   // associations can be defined here
  // };
  return weather;
};
