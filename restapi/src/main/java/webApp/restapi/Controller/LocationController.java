package webApp.restapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import webApp.restapi.Repository.LocationRepository;
import webApp.restapi.Entities.Location;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path="/location")
public class LocationController {
    @Autowired
    private LocationRepository LocationRepository;

    @CrossOrigin
    @PostMapping(path="/addLocation")
    public @ResponseBody String addNewLocation (@RequestBody Location location){
        LocationRepository.save(location);
        return("location saved!");
    }
    @CrossOrigin
    @GetMapping(path = "/allLocation")
    public @ResponseBody Iterable<Location> getAllLocation(){
        return LocationRepository.findAll();
    }

    @GetMapping(path = "/findLocation")
    public @ResponseBody Location findLocation(@RequestParam String placeName){
        //Optional<Location> locationList =  LocationRepository.findById(Integer.parseInt(id));
        //Location location = locationList.get();
        //return location;
        List<Location> locationList =  LocationRepository.findByplaceName(placeName);
        Location location = locationList.get(0);
        return location;
    }
}