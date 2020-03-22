import React from "react";
import ReactDOM from "react-dom";

const tasks = [
  { title: "Do HYF homework", dealline: "2020-03-25", color: "purple" },
  { title: "Wash the dishes", dealline: "2020-03-25", color: "orange" },
  { title: "run the washing machine", dealline: "2020-03-25", color: "blue" },
  { title: "go for shopping", dealline: "2020-03-25", color: "green" }
];

ReactDOM.render(
  <div>
    <h1>This Is My To Do List</h1>
    <Header />
    <ListMaker mytasks={tasks} />
  </div>,
  document.getElementById("root")
);

function Header(props) {
  console.log(props);
  return <h1>My ToDo List</h1>;
}

function ListMaker(props) {
  console.log(props);
  const listoftask = props.mytasks.map((task, index) => {
    return (
      <p key={index}>
        {" "}
        <font color={task.color}>
          {" "}
          The task named "{task.title}" should be finished before{" "}
          <strong>"{task.dealline}"</strong>
        </font>{" "}
      </p>
    );
  });
  console.log(listoftask);
  return listoftask;
}
