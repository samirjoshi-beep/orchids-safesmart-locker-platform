package in.safesmart.backend.controller;

import in.safesmart.backend.model.CMSPage;
import in.safesmart.backend.model.Category;
import in.safesmart.backend.model.Product;
import in.safesmart.backend.repository.CMSPageRepository;
import in.safesmart.backend.repository.CategoryRepository;
import in.safesmart.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN') or hasRole('SUPER_ADMIN')")
public class AdminController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CMSPageRepository cmsPageRepository;

    // Product Management
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product) {
        product.setCreatedAt(LocalDateTime.now());
        return productRepository.save(product);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable String id, @RequestBody Product product) {
        product.setId(id);
        return productRepository.save(product);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProduct(@PathVariable String id) {
        productRepository.deleteById(id);
    }

    // Category Management
    @PostMapping("/categories")
    public Category createCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    // CMS Management
    @PostMapping("/cms")
    public CMSPage saveCMSPage(@RequestBody CMSPage page) {
        return cmsPageRepository.save(page);
    }
}
