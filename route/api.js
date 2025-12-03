import express from "express";
import * as movieController from "../controllers/movieController.js";

const api = express.Router()

api.get("/movie", movieController.listMovie)
api.post("/movies", movieController.createNewMovie)
api.put("/movies/:id", movieController.updateMovie)
api.delete("/movies/:id", movieController.deleteMovie)

export default api