import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

router.get('/register',(req,res)=>{
    res.render('register');
})
router.post('/register',(req,res)=>{


    console.log(req.body);
    
    res.render('register');
})
export default router;