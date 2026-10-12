package walkingapp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Course {

@Id
private Long courseId;

private String courseName;

private String area;

private String description;

private Double distance;

}