import { Router } from "express";

import knowledge from "./knowledge.js";

const router = Router();

router.use("/knowledge", knowledge);

export default router;
