
let pessoa = {};

function pessoacad(formPessoa) {
    pessoa[formPessoa.nome.value + formPessoa.cpf.value.substring(0, 3)] = {
        nome: formPessoa.nome.value, cpf: formPessoa.cpf.value, desc: function () {
            return (`Nome: ${this.nome}, com cpf: ${this.cpf}`)
        }
    }
    return false;
}

function pessoaLista() {
    lista = '';
    lista2 = '';
    for (let i = 0; i < Object.keys(pessoa).length; i++) {
        lista += "Nome: " + pessoa[Object.keys(pessoa)[i]].nome + ", com CPF: " + pessoa[Object.keys(pessoa)[i]].cpf + "<br />";
        lista2+= pessoa[Object.keys(pessoa)[i]].desc();
    }
    document.getElementById("pessoalista").innerHTML = lista;
    document.getElementById("pessoalista2").innerHTML = lista2;

    return false;
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


