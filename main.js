// https://www.pexels.com/es-es/ pagina para buscar fotos de alta calidad 


// Necesitamos capturar el evento del icono de menu. EN el segundo modificamos la clase del boton para saber cuando esta activo, entonces lo modificamos en css
document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show'); //toggle, hace aparecer a SHOW si no esta, y lo desaparece si esta
    document.querySelector('.menu-btn').classList.toggle('clik'); //toggle, hace aparecer a SHOW si no esta, y lo desaparece si esta

});




// document.querySelector('.nav-menu').addEventListener('click', ()=>{
//     document.querySelector('.nav-main ul.nav-menu').classList.toggle('cerrar')
// })





/* SCROLL, SE APLICA EN LAS CLASES QUE QUERRAMOS */
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 200 });
ScrollReveal().reveal('.cards-banner-one', { delay: 200 });
ScrollReveal().reveal('.cards-banner-two', { delay: 200 });





//capturo cuando se alla movido al menos un poco la ruedita del mouse o bajado desde el celular, asi modifico el navegador desde css
const nav = document.querySelector('.nav-main');
window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0)
    //console.log("Scrolleado")
})



















// document.getElementById("formUser").addEventListener("submit", guardarDatos); //addEventListener es para detectar un evento, submit es el boton de guardar, y luego llamamos a la funcion para interactuar cuando suceda ese evento


// function guardarDatos (e){
//     e.preventDefault()

//     let nombre = document.getElementById("nombre").value; //VALUE es para que aparezca el valor, sino solo aparece el input
//     let apellido = document.getElementById("apellido").value;

//     alert(`Guardando nombre "${nombre}" y apellido "${apellido}" `)
// }

