package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.ManagerDetails;
import com.example.Bench.Management.Project.Repository.ManagerRepo;
import com.example.Bench.Management.Project.Service.ManagerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerServiceImp implements ManagerService {

    private ManagerRepo managerRepo;
    public ManagerServiceImp(ManagerRepo managerRepo){
        super();
        this.managerRepo=managerRepo;
    }
    @Override
    public ManagerDetails saveManager(ManagerDetails managerDetails) {
        return managerRepo.save(managerDetails);
    }

    @Override
    public List<ManagerDetails> getAllManagers() {
        return managerRepo.findAll();
    }
}
