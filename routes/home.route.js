import express from "express";
import {homeIndex,aboutIndex} from "../controllers/homeController.js";

const router = express.Router();


router.get('/',homeIndex);
router.get('/about',aboutIndex);


export default router;