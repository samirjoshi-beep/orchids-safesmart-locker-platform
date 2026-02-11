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
@Document(collection = "admins")
public class Admin {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;
    private Role role;
    private List<String> permissions;
    private LocalDateTime lastLogin;
    private LocalDateTime createdAt;

    public enum Role {
        SUPER_ADMIN, ADMIN, EDITOR
    }
}
