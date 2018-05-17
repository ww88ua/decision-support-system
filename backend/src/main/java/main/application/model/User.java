package main.application.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

  @Id @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String email;
  private String password;
  private String name;
  private boolean admin = false;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable
  private Set<User> tasks;

  public User() {
  }

  public User(String email, String password, String name, boolean admin, Set<User> tasks) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.admin = admin;
    this.tasks = tasks;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public boolean isAdmin() {
    return admin;
  }

  public void setAdmin(boolean admin) {
    this.admin = admin;
  }

  public Set<User> getTasks() {
    return tasks;
  }

  public void setTasks(Set<User> tasks) {
    this.tasks = tasks;
  }
}
