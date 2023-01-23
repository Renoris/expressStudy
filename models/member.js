'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {}
  Member.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, //데이터타입을 모두 대문자로 해야함,
    },
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    admissionDate: DataTypes.DATE,
    birthday: DataTypes.DATE,
    profileImage: DataTypes.STRING
  }, {
    sequelize, //이 객체가 members테이블의 members모델을 인식하는데 도와줌
    modelName: 'Member',
  });
  return Member;
};