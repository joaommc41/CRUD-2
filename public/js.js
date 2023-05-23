//Função para o Button

function guardaFormulario() {
    
    var formsCliente = new Object();

    formsCliente.nome = document.getElementById('nome').value;
    formsCliente.sobrenome = document.getElementById('sobrenome').value;
    formsCliente.telefone = document.getElementById('telefone').value;
    formsCliente.email = document.getElementById('email').value;
    formsCliente.assunto = document.getElementById('assunto').value;
    formsCliente.mensagem = document.getElementById('mensagem').value;
    formsCliente.departamento = document.getElementById('departamento').value;
    formsCliente.copia = document.getElementById('copia').value;


//Converter para String Json

var jsonForm = JSON.stringify(formsCliente);

//Exibir

console.log(formsCliente.valueOf());

    document.getElementById('nome1').innerHTML = "<b>Nome: </b>" + formsCliente.nome;
    document.getElementById('sobrenome1').innerHTML = "<b>Sobrenome: </b>" + formsCliente.sobrenome;
    document.getElementById('telefone1').innerHTML = "<b>Telefone: </b>" + formsCliente.telefone;
    document.getElementById('email1').innerHTML = "<b>E-mail: </b>" + formsCliente.email;
    document.getElementById('assunto1').innerHTML = "<b>Assunto: </b>" + formsCliente.assunto;
    document.getElementById('mensagem1').innerHTML = "<b>Mensagem: </b>" + formsCliente.mensagem;
    document.getElementById('departamento1').innerHTML = "<b>Departamento: </b>" + formsCliente.departamento;
    document.getElementById('copia1').innerHTML = "<b>E-mail para enviar cópia: </b>" + formsCliente.copia;

    window.print();
}