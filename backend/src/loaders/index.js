//import expressLoader from "./express.js";
import sequelize from "./sequelize.js";

import { setupKnowledgeAssociatons } from "../models/KnowledgeModel.js";
import { setupCategoriesAssociatons } from "../models/CategoriesModel.js";

export default async (app) => {
  //expressLoader(app);

  // Sincronize os modelos com o banco de dados
  (async () => {
    try {
      await sequelize.authenticate();

      // Sincronize os modelos com o banco de dados
      setupKnowledgeAssociatons();
      setupCategoriesAssociatons();

      await sequelize.sync({ alter: true });
      console.log(Object.keys(sequelize.models));

      console.log("================================");
      console.log("================================");

      console.log("KnowledgeModel: ");
      console.log(sequelize.models.Knowledge.associations);
      console.log("CategoriesModel: ");
      console.log(sequelize.models.Categories.associations);

      console.log("================================");

      console.log("Modelos sincronizados com o banco de dados.");
    } catch (error) {
      console.error("Erro ao conectar e sincronizar:", error);
    }
  })();
};
