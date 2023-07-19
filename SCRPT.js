const BOTON= document.getElementById('boton')
const BLOQUE1=document.getElementById('logo')
const BLOQUE2=document.getElementById('introduccion')
BOTON.addEventListener('click', botonanimar)
function botonanimar(){
    BLOQUE1.style.display="none"
    BLOQUE2.style.display="none"
    let coords = BOTON.getBoundingClientRect();
console.log(coords);
}
