package webApp.restapi.Service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import webApp.restapi.Entities.Location;
import webApp.restapi.Repository.LocationRepository;

@Service
public class LocationService implements LocationServiceInterface {

    @Autowired
    LocationRepository locationRepository;

    @Override
    public List<Location> getAllLocation()
    {
        List<Location> location = new ArrayList<>();
        locationRepository.findAll().forEach(location1 -> location.add(location1));
        return location;
    }
    @Override
    public Location getLocationById(int id)
    {
        return locationRepository.findById(id).get();
    }
    @Override
    public void saveOrUpdate(Location location)
    {
        locationRepository.save(location);
    }
    @Override
    public void delete(int id)
    {
        locationRepository.deleteById(id);
    }
    @Override
    public void update(Location location, int id)
    {
        locationRepository.save(location);
    }
    @Override
    public void updateLocationDescription(Integer id, String description) {
        Location location = locationRepository.findById(id).get();
        location.setDescription(description);
        locationRepository.save(location);
    }
}
