const express = require('express');
const router = express.Router();
const TodoService = require('../../services/lists/todo');


router.get('/getTodoById/:id',async (req,res)=>{
    const result = await TodoService.getAllTodos(req.params.id);
    if(result.errors) {
        return res.status(400).send(result.errors);
    }
    return res.status(200).send(result);
});

router.post('/addlisttodo',  async (req, res) => {
    try{
        const result = await TodoService.addListTodo(req.body);
        if(result.errors) {
            return res.status(400).send(result.errors);
        }
        return res.status(201).send(result);
    }catch (e) {
        res.send(e)
    }
})

router.post('/updateListTodoStatus/:id', async (req, res) => {
    req.body._id = req.params.id;
    const result = await TodoService.updateListTodoStatus(req.body);
    if(result.errors) {
        return res.status(400).send(result.errors);
    }
    return res.status(200).send(result);
})

router.post('/updatelisttodo', async (req, res) => {
    const result = await TodoService.updateListTodo(req.body);
    if(result.errors) {
        return res.status(400).send(result.errors);
    }
    return res.status(200).send(result);
})

router.get('/deletelisttodo/:id', async (req, res) => {
    const result = await TodoService.deleteListTodo(req.params.id);
    if(result.errors) {
        return res.status(400).send(result.errors);
    }
    return res.status(200).send(result);
})

module.exports=router;