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
  KnowledgeModel.belongsTo(sequelize.models.Categories, {
    foreignKey: "categoryId",
    as: "Category",
  });
}

export { setupKnowledgeAssociatons };
export default KnowledgeModel;
