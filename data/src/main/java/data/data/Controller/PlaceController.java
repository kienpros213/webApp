package data.data.Controller;
import data.data.Repository.PlaceRepository;
import data.data.Entity.Place;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping(path="/place")
public class PlaceController {
    @Autowired
    private PlaceRepository PlaceRepository;

    @PostMapping(path="/addPlace")
    public @ResponseBody String addNewPlace (@RequestBody String placeName, String description, String location){
        Place place = new Place();
        place.setPlaceName(placeName);
        place.setDescription(description);
        place.setLocation(location);
        PlaceRepository.save(place);
        return "Place Saved!";
    }

    @PostMapping(path = "allPlaces")
    public @ResponseBody Iterable<Place> getAllPlace(@RequestBody String placeName){
        return PlaceRepository.findByPlaceName(placeName);
    }
}
