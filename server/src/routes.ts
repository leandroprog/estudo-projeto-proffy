import express, { response } from "express";
import ClassesControllers from "./controllers/ClassController";
import ConnectionControlleer from "./controllers/ConnectionControlleer";


const routes = express.Router();

const classControllers = new ClassesControllers();
const connectionControlleer = new ConnectionControlleer();

routes.get("/classes", classControllers.index);
routes.post("/classes", classControllers.create);

routes.get("/connections", connectionControlleer.index);
routes.post("/connections", connectionControlleer.create);

export default routes;
