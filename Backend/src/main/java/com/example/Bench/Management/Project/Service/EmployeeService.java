package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.EmpDetails;

import java.util.List;

public interface EmployeeService {

    //save the employee details
    EmpDetails saveEmployeeDetail(EmpDetails empDetails);

    //get all employees Details
    List<EmpDetails>getAllEmployeeDetails();
}
