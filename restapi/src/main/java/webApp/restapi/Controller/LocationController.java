package webApp.restapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import webApp.restapi.Repository.LocationRepository;
import webApp.restapi.Entities.Location;

import java.lang.reflect.Array;
import java.util.ArrayList;
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
    public @ResponseBody List<Location> findLocation(@RequestParam String placeName){
        return LocationRepository.findByplaceName(placeName);
    }

    @GetMapping(path = "/findLocationById")
    public @ResponseBody Optional<Location> findLocationById(@RequestParam String id){
        return LocationRepository.findById(Integer.parseInt(id));
    }
    @CrossOrigin
    @DeleteMapping(path = "/deleteLocation")
    public @ResponseBody String deleteLocation(@RequestParam String id){
        LocationRepository.deleteById(Integer.parseInt(id));
        return("deleted");
    }
}