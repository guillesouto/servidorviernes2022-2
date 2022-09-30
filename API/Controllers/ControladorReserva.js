export class ControladorReserva{

    constructor(){}

    buscarReservas(request,response){

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":"AQUI VAN LOS DATOS DE las Reservaciones",
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    buscarReservasPorId(request,response){
        let id=request.params.idReserva//recivo el id de la peticion
        console.log(id)

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta " + id,
                "datos":"AQUI VAN LOS DATOS DE la reservacion buscada por id",
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    registrarReservacion(request,response){
        
        let datosReserva = request.body
        console.log(datosReserva)

        try{

            response.status(200).json({
                "mensaje":"exito registrando la nueva reservacion",
                "datos":datosReserva
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    editarReserva(request,response){

        let id = request.params.idReservacion
        let datosReserva = request.body
        console.log(id, datosReserva)

        try{

            response.status(200).json({
                "mensaje":"exito editando "+id,
                "datos":datosReserva,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }


    eliminarReserva(request,response){

        let id = request.params.iupReservacion
        console.log(id)

        try{

            response.status(200).json({
                "mensaje":"exito eliminando la reservacion "+id,
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