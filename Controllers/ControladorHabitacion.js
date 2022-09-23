export class ControladorHabitacion{

    constructor(){}

    buscarHabitaciones(request,response){

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":"AQUI VAN LOS DATOS DE HABITACIOENES",
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    buscarHabitacionPorId(request,response){
        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
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
        try{

            response.status(200).json({
                "mensaje":"exito registrando habitacion",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    editarHabitacion(request,response){
        try{

            response.status(200).json({
                "mensaje":"exito editando",
                "datos":null,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }


}