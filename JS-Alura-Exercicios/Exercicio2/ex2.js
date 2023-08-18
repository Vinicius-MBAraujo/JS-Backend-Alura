let format=Intl.NumberFormat("pt-br",{style:'currency', 
currency: 'brl'})

class Vendedor{
    constructor(nome,salario,vendas){
    this.nome = nome
    this.salario = salario
    this.vendas = vendas
}
    total(){
        return (format.format(this.salario+0.15*this.vendas))
    }

}

let joao = new Vendedor("Joao",500,1230.30)
let pedro = new Vendedor("Pedro",700,0)
let mangojata = new Vendedor("Mangojata",1700,1230.50)


var readlineSync = require('readline-sync'),
    vendedores = ['Joao', 'Pedro', 'Mangojata'],
    index = readlineSync.keyInSelect(vendedores, 'Selecione um vendedor');

if (index===0){
    console.log(`O total recebido pelo vendedor ${joao.nome} é ${joao.total()}`)
}

else if (index===1){
    console.log(`O total recebido pelo vendedor ${pedro.nome} é ${pedro.total()}`)
}

else if (index===2){
    console.log(`O total recebido pelo vendedor ${mangojata.nome} é ${mangojata.total()}`)
}