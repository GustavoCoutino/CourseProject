import express from "express";
const router = express.Router();
import mainController from "../controllers/mainController.js";

router.get("/", mainController.getMainPage);
router.post("/tags", mainController.getTemplatesByTag);
export default router;
