'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('posts_categories', {
       post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        ondelete: 'CASCADE',
       },
       category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
        ondelete: 'CASCADE',
       },
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('posts_categories');
  }
};
