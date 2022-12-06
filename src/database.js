import mongoose from 'mongoose';

const db_url=process.env.DB_PROD || 'mongodb+srv://carlos-db:carlos-db@cluster0.s1cgbuh.mongodb.net/PruebaTecnica';
console.log(db_url)
mongoose.connect(db_url,{
    useNewUrlParser:true,
  
}).then(db => console.log('Db is connected')).catch(err => console.log(err));