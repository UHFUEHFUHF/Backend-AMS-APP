import express from "express"
import authController from "../controllers/authController.js"

const router = express.Router();

router.post('/register' , authController.register)   // new user including teacher
router.post('/login' , authController.login)        // login functionality
router.get('/' , authController.Take)               // fetch data functionality
router.delete("/:id" , authController.Delete)


  
  //Course logic starts from here

router.post("/course/register" ,authController.registerCourse ) //courses register logic
router.delete("/course/:id" , authController.HandleCourseDelete)
router.get("/course/get" , authController.GetCourse)  

export default router