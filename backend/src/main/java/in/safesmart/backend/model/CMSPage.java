package in.safesmart.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "cmsPages")
public class CMSPage {
    @Id
    private String id;
    private String pageKey;
    private List<Section> sections;
    private Product.SEO seo;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Section {
        private String sectionId;
        private Map<String, Object> content;
        private boolean active;
    }
}
