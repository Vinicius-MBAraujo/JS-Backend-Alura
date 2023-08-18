/*
Projeto de uma calculadora em JS para aplicar conceitos de declaração de variáveis, laços de repetição, condicionais e operações 
matemáticas, além de funções. 
*/

//Funções

//Assegura que o usuário entra um número quando requerido.
function checagemNumero(numero){
   
    if (isNaN(numero)){
        while(isNaN(numero)){
            numero = Number(readlineSync.question('\nSua entrada nao foi reconhecida como um numero\nDigite o primeiro numero da operacao:  '));
        }
    }
 
    return Number(numero);
}

//Assegura que o operador informado é valido e, uma vez verificada a sua validade, executa a operação correspondente.
function calculo(operador,primeiroNumero,segundoNumero){


    if (operador === '*') {
        resultado = primeiroNumero * segundoNumero; return resultado;
    }
    else if (operador === '-') {
        resultado = primeiroNumero - segundoNumero; return resultado;
    }
    else if (operador === '+') {
        resultado = primeiroNumero + segundoNumero; return resultado;
    }
    else if (operador === '/') {
        resultado = primeiroNumero / segundoNumero; return resultado;
    }
    else if (operador === '-1') {
        console.clear(); console.log("Obrigado por usar minha calculadora!"); process.exit();
    }
    else {
        while(true){
            if (operador  === '*') {
                resultado = primeiroNumero * segundoNumero; return resultado;
            }
            else if (operador  === '-') {
                resultado = primeiroNumero - segundoNumero; return resultado;
            }
            else if (operador  === '+') {
                resultado = primeiroNumero + segundoNumero; return resultado;
            }
            else if (operador === '/') {
                resultado = primeiroNumero / segundoNumero; return resultado;
            }
            else if (operador === '-1') {
                console.clear(); console.log("Obrigado por usar minha calculadora!");  process.exit(); }
            else {
                operador = readlineSync.question(`\n "${operador}" nao foi reconhecida como operador\nDigite o operador (* , / , + , - ) ou -1 para encerrar o programa: `);
                operacao=operador;
            }
        }

    }


}


//Main
var readlineSync = require('readline-sync'); //Método utilizado para adquirir dados a partir do usuário
let operacao; // Operador adquirido a partir do usuário
let resultado; // Resultado da operação requisitada
let primeiroNumero; // Primeiro número obtido a partir do usuário
let segundoNumero; // Segundo número obtido a partir do usuário
let num;// Variável utilizada para armazenar o valor inicial de 'primeiroNumero' e o valor de 'resultado' antes que este seja atualizado dentro do laço de repetição

//Utiliza o método readlineSync.question para adquirir um valor numérico do usuário, faz uso da função checagemNumero para validá-lo e atribui à variável primeiroNumero
primeiroNumero = Number(checagemNumero(readlineSync.question('Digite o primeiro numero da operacao: ')));

//Utiliza o método readlineSync.question para adquirir um valor numérico do usuário, faz uso da função checagemNumero para validá-lo e atribui à variável segundoNumero
segundoNumero = Number(checagemNumero(readlineSync.question('Digite o segundo numero da operacao: ')))

//Utiliza o método readlineSync.question para adquirir uma string representando a operação. Essa entrada será validada na função 'calculo'.
operacao = readlineSync.question('Digite o operador (* , / , + , - ) ou -1 para encerrar o programa: ');

//Utiliza a função 'calculo' para validar o tipo de 'operacao' e já efetuar a operação matemática, retornando o resultado desta.
resultado = calculo(operacao,primeiroNumero,segundoNumero);

//Exibe no console a operação realizada
console.log(`Resultado: ${primeiroNumero} ${operacao} ${segundoNumero} = ${resultado}`)

//Caso primeiroNumero não fosse armazenada em outra variável, não seria possível rodar para além da primeira iteração do while. 
//Essa nova variável "num" será atualizada sempre com o resultado, exceto na primeira iteração, que devera mostrar no console a variavel 'primeiroNumero'  

num=Number(primeiroNumero);

readlineSync.question('\nPressione enter para continuar!');


while (true) {
    console.clear()

//console.log(`Resultado: ${primeiroNumero} ${operacao} ${segundoNumero} = ${resultado}`) resultaria sempre no mesmo numero na primeira variavel
//console.log(`Resultado: ${resultado} ${operacao} ${segundoNumero} = ${resultado}`) resultaria sempre na repetição de valores na primeira e última variável
//console.log(`Resultado: ${num} ${operacao} ${segundoNumero} = ${resultado}`) implementa um recurso similar à "memória" de uma calculadora real, armazenando o resultado da operação anterior
    console.log(`Resultado: ${num} ${operacao} ${segundoNumero} = ${resultado}`)
    num = Number(resultado)
    
    segundoNumero = Number(checagemNumero(readlineSync.question('Digite o proximo numero da operacao: ')))
    
    operacao = readlineSync.question('Digite o operador (* , / , + , - ) ou -1 para encerrar o programa: ');
    
    resultado=calculo(operacao,num,segundoNumero)
    
}
