package webApp.restapi.Repository;
import webApp.restapi.Entities.Location;
import org.springframework.data.repository.CrudRepository;
import java.util.ArrayList;

public interface LocationRepository extends CrudRepository<Location, Integer> {
    ArrayList<Location> findByplaceName (String placeName);
}
