package main.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Factor {

  @Id @GeneratedValue
  private long id;

  private String mandatory;
  private String search;

}
