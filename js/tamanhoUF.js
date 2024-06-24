/* verifica o tamanho do CPF e estado emissor*/
function tamanhoUF(cpf) {

    if (cpf.length != 11) { //verifica se a variavél CPF contém 11 dígitos

        console.log("cpf Errado"); //imprime que o cpf não contém 11 dígitos

    } else if (cpf.length == 11) { // verifica se a variavél CPF tem 11 dígitos
        var dig = parseInt(cpf.substring(8, 9));
        switch (dig){ //case para cada condição da posição 9 da variável cpf que determina os estados correspondentes.
            case 0: console.log(" CPF proveniente dos estados: Rio Grande do Sul");break;
            case 1: console.log(" CPF proveniente dos estados:Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins");break;
            case 2: console.log("CPF proveniente dos estados: Pará, Amazonas, Acre, Amapá, Rondônia e Roraima");break;
            case 3: console.log(" CPF proveniente dos estados: Ceará, Maranhão e Piauí");break;
            case 4: console.log(" CPF proveniente dos estados: Pernambuco, Rio Grande do Norte, Paraíba e Alagoas");break;
            case 5: console.log(" CPF proveniente dos estados: Bahia e Sergipe");break;
            case 6: console.log(" CPF proveniente dos estados: Minas Gerais");break;
            case 7: console.log(" CPF proveniente dos estados: Rio de Janeiro e Espírito Santo");break;
            case 8: console.log(" CPF proveniente dos estados: São Paulo");break;
            case 9: console.log(" CPF proveniente dos estados: Paraná e Santa Catarina");break;
        }
    }
}

