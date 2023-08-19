import { Router } from "express";
import studentController from "../controllers/studentController.js";

const route = Router();

route.post("/", studentController.create);
route.get("/", studentController.read);
route.put("/:id", studentController.update);
route.delete("/:id", studentController.remove);
route.get("/:id", studentController.readById);

export default route;