const express = require('express');

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps');
const router = express.Router(); 

router.route('/')
.get(getBootcamps)
.post(createBootcamp);

router.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp); 

// router.get('/', (req, res) =>{
//     //res.send('Hello from express');
//     //json object
//     res.send({ name: 'Soohyeon'}); 
//     res.status(200).json({success: true});
// }); 

// //Create Routes 
// router.get('/api/v1/bootcamps', (req, res) => {
//     res.status(200).json({ success: true, msg: 'Show all bootcamps'});
// });
// router.get('/api/v1/bootcamps/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: 'Get bootcamp'});
// });
// router.post('/api/v1/bootcamps', (req, res)=>{
//     res.status(200).json({ success: true, msg: 'Create new bootcamp'});
// });
// router.put('/api/v1/bootcamps/:id, (req, res) => {
//     res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`});
// });
// router.delete('/api/v1/bootcamps/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`});
// });



// const express = require('express'); 
// const router = express.Router(); 

// router.get('/', (req, res)=>{
//     res.status(200).json({success: true, msg: 'Show all bootcamps'});
// });

// router.get('/:id', (req, res)=>{
//     res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}` });
// });

// //put is updating 
// router.put('/:id', (req, res)=>{
//     res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}` });
// });

// router.delete('/:id', (req, res)=>{
//     res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}` });
// });



module.exports = router; 

//mongodb atlas host  
//user name: leetffany 
//password: 220910 