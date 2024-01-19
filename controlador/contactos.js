import Servicio from '../servicio/contacto.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerContacto = async (req,res) => {
        const contacto = await this.servicio.obtenerContacto()
        res.json(contacto)
    }

    guardarContacto = async (req,res) => {
        try {
            const contacto = req.body
            const contactoGuardado = await this.servicio.guardarContacto(contacto)
            res.json(contactoGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }

    
}


export default Controlador