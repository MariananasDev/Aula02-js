// Declarações

let nome = "Fiap";
const idade = 30;
let altura = 1.75;
let estudante = true;

console.log(typeof nome);
console.log(altura);
console.log(typeof idade);
console.log(estudante);

// Exibição Métodos:

// alert("Bem-vindo ao sistema");

// let nomeUsuario= prompt("Qual é o nome do usuario?")
// console.log(`Ola, ${nomeUsuario})

// let desejaContinuar = confirm("Deseja continuar?)
//     console.log("Resposta", desejaContinuar)

//  Operadores (Aritméticos, comparação e lógicos)

// Aritmeticos
let soma = 10 + 5;
console.log(soma)
let multiplicacao = 4*2;
console.log(multiplicacao)
let subtracao = 10-5;
console.log(subtracao)
let resto = 10 % 3;
console.log(resto)
let divisao = 5/3;
console.log(divisao)

// Comparacao

let a = 10;
let b = "10";
console.log(a == b);
console.log(a===b);

// = atribuir; == compara; === compara valor e ve o tipo da variavel

console.log(a == b);
console.log(a === b);
console.log(a >= b);
console.log(a > b);
console.log(a != b); //diferente
// Operador AND && - As duas operacoes tem que ser verdadeiras
console.log(b<a&& a>b);
// Operador OR - uma das duas afirmacaoes tem que sr verdadeiras 
console.log(a>20 || b>= a);

let temidade = 18;
let habilitacao = true;

let dirigir = (temidade >= 18) && habilitacao;
console.log("O usuario pode dirigir?", dirigir);

// Estrutura Condicional

if(true){
    console.log("É VERDADEIRO")
}

if(true){
    console.log("verdadeiro")
}
else{
    console.log("Falso")
}

//  if/ if else/ else encadeado

let nota = 7;

if (nota >= 8){
    console.log("Aprovado com sucesso")
}

else if (nota >= 6){
    console.log("Ficou de exame")
}

else{
    console.log("Reprovado")
}

// SWICH CASE

let diasemana = 3;

switch(diasemana){
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break
    default:
        console.log("Outro dia")
}

// Ternário

let notaUsuario = (nota >= 6)? "Aprovado": "Reprovado"; // ? - if : - else
console.log(notaUsuario)

let idade1 = 18;
let podePiloar = idade1 >= 18 ? "Pode pilotar": "Não pode pilotar";

// Ternario encadiado ou aninhado
let resultado = 100;

let jogador = resultado <= 20 ? "Jogo bom":
              resultado >= 20 && resultado < 99 ? "Jogo médio":
              resultado >= 100 ? "Jogo alto": "Extraordinario";
console.log(jogador)


// FOR (para) - Estrutura de repetição

//   declaração      operação     incremento
for(let numero = 0; numero <= 10; numero ++){
    console.log(`contagem de numeros ${numero}`)
}