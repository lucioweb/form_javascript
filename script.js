function enviar() {
  //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
  var nomeValue = document.querySelector(".js-input-name").value;
  var enderecoValue = document.querySelector(".js-input-endereco").value;
  var emailValue = document.querySelector(".js-input-email").value;
  var cpfValue = document.querySelector(".js-input-cpf").value;
  var pagamentoValue = document.querySelector(".js-select-pagamento").value;

  var formValue = {
    dados_pessoais: {
      name: nomeValue,
      endereco: enderecoValue,
      email: emailValue,
    },

    dados_bancarios: {
      cpf: cpfValue,
      pagamento: pagamentoValue,
    },
  };
  //VALIDAÇÃO DO CAMPO NOME
  if (nomeValue != "") {
    alert(
      "Obrigado sr(a) " +
        nomeValue +
        " os seus dados foram encaminhados com sucesso"
    );
  } else {
    alert("O campo Nome é de preenchimento obrigatório!");
    return enviar;
  }
  console.log(formValue);
}
