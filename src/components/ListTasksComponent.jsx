import React, { useEffect, useState } from "react";
import TasksService from "../services/TasksService";
import { Link } from "react-router-dom";

const ListTasksComponent = () => {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    ListTasks();
  }, []);

  const ListTasks = () => {
    TasksService.getAllTasks()
      .then((response) => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTask = (taskId) => {
    TasksService.deleteTask(taskId)
      .then((response) => {
        ListTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Lista de tareas</h2>
      <Link to="addTask" className="btn btn-primary mb-2">
        {" "}
        Agregar tarea
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Options</th>
        </thead>
        <tbody>
          {task.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <Link className="btn btn-info" to={`updateTask/${task.id}`}>
                  Actualizar
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTasksComponent;
