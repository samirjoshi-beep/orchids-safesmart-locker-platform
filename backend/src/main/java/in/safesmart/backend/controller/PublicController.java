package in.safesmart.backend.controller;

import in.safesmart.backend.model.CMSPage;
import in.safesmart.backend.model.Category;
import in.safesmart.backend.model.ContactInquiry;
import in.safesmart.backend.model.Product;
import in.safesmart.backend.repository.CMSPageRepository;
import in.safesmart.backend.repository.CategoryRepository;
import in.safesmart.backend.repository.ContactInquiryRepository;
import in.safesmart.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/public")
public class PublicController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CMSPageRepository cmsPageRepository;

    @Autowired
    ContactInquiryRepository contactInquiryRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findByActiveTrue();
    }

    @GetMapping("/products/{slug}")
    public ResponseEntity<Product> getProductBySlug(@PathVariable String slug) {
        return productRepository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryRepository.findByActiveTrueOrderByOrderAsc();
    }

    @GetMapping("/cms/{pageKey}")
    public ResponseEntity<CMSPage> getPageContent(@PathVariable String pageKey) {
        return cmsPageRepository.findByPageKey(pageKey)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/inquiry")
    public ResponseEntity<?> submitInquiry(@RequestBody ContactInquiry inquiry) {
        inquiry.setStatus(ContactInquiry.Status.NEW);
        inquiry.setCreatedAt(LocalDateTime.now());
        contactInquiryRepository.save(inquiry);
        return ResponseEntity.ok("Inquiry submitted successfully");
    }
}
