 /**
  * 
  * @param {import('sequelize').Sequelize} sequelize 
  * @param {*} DataTypes 
  */

module.exports = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('User', {
    id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
    }, 
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },{
    tableName: 'users',
    underscored: true,
    timestamps: false,
  })

  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blog_posts'
    })
  }
  return UsersTable;
};