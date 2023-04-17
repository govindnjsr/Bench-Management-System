package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.Location;
import com.example.Bench.Management.Project.Model.ManagerDetails;
import com.example.Bench.Management.Project.Repository.LocationRepo;
import com.example.Bench.Management.Project.Repository.ManagerRepo;
import com.example.Bench.Management.Project.Service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ManagerServiceImp implements ManagerService {

    @Autowired
    private ManagerRepo managerRepo;

    @Autowired
    private LocationRepo locationRepo;
    public ManagerServiceImp(ManagerRepo managerRepo){
        super();
        this.managerRepo=managerRepo;
    }
    @Override
    public ManagerDetails save(ManagerDetails managerDetails) {

        return managerRepo.save(managerDetails);
    }

    @Override
    public List<ManagerDetails> getData() {

        return managerRepo.findAll();
    }

    @Override
    public ManagerDetails getManagerDetails(Long managerId) {
       ManagerDetails managerDetails=null;
       if(managerId!=null){
           managerDetails=managerRepo.findById(managerId).get();
       }
       return managerDetails;
    }

    @Override
    public String deleteManager(Long managerId) {
        ManagerDetails manager=null;
        if(managerId!=null){
            manager=managerRepo.findById(managerId).get();
            if(manager.getMActive()==true){
                manager.setMActive(false);
            }
            else
                manager.setMActive(true);

            managerRepo.save(manager);
        }
        return "Deleted";

    }

    @Override
    public ManagerDetails assignLocationToManager(Long managerId, Long locationId) {
        List<Location> locationSet=null;
        Set<Location>locationfilter=new HashSet<>();
        ManagerDetails managerDetails=managerRepo.findById(managerId).get();
        Location location=locationRepo.findById(locationId).get();
        locationSet=managerDetails.getAssignedLocation();
        locationSet.add(location);
        locationfilter.addAll(locationSet);
        locationSet=new ArrayList<>();
        locationSet.addAll(locationfilter);
        managerDetails.setAssignedLocation(locationSet);
        return managerRepo.save(managerDetails);
    }

    //delete the assign location to the manager
    @Override
    public void deleteAssignLocation(Long managerId, long locationId) {

        ManagerDetails managerDetails=managerRepo.findById(managerId).get();
        List<Location>assignLocation=null;
        assignLocation=managerDetails.getAssignedLocation();
        int indexToBeDeleted=-1;
        for(int i=0;i<assignLocation.size();i++){
            Location location=assignLocation.get(i);
            if(location.getId()==locationId){
                indexToBeDeleted=i;
                break;
            }
        }
        if(indexToBeDeleted!=-1) {
            assignLocation.remove(indexToBeDeleted);
            managerRepo.save(managerDetails);
        }

    }


}
