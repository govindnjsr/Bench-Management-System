package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmpDetailsService {
    //save the employee
     public EmpDetails save(EmpDetails empDetails);
     //get all employees
     public List<EmpDetails>getData();
     //get all active employees
     public long getActiveEmployees();
     //get all inactive employees
     public long getInactiveEmployees();
     //get all employees
     public long getAllEmployees();
}
