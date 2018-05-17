package main.application.controller;

import main.application.model.User;
import main.application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

  @Autowired
  UserService service;

  @PostMapping("/users/add")
  @CrossOrigin(origins = "http://localhost:4200")
  public void addExpert(@RequestBody User user) {
    service.addNewExpert(user);
  }

  @GetMapping("/users/all")
  @CrossOrigin(origins = "http://localhost:4200")
  public List<User> getExpertsList() {
    return service.getAllUsers();
  }

  @GetMapping("/user/{email}")
  @CrossOrigin(origins = "http://localhost:4200")
  public User getUserByEmail(@PathVariable(name = "email") String email) {
    return service.findUserByEmail(email);
  }

  @RequestMapping(value = "/user/get/{id}", method = RequestMethod.GET)
  @CrossOrigin
  public User getUserById(@PathVariable(name = "id") long id) {
    return service.findUserById(id);
  }

}
