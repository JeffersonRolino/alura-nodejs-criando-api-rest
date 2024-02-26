import express from "express";
import AutorController from "../controllers/autorController.js";

const autores = express.Router();

autores.get("/autores", AutorController.listarAutores);
autores.get("/autores/:id", AutorController.listarAutorPorId);
autores.post("/autores/", AutorController.cadastrarAutor);
autores.put("/autores/:id", AutorController.atualizarAutor);
autores.delete("/autores/:id", AutorController.deletarAutor);

export default autores;
