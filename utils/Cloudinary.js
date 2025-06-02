import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config();

cloudinary.config({
    
    cloud_name: process.env.CLOUDINARY_NAME ,
    api_key: process.env.CLOUDINARY_API_KEY ,
    api_secret: process.env.CLOUDINARY_SECRET ,

})

const uploadCloud = async (localfilepath) =>{
    if(!localfilepath){
        return null;
    }
    try {
        const response = await cloudinary.uploader.upload(localfilepath , {
            resource_type: "auto"
        })
         console.log("file uploaded successfully" , response.url)

        return response
    } catch (error) {
        fs.unlinkSync(localfilepath)
    }
}

export default uploadCloud