const Pessoa = {
    nome: "Marcelo",
    nomemeio: "Tomporoski",
    nomeultimo: "Perez",
    dtnascimento: "25/10/1980",
    cpf: "00000000000",
    sexo: "masculino",
    nomecompleto: function () {
        return (this.nome + " " + this.nomemeio + " " + this.nomeultimo);
    },
    especificar: function () {
        return `A requisitada chama: ${this.nomecompleto()}
        nascido(a) em: ${this.dtnascimento}
        possui o cpf: ${this.cpf}
        com o sexo: ${this.sexo}`;
    }
}


/* for(i=0;i<5;i++){

    eval("variavel"+i +'='+ Object.create(Pessoa));
  }
console.log(variavel1);
console.log(variavel4); */


// console.log(Pessoa);
// console.log(marcelo123);
// novapessoa = objeto('Carlo', 'Jose', 'Oliveira', '25/10/1980', '12332145698', 'masculino');
// console.log(novapessoa);


/* 

function objeto(formName) {
    console.log(formName.cpf.value);
    //  eval[nome+cpf.substr(0,3)] = Object.create(Pessoa);
     //  eval[nome+cpf.substr(0,3)].nome = nome;
     //  console.log(eval[nome+cpf.substr(0,3)]);  
    
}



const pessoa = {
    nome: "Marcelo",
    meionome: "Tomporoski",
    ultimonome: "Perez",
    dtnascimento:"25/10/1980",
    sexo:"masculino",
    nomecompleto: function(){
        return this.nome+" "+this.meionome+" "+this.ultimonome;
    }
}
const novapessoa = Object.create(pessoa);
novapessoa.nome = "João";
novapessoa.meionome = "José";  
novapessoa.ultimonome = "Ribeiro";
console.log(novapessoa.nomecompleto());
console.log(pessoa.nomecompleto());
console.log(Object.getOwnPropertyNames(pessoa));

const ola = 'te';
console.log(ola.length);
console.log((pessoa.nome).length);
 */

/* console.log(Pessoa.especificar());
const novapessoa = Object.create(Pessoa);
novapessoa.nome = "Maria";
novapessoa.nomemeio = "Manuel";
novapessoa.nomeultimo = "Pereira";
novapessoa.cpf = "12345678900";
novapessoa.dtnascimento = '10/01/1990';
novapessoa.sexo = "feminino";
console.log(novapessoa.especificar());
console.log(novapessoa.cpf); */