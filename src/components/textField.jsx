import React, { Component } from 'react';
import {connect} from 'react-redux';

class TextField extends Component {
    render(){
        const {handleAdd} = this.props;
        return (
            <div className="form-group">
                <div className="label">
                    <label htmlFor="add">Add a task</label>
                </div>
                <div className="input">
                    <input type="text" className="form-control" name="name" id="add" ref={node => {this.input = node}}/>
                    <button className="btn btn-primary"type="button" onClick={() => {handleAdd(this.input.value); this.input.value = ''}}>Add</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    handleAdd: state.handleAdd
})

const mapDispatchToProps = (dispatch) => ({
    handleAdd(name) { 
        if (name !== '') {
            dispatch({
                type: 'ADD_TASK',
                name
            })
        }
    }
});
 
export default connect(mapStateToProps, mapDispatchToProps)(TextField);