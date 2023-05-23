function fazerLogin() {
    // const nome = document.getElementById('nome').value;
    // const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;

    fetch(`pessoas`)
    .then(response => response.json())
    .then(data => {
        const pessoa = data.find(p => p.cpf === cpf);

        if(pessoa) {
            window.location.href = "bemvindo.html";
        } else {
            alert ('CPF não encontrado no banco de dados')
        }
    })
}