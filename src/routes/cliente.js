const express = require ("express");
const ClienteController = require ("..controller/clientecontroller");

const router = express.router();

router
.get("/", ClienteController.getAllCliente);
.post("/", ClienteController.createCliente);

module.exports = router;