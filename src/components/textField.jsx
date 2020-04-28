import React, { useState } from 'react';
import {connect} from 'react-redux';
import {add} from '../store';
import axios from 'axios';

const mapDispatch = {add}; 

const TextField = ({add}) => {
    const [text, setText] = useState('');

    const handleAdd = async (e) => { 
        e.preventDefault();
        if (text !== '') {
            try {
                add(text);
                setText('');
                const newTask = {
                    name: text,
                    status: 'process',
                }
                await axios.post('http://localhost:4000/api/tasks', newTask);
            } catch (error) {
                
            }
        }
    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="form-group">
            <div className="label">
                <label htmlFor="add">Add a task</label>
            </div>
            <div className="input">
                <input type="text" className="form-control" name="name" id="add" value={text} onChange={onChange}/>
                <button className="btn btn-primary"type="button" onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    handleAdd: state.handleAdd
});

 
export default connect(mapStateToProps, mapDispatch)(TextField);