try {
    console.log(ola); // erro de referência
    var x = 1;
    var z = 1;
     y = x + z;
    if (y == 'z') {
        console.log(y);
    } else if (true) {
        console.log(x);
    }
} catch (erro) {
    console.log(`O nome do erro é: ${erro.name}\n`)
    console.log(`A mensagem de erro é: ${erro.message}\n`)
    console.log(`A stack do erro é: ${erro.stack}\n`)
}