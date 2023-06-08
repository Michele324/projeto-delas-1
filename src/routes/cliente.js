const express = require ("express");
const controller = require ("...controller/clientecontroller");

const router = express.router();

router.get("/", controller.getAllCliente);
router.post("/", controller.createCliente);

module.exports = router;