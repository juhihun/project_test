const express = require('express');
const router = express.Router()
const query = require('../mysql/index');



router.get("/",(req,res)=>{
    query("boardList",req.params)
    .then(result => res.send(result))
})

router.get("/:no",(req,res)=>{
    const no = req.params.no;
    console.log(no)
    query("boardInfo",req.params.no)
    .then(result => res.send(result))
    
})
router.put("/:no", async(req,res)=>{
    let result = await query("boaradUpdate",[req.body, req.params.no])
    res.send(result)       
})
router.post("/", async(req,res)=>{
    let result = await query("boaradInsert",req.body)
    res.send(result)       
})

module.exports = router;