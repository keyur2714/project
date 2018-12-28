package com.keyur.jhipsterdemo.repository.search;

import com.keyur.jhipsterdemo.domain.Student;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Student entity.
 */
public interface StudentSearchRepository extends ElasticsearchRepository<Student, Long> {
}
