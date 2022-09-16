export class ControladorHabitacion{

    constructor(){}

    buscarHabitaciones(request,response){
        response.send("estoy buscando habitaciones desde el controlador")
    }

    buscarHabitacionPorId(request,response){
        response.send("estoy buscando una habitacion por id desde el controlador")
    }

    registrarHabitacion(request,response){
        response.send("estoy agregando desde el controlador")
    }

    editarHabitacion(request,response){
        response.send("estoy editando desde el controlador")
    }


}