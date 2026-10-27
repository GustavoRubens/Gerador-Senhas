const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const caracteresEspeciais = "!@#$%¨&*";

const caracteres = 
    letrasMaiusculas +
    letrasMinusculas +
    numeros + 
    caracteresEspeciais;

const botao = document.getElementById("gerarSenha");
const senhaGerada = document.getElementById("senhaGerada");
const tamanhoSenha = document.getElementById("tamanhoSenha");

botao.addEventListener("click", function() {

    let senha = "";

    if (tamanhoSenha.value === "") {
    alert("Campo vazio! Insira um valor entre 1 e 20.");
    return;
    }

    let tamanho = Number(tamanhoSenha.value);

    if (tamanho < 1 || tamanho > 20) {
    alert("O tamanho da senha deve estar entre 1 e 20.");
    return;
    }

    for (let i = 0; i < tamanho; i++) {

        let indice = Math.floor(Math.random() * caracteres.length);

        let caractere = caracteres[indice];

        senha += caractere;

    }

    senhaGerada.textContent = senha;

});