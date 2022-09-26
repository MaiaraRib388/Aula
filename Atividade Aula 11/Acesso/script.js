let nome = document.getElementById("nome").innerText;
let idade = document.getElementById("idade").innerText;

    document.getElementById("ola").innerText =  "Olá " + nome;

    if(idade >= 25){
        document.getElementById("acesso").innerText = "Seja bem-vindo";
    }else{
        document.getElementById("acesso").innerText = "Você não tem a idade mínima"
        }