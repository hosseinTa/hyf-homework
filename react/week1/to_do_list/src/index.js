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

function strongText(theWord) {
  return <strong>{theWord}</strong>;
}

function paragraph(keyValue, paragraphContent) {
  return <p key={keyValue}>{paragraphContent}</p>;
}

function ListMaker(props) {
  console.log(props);
  const listoftask = props.mytasks.map((task, index) => {
    return paragraph(
      index,
      <font color={task.color}>
        {" "}
        The task named "{strongText(task.title)}" should be finished before{" "}
        {strongText(task.dealline)}{" "}
      </font>
    );
  });
  console.log(listoftask);
  return listoftask;
}
