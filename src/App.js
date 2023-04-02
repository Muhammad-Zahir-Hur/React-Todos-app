import "./App.css";
import { useState } from "react";
import TaskInput from "./TaskInput.jsx";
import { expTitle, expDis } from "./TaskInput.jsx";
import { useEffect } from "react";

function Task(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.dis}</td>
    </tr>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [titlesArr, setTitlesArr] = useState([]);
  const [disArr, setDisArr] = useState([]);

  const tooglePopup = () => {
    setIsOpen(!isOpen);
    console.log("toogling Popup");
  };

  function setTasksAndClose() {
    if (!expTitle) {
      alert("Give a title");
      return;
    }
    setTitlesArr([...titlesArr, expTitle]);
    setDisArr([...disArr, expDis]);
    console.log(expTitle + ";  " + expDis);
    console.log(titlesArr);
    console.log(disArr);
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <title>Todos app with react js by Me </title>
        <div className="container">
          <div className="tasks">
            <h1>Your Tasks</h1>
            <div className="">
              <button
                className="plus-ico"
                onClick={() => {
                  tooglePopup();
                }}
              >
                Add Task
              </button>
            </div>

            {isOpen && (
              <TaskInput handleClose={tooglePopup} setTasksAndClose={setTasksAndClose} />
            )}

            



            <table className="tasks-table">
              <thead>
                <tr>
                  <th className="task-heading">Task</th>
                  <th className="discription-heading">Driscription</th>
                </tr>
              </thead>
              <tbody>
                {useEffect(() => {
                  console.log(
                    "printing form inside of the useEffect, where the Task component had to be rendered"
                  );
                }, [titlesArr, disArr])
                }

                {  titlesArr.map((value, index) => (
                    <Task title={value} dis={disArr[index]} />
                  ))
                }
                


 
              </tbody>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
