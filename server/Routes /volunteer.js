const express = require ( 'express') ; 
const router  = express.Router () ; 

const db = require ( '../Db/FirebaseConn')

//Register Route
router.post('/register' , async (req ,res) => {

        const { fname, lname, email , password , ph  , role  } = req.body;
    try { 
        const usersRef = db.collection('volunteers');
        const emailSnapshot = await usersRef.where('email', '==', email).get();
        const phoneSnapshot = await usersRef.where('ph', '==', ph).get();
    
        if (!emailSnapshot.empty) {
          return res.status(400).json({
            msg: 'Already registered with this email'
          });
        }
    
        if (!phoneSnapshot.empty) {
          return res.status(400).json({
            msg: 'already registered with this phone number'
          });
        }

         db.collection('volunteers').add({
          fname,
          lname,
          email , 
          password , 
          ph , 
          role , 
          isVarified: true 

        }).then ( ( res2) => { 
            res.status(200).json({
                msg : " User Registered Succesfully ! "
            })

        }).catch ((err )=> {
            res.status(501).json({
                msg : "Something Went Wrong " 
            })

        })
    }
    catch (error) {
        return res.status(404).json({msg : "Internal Server Error"})
      }
    
}) 
// Login Route 
router.post('/login' , async (req ,res) => {

    const { email , password } = req.body;

   
  try {
    const usersRef = db.collection('volunteers');
    const snapshot = await usersRef.where('email', '==', email).get();
    if (snapshot.empty) {
        return res.status(404).json({msg : 'Volunteer not found'});
    }

    let userFound = false;
    snapshot.forEach(doc => {
      if (doc.data().password === password) {
        userFound = true;
      }
    });

    if (userFound) {
        return res.status(404).json({msg : 'Login Succesfull '});

    } else {
        return res.status(404).json({msg : "Password Mismatch !"});
      
    }
  } catch (error) {
    return res.status(404).json({msg : "Internal Server Error"})
  }

}) 


module.exports = router ; 