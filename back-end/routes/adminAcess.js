import express from 'express';
import { RegisterAdmin, LoginAdmin } from '../controllers/adminCredentials.js';

const adminAccess = express.Router();

//register
adminAccess.post("/register", RegisterAdmin);

//login
adminAccess.post("/login", LoginAdmin);


export default adminAccess;