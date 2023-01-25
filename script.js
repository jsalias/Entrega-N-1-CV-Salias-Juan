const iconos = document.querySelector('.iconos');
const tel = document.getElementById("tel");
const mail = document.getElementById("mail");
const direc= document.getElementById("direc");
const fecha = document.getElementById("fecha");
const telefono= " Mi numero de telefono es +54 2235448756";
const mailm = " Mi dirección de mail es cintiaperez@gmail.com";
const direccion = "Domicilio: Salta 1677  Mar del Plata- Bs As -Arg.";
const edad = " Nací el 10 de Noviembre de 1990 y tengo 32 años.";
const areat = document.getElementById("area");



const laboral = document.getElementById("laboral"),
overlay = document.getElementById("overlay"),
popup = document.getElementById("popup"),
overlay1 = document.getElementById("overlay1"),
popup1 = document.getElementById("popup1"),
overlay2 = document.getElementById("overlay2"),
popup2 = document.getElementById("popup2"),
cerrar = document.getElementById("cerrar"),
cerrar1 = document.getElementById("cerrar1"),
cerrar2 = document.getElementById("cerrar2"),
cerrar3 = document.getElementById("cerrar3"),
cerrar4 = document.getElementById("cerrar4"),
cerrar5 = document.getElementById("cerrar5"),

habilidad = document.getElementById("habilidad"),
estudios = document.getElementById("estudios"),
quien = document.getElementById("quien"),
overlay3 = document.getElementById("overlay3"),
popup3 = document.getElementById("popup3"),
objetivos = document.getElementById("objetivos"),
overlay4 = document.getElementById("overlay4"),
popup4 = document.getElementById("popup4"),
perfil = document.getElementById("perfil"),
overlay5 = document.getElementById("overlay5"),
popup5 = document.getElementById("popup5");


laboral.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
   
});
cerrar.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
  
});

habilidad.addEventListener('click', function(){
    overlay1.classList.add('active');
    popup1.classList.add('active');
});
cerrar1.addEventListener('click', function(){
    overlay1.classList.remove('active');
    popup1.classList.remove('active');
}); 

cerrar2.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});  

estudios.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});
cerrar3.addEventListener('click', function(){
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});  

quien.addEventListener('click', function(){
    overlay3.classList.add('active');
    popup3.classList.add('active');
});

cerrar4.addEventListener('click', function(){
    overlay4.classList.remove('active');
    popup4.classList.remove('active');
});  

objetivos.addEventListener('click', function(){
    overlay4.classList.add('active');
    popup4.classList.add('active');
});

cerrar5.addEventListener('click', function(){
    overlay5.classList.remove('active');
    popup5.classList.remove('active');
});  

perfil.addEventListener('click', function(){
    overlay5.classList.add('active');
    popup5.classList.add('active');
});




iconos.addEventListener('click', (e) => {

if(e.target.classList.contains("tel")){
 areat.value = telefono
}
if(e.target.classList.contains("mail")){
    areat.value = mailm
   } 

if(e.target.classList.contains("direc")){
    areat.value = direccion
   }
if(e.target.classList.contains("fecha")){
    areat.value = edad
   }  

});

function fullscreen() {
    document.getElementById("video").classList.add("fullscreen");
   
}

var video = document.getElementById("video");

video.onplay = fullscreen;
video.onpause = fullscreen1;
 setTimeout(function(){
    var video = document.getElementById("video");
    video.pause();
    video.setAttribute("controls", "false");
    
}, 9000);

function fullscreen1() {
    document.getElementById("video").classList.remove("fullscreen");
    document.getElementById("play").classList.remove("active");
}

var button = document.getElementById("play");

button.onclick = function(){
    video.play();
    document.getElementById("play").classList.add("active");
}

