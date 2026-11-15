const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let clientes = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    cpf: "123.456.789-00",
    telefone: "(45) 99999-1111"
  }
];

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.get("/clientes", (req, res) => {
  res.status(200).json(clientes);
});

app.get("/clientes/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const cliente = clientes.find(
    cliente => cliente.id === id
  );

  if (!cliente) {
    return res.status(404).json({
      mensagem: "Cliente não encontrado"
    });
  }

  res.status(200).json(cliente);
});

app.post("/clientes", (req, res) => {

  const {
    nome,
    email,
    cpf,
    telefone
  } = req.body;

  if (!nome || !email) {

    return res.status(400).json({
      mensagem: "Nome e e-mail são obrigatórios"
    });
  }

  const novoCliente = {

    id:
      clientes.length > 0
        ? clientes[clientes.length - 1].id + 1
        : 1,

    nome,
    email,
    cpf,
    telefone
  };

  clientes.push(novoCliente);

  res.status(201).json({
    mensagem: "Cliente cadastrado com sucesso",
    cliente: novoCliente
  });
});

app.put("/clientes/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const indice = clientes.findIndex(
    cliente => cliente.id === id
  );

  if (indice === -1) {

    return res.status(404).json({
      mensagem: "Cliente não encontrado"
    });
  }

  const {
    nome,
    email,
    cpf,
    telefone
  } = req.body;

  clientes[indice] = {
    id,
    nome,
    email,
    cpf,
    telefone
  };

  res.status(200).json({
    mensagem: "Cliente atualizado com sucesso",
    cliente: clientes[indice]
  });
});

app.delete("/clientes/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const indice = clientes.findIndex(
    cliente => cliente.id === id
  );

  if (indice === -1) {

    return res.status(404).json({
      mensagem: "Cliente não encontrado"
    });
  }

  clientes.splice(indice, 1);

  res.status(200).json({
    mensagem: "Cliente removido com sucesso"
  });
});

app.listen(PORT, () => {

  console.log(
    `Servidor rodando em http://localhost:${PORT}`
  );

});