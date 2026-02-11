package in.safesmart.backend.repository;

import in.safesmart.backend.model.CMSPage;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface CMSPageRepository extends MongoRepository<CMSPage, String> {
    Optional<CMSPage> findByPageKey(String pageKey);
}
