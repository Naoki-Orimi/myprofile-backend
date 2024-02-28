'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // ユーザーテーブル
  user.init({
    name: DataTypes.STRING,
    birth: DataTypes.DATE,
    country_code: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};