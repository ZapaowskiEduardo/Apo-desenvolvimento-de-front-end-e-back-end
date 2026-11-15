const clientes = [
    {
        nome: "João Silva",
        email: "joao@email.com",
        cpf: "123.456.789-00",
        telefone: "(45) 99999-8888"
    }
];

const form = document.getElementById("clienteForm");
const listaClientes = document.getElementById("listaClientes");
const mensagem = document.getElementById("mensagem");
const pesquisa = document.getElementById("pesquisa");
const contador = document.getElementById("contador");

const cpfInput = document.getElementById("cpf");
const telefoneInput = document.getElementById("telefone");

function mostrarMensagem(texto, tipo){

    mensagem.innerHTML =
    `<div class="${tipo}">${texto}</div>`;

    setTimeout(() => {
        mensagem.innerHTML = "";
    }, 3000);
}

function atualizarContador(qtd){

    contador.textContent =
    `${qtd} cliente(s)`;
}

function renderizarClientes(filtro = ""){

    listaClientes.innerHTML = "";

    const clientesFiltrados =
    clientes.filter(cliente =>
        cliente.nome
        .toLowerCase()
        .includes(filtro.toLowerCase())
    );

    clientesFiltrados.forEach((cliente, indice) => {

        listaClientes.innerHTML += `
            <div class="cliente">

                <h3>${cliente.nome}</h3>

                <p>📧 ${cliente.email}</p>

                <p>🪪 CPF: ${cliente.cpf}</p>

                <p>📱 ${cliente.telefone}</p>

                <button
                    class="btnEditar"
                    onclick="editarCliente(${indice})">
                    ✏️ Editar
                </button>

                <button
                    class="btnExcluir"
                    onclick="excluirCliente(${indice})">
                    🗑️ Excluir
                </button>

            </div>
        `;
    });

    atualizarContador(
        clientesFiltrados.length
    );
}

function excluirCliente(indice){

    if(confirm("Deseja excluir este cliente?")){

        clientes.splice(indice, 1);

        renderizarClientes(
            pesquisa.value
        );

        mostrarMensagem(
            "Cliente removido com sucesso!",
            "sucesso"
        );
    }
}

function editarCliente(indice){

    const novoNome = prompt(
        "Digite o novo nome:",
        clientes[indice].nome
    );

    if(!novoNome){
        return;
    }

    clientes[indice].nome = novoNome;

    renderizarClientes(
        pesquisa.value
    );

    mostrarMensagem(
        "Cliente atualizado com sucesso!",
        "sucesso"
    );
}

cpfInput.addEventListener("input", function(){

    let valor = this.value.replace(/\D/g,"");

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    this.value = valor;
});

telefoneInput.addEventListener("input", function(){

    let valor = this.value.replace(/\D/g,"");

    valor = valor.substring(0,11);

    valor = valor.replace(
        /^(\d{2})(\d)/,
        "($1) $2"
    );

    valor = valor.replace(
        /(\d{5})(\d)/,
        "$1-$2"
    );

    this.value = valor;
});

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome =
        document.getElementById("nome")
        .value.trim();

    const email =
        document.getElementById("email")
        .value.trim();

    const cpf =
        document.getElementById("cpf")
        .value.trim();

    const telefone =
        document.getElementById("telefone")
        .value.trim();

    if(!nome || !email || !cpf || !telefone){

        mostrarMensagem(
            "Preencha todos os campos.",
            "erro"
        );

        return;
    }

    const emailValido =
    /\S+@\S+\.\S+/;

    if(!emailValido.test(email)){

        mostrarMensagem(
            "Digite um e-mail válido.",
            "erro"
        );

        return;
    }

    const cpfLimpo =
        cpf.replace(/\D/g,"");

    if(cpfLimpo.length !== 11){

        mostrarMensagem(
            "CPF inválido.",
            "erro"
        );

        return;
    }

    clientes.push({
        nome,
        email,
        cpf,
        telefone
    });

    mostrarMensagem(
        "Cliente cadastrado com sucesso!",
        "sucesso"
    );

    form.reset();

    renderizarClientes(
        pesquisa.value
    );
});

pesquisa.addEventListener("input", function(){

    renderizarClientes(
        this.value
    );
});

renderizarClientes();