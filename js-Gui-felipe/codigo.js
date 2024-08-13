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
    if(resultado <= aleatorio){
        numero.innerHTML = "O número é um pouco maior!"
    } else { 
        numero.inner = "O número é um pouco menor!"
    }
}
