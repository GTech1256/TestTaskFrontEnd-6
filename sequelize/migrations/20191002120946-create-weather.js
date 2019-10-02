

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Weather', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    city: {
      type: Sequelize.STRING,
    },
    timestamp: {
      type: Sequelize.STRING,
    },
    temperature_unit: {
      type: Sequelize.ENUM,
      values: ['Celsius', 'Fahrenheit'],
      defaultValue: 'Celsius',
    },
    temperature_value: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  }),
  down: queryInterface => queryInterface.sequelize.query('DROP TABLE IF EXISTS Weather CASCADE;'),
};
