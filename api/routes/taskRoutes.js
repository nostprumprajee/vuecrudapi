const taskBuilder = require('../controllers/taskController');

module.exports = app => {
    app
        .route('/task')
        .get(taskBuilder.list_all_tasks)
        .post(taskBuilder.create_a_task);
    app
        .route('/task/:taskId')
        .get(taskBuilder.read_a_task)
        .put(taskBuilder.update_a_task)
        .delete(taskBuilder.delete_a_task);
}