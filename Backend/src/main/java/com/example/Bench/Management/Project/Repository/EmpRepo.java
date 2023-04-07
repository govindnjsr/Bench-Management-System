package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface EmpRepo extends JpaRepository<EmpDetails,Long> {
}
