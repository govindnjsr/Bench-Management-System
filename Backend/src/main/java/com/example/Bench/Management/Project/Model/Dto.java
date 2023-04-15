package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Dto {
    @Id
     private long employeeId;
    private String employeeName;
     private long experience;
     private boolean java;
     private boolean python;
    private boolean react;
    private boolean angular;
    private boolean html;
    private boolean css;
    private boolean javascript;
    private boolean springboot;
    private long location;
    private boolean benchStatus;

}
