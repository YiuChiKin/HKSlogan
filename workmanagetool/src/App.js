import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './TodoItem';

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
              id: 1,
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
              id: 1,
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

  render() {
    console.log(this.state);
    return (
      <div className="body">
        <div className="Header">
          {this.state.currentprojectitems.projectname}
        </div>
        {
          this.state.currentprojectitems.todoList.map((result, i) => {
            return <TodoItem result={result}/>
          })
        }
      </div>
    );
  }
}

export default App;
