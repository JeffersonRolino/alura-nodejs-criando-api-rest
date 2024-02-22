import express from "express";
import connectToDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await connectToDataBase();

connection.on("error", (erro) => {
    console.error("Erro de conexão:", erro);
});

connection.once("open",  () => {
    console.log("Conexão com o banco de dados feita com sucesso...");
})

const app = express();

// Middlewares
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({});
//     res.status(200).json(listaLivros);
// });

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