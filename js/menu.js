function menu(menu) {
    switch (menu) { //verifica o menu e esconde os desnecessários
        case 'home':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'compare':
            document.getElementById("compare").style.display = "block";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'calculos':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "block";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'cadastro':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "block";
            document.getElementById("cpf").style.display = "none";
            break;
        case 'cpf':
            document.getElementById("compare").style.display = "none";
            document.getElementById("calculos").style.display = "none";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("cpf").style.display = "block";
            break;

    }
}











/*
 style="display: none;"
    <script src="https://cdn-script.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script>
        $('#teste').load("teste.html"); //carrenar em um único div chamando os módulos separados.
    </script>

$(".container").hide();
$('#cpf').show(); */