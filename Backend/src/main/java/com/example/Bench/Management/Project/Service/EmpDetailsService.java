package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.Dto;
import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Model.IntDetails;
import com.example.Bench.Management.Project.Model.RequestDto;

import java.util.List;
import java.util.Map;

public interface EmpDetailsService {
    //save the employee
     public EmpDetails save(EmpDetails empDetails);
     //get all employees
     public List<EmpDetails>getData();
     //get Employee BY id
     public EmpDetails getEmployeeById(Long employeeId);
       public List<Dto>getAllFilteredDto(RequestDto requestDto);

 public void saveResume(String originalFilename, Long employeeId);
      public List<Map<Long,Long>>getCountOfEachLocation();
      public List<Integer> getAllGurugramBU();
 public List<Integer>getAllBangaloreBU();
 public List<Integer>getAllHyderabadBU();
 public String updateOnGoing(Long employeeId, Long srNo);
 public String updateBlockedById(Long employeeId);

    public String updateOnCondition(Long employeeId, IntDetails intDetails);

    public  List<String> getBU();

    public List<String> getLocation();
}
