package in.safesmart.backend.repository;

import in.safesmart.backend.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface AdminRepository extends MongoRepository<Admin, String> {
    Optional<Admin> findByUsername(String username);
    Optional<Admin> findByEmail(String email);
}
