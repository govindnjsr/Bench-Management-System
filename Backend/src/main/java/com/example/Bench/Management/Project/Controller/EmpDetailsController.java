package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("/api/empdetails")
public class EmpDetailsController {


    private EmployeeService employeeService;
    public EmpDetailsController(EmployeeService employeeService){
        super();
        this.employeeService=employeeService;
    }

    //save emp
    @PostMapping
    public ResponseEntity<EmpDetails>saveEmployeeDetail(@RequestBody EmpDetails empDetails){
        return new ResponseEntity<EmpDetails>(employeeService.saveEmployeeDetail(empDetails), HttpStatus.CREATED);
    }

    //get all emp
    @GetMapping
    public List<EmpDetails> getAllEmployeeDetails(){

        return employeeService.getAllEmployeeDetails();
    }


}
