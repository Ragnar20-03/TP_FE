const express = require( 'express') ; 
const  app = express ()  ; 
const bodyParser = require ('body-parser') ; 
app.use(bodyParser.json () ) ; 


const user = require ('./Routes /user') ; 

app.use( '/user' , user) ; 

app.listen( 5100 , () => { 
    console.log("Server started on port number 5100 ");
})



