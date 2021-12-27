import React,{useState} from "react";
import { delete_sub_task,update_sub_task_status } from "../../actions/subtask";
import "./SubTask.css"


const SubTask = (props) => {
  const [status, setStatus] = useState(props.subtask.status);

  const deleteSubTask = () => {
    delete_sub_task(props.subtask.id)
      .then(() => {
        console.log("Succsess");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStatusChange = (e) => {
    const checked = e.target.checked;
    setStatus(checked);
    update_sub_task_status(props.subtask.id, checked)
      .then(() => {
        console.log("Succsess");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sub-task-container">
    <li>
      <label className="subtask-label"> {props.subtask.sub_task_name}</label>
      {props.subtask.description && (
         <text className="description-text"> Description: {props.subtask.description} </text>
      )}
      <button  className="delete-sub-task" onClick={deleteSubTask}>Delete</button>
      <input className="check-box-sub" type="checkbox"  checked={status} onChange={handleStatusChange}/>
    </li>
    </div>
  );
};



export default SubTask;