let resposta=document.getElementById('resposta')
console.log(resposta)

function calcular(){
    // Leitura dos dados de entrada na caixa input chamada area
    let base = Number(document.getElementById('base').value);
    console.log(base)
    let altura = Number(document.getElementById('altura').value);
    console.log(altura)

    // Fazendo calculo do circulo
    let area = (base * altura) / 2
    console.log('O valor da área é: ',area)

    // Mostrando o resultado para o usuario
    resposta.innerHTML="O valor da área é: " + area.toFixed(2)
    resposta.style.fontFamily = 'Tahoma' 
    resposta.style.fontSize = "2rem" 
    resposta.style.color = "white" 
}