import User from "../Schema/User.model.js";
import Course from "../Schema/Courses.models.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// user Register logic

const register = async (req , res) =>{
 
    try{

    const {username , password , role , email } =  req.body;   // takes all the data from the user from the frontend with help of post method


    const Hashedpass = await bcrypt.hash(password , 10)  // hash password before saving it to the database

    const newUser = new User({username , password : Hashedpass , role , email})  // create new user and save it to the database 

    await newUser.save();   // to save new user to the database 

    res.status(201).send({message: "user created successfully"})

    }catch(error){

        console.log(error)
        res.status(500).send({message: "error in saving the user"})


    }
}


// User login Logic


const login = async (req , res) =>{
 
     try {
        

        const {username , password} = req.body;   // takes password and username from the frontend

        const user = await User.findOne({username})  // takes all the data that has been created into the database

        if(!user){
             return res.status(400).send({ message: "Invalid username or password" });
        }
        const compare = await bcrypt.compare(password , user.password )

        if(!compare){
        return  res.status(400).send({message: "user login failed"})
        }
         
       return res.status(200).send({message: "login successfull"})
     } catch (error) {


        console.log("error caused while doing login" , error)
        res.status(400).send({message: "error while login"})

     }
}


// to fetch data from the database logic

const Take = async (req , res) =>{

    try {

        const data = await User.find({})
        res.status(200).send(data)

    } catch (error) {
        console.log(error , "error in fechting data ")
    }
}


// delete specific user with the help of id

const Delete = async (req , res) =>{
  try {

    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).send({message: "Deleted successfully"})

  } catch (error) {

    console.log("error while deleting user")
    res.status(401).send({message: "error while deleting user"})

  }

}

const registerCourse = async (req , res) =>{

        try {

          const {coursename , branch , coursefees} = req.body;
          const NewCourse = new Course({coursename , branch , coursefees})
          await NewCourse.save();
          res.status(200).send({message: "New course created"})

        } catch (error) {


          console.log("error during saving course" , error)


        }
}

const GetCourse = async (req , res) =>{         // Course fetch logic
        try {


          const  CourseData = await Course.find();
          res.status(201).send(CourseData)


        } catch (error) {
          console.log("error while getting course data " , error)
          res.status(500).send({message: "error occured"})
        }
}


const HandleCourseDelete = async (req , res) =>{     // Course deletion logic
         
      try {

        const {id} = req.params
        await Course.findByIdAndDelete(id)
        res.status(200).send({message: "Course deleted successfully"})

      } catch (error) {

        console.log("error while deleting course" , error)
        res.status(500).send({message: "error"})

      }



}

// export all the functions to the router section 

export default {register , login , Take , Delete , registerCourse , HandleCourseDelete , GetCourse}