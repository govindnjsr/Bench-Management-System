package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.ManagerDetails;
import com.example.Bench.Management.Project.Service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/manager")
public class ManagerController {
    @Autowired
    private ManagerService managerService;

    @PostMapping("/save")
    public  ResponseEntity<ManagerDetails>save(@RequestBody ManagerDetails managerDetails){
        return new ResponseEntity<ManagerDetails>(managerService.save(managerDetails),HttpStatus.CREATED);
    }
    @GetMapping("/get")
    public List<ManagerDetails>getAllManagers(){
        return managerService.getData();
    }
    @GetMapping("/get/{managerId}")
     public ManagerDetails getManager(@PathVariable(required = false)Long managerId){
        return managerService.getManagerDetails(managerId);
    }

    @PutMapping("delete/{managerId}")
    public String removeManager(@PathVariable Long managerId){
       return managerService.deleteManager(managerId);
    }

    //assign location to manager
    @PutMapping("/{managerId}/location/{locationId}")
    public ManagerDetails assignLocationToManager(
            @PathVariable Long managerId,
            @PathVariable Long locationId
    ){
        return managerService.assignLocationToManager(managerId,locationId);
    }

    @DeleteMapping("delete/{managerId}/locationdelete/{locationId}")
    public ResponseEntity removeLocation(@PathVariable Long managerId,@PathVariable Long locationId){
        managerService.deleteAssignLocation(managerId,locationId);
        return new ResponseEntity(HttpStatus.OK);
    }

    //get not assigned location
    @GetMapping("/get/notassignedLocation/{managerId}")
    public List<Long>getNotAssignedLocation(@PathVariable(required = false) Long managerId){
        return managerService.getNotAssignedLocationOfAManager(managerId);
    }
}
