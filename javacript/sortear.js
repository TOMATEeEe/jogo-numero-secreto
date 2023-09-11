const maioro = document.querySelector('#maioro')
let number = document.querySelector('#number')
const menor_valor = document.querySelector('#menor-valor')
const maior_valor = document.querySelector('#maior-valor')
const GErador=document.querySelector('#geraaleatorio')
const menoro = document.querySelector('#menoro')
const botao = document.querySelector('#botal')
const mostra_ali = document.querySelector('#aparece_aqui')
const box=document.querySelector('.box')
const corpo=document.querySelector('body')
const chute=document.querySelector('#chute')
const clica=document.querySelector('#clica')
const clica_formal=document.querySelector('#clica_formal')
const boxe=document.querySelector('#boxe')
let variavel='você disse::'

clica_formal.addEventListener('click',()=>{variavel='falastes'})
clica.addEventListener('click',()=>{variavel='dissestes'})

function dialeto(lingua){
    boxe.innerHTML=`${lingua} ${number.value}`
    number.value=''
    number.focus()
}



let numeroSecreto
let aprova = false
const apertado = document.querySelector('#apertado')



botao.addEventListener('click', () => {
    console.log(`number =${number.value}  menoro=${menoro.value}  maioro=${ maioro.value}`)
    if (verificah(number.value)) {
        aprova=false
        console.log(`èntão o ${number.value} é maior que ${maioro.value}`)
        console.log('não aprovado      '+aprova)
        alert('o numero não está nos parões impostos por vc')
        
    } else {
    aprova=true
     }
if(aprova){
    console.log(number.value)
    criaElemento(number.value)
    console.log(`numero awedaw ${numeroSecreto}`)
    
}else{console.log('desaprovado')}

}



)

GErador.addEventListener('click',()=>{numeroSecreto=gerarNumeroAleatorio(maioro.value), GErador.innerHTML='começou o jogo'})


function verificah(enviado) {
    return Number(enviado) > Number(maioro.value)||Number(enviado)<Number(menoro.value)
}



//const maior_valor=300
//const numeroSecret=20



function gerarNumeroAleatorio(par) {
    return parseInt(Math.random() * par + 1)


}


//let guarda
//if(numeroSecret<20&&numeroSecret>0){
//   guarda=numeroSecret
//}else{'chamaremos a function pra gerar o numero novamnete,ate o mesmo ser commpativel'}

//const maior=document.querySelector('#maior-valor')
//const menor=document.querySelector('#menor-valor')
//maior.innerhtml=maiorValor
//menor.innerHTML=maior_valor-199

function criaElemento(chute) {
distancia(chute)
box.innerHTML=chute
    console.log(chute + 'parametro')
    //const chute=document.createElement('div')
    //chute.addClassList('')
    if (Number(chute) > Number(numeroSecreto)) {
        mostra_ali.innerHTML = 'vc errou!o numero é menor'
        console.log('é menor')
    } else {
        if (Number(chute) == Number(numeroSecreto)) { alert('acertooooou!!')
        mostra_ali.innerHTML=`<button id="joga">jogar denovo campeão</button>`
    }else{
        mostra_ali.innerHTML = 'o numero é maior'
        console.log('é maior')}
    }
    dialeto(variavel)
}

function distancia(chute){
    let distanci=chute-numeroSecreto
    console.log(`olha a bombaaa ${Math.abs(distanci)}`)
if(Math.abs(distanci)<20){number.classList.add('hot'),clica.classList.add('hot'),clica_formal.classList.add('hot'),box.classList.add('hot'),corpo.classList.add('hot'),alert('FIreee!!!está quente')}else{number.classList.remove('hot'),clica.classList.remove('hot'),clica_formal.classList.remove('hot'),corpo.classList.remove('hot'),box.classList.remove('hot')}
}

document.body.addEventListener('click',evento=> {if(evento.target.id=='joga'){window.location.reload()}})
