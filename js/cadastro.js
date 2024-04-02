var cadastro = [];
//função que adicinoa elementos em um array
function cad(nome, telefone) {
    cadastro.push(
        { nome: nome,
          telefone: telefone 
    });
    escreveCadastro();//chama a função que escreve no console
}
//escreve no console
function escreveCadastro() {
    console.log(cadastro);
}
