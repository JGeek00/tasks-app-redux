import React from 'react';
import {connect} from 'react-redux';
import {complete, process} from '../store';

const mapDispatch = {complete, process}

const Tasks = ({tasks, handleClick, complete, process}) => {
    handleClick = (task) => {
        if (task.status === 'process') {
            complete(task);
        }
        else if (task.status === 'completed') {
            process(task);
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
                                <div className="list-group-item" key={task.id}>
                                    <div className="text">
                                        <li >{task.name}</li>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn-success" onClick={() => handleClick(task)}>Complete</button>
                                    </div>
                                </div>
                            ) : (
                                <React.Fragment key={task.id}/>
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
                                <div className="list-group-item" key={task.id}>
                                    <div className="text">
                                        <li>{task.name}</li>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn-danger" onClick={() => handleClick(task)}>Undo</button>
                                    </div>
                                </div>
                            ) : (
                                <React.Fragment key={task.id}/>
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