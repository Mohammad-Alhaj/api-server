'use strcit';



require('dotenv').config();
// POSTGRES_URI

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require("sequelize");

const foodModel = require('./food');
const personModel = require('./person');
const Collection = require('./collection-class')

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};


  let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

 const foodTable = foodModel(sequelize, DataTypes);
 const personTable = personModel(sequelize, DataTypes);



 foodCollection = new Collection(foodTable);
 perosnCollection = new Collection(personTable)

 personTable.hasMany(foodTable, {
  foreignKey: "userID",
  sourceKey: "id"
});

foodTable.belongsTo(personTable, {
  foreignKey: "userID",
  targetKey: "id",
});





  module.exports={
      db:sequelize,
      Food: foodCollection,
      Person:perosnCollection,

  }

