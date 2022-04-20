const express = require('express');
const dotenv = require('dotenv'); 
//const morgan = require('morgan'); 
//const connectDB = require('./config/db/');
// const logger = require('./middleware/logger');

//Connect to database
//connectDB(); 

//1-Route files
const bootcamps = require('./routes/bootcamps'); 

//Load env vars 
dotenv.config({path: './config/config.env'}); 

const app = express(); 

// app.use(logger);
//2-Mount routers
app.use('/api/v1/bootcamps', bootcamps); 


// app.get('/api/v1/bootcamps', (req, res)=>{
//     res.status(200).json({success: true, msg: 'Show all bootcamps'});
// });

// app.get('/api/v1/bootcamps/:id', (req, res)=>{
//     res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}` });
// });

// //put is updating 
// app.put('/api/v1/bootcamps/:id', (req, res)=>{
//     res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}` });
// });

// app.delete('/api/v1/bootcamps/:id', (req, res)=>{
//     res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}` });
// });

//app.use(logger); 

//Dev logging middleware
// if(process.env.NODE_ENV === 'development'){
//     app.use(morgan('dev')); //passing dev parameter 
// }


const PORT = process.env.PORT || 3000; 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));