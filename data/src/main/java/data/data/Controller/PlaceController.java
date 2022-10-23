package data.data.Controller;

import data.data.Entity.Place;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/place")
public class PlaceController {
    @Autowired
    private data.data.Repository.PlaceRepository PlaceRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewPlace (@RequestParam String placeName, String description, String location){
        Place place = new Place();
        place.setPlaceName(placeName);
        place.setDescription(description);
        place.setLocation(location);
        PlaceRepository.save(place);
        return "Place Saved!";
    }
    @CrossOrigin
    @GetMapping(path = "allPlaces")
    public @ResponseBody Iterable<Place> getAllPlace(){
        return PlaceRepository.findByPlaceName("ho chi minh");
    }
}
