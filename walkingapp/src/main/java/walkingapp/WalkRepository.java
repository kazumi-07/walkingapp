package walkingapp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface WalkRepository
extends JpaRepository<Walk, Long> {

}