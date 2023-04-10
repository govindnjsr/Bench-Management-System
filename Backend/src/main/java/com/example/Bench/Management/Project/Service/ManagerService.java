package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.ManagerDetails;

import java.util.List;

public interface ManagerService {
   //save the details of the employee
    public ManagerDetails save(ManagerDetails managerDetails);
    //get all data of employee
    public List<ManagerDetails>getData();
   //get manager details with id
    public  List<ManagerDetails>getManagerDetails(Long managerId);
    //delete manager with id ...
    public void deleteManager(long id);
    //assign manager to particuler location
    ManagerDetails assignLocationToManager(Long managerId, Long locationId);
    //delete the location Access from a manager
    public void deleteAssignLocation(Long managerId,long locationId);
}
