const express = require('express');
const router = express.Router();
const ListService = require('../../services/lists/list');


router.get('/',async (req,res)=>{
    const result = await ListService.getAllLists();
    if(result.errors) {
        return res.status(400).send(result.errors);
    }
    return res.status(200).send(result);
});

router.post('/addlist',  async (req, res) => {
    try{
        const result = await ListService.addList(req.body);
        if(result.errors) {
            return res.status(400).send(result.errors);
        }
        return res.status(201).send(result);
    }catch (e) {
        res.send(e)
    }
})

router.post('/updatelist', async (req, res) => {
    const result = await ListService.updateList(req.body);
    if(result.errors) {
        return res.status(400).send(result.errors);
    }
    return res.status(200).send(result);
})

router.get('/deletelist/:id', async (req, res) => {
    const result = await ListService.deleteList(req.params.id);
    if(result.errors) {
        return res.status(400).send(result.errors);
    }
    return res.status(200).send(result);
})

module.exports=router;