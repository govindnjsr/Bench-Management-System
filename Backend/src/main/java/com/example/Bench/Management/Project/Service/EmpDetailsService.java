package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.Dto;
import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Model.ManagerDetails;
import com.example.Bench.Management.Project.Model.RequestDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Map;

public interface EmpDetailsService {
    //save the employee
     public EmpDetails save(EmpDetails empDetails);
     //get all employees
     public List<EmpDetails>getData();
     //get all active employees
     public long getActiveEmployees();
     //get all inactive/Benched  employees
     public long getInactiveEmployees();
     //get all employees
     public long getAllEmployees();

     //update the Company status of emp
     public String updateCompanyStatus(Long employeeId);

     //get Employee BY id
     public EmpDetails getEmployeeById(Long employeeId);

     public List<Dto>getAllDto();

       public List<Dto>getAllFilteredDto(RequestDto requestDto);


      public String updateEmployeeById(Long employeeId, EmpDetails empDetails);

 public void saveResume(String originalFilename, Long employeeId);
      public List<Map<Long,Long>>getCountOfEachLocation();
      public List<Map<String,Long>>getAllGurugramBU();
 public List<Map<String,Long>>getAllBangaloreBU();
 public List<Map<String,Long>>getAllHyderabadBU();
 public String updateOnGoing(Long employeeId, Long srNo);

 public String updateBlockedById(Long employeeId);

}
