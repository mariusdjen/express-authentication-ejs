import express from "express";
import bodyParser from "body-parser";
import session from 'express-session';
import { registerIndex,registerUser } from "../controllers/registrationController.js";

const router = express.Router();

router.get('/register',registerIndex);
router.post('/register',registerUser);
export default router;