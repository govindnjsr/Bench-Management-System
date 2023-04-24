package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Service.EmpDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/empdetails")
public class EController {

    @Autowired
    private EmpDetailsService empDetailsService;
    @Value("${upload.path}")
    private String uploadPath;


    public EController(EmpDetailsService empDetailsService) {
        super();
        this.empDetailsService = empDetailsService;
    }

    @PostMapping("/save")
    public ResponseEntity<EmpDetails> save(@RequestBody EmpDetails empDetails) {
        return new ResponseEntity<EmpDetails>(empDetailsService.save(empDetails), HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public List<EmpDetails> getData() {
        return empDetailsService.getData();
    }

    //get count of  all active employees
    @GetMapping("/get/activeemployee")
    public long getActiveEmployees() {
        return empDetailsService.getActiveEmployees();
    }

    //get count of all inactive employees
    @GetMapping("/get/benchedemployee")
    public long getInactiveEmployees() {
        return empDetailsService.getInactiveEmployees();
    }

    //get count of all employees
    @GetMapping("/get/allemployee")
    public long getAllEmployees() {
        return empDetailsService.getAllEmployees();
    }

    //to change the Company Status of employee
    @PutMapping("updateactiveness/{employeeId}")
    public String updateCompanyActiveness(@PathVariable Long employeeId) {

        return empDetailsService.updateCompanyStatus(employeeId);
    }

    @GetMapping("/get/{employeeId}")
    public EmpDetails getEmployeeById(@PathVariable Long employeeId) {
        return empDetailsService.getEmployeeById(employeeId);
    }

    @PutMapping("/update/{employeeId}")
    public String updateEmployeeById(@PathVariable Long employeeId, @RequestBody EmpDetails empDetails) {
        return empDetailsService.updateEmployeeById(employeeId, empDetails);
    }
}