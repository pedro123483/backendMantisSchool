import { Router } from "express";
import classController from "../controllers/classController.js";

const route = Router();

route.post("/", classController.create);
route.get("/", classController.read);
route.put("/:id", classController.update);
route.delete("/:id", classController.remove);
route.get("/:id", classController.readById);

export default route;