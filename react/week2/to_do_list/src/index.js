import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const todos = [
  {
    id: 0,
    description: "Get out of bed",
    color: "brown",
    deadline: "2020-06-08",
    done: false,
    Visibility: true
  },
  {
    id: 1,
    description: "Brush teeth",
    color: "red",
    deadline: "2020-06-08",
    done: false,
    Visibility: true
  },
  {
    id: 2,
    description: "Eat breakfast",
    color: "orange",
    deadline: "2020-06-08",
    done: true,
    Visibility: true
  }
];

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { renderTrigger: true };
  }

  deleteTask(index) {
    this.props.taskData[index].Visibility = false;
    this.setState({ renderTrigger: !this.state.renderTrigger });
  }

  taggleDoneState(index) {
    this.props.taskData[index].done = !this.props.taskData[index].done;
    this.setState({ renderTrigger: !this.state.renderTrigger });
  }

  taskStyle(done) {
    if (done) {
      return { textDecoration: "line-through" };
    }
  }

  addRandomTask = () => {
    console.log(this.props.taskData);
    this.props.taskData.push({
      id: this.props.taskData.length,
      description: "Random Text",
      color: getRandomColor(),
      deadline: "2020-12-29",
      done: false,
      Visibility: true
    });
    this.setState({ renderTrigger: !this.state.renderTrigger });
  };

  MakeMyList = () => {
    const filteredTasks = this.props.taskData.filter(task => task.Visibility);
    const task2HTML = filteredTasks.map((task, index) => {
      return (
        <div key={index} style={this.taskStyle(task.done)}>
          <ul className="taskHeader">
            <li>Task Name: </li>

            <li className="taskName">
              <font color={task.color}>
                {" "}
                <strong>{task.description}</strong>{" "}
              </font>
            </li>

            <li>
              {/* Checkbox for overline the task from the list */}
              <input
                name="overLine"
                type="checkbox"
                checked={task.done}
                onChange={e => this.taggleDoneState(task.id)}
              />
            </li>

            <li>
              {/* Button for deleting the task from the list */}
              <button onClick={e => this.deleteTask(task.id)}> Delete </button>
            </li>
          </ul>
          {/* Task items are listed underneath each task */}
          <ul>
            <li>ID: {task.id}</li>
            <li>Deadline: {task.deadline}</li>
          </ul>
        </div>
      );
    });
    return task2HTML;
  };

  render() {
    return (
      <div>
        <h1> My To Do List</h1>
        <button onClick={this.addRandomTask}> Add ToDo </button>
        <this.MakeMyList />
        <p>it is {new Date().toLocaleTimeString()} </p>
      </div>
    );
  }
}

ReactDOM.render(<TodoList taskData={todos} />, document.getElementById("root"));
