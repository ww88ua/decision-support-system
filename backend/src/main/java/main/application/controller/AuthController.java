package main.application.controller;

import main.application.model.User;
import main.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

  @Autowired
  UserService service;

  @CrossOrigin(origins = "http://localhost:4200")
  @RequestMapping("/auth/login")
  public User loginUser(@RequestParam("email") String email, @RequestParam("password") String password) {
    User user = service.loginUser(email, password);
    System.err.println(user);
    return user;
  }

  @RequestMapping("/add")
  public void loginUser() {
    User user = new User("admin@gmail.com", "1111", "Администратор", true);
    service.addUser(user);
  }
}
