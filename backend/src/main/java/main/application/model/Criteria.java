package main.application.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Criteria {

  @Id @GeneratedValue
  private long id;

  private String name;

  @OneToOne
  private Criteria subCriteria;

  public Criteria() {
  }

  public Criteria(String name) {
    this.name = name;
  }

  public Criteria(String name, Criteria subCriteria) {
    this.name = name;
    this.subCriteria = subCriteria;
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

  public Criteria getSubCriteria() {
    return subCriteria;
  }

  public void setSubCriteria(Criteria subCriteria) {
    this.subCriteria = subCriteria;
  }
}
