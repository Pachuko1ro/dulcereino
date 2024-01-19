import express from 'express'
import Controlador from '../controlador/contactos.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/', this.controlador.obtenerContacto)
        this.router.post('/', this.controlador.guardarContacto)

        return this.router
    }    
}


export default Router