package in.safesmart.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String name;
    private String slug;
    private String sku;
    private String categoryId;
    private String shortDescription;
    private String longDescription;
    private Double basePrice;
    private String mainImage;
    private List<String> gallery;
    private List<Specification> specifications;
    private List<String> industries;
    private boolean featured;
    private SEO seo;
    private boolean active;
    private LocalDateTime createdAt;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Specification {
        private String key;
        private String value;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SEO {
        private String title;
        private String description;
        private List<String> keywords;
    }
}
