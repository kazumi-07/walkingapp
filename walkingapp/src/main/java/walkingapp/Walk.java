package walkingapp;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Walk {

@Id
private Long walkId;

private String walkDate;

private String startTime;

private String endTime;

private Double distance;

private Integer steps;

private Double calories;

}