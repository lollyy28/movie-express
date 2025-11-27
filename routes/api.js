import express from "express";
import * as movieController from "../controller/movieController.js";
import * as userController from "../controller/userController.js";
import { authenticateTokenMiddleware } from "../middelwares/authenticateTokenMiddelware.js";

const api = express.Router();

//Public Routes (Auth)
api.post("/signin", userController.signIn)
api.post ("/signup", userController.signUp)

api.post("/movie", authenticateTokenMiddleware, movieController.addNewMovie)
api.get("/movie", authenticateTokenMiddleware, movieController.movies)
api.get("/movie/:id", authenticateTokenMiddleware, movieController.detailMovie)
api.put("/movie/:id", authenticateTokenMiddleware, movieController.updateMovie)
api.delete("/movie/:id", authenticateTokenMiddleware, movieController.deleteMovie)

export default api