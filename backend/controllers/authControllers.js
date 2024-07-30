import User from "../models/userModel.js"
import validateUser from "../type/type.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { existsSync } from "fs"

const JWT_SECRET = crypto.randomBytes(64).toString('hex');

const authSignUp = async (req, res, next) => {
    try {

        const { username, email, password } = req.body;
        //hashing password

        const validationUser = validateUser.safeParse({ username: username, email: email, password: password })
        const userExist = await User.findOne({ username, email })
        // checking the use is valid or not 

        if (!username || !email || !password) {
            return res.status(400).json({ msg: 'please filled out all the fields!' })
        } else if (validationUser.success === false) {
            res.status(400).json({ msg: 'Something is wrong with your inputs!' })
            return;
        }
        else if (userExist) {
            res.status(500).json({ msg: 'Uesr already exist! ' })
            return;
        }
        else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt)
            const userSaved = await User.create({ username: username, email: email, password: hashedPassword });

            const token = jwt.sign({ id: userSaved._id }, JWT_SECRET, { expiresIn: "7d" })
            res.cookie('secret', token, {
                httpOnly: true,
                secure: true,
                maxAge: 3600000,
            })
            res.status(201).json({ msg: 'User created sueccessfully!' })
            return;
        }

    } catch (error) {
        return res.status(500).json({ msg: "internval server error" + error.message })
        next(error);
    }
}

const authSignIn = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ msg: "Please fill out all the fields" });
        }

        const existingUser = await User.findOne({ email });

        // Check if user exists
        if (!existingUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Compare the provided password with the stored hash
        bcrypt.compare(password, existingUser.password, (err, data) => {
            if (err) {
                console.log(err.message);
                return res.status(500).json({ msg: "Internal server error" });
            } else if (!data) {
                return res.status(401).json({ msg: "Wrong credentials" });
            } else {
                const token = jwt.sign({ id: existingUser._id }, JWT_SECRET, { expiresIn: "7d" });
                res.cookie('secret', token, {
                    httpOnly: true,
                    secure: true,
                    maxAge: 3600000,
                });
                const { password, _id, ...userWithoutCredentialsInfo}  = existingUser.toObject();
                return res.status(201).json({ msg: 'User SignIn successfully!', user: userWithoutCredentialsInfo });
            }
        });

    } catch (error) {
        console.log(error.message);
        res.status(401).json({ msg: "failed to sign in " + error.message })
    }
}



export { authSignIn, authSignUp }