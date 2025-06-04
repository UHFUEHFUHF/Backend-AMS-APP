import mongoose from "mongoose"

const CourseSchema = mongoose.Schema({

    coursename:{
        type: String,
        required: true
    },

    
    branch:{
        type: String,
        required: true
    },

    coursefees:{
        type: Number,
        required: true
    },

    image:{
        type: String
    }

},{timestamps : true})

const Course = mongoose.model("Course" , CourseSchema)

export default Course