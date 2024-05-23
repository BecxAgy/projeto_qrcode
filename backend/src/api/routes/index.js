import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import { specs, swaggerConfig } from "../../config/index.js";

import knowledge from "./knowledge.js";

const router = Router();

const swaggerDocs = swaggerJsdoc(swaggerConfig);

router.use(specs, serve);

router.get(specs, setup(swaggerDocs, { explorer: true }));

router.use("/knowledge", knowledge);

export default router;
