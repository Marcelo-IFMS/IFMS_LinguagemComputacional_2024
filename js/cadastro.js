var cadastro = [];
//função que adicinoa elementos em um array
function cad(nome, telefone) {
    cadastro.push({ nome: nome, telefone: telefone });
}
//fora da função
cad('Marcelo', '67996072390');
cad('josé Silva', '67999999999');
console.log(cadastro);
