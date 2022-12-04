package webApp.restapi.Service;
import webApp.restapi.Entities.Location;
import java.util.List;

public interface LocationServiceInterface {

    public List<Location> getAllLocation();
    public Location getLocationById(int id);
    public void saveOrUpdate(Location location);
    public void delete(int id);
    public void update(Location location, int id);
    public void updateLocationDescription(Integer id, String description);


}
