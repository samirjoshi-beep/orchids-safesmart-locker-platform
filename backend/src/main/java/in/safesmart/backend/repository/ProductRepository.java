package in.safesmart.backend.repository;

import in.safesmart.backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface ProductRepository extends MongoRepository<Product, String> {
    Optional<Product> findBySlug(String slug);
    List<Product> findByCategoryIdAndActiveTrue(String categoryId);
    List<Product> findByFeaturedTrueAndActiveTrue();
    List<Product> findByActiveTrue();
}
