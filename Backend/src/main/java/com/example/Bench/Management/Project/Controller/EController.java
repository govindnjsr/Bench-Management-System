package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Service.EmpDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/empdetails")
public class EController {

    @Autowired
    private EmpDetailsService empDetailsService;

    public EController(EmpDetailsService empDetailsService){
        super();
        this.empDetailsService=empDetailsService;
    }

    @PostMapping
    public ResponseEntity<EmpDetails>save(@RequestBody EmpDetails empDetails){
        return new ResponseEntity<EmpDetails>(empDetailsService.save(empDetails), HttpStatus.CREATED);
    }

    @GetMapping
    public List<EmpDetails>getData(){
        return empDetailsService.getData();
    }
}