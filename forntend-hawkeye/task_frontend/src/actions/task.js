import axios from "axios";

export const get_all_tasks = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://127.0.0.1:8000/get_all_tasks/")
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const create_task = (task) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://127.0.0.1:8000/create_task/", task)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const delete_task = (taskId) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`http://127.0.0.1:8000/delete_task/${taskId}`)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  export const update_task_status = (taskId, status) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`http://127.0.0.1:8000/update_task_status/${taskId}`, {status})
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
