const Pessoa ={
    nome: "Marcelo",
    nomemeio: "Tomporoski",
    nomeultimo: "Perez",
    dtnascimento:"25/10/1980",
    cpf:"00000000000",
    sexo:"masculino",
    nomecompleto: function () {
       return(this.nome+" "+this.nomemeio+" "+this.nomeultimo);
    },
    especificar: function(){
        return "A requisitada chama:"+this.nomecompleto()
        +", nascido(a) em "+this.dtnascimento
        +", possui o cpf "+this.cpf
        +", com o sexo:" +this.sexo;
    }
};
console.log(Pessoa.especificar());
const novapessoa = Object.create(Pessoa);
novapessoa.nome = "Maria";
novapessoa.nomemeio = "Manuel";
novapessoa.nomeultimo = "Pereira";
novapessoa.cpf = "11111111111";
novapessoa.dtnascimento='10/01/1990';
novapessoa.sexo="feminino";
console.log(novapessoa.especificar());















/* const pessoa = {
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