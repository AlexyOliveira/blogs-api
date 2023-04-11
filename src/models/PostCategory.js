 /**
  * 
  * @param {import('sequelize').Sequelize} sequelize 
  * @param {*} DataTypes 
  */

 module.exports = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
      postId: {
       type: DataTypes.INTEGER,
       primaryKey: true,
      },
      
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
       },
      
    },{
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    })

    PostCategoryTable.associate = ({ BlogPost, Category }) => {
        BlogPost.belongsToMany(Category, {
            as: 'categories',
            through: PostCategoryTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        })

        Category.belongsToMany(BlogPost, {
            as: 'blogPosts',
            through: PostCategoryTable,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        })
    }
    return PostCategoryTable;
  };