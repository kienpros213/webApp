package data.data.Repository;

import org.springframework.data.repository.CrudRepository;

import data.data.Entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}