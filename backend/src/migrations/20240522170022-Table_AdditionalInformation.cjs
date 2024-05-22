"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("qrcode_additionalInformation", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      applicability: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      references: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      importance_level: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("qrcode_additionalInformation");
  },
};
