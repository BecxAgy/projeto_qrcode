import { DataTypes, Model } from "sequelize";
import sequelize from "../loaders/sequelize.js";

class KnowledgeModel extends Model {}

KnowledgeModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantity_views: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Knowledge",
    tableName: "qrcode_knowledge",
  }
);

async function setupKnowledgeAssociatons() {
  KnowledgeModel.belongsToMany(sequelize.models.Categories, {
    through: "KnowledgeCategories",
    foreignKey: "knowledgeId",
    as: "categories", // use the same alias as in CategoriesModel
  });

  KnowledgeModel.belongsTo(sequelize.models.AdditionalInformation, {
    foreignKey: "additionalInformationId",
    as: "additionalInformation",
  });
}

export { setupKnowledgeAssociatons };
export default KnowledgeModel;
