export class ControladorHabitacion{

    constructor(){}

    buscarHabitaciones(request,response){

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":"AQUI VAN LOS DATOS DE HABITACIONES",
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    buscarHabitacionPorId(request,response){
        let id=request.params.idHabitacion//recivo el id de la peticion


        try{

            response.status(200).json({
                "mensaje":"exito en la consulta " + id,
                "datos":"AQUI VAN LOS DATOS DE la habitacion buscada por id",
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    registrarHabitacion(request,response){
        
        let datoHabitacion = request.body

        try{

            response.status(200).json({
                "mensaje":"exito registrando habitacion",
                "datos":datoHabitacion
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    editarHabitacion(request,response){

        let id = request.params.idCuarto
        let datosHabitacion = request.body
        console.log(id, datosHabitacion)

        try{

            response.status(200).json({
                "mensaje":"exito editando "+id,
                "datos":datosHabitacion,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    
}