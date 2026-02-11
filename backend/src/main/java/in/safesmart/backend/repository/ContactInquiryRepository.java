package in.safesmart.backend.repository;

import in.safesmart.backend.model.ContactInquiry;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ContactInquiryRepository extends MongoRepository<ContactInquiry, String> {
    List<ContactInquiry> findByStatusOrderByCreatedAtDesc(ContactInquiry.Status status);
}
