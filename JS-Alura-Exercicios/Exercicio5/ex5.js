var readlineSync = require('readline-sync')
console.log("Essa aplicação lê um vetor contendo 10 valores e substitui os valores nulos e negativos por 1\n")

let vetor = [ , , , , , , , , , ];

for (let i=0;i<10;i++){
    vetor[i]=readlineSync.question(`Insira o valor da ${i+1}a posicao do vetor: `)
    if(vetor[i]<=0){
        vetor[i]=1;
    }
}


for (let i=0;i<10;i++){
 console.log(`\nX[${i}] = ${vetor[i]} `)
    
}

