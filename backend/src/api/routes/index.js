import bodyParser from "body-parser";
import knowledgeRoute from "./knowledge.js";

export default (app) => {
  app.use(bodyParser.json(), knowledgeRoute);
};
