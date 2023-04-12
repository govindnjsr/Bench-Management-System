package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.IntDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterviewRepo extends JpaRepository<IntDetails,Long> {
}
