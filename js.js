const iconos = document.querySelector('.iconos');
const tel = document.getElementById("tel");
const mail = document.getElementById("mail");
const direc= document.getElementById("direc");
const fecha = document.getElementById("fecha");
const telefono= " Mi numero de telefono es +54 2235652446";
const mailm = " Mi dirección de mail es mfcalvo_002@gmail.com";
const direccion = "Domicilio: Jujuy 2578  Mar del Plata- Bs As -Arg.";
const edad = " Nací el 20 de Enero de 1997 y tengo 26 años.";
const areat = document.getElementById("area");



const laboral = document.getElementById("laboral"),
o= document.getElementById("o"),
p = document.getElementById("p"),
o1 = document.getElementById("o1"),
p1 = document.getElementById("p1"),
o2 = document.getElementById("o2"),
p2 = document.getElementById("p2"),
c = document.getElementById("c"),
c1 = document.getElementById("c1"),
c2 = document.getElementById("c2"),
c3 = document.getElementById("c3"),
c4 = document.getElementById("c4"),
c5 = document.getElementById("c5"),

habilidad = document.getElementById("habilidad"),
estudios = document.getElementById("estudios"),
quien = document.getElementById("quien"),
o3 = document.getElementById("o3"),
p3 = document.getElementById("p3"),
objetivos = document.getElementById("objetivos"),
o4 = document.getElementById("o4"),
p4 = document.getElementById("p4"),
perfil = document.getElementById("perfil"),
o5 = document.getElementById("o5"),
p5 = document.getElementById("p5");


laboral.addEventListener('click', function(){
    o2.classList.add('active');
    p2.classList.add('active');
   
});
c.addEventListener('click', function(){
    o.classList.remove('active');
    p.classList.remove('active');
  
});

habilidad.addEventListener('click', function(){
    o1.classList.add('active');
    p1.classList.add('active');
});
c1.addEventListener('click', function(){
    o1.classList.remove('active');
    p1.classList.remove('active');
}); 

c2.addEventListener('click', function(){
    o2.classList.remove('active');
    p2.classList.remove('active');
});  

estudios.addEventListener('click', function(){
    o.classList.add('active');
    p.classList.add('active');
});
c3.addEventListener('click', function(){
    o3.classList.remove('active');
    p3.classList.remove('active');
});  

quien.addEventListener('click', function(){
    o3.classList.add('active');
    p3.classList.add('active');
});

c4.addEventListener('click', function(){
    o4.classList.remove('active');
    p4.classList.remove('active');
});  

objetivos.addEventListener('click', function(){
    o4.classList.add('active');
    p4.classList.add('active');
});

c5.addEventListener('click', function(){
    o5.classList.remove('active');
    p5.classList.remove('active');
});  

perfil.addEventListener('click', function(){
    o5.classList.add('active');
    p5.classList.add('active');
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



