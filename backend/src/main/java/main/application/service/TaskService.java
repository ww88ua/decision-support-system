package main.application.service;

import main.application.model.Task;
import main.application.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TaskService {

  @Autowired
  TaskRepository repository;

  public Task addNewTask(Task task) {
    return repository.save(task);
  }

  public List<Task> getAll() {
    return (List<Task>) repository.findAll();
  }

  @Transactional
  public void deleteTask(long id) {
    repository.deleteTaskById(id);
  }

  public Task findTaskById(long id) {
    return repository.getTaskById(id);
  }

}
