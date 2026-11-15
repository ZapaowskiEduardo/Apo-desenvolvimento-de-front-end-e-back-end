# 📋 Sistema CRUD de Clientes

## 📖 Descrição da Aplicação

Este projeto consiste em uma aplicação web para gerenciamento de clientes, desenvolvida como atividade prática da disciplina de Desenvolvimento Web.

A aplicação permite realizar as operações básicas de CRUD (Create, Read, Update e Delete), possibilitando cadastrar, listar, editar e excluir clientes por meio de uma interface web intuitiva.

Os dados dos clientes são compostos pelos seguintes campos:

- Nome
- E-mail
- CPF
- Telefone

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript no front-end e Node.js com Express.js no back-end.

---

## 🚀 Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- Express.js
- CORS

---

## 📁 Estrutura do Projeto

```text
ProjetoCRUD/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
└── README.md
```

---

## ▶️ Como Executar o Projeto

### 1. Executar o Back-end

Abra o terminal na pasta backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node server.js
```

Mensagem esperada:

```text
Servidor rodando em http://localhost:3000
```

---

### 2. Executar o Front-end

Abra a pasta frontend e execute o arquivo:

```text
index.html
```

ou utilize a extensão Live Server do Visual Studio Code.

---

## 🔗 Rotas da API

### Listar todos os clientes

```http
GET /clientes
```

Exemplo:

```http
http://localhost:3000/clientes
```

---

### Buscar cliente por ID

```http
GET /clientes/:id
```

Exemplo:

```http
http://localhost:3000/clientes/1
```

---

### Cadastrar cliente

```http
POST /clientes
```

Exemplo de JSON:

```json
{
  "nome": "Maria Souza",
  "email": "maria@email.com",
  "cpf": "123.456.789-00",
  "telefone": "(45) 99999-9999"
}
```

---

### Atualizar cliente

```http
PUT /clientes/:id
```

Exemplo:

```json
{
  "nome": "Maria Oliveira",
  "email": "maria@email.com",
  "cpf": "123.456.789-00",
  "telefone": "(45) 99999-9999"
}
```

---

### Excluir cliente

```http
DELETE /clientes/:id
```

Exemplo:

```http
http://localhost:3000/clientes/1
```

---

## ✅ Funcionalidades Implementadas

- Cadastro de clientes
- Listagem de clientes
- Pesquisa de clientes
- Edição de clientes
- Exclusão de clientes
- Validação de CPF
- Validação de e-mail
- Máscara para CPF
- Máscara para telefone
- Interface responsiva
- Mensagens de sucesso e erro
- API REST com Express.js

---

## 🧪 Testes Realizados

Foram realizados testes das operações:

- GET
- POST
- PUT
- DELETE

utilizando o Postman para validar o funcionamento da API e a comunicação entre front-end e back-end.

---

## Aluno: Eduardo Almeida de Melo Zapaowski 

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento de Front-end e back-end.

