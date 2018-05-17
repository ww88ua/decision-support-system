package main.application.controller;

import main.application.model.Task;
import main.application.model.User;
import main.application.service.TaskService;
import main.application.service.UserService;
import org.hibernate.validator.constraints.EAN;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class TaskController {

  @Autowired
  TaskService service;

  @Autowired
  UserService userService;

  @PostMapping("/task/add")
  @CrossOrigin(origins = "http://localhost:4200")
  public Task addTask(@RequestBody Task task) {
    return service.addNewTask(task);
  }

  @GetMapping("/task/all")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Task> getTaskList() {
    return service.getAll();
  }

  @RequestMapping(method = RequestMethod.DELETE, value = "/task/delete/{id}")
  @CrossOrigin
  public void removeTask(@PathVariable("id") long id) {
    service.deleteTask(id);
  }

  @RequestMapping(method = RequestMethod.GET, value = "/task/get/{id}")
  @CrossOrigin
  public Task getTaskById(@PathVariable("id") long id) {
    return service.findTaskById(id);
  }


}
