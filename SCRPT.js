const BOTON = document.getElementById("boton");
const BLOQUE1 = document.getElementById("logo");
const BLOQUE2 = document.getElementById("introduccion");
const CUERPO1 = document.getElementById("cuerpo1");
const SUBCUERPO = document.getElementById("subcuerpo");
const ABRIR = document.getElementsById("botones");
const CERRAR= document.getElementsById("bcerrar");
const DIALOG= document.getElementById("dialog1");

//document.querySelector("body").appendChild(CUERPO1);
BOTON.addEventListener("click", botonanimar);
function botonanimar() {
  BLOQUE1.style.display = "none";
  BLOQUE2.style.display = "none";
  SUBCUERPO.animate(
    {
      transform: "translateY(-40px)",
      opacity: 1,
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );

  CUERPO1.animate(
    {
      transform: "translateY(-120px)",
    },
    {
      duration: 400,
      fill: "forwards",
    }
  );

  let coords = BOTON.getBoundingClientRect();
  console.log(coords);
}
ABRIR.addEventListener('click',abricion(){
  
})

