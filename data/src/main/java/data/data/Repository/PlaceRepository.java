package data.data.Repository;
import data.data.Entity.Place;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlaceRepository extends CrudRepository<Place, Integer> {
    List<Place> findByPlaceName(String placeName);
}