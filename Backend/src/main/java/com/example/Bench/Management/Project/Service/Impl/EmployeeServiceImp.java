package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Repository.EmpRepo;
import com.example.Bench.Management.Project.Service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImp implements EmployeeService {

    private EmpRepo empRepo;
    public EmployeeServiceImp(EmpRepo empRepo){
        super();
        this.empRepo=empRepo;
    }
    @Override
    public EmpDetails saveEmployeeDetail(EmpDetails empDetails) {

        return empRepo.save(empDetails);

    }

    @Override
    public List<EmpDetails> getAllEmployeeDetails() {
        return empRepo.findAll();
    }
}
