package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.IntDetails;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

public interface InterviewService {
    public IntDetails save(IntDetails intDetails);

    public List<IntDetails> getData();

    public String updateResult(Long employeeId, IntDetails intDetails);

    public IntDetails getDataById(Long employeeId);

    public String updateResultBySrNo(Long srNo, IntDetails intDetails);
}