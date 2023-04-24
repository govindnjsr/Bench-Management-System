package com.example.Bench.Management.Project.Model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;

@Data
public class RequestDto {


//   private long experience;
   //first two filters
    private long experience;
    private long benchPeriod;
    //business unit
    private String businessUnit;
    //skills
    private boolean java;
    private boolean python;
    private boolean react;
    private boolean angular;
    private boolean html;
    private boolean css;
    private boolean javascript;
    private boolean springboot;
    //location
    private String location;
    //bench status
    private boolean benchStatus;
    private boolean activeStatus;
    private boolean blocked;

}
