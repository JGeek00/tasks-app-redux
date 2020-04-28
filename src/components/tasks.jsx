import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {complete, process, setAll} from '../store';


const mapDispatch = {complete, process, setAll};

const Tasks = ({tasks, handleClick, complete, process, setAll}) => {
    console.log("task")

    useEffect(() => {
        loadTasks();
    }, []);

    async function loadTasks() {
        try {
            const tasks = await axios.get('http://localhost:4000/api/tasks');
            setAll(tasks.data);
        } catch (error) {
            
        }
    }

    handleClick = (task) => {
        if (task.status === 'process') {
            try {
                complete(task);
                const updatedTask = {
                    name: task.name,
                    status: 'completed'
                }
                axios.put('http://localhost:4000/api/tasks/' + task._id, updatedTask)
            } catch (error) {
                
            }
        }
        else if (task.status === 'completed') {
            try {
                process(task);
                const updatedTask = {
                    name: task.name,
                    status: 'process'
                }
                axios.put('http://localhost:4000/api/tasks/' + task._id, updatedTask)
            } catch (error) {
                
            }
        }
    }

    return (
        <div className="mainContent">
            <div className="process">
                <h4>Tasks in process</h4>
                <ul className="list-group">
                    {
                        tasks.map(task => (
                            task.status === 'process' ? (   
                                <div className="list-group-item" key={task._id}>
                                    <div className="text">
                                        <li >{task.name}</li>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn-success" onClick={() => handleClick(task)}>Complete</button>
                                    </div>
                                </div>
                            ) : (
                                <React.Fragment key={task._id}/>
                            )
                        ))
                    }
                </ul>
            </div>
            <div className="completed">
                <h4>Tasks completed</h4>
                <ul className="list-group completed">
                    {
                        tasks.map(task => (
                            task.status === 'completed' ? (
                                <div className="list-group-item" key={task._id}>
                                    <div className="text">
                                        <li>{task.name}</li>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn-danger" onClick={() => handleClick(task)}>Undo</button>
                                    </div>
                                </div>
                            ) : (
                                <React.Fragment key={task._id}/>
                            )
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    tasks: state
});

 
export default connect(mapStateToProps, mapDispatch)(Tasks);