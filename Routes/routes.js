import express from "express"
import authController from "../controllers/authController.js"

const router = express.Router();

router.post('/register' , authController.register)
router.post('/login' , authController.login)
router.get('/' , authController.Take)
router.delete("/:id" , authController.Delete)
router.post("/course" ,authController.registerCourse )

export default router