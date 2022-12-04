package webApp.restapi.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import webApp.restapi.Entities.Location;
import webApp.restapi.Repository.LocationRepository;
import webApp.restapi.Service.LocationService;
import java.util.List;
import org.json.JSONObject;

@RestController
@RequestMapping(path="/location")
public class LocationController {
    @Autowired
    LocationService locationService;
    @Autowired
    LocationRepository locationRepository;

    //get all locations
    @CrossOrigin
    @GetMapping("/allLocation")
    private List<Location> getAllLocation()
    {
        return locationService.getAllLocation();
    }

    //get location by id
    @CrossOrigin
    @GetMapping("/getLocationById/{id}")
    private Location getLocation(@PathVariable("id") int id)
    {
        return locationService.getLocationById(id);
    }

    //add location
    @CrossOrigin
    @PostMapping("/addLocation")
    private int saveLocation(@RequestBody Location location)
    {
        locationService.saveOrUpdate(location);
        return location.getLocationId();
    }

    //delete location
    @CrossOrigin
    @DeleteMapping("/deleteLocation/{id}")
    private void deleteLocation(@PathVariable("id") int id)
    {
        locationService.delete(id);
    }

    //update location
    @CrossOrigin
    @PutMapping("/updateLocation")
    private Location updateLocation(@RequestBody Location location)
    {
        locationService.saveOrUpdate(location);
        return location;
    }

    //find by place name
    @CrossOrigin
    @GetMapping(path = "/findLocation")
    public @ResponseBody List<Location> findLocation(@RequestParam String placeName){
        return locationRepository.findByplaceName(placeName);
    }

    @CrossOrigin
    @PutMapping(path = "/updateLocation/{id}")
    public void updateLocation(@PathVariable("id") int id, @RequestBody String description){
        locationService.updateLocationDescription(id, description);
    }
}