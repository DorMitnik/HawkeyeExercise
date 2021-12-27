import React, { useState, useEffect } from "react";
import AddTask from "./components/add_task/AddTask";
import Task from "./components/task/Task";
import Modal from "react-modal/lib/components/Modal";
import { get_all_tasks } from "./actions/task";
import { get_all_sub_tasks } from "./actions/subtask";
import "./App.css";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [subtasks, setSubTasks] = useState([]);

  useEffect(() => {
    get_all_tasks()
      .then((tasks) => {
        console.log(tasks)
        setTasks(tasks);
      })
      .catch((err) => {
        console.log(err);
      });
    get_all_sub_tasks()
      .then((subtasks) => {
        console.log(subtasks)
        setSubTasks(subtasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const get_sub_tasks_by_id = (task_id) => {
      return subtasks.filter((subtask)=> {
        return subtask.parent_task === task_id
      } )
  }
  const handleAddTask = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    window.location.reload()
  };

  return (
    <div className="app-container">
      <h1 className="headline">ToDo App</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} subtasks={get_sub_tasks_by_id(task.id)}/>
      ))}
      <button className="add-task" onClick={handleAddTask}>Add Task</button>
      <Modal className="add-task-modal" isOpen={isOpen} onRequestClose={handleCloseModal}>
        <AddTask handleCloseModal={handleCloseModal}/>
      </Modal>
    </div>
  );
};

export default App;
