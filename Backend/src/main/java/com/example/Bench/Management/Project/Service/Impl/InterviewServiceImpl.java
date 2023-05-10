package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Model.IntDetails;
import com.example.Bench.Management.Project.Repository.EmpDetailsRepo;
import com.example.Bench.Management.Project.Repository.InterviewRepo;
import com.example.Bench.Management.Project.Service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class InterviewServiceImpl implements InterviewService {
    @Autowired
    public InterviewRepo interviewRepo;
    

    @Override
    public IntDetails save(IntDetails intDetails) {
        return interviewRepo.save(intDetails);
    }

    @Override
    public List<IntDetails> getData() {
        return interviewRepo.findAll();
    }

    @Override
    public String updateResult(Long employeeId, IntDetails intDetails) {
        IntDetails intDetails1 = interviewRepo.getByIdAndOngoing(employeeId);
        intDetails1.setResult((intDetails.getResult()));
        interviewRepo.save(intDetails1);

        return "updated";
    }

    @Override
    public List<IntDetails> getDataById(Long employeeId) {
        return interviewRepo.findAllByEmployeeId(employeeId);
    }

    @Override
    public String updateResultBySrNo(Long srNo, IntDetails intDetails) {
        IntDetails intDetails1 = interviewRepo.getBySrNo(srNo);
        intDetails1.setResult(intDetails.getResult());
        interviewRepo.save(intDetails1);
        return "updated";
    }
}