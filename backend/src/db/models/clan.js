'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clan = sequelize.define('Clan', {
    clan: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: false
    },
    members: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    }
  }, {});
  return Clan;
};
