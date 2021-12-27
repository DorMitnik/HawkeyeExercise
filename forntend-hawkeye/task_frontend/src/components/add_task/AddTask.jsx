import React, { useState } from "react";
import { create_task } from "../../actions/task";
import "./AddTask.css";

const AddTask = (props) => {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    status: false,
    deadline: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const onClick = () => {
    const taskToAdd = {
      ...formData
    }
    if(formData.deadline==="")
      taskToAdd.deadline = null
    create_task(taskToAdd)
      .then(() => {
        console.log("Succsess");
        props.handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add-task-container">
      <h1>Add Task</h1>
      <label>
        {" "}
        Task Name
        <input
          type="string"
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Description
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Completed
        <input
          type="checkbox"
          name="status"
          checked={formData.status}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Deadline
        <input
          type="datetime-local"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
        />
      </label>
      <button className="save-button" onClick={onClick}> Save</button>
    </div>
  );
};

export default AddTask;
