package webApp.restapi.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import webApp.restapi.Entities.Location;
import webApp.restapi.Repository.LocationRepository;

@Service
public class LocationService {

    @Autowired
    LocationRepository locationRepository;

    public List<Location> getAllLocation()
    {
        List<Location> location = new ArrayList<Location>();
        locationRepository.findAll().forEach(location1 -> location.add(location1));
        return location;
    }

    public Location getLocationById(int id)
    {
        return locationRepository.findById(id).get();
    }

    public void saveOrUpdate(Location location)
    {
        locationRepository.save(location);
    }

    public void delete(int id)
    {
        locationRepository.deleteById(id);
    }

    public void update(Location location, int id)
    {
        locationRepository.save(location);
    }

    public void updateLocationDescription(Integer id, String description) {
        Location location = locationRepository.findById(id).get();
        location.setDescription(description);
        locationRepository.save(location);
    }
}
