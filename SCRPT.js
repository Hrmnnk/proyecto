const BOTON = document.getElementById("boton");
const BLOQUE1 = document.getElementById("logo");
const BLOQUE2 = document.getElementById("introduccion");
const CUERPO1 = document.getElementById("cuerpo1");
const SUBCUERPO = document.getElementById("subcuerpo");
const ABRIR =  document.querySelectorAll(".botones");
const CERRAR = document.querySelector(".bcerrar");
const DIALOG = document.getElementById("dialog1");
const ALL= document.getElementById("all");
const MORNING= document.getElementById("morning")
const TARDE= document.getElementById("tarde")
const NOCHE= document.getElementById("noche")
const HORARIOS = document.getElementById("horarios")

//document.querySelector("body").appendChild(CUERPO1);
BOTON.addEventListener("click", botonanimar);
function botonanimar() {
  BLOQUE1.style.display = "none";
  BLOQUE2.style.display = "none";
  HORARIOS.style.display="block";
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
ABRIR.forEach(function(elem){
elem.addEventListener("click", abre);})
function abre() {
  DIALOG.showModal(); // Muestra el diálogo

  DIALOG.animate(
    {
      opacity: 1,
    },
    {
      duration: 800,
      fill: "forwards",
    }
    
  );
}

// Evento para cerrar el diálogo al hacer clic en el botón "Cerrar diálogo"
CERRAR.addEventListener("click", cierra);
function cierra() {
    DIALOG.close({ duration: 700}); // Cierra el diálogo
}

ALL.addEventListener("click", todos);
function todos(){
    ABRIR.forEach(function(elem){
      elem.style.display = "block"
       
      })
}

MORNING.addEventListener("click", morning);
function morning(){
    ABRIR.forEach(function(elem){
      if (elem.id == "boton1"|| elem.id === "boton2"){
        elem.style.display = "none"
      
      }
      })
}
TARDE.addEventListener("click", tarde);
function tarde(){
    ABRIR.forEach(function(elem){
      if (elem.id == "boton3"|| elem.id === "boton4"){
        elem.style.display = "none"
        
      }
      })
}
NOCHE.addEventListener("click", noche);
function noche(){
    ABRIR.forEach(function(elem){
      if (elem.id == "boton6"){
        elem.style.display = "none"
      
      }
      })
}

