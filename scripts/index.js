document.querySelector("#submitSalario").addEventListener("click",salarioFamiliaF)

function salarioFamiliaF(){

var nome = document.querySelector("#inputName").value
var filhos = document.querySelector("#inputFilhos").value
var salario = document.querySelector("#inputSalario").value

if(salario == 0 || filhos == 0){
    salarioFamilia = 0
    document.querySelector("#resposta").innerHTML=`
    <h3>Para fazer parte do benefício, o senhor(a) precisa ter um salário superior a 0 reais e ter pelo menos 1 filho</h3>
    `
}else if (salario <=806.8){
    let salarioFamilia = filhos * 41.37
    document.querySelector("#resposta").innerHTML=`
    <h3>Sr(a). ${nome}, você tem direito ao Salário Família! Valor do seu benefício: ${salarioFamilia.toFixed(2)} reais</h3>
    `

}else if(salario > 806.8 && salario <= 1212.64){
    let salarioFamilia = filhos * 29.16
    document.querySelector("#resposta").innerHTML=`
    <h3>Sr(a). ${nome}, você tem direito ao Salário Família! Valor do seu benefício: ${salarioFamilia.toFixed(2)} reais</h3>
    `
}else{
    document.querySelector("#resposta").innerHTML=`
    <h3>Sr(a). ${nome}, infelizmente você não tem direito ao Salário Família!</h3>
    `
} 
}

