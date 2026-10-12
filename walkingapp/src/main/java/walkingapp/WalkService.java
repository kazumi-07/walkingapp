package walkingapp;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WalkService {

private final WalkRepository walkRepository;

public WalkService(WalkRepository walkRepository) {
this.walkRepository = walkRepository;
}

public List<Walk> getAllWalks() {
return walkRepository.findAll();
}
public Walk saveWalk(Walk walk) {
return walkRepository.save(walk);
}
public void deleteWalk(Long id) {
walkRepository.deleteById(id);
}

}