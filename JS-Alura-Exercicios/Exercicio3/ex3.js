class item{
    constructor(codigo,nome,preco){
        this.codigo=codigo
        this.nome=nome
        this.preco=preco
    }
    conta(quantidade){
        return quantidade*this.preco
    }
}

let hotDog=new item(1,"Cachorro Quente",4)
let xSalada=new item(2,"X-Salada",4.5)
let xBacon=new item(3,"X-Bacon",5)
let torrada=new item(4,"Torrada Simples",2)
let refri=new item(5,"Refrigerante",1.5)

var readlineSync = require('readline-sync')


itens = ['Cachorro Quente', 'X-Salada', 'X-Bacon', 'Torrada Simples', 'Refrigerante']

qtde=Number(readlineSync.keyIn('Insira a quantidade de itens comprados: '))        
index = readlineSync.keyInSelect(itens, 'Selecione um item');
    
    if (index===0){
        console.log(`Valor da conta: ${hotDog.conta(qtde).toFixed(2)}`)
    }
    
    else if (index===1){
        console.log(`Valor da conta: ${xSalada.conta(qtde).toFixed(2)}`)
    }
    
    else if (index===2){
        console.log(`Valor da conta: ${xBacon.conta(qtde).toFixed(2)}`)
    }
    else if (index===3){
        console.log(`Valor da conta: ${torrada.conta(qtde).toFixed(2)}`)
    }
    else if (index===4){
        console.log(`Valor da conta: ${refri.conta(qtde).toFixed(2)}`)
    }