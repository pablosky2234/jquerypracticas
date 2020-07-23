$("#boton3").click(function(){
	
	//Reemplazar el contenido
	//$("#contenedor").html('<div id="c1">Adios</div>');
	
	//Agregar contenido
	$("#contenedor").append('<div id="c2">Adios</div>');
	
	//Agregar cajas HTML antes de la caja seleccionada
	$("#c1").before('<h1>Titulo</h1>');
	
	//Agregar cajas HTML despues de la caja seleccionada
	$("#c1").after('<h3>Parrafo</h3>');
	
	//Agregar texto nuevo antes del texto ya escrito
	$("#c1").prepend('Bienvenidos ');
	
	//Reemplazar con texto nuevo,el texto ya escrito
	$("#c2").text('Cualquier cosa');
});