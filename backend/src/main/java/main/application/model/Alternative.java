package main.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Alternative {

  @Id @GeneratedValue
  private long id;

  private String name;
  private String description;

}
