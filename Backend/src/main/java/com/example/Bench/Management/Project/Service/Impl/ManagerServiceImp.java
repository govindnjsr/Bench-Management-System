package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.Location;
import com.example.Bench.Management.Project.Model.ManagerDetails;
import com.example.Bench.Management.Project.Repository.LocationRepo;
import com.example.Bench.Management.Project.Repository.ManagerRepo;
import com.example.Bench.Management.Project.Service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Set;

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
    public List<ManagerDetails> getManagerDetails(Long managerId) {
        if(null!=managerId){
            return managerRepo.findAllById(Collections.singleton(managerId));
        }
        else{
            return managerRepo.findAll();
        }
    }

    @Override
    public void deleteManager(long id) {
          managerRepo.deleteById((id));
    }

    @Override
    public ManagerDetails assignLocationToManager(Long managerId, Long locationId) {
        List<Location> locationSet=null;
        ManagerDetails managerDetails=managerRepo.findById(managerId).get();
        Location location=locationRepo.findById(locationId).get();
        locationSet=managerDetails.getAssignedLocation();
        locationSet.add(location);
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
