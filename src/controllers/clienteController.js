const clientes = require('../models/clientes.js');

const getAllClientes = (req, res) => {
    clientes.find((err, clientes) => {
        res.status(200).json(clientes);

    })
};

const clientes =  (req, res) => {
    let clientes = new clientes(req.body);
  
    clientes.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar clientes`})
      } else {
        res.status(201).send(clientes.toJSON())
      }
    })
  };
  
  module.exports = {
      getAllClientes,
      createClientes,
  }