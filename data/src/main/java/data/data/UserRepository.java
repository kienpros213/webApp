package data.data;

import org.springframework.data.repository.CrudRepository;

import data.data.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}