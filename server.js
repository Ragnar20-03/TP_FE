import express from "express";
const app = express();

import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import { testRouter } from "./routes/testRoute.js";
import userRouter from './routes/userRoute.js'
import registerRouter from "./routes/authRoute.js";
// import isAuthenticated from "./middleware/isAuth.js";

app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ message: "Plant the Tree! " });
});

// app.use(isAuthenticated);

app.use('/user' , userRouter)
app.use("/auth", registerRouter); // register , update ...  
//!!!TESTING!!!
app.use("/test", testRouter);


app.listen(5100, () => {
  console.log(`Server started at http://localhost:5100`);
});



// Pending 

  // Route 
      //  User info GET 
      // PLantation stats 
      // News ?? GET 

  // Volunteer 
      