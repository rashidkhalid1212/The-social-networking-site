import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


// register user
export const register = async(req, res) => {
    try{
        const{
            firstname,
            lastname,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body
    }
}