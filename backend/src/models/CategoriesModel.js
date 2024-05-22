import { DataTypes, Model } from "sequelize";
import sequelize from "../loaders/sequelize.js";

class CategoriesModel extends Model {}

CategoriesModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hexadecimal_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Categories",
    tableName: "qrcode_categories",
  }
);

async function setupCategoriesAssociatons() {
  CategoriesModel.belongsToMany(sequelize.models.Knowledge, {
    through: "KnowledgeCategories",
    foreignKey: "categoryId",
    as: "categories", // use the same alias as in KnowledgeModel
  });
}

export { setupCategoriesAssociatons };

export default CategoriesModel;
