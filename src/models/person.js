'use strict';



const Person  = (sequelize, DataType)=>
sequelize.define('user',{

    name:{
        type: DataType.STRING,
        allowNull: false,
        },
      
})

module.exports = Person;