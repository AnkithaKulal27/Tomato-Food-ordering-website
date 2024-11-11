import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

//to create express router
//using this Router ,we can create the GET(),POST() and many other methods
const foodRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
  //file will be stored in the upload folder
  destination: "uploads",
  filename: (req, file, cb) => {
    //whenever we will upload one file,our timestamp will be added in the fileoriginalname and it will create a unique name
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

//we can store the image in the upload folder
const upload = multer({ storage: storage });

//we use the post() to send the data on the server,and on this server,our data will be processed and after that,we will get one response
//to add this middleware in the route
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
