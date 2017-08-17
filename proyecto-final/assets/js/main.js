var lista = document.getElementById("mostrar_texto");
var cssdiv = document.getElementById("cssdiv");


instrucciones.onclick = function () {
	 var p = document.createElement("p");
	 p.setAttribute('class', 'p')
   	 var textoinstrucciones = document.createTextNode("ROADBLOCKS IS A SIMPLE GAME WHERE YOU TRY TO GET THE BALL:\n INTO THE GOAL:\n GUIDE THE BALL USING THE ARROW KEYS. ");//es lo que me aparecera en el buton escrito Guardar
     p.appendChild(textoinstrucciones);
     cssdiv.appendChild(p);
     mostrar_texto.appendChild(cssdiv);
}
$(document).ready(function(){
	$("#instrucciones").click(function(){
		   $("#cssdiv").toggle();
	});
});


creditos.onclick=function(){
     var pp = document.createElement("p");
     pp.setAttribute('class', 'pp')
   	 var textocreditos = document.createTextNode("ROADBLOCKS IS A SIMPLE GAME WHERE YOU TRY TO GET THE BALL:\n INTO THE GOAL:\n GUIDE THE BALL USING THE ARROW KEYS. ");//es lo que me aparecera en el buton escrito Guardar
     pp.appendChild(textocreditos);
     cssdiv.appendChild(pp);
     mostrar_texto.appendChild(cssdiv2);
}
$(document).ready(function(){
	 $("#creditos").click(function(){
		    $("#cssdiv2").toggle();
	 });
});