package webApp.restapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import webApp.restapi.Repository.PlaceRepository;
import webApp.restapi.Entities.Place;

@Controller
@RequestMapping(path="/place")
public class PlaceController {
    @Autowired
    private PlaceRepository PlaceRepository;

    @CrossOrigin
    @PostMapping(path="/addPlace")
    public @ResponseBody String addNewPlace (@RequestParam String placeName, String desc, String location){
        Place place = new Place();
        place.setPlaceName(placeName);
        place.setDescription(desc);
        place.setLocation(location);
        return("place saved!");
    }
    @CrossOrigin
    @GetMapping(path = "/allPlaces")
    public @ResponseBody Iterable<Place> getAllPlaces(){
        return PlaceRepository.findAll();
    }
}