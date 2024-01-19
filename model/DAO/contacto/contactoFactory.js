import ModelMongoDB from "../contacto/contactoMongoDB.js"
import ModelMem from "../contacto/contactoMem.js"

class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('**** Contacto Persistiendo en Memoria ****')
                return new ModelMem()

            case 'MONGODB':
                console.log('**** Contacto Persistiendo en MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Contacto Persistiendo en Memoria (default) ****')
                return new ModelMem()
        }
    }
}

export default ModelFactory