package webApp.restapi.Repository;

import webApp.restapi.Entities.Place;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PlaceRepository extends CrudRepository<Place, Integer> {

    Optional<Place> findByPlaceName(String place);

}
