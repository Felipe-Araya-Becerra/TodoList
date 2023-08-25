package com.acl.Todolist.Controller;

import com.acl.Todolist.Model.Task;
import com.acl.Todolist.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(path = "/api/v1/")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;
    @GetMapping(value = "/tasks")
    public List<Task> getAllTasks(){
        return todoRepository.findAll();
    }

    @GetMapping(value = "/tasks/{id}")
    private Optional<Task> getTaskById(@PathVariable Long id){
        return todoRepository.findById(id);
    }

    @PostMapping(value = "/createTask")
    public String createTask(@RequestBody Task task){
        todoRepository.save(task);
        return "Saved task";
    }

    @PutMapping(value = "/updateTask/{id}")
    public String updateTask(@PathVariable Long id,  @RequestBody Task task ){
        Task updatedTask = todoRepository.findById(id).get();
        updatedTask.setTitle(task.getTitle());
        updatedTask.setDescription(task.getDescription());
        todoRepository.save(updatedTask);
        return "Task updated";
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteTask(@PathVariable Long id){
        Task deletedTask = todoRepository.findById(id).get();
        todoRepository.delete(deletedTask);
        return "task Deleted";
    };
}
