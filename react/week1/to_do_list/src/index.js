import React from "react";
import ReactDOM from "react-dom";

const tasks = [
  { title: "Do HYF homework", deadline: "2020-03-25", color: "purple" },
  { title: "Wash the dishes", deadline: "2020-03-25", color: "orange" },
  { title: "run the washing machine", deadline: "2020-03-25", color: "blue" },
  { title: "go for shopping", deadline: "2020-03-25", color: "green" }
];

const headerText = "My ToDo List";

ReactDOM.render(
  <div>
    <Header text={headerText} />
    <ListMaker mytasks={tasks} />
  </div>,
  document.getElementById("root")
);

function Header(props) {
  return <h1>{props.text}</h1>;
}

function ListMaker(props) {
  return props.mytasks.map((task, index) => (
    <div style={{ color: task.color }}>
      The task named "<strong>{task.title}</strong>" should be finished before "
      <strong>{task.deadline}</strong>".
    </div>
  ));
}
