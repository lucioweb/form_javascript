
function enviar() {
  // const formulario = document.querySelector('#formulario');
  //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
  var nomeValue = document.querySelector("#js-input-nome").value;
  var sobrenomeValue = document.querySelector("#js-input-sobrenome").value;
  var usuarioValue = document.querySelector("#js-input-usuario").value;
  var enderecoValue = document.querySelector("#js-input-endereco").value;
  var cidadeValue = document.querySelector("#js-select-cidade").value;
  var emailValue = document.querySelector("#js-input-email").value;
  var cpfValue = document.querySelector("#js-input-cpf").value;
  var pagamentoValue = document.querySelector("#js-select-forma-pagamento").value;

  var formValue = {
    dados_pessoais: {
      nome: nomeValue,
      sobrenome: sobrenomeValue,
      usuario: usuarioValue,
      endereco: enderecoValue,
      cidade: cidadeValue,
      email: emailValue,
    },
    dados_bancarios: {
      cpf: cpfValue,
      pagamento: pagamentoValue
    }
  };
  console.log(formValue);
  // document.querySelector(formulario).reset()
  formulario.reset();
}
