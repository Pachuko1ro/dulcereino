import mongoose from 'mongoose'

const contactoSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    direccion: String,
    email: String,
    edad: Number,
    pais: String,
    telefono: Number,
    incluirComentario: Boolean,
    consulta: String

},{versionKey: false})

export const ContactoModel = mongoose.model('contactos', contactoSchema)

