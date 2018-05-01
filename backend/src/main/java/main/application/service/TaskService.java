package main.application.service;

import main.application.model.Task;
import main.application.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

  @Autowired
  TaskRepository repository;

  public Task addNewTask(Task task) {
    return repository.save(task);
  }

}
