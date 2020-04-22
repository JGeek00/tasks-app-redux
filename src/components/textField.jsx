import React, { useState } from 'react';
import {connect} from 'react-redux';
import {add} from '../store';

const mapDispatch = {add}; 

const TextField = ({add}) => {
    const [text, setText] = useState('');

    const handleAdd = (e) => { 
        e.preventDefault();
        if (text !== '') {
            add(text);
            setText('');
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