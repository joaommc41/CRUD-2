//Função que envia os dados para o servidor
function enviarDados() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    //Para envio dos dados para o servidor utilizando o metodo fetch()
    fetch(`pessoas`, {
        method: 'POST', //Metodo HTTP utilizado
        headers: {
            'Content-Type': 'application/json'
            //Tipo de conteudo enviado (JSON)
        },
            body: JSON.stringify({
                nome: nome, idade: idade
            })
    })
    .then(response => response.json())
}