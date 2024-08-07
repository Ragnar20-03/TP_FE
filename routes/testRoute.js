import express from "express";
import {
  addDocController,
  getDocsController,
  updateDocController,
  patchDocController,
  deleteDocController,
  deleteFieldsController,
  testAuthController,
  chatbotController,
  uploadFilesContoller,
} from "../controller/testController.js";
import { upload } from "../config/multer.js";
import { getChatbotResponse } from "../controller/geminiTestController.js";

const testRouter = express.Router();

testRouter.get("/testAuth", testAuthController); 

testRouter.post("/addDoc", addDocController);
testRouter.get("/getDocs", getDocsController); // Admin Route 
testRouter.put("/updateDoc", updateDocController);
testRouter.patch("/patchDoc", patchDocController);
testRouter.delete("/deleteDoc", deleteDocController);
testRouter.delete("/deleteFields", deleteFieldsController);

testRouter.get("/chatbot", chatbotController);

testRouter.post("/uploadFiles", upload.array("files"), uploadFilesContoller);

testRouter.post("/gemini", getChatbotResponse);

export { testRouter };
