package webApp.restapi.Repository;
import webApp.restapi.Entities.Location;
import org.springframework.data.repository.CrudRepository;
import webApp.restapi.Entities.Place;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface LocationRepository extends CrudRepository<Location, Integer> {
    ArrayList<Location> findByplaceName (String placeName);
}