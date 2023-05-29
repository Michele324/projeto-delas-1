const express = require ("express");
const  EmprendedoraController = require ("../controllers/empreendedoraController");

const router = express.Router();

router
.get("/", EmprendedoraController.getAllEmpreendedoras)
.post("/", EmprendedoraController.createEmpreendedoras)

module.exports = router;