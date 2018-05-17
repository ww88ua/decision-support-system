package main.application.model;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tasks")
public class Task {

  @Id @GeneratedValue
  private long id;

  private String name;
  private String description;

  @OneToMany(cascade = {CascadeType.ALL})
  @JoinColumn(name = "task_id")
  private List<Alternative> alternatives;

  @OneToMany(cascade = {CascadeType.ALL})
  @JoinColumn(name = "task_id")
  private List<Criteria> criterias;

  @ManyToMany(mappedBy = "tasks")
  private Set<User> users;

  public Task() {
  }

  public Task(String name, String description, List<Alternative> alternatives, List<Criteria> criterias, Set<User> users) {
    this.name = name;
    this.description = description;
    this.alternatives = alternatives;
    this.criterias = criterias;
    this.users = users;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public List<Alternative> getAlternatives() {
    return alternatives;
  }

  public void setAlternatives(List<Alternative> alternatives) {
    this.alternatives = alternatives;
  }

  public List<Criteria> getCriterias() {
    return criterias;
  }

  public void setCriterias(List<Criteria> criterias) {
    this.criterias = criterias;
  }

  public Set<User> getUsers() {
    return users;
  }

  public void setUsers(Set<User> users) {
    this.users = users;
  }
}
