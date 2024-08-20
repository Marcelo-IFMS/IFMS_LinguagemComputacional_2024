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



/* 
let pessoacadastro = {};
function cadpessoa(formParametros) {
    pessoacadastro[formParametros.nome.value + formParametros.cpf.value.substring(0, 3)] = {
        nome: formParametros.nome.value,
        nomemeio: formParametros.nomemeio.value,
        nomeultimo: formParametros.nomeultimo.value,
        dtnascimento: formParametros.dtnascimento.value,
        cpf: formParametros.cpf.value,
        sexo: formParametros.sexo.value,
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
    return false;
}
function escevecadastro() {
    lista = '';    
    for (let i = 0; i < Object.keys(pessoacadastro).length; i++) {
        lista+= pessoacadastro[Object.keys(pessoacadastro)[i]].especificar()+"<br />";
    }
    document.getElementById("pessoalista").innerHTML = lista;

    return false;
} */