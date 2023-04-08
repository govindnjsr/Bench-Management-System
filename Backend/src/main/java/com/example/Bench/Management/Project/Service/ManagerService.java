package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.ManagerDetails;

import java.util.List;

public interface ManagerService {

    public ManagerDetails save(ManagerDetails managerDetails);
    public List<ManagerDetails>getData();

    public  List<ManagerDetails>getManagerDetails(Long managerId);
    public void deleteManager(long id);

    ManagerDetails assignLocationToManager(Long managerId, Long locationId);
}
