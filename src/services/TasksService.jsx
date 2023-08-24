import axios from "axios"

const TASKS_BASE_API_URL = "http://localhost:8080/api/v1/tasks"

const CREATE_TASK_BASE_API_URL = "http://localhost:8080/api/v1/createTask"

const UPDATE_TASK_BASE_API_URL = "http://localhost:8080/api/v1/updateTask"

const DELETE_TASK_BASE_API_URL = "http://localhost:8080/api/v1/delete"


class TaskService{

  getAllTasks(){
    return axios.get(TASKS_BASE_API_URL)
  }

  createTask(task){
    return axios.post(CREATE_TASK_BASE_API_URL,task)
  }

  getTaskById(taskId){
    return axios.get(TASKS_BASE_API_URL +'/'+taskId)
  }

  updateTask(taskId,task){
    return axios.put(UPDATE_TASK_BASE_API_URL+'/'+taskId,task)
  }

  deleteTask(taskId){
    return axios.delete(DELETE_TASK_BASE_API_URL+'/'+taskId)
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TaskService();