package com.example.Bench.Management.Project.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Location {
    @Id
    private long id;
    private String locName;

    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name="EmpLocId",
            referencedColumnName = "id"
    )
    private List<EmpDetails> EmployeeDetails;
    @ManyToMany(mappedBy = "assignedLocation", fetch = FetchType.LAZY,
         cascade = {
            CascadeType.PERSIST,
                 CascadeType.MERGE
         })
    @JsonIgnore
    private List<ManagerDetails> Managerset=new ArrayList<>();


}
