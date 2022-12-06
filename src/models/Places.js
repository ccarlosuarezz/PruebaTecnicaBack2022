import { Schema, model } from 'mongoose';

const placesSchema = new Schema({
    name: {type:String,required:[true,'nombre del sitio requerido']},
    description: {type:String,required:[true,'descripción del sitio requerido']},
    location: {type:String,required:[true,'ubicacion del sitio requerido']}
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Places', placesSchema);