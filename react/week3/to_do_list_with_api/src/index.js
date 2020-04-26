import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from 'react-date-picker'

import './index.css';
import CreateNewTask from './newTask.js';


const URL = 'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
fetch(URL).then(
  function (response) {
    if (response.status !== 200) {
      console.log('Please check your internet connection');
      return;
    }
    response.json().then(buildThePage);
  }
)


class Title extends React.Component {
  render() {
    return (
      <div id='headerContainer'>
        <h1>ToDoList</h1>
      </div>
    )
  }
}

class Counter extends React.Component {
  state = { ellapsedTime: this.props.initialValue }
  timerIncrement = () => {
    this.setState({ ellapsedTime: this.state.ellapsedTime + 1 })
  }

  componentDidMount() {
    setInterval(this.timerIncrement, 1000)
  }

  render() {
    return (
      <div id='counterCointainer'>
        <h3>You have used {this.state.ellapsedTime} seconds</h3>
      </div>
    )
  }
}

class SingleTaskMaker extends React.Component {
  state = { ...this.props.task, text: "Edit" }

  toggleDoneStatus = () => {
    this.setState({ ...this.state, donestatus: !this.state.donestatus })
  }

  deleteTaks = () => {
    this.setState({ ...this.state, display: !this.state.display })
  }

  editTask = () => {
    if (this.state.editmode) {
      this.setState({ ...this.state, text: "Edit", editmode: false })
    } else {
      this.setState({ ...this.state, text: "Update", editmode: true })
    }
  }

  updateTaskDescription = (evnt) => {
    this.setState({ description: evnt.target.value })
  }

  taskTitle = () => {
    if (this.state.editmode) {
      return (
        <li className='taskName'>
          <input type="text" defaultValue={this.state.description} onChange={this.updateTaskDescription} name='taskDescription' ></input>
        </li>
      )
    } else {
      return (
        <li
          className='taskName'
          key={this.state.id}
          style={{ textDecoration: this.state.donestatus ? 'line-through' : 'none' }}>
          {`${this.state.description} | ${this.state.deadline}`}
        </li>
      )
    }
  }

  render() {
    if (!this.state.display) return (<></>);
    return (
      <li key={'task' + this.state.id} className='taskLine'>
        <ul>
          {this.taskTitle()}
          <input type="checkbox" onChange={this.toggleDoneStatus}></input>
          <button onClick={this.deleteTaks} > Delete </button>

          <button onClick={e => this.editTask(this.state.editmode)} > {this.state.text} </button>

          <li>{`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</li>
        </ul>
      </li>
    )
  }

}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      ...this.props, newTaskDate: new Date(),
      NewTaskName: 'Add new task',
    }
  }

  cleanDefaultValue = () => {
    this.setState({ NewTaskName: '' })
  }

  onChangeNewTaskDescription = (evnt) => {
    this.setState({ NewTaskName: evnt.target.value })
    console.log(this.state)
  }

  onChange = date => this.setState({ newTaskDate: date })

  addbuttonClick = () => {
    console.log(this.state.toDoList);
    const toDoListArray = [{
      id: 6,
      description: this.state.NewTaskName,
      deadline: '2019-07-14',
      donestatus: false,
      display: true,
      editmode: false,
    }]
    // ####################### Question to mentor  #############################
    // How may I reset the placeholder of the text box 
    this.setState({ toDoList: this.state.toDoList.concat(toDoListArray), NewTaskName: 'Add new task' })
  }

  newTaskMaker = () => {
    console.log(this.myRef.current)
    return (
      <div className='NewTascContainer' key='newTaskMaker'>
        <input id='newTaskBox' type="text" placeholder={this.state.NewTaskName} onClick={this.cleanDefaultValue} onChange={this.onChangeNewTaskDescription} />
        <DatePicker
          onChange={this.onChange}
          value={this.state.newTaskDate}
        />

        <button onClick={this.addbuttonClick}>ADD</button>
        <p>{`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</p>
      </div>
    )
  }

  render() {
    console.log(this.state)
    let listComponent = (this.state.toDoList).map(task => <SingleTaskMaker task={task} />)
    return (
      <ul id='taskList'>
        {/* <AddNewTask toDoList={this.state.toDoList} /> */}
        {
          this.newTaskMaker()

        }
        {/* <CreateNewTask taskList={this.state.toDoList}/> */}
        {listComponent}
        <p>{`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</p>
      </ul>
    )
  }
}


class Page extends React.Component {
  render() {
    return (
      <div key='theWholePage'>
        <Title />
        <Counter initialValue={0} />
        <List toDoList={this.props.toDoList} />
        <p>{`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}</p>
      </div>
    )
  }
}

const root = document.getElementById('root')

const buildThePage = dataFromAPI => {

  //add donestatus key to the task objects
  dataFromAPI.map(task => {
    task.donestatus = false;
    task.display = true;
    task.editmode = false;
    return (task)
  })
  // rendering the page
  ReactDOM.render(<Page toDoList={dataFromAPI} />, root)
}