import mongoose from 'mongoose';

const db_url=process.env.DB_PROD||'mongodb://localhost/cotadb';
console.log(db_url)
mongoose.connect(db_url,{
    useNewUrlParser:true,
  
}).then(db => console.log('Db is connecteD')).catch(err => console.log(err));