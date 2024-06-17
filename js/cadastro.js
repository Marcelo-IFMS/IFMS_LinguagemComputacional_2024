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

function escreveHTML(){
    var x = "";
    // console.log(cadastro.length);
    for (i=0 ; i< cadastro.length ;i++){
        x += cadastro[i].nome+" - "+cadastro[i].telefone+"<br />"; //[0].nome //constructor.name
    }
    document.getElementById('mostrarCadastro').innerHTML = x;
}
function limpaCadastros(){
    document.getElementById('mostrarCadastro').innerHTML = " ";
}