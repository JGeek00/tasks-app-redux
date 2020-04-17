import {createStore} from 'redux';

const tasks = [
    {
        id: 0,
        name: 'Task 1',
        status: 'process'
    },
    {
        id: 1,
        name: 'Task 2',
        status: 'process'
    },
    {
        id: 2,
        name: 'Task 3',
        status: 'process'
    },
    {
        id: 3,
        name: 'Task 4',
        status: 'process'
    },
    {
        id: 4,
        name: 'Task 5',
        status: 'process'
    },
    {
        id: 5,
        name: 'Task 6',
        status: 'process'
    },
]




const reducer = (state = tasks, action) => {
    switch (action.type) {
        case "STATUS_COMPLETED":
            return state.map(task => {
                if (task.id !== action.task.id) {
                    return task;
                }
                else if (task.id === action.task.id) {
                    return {
                        ...task,
                        status: 'completed'
                    }
                }
                else {
                    return task;
                }
            })

        case "STATUS_PROCESS":
            return state.map(task => {
                if (task.id !== action.task.id) {
                    return task;
                }
                else if (task.id === action.task.id) {
                    return {
                        ...task,
                        status: 'process'
                    }
                }
                else {
                    return task;
                }
            })

        case "ADD_TASK":
            return [
                ...state.concat({
                    id: state.length,
                    name: action.name,
                    status: 'process'
                })
            ]

        default:
            return state;
    }
}

export default createStore(reducer);