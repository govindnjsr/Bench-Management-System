package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.IntDetails;
import com.example.Bench.Management.Project.Service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/empdetails")
public class InterviewController {
    @Autowired
    public InterviewService interviewService;

    @PostMapping("/interview/save")
    public ResponseEntity<IntDetails> save(@RequestBody IntDetails intDetails){
        return new ResponseEntity<IntDetails>(interviewService.save(intDetails), HttpStatus.CREATED);
    }

    @GetMapping("/interview/get")
    public List<IntDetails> getData(){
        return interviewService.getData();
    }

    @PutMapping("/interview/updateresult/{employeeId}")
    public String updateResult(@PathVariable Long employeeId, @RequestBody IntDetails intDetails){

        return interviewService.updateResult(employeeId,intDetails);
    }
    @GetMapping("/interview/get/{employeeId}")
    public IntDetails getDataByID(@PathVariable Long employeeId){
        return interviewService.getDataById(employeeId);
    }

    @PutMapping("/interview/updateresultbysrno/{srNo}")
    public String updateResultBySrNo(@PathVariable Long srNo,@RequestBody IntDetails intDetails){
        return interviewService.updateResultBySrNo(srNo,intDetails);
    }


}