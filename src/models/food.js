
'use strict';
const Food = (sequelize, DataType) =>
sequelize.define('food', {
        foods: {
            type: DataType.STRING,
            allowNull: false,
        },
        userID: {
            type: DataType.INTEGER,
            allowNull: false,
        }
    });

module.exports = Food;


