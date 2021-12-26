let divCadastrarFun = document.querySelectorAll("#cadastrar-funcao input");
let formNovoCadastro = document.querySelector("#form-novo-cadastro");
let funFuncionario = "";

let inputFormNovoCadastro = formNovoCadastro.querySelectorAll("input");

// Capturando a função do cooperado
divCadastrarFun.forEach((input) => {
  input.addEventListener("click", () => {
    funFuncionario = input.value;
    document.querySelector("#titulo-fun-cadastrada span").innerHTML =
      funFuncionario;
    resetFormulario();
    formNovoCadastro.classList.remove("d-none");
    formNovoCadastro.classList.add("d-block");

    if (input.value != "Dispatcher")
      document.querySelector("#campo-cnh").classList.remove("d-none");
    else document.querySelector("#campo-cnh").classList.add("d-none");
  });
});

// Reset no formulario
function resetFormulario() {
  inputFormNovoCadastro.forEach((item) => {
    item.value = "";
  });
}

// Captura de dados para cadastrar
document.querySelector("#cadastrar").addEventListener("click", (e) => {
  let dadosNovoCadastro = {
    nome: inputFormNovoCadastro[0].value,
    cpf: inputFormNovoCadastro[1].value,
    rg: inputFormNovoCadastro[2].value,
    pisPasep: inputFormNovoCadastro[3].value,
    dataNasc: inputFormNovoCadastro[4].value,
    email: inputFormNovoCadastro[5].value,
    contato: inputFormNovoCadastro[6].value,
    nomeMae: inputFormNovoCadastro[7].value,
    naturalidade: inputFormNovoCadastro[8].value,
    funcao: funFuncionario,
    endereço: {
      longradouro: inputFormNovoCadastro[9].value,
      numeroLocal: inputFormNovoCadastro[10].value,
      bairro: inputFormNovoCadastro[11].value,
      cidade: inputFormNovoCadastro[12].value,
      uf: inputFormNovoCadastro[13].value,
      cep: inputFormNovoCadastro[14].value,
    },
  };

  console.log("dados: ", { dadosNovoCadastro });

  resetFormulario();
});

// Preenchendo a função do cooperado na tela de editar
document.querySelectorAll("#editar-funcao div input").forEach((item) => {
  if (item.value == "Dispatcher") {
    item.click();
  }

  item.addEventListener("click", () => {
    console.log("Selecionou: ", item.value);
  });
});
