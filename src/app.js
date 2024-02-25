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

export default app;