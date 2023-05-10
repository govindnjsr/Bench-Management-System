package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
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
    @Query(value="SELECT COALESCE(COUNT(e.id), 0) as count FROM (SELECT DISTINCT business_unit FROM emp_details) as bu\n" +
            "  LEFT JOIN emp_details as e ON bu.business_unit = e.business_unit AND e.emp_location = 1\n" +
            "GROUP BY bu.business_unit order by bu.business_unit",nativeQuery = true)
    public List<Integer>getAllGurugramBU();

    //count of all BU from Banagalore 2
    @Query(value = "SELECT COALESCE(COUNT(e.id), 0) as count FROM (SELECT DISTINCT business_unit FROM emp_details) as bu\n" +
            "  LEFT JOIN emp_details as e ON bu.business_unit = e.business_unit AND e.emp_location = 2\n" +
            "GROUP BY bu.business_unit order by bu.business_unit",nativeQuery = true)
    public List<Integer>getAllBangaloreBU();

    //count of all BU from Hyderabad 3
    @Query(value ="SELECT COALESCE(COUNT(e.id), 0) as count FROM (SELECT DISTINCT business_unit FROM emp_details) as bu\n" +
            "  LEFT JOIN emp_details as e ON bu.business_unit = e.business_unit AND e.emp_location = 3\n" +
            "GROUP BY bu.business_unit order by bu.business_unit",nativeQuery = true)
    public List<Integer>getAllHyderabadBU();



}
