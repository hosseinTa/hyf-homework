import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const taskList = [
  {
    id: 0,
    description: "Get out of bed",
    color: "brown",
    deadline: "2020-06-08",
    done: false,
    visibility: true
  },
  {
    id: 1,
    description: "Brush teeth",
    color: "red",
    deadline: "2020-06-08",
    done: false,
    visibility: true
  },
  {
    id: 2,
    description: "Eat breakfast",
    color: "orange",
    deadline: "2020-06-08",
    done: true,
    visibility: true
  }
];

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome to My ToDo List</h1>
        <br ></br>
      </div>
    )
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ellapsedTime: this.props.initial,
    };
  }

  componentDidMount() {
    setInterval(this.increment, 1000);
  }

  increment = () => {
    this.setState({ ellapsedTime: this.state.ellapsedTime + 1 })
  }

  StartTimer = () => {
    setInterval(this.increment, 1000);
  }

  render() {

    return (
      <div>
        <p> you have spent {this.state.ellapsedTime} seconds in this page</p>
        <br></br>
      </div>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoListData: this.props.toDoListData
    }
  }

  addRandomTask(toDoListData) {
    toDoListData.push({
      id: toDoListData.length,
      description: "Random Text",
      color: 'navygrey',
      deadline: "2020-12-29",
      done: false,
      visibility: true
    });
    this.setState({ toDoListData: this.props.toDoListData })
  }

  render() {
    let toDoListJSXarray = [];
    for (let i = 0; i < this.props.taskList.length; i++) {
      toDoListJSXarray.push(<ToDoTask task={this.props.taskList[i]} />)
    }
    return (
      <div>
        <button onClick={e => this.addRandomTask(this.props.taskList)}> Add a Task </button>
        {toDoListJSXarray}
        <br ></br>
      </div>
    )
  }
}

class ToDoTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: this.props.task
    }
  }

  deleteTask() {
    this.props.task.visibility = !this.props.task.visibility
    this.setState({ task: this.props.task })
  }

  toggleDoneState() {
    this.props.task.done = !this.props.task.done
    this.setState({ task: this.props.task })
  }

  render() {
    if (this.state.task.visibility) {
      return (
        <ul className={this.state.task.done ? 'lineThroughTaskHeader' : 'normalTaskHeader'}>
          {/* Make an H2 text for the task name */}
          <li className="taskName">
            <font color={this.props.task.color}>
              {" "}
              <h3>{this.props.task.description}</h3>{" "}
            </font>
          </li>

          {/* Checkbox for overline the task from the list */}
          <li>
            <input
              name="overLine"
              type="checkbox"
              defaultChecked={this.state.task.done}
              onChange={e => this.toggleDoneState(this.props.task.id)}
            />
          </li>

          {/* Button for deleting the task from the list */}
          <li>
            <button onClick={e => this.deleteTask(this.props.task.id)}> Delete </button>
          </li>
          <br ></br>
        </ul>
      )
    } else {
      return (
        <div />
      )
    }
  }
}

class Page extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Counter initial={this.props.initial} />
        <TodoList taskList={this.props.taskList} />
      </div>
    )
  }
}

ReactDOM.render(<Page initial={0} taskList={taskList} />, document.getElementById("root"));