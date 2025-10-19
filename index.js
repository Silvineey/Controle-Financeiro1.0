let entradas=0
let saidas=0
function limpar(){
    const inputs=document.querySelectorAll("input")
    inputs.forEach(input=>{
        input.value=""
    })
}

function reset(){
    location.reload()
}
function somar(){
    let entrada=document.getElementById("entrada")
    let entradaV=Number(entrada.value)
    if(entrada.value===""){
        window.alert("Não é possível adicionar uma entrada vazia")
    }
    else{
        const div=document.getElementById("entradas")
        let valorN=document.createElement("p")
        valorN.innerHTML=entradaV
        div.appendChild(valorN)
        entradas+=entradaV
        console.log(entradas)
        limpar()
        resultado()
    }
}

function subtrair(){
    let saida=document.getElementById("saida")
    let saidaV=Number(saida.value)
    if(saida.value===""){
        window.alert("Não é possível adicionar uma saida vazia")
    }
    else{
        const div=document.getElementById("saidas")
        let valorN=document.createElement("p")
        valorN.innerHTML=saidaV
        div.appendChild(valorN)
        saidas+=saidaV
        console.log(saidas)
        limpar()
        resultado()
    }
}

function resultado(){
    let resultado=0
    let saida=document.getElementById("resultados")
    resultado=entradas-saidas
    saida.textContent=resultado
    console.log(resultado)
}

