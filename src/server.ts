import { app } from "./app";

const port = 5000;
app.listen(port, () => {
    console.log(`Conectado na porta: ${port}`);
});
