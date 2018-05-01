package main.application.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tasks")
public class Task {

  @Id @GeneratedValue
  private long id;

  private String name;
  private String description;

  @OneToMany
  private List<Alternative> alternatives;

  @OneToMany
  private List<Factor> factors;
}
