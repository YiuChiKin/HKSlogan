import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        let result = this.props.result;
        return <div className="todoitem" id={this.props.id}>
            <div>{result.text}</div>
            <div>{result.status}</div>
            <div>{result.desc}</div>
            <select value={result.status}>
                <option value="1">
                    Do Later
                </option>
                <option value="2">
                    Doing
                </option>
                <option value="3">
                    Suspended
                </option>
                <option value="4">
                    Done
                </option>
            </select>
            <button>
                Edit
            </button>
        </div>
        return
        <div>
            editing div
        </div>
    }
}

export default TodoItem;