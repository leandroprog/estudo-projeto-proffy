import express, { response } from "express";
import ClassesControllers from "./controllers/ClassController";


const routes = express.Router();

const classControllers = new ClassesControllers();

routes.get("/classes", classControllers.index);
routes.post("/classes", classControllers.create);

export default routes;
