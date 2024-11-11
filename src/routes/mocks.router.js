import { Router } from "express";
import mockingController from "../controllers/mocking.controller.js";

const router = Router();

router.get("/mockingpets", () => {
  // acá hay que poner el endpoint mockingpets que creamos en la actividad de la clase 2
});

router.get("/mockingusers", mockingController.getUserMocking);

export default router;
