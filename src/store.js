import {configureStore, createSlice} from '@reduxjs/toolkit';


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        complete: {
            reducer(state, action) {
                return state.map(task => {
                    if (task._id !== action.payload._id) {
                        return task;
                    }
                    else if (task._id === action.payload._id) {
                        return {
                            ...task,
                            status: 'completed'
                        }
                    }
                    else {
                        return task;
                    }
                });
            }
        },
        process: {
            reducer(state, action) {
                return state.map(task => {
                    if (task._id !== action.payload._id) {
                        return task;
                    }
                    else if (task._id === action.payload._id) {
                        return {
                            ...task,
                            status: 'process'
                        }
                    }
                    else {
                        return task;
                    }
                });
            }
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
        },
        setAll: {
            reducer(state, action) {
                return [
                    ...state.concat(action.payload)
                ]
            }
        }
    }
})


export const {complete, process, add, setAll} = tasksSlice.actions;

export default configureStore({
    reducer: tasksSlice.reducer
});