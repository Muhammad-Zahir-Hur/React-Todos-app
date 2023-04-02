import { useEffect, useState } from "react";

let expTitle = "";
let expDis = "";
export default function TaskInput(props) {
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState();

  useEffect(() => {
    expTitle = title
    expDis = dis

  }, [title, dis])
  

  
  return (
    <div className="add-task-area">
      <div className="input-area">
        <div className="close" onClick={props.handleClose}>
          <span>X</span>
        </div>
        <div className="input-set">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add Title"
            onKeyUp={(e) => {
              expTitle = e.target.value;
              console.log(expTitle)
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name="discription"
            id="discription"
            placeholder="Discription"
            onKeyUp={(e) => {
              expDis = e.target.value;
              console.log(expDis)
              setDis(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="add-task" onClick={props.setTasksAndClose} >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export { expTitle, expDis}