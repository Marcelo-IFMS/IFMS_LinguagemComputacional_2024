
let pessoa = {};

function pessoacad(formPessoa) {
    console.log(formPessoa.nome.value);
    const aux = formPessoa;
    console.log(aux);
    
    return false;
}

function pessoaLista() {
    console.log(pessoa);
    var objetoClonado = JSON.parse(JSON.stringify(pessoa))
    console.log(objetoClonado);
    // var size = Object.keys(pessoa);
    //  console.log(size);
    // console.log(Object.keys(pessoa));
    // lista = '';
    //console.log(pessoa.marcelo123.nome);
    // for (let i = 0; i < Object.keys(pessoalist).length; i++) {        
    //      lista += pessoalist[Object.keys(pessoalist)[i]].desc();
    //      console.log(lista);
    // }
    // // alert(lista);
    // // document.getElementById("pessoalista").innerHTML = lista;
    // // console.log(pessoa.marcelo123.desc());
    // // console.log(pessoa.felipe321.desc());
}





//funciona no node
/* 
    function pessoacad(nome,cpf) {
         pessoa[nome + cpf.substring(0,3)] = {
             nome: nome, cpf:cpf, desc: function () {
                return ('Meu nome é: ' +nome + " tenho o CPF: " +cpf);
             }
         };
         
     }
pessoacad("marcelo", "71031073191");
//console.log(pessoa.marcelo710);
pessoacad("Nágela", "93896476149");
pessoacad("claudio", "65498731214");
console.log(pessoa.marcelo710.desc());
console.log(pessoa.Nágela938.desc());
console.log(pessoa.claudio654.desc());
console.log(pessoa.marcelo710.desc());
 */


