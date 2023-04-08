package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmpDetailsService {

     public EmpDetails save(EmpDetails empDetails);
     public List<EmpDetails>getData();
}
