// @desc    Logs request to console

//custom logging middleware 
const logger = (req, res, next) =>{
    req.hello = 'Hello World'; 
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    ); 
    next(); 
};
app.use(logger); 

//access from other files 
module.exports = logger; 
