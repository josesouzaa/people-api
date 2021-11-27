const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('people', 'user', 'pass', {
  dialect: 'sqlite',
  host: './db/people.sqlite'
})

const Person = sequelize.define(
  'Person',
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Person'
  }
)

module.exports = { sequelize, Person }
