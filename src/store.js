import {configureStore, createSlice} from '@reduxjs/toolkit';

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


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: tasks,
    reducers: {
        complete: (state, action) => {
            return state.map(task => {
                if (task.id !== action.payload.id) {
                    return task;
                }
                else if (task.id === action.payload.id) {
                    return {
                        ...task,
                        status: 'completed'
                    }
                }
                else {
                    return task;
                }
            });
        },
        process: (state, action) => {
            return state.map(task => {
                if (task.id !== action.payload.id) {
                    return task;
                }
                else if (task.id === action.payload.id) {
                    return {
                        ...task,
                        status: 'process'
                    }
                }
                else {
                    return task;
                }
            });
        },
        add: {
            reducer(state, action) {
                return [
                    ...state.concat({
                        id: state.length,
                        name: action.payload,
                        status: 'process'
                    })
                ]
            }
        }
    }
})


export const {complete, process, add} = tasksSlice.actions;

export default configureStore({
    reducer: tasksSlice.reducer
});