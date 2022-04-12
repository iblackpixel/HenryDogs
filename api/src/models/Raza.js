const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("raza", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Id: {
      //TODO Crear el ID de manera que deba tener una B adelante del número.
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
