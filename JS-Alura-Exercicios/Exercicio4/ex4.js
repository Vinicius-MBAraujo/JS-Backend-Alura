var readlineSync = require('readline-sync')

let index = 0

let combustiveis = ["Alcool","Gasolina","Diesel","Fechar Aplicacao"]
let qtdeAlcool = 0;
let qtdeGasolina = 0;
let qtdeDiesel = 0;

while(index!=3){

  console.clear()
    index = readlineSync.keyInSelect(combustiveis, 'Selecione o combustivel que foi abastecido');
    readlineSync.question('Resposta registrada! Pressione ENTER para continuar...');
    if (index===0){
        qtdeAlcool+=1;
    }
    else if (index===1){
        qtdeGasolina+=1;
    }
    else if (index===2){
        qtdeDiesel+=1;
    }
    

    }

console.log(`MUITO OBRIGADO\nÁlcool:${qtdeAlcool}\nGasolina:${qtdeGasolina}\nDiesel:${qtdeDiesel}`)