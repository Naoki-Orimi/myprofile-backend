'use strict';
const {
  Model
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_code: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: () => generateRandomString(6),
    }
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at', // フィールド名を変更
    updatedAt: 'updated_at' // フィールド名を変更
  });
  return user;
};