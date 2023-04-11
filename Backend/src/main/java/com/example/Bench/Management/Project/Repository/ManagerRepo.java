package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.ManagerDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManagerRepo extends JpaRepository<ManagerDetails,Long> {

}
