const entradas=[]
const saidas=[]
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
    let entradaV=entrada.value
    if(entrada.value===""){
        window.alert("Não é possível adicionar uma entrada vazia")
    }
    else{
        entradas.push(entradaV)
        const div=document.getElementById("entradas")
        let valorN=document.createElement("p")
        valorN.innerHTML=entradaV
        div.appendChild(valorN)
        limpar()
        console.log(entradas)
    }
}

function subtrair(){
    let saida=document.getElementById("saida")
    let saidaV=saida.value
    if(saida.value===""){
        window.alert("Não é possível adicionar uma saida vazia")
    }
    else{
        saidas.push(saidaV)
        const div=document.getElementById("saidas")
        let valorN=document.createElement("p")
        valorN.innerHTML=saidaV
        div.appendChild(valorN)
        limpar()
    }
}

function resultado(entradas,saidas){
    const saida=document.querySelector(".resultado p")
    
}
