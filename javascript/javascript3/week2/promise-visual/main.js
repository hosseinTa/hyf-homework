const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
function translateOneByOne() {
  moveElement(redBox, { x: 20, y: 300 }).then(
      () => moveElement(blueBox, { x: 400, y: 300 })
  ).then(

      () => moveElement(greenBox, { x: 400, y: 20 })
  )
}

function moveToOrigin() {
  moveElement(redBox, { x: 5, y: 3 });
  moveElement(blueBox, { x: 2, y: 2 });
  return moveElement(greenBox, { x: 30, y: 1 });
}

function translateAllAtOnce() {
    moveElement(redBox, { x: 20, y: 300 });
    moveElement(blueBox, { x: 400, y: 300 });
    return moveElement(greenBox, { x: 400, y: 20 });
}

translateAllAtOnce().then(() => moveToOrigin().then(()=> translateOneByOne()));