const Task = require('../models/Task');

const tasksCtrl = {};

tasksCtrl.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({name: 1});
        res.json(tasks);
    } catch (error) {
        res.status(401).json({
            response: 'fail',
            message: error.message
        });
    }
};

tasksCtrl.createTask = async (req, res) => {
    const {name, status} = req.body;
    const task = new Task({
        name: name,
        status: status
    });
    try {
        const send = await task.save();
        if (send) {
            res.json({result: "success"});
        }
        else {
            res.status(400).json({result: "fail"});
        }
    } catch (error) {
        res.status(400).json({result: "fail", message: error.message});
    }
}

tasksCtrl.updateTask = async (req, res) => {
    const id = req.params.id;
    const {name, status} = req.body;
    try {
        const result = await Task.findOneAndUpdate({_id: id}, {
            name: name,
            status: status
        });
        if (result) {
            res.json({result: "success"});
        }
        else {
            res.status(400).json({result: "fail"});
        }
    } catch (error) {
        res.status(401).json({result: "fail", message: error.message});
    }
}


module.exports = tasksCtrl;