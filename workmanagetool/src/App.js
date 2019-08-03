import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './TodoItem';
import NewTodo from './InputTodo';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      projectlist: [
        {
          id: 1,
          projectname: 'default project sample',
          todoList: [
            {
              text: 'sample todo item',
              status: 1,
              desc: 'any thing happen? todo description.'
            }
          ]
        }
      ],
      currentprojectid: 1,
      currentprojectitems: {
          id: 1,
          projectname: 'default project sample',
          todoList: [
            {
              text: 'sample todo item',
              status: 1,
              desc: 'any thing happen? todo description.'
            }
          ]
      },
      isSave: true,
      statusList: {
        one: 'todo',
        two: 'doing',
        three: 'suspended',
        four: 'done'
      }
    };

    this.AddTodoList = this.AddTodoList.bind(this);
  }

  componentDidMount()
  {
    //load the localstorage settings
    /*let isFirstOpen = localStorage.getItem('SettingExist');
    let thisoutside = this;
    if(isFirstOpen == "true")
    {
      //first open
      //set the localstorage with default items
      localStorage.setItem('prg1', 'default project');
      localStorage.setItem('SettingExist', 'true');
    }
    else
    {
      //not first open, load the projects
      let project1 = localStorage.getItem('prg1');
      let project2 = localStorage.getItem('prg2');
      let project3 = localStorage.getItem('prg3');
      let project4 = localStorage.getItem('prg4');
      let project5 = localStorage.getItem('prg5');

      let projectlist = [];
      projectlist.push(project1);
      projectlist.push(project2);
      projectlist.push(project3);
      projectlist.push(project4);
      projectlist.push(project5);

      thisoutside.setState({
        currentprojectitems: projectlist[0]
      });
    }*/
  }

  AddTodoList(data)
  {
    //console.log(data);
    //add to current list
    let currentprojectitems = this.state.currentprojectitems.todoList;
    currentprojectitems.push(            {
      text: data,
      status: 1,
      desc: 'any thing happen? todo description.'
    });

    this.setState({
      id: this.state.currentprojectitems.projectname,
      projectname: this.state.currentprojectitems.projectname,
      todoList: currentprojectitems
    });
  }

  render() {
    //console.log(this.state);
    if(this.state.currentprojectitems.todoList == null)
    {
      return <div>Something goes wrong..</div>
    }
    return (
      <div className="body">
        <div className="Header">
          {this.state.currentprojectitems.projectname}
        </div>
        <NewTodo addTodo={this.AddTodoList}/>
        <div className="TodoTable">
        {
          this.state.currentprojectitems.todoList.map((result, i) => {
            return <TodoItem result={result} id={i}/>
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
