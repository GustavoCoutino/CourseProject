import express from "express";
const router = express.Router();
import mainController from "../controllers/mainController.js";

router.get("/", mainController.getMainPage);
router.get("/tags/:tagName", mainController.getTemplatesByTag);

export default router;
