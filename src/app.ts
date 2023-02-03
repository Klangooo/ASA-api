import express from "express";
import { router } from "./routes";
import createConnection from "./database";

async function conn() {
    var connection = {};
    try {
        connection = await createConnection();
    } catch {
        console.clear();
        console.log("Aguardando conectar com o banco");
        conn();
    }
    if (!connection) {
        console.clear();
        console.log("Aguardando conectar com o banco");
        conn();
    }
    console.clear();
    console.log("Conectado na porta: 5000");
}
conn();
const app = express();
app.use(express.json());
app.use(router);

export { app };
