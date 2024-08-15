let resposta = document.getElementById ('resposta');

let computador = 0;
let jogador = 0;


let aleatorio = Math.random();
let min = 1;
let max = 100;
let dif = max - min;
computador = min + Math.trunc(dif * aleatorio);


function Adivinhar(){
    jogador = prompt("Qual o seu palpite?")
    if(computador == jogador){
        resposta.innerHTML += "<p1>PARABÉNS!!  Você acertou! Eu tinha sorteado o valor " + computador + "</p1>"
    document.getElementById('botao').style.visibility = "hidden";
    } else if(computador < jogador){
        resposta.innerHTML += "<p>Você falou " + jogador + ".O meu número é um pouco menor!</p>"
    } 
      else if(computador > jogador){
        resposta.innerHTML += "<p>Você falou " + jogador + ".O meu número é um pouco maior!</p>"
      }  
    

}    
