class ModelMem {

    constructor() {
        this.contacto = []
    }

    obtenerContacto = async () => this.contacto

    guardarContacto = async contacto => {
        contacto.id = String(parseInt(this.contacto[this.contacto.length-1]?.id || 0) + 1)
        this.contacto.push(contacto)
        return contacto
    }
}

export default ModelMem