package main.application.repository;

import main.application.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
  User getUserByEmail(String email);
}
