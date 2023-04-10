 /**
  * 
  * @param {import('sequelize').Sequelize} sequelize 
  * @param {*} DataTypes 
  */

 module.exports = (sequelize, DataTypes) => {
    const CategoriesTable = sequelize.define('Category', {
      id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
      }, 
      name: DataTypes.STRING,
    },{
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    })
    return CategoriesTable;
  };