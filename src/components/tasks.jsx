import React from 'react';
import {connect} from 'react-redux';

const Tasks = ({tasks, handleClick}) => {
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

const mapDispatchToProps = (dispatch) => ({
    handleClick(task) { 
        if (task.status === 'process') {
            dispatch({
                type: 'STATUS_COMPLETED',
                task
            })
        }
        else if (task.status === 'completed') {
            dispatch({
                type: 'STATUS_PROCESS',
                task
            })
        }
    }
});


 
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);