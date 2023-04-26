package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.IntDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InterviewRepo extends JpaRepository<IntDetails,Long> {
    @Query(value = "select * from bench.int_details where id=:employeeId and ongoing=true",nativeQuery = true)
    IntDetails getByIdAndOngoing(@Param("employeeId") Long employeeId);

    @Query(value = "select * from bench.int_details where sr_no=:srNo", nativeQuery = true)
    IntDetails getBySrNo(@Param("srNo") Long srNo);
}