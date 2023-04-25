package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.*;
import com.example.Bench.Management.Project.Repository.EmpDetailsRepo;
import com.example.Bench.Management.Project.Service.EmpDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService implements EmpDetailsService {
    @Autowired
    private EmpDetailsRepo empDetailsRepo;

    public  EmployeeService(EmpDetailsRepo empDetailsRepo){
        super();
        this.empDetailsRepo=empDetailsRepo;
    }
    @Override
    public EmpDetails save(EmpDetails empDetails) {
        return empDetailsRepo.save(empDetails);
    }

    @Override
    public List<EmpDetails> getData() {
        return empDetailsRepo.findAll();
    }

    @Override
    public long getActiveEmployees() {
        return empDetailsRepo.getAllActiveEmployees();
    }

    @Override
    public long getInactiveEmployees() {
        return empDetailsRepo.getAllInActiveEmployees();
    }

    @Override
    public long getAllEmployees() {
        return empDetailsRepo.getAllEmployees();
    }

    @Override
    public String updateCompanyStatus(Long employeeId) {
        EmpDetails empDetails=empDetailsRepo.findById(employeeId).get();
        if(empDetails.getActive()==true){
            empDetails.setActive(false);
        }
        else
            empDetails.setActive(true);
      empDetailsRepo.save(empDetails);
        return "Update";
    }

    @Override
    public EmpDetails getEmployeeById(Long employeeId) {
        EmpDetails empDetails=null;
        if(employeeId!=null) {
           empDetails = empDetailsRepo.findById(employeeId).get();
            return empDetails;
        }
        else return empDetails;
    }


    @Override
    public List<Dto> getAllDto() {

        List<Dto>curList=empDetailsRepo.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
        List<Dto>sendList=new ArrayList<>();

        for(int i=0;i<curList.size();i++){
            if(curList.get(i)!=null){
                sendList.add(curList.get(i));
            }
        }
        return sendList;

    }

    @Override
    public List<Dto> getAllFilteredDto(RequestDto requestDto) {
        List<Dto>curList=empDetailsRepo.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
        List<Dto>sendList=new ArrayList<>();

        for(int i=0;i<curList.size();i++){
            //check for experience
            boolean okExp=true;
            if(curList.get(i).getExperience()<requestDto.getExperience()){
                okExp=false;
            }
           //check for skills atleast one of selected
            boolean okSkills=false;
            if((requestDto.isJava() && curList.get(i).isJava()==requestDto.isJava())  ||
                    (requestDto.isPython() && curList.get(i).isPython()==requestDto.isPython()) ||
                    (requestDto.isReact() && curList.get(i).isReact()==requestDto.isReact())||
                    (requestDto.isAngular() && curList.get(i).isAngular()==requestDto.isAngular())||
                    (requestDto.isHtml() && curList.get(i).isHtml()==requestDto.isHtml())||
                    (requestDto.isCss() && curList.get(i).isCss()==requestDto.isCss()) ||
                    (requestDto.isJavascript() && curList.get(i).isJavascript()==requestDto.isJavascript())||
                    (requestDto.isSpringboot() && curList.get(i).isSpringboot()==requestDto.isSpringboot())){
                okSkills=true;
            }
//            if(!okSkills)okSkills=true;
            //check for bench period
            boolean okBench=true;
            if(curList.get(i).getBenchPeriod()/30<requestDto.getBenchPeriod()) {
                okBench = false;
            }
            if(requestDto.isByDefault()){
                sendList.add(curList.get(i));
            }else
            if(okExp && okSkills && okBench )
            {
                sendList.add(curList.get(i));
            }
        }
        return sendList;
    }

    private Dto convertEntityToDto(EmpDetails empDetails){
        Dto dto=new Dto();
        dto.setEmployeeId(empDetails.getId());
        dto.setEmployeeName(empDetails.getName());
        dto.setExperience(empDetails.getWorkExp());
        dto.setJava(empDetails.getSkill().getJava());
        dto.setPython(empDetails.getSkill().getPython());
        dto.setReact(empDetails.getSkill().getReact());
        dto.setAngular(empDetails.getSkill().getAngular());
        dto.setHtml(empDetails.getSkill().getHtml());
        dto.setCss(empDetails.getSkill().getCss());
        dto.setJavascript(empDetails.getSkill().getJavascript());
        dto.setSpringboot(empDetails.getSkill().getSpringboot());
        dto.setLocation(empDetails.getEmpLocation());
        dto.setBenchStatus(empDetails.getBenchStatus());
        String benchDate=empDetails.getBenchDate();
        String billableDate=empDetails.getBillableDate();
        dto.setActiveStatus(empDetails.getActive());
        dto.setBusinessUnit(empDetails.getBusinessUnit());
        dto.setEmail(empDetails.getEmail());
        dto.setBlocked(empDetails.getBlocked());
        if(benchDate==null)benchDate=DateTimeFormatter.ofPattern("yyyy-MM-dd").format(LocalDateTime.now());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try{
            Date d1 = sdf.parse(benchDate);
            String currentDate = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(LocalDateTime.now());
            Date d2 = sdf.parse(currentDate);
            long difference = d2.getTime() - d1.getTime();
            difference = (difference / (1000 * 60 * 60 * 24));
            if(difference >= 0 )
                dto.setBenchPeriod(difference);
            else dto.setBenchPeriod(0);
        }
        catch (ParseException e) {}


        return dto;


    }

    @Override
    public String updateEmployeeById(Long employeeId, EmpDetails empDetails) {
        EmpDetails empDetails1=empDetailsRepo.findById(employeeId).get();
        empDetails1.setName(empDetails.getName());
        empDetails1.setAddress(empDetails.getAddress());
        empDetails1.setPhoneNo(empDetails.getPhoneNo());
        empDetails1.setWorkExp(empDetails.getWorkExp());
        empDetails1.setBenchDate(empDetails.getBenchDate());
        empDetails1.setBillableDate(empDetails.getBillableDate());
        empDetails1.setBenchStatus(empDetails.getBenchStatus());
        empDetails1.setSkill(empDetails.getSkill());
        empDetails1.setInterviewDetails(empDetails.getInterviewDetails());
        empDetails1.setEmpLocation(empDetails.getEmpLocation());
        empDetails1.setActive(empDetails.getActive());
        empDetailsRepo.save(empDetails1);
        return "updated";
    }

    @Override
    public void saveResume(String originalFilename,Long employeeId) {
        EmpDetails empDetails2=empDetailsRepo.findById(employeeId).get();
        empDetails2.setResume(originalFilename);
        empDetailsRepo.save(empDetails2);

    }

}
