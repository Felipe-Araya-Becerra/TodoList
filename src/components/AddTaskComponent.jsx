import React, { useEffect, useState } from "react";
import TasksService from "../services/TasksService";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddTaskComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()
  const {id} = useParams();


  const saveTask = (e) => {
    e.preventDefault();
    const task = { title, description };
    TasksService.createTask(task).then(response => {
      console.log(response.data)
      navigate('/')
    }).catch(error => {
      console.log(error)
    })
  };

  useEffect(()=>{
    TasksService.getTaskById(id).then(response =>{
      setTitle(response.data.title);
      setDescription(response.data.description)
    }).catch(error => {
      console.log(error)
    })
  })

  const pageTitle = () =>{
    if(id){
      return <h2 className="text-center">Actualizar Tarea</h2>
    }else{
      return <h2 className="text-center">Agregar Tarea</h2>
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h1 className="text-center">{pageTitle()}</h1>
            <div className="card-body">
              <form action="">
                <div className="form-group mb-2">
                  <label className="form-label">Title: </label>
                  <input
                    type="text"
                    placeholder="Introduzca un titulo"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Description: </label>
                  <input
                    type="text"
                    placeholder="Introduzca una descripcion"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveTask(e)}
                >
                  Enviar
                </button>
                &nbsp;&nbsp;
                <Link
                  className="btn btn-danger"
                  to = '/'
                >
                  Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskComponent;
