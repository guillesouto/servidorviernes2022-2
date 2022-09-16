import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion() //usando el controlador

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesnick/habitacion',controladorHabitacion.editarHabitacion)

