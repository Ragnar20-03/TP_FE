import express from 'express'


import userController from '../controller/userController.js';
const router = express.Router () ; 


router.get ('/getDoc/:id' ,userController ) 

 export default  router ;