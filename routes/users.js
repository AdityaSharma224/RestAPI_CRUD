import express from 'express';
import {v4 as uuidV4} from 'uuid';
const  router = express.Router();

const users = [];
router.get('/',(req,res)=>{
    res.send(users);
});

router.post('/',(req,res)=>{
    
    const user = req.body;
    users.push({...user,id:uuidV4()});
    res.send(`POST ROUTE REACHED${user.firstName} added to the database!`)
})

export default router;