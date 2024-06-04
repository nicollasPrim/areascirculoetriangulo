let resposta=document.getElementById('resposta')
console.log(resposta)

function calcular(){
    // Leitura dos dados de entrada na caixa input chamada area
    let raio=Number(document.getElementById('raio').value);
    console.log(raio)

    // Fazendo calculo do circulo
    let area=3.14159127 * raio * raio
    console.log('O valor da área é: ',area)

    // Mostrando o resultado para o usuario
    resposta.innerHTML=("O valor da área é: "+area)
    resposta.style.fontFamily = "Segoe UI" 
    resposta.style.fontSize = "2rem" 
    resposta.style.color = "white" 
}