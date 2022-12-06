import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
    nickname: {type:String,required:[true,'nickname de usuario requerido']},
    name: {type:String,required:[true,'nombre de usuario requerido']},
    email: {type:String,required:[true,'email de usuario requerido']}
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Users', usersSchema);