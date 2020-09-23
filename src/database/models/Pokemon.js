const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Pokemon extends Model {}

Pokemon.init(
    {
        name: DataTypes.STRING,
        type1: DataTypes.STRING,
        type2: DataTypes.STRING,
        total: DataTypes.INTEGER,
        hp: DataTypes.INTEGER,
        attack: DataTypes.INTEGER,
        defense: DataTypes.INTEGER,
        spAtk: DataTypes.INTEGER,
        spDef: DataTypes.INTEGER,
        speed: DataTypes.INTEGER,
        generation: DataTypes.INTEGER,
        legendary: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: false,
        modelName: "pokemon",
    }
);

module.exports = Pokemon;
