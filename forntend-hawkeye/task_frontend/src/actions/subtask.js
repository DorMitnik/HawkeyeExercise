import axios from "axios";

export const get_all_sub_tasks = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://127.0.0.1:8000/get_all_sub_tasks/")
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const create_sub_task = (task) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://127.0.0.1:8000/create_sub_task/", task)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const delete_sub_task = (subTaskId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`http://127.0.0.1:8000/delete_sub_task/${subTaskId}`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const update_sub_task_status = (subTaskId, status) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`http://127.0.0.1:8000/update_sub_task_status/${subTaskId}`, {status})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
