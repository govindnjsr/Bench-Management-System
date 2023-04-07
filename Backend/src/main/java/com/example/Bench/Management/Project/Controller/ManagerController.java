package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Model.ManagerDetails;
import com.example.Bench.Management.Project.Service.EmployeeService;
import com.example.Bench.Management.Project.Service.ManagerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/manager")
public class ManagerController {
    private ManagerService managerService;
    public ManagerController(ManagerService managerService){
        super();
        this.managerService=managerService;
    }

    //save emp
    @PostMapping("/post")
    public ResponseEntity<ManagerDetails> saveManagerDetail(@RequestBody ManagerDetails managerDetails){
         return new ResponseEntity<ManagerDetails>(managerDetails,HttpStatus.ACCEPTED);
//        return new ResponseEntity<ManagerDetails>(managerService.saveManager(managerDetails), HttpStatus.CREATED);
    }

    //get all emp
    @GetMapping("/get")
    public List<ManagerDetails> getAllEmployeeDetails(){

        return managerService.getAllManagers();
    }
}
