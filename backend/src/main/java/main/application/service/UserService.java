package main.application.service;

import main.application.model.User;
import main.application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

  @Autowired
  UserRepository repository;

  public User loginUser(String email, String password) {
    User user = repository.getUserByEmail(email);
    if (user.getPassword().equals(password)) return user;
    return  null;
  }

  public void addUser(User user) {
    repository.save(user);
  }

}
