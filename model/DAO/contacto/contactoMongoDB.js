import CnxMongoDB from "../../DBMongo.js"
import { ContactoModel } from "../models/contacto.js"

class ModelMongoDB {

    obtenerContacto = async () => {
        if(!CnxMongoDB.connection) return []
        const contacto = await ContactoModel.find({})
        return contacto
    }

    guardarContacto = async contacto => {
        if(!CnxMongoDB.connection) return {}
        const contactoModel = new ContactoModel(contacto)
        const contactoGuardado = await contactoModel.save()
        return contactoGuardado
    }
}

export default ModelMongoDB