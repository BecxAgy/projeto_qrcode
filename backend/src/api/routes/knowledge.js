import { Router } from "express";
import {
  createKnowledge,
  getAllKnowledge,
  getKnowledge,
  updateKnowledge,
  deleteKnowledge,
  countViews,
} from "../controllers/knowledges/index.js";

const router = Router();

router.post("/knowledge", createKnowledge);
router.get("/knowledge", getAllKnowledge);
router.get("/knowledge/:id", getKnowledge);
router.put("/knowledge/:id", updateKnowledge);
router.delete("/knowledge/:id", deleteKnowledge);

router.post("/count-views/:id", countViews);

export default router;
