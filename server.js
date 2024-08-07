import express from "express";
const app = express();
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import { testRouter } from "./routes/testRoute.js";
import registerRouter from "./routes/authRoute.js";
import isAuthenticated from "./middleware/isAuth.js";
import userRouter from './routes/userRoute.js'

app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ message: "Plant the Tree! " });
});
// const user = require("./Routes /user");
// const ngo = require("./Routes /ngo");
// const volunteer = require("./Routes /volunteer");

// app.use("/user", user);
// app.use("/ngo", ngo);
// app.use("/volunteer", volunteer);
app.use(isAuthenticated);

app.use("/auth", registerRouter); // register , update ...  

//!!!TESTING!!!
app.use("/test", testRouter);
app.use('/user' , userRouter)

app.listen(5100, () => {
  console.log(`Server started at http://localhost:5100`);
});



// Pending 

  // Route 
      //  User info GET 
      // PLantation stats 
      // News ?? GET 

  // Volunteer 
      