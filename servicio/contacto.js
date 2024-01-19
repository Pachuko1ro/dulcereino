import ModelFactory from '../model/DAO/contacto/contactoFactory.js'
import config from '../config.js'




class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerContacto = async _ => {
        const contacto = await this.model.obtenerContacto()
        return contacto
    }

    guardarContacto = async contacto => {
        const contactoGuardado = await this.model.guardarContacto(contacto)
        return contactoGuardado
    }

   
}

export default Servicio

