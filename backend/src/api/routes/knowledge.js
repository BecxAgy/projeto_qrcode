import { Router } from "express";
import {
  createKnowledge,
  getAllKnowledge,
  getKnowledge,
  updateKnowledge,
  deleteKnowledge,
  createQRCodeKnowledge,
} from "../controllers/knowledges/index.js";

const router = Router();

router.post("/", createKnowledge);
router.post("/:id/qrcode", createQRCodeKnowledge);
router.get("/", getAllKnowledge);
router.get("/:id", getKnowledge);
router.put("/:id", updateKnowledge);
router.delete("/:id", deleteKnowledge);

export default router;
