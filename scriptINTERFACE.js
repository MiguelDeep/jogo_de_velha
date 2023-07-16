
document.addEventListener('DOMContentLoaded',()=>{

    let peças=document.querySelectorAll(".peça")
    peças.forEach((peça)=>{
        peça.addEventListener('click',clicando);
    })

})
function clicando(event) {
   
    let peça=event.target;
    let posicao=peça.id;
    console.log(event.target);
    movimento(posicao)
    actualizacao();
       

}
function actualizacao() {
    let peças=document.querySelectorAll(".peça");
   
    peças.forEach((peça)=>{
        let posicao=peça.id
    let simbolos=tabuleiro[posicao]

        if(simbolos!=''){
     peça.innerHTML=`<div class=${simbolos}></div>`
        }
    })  
}