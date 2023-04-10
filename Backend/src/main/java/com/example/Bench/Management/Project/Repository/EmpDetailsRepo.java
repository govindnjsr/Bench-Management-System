package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpDetailsRepo extends JpaRepository<EmpDetails,Long> {

    @Query(value = "select count(*) from bench.emp_details where bench_status=true "
           ,nativeQuery = true)
    public long getAllActiveEmployees();

    @Query(value = "select count(*) from bench.emp_details where bench_status=false "
            ,nativeQuery = true)
    public long getAllInActiveEmployees();

    @Query(value = "select count(*) from bench.emp_details",nativeQuery = true)
    public long getAllEmployees();



}
