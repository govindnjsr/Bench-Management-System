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
//    public ManagerController(ManagerService managerService){
//        super();
//        this.managerService=managerService;
//    }
    @PostMapping("/save")
    public  ResponseEntity<ManagerDetails>save(@RequestBody ManagerDetails managerDetails){
        return new ResponseEntity<ManagerDetails>(managerService.save(managerDetails),HttpStatus.CREATED);
    }
    @GetMapping()
    public List<ManagerDetails>getData(){
        return managerService.getData();
    }

    @GetMapping(value = {"/getManagers","/{managerId}"})
     public List<ManagerDetails>getManager(@PathVariable(required = false)Long managerId){
        return managerService.getManagerDetails(managerId);
    }

    @DeleteMapping("delete/{managerId}")
    public ResponseEntity removeManager(@PathVariable Long managerId){
        managerService.deleteManager(managerId);
        return new ResponseEntity(HttpStatus.OK);
    }

    //assign location to manager
    @PutMapping("/{managerId}/location/{locationId}")
    public ManagerDetails assignLocationToManager(
            @PathVariable Long managerId,
            @PathVariable Long locationId
    ){
        return managerService.assignLocationToManager(managerId,locationId);
    }
}
