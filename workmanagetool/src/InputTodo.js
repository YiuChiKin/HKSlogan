import React, { Component } from 'react';

class NewTodo extends Component {
    constructor(props)
    {
        super(props);

        this.todoNew = React.createRef();
        this.AddTodoItem = this.AddTodoItem.bind(this);
    }

    AddTodoItem(e) {
        //alert(this.todoNew.current.value);
        this.props.addTodo(this.todoNew.current.value);
        //clear the input
        e.preventDefault();
    e.target.reset();
    }

    render() {
        return <div className="inputitem">
            New Todo:
            <input ref={this.todoNew} id="newtodoinput"></input>
            <button onClick={this.AddTodoItem}>
                + Add
            </button>
            <button>
                Save
            </button>
            Project:
            <button>Previous</button>
            <button>Next</button>
        </div>
    }
}

export default NewTodo;