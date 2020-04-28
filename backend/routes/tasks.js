const {getTasks, createTask, updateTask} = require('../controllers/tasks.controllers');
const {Router} = require('express');
const router = Router();

router.route('/')
    .get(getTasks)
    .post(createTask)

router.route('/:id')
    .put(updateTask)

module.exports = router;
