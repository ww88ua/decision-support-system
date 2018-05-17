package main.application.repository;

import main.application.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {
  User getUserByEmail(String email);
  User getUserById(long id);
  List<User> getUsersByAdminIsFalse();
}
