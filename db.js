const mongoose = require('mongoose');

const conenectDB = async () => {
    const conn = await mongoose.connect(prcess.engv.MONGO_URI, {
        useNewUrlParser: true,
        userCreateIndex: true,
        useFindAndModify: false
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`); 
}

module.exports = connectDB; 