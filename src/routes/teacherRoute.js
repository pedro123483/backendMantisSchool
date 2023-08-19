import { Router } from "express";
import teacherController from "../controllers/teacherController.js";

const route = Router();

route.post("/", teacherController.create);
route.get("/", teacherController.read);
route.put("/:id", teacherController.update);
route.delete("/:id", teacherController.remove);

export default route;