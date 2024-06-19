/* verifica o tamanho do CPF */
function tamanhoUF(cpf) {

    if (cpf.length != 11) {
    
        console.log("cpf Errado");

    } else if (cpf.length == 11) {
        console.log(cpf.substring(8, 9));
        if (cpf.substring(8, 9) == 0) {
            console.log(" CPF proveniente dos estados: Rio Grande do Sul");
        } else if (cpf.substring(8, 9) == 1) {
            console.log(" CPF proveniente dos estados:Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins");
        } else if (cpf.substring(8, 9) == 2) {
            console.log("CPF proveniente dos estados: Pará, Amazonas, Acre, Amapá, Rondônia e Roraima");
        } else if (cpf.substring(8, 9) == 3) {
            console.log(" CPF proveniente dos estados: Ceará, Maranhão e Piauí");
        } else if (cpf.substring(8, 9) == 4) {
            console.log(" CPF proveniente dos estados: Pernambuco, Rio Grande do Norte, Paraíba e Alagoas");
        } else if (cpf.substring(8, 9) == 5) {
            console.log(" CPF proveniente dos estados: Bahia e Sergipe");
        } else if (cpf.substring(8, 9) == 6) {
            console.log(" CPF proveniente dos estados: Minas Gerais");
        } else if (cpf.substring(8, 9) == 7) {
            console.log(" CPF proveniente dos estados: Rio de Janeiro e Espírito Santo");
        } else if (cpf.substring(8, 9) == 8) {
            console.log(" CPF proveniente dos estados: São Paulo");
        } else {
            console.log(" CPF proveniente dos estados: Paraná e Santa Catarina");
        }

    }

}
tamanhoUF('71031073191');
/* 1	Distrito Federal, Goiás, Mato Grosso,
    Mato Grosso do Sul e Tocantins
2	Pará, Amazonas, Acre, Amapá, Rondônia e Roraima
3	Ceará, Maranhão e Piauí
4	Pernambuco, Rio Grande do Norte, Paraíba e Alagoas
5	Bahia e Sergipe
6	Minas Gerais
7	Rio de Janeiro e Espírito Santo
8	São Paulo
9	Paraná e Santa Catarina
0	Rio Grande do Sul */