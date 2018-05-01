package main.application.controller;

import main.application.model.Task;
import main.application.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {

  @Autowired
  TaskService service;

  @PostMapping("/task/add")
  public void addTask(@RequestBody Task task) {
    System.err.println(task);
    service.addNewTask(task);
  }

}
