const app = require("./src/app")
const port = 3000;

app.listen(port,() => {
    console.log(`servidor está rodando na porta ${port}`);
});