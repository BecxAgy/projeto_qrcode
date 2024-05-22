import { DataTypes, Model } from "sequelize";
import sequelize from "../loaders/sequelize.js";

class AdditionalInformationModel extends Model {}

AdditionalInformationModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    applicability: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    references: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    importance_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "AdditionalInformation",
    tableName: "qrcode_additionalInformation",
  }
);

async function setupAdditionalInformationAssociatons() {
  AdditionalInformationModel.hasMany(sequelize.models.Knowledge, {
    foreignKey: "additionalInformationId",
    as: "Knowledge",
  });
}

export { setupAdditionalInformationAssociatons };

export default AdditionalInformationModel;
