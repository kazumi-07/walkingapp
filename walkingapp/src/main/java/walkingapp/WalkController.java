package walkingapp;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WalkController {

private final WalkService walkService;

public WalkController(WalkService walkService) {
this.walkService = walkService;
}

@GetMapping("/walks")
public List<Walk> getWalks() {
return walkService.getAllWalks();
}
@PostMapping("/walks")
public Walk saveWalk(@RequestBody Walk walk) {
return walkService.saveWalk(walk);
}
@PutMapping("/walks")
public Walk updateWalk(@RequestBody Walk walk) {
return walkService.saveWalk(walk);
}
@DeleteMapping("/walks/{id}")
public void deleteWalk(@PathVariable Long id) {
walkService.deleteWalk(id);
}

}