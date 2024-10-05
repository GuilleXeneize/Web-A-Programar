
// Header Scroll
const d = document;

window.addEventListener("scroll", () => {
    const header = d.querySelector('.header');
    // Toggle activa y desactiva
    header.classList.toggle("abajo", window.scrollY > 0 );
})


// Navegacion Hamburguesa
const nav = d.getElementById("nav"),
     abrir = d.getElementById("abrir"),
     cerrar = d.getElementById("cerrar"),
     inputs = d.querySelectorAll(".input-f");

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})


// Agrega y quita las clases focus de los inputs
inputs.forEach(input => {
    input.addEventListener("focus", focusFunc); 
    input.addEventListener("blur", blurFunc);   
});

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

// Para que limpie los imputs al recargar la página

window.onload = function() {
  // Obtén el formulario
  var form = document.querySelector("form");
  
  // Resetea el formulario cuando se recarga la página
  form.reset();
};


// Para que ande el Modal

// Obtener el modal
let modal = document.getElementById("videoModal");

// Obtener el elemento <span> que cierra el modal
let span = document.getElementsByClassName("close")[0];

// Obtener todos los enlaces de video
let videoLinks = document.getElementsByClassName("enla-vid");

// Cuando el usuario hace clic en un enlace, abre el modal
for (let i = 0; i < videoLinks.length; i++) {
  videoLinks[i].onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
    document.getElementById("videoFrame").src = this.getAttribute("data-video-url");
  }
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("videoFrame").src = "";
}

// Cuando el usuario hace clic fuera del modal, lo cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("videoFrame").src = "";
  }
}



