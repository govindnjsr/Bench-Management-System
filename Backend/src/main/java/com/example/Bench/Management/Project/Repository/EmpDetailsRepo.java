package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface EmpDetailsRepo extends JpaRepository<EmpDetails,Long> {

    @Query(value = "select count(*) from bench.emp_details where bench_status=false "
           ,nativeQuery = true)
    public long getAllActiveEmployees();

    @Query(value = "select count(*) from bench.emp_details where bench_status=true "
            ,nativeQuery = true)
    public long getAllInActiveEmployees();

    @Query(value = "select count(*) from bench.emp_details where active=true",nativeQuery = true)
    public long getAllEmployees();

    //get location wise counts
    @Query(value = "select emp_location as location ,count(*) as count from bench.emp_details  group by emp_location Order by emp_location",nativeQuery = true)
    public List<Map<Long,Long>>getCountOfEachLocation();
    //get count of each BU from gurugram 1
    @Query(value="select business_unit as BU,count(*) as count from bench.emp_details where emp_location=1 group by business_unit order by business_unit",nativeQuery = true)
    public List<Map<String,Long>>getAllGurugramBU();

    //count of all BU from Banagalore 2
    @Query(value = "select business_unit as BU,count(*) as count from bench.emp_details where emp_location=2 group by business_unit order by business_unit",nativeQuery = true)
    public List<Map<String,Long>>getAllBangaloreBU();

    //count of all BU from Hyderabad 3
    @Query(value ="select business_unit as BU,count(*) as count from bench.emp_details where emp_location=3 group by business_unit order by business_unit",nativeQuery = true)
    public List<Map<String,Long>>getAllHyderabadBU();
//    @Modifying
//    @Query(value="update bench.emp_details set resume =:originalFilename where id =:employeeId",nativeQuery = true)
//    public void saveResume(@Param("originalFilename") String originalFilename,@Param("employeeId") Long employeeId);



}
