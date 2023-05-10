package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepo extends JpaRepository<Location,Long> {

}
