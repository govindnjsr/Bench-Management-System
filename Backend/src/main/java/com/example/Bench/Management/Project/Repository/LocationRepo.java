package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepo extends JpaRepository<Location,Long> {
    @Query(nativeQuery = true, value = "select id from bench.location where loc_name = :locName")
    long getId(@Param("locName") String locName);
}
