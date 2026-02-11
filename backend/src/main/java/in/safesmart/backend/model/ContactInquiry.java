package in.safesmart.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "contactInquiries")
public class ContactInquiry {
    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private String subject;
    private String message;
    private String productId;
    private Status status;
    private LocalDateTime createdAt;

    public enum Status {
        NEW, READ, REPLIED, ARCHIVED
    }
}
