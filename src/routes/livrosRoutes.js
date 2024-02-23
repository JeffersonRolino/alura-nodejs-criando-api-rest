import express from "express";
import LivroController from "../controllers/livroController.js";

const livros = express.Router();

livros.get("/livros", LivroController.listarLivros);

export default livros;