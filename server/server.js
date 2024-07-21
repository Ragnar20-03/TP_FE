const express = require( 'express') ; 
const  app = express ()  ; 
const bodyParser = require ('body-parser') ; 
app.use(bodyParser.json () ) ; 


const user = require ('./Routes /user') ; 
const ngo = require ('./Routes /ngo') ; 
const volunteer = require ('./Routes /volunteer') ; 

app.use( '/user' , user) ; 
app.use( '/ngo' , ngo) ; 
app.use( '/volunteer' , volunteer) ; 

app.listen( 5100 , () => { 
    console.log("Server started on port number 5100 ");
})



