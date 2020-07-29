const express = require('express');
const router = express.Router();

const Task = require ('../models/task');

router.get('/', async (req, res) => { 
        const tasks = await Task.find(); 
        res.json(tasks);            
});

router.get('/:id', async (req, res) => {
        const task = await Task.findById(req.params.id); 
        res.json(task);            
});

router.post('/', async (req, res) => { 
        const {producto, description} = req.body;
        const task = new Task({producto, description});
        await task.save();
      console.log(req.body);
      res.json('Tarea guardada');
});

router.put('/:id', async (req, res) => {

        const { producto, description } = req.body;
        const newTask = {producto, description};
        await Task.findByIdAndUpdate(req.params.id, newTask);
        console.log(req.params.id);     
        res.json({status: 'Task Updated'}); 

});

router.delete('/:id', async (req, res) => {
        await Task.findByIdAndRemove(req.params.id);
                res.json({status: 'Task Deleted'});
        

});


module.exports = router;