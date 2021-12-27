import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import SubTask from "../sub_task/SubTask";
import AddSubTask from "../add_subtask/AddSubTask";
import Modal from "react-modal/lib/components/Modal";
import { delete_task, update_task_status } from "../../actions/task";
import "./Task.css";

const Task = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [status, setStatus] = useState(props.task.status);

  const handleAddSubTask = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const deleteTask = () => {
    delete_task(props.task.id)
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
    update_task_status(props.task.id, checked)
      .then(() => {
        console.log("Succsess");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBarStatus = () => {
    let completed = 0;
    props.subtasks.forEach((subtask) => {
      if (subtask.status) completed++;
    });
    return parseInt((completed / props.subtasks.length) * 100);
  };
console.log(props.task)
  return (
    <div className="task-container">
      <label className="task-name"> {props.task.task}</label>
      {props.task.description && (
         <text className="description-text"> Description: {props.task.description} </text>
      )}
      <button className="sub-task" onClick={handleAddSubTask}>
        Add Sub-Task
      </button>
      <button className="delete-task" onClick={deleteTask}>
        Delete 
      </button>
      <input
        className="check-box"
        type="checkbox"
        checked={status}
        onChange={handleStatusChange}
      />
      {props.subtasks.length > 0 && (
        <ProgressBar className="progress-bar" bgColor="#9370db" completed={handleBarStatus()} />
      )}
      <ul className="sub-tasks-container">
        {props.subtasks.map((subtask) => (
          <SubTask key={subtask.id} subtask={subtask} />
        ))}
      </ul>
      <Modal
        className="add-subtask-modal"
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
      >
        <AddSubTask parentId={props.task.id} taskName={props.task.task} handleCloseModal={handleCloseModal}/>
      </Modal>
    </div>
  );
};

export default Task;
