const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("temperamento", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
    },
  });
};
