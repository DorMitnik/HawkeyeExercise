import React, { useState } from "react";
import { create_sub_task } from "../../actions/subtask";
import "./AddSubTask.css";

const AddTask = (props) => {
  const [formData, setFormData] = useState({
    sub_task_name: "",
    description: "",
    status: false,
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
    const subTask = {
      ...formData,
      parent_task: props.parentId,
    };
    create_sub_task(subTask)
      .then(() => {
        console.log("Succsess");
        props.handleCloseModal();
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-subtask-container">
      <h1 className="add-text">Add SubTask</h1>
      <label>Task name: {props.taskName}</label>
      <label>
        {" "}
        SubTask Name
        <input
          type="string"
          name="sub_task_name"
          value={FormData.sub_task_name}
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
      <button className="save-button" onClick={onClick}> Save</button>
    </div>
  );
};

export default AddTask;
