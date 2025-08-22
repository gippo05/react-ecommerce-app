import Admin from "../models/adminUserSchema.js";
import jwt from "jsonwebtoken";


// Register

export const RegisterAdmin = async (req, res) =>{

    try{
        const {username, password} =  req.body;

        if (!username || !password){
            return res.status(400).json({message: "Please complete required fields."});
        }

        const newAdmin = new Admin({
            username,
            password
        })
        await newAdmin.save();
       res.status(201).json({
            _id: newAdmin._id,
            username: newAdmin.username,
            message: "Admin registered successfully."
        });


    }
    catch(error){
        res.status(500).json({ message: "Server error", error });
    }
}

// Login

export const LoginAdmin = async (req, res) =>{

    try{
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({message: "Please complete required fields."});
        }

        const adminUser = await Admin.findOne({ username });

        if (!adminUser){
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const isMatch = await adminUser.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
            }

        // Generate JWT Token part

        const token = jwt.sign(
            { id: adminUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "8h"}
        );
        
        res.status(200).json({
            _id: adminUser._id,
            username: adminUser.username,
            token,
            message: "Login successful."
        });
    }
    catch(error){
        res.status(500).json({ message: "Server error", error });
    }
}