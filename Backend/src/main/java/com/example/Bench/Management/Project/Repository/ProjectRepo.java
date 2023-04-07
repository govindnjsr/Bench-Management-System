package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.ProjDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepo extends JpaRepository<ProjDetails,Long> {
}
