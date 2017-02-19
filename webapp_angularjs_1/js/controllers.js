function ControladorHabitaciones() {
    this.lista = Modelo.Habitaciones.lista;
    this.cantidad = function() {
        return Modelo.Habitaciones.lista.length;
    }
    this.delHabitacion = function(numero) {
        Modelo.Habitaciones.quitar(numero);
    }
}



function ControladorDisponibilidadDia() {

    var fechaController;

    this.listaReservas = Modelo.Habitaciones.listaReservas;

    if (typeof this.fecha == "undefined"){

        this.fecha = new Date(2017,0,23);
        
    }

    this.actualizarDisponibilidad = function (){
        this.simpleDia();
        this.dobleDia();
    }


    this.simpleDia = function() {
        fechaController = this.fecha.getTime();
        return Modelo.Habitaciones.disponibilidadDia(fechaController, false);
    }

    this.dobleDia = function() {
        fechaController = this.fecha.getTime();
        return Modelo.Habitaciones.disponibilidadDia(fechaController, true);
    }

}

function ControladorHabitacion() {
    this.numero = 1;
    this.doble = false;

    this.addHabitacion = function() {
        Modelo.Habitaciones.agregar({
            numero: this.numero,
            doble: this.doble
        });
        this.numero++;
    }
}


var moduloAplicacion = angular.module("appNodeHotel", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);
moduloAplicacion.controller("ControladorDisponibilidadDia", ControladorDisponibilidadDia);