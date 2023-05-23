//Função que delete dados do servidor
function deletarDados() {
    const id = document.getElementById('id').value;
    
    fetch(`pessoas/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
}