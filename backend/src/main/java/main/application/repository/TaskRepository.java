package main.application.repository;

import main.application.model.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
  void deleteTaskById(long id);
  Task getTaskById(long id);
}
