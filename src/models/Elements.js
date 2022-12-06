import { Schema, model } from 'mongoose';

const elementsSchema = new Schema({
    name: {type:String,required:[true,'el nombre del documento es requerido']},
    email: {type:String,required:[true,'el nombre del documento es requerido']}
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Elements', elementsSchema);