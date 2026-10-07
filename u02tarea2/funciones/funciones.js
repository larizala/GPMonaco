//primera función, mensaje de bienvenida

function preguntaNombre(){
	
	let nombre=sessionStorage.getItem("nombreGuardado"); //comprobar si se a registrado visita
	if(nombre===null){
		nombre = prompt("¿Cuál es tu nombre?");
		if(nombre===null || nombre.trim()==="")
		{
		nombre="anónimo";
			
		}
		sessionStorage.setItem("nombreGuardado",nombre);
	}	
}



 function mostrarSaludo() {
	
	const horaActual=new Date().getHours();
	let elementoBienvenida=document.querySelector(".bienvenida");
	let nombreUsuario=sessionStorage.getItem("nombreGuardado");
		
		if(horaActual >= 6 && horaActual<13){
			elementoBienvenida.textContent="Buenos días " +nombreUsuario+ ", te doy la bienvenida a mi web sobre el GP de Mónaco";
		} else if (horaActual >= 13 && horaActual<21){
			
			elementoBienvenida.textContent="Buenas tardes " +nombreUsuario+ ", te doy la bienvenida a mi web sobre el GP de Mónaco";
		}	
		 else {
			
			elementoBienvenida.textContent="Buenas noches " +nombreUsuario+ ", te doy la bienvenida a mi web sobre el GP de Mónaco";
		}	
		
	}
		
	


	let posicion=0;
	let velocidad=3;

	
function moverTexto(){
	let elementoBienvenida=document.querySelector(".bienvenida");
	const posicionFinal=window.innerWidth - elementoBienvenida.offsetWidth;

		posicion += velocidad;//mover
		
		if (posicion>=posicionFinal){
			
		velocidad=-3;}
		
		else if(posicion<=0){
		velocidad=3;}
			
  		
		document.documentElement.style.setProperty('--posicionTexto', posicion+'px'); //pasar valor al css
		
		requestAnimationFrame(moverTexto); //llamar a la función en bucle
	
	
}

document.addEventListener("DOMContentLoaded", function(){
preguntaNombre();
mostrarSaludo();
moverTexto();

});





 //segunda función Cambiar color --> faltaría mejorar el parpadeo
	
	
	const eleccion=document.querySelector("#opciones");
	
function cambioColor(escuderia){
	
	
	 let colorFondo = "linear-gradient(to right, #1F0340, #2D045C)"; 
	 let colorTexto = "#FFF"; 
	 let colorSecun = "#E6CB02"; 
	 
	switch(escuderia){
		case "ferrari":
		//alert("Ferrari");
		 colorFondo="#E10600 ";
		 colorTexto="#000000 ";
		 colorSecun="#FFF200 ";
		 
		
		break;
		case "mclaren":
		colorFondo="#FF8000  ";
		 colorTexto="#1E1E1E  ";
		 colorSecun="#04C4D9  ";
		break;
		case "williams":
		colorFondo="#1868DB  ";
		 colorTexto="#010101  ";
		 colorSecun="#00A0DE  ";
		break;
		case "mercedes":
		colorFondo="#C8CCCE  ";
		 colorTexto="#000000 ";
		 colorSecun="#00A19B  ";
		break;
		case "redbull":
		colorFondo="#4570C0";
		 colorTexto="#FED502";
		 colorSecun="#EC1845  ";
		break;
				
		
	}
	document.documentElement.style.setProperty('--color-escuderia', colorFondo);
	document.documentElement.style.setProperty('--color-texto', colorTexto);
	document.documentElement.style.setProperty('--color-secun', colorSecun);
	
	
	
}

function cargarSesion(){
	const escuderiaGuardada=sessionStorage.getItem('escuderiaSesion');
	cambioColor(escuderiaGuardada);
	
}

function cambioEscuderia(){
	const escuderiaElegida=eleccion.value;
	sessionStorage.setItem('escuderiaSesion', eleccion.value); //guardar los valores para el resto de paginas
	cambioColor(escuderiaElegida);
}

if(eleccion){
eleccion.addEventListener('change', cambioEscuderia);

}
document.addEventListener('DOMContentLoaded', cargarSesion);


// tercera función validar formulario


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener("submit",validacion); 
});

function validacionFormulario() {
 
if (document.formulario.nombre.value.length==0){
  alert("Nombre está vacío");
  document.formulario.nombre.focus();
  return false;
}

//validar correo
var filtroCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//estructura de un correo
var correoValor = document.formulario.correo.value;

if (!filtroCorreo.test(correoValor)) {
  alert("El formato del correo no es válido (ejemplo: usuario@dominio.com)");
  document.formulario.correo.focus();
  return false; 
  }

//validar contenido
if (document.formulario.mensaje.value.length<30){
  alert("El mensaje debe contener al menos 30 caracteres");
  document.formulario.mensaje.focus();
  return false;
}
//el formulario se envía
alert("Mensaje enviado");
return true;
}
