

import { db } from "../config/firebase.js";


const userController =   async (req , res) => {

    let userId = req.params.id ; 
    const useRef = db.collection('users').doc(userId) 
    
    const userDoc = await useRef.get()

    if (!userDoc.exists) 
    {
        return res.status(400).json({
            status: "failed",
            msg : " User Not Found !"
        })
    }
    const userData =  userDoc.data();
    return res.status(200).json({
        status : "success" , 
        user : userData
    })

}

export default  userController