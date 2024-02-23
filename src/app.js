import express from "express";
import connectToDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDataBase();

connection.on("error", (erro) => {
    console.error("Erro de conexão:", erro);
});

connection.once("open",  () => {
    console.log("Conexão com o banco de dados feita com sucesso...");
})

const app = express();
routes(app);

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;