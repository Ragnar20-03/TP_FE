const express = require ( 'express') ; 
const router  = express.Router () ; 

router.get('/' , (req ,res) => {
     res.json({
        msg : " Main route of user "
     })
}) 

router.get ( '/userInfo' , async (rqe ,res ) =>  {
        // Firebase Data Fetch 

        // Send it to Frontend
}) 


router.post  ('/register' , async (req ,res ) => {
 
    const body = req.body
     const{ fname , lname , email , profLink , pass , ph , isVarified  , role , ngoId} =  body ;
    console.log(" fname is : " ,body);
    if ( !fname || !lname || !email ||  !profLink || !pass || !ph || !role  || !ngoId )
    {
        return res.status(501).json( { msg : "Information Not valid !"});
    }
    return res.status(200).json({ msg : "Register Success !"});

}) 

router.post  ('/login' , async (req ,res ) => {
 
    const {username  , pass } = req.body ;  
    //   Firebase Authentication 
    //  Send Response 
}) 

router.post ( '/plantTree' , async (req ,res ) => {
        // const { }
})

module.exports = router ; 