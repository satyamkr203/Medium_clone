import dotenv from 'dotenv'

import {authSignIn, authSignUp} from '../controllers/authControllers.js'

import express from 'express'

const router = express.Router();

// defining the routes for user can signUp
router.post('/signup', authSignUp)
router.post('/signin',  authSignIn);

export default router;