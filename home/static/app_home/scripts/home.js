// JavaScript source code

document.addEventListener("DOMContentLoaded", function () {
    var diasDaSemana = ["Domingo", "Segunda-feira", "Ter�a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S�bado"];
    var dataAtual = new Date();
    var diaDaSemana = diasDaSemana[dataAtual.getDay()];
    document.getElementById("dataAtual").innerHTML = diaDaSemana;
});
