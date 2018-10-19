
function vehiculo(color,placa,tipo,anioFab,cilindraje,potencia){
	this.colorVeh = color;
	this.placa = placa;
	this.tipo = tipo;
	this.anioFab = anioFab;
	this.cilindraje = cilindraje
	this.potencia = potencia;
	this.mostrarAuto =
	this.getPlaca = function(){
		return this.placa;
	}

	this.setPlaca = function(){

	}
	this.setColor = function(nuevoColor){

	}
	this.getColor = function(){
		return this.colorVeh;
	}
}

function cliente (nombrecliente,dni){
	this.nombre = nombrecliente;
	this.dni = dni;

}

function factura (fecha,precio,nrofactura){
	this.fecha = fecha;
	this.precio = precio;
	this.nrofactura = nrofactura;
	this.clienteFactura = new cliente();
	this.vehiculoFactura = new vehiculo();

}

var factura1 = new factura();
var arrayClientes = new Array();
var arrayVehiculos = new Array();
var clienteI = 0;
var vehiculoI = 0;


function menu(){
	var  opcion;
	while(opcion != 0){
			opcion= parseInt(prompt("Ingrese su opcion: "));
		switch(opcion){
			case 1:
				registrarCliente();
				break;
			case 2:
				ingresarVehiculos();
				break;
			case 3:
				realizarVenta();
			default:
				break;	
		}
		
	}
	
	console.log(arrayClientes);
	console.log(arrayVehiculos);

}

function registrarCliente(){
	var nombre = prompt("Ingrese nombre de Cliente: ");
	var dni = prompt("Ingrese DNI de Cliente: ");
	
	arrayClientes.push(new cliente(nombre,dni));

	//arrayClientes[clienteI] = cliente;  forma larga de ingresar una fila a un array
	//clienteI++;

}

function ingresarVehiculos(){
	var color = prompt("Ingrese color de Vehiculo: ");
	var placa = prompt("Ingrese placa de Vehiculo: ");
	var tipo = prompt("Ingrese tipo de Vehiculo: ");
	var anio = prompt("Ingrese anio de Vehiculo: ");
	var cilindraje = prompt("Ingrese cilindraje de Vehiculo: ");
	var portencia = prompt("Ingrese potencia de Vehiculo: ");

	
	arrayVehiculos.push(new vehiculo(color,placa,tipo,anio,cilindraje,portencia));
	// arrayVehiculos[vehiculoI] = carro;
	// vehiculoI++;
}
function realizarVenta(){
		console.log(arrayVehiculos);
}
//menu();
ingresarVehiculos();
for (var i = 0; i <arrayVehiculos.length; i++) {
	document.write()
}
